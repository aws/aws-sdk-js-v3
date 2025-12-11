// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AttachRuleGroupsToProxyConfigurationRequest,
  AttachRuleGroupsToProxyConfigurationResponse,
} from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { AttachRuleGroupsToProxyConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachRuleGroupsToProxyConfigurationCommand}.
 */
export interface AttachRuleGroupsToProxyConfigurationCommandInput extends AttachRuleGroupsToProxyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link AttachRuleGroupsToProxyConfigurationCommand}.
 */
export interface AttachRuleGroupsToProxyConfigurationCommandOutput
  extends AttachRuleGroupsToProxyConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Attaches <a>ProxyRuleGroup</a> resources to a <a>ProxyConfiguration</a>
 *          </p>
 *          <p>A Proxy Configuration defines the monitoring and protection behavior for a Proxy. The details of the behavior are defined in the rule groups that you add to your configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AttachRuleGroupsToProxyConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AttachRuleGroupsToProxyConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // AttachRuleGroupsToProxyConfigurationRequest
 *   ProxyConfigurationName: "STRING_VALUE",
 *   ProxyConfigurationArn: "STRING_VALUE",
 *   RuleGroups: [ // ProxyRuleGroupAttachmentList // required
 *     { // ProxyRuleGroupAttachment
 *       ProxyRuleGroupName: "STRING_VALUE",
 *       InsertPosition: Number("int"),
 *     },
 *   ],
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new AttachRuleGroupsToProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // AttachRuleGroupsToProxyConfigurationResponse
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
 * @param AttachRuleGroupsToProxyConfigurationCommandInput - {@link AttachRuleGroupsToProxyConfigurationCommandInput}
 * @returns {@link AttachRuleGroupsToProxyConfigurationCommandOutput}
 * @see {@link AttachRuleGroupsToProxyConfigurationCommandInput} for command's `input` shape.
 * @see {@link AttachRuleGroupsToProxyConfigurationCommandOutput} for command's `response` shape.
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
export class AttachRuleGroupsToProxyConfigurationCommand extends $Command
  .classBuilder<
    AttachRuleGroupsToProxyConfigurationCommandInput,
    AttachRuleGroupsToProxyConfigurationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "AttachRuleGroupsToProxyConfiguration", {})
  .n("NetworkFirewallClient", "AttachRuleGroupsToProxyConfigurationCommand")
  .sc(AttachRuleGroupsToProxyConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachRuleGroupsToProxyConfigurationRequest;
      output: AttachRuleGroupsToProxyConfigurationResponse;
    };
    sdk: {
      input: AttachRuleGroupsToProxyConfigurationCommandInput;
      output: AttachRuleGroupsToProxyConfigurationCommandOutput;
    };
  };
}
