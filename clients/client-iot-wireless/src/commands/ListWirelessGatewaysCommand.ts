// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListWirelessGatewaysRequest, ListWirelessGatewaysResponse } from "../models/models_1";
import { ListWirelessGateways } from "../schemas/schemas_12_Wireless";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWirelessGatewaysCommand}.
 */
export interface ListWirelessGatewaysCommandInput extends ListWirelessGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListWirelessGatewaysCommand}.
 */
export interface ListWirelessGatewaysCommandOutput extends ListWirelessGatewaysResponse, __MetadataBearer {}

/**
 * <p>Lists the wireless gateways registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessGatewaysCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessGatewaysCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListWirelessGatewaysRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWirelessGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListWirelessGatewaysResponse
 * //   NextToken: "STRING_VALUE",
 * //   WirelessGatewayList: [ // WirelessGatewayStatisticsList
 * //     { // WirelessGatewayStatistics
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LoRaWAN: { // LoRaWANGateway
 * //         GatewayEui: "STRING_VALUE",
 * //         RfRegion: "STRING_VALUE",
 * //         JoinEuiFilters: [ // JoinEuiFilters
 * //           [ // JoinEuiRange
 * //             "STRING_VALUE",
 * //           ],
 * //         ],
 * //         NetIdFilters: [ // NetIdFilters
 * //           "STRING_VALUE",
 * //         ],
 * //         SubBands: [ // SubBands
 * //           Number("int"),
 * //         ],
 * //         Beaconing: { // Beaconing
 * //           DataRate: Number("int"),
 * //           Frequencies: [ // BeaconingFrequencies
 * //             Number("int"),
 * //           ],
 * //         },
 * //         MaxEirp: Number("float"),
 * //       },
 * //       LastUplinkReceivedAt: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWirelessGatewaysCommandInput - {@link ListWirelessGatewaysCommandInput}
 * @returns {@link ListWirelessGatewaysCommandOutput}
 * @see {@link ListWirelessGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListWirelessGatewaysCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListWirelessGatewaysCommand extends $Command
  .classBuilder<
    ListWirelessGatewaysCommandInput,
    ListWirelessGatewaysCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListWirelessGateways", {})
  .n("IoTWirelessClient", "ListWirelessGatewaysCommand")
  .sc(ListWirelessGateways)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWirelessGatewaysRequest;
      output: ListWirelessGatewaysResponse;
    };
    sdk: {
      input: ListWirelessGatewaysCommandInput;
      output: ListWirelessGatewaysCommandOutput;
    };
  };
}
