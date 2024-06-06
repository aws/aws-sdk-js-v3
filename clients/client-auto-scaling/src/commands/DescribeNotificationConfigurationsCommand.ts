// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNotificationConfigurationsAnswer, DescribeNotificationConfigurationsType } from "../models/models_0";
import {
  de_DescribeNotificationConfigurationsCommand,
  se_DescribeNotificationConfigurationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationConfigurationsCommand}.
 */
export interface DescribeNotificationConfigurationsCommandInput extends DescribeNotificationConfigurationsType {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationConfigurationsCommand}.
 */
export interface DescribeNotificationConfigurationsCommandOutput
  extends DescribeNotificationConfigurationsAnswer,
    __MetadataBearer {}

/**
 * <p>Gets information about the Amazon SNS notifications that are configured for one or more
 *             Auto Scaling groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeNotificationConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeNotificationConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeNotificationConfigurationsType
 *   AutoScalingGroupNames: [ // AutoScalingGroupNames
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationConfigurationsAnswer
 * //   NotificationConfigurations: [ // NotificationConfigurations // required
 * //     { // NotificationConfiguration
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       TopicARN: "STRING_VALUE",
 * //       NotificationType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNotificationConfigurationsCommandInput - {@link DescribeNotificationConfigurationsCommandInput}
 * @returns {@link DescribeNotificationConfigurationsCommandOutput}
 * @see {@link DescribeNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To describe Auto Scaling notification configurations
 * ```javascript
 * // This example describes the notification configurations for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupNames": [
 *     "my-auto-scaling-group"
 *   ]
 * };
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NotificationConfigurations": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "NotificationType": "autoscaling:TEST_NOTIFICATION",
 *       "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic-2"
 *     },
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "NotificationType": "autoscaling:TEST_NOTIFICATION",
 *       "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-notification-configurations-1
 * ```
 *
 */
export class DescribeNotificationConfigurationsCommand extends $Command
  .classBuilder<
    DescribeNotificationConfigurationsCommandInput,
    DescribeNotificationConfigurationsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DescribeNotificationConfigurations", {})
  .n("AutoScalingClient", "DescribeNotificationConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNotificationConfigurationsCommand)
  .de(de_DescribeNotificationConfigurationsCommand)
  .build() {}
