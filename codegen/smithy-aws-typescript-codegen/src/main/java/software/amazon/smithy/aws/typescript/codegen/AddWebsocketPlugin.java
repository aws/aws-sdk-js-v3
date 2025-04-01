/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.http.integration.AddHttpAuthSchemePlugin;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add client plugins and configs to support WebSocket streaming. Services like Transcribe Streaming requires extra
 * customization.
 **/
@SmithyInternalApi
public class AddWebsocketPlugin implements TypeScriptIntegration {

    @Override
    public List<String> runAfter() {
        return List.of(
            AddHttpAuthSchemePlugin.class.getCanonicalName(),
            AddBuiltinPlugins.class.getCanonicalName(),
            AddEndpointsPlugin.class.getCanonicalName()
        );
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_WEBSOCKET.dependency,
                                "WebSocket", RuntimeClientPlugin.Convention.HAS_MIDDLEWARE)
                        .additionalPluginFunctionParamsSupplier((m, s, o) -> getPluginFunctionParams(m, s, o))
                        .operationPredicate((m, s, o) -> isWebsocketSupported(s)
                            && AddEventStreamHandlingDependency.hasEventStreamInput(m, o))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_WEBSOCKET.dependency, "WebSocket",
                                RuntimeClientPlugin.Convention.HAS_CONFIG)
                        .servicePredicate((m, s) -> isWebsocketSupported(s))
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
        if (!isWebsocketSupported(service)) {
            return Collections.emptyMap();
        }
        switch (target) {
            case BROWSER:
                return MapUtils.of(
                    "eventStreamPayloadHandlerProvider", writer -> {
                            writer.addDependency(AwsDependency.MIDDLEWARE_WEBSOCKET);
                            writer.addImport("eventStreamPayloadHandlerProvider", "eventStreamPayloadHandlerProvider",
                                AwsDependency.MIDDLEWARE_WEBSOCKET);
                            writer.write("eventStreamPayloadHandlerProvider");
                    },
                    "requestHandler", writer -> {
                            writer.addImport("FetchHttpHandler", "HttpRequestHandler",
                                TypeScriptDependency.AWS_SDK_FETCH_HTTP_HANDLER);
                            writer.addDependency(TypeScriptDependency.AWS_SDK_FETCH_HTTP_HANDLER);
                            writer
                                .addImport(
                                    "WebSocketFetchHandler",
                                    "WebSocketRequestHandler",
                                    AwsDependency.MIDDLEWARE_WEBSOCKET
                                )
                                .addImport(
                                    "WebSocketFetchHandlerOptions",
                                    null,
                                    AwsDependency.MIDDLEWARE_WEBSOCKET
                                );
                            writer.addDependency(AwsDependency.MIDDLEWARE_WEBSOCKET);
                            writer.write(
                                """
                                WebSocketRequestHandler.create(
                                    config?.requestHandler as
                                        WebSocketRequestHandler |
                                        WebSocketFetchHandlerOptions |
                                        (() => Promise<WebSocketFetchHandlerOptions>)
                                      ?? defaultConfigProvider,
                                    HttpRequestHandler.create(defaultConfigProvider)
                                )
                                """
                            );
                    });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isWebsocketSupported(ServiceShape service) {
        Set<String> websocketServices = SetUtils.of("Transcribe Streaming", "RekognitionStreaming");
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return websocketServices.contains(serviceId);
    }

    private static Map<String, Object> getPluginFunctionParams(
        Model model,
        ServiceShape service,
        OperationShape operation
    ) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        if (serviceId.equals("Transcribe Streaming")) {
            return MapUtils.of("headerPrefix", "x-amzn-transcribe-");
        } else if (serviceId.equals("RekognitionStreaming")) {
            return MapUtils.of("headerPrefix", "x-amz-rekognition-streaming-liveness-");
        } else {
            throw new CodegenException("Missing endpoint prefix for Websocket plugin of service " + serviceId);
        }
    }
}
