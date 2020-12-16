import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostForecastRequest, GetCostForecastResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCostForecastCommand,
  serializeAws_json1_1GetCostForecastCommand,
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

export type GetCostForecastCommandInput = GetCostForecastRequest;
export type GetCostForecastCommandOutput = GetCostForecastResponse & __MetadataBearer;

/**
 * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
 */
export class GetCostForecastCommand extends $Command<
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCostForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCostForecastCommandInput, GetCostForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetCostForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCostForecastRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCostForecastResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCostForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostForecastCommandOutput> {
    return deserializeAws_json1_1GetCostForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
