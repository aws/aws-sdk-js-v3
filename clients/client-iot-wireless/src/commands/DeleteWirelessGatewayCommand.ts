// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { DeleteWirelessGatewayRequest, DeleteWirelessGatewayResponse } from "../models/models_0";
import { de_DeleteWirelessGatewayCommand, se_DeleteWirelessGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWirelessGatewayCommand}.
 */
export interface DeleteWirelessGatewayCommandInput extends DeleteWirelessGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessGatewayCommand}.
 */
export interface DeleteWirelessGatewayCommandOutput extends DeleteWirelessGatewayResponse, __MetadataBearer {}

/**
 * <p>Deletes a wireless gateway.</p>
 *          <note>
 *             <p>When deleting a wireless gateway, you might run into duplication errors for the
 *                 following reasons.</p>
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
 * import { IoTWirelessClient, DeleteWirelessGatewayCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessGatewayRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessGatewayCommandInput - {@link DeleteWirelessGatewayCommandInput}
 * @returns {@link DeleteWirelessGatewayCommandOutput}
 * @see {@link DeleteWirelessGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayCommandOutput} for command's `response` shape.
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
export class DeleteWirelessGatewayCommand extends $Command
  .classBuilder<
    DeleteWirelessGatewayCommandInput,
    DeleteWirelessGatewayCommandOutput,
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
  .s("iotwireless", "DeleteWirelessGateway", {})
  .n("IoTWirelessClient", "DeleteWirelessGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWirelessGatewayCommand)
  .de(de_DeleteWirelessGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWirelessGatewayRequest;
      output: {};
    };
    sdk: {
      input: DeleteWirelessGatewayCommandInput;
      output: DeleteWirelessGatewayCommandOutput;
    };
  };
}
