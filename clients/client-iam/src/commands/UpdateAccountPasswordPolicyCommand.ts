// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { UpdateAccountPasswordPolicyRequest } from "../models/models_0";
import { UpdateAccountPasswordPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountPasswordPolicyCommand}.
 */
export interface UpdateAccountPasswordPolicyCommandInput extends UpdateAccountPasswordPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountPasswordPolicyCommand}.
 */
export interface UpdateAccountPasswordPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the password policy settings for the Amazon Web Services account.</p>
 *          <note>
 *             <p>This operation does not support partial updates. No parameters are required, but
 *                 if you do not specify a parameter, that parameter's value reverts to its default
 *                 value. See the <b>Request Parameters</b> section for each
 *                 parameter's default value. Also note that some parameters do not allow the default
 *                 parameter to be explicitly set. Instead, to invoke the default value, do not include
 *                 that parameter when you invoke the operation.</p>
 *          </note>
 *          <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateAccountPasswordPolicyRequest
 *   MinimumPasswordLength: Number("int"),
 *   RequireSymbols: true || false,
 *   RequireNumbers: true || false,
 *   RequireUppercaseCharacters: true || false,
 *   RequireLowercaseCharacters: true || false,
 *   AllowUsersToChangePassword: true || false,
 *   MaxPasswordAge: Number("int"),
 *   PasswordReusePrevention: Number("int"),
 *   HardExpiry: true || false,
 * };
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountPasswordPolicyCommandInput - {@link UpdateAccountPasswordPolicyCommandInput}
 * @returns {@link UpdateAccountPasswordPolicyCommandOutput}
 * @see {@link UpdateAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
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
 * @example To set or change the current account password policy
 * ```javascript
 * // The following command sets the password policy to require a minimum length of eight characters and to require one or more numbers in the password:
 * const input = {
 *   MinimumPasswordLength: 8,
 *   RequireNumbers: true
 * };
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAccountPasswordPolicyCommand extends $Command
  .classBuilder<
    UpdateAccountPasswordPolicyCommandInput,
    UpdateAccountPasswordPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateAccountPasswordPolicy", {})
  .n("IAMClient", "UpdateAccountPasswordPolicyCommand")
  .sc(UpdateAccountPasswordPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountPasswordPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccountPasswordPolicyCommandInput;
      output: UpdateAccountPasswordPolicyCommandOutput;
    };
  };
}
