// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSizeConstraintSetRequest, DeleteSizeConstraintSetResponse } from "../models/models_0";
import { de_DeleteSizeConstraintSetCommand, se_DeleteSizeConstraintSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSizeConstraintSetCommand}.
 */
export interface DeleteSizeConstraintSetCommandInput extends DeleteSizeConstraintSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSizeConstraintSetCommand}.
 */
export interface DeleteSizeConstraintSetCommandOutput extends DeleteSizeConstraintSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code>
 * 			or if it still includes any <a>SizeConstraint</a> objects (any filters).</p>
 * 		       <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteSizeConstraintSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteSizeConstraintSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteSizeConstraintSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // DeleteSizeConstraintSetRequest
 *   SizeConstraintSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSizeConstraintSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSizeConstraintSetCommandInput - {@link DeleteSizeConstraintSetCommandInput}
 * @returns {@link DeleteSizeConstraintSetCommandOutput}
 * @see {@link DeleteSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link DeleteSizeConstraintSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
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
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @public
 * @example To delete a size constraint set
 * ```javascript
 * // The following example deletes a size constraint set  with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new DeleteSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * }
 * *\/
 * // example id: deletesizeconstraintset-1474299857905
 * ```
 *
 */
export class DeleteSizeConstraintSetCommand extends $Command
  .classBuilder<
    DeleteSizeConstraintSetCommandInput,
    DeleteSizeConstraintSetCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20150824", "DeleteSizeConstraintSet", {})
  .n("WAFClient", "DeleteSizeConstraintSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSizeConstraintSetCommand)
  .de(de_DeleteSizeConstraintSetCommand)
  .build() {}
