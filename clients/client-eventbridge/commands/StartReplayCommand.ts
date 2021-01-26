import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { StartReplayRequest, StartReplayResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartReplayCommand,
  serializeAws_json1_1StartReplayCommand,
} from "../protocols/Aws_json1_1";
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

export type StartReplayCommandInput = StartReplayRequest;
export type StartReplayCommandOutput = StartReplayResponse & __MetadataBearer;

/**
 * <p>Starts the specified replay. Events are not necessarily replayed in the exact same
 *             order that they were added to the archive. A replay processes events to replay based on
 *             the time in the event, and replays them using 1 minute intervals. If you specify an
 *                 <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute
 *             time range, the events are replayed from the first minute of that 20 minute range first.
 *             Then the events from the second minute are replayed. You can use
 *                 <code>DescribeReplay</code> to determine the progress of a replay. The value
 *             returned for <code>EventLastReplayedTime</code> indicates the time within the specified
 *             time range associated with the last event replayed.</p>
 */
export class StartReplayCommand extends $Command<
  StartReplayCommandInput,
  StartReplayCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartReplayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartReplayCommandInput, StartReplayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "StartReplayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartReplayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartReplayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartReplayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartReplayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReplayCommandOutput> {
    return deserializeAws_json1_1StartReplayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
