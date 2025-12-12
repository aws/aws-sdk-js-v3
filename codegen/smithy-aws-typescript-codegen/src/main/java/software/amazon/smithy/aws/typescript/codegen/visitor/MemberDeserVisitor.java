/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen.visitor;

import java.util.Optional;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.typescript.codegen.protocols.DeserializerElisionDenyList;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.knowledge.HttpBindingIndex;
import software.amazon.smithy.model.shapes.BigDecimalShape;
import software.amazon.smithy.model.shapes.BigIntegerShape;
import software.amazon.smithy.model.shapes.BlobShape;
import software.amazon.smithy.model.shapes.BooleanShape;
import software.amazon.smithy.model.shapes.ByteShape;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.DoubleShape;
import software.amazon.smithy.model.shapes.FloatShape;
import software.amazon.smithy.model.shapes.IntegerShape;
import software.amazon.smithy.model.shapes.ListShape;
import software.amazon.smithy.model.shapes.LongShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ResourceShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.SetShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeVisitor;
import software.amazon.smithy.model.shapes.ShortShape;
import software.amazon.smithy.model.shapes.StringShape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.TimestampShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.model.traits.MediaTypeTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpProtocolGeneratorUtils;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.typescript.codegen.knowledge.SerdeElisionIndex;

public class MemberDeserVisitor implements ShapeVisitor<String> {
    protected SerdeElisionIndex serdeElisionIndex;
    protected boolean serdeElisionEnabled;
    protected GenerationContext context;
    protected String dataSource;
    protected TimestampFormatTrait.Format defaultTimestampFormat;
    protected boolean disableDeserializationFunctionElision;

    public MemberDeserVisitor(
        GenerationContext context,
        String dataSource,
        TimestampFormatTrait.Format defaultTimestampFormat
    ) {
        this.dataSource = dataSource;
        this.defaultTimestampFormat = defaultTimestampFormat;
        this.serdeElisionIndex = SerdeElisionIndex.of(context.getModel());
        this.context = context.copy();
        disableDeserializationFunctionElision = DeserializerElisionDenyList.SDK_IDS.contains(
            context.getService()
                .getTrait(ServiceTrait.class)
                .map(ServiceTrait::getSdkId)
                .orElse(null)
        );
    }

    @Override
    public String blobShape(BlobShape shape) {
        return "context.base64Decoder(" + dataSource + ")";
    }

    @Override
    public String booleanShape(BooleanShape shape) {
        context.getWriter().addImport("expectBoolean", "__expectBoolean", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return "__expectBoolean(" + dataSource + ")";
    }

    @Override
    public String byteShape(ByteShape shape) {
        context.getWriter().addImport("expectByte", "__expectByte", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return "__expectByte(" + dataSource + ")";
    }

    @Override
    public String shortShape(ShortShape shape) {
        context.getWriter().addImport("expectShort", "__expectShort", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return "__expectShort(" + dataSource + ")";
    }

    @Override
    public String integerShape(IntegerShape shape) {
        context.getWriter().addImport("expectInt32", "__expectInt32", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return "__expectInt32(" + dataSource + ")";
    }

    @Override
    public String longShape(LongShape shape) {
        context.getWriter().addImport("expectLong", "__expectLong", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return "__expectLong(" + dataSource + ")";
    }

    @Override
    public String floatShape(FloatShape shape) {
        context.getWriter()
            .addImport(
                "limitedParseFloat32",
                "__limitedParseFloat32",
                TypeScriptDependency.AWS_SMITHY_CLIENT
            );
        return "__limitedParseFloat32(" + dataSource + ")";
    }

    @Override
    public String doubleShape(DoubleShape shape) {
        context.getWriter()
            .addImport(
                "limitedParseDouble",
                "__limitedParseDouble",
                TypeScriptDependency.AWS_SMITHY_CLIENT
            );
        return "__limitedParseDouble(" + dataSource + ")";
    }

    @Override
    public String stringShape(StringShape shape) {
        Optional<MediaTypeTrait> mediaTypeTrait = shape.getTrait(MediaTypeTrait.class);
        if (mediaTypeTrait.isPresent()) {
            String mediaType = ((MediaTypeTrait) mediaTypeTrait.get()).getValue();
            if (CodegenUtils.isJsonMediaType(mediaType)) {
                TypeScriptWriter writer = context.getWriter();
                writer.addImport("LazyJsonString", "__LazyJsonString", TypeScriptDependency.AWS_SMITHY_CLIENT);
                return "__LazyJsonString.from(" + dataSource + ")";
            }
        }

        context.getWriter().addImport("expectString", "__expectString", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return "__expectString(" + dataSource + ")";
    }

    @Override
    public String bigIntegerShape(BigIntegerShape shape) {
        // BigInt is not supported across all environments, use big.js instead.
        return deserializeToBigJs();
    }

    @Override
    public String bigDecimalShape(BigDecimalShape shape) {
        return deserializeToBigJs();
    }

    private String deserializeToBigJs() {
        context.getWriter().addImport("Big", "__Big", TypeScriptDependency.BIG_JS);
        return "__Big(" + dataSource + ")";
    }

    @Override
    public String timestampShape(TimestampShape shape) {
        HttpBindingIndex httpIndex = HttpBindingIndex.of(context.getModel());
        TimestampFormatTrait.Format format;
        if (getMemberShape() == null) {
            format = httpIndex.determineTimestampFormat(
                shape,
                HttpBinding.Location.DOCUMENT,
                defaultTimestampFormat
            );
        } else {
            if (!shape.getId().equals(getMemberShape().getTarget())) {
                throw new IllegalArgumentException(
                    String.format(
                        "Encountered timestamp shape %s that was not the target of member shape %s",
                        shape.getId(),
                        getMemberShape().getId()
                    )
                );
            }
            format = httpIndex.determineTimestampFormat(
                getMemberShape(),
                HttpBinding.Location.DOCUMENT,
                defaultTimestampFormat
            );
        }

        return HttpProtocolGeneratorUtils.getTimestampOutputParam(
            context.getWriter(),
            dataSource,
            HttpBinding.Location.DOCUMENT,
            shape,
            format,
            requiresNumericEpochSecondsInPayload(),
            context.getSettings().generateClient()
        );
    }

    @Override
    public final String documentShape(DocumentShape shape) {
        return getDelegateDeserializer(shape);
    }

    @Override
    public final String listShape(ListShape shape) {
        return getDelegateDeserializer(shape);
    }

    @Override
    public final String mapShape(MapShape shape) {
        return getDelegateDeserializer(shape);
    }

    @Override
    public final String setShape(SetShape shape) {
        return getDelegateDeserializer(shape);
    }

    @Override
    public final String structureShape(StructureShape shape) {
        return getDelegateDeserializer(shape);
    }

    @Override
    public String unionShape(UnionShape shape) {
        context.getWriter().addImport("expectUnion", "__expectUnion", TypeScriptDependency.AWS_SMITHY_CLIENT);
        return getDelegateDeserializer(shape, "__expectUnion(" + dataSource + ")");
    }

    @Override
    public final String operationShape(OperationShape shape) {
        throw new CodegenException("Operation shapes cannot be bound to documents.");
    }

    @Override
    public final String resourceShape(ResourceShape shape) {
        throw new CodegenException("Resource shapes cannot be bound to documents.");
    }

    @Override
    public final String serviceShape(ServiceShape shape) {
        throw new CodegenException("Service shapes cannot be bound to documents.");
    }

    @Override
    public final String memberShape(MemberShape shape) {
        throw new CodegenException("Member shapes cannot be bound to documents.");
    }

    /**
     * @return the member this visitor is being run against. Used to discover member-applied
     * traits, such as @timestampFormat. Can be, and defaults, to, null.
     */
    protected MemberShape getMemberShape() {
        return null;
    }

    /**
     * @return true if string-formatted epoch seconds in payloads are disallowed. Defaults to false.
     */
    protected boolean requiresNumericEpochSecondsInPayload() {
        return false;
    }

    protected String getDelegateDeserializer(Shape shape) {
        return getDelegateDeserializer(shape, dataSource);
    }

    protected String getDelegateDeserializer(Shape shape, String customDataSource) {
        // Use the shape for the function name.
        Symbol symbol = context.getSymbolProvider().toSymbol(shape);

        if (
            serdeElisionEnabled
                && !disableDeserializationFunctionElision
                && serdeElisionIndex.mayElide(shape)
        ) {
            context.getWriter().addImport("_json", null, TypeScriptDependency.AWS_SMITHY_CLIENT);
            return "_json(" + customDataSource + ")";
        }

        return ProtocolGenerator.getDeserFunctionShortName(symbol)
            + "(" + customDataSource + ", context)";
    }
}
