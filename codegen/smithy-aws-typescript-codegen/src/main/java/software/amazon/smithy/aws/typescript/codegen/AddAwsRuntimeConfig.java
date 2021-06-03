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
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.logging.Logger;
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
import software.amazon.smithy.utils.SmithyInternalApi;

// TODO: This javadoc is specific to needs of AWS client. However it has elements that would be needed by non-AWS
// clients too, like logger, region for SigV4. We should refactor these into different Integration or rename this
// class to be generic.
/**
 * AWS clients need to know the service name for collecting metrics, the
 * region name used to resolve endpoints, the max attempt to retry a request
 * and logger instance to print the log.
 *
 * <p>This plugin adds the following config interface fields:
 *
 * <ul>
 *     <li>serviceId: Unique name to identify the service.</li>
 *     <li>region: The AWS region to which this client will send requests</li>
 *     <li>maxAttempts: Provides value for how many times a request will be
 *     made at most in case of retry.</li>
 *     <li>retryModeProvider: Specifies provider for retry algorithm to use.</li>
 *     <li>logger: Optional logger for logging debug/info/warn/error.</li>
 * </ul>
 *
 * <p>This plugin adds the following Node runtime specific values:
 *
 * <ul>
 *     <li>serviceId: Unique name to identify the service.</li>
 *     <li>region: Uses the default region provider that checks things like
 *      environment variables and the AWS config file.</li>
 *     <li>maxAttempts: Uses the default maxAttempts provider that checks things
 *     like environment variables and the AWS config file.</li>
 *     <li>retryModeProvider: Specifies provider for retry algorithm to use.</li>
 *     <li>logger: Sets to empty as logger is passed in client configuration</li>
 * </ul>
 *
 * <p>This plugin adds the following Browser runtime specific values:
 *
 * <ul>
 *     <li>serviceId: Unique name to identify the service.</li>
 *     <li>region: Throws an exception since a region must
 *     be explicitly provided in the browser (environment variables and
 *     the shared config can't be resolved from the browser).</li>
 *     <li>maxAttempts: Returns default value of 3.</li>
 *     <li>retryModeProvider: Provider which returns DEFAULT_RETRY_MODE.</li>
 *     <li>logger: Sets to empty as logger is passed in client configuration</li>
 * </ul>
 */
@SmithyInternalApi
public final class AddAwsRuntimeConfig implements TypeScriptIntegration {

    private static final Logger LOGGER = Logger.getLogger(AddAwsRuntimeConfig.class.getName());

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        writer.addImport("Provider", "__Provider", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.addImport("Logger", "__Logger", TypeScriptDependency.AWS_SDK_TYPES.packageName);

        if (isAwsService(settings, model)) {
            writer.writeDocs("Unique service identifier.\n@internal")
                    .write("serviceId?: string;\n");
        }
        if (isSigV4Service(settings, model)) {
            writer.writeDocs(isAwsService(settings, model)
                                ? "The AWS region to which this client will send requests"
                                : "The AWS region to use as signing region for AWS Auth")
                    .write("region?: string | __Provider<string>;\n");
        }
        writer.writeDocs("Value for how many times a request will be made at most in case of retry.")
                .write("maxAttempts?: number | __Provider<number>;\n");
        writer.writeDocs("Specifies provider for retry algorithm to use.\n@internal")
                .write("retryModeProvider?: __Provider<string>;\n");
        writer.writeDocs("Optional logger for logging debug/info/warn/error.")
                .write("logger?: __Logger;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        Map<String, Consumer<TypeScriptWriter>> runtimeConfigs = new HashMap();
        if (target.equals(LanguageTarget.SHARED)) {
            String serviceId = service.getTrait(ServiceTrait.class)
                    .map(ServiceTrait::getSdkId)
                    .orElse(null);
            if (serviceId != null) {
                runtimeConfigs.put("serviceId", writer -> {
                    writer.write("serviceId: $S,", serviceId);
                });
            } else {
                LOGGER.info("Cannot generate a serivce ID for the client because no aws.api#Service "
                        + "trait was found on " + service.getId());
            }
        }
        runtimeConfigs.putAll(getDefaultConfig(target, settings, model));
        return runtimeConfigs;
    }

    private Map<String, Consumer<TypeScriptWriter>> getDefaultConfig(
            LanguageTarget target,
            TypeScriptSettings settings,
            Model model
    ) {
        Map<String, Consumer<TypeScriptWriter>> defaultConfigs = new HashMap();
        boolean isSigV4Service = isSigV4Service(settings, model);
        switch (target) {
            case SHARED:
                return MapUtils.of(
                        "logger", writer -> {
                            writer.addImport("Logger", "__Logger", TypeScriptDependency.AWS_SDK_TYPES.packageName);
                            writer.write("logger: {} as __Logger,");
                        }
                );
            case BROWSER:
                if (isSigV4Service) {
                    defaultConfigs.put("region", writer -> {
                        writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                        writer.addImport("invalidProvider", "invalidProvider",
                                TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                        writer.write("region: invalidProvider(\"Region is missing\"),");
                    });
                }
                defaultConfigs.put("maxAttempts", writer -> {
                    writer.addDependency(TypeScriptDependency.MIDDLEWARE_RETRY);
                    writer.addImport("DEFAULT_MAX_ATTEMPTS", "DEFAULT_MAX_ATTEMPTS",
                            TypeScriptDependency.MIDDLEWARE_RETRY.packageName);
                    writer.write("maxAttempts: DEFAULT_MAX_ATTEMPTS,");
                });
                defaultConfigs.put("retryModeProvider", writer -> {
                    writer.addDependency(TypeScriptDependency.MIDDLEWARE_RETRY);
                    writer.addImport("DEFAULT_RETRY_MODE", "DEFAULT_RETRY_MODE",
                            TypeScriptDependency.MIDDLEWARE_RETRY.packageName);
                    writer.write("retryModeProvider: () => Promise.resolve(DEFAULT_RETRY_MODE),");
                });
                return defaultConfigs;
            case NODE:
                if (isSigV4Service) {
                    defaultConfigs.put("region", writer -> {
                        writer.addDependency(AwsDependency.NODE_CONFIG_PROVIDER);
                        writer.addImport("loadConfig", "loadNodeConfig",
                                AwsDependency.NODE_CONFIG_PROVIDER.packageName);
                        writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                        writer.addImport("NODE_REGION_CONFIG_OPTIONS", "NODE_REGION_CONFIG_OPTIONS",
                                TypeScriptDependency.CONFIG_RESOLVER.packageName);
                        writer.addImport("NODE_REGION_CONFIG_FILE_OPTIONS", "NODE_REGION_CONFIG_FILE_OPTIONS",
                                TypeScriptDependency.CONFIG_RESOLVER.packageName);
                        writer.write(
                                "region: loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),");
                    });
                }
                defaultConfigs.put("maxAttempts", writer -> {
                    writer.addDependency(AwsDependency.NODE_CONFIG_PROVIDER);
                    writer.addImport("loadConfig", "loadNodeConfig",
                            AwsDependency.NODE_CONFIG_PROVIDER.packageName);
                    writer.addImport("NODE_MAX_ATTEMPT_CONFIG_OPTIONS", "NODE_MAX_ATTEMPT_CONFIG_OPTIONS",
                        TypeScriptDependency.MIDDLEWARE_RETRY.packageName);
                    writer.write("maxAttempts: loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),");
                });
                defaultConfigs.put("retryModeProvider", writer -> {
                    writer.addDependency(AwsDependency.NODE_CONFIG_PROVIDER);
                    writer.addImport("loadConfig", "loadNodeConfig",
                            AwsDependency.NODE_CONFIG_PROVIDER.packageName);
                    writer.addDependency(TypeScriptDependency.MIDDLEWARE_RETRY);
                    writer.addImport("NODE_RETRY_MODE_CONFIG_OPTIONS", "NODE_RETRY_MODE_CONFIG_OPTIONS",
                            TypeScriptDependency.MIDDLEWARE_RETRY.packageName);
                    writer.write("retryModeProvider: loadNodeConfig(NODE_RETRY_MODE_CONFIG_OPTIONS),");
                });
                return defaultConfigs;
            default:
                return Collections.emptyMap();
        }
    }
}
