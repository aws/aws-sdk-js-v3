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
import { DetachLoadBalancerFromSubnetsInput, DetachLoadBalancerFromSubnetsOutput } from "../models/models_0";
import {
  de_DetachLoadBalancerFromSubnetsCommand,
  se_DetachLoadBalancerFromSubnetsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachLoadBalancerFromSubnetsCommand}.
 */
export interface DetachLoadBalancerFromSubnetsCommandInput extends DetachLoadBalancerFromSubnetsInput {}
/**
 * @public
 *
 * The output of {@link DetachLoadBalancerFromSubnetsCommand}.
 */
export interface DetachLoadBalancerFromSubnetsCommandOutput
  extends DetachLoadBalancerFromSubnetsOutput,
    __MetadataBearer {}

/**
 * <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p>
 *         <p>After a subnet is removed, all EC2 instances registered with the load balancer
 *             in the removed subnet go into the <code>OutOfService</code> state. Then,
 *             the load balancer balances the traffic among the remaining routable subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DetachLoadBalancerFromSubnetsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DetachLoadBalancerFromSubnetsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DetachLoadBalancerFromSubnetsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Subnets: [ // Subnets // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetachLoadBalancerFromSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // DetachLoadBalancerFromSubnetsOutput
 * //   Subnets: [ // Subnets
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetachLoadBalancerFromSubnetsCommandInput - {@link DetachLoadBalancerFromSubnetsCommandInput}
 * @returns {@link DetachLoadBalancerFromSubnetsCommandOutput}
 * @see {@link DetachLoadBalancerFromSubnetsCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancerFromSubnetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @public
 * @example To detach a load balancer from a subnet
 * ```javascript
 * // This example detaches the specified load balancer from the specified subnet.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "Subnets": [
 *     "subnet-0ecac448"
 *   ]
 * };
 * const command = new DetachLoadBalancerFromSubnetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * }
 * *\/
 * // example id: elb-detach-load-balancer-from-subnets-1
 * ```
 *
 */
export class DetachLoadBalancerFromSubnetsCommand extends $Command
  .classBuilder<
    DetachLoadBalancerFromSubnetsCommandInput,
    DetachLoadBalancerFromSubnetsCommandOutput,
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
  .s("ElasticLoadBalancing_v7", "DetachLoadBalancerFromSubnets", {})
  .n("ElasticLoadBalancingClient", "DetachLoadBalancerFromSubnetsCommand")
  .f(void 0, void 0)
  .ser(se_DetachLoadBalancerFromSubnetsCommand)
  .de(de_DetachLoadBalancerFromSubnetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachLoadBalancerFromSubnetsInput;
      output: DetachLoadBalancerFromSubnetsOutput;
    };
    sdk: {
      input: DetachLoadBalancerFromSubnetsCommandInput;
      output: DetachLoadBalancerFromSubnetsCommandOutput;
    };
  };
}
