/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Optional;
import software.amazon.smithy.aws.traits.protocols.Ec2QueryNameTrait;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.model.shapes.DocumentShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.ShapeType;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlNameTrait;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.SmithyInternalApi;
import software.amazon.smithy.utils.StringUtils;

/**
 * Visitor to generate serialization functions for shapes in form-urlencoded
 * based document bodies specific to aws.ec2.
 *
 * This class uses the implementations provided by {@code QueryShapeSerVisitor} but with
 * the following protocol specific customizations for aws.ec2:
 *
 * <ul>
 *   <li>aws.ec2 flattens all lists, sets, and maps regardless of the {@code @xmlFlattened} trait.</li>
 *   <li>aws.ec2 respects the {@code @ec2QueryName} trait, then the {@code xmlName}
 *     trait value with the first letter capitalized.</li>
 * </ul>
 *
 * Timestamps are serialized to {@link Format}.DATE_TIME by default.
 *
 * @see AwsEc2
 * @see QueryShapeSerVisitor
 * @see <a href="https://smithy.io/2.0/aws/protocols/aws-ec2-query-protocol.html#aws-protocols-ec2queryname-trait">Smithy EC2 Query Name trait.</a>
 */
@SmithyInternalApi
final class Ec2ShapeSerVisitor extends QueryShapeSerVisitor {
    Ec2ShapeSerVisitor(GenerationContext context) {
        super(context);
        serializeEmptyLists = false;
    }

    @Override
    protected void serializeDocument(GenerationContext context, DocumentShape shape) {
        throw new CodegenException(
            String.format(
                "Cannot serialize Document types in the aws.ec2 protocol, shape: %s.",
                shape.getId()
            )
        );
    }

    @Override
    protected String getMemberSerializedLocationName(MemberShape memberShape, String defaultValue) {
        // The serialization for aws.ec2 prioritizes the @ec2QueryName trait for serialization.
        Optional<Ec2QueryNameTrait> trait = memberShape.getTrait(Ec2QueryNameTrait.class);
        if (trait.isPresent()) {
            return trait.get().getValue();
        }

        // Fall back to the capitalized @xmlName trait if present on the member,
        // otherwise use the capitalized default value.
        return memberShape.getTrait(XmlNameTrait.class)
            .map(XmlNameTrait::getValue)
            .map(StringUtils::capitalize)
            .orElseGet(() -> StringUtils.capitalize(defaultValue));
    }

    @Override
    protected boolean isFlattenedMember(GenerationContext context, MemberShape memberShape) {
        // All lists, sets, and maps are flattened in aws.ec2.
        ShapeType targetType = context.getModel().expectShape(memberShape.getTarget()).getType();
        return targetType == ShapeType.LIST || targetType == ShapeType.SET || targetType == ShapeType.MAP;
    }
}
