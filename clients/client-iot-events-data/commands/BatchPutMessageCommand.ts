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

export interface BatchPutMessageCommandInput extends BatchPutMessageRequest {}
export interface BatchPutMessageCommandOutput extends BatchPutMessageResponse, __MetadataBearer {}

/**
 * <p>Sends a set of messages to the AWS IoT Events system. Each message payload is transformed
 *        into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
 *        that input. If multiple messages are sent, the order in which the messages are processed isn't
 *        guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful
 *        response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchPutMessageCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchPutMessageCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchPutMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutMessageCommandInput} for command's `input` shape.
 * @see {@link BatchPutMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
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
