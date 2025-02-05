// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayStatisticsRequest, GetWirelessGatewayStatisticsResponse } from "../models/models_0";
import {
  de_GetWirelessGatewayStatisticsCommand,
  se_GetWirelessGatewayStatisticsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayStatisticsCommand}.
 */
export interface GetWirelessGatewayStatisticsCommandInput extends GetWirelessGatewayStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayStatisticsCommand}.
 */
export interface GetWirelessGatewayStatisticsCommandOutput
  extends GetWirelessGatewayStatisticsResponse,
    __MetadataBearer {}

/**
 * <p>Gets operating information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayStatisticsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayStatisticsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayStatisticsRequest
 *   WirelessGatewayId: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessGatewayStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayStatisticsResponse
 * //   WirelessGatewayId: "STRING_VALUE",
 * //   LastUplinkReceivedAt: "STRING_VALUE",
 * //   ConnectionStatus: "Connected" || "Disconnected",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayStatisticsCommandInput - {@link GetWirelessGatewayStatisticsCommandInput}
 * @returns {@link GetWirelessGatewayStatisticsCommandOutput}
 * @see {@link GetWirelessGatewayStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayStatisticsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetWirelessGatewayStatisticsCommand extends $Command
  .classBuilder<
    GetWirelessGatewayStatisticsCommandInput,
    GetWirelessGatewayStatisticsCommandOutput,
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
  .s("iotwireless", "GetWirelessGatewayStatistics", {})
  .n("IoTWirelessClient", "GetWirelessGatewayStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetWirelessGatewayStatisticsCommand)
  .de(de_GetWirelessGatewayStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessGatewayStatisticsRequest;
      output: GetWirelessGatewayStatisticsResponse;
    };
    sdk: {
      input: GetWirelessGatewayStatisticsCommandInput;
      output: GetWirelessGatewayStatisticsCommandOutput;
    };
  };
}
