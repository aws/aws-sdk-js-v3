// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/models_0";
import { de_GetAccuracyMetricsCommand, se_GetAccuracyMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and
 *       to decide whether to use the predictor to generate a forecast. For more information, see
 *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor
 *         Metrics</a>.</p>
 *          <p>This operation generates metrics for each backtest window that was evaluated. The number
 *       of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the
 *         <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't
 *       specified, the number defaults to one.</p>
 *          <p>The parameters of the <code>filling</code> method determine which items contribute to the
 *       metrics. If you want all items to contribute, specify <code>zero</code>. If you want only
 *       those items that have complete data in the range being evaluated to contribute, specify
 *         <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p>
 *          <note>
 *             <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be
 *           <code>ACTIVE</code>, signifying that training has completed. To get the status, use the
 *           <a>DescribePredictor</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, GetAccuracyMetricsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, GetAccuracyMetricsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
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
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
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
 *
 * @public
 */
export class GetAccuracyMetricsCommand extends $Command
  .classBuilder<
    GetAccuracyMetricsCommandInput,
    GetAccuracyMetricsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "GetAccuracyMetrics", {})
  .n("ForecastClient", "GetAccuracyMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetAccuracyMetricsCommand)
  .de(de_GetAccuracyMetricsCommand)
  .build() {
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
