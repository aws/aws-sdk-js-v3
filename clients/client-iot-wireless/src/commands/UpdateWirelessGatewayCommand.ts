// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateWirelessGatewayRequest, UpdateWirelessGatewayResponse } from "../models/models_1";
import { de_UpdateWirelessGatewayCommand, se_UpdateWirelessGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWirelessGatewayCommand}.
 */
export interface UpdateWirelessGatewayCommandInput extends UpdateWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWirelessGatewayCommand}.
 */
export interface UpdateWirelessGatewayCommandOutput extends UpdateWirelessGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateWirelessGatewayRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   JoinEuiFilters: [ // JoinEuiFilters
 *     [ // JoinEuiRange
 *       "STRING_VALUE",
 *     ],
 *   ],
 *   NetIdFilters: [ // NetIdFilters
 *     "STRING_VALUE",
 *   ],
 *   MaxEirp: Number("float"),
 * };
 * const command = new UpdateWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWirelessGatewayCommandInput - {@link UpdateWirelessGatewayCommandInput}
 * @returns {@link UpdateWirelessGatewayCommandOutput}
 * @see {@link UpdateWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateWirelessGatewayCommandOutput} for command's `response` shape.
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
export class UpdateWirelessGatewayCommand extends $Command
  .classBuilder<
    UpdateWirelessGatewayCommandInput,
    UpdateWirelessGatewayCommandOutput,
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
  .s("iotwireless", "UpdateWirelessGateway", {})
  .n("IoTWirelessClient", "UpdateWirelessGatewayCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWirelessGatewayCommand)
  .de(de_UpdateWirelessGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWirelessGatewayRequest;
      output: {};
    };
    sdk: {
      input: UpdateWirelessGatewayCommandInput;
      output: UpdateWirelessGatewayCommandOutput;
    };
  };
}
