// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { SendDataToWirelessDeviceRequest, SendDataToWirelessDeviceResponse } from "../models/models_1";
import { de_SendDataToWirelessDeviceCommand, se_SendDataToWirelessDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDataToWirelessDeviceCommand}.
 */
export interface SendDataToWirelessDeviceCommandInput extends SendDataToWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link SendDataToWirelessDeviceCommand}.
 */
export interface SendDataToWirelessDeviceCommandOutput extends SendDataToWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Sends a decrypted application data frame to a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, SendDataToWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, SendDataToWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // SendDataToWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 *   TransmitMode: Number("int"), // required
 *   PayloadData: "STRING_VALUE", // required
 *   WirelessMetadata: { // WirelessMetadata
 *     LoRaWAN: { // LoRaWANSendDataToDevice
 *       FPort: Number("int"),
 *       ParticipatingGateways: { // ParticipatingGateways
 *         DownlinkMode: "SEQUENTIAL" || "CONCURRENT" || "USING_UPLINK_GATEWAY", // required
 *         GatewayList: [ // GatewayList // required
 *           { // GatewayListItem
 *             GatewayId: "STRING_VALUE", // required
 *             DownlinkFrequency: Number("int"), // required
 *           },
 *         ],
 *         TransmissionInterval: Number("int"), // required
 *       },
 *     },
 *     Sidewalk: { // SidewalkSendDataToDevice
 *       Seq: Number("int"),
 *       MessageType: "CUSTOM_COMMAND_ID_NOTIFY" || "CUSTOM_COMMAND_ID_GET" || "CUSTOM_COMMAND_ID_SET" || "CUSTOM_COMMAND_ID_RESP",
 *       AckModeRetryDurationSecs: Number("int"),
 *     },
 *   },
 * };
 * const command = new SendDataToWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // { // SendDataToWirelessDeviceResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendDataToWirelessDeviceCommandInput - {@link SendDataToWirelessDeviceCommandInput}
 * @returns {@link SendDataToWirelessDeviceCommandOutput}
 * @see {@link SendDataToWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link SendDataToWirelessDeviceCommandOutput} for command's `response` shape.
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
export class SendDataToWirelessDeviceCommand extends $Command
  .classBuilder<
    SendDataToWirelessDeviceCommandInput,
    SendDataToWirelessDeviceCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "SendDataToWirelessDevice", {})
  .n("IoTWirelessClient", "SendDataToWirelessDeviceCommand")
  .f(void 0, void 0)
  .ser(se_SendDataToWirelessDeviceCommand)
  .de(de_SendDataToWirelessDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDataToWirelessDeviceRequest;
      output: SendDataToWirelessDeviceResponse;
    };
    sdk: {
      input: SendDataToWirelessDeviceCommandInput;
      output: SendDataToWirelessDeviceCommandOutput;
    };
  };
}
