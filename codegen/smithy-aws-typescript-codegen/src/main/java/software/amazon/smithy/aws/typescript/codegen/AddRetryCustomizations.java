/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
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
 * Adds custom retryStrategy for DynamoDB.
 */
@SmithyInternalApi
public class AddRetryCustomizations implements TypeScriptIntegration {

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
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        if (LanguageTarget.SHARED.equals(target) && isDynamoDB(settings.getService(model))) {
            return Map.of(
                "retryStrategy",
                (w) -> {
                    w.addImportSubmodule(
                        "StandardRetryStrategy",
                        null,
                        TypeScriptDependency.SMITHY_CORE,
                        SmithyCoreSubmodules.RETRY
                    );
                    w.addImportSubmodule("Retry", null, TypeScriptDependency.SMITHY_CORE, SmithyCoreSubmodules.RETRY);

                    // todo(retry): Retry.v2026 condition can be removed when made permanent.
                    w.write("""
                            (
                              config?.maxAttempts == null && config?.retryMode == null && Retry.v2026
                                ? new StandardRetryStrategy({
                                    maxAttempts: 4,
                                    baseDelay: 25,
                                  })
                                : undefined
                            )""");
                }
            );
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
