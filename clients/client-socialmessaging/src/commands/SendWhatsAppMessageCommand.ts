// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendWhatsAppMessageInput, SendWhatsAppMessageOutput } from "../models/models_0";
import { SendWhatsAppMessage } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendWhatsAppMessageCommand}.
 */
export interface SendWhatsAppMessageCommandInput extends SendWhatsAppMessageInput {}
/**
 * @public
 *
 * The output of {@link SendWhatsAppMessageCommand}.
 */
export interface SendWhatsAppMessageCommandOutput extends SendWhatsAppMessageOutput, __MetadataBearer {}

/**
 * <p>Send a WhatsApp message. For examples of sending a message using the Amazon Web Services
 *          CLI, see <a href="https://docs.aws.amazon.com/social-messaging/latest/userguide/send-message.html">Sending messages</a> in the
 *          <i>
 *                <i>Amazon Web Services End User Messaging Social User Guide</i>
 *             </i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, SendWhatsAppMessageCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, SendWhatsAppMessageCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // SendWhatsAppMessageInput
 *   originationPhoneNumberId: "STRING_VALUE", // required
 *   message: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   metaApiVersion: "STRING_VALUE", // required
 * };
 * const command = new SendWhatsAppMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendWhatsAppMessageOutput
 * //   messageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendWhatsAppMessageCommandInput - {@link SendWhatsAppMessageCommandInput}
 * @returns {@link SendWhatsAppMessageCommandOutput}
 * @see {@link SendWhatsAppMessageCommandInput} for command's `input` shape.
 * @see {@link SendWhatsAppMessageCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class SendWhatsAppMessageCommand extends $Command
  .classBuilder<
    SendWhatsAppMessageCommandInput,
    SendWhatsAppMessageCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "SendWhatsAppMessage", {})
  .n("SocialMessagingClient", "SendWhatsAppMessageCommand")
  .sc(SendWhatsAppMessage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendWhatsAppMessageInput;
      output: SendWhatsAppMessageOutput;
    };
    sdk: {
      input: SendWhatsAppMessageCommandInput;
      output: SendWhatsAppMessageCommandOutput;
    };
  };
}
