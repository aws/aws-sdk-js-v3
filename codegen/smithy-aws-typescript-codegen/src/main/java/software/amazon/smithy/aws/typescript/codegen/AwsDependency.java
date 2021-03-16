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

import static software.amazon.smithy.typescript.codegen.TypeScriptDependency.DEV_DEPENDENCY;
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

    MIDDLEWARE_SIGNING(NORMAL_DEPENDENCY, "@aws-sdk/middleware-signing", "^1.0.0-rc.1"),
    CREDENTIAL_PROVIDER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/credential-provider-node", "^1.0.0-rc.1"),
    ACCEPT_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-api-gateway", "^1.0.0-rc.1"),
    S3_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3", "^1.0.0-rc.1"),
    ADD_EXPECT_CONTINUE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-expect-continue", "^1.0.0-rc.1"),
    GLACIER_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-glacier", "^1.0.0-rc.1"),
    MACHINELEARNING_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-machinelearning", "^1.0.0-rc.1"),
    S3_CONTROL_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3-control", "^1.0.0-rc.1"),
    SSEC_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-ssec", "^1.0.0-rc.1"),
    RDS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-rds", "^1.0.0-rc.1"),
    LOCATION_CONSTRAINT(NORMAL_DEPENDENCY, "@aws-sdk/middleware-location-constraint", "^1.0.0-rc.1"),
    MD5_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/md5-js", "^1.0.0-rc.1"),
    STREAM_HASHER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/hash-stream-node", "^1.0.0-rc.1"),
    STREAM_HASHER_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/hash-blob-browser", "^1.0.0-rc.1"),
    ROUTE53_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-route53", "^1.0.0-rc.1"),
    EC2_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-ec2", "^1.0.0-rc.1"),
    BUCKET_ENDPOINT_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-bucket-endpoint", "^1.0.0-rc.1"),
    BODY_CHECKSUM(NORMAL_DEPENDENCY, "@aws-sdk/middleware-apply-body-checksum", "^1.0.0-rc.1"),
    MIDDLEWARE_HOST_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-host-header", "^1.0.0-rc.1"),
    SQS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-sqs", "^1.0.0-rc.1"),
    BODY_CHECKSUM_GENERATOR_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/body-checksum-browser", "^1.0.0-rc.1"),
    BODY_CHECKSUM_GENERATOR_NODE(NORMAL_DEPENDENCY, "@aws-sdk/body-checksum-node", "^1.0.0-rc.1"),
    XML_BUILDER(NORMAL_DEPENDENCY, "@aws-sdk/xml-builder", "^1.0.0-rc.1"),
    XML_PARSER(NORMAL_DEPENDENCY, "fast-xml-parser", "3.17.4"),
    UUID_GENERATOR(NORMAL_DEPENDENCY, "uuid", "^3.0.0"),
    UUID_GENERATOR_TYPES(DEV_DEPENDENCY, "@types/uuid", "^3.0.0"),
    MIDDLEWARE_EVENTSTREAM(NORMAL_DEPENDENCY, "@aws-sdk/middleware-eventstream", "^1.0.0-rc.1"),
    AWS_SDK_EVENTSTREAM_HANDLER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/eventstream-handler-node", "^1.0.0-rc.1"),
    TRANSCRIBE_STREAMING_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-transcribe-streaming",
            "^1.0.0-rc.1"),
    RETRY_CONFIG_PROVIDER(NORMAL_DEPENDENCY, "@aws-sdk/retry-config-provider", "^1.0.0-rc.1"),
    NODE_CONFIG_PROVIDER(NORMAL_DEPENDENCY, "@aws-sdk/node-config-provider", "^1.0.0-rc.1"),
    MIDDLEWARE_LOGGER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-logger", "^1.0.0-rc.1"),
    MIDDLEWARE_USER_AGENT("dependencies", "@aws-sdk/middleware-user-agent", "1.0.0-rc.1"),
    AWS_SDK_UTIL_USER_AGENT_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/util-user-agent-browser", "1.0.0-rc.1"),
    AWS_SDK_UTIL_USER_AGENT_NODE(NORMAL_DEPENDENCY, "@aws-sdk/util-user-agent-node", "1.0.0-rc.1");

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
