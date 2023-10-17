package software.amazon.smithy.aws.typescript.codegen.visitor;

import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.typescript.codegen.integration.DocumentMemberDeserVisitor;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.typescript.codegen.knowledge.SerdeElisionIndex;

public class MemberDeserVisitor extends DocumentMemberDeserVisitor {
    protected GenerationContext context;
    protected String dataSource;
    protected SerdeElisionIndex serdeElisionIndex;

    public MemberDeserVisitor(
            GenerationContext context,
            String dataSource,
            TimestampFormatTrait.Format defaultTimestampFormat
    ) {
        super(context, dataSource, defaultTimestampFormat);
        this.serdeElisionIndex = SerdeElisionIndex.of(context.getModel());
        this.context = context;
        this.dataSource = dataSource;
    }

    protected String getDelegateDeserializer(Shape shape, String customDataSource) {
        // Use the shape for the function name.
        Symbol symbol = context.getSymbolProvider().toSymbol(shape);

        if (serdeElisionEnabled && serdeElisionIndex.mayElide(shape)) {
            return "_json(" + customDataSource + ")";
        }

        return ProtocolGenerator.getDeserFunctionShortName(symbol)
                + "(" + customDataSource + ", context)";
    }
}
