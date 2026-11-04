// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/models_0";
import { PutPermissionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPermissionPolicyCommand}.
 */
export interface PutPermissionPolicyCommandInput extends PutPermissionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionPolicyCommand}.
 */
export interface PutPermissionPolicyCommandOutput extends PutPermissionPolicyResponse, __MetadataBearer {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
 *
 * The `PutPermissionPolicy` is subject to the following restrictions:
 *
 * - You can attach only one policy with each `PutPermissionPolicy` request.
 * - The policy must include an `Effect`, `Action` and `Principal`.
 * - `Effect` must specify `Allow`.
 * - The `Action` in the policy must be `waf:UpdateWebACL`, `waf-regional:UpdateWebACL`, `waf:GetRuleGroup` and `waf-regional:GetRuleGroup` . Any extra or wildcard actions in the policy will be rejected.
 * - The policy cannot include a `Resource` parameter.
 * - The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.
 * - The user making the request must be the owner of the RuleGroup.
 * - Your policy must be composed using IAM Policy version 2012-10-17.
 *
 *
 *
 * For more information, see [IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).
 *
 *
 *
 *
 * An example of a valid policy parameter is shown in the Examples section below.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, PutPermissionPolicyCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, PutPermissionPolicyCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // PutPermissionPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionPolicyCommandInput - {@link PutPermissionPolicyCommandInput}
 * @returns {@link PutPermissionPolicyCommandOutput}
 * @see {@link PutPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link WAFInvalidPermissionPolicyException} (client fault)
 *
 * The operation failed because the specified policy is not in the proper format.
 *
 * The policy is subject to the following restrictions:
 *
 * - You can attach only one policy with each `PutPermissionPolicy` request.
 * - The policy must include an `Effect`, `Action` and `Principal`.
 * - `Effect` must specify `Allow`.
 * - The `Action` in the policy must be `waf:UpdateWebACL`, `waf-regional:UpdateWebACL`, `waf:GetRuleGroup` and `waf-regional:GetRuleGroup` . Any extra or wildcard actions in the policy will be rejected.
 * - The policy cannot include a `Resource` parameter.
 * - The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.
 * - The user making the request must be the owner of the RuleGroup.
 * - Your policy must be composed using IAM Policy version 2012-10-17.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * The operation failed because the referenced object doesn't exist.
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *
 * The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.
 *
 * @throws {@link WAFServiceException}
 *
 * Base exception class for all service exceptions from WAF service.
 *
 * @public
 */
export class PutPermissionPolicyCommand extends command<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutPermissionPolicy",
  PutPermissionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPermissionPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutPermissionPolicyCommandInput;
      output: PutPermissionPolicyCommandOutput;
    };
  };
}
