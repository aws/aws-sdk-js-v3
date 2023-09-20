// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreatePredictorRequest,
  CreatePredictorRequestFilterSensitiveLog,
  CreatePredictorResponse,
} from "../models/models_0";
import { de_CreatePredictorCommand, se_CreatePredictorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePredictorCommand}.
 */
export interface CreatePredictorCommandInput extends CreatePredictorRequest {}
/**
 * @public
 *
 * The output of {@link CreatePredictorCommand}.
 */
export interface CreatePredictorCommandOutput extends CreatePredictorResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreatePredictorRequest
 *   PredictorName: "STRING_VALUE", // required
 *   AlgorithmArn: "STRING_VALUE",
 *   ForecastHorizon: Number("int"), // required
 *   ForecastTypes: [ // ForecastTypes
 *     "STRING_VALUE",
 *   ],
 *   PerformAutoML: true || false,
 *   AutoMLOverrideStrategy: "LatencyOptimized" || "AccuracyOptimized",
 *   PerformHPO: true || false,
 *   TrainingParameters: { // TrainingParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   EvaluationParameters: { // EvaluationParameters
 *     NumberOfBacktestWindows: Number("int"),
 *     BackTestWindowOffset: Number("int"),
 *   },
 *   HPOConfig: { // HyperParameterTuningJobConfig
 *     ParameterRanges: { // ParameterRanges
 *       CategoricalParameterRanges: [ // CategoricalParameterRanges
 *         { // CategoricalParameterRange
 *           Name: "STRING_VALUE", // required
 *           Values: [ // Values // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ContinuousParameterRanges: [ // ContinuousParameterRanges
 *         { // ContinuousParameterRange
 *           Name: "STRING_VALUE", // required
 *           MaxValue: Number("double"), // required
 *           MinValue: Number("double"), // required
 *           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *         },
 *       ],
 *       IntegerParameterRanges: [ // IntegerParameterRanges
 *         { // IntegerParameterRange
 *           Name: "STRING_VALUE", // required
 *           MaxValue: Number("int"), // required
 *           MinValue: Number("int"), // required
 *           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *         },
 *       ],
 *     },
 *   },
 *   InputDataConfig: { // InputDataConfig
 *     DatasetGroupArn: "STRING_VALUE", // required
 *     SupplementaryFeatures: [ // SupplementaryFeatures
 *       { // SupplementaryFeature
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   FeaturizationConfig: { // FeaturizationConfig
 *     ForecastFrequency: "STRING_VALUE", // required
 *     ForecastDimensions: [ // ForecastDimensions
 *       "STRING_VALUE",
 *     ],
 *     Featurizations: [ // Featurizations
 *       { // Featurization
 *         AttributeName: "STRING_VALUE", // required
 *         FeaturizationPipeline: [ // FeaturizationPipeline
 *           { // FeaturizationMethod
 *             FeaturizationMethodName: "filling", // required
 *             FeaturizationMethodParameters: { // FeaturizationMethodParameters
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   EncryptionConfig: { // EncryptionConfig
 *     RoleArn: "STRING_VALUE", // required
 *     KMSKeyArn: "STRING_VALUE", // required
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   OptimizationMetric: "WAPE" || "RMSE" || "AverageWeightedQuantileLoss" || "MASE" || "MAPE",
 * };
 * const command = new CreatePredictorCommand(input);
 * const response = await client.send(command);
 * // { // CreatePredictorResponse
 * //   PredictorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePredictorCommandInput - {@link CreatePredictorCommandInput}
 * @returns {@link CreatePredictorCommandOutput}
 * @see {@link CreatePredictorCommandInput} for command's `input` shape.
 * @see {@link CreatePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
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

  /**
   * @public
   */
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
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "CreatePredictor",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreatePredictorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePredictorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePredictorCommandOutput> {
    return de_CreatePredictorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
