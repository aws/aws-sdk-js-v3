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

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddCrossRegionCopyingPlugin implements TypeScriptIntegration {
    private static final Map<String, Set<String>> PRESIGNED_URL_OPERATIONS_MAP = MapUtils.of(
        "RDS", SetUtils.of(
            "CopyDBClusterSnapshot",
            "CreateDBCluster",
            "CopyDBSnapshot",
            "CreateDBInstanceReadReplica",
            "StartDBInstanceAutomatedBackupsReplication"),
        "DocDB", SetUtils.of("CopyDBClusterSnapshot"),
        "Neptune", SetUtils.of("CopyDBClusterSnapshot", "CreateDBCluster")
    );

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return PRESIGNED_URL_OPERATIONS_MAP.entrySet().stream().map((entry) -> {
            String serviceId = entry.getKey();
            Set<String> commands = entry.getValue();
            return RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.RDS_MIDDLEWARE.dependency, "CrossRegionPresignedUrl", HAS_MIDDLEWARE)
                    .operationPredicate(
                            (m, s, o) -> commands.contains(o.getId().getName(s)) && testServiceId(s, serviceId))
                    .build();
        }).collect(Collectors.toList());
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
