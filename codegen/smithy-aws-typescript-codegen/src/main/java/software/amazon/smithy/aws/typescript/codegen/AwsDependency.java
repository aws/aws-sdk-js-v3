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
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * This enum should define all TypeScript dependencies that are introduced by
 * this package.
 */
@SmithyInternalApi
public enum AwsDependency implements SymbolDependencyContainer {

    MIDDLEWARE_SIGNING(NORMAL_DEPENDENCY, "@aws-sdk/middleware-signing", "3.13.1"),
    CREDENTIAL_PROVIDER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/credential-provider-node", "3.14.0"),
    ACCEPT_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-api-gateway", "3.13.1"),
    S3_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3", "3.13.1"),
    ADD_EXPECT_CONTINUE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-expect-continue", "3.13.1"),
    GLACIER_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-glacier", "3.13.1"),
    MACHINELEARNING_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-machinelearning", "3.13.1"),
    S3_CONTROL_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3-control", "3.13.1"),
    SSEC_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-ssec", "3.13.1"),
    RDS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-rds", "3.13.1"),
    LOCATION_CONSTRAINT(NORMAL_DEPENDENCY, "@aws-sdk/middleware-location-constraint", "3.13.1"),
    MD5_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/md5-js", "3.13.1"),
    STREAM_HASHER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/hash-stream-node", "3.13.1"),
    STREAM_HASHER_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/hash-blob-browser", "3.13.1"),
    ROUTE53_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-route53", "3.13.1"),
    EC2_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-ec2", "3.13.1"),
    BUCKET_ENDPOINT_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-bucket-endpoint", "3.13.1"),
    BODY_CHECKSUM(NORMAL_DEPENDENCY, "@aws-sdk/middleware-apply-body-checksum", "3.13.1"),
    MIDDLEWARE_HOST_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-host-header", "3.13.1"),
    SQS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-sqs", "3.13.1"),
    BODY_CHECKSUM_GENERATOR_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/body-checksum-browser", "3.13.1"),
    BODY_CHECKSUM_GENERATOR_NODE(NORMAL_DEPENDENCY, "@aws-sdk/body-checksum-node", "3.13.1"),
    XML_BUILDER(NORMAL_DEPENDENCY, "@aws-sdk/xml-builder", "3.14.0"),
    XML_PARSER(NORMAL_DEPENDENCY, "fast-xml-parser", "3.19.0"),
    UUID_GENERATOR(NORMAL_DEPENDENCY, "uuid", "^8.3.2"),
    UUID_GENERATOR_TYPES(DEV_DEPENDENCY, "@types/uuid", "^8.3.0"),
    MIDDLEWARE_EVENTSTREAM(NORMAL_DEPENDENCY, "@aws-sdk/middleware-eventstream", "3.13.1"),
    AWS_SDK_EVENTSTREAM_HANDLER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/eventstream-handler-node", "3.13.1"),
    TRANSCRIBE_STREAMING_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-transcribe-streaming",
            "3.13.1"),
    STS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-sts", "3.13.1"),
    STS_CLIENT(NORMAL_DEPENDENCY, "@aws-sdk/client-sts", "3.14.0"),
    NODE_CONFIG_PROVIDER(NORMAL_DEPENDENCY, "@aws-sdk/node-config-provider", "3.13.1"),
    MIDDLEWARE_LOGGER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-logger", "3.13.1"),
    MIDDLEWARE_USER_AGENT("dependencies", "@aws-sdk/middleware-user-agent", "3.14.0"),
    AWS_SDK_UTIL_USER_AGENT_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/util-user-agent-browser", "3.13.1"),
    AWS_SDK_UTIL_USER_AGENT_NODE(NORMAL_DEPENDENCY, "@aws-sdk/util-user-agent-node", "3.13.1");

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
