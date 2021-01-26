import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { DeleteMessageRequest } from "../models/models_0";
import {
  deserializeAws_queryDeleteMessageCommand,
  serializeAws_queryDeleteMessageCommand,
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

export type DeleteMessageCommandInput = DeleteMessageRequest;
export type DeleteMessageCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified message from the specified queue. To select the message to
 *             delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the
 *                 <code>MessageId</code> which you receive when you send the message). Amazon SQS can
 *             delete a message from a queue even if a visibility timeout setting causes the message to
 *             be locked by another consumer. Amazon SQS automatically deletes messages left in a queue
 *             longer than the retention period configured for the queue. </p>
 *          <note>
 *             <p>The <code>ReceiptHandle</code> is associated with a <i>specific
 *                     instance</i> of receiving a message. If you receive a message more than
 *                 once, the <code>ReceiptHandle</code> is different each time you receive a message.
 *                 When you use the <code>DeleteMessage</code> action, you must provide the most
 *                 recently received <code>ReceiptHandle</code> for the message (otherwise, the request
 *                 succeeds, but the message might not be deleted).</p>
 *             <p>For standard queues, it is possible to receive a message even after you
 *                 delete it. This might happen on rare occasions if one of the servers which stores a
 *                 copy of the message is unavailable when you send the request to delete the message.
 *                 The copy remains on the server and might be returned to you during a subsequent
 *                 receive request. You should ensure that your application is idempotent, so that
 *                 receiving a message more than once does not cause issues.</p>
 *          </note>
 */
export class DeleteMessageCommand extends $Command<
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMessageCommandInput) {
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
  ): Handler<DeleteMessageCommandInput, DeleteMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "DeleteMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMessageCommandOutput> {
    return deserializeAws_queryDeleteMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
