// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachInstancesAnswer, DetachInstancesQuery } from "../models/models_0";
import { DetachInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachInstancesCommand}.
 */
export interface DetachInstancesCommandInput extends DetachInstancesQuery {}
/**
 * @public
 *
 * The output of {@link DetachInstancesCommand}.
 */
export interface DetachInstancesCommandOutput extends DetachInstancesAnswer, __MetadataBearer {}

/**
 * <p>Removes one or more instances from the specified Auto Scaling group.</p>
 *          <p>After the instances are detached, you can manage them independent of the Auto Scaling
 *             group.</p>
 *          <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are detached.</p>
 *          <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are
 *             deregistered from the load balancer. If there are target groups attached to the Auto Scaling
 *             group, the instances are deregistered from the target groups.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-detach-attach-instances.html">Detach
 *                 or attach instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DetachInstancesQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ShouldDecrementDesiredCapacity: true || false, // required
 * };
 * const command = new DetachInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DetachInstancesAnswer
 * //   Activities: [ // Activities
 * //     { // Activity
 * //       ActivityId: "STRING_VALUE", // required
 * //       AutoScalingGroupName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Cause: "STRING_VALUE", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StatusCode: "PendingSpotBidPlacement" || "WaitingForSpotInstanceRequestId" || "WaitingForSpotInstanceId" || "WaitingForInstanceId" || "PreInService" || "InProgress" || "WaitingForELBConnectionDraining" || "MidLifecycleAction" || "WaitingForInstanceWarmup" || "Successful" || "Failed" || "Cancelled" || "WaitingForConnectionDraining", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       Progress: Number("int"),
 * //       Details: "STRING_VALUE",
 * //       AutoScalingGroupState: "STRING_VALUE",
 * //       AutoScalingGroupARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetachInstancesCommandInput - {@link DetachInstancesCommandInput}
 * @returns {@link DetachInstancesCommandOutput}
 * @see {@link DetachInstancesCommandInput} for command's `input` shape.
 * @see {@link DetachInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To detach an instance from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified instance from the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceIds: [
 *     "i-93633f9b"
 *   ],
 *   ShouldDecrementDesiredCapacity: true
 * };
 * const command = new DetachInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Activities: [
 *     {
 *       ActivityId: "5091cb52-547a-47ce-a236-c9ccbc2cb2c9",
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       Cause: "At 2015-04-12T15:02:16Z instance i-93633f9b was detached in response to a user request, shrinking the capacity from 2 to 1.",
 *       Description: "Detaching EC2 instance: i-93633f9b",
 *       Details: "details",
 *       Progress: 50,
 *       StartTime: "2015-04-12T15:02:16.179Z",
 *       StatusCode: "InProgress"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DetachInstancesCommand extends $Command
  .classBuilder<
    DetachInstancesCommandInput,
    DetachInstancesCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DetachInstances", {})
  .n("AutoScalingClient", "DetachInstancesCommand")
  .sc(DetachInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachInstancesQuery;
      output: DetachInstancesAnswer;
    };
    sdk: {
      input: DetachInstancesCommandInput;
      output: DetachInstancesCommandOutput;
    };
  };
}
