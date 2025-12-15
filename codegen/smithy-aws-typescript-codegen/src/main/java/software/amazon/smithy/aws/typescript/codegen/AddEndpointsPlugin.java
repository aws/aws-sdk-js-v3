/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.List;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds all built-in runtime client plugins to clients.
 *
 * @deprecated as of default endpointRuleSet. Remains as an ordering placeholder.
 */
@SmithyInternalApi
@Deprecated
public class AddEndpointsPlugin implements TypeScriptIntegration {
    @Override
    public List<String> runAfter() {
        return List.of(AddBuiltinPlugins.class.getCanonicalName());
    }
}
