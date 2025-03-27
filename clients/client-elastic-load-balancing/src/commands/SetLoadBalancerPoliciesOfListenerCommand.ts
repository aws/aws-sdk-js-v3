// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetLoadBalancerPoliciesOfListenerInput, SetLoadBalancerPoliciesOfListenerOutput } from "../models/models_0";
import {
  de_SetLoadBalancerPoliciesOfListenerCommand,
  se_SetLoadBalancerPoliciesOfListenerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBalancerPoliciesOfListenerCommand}.
 */
export interface SetLoadBalancerPoliciesOfListenerCommandInput extends SetLoadBalancerPoliciesOfListenerInput {}
/**
 * @public
 *
 * The output of {@link SetLoadBalancerPoliciesOfListenerCommand}.
 */
export interface SetLoadBalancerPoliciesOfListenerCommandOutput
  extends SetLoadBalancerPoliciesOfListenerOutput,
    __MetadataBearer {}

/**
 * <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p>
 *         <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p>
 *         <p>For more information about setting policies, see
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>,
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and
 *             <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesOfListenerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesOfListenerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // SetLoadBalancerPoliciesOfListenerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerPort: Number("int"), // required
 *   PolicyNames: [ // PolicyNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new SetLoadBalancerPoliciesOfListenerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBalancerPoliciesOfListenerCommandInput - {@link SetLoadBalancerPoliciesOfListenerCommandInput}
 * @returns {@link SetLoadBalancerPoliciesOfListenerCommandOutput}
 * @see {@link SetLoadBalancerPoliciesOfListenerCommandInput} for command's `input` shape.
 * @see {@link SetLoadBalancerPoliciesOfListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The load balancer does not have a listener configured at the specified port.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>One or more of the specified policies do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To replace the policies associated with a listener
 * ```javascript
 * // This example replaces the policies that are currently associated with the specified listener.
 * const input = {
 *   LoadBalancerName: "my-load-balancer",
 *   LoadBalancerPort: 80,
 *   PolicyNames: [
 *     "my-SSLNegotiation-policy"
 *   ]
 * };
 * const command = new SetLoadBalancerPoliciesOfListenerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetLoadBalancerPoliciesOfListenerCommand extends $Command
  .classBuilder<
    SetLoadBalancerPoliciesOfListenerCommandInput,
    SetLoadBalancerPoliciesOfListenerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v7", "SetLoadBalancerPoliciesOfListener", {})
  .n("ElasticLoadBalancingClient", "SetLoadBalancerPoliciesOfListenerCommand")
  .f(void 0, void 0)
  .ser(se_SetLoadBalancerPoliciesOfListenerCommand)
  .de(de_SetLoadBalancerPoliciesOfListenerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLoadBalancerPoliciesOfListenerInput;
      output: {};
    };
    sdk: {
      input: SetLoadBalancerPoliciesOfListenerCommandInput;
      output: SetLoadBalancerPoliciesOfListenerCommandOutput;
    };
  };
}
