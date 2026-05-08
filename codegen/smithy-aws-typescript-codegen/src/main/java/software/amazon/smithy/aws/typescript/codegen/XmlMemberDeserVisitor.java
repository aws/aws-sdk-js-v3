/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
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
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShortShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.SmithyCoreSubmodules;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
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
 * @see <a href="https://smithy.io/2.0/spec/protocol-traits.html#xml-bindings">Smithy XML traits.</a>
 */
@SmithyInternalApi
final class XmlMemberDeserVisitor extends DocumentMemberDeserVisitor {
    private final MemberShape memberShape;

    XmlMemberDeserVisitor(GenerationContext context, String dataSource, Format defaultTimestampFormat) {
        this(context, null, dataSource, defaultTimestampFormat);
    }

    XmlMemberDeserVisitor(
        GenerationContext context,
        MemberShape memberShape,
        String dataSource,
        Format defaultTimestampFormat
    ) {
        super(context, dataSource, defaultTimestampFormat);
        this.memberShape = memberShape;
    }

    @Override
    public String booleanShape(BooleanShape shape) {
        getContext().getWriter().addImportSubmodule("parseBoolean", "__parseBoolean", TypeScriptDependency.SMITHY_CORE, SmithyCoreSubmodules.SERDE);
        return "__parseBoolean(" + getDataSource() + ")";
    }

    @Override
    public String byteShape(ByteShape shape) {
        getContext().getWriter()
            .addImportSubmodule(
                "strictParseByte",
                "__strictParseByte",
                TypeScriptDependency.SMITHY_CORE,
                SmithyCoreSubmodules.SERDE
            );
        return "__strictParseByte(" + getDataSource() + ") as number";
    }

    @Override
    public String shortShape(ShortShape shape) {
        getContext().getWriter()
            .addImportSubmodule(
                "strictParseShort",
                "__strictParseShort",
                TypeScriptDependency.SMITHY_CORE,
                SmithyCoreSubmodules.SERDE
            );
        return "__strictParseShort(" + getDataSource() + ") as number";
    }

    @Override
    public String integerShape(IntegerShape shape) {
        getContext().getWriter()
            .addImportSubmodule(
                "strictParseInt32",
                "__strictParseInt32",
                TypeScriptDependency.SMITHY_CORE,
                SmithyCoreSubmodules.SERDE
            );
        return "__strictParseInt32(" + getDataSource() + ") as number";
    }

    @Override
    public String longShape(LongShape shape) {
        getContext().getWriter()
            .addImportSubmodule(
                "strictParseLong",
                "__strictParseLong",
                TypeScriptDependency.SMITHY_CORE,
                SmithyCoreSubmodules.SERDE
            );
        return "__strictParseLong(" + getDataSource() + ") as number";
    }

    @Override
    public String floatShape(FloatShape shape) {
        return deserializeFloat();
    }

    @Override
    public String doubleShape(DoubleShape shape) {
        return deserializeFloat();
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

    @Override
    protected MemberShape getMemberShape() {
        return memberShape;
    }

    private String unsupportedShape(Shape shape) {
        throw new CodegenException(
            String.format(
                "Cannot deserialize shape type %s on protocol, shape: %s.",
                shape.getType(),
                shape.getId()
            )
        );
    }

    private String deserializeFloat() {
        getContext().getWriter()
            .addImportSubmodule(
                "strictParseFloat",
                "__strictParseFloat",
                TypeScriptDependency.SMITHY_CORE,
                SmithyCoreSubmodules.SERDE
            );
        return "__strictParseFloat(" + getDataSource() + ") as number";
    }
}
