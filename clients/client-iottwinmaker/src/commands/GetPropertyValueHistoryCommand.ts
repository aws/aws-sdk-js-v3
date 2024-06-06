// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetPropertyValueHistoryRequest, GetPropertyValueHistoryResponse } from "../models/models_0";
import { de_GetPropertyValueHistoryCommand, se_GetPropertyValueHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPropertyValueHistoryCommand}.
 */
export interface GetPropertyValueHistoryCommandInput extends GetPropertyValueHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetPropertyValueHistoryCommand}.
 */
export interface GetPropertyValueHistoryCommandOutput extends GetPropertyValueHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the history of a time series property value for a component,
 *          component type, entity, or workspace.</p>
 *          <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries,
 *          specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity
 *          quries, specify a value for <code>componentTypeId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetPropertyValueHistoryCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetPropertyValueHistoryCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetPropertyValueHistoryRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE",
 *   componentName: "STRING_VALUE",
 *   componentPath: "STRING_VALUE",
 *   componentTypeId: "STRING_VALUE",
 *   selectedProperties: [ // SelectedPropertyList // required
 *     "STRING_VALUE",
 *   ],
 *   propertyFilters: [ // PropertyFilters
 *     { // PropertyFilter
 *       propertyName: "STRING_VALUE",
 *       operator: "STRING_VALUE",
 *       value: { // DataValue
 *         booleanValue: true || false,
 *         doubleValue: Number("double"),
 *         integerValue: Number("int"),
 *         longValue: Number("long"),
 *         stringValue: "STRING_VALUE",
 *         listValue: [ // DataValueList
 *           {
 *             booleanValue: true || false,
 *             doubleValue: Number("double"),
 *             integerValue: Number("int"),
 *             longValue: Number("long"),
 *             stringValue: "STRING_VALUE",
 *             listValue: [
 *               "<DataValue>",
 *             ],
 *             mapValue: { // DataValueMap
 *               "<keys>": "<DataValue>",
 *             },
 *             relationshipValue: { // RelationshipValue
 *               targetEntityId: "STRING_VALUE",
 *               targetComponentName: "STRING_VALUE",
 *             },
 *             expression: "STRING_VALUE",
 *           },
 *         ],
 *         mapValue: {
 *           "<keys>": "<DataValue>",
 *         },
 *         relationshipValue: {
 *           targetEntityId: "STRING_VALUE",
 *           targetComponentName: "STRING_VALUE",
 *         },
 *         expression: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   startDateTime: new Date("TIMESTAMP"),
 *   endDateTime: new Date("TIMESTAMP"),
 *   interpolation: { // InterpolationParameters
 *     interpolationType: "STRING_VALUE",
 *     intervalInSeconds: Number("long"),
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   orderByTime: "STRING_VALUE",
 *   startTime: "STRING_VALUE",
 *   endTime: "STRING_VALUE",
 * };
 * const command = new GetPropertyValueHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertyValueHistoryResponse
 * //   propertyValues: [ // PropertyValueList // required
 * //     { // PropertyValueHistory
 * //       entityPropertyReference: { // EntityPropertyReference
 * //         componentName: "STRING_VALUE",
 * //         componentPath: "STRING_VALUE",
 * //         externalIdProperty: { // ExternalIdProperty
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         entityId: "STRING_VALUE",
 * //         propertyName: "STRING_VALUE", // required
 * //       },
 * //       values: [ // Values
 * //         { // PropertyValue
 * //           timestamp: new Date("TIMESTAMP"),
 * //           value: { // DataValue
 * //             booleanValue: true || false,
 * //             doubleValue: Number("double"),
 * //             integerValue: Number("int"),
 * //             longValue: Number("long"),
 * //             stringValue: "STRING_VALUE",
 * //             listValue: [ // DataValueList
 * //               {
 * //                 booleanValue: true || false,
 * //                 doubleValue: Number("double"),
 * //                 integerValue: Number("int"),
 * //                 longValue: Number("long"),
 * //                 stringValue: "STRING_VALUE",
 * //                 listValue: [
 * //                   "<DataValue>",
 * //                 ],
 * //                 mapValue: { // DataValueMap
 * //                   "<keys>": "<DataValue>",
 * //                 },
 * //                 relationshipValue: { // RelationshipValue
 * //                   targetEntityId: "STRING_VALUE",
 * //                   targetComponentName: "STRING_VALUE",
 * //                 },
 * //                 expression: "STRING_VALUE",
 * //               },
 * //             ],
 * //             mapValue: {
 * //               "<keys>": "<DataValue>",
 * //             },
 * //             relationshipValue: {
 * //               targetEntityId: "STRING_VALUE",
 * //               targetComponentName: "STRING_VALUE",
 * //             },
 * //             expression: "STRING_VALUE",
 * //           },
 * //           time: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPropertyValueHistoryCommandInput - {@link GetPropertyValueHistoryCommandInput}
 * @returns {@link GetPropertyValueHistoryCommandOutput}
 * @see {@link GetPropertyValueHistoryCommandInput} for command's `input` shape.
 * @see {@link GetPropertyValueHistoryCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetPropertyValueHistoryCommand extends $Command
  .classBuilder<
    GetPropertyValueHistoryCommandInput,
    GetPropertyValueHistoryCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "GetPropertyValueHistory", {})
  .n("IoTTwinMakerClient", "GetPropertyValueHistoryCommand")
  .f(void 0, void 0)
  .ser(se_GetPropertyValueHistoryCommand)
  .de(de_GetPropertyValueHistoryCommand)
  .build() {}
