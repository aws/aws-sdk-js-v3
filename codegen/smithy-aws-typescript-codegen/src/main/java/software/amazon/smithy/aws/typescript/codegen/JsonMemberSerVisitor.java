/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.aws.traits.protocols.AwsQueryCompatibleTrait;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.shapes.BigDecimalShape;
import software.amazon.smithy.model.shapes.BigIntegerShape;
import software.amazon.smithy.model.shapes.BooleanShape;
import software.amazon.smithy.model.shapes.DoubleShape;
import software.amazon.smithy.model.shapes.FloatShape;
import software.amazon.smithy.model.shapes.IntegerShape;
import software.amazon.smithy.model.shapes.LongShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShortShape;
import software.amazon.smithy.model.shapes.StringShape;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberSerVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Overrides the default implementation of BigDecimal and BigInteger shape
 * serialization to throw when encountered in AWS REST-JSON based protocols.
 *
 * TODO: Work out support for BigDecimal and BigInteger, natively or through a library.
 */
@SmithyInternalApi
final class JsonMemberSerVisitor extends DocumentMemberSerVisitor {
    private final boolean isAwsQueryCompat;

    /**
     * @inheritDoc
     */
    JsonMemberSerVisitor(GenerationContext context, String dataSource, Format defaultTimestampFormat) {
        super(context, dataSource, defaultTimestampFormat);
        TypeScriptWriter writer = context.getWriter();
        writer.addImport("_json", null, TypeScriptDependency.AWS_SMITHY_CLIENT);
        this.isAwsQueryCompat = context.getService().hasTrait(AwsQueryCompatibleTrait.class);
        this.serdeElisionEnabled = !this.isAwsQueryCompat && !context.getSettings().generateServerSdk();
        if (isAwsQueryCompat) {
            writer.addDependency(AwsDependency.AWS_SDK_CORE);
            writer.addImport("_toStr", null, AwsDependency.AWS_SDK_CORE);
            writer.addImport("_toNum", null, AwsDependency.AWS_SDK_CORE);
            writer.addImport("_toBool", null, AwsDependency.AWS_SDK_CORE);
        }
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
    public String shortShape(ShortShape shape) {
        String base = super.shortShape(shape);
        if (isAwsQueryCompat) {
            return "_toNum(" + base + ")";
        }
        return base;
    }

    @Override
    public String integerShape(IntegerShape shape) {
        String base = super.integerShape(shape);
        if (isAwsQueryCompat) {
            return "_toNum(" + base + ")";
        }
        return base;
    }

    @Override
    public String longShape(LongShape shape) {
        String base = super.longShape(shape);
        if (isAwsQueryCompat) {
            return "_toNum(" + base + ")";
        }
        return base;
    }

    @Override
    public String floatShape(FloatShape shape) {
        String base = super.floatShape(shape);
        if (isAwsQueryCompat) {
            return "_toNum(" + base + ")";
        }
        return base;
    }

    @Override
    public String doubleShape(DoubleShape shape) {
        String base = super.doubleShape(shape);
        if (isAwsQueryCompat) {
            return "_toNum(" + base + ")";
        }
        return base;
    }

    @Override
    public String booleanShape(BooleanShape shape) {
        String base = super.booleanShape(shape);
        if (isAwsQueryCompat) {
            return "_toBool(" + base + ")";
        }
        return base;
    }

    @Override
    public String stringShape(StringShape shape) {
        String base = super.stringShape(shape);
        if (isAwsQueryCompat) {
            return "_toStr(" + base + ")";
        }
        return base;
    }

    private String unsupportedShape(Shape shape) {
        throw new CodegenException(
            String.format(
                "Cannot serialize shape type %s on protocol, shape: %s.",
                shape.getType(),
                shape.getId()
            )
        );
    }
}
