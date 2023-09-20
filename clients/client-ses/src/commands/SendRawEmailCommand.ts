// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { SendRawEmailRequest, SendRawEmailResponse } from "../models/models_0";
import { de_SendRawEmailCommand, se_SendRawEmailCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Composes an email message and immediately queues it for sending.</p>
 *          <p>This operation is more flexible than the <code>SendEmail</code> operation. When you
 *             use the <code>SendRawEmail</code> operation, you can specify the headers of the message
 *             as well as its content. This flexibility is useful, for example, when you need to send a
 *             multipart MIME email (such a message that contains both a text and an HTML version). You
 *             can also use this operation to send messages that include attachments.</p>
 *          <p>The <code>SendRawEmail</code> operation has the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from
 *                     an address that isn't verified, the operation results in an "Email address not
 *                     verified" error.</p>
 *             </li>
 *             <li>
 *                <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses
 *                     in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html">Amazon SES mailbox simulator</a>.</p>
 *             </li>
 *             <li>
 *                <p>The maximum message size, including attachments, is 10 MB.</p>
 *             </li>
 *             <li>
 *                <p>Each message has to include at least one recipient address. A recipient
 *                     address includes any address on the To:, CC:, or BCC: lines.</p>
 *             </li>
 *             <li>
 *                <p>If you send a single message to more than one recipient address, and one of
 *                     the recipient addresses isn't in a valid format (that is, it's not in the format
 *                         <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES
 *                     rejects the entire message, even if the other addresses are valid.</p>
 *             </li>
 *             <li>
 *                <p>Each message can include up to 50 recipient addresses across the To:, CC:, or
 *                     BCC: lines. If you need to send a single message to more than 50 recipients, you
 *                     have to split the list of recipient addresses into groups of less than 50
 *                     recipients, and send separate messages to each group.</p>
 *             </li>
 *             <li>
 *                <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message
 *                     parts. However, if Amazon SES has to modify the contents of your message (for
 *                     example, if you use open and click tracking), 8-bit content isn't preserved. For
 *                     this reason, we highly recommend that you encode all content that isn't 7-bit
 *                     ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>Additionally, keep the following considerations in mind when using the
 *                 <code>SendRawEmail</code> operation:</p>
 *          <ul>
 *             <li>
 *                <p>Although you can customize the message headers when using the
 *                         <code>SendRawEmail</code> operation, Amazon SES automatically applies its own
 *                         <code>Message-ID</code> and <code>Date</code> headers; if you passed these
 *                     headers when creating the message, they are overwritten by the values that Amazon SES
 *                     provides.</p>
 *             </li>
 *             <li>
 *                <p>If you are using sending authorization to send on behalf of another user,
 *                         <code>SendRawEmail</code> enables you to specify the cross-account identity
 *                     for the email's Source, From, and Return-Path parameters in one of two ways: you
 *                     can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>,
 *                     and/or <code>ReturnPathArn</code>, or you can include the following X-headers in
 *                     the header of your raw email:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>X-SES-SOURCE-ARN</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>X-SES-FROM-ARN</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>X-SES-RETURN-PATH-ARN</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <important>
 *                   <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these
 *                         before it sends the email.</p>
 *                </important>
 *                <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets
 *                     the From and Return-Path addresses to the same identity that you
 *                     specified.</p>
 *                <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html">Using
 *                         Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer
 *                         Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>For every message that you send, the total number of recipients (including
 *                     each recipient in the To:, CC: and BCC: fields) is counted against the maximum
 *                     number of emails you can send in a 24-hour period (your <i>sending
 *                         quota</i>). For more information about sending quotas in Amazon SES, see
 *                         <a href="https://docs.aws.amazon.com/ses/latest/dg/manage-sending-quotas.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer
 *                         Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendRawEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SendRawEmailRequest
 *   Source: "STRING_VALUE",
 *   Destinations: [ // AddressList
 *     "STRING_VALUE",
 *   ],
 *   RawMessage: { // RawMessage
 *     Data: "BLOB_VALUE", // required
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
 *  <p>Indicates that email sending is disabled for your entire Amazon SES account.</p>
 *          <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link ConfigurationSetSendingPausedException} (client fault)
 *  <p>Indicates that email sending is disabled for the configuration set.</p>
 *          <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p> Indicates that the message could not be sent because Amazon SES could not read the MX
 *             record required to use the specified MAIL FROM domain. For information about editing the
 *             custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>Indicates that the action failed, and the message could not be sent. Check the error
 *             stack for more information about what caused the error.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example SendRawEmail
 * ```javascript
 * // The following example sends an email with an attachment:
 * const input = {
 *   "Destinations": [],
 *   "FromArn": "",
 *   "RawMessage": {
 *     "Data": "From: sender@example.com\\nTo: recipient@example.com\\nSubject: Test email (contains an attachment)\\nMIME-Version: 1.0\\nContent-type: Multipart/Mixed; boundary=\"NextPart\"\\n\\n--NextPart\\nContent-Type: text/plain\\n\\nThis is the message body.\\n\\n--NextPart\\nContent-Type: text/plain;\\nContent-Disposition: attachment; filename=\"attachment.txt\"\\n\\nThis is the text in the attachment.\\n\\n--NextPart--"
 *   },
 *   "ReturnPathArn": "",
 *   "Source": "",
 *   "SourceArn": ""
 * };
 * const command = new SendRawEmailCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MessageId": "EXAMPLEf3f73d99b-c63fb06f-d263-41f8-a0fb-d0dc67d56c07-000000"
 * }
 * *\/
 * // example id: sendrawemail-1469118548649
 * ```
 *
 */
export class SendRawEmailCommand extends $Command<
  SendRawEmailCommandInput,
  SendRawEmailCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: SendRawEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendRawEmailCommandInput, SendRawEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendRawEmailCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendRawEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "SendRawEmail",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SendRawEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendRawEmailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendRawEmailCommandOutput> {
    return de_SendRawEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
