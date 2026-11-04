// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLoadBalancerPolicyInput, DeleteLoadBalancerPolicyOutput } from "../models/models_0";
import { DeleteLoadBalancerPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLoadBalancerPolicyCommand}.
 */
export interface DeleteLoadBalancerPolicyCommandInput extends DeleteLoadBalancerPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteLoadBalancerPolicyCommand}.
 */
export interface DeleteLoadBalancerPolicyCommandOutput extends DeleteLoadBalancerPolicyOutput, __MetadataBearer {}

/**
 * Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeleteLoadBalancerPolicyCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeleteLoadBalancerPolicyInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoadBalancerPolicyCommandInput - {@link DeleteLoadBalancerPolicyCommandInput}
 * @returns {@link DeleteLoadBalancerPolicyCommandOutput}
 * @see {@link DeleteLoadBalancerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLoadBalancerPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
 *
 * @example To delete a policy from your load balancer
 * ```javascript
 * // This example deletes the specified policy from the specified load balancer. The policy must not be enabled on any listener.
 * const input = {
 *   LoadBalancerName: "my-load-balancer",
 *   PolicyName: "my-duration-cookie-policy"
 * };
 * const command = new DeleteLoadBalancerPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLoadBalancerPolicyCommand extends command<DeleteLoadBalancerPolicyCommandInput, DeleteLoadBalancerPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLoadBalancerPolicy",
  DeleteLoadBalancerPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoadBalancerPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteLoadBalancerPolicyCommandInput;
      output: DeleteLoadBalancerPolicyCommandOutput;
    };
  };
}
