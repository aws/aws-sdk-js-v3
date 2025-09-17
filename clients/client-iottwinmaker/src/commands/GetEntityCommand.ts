// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetEntityRequest, GetEntityResponse } from "../models/models_0";
import { de_GetEntityCommand, se_GetEntityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEntityCommand}.
 */
export interface GetEntityCommandInput extends GetEntityRequest {}
/**
 * @public
 *
 * The output of {@link GetEntityCommand}.
 */
export interface GetEntityCommandOutput extends GetEntityResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 * };
 * const command = new GetEntityCommand(input);
 * const response = await client.send(command);
 * // { // GetEntityResponse
 * //   entityId: "STRING_VALUE", // required
 * //   entityName: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // Status
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   workspaceId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   components: { // ComponentsMap
 * //     "<keys>": { // ComponentResponse
 * //       componentName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       componentTypeId: "STRING_VALUE",
 * //       status: {
 * //         state: "STRING_VALUE",
 * //         error: {
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       definedIn: "STRING_VALUE",
 * //       properties: { // PropertyResponses
 * //         "<keys>": { // PropertyResponse
 * //           definition: { // PropertyDefinitionResponse
 * //             dataType: { // DataType
 * //               type: "STRING_VALUE", // required
 * //               nestedType: {
 * //                 type: "STRING_VALUE", // required
 * //                 nestedType: "<DataType>",
 * //                 allowedValues: [ // DataValueList
 * //                   { // DataValue
 * //                     booleanValue: true || false,
 * //                     doubleValue: Number("double"),
 * //                     integerValue: Number("int"),
 * //                     longValue: Number("long"),
 * //                     stringValue: "STRING_VALUE",
 * //                     listValue: [
 * //                       {
 * //                         booleanValue: true || false,
 * //                         doubleValue: Number("double"),
 * //                         integerValue: Number("int"),
 * //                         longValue: Number("long"),
 * //                         stringValue: "STRING_VALUE",
 * //                         listValue: "<DataValueList>",
 * //                         mapValue: { // DataValueMap
 * //                           "<keys>": "<DataValue>",
 * //                         },
 * //                         relationshipValue: { // RelationshipValue
 * //                           targetEntityId: "STRING_VALUE",
 * //                           targetComponentName: "STRING_VALUE",
 * //                         },
 * //                         expression: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     mapValue: {
 * //                       "<keys>": "<DataValue>",
 * //                     },
 * //                     relationshipValue: {
 * //                       targetEntityId: "STRING_VALUE",
 * //                       targetComponentName: "STRING_VALUE",
 * //                     },
 * //                     expression: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 unitOfMeasure: "STRING_VALUE",
 * //                 relationship: { // Relationship
 * //                   targetComponentTypeId: "STRING_VALUE",
 * //                   relationshipType: "STRING_VALUE",
 * //                 },
 * //               },
 * //               allowedValues: "<DataValueList>",
 * //               unitOfMeasure: "STRING_VALUE",
 * //               relationship: {
 * //                 targetComponentTypeId: "STRING_VALUE",
 * //                 relationshipType: "STRING_VALUE",
 * //               },
 * //             },
 * //             isTimeSeries: true || false, // required
 * //             isRequiredInEntity: true || false, // required
 * //             isExternalId: true || false, // required
 * //             isStoredExternally: true || false, // required
 * //             isImported: true || false, // required
 * //             isFinal: true || false, // required
 * //             isInherited: true || false, // required
 * //             defaultValue: "<DataValue>",
 * //             configuration: { // Configuration
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             displayName: "STRING_VALUE",
 * //           },
 * //           value: "<DataValue>",
 * //           areAllPropertyValuesReturned: true || false,
 * //         },
 * //       },
 * //       propertyGroups: { // ComponentPropertyGroupResponses
 * //         "<keys>": { // ComponentPropertyGroupResponse
 * //           groupType: "STRING_VALUE", // required
 * //           propertyNames: [ // PropertyNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           isInherited: true || false, // required
 * //         },
 * //       },
 * //       syncSource: "STRING_VALUE",
 * //       areAllPropertiesReturned: true || false,
 * //       compositeComponents: { // CompositeComponentResponse
 * //         "<keys>": { // ComponentSummary
 * //           componentName: "STRING_VALUE", // required
 * //           componentTypeId: "STRING_VALUE", // required
 * //           definedIn: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           propertyGroups: {
 * //             "<keys>": {
 * //               groupType: "STRING_VALUE", // required
 * //               propertyNames: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               isInherited: true || false, // required
 * //             },
 * //           },
 * //           status: "<Status>", // required
 * //           syncSource: "STRING_VALUE",
 * //           componentPath: "STRING_VALUE",
 * //         },
 * //       },
 * //       areAllCompositeComponentsReturned: true || false,
 * //     },
 * //   },
 * //   parentEntityId: "STRING_VALUE", // required
 * //   hasChildEntities: true || false, // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   syncSource: "STRING_VALUE",
 * //   areAllComponentsReturned: true || false,
 * // };
 *
 * ```
 *
 * @param GetEntityCommandInput - {@link GetEntityCommandInput}
 * @returns {@link GetEntityCommandOutput}
 * @see {@link GetEntityCommandInput} for command's `input` shape.
 * @see {@link GetEntityCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
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
export class GetEntityCommand extends $Command
  .classBuilder<
    GetEntityCommandInput,
    GetEntityCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "GetEntity", {})
  .n("IoTTwinMakerClient", "GetEntityCommand")
  .f(void 0, void 0)
  .ser(se_GetEntityCommand)
  .de(de_GetEntityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEntityRequest;
      output: GetEntityResponse;
    };
    sdk: {
      input: GetEntityCommandInput;
      output: GetEntityCommandOutput;
    };
  };
}
