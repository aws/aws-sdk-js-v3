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

import software.amazon.smithy.aws.traits.protocols.RestJson1Trait;
import software.amazon.smithy.model.shapes.ShapeId;

/**
 * Handles generating the aws.rest-json-1 protocol for services.
 *
 * {@inheritDoc}
 *
 * @see RestJsonProtocolGenerator
 */
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
