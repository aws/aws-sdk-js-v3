// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVTLDevicesInput, DescribeVTLDevicesOutput } from "../models/models_0";
import { DescribeVTLDevices } from "../schemas/schemas_8_SCSI";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVTLDevicesCommand}.
 */
export interface DescribeVTLDevicesCommandInput extends DescribeVTLDevicesInput {}
/**
 * @public
 *
 * The output of {@link DescribeVTLDevicesCommand}.
 */
export interface DescribeVTLDevicesCommandOutput extends DescribeVTLDevicesOutput, __MetadataBearer {}

/**
 * <p>Returns a description of virtual tape library (VTL) devices for the specified tape
 *          gateway. In the response, Storage Gateway returns VTL device information.</p>
 *          <p>This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeVTLDevicesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeVTLDevicesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeVTLDevicesInput
 *   GatewayARN: "STRING_VALUE", // required
 *   VTLDeviceARNs: [ // VTLDeviceARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeVTLDevicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVTLDevicesOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   VTLDevices: [ // VTLDevices
 * //     { // VTLDevice
 * //       VTLDeviceARN: "STRING_VALUE",
 * //       VTLDeviceType: "STRING_VALUE",
 * //       VTLDeviceVendor: "STRING_VALUE",
 * //       VTLDeviceProductIdentifier: "STRING_VALUE",
 * //       DeviceiSCSIAttributes: { // DeviceiSCSIAttributes
 * //         TargetARN: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         NetworkInterfacePort: Number("int"),
 * //         ChapEnabled: true || false,
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVTLDevicesCommandInput - {@link DescribeVTLDevicesCommandInput}
 * @returns {@link DescribeVTLDevicesCommandOutput}
 * @see {@link DescribeVTLDevicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVTLDevicesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To describe virtual tape library (VTL) devices of a single gateway
 * ```javascript
 * // Returns a description of virtual tape library (VTL) devices for the specified gateway.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   Limit: 123,
 *   Marker: "1",
 *   VTLDeviceARNs:   []
 * };
 * const command = new DescribeVTLDevicesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   Marker: "1",
 *   VTLDevices: [
 *     {
 *       DeviceiSCSIAttributes: {
 *         ChapEnabled: false,
 *         NetworkInterfaceId: "10.243.43.207",
 *         NetworkInterfacePort: 3260,
 *         TargetARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-mediachanger"
 *       },
 *       VTLDeviceARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001",
 *       VTLDeviceProductIdentifier: "L700",
 *       VTLDeviceType: "Medium Changer",
 *       VTLDeviceVendor: "STK"
 *     },
 *     {
 *       DeviceiSCSIAttributes: {
 *         ChapEnabled: false,
 *         NetworkInterfaceId: "10.243.43.209",
 *         NetworkInterfacePort: 3260,
 *         TargetARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-01"
 *       },
 *       VTLDeviceARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00001",
 *       VTLDeviceProductIdentifier: "ULT3580-TD5",
 *       VTLDeviceType: "Tape Drive",
 *       VTLDeviceVendor: "IBM"
 *     },
 *     {
 *       DeviceiSCSIAttributes: {
 *         ChapEnabled: false,
 *         NetworkInterfaceId: "10.243.43.209",
 *         NetworkInterfacePort: 3260,
 *         TargetARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:sgw-1fad4876-tapedrive-02"
 *       },
 *       VTLDeviceARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_TAPEDRIVE_00002",
 *       VTLDeviceProductIdentifier: "ULT3580-TD5",
 *       VTLDeviceType: "Tape Drive",
 *       VTLDeviceVendor: "IBM"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeVTLDevicesCommand extends $Command
  .classBuilder<
    DescribeVTLDevicesCommandInput,
    DescribeVTLDevicesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeVTLDevices", {})
  .n("StorageGatewayClient", "DescribeVTLDevicesCommand")
  .sc(DescribeVTLDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVTLDevicesInput;
      output: DescribeVTLDevicesOutput;
    };
    sdk: {
      input: DescribeVTLDevicesCommandInput;
      output: DescribeVTLDevicesCommandOutput;
    };
  };
}
