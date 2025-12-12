/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isHttpBearerAuthService;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Configure clients with Token auth configurations and plugin.
 *
 * This is legacy auth behavior, and is no longer supported in development.
 */
@SmithyInternalApi
public final class AddTokenAuthPlugin implements TypeScriptIntegration {

    /**
     * Integration should only be used if the `useLegacyAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.useLegacyAuth();
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.MIDDLEWARE_TOKEN.dependency, "Token", HAS_CONFIG)
                .servicePredicate((m, s) -> isHttpBearerAuthService(s))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.MIDDLEWARE_TOKEN.dependency, "Token", HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> isHttpBearerAuthService(s))
                .build()
        );
    }
}
