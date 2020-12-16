import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { SendEmailRequest, SendEmailResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SendEmailCommand,
  serializeAws_restJson1SendEmailCommand,
} from "../protocols/Aws_restJson1";
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

export type SendEmailCommandInput = SendEmailRequest;
export type SendEmailCommandOutput = SendEmailResponse & __MetadataBearer;

/**
 * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of
 *             messages:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Simple</b> – A standard email message. When
 *                     you create this type of message, you specify the sender, the recipient, and the
 *                     message body, and Amazon Pinpoint assembles the message for you.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Raw</b> –  A raw, MIME-formatted email
 *                     message. When you send this type of email, you have to specify all of the
 *                     message headers, as well as the message body. You can use this message type to
 *                     send messages that contain attachments. The message that you specify has to be a
 *                     valid MIME message.</p>
 *             </li>
 *          </ul>
 */
export class SendEmailCommand extends $Command<
  SendEmailCommandInput,
  SendEmailCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendEmailCommandInput, SendEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "SendEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendEmailCommandOutput> {
    return deserializeAws_restJson1SendEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
