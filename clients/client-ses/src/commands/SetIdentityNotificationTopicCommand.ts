// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetIdentityNotificationTopicRequest, SetIdentityNotificationTopicResponse } from "../models/models_0";
import { de_SetIdentityNotificationTopicCommand, se_SetIdentityNotificationTopicCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityNotificationTopicCommand}.
 */
export interface SetIdentityNotificationTopicCommandInput extends SetIdentityNotificationTopicRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityNotificationTopicCommand}.
 */
export interface SetIdentityNotificationTopicCommandOutput
  extends SetIdentityNotificationTopicResponse,
    __MetadataBearer {}

/**
 * <p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use
 *             this operation, you specify a verified identity, such as an email address or domain.
 *             When you send an email that uses the chosen identity in the Source field, Amazon SES sends
 *             notifications to the topic you specified. You can send bounce, complaint, or delivery
 *             notifications (or any combination of the three) to the Amazon SNS topic that you
 *             specify.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityNotificationTopicCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityNotificationTopicCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetIdentityNotificationTopicRequest
 *   Identity: "STRING_VALUE", // required
 *   NotificationType: "Bounce" || "Complaint" || "Delivery", // required
 *   SnsTopic: "STRING_VALUE",
 * };
 * const command = new SetIdentityNotificationTopicCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityNotificationTopicCommandInput - {@link SetIdentityNotificationTopicCommandInput}
 * @returns {@link SetIdentityNotificationTopicCommandOutput}
 * @see {@link SetIdentityNotificationTopicCommandInput} for command's `input` shape.
 * @see {@link SetIdentityNotificationTopicCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example SetIdentityNotificationTopic
 * ```javascript
 * // The following example sets the Amazon SNS topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with the specified identity as the Source:
 * const input = {
 *   "Identity": "user@example.com",
 *   "NotificationType": "Bounce",
 *   "SnsTopic": "arn:aws:sns:us-west-2:111122223333:MyTopic"
 * };
 * const command = new SetIdentityNotificationTopicCommand(input);
 * await client.send(command);
 * // example id: setidentitynotificationtopic-1469057854966
 * ```
 *
 */
export class SetIdentityNotificationTopicCommand extends $Command
  .classBuilder<
    SetIdentityNotificationTopicCommandInput,
    SetIdentityNotificationTopicCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SetIdentityNotificationTopic", {})
  .n("SESClient", "SetIdentityNotificationTopicCommand")
  .f(void 0, void 0)
  .ser(se_SetIdentityNotificationTopicCommand)
  .de(de_SetIdentityNotificationTopicCommand)
  .build() {}
