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

import java.util.List;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;

/**
 * Adds all built-in runtime client plugins to clients.
 */
public class AddBuiltinPlugins implements TypeScriptIntegration {

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                generatePlugin("Region", "@aws-sdk/config-resolver"),
                generatePlugin("AwsAuth", "@aws-sdk/signing-middleware"),
                generatePlugin("Endpoints", "@aws-sdk/config-resolver"),
                generatePlugin("Retry", "@aws-sdk/retry-middleware"),
                generatePlugin("UserAgent", "@aws-sdk/middleware-user-agent")
        );
    }

    private static RuntimeClientPlugin generatePlugin(String symbolName, String symbolNamespace) {
        SymbolReference symbolReference = SymbolReference.builder()
                .symbol(Symbol.builder().name(symbolName).namespace(symbolNamespace, "/").build())
                .build();
        return new RuntimeClientPlugin() {
            @Override
            public SymbolReference getSymbol() {
                return symbolReference;
            }

            @Override
            public boolean hasConfig() {
                return true;
            }

            @Override
            public boolean hasMiddleware() {
                return true;
            }
        };
    }
}
