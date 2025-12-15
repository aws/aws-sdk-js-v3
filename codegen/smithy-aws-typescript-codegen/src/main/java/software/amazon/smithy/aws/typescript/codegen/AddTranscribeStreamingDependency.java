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
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add client plugins and configs to support WebSocket streaming for Transcribe
 * Streaming service.
 **/
@SmithyInternalApi
public class AddTranscribeStreamingDependency implements TypeScriptIntegration {

    @Override
    public List<String> runAfter() {
        return List.of(
            AddBuiltinPlugins.class.getCanonicalName(),
            AddEventStreamHandlingDependency.class.getCanonicalName()
        );
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(
                    AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE.dependency,
                    "TranscribeStreaming",
                    RuntimeClientPlugin.Convention.HAS_MIDDLEWARE
                )
                .operationPredicate(
                    (m, s, o) -> isTranscribeStreaming(s)
                        && AddEventStreamHandlingDependency.hasEventStreamInput(m, o)
                )
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
        ServiceShape service = settings.getService(model);
        if (!isTranscribeStreaming(service)) {
            return Collections.emptyMap();
        }

        Map<String, Consumer<TypeScriptWriter>> transcribeStreamingHandlerConfig = MapUtils.of(
            "eventStreamPayloadHandlerProvider",
            writer -> {
                writer.addDependency(AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE);
                writer.addImport(
                    "eventStreamPayloadHandler",
                    "eventStreamPayloadHandler",
                    AwsDependency.TRANSCRIBE_STREAMING_MIDDLEWARE
                );
                writer.write("(() => eventStreamPayloadHandler)");
            }
        );

        switch (target) {
            case REACT_NATIVE:
            case BROWSER:
                return transcribeStreamingHandlerConfig;
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isTranscribeStreaming(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return serviceId.equals("Transcribe Streaming");
    }
}
