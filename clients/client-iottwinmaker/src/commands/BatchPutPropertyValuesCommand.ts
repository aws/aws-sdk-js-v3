// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { BatchPutPropertyValuesRequest, BatchPutPropertyValuesResponse } from "../models/models_0";
import { de_BatchPutPropertyValuesCommand, se_BatchPutPropertyValuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutPropertyValuesCommand}.
 */
export interface BatchPutPropertyValuesCommandInput extends BatchPutPropertyValuesRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutPropertyValuesCommand}.
 */
export interface BatchPutPropertyValuesCommandOutput extends BatchPutPropertyValuesResponse, __MetadataBearer {}

/**
 * <p>Sets values for multiple time series properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, BatchPutPropertyValuesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, BatchPutPropertyValuesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // BatchPutPropertyValuesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entries: [ // Entries // required
 *     { // PropertyValueEntry
 *       entityPropertyReference: { // EntityPropertyReference
 *         componentName: "STRING_VALUE",
 *         componentPath: "STRING_VALUE",
 *         externalIdProperty: { // ExternalIdProperty
 *           "<keys>": "STRING_VALUE",
 *         },
 *         entityId: "STRING_VALUE",
 *         propertyName: "STRING_VALUE", // required
 *       },
 *       propertyValues: [ // PropertyValues
 *         { // PropertyValue
 *           timestamp: new Date("TIMESTAMP"),
 *           value: { // DataValue
 *             booleanValue: true || false,
 *             doubleValue: Number("double"),
 *             integerValue: Number("int"),
 *             longValue: Number("long"),
 *             stringValue: "STRING_VALUE",
 *             listValue: [ // DataValueList
 *               {
 *                 booleanValue: true || false,
 *                 doubleValue: Number("double"),
 *                 integerValue: Number("int"),
 *                 longValue: Number("long"),
 *                 stringValue: "STRING_VALUE",
 *                 listValue: [
 *                   "<DataValue>",
 *                 ],
 *                 mapValue: { // DataValueMap
 *                   "<keys>": "<DataValue>",
 *                 },
 *                 relationshipValue: { // RelationshipValue
 *                   targetEntityId: "STRING_VALUE",
 *                   targetComponentName: "STRING_VALUE",
 *                 },
 *                 expression: "STRING_VALUE",
 *               },
 *             ],
 *             mapValue: {
 *               "<keys>": "<DataValue>",
 *             },
 *             relationshipValue: {
 *               targetEntityId: "STRING_VALUE",
 *               targetComponentName: "STRING_VALUE",
 *             },
 *             expression: "STRING_VALUE",
 *           },
 *           time: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchPutPropertyValuesCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutPropertyValuesResponse
 * //   errorEntries: [ // ErrorEntries // required
 * //     { // BatchPutPropertyErrorEntry
 * //       errors: [ // Errors // required
 * //         { // BatchPutPropertyError
 * //           errorCode: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //           entry: { // PropertyValueEntry
 * //             entityPropertyReference: { // EntityPropertyReference
 * //               componentName: "STRING_VALUE",
 * //               componentPath: "STRING_VALUE",
 * //               externalIdProperty: { // ExternalIdProperty
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               entityId: "STRING_VALUE",
 * //               propertyName: "STRING_VALUE", // required
 * //             },
 * //             propertyValues: [ // PropertyValues
 * //               { // PropertyValue
 * //                 timestamp: new Date("TIMESTAMP"),
 * //                 value: { // DataValue
 * //                   booleanValue: true || false,
 * //                   doubleValue: Number("double"),
 * //                   integerValue: Number("int"),
 * //                   longValue: Number("long"),
 * //                   stringValue: "STRING_VALUE",
 * //                   listValue: [ // DataValueList
 * //                     {
 * //                       booleanValue: true || false,
 * //                       doubleValue: Number("double"),
 * //                       integerValue: Number("int"),
 * //                       longValue: Number("long"),
 * //                       stringValue: "STRING_VALUE",
 * //                       listValue: [
 * //                         "<DataValue>",
 * //                       ],
 * //                       mapValue: { // DataValueMap
 * //                         "<keys>": "<DataValue>",
 * //                       },
 * //                       relationshipValue: { // RelationshipValue
 * //                         targetEntityId: "STRING_VALUE",
 * //                         targetComponentName: "STRING_VALUE",
 * //                       },
 * //                       expression: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   mapValue: {
 * //                     "<keys>": "<DataValue>",
 * //                   },
 * //                   relationshipValue: {
 * //                     targetEntityId: "STRING_VALUE",
 * //                     targetComponentName: "STRING_VALUE",
 * //                   },
 * //                   expression: "STRING_VALUE",
 * //                 },
 * //                 time: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutPropertyValuesCommandInput - {@link BatchPutPropertyValuesCommandInput}
 * @returns {@link BatchPutPropertyValuesCommandOutput}
 * @see {@link BatchPutPropertyValuesCommandInput} for command's `input` shape.
 * @see {@link BatchPutPropertyValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
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
export class BatchPutPropertyValuesCommand extends $Command
  .classBuilder<
    BatchPutPropertyValuesCommandInput,
    BatchPutPropertyValuesCommandOutput,
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
  .s("AWSIoTTwinMaker", "BatchPutPropertyValues", {})
  .n("IoTTwinMakerClient", "BatchPutPropertyValuesCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutPropertyValuesCommand)
  .de(de_BatchPutPropertyValuesCommand)
  .build() {}
