// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendRawEmailRequest, SendRawEmailResponse } from "../models/models_0";
import { SendRawEmail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendRawEmailCommand}.
 */
export interface SendRawEmailCommandInput extends SendRawEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendRawEmailCommand}.
 */
export interface SendRawEmailCommandOutput extends SendRawEmailResponse, __MetadataBearer {}

/**
 * Composes an email message and immediately queues it for sending.
 *
 * This operation is more flexible than the `SendEmail` operation. When you use the `SendRawEmail` operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you need to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.
 *
 * The `SendRawEmail` operation has the following requirements:
 *
 * - You can only send email from [verified email addresses or domains](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html). If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.
 * - If your account is still in the [Amazon SES sandbox](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html), you can only send email to other verified addresses in your account, or to addresses that are associated with the [Amazon SES mailbox simulator](https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html).
 * - The maximum message size, including attachments, is 10 MB.
 * - Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.
 * - If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format *UserName@[SubDomain.]Domain.TopLevelDomain*), Amazon SES rejects the entire message, even if the other addresses are valid.
 * - Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.
 * - Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see [MIME Encoding](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html#send-email-mime-encoding) in the *Amazon SES Developer Guide*.
 *
 * Additionally, keep the following considerations in mind when using the `SendRawEmail` operation:
 *
 * - Although you can customize the message headers when using the `SendRawEmail` operation, Amazon SES automatically applies its own `Message-ID` and `Date` headers; if you passed these headers when creating the message, they are overwritten by the values that Amazon SES provides.
 * - If you are using sending authorization to send on behalf of another user, `SendRawEmail` enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters `SourceArn`, `FromArn`, and/or `ReturnPathArn`, or you can include the following X-headers in the header of your raw email:
 *
 *   - `X-SES-SOURCE-ARN`
 *   - `X-SES-FROM-ARN`
 *   - `X-SES-RETURN-PATH-ARN`
 *
 *   > **Important:** Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.
 *
 *   If you only specify the `SourceIdentityArn` parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.
 *
 *   For more information about sending authorization, see the [Using Sending Authorization with Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html) in the *Amazon SES Developer Guide.*
 * - For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your *sending quota*). For more information about sending quotas in Amazon SES, see [Managing Your Amazon SES Sending Limits](https://docs.aws.amazon.com/ses/latest/dg/manage-sending-quotas.html) in the *Amazon SES Developer Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendRawEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // SendRawEmailRequest
 *   Source: "STRING_VALUE",
 *   Destinations: [ // AddressList
 *     "STRING_VALUE",
 *   ],
 *   RawMessage: { // RawMessage
 *     Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 *   FromArn: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   ReturnPathArn: "STRING_VALUE",
 *   Tags: [ // MessageTagList
 *     { // MessageTag
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new SendRawEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendRawEmailResponse
 * //   MessageId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendRawEmailCommandInput - {@link SendRawEmailCommandInput}
 * @returns {@link SendRawEmailCommandOutput}
 * @see {@link SendRawEmailCommandInput} for command's `input` shape.
 * @see {@link SendRawEmailCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AccountSendingPausedException} (client fault)
 *
 * Indicates that email sending is disabled for your entire Amazon SES account.
 *
 * You can enable or disable email sending for your Amazon SES account using UpdateAccountSendingEnabled.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *
 * Indicates that the configuration set does not exist.
 *
 * @throws {@link ConfigurationSetSendingPausedException} (client fault)
 *
 * Indicates that email sending is disabled for the configuration set.
 *
 * You can enable or disable email sending for a configuration set using UpdateConfigurationSetSendingEnabled.
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *
 * Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html).
 *
 * @throws {@link MessageRejected} (client fault)
 *
 * Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @example SendRawEmail
 * ```javascript
 * // The following example sends an email with an attachment:
 * const input = {
 *   Destinations:   [],
 *   FromArn: "",
 *   RawMessage: {
 *     Data: `From: sender@example.com\nTo: recipient@example.com\nSubject: Test email (contains an attachment)\nMIME-Version: 1.0\nContent-type: Multipart/Mixed; boundary="NextPart"\n\n--NextPart\nContent-Type: text/plain\n\nThis is the message body.\n\n--NextPart\nContent-Type: text/plain;\nContent-Disposition: attachment; filename="attachment.txt"\n\nThis is the text in the attachment.\n\n--NextPart--`
 *   },
 *   ReturnPathArn: "",
 *   Source: "",
 *   SourceArn: ""
 * };
 * const command = new SendRawEmailCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MessageId: "EXAMPLEf3f73d99b-c63fb06f-d263-41f8-a0fb-d0dc67d56c07-000000"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SendRawEmailCommand extends command<SendRawEmailCommandInput, SendRawEmailCommandOutput>(
  _ep0,
  _mw0,
  "SendRawEmail",
  SendRawEmail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendRawEmailRequest;
      output: SendRawEmailResponse;
    };
    sdk: {
      input: SendRawEmailCommandInput;
      output: SendRawEmailCommandOutput;
    };
  };
}
