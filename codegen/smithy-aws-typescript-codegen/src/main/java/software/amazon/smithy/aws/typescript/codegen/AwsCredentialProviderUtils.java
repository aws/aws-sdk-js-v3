/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Utility methods related to AWS traits.
 */
@SmithyInternalApi
public final class AwsCredentialProviderUtils {

    private AwsCredentialProviderUtils() {}

    /**
     * Adds dependencies required by the default credential provider.
     * The dependencies are skipped in first party credential providers to avoid circular dependency issue.
     */
    public static void addAwsCredentialProviderDependencies(ServiceShape service, TypeScriptWriter writer) {
        boolean isStsClient =
                service.getId().equals(ShapeId.from("com.amazonaws.sts#AWSSecurityTokenServiceV20110615"));
        boolean isSsoOidcClient = service.getId().equals(ShapeId.from("com.amazonaws.ssooidc#AWSSSOOIDCService"));
        if (!isSsoOidcClient) {
            // SSO OIDC client is required in Sso credential provider
            writer.addDependency(AwsDependency.SSO_OIDC_CLIENT);
        }
        if (!isStsClient) {
            // STS client is required in Ini and WebIdentity credential providers
            if (isSsoOidcClient) {
                // For the SSO OIDC client, adding the STS client as a peerDependency avoids circular dependency issues.
                writer.addDependency(AwsDependency.STS_CLIENT_PEER);
            } else {
                writer.addDependency(AwsDependency.STS_CLIENT);
            }
        }
    }
}
