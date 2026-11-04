// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SetLoadBalancerPoliciesOfListenerInput,
  SetLoadBalancerPoliciesOfListenerOutput,
} from "../models/models_0";
import { SetLoadBalancerPoliciesOfListener$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface SetLoadBalancerPoliciesOfListenerCommandOutput extends SetLoadBalancerPoliciesOfListenerOutput, __MetadataBearer {}

/**
 * Replaces the current set of policies for the specified load balancer port with the specified set of policies.
 *
 * To enable back-end server authentication, use SetLoadBalancerPoliciesForBackendServer.
 *
 * For more information about setting policies, see [Update the SSL Negotiation Configuration](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html), [Duration-Based Session Stickiness](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration), and [Application-Controlled Session Stickiness](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application) in the *Classic Load Balancers Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, SetLoadBalancerPoliciesOfListenerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, SetLoadBalancerPoliciesOfListenerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
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
 *
 * The specified load balancer does not exist.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *
 * The requested configuration change is not valid.
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *
 * The load balancer does not have a listener configured at the specified port.
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *
 * One or more of the specified policies do not exist.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
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
export class SetLoadBalancerPoliciesOfListenerCommand extends command<SetLoadBalancerPoliciesOfListenerCommandInput, SetLoadBalancerPoliciesOfListenerCommandOutput>(
  _ep0,
  _mw0,
  "SetLoadBalancerPoliciesOfListener",
  SetLoadBalancerPoliciesOfListener$
) {
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
