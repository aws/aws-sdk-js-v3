// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnterStandbyAnswer, EnterStandbyQuery } from "../models/models_0";
import { EnterStandby } from "../schemas/schemas_3_Scaling";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnterStandbyCommand}.
 */
export interface EnterStandbyCommandInput extends EnterStandbyQuery {}
/**
 * @public
 *
 * The output of {@link EnterStandbyCommand}.
 */
export interface EnterStandbyCommandOutput extends EnterStandbyAnswer, __MetadataBearer {}

/**
 * <p>Moves the specified instances into the standby state.</p>
 *          <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can
 *             enter standby as long as the desired capacity of the Auto Scaling group after the instances are
 *             placed into standby is equal to or greater than the minimum capacity of the
 *             group.</p>
 *          <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group
 *             launches new instances to replace the instances on standby.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, EnterStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, EnterStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // EnterStandbyQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ShouldDecrementDesiredCapacity: true || false, // required
 * };
 * const command = new EnterStandbyCommand(input);
 * const response = await client.send(command);
 * // { // EnterStandbyAnswer
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
 * @param EnterStandbyCommandInput - {@link EnterStandbyCommandInput}
 * @returns {@link EnterStandbyCommandOutput}
 * @see {@link EnterStandbyCommandInput} for command's `input` shape.
 * @see {@link EnterStandbyCommandOutput} for command's `response` shape.
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
 * @example To move instances into standby mode
 * ```javascript
 * // This example puts the specified instance into standby mode.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceIds: [
 *     "i-93633f9b"
 *   ],
 *   ShouldDecrementDesiredCapacity: true
 * };
 * const command = new EnterStandbyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Activities: [
 *     {
 *       ActivityId: "ffa056b4-6ed3-41ba-ae7c-249dfae6eba1",
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       Cause: "At 2015-04-12T15:10:23Z instance i-93633f9b was moved to standby in response to a user request, shrinking the capacity from 2 to 1.",
 *       Description: "Moving EC2 instance to Standby: i-93633f9b",
 *       Details: "details",
 *       Progress: 50,
 *       StartTime: "2015-04-12T15:10:23.640Z",
 *       StatusCode: "InProgress"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class EnterStandbyCommand extends $Command
  .classBuilder<
    EnterStandbyCommandInput,
    EnterStandbyCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "EnterStandby", {})
  .n("AutoScalingClient", "EnterStandbyCommand")
  .sc(EnterStandby)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnterStandbyQuery;
      output: EnterStandbyAnswer;
    };
    sdk: {
      input: EnterStandbyCommandInput;
      output: EnterStandbyCommandOutput;
    };
  };
}
