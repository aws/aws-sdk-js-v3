import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/models_1";
import {
  deserializeAws_queryStartActivityStreamCommand,
  serializeAws_queryStartActivityStreamCommand,
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

export type StartActivityStreamCommandInput = StartActivityStreamRequest;
export type StartActivityStreamCommandOutput = StartActivityStreamResponse & __MetadataBearer;

/**
 * <p>Starts a database activity stream to monitor activity on the database.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>.</p>
 */
export class StartActivityStreamCommand extends $Command<
  StartActivityStreamCommandInput,
  StartActivityStreamCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartActivityStreamCommandInput) {
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
  ): Handler<StartActivityStreamCommandInput, StartActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartActivityStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartActivityStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartActivityStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartActivityStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartActivityStreamCommandOutput> {
    return deserializeAws_queryStartActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
