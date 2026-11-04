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
 * Use this to share a rule group with other accounts.
 *
 * This action attaches an IAM policy to the specified resource. You must be the owner of the rule group to perform this operation.
 *
 * This action is subject to the following restrictions:
 *
 * - You can attach only one policy with each `PutPermissionPolicy` request.
 * - The ARN in the request must be a valid WAF RuleGroup ARN and the rule group must exist in the same Region.
 * - The user making the request must be the owner of the rule group.
 *
 * If a rule group has been shared with your account, you can access it through the call `GetRuleGroup`, and you can reference it in `CreateWebACL` and `UpdateWebACL`. Rule groups that are shared with you don't appear in your WAF console rule groups listing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutPermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutPermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
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
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFInvalidPermissionPolicyException} (client fault)
 *
 * The operation failed because the specified policy isn't in the proper format.
 *
 * The policy specifications must conform to the following:
 *
 * - The policy must be composed using IAM Policy version 2012-10-17.
 * - The policy must include specifications for `Effect`, `Action`, and `Principal`.
 * - `Effect` must specify `Allow`.
 * - `Action` must specify `wafv2:CreateWebACL`, `wafv2:UpdateWebACL`, and `wafv2:PutFirewallManagerRuleGroups` and may optionally specify `wafv2:GetRuleGroup`. WAF rejects any extra actions or wildcard actions in the policy.
 * - The policy must not include a `Resource` parameter.
 *
 * For more information, see [IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
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
