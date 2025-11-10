// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeregisterWirelessDeviceRequest, DeregisterWirelessDeviceResponse } from "../models/models_0";
import { DeregisterWirelessDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterWirelessDeviceCommand}.
 */
export interface DeregisterWirelessDeviceCommandInput extends DeregisterWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterWirelessDeviceCommand}.
 */
export interface DeregisterWirelessDeviceCommandOutput extends DeregisterWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Deregister a wireless device from AWS IoT Wireless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeregisterWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeregisterWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeregisterWirelessDeviceRequest
 *   Identifier: "STRING_VALUE", // required
 *   WirelessDeviceType: "Sidewalk" || "LoRaWAN",
 * };
 * const command = new DeregisterWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterWirelessDeviceCommandInput - {@link DeregisterWirelessDeviceCommandInput}
 * @returns {@link DeregisterWirelessDeviceCommandOutput}
 * @see {@link DeregisterWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link DeregisterWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
export class DeregisterWirelessDeviceCommand extends $Command
  .classBuilder<
    DeregisterWirelessDeviceCommandInput,
    DeregisterWirelessDeviceCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DeregisterWirelessDevice", {})
  .n("IoTWirelessClient", "DeregisterWirelessDeviceCommand")
  .sc(DeregisterWirelessDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterWirelessDeviceRequest;
      output: {};
    };
    sdk: {
      input: DeregisterWirelessDeviceCommandInput;
      output: DeregisterWirelessDeviceCommandOutput;
    };
  };
}
