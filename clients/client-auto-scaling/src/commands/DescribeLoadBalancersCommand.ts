// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLoadBalancersRequest, DescribeLoadBalancersResponse } from "../models/models_0";
import { DescribeLoadBalancers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandInput extends DescribeLoadBalancersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandOutput extends DescribeLoadBalancersResponse, __MetadataBearer {}

/**
 * > **Note:** This API operation is superseded by [DescribeTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTrafficSources.html), which can describe multiple traffic sources types. We recommend using `DescribeTrafficSources` to simplify how you manage traffic sources. However, we continue to support `DescribeLoadBalancers`. You can use both the original `DescribeLoadBalancers` API operation and `DescribeTrafficSources` on the same Auto Scaling group.
 *
 * Gets information about the load balancers for the specified Auto Scaling group.
 *
 * This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the [DescribeLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancerTargetGroups.html) API instead.
 *
 * To determine the attachment status of the load balancer, use the `State` element in the response. When you attach a load balancer to an Auto Scaling group, the initial `State` value is `Adding`. The state transitions to `Added` after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to `InService` after at least one Auto Scaling instance passes the health check. When the load balancer is in the `InService` state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the `InService` state.
 *
 * Load balancers also have an `InService` state if you attach them in the [CreateAutoScalingGroup](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html) API call. If your load balancer state is `InService`, but it is not working properly, check the scaling activities by calling [DescribeScalingActivities](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeScalingActivities.html) and take any corrective actions necessary.
 *
 * For help with failed health checks, see [Troubleshooting Amazon EC2 Auto Scaling: Health checks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html) in the *Amazon EC2 Auto Scaling User Guide*. For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeLoadBalancersRequest
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancersResponse
 * //   LoadBalancers: [ // LoadBalancerStates
 * //     { // LoadBalancerState
 * //       LoadBalancerName: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancersCommandInput - {@link DescribeLoadBalancersCommandInput}
 * @returns {@link DescribeLoadBalancersCommandOutput}
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The `NextToken` value is not valid.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @example To describe the load balancers for an Auto Scaling group
 * ```javascript
 * // This example describes the load balancers attached to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancers: [
 *     {
 *       LoadBalancerName: "my-load-balancer",
 *       State: "Added"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeLoadBalancersCommand extends command<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLoadBalancers",
  DescribeLoadBalancers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoadBalancersRequest;
      output: DescribeLoadBalancersResponse;
    };
    sdk: {
      input: DescribeLoadBalancersCommandInput;
      output: DescribeLoadBalancersCommandOutput;
    };
  };
}
