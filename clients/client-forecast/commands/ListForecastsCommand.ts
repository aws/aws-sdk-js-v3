import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListForecastsRequest, ListForecastsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListForecastsCommand,
  serializeAws_json1_1ListForecastsCommand,
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

export type ListForecastsCommandInput = ListForecastsRequest;
export type ListForecastsCommandOutput = ListForecastsResponse & __MetadataBearer;

/**
 * <p>Returns a list of forecasts created using the <a>CreateForecast</a> operation.
 *       For each forecast, this operation returns a summary of its properties, including its Amazon
 *       Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the
 *         <a>DescribeForecast</a> operation. You can filter the list using an array of
 *         <a>Filter</a> objects.</p>
 */
export class ListForecastsCommand extends $Command<
  ListForecastsCommandInput,
  ListForecastsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListForecastsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListForecastsCommandInput, ListForecastsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListForecastsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListForecastsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListForecastsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListForecastsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListForecastsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListForecastsCommandOutput> {
    return deserializeAws_json1_1ListForecastsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
