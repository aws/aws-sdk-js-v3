// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ChangePasswordRequest, ChangePasswordRequestFilterSensitiveLog } from "../models/models_0";
import { de_ChangePasswordCommand, se_ChangePasswordCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Changes the password of the IAM user who is calling this operation. This operation
 *             can be performed using the CLI, the Amazon Web Services API, or the <b>My
 *                 Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is
 *             not affected by this operation.</p>
 *          <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the
 *                 <b>Users</b> page in the IAM console to change the
 *             password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing
 *                 passwords</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ChangePasswordCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ChangePasswordCommand } = require("@aws-sdk/client-iam"); // CommonJS import
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
 *  <p>The request was rejected because it referenced an entity that is temporarily unmodifiable,
 *       such as a user name that was deleted and then recreated. The error indicates that the request
 *       is likely to succeed if you try again after waiting several minutes. The error message
 *       describes the entity.</p>
 *
 * @throws {@link InvalidUserTypeException} (client fault)
 *  <p>The request was rejected because the type of user for the transaction was
 *       incorrect.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link PasswordPolicyViolationException} (client fault)
 *  <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To change the password for your IAM user
 * ```javascript
 * // The following command changes the password for the current IAM user.
 * const input = {
 *   "NewPassword": "]35d/{pB9Fo9wJ",
 *   "OldPassword": "3s0K_;xh4~8XXI"
 * };
 * const command = new ChangePasswordCommand(input);
 * await client.send(command);
 * // example id: 3a80c66f-bffb-46df-947c-1e8fa583b470
 * ```
 *
 */
export class ChangePasswordCommand extends $Command
  .classBuilder<
    ChangePasswordCommandInput,
    ChangePasswordCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ChangePassword", {})
  .n("IAMClient", "ChangePasswordCommand")
  .f(ChangePasswordRequestFilterSensitiveLog, void 0)
  .ser(se_ChangePasswordCommand)
  .de(de_ChangePasswordCommand)
  .build() {}
