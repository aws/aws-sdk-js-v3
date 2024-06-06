// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListWirelessDevicesRequest, ListWirelessDevicesResponse } from "../models/models_1";
import { de_ListWirelessDevicesCommand, se_ListWirelessDevicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWirelessDevicesCommand}.
 */
export interface ListWirelessDevicesCommandInput extends ListWirelessDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListWirelessDevicesCommand}.
 */
export interface ListWirelessDevicesCommandOutput extends ListWirelessDevicesResponse, __MetadataBearer {}

/**
 * <p>Lists the wireless devices registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessDevicesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessDevicesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListWirelessDevicesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DestinationName: "STRING_VALUE",
 *   DeviceProfileId: "STRING_VALUE",
 *   ServiceProfileId: "STRING_VALUE",
 *   WirelessDeviceType: "Sidewalk" || "LoRaWAN",
 *   FuotaTaskId: "STRING_VALUE",
 *   MulticastGroupId: "STRING_VALUE",
 * };
 * const command = new ListWirelessDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListWirelessDevicesResponse
 * //   NextToken: "STRING_VALUE",
 * //   WirelessDeviceList: [ // WirelessDeviceStatisticsList
 * //     { // WirelessDeviceStatistics
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Type: "Sidewalk" || "LoRaWAN",
 * //       Name: "STRING_VALUE",
 * //       DestinationName: "STRING_VALUE",
 * //       LastUplinkReceivedAt: "STRING_VALUE",
 * //       LoRaWAN: { // LoRaWANListDevice
 * //         DevEui: "STRING_VALUE",
 * //       },
 * //       Sidewalk: { // SidewalkListDevice
 * //         AmazonId: "STRING_VALUE",
 * //         SidewalkId: "STRING_VALUE",
 * //         SidewalkManufacturingSn: "STRING_VALUE",
 * //         DeviceCertificates: [ // DeviceCertificateList
 * //           { // CertificateList
 * //             SigningAlg: "Ed25519" || "P256r1", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         DeviceProfileId: "STRING_VALUE",
 * //         Status: "PROVISIONED" || "REGISTERED" || "ACTIVATED" || "UNKNOWN",
 * //       },
 * //       FuotaDeviceStatus: "Initial" || "Package_Not_Supported" || "FragAlgo_unsupported" || "Not_enough_memory" || "FragIndex_unsupported" || "Wrong_descriptor" || "SessionCnt_replay" || "MissingFrag" || "MemoryError" || "MICError" || "Successful",
 * //       MulticastDeviceStatus: "STRING_VALUE",
 * //       McGroupId: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWirelessDevicesCommandInput - {@link ListWirelessDevicesCommandInput}
 * @returns {@link ListWirelessDevicesCommandOutput}
 * @see {@link ListWirelessDevicesCommandInput} for command's `input` shape.
 * @see {@link ListWirelessDevicesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
 * @public
 */
export class ListWirelessDevicesCommand extends $Command
  .classBuilder<
    ListWirelessDevicesCommandInput,
    ListWirelessDevicesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "ListWirelessDevices", {})
  .n("IoTWirelessClient", "ListWirelessDevicesCommand")
  .f(void 0, void 0)
  .ser(se_ListWirelessDevicesCommand)
  .de(de_ListWirelessDevicesCommand)
  .build() {}
