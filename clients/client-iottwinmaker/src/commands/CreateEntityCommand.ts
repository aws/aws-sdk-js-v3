// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { CreateEntityRequest, CreateEntityResponse } from "../models/models_0";
import { CreateEntity } from "../schemas/schemas_7_Component";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEntityCommand}.
 */
export interface CreateEntityCommandInput extends CreateEntityRequest {}
/**
 * @public
 *
 * The output of {@link CreateEntityCommand}.
 */
export interface CreateEntityCommandOutput extends CreateEntityResponse, __MetadataBearer {}

/**
 * <p>Creates an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE",
 *   entityName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   components: { // ComponentsMapRequest
 *     "<keys>": { // ComponentRequest
 *       description: "STRING_VALUE",
 *       componentTypeId: "STRING_VALUE",
 *       properties: { // PropertyRequests
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
 *       propertyGroups: { // ComponentPropertyGroupRequests
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
 *   compositeComponents: { // CompositeComponentsMapRequest
 *     "<keys>": { // CompositeComponentRequest
 *       description: "STRING_VALUE",
 *       properties: {
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
 *       propertyGroups: {
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
 *   parentEntityId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEntityCommand(input);
 * const response = await client.send(command);
 * // { // CreateEntityResponse
 * //   entityId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateEntityCommandInput - {@link CreateEntityCommandInput}
 * @returns {@link CreateEntityCommandOutput}
 * @see {@link CreateEntityCommandInput} for command's `input` shape.
 * @see {@link CreateEntityCommandOutput} for command's `response` shape.
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
export class CreateEntityCommand extends $Command
  .classBuilder<
    CreateEntityCommandInput,
    CreateEntityCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "CreateEntity", {})
  .n("IoTTwinMakerClient", "CreateEntityCommand")
  .sc(CreateEntity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEntityRequest;
      output: CreateEntityResponse;
    };
    sdk: {
      input: CreateEntityCommandInput;
      output: CreateEntityCommandOutput;
    };
  };
}
