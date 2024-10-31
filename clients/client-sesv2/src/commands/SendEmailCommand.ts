// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendEmailRequest, SendEmailResponse } from "../models/models_1";
import { de_SendEmailCommand, se_SendEmailCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendEmailCommand}.
 */
export interface SendEmailCommandInput extends SendEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendEmailCommand}.
 */
export interface SendEmailCommandOutput extends SendEmailResponse, __MetadataBearer {}

/**
 * <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of
 *             messages:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Simple</b> – A standard email message. When
 *                     you create this type of message, you specify the sender, the recipient, and the
 *                     message body, and Amazon SES assembles the message for you.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Raw</b> – A raw, MIME-formatted email
 *                     message. When you send this type of email, you have to specify all of the
 *                     message headers, as well as the message body. You can use this message type to
 *                     send messages that contain attachments. The message that you specify has to be a
 *                     valid MIME message.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Templated</b> – A message that contains
 *                     personalization tags. When you send this type of email, Amazon SES API v2 automatically
 *                     replaces the tags with values that you specify.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // SendEmailRequest
 *   FromEmailAddress: "STRING_VALUE",
 *   FromEmailAddressIdentityArn: "STRING_VALUE",
 *   Destination: { // Destination
 *     ToAddresses: [ // EmailAddressList
 *       "STRING_VALUE",
 *     ],
 *     CcAddresses: [
 *       "STRING_VALUE",
 *     ],
 *     BccAddresses: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReplyToAddresses: [
 *     "STRING_VALUE",
 *   ],
 *   FeedbackForwardingEmailAddress: "STRING_VALUE",
 *   FeedbackForwardingEmailAddressIdentityArn: "STRING_VALUE",
 *   Content: { // EmailContent
 *     Simple: { // Message
 *       Subject: { // Content
 *         Data: "STRING_VALUE", // required
 *         Charset: "STRING_VALUE",
 *       },
 *       Body: { // Body
 *         Text: {
 *           Data: "STRING_VALUE", // required
 *           Charset: "STRING_VALUE",
 *         },
 *         Html: {
 *           Data: "STRING_VALUE", // required
 *           Charset: "STRING_VALUE",
 *         },
 *       },
 *       Headers: [ // MessageHeaderList
 *         { // MessageHeader
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     Raw: { // RawMessage
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     Template: { // Template
 *       TemplateName: "STRING_VALUE",
 *       TemplateArn: "STRING_VALUE",
 *       TemplateContent: { // EmailTemplateContent
 *         Subject: "STRING_VALUE",
 *         Text: "STRING_VALUE",
 *         Html: "STRING_VALUE",
 *       },
 *       TemplateData: "STRING_VALUE",
 *       Headers: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   EmailTags: [ // MessageTagList
 *     { // MessageTag
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ConfigurationSetName: "STRING_VALUE",
 *   ListManagementOptions: { // ListManagementOptions
 *     ContactListName: "STRING_VALUE", // required
 *     TopicName: "STRING_VALUE",
 *   },
 * };
 * const command = new SendEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendEmailResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendEmailCommandInput - {@link SendEmailCommandInput}
 * @returns {@link SendEmailCommandOutput}
 * @see {@link SendEmailCommandInput} for command's `input` shape.
 * @see {@link SendEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AccountSuspendedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p>The message can't be sent because the sending domain isn't verified.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>The message can't be sent because it contains invalid content.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link SendingPausedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class SendEmailCommand extends $Command
  .classBuilder<
    SendEmailCommandInput,
    SendEmailCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "SendEmail", {})
  .n("SESv2Client", "SendEmailCommand")
  .f(void 0, void 0)
  .ser(se_SendEmailCommand)
  .de(de_SendEmailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendEmailRequest;
      output: SendEmailResponse;
    };
    sdk: {
      input: SendEmailCommandInput;
      output: SendEmailCommandOutput;
    };
  };
}
