import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { PurgeQueueRequest } from "../models/models_0";
import { deserializeAws_queryPurgeQueueCommand, serializeAws_queryPurgeQueueCommand } from "../protocols/Aws_query";
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

export type PurgeQueueCommandInput = PurgeQueueRequest;
export type PurgeQueueCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the messages in a queue specified by the <code>QueueURL</code>
 *             parameter.</p>
 *
 *          <important>
 *             <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages
 *                 deleted from a queue.</p>
 *             <p>The message deletion process takes up to 60 seconds. We recommend waiting for
 *                 60 seconds regardless of your queue's size. </p>
 *          </important>
 *         <p>Messages sent to the queue <i>before</i> you call
 *                 <code>PurgeQueue</code> might be received but are deleted within the next
 *             minute.</p>
 *         <p>Messages sent to the queue <i>after</i> you call
 *                 <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
 */
export class PurgeQueueCommand extends $Command<
  PurgeQueueCommandInput,
  PurgeQueueCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurgeQueueCommandInput) {
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
  ): Handler<PurgeQueueCommandInput, PurgeQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "PurgeQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurgeQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurgeQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPurgeQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PurgeQueueCommandOutput> {
    return deserializeAws_queryPurgeQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
