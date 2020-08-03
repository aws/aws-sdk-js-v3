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
import java.util.Map;
import java.util.function.Consumer;

import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;

/**
 * AWS S3 client configuration.
 */
public final class AddS3Config implements TypeScriptIntegration {

    @Override
    public void addConfigInterfaceFields(TypeScriptSettings settings, Model model, SymbolProvider symbolProvider,
            TypeScriptWriter writer) {
        if (!needsS3Config(settings.getService(model))) {
            return;
        }
        writer.writeDocs("Whether to escape request path when signing the request.")
                .write("signingEscapePath?: boolean;\n");
        writer.writeDocs(
                "Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false.")
                .addImport("Provider", "Provider", TypeScriptDependency.AWS_SDK_TYPES.packageName)
                .write("useArnRegion?: boolean | Provider<boolean>;");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(TypeScriptSettings settings, Model model,
            SymbolProvider symbolProvider, LanguageTarget target) {
        if (!needsS3Config(settings.getService(model))) {
            return Collections.emptyMap();
        }
        switch (target) {
            case SHARED:
                return MapUtils.of("signingEscapePath", writer -> {
                    writer.write("signingEscapePath: false,");
                }, "useArnRegion", writer -> {
                    writer.write("useArnRegion: false");
                });
            case NODE:
                return MapUtils.of("useArnRegion", writer -> {
                    writer.addDependency(AwsDependency.NODE_CONFIG_PROVIDER)
                            .addImport("loadConfig", "loadNodeConfig", AwsDependency.NODE_CONFIG_PROVIDER.packageName)
                            .addDependency(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE)
                            .addImport("NODE_USE_ARN_REGION_CONFIG_OPTIONS", "NODE_USE_ARN_REGION_CONFIG_OPTIONS",
                                    AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE.packageName)
                            .write("useArnRegion: loadNodeConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS),");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean needsS3Config(ServiceShape service) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        return serviceId.equals("S3");
    }
}
