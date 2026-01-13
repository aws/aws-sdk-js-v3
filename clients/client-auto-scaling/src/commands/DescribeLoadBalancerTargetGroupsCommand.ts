// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeLoadBalancerTargetGroupsRequest,
  DescribeLoadBalancerTargetGroupsResponse,
} from "../models/models_0";
import { DescribeLoadBalancerTargetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This API operation is superseded by <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTrafficSources.html">DescribeTrafficSources</a>,
 *                 which can describe multiple traffic sources types. We recommend using
 *                     <code>DetachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>DescribeLoadBalancerTargetGroups</code>. You
 *                 can use both the original <code>DescribeLoadBalancerTargetGroups</code> API
 *                 operation and <code>DescribeTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Gets information about the Elastic Load Balancing target groups for the specified Auto Scaling group.</p>
 *          <p>To determine the attachment status of the target group, use the <code>State</code>
 *             element in the response. When you attach a target group to an Auto Scaling group, the initial
 *                 <code>State</code> value is <code>Adding</code>. The state transitions to
 *                 <code>Added</code> after all Auto Scaling instances are registered with the target group. If
 *             Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to
 *                 <code>InService</code> after at least one Auto Scaling instance passes the health check.
 *             When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and
 *             replace any instances that are reported as unhealthy. If no registered instances pass
 *             the health checks, the target group doesn't enter the <code>InService</code> state. </p>
 *          <p>Target groups also have an <code>InService</code> state if you attach them in the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html">CreateAutoScalingGroup</a> API call. If your target group state is
 *                 <code>InService</code>, but it is not working properly, check the scaling activities
 *             by calling <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeScalingActivities.html">DescribeScalingActivities</a> and take any corrective actions
 *             necessary.</p>
 *          <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling:
 *                 Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more
 *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 *          <note>
 *             <p>You can use this operation to describe target groups that were attached by using
 *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachLoadBalancerTargetGroups.html">AttachLoadBalancerTargetGroups</a>, but not for target groups that
 *                 were attached by using <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html">AttachTrafficSources</a>.</p>
 *          </note>
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
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
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
export class DescribeLoadBalancerTargetGroupsCommand extends $Command
  .classBuilder<
    DescribeLoadBalancerTargetGroupsCommandInput,
    DescribeLoadBalancerTargetGroupsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DescribeLoadBalancerTargetGroups", {})
  .n("AutoScalingClient", "DescribeLoadBalancerTargetGroupsCommand")
  .sc(DescribeLoadBalancerTargetGroups$)
  .build() {
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
