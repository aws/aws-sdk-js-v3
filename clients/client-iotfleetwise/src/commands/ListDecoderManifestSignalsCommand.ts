// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListDecoderManifestSignalsRequest, ListDecoderManifestSignalsResponse } from "../models/models_0";
import { de_ListDecoderManifestSignalsCommand, se_ListDecoderManifestSignalsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDecoderManifestSignalsCommand}.
 */
export interface ListDecoderManifestSignalsCommandInput extends ListDecoderManifestSignalsRequest {}
/**
 * @public
 *
 * The output of {@link ListDecoderManifestSignalsCommand}.
 */
export interface ListDecoderManifestSignalsCommandOutput extends ListDecoderManifestSignalsResponse, __MetadataBearer {}

/**
 * <p> A list of information about signal decoders specified in a decoder manifest. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListDecoderManifestSignalsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListDecoderManifestSignalsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListDecoderManifestSignalsRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDecoderManifestSignalsCommand(input);
 * const response = await client.send(command);
 * // { // ListDecoderManifestSignalsResponse
 * //   signalDecoders: [ // SignalDecoders
 * //     { // SignalDecoder
 * //       fullyQualifiedName: "STRING_VALUE", // required
 * //       type: "CAN_SIGNAL" || "OBD_SIGNAL" || "MESSAGE_SIGNAL" || "CUSTOM_DECODING_SIGNAL", // required
 * //       interfaceId: "STRING_VALUE", // required
 * //       canSignal: { // CanSignal
 * //         messageId: Number("int"), // required
 * //         isBigEndian: true || false, // required
 * //         isSigned: true || false, // required
 * //         startBit: Number("int"), // required
 * //         offset: Number("double"), // required
 * //         factor: Number("double"), // required
 * //         length: Number("int"), // required
 * //         name: "STRING_VALUE",
 * //         signalValueType: "INTEGER" || "FLOATING_POINT",
 * //       },
 * //       obdSignal: { // ObdSignal
 * //         pidResponseLength: Number("int"), // required
 * //         serviceMode: Number("int"), // required
 * //         pid: Number("int"), // required
 * //         scaling: Number("double"), // required
 * //         offset: Number("double"), // required
 * //         startByte: Number("int"), // required
 * //         byteLength: Number("int"), // required
 * //         bitRightShift: Number("int"),
 * //         bitMaskLength: Number("int"),
 * //         isSigned: true || false,
 * //         signalValueType: "INTEGER" || "FLOATING_POINT",
 * //       },
 * //       messageSignal: { // MessageSignal
 * //         topicName: "STRING_VALUE", // required
 * //         structuredMessage: { // StructuredMessage Union: only one key present
 * //           primitiveMessageDefinition: { // PrimitiveMessageDefinition Union: only one key present
 * //             ros2PrimitiveMessageDefinition: { // ROS2PrimitiveMessageDefinition
 * //               primitiveType: "BOOL" || "BYTE" || "CHAR" || "FLOAT32" || "FLOAT64" || "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "STRING" || "WSTRING", // required
 * //               offset: Number("double"),
 * //               scaling: Number("double"),
 * //               upperBound: Number("long"),
 * //             },
 * //           },
 * //           structuredMessageListDefinition: { // StructuredMessageListDefinition
 * //             name: "STRING_VALUE", // required
 * //             memberType: {//  Union: only one key present
 * //               primitiveMessageDefinition: {//  Union: only one key present
 * //                 ros2PrimitiveMessageDefinition: {
 * //                   primitiveType: "BOOL" || "BYTE" || "CHAR" || "FLOAT32" || "FLOAT64" || "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "STRING" || "WSTRING", // required
 * //                   offset: Number("double"),
 * //                   scaling: Number("double"),
 * //                   upperBound: Number("long"),
 * //                 },
 * //               },
 * //               structuredMessageListDefinition: {
 * //                 name: "STRING_VALUE", // required
 * //                 memberType: "<StructuredMessage>", // required
 * //                 listType: "FIXED_CAPACITY" || "DYNAMIC_UNBOUNDED_CAPACITY" || "DYNAMIC_BOUNDED_CAPACITY", // required
 * //                 capacity: Number("int"),
 * //               },
 * //               structuredMessageDefinition: [ // StructuredMessageDefinition
 * //                 { // StructuredMessageFieldNameAndDataTypePair
 * //                   fieldName: "STRING_VALUE", // required
 * //                   dataType: "<StructuredMessage>", // required
 * //                 },
 * //               ],
 * //             },
 * //             listType: "FIXED_CAPACITY" || "DYNAMIC_UNBOUNDED_CAPACITY" || "DYNAMIC_BOUNDED_CAPACITY", // required
 * //             capacity: Number("int"),
 * //           },
 * //           structuredMessageDefinition: [
 * //             {
 * //               fieldName: "STRING_VALUE", // required
 * //               dataType: "<StructuredMessage>", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       customDecodingSignal: { // CustomDecodingSignal
 * //         id: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDecoderManifestSignalsCommandInput - {@link ListDecoderManifestSignalsCommandInput}
 * @returns {@link ListDecoderManifestSignalsCommandOutput}
 * @see {@link ListDecoderManifestSignalsCommandInput} for command's `input` shape.
 * @see {@link ListDecoderManifestSignalsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class ListDecoderManifestSignalsCommand extends $Command
  .classBuilder<
    ListDecoderManifestSignalsCommandInput,
    ListDecoderManifestSignalsCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "ListDecoderManifestSignals", {})
  .n("IoTFleetWiseClient", "ListDecoderManifestSignalsCommand")
  .f(void 0, void 0)
  .ser(se_ListDecoderManifestSignalsCommand)
  .de(de_ListDecoderManifestSignalsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDecoderManifestSignalsRequest;
      output: ListDecoderManifestSignalsResponse;
    };
    sdk: {
      input: ListDecoderManifestSignalsCommandInput;
      output: ListDecoderManifestSignalsCommandOutput;
    };
  };
}
