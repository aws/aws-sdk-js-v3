// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelInstanceRefreshAnswer, CancelInstanceRefreshType } from "../models/models_0";
import { de_CancelInstanceRefreshCommand, se_CancelInstanceRefreshCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelInstanceRefreshCommand}.
 */
export interface CancelInstanceRefreshCommandInput extends CancelInstanceRefreshType {}
/**
 * @public
 *
 * The output of {@link CancelInstanceRefreshCommand}.
 */
export interface CancelInstanceRefreshCommandOutput extends CancelInstanceRefreshAnswer, __MetadataBearer {}

/**
 * <p>Cancels an instance refresh or rollback that is in progress. If an instance refresh or
 *             rollback is not in progress, an <code>ActiveInstanceRefreshNotFound</code> error
 *             occurs.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh
 *                 feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group
 *             after you make configuration changes.</p>
 *          <p>When you cancel an instance refresh, this does not roll back any changes that it made.
 *             Use the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_RollbackInstanceRefresh.html">RollbackInstanceRefresh</a> API to roll back instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CancelInstanceRefreshCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CancelInstanceRefreshCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AutoScalingClient(config);
 * const input = { // CancelInstanceRefreshType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new CancelInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * // { // CancelInstanceRefreshAnswer
 * //   InstanceRefreshId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelInstanceRefreshCommandInput - {@link CancelInstanceRefreshCommandInput}
 * @returns {@link CancelInstanceRefreshCommandOutput}
 * @see {@link CancelInstanceRefreshCommandInput} for command's `input` shape.
 * @see {@link CancelInstanceRefreshCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ActiveInstanceRefreshNotFoundFault} (client fault)
 *  <p>The request failed because an active instance refresh or rollback for the specified
 *             Auto Scaling group was not found.</p>
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
 * @public
 * @example To cancel an instance refresh
 * ```javascript
 * // This example cancels an instance refresh operation in progress.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new CancelInstanceRefreshCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceRefreshId": "08b91cf7-8fa6-48af-b6a6-d227f40f1b9b"
 * }
 * *\/
 * // example id: to-cancel-an-instance-refresh-1592960979817
 * ```
 *
 */
export class CancelInstanceRefreshCommand extends $Command
  .classBuilder<
    CancelInstanceRefreshCommandInput,
    CancelInstanceRefreshCommandOutput,
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
  .s("AutoScaling_2011_01_01", "CancelInstanceRefresh", {})
  .n("AutoScalingClient", "CancelInstanceRefreshCommand")
  .f(void 0, void 0)
  .ser(se_CancelInstanceRefreshCommand)
  .de(de_CancelInstanceRefreshCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelInstanceRefreshType;
      output: CancelInstanceRefreshAnswer;
    };
    sdk: {
      input: CancelInstanceRefreshCommandInput;
      output: CancelInstanceRefreshCommandOutput;
    };
  };
}
