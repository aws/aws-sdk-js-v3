import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlerMetricsRequest, GetCrawlerMetricsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCrawlerMetricsCommand,
  serializeAws_json1_1GetCrawlerMetricsCommand,
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

export type GetCrawlerMetricsCommandInput = GetCrawlerMetricsRequest;
export type GetCrawlerMetricsCommandOutput = GetCrawlerMetricsResponse & __MetadataBearer;

/**
 * <p>Retrieves metrics about specified crawlers.</p>
 */
export class GetCrawlerMetricsCommand extends $Command<
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCrawlerMetricsCommandInput) {
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
  ): Handler<GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetCrawlerMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCrawlerMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCrawlerMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCrawlerMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCrawlerMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCrawlerMetricsCommandOutput> {
    return deserializeAws_json1_1GetCrawlerMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
