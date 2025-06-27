/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import software.amazon.smithy.aws.traits.protocols.AwsQueryErrorTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.ErrorTrait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;
import software.amazon.smithy.waiters.Acceptor;
import software.amazon.smithy.waiters.Matcher;
import software.amazon.smithy.waiters.WaitableTrait;
import software.amazon.smithy.waiters.Waiter;


@SmithyInternalApi
public final class ProcessAwsQueryWaiters implements TypeScriptIntegration {

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        Map<String, String> errorCodeToShapeId = new HashMap<>();

        ServiceShape serviceShape = settings.getService(model);
        TopDownIndex topDownIndex = TopDownIndex.of(model);
        for (OperationShape operationShape : topDownIndex.getContainedOperations(serviceShape)) {
            for (ShapeId errorShapeId : operationShape.getErrors()) {
                Shape errorShape = model.expectShape(errorShapeId);
                if (errorShape.hasTrait(ErrorTrait.class) && errorShape.hasTrait(AwsQueryErrorTrait.class)) {
                    AwsQueryErrorTrait awsQueryTrait = errorShape.expectTrait(AwsQueryErrorTrait.class);
                    errorCodeToShapeId.put(awsQueryTrait.getCode(), errorShape.getId().getName());
                }
            }
        }

        List<Shape> modifiedShapes = new ArrayList<>();

        for (OperationShape operationShape : topDownIndex.getContainedOperations(serviceShape)) {
            OperationShape.Builder operationBuilder = operationShape.toBuilder();
            if (operationShape.hasTrait(WaitableTrait.class)) {
                operationBuilder.removeTrait(WaitableTrait.ID);
                WaitableTrait waiterTrait = operationShape.expectTrait(WaitableTrait.class);
                WaitableTrait.Builder waitableTraitBuilder = (WaitableTrait.Builder) waiterTrait.toBuilder();
                for (Map.Entry<String, Waiter> entry : waiterTrait.getWaiters().entrySet()) {
                    String name = entry.getKey();
                    Waiter waiter = entry.getValue();
                    Waiter.Builder waiterBuilder = (Waiter.Builder) waiter.toBuilder();
                    waiterBuilder.clearAcceptors();
                    for (Acceptor acceptor : waiter.getAcceptors()) {
                        ObjectNode acceptorNode = acceptor.toNode().expectObjectNode();
                        Matcher matcher = acceptor.getMatcher();
                        if (matcher instanceof Matcher.ErrorTypeMember) {
                            ObjectNode matcherNode = matcher.toNode().expectObjectNode();

                            String errorCode = matcherNode.expectStringMember("errorType").getValue();
                            if (errorCodeToShapeId.containsKey(errorCode)) {
                                matcherNode = matcherNode.toBuilder()
                                        .withMember("errorType", errorCodeToShapeId.get(errorCode))
                                        .build();

                                acceptorNode = acceptorNode.toBuilder()
                                        .withMember("matcher", matcherNode)
                                        .build();
                            }
                        }
                        waiterBuilder.addAcceptor(Acceptor.fromNode(acceptorNode));
                    }
                    waitableTraitBuilder.put(name, waiterBuilder.build());
                }
                operationBuilder.addTrait(waitableTraitBuilder.build());
            }
            modifiedShapes.add(operationBuilder.build());
        }

        if (!modifiedShapes.isEmpty()) {
            ModelTransformer transformer = ModelTransformer.create();
            model = transformer.replaceShapes(model, modifiedShapes);
        }

        return model;
    }
}
