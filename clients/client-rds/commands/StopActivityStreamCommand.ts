import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/models_1";
import {
  deserializeAws_queryStopActivityStreamCommand,
  serializeAws_queryStopActivityStreamCommand,
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

export type StopActivityStreamCommandInput = StopActivityStreamRequest;
export type StopActivityStreamCommandOutput = StopActivityStreamResponse & __MetadataBearer;

/**
 * <p>Stops a database activity stream that was started using the AWS console,
 *             the <code>start-activity-stream</code> AWS CLI command, or the <code>StartActivityStream</code> action.</p>
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>.</p>
 */
export class StopActivityStreamCommand extends $Command<
  StopActivityStreamCommandInput,
  StopActivityStreamCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopActivityStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopActivityStreamCommandInput, StopActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopActivityStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopActivityStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopActivityStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopActivityStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopActivityStreamCommandOutput> {
    return deserializeAws_queryStopActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
