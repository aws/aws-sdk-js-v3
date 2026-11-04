// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachUserPolicyRequest } from "../models/models_0";
import { AttachUserPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachUserPolicyCommand}.
 */
export interface AttachUserPolicyCommandInput extends AttachUserPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachUserPolicyCommand}.
 */
export interface AttachUserPolicyCommandOutput extends __MetadataBearer {}

/**
 * Attaches the specified managed policy to the specified user.
 *
 * You use this operation to attach a *managed* policy to a user. To embed an inline policy in a user, use [`PutUserPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html).
 *
 * As a best practice, you can validate your IAM policies. To learn more, see [Validating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html) in the *IAM User Guide*.
 *
 * For more information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AttachUserPolicyRequest
 *   UserName: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new AttachUserPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachUserPolicyCommandInput - {@link AttachUserPolicyCommandInput}
 * @returns {@link AttachUserPolicyCommandOutput}
 * @see {@link AttachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link PolicyNotAttachableException} (client fault)
 *
 * The request failed because Amazon Web Services service role policies can only be attached to the service-linked role for that service.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To attach a managed policy to an IAM user
 * ```javascript
 * // The following command attaches the AWS managed policy named AdministratorAccess to the IAM user named Alice.
 * const input = {
 *   PolicyArn: "arn:aws:iam::aws:policy/AdministratorAccess",
 *   UserName: "Alice"
 * };
 * const command = new AttachUserPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachUserPolicyCommand extends command<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AttachUserPolicy",
  AttachUserPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachUserPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachUserPolicyCommandInput;
      output: AttachUserPolicyCommandOutput;
    };
  };
}
