// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse,
} from "../models/models_0";
import {
  de_SetIdentityFeedbackForwardingEnabledCommand,
  se_SetIdentityFeedbackForwardingEnabledCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityFeedbackForwardingEnabledCommand}.
 */
export interface SetIdentityFeedbackForwardingEnabledCommandInput extends SetIdentityFeedbackForwardingEnabledRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityFeedbackForwardingEnabledCommand}.
 */
export interface SetIdentityFeedbackForwardingEnabledCommandOutput
  extends SetIdentityFeedbackForwardingEnabledResponse,
    __MetadataBearer {}

/**
 * <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES
 *             forwards bounce and complaint notifications as email. Feedback forwarding can only be
 *             disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and
 *             complaints.</p>
 *          <note>
 *             <p>Feedback forwarding does not apply to delivery notifications. Delivery
 *                 notifications are only available through Amazon SNS.</p>
 *          </note>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityFeedbackForwardingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityFeedbackForwardingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESClient(config);
 * const input = { // SetIdentityFeedbackForwardingEnabledRequest
 *   Identity: "STRING_VALUE", // required
 *   ForwardingEnabled: true || false, // required
 * };
 * const command = new SetIdentityFeedbackForwardingEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityFeedbackForwardingEnabledCommandInput - {@link SetIdentityFeedbackForwardingEnabledCommandInput}
 * @returns {@link SetIdentityFeedbackForwardingEnabledCommandOutput}
 * @see {@link SetIdentityFeedbackForwardingEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityFeedbackForwardingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example SetIdentityFeedbackForwardingEnabled
 * ```javascript
 * // The following example configures Amazon SES to forward an identity's bounces and complaints via email:
 * const input = {
 *   "ForwardingEnabled": true,
 *   "Identity": "user@example.com"
 * };
 * const command = new SetIdentityFeedbackForwardingEnabledCommand(input);
 * await client.send(command);
 * // example id: setidentityfeedbackforwardingenabled-1469056811329
 * ```
 *
 */
export class SetIdentityFeedbackForwardingEnabledCommand extends $Command
  .classBuilder<
    SetIdentityFeedbackForwardingEnabledCommandInput,
    SetIdentityFeedbackForwardingEnabledCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SetIdentityFeedbackForwardingEnabled", {})
  .n("SESClient", "SetIdentityFeedbackForwardingEnabledCommand")
  .f(void 0, void 0)
  .ser(se_SetIdentityFeedbackForwardingEnabledCommand)
  .de(de_SetIdentityFeedbackForwardingEnabledCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIdentityFeedbackForwardingEnabledRequest;
      output: {};
    };
    sdk: {
      input: SetIdentityFeedbackForwardingEnabledCommandInput;
      output: SetIdentityFeedbackForwardingEnabledCommandOutput;
    };
  };
}
