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
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;

final class DocumentClientUtils {
    private DocumentClientUtils() {}

    static String getModifiedName(String name) {
      return name.replace("Items", "").replace("Item", "");
    }

    static boolean containsAttributeValue(
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

    static boolean containsAttributeValue(
          Model model,
          SymbolProvider symbolProvider,
          MemberShape member,
          Set<String> parents
    ) {
      Shape memberTarget = model.expectShape(member.getTarget());
      if (memberTarget.isStructureShape()) {
          if (!parents.contains(symbolProvider.toMemberName(member))) {
              parents.add(symbolProvider.toMemberName(member));
              Collection<MemberShape> structureMemberList = ((StructureShape) memberTarget).getAllMembers().values();
              for (MemberShape structureMember : structureMemberList) {
                  if (!parents.contains(symbolProvider.toMemberName(structureMember))
                          && containsAttributeValue(model, symbolProvider, structureMember, parents)) {
                      return true;
                  }
              }

          }
      } else if (memberTarget.isUnionShape()) {
          if (symbolProvider.toSymbol(memberTarget).getName().equals("AttributeValue")) {
              return true;
          } else if (!parents.contains(symbolProvider.toMemberName(member))) {
              parents.add(symbolProvider.toMemberName(member));
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
          if (containsAttributeValue(model, symbolProvider, mapMember, parents)) {
              return true;
          }
      } else if (memberTarget instanceof CollectionShape) {
          MemberShape collectionMember = ((CollectionShape) memberTarget).getMember();
          if (containsAttributeValue(model, symbolProvider, collectionMember, parents)) {
              return true;
          }
      }
      return false;
    }
}
