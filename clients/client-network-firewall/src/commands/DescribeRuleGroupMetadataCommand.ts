// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRuleGroupMetadataRequest, DescribeRuleGroupMetadataResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeRuleGroupMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleGroupMetadataCommand}.
 */
export interface DescribeRuleGroupMetadataCommandInput extends DescribeRuleGroupMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleGroupMetadataCommand}.
 */
export interface DescribeRuleGroupMetadataCommandOutput extends DescribeRuleGroupMetadataResponse, __MetadataBearer {}

/**
 * <p>High-level information about a rule group, returned by operations like create and describe.
 *          You can use the information provided in the metadata to retrieve and manage a rule group.
 *          You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupMetadataCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupMetadataCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeRuleGroupMetadataRequest
 *   RuleGroupName: "STRING_VALUE",
 *   RuleGroupArn: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL",
 * };
 * const command = new DescribeRuleGroupMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleGroupMetadataResponse
 * //   RuleGroupArn: "STRING_VALUE", // required
 * //   RuleGroupName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Type: "STATELESS" || "STATEFUL",
 * //   Capacity: Number("int"),
 * //   StatefulRuleOptions: { // StatefulRuleOptions
 * //     RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeRuleGroupMetadataCommandInput - {@link DescribeRuleGroupMetadataCommandInput}
 * @returns {@link DescribeRuleGroupMetadataCommandOutput}
 * @see {@link DescribeRuleGroupMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupMetadataCommandOutput} for command's `response` shape.
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
export class DescribeRuleGroupMetadataCommand extends $Command
  .classBuilder<
    DescribeRuleGroupMetadataCommandInput,
    DescribeRuleGroupMetadataCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeRuleGroupMetadata", {})
  .n("NetworkFirewallClient", "DescribeRuleGroupMetadataCommand")
  .sc(DescribeRuleGroupMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleGroupMetadataRequest;
      output: DescribeRuleGroupMetadataResponse;
    };
    sdk: {
      input: DescribeRuleGroupMetadataCommandInput;
      output: DescribeRuleGroupMetadataCommandOutput;
    };
  };
}
