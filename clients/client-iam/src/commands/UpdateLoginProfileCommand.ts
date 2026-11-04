// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLoginProfileRequest } from "../models/models_1";
import { UpdateLoginProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLoginProfileCommand}.
 */
export interface UpdateLoginProfileCommandInput extends UpdateLoginProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoginProfileCommand}.
 */
export interface UpdateLoginProfileCommandOutput extends __MetadataBearer {}

/**
 * Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the **Users** page in the IAM console to change the password for any IAM user. Use [ChangePassword](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html) to change your own password in the **My Security Credentials** page in the Amazon Web Services Management Console.
 *
 * For more information about modifying passwords, see [Managing passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateLoginProfileRequest
 *   UserName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE",
 *   PasswordResetRequired: true || false,
 * };
 * const command = new UpdateLoginProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLoginProfileCommandInput - {@link UpdateLoginProfileCommandInput}
 * @returns {@link UpdateLoginProfileCommandOutput}
 * @see {@link UpdateLoginProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityTemporarilyUnmodifiableException} (client fault)
 *
 * The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.
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
 * @example To change the password for an IAM user
 * ```javascript
 * // The following command creates or changes the password for the IAM user named Bob.
 * const input = {
 *   Password: "SomeKindOfPassword123!@#",
 *   UserName: "Bob"
 * };
 * const command = new UpdateLoginProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLoginProfileCommand extends command<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLoginProfile",
  UpdateLoginProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLoginProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateLoginProfileCommandInput;
      output: UpdateLoginProfileCommandOutput;
    };
  };
}
