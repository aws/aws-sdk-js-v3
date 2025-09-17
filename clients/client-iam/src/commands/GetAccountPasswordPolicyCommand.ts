// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountPasswordPolicyResponse } from "../models/models_0";
import { de_GetAccountPasswordPolicyCommand, se_GetAccountPasswordPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountPasswordPolicyCommand}.
 */
export interface GetAccountPasswordPolicyCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountPasswordPolicyCommand}.
 */
export interface GetAccountPasswordPolicyCommandOutput extends GetAccountPasswordPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the password policy for the Amazon Web Services account. This tells you the complexity
 *             requirements and mandatory rotation periods for the IAM user passwords in your account.
 *             For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountPasswordPolicyResponse
 * //   PasswordPolicy: { // PasswordPolicy
 * //     MinimumPasswordLength: Number("int"),
 * //     RequireSymbols: true || false,
 * //     RequireNumbers: true || false,
 * //     RequireUppercaseCharacters: true || false,
 * //     RequireLowercaseCharacters: true || false,
 * //     AllowUsersToChangePassword: true || false,
 * //     ExpirePasswords: true || false,
 * //     MaxPasswordAge: Number("int"),
 * //     PasswordReusePrevention: Number("int"),
 * //     HardExpiry: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountPasswordPolicyCommandInput - {@link GetAccountPasswordPolicyCommandInput}
 * @returns {@link GetAccountPasswordPolicyCommandOutput}
 * @see {@link GetAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @example To see the current account password policy
 * ```javascript
 * // The following command displays details about the password policy for the current AWS account.
 * const input = { /* empty *\/ };
 * const command = new GetAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   PasswordPolicy: {
 *     AllowUsersToChangePassword: false,
 *     ExpirePasswords: false,
 *     HardExpiry: false,
 *     MaxPasswordAge: 90,
 *     MinimumPasswordLength: 8,
 *     PasswordReusePrevention: 12,
 *     RequireLowercaseCharacters: false,
 *     RequireNumbers: true,
 *     RequireSymbols: true,
 *     RequireUppercaseCharacters: false
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountPasswordPolicyCommand extends $Command
  .classBuilder<
    GetAccountPasswordPolicyCommandInput,
    GetAccountPasswordPolicyCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetAccountPasswordPolicy", {})
  .n("IAMClient", "GetAccountPasswordPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountPasswordPolicyCommand)
  .de(de_GetAccountPasswordPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountPasswordPolicyResponse;
    };
    sdk: {
      input: GetAccountPasswordPolicyCommandInput;
      output: GetAccountPasswordPolicyCommandOutput;
    };
  };
}
