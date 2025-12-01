// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RollbackInstanceRefreshAnswer, RollbackInstanceRefreshType } from "../models/models_0";
import { RollbackInstanceRefresh } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RollbackInstanceRefreshCommand}.
 */
export interface RollbackInstanceRefreshCommandInput extends RollbackInstanceRefreshType {}
/**
 * @public
 *
 * The output of {@link RollbackInstanceRefreshCommand}.
 */
export interface RollbackInstanceRefreshCommandOutput extends RollbackInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Cancels an instance refresh that is in progress and rolls back any changes that it
 *             made. Amazon EC2 Auto Scaling replaces any instances that were replaced during the instance refresh.
 *             This restores your Auto Scaling group to the configuration that it was using before the start of
 *             the instance refresh. </p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group
 *             after you make configuration changes.</p>
 *          <p>A rollback is not supported in the following situations: </p>
 *          <ul>
 *             <li>
 *                <p>There is no desired configuration specified for the instance refresh.</p>
 *             </li>
 *             <li>
 *                <p>The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead
 *                     of an AMI ID for the <code>ImageId</code> property.</p>
 *             </li>
 *             <li>
 *                <p>The Auto Scaling group uses the launch template's <code>$Latest</code> or
 *                         <code>$Default</code> version.</p>
 *             </li>
 *          </ul>
 *          <p>When you receive a successful response from this operation, Amazon EC2 Auto Scaling immediately
 *             begins replacing instances. You can check the status of this operation through the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeInstanceRefreshes.html">DescribeInstanceRefreshes</a> API operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, RollbackInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, RollbackInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // RollbackInstanceRefreshType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new RollbackInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * // { // RollbackInstanceRefreshAnswer
 * //   InstanceRefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RollbackInstanceRefreshCommandInput - {@link RollbackInstanceRefreshCommandInput}
 * @returns {@link RollbackInstanceRefreshCommandOutput}
 * @see {@link RollbackInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link RollbackInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ActiveInstanceRefreshNotFoundFault} (client fault)
 *  <p>The request failed because an active instance refresh or rollback for the specified
 *             Auto Scaling group was not found.</p>
 *
 * @throws {@link IrreversibleInstanceRefreshFault} (client fault)
 *  <p>The request failed because a desired configuration was not found or an incompatible
 *             launch template (uses a Systems Manager parameter instead of an AMI ID) or launch
 *             template version (<code>$Latest</code> or <code>$Default</code>) is present on the Auto Scaling
 *             group.</p>
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
 * @public
 */
export class RollbackInstanceRefreshCommand extends $Command
  .classBuilder<
    RollbackInstanceRefreshCommandInput,
    RollbackInstanceRefreshCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "RollbackInstanceRefresh", {})
  .n("AutoScalingClient", "RollbackInstanceRefreshCommand")
  .sc(RollbackInstanceRefresh)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackInstanceRefreshType;
      output: RollbackInstanceRefreshAnswer;
    };
    sdk: {
      input: RollbackInstanceRefreshCommandInput;
      output: RollbackInstanceRefreshCommandOutput;
    };
  };
}
