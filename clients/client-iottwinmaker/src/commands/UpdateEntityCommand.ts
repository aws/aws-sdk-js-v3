// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { UpdateEntityRequest, UpdateEntityResponse } from "../models/models_0";
import { UpdateEntity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEntityCommand}.
 */
export interface UpdateEntityCommandInput extends UpdateEntityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEntityCommand}.
 */
export interface UpdateEntityCommandOutput extends UpdateEntityResponse, __MetadataBearer {}

/**
 * <p>Updates an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, UpdateEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, UpdateEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // UpdateEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   entityName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   componentUpdates: { // ComponentUpdatesMapRequest
 *     "<keys>": { // ComponentUpdateRequest
 *       updateType: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       componentTypeId: "STRING_VALUE",
 *       propertyUpdates: { // PropertyRequests
 *         "<keys>": { // PropertyRequest
 *           definition: { // PropertyDefinitionRequest
 *             dataType: { // DataType
 *               type: "STRING_VALUE", // required
 *               nestedType: {
 *                 type: "STRING_VALUE", // required
 *                 nestedType: "<DataType>",
 *                 allowedValues: [ // DataValueList
 *                   { // DataValue
 *                     booleanValue: true || false,
 *                     doubleValue: Number("double"),
 *                     integerValue: Number("int"),
 *                     longValue: Number("long"),
 *                     stringValue: "STRING_VALUE",
 *                     listValue: [
 *                       {
 *                         booleanValue: true || false,
 *                         doubleValue: Number("double"),
 *                         integerValue: Number("int"),
 *                         longValue: Number("long"),
 *                         stringValue: "STRING_VALUE",
 *                         listValue: "<DataValueList>",
 *                         mapValue: { // DataValueMap
 *                           "<keys>": "<DataValue>",
 *                         },
 *                         relationshipValue: { // RelationshipValue
 *                           targetEntityId: "STRING_VALUE",
 *                           targetComponentName: "STRING_VALUE",
 *                         },
 *                         expression: "STRING_VALUE",
 *                       },
 *                     ],
 *                     mapValue: {
 *                       "<keys>": "<DataValue>",
 *                     },
 *                     relationshipValue: {
 *                       targetEntityId: "STRING_VALUE",
 *                       targetComponentName: "STRING_VALUE",
 *                     },
 *                     expression: "STRING_VALUE",
 *                   },
 *                 ],
 *                 unitOfMeasure: "STRING_VALUE",
 *                 relationship: { // Relationship
 *                   targetComponentTypeId: "STRING_VALUE",
 *                   relationshipType: "STRING_VALUE",
 *                 },
 *               },
 *               allowedValues: "<DataValueList>",
 *               unitOfMeasure: "STRING_VALUE",
 *               relationship: {
 *                 targetComponentTypeId: "STRING_VALUE",
 *                 relationshipType: "STRING_VALUE",
 *               },
 *             },
 *             isRequiredInEntity: true || false,
 *             isExternalId: true || false,
 *             isStoredExternally: true || false,
 *             isTimeSeries: true || false,
 *             defaultValue: "<DataValue>",
 *             configuration: { // Configuration
 *               "<keys>": "STRING_VALUE",
 *             },
 *             displayName: "STRING_VALUE",
 *           },
 *           value: "<DataValue>",
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *       propertyGroupUpdates: { // ComponentPropertyGroupRequests
 *         "<keys>": { // ComponentPropertyGroupRequest
 *           groupType: "STRING_VALUE",
 *           propertyNames: [ // PropertyNames
 *             "STRING_VALUE",
 *           ],
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   compositeComponentUpdates: { // CompositeComponentUpdatesMapRequest
 *     "<keys>": { // CompositeComponentUpdateRequest
 *       updateType: "STRING_VALUE",
 *       description: "STRING_VALUE",
 *       propertyUpdates: {
 *         "<keys>": {
 *           definition: {
 *             dataType: "<DataType>",
 *             isRequiredInEntity: true || false,
 *             isExternalId: true || false,
 *             isStoredExternally: true || false,
 *             isTimeSeries: true || false,
 *             defaultValue: "<DataValue>",
 *             configuration: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             displayName: "STRING_VALUE",
 *           },
 *           value: "<DataValue>",
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *       propertyGroupUpdates: {
 *         "<keys>": {
 *           groupType: "STRING_VALUE",
 *           propertyNames: [
 *             "STRING_VALUE",
 *           ],
 *           updateType: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   parentEntityUpdate: { // ParentEntityUpdateRequest
 *     updateType: "STRING_VALUE", // required
 *     parentEntityId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEntityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEntityResponse
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEntityCommandInput - {@link UpdateEntityCommandInput}
 * @returns {@link UpdateEntityCommandOutput}
 * @see {@link UpdateEntityCommandInput} for command's `input` shape.
 * @see {@link UpdateEntityCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
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
export class UpdateEntityCommand extends $Command
  .classBuilder<
    UpdateEntityCommandInput,
    UpdateEntityCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "UpdateEntity", {})
  .n("IoTTwinMakerClient", "UpdateEntityCommand")
  .sc(UpdateEntity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEntityRequest;
      output: UpdateEntityResponse;
    };
    sdk: {
      input: UpdateEntityCommandInput;
      output: UpdateEntityCommandOutput;
    };
  };
}
