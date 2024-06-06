// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWebACLRequest, DeleteWebACLResponse } from "../models/models_0";
import { de_DeleteWebACLCommand, se_DeleteWebACLCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWebACLCommand}.
 */
export interface DeleteWebACLCommandInput extends DeleteWebACLRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebACLCommand}.
 */
export interface DeleteWebACLCommandOutput extends DeleteWebACLResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified <a>WebACL</a>. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified
 *             <a>WebACL</a>. </p>
 *          <note>
 *             <p>Before deleting any web ACL, first disassociate it from all resources.</p>
 *             <ul>
 *                <li>
 *                   <p>To retrieve a list of the resources that are associated with a web ACL, use the
 *                   following calls:</p>
 *                   <ul>
 *                      <li>
 *                         <p>For regional resources, call <a>ListResourcesForWebACL</a>.</p>
 *                      </li>
 *                      <li>
 *                         <p>For Amazon CloudFront distributions, use the CloudFront call
 *                            <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a>
 *                                in the <i>Amazon CloudFront API Reference</i>. </p>
 *                      </li>
 *                   </ul>
 *                </li>
 *                <li>
 *                   <p>To disassociate a resource from a web ACL, use the following calls:</p>
 *                   <ul>
 *                      <li>
 *                         <p>For regional resources, call <a>DisassociateWebACL</a>.</p>
 *                      </li>
 *                      <li>
 *                         <p>For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call
 *                            <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>
 *                                in the <i>Amazon CloudFront API Reference</i>. </p>
 *                      </li>
 *                   </ul>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeleteWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeleteWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // DeleteWebACLRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   LockToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebACLCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebACLCommandInput - {@link DeleteWebACLCommandInput}
 * @returns {@link DeleteWebACLCommandOutput}
 * @see {@link DeleteWebACLCommandInput} for command's `input` shape.
 * @see {@link DeleteWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFAssociatedItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource is being used by another
 *          resource or it’s associated with another resource. </p>
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
 * @throws {@link WAFTagOperationException} (client fault)
 *  <p>An error occurred during the tagging operation. Retry your request.</p>
 *
 * @throws {@link WAFTagOperationInternalErrorException} (server fault)
 *  <p>WAF couldn’t perform your tagging operation because of an internal error. Retry
 *          your request.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 * @public
 */
export class DeleteWebACLCommand extends $Command
  .classBuilder<
    DeleteWebACLCommandInput,
    DeleteWebACLCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "DeleteWebACL", {})
  .n("WAFV2Client", "DeleteWebACLCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWebACLCommand)
  .de(de_DeleteWebACLCommand)
  .build() {}
