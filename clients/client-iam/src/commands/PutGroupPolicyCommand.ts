// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutGroupPolicyRequest } from "../models/models_0";
import { PutGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutGroupPolicyCommand}.
 */
export interface PutGroupPolicyCommandInput extends PutGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutGroupPolicyCommand}.
 */
export interface PutGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * Adds or updates an inline policy document that is embedded in the specified IAM group.
 *
 * A user can also have managed policies attached to it. To attach a managed policy to a group, use [`AttachGroupPolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html). To create a new managed policy, use [`CreatePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html). For information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * For information about the maximum number of inline policies that you can embed in a group, see [IAM and STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
 *
 * > **Note:** Because policy documents can be large, you should use POST rather than GET when calling `PutGroupPolicy`. For general information about using the Query API with IAM, see [Making query requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutGroupPolicyRequest
 *   GroupName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutGroupPolicyCommandInput - {@link PutGroupPolicyCommandInput}
 * @returns {@link PutGroupPolicyCommandOutput}
 * @see {@link PutGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To add a policy to a group
 * ```javascript
 * // The following command adds a policy named IAMReadAccess to the IAM group named PowerUsers.
 * const input = {
 *   GroupName: "PowerUsers",
 *   PolicyDocument: `{"Version":"2012-10-17","Statement":{"Effect":"Allow","Action":["iam:Get*","iam:List*","iam:Generate*"],"Resource":"*"}}`,
 *   PolicyName: "IAMReadAccess"
 * };
 * const command = new PutGroupPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutGroupPolicyCommand extends command<PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutGroupPolicy",
  PutGroupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutGroupPolicyCommandInput;
      output: PutGroupPolicyCommandOutput;
    };
  };
}
