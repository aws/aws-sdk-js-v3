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

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;

/**
 * Generates Commands for DynamoDB Document Client.
 */
public class AddDocumentClientCommandsPlugin implements TypeScriptIntegration {

  @Override
  public void writeAdditionalFiles(
      TypeScriptSettings settings,
      Model model,
      SymbolProvider symbolProvider,
      BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
  ) {
      ServiceShape service = settings.getService(model);
      if (testServiceId(service, "DynamoDB")) {
        Set<OperationShape> containedOperations = new TreeSet<>(TopDownIndex.of(model).getContainedOperations(service));
        for (OperationShape operation : containedOperations) {
          String operationName = operation.getId().getName();
          if (containsAttributeValue(model, symbolProvider, operation)) {
            writerFactory.accept("document-client/commands/" + operationName + ".ts", writer -> {
              writer.write("// Hello!");
            });
          }
        }
      }
  }

  private boolean testServiceId(Shape serviceShape, String expectedId) {
      return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
  }

  private boolean containsAttributeValue(Model model, SymbolProvider symbolProvider, OperationShape operation) {
      OperationIndex operationIndex = OperationIndex.of(model);
      if (containsAttributeValue(model, symbolProvider, operationIndex.getInput(operation))
              || containsAttributeValue(model, symbolProvider, operationIndex.getOutput(operation))) {
          return true;
      }
      return false;
  }

  private boolean containsAttributeValue(
        Model model,
        SymbolProvider symbolProvider,
        Optional<StructureShape> optionalShape
  ) {
      if (optionalShape.isPresent()) {
        StructureShape structureShape = optionalShape.get();
        for (MemberShape member : structureShape.getAllMembers().values()) {
          if (containsAttributeValue(model, symbolProvider, member, new HashSet<String>())) {
            return true;
          }
        }
      }
      return false;
  }

  private boolean containsAttributeValue(
          Model model,
          SymbolProvider symbolProvider,
          MemberShape member,
          Set<String> parents
  ) {
      Shape memberTarget = model.expectShape(member.getTarget());
      parents.add(symbolProvider.toMemberName(member));
      if (memberTarget.isStructureShape()) {
          Collection<MemberShape> structureMemberList = ((StructureShape) memberTarget).getAllMembers().values();
          for (MemberShape structureMember : structureMemberList) {
              if (!parents.contains(symbolProvider.toMemberName(structureMember))
                      && containsAttributeValue(model, symbolProvider, structureMember, parents)) {
                  return true;
              }
          }
      } else if (memberTarget.isUnionShape()) {
          if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
            return true;
          } else {
            Collection<MemberShape> unionMemberList = ((UnionShape) memberTarget).getAllMembers().values();
            for (MemberShape unionMember : unionMemberList) {
                if (!parents.contains(symbolProvider.toMemberName(unionMember))
                        && containsAttributeValue(model, symbolProvider, unionMember, parents)) {
                    return true;
                }
            }
          }
      } else if (memberTarget.isMapShape()) {
          MemberShape mapMember = ((MapShape) memberTarget).getValue();
          if (!parents.contains(symbolProvider.toMemberName(mapMember))
                  && containsAttributeValue(model, symbolProvider, mapMember, parents)) {
              return true;
          }
      } else if (memberTarget instanceof CollectionShape) {
          MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
          if (!parents.contains(symbolProvider.toMemberName(collectionMember))
                  && containsAttributeValue(model, symbolProvider, collectionMember, parents)) {
              return true;
          }
      }
      return false;
  }
}
