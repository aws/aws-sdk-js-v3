package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.ArrayNode;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.node.StringNode;
import software.amazon.smithy.model.shapes.AbstractShapeBuilder;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.DynamicTrait;
import software.amazon.smithy.model.traits.Trait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

import java.util.*;

@SmithyInternalApi
public final class ProcessAwsQueryWaiters implements TypeScriptIntegration {

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        // create mapping of exception shape IDs and awsQuery error code
        Map<String, ShapeId> errorCodeToShapeId = new HashMap<>();
        for (Shape shape : model.toSet()) {
            if (shape.hasTrait("smithy.api#error") && shape.hasTrait("aws.protocols#awsQueryError")) {
                Optional<Trait> awsQueryTraitOpt = shape.findTrait("aws.protocols#awsQueryError");
                if (awsQueryTraitOpt.isPresent()) {
                    Trait awsQueryTrait = awsQueryTraitOpt.get();
                    ObjectNode traitValue = awsQueryTrait.toNode().expectObjectNode();
                    Optional<Node> memberNodeOpt = traitValue.getMember("code");
                    if (memberNodeOpt.isPresent()){
                        Optional<StringNode> codeNodeOpt = memberNodeOpt.get().asStringNode();
                        if (codeNodeOpt.isPresent()){
                            String code = codeNodeOpt.get().getValue();
                            errorCodeToShapeId.put(code, shape.getId());
                        }
                    }
                }
            }
        }


        List<Shape> modifiedShapes = new ArrayList<>();

        for (Shape shape : model.toSet()) {
            Optional<Trait> waitableTraitOpt = shape.findTrait("smithy.waiters#waitable");
            if (waitableTraitOpt.isPresent()) {
                Trait waitableTrait = waitableTraitOpt.get();
                ObjectNode traitValue = waitableTrait.toNode().expectObjectNode();
                ObjectNode.Builder traitValueBuilder = traitValue.toBuilder();
                boolean modified = false;

                for (Map.Entry<StringNode, Node> waiterEntry : traitValue.getMembers().entrySet()) {
                    StringNode waiterNameNode = waiterEntry.getKey();
                    Node waiterNode = waiterEntry.getValue();

                    if (waiterNode.isObjectNode()) {
                        ObjectNode waiterObject = waiterNode.expectObjectNode();
                        ObjectNode.Builder waiterObjectBuilder = waiterObject.toBuilder();
                        boolean waiterModified = false;

                        Optional<ArrayNode> acceptorsArrayOpt = waiterObject.getArrayMember("acceptors");
                        if (acceptorsArrayOpt.isPresent()) {
                            ArrayNode acceptorsArray = acceptorsArrayOpt.get();
                            ArrayNode.Builder acceptorsArrayBuilder = ArrayNode.builder();
                            boolean acceptorsModified = false;

                            for (Node acceptorNode : acceptorsArray.getElements()) {
                                if (acceptorNode.isObjectNode()) {
                                    ObjectNode acceptorObject = acceptorNode.expectObjectNode();
                                    Optional<ObjectNode> matcherObjectOpt = acceptorObject.getObjectMember("matcher");
                                    if (matcherObjectOpt.isPresent()) {
                                        ObjectNode matcherObject = matcherObjectOpt.get();
                                        Optional<StringNode> errorTypeNodeOpt = matcherObject.getStringMember("errorType");
                                        if (errorTypeNodeOpt.isPresent()) {
                                            String errorType = errorTypeNodeOpt.get().getValue();
                                            ShapeId errorShapeId = errorCodeToShapeId.get(errorType);
                                            if (errorShapeId != null) {
                                                // Replace the errorType value with the shape ID
                                                ObjectNode modifiedMatcherObject = matcherObject.withMember("errorType", Node.from(errorShapeId.toString()));
                                                ObjectNode modifiedAcceptorObject = acceptorObject.withMember("matcher", modifiedMatcherObject);
                                                acceptorsArrayBuilder.withValue(modifiedAcceptorObject);
                                                acceptorsModified = true;
                                                continue;
                                            }
                                        }
                                    }
                                    // If not modified, add the original acceptor
                                    acceptorsArrayBuilder.withValue(acceptorObject);
                                } else {
                                    acceptorsArrayBuilder.withValue(acceptorNode);
                                }
                            }
                            if (acceptorsModified) {
                                waiterObjectBuilder.withMember("acceptors", acceptorsArrayBuilder.build());
                                waiterModified = true;
                            }
                        }
                        if (waiterModified) {
                            traitValueBuilder.withMember(waiterNameNode, waiterObjectBuilder.build());
                            modified = true;
                        }
                    }
                }

                if (modified) {
                    Trait modifiedWaitableTrait = new DynamicTrait(waitableTrait.toShapeId(), traitValueBuilder.build());
                    AbstractShapeBuilder<?, ?> shapeBuilder = Shape.shapeToBuilder(shape);

                    shapeBuilder.removeTrait(waitableTrait.toShapeId());
                    shapeBuilder.addTrait(modifiedWaitableTrait);
                    Shape modifiedShape = shapeBuilder.build();

                    modifiedShapes.add(modifiedShape);
                }
            }
        }

        // replace the modified shapes in the model
        if (!modifiedShapes.isEmpty()) {
            ModelTransformer transformer = ModelTransformer.create();
            model = transformer.replaceShapes(model, modifiedShapes);
        }

        // print the transformation
        for (Shape updatedShape : model.toSet()) {
            Optional<Trait> waitableTraitOpt = updatedShape.findTrait("smithy.waiters#waitable");
            if (waitableTraitOpt.isPresent()) {
                Trait waitableTrait = waitableTraitOpt.get();
                ObjectNode traitValue = waitableTrait.toNode().expectObjectNode();

                System.out.println("Waitable trait for shape: " + updatedShape.getId());
                String json = Node.prettyPrintJson(traitValue);
                System.out.println(json);
            }
        }

        return model;
    }
}