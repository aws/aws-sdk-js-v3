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
import { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/models_0";
import { de_GetAccuracyMetricsCommand, se_GetAccuracyMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class GetAccuracyMetricsCommand extends $Command<
  GetAccuracyMetricsCommandInput,
  GetAccuracyMetricsCommandOutput,
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
  constructor(readonly input: GetAccuracyMetricsCommandInput) {
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
  ): Handler<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccuracyMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "GetAccuracyMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecast",
        operation: "GetAccuracyMetrics",
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
  private serialize(input: GetAccuracyMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccuracyMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccuracyMetricsCommandOutput> {
    return de_GetAccuracyMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
