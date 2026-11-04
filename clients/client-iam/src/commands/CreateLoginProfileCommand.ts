// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLoginProfileRequest, CreateLoginProfileResponse } from "../models/models_0";
import { CreateLoginProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console.
 *
 * You can use the CLI, the Amazon Web Services API, or the **Users** page in the IAM console to create a password for any IAM user. Use [ChangePassword](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html) to update your own existing password in the **My Security Credentials** page in the Amazon Web Services Management Console.
 *
 * For more information about managing passwords, see [Managing passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because it attempted to create a resource that already exists.
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
export class CreateLoginProfileCommand extends command<CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateLoginProfile",
  CreateLoginProfile$
) {
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
