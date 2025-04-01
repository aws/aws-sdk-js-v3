// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordInputFilterSensitiveLog,
  SetLocalConsolePasswordOutput,
} from "../models/models_0";
import { de_SetLocalConsolePasswordCommand, se_SetLocalConsolePasswordCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetLocalConsolePasswordCommand}.
 */
export interface SetLocalConsolePasswordCommandInput extends SetLocalConsolePasswordInput {}
/**
 * @public
 *
 * The output of {@link SetLocalConsolePasswordCommand}.
 */
export interface SetLocalConsolePasswordCommandOutput extends SetLocalConsolePasswordOutput, __MetadataBearer {}

/**
 * <p>Sets the password for your VM local console. When you log in to the local console for
 *          the first time, you log in to the VM with the default credentials. We recommend that you
 *          set a new password. You don't need to know the default password to set a new
 *          password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetLocalConsolePasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetLocalConsolePasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // SetLocalConsolePasswordInput
 *   GatewayARN: "STRING_VALUE", // required
 *   LocalConsolePassword: "STRING_VALUE", // required
 * };
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * // { // SetLocalConsolePasswordOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetLocalConsolePasswordCommandInput - {@link SetLocalConsolePasswordCommandInput}
 * @returns {@link SetLocalConsolePasswordCommandOutput}
 * @see {@link SetLocalConsolePasswordCommandInput} for command's `input` shape.
 * @see {@link SetLocalConsolePasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To set a password for your VM
 * ```javascript
 * // Sets the password for your VM local console.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   LocalConsolePassword: "PassWordMustBeAtLeast6Chars."
 * };
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SetLocalConsolePasswordCommand extends $Command
  .classBuilder<
    SetLocalConsolePasswordCommandInput,
    SetLocalConsolePasswordCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "SetLocalConsolePassword", {})
  .n("StorageGatewayClient", "SetLocalConsolePasswordCommand")
  .f(SetLocalConsolePasswordInputFilterSensitiveLog, void 0)
  .ser(se_SetLocalConsolePasswordCommand)
  .de(de_SetLocalConsolePasswordCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLocalConsolePasswordInput;
      output: SetLocalConsolePasswordOutput;
    };
    sdk: {
      input: SetLocalConsolePasswordCommandInput;
      output: SetLocalConsolePasswordCommandOutput;
    };
  };
}
