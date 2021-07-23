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

import java.util.Collections;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates an endpoint resolver from endpoints.json.
 */
@SmithyInternalApi
public final class AwsEndpointGeneratorIntegration implements TypeScriptIntegration {
    @Override
    public void writeAdditionalFiles(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        if (!settings.generateClient() || !isAwsService(settings, model)) {
            return;
        }

        writerFactory.accept("endpoints.ts", writer -> {
            new EndpointGenerator(settings.getService(model), writer).run();
        });
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

        writer.addImport("RegionInfoProvider", "RegionInfoProvider", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.writeDocs("Fetch related hostname, signing name or signing region with given region.\n"
                        + "@internal");
        writer.write("regionInfoProvider?: RegionInfoProvider;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        if (!settings.generateClient() || !isAwsService(settings, model)) {
            return Collections.emptyMap();
        }

        switch (target) {
            case SHARED:
                return MapUtils.of("regionInfoProvider", writer -> {
                    writer.addImport("defaultRegionInfoProvider", "defaultRegionInfoProvider", "./endpoints");
                    writer.write("defaultRegionInfoProvider");
                });
            default:
                return Collections.emptyMap();
        }
    }
}
