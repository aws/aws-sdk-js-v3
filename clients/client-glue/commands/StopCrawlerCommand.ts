import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerRequest, StopCrawlerResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StopCrawlerCommand,
  serializeAws_json1_1StopCrawlerCommand,
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

export type StopCrawlerCommandInput = StopCrawlerRequest;
export type StopCrawlerCommandOutput = StopCrawlerResponse & __MetadataBearer;

/**
 * <p>If the specified crawler is running, stops the crawl.</p>
 */
export class StopCrawlerCommand extends $Command<
  StopCrawlerCommandInput,
  StopCrawlerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopCrawlerCommandInput) {
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
  ): Handler<StopCrawlerCommandInput, StopCrawlerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StopCrawlerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopCrawlerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopCrawlerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopCrawlerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopCrawlerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopCrawlerCommandOutput> {
    return deserializeAws_json1_1StopCrawlerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
