// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessDeviceStatisticsRequest, GetWirelessDeviceStatisticsResponse } from "../models/models_0";
import { GetWirelessDeviceStatistics } from "../schemas/schemas_12_Wireless";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessDeviceStatisticsCommand}.
 */
export interface GetWirelessDeviceStatisticsCommandInput extends GetWirelessDeviceStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessDeviceStatisticsCommand}.
 */
export interface GetWirelessDeviceStatisticsCommandOutput
  extends GetWirelessDeviceStatisticsResponse,
    __MetadataBearer {}

/**
 * <p>Gets operating information about a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessDeviceStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessDeviceStatisticsRequest
 *   WirelessDeviceId: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessDeviceStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessDeviceStatisticsResponse
 * //   WirelessDeviceId: "STRING_VALUE",
 * //   LastUplinkReceivedAt: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANDeviceMetadata
 * //     DevEui: "STRING_VALUE",
 * //     FPort: Number("int"),
 * //     DataRate: Number("int"),
 * //     Frequency: Number("int"),
 * //     Timestamp: "STRING_VALUE",
 * //     Gateways: [ // LoRaWANGatewayMetadataList
 * //       { // LoRaWANGatewayMetadata
 * //         GatewayEui: "STRING_VALUE",
 * //         Snr: Number("double"),
 * //         Rssi: Number("double"),
 * //       },
 * //     ],
 * //     PublicGateways: [ // LoRaWANPublicGatewayMetadataList
 * //       { // LoRaWANPublicGatewayMetadata
 * //         ProviderNetId: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         Rssi: Number("double"),
 * //         Snr: Number("double"),
 * //         RfRegion: "STRING_VALUE",
 * //         DlAllowed: true || false,
 * //       },
 * //     ],
 * //   },
 * //   Sidewalk: { // SidewalkDeviceMetadata
 * //     Rssi: Number("int"),
 * //     BatteryLevel: "normal" || "low" || "critical",
 * //     Event: "discovered" || "lost" || "ack" || "nack" || "passthrough",
 * //     DeviceState: "Provisioned" || "RegisteredNotSeen" || "RegisteredReachable" || "RegisteredUnreachable",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWirelessDeviceStatisticsCommandInput - {@link GetWirelessDeviceStatisticsCommandInput}
 * @returns {@link GetWirelessDeviceStatisticsCommandOutput}
 * @see {@link GetWirelessDeviceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessDeviceStatisticsCommandOutput} for command's `response` shape.
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
export class GetWirelessDeviceStatisticsCommand extends $Command
  .classBuilder<
    GetWirelessDeviceStatisticsCommandInput,
    GetWirelessDeviceStatisticsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetWirelessDeviceStatistics", {})
  .n("IoTWirelessClient", "GetWirelessDeviceStatisticsCommand")
  .sc(GetWirelessDeviceStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessDeviceStatisticsRequest;
      output: GetWirelessDeviceStatisticsResponse;
    };
    sdk: {
      input: GetWirelessDeviceStatisticsCommandInput;
      output: GetWirelessDeviceStatisticsCommandOutput;
    };
  };
}
