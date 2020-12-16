import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteForecastRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteForecastCommand,
  serializeAws_json1_1DeleteForecastCommand,
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

export type DeleteForecastCommandInput = DeleteForecastRequest;
export type DeleteForecastCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can
 *       delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
 *       To get the status, use the <a>DescribeForecast</a> operation.</p>
 *          <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you
 *       can no longer query the forecast.</p>
 */
export class DeleteForecastCommand extends $Command<
  DeleteForecastCommandInput,
  DeleteForecastCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteForecastCommandInput) {
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
  ): Handler<DeleteForecastCommandInput, DeleteForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteForecastRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteForecastCommandOutput> {
    return deserializeAws_json1_1DeleteForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
