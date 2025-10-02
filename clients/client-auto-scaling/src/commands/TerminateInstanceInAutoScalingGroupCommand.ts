// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivityType, TerminateInstanceInAutoScalingGroupType } from "../models/models_0";
import {
  de_TerminateInstanceInAutoScalingGroupCommand,
  se_TerminateInstanceInAutoScalingGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateInstanceInAutoScalingGroupCommand}.
 */
export interface TerminateInstanceInAutoScalingGroupCommandInput extends TerminateInstanceInAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link TerminateInstanceInAutoScalingGroupCommand}.
 */
export interface TerminateInstanceInAutoScalingGroupCommandOutput extends ActivityType, __MetadataBearer {}

/**
 * <p>Terminates the specified instance and optionally adjusts the desired group size. This
 *             operation cannot be called on instances in a warm pool.</p>
 *          <p>This call simply makes a termination request. The instance is not terminated
 *             immediately. When an instance is terminated, the instance status changes to
 *                 <code>terminated</code>. You can't connect to or start an instance after you've
 *             terminated it.</p>
 *          <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are terminated. </p>
 *          <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you
 *             decrement the desired capacity, your Auto Scaling group can become unbalanced between
 *             Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might
 *             terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-manually.html">Manual
 *                 scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, TerminateInstanceInAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, TerminateInstanceInAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // TerminateInstanceInAutoScalingGroupType
 *   InstanceId: "STRING_VALUE", // required
 *   ShouldDecrementDesiredCapacity: true || false, // required
 * };
 * const command = new TerminateInstanceInAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * // { // ActivityType
 * //   Activity: { // Activity
 * //     ActivityId: "STRING_VALUE", // required
 * //     AutoScalingGroupName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Cause: "STRING_VALUE", // required
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     StatusCode: "PendingSpotBidPlacement" || "WaitingForSpotInstanceRequestId" || "WaitingForSpotInstanceId" || "WaitingForInstanceId" || "PreInService" || "InProgress" || "WaitingForELBConnectionDraining" || "MidLifecycleAction" || "WaitingForInstanceWarmup" || "Successful" || "Failed" || "Cancelled" || "WaitingForConnectionDraining", // required
 * //     StatusMessage: "STRING_VALUE",
 * //     Progress: Number("int"),
 * //     Details: "STRING_VALUE",
 * //     AutoScalingGroupState: "STRING_VALUE",
 * //     AutoScalingGroupARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TerminateInstanceInAutoScalingGroupCommandInput - {@link TerminateInstanceInAutoScalingGroupCommandInput}
 * @returns {@link TerminateInstanceInAutoScalingGroupCommandOutput}
 * @see {@link TerminateInstanceInAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link TerminateInstanceInAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *  <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To terminate an instance in an Auto Scaling group
 * ```javascript
 * // This example terminates the specified instance from the specified Auto Scaling group without updating the size of the group. Auto Scaling launches a replacement instance after the specified instance terminates.
 * const input = {
 *   InstanceId: "i-93633f9b",
 *   ShouldDecrementDesiredCapacity: false
 * };
 * const command = new TerminateInstanceInAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class TerminateInstanceInAutoScalingGroupCommand extends $Command
  .classBuilder<
    TerminateInstanceInAutoScalingGroupCommandInput,
    TerminateInstanceInAutoScalingGroupCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "TerminateInstanceInAutoScalingGroup", {})
  .n("AutoScalingClient", "TerminateInstanceInAutoScalingGroupCommand")
  .f(void 0, void 0)
  .ser(se_TerminateInstanceInAutoScalingGroupCommand)
  .de(de_TerminateInstanceInAutoScalingGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateInstanceInAutoScalingGroupType;
      output: ActivityType;
    };
    sdk: {
      input: TerminateInstanceInAutoScalingGroupCommandInput;
      output: TerminateInstanceInAutoScalingGroupCommandOutput;
    };
  };
}
