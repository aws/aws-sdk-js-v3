/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.SmithyCoreSubmodules;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates disableClockSkewCorrection runtime config field for all AWS service clients.
 * The input/resolved config types and resolver logic live in resolveAwsSdkSigV4Config.
 */
@SmithyInternalApi
public final class AddDisableClockSkewCorrectionRuntimeConfig implements TypeScriptIntegration {

    private static final Logger LOGGER =
        Logger.getLogger(AddDisableClockSkewCorrectionRuntimeConfig.class.getName());

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        Map<String, Consumer<TypeScriptWriter>> runtimeConfigs = new HashMap<>();
        if (isAwsService(settings, model)) {
            switch (target) {
                case BROWSER:
                    runtimeConfigs.put("disableClockSkewCorrection", writer -> {
                        writer.write("false");
                    });
                    break;
                case NODE:
                    runtimeConfigs.put("disableClockSkewCorrection", writer -> {
                        writer.addImportSubmodule(
                            "loadConfig",
                            "loadNodeConfig",
                            TypeScriptDependency.SMITHY_CORE,
                            SmithyCoreSubmodules.CONFIG
                        );
                        writer.addImportSubmodule(
                            "NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS",
                            null,
                            AwsDependency.AWS_SDK_CORE,
                            "/httpAuthSchemes"
                        );
                        writer.write(
                            "loadNodeConfig(NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS, loaderConfig)"
                        );
                    });
                    break;
                default:
                    LOGGER.warning("DisableClockSkewCorrection config not supported for target: " + target);
                    break;
            }
        }
        return runtimeConfigs;
    }
}
