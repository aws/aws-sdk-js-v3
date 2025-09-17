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
import { DeregisterEndPointsInput, DeregisterEndPointsOutput } from "../models/models_0";
import {
  de_DeregisterInstancesFromLoadBalancerCommand,
  se_DeregisterInstancesFromLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstancesFromLoadBalancerCommand}.
 */
export interface DeregisterInstancesFromLoadBalancerCommandInput extends DeregisterEndPointsInput {}
/**
 * @public
 *
 * The output of {@link DeregisterInstancesFromLoadBalancerCommand}.
 */
export interface DeregisterInstancesFromLoadBalancerCommandOutput extends DeregisterEndPointsOutput, __MetadataBearer {}

/**
 * <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p>
 *
 *         <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DeregisterInstancesFromLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DeregisterInstancesFromLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DeregisterEndPointsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Instances: [ // Instances // required
 *     { // Instance
 *       InstanceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeregisterInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterEndPointsOutput
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeregisterInstancesFromLoadBalancerCommandInput - {@link DeregisterInstancesFromLoadBalancerCommandInput}
 * @returns {@link DeregisterInstancesFromLoadBalancerCommandOutput}
 * @see {@link DeregisterInstancesFromLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstancesFromLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidEndPointException} (client fault)
 *  <p>The specified endpoint is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To deregister instances from a load balancer
 * ```javascript
 * // This example deregisters the specified instance from the specified load balancer.
 * const input = {
 *   Instances: [
 *     {
 *       InstanceId: "i-d6f6fae3"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new DeregisterInstancesFromLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instances: [
 *     {
 *       InstanceId: "i-207d9717"
 *     },
 *     {
 *       InstanceId: "i-afefb49b"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterInstancesFromLoadBalancerCommand extends $Command
  .classBuilder<
    DeregisterInstancesFromLoadBalancerCommandInput,
    DeregisterInstancesFromLoadBalancerCommandOutput,
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
  .s("ElasticLoadBalancing_v7", "DeregisterInstancesFromLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "DeregisterInstancesFromLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterInstancesFromLoadBalancerCommand)
  .de(de_DeregisterInstancesFromLoadBalancerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterEndPointsInput;
      output: DeregisterEndPointsOutput;
    };
    sdk: {
      input: DeregisterInstancesFromLoadBalancerCommandInput;
      output: DeregisterInstancesFromLoadBalancerCommandOutput;
    };
  };
}
