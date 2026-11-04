/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.Locale;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Writes the Node defaultSocketTimeout with the service's default socket timeout from
 * socket-timeout-exclusions.json. The client offers it to its request handler.
 */
@SmithyInternalApi
public class AddSocketTimeoutCustomizations implements TypeScriptIntegration {

    /** The general 5-minute default applied to every unlisted service. */
    static final int DEFAULT_SOCKET_TIMEOUT_MS = 300_000;

    /** Exclusions table value for services that get no default socket timeout. */
    static final int FULLY_EXEMPT = -1;

    private static final ObjectNode EXCLUSIONS = Node.parse(
        IoUtils.readUtf8Resource(AddSocketTimeoutCustomizations.class, "socket-timeout-exclusions.json")
    ).expectObjectNode();

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        int timeoutMs = resolveTimeoutMs(settings.getService(model));
        if (!target.equals(LanguageTarget.NODE) || timeoutMs == FULLY_EXEMPT) {
            return Collections.emptyMap();
        }
        return MapUtils.of("defaultSocketTimeout", defaultSocketTimeoutWriter(timeoutMs));
    }

    static Consumer<TypeScriptWriter> defaultSocketTimeoutWriter(int timeoutMs) {
        return writer -> {
            writer.addImportSubmodule("getDefaultSocketTimeout", null, AwsDependency.AWS_SDK_CORE, "/client");
            writer.write("getDefaultSocketTimeout(config?.requestHandler, $L)", withNumericSeparators(timeoutMs));
        };
    }

    /** Formats a millisecond count with numeric separators, e.g. 300000 as 300_000. */
    static String withNumericSeparators(int value) {
        return String.format(Locale.ROOT, "%,d", value).replace(',', '_');
    }

    /**
     * The service's timeout from the exclusions table by sdkId, or
     * {@link #DEFAULT_SOCKET_TIMEOUT_MS} when unlisted.
     */
    static int resolveTimeoutMs(ServiceShape service) {
        String sdkId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return EXCLUSIONS.getNumberMemberOrDefault(sdkId, DEFAULT_SOCKET_TIMEOUT_MS).intValue();
    }
}
