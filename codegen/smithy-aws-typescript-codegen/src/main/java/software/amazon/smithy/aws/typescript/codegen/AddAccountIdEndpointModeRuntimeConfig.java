/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.endpointsV2.RuleSetParameterFinder;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates accountIdEndpointMode configuration field for service clients
 * that have the AccountIdEndpointMode built-in param in the ruleset.
 */
@SmithyInternalApi
public final class AddAccountIdEndpointModeRuntimeConfig implements TypeScriptIntegration {

    private static final Logger LOGGER = Logger.getLogger(AddAccountIdEndpointModeRuntimeConfig.class.getName());

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        if (isAwsService(settings, model)) {
            ServiceShape service = settings.getService(model);
            if (hasAccountIdEndpointParam(service)) {
                    writer.addImportSubmodule("AccountIdEndpointMode", null,
                        AwsDependency.AWS_SDK_CORE, "/account-id-endpoint");
                    writer.writeDocs("Defines if the AWS AccountId will be used for endpoint routing.");
                    writer.write("accountIdEndpointMode?: AccountIdEndpointMode | "
                    + "__Provider<AccountIdEndpointMode>;\n");
                    writer.addImportSubmodule("resolveAccountIdEndpointModeConfig", null,
                        AwsDependency.AWS_SDK_CORE, "/account-id-endpoint");
            }
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
        Map<String, Consumer<TypeScriptWriter>> runtimeConfigs = new HashMap<>();
        if (isAwsService(settings, model) || isSigV4Service(settings, model)) {
            Optional<EndpointRuleSetTrait> endpointRuleSetTrait = service.getTrait(EndpointRuleSetTrait.class);
            if (endpointRuleSetTrait.isPresent()) {
                RuleSetParameterFinder ruleSetParameterFinder = new RuleSetParameterFinder(service);
                if (ruleSetParameterFinder.getBuiltInParams().containsKey("AccountIdEndpointMode")) {
                    switch (target) {
                        case BROWSER:
                            runtimeConfigs.put("accountIdEndpointMode", writer -> {
                                writer.addImportSubmodule("DEFAULT_ACCOUNT_ID_ENDPOINT_MODE", null,
                                    AwsDependency.AWS_SDK_CORE,
                                    "/account-id-endpoint");
                                writer.write("(() => Promise.resolve(DEFAULT_ACCOUNT_ID_ENDPOINT_MODE))");
                            });
                            break;
                        case NODE:
                            runtimeConfigs.put("accountIdEndpointMode", writer -> {
                                writer.addImport("loadConfig", "loadNodeConfig",
                                    TypeScriptDependency.NODE_CONFIG_PROVIDER);
                                writer.addImportSubmodule("NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS",
                                    null, AwsDependency.AWS_SDK_CORE,
                                    "/account-id-endpoint");
                                writer.write(
                                    "loadNodeConfig(NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS, loaderConfig)");
                            });
                            break;
                        default:
                            LOGGER.warning("AccountIdEndpointMode config not supported for target: " + target);
                            break;
                    }
                }
            }
        }
        return runtimeConfigs;
    }

    // AccountIdEndpointMode resolver
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return List.of(
        RuntimeClientPlugin.builder()
            .inputConfig(
                Symbol.builder()
                    .namespace(
                        AwsDependency.AWS_SDK_CORE.getPackageName() + "/account-id-endpoint", "/"
                    )
                    .name("AccountIdEndpointModeInputConfig")
                    .build()
            )
            .resolvedConfig(
                Symbol.builder()
                    .namespace(
                        AwsDependency.AWS_SDK_CORE.getPackageName() + "/account-id-endpoint", "/"
                    )
                    .name("AccountIdEndpointModeResolvedConfig")
                    .build()
            )
            .resolveFunction(
                Symbol.builder()
                    .namespace(
                        AwsDependency.AWS_SDK_CORE.getPackageName() + "/account-id-endpoint", "/"
                    )
                    .name("resolveAccountIdEndpointModeConfig")
                    .build()
            )
            .servicePredicate((m, s) -> hasAccountIdEndpointParam(s))
            .build()
        );
    }

    private boolean hasAccountIdEndpointParam(ServiceShape service) {
        Optional<EndpointRuleSetTrait> endpointRuleSetTrait = service.getTrait(EndpointRuleSetTrait.class);
        if (endpointRuleSetTrait.isPresent()) {
            RuleSetParameterFinder ruleSetParameterFinder = new RuleSetParameterFinder(service);
            if (ruleSetParameterFinder.getBuiltInParams().containsKey("AccountIdEndpointMode")) {
              return true;
            }
        }
        return false;
    }
}
