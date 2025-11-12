// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExitStandbyAnswer, ExitStandbyQuery } from "../models/models_0";
import { ExitStandby } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExitStandbyCommand}.
 */
export interface ExitStandbyCommandInput extends ExitStandbyQuery {}
/**
 * @public
 *
 * The output of {@link ExitStandbyCommand}.
 */
export interface ExitStandbyCommandOutput extends ExitStandbyAnswer, __MetadataBearer {}

/**
 * <p>Moves the specified instances out of the standby state.</p>
 *          <p>After you put the instances back in service, the desired capacity is
 *             incremented.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExitStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExitStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // ExitStandbyQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new ExitStandbyCommand(input);
 * const response = await client.send(command);
 * // { // ExitStandbyAnswer
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
 * @param ExitStandbyCommandInput - {@link ExitStandbyCommandInput}
 * @returns {@link ExitStandbyCommandOutput}
 * @see {@link ExitStandbyCommandInput} for command's `input` shape.
 * @see {@link ExitStandbyCommandOutput} for command's `response` shape.
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
 * @example To move instances out of standby mode
 * ```javascript
 * // This example moves the specified instance out of standby mode.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceIds: [
 *     "i-93633f9b"
 *   ]
 * };
 * const command = new ExitStandbyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Activities: [
 *     {
 *       ActivityId: "142928e1-a2dc-453a-9b24-b85ad6735928",
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       Cause: "At 2015-04-12T15:14:29Z instance i-93633f9b was moved out of standby in response to a user request, increasing the capacity from 1 to 2.",
 *       Description: "Moving EC2 instance out of Standby: i-93633f9b",
 *       Details: "details",
 *       Progress: 30,
 *       StartTime: "2015-04-12T15:14:29.886Z",
 *       StatusCode: "PreInService"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ExitStandbyCommand extends $Command
  .classBuilder<
    ExitStandbyCommandInput,
    ExitStandbyCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "ExitStandby", {})
  .n("AutoScalingClient", "ExitStandbyCommand")
  .sc(ExitStandby)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExitStandbyQuery;
      output: ExitStandbyAnswer;
    };
    sdk: {
      input: ExitStandbyCommandInput;
      output: ExitStandbyCommandOutput;
    };
  };
}
