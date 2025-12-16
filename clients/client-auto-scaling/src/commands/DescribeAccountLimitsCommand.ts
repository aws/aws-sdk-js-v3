// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAccountLimitsAnswer } from "../models/models_0";
import { DescribeAccountLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandOutput extends DescribeAccountLimitsAnswer, __MetadataBearer {}

/**
 * <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p>
 *          <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum
 *             number of Auto Scaling groups and launch configurations that you can create in a given Region.
 *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAccountLimitsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountLimitsAnswer
 * //   MaxNumberOfAutoScalingGroups: Number("int"),
 * //   MaxNumberOfLaunchConfigurations: Number("int"),
 * //   NumberOfAutoScalingGroups: Number("int"),
 * //   NumberOfLaunchConfigurations: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeAccountLimitsCommandInput - {@link DescribeAccountLimitsCommandInput}
 * @returns {@link DescribeAccountLimitsCommandOutput}
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
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
 * @example To describe your Auto Scaling account limits
 * ```javascript
 * // This example describes the Amazon EC2 Auto Scaling service quotas for your account.
 * const input = { /* empty *\/ };
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MaxNumberOfAutoScalingGroups: 20,
 *   MaxNumberOfLaunchConfigurations: 100,
 *   NumberOfAutoScalingGroups: 3,
 *   NumberOfLaunchConfigurations: 5
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAccountLimitsCommand extends $Command
  .classBuilder<
    DescribeAccountLimitsCommandInput,
    DescribeAccountLimitsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DescribeAccountLimits", {})
  .n("AutoScalingClient", "DescribeAccountLimitsCommand")
  .sc(DescribeAccountLimits$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountLimitsAnswer;
    };
    sdk: {
      input: DescribeAccountLimitsCommandInput;
      output: DescribeAccountLimitsCommandOutput;
    };
  };
}
