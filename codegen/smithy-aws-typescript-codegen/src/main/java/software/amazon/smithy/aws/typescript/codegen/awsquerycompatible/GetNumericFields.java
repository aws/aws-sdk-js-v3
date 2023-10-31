/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.awsquerycompatible;

import java.util.HashSet;
import java.util.Set;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;


public interface GetNumericFields {
    static String getFor(Model model) {
        Set<String> numericFields = new HashSet<>();
        for (OperationShape operationShape : model.getOperationShapes()) {
            Shape inputShape = model.expectShape(operationShape.getInputShape());
            traverse(inputShape, model, 0, numericFields);
        }
        return "[\"" + String.join("\", \"", numericFields) + "\"]";
    }

    static Set<String> traverse(Shape shape, Model model, int depth, Set<String> fields) {
            if (depth > 10) {
                return fields; // bailout for recursive types.
            }

            Shape target = shape;
            if (shape.isMemberShape()) {
                target = model.expectShape(shape.asMemberShape().get().getTarget());
            }

            switch (target.getType()) {
                case LIST:
                    if (target.asListShape().isPresent()) {
                        traverse(target.asListShape().get().getMember(), model, depth + 1, fields);
                    }
                    break;
                case SET:
                    if (target.asSetShape().isPresent()) {
                        traverse(target.asSetShape().get().getMember(), model, depth + 1, fields);
                    }
                    break;
                case STRUCTURE:
                    if (target.asStructureShape().isPresent()) {
                        target.asStructureShape().get().getAllMembers().values().forEach(
                            s -> traverse(s, model, depth + 1, fields)
                        );
                    }
                    break;
                case UNION:
                    if (target.asUnionShape().isPresent()) {
                        target.asUnionShape().get().getAllMembers().values().forEach(
                            s -> traverse(s, model, depth + 1, fields)
                        );
                    }
                    break;
                case MAP:
                     if (target.asMapShape().isPresent()) {
                         traverse(model.getShape(target.asMapShape().get().getValue().getTarget()).get(),
                             model, depth + 1, fields);
                     }
                     break;
                case BIG_DECIMAL:
                case BIG_INTEGER:
                case DOUBLE:
                case FLOAT:
                case INTEGER:
                case INT_ENUM:
                case LONG:
                case SHORT:
                    if (shape.isMemberShape()) {
                        fields.add(
                            shape.asMemberShape().get().getMemberName()
                        );
                    }
                    break;
                case BLOB:
                case DOCUMENT:
                case TIMESTAMP:
                case MEMBER:
                case OPERATION:
                case RESOURCE:
                case SERVICE:
                case BOOLEAN:
                case BYTE:
                case ENUM:
                case STRING:
                    break;
            }
        return fields;
    }
}
