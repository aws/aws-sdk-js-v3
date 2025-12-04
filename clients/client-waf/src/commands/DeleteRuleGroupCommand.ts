// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRuleGroupRequest, DeleteRuleGroupResponse } from "../models/models_0";
import { DeleteRuleGroup } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRuleGroupCommand}.
 */
export interface DeleteRuleGroupCommandInput extends DeleteRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleGroupCommand}.
 */
export interface DeleteRuleGroupCommandOutput extends DeleteRuleGroupResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code>
 *          objects or if it still includes any rules.</p>
 *          <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
 *          <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 *                <code>DeleteRuleGroup</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteRuleGroup</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteRuleGroupCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteRuleGroupCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // DeleteRuleGroupRequest
 *   RuleGroupId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRuleGroupResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRuleGroupCommandInput - {@link DeleteRuleGroupCommandInput}
 * @returns {@link DeleteRuleGroupCommandOutput}
 * @see {@link DeleteRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 * 					isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the
 * 					specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 *                already exists in the specified <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonEmptyEntityException} (client fault)
 *  <p>The operation failed because you tried to delete an object that isn't empty. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects
 * 				or other predicates.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFReferencedItemException} (client fault)
 *  <p>The operation failed because you tried to delete an object that is still in use. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFTagOperationException} (client fault)
 *  <p></p>
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *  <p></p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @public
 */
export class DeleteRuleGroupCommand extends $Command
  .classBuilder<
    DeleteRuleGroupCommandInput,
    DeleteRuleGroupCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "DeleteRuleGroup", {})
  .n("WAFClient", "DeleteRuleGroupCommand")
  .sc(DeleteRuleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleGroupRequest;
      output: DeleteRuleGroupResponse;
    };
    sdk: {
      input: DeleteRuleGroupCommandInput;
      output: DeleteRuleGroupCommandOutput;
    };
  };
}
