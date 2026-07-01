// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLoadBalancerListenerInput, DeleteLoadBalancerListenerOutput } from "../models/models_0";
import { DeleteLoadBalancerListeners$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLoadBalancerListenersCommand}.
 */
export interface DeleteLoadBalancerListenersCommandInput extends DeleteLoadBalancerListenerInput {}
/**
 * @public
 *
 * The output of {@link DeleteLoadBalancerListenersCommand}.
 */
export interface DeleteLoadBalancerListenersCommandOutput extends DeleteLoadBalancerListenerOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified listeners from the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerListenersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerListenersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeleteLoadBalancerListenerInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerPorts: [ // Ports // required
 *     Number("int"),
 *   ],
 * };
 * const command = new DeleteLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoadBalancerListenersCommandInput - {@link DeleteLoadBalancerListenersCommandInput}
 * @returns {@link DeleteLoadBalancerListenersCommandOutput}
 * @see {@link DeleteLoadBalancerListenersCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerListenersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To delete a listener from your load balancer
 * ```javascript
 * // This example deletes the listener for the specified port from the specified load balancer.
 * const input = {
 *   LoadBalancerName: "my-load-balancer",
 *   LoadBalancerPorts: [
 *     80
 *   ]
 * };
 * const command = new DeleteLoadBalancerListenersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLoadBalancerListenersCommand extends command<DeleteLoadBalancerListenersCommandInput, DeleteLoadBalancerListenersCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLoadBalancerListeners",
  DeleteLoadBalancerListeners$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoadBalancerListenerInput;
      output: {};
    };
    sdk: {
      input: DeleteLoadBalancerListenersCommandInput;
      output: DeleteLoadBalancerListenersCommandOutput;
    };
  };
}
