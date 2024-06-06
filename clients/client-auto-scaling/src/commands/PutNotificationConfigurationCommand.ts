// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutNotificationConfigurationType } from "../models/models_0";
import { de_PutNotificationConfigurationCommand, se_PutNotificationConfigurationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutNotificationConfigurationCommand}.
 */
export interface PutNotificationConfigurationCommandInput extends PutNotificationConfigurationType {}
/**
 * @public
 *
 * The output of {@link PutNotificationConfigurationCommand}.
 */
export interface PutNotificationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Configures an Auto Scaling group to send notifications when specified events take place.
 *             Subscribers to the specified topic can have messages delivered to an endpoint such as a
 *             web server or an email address.</p>
 *          <p>This configuration overwrites any existing configuration.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS
 *                 notifications when your Auto Scaling group scales</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutNotificationConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutNotificationConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutNotificationConfigurationType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TopicARN: "STRING_VALUE", // required
 *   NotificationTypes: [ // AutoScalingNotificationTypes // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutNotificationConfigurationCommandInput - {@link PutNotificationConfigurationCommandInput}
 * @returns {@link PutNotificationConfigurationCommandOutput}
 * @see {@link PutNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutNotificationConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To add an Auto Scaling notification
 * ```javascript
 * // This example adds the specified notification to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "NotificationTypes": [
 *     "autoscaling:TEST_NOTIFICATION"
 *   ],
 *   "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic"
 * };
 * const command = new PutNotificationConfigurationCommand(input);
 * await client.send(command);
 * // example id: autoscaling-put-notification-configuration-1
 * ```
 *
 */
export class PutNotificationConfigurationCommand extends $Command
  .classBuilder<
    PutNotificationConfigurationCommandInput,
    PutNotificationConfigurationCommandOutput,
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
  .s("AutoScaling_2011_01_01", "PutNotificationConfiguration", {})
  .n("AutoScalingClient", "PutNotificationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutNotificationConfigurationCommand)
  .de(de_PutNotificationConfigurationCommand)
  .build() {}
