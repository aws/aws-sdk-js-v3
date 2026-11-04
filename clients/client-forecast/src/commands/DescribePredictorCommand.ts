// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePredictorRequest, DescribePredictorResponse } from "../models/models_0";
import { DescribePredictor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePredictorCommand}.
 */
export interface DescribePredictorCommandInput extends DescribePredictorRequest {}
/**
 * @public
 *
 * The output of {@link DescribePredictorCommand}.
 */
export interface DescribePredictorCommandOutput extends DescribePredictorResponse, __MetadataBearer {}

/**
 * > **Note:** This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use DescribeAutoPredictor.
 *
 * Describes a predictor created using the CreatePredictor operation.
 *
 * In addition to listing the properties provided in the `CreatePredictor` request, this operation lists the following properties:
 *
 * - `DatasetImportJobArns` - The dataset import jobs used to import training data.
 * - `AutoMLAlgorithmArns` - If AutoML is performed, the algorithms that were evaluated.
 * - `CreationTime`
 * - `LastModificationTime`
 * - `Status`
 * - `Message` - If an error occurred, information about the error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribePredictorRequest
 *   PredictorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribePredictorCommand(input);
 * const response = await client.send(command);
 * // { // DescribePredictorResponse
 * //   PredictorArn: "STRING_VALUE",
 * //   PredictorName: "STRING_VALUE",
 * //   AlgorithmArn: "STRING_VALUE",
 * //   AutoMLAlgorithmArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   ForecastHorizon: Number("int"),
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   PerformAutoML: true || false,
 * //   AutoMLOverrideStrategy: "LatencyOptimized" || "AccuracyOptimized",
 * //   PerformHPO: true || false,
 * //   TrainingParameters: { // TrainingParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   EvaluationParameters: { // EvaluationParameters
 * //     NumberOfBacktestWindows: Number("int"),
 * //     BackTestWindowOffset: Number("int"),
 * //   },
 * //   HPOConfig: { // HyperParameterTuningJobConfig
 * //     ParameterRanges: { // ParameterRanges
 * //       CategoricalParameterRanges: [ // CategoricalParameterRanges
 * //         { // CategoricalParameterRange
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // Values // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ContinuousParameterRanges: [ // ContinuousParameterRanges
 * //         { // ContinuousParameterRange
 * //           Name: "STRING_VALUE", // required
 * //           MaxValue: Number("double"), // required
 * //           MinValue: Number("double"), // required
 * //           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 * //         },
 * //       ],
 * //       IntegerParameterRanges: [ // IntegerParameterRanges
 * //         { // IntegerParameterRange
 * //           Name: "STRING_VALUE", // required
 * //           MaxValue: Number("int"), // required
 * //           MinValue: Number("int"), // required
 * //           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   InputDataConfig: { // InputDataConfig
 * //     DatasetGroupArn: "STRING_VALUE", // required
 * //     SupplementaryFeatures: [ // SupplementaryFeatures
 * //       { // SupplementaryFeature
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   FeaturizationConfig: { // FeaturizationConfig
 * //     ForecastFrequency: "STRING_VALUE", // required
 * //     ForecastDimensions: [ // ForecastDimensions
 * //       "STRING_VALUE",
 * //     ],
 * //     Featurizations: [ // Featurizations
 * //       { // Featurization
 * //         AttributeName: "STRING_VALUE", // required
 * //         FeaturizationPipeline: [ // FeaturizationPipeline
 * //           { // FeaturizationMethod
 * //             FeaturizationMethodName: "filling", // required
 * //             FeaturizationMethodParameters: { // FeaturizationMethodParameters
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   EncryptionConfig: { // EncryptionConfig
 * //     RoleArn: "STRING_VALUE", // required
 * //     KMSKeyArn: "STRING_VALUE", // required
 * //   },
 * //   PredictorExecutionDetails: { // PredictorExecutionDetails
 * //     PredictorExecutions: [ // PredictorExecutions
 * //       { // PredictorExecution
 * //         AlgorithmArn: "STRING_VALUE",
 * //         TestWindows: [ // TestWindowDetails
 * //           { // TestWindowSummary
 * //             TestWindowStart: new Date("TIMESTAMP"),
 * //             TestWindowEnd: new Date("TIMESTAMP"),
 * //             Status: "STRING_VALUE",
 * //             Message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   IsAutoPredictor: true || false,
 * //   DatasetImportJobArns: [
 * //     "STRING_VALUE",
 * //   ],
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   OptimizationMetric: "WAPE" || "RMSE" || "AverageWeightedQuantileLoss" || "MASE" || "MAPE",
 * // };
 *
 * ```
 *
 * @param DescribePredictorCommandInput - {@link DescribePredictorCommandInput}
 * @returns {@link DescribePredictorCommandOutput}
 * @see {@link DescribePredictorCommandInput} for command's `input` shape.
 * @see {@link DescribePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
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
export class DescribePredictorCommand extends command<DescribePredictorCommandInput, DescribePredictorCommandOutput>(
  _ep0,
  _mw0,
  "DescribePredictor",
  DescribePredictor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePredictorRequest;
      output: DescribePredictorResponse;
    };
    sdk: {
      input: DescribePredictorCommandInput;
      output: DescribePredictorCommandOutput;
    };
  };
}
