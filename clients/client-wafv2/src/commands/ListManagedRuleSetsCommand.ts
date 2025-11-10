// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedRuleSetsRequest, ListManagedRuleSetsResponse } from "../models/models_0";
import { ListManagedRuleSets } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedRuleSetsCommand}.
 */
export interface ListManagedRuleSetsCommandInput extends ListManagedRuleSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedRuleSetsCommand}.
 */
export interface ListManagedRuleSetsCommandOutput extends ListManagedRuleSetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the managed rule sets that you own. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListManagedRuleSetsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListManagedRuleSetsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListManagedRuleSetsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListManagedRuleSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedRuleSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   ManagedRuleSets: [ // ManagedRuleSetSummaries
 * //     { // ManagedRuleSetSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LockToken: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       LabelNamespace: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedRuleSetsCommandInput - {@link ListManagedRuleSetsCommandInput}
 * @returns {@link ListManagedRuleSetsCommandOutput}
 * @see {@link ListManagedRuleSetsCommandInput} for command's `input` shape.
 * @see {@link ListManagedRuleSetsCommandOutput} for command's `response` shape.
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
export class ListManagedRuleSetsCommand extends $Command
  .classBuilder<
    ListManagedRuleSetsCommandInput,
    ListManagedRuleSetsCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "ListManagedRuleSets", {})
  .n("WAFV2Client", "ListManagedRuleSetsCommand")
  .sc(ListManagedRuleSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedRuleSetsRequest;
      output: ListManagedRuleSetsResponse;
    };
    sdk: {
      input: ListManagedRuleSetsCommandInput;
      output: ListManagedRuleSetsCommandOutput;
    };
  };
}
