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
} from "@smithy/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribePredictorRequest, DescribePredictorResponse } from "../models/models_0";
import { de_DescribePredictorCommand, se_DescribePredictorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <note>
 *             <p> This operation is only valid for legacy predictors created with CreatePredictor. If you
 *         are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p>
 *          </note>
 *          <p>Describes a predictor created using the <a>CreatePredictor</a>
 *       operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreatePredictor</code>
 *       request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetImportJobArns</code> - The dataset import jobs used to import training
 *           data.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were
 *           evaluated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
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
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DescribePredictorCommand extends $Command<
  DescribePredictorCommandInput,
  DescribePredictorCommandOutput,
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
  constructor(readonly input: DescribePredictorCommandInput) {
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
  ): Handler<DescribePredictorCommandInput, DescribePredictorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePredictorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribePredictorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribePredictorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePredictorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePredictorCommandOutput> {
    return de_DescribePredictorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
