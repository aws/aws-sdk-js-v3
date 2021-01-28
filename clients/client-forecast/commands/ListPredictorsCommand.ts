import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListPredictorsRequest, ListPredictorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListPredictorsCommand,
  serializeAws_json1_1ListPredictorsCommand,
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

export type ListPredictorsCommandInput = ListPredictorsRequest;
export type ListPredictorsCommandOutput = ListPredictorsResponse & __MetadataBearer;

/**
 * <p>Returns a list of predictors created using the <a>CreatePredictor</a>
 *       operation. For each predictor, this operation returns a summary of its properties, including
 *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       ARN with the <a>DescribePredictor</a> operation. You can filter the list using an
 *       array of <a>Filter</a> objects.</p>
 */
export class ListPredictorsCommand extends $Command<
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPredictorsCommandInput) {
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
  ): Handler<ListPredictorsCommandInput, ListPredictorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListPredictorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPredictorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPredictorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPredictorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPredictorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPredictorsCommandOutput> {
    return deserializeAws_json1_1ListPredictorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
