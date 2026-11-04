// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/models_0";
import { GetAccuracyMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccuracyMetricsCommand}.
 */
export interface GetAccuracyMetricsCommandInput extends GetAccuracyMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccuracyMetricsCommand}.
 */
export interface GetAccuracyMetricsCommandOutput extends GetAccuracyMetricsResponse, __MetadataBearer {}

/**
 * Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see [Predictor Metrics](https://docs.aws.amazon.com/forecast/latest/dg/metrics.html).
 *
 * This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (`NumberOfBacktestWindows`) is specified using the EvaluationParameters object, which is optionally included in the `CreatePredictor` request. If `NumberOfBacktestWindows` isn't specified, the number defaults to one.
 *
 * The parameters of the `filling` method determine which items contribute to the metrics. If you want all items to contribute, specify `zero`. If you want only those items that have complete data in the range being evaluated to contribute, specify `nan`. For more information, see FeaturizationMethod.
 *
 * > **Note:** Before you can get accuracy metrics, the `Status` of the predictor must be `ACTIVE`, signifying that training has completed. To get the status, use the DescribePredictor operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, GetAccuracyMetricsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, GetAccuracyMetricsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // GetAccuracyMetricsRequest
 *   PredictorArn: "STRING_VALUE", // required
 * };
 * const command = new GetAccuracyMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccuracyMetricsResponse
 * //   PredictorEvaluationResults: [ // PredictorEvaluationResults
 * //     { // EvaluationResult
 * //       AlgorithmArn: "STRING_VALUE",
 * //       TestWindows: [ // TestWindows
 * //         { // WindowSummary
 * //           TestWindowStart: new Date("TIMESTAMP"),
 * //           TestWindowEnd: new Date("TIMESTAMP"),
 * //           ItemCount: Number("int"),
 * //           EvaluationType: "SUMMARY" || "COMPUTED",
 * //           Metrics: { // Metrics
 * //             RMSE: Number("double"),
 * //             WeightedQuantileLosses: [ // WeightedQuantileLosses
 * //               { // WeightedQuantileLoss
 * //                 Quantile: Number("double"),
 * //                 LossValue: Number("double"),
 * //               },
 * //             ],
 * //             ErrorMetrics: [ // ErrorMetrics
 * //               { // ErrorMetric
 * //                 ForecastType: "STRING_VALUE",
 * //                 WAPE: Number("double"),
 * //                 RMSE: Number("double"),
 * //                 MASE: Number("double"),
 * //                 MAPE: Number("double"),
 * //               },
 * //             ],
 * //             AverageWeightedQuantileLoss: Number("double"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsAutoPredictor: true || false,
 * //   AutoMLOverrideStrategy: "LatencyOptimized" || "AccuracyOptimized",
 * //   OptimizationMetric: "WAPE" || "RMSE" || "AverageWeightedQuantileLoss" || "MASE" || "MAPE",
 * // };
 *
 * ```
 *
 * @param GetAccuracyMetricsCommandInput - {@link GetAccuracyMetricsCommandInput}
 * @returns {@link GetAccuracyMetricsCommandOutput}
 * @see {@link GetAccuracyMetricsCommandInput} for command's `input` shape.
 * @see {@link GetAccuracyMetricsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
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
export class GetAccuracyMetricsCommand extends command<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput>(
  _ep0,
  _mw0,
  "GetAccuracyMetrics",
  GetAccuracyMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccuracyMetricsRequest;
      output: GetAccuracyMetricsResponse;
    };
    sdk: {
      input: GetAccuracyMetricsCommandInput;
      output: GetAccuracyMetricsCommandOutput;
    };
  };
}
