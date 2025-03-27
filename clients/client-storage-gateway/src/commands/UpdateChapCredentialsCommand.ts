// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateChapCredentialsInput,
  UpdateChapCredentialsInputFilterSensitiveLog,
  UpdateChapCredentialsOutput,
} from "../models/models_0";
import { de_UpdateChapCredentialsCommand, se_UpdateChapCredentialsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChapCredentialsCommand}.
 */
export interface UpdateChapCredentialsCommandInput extends UpdateChapCredentialsInput {}
/**
 * @public
 *
 * The output of {@link UpdateChapCredentialsCommand}.
 */
export interface UpdateChapCredentialsCommandOutput extends UpdateChapCredentialsOutput, __MetadataBearer {}

/**
 * <p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a
 *          specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for
 *          added security, you might use it. This operation is supported in the volume and tape
 *          gateway types.</p>
 *          <important>
 *             <p>When you update CHAP credentials, all existing connections on the target are closed
 *             and initiators must reconnect with the new credentials.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateChapCredentialsInput
 *   TargetARN: "STRING_VALUE", // required
 *   SecretToAuthenticateInitiator: "STRING_VALUE", // required
 *   InitiatorName: "STRING_VALUE", // required
 *   SecretToAuthenticateTarget: "STRING_VALUE",
 * };
 * const command = new UpdateChapCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChapCredentialsOutput
 * //   TargetARN: "STRING_VALUE",
 * //   InitiatorName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateChapCredentialsCommandInput - {@link UpdateChapCredentialsCommandInput}
 * @returns {@link UpdateChapCredentialsCommandOutput}
 * @see {@link UpdateChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link UpdateChapCredentialsCommandOutput} for command's `response` shape.
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
 * @example To update CHAP credentials for an iSCSI target
 * ```javascript
 * // Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target.
 * const input = {
 *   InitiatorName: "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   SecretToAuthenticateInitiator: "111111111111",
 *   SecretToAuthenticateTarget: "222222222222",
 *   TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * };
 * const command = new UpdateChapCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InitiatorName: "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *   TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateChapCredentialsCommand extends $Command
  .classBuilder<
    UpdateChapCredentialsCommandInput,
    UpdateChapCredentialsCommandOutput,
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
  .s("StorageGateway_20130630", "UpdateChapCredentials", {})
  .n("StorageGatewayClient", "UpdateChapCredentialsCommand")
  .f(UpdateChapCredentialsInputFilterSensitiveLog, void 0)
  .ser(se_UpdateChapCredentialsCommand)
  .de(de_UpdateChapCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChapCredentialsInput;
      output: UpdateChapCredentialsOutput;
    };
    sdk: {
      input: UpdateChapCredentialsCommandInput;
      output: UpdateChapCredentialsCommandOutput;
    };
  };
}
