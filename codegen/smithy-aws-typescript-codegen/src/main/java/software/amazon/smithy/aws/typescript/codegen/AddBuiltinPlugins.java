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

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention;

import java.util.List;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;

/**
 * Adds all built-in runtime client plugins to clients.
 */
public class AddBuiltinPlugins implements TypeScriptIntegration {

    private static final String CONFIG_RESOLVER_VERSION = "^0.1.0-preview.5";

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        // Note that order is significant because configurations might
        // rely on previously resolved values.
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/config-resolver", CONFIG_RESOLVER_VERSION, "Region",
                                         Convention.HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/middleware-signing", "^0.1.0-preview.7", "AwsAuth")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/config-resolver", CONFIG_RESOLVER_VERSION, "Endpoints",
                                         Convention.HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/middleware-retry", "^0.1.0-preview.5", "Retry")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/middleware-user-agent", "^0.1.0-preview.1", "UserAgent")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/middleware-content-length", "^0.1.0-preview.5", "ContentLength",
                                         Convention.HAS_MIDDLEWARE)
                        .build()
        );
    }
}
