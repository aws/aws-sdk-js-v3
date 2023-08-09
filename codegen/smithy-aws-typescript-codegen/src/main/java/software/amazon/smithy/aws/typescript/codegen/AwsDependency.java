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

import java.io.IOException;
import java.io.StringReader;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import software.amazon.smithy.codegen.core.SymbolDependency;
import software.amazon.smithy.codegen.core.SymbolDependencyContainer;
import software.amazon.smithy.typescript.codegen.PackageContainer;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * This enum should define all TypeScript dependencies that are introduced by
 * this package.
 */
@SmithyInternalApi
public enum AwsDependency implements PackageContainer, SymbolDependencyContainer {

    MIDDLEWARE_SIGNING(NORMAL_DEPENDENCY, "@aws-sdk/middleware-signing"),
    MIDDLEWARE_TOKEN(NORMAL_DEPENDENCY, "@aws-sdk/middleware-token"),
    CREDENTIAL_PROVIDER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/credential-provider-node"),
    ACCEPT_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-api-gateway"),
    S3_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3"),
    ADD_EXPECT_CONTINUE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-expect-continue"),
    GLACIER_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-glacier"),
    MACHINELEARNING_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-machinelearning"),
    S3_CONTROL_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-s3-control"),
    SSEC_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-ssec"),
    RDS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-rds"),
    LOCATION_CONSTRAINT(NORMAL_DEPENDENCY, "@aws-sdk/middleware-location-constraint"),
    ROUTE53_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-route53"),
    EC2_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-ec2"),
    BUCKET_ENDPOINT_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-bucket-endpoint"),
    MIDDLEWARE_HOST_HEADER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-host-header"),
    SQS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-sqs"),
    BODY_CHECKSUM_GENERATOR_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/body-checksum-browser"),
    BODY_CHECKSUM_GENERATOR_NODE(NORMAL_DEPENDENCY, "@aws-sdk/body-checksum-node"),
    XML_BUILDER(NORMAL_DEPENDENCY, "@aws-sdk/xml-builder"),
    XML_PARSER(NORMAL_DEPENDENCY, "fast-xml-parser", "4.2.5"),
    UUID_GENERATOR(NORMAL_DEPENDENCY, "uuid", "^8.3.2"),
    UUID_GENERATOR_TYPES(DEV_DEPENDENCY, "@types/uuid", "^8.3.0"),
    MIDDLEWARE_EVENTSTREAM(NORMAL_DEPENDENCY, "@aws-sdk/middleware-eventstream"),
    AWS_SDK_EVENTSTREAM_HANDLER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/eventstream-handler-node"),
    TRANSCRIBE_STREAMING_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-transcribe-streaming"),
    STS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-sdk-sts"),
    STS_CLIENT(NORMAL_DEPENDENCY, "@aws-sdk/client-sts"),
    MIDDLEWARE_LOGGER(NORMAL_DEPENDENCY, "@aws-sdk/middleware-logger"),
    MIDDLEWARE_USER_AGENT("dependencies", "@aws-sdk/middleware-user-agent"),
    AWS_SDK_UTIL_USER_AGENT_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/util-user-agent-browser"),
    AWS_SDK_UTIL_USER_AGENT_NODE(NORMAL_DEPENDENCY, "@aws-sdk/util-user-agent-node"),
    MIDDLEWARE_ENDPOINT_DISCOVERY(NORMAL_DEPENDENCY, "@aws-sdk/middleware-endpoint-discovery"),
    AWS_CRYPTO_SHA1_BROWSER(NORMAL_DEPENDENCY, "@aws-crypto/sha1-browser", "3.0.0"),
    SIGNATURE_V4_MULTIREGION(NORMAL_DEPENDENCY, "@aws-sdk/signature-v4-multi-region"),
    RECURSION_DETECTION_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-recursion-detection"),
    MIDDLEWARE_WEBSOCKET(NORMAL_DEPENDENCY, "@aws-sdk/middleware-websocket"),

    // Conditionally added when httpChecksum trait is present
    @Deprecated MD5_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/md5-js", "3.374.0"),
    @Deprecated STREAM_HASHER_NODE(NORMAL_DEPENDENCY, "@aws-sdk/hash-stream-node", "3.374.0"),
    @Deprecated STREAM_HASHER_BROWSER(NORMAL_DEPENDENCY, "@aws-sdk/hash-blob-browser", "3.374.0"),
    FLEXIBLE_CHECKSUMS_MIDDLEWARE(NORMAL_DEPENDENCY, "@aws-sdk/middleware-flexible-checksums"),

    // Conditionally added when auth trait is present
    MIDDLEWARE_API_KEY(NORMAL_DEPENDENCY, "@aws-sdk/middleware-api-key");

    public final String packageName;
    public final String version;
    public final SymbolDependency dependency;

    AwsDependency(String type, String name) {
        this(type, name, SdkVersion.expectVersion(name));
    }

    AwsDependency(String type, String name, String version) {
        this.dependency = SymbolDependency.builder().dependencyType(type).packageName(name).version(version).build();
        this.packageName = name;
        this.version = version;
    }


    @Override
    public List<SymbolDependency> getDependencies() {
        return Collections.singletonList(dependency);
    }

    @Override
    public String getPackageName() {
        return this.packageName;
    }

    private static final class SdkVersion {
        private static final Map<String, String> VERSIONS;

        static {
            String rawProperties =
                    IoUtils.readUtf8Url(AwsDependency.class.getResource("sdkVersions.properties")).trim();
            Properties p = new Properties();
            try {
                p.load(new StringReader(rawProperties));
            } catch (IOException e) {
                throw new IllegalArgumentException("Could not read sdkVersions.properties");
            }

            final Map<String, String> versions = new HashMap<>(p.size());
            p.forEach((k, v) -> {
                if (versions.put(k.toString(), v.toString()) != null) {
                    throw new IllegalArgumentException("Multiple versions defined for " + k.toString());
                }
            });
            VERSIONS = Collections.unmodifiableMap(versions);
        }

        private static String expectVersion(String packageName) {
            if (!VERSIONS.containsKey(packageName)) {
                throw new IllegalArgumentException("No version for " + packageName);
            }
            return VERSIONS.get(packageName);
        }
    }
}

