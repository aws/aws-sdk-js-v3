import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteForecastExportJobRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteForecastExportJobCommand,
  serializeAws_json1_1DeleteForecastExportJobCommand,
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

export type DeleteForecastExportJobCommandInput = DeleteForecastExportJobRequest;
export type DeleteForecastExportJobCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a forecast export job created using the <a>CreateForecastExportJob</a>
 *       operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or
 *         <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
 */
export class DeleteForecastExportJobCommand extends $Command<
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteForecastExportJobCommandInput) {
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
  ): Handler<DeleteForecastExportJobCommandInput, DeleteForecastExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DeleteForecastExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteForecastExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteForecastExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteForecastExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteForecastExportJobCommandOutput> {
    return deserializeAws_json1_1DeleteForecastExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
