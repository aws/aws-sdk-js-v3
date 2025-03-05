// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { UpdateDecoderManifestRequest, UpdateDecoderManifestResponse } from "../models/models_0";
import { de_UpdateDecoderManifestCommand, se_UpdateDecoderManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDecoderManifestCommand}.
 */
export interface UpdateDecoderManifestCommandInput extends UpdateDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDecoderManifestCommand}.
 */
export interface UpdateDecoderManifestCommandOutput extends UpdateDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Updates a decoder manifest.</p>
 *          <p>A decoder manifest can only be updated when the status is <code>DRAFT</code>. Only
 *                 <code>ACTIVE</code> decoder manifests can be associated with vehicles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   signalDecodersToAdd: [ // SignalDecoders
 *     { // SignalDecoder
 *       fullyQualifiedName: "STRING_VALUE", // required
 *       type: "CAN_SIGNAL" || "OBD_SIGNAL" || "MESSAGE_SIGNAL" || "CUSTOM_DECODING_SIGNAL", // required
 *       interfaceId: "STRING_VALUE", // required
 *       canSignal: { // CanSignal
 *         messageId: Number("int"), // required
 *         isBigEndian: true || false, // required
 *         isSigned: true || false, // required
 *         startBit: Number("int"), // required
 *         offset: Number("double"), // required
 *         factor: Number("double"), // required
 *         length: Number("int"), // required
 *         name: "STRING_VALUE",
 *         signalValueType: "INTEGER" || "FLOATING_POINT",
 *       },
 *       obdSignal: { // ObdSignal
 *         pidResponseLength: Number("int"), // required
 *         serviceMode: Number("int"), // required
 *         pid: Number("int"), // required
 *         scaling: Number("double"), // required
 *         offset: Number("double"), // required
 *         startByte: Number("int"), // required
 *         byteLength: Number("int"), // required
 *         bitRightShift: Number("int"),
 *         bitMaskLength: Number("int"),
 *         isSigned: true || false,
 *         signalValueType: "INTEGER" || "FLOATING_POINT",
 *       },
 *       messageSignal: { // MessageSignal
 *         topicName: "STRING_VALUE", // required
 *         structuredMessage: { // StructuredMessage Union: only one key present
 *           primitiveMessageDefinition: { // PrimitiveMessageDefinition Union: only one key present
 *             ros2PrimitiveMessageDefinition: { // ROS2PrimitiveMessageDefinition
 *               primitiveType: "BOOL" || "BYTE" || "CHAR" || "FLOAT32" || "FLOAT64" || "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "STRING" || "WSTRING", // required
 *               offset: Number("double"),
 *               scaling: Number("double"),
 *               upperBound: Number("long"),
 *             },
 *           },
 *           structuredMessageListDefinition: { // StructuredMessageListDefinition
 *             name: "STRING_VALUE", // required
 *             memberType: {//  Union: only one key present
 *               primitiveMessageDefinition: {//  Union: only one key present
 *                 ros2PrimitiveMessageDefinition: {
 *                   primitiveType: "BOOL" || "BYTE" || "CHAR" || "FLOAT32" || "FLOAT64" || "INT8" || "UINT8" || "INT16" || "UINT16" || "INT32" || "UINT32" || "INT64" || "UINT64" || "STRING" || "WSTRING", // required
 *                   offset: Number("double"),
 *                   scaling: Number("double"),
 *                   upperBound: Number("long"),
 *                 },
 *               },
 *               structuredMessageListDefinition: {
 *                 name: "STRING_VALUE", // required
 *                 memberType: "<StructuredMessage>", // required
 *                 listType: "FIXED_CAPACITY" || "DYNAMIC_UNBOUNDED_CAPACITY" || "DYNAMIC_BOUNDED_CAPACITY", // required
 *                 capacity: Number("int"),
 *               },
 *               structuredMessageDefinition: [ // StructuredMessageDefinition
 *                 { // StructuredMessageFieldNameAndDataTypePair
 *                   fieldName: "STRING_VALUE", // required
 *                   dataType: "<StructuredMessage>", // required
 *                 },
 *               ],
 *             },
 *             listType: "FIXED_CAPACITY" || "DYNAMIC_UNBOUNDED_CAPACITY" || "DYNAMIC_BOUNDED_CAPACITY", // required
 *             capacity: Number("int"),
 *           },
 *           structuredMessageDefinition: [
 *             {
 *               fieldName: "STRING_VALUE", // required
 *               dataType: "<StructuredMessage>", // required
 *             },
 *           ],
 *         },
 *       },
 *       customDecodingSignal: { // CustomDecodingSignal
 *         id: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   signalDecodersToUpdate: [
 *     {
 *       fullyQualifiedName: "STRING_VALUE", // required
 *       type: "CAN_SIGNAL" || "OBD_SIGNAL" || "MESSAGE_SIGNAL" || "CUSTOM_DECODING_SIGNAL", // required
 *       interfaceId: "STRING_VALUE", // required
 *       canSignal: {
 *         messageId: Number("int"), // required
 *         isBigEndian: true || false, // required
 *         isSigned: true || false, // required
 *         startBit: Number("int"), // required
 *         offset: Number("double"), // required
 *         factor: Number("double"), // required
 *         length: Number("int"), // required
 *         name: "STRING_VALUE",
 *         signalValueType: "INTEGER" || "FLOATING_POINT",
 *       },
 *       obdSignal: {
 *         pidResponseLength: Number("int"), // required
 *         serviceMode: Number("int"), // required
 *         pid: Number("int"), // required
 *         scaling: Number("double"), // required
 *         offset: Number("double"), // required
 *         startByte: Number("int"), // required
 *         byteLength: Number("int"), // required
 *         bitRightShift: Number("int"),
 *         bitMaskLength: Number("int"),
 *         isSigned: true || false,
 *         signalValueType: "INTEGER" || "FLOATING_POINT",
 *       },
 *       messageSignal: {
 *         topicName: "STRING_VALUE", // required
 *         structuredMessage: "<StructuredMessage>", // required
 *       },
 *       customDecodingSignal: {
 *         id: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   signalDecodersToRemove: [ // Fqns
 *     "STRING_VALUE",
 *   ],
 *   networkInterfacesToAdd: [ // NetworkInterfaces
 *     { // NetworkInterface
 *       interfaceId: "STRING_VALUE", // required
 *       type: "CAN_INTERFACE" || "OBD_INTERFACE" || "VEHICLE_MIDDLEWARE" || "CUSTOM_DECODING_INTERFACE", // required
 *       canInterface: { // CanInterface
 *         name: "STRING_VALUE", // required
 *         protocolName: "STRING_VALUE",
 *         protocolVersion: "STRING_VALUE",
 *       },
 *       obdInterface: { // ObdInterface
 *         name: "STRING_VALUE", // required
 *         requestMessageId: Number("int"), // required
 *         obdStandard: "STRING_VALUE",
 *         pidRequestIntervalSeconds: Number("int"),
 *         dtcRequestIntervalSeconds: Number("int"),
 *         useExtendedIds: true || false,
 *         hasTransmissionEcu: true || false,
 *       },
 *       vehicleMiddleware: { // VehicleMiddleware
 *         name: "STRING_VALUE", // required
 *         protocolName: "ROS_2", // required
 *       },
 *       customDecodingInterface: { // CustomDecodingInterface
 *         name: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   networkInterfacesToUpdate: [
 *     {
 *       interfaceId: "STRING_VALUE", // required
 *       type: "CAN_INTERFACE" || "OBD_INTERFACE" || "VEHICLE_MIDDLEWARE" || "CUSTOM_DECODING_INTERFACE", // required
 *       canInterface: {
 *         name: "STRING_VALUE", // required
 *         protocolName: "STRING_VALUE",
 *         protocolVersion: "STRING_VALUE",
 *       },
 *       obdInterface: {
 *         name: "STRING_VALUE", // required
 *         requestMessageId: Number("int"), // required
 *         obdStandard: "STRING_VALUE",
 *         pidRequestIntervalSeconds: Number("int"),
 *         dtcRequestIntervalSeconds: Number("int"),
 *         useExtendedIds: true || false,
 *         hasTransmissionEcu: true || false,
 *       },
 *       vehicleMiddleware: {
 *         name: "STRING_VALUE", // required
 *         protocolName: "ROS_2", // required
 *       },
 *       customDecodingInterface: {
 *         name: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   networkInterfacesToRemove: [ // InterfaceIds
 *     "STRING_VALUE",
 *   ],
 *   status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 *   defaultForUnmappedSignals: "CUSTOM_DECODING",
 * };
 * const command = new UpdateDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateDecoderManifestCommandInput - {@link UpdateDecoderManifestCommandInput}
 * @returns {@link UpdateDecoderManifestCommandOutput}
 * @see {@link UpdateDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link UpdateDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link DecoderManifestValidationException} (client fault)
 *  <p>The request couldn't be completed because it contains signal decoders with one or more
 *             validation errors.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
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
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class UpdateDecoderManifestCommand extends $Command
  .classBuilder<
    UpdateDecoderManifestCommandInput,
    UpdateDecoderManifestCommandOutput,
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
  .s("IoTAutobahnControlPlane", "UpdateDecoderManifest", {})
  .n("IoTFleetWiseClient", "UpdateDecoderManifestCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDecoderManifestCommand)
  .de(de_UpdateDecoderManifestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDecoderManifestRequest;
      output: UpdateDecoderManifestResponse;
    };
    sdk: {
      input: UpdateDecoderManifestCommandInput;
      output: UpdateDecoderManifestCommandOutput;
    };
  };
}
