// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { GetComponentTypeRequest, GetComponentTypeResponse } from "../models/models_0";
import { GetComponentType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComponentTypeCommand}.
 */
export interface GetComponentTypeCommandInput extends GetComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentTypeCommand}.
 */
export interface GetComponentTypeCommandOutput extends GetComponentTypeResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   componentTypeId: "STRING_VALUE", // required
 * };
 * const command = new GetComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentTypeResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   isSingleton: true || false,
 * //   componentTypeId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   propertyDefinitions: { // PropertyDefinitionsResponse
 * //     "<keys>": { // PropertyDefinitionResponse
 * //       dataType: { // DataType
 * //         type: "STRING_VALUE", // required
 * //         nestedType: {
 * //           type: "STRING_VALUE", // required
 * //           nestedType: "<DataType>",
 * //           allowedValues: [ // DataValueList
 * //             { // DataValue
 * //               booleanValue: true || false,
 * //               doubleValue: Number("double"),
 * //               integerValue: Number("int"),
 * //               longValue: Number("long"),
 * //               stringValue: "STRING_VALUE",
 * //               listValue: [
 * //                 {
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   integerValue: Number("int"),
 * //                   longValue: Number("long"),
 * //                   stringValue: "STRING_VALUE",
 * //                   listValue: "<DataValueList>",
 * //                   mapValue: { // DataValueMap
 * //                     "<keys>": "<DataValue>",
 * //                   },
 * //                   relationshipValue: { // RelationshipValue
 * //                     targetEntityId: "STRING_VALUE",
 * //                     targetComponentName: "STRING_VALUE",
 * //                   },
 * //                   expression: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               mapValue: {
 * //                 "<keys>": "<DataValue>",
 * //               },
 * //               relationshipValue: {
 * //                 targetEntityId: "STRING_VALUE",
 * //                 targetComponentName: "STRING_VALUE",
 * //               },
 * //               expression: "STRING_VALUE",
 * //             },
 * //           ],
 * //           unitOfMeasure: "STRING_VALUE",
 * //           relationship: { // Relationship
 * //             targetComponentTypeId: "STRING_VALUE",
 * //             relationshipType: "STRING_VALUE",
 * //           },
 * //         },
 * //         allowedValues: "<DataValueList>",
 * //         unitOfMeasure: "STRING_VALUE",
 * //         relationship: {
 * //           targetComponentTypeId: "STRING_VALUE",
 * //           relationshipType: "STRING_VALUE",
 * //         },
 * //       },
 * //       isTimeSeries: true || false, // required
 * //       isRequiredInEntity: true || false, // required
 * //       isExternalId: true || false, // required
 * //       isStoredExternally: true || false, // required
 * //       isImported: true || false, // required
 * //       isFinal: true || false, // required
 * //       isInherited: true || false, // required
 * //       defaultValue: "<DataValue>",
 * //       configuration: { // Configuration
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   },
 * //   extendsFrom: [ // ExtendsFrom
 * //     "STRING_VALUE",
 * //   ],
 * //   functions: { // FunctionsResponse
 * //     "<keys>": { // FunctionResponse
 * //       requiredProperties: [ // RequiredProperties
 * //         "STRING_VALUE",
 * //       ],
 * //       scope: "STRING_VALUE",
 * //       implementedBy: { // DataConnector
 * //         lambda: { // LambdaFunction
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //         isNative: true || false,
 * //       },
 * //       isInherited: true || false,
 * //     },
 * //   },
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   arn: "STRING_VALUE", // required
 * //   isAbstract: true || false,
 * //   isSchemaInitialized: true || false,
 * //   status: { // Status
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   propertyGroups: { // PropertyGroupsResponse
 * //     "<keys>": { // PropertyGroupResponse
 * //       groupType: "STRING_VALUE", // required
 * //       propertyNames: [ // PropertyNames // required
 * //         "STRING_VALUE",
 * //       ],
 * //       isInherited: true || false, // required
 * //     },
 * //   },
 * //   syncSource: "STRING_VALUE",
 * //   componentTypeName: "STRING_VALUE",
 * //   compositeComponentTypes: { // CompositeComponentTypesResponse
 * //     "<keys>": { // CompositeComponentTypeResponse
 * //       componentTypeId: "STRING_VALUE",
 * //       isInherited: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComponentTypeCommandInput - {@link GetComponentTypeCommandInput}
 * @returns {@link GetComponentTypeCommandOutput}
 * @see {@link GetComponentTypeCommandInput} for command's `input` shape.
 * @see {@link GetComponentTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class GetComponentTypeCommand extends $Command
  .classBuilder<
    GetComponentTypeCommandInput,
    GetComponentTypeCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "GetComponentType", {})
  .n("IoTTwinMakerClient", "GetComponentTypeCommand")
  .sc(GetComponentType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentTypeRequest;
      output: GetComponentTypeResponse;
    };
    sdk: {
      input: GetComponentTypeCommandInput;
      output: GetComponentTypeCommandOutput;
    };
  };
}
