// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePredictorRequest, CreatePredictorResponse } from "../models/models_0";
import { CreatePredictor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor.
 *
 * Creates an Amazon Forecast predictor.
 *
 * In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.
 *
 * Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the CreateForecast operation.
 *
 * To see the evaluation metrics, use the GetAccuracyMetrics operation.
 *
 * You can specify a featurization configuration to fill and aggregate the data fields in the `TARGET_TIME_SERIES` dataset to improve model training. For more information, see FeaturizationConfig.
 *
 * For RELATED_TIME_SERIES datasets, `CreatePredictor` verifies that the `DataFrequency` specified when the dataset was created matches the `ForecastFrequency`. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see howitworks-datasets-groups.
 *
 * By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the `ForecastTypes`.
 *
 * **AutoML**
 *
 * If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the `objective function`, set `PerformAutoML` to `true`. The `objective function` is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see EvaluationResult.
 *
 * When AutoML is enabled, the following properties are disallowed:
 *
 * - `AlgorithmArn`
 * - `HPOConfig`
 * - `PerformHPO`
 * - `TrainingParameters`
 *
 * To get a list of all of your predictors, use the ListPredictors operation.
 *
 * > **Note:** Before you can use the predictor to create a forecast, the `Status` of the predictor must be `ACTIVE`, signifying that training has completed. To get the status, use the DescribePredictor operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreatePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreatePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * There is already a resource with this name. Try again with a different name.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class CreatePredictorCommand extends command<CreatePredictorCommandInput, CreatePredictorCommandOutput>(
  _ep0,
  _mw0,
  "CreatePredictor",
  CreatePredictor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePredictorRequest;
      output: CreatePredictorResponse;
    };
    sdk: {
      input: CreatePredictorCommandInput;
      output: CreatePredictorCommandOutput;
    };
  };
}
