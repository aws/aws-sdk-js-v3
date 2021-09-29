import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendTemplatedEmailRequest, SendTemplatedEmailResponse } from "../models/models_0";
import {
  deserializeAws_querySendTemplatedEmailCommand,
  serializeAws_querySendTemplatedEmailCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface SendTemplatedEmailCommandInput extends SendTemplatedEmailRequest {}
export interface SendTemplatedEmailCommandOutput extends SendTemplatedEmailResponse, __MetadataBearer {}

/**
 * <p>Composes an email message using an email template and immediately queues it for
 *             sending.</p>
 *         <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call
 *             to the API must meet the following requirements:</p>
 *         <ul>
 *             <li>
 *                 <p>The call must refer to an existing email template. You can create email
 *                     templates using the <a>CreateTemplate</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>The message must be sent from a verified email address or domain.</p>
 *             </li>
 *             <li>
 *                 <p>If your account is still in the Amazon SES sandbox, you may only send to verified
 *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying
 *                         Email Addresses and Domains</a> in the <i>Amazon SES Developer
 *                         Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>The maximum message size is 10 MB.</p>
 *             </li>
 *             <li>
 *                 <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one
 *                         <code>Destination</code> parameter. A destination is a set of recipients who
 *                     will receive the same version of the email. The <code>Destination</code>
 *                     parameter can include up to 50 recipients, across the To:, CC: and BCC:
 *                     fields.</p>
 *             </li>
 *             <li>
 *                 <p>The <code>Destination</code> parameter must include at least one recipient
 *                     email address. The recipient address can be a To: address, a CC: address, or a
 *                     BCC: address. If a recipient email address is invalid (that is, it is not in the
 *                     format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the
 *                     entire message will be rejected, even if the message contains other recipients
 *                     that are valid.</p>
 *             </li>
 *          </ul>
 *         <important>
 *             <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the
 *                 required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES
 *                 can't render the email because the template contains errors, it doesn't send the
 *                 email. Additionally, because it already accepted the message, Amazon SES doesn't return a
 *                 message stating that it was unable to send the email.</p>
 *             <p>For these reasons, we highly recommend that you set up Amazon SES to send you
 *                 notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending
 *                     Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service
 *                     Developer Guide</i>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SendTemplatedEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTemplatedEmailCommandInput} for command's `input` shape.
 * @see {@link SendTemplatedEmailCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendTemplatedEmailCommand extends $Command<
  SendTemplatedEmailCommandInput,
  SendTemplatedEmailCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendTemplatedEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendTemplatedEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendTemplatedEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendTemplatedEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendTemplatedEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTemplatedEmailCommandOutput> {
    return deserializeAws_querySendTemplatedEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
