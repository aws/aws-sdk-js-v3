// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  DescribePredictorBacktestExportJobRequest,
  DescribePredictorBacktestExportJobRequestFilterSensitiveLog,
  DescribePredictorBacktestExportJobResponse,
  DescribePredictorBacktestExportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePredictorBacktestExportJobCommand,
  serializeAws_json1_1DescribePredictorBacktestExportJobCommand,
} from "../protocols/Aws_json1_1";

export interface DescribePredictorBacktestExportJobCommandInput extends DescribePredictorBacktestExportJobRequest {}
export interface DescribePredictorBacktestExportJobCommandOutput
  extends DescribePredictorBacktestExportJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
 *         <p>In addition to listing the properties provided by the user in the
 *                 <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorBacktestExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorBacktestExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribePredictorBacktestExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePredictorBacktestExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorBacktestExportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DescribePredictorBacktestExportJobCommand extends $Command<
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePredictorBacktestExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribePredictorBacktestExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePredictorBacktestExportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePredictorBacktestExportJobResponseFilterSensitiveLog,
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
