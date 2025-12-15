// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SetDesiredCapacityType } from "../models/models_0";
import { SetDesiredCapacity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDesiredCapacityCommand}.
 */
export interface SetDesiredCapacityCommandInput extends SetDesiredCapacityType {}
/**
 * @public
 *
 * The output of {@link SetDesiredCapacityCommand}.
 */
export interface SetDesiredCapacityCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the size of the specified Auto Scaling group.</p>
 *          <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value
 *             that is lower than the current size of the group, the Auto Scaling group uses its termination
 *             policy to determine which instances to terminate. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-manually.html">Manual
 *                 scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetDesiredCapacityCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // SetDesiredCapacityType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   DesiredCapacity: Number("int"), // required
 *   HonorCooldown: true || false,
 * };
 * const command = new SetDesiredCapacityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetDesiredCapacityCommandInput - {@link SetDesiredCapacityCommandInput}
 * @returns {@link SetDesiredCapacityCommandOutput}
 * @see {@link SetDesiredCapacityCommandInput} for command's `input` shape.
 * @see {@link SetDesiredCapacityCommandOutput} for command's `response` shape.
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
 * @example To set the desired capacity for an Auto Scaling group
 * ```javascript
 * // This example sets the desired capacity for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   DesiredCapacity: 2,
 *   HonorCooldown: true
 * };
 * const command = new SetDesiredCapacityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetDesiredCapacityCommand extends $Command
  .classBuilder<
    SetDesiredCapacityCommandInput,
    SetDesiredCapacityCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "SetDesiredCapacity", {})
  .n("AutoScalingClient", "SetDesiredCapacityCommand")
  .sc(SetDesiredCapacity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDesiredCapacityType;
      output: {};
    };
    sdk: {
      input: SetDesiredCapacityCommandInput;
      output: SetDesiredCapacityCommandOutput;
    };
  };
}
