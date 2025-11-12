// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutWarmPoolAnswer, PutWarmPoolType } from "../models/models_0";
import { PutWarmPool } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutWarmPoolCommand}.
 */
export interface PutWarmPoolCommandInput extends PutWarmPoolType {}
/**
 * @public
 *
 * The output of {@link PutWarmPoolCommand}.
 */
export interface PutWarmPoolCommandOutput extends PutWarmPoolAnswer, __MetadataBearer {}

/**
 * <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of
 *             pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your
 *             application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new
 *             desired capacity.</p>
 *          <p>This operation must be called from the Region in which the Auto Scaling group was
 *             created.</p>
 *          <p>You can view the instances in the warm pool using the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeWarmPool.html">DescribeWarmPool</a> API call.
 *             If you are no longer using a warm pool, you can delete it by calling the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DeleteWarmPool.html">DeleteWarmPool</a> API.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // PutWarmPoolType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   MaxGroupPreparedCapacity: Number("int"),
 *   MinSize: Number("int"),
 *   PoolState: "Stopped" || "Running" || "Hibernated",
 *   InstanceReusePolicy: { // InstanceReusePolicy
 *     ReuseOnScaleIn: true || false,
 *   },
 * };
 * const command = new PutWarmPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWarmPoolCommandInput - {@link PutWarmPoolCommandInput}
 * @returns {@link PutWarmPoolCommandOutput}
 * @see {@link PutWarmPoolCommandInput} for command's `input` shape.
 * @see {@link PutWarmPoolCommandOutput} for command's `response` shape.
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
 * @example To create a warm pool for an Auto Scaling group
 * ```javascript
 * // This example creates a warm pool for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   InstanceReusePolicy: {
 *     ReuseOnScaleIn: true
 *   },
 *   MinSize: 30,
 *   PoolState: "Hibernated"
 * };
 * const command = new PutWarmPoolCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutWarmPoolCommand extends $Command
  .classBuilder<
    PutWarmPoolCommandInput,
    PutWarmPoolCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "PutWarmPool", {})
  .n("AutoScalingClient", "PutWarmPoolCommand")
  .sc(PutWarmPool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWarmPoolType;
      output: {};
    };
    sdk: {
      input: PutWarmPoolCommandInput;
      output: PutWarmPoolCommandOutput;
    };
  };
}
