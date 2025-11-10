// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/models_0";
import { ListRuleGroups } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleGroupsCommand}.
 */
export interface ListRuleGroupsCommandInput extends ListRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleGroupsCommand}.
 */
export interface ListRuleGroupsCommandOutput extends ListRuleGroupsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of <a>RuleGroup</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListRuleGroupsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListRuleGroupsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // import type { WAFClientConfig } from "@aws-sdk/client-waf";
 * const config = {}; // type is WAFClientConfig
 * const client = new WAFClient(config);
 * const input = { // ListRuleGroupsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleGroupsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   RuleGroups: [ // RuleGroupSummaries
 * //     { // RuleGroupSummary
 * //       RuleGroupId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRuleGroupsCommandInput - {@link ListRuleGroupsCommandInput}
 * @returns {@link ListRuleGroupsCommandOutput}
 * @see {@link ListRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 *
 * @public
 */
export class ListRuleGroupsCommand extends $Command
  .classBuilder<
    ListRuleGroupsCommandInput,
    ListRuleGroupsCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20150824", "ListRuleGroups", {})
  .n("WAFClient", "ListRuleGroupsCommand")
  .sc(ListRuleGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleGroupsRequest;
      output: ListRuleGroupsResponse;
    };
    sdk: {
      input: ListRuleGroupsCommandInput;
      output: ListRuleGroupsCommandOutput;
    };
  };
}
