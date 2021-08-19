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
import software.amazon.smithy.model.shapes.BooleanShape;
import software.amazon.smithy.model.shapes.ByteShape;
import software.amazon.smithy.model.shapes.DoubleShape;
import software.amazon.smithy.model.shapes.FloatShape;
import software.amazon.smithy.model.shapes.IntegerShape;
import software.amazon.smithy.model.shapes.LongShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShortShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Overrides several of the default implementations to handle XML document
 * contents deserializing to strings instead of typed components:
 *
 * <ul>
 *   <li>Uses {@code strictParseFloat} on Float and Double shapes.</li>
 *   <li>Fails on BigDecimal and BigInteger shapes.</li>
 *   <li>Uses {@code strictParseInt} on other number shapes.</li>
 *   <li>Compares boolean shapes to the string {@code "true"} to generate a boolean.</li>
 * </ul>
 *
 * @see <a href="https://awslabs.github.io/smithy/spec/xml.html">Smithy XML traits.</a>
 */
@SmithyInternalApi
final class XmlMemberDeserVisitor extends DocumentMemberDeserVisitor {

    XmlMemberDeserVisitor(GenerationContext context, String dataSource, Format defaultTimestampFormat) {
        super(context, dataSource, defaultTimestampFormat);
    }

    @Override
    public String booleanShape(BooleanShape shape) {
        getContext().getWriter().addImport("parseBoolean", "__parseBoolean", "@aws-sdk/smithy-client");
        return "__parseBoolean(" + getDataSource() + ")";
    }

    @Override
    public String byteShape(ByteShape shape) {
        return deserializeInt();
    }

    @Override
    public String shortShape(ShortShape shape) {
        return deserializeInt();
    }

    @Override
    public String integerShape(IntegerShape shape) {
        return deserializeInt();
    }

    @Override
    public String longShape(LongShape shape) {
        return deserializeInt();
    }

    private String deserializeInt() {
        getContext().getWriter().addImport("strictParseInt", "__strictParseInt", "@aws-sdk/smithy-client");
        return "__strictParseInt(" + getDataSource() + ") as number";
    }

    @Override
    public String floatShape(FloatShape shape) {
        return deserializeFloat();
    }

    @Override
    public String doubleShape(DoubleShape shape) {
        return deserializeFloat();
    }

    private String deserializeFloat() {
        getContext().getWriter().addImport("strictParseFloat", "__strictParseFloat", "@aws-sdk/smithy-client");
        return "__strictParseFloat(" + getDataSource() + ") as number";
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
        throw new CodegenException(String.format("Cannot deserialize shape type %s on protocol, shape: %s.",
                shape.getType(), shape.getId()));
    }
}
