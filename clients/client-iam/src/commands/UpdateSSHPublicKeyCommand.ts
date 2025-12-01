// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { UpdateSSHPublicKeyRequest } from "../models/models_1";
import { UpdateSSHPublicKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSSHPublicKeyCommand}.
 */
export interface UpdateSSHPublicKeyCommandInput extends UpdateSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSSHPublicKeyCommand}.
 */
export interface UpdateSSHPublicKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public
 *             keys that are inactive cannot be used for authentication. This operation can be used to
 *             disable a user's SSH public key as part of a key rotation work flow.</p>
 *          <p>The SSH public key affected by this operation is used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateSSHPublicKeyRequest
 *   UserName: "STRING_VALUE", // required
 *   SSHPublicKeyId: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive" || "Expired", // required
 * };
 * const command = new UpdateSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSSHPublicKeyCommandInput - {@link UpdateSSHPublicKeyCommandInput}
 * @returns {@link UpdateSSHPublicKeyCommandOutput}
 * @see {@link UpdateSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class UpdateSSHPublicKeyCommand extends $Command
  .classBuilder<
    UpdateSSHPublicKeyCommandInput,
    UpdateSSHPublicKeyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateSSHPublicKey", {})
  .n("IAMClient", "UpdateSSHPublicKeyCommand")
  .sc(UpdateSSHPublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSSHPublicKeyRequest;
      output: {};
    };
    sdk: {
      input: UpdateSSHPublicKeyCommandInput;
      output: UpdateSSHPublicKeyCommandOutput;
    };
  };
}
