// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendWhatsAppMessageInput, SendWhatsAppMessageOutput } from "../models/models_0";
import { SendWhatsAppMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Send a WhatsApp message. For examples of sending a message using the Amazon Web Services CLI, see [Sending messages](https://docs.aws.amazon.com/social-messaging/latest/userguide/send-message.html) in the **Amazon Web Services End User Messaging Social User Guide** .
 *
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
 *
 * Thrown when performing an action because a dependency would be broken.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request contains an invalid parameter value.
 *
 * @throws {@link SocialMessagingServiceException}
 *
 * Base exception class for all service exceptions from SocialMessaging service.
 *
 * @public
 */
export class SendWhatsAppMessageCommand extends command<SendWhatsAppMessageCommandInput, SendWhatsAppMessageCommandOutput>(
  _ep0,
  _mw0,
  "SendWhatsAppMessage",
  SendWhatsAppMessage$
) {
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
