// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLifecycleHooksAnswer, DescribeLifecycleHooksType } from "../models/models_0";
import { de_DescribeLifecycleHooksCommand, se_DescribeLifecycleHooksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLifecycleHooksCommand}.
 */
export interface DescribeLifecycleHooksCommandInput extends DescribeLifecycleHooksType {}
/**
 * @public
 *
 * The output of {@link DescribeLifecycleHooksCommand}.
 */
export interface DescribeLifecycleHooksCommandOutput extends DescribeLifecycleHooksAnswer, __MetadataBearer {}

/**
 * <p>Gets information about the lifecycle hooks for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHooksCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHooksCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeLifecycleHooksType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LifecycleHookNames: [ // LifecycleHookNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLifecycleHooksAnswer
 * //   LifecycleHooks: [ // LifecycleHooks
 * //     { // LifecycleHook
 * //       LifecycleHookName: "STRING_VALUE",
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       LifecycleTransition: "STRING_VALUE",
 * //       NotificationTargetARN: "STRING_VALUE",
 * //       RoleARN: "STRING_VALUE",
 * //       NotificationMetadata: "STRING_VALUE",
 * //       HeartbeatTimeout: Number("int"),
 * //       GlobalTimeout: Number("int"),
 * //       DefaultResult: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLifecycleHooksCommandInput - {@link DescribeLifecycleHooksCommandInput}
 * @returns {@link DescribeLifecycleHooksCommandOutput}
 * @see {@link DescribeLifecycleHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHooksCommandOutput} for command's `response` shape.
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
 * @example To describe your lifecycle hooks
 * ```javascript
 * // This example describes the lifecycle hooks for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LifecycleHooks": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "DefaultResult": "ABANDON",
 *       "GlobalTimeout": 172800,
 *       "HeartbeatTimeout": 3600,
 *       "LifecycleHookName": "my-lifecycle-hook",
 *       "LifecycleTransition": "autoscaling:EC2_INSTANCE_LAUNCHING",
 *       "NotificationTargetARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic",
 *       "RoleARN": "arn:aws:iam::123456789012:role/my-auto-scaling-role"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-lifecycle-hooks-1
 * ```
 *
 */
export class DescribeLifecycleHooksCommand extends $Command
  .classBuilder<
    DescribeLifecycleHooksCommandInput,
    DescribeLifecycleHooksCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeLifecycleHooks", {})
  .n("AutoScalingClient", "DescribeLifecycleHooksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLifecycleHooksCommand)
  .de(de_DescribeLifecycleHooksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLifecycleHooksType;
      output: DescribeLifecycleHooksAnswer;
    };
    sdk: {
      input: DescribeLifecycleHooksCommandInput;
      output: DescribeLifecycleHooksCommandOutput;
    };
  };
}
