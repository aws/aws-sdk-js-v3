/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Utility methods related to AWS traits.
 */
@SmithyInternalApi
public final class AwsCredentialProviderUtils {

    private AwsCredentialProviderUtils() {}

    @Deprecated
    public static void addAwsCredentialProviderDependencies(ServiceShape service, TypeScriptWriter writer) {
        // deprecated by @aws-sdk/nested-clients package.
    }
}
