import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { SendMessageRequest, SendMessageResult } from "../models/models_0";
import { deserializeAws_querySendMessageCommand, serializeAws_querySendMessageCommand } from "../protocols/Aws_query";
import { getSendMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
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

export type SendMessageCommandInput = SendMessageRequest;
export type SendMessageCommandOutput = SendMessageResult & __MetadataBearer;

/**
 * <p>Delivers a message to the specified queue.</p>
 *          <important>
 *            <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
 *            <p>
 *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
 *             </p>
 * 	           <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
 *          </important>
 */
export class SendMessageCommand extends $Command<
  SendMessageCommandInput,
  SendMessageCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendMessageCommandInput, SendMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSendMessagePlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "SendMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendMessageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendMessageCommandOutput> {
    return deserializeAws_querySendMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
