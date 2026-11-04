// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ChangePasswordRequest } from "../models/models_0";
import { ChangePassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ChangePasswordCommand}.
 */
export interface ChangePasswordCommandInput extends ChangePasswordRequest {}
/**
 * @public
 *
 * The output of {@link ChangePasswordCommand}.
 */
export interface ChangePasswordCommandOutput extends __MetadataBearer {}

/**
 * Changes the password of the IAM user who is calling this operation. This operation can be performed using the CLI, the Amazon Web Services API, or the **My Security Credentials** page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is not affected by this operation.
 *
 * Use [UpdateLoginProfile](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html) to use the CLI, the Amazon Web Services API, or the **Users** page in the IAM console to change the password for any IAM user. For more information about modifying passwords, see [Managing passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ChangePasswordCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ChangePasswordCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ChangePasswordRequest
 *   OldPassword: "STRING_VALUE", // required
 *   NewPassword: "STRING_VALUE", // required
 * };
 * const command = new ChangePasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ChangePasswordCommandInput - {@link ChangePasswordCommandInput}
 * @returns {@link ChangePasswordCommandOutput}
 * @see {@link ChangePasswordCommandInput} for command's `input` shape.
 * @see {@link ChangePasswordCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityTemporarilyUnmodifiableException} (client fault)
 *
 * The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.
 *
 * @throws {@link InvalidUserTypeException} (client fault)
 *
 * The request was rejected because the type of user for the transaction was incorrect.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link PasswordPolicyViolationException} (client fault)
 *
 * The request was rejected because the provided password did not meet the requirements imposed by the account password policy.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To change the password for your IAM user
 * ```javascript
 * // The following command changes the password for the current IAM user.
 * const input = {
 *   NewPassword: "]35d/{pB9Fo9wJ",
 *   OldPassword: "3s0K_;xh4~8XXI"
 * };
 * const command = new ChangePasswordCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ChangePasswordCommand extends command<ChangePasswordCommandInput, ChangePasswordCommandOutput>(
  _ep0,
  _mw0,
  "ChangePassword",
  ChangePassword$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangePasswordRequest;
      output: {};
    };
    sdk: {
      input: ChangePasswordCommandInput;
      output: ChangePasswordCommandOutput;
    };
  };
}
