// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  SetIdentityHeadersInNotificationsEnabledRequest,
  SetIdentityHeadersInNotificationsEnabledResponse,
} from "../models/models_0";
import { SetIdentityHeadersInNotificationsEnabled$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityHeadersInNotificationsEnabledCommand}.
 */
export interface SetIdentityHeadersInNotificationsEnabledCommandInput extends SetIdentityHeadersInNotificationsEnabledRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityHeadersInNotificationsEnabledCommand}.
 */
export interface SetIdentityHeadersInNotificationsEnabledCommandOutput extends SetIdentityHeadersInNotificationsEnabledResponse, __MetadataBearer {}

/**
 * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the
 *             original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified
 *             type.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityHeadersInNotificationsEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityHeadersInNotificationsEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // SetIdentityHeadersInNotificationsEnabledRequest
 *   Identity: "STRING_VALUE", // required
 *   NotificationType: "Bounce" || "Complaint" || "Delivery", // required
 *   Enabled: true || false, // required
 * };
 * const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityHeadersInNotificationsEnabledCommandInput - {@link SetIdentityHeadersInNotificationsEnabledCommandInput}
 * @returns {@link SetIdentityHeadersInNotificationsEnabledCommandOutput}
 * @see {@link SetIdentityHeadersInNotificationsEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityHeadersInNotificationsEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example SetIdentityHeadersInNotificationsEnabled
 * ```javascript
 * // The following example configures Amazon SES to include the original email headers in the Amazon SNS bounce notifications for an identity:
 * const input = {
 *   Enabled: true,
 *   Identity: "user@example.com",
 *   NotificationType: "Bounce"
 * };
 * const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetIdentityHeadersInNotificationsEnabledCommand extends $Command
  .classBuilder<
    SetIdentityHeadersInNotificationsEnabledCommandInput,
    SetIdentityHeadersInNotificationsEnabledCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "SetIdentityHeadersInNotificationsEnabled", {})
  .n("SESClient", "SetIdentityHeadersInNotificationsEnabledCommand")
  .sc(SetIdentityHeadersInNotificationsEnabled$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIdentityHeadersInNotificationsEnabledRequest;
      output: {};
    };
    sdk: {
      input: SetIdentityHeadersInNotificationsEnabledCommandInput;
      output: SetIdentityHeadersInNotificationsEnabledCommandOutput;
    };
  };
}
