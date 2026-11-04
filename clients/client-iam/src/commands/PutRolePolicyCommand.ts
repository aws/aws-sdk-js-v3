// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRolePolicyRequest } from "../models/models_0";
import { PutRolePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRolePolicyCommand}.
 */
export interface PutRolePolicyCommandInput extends PutRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRolePolicyCommand}.
 */
export interface PutRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * Adds or updates an inline policy document that is embedded in the specified IAM role.
 *
 * When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using [`CreateRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html). You can update a role's trust policy using [`UpdateAssumeRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html). For more information about roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html) in the *IAM User Guide*.
 *
 * A role can also have a managed policy attached to it. To attach a managed policy to a role, use [`AttachRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html). To create a new managed policy, use [`CreatePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html). For information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * For information about the maximum number of inline policies that you can embed with a role, see [IAM and STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
 *
 * > **Note:** Because policy documents can be large, you should use POST rather than GET when calling `PutRolePolicy`. For general information about using the Query API with IAM, see [Making query requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutRolePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRolePolicyCommandInput - {@link PutRolePolicyCommandInput}
 * @returns {@link PutRolePolicyCommandOutput}
 * @see {@link PutRolePolicyCommandInput} for command's `input` shape.
 * @see {@link PutRolePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link UnmodifiableEntityException} (client fault)
 *
 * The request was rejected because service-linked roles are protected Amazon Web Services resources. Only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To attach a permissions policy to an IAM role
 * ```javascript
 * // The following command adds a permissions policy to the role named Test-Role.
 * const input = {
 *   PolicyDocument: `{"Version":"2012-10-17","Statement":{"Effect":"Allow","Action":"s3:*","Resource":"*"}}`,
 *   PolicyName: "S3AccessPolicy",
 *   RoleName: "S3Access"
 * };
 * const command = new PutRolePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutRolePolicyCommand extends command<PutRolePolicyCommandInput, PutRolePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutRolePolicy",
  PutRolePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: PutRolePolicyCommandInput;
      output: PutRolePolicyCommandOutput;
    };
  };
}
