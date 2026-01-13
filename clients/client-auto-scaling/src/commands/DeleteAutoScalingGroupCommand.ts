// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAutoScalingGroupType } from "../models/models_0";
import { DeleteAutoScalingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAutoScalingGroupCommand}.
 */
export interface DeleteAutoScalingGroupCommandInput extends DeleteAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link DeleteAutoScalingGroupCommand}.
 */
export interface DeleteAutoScalingGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Auto Scaling group.</p>
 *          <p>If the group has instances or scaling activities in progress, you must specify the
 *             option to force the deletion in order for it to succeed. The force delete operation will
 *             also terminate the EC2 instances. If the group has a warm pool, the force delete option
 *             also deletes the warm pool.</p>
 *          <p>To remove instances from the Auto Scaling group before deleting it, call the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachInstances.html">DetachInstances</a> API with the list of instances and the option to
 *             decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement
 *             instances.</p>
 *          <p>To terminate all instances before deleting the Auto Scaling group, call the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_UpdateAutoScalingGroup.html">UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity
 *             of the Auto Scaling group to
 *             zero.</p>
 *          <p>If the group has scaling policies, deleting the group deletes the policies, the
 *             underlying alarm actions, and any alarm that no longer has an associated action.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling
 *                 infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DeleteAutoScalingGroupType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutoScalingGroupCommandInput - {@link DeleteAutoScalingGroupCommandInput}
 * @returns {@link DeleteAutoScalingGroupCommandOutput}
 * @see {@link DeleteAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *  <p>The operation can't be performed because the resource is in use.</p>
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *  <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To delete an Auto Scaling group
 * ```javascript
 * // This example deletes the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DeleteAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To delete an Auto Scaling group and all its instances
 * ```javascript
 * // This example deletes the specified Auto Scaling group and all its instances.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   ForceDelete: true
 * };
 * const command = new DeleteAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAutoScalingGroupCommand extends $Command
  .classBuilder<
    DeleteAutoScalingGroupCommandInput,
    DeleteAutoScalingGroupCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DeleteAutoScalingGroup", {})
  .n("AutoScalingClient", "DeleteAutoScalingGroupCommand")
  .sc(DeleteAutoScalingGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutoScalingGroupType;
      output: {};
    };
    sdk: {
      input: DeleteAutoScalingGroupCommandInput;
      output: DeleteAutoScalingGroupCommandOutput;
    };
  };
}
