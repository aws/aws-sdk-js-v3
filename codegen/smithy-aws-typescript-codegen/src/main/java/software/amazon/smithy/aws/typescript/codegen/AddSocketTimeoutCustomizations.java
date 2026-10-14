/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * JS-7140: bakes a default socket read/write (inactivity) timeout into each
 * generated client, per the "AWS SDK Socket Read Timeout Risk Mitigation"
 * design.
 *
 * <p>Every service is sorted into one of three tiers, keyed by {@code sdkId},
 * from the shared exemption artifact {@code socket-timeout-exclusions.json}:
 * <ul>
 *   <li>Fully exempt ({@code -1}) &rarr; no default timeout emitted (behavior unchanged).</li>
 *   <li>Partial ({@code 900000} = 15 min) &rarr; long-hold services.</li>
 *   <li>Unlisted &rarr; the general {@code 300000} (5 min) default.</li>
 * </ul>
 *
 * <p>The request handler input is wrapped in {@code withDefaultSocketTimeout} from
 * {@code @aws-sdk/core/client}, which applies the tier only when
 * {@code AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026} is {@code "true"}. Caller keys win, so
 * an explicit caller timeout takes precedence, and caller options without a timeout
 * still receive the default. Browser applications set the env var through their
 * bundler. React Native inherits the browser config.
 *
 * <p>This integration writes {@code requestHandler} only where no other integration
 * does: Node services without HTTP/2 event streams ({@code AddHttp2Dependency} owns
 * those and applies the tier itself) and browser services without WebSocket support
 * ({@code AddWebsocketPlugin} owns those; its handler has no idle timeout).
 *
 * <p>There is no internal-on-by-default: NpmPrettyMuch serves internal builds the
 * same published artifact as public npm, so internal fleets opt in by setting the
 * same env var.
 */
@SmithyInternalApi
public class AddSocketTimeoutCustomizations implements TypeScriptIntegration {

    static final String EXCLUSIONS_RESOURCE =
        "software/amazon/smithy/aws/typescript/codegen/socket-timeout-exclusions.json";

    /** The general 5-minute default applied to every unlisted service. */
    static final int DEFAULT_SOCKET_TIMEOUT_MS = 300_000;

    /** Sentinel in the exclusions table meaning "fully exempt, emit nothing". */
    static final int FULLY_EXEMPT = -1;

    private static volatile ObjectNode exclusions;

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        if (!emitsFor(target, model, service)) {
            return Collections.emptyMap();
        }
        return MapUtils.of("requestHandler", requestHandlerWriter(target, resolveTimeoutMs(service)));
    }

    /** The requestHandler writer for a Node or browser service that emits. */
    static Consumer<TypeScriptWriter> requestHandlerWriter(LanguageTarget target, int timeoutMs) {
        return writer -> {
            if (target.equals(LanguageTarget.BROWSER)) {
                writer.addImport("FetchHttpHandler", "RequestHandler", TypeScriptDependency.AWS_SDK_FETCH_HTTP_HANDLER);
            } else {
                writer.addImport("NodeHttpHandler", "RequestHandler", TypeScriptDependency.AWS_SDK_NODE_HTTP_HANDLER);
            }
            addHelperImport(writer);
            if (target.equals(LanguageTarget.BROWSER)) {
                writer.write(
                    "RequestHandler.create(withDefaultSocketTimeout(config?.requestHandler ?? defaultConfigProvider, $L))",
                    timeoutMs
                );
            } else {
                // NodeHttpHandler applies defaultSocketTimeout on its own idle timer, leaving a
                // caller's socketTimeout and its existing behavior unchanged.
                writer.write(
                    "RequestHandler.create(withDefaultSocketTimeout(config?.requestHandler ?? defaultConfigProvider, $L, $S))",
                    timeoutMs,
                    "defaultSocketTimeout"
                );
            }
        };
    }

    /**
     * Whether this integration writes {@code requestHandler} for the target and service.
     *
     * <p>Only NODE and BROWSER define {@code requestHandler}; REACT_NATIVE inherits the
     * browser config. Fully exempt services, Node HTTP/2 event-stream services, and
     * browser WebSocket services are skipped.
     */
    boolean emitsFor(LanguageTarget target, Model model, ServiceShape service) {
        if (resolveTimeoutMs(service) == FULLY_EXEMPT) {
            return false;
        }
        if (target.equals(LanguageTarget.NODE)) {
            return !AddHttp2Dependency.isHttp2Applicable(model, service);
        }
        if (target.equals(LanguageTarget.BROWSER)) {
            return !AddWebsocketPlugin.isWebsocketSupported(service);
        }
        return false;
    }

    /** Imports the gated helper from {@code @aws-sdk/core/client}. */
    static void addHelperImport(TypeScriptWriter writer) {
        writer.addImportSubmodule("withDefaultSocketTimeout", null, AwsDependency.AWS_SDK_CORE, "/client");
    }

    /**
     * Returns the tiered timeout in ms for the service: the value from the
     * exclusions table when listed ({@code -1} = fully exempt, {@code 900000}
     * = partial), or {@link #DEFAULT_SOCKET_TIMEOUT_MS} when unlisted.
     */
    static int resolveTimeoutMs(ServiceShape service) {
        String sdkId = service.getTrait(ServiceTrait.class)
            .map(ServiceTrait::getSdkId)
            .orElse("");
        return loadExclusions()
            .getMember(sdkId)
            .map(node -> node.expectNumberNode().getValue().intValue())
            .orElse(DEFAULT_SOCKET_TIMEOUT_MS);
    }

    private static ObjectNode loadExclusions() {
        ObjectNode local = exclusions;
        if (local != null) {
            return local;
        }
        synchronized (AddSocketTimeoutCustomizations.class) {
            if (exclusions == null) {
                try (
                    InputStream is = AddSocketTimeoutCustomizations.class.getClassLoader()
                        .getResourceAsStream(EXCLUSIONS_RESOURCE)
                ) {
                    if (is == null) {
                        throw new IllegalStateException(
                            "Missing socket timeout exclusions artifact: " + EXCLUSIONS_RESOURCE
                        );
                    }
                    exclusions = Node.parse(new String(is.readAllBytes(), StandardCharsets.UTF_8)).expectObjectNode();
                } catch (IOException e) {
                    throw new UncheckedIOException(
                        "Failed to read socket timeout exclusions artifact: " + EXCLUSIONS_RESOURCE,
                        e
                    );
                }
            }
            return exclusions;
        }
    }
}
