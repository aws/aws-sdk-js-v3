/*
 * Copyright 2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add config to support injecting endpoint.
 */
@SmithyInternalApi
public class AddEndpointDependency implements TypeScriptIntegration {
    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        switch (target) {
            case NODE:
                return MapUtils.of("endpoint", writer -> {
                    writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                    writer.addImport("loadConfig", "loadNodeConfig",
                            TypeScriptDependency.NODE_CONFIG_PROVIDER);

                    writer.addDependency(TypeScriptDependency.AWS_SDK_UTIL_ENDPOINTS);
                    writer.addImport("getEndpointUrlConfig", "getEndpointUrlConfig",
                            TypeScriptDependency.AWS_SDK_UTIL_ENDPOINTS);

                    String serviceId = settings.getService(model).getTrait(ServiceTrait.class)
                        .map(ServiceTrait::getSdkId)
                        .orElse("");

                    writer.write("loadNodeConfig(getEndpointUrlConfig($S))", serviceId);
                });
            default:
                return Collections.emptyMap();
        }
    }
}
