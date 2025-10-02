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
import { RegisterEndPointsInput, RegisterEndPointsOutput } from "../models/models_0";
import {
  de_RegisterInstancesWithLoadBalancerCommand,
  se_RegisterInstancesWithLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterInstancesWithLoadBalancerCommand}.
 */
export interface RegisterInstancesWithLoadBalancerCommandInput extends RegisterEndPointsInput {}
/**
 * @public
 *
 * The output of {@link RegisterInstancesWithLoadBalancerCommand}.
 */
export interface RegisterInstancesWithLoadBalancerCommandOutput extends RegisterEndPointsOutput, __MetadataBearer {}

/**
 * <p>Adds the specified instances to the specified load balancer.</p>
 *
 *         <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p>
 *
 *         <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered.
 *          Instance registration takes a little time to complete. To check the state of the registered instances, use
 *          <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p>
 *
 *         <p>After the instance is registered, it starts receiving traffic
 *          and requests from the load balancer. Any instance that is not
 *          in one of the Availability Zones registered for the load balancer
 *          is moved to the <code>OutOfService</code> state. If an Availability Zone
 *          is added to the load balancer later, any instances registered with the
 *          load balancer move to the <code>InService</code> state.</p>
 *
 *         <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p>
 *
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, RegisterInstancesWithLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, RegisterInstancesWithLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // RegisterEndPointsInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Instances: [ // Instances // required
 *     { // Instance
 *       InstanceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterInstancesWithLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // RegisterEndPointsOutput
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RegisterInstancesWithLoadBalancerCommandInput - {@link RegisterInstancesWithLoadBalancerCommandInput}
 * @returns {@link RegisterInstancesWithLoadBalancerCommandOutput}
 * @see {@link RegisterInstancesWithLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link RegisterInstancesWithLoadBalancerCommandOutput} for command's `response` shape.
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
 * @example To register instances with a load balancer
 * ```javascript
 * // This example registers the specified instance with the specified load balancer.
 * const input = {
 *   Instances: [
 *     {
 *       InstanceId: "i-d6f6fae3"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new RegisterInstancesWithLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Instances: [
 *     {
 *       InstanceId: "i-d6f6fae3"
 *     },
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
export class RegisterInstancesWithLoadBalancerCommand extends $Command
  .classBuilder<
    RegisterInstancesWithLoadBalancerCommandInput,
    RegisterInstancesWithLoadBalancerCommandOutput,
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
  .s("ElasticLoadBalancing_v7", "RegisterInstancesWithLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "RegisterInstancesWithLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_RegisterInstancesWithLoadBalancerCommand)
  .de(de_RegisterInstancesWithLoadBalancerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterEndPointsInput;
      output: RegisterEndPointsOutput;
    };
    sdk: {
      input: RegisterInstancesWithLoadBalancerCommandInput;
      output: RegisterInstancesWithLoadBalancerCommandOutput;
    };
  };
}
