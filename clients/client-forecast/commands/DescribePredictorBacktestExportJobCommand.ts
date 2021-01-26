import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  DescribePredictorBacktestExportJobRequest,
  DescribePredictorBacktestExportJobResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePredictorBacktestExportJobCommand,
  serializeAws_json1_1DescribePredictorBacktestExportJobCommand,
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

export type DescribePredictorBacktestExportJobCommandInput = DescribePredictorBacktestExportJobRequest;
export type DescribePredictorBacktestExportJobCommandOutput = DescribePredictorBacktestExportJobResponse &
  __MetadataBearer;

/**
 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
 *         <p>In addition to listing the properties provided by the user in the
 *             <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
 *             following properties:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>CreationTime</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>LastModificationTime</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>Status</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Message</code> (if an error occurred)</p>
 *             </li>
 *          </ul>
 */
export class DescribePredictorBacktestExportJobCommand extends $Command<
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePredictorBacktestExportJobCommandInput) {
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
  ): Handler<DescribePredictorBacktestExportJobCommandInput, DescribePredictorBacktestExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribePredictorBacktestExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePredictorBacktestExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePredictorBacktestExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePredictorBacktestExportJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePredictorBacktestExportJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePredictorBacktestExportJobCommandOutput> {
    return deserializeAws_json1_1DescribePredictorBacktestExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
