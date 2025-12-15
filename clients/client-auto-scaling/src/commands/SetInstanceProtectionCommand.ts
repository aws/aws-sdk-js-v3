// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SetInstanceProtectionAnswer, SetInstanceProtectionQuery } from "../models/models_0";
import { SetInstanceProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetInstanceProtectionCommand}.
 */
export interface SetInstanceProtectionCommandInput extends SetInstanceProtectionQuery {}
/**
 * @public
 *
 * The output of {@link SetInstanceProtectionCommand}.
 */
export interface SetInstanceProtectionCommandOutput extends SetInstanceProtectionAnswer, __MetadataBearer {}

/**
 * <p>Updates the instance protection settings of the specified instances. This operation
 *             cannot be called on instances in a warm pool.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Use
 *                 instance scale-in protection</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetInstanceProtectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetInstanceProtectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // SetInstanceProtectionQuery
 *   InstanceIds: [ // InstanceIds // required
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ProtectedFromScaleIn: true || false, // required
 * };
 * const command = new SetInstanceProtectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetInstanceProtectionCommandInput - {@link SetInstanceProtectionCommandInput}
 * @returns {@link SetInstanceProtectionCommandOutput}
 * @see {@link SetInstanceProtectionCommandInput} for command's `input` shape.
 * @see {@link SetInstanceProtectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To enable instance protection for an instance
 * ```javascript
 * // This example enables instance protection for the specified instance.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceIds: [
 *     "i-93633f9b"
 *   ],
 *   ProtectedFromScaleIn: true
 * };
 * const command = new SetInstanceProtectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To disable instance protection for an instance
 * ```javascript
 * // This example disables instance protection for the specified instance.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceIds: [
 *     "i-93633f9b"
 *   ],
 *   ProtectedFromScaleIn: false
 * };
 * const command = new SetInstanceProtectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetInstanceProtectionCommand extends $Command
  .classBuilder<
    SetInstanceProtectionCommandInput,
    SetInstanceProtectionCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "SetInstanceProtection", {})
  .n("AutoScalingClient", "SetInstanceProtectionCommand")
  .sc(SetInstanceProtection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetInstanceProtectionQuery;
      output: {};
    };
    sdk: {
      input: SetInstanceProtectionCommandInput;
      output: SetInstanceProtectionCommandOutput;
    };
  };
}
