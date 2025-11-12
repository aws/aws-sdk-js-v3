// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachLoadBalancerToSubnetsInput, AttachLoadBalancerToSubnetsOutput } from "../models/models_0";
import { AttachLoadBalancerToSubnets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachLoadBalancerToSubnetsCommand}.
 */
export interface AttachLoadBalancerToSubnetsCommandInput extends AttachLoadBalancerToSubnetsInput {}
/**
 * @public
 *
 * The output of {@link AttachLoadBalancerToSubnetsCommand}.
 */
export interface AttachLoadBalancerToSubnetsCommandOutput extends AttachLoadBalancerToSubnetsOutput, __MetadataBearer {}

/**
 * <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p>
 *         <p>The load balancer evenly distributes requests across all registered subnets.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, AttachLoadBalancerToSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, AttachLoadBalancerToSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // AttachLoadBalancerToSubnetsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Subnets: [ // Subnets // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AttachLoadBalancerToSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // AttachLoadBalancerToSubnetsOutput
 * //   Subnets: [ // Subnets
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AttachLoadBalancerToSubnetsCommandInput - {@link AttachLoadBalancerToSubnetsCommandInput}
 * @returns {@link AttachLoadBalancerToSubnetsCommandOutput}
 * @see {@link AttachLoadBalancerToSubnetsCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerToSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified VPC has no associated Internet gateway.</p>
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *  <p>One or more of the specified subnets do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To attach subnets to a load balancer
 * ```javascript
 * // This example adds the specified subnet to the set of configured subnets for the specified load balancer.
 * const input = {
 *   LoadBalancerName: "my-load-balancer",
 *   Subnets: [
 *     "subnet-0ecac448"
 *   ]
 * };
 * const command = new AttachLoadBalancerToSubnetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Subnets: [
 *     "subnet-15aaab61",
 *     "subnet-0ecac448"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AttachLoadBalancerToSubnetsCommand extends $Command
  .classBuilder<
    AttachLoadBalancerToSubnetsCommandInput,
    AttachLoadBalancerToSubnetsCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "AttachLoadBalancerToSubnets", {})
  .n("ElasticLoadBalancingClient", "AttachLoadBalancerToSubnetsCommand")
  .sc(AttachLoadBalancerToSubnets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachLoadBalancerToSubnetsInput;
      output: AttachLoadBalancerToSubnetsOutput;
    };
    sdk: {
      input: AttachLoadBalancerToSubnetsCommandInput;
      output: AttachLoadBalancerToSubnetsCommandOutput;
    };
  };
}
