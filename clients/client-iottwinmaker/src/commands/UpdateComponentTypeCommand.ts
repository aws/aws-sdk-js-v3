// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { UpdateComponentTypeRequest, UpdateComponentTypeResponse } from "../models/models_0";
import { de_UpdateComponentTypeCommand, se_UpdateComponentTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComponentTypeCommand}.
 */
export interface UpdateComponentTypeCommandInput extends UpdateComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComponentTypeCommand}.
 */
export interface UpdateComponentTypeCommandOutput extends UpdateComponentTypeResponse, __MetadataBearer {}

/**
 * <p>Updates information in a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, UpdateComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, UpdateComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTTwinMakerClient(config);
 * const input = { // UpdateComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   isSingleton: true || false,
 *   componentTypeId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   propertyDefinitions: { // PropertyDefinitionsRequest
 *     "<keys>": { // PropertyDefinitionRequest
 *       dataType: { // DataType
 *         type: "STRING_VALUE", // required
 *         nestedType: {
 *           type: "STRING_VALUE", // required
 *           nestedType: "<DataType>",
 *           allowedValues: [ // DataValueList
 *             { // DataValue
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               integerValue: Number("int"),
 *               longValue: Number("long"),
 *               stringValue: "STRING_VALUE",
 *               listValue: [
 *                 {
 *                   booleanValue: true || false,
 *                   doubleValue: Number("double"),
 *                   integerValue: Number("int"),
 *                   longValue: Number("long"),
 *                   stringValue: "STRING_VALUE",
 *                   listValue: "<DataValueList>",
 *                   mapValue: { // DataValueMap
 *                     "<keys>": "<DataValue>",
 *                   },
 *                   relationshipValue: { // RelationshipValue
 *                     targetEntityId: "STRING_VALUE",
 *                     targetComponentName: "STRING_VALUE",
 *                   },
 *                   expression: "STRING_VALUE",
 *                 },
 *               ],
 *               mapValue: {
 *                 "<keys>": "<DataValue>",
 *               },
 *               relationshipValue: {
 *                 targetEntityId: "STRING_VALUE",
 *                 targetComponentName: "STRING_VALUE",
 *               },
 *               expression: "STRING_VALUE",
 *             },
 *           ],
 *           unitOfMeasure: "STRING_VALUE",
 *           relationship: { // Relationship
 *             targetComponentTypeId: "STRING_VALUE",
 *             relationshipType: "STRING_VALUE",
 *           },
 *         },
 *         allowedValues: "<DataValueList>",
 *         unitOfMeasure: "STRING_VALUE",
 *         relationship: {
 *           targetComponentTypeId: "STRING_VALUE",
 *           relationshipType: "STRING_VALUE",
 *         },
 *       },
 *       isRequiredInEntity: true || false,
 *       isExternalId: true || false,
 *       isStoredExternally: true || false,
 *       isTimeSeries: true || false,
 *       defaultValue: "<DataValue>",
 *       configuration: { // Configuration
 *         "<keys>": "STRING_VALUE",
 *       },
 *       displayName: "STRING_VALUE",
 *     },
 *   },
 *   extendsFrom: [ // ExtendsFrom
 *     "STRING_VALUE",
 *   ],
 *   functions: { // FunctionsRequest
 *     "<keys>": { // FunctionRequest
 *       requiredProperties: [ // RequiredProperties
 *         "STRING_VALUE",
 *       ],
 *       scope: "STRING_VALUE",
 *       implementedBy: { // DataConnector
 *         lambda: { // LambdaFunction
 *           arn: "STRING_VALUE", // required
 *         },
 *         isNative: true || false,
 *       },
 *     },
 *   },
 *   propertyGroups: { // PropertyGroupsRequest
 *     "<keys>": { // PropertyGroupRequest
 *       groupType: "STRING_VALUE",
 *       propertyNames: [ // PropertyNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   componentTypeName: "STRING_VALUE",
 *   compositeComponentTypes: { // CompositeComponentTypesRequest
 *     "<keys>": { // CompositeComponentTypeRequest
 *       componentTypeId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateComponentTypeResponse
 * //   workspaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   componentTypeId: "STRING_VALUE", // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateComponentTypeCommandInput - {@link UpdateComponentTypeCommandInput}
 * @returns {@link UpdateComponentTypeCommandOutput}
 * @see {@link UpdateComponentTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentTypeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateComponentTypeCommand extends $Command
  .classBuilder<
    UpdateComponentTypeCommandInput,
    UpdateComponentTypeCommandOutput,
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
  .s("AWSIoTTwinMaker", "UpdateComponentType", {})
  .n("IoTTwinMakerClient", "UpdateComponentTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateComponentTypeCommand)
  .de(de_UpdateComponentTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateComponentTypeRequest;
      output: UpdateComponentTypeResponse;
    };
    sdk: {
      input: UpdateComponentTypeCommandInput;
      output: UpdateComponentTypeCommandOutput;
    };
  };
}
