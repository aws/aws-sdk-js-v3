// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWarmPoolAnswer, DeleteWarmPoolType } from "../models/models_0";
import { de_DeleteWarmPoolCommand, se_DeleteWarmPoolCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWarmPoolCommand}.
 */
export interface DeleteWarmPoolCommandInput extends DeleteWarmPoolType {}
/**
 * @public
 *
 * The output of {@link DeleteWarmPoolCommand}.
 */
export interface DeleteWarmPoolCommandOutput extends DeleteWarmPoolAnswer, __MetadataBearer {}

/**
 * <p>Deletes the warm pool for the specified Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DeleteWarmPoolType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteWarmPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWarmPoolCommandInput - {@link DeleteWarmPoolCommandInput}
 * @returns {@link DeleteWarmPoolCommandOutput}
 * @see {@link DeleteWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteWarmPoolCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteWarmPoolCommand extends $Command
  .classBuilder<
    DeleteWarmPoolCommandInput,
    DeleteWarmPoolCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DeleteWarmPool", {})
  .n("AutoScalingClient", "DeleteWarmPoolCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWarmPoolCommand)
  .de(de_DeleteWarmPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWarmPoolType;
      output: {};
    };
    sdk: {
      input: DeleteWarmPoolCommandInput;
      output: DeleteWarmPoolCommandOutput;
    };
  };
}
