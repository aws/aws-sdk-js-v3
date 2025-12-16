// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { CreateLoginProfileRequest, CreateLoginProfileResponse } from "../models/models_0";
import { CreateLoginProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoginProfileCommand}.
 */
export interface CreateLoginProfileCommandInput extends CreateLoginProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateLoginProfileCommand}.
 */
export interface CreateLoginProfileCommandOutput extends CreateLoginProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a password for the specified IAM user. A password allows an IAM user to
 *             access Amazon Web Services services through the Amazon Web Services Management Console.</p>
 *          <p>You can use the CLI, the Amazon Web Services API, or the <b>Users</b>
 *             page in the IAM console to create a password for any IAM user. Use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html">ChangePassword</a> to update your own existing password in the <b>My Security Credentials</b> page in the Amazon Web Services Management Console.</p>
 *          <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateLoginProfileRequest
 *   UserName: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   PasswordResetRequired: true || false,
 * };
 * const command = new CreateLoginProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoginProfileResponse
 * //   LoginProfile: { // LoginProfile
 * //     UserName: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     PasswordResetRequired: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLoginProfileCommandInput - {@link CreateLoginProfileCommandInput}
 * @returns {@link CreateLoginProfileCommandOutput}
 * @see {@link CreateLoginProfileCommandInput} for command's `input` shape.
 * @see {@link CreateLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
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
 *
 * @example To create an instance profile
 * ```javascript
 * // The following command changes IAM user Bob's password and sets the flag that required Bob to change the password the next time he signs in.
 * const input = {
 *   Password: "h]6EszR}vJ*m",
 *   PasswordResetRequired: true,
 *   UserName: "Bob"
 * };
 * const command = new CreateLoginProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoginProfile: {
 *     CreateDate: "2015-03-10T20:55:40.274Z",
 *     PasswordResetRequired: true,
 *     UserName: "Bob"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLoginProfileCommand extends $Command
  .classBuilder<
    CreateLoginProfileCommandInput,
    CreateLoginProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "CreateLoginProfile", {})
  .n("IAMClient", "CreateLoginProfileCommand")
  .sc(CreateLoginProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLoginProfileRequest;
      output: CreateLoginProfileResponse;
    };
    sdk: {
      input: CreateLoginProfileCommandInput;
      output: CreateLoginProfileCommandOutput;
    };
  };
}
