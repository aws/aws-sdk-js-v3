// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserRequest } from "../models/models_0";
import { de_DeleteUserCommand, se_DeleteUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandInput extends DeleteUserRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserCommand}.
 */
export interface DeleteUserCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user
 *             programmatically, you must delete the items attached to the user manually, or the
 *             deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM
 *                 user</a>. Before attempting to delete a user, remove the following items:</p>
 *          <ul>
 *             <li>
 *                <p>Password (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html">DeleteLoginProfile</a>)</p>
 *             </li>
 *             <li>
 *                <p>Access keys (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html">DeleteAccessKey</a>)</p>
 *             </li>
 *             <li>
 *                <p>Signing certificate (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html">DeleteSigningCertificate</a>)</p>
 *             </li>
 *             <li>
 *                <p>SSH public key (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html">DeleteSSHPublicKey</a>)</p>
 *             </li>
 *             <li>
 *                <p>Git credentials (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html">DeleteServiceSpecificCredential</a>)</p>
 *             </li>
 *             <li>
 *                <p>Multi-factor authentication (MFA) device (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html">DeactivateMFADevice</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html">DeleteVirtualMFADevice</a>)</p>
 *             </li>
 *             <li>
 *                <p>Inline policies (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html">DeleteUserPolicy</a>)</p>
 *             </li>
 *             <li>
 *                <p>Attached managed policies (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html">DetachUserPolicy</a>)</p>
 *             </li>
 *             <li>
 *                <p>Group memberships (<a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html">RemoveUserFromGroup</a>)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteUserRequest
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserCommandInput - {@link DeleteUserCommandInput}
 * @returns {@link DeleteUserCommandOutput}
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To delete an IAM user
 * ```javascript
 * // The following command removes the IAM user named Bob from the current account.
 * const input = {
 *   UserName: "Bob"
 * };
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteUserCommand extends $Command
  .classBuilder<
    DeleteUserCommandInput,
    DeleteUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "DeleteUser", {})
  .n("IAMClient", "DeleteUserCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserCommand)
  .de(de_DeleteUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserCommandInput;
      output: DeleteUserCommandOutput;
    };
  };
}
