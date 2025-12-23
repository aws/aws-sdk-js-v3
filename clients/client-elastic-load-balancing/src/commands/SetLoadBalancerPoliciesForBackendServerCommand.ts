// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
} from "../models/models_0";
import { SetLoadBalancerPoliciesForBackendServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBalancerPoliciesForBackendServerCommand}.
 */
export interface SetLoadBalancerPoliciesForBackendServerCommandInput extends SetLoadBalancerPoliciesForBackendServerInput {}
/**
 * @public
 *
 * The output of {@link SetLoadBalancerPoliciesForBackendServerCommand}.
 */
export interface SetLoadBalancerPoliciesForBackendServerCommandOutput extends SetLoadBalancerPoliciesForBackendServerOutput, __MetadataBearer {}

/**
 * <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies.
 *             At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p>
 *         <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies,
 *             use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p>
 *         <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy
 *             is associated with the EC2 instance.</p>
 *
 *         <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a>
 *             in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesForBackendServerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // SetLoadBalancerPoliciesForBackendServerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   InstancePort: Number("int"), // required
 *   PolicyNames: [ // PolicyNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBalancerPoliciesForBackendServerCommandInput - {@link SetLoadBalancerPoliciesForBackendServerCommandInput}
 * @returns {@link SetLoadBalancerPoliciesForBackendServerCommandOutput}
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesForBackendServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>One or more of the specified policies do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To replace the policies associated with a port for a backend instance
 * ```javascript
 * // This example replaces the policies that are currently associated with the specified port.
 * const input = {
 *   InstancePort: 80,
 *   LoadBalancerName: "my-load-balancer",
 *   PolicyNames: [
 *     "my-ProxyProtocol-policy"
 *   ]
 * };
 * const command = new SetLoadBalancerPoliciesForBackendServerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetLoadBalancerPoliciesForBackendServerCommand extends $Command
  .classBuilder<
    SetLoadBalancerPoliciesForBackendServerCommandInput,
    SetLoadBalancerPoliciesForBackendServerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "SetLoadBalancerPoliciesForBackendServer", {})
  .n("ElasticLoadBalancingClient", "SetLoadBalancerPoliciesForBackendServerCommand")
  .sc(SetLoadBalancerPoliciesForBackendServer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLoadBalancerPoliciesForBackendServerInput;
      output: {};
    };
    sdk: {
      input: SetLoadBalancerPoliciesForBackendServerCommandInput;
      output: SetLoadBalancerPoliciesForBackendServerCommandOutput;
    };
  };
}
