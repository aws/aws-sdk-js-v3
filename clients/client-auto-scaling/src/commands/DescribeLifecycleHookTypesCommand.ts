// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLifecycleHookTypesAnswer } from "../models/models_0";
import { de_DescribeLifecycleHookTypesCommand, se_DescribeLifecycleHookTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLifecycleHookTypesCommand}.
 */
export interface DescribeLifecycleHookTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeLifecycleHookTypesCommand}.
 */
export interface DescribeLifecycleHookTypesCommandOutput extends DescribeLifecycleHookTypesAnswer, __MetadataBearer {}

/**
 * <p>Describes the available types of lifecycle hooks.</p>
 *          <p>The following hook types are supported:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>autoscaling:EC2_INSTANCE_TERMINATING</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHookTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHookTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLifecycleHookTypesAnswer
 * //   LifecycleHookTypes: [ // AutoScalingNotificationTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLifecycleHookTypesCommandInput - {@link DescribeLifecycleHookTypesCommandInput}
 * @returns {@link DescribeLifecycleHookTypesCommandOutput}
 * @see {@link DescribeLifecycleHookTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHookTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To describe the available types of lifecycle hooks
 * ```javascript
 * // This example describes the available lifecycle hook types.
 * const input = {};
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LifecycleHookTypes": [
 *     "autoscaling:EC2_INSTANCE_LAUNCHING",
 *     "autoscaling:EC2_INSTANCE_TERMINATING"
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-lifecycle-hook-types-1
 * ```
 *
 */
export class DescribeLifecycleHookTypesCommand extends $Command
  .classBuilder<
    DescribeLifecycleHookTypesCommandInput,
    DescribeLifecycleHookTypesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeLifecycleHookTypes", {})
  .n("AutoScalingClient", "DescribeLifecycleHookTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLifecycleHookTypesCommand)
  .de(de_DescribeLifecycleHookTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeLifecycleHookTypesAnswer;
    };
    sdk: {
      input: DescribeLifecycleHookTypesCommandInput;
      output: DescribeLifecycleHookTypesCommandOutput;
    };
  };
}
