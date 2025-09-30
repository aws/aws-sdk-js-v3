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
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.aws.typescript.codegen.extensions.AwsRegionExtensionConfiguration;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.extensions.ExtensionConfigurationInterface;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * AWS clients need to know the service name for collecting metrics, the
 * region name used to resolve endpoints, and whether to use Dualstack and
 * Fips endpoints. For non AWS clients that use AWS Auth, region name is
 * used as signing region.
 *
 * <p>This plugin adds the following config interface fields:
 *
 * <ul>
 *     <li>serviceId: Unique name to identify the AWS service.</li>
 *     <li>region: The AWS region to which this client will send requests</li>
 *     <li>useDualstackEndpoint: Enables IPv6/IPv4 dualstack endpoint.</li>
 *     <li>useFipsEndpoint: Enables FIPS compatible endpoints.</li>
 * </ul>
 *
 * <p>This plugin adds the following Node runtime specific values:
 *
 * <ul>
 *     <li>serviceId: Unique name to identify the AWS service.</li>
 *     <li>region: Uses the default region provider that checks things like
 *      environment variables and the AWS config file.</li>
 *     <li>useDualstackEndpoint: Uses default useDualstackEndpoint provider.</li>
 *     <li>useFipsEndpoint: Uses default useFipsEndpoint provider.</li>
 * </ul>
 *
 * <p>This plugin adds the following Browser runtime specific values:
 *
 * <ul>
 *     <li>serviceId: Unique name to identify the AWS service.</li>
 *     <li>region: Throws an exception since a region must
 *     be explicitly provided in the browser (environment variables and
 *     the shared config can't be resolved from the browser).</li>
 *     <li>useDualstackEndpoint: Sets to false.</li>
 *     <li>useFipsEndpoint: Sets to false.</li>
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
        if (isAwsService(settings, model)) {
            writer.writeDocs("Unique service identifier.\n@internal")
                    .write("serviceId?: string;\n");
            writer.writeDocs("Enables IPv6/IPv4 dualstack endpoint.")
                    .write("useDualstackEndpoint?: boolean | __Provider<boolean>;\n");
            writer.writeDocs("Enables FIPS compatible endpoints.")
                    .write("useFipsEndpoint?: boolean | __Provider<boolean>;\n");
        }
        if (isSigV4Service(settings, model) || isAwsService(settings, model)) {
            writer.writeDocs(isAwsService(settings, model)
                    ? "The AWS region to which this client will send requests"
                    : "The AWS region to use as signing region for AWS Auth")
                .write("region?: string | __Provider<string>;\n");
        }

        writer.writeDocs(
                """
                Setting a client profile is similar to setting a value for the
                AWS_PROFILE environment variable. Setting a profile on a client
                in code only affects the single client instance, unlike AWS_PROFILE.

                When set, and only for environments where an AWS configuration
                file exists, fields configurable by this file will be retrieved
                from the specified profile within that file.
                Conflicting code configuration and environment variables will
                still have higher priority.

                For client credential resolution that involves checking the AWS
                configuration file, the client's profile (this value) will be
                used unless a different profile is set in the credential
                provider options.
                """)
                .write("profile?: string;\n");
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        Map<String, Consumer<TypeScriptWriter>> runtimeConfigs = new HashMap<>();
        if (isAwsService(service) && target.equals(LanguageTarget.SHARED)) {
            String serviceId = service.expectTrait(ServiceTrait.class).getSdkId();
            runtimeConfigs.put("serviceId", writer -> writer.write("$S", serviceId));
        } else {
            LOGGER.info("Cannot generate a service ID for the client because no aws.api#Service "
                + "trait was found on " + service.getId());
        }
        runtimeConfigs.putAll(getDefaultConfig(target, settings, model));
        runtimeConfigs.putAll(getEndpointConfigWriters(target, settings, model));
        return runtimeConfigs;
    }

    @Override
    public List<ExtensionConfigurationInterface> getExtensionConfigurationInterfaces(
        Model model,
        TypeScriptSettings settings
    ) {
        if (isSigV4Service(settings, model) || isAwsService(settings, model)) {
            return List.of(new AwsRegionExtensionConfiguration());
        }
        return Collections.emptyList();
    }

    @Override
    public void prepareCustomizations(
        TypeScriptWriter writer,
        LanguageTarget target,
        TypeScriptSettings settings,
        Model model
    ) {
        if (isAwsService(settings, model) && target.equals(LanguageTarget.NODE)) {
            writer.addDependency(AwsDependency.AWS_SDK_CORE);
            writer.addImport("emitWarningIfUnsupportedVersion", "awsCheckVersion", AwsDependency.AWS_SDK_CORE);
            writer.write("awsCheckVersion(process.version);");
        }
        if (target.equals(LanguageTarget.NODE)) {
            writer.openBlock("const loaderConfig = {", "};", () -> {
                writer.write("profile: config?.profile,");
                writer.write("logger: clientSharedValues.logger,");
                ServiceShape service = settings.getService(model);
                if (isSigningNameNeededInLoaderConfig(service)) {
                    writer.write("signingName: $S,", service.expectTrait(SigV4Trait.class).getName());
                }
            });
        }
    }

    private Map<String, Consumer<TypeScriptWriter>> getDefaultConfig(
            LanguageTarget target,
            TypeScriptSettings settings,
            Model model
    ) {
        if (isSigV4Service(settings, model) || isAwsService(settings, model)) {
            switch (target) {
                case BROWSER:
                    return MapUtils.of("region", writer -> {
                        writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                        writer.addImport("invalidProvider", "invalidProvider",
                            TypeScriptDependency.INVALID_DEPENDENCY);
                        writer.write("invalidProvider(\"Region is missing\")");
                    });
                case NODE:
                    Map<String, Consumer<TypeScriptWriter>> nodeConfig = new HashMap<>();
                    nodeConfig.put("region", writer -> {
                        writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                        writer.addImport("loadConfig", "loadNodeConfig",
                            TypeScriptDependency.NODE_CONFIG_PROVIDER);
                        writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                        writer.addImport("NODE_REGION_CONFIG_OPTIONS", "NODE_REGION_CONFIG_OPTIONS",
                            TypeScriptDependency.CONFIG_RESOLVER);
                        writer.addImport("NODE_REGION_CONFIG_FILE_OPTIONS", "NODE_REGION_CONFIG_FILE_OPTIONS",
                            TypeScriptDependency.CONFIG_RESOLVER);
                        writer.write(
                            """
                            loadNodeConfig(
                                NODE_REGION_CONFIG_OPTIONS,
                                {...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig}
                            )
                            """
                        );
                    });
                    if (!settings.useLegacyAuth()) {
                        nodeConfig.put("authSchemePreference", writer -> {
                            writer.addImport("loadConfig", "loadNodeConfig",
                                   TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addImport("NODE_AUTH_SCHEME_PREFERENCE_OPTIONS", null,
                                    AwsDependency.AWS_SDK_CORE);
                            writer.write("loadNodeConfig(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig)");
                          });
                    }
                    return nodeConfig;
                default:
                    return Collections.emptyMap();
            }
        }
        return Collections.emptyMap();
    }

    private Map<String, Consumer<TypeScriptWriter>> getEndpointConfigWriters(
            LanguageTarget target,
            TypeScriptSettings settings,
            Model model
    ) {
        if (!isAwsService(settings, model)) {
            return Collections.emptyMap();
        }
        switch (target) {
            case BROWSER:
                return MapUtils.of(
                        "useDualstackEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("DEFAULT_USE_DUALSTACK_ENDPOINT", "DEFAULT_USE_DUALSTACK_ENDPOINT",
                                    TypeScriptDependency.CONFIG_RESOLVER);
                            writer.write("(() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT))");
                        },
                        "useFipsEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("DEFAULT_USE_FIPS_ENDPOINT", "DEFAULT_USE_FIPS_ENDPOINT",
                                    TypeScriptDependency.CONFIG_RESOLVER);
                            writer.write("(() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))");
                        }
                );
            case NODE:
                return MapUtils.of(
                        "useDualstackEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addImport("loadConfig", "loadNodeConfig",
                                    TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS",
                                    "NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS",
                                    TypeScriptDependency.CONFIG_RESOLVER);
                            writer.write("loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig)");
                        },
                        "useFipsEndpoint", writer -> {
                            writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addImport("loadConfig", "loadNodeConfig",
                                    TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS",
                                    "NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS",
                                    TypeScriptDependency.CONFIG_RESOLVER);
                            writer.write("loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig)");
                        }
                );
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean isSigningNameNeededInLoaderConfig(ServiceShape service) {
        if (isSigV4Service(service)) {
            return service.expectTrait(SigV4Trait.class).getName().equals("bedrock");
        }
        return false;
    }
}
