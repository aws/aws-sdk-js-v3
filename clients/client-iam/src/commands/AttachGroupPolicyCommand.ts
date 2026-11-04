// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachGroupPolicyRequest } from "../models/models_0";
import { AttachGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachGroupPolicyCommand}.
 */
export interface AttachGroupPolicyCommandInput extends AttachGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AttachGroupPolicyCommand}.
 */
export interface AttachGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * Attaches the specified managed policy to the specified IAM group.
 *
 * You use this operation to attach a managed policy to a group. To embed an inline policy in a group, use [`PutGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html).
 *
 * As a best practice, you can validate your IAM policies. To learn more, see [Validating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html) in the *IAM User Guide*.
 *
 * For more information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AttachGroupPolicyRequest
 *   GroupName: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new AttachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachGroupPolicyCommandInput - {@link AttachGroupPolicyCommandInput}
 * @returns {@link AttachGroupPolicyCommandOutput}
 * @see {@link AttachGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachGroupPolicyCommandOutput} for command's `response` shape.
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
 * @example To attach a managed policy to an IAM group
 * ```javascript
 * // The following command attaches the AWS managed policy named ReadOnlyAccess to the IAM group named Finance.
 * const input = {
 *   GroupName: "Finance",
 *   PolicyArn: "arn:aws:iam::aws:policy/ReadOnlyAccess"
 * };
 * const command = new AttachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachGroupPolicyCommand extends command<AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AttachGroupPolicy",
  AttachGroupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: AttachGroupPolicyCommandInput;
      output: AttachGroupPolicyCommandOutput;
    };
  };
}
