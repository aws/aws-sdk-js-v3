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
import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SetUtils;

public class AddCrossRegionCopyingPlugin implements TypeScriptIntegration {
    private static final Set<String> SHARED_PRESIGNED_URL_OPERATIONS = SetUtils.of(
        "CopyDBClusterSnapshot",
        "CreateDBCluster"
    );
    private static final Set<String> RDS_PRESIGNED_URL_OPERATIONS = SetUtils.of(
        "CopyDBSnapshot",
        "CreateDBInstanceReadReplica",
        "StartDBInstanceAutomatedBackupsReplication"
    );

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.RDS_MIDDLEWARE.dependency, "CrossRegionPresignedUrl",
                        HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> RDS_PRESIGNED_URL_OPERATIONS.contains(o.getId().getName())
                        && testServiceId(s, "RDS"))
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.RDS_MIDDLEWARE.dependency, "CrossRegionPresignedUrl",
                        HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> SHARED_PRESIGNED_URL_OPERATIONS.contains(o.getId().getName())
                        && (testServiceId(s, "RDS") || testServiceId(s, "DocDB")  || testServiceId(s, "Neptune")))
                .build()
        );
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
