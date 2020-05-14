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

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.EventStreamIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;

/**
 * Adds runtime client plugins that handle the eventstream flow in request,
 * including eventstream payload signing.
 */
public class AddEventStreamHandlingDependency implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_EVENTSTREAM.dependency,
                                "EventStream", HAS_CONFIG)
                        .servicePredicate(AddEventStreamHandlingDependency::hasEventStreamInput)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_EVENTSTREAM.dependency,
                                "EventStream", HAS_MIDDLEWARE)
                        .operationPredicate(AddEventStreamHandlingDependency::hasEventStreamInput)
                        .build()
        );
    }

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        if (hasEventStreamInput(model, settings.getService(model))) {
            writer.addImport("EventStreamPayloadHandlerProvider", "__EventStreamPayloadHandlerProvider",
                    TypeScriptDependency.AWS_SDK_TYPES.packageName);
            writer.writeDocs("The function that provides necessary utilities for handling request event stream.");
            writer.write("eventStreamPayloadHandlerProvider?: __EventStreamPayloadHandlerProvider;\n");
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
        if (!hasEventStreamInput(model, service)) {
            return Collections.emptyMap();
        }

        switch (target) {
            case NODE:
                return MapUtils.of("eventStreamPayloadHandlerProvider", writer -> {
                    writer.addDependency(AwsDependency.AWS_SDK_EVENTSTREAM_HANDLER_NODE);
                    writer.addImport("eventStreamPayloadHandlerProvider", "eventStreamPayloadHandlerProvider",
                            AwsDependency.AWS_SDK_EVENTSTREAM_HANDLER_NODE.packageName);
                    writer.write("eventStreamPayloadHandlerProvider,");
                });
            case BROWSER:
                /**
                 * Browser doesn't support streaming requests as of March 2020.
                 * Each service client needs to support eventstream request in browser individually.
                 * Services like TranscribeStreaming support it via WebSocket.
                 */
                return MapUtils.of("eventStreamPayloadHandlerProvider", writer -> {
                    writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                    writer.addImport("invalidFunction", "invalidFunction",
                            TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                    writer.openBlock("eventStreamPayloadHandlerProvider: () => ({", "}),", () -> {
                        writer.write("handle: invalidFunction(\"event stream request is not supported in browser.\"),");
                    });
                });
            case REACT_NATIVE:
                /**
                 * ReactNative doesn't support streaming requests as of March 2020.
                 * Here we don't supply invalidFunction. Each service client needs to support eventstream request
                 * in RN has to implement a customization providing its own eventStreamSignerProvider
                 */
                return MapUtils.of("eventStreamPayloadHandlerProvider", writer -> {
                    writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                    writer.addImport("invalidFunction", "invalidFunction",
                            TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                    writer.openBlock("eventStreamPayloadHandlerProvider: () => ({", "}),", () -> {
                        writer.write("handle: invalidFunction(\"event stream request "
                                + "is not supported in ReactNative.\"),");
                    });
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean hasEventStreamInput(Model model, ServiceShape service) {
        TopDownIndex topDownIndex = model.getKnowledge(TopDownIndex.class);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        EventStreamIndex eventStreamIndex = model.getKnowledge(EventStreamIndex.class);
        for (OperationShape operation : operations) {
            if (eventStreamIndex.getInputInfo(operation).isPresent()) {
                return true;
            }
        }
        return false;
    }

    private static boolean hasEventStreamInput(Model model, ServiceShape service, OperationShape operation) {
        EventStreamIndex eventStreamIndex = model.getKnowledge(EventStreamIndex.class);
        return eventStreamIndex.getInputInfo(operation).isPresent();
    }
}
