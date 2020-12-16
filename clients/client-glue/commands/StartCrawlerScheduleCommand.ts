import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartCrawlerScheduleRequest, StartCrawlerScheduleResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StartCrawlerScheduleCommand,
  serializeAws_json1_1StartCrawlerScheduleCommand,
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

export type StartCrawlerScheduleCommandInput = StartCrawlerScheduleRequest;
export type StartCrawlerScheduleCommandOutput = StartCrawlerScheduleResponse & __MetadataBearer;

/**
 * <p>Changes the schedule state of the specified crawler to
 *       <code>SCHEDULED</code>, unless the crawler is already running or the
 *       schedule state is already <code>SCHEDULED</code>.</p>
 */
export class StartCrawlerScheduleCommand extends $Command<
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartCrawlerScheduleCommandInput) {
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
  ): Handler<StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartCrawlerScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartCrawlerScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartCrawlerScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartCrawlerScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartCrawlerScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartCrawlerScheduleCommandOutput> {
    return deserializeAws_json1_1StartCrawlerScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
