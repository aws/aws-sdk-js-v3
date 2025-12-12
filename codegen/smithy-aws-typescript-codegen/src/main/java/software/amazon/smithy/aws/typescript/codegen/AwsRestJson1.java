/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.aws.traits.protocols.RestJson1Trait;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Handles generating the aws.rest-json-1 protocol for services.
 *
 * {@inheritDoc}
 *
 * @see RestJsonProtocolGenerator
 */
@SmithyInternalApi
public final class AwsRestJson1 extends RestJsonProtocolGenerator {

    @Override
    protected String getDocumentContentType() {
        return "application/json";
    }

    @Override
    public ShapeId getProtocol() {
        return RestJson1Trait.ID;
    }

    @Override
    public String getName() {
        return "aws.rest-json-1";
    }
}
