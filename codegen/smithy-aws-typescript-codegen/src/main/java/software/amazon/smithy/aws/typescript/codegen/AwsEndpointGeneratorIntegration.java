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

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isEndpointsV2Service;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates an endpoint resolver from endpoints.json.
 */
@SmithyInternalApi
public final class AwsEndpointGeneratorIntegration implements TypeScriptIntegration {

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        TypeScriptSettings settings = codegenContext.settings();
        Model model = codegenContext.model();
        SymbolProvider symbolProvider = codegenContext.symbolProvider();
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory = codegenContext.writerDelegator()::useFileWriter;

        writeAdditionalFiles(settings, model, symbolProvider, writerFactory);
    }

    private void writeAdditionalFiles(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        if (
            settings.generateClient() &&
            isAwsService(settings, model) &&
            settings.getService(model).hasTrait(EndpointRuleSetTrait.class)
        ) {
            writerFactory.accept(
                Paths.get(CodegenUtils.SOURCE_FOLDER, "endpoint", "endpointResolver.ts").toString(),
                writer -> {
                    writer.addDependency(TypeScriptDependency.UTIL_ENDPOINTS);
                    writer.addDependency(AwsDependency.UTIL_ENDPOINTS);

                    writer.addImport("customEndpointFunctions", null, TypeScriptDependency.UTIL_ENDPOINTS);
                    writer.addImport("awsEndpointFunctions", null, AwsDependency.UTIL_ENDPOINTS);
                    writer.write("customEndpointFunctions.aws = awsEndpointFunctions;");
                }
            );
        }
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        if (!settings.generateClient() || !isAwsService(settings, model)) {
            return;
        }

        ServiceShape service = settings.getService(model);
        if (isEndpointsV2Service(service)) {
            new ArrayList<String>() {
                {
                    add("ClientInputEndpointParameters");
                    add("ClientResolvedEndpointParameters");
                    add("resolveClientEndpointParameters");
                    add("EndpointParameters");
                }
            }
                .forEach(name ->
                    writer.addImport(
                        name,
                        null,
                        Paths.get(".", CodegenUtils.SOURCE_FOLDER, "endpoint/EndpointParameters").toString()
                    )
                );

            writer.addImport("EndpointV2", "__EndpointV2", TypeScriptDependency.SMITHY_TYPES);
        } else {
            writer.addImport("RegionInfoProvider", null, TypeScriptDependency.SMITHY_TYPES);
            writer.writeDocs(
                "Fetch related hostname, signing name or signing region with given region.\n" + "@internal"
            );
            writer.write("regionInfoProvider?: RegionInfoProvider;\n");
        }
    }
}
