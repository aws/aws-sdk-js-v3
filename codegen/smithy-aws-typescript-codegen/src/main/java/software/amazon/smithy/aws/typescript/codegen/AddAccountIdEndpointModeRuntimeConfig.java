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

import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.endpointsV2.RuleSetParameterFinder;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.logging.Logger;

/**
 * Generates accountIdEndpointMode configuration field for service clients that have the eponymous built-in param in the ruleset.
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
            EndpointRuleSetTrait endpointRuleSetTrait = service.getTrait(EndpointRuleSetTrait.class)
                    .orElseThrow(() -> new RuntimeException("service missing EndpointRuleSetTrait"));
            RuleSetParameterFinder ruleSetParameterFinder = new RuleSetParameterFinder(service);
            if (ruleSetParameterFinder.getBuiltInParams().containsKey("AccountIdEndpointMode")) {
                writer.writeDocs("Defines if the AWS AccountId will be used for endpoint routing.")
                        .write("accountIdEndpointMode?: AccountIdEndpointMode | __Provider<AccountIdEndpointMode>;\n");
            }
        }
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
        if (isAwsService(settings, model)) {
            EndpointRuleSetTrait endpointRuleSetTrait = service.getTrait(EndpointRuleSetTrait.class)
                    .orElseThrow(() -> new RuntimeException("service missing EndpointRuleSetTrait"));
            RuleSetParameterFinder ruleSetParameterFinder = new RuleSetParameterFinder(service);
            if (ruleSetParameterFinder.getBuiltInParams().containsKey("AccountIdEndpointMode")) {
                switch (target) {
                    case BROWSER:
                        runtimeConfigs.put("accountIdEndpointMode", writer -> {
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("DEFAULT_ACCOUNT_ID_ENDPOINT_MODE", "DEFAULT_ACCOUNT_ID_ENDPOINT_MODE",
                                    TypeScriptDependency.CONFIG_RESOLVER);
                            writer.write("(() => Promise.resolve(DEFAULT_ACCOUNT_ID_ENDPOINT_MODE))");
                        });
                        break;
                    case NODE:
                        runtimeConfigs.put("accountIdEndpointMode", writer -> {
                            writer.addDependency(TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addImport("loadConfig", "loadNodeConfig",
                                    TypeScriptDependency.NODE_CONFIG_PROVIDER);
                            writer.addDependency(TypeScriptDependency.CONFIG_RESOLVER);
                            writer.addImport("NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS", "NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS",
                                    TypeScriptDependency.CONFIG_RESOLVER);
                            writer.write(
                                    "loadNodeConfig(NODE_ACCOUNT_ID_ENDPOINT_MODE_CONFIG_OPTIONS");
                        });
                        break;
                    default:
                        LOGGER.warning("AccountIdEndpointMode config not supported for target: " + target);
                        break;
                }
            }
        }
        return runtimeConfigs;
    }
}