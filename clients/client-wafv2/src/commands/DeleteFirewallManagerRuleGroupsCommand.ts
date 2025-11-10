// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFirewallManagerRuleGroupsRequest, DeleteFirewallManagerRuleGroupsResponse } from "../models/models_0";
import { DeleteFirewallManagerRuleGroups } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFirewallManagerRuleGroupsCommand}.
 */
export interface DeleteFirewallManagerRuleGroupsCommandInput extends DeleteFirewallManagerRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFirewallManagerRuleGroupsCommand}.
 */
export interface DeleteFirewallManagerRuleGroupsCommandOutput
  extends DeleteFirewallManagerRuleGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes all rule groups that are managed by Firewall Manager from the specified <a>WebACL</a>. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> and <code>RetrofittedByFirewallManager</code> are both false in the web ACL. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteFirewallManagerRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // DeleteFirewallManagerRuleGroupsRequest
 *   WebACLArn: "STRING_VALUE", // required
 *   WebACLLockToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteFirewallManagerRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFirewallManagerRuleGroupsResponse
 * //   NextWebACLLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteFirewallManagerRuleGroupsCommandInput - {@link DeleteFirewallManagerRuleGroupsCommandInput}
 * @returns {@link DeleteFirewallManagerRuleGroupsCommandOutput}
 * @see {@link DeleteFirewallManagerRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallManagerRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *  <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class DeleteFirewallManagerRuleGroupsCommand extends $Command
  .classBuilder<
    DeleteFirewallManagerRuleGroupsCommandInput,
    DeleteFirewallManagerRuleGroupsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "DeleteFirewallManagerRuleGroups", {})
  .n("WAFV2Client", "DeleteFirewallManagerRuleGroupsCommand")
  .sc(DeleteFirewallManagerRuleGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFirewallManagerRuleGroupsRequest;
      output: DeleteFirewallManagerRuleGroupsResponse;
    };
    sdk: {
      input: DeleteFirewallManagerRuleGroupsCommandInput;
      output: DeleteFirewallManagerRuleGroupsCommandOutput;
    };
  };
}
