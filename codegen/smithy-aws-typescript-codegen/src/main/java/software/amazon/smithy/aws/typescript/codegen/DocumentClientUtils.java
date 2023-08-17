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
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.CollectionShape;
import software.amazon.smithy.model.shapes.MapShape;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.StructureShape;
import software.amazon.smithy.model.shapes.UnionShape;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
final class DocumentClientUtils {
    static final String CLIENT_NAME = "DynamoDBDocumentClient";
    static final String CLIENT_FULL_NAME = "DynamoDBDocument";
    static final String CLIENT_CONFIG_NAME = getResolvedConfigTypeName(CLIENT_NAME);
    static final String CLIENT_COMMANDS_FOLDER = "commands";
    static final String CLIENT_UTILS_FILE = "utils";
    static final String DOC_CLIENT_PREFIX = "doc-client-";

    static final String CLIENT_TRANSLATE_CONFIG_KEY = "translateConfig";
    static final String CLIENT_TRANSLATE_CONFIG_TYPE = "TranslateConfig";
    static final String CLIENT_MARSHALL_OPTIONS = "marshallOptions";
    static final String CLIENT_UNMARSHALL_OPTIONS = "unmarshallOptions";

    private DocumentClientUtils() {}

    static String getResolvedConfigTypeName(String symbolName) {
        return symbolName + "ResolvedConfig";
    }

    static String getModifiedName(String name) {
      return name.replace("Items", "").replace("Item", "");
    }

    static boolean containsAttributeValue(
        Model model,
        SymbolProvider symbolProvider,
        OperationShape operation
    ) {
        OperationIndex operationIndex = OperationIndex.of(model);
        if (containsAttributeValue(model, symbolProvider, operationIndex.getInput(operation))
                || containsAttributeValue(model, symbolProvider, operationIndex.getOutput(operation))) {
            return true;
        }
        return false;
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

    static String getCommandDocs(String operationName) {
        return "Accepts native JavaScript types instead of `AttributeValue`s, and calls\n"
            + operationName + " operation from "
            + "{@link @aws-sdk/client-dynamodb#"
            + operationName
            + "}.\n\n"
            + "JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes \n"
            + "required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.";
    }

    static String getClientDocs() {
        return "The document client simplifies working with items in Amazon DynamoDB by\n"
        + "abstracting away the notion of attribute values. This abstraction annotates native\n"
        + "JavaScript types supplied as input parameters, as well as converts annotated\n"
        + "response data to native JavaScript types.\n\n"
        + "## Marshalling Input and Unmarshalling Response Data\n\n"
        + "The document client affords developers the use of native JavaScript types\n"
        + "instead of `AttributeValue`s to simplify the JavaScript development\n"
        + "experience with Amazon DynamoDB. JavaScript objects passed in as parameters\n"
        + "are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.\n"
        + "Responses from DynamoDB are unmarshalled into plain JavaScript objects\n"
        + "by the `DocumentClient`. The `DocumentClient` does not accept\n"
        + "`AttributeValue`s in favor of native JavaScript types.\n\n"
        + "|          JavaScript Type          | DynamoDB AttributeValue |\n"
        + "| :-------------------------------: | ----------------------- |\n"
        + "|              String               | S                       |\n"
        + "|          Number / BigInt          | N                       |\n"
        + "|              Boolean              | BOOL                    |\n"
        + "|               null                | NULL                    |\n"
        + "|               Array               | L                       |\n"
        + "|              Object               | M                       |\n"
        + "|   Set\\<Uint8Array, Blob, ...\\>    | BS                      |\n"
        + "|       Set\\<Number, BigInt\\>       | NS                      |\n"
        + "|           Set\\<String\\>           | SS                      |\n"
        + "| Uint8Array, Buffer, File, Blob... | B                       |\n"
        + "\n### Example\n\n"
        + "Here is an example list which is sent to DynamoDB client in an operation:\n\n"
        + "```json\n"
        + "{ \"L\": [{ \"NULL\": true }, { \"BOOL\": false }, { \"N\": 1 }, { \"S\": \"two\" }] }\n"
        + "```\n"
        + "\nThe DynamoDB document client abstracts the attribute values as follows in\n"
        + "both input and output:\n\n"
        + "```json\n"
        + "[null, false, 1, \"two\"]\n"
        + "```\n\n"
        + "@see {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb | @aws-sdk/client-dynamodb}";
    }
}
