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

import software.amazon.smithy.aws.traits.clientendpointdiscovery.ClientEndpointDiscoveryTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds runtime plugins which handle endpoint discovery logic.
 */
@SmithyInternalApi
public class AddEndpointDiscoveryPlugin implements TypeScriptIntegration  {
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_ENDPOINT_DISCOVERY.dependency,
                                "EndpointDiscovery", RuntimeClientPlugin.Convention.HAS_CONFIG)
                        .servicePredicate(AddEndpointDiscoveryPlugin::hasClientEndpointDiscovery)
                        .build()
        );
    }

    private static boolean hasClientEndpointDiscovery(
            Model model,
            ServiceShape service
    ) {
        if(service.getTrait(ClientEndpointDiscoveryTrait.class).isPresent()) {
            return true;
        }
        return false;
    }
}
