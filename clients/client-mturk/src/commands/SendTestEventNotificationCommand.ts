// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendTestEventNotificationRequest, SendTestEventNotificationResponse } from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendTestEventNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendTestEventNotificationCommand}.
 */
export interface SendTestEventNotificationCommandInput extends SendTestEventNotificationRequest {}
/**
 * @public
 *
 * The output of {@link SendTestEventNotificationCommand}.
 */
export interface SendTestEventNotificationCommandOutput extends SendTestEventNotificationResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send
 *             a notification message as if a HIT event occurred, according to the provided
 *             notification specification. This allows you to test notifications without
 *             setting up notifications for a real HIT type and trying to trigger them using the website.
 *             When you call this operation, the service attempts to send the test notification immediately.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendTestEventNotificationCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendTestEventNotificationCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // SendTestEventNotificationRequest
 *   Notification: { // NotificationSpecification
 *     Destination: "STRING_VALUE", // required
 *     Transport: "Email" || "SQS" || "SNS", // required
 *     Version: "STRING_VALUE", // required
 *     EventTypes: [ // EventTypeList // required
 *       "AssignmentAccepted" || "AssignmentAbandoned" || "AssignmentReturned" || "AssignmentSubmitted" || "AssignmentRejected" || "AssignmentApproved" || "HITCreated" || "HITExpired" || "HITReviewable" || "HITExtended" || "HITDisposed" || "Ping",
 *     ],
 *   },
 *   TestEventType: "AssignmentAccepted" || "AssignmentAbandoned" || "AssignmentReturned" || "AssignmentSubmitted" || "AssignmentRejected" || "AssignmentApproved" || "HITCreated" || "HITExpired" || "HITReviewable" || "HITExtended" || "HITDisposed" || "Ping", // required
 * };
 * const command = new SendTestEventNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTestEventNotificationCommandInput - {@link SendTestEventNotificationCommandInput}
 * @returns {@link SendTestEventNotificationCommandOutput}
 * @see {@link SendTestEventNotificationCommandInput} for command's `input` shape.
 * @see {@link SendTestEventNotificationCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class SendTestEventNotificationCommand extends $Command
  .classBuilder<
    SendTestEventNotificationCommandInput,
    SendTestEventNotificationCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "SendTestEventNotification", {})
  .n("MTurkClient", "SendTestEventNotificationCommand")
  .sc(SendTestEventNotification$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendTestEventNotificationRequest;
      output: {};
    };
    sdk: {
      input: SendTestEventNotificationCommandInput;
      output: SendTestEventNotificationCommandOutput;
    };
  };
}
