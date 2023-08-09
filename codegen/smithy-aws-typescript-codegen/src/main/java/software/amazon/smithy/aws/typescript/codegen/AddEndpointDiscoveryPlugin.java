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

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import software.amazon.smithy.aws.traits.clientendpointdiscovery.ClientDiscoveredEndpointTrait;
import software.amazon.smithy.aws.traits.clientendpointdiscovery.ClientEndpointDiscoveryIdTrait;
import software.amazon.smithy.aws.traits.clientendpointdiscovery.ClientEndpointDiscoveryTrait;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds runtime plugins which handle endpoint discovery logic.
 */
@SmithyInternalApi
public class AddEndpointDiscoveryPlugin implements TypeScriptIntegration  {

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (hasClientEndpointDiscovery(service)) {
            // Add import for endpoint discovery command here, as getClientPlugins doesn't have access to writer.
            addEndpointDiscoveryCommandImport(model, symbolProvider, service, writer);
            writer.addImport("Provider", "__Provider", TypeScriptDependency.SMITHY_TYPES);
            writer.writeDocs("The provider which populates default for endpointDiscoveryEnabled configuration,"
                + " if it's\nnot passed during client creation.\n@internal")
                .write("endpointDiscoveryEnabledProvider?: __Provider<boolean | undefined>;\n");
        }
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_ENDPOINT_DISCOVERY.dependency,
                                "EndpointDiscovery", RuntimeClientPlugin.Convention.HAS_CONFIG)
                        .additionalResolveFunctionParamsSupplier((m, s, o) -> new HashMap<String, Object>() {{
                            put("endpointDiscoveryCommandCtor",
                                    Symbol.builder().name(getClientDiscoveryCommand(s)).build());
                        }})
                        .servicePredicate((m, s) -> hasClientEndpointDiscovery(s))
                        .build(),
                // ToDo: Pass the map of identifiers to the EndpointDiscovery plugin.
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_ENDPOINT_DISCOVERY.dependency,
                                "EndpointDiscovery", RuntimeClientPlugin.Convention.HAS_MIDDLEWARE)
                        .additionalPluginFunctionParamsSupplier((m, s, o) -> getPluginFunctionParams(m, s, o))
                        .operationPredicate((m, s, o) ->
                            isClientDiscoveredEndpointRequired(s, o) || isClientDiscoveredEndpointOptional(s, o)
                        ).build()
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
        if (!hasClientEndpointDiscovery(service)) {
            return Collections.emptyMap();
        }
        switch (target) {
            case BROWSER:
                return MapUtils.of(
                    "endpointDiscoveryEnabledProvider", writer -> {
                        writer.write("(() => Promise.resolve(undefined))");
                    }
                );
            case NODE:
                return MapUtils.of(
                    "endpointDiscoveryEnabledProvider", writer -> {
                        writer.addDependency(AwsDependency.MIDDLEWARE_ENDPOINT_DISCOVERY);
                        writer.addImport("NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS",
                                "NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS",
                                AwsDependency.MIDDLEWARE_ENDPOINT_DISCOVERY.packageName);
                        writer.write("loadNodeConfig(NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS)");
                    }
                );
            default:
                return Collections.emptyMap();
        }
    }

    private void addEndpointDiscoveryCommandImport(
            Model model,
            SymbolProvider symbolProvider,
            ServiceShape service,
            TypeScriptWriter writer
    ) {
        if (!hasClientEndpointDiscovery(service)) {
            throw new CodegenException(
                "EndpointDiscovery command import called for service without endpoint discovery"
            );
        }
        ShapeId operationShapeId = service.getTrait(ClientEndpointDiscoveryTrait.class).orElse(null).getOperation();
        OperationShape operation = model.expectShape(operationShapeId, OperationShape.class);
        writer.addUseImports(symbolProvider.toSymbol(operation));
    }

    private static boolean hasClientEndpointDiscovery(ServiceShape service) {
        if (service.hasTrait(ClientEndpointDiscoveryTrait.class)) {
            return true;
        }
        return false;
    }

    private static boolean isClientDiscoveredEndpointRequired(ServiceShape service, OperationShape operation) {
        if (hasClientEndpointDiscovery(service) && operation.hasTrait(ClientDiscoveredEndpointTrait.class)) {
            return operation.getTrait(ClientDiscoveredEndpointTrait.class).orElse(null).isRequired();
        }
        return false;
    }

    private static boolean isClientDiscoveredEndpointOptional(ServiceShape service, OperationShape operation) {
        if (!hasClientEndpointDiscovery(service) && operation.hasTrait(ClientDiscoveredEndpointTrait.class)) {
            return !operation.getTrait(ClientDiscoveredEndpointTrait.class).orElse(null).isRequired();
        }
        return false;
    }

    private static String getClientDiscoveryCommand(ServiceShape service) {
        if (!hasClientEndpointDiscovery(service)) {
            throw new CodegenException(
                "EndpointDiscovery command discovery attempt for service without endpoint discovery"
            );
        }
        return service.getTrait(ClientEndpointDiscoveryTrait.class).orElse(null).getOperation().getName() + "Command";
    }

    private static Map<String, Object> getPluginFunctionParams(
        Model model,
        ServiceShape serviceShape,
        OperationShape operationShape
    ) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("clientStack", Symbol.builder().name("clientStack").build());
        params.put("options", Symbol.builder().name("options").build());
        params.put("isDiscoveredEndpointRequired", isClientDiscoveredEndpointRequired(
            serviceShape, operationShape));

        OperationIndex operationIndex = OperationIndex.of(model);
        List membersWithClientEndpointDiscoveryId = getMembersWithClientEndpointDiscoveryId(
            operationIndex.getInput(operationShape)
        );

        if (!membersWithClientEndpointDiscoveryId.isEmpty()) {
            params.put("identifiers", getClientEndpointDiscoveryIdentifiers(membersWithClientEndpointDiscoveryId));
        }
        return params;
    }

    private static String getClientEndpointDiscoveryIdentifiers(
        List<MemberShape> membersWithClientEndpointDiscoveryId
    ) {
        return membersWithClientEndpointDiscoveryId.stream()
            .map(member -> member.getMemberName() + ": input." + member.getMemberName())
            .collect(Collectors.joining(", ", "{", "}"));
    }

    private static List<MemberShape> getMembersWithClientEndpointDiscoveryId(
        Optional<StructureShape> optionalShape
    ) {
        List<MemberShape> membersWithClientEndpointDiscoveryId = new ArrayList<>();
        if (optionalShape.isPresent()) {
            StructureShape structureShape = optionalShape.get();
            for (MemberShape member : structureShape.getAllMembers().values()) {
                if (member.getTrait(ClientEndpointDiscoveryIdTrait.class).isPresent()) {
                    membersWithClientEndpointDiscoveryId.add(member);
                }
            }
        }
        return membersWithClientEndpointDiscoveryId;
    }
}
