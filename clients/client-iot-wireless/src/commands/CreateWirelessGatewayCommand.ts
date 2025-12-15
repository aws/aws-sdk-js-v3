// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { CreateWirelessGatewayRequest, CreateWirelessGatewayResponse } from "../models/models_0";
import { CreateWirelessGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWirelessGatewayCommand}.
 */
export interface CreateWirelessGatewayCommandInput extends CreateWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateWirelessGatewayCommand}.
 */
export interface CreateWirelessGatewayCommandOutput extends CreateWirelessGatewayResponse, __MetadataBearer {}

/**
 * <p>Provisions a wireless gateway.</p>
 *          <note>
 *             <p>When provisioning a wireless gateway, you might run into duplication errors for
 *                 the following reasons.</p>
 *             <ul>
 *                <li>
 *                   <p>If you specify a <code>GatewayEui</code> value that already exists.</p>
 *                </li>
 *                <li>
 *                   <p>If you used a <code>ClientRequestToken</code> with the same parameters
 *                         within the last 10 minutes.</p>
 *                </li>
 *             </ul>
 *             <p>To avoid this error, make sure that you use unique identifiers and parameters for
 *                 each request within the specified time period.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateWirelessGatewayRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANGateway
 *     GatewayEui: "STRING_VALUE",
 *     RfRegion: "STRING_VALUE",
 *     JoinEuiFilters: [ // JoinEuiFilters
 *       [ // JoinEuiRange
 *         "STRING_VALUE",
 *       ],
 *     ],
 *     NetIdFilters: [ // NetIdFilters
 *       "STRING_VALUE",
 *     ],
 *     SubBands: [ // SubBands
 *       Number("int"),
 *     ],
 *     Beaconing: { // Beaconing
 *       DataRate: Number("int"),
 *       Frequencies: [ // BeaconingFrequencies
 *         Number("int"),
 *       ],
 *     },
 *     MaxEirp: Number("float"),
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateWirelessGatewayResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWirelessGatewayCommandInput - {@link CreateWirelessGatewayCommandInput}
 * @returns {@link CreateWirelessGatewayCommandOutput}
 * @see {@link CreateWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class CreateWirelessGatewayCommand extends $Command
  .classBuilder<
    CreateWirelessGatewayCommandInput,
    CreateWirelessGatewayCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "CreateWirelessGateway", {})
  .n("IoTWirelessClient", "CreateWirelessGatewayCommand")
  .sc(CreateWirelessGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWirelessGatewayRequest;
      output: CreateWirelessGatewayResponse;
    };
    sdk: {
      input: CreateWirelessGatewayCommandInput;
      output: CreateWirelessGatewayCommandOutput;
    };
  };
}
