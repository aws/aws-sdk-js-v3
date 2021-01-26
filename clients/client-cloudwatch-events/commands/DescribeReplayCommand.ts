import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribeReplayRequest, DescribeReplayResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplayCommand,
  serializeAws_json1_1DescribeReplayCommand,
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

export type DescribeReplayCommandInput = DescribeReplayRequest;
export type DescribeReplayCommandOutput = DescribeReplayResponse & __MetadataBearer;

/**
 * <p>Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the
 *             progress of a running replay. A replay processes events to replay based on
 *             the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an
 *             <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute
 *             time range, the events are replayed from the first minute of that 20 minute range first.
 *             Then the events from the second minute are replayed. You can use
 *             <code>DescribeReplay</code> to determine the progress of a replay. The value
 *             returned for <code>EventLastReplayedTime</code> indicates the time within the specified
 *             time range associated with the last event replayed.</p>
 */
export class DescribeReplayCommand extends $Command<
  DescribeReplayCommandInput,
  DescribeReplayCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReplayCommandInput, DescribeReplayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DescribeReplayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReplayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReplayCommandOutput> {
    return deserializeAws_json1_1DescribeReplayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
