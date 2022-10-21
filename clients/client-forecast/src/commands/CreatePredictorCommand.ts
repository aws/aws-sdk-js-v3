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
  CreatePredictorRequest,
  CreatePredictorRequestFilterSensitiveLog,
  CreatePredictorResponse,
  CreatePredictorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreatePredictorCommand,
  serializeAws_json1_1CreatePredictorCommand,
} from "../protocols/Aws_json1_1";

export interface CreatePredictorCommandInput extends CreatePredictorRequest {}
export interface CreatePredictorCommandOutput extends CreatePredictorResponse, __MetadataBearer {}

/**
 * <note>
 *             <p> This operation creates a legacy predictor that does not include all the predictor
 *         functionalities provided by Amazon Forecast. To create a predictor that is compatible with all
 *         aspects of Forecast, use <a>CreateAutoPredictor</a>.</p>
 *          </note>
 *          <p>Creates an Amazon Forecast predictor.</p>
 *          <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast
 *       choose an algorithm for you using AutoML. If you specify an algorithm, you also can override
 *       algorithm-specific hyperparameters.</p>
 *          <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets
 *       in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p>
 *          <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p>
 *          <p>You can specify a featurization configuration to fill and aggregate the data fields in the
 *         <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see
 *         <a>FeaturizationConfig</a>.</p>
 *          <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the
 *         <code>DataFrequency</code> specified when the dataset was created matches the
 *         <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction.
 *       Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p>
 *          <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9
 *       (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by
 *       setting the <code>ForecastTypes</code>. </p>
 *          <p>
 *             <b>AutoML</b>
 *          </p>
 *          <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the
 *         <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The
 *         <code>objective function</code> is defined as the mean of the weighted losses over the
 *       forecast types. By default, these are the p10, p50, and p90 quantile losses. For more
 *       information, see <a>EvaluationResult</a>.</p>
 *          <p>When AutoML is enabled, the following properties are disallowed:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AlgorithmArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HPOConfig</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PerformHPO</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TrainingParameters</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>To get a list of all of your predictors, use the <a>ListPredictors</a>
 *       operation.</p>
 *          <note>
 *             <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the
 *         predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the
 *         status, use the <a>DescribePredictor</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreatePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreatePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreatePredictorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePredictorCommandInput} for command's `input` shape.
 * @see {@link CreatePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreatePredictorCommand extends $Command<
  CreatePredictorCommandInput,
  CreatePredictorCommandOutput,
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

  constructor(readonly input: CreatePredictorCommandInput) {
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
  ): Handler<CreatePredictorCommandInput, CreatePredictorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePredictorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreatePredictorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePredictorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePredictorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePredictorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePredictorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePredictorCommandOutput> {
    return deserializeAws_json1_1CreatePredictorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
