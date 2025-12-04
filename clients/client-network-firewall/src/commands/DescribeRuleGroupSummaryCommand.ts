// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRuleGroupSummaryRequest, DescribeRuleGroupSummaryResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DescribeRuleGroupSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleGroupSummaryCommand}.
 */
export interface DescribeRuleGroupSummaryCommandInput extends DescribeRuleGroupSummaryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleGroupSummaryCommand}.
 */
export interface DescribeRuleGroupSummaryCommandOutput extends DescribeRuleGroupSummaryResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information for a stateful rule group.</p>
 *          <p>For active threat defense Amazon Web Services managed rule groups, this operation provides insight into the protections enabled by the rule group, based on Suricata rule metadata fields. Summaries are available for rule groups you manage and for active threat defense Amazon Web Services managed rule groups.</p>
 *          <p>To modify how threat information appears in summaries, use the <code>SummaryConfiguration</code> parameter in <a>UpdateRuleGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupSummaryCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupSummaryCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeRuleGroupSummaryRequest
 *   RuleGroupName: "STRING_VALUE",
 *   RuleGroupArn: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL",
 * };
 * const command = new DescribeRuleGroupSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleGroupSummaryResponse
 * //   RuleGroupName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Summary: { // Summary
 * //     RuleSummaries: [ // RuleSummaries
 * //       { // RuleSummary
 * //         SID: "STRING_VALUE",
 * //         Msg: "STRING_VALUE",
 * //         Metadata: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRuleGroupSummaryCommandInput - {@link DescribeRuleGroupSummaryCommandInput}
 * @returns {@link DescribeRuleGroupSummaryCommandOutput}
 * @see {@link DescribeRuleGroupSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupSummaryCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DescribeRuleGroupSummaryCommand extends $Command
  .classBuilder<
    DescribeRuleGroupSummaryCommandInput,
    DescribeRuleGroupSummaryCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeRuleGroupSummary", {})
  .n("NetworkFirewallClient", "DescribeRuleGroupSummaryCommand")
  .sc(DescribeRuleGroupSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleGroupSummaryRequest;
      output: DescribeRuleGroupSummaryResponse;
    };
    sdk: {
      input: DescribeRuleGroupSummaryCommandInput;
      output: DescribeRuleGroupSummaryCommandOutput;
    };
  };
}
