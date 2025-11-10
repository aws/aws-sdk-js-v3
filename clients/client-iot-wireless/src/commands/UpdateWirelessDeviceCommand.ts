// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateWirelessDeviceRequest, UpdateWirelessDeviceResponse } from "../models/models_1";
import { UpdateWirelessDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWirelessDeviceCommand}.
 */
export interface UpdateWirelessDeviceCommandInput extends UpdateWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWirelessDeviceCommand}.
 */
export interface UpdateWirelessDeviceCommandOutput extends UpdateWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 *   DestinationName: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANUpdateDevice
 *     DeviceProfileId: "STRING_VALUE",
 *     ServiceProfileId: "STRING_VALUE",
 *     AbpV1_1: { // UpdateAbpV1_1
 *       FCntStart: Number("int"),
 *     },
 *     AbpV1_0_x: { // UpdateAbpV1_0_x
 *       FCntStart: Number("int"),
 *     },
 *     FPorts: { // UpdateFPorts
 *       Positioning: { // Positioning
 *         ClockSync: Number("int"),
 *         Stream: Number("int"),
 *         Gnss: Number("int"),
 *       },
 *       Applications: [ // Applications
 *         { // ApplicationConfig
 *           FPort: Number("int"),
 *           Type: "SemtechGeolocation",
 *           DestinationName: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   Positioning: "Enabled" || "Disabled",
 * };
 * const command = new UpdateWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWirelessDeviceCommandInput - {@link UpdateWirelessDeviceCommandInput}
 * @returns {@link UpdateWirelessDeviceCommandOutput}
 * @see {@link UpdateWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class UpdateWirelessDeviceCommand extends $Command
  .classBuilder<
    UpdateWirelessDeviceCommandInput,
    UpdateWirelessDeviceCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "UpdateWirelessDevice", {})
  .n("IoTWirelessClient", "UpdateWirelessDeviceCommand")
  .sc(UpdateWirelessDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWirelessDeviceRequest;
      output: {};
    };
    sdk: {
      input: UpdateWirelessDeviceCommandInput;
      output: UpdateWirelessDeviceCommandOutput;
    };
  };
}
