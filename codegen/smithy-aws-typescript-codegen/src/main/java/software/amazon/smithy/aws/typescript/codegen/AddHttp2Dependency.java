/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.ServiceIndex;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.Trait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddHttp2Dependency implements TypeScriptIntegration {
    @Override
    public List<String> runAfter() {
        // smithy-typescript's AddHttp2Dependency writes the same requestHandler key; this
        // one must win so the JS-7140 default socket timeout is applied for h2 services.
        return List.of("software.amazon.smithy.typescript.codegen.integration.AddHttp2Dependency");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        if (!isHttp2Applicable(model, settings.getService(model))) {
            return Collections.emptyMap();
        }
        switch (target) {
            case NODE:
                int timeoutMs = AddSocketTimeoutCustomizations.resolveTimeoutMs(settings.getService(model));
                return MapUtils.of("requestHandler", writer -> {
                    writer.addDependency(TypeScriptDependency.AWS_SDK_NODE_HTTP_HANDLER);
                    writer.addImport(
                        "NodeHttp2Handler",
                        "RequestHandler",
                        TypeScriptDependency.AWS_SDK_NODE_HTTP_HANDLER
                    );
                    Runnable defaults = () -> {
                        writer.write("...await defaultConfigProvider(),");
                        // TODO: remove this when root cause of #3809 is found
                        writer.write("disableConcurrentStreams: true");
                    };
                    if (timeoutMs == AddSocketTimeoutCustomizations.FULLY_EXEMPT) {
                        writer.openBlock(
                            "RequestHandler.create(config?.requestHandler ?? (async () => ({",
                            "})))",
                            defaults
                        );
                        return;
                    }
                    // JS-7140: NodeHttp2Handler applies defaultSocketTimeout on its own stream idle
                    // timer, separate from requestTimeout; the helper applies it only when gated on.
                    AddSocketTimeoutCustomizations.addHelperImport(writer);
                    writer.openBlock(
                        "RequestHandler.create(withDefaultSocketTimeout(config?.requestHandler ?? (async () => ({",
                        "})), " + timeoutMs + ", \"defaultSocketTimeout\"))",
                        defaults
                    );
                });
            default:
                return Collections.emptyMap();
        }
    }

    /**
     * Whether any protocol trait on the service lists {@code h2} in {@code eventStreamHttp}.
     * The same check as smithy-typescript's AddHttp2Dependency, so both integrations select
     * the same services.
     */
    static boolean isHttp2Applicable(Model model, ServiceShape service) {
        for (ShapeId protocolId : ServiceIndex.of(model).getProtocols(service).keySet()) {
            Trait trait = service.findTrait(protocolId).orElse(null);
            if (trait == null || !trait.toNode().isObjectNode()) {
                continue;
            }
            boolean h2 = trait.toNode()
                .expectObjectNode()
                .getArrayMember("eventStreamHttp")
                .map(
                    list -> list.getElements()
                        .stream()
                        .anyMatch(e -> e.isStringNode() && e.expectStringNode().getValue().equals("h2"))
                )
                .orElse(false);
            if (h2) {
                return true;
            }
        }
        return false;
    }
}
