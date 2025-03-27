// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAutoScalingNotificationTypesAnswer } from "../models/models_0";
import {
  de_DescribeAutoScalingNotificationTypesCommand,
  se_DescribeAutoScalingNotificationTypesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoScalingNotificationTypesCommand}.
 */
export interface DescribeAutoScalingNotificationTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingNotificationTypesCommand}.
 */
export interface DescribeAutoScalingNotificationTypesCommandOutput
  extends DescribeAutoScalingNotificationTypesAnswer,
    __MetadataBearer {}

/**
 * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingNotificationTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingNotificationTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeAutoScalingNotificationTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutoScalingNotificationTypesAnswer
 * //   AutoScalingNotificationTypes: [ // AutoScalingNotificationTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAutoScalingNotificationTypesCommandInput - {@link DescribeAutoScalingNotificationTypesCommandInput}
 * @returns {@link DescribeAutoScalingNotificationTypesCommandOutput}
 * @see {@link DescribeAutoScalingNotificationTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingNotificationTypesCommandOutput} for command's `response` shape.
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
 * @example To describe the Auto Scaling notification types
 * ```javascript
 * // This example describes the available notification types.
 * const input = { /* empty *\/ };
 * const command = new DescribeAutoScalingNotificationTypesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AutoScalingNotificationTypes: [
 *     "autoscaling:EC2_INSTANCE_LAUNCH",
 *     "autoscaling:EC2_INSTANCE_LAUNCH_ERROR",
 *     "autoscaling:EC2_INSTANCE_TERMINATE",
 *     "autoscaling:EC2_INSTANCE_TERMINATE_ERROR",
 *     "autoscaling:TEST_NOTIFICATION"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAutoScalingNotificationTypesCommand extends $Command
  .classBuilder<
    DescribeAutoScalingNotificationTypesCommandInput,
    DescribeAutoScalingNotificationTypesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeAutoScalingNotificationTypes", {})
  .n("AutoScalingClient", "DescribeAutoScalingNotificationTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAutoScalingNotificationTypesCommand)
  .de(de_DescribeAutoScalingNotificationTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAutoScalingNotificationTypesAnswer;
    };
    sdk: {
      input: DescribeAutoScalingNotificationTypesCommandInput;
      output: DescribeAutoScalingNotificationTypesCommandOutput;
    };
  };
}
