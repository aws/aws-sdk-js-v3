/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.SmithyCoreSubmodules;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds long poll designator for specific operations.
 * Adds custom retry defaults for DynamoDB (baseDelay: 25ms, maxAttempts: 4).
 */
@SmithyInternalApi
public class AddRetryCustomizations implements TypeScriptIntegration {

    @Override
    public byte priority() {
        // Run after the default retry runtime config writer so our maxAttempts override takes effect.
        return -1;
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return List.of(
            RuntimeClientPlugin.builder()
                .pluginFunction(
                    Symbol.builder()
                        .namespace(AwsDependency.AWS_SDK_CORE.getPackageName() + "/client", "/")
                        .name("getLongPollPlugin")
                        .addDependency(AwsDependency.AWS_SDK_CORE)
                        .build()
                )
                .operationPredicate((m, s, o) -> isLongPoll(s, o))
                .build()
        );
    }

    @Override
    public void mutateClientPlugins(List<RuntimeClientPlugin> plugins) {
        for (int i = 0; i < plugins.size(); i++) {
            RuntimeClientPlugin plugin = plugins.get(i);
            if (
                plugin.getResolveFunction().isPresent()
                    && plugin.getResolveFunction().get().getSymbol().getName().equals("resolveRetryConfig")
            ) {
                plugins.set(
                    i,
                    plugin.toBuilder()
                        .additionalResolveFunctionParamsSupplier((model, service, operation) -> {
                            if (service != null && isDynamoDB(service)) {
                                return Map.of(
                                    "defaultMaxAttempts",
                                    Symbol.builder()
                                        .name("Retry.v2026 ? 4 : undefined")
                                        .build(),
                                    "defaultBaseDelay",
                                    Symbol.builder()
                                        .name("Retry.v2026 ? 25 : undefined")
                                        .build()
                                );
                            }
                            return Collections.emptyMap();
                        })
                        .build()
                );
                break;
            }
        }
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (isDynamoDB(service)) {
            writer.addImportSubmodule("Retry", null, TypeScriptDependency.SMITHY_CORE, SmithyCoreSubmodules.RETRY);
        }
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        if (isDynamoDB(service)) {
            Map<String, Consumer<TypeScriptWriter>> configs = new HashMap<>();
            if (target.equals(LanguageTarget.NODE)) {
                configs.put("maxAttempts", writer -> {
                    writer.addImportSubmodule(
                        "NODE_MAX_ATTEMPT_CONFIG_OPTIONS",
                        null,
                        TypeScriptDependency.SMITHY_CORE,
                        SmithyCoreSubmodules.RETRY
                    );
                    writer.addImportSubmodule(
                        "Retry",
                        null,
                        TypeScriptDependency.SMITHY_CORE,
                        SmithyCoreSubmodules.RETRY
                    );
                    writer.write(
                        "loadNodeConfig("
                            + "Retry.v2026 ? { ...NODE_MAX_ATTEMPT_CONFIG_OPTIONS, default: 4 }"
                            + " : NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config)"
                    );
                });
            } else if (target.equals(LanguageTarget.BROWSER)) {
                configs.put("maxAttempts", writer -> {
                    writer.addImportSubmodule(
                        "Retry",
                        null,
                        TypeScriptDependency.SMITHY_CORE,
                        SmithyCoreSubmodules.RETRY
                    );
                    writer.addImportSubmodule(
                        "DEFAULT_MAX_ATTEMPTS",
                        null,
                        TypeScriptDependency.SMITHY_CORE,
                        SmithyCoreSubmodules.RETRY
                    );
                    writer.write("(Retry.v2026 ? 4 : DEFAULT_MAX_ATTEMPTS)");
                });
            }
            return configs;
        }
        return Collections.emptyMap();
    }

    private static boolean isDynamoDB(Shape serviceShape) {
        String sdkId = serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return sdkId.equals("DynamoDB") || sdkId.equals("DynamoDB Streams");
    }

    private static boolean isLongPoll(ServiceShape service, OperationShape operation) {
        String sdkId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        String opName = operation.getId().getName(service);
        return switch (sdkId) {
            case "SQS" -> opName.equals("ReceiveMessage");
            case "SWF" -> opName.equals("PollForActivityTask") || opName.equals("PollForDecisionTask");
            case "SFN" -> opName.equals("GetActivityTask");
            default -> false;
        };
    }
}
