// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteGeoMatchSetRequest, DeleteGeoMatchSetResponse } from "../models/models_0";
import { DeleteGeoMatchSet$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGeoMatchSetCommand}.
 */
export interface DeleteGeoMatchSetCommandInput extends DeleteGeoMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGeoMatchSetCommand}.
 */
export interface DeleteGeoMatchSetCommandOutput extends DeleteGeoMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or
 * 			if it still includes any countries.</p>
 * 		       <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteGeoMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteGeoMatchSet</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteGeoMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeleteGeoMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * // import type { WAFRegionalClientConfig } from "@aws-sdk/client-waf-regional";
 * const config = {}; // type is WAFRegionalClientConfig
 * const client = new WAFRegionalClient(config);
 * const input = { // DeleteGeoMatchSetRequest
 *   GeoMatchSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteGeoMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGeoMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteGeoMatchSetCommandInput - {@link DeleteGeoMatchSetCommandInput}
 * @returns {@link DeleteGeoMatchSetCommandOutput}
 * @see {@link DeleteGeoMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteGeoMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
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
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class DeleteGeoMatchSetCommand extends $Command
  .classBuilder<
    DeleteGeoMatchSetCommandInput,
    DeleteGeoMatchSetCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_Regional_20161128", "DeleteGeoMatchSet", {})
  .n("WAFRegionalClient", "DeleteGeoMatchSetCommand")
  .sc(DeleteGeoMatchSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGeoMatchSetRequest;
      output: DeleteGeoMatchSetResponse;
    };
    sdk: {
      input: DeleteGeoMatchSetCommandInput;
      output: DeleteGeoMatchSetCommandOutput;
    };
  };
}
