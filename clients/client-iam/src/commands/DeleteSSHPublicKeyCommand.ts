// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSSHPublicKeyRequest } from "../models/models_0";
import { de_DeleteSSHPublicKeyCommand, se_DeleteSSHPublicKeyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSSHPublicKeyCommand}.
 */
export interface DeleteSSHPublicKeyCommandInput extends DeleteSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSSHPublicKeyCommand}.
 */
export interface DeleteSSHPublicKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified SSH public key.</p>
 *          <p>The SSH public key deleted by this operation is used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteSSHPublicKeyRequest
 *   UserName: "STRING_VALUE", // required
 *   SSHPublicKeyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSSHPublicKeyCommandInput - {@link DeleteSSHPublicKeyCommandInput}
 * @returns {@link DeleteSSHPublicKeyCommandOutput}
 * @see {@link DeleteSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class DeleteSSHPublicKeyCommand extends $Command
  .classBuilder<
    DeleteSSHPublicKeyCommandInput,
    DeleteSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "DeleteSSHPublicKey", {})
  .n("IAMClient", "DeleteSSHPublicKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSSHPublicKeyCommand)
  .de(de_DeleteSSHPublicKeyCommand)
  .build() {}
