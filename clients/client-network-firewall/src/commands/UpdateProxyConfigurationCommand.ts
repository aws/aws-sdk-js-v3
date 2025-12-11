// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateProxyConfigurationRequest, UpdateProxyConfigurationResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { UpdateProxyConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProxyConfigurationCommand}.
 */
export interface UpdateProxyConfigurationCommandInput extends UpdateProxyConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxyConfigurationCommand}.
 */
export interface UpdateProxyConfigurationCommandOutput extends UpdateProxyConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of the specified proxy configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateProxyConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateProxyConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateProxyConfigurationRequest
 *   ProxyConfigurationName: "STRING_VALUE",
 *   ProxyConfigurationArn: "STRING_VALUE",
 *   DefaultRulePhaseActions: { // ProxyConfigDefaultRulePhaseActionsRequest
 *     PreDNS: "ALLOW" || "DENY" || "ALERT",
 *     PreREQUEST: "ALLOW" || "DENY" || "ALERT",
 *     PostRESPONSE: "ALLOW" || "DENY" || "ALERT",
 *   },
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateProxyConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxyConfigurationResponse
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
 * @param UpdateProxyConfigurationCommandInput - {@link UpdateProxyConfigurationCommandInput}
 * @returns {@link UpdateProxyConfigurationCommandOutput}
 * @see {@link UpdateProxyConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateProxyConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateProxyConfigurationCommand extends $Command
  .classBuilder<
    UpdateProxyConfigurationCommandInput,
    UpdateProxyConfigurationCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "UpdateProxyConfiguration", {})
  .n("NetworkFirewallClient", "UpdateProxyConfigurationCommand")
  .sc(UpdateProxyConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProxyConfigurationRequest;
      output: UpdateProxyConfigurationResponse;
    };
    sdk: {
      input: UpdateProxyConfigurationCommandInput;
      output: UpdateProxyConfigurationCommandOutput;
    };
  };
}
