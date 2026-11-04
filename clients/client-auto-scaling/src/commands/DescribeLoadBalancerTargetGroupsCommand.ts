// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeLoadBalancerTargetGroupsRequest,
  DescribeLoadBalancerTargetGroupsResponse,
} from "../models/models_0";
import { DescribeLoadBalancerTargetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerTargetGroupsCommand}.
 */
export interface DescribeLoadBalancerTargetGroupsCommandInput extends DescribeLoadBalancerTargetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerTargetGroupsCommand}.
 */
export interface DescribeLoadBalancerTargetGroupsCommandOutput extends DescribeLoadBalancerTargetGroupsResponse, __MetadataBearer {}

/**
 * > **Note:** This API operation is superseded by [DescribeTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTrafficSources.html), which can describe multiple traffic sources types. We recommend using `DetachTrafficSources` to simplify how you manage traffic sources. However, we continue to support `DescribeLoadBalancerTargetGroups`. You can use both the original `DescribeLoadBalancerTargetGroups` API operation and `DescribeTrafficSources` on the same Auto Scaling group.
 *
 * Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.
 *
 * To determine the attachment status of the target group, use the `State` element in the response. When you attach a target group to an Auto Scaling group, the initial `State` value is `Adding`. The state transitions to `Added` after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to `InService` after at least one Auto Scaling instance passes the health check. When the target group is in the `InService` state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the `InService` state.
 *
 * Target groups also have an `InService` state if you attach them in the [CreateAutoScalingGroup](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html) API call. If your target group state is `InService`, but it is not working properly, check the scaling activities by calling [DescribeScalingActivities](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeScalingActivities.html) and take any corrective actions necessary.
 *
 * For help with failed health checks, see [Troubleshooting Amazon EC2 Auto Scaling: Health checks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html) in the *Amazon EC2 Auto Scaling User Guide*. For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * > **Note:** You can use this operation to describe target groups that were attached by using [AttachLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachLoadBalancerTargetGroups.html), but not for target groups that were attached by using [AttachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeLoadBalancerTargetGroupsRequest
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerTargetGroupsResponse
 * //   LoadBalancerTargetGroups: [ // LoadBalancerTargetGroupStates
 * //     { // LoadBalancerTargetGroupState
 * //       LoadBalancerTargetGroupARN: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancerTargetGroupsCommandInput - {@link DescribeLoadBalancerTargetGroupsCommandInput}
 * @returns {@link DescribeLoadBalancerTargetGroupsCommandOutput}
 * @see {@link DescribeLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
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
 * @example To describe the target groups for an Auto Scaling group
 * ```javascript
 * // This example describes the target groups attached to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DescribeLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancerTargetGroups: [
 *     {
 *       LoadBalancerTargetGroupARN: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *       State: "Added"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeLoadBalancerTargetGroupsCommand extends command<DescribeLoadBalancerTargetGroupsCommandInput, DescribeLoadBalancerTargetGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLoadBalancerTargetGroups",
  DescribeLoadBalancerTargetGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoadBalancerTargetGroupsRequest;
      output: DescribeLoadBalancerTargetGroupsResponse;
    };
    sdk: {
      input: DescribeLoadBalancerTargetGroupsCommandInput;
      output: DescribeLoadBalancerTargetGroupsCommandOutput;
    };
  };
}
