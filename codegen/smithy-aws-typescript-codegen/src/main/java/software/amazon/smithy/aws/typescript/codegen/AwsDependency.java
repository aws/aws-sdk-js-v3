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

import static software.amazon.smithy.typescript.codegen.TypeScriptDependency.NORMAL_DEPENDENCY;

import java.util.Collections;
import java.util.List;
import software.amazon.smithy.codegen.core.SymbolDependency;
import software.amazon.smithy.codegen.core.SymbolDependencyContainer;

/**
 * This enum should define all TypeScript dependencies that are introduced by
 * this package.
 */
public enum AwsDependency implements SymbolDependencyContainer {

    MIDDLEWARE_SIGNING(NORMAL_DEPENDENCY, "@aws-sdk/middleware-signing", "^0.1.0-preview.7"),
    CREDENTIAL_PROVIDER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/credential-provider-node", "^0.1.0-preview.7"),
    REGION_PROVIDER(NORMAL_DEPENDENCY, "@aws-sdk/region-provider", "^0.1.0-preview.5"),
    ACCEPTS_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-api-gateway", "^0.1.0-preview.5"),
    VALIDATE_BUCKET_NAME(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3", "^0.1.0-preview.2"),
    ADD_EXPECT_CONTINUE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-expect-continue", "^0.1.0-preview.5"),
    ADD_GLACIER_API_VERSION(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-glacier", "^0.1.0-preview.7");

    public final String packageName;
    public final String version;
    public final SymbolDependency dependency;

    AwsDependency(String type, String name, String version) {
        this.dependency = SymbolDependency.builder().dependencyType(type).packageName(name).version(version).build();
        this.packageName = name;
        this.version = version;
    }

    @Override
    public List<SymbolDependency> getDependencies() {
        return Collections.singletonList(dependency);
    }
}
