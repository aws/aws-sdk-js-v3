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
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add client plugins and configs to support WebSocket streaming for Rekognition
 * Streaming service.
 **/
@SmithyInternalApi
public class AddRekognitionStreamingDependency implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.REKOGNITION_STREAMING_MIDDLEWARE.dependency,
                                "RekognitionStreaming", RuntimeClientPlugin.Convention.HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> isRekognitionStreaming(s))
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
        if (!isRekognitionStreaming(service)) {
            return Collections.emptyMap();
        }

        switch (target) {
            case REACT_NATIVE:
            case BROWSER:
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isRekognitionStreaming(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return serviceId.equals("RekognitionStreaming");
    }
}


