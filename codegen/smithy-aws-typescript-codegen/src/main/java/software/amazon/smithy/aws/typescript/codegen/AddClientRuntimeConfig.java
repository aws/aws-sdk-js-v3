/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
 * All clients need to know the max attempt to retry a request and logger
 * instance to print the log.
 *
 * <p>This plugin adds the following config interface fields:
 *
 * <ul>
 *     <li>maxAttempts: Provides value for how many times a request will be
 *     made at most in case of retry.</li>
 *     <li>retryMode: Specifies which retry algorithm to use.</li>
 *     <li>logger: Optional logger for logging debug/info/warn/error.</li>
 *     <li>useDualstackEndpoint: Enables IPv6/IPv4 dualstack endpoint.</li>
 *     <li>useFipsEndpoint: Enables FIPS compatible endpoints.</li>
 * </ul>
 *
 * <p>This plugin adds the following Node runtime specific values:
 *
 * <ul>
 *     <li>maxAttempts: Uses the default maxAttempts provider that checks things
 *     like environment variables and the AWS config file.</li>
 *     <li>retryMode: Specifies which retry algorithm to use.</li>
 *     <li>logger: Sets to empty as logger is passed in client configuration.</li>
 *     <li>useDualstackEndpoint: Uses default useDualstackEndpoint provider.</li>
 *     <li>useFipsEndpoint: Uses default useFipsEndpoint provider.</li>
 * </ul>
 *
 * <p>This plugin adds the following Browser runtime specific values:
 *
 * <ul>
 *     <li>maxAttempts: Returns default value of 3.</li>
 *     <li>retryMode: Provider which returns DEFAULT_RETRY_MODE.</li>
 *     <li>logger: Sets to empty as logger is passed in client configuration.</li>
 *     <li>useDualstackEndpoint: Sets to false.</li>
 *     <li>useFipsEndpoint: Sets to false.</li>
 * </ul>
 */
@SmithyInternalApi
public final class AddClientRuntimeConfig implements TypeScriptIntegration {

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        writer.writeDocs("Enables IPv6/IPv4 dualstack endpoint.")
                .write("useDualstackEndpoint?: boolean | __Provider<boolean>;\n");
        writer.writeDocs("Enables FIPS compatible endpoints.")
                .write("useFipsEndpoint?: boolean | __Provider<boolean>;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        switch (target) {
            case BROWSER:
                return MapUtils.of(
                        "useDualstackEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("DEFAULT_USE_DUALSTACK_ENDPOINT", "DEFAULT_USE_DUALSTACK_ENDPOINT",
                                    TypeScriptDependency.CONFIG_RESOLVER.packageName);
                            writer.write("(() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT))");
                        },
                        "useFipsEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("DEFAULT_USE_FIPS_ENDPOINT", "DEFAULT_USE_FIPS_ENDPOINT",
                                    TypeScriptDependency.CONFIG_RESOLVER.packageName);
                            writer.write("(() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))");
                        }
                );
            case NODE:
                return MapUtils.of(
                        "useDualstackEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addImport("loadConfig", "loadNodeConfig",
                                    TypeScriptDependency.NODE_CONFIG_PROVIDER.packageName);
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS",
                                    "NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS",
                                    TypeScriptDependency.CONFIG_RESOLVER.packageName);
                            writer.write("loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS)");
                        },
                        "useFipsEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addImport("loadConfig", "loadNodeConfig",
                                    TypeScriptDependency.NODE_CONFIG_PROVIDER.packageName);
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS",
                                    "NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS",
                                    TypeScriptDependency.CONFIG_RESOLVER.packageName);
                            writer.write("loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)");
                        }
                );
            default:
                return Collections.emptyMap();
        }
    }
}
