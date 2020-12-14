import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchPutMessageRequest, BatchPutMessageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchPutMessageCommand,
  serializeAws_restJson1BatchPutMessageCommand,
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

export type BatchPutMessageCommandInput = BatchPutMessageRequest;
export type BatchPutMessageCommandOutput = BatchPutMessageResponse & __MetadataBearer;

/**
 * <p>Sends a set of messages to the AWS IoT Events system. Each message payload is transformed
 *        into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
 *        that input. If multiple messages are sent, the order in which the messages are processed isn't
 *        guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful
 *        response.</p>
 */
export class BatchPutMessageCommand extends $Command<
  BatchPutMessageCommandInput,
  BatchPutMessageCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchPutMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutMessageCommandInput, BatchPutMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchPutMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchPutMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchPutMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchPutMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutMessageCommandOutput> {
    return deserializeAws_restJson1BatchPutMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
