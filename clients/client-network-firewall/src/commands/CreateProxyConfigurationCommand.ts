// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProxyConfigurationRequest, CreateProxyConfigurationResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { CreateProxyConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProxyConfigurationCommand}.
 */
export interface CreateProxyConfigurationCommandInput extends CreateProxyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxyConfigurationCommand}.
 */
export interface CreateProxyConfigurationCommandOutput extends CreateProxyConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates an Network Firewall <a>ProxyConfiguration</a>
 *          </p>
 *          <p>A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration. </p>
 *          <p>To manage a proxy configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about proxies, use <a>ListProxyConfigurations</a> and <a>DescribeProxyConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateProxyConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateProxyConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateProxyConfigurationRequest
 *   ProxyConfigurationName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RuleGroupNames: [ // ResourceNameList
 *     "STRING_VALUE",
 *   ],
 *   RuleGroupArns: [ // ResourceArnList
 *     "STRING_VALUE",
 *   ],
 *   DefaultRulePhaseActions: { // ProxyConfigDefaultRulePhaseActionsRequest
 *     PreDNS: "ALLOW" || "DENY" || "ALERT",
 *     PreREQUEST: "ALLOW" || "DENY" || "ALERT",
 *     PostRESPONSE: "ALLOW" || "DENY" || "ALERT",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateProxyConfigurationResponse
 * //   ProxyConfiguration: { // ProxyConfiguration
 * //     ProxyConfigurationName: "STRING_VALUE",
 * //     ProxyConfigurationArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     RuleGroups: [ // ProxyConfigRuleGroupSet
 * //       { // ProxyConfigRuleGroup
 * //         ProxyRuleGroupName: "STRING_VALUE",
 * //         ProxyRuleGroupArn: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //       },
 * //     ],
 * //     DefaultRulePhaseActions: { // ProxyConfigDefaultRulePhaseActionsRequest
 * //       PreDNS: "ALLOW" || "DENY" || "ALERT",
 * //       PreREQUEST: "ALLOW" || "DENY" || "ALERT",
 * //       PostRESPONSE: "ALLOW" || "DENY" || "ALERT",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProxyConfigurationCommandInput - {@link CreateProxyConfigurationCommandInput}
 * @returns {@link CreateProxyConfigurationCommandOutput}
 * @see {@link CreateProxyConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateProxyConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
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
export class CreateProxyConfigurationCommand extends $Command
  .classBuilder<
    CreateProxyConfigurationCommandInput,
    CreateProxyConfigurationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "CreateProxyConfiguration", {})
  .n("NetworkFirewallClient", "CreateProxyConfigurationCommand")
  .sc(CreateProxyConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProxyConfigurationRequest;
      output: CreateProxyConfigurationResponse;
    };
    sdk: {
      input: CreateProxyConfigurationCommandInput;
      output: CreateProxyConfigurationCommandOutput;
    };
  };
}
