import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerScheduleRequest, StopCrawlerScheduleResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StopCrawlerScheduleCommand,
  serializeAws_json1_1StopCrawlerScheduleCommand,
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

export type StopCrawlerScheduleCommandInput = StopCrawlerScheduleRequest;
export type StopCrawlerScheduleCommandOutput = StopCrawlerScheduleResponse & __MetadataBearer;

/**
 * <p>Sets the schedule state of the specified crawler to
 *       <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is
 *       already running.</p>
 */
export class StopCrawlerScheduleCommand extends $Command<
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopCrawlerScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopCrawlerScheduleCommandInput, StopCrawlerScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StopCrawlerScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopCrawlerScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopCrawlerScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopCrawlerScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopCrawlerScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopCrawlerScheduleCommandOutput> {
    return deserializeAws_json1_1StopCrawlerScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
