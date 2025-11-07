// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetSMBGuestPasswordInput, SetSMBGuestPasswordOutput } from "../models/models_0";
import { SetSMBGuestPassword } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetSMBGuestPasswordCommand}.
 */
export interface SetSMBGuestPasswordCommandInput extends SetSMBGuestPasswordInput {}
/**
 * @public
 *
 * The output of {@link SetSMBGuestPasswordCommand}.
 */
export interface SetSMBGuestPasswordCommandOutput extends SetSMBGuestPasswordOutput, __MetadataBearer {}

/**
 * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
 *          user is the user when the authentication method for the file share is set to
 *             <code>GuestAccess</code>. This operation only supported for S3 File Gateways</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetSMBGuestPasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetSMBGuestPasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // SetSMBGuestPasswordInput
 *   GatewayARN: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new SetSMBGuestPasswordCommand(input);
 * const response = await client.send(command);
 * // { // SetSMBGuestPasswordOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetSMBGuestPasswordCommandInput - {@link SetSMBGuestPasswordCommandInput}
 * @returns {@link SetSMBGuestPasswordCommandOutput}
 * @see {@link SetSMBGuestPasswordCommandInput} for command's `input` shape.
 * @see {@link SetSMBGuestPasswordCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SetSMBGuestPasswordCommand extends $Command
  .classBuilder<
    SetSMBGuestPasswordCommandInput,
    SetSMBGuestPasswordCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "SetSMBGuestPassword", {})
  .n("StorageGatewayClient", "SetSMBGuestPasswordCommand")
  .sc(SetSMBGuestPassword)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetSMBGuestPasswordInput;
      output: SetSMBGuestPasswordOutput;
    };
    sdk: {
      input: SetSMBGuestPasswordCommandInput;
      output: SetSMBGuestPasswordCommandOutput;
    };
  };
}
