// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetPropertyValueRequest, GetPropertyValueResponse } from "../models/models_0";
import { de_GetPropertyValueCommand, se_GetPropertyValueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPropertyValueCommand}.
 */
export interface GetPropertyValueCommandInput extends GetPropertyValueRequest {}
/**
 * @public
 *
 * The output of {@link GetPropertyValueCommand}.
 */
export interface GetPropertyValueCommandOutput extends GetPropertyValueResponse, __MetadataBearer {}

/**
 * <p>Gets the property values for a component, component type, entity, or workspace.</p>
 *          <p>You must specify a value for either <code>componentName</code>,
 *             <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetPropertyValueCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetPropertyValueCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetPropertyValueRequest
 *   componentName: "STRING_VALUE",
 *   componentPath: "STRING_VALUE",
 *   componentTypeId: "STRING_VALUE",
 *   entityId: "STRING_VALUE",
 *   selectedProperties: [ // SelectedPropertyList // required
 *     "STRING_VALUE",
 *   ],
 *   workspaceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   propertyGroupName: "STRING_VALUE",
 *   tabularConditions: { // TabularConditions
 *     orderBy: [ // OrderByList
 *       { // OrderBy
 *         order: "STRING_VALUE",
 *         propertyName: "STRING_VALUE", // required
 *       },
 *     ],
 *     propertyFilters: [ // PropertyFilters
 *       { // PropertyFilter
 *         propertyName: "STRING_VALUE",
 *         operator: "STRING_VALUE",
 *         value: { // DataValue
 *           booleanValue: true || false,
 *           doubleValue: Number("double"),
 *           integerValue: Number("int"),
 *           longValue: Number("long"),
 *           stringValue: "STRING_VALUE",
 *           listValue: [ // DataValueList
 *             {
 *               booleanValue: true || false,
 *               doubleValue: Number("double"),
 *               integerValue: Number("int"),
 *               longValue: Number("long"),
 *               stringValue: "STRING_VALUE",
 *               listValue: [
 *                 "<DataValue>",
 *               ],
 *               mapValue: { // DataValueMap
 *                 "<keys>": "<DataValue>",
 *               },
 *               relationshipValue: { // RelationshipValue
 *                 targetEntityId: "STRING_VALUE",
 *                 targetComponentName: "STRING_VALUE",
 *               },
 *               expression: "STRING_VALUE",
 *             },
 *           ],
 *           mapValue: {
 *             "<keys>": "<DataValue>",
 *           },
 *           relationshipValue: {
 *             targetEntityId: "STRING_VALUE",
 *             targetComponentName: "STRING_VALUE",
 *           },
 *           expression: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new GetPropertyValueCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertyValueResponse
 * //   propertyValues: { // PropertyLatestValueMap
 * //     "<keys>": { // PropertyLatestValue
 * //       propertyReference: { // EntityPropertyReference
 * //         componentName: "STRING_VALUE",
 * //         componentPath: "STRING_VALUE",
 * //         externalIdProperty: { // ExternalIdProperty
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         entityId: "STRING_VALUE",
 * //         propertyName: "STRING_VALUE", // required
 * //       },
 * //       propertyValue: { // DataValue
 * //         booleanValue: true || false,
 * //         doubleValue: Number("double"),
 * //         integerValue: Number("int"),
 * //         longValue: Number("long"),
 * //         stringValue: "STRING_VALUE",
 * //         listValue: [ // DataValueList
 * //           {
 * //             booleanValue: true || false,
 * //             doubleValue: Number("double"),
 * //             integerValue: Number("int"),
 * //             longValue: Number("long"),
 * //             stringValue: "STRING_VALUE",
 * //             listValue: [
 * //               "<DataValue>",
 * //             ],
 * //             mapValue: { // DataValueMap
 * //               "<keys>": "<DataValue>",
 * //             },
 * //             relationshipValue: { // RelationshipValue
 * //               targetEntityId: "STRING_VALUE",
 * //               targetComponentName: "STRING_VALUE",
 * //             },
 * //             expression: "STRING_VALUE",
 * //           },
 * //         ],
 * //         mapValue: {
 * //           "<keys>": "<DataValue>",
 * //         },
 * //         relationshipValue: {
 * //           targetEntityId: "STRING_VALUE",
 * //           targetComponentName: "STRING_VALUE",
 * //         },
 * //         expression: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   nextToken: "STRING_VALUE",
 * //   tabularPropertyValues: [ // TabularPropertyValues
 * //     [ // TabularPropertyValue
 * //       { // PropertyTableValue
 * //         "<keys>": "<DataValue>",
 * //       },
 * //     ],
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPropertyValueCommandInput - {@link GetPropertyValueCommandInput}
 * @returns {@link GetPropertyValueCommandOutput}
 * @see {@link GetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link GetPropertyValueCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConnectorFailureException} (client fault)
 *  <p>The connector failed.</p>
 *
 * @throws {@link ConnectorTimeoutException} (client fault)
 *  <p>The connector timed out.</p>
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
export class GetPropertyValueCommand extends $Command
  .classBuilder<
    GetPropertyValueCommandInput,
    GetPropertyValueCommandOutput,
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
  .s("AWSIoTTwinMaker", "GetPropertyValue", {})
  .n("IoTTwinMakerClient", "GetPropertyValueCommand")
  .f(void 0, void 0)
  .ser(se_GetPropertyValueCommand)
  .de(de_GetPropertyValueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPropertyValueRequest;
      output: GetPropertyValueResponse;
    };
    sdk: {
      input: GetPropertyValueCommandInput;
      output: GetPropertyValueCommandOutput;
    };
  };
}
