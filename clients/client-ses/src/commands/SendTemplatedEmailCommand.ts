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

import { SendTemplatedEmailRequest, SendTemplatedEmailResponse } from "../models/models_0";
import { de_SendTemplatedEmailCommand, se_SendTemplatedEmailCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendTemplatedEmailCommand}.
 */
export interface SendTemplatedEmailCommandInput extends SendTemplatedEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendTemplatedEmailCommand}.
 */
export interface SendTemplatedEmailCommandOutput extends SendTemplatedEmailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Composes an email message using an email template and immediately queues it for
 *             sending.</p>
 *          <p>To send email using this operation, your call must meet the following
 *             requirements:</p>
 *          <ul>
 *             <li>
 *                <p>The call must refer to an existing email template. You can create email
 *                     templates using the <a>CreateTemplate</a> operation.</p>
 *             </li>
 *             <li>
 *                <p>The message must be sent from a verified email address or domain.</p>
 *             </li>
 *             <li>
 *                <p>If your account is still in the Amazon SES sandbox, you may only send to verified
 *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html">Verifying Email
 *                         Addresses and Domains</a> in the <i>Amazon SES Developer
 *                         Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>The maximum message size is 10 MB.</p>
 *             </li>
 *             <li>
 *                <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one
 *                         <code>Destination</code> parameter. A destination is a set of recipients
 *                     that receives the same version of the email. The <code>Destination</code>
 *                     parameter can include up to 50 recipients, across the To:, CC: and BCC:
 *                     fields.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Destination</code> parameter must include at least one recipient
 *                     email address. The recipient address can be a To: address, a CC: address, or a
 *                     BCC: address. If a recipient email address is invalid (that is, it is not in the
 *                     format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the
 *                     entire message is rejected, even if the message contains other recipients that
 *                     are valid.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the
 *                 required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES
 *                 can't render the email because the template contains errors, it doesn't send the
 *                 email. Additionally, because it already accepted the message, Amazon SES doesn't return a
 *                 message stating that it was unable to send the email.</p>
 *             <p>For these reasons, we highly recommend that you set up Amazon SES to send you
 *                 notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the
 *                     <i>Amazon Simple Email Service Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SendTemplatedEmailRequest
 *   Source: "STRING_VALUE", // required
 *   Destination: { // Destination
 *     ToAddresses: [ // AddressList
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
 *   ReturnPath: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   ReturnPathArn: "STRING_VALUE",
 *   Tags: [ // MessageTagList
 *     { // MessageTag
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ConfigurationSetName: "STRING_VALUE",
 *   Template: "STRING_VALUE", // required
 *   TemplateArn: "STRING_VALUE",
 *   TemplateData: "STRING_VALUE", // required
 * };
 * const command = new SendTemplatedEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendTemplatedEmailResponse
 * //   MessageId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendTemplatedEmailCommandInput - {@link SendTemplatedEmailCommandInput}
 * @returns {@link SendTemplatedEmailCommandOutput}
 * @see {@link SendTemplatedEmailCommandInput} for command's `input` shape.
 * @see {@link SendTemplatedEmailCommandOutput} for command's `response` shape.
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
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *  <p>Indicates that the Template object you specified does not exist in your Amazon SES
 *             account.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class SendTemplatedEmailCommand extends $Command<
  SendTemplatedEmailCommandInput,
  SendTemplatedEmailCommandOutput,
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
  constructor(readonly input: SendTemplatedEmailCommandInput) {
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
  ): Handler<SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendTemplatedEmailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendTemplatedEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "SendTemplatedEmail",
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
  private serialize(input: SendTemplatedEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendTemplatedEmailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTemplatedEmailCommandOutput> {
    return de_SendTemplatedEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
