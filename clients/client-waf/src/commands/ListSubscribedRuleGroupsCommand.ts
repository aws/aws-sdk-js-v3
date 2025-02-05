// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSubscribedRuleGroupsRequest, ListSubscribedRuleGroupsResponse } from "../models/models_0";
import { de_ListSubscribedRuleGroupsCommand, se_ListSubscribedRuleGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscribedRuleGroupsCommand}.
 */
export interface ListSubscribedRuleGroupsCommandInput extends ListSubscribedRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscribedRuleGroupsCommand}.
 */
export interface ListSubscribedRuleGroupsCommandOutput extends ListSubscribedRuleGroupsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListSubscribedRuleGroupsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListSubscribedRuleGroupsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WAFClient(config);
 * const input = { // ListSubscribedRuleGroupsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSubscribedRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscribedRuleGroupsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   RuleGroups: [ // SubscribedRuleGroupSummaries
 * //     { // SubscribedRuleGroupSummary
 * //       RuleGroupId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       MetricName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSubscribedRuleGroupsCommandInput - {@link ListSubscribedRuleGroupsCommandInput}
 * @returns {@link ListSubscribedRuleGroupsCommandOutput}
 * @see {@link ListSubscribedRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSubscribedRuleGroupsCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @public
 */
export class ListSubscribedRuleGroupsCommand extends $Command
  .classBuilder<
    ListSubscribedRuleGroupsCommandInput,
    ListSubscribedRuleGroupsCommandOutput,
    WAFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20150824", "ListSubscribedRuleGroups", {})
  .n("WAFClient", "ListSubscribedRuleGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListSubscribedRuleGroupsCommand)
  .de(de_ListSubscribedRuleGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscribedRuleGroupsRequest;
      output: ListSubscribedRuleGroupsResponse;
    };
    sdk: {
      input: ListSubscribedRuleGroupsCommandInput;
      output: ListSubscribedRuleGroupsCommandOutput;
    };
  };
}
