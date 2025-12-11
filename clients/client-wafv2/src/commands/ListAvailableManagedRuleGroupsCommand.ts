// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAvailableManagedRuleGroupsRequest, ListAvailableManagedRuleGroupsResponse } from "../models/models_0";
import { ListAvailableManagedRuleGroups } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableManagedRuleGroupsCommand}.
 */
export interface ListAvailableManagedRuleGroupsCommandInput extends ListAvailableManagedRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableManagedRuleGroupsCommand}.
 */
export interface ListAvailableManagedRuleGroupsCommandOutput
  extends ListAvailableManagedRuleGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves an array of managed rule groups that are available for you to use. This list
 *          includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're
 *          subscribed to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListAvailableManagedRuleGroupsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListAvailableManagedRuleGroupsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListAvailableManagedRuleGroupsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListAvailableManagedRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableManagedRuleGroupsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   ManagedRuleGroups: [ // ManagedRuleGroupSummaries
 * //     { // ManagedRuleGroupSummary
 * //       VendorName: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VersioningSupported: true || false,
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAvailableManagedRuleGroupsCommandInput - {@link ListAvailableManagedRuleGroupsCommandInput}
 * @returns {@link ListAvailableManagedRuleGroupsCommandOutput}
 * @see {@link ListAvailableManagedRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagedRuleGroupsCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class ListAvailableManagedRuleGroupsCommand extends $Command
  .classBuilder<
    ListAvailableManagedRuleGroupsCommandInput,
    ListAvailableManagedRuleGroupsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "ListAvailableManagedRuleGroups", {})
  .n("WAFV2Client", "ListAvailableManagedRuleGroupsCommand")
  .sc(ListAvailableManagedRuleGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableManagedRuleGroupsRequest;
      output: ListAvailableManagedRuleGroupsResponse;
    };
    sdk: {
      input: ListAvailableManagedRuleGroupsCommandInput;
      output: ListAvailableManagedRuleGroupsCommandOutput;
    };
  };
}
