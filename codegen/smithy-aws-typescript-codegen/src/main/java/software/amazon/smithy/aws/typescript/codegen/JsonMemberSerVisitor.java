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

import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.shapes.BigDecimalShape;
import software.amazon.smithy.model.shapes.BigIntegerShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * Overrides the default implementation of BigDecimal and BigInteger shape
 * serialization to throw when encountered in AWS REST-JSON based protocols.
 *
 * TODO: Work out support for BigDecimal and BigInteger, natively or through a library.
 */
final class JsonMemberSerVisitor extends DocumentMemberSerVisitor {

    /**
     * @inheritDoc
     */
    JsonMemberSerVisitor(GenerationContext context, String dataSource, Format defaultTimestampFormat) {
        super(context, dataSource, defaultTimestampFormat);
    }

    @Override
    public String bigDecimalShape(BigDecimalShape shape) {
        // Fail instead of losing precision through Number.
        return unsupportedShape(shape);
    }

    @Override
    public String bigIntegerShape(BigIntegerShape shape) {
        // Fail instead of losing precision through Number.
        return unsupportedShape(shape);
    }

    private String unsupportedShape(Shape shape) {
        throw new CodegenException(String.format("Cannot serialize shape type %s on protocol, shape: %s.",
                shape.getType(), shape.getId()));
    }
}
