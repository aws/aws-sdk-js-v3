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

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isHttpBearerAuthService;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Configure clients with Token auth configurations and plugin.
 */
@SmithyInternalApi
public final class AddTokenAuthPlugin implements TypeScriptIntegration {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_TOKEN.dependency, "Token", HAS_CONFIG)
                    .servicePredicate((m, s) -> isHttpBearerAuthService(s))
                    .settingsPredicate((m, s, settings) -> !settings.getExperimentalIdentityAndAuth())
                    .build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_TOKEN.dependency, "Token", HAS_MIDDLEWARE)
                    .servicePredicate((m, s) -> isHttpBearerAuthService(s))
                    .settingsPredicate((m, s, settings) -> !settings.getExperimentalIdentityAndAuth())
                    .build()
        );
    }
}
