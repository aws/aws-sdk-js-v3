// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayRequest, GetWirelessGatewayResponse } from "../models/models_0";
import { de_GetWirelessGatewayCommand, se_GetWirelessGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayCommand}.
 */
export interface GetWirelessGatewayCommandInput extends GetWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayCommand}.
 */
export interface GetWirelessGatewayCommandOutput extends GetWirelessGatewayResponse, __MetadataBearer {}

/**
 * <p>Gets information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 *   IdentifierType: "GatewayEui" || "WirelessGatewayId" || "ThingName", // required
 * };
 * const command = new GetWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayResponse
 * //   Name: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANGateway
 * //     GatewayEui: "STRING_VALUE",
 * //     RfRegion: "STRING_VALUE",
 * //     JoinEuiFilters: [ // JoinEuiFilters
 * //       [ // JoinEuiRange
 * //         "STRING_VALUE",
 * //       ],
 * //     ],
 * //     NetIdFilters: [ // NetIdFilters
 * //       "STRING_VALUE",
 * //     ],
 * //     SubBands: [ // SubBands
 * //       Number("int"),
 * //     ],
 * //     Beaconing: { // Beaconing
 * //       DataRate: Number("int"),
 * //       Frequencies: [ // BeaconingFrequencies
 * //         Number("int"),
 * //       ],
 * //     },
 * //     MaxEirp: Number("float"),
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   ThingName: "STRING_VALUE",
 * //   ThingArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayCommandInput - {@link GetWirelessGatewayCommandInput}
 * @returns {@link GetWirelessGatewayCommandOutput}
 * @see {@link GetWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCommandOutput} for command's `response` shape.
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
export class GetWirelessGatewayCommand extends $Command
  .classBuilder<
    GetWirelessGatewayCommandInput,
    GetWirelessGatewayCommandOutput,
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
  .s("iotwireless", "GetWirelessGateway", {})
  .n("IoTWirelessClient", "GetWirelessGatewayCommand")
  .f(void 0, void 0)
  .ser(se_GetWirelessGatewayCommand)
  .de(de_GetWirelessGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessGatewayRequest;
      output: GetWirelessGatewayResponse;
    };
    sdk: {
      input: GetWirelessGatewayCommandInput;
      output: GetWirelessGatewayCommandOutput;
    };
  };
}
