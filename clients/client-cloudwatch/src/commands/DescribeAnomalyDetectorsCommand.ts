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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAnomalyDetectorsInput, DescribeAnomalyDetectorsOutput } from "../models/models_0";
import { de_DescribeAnomalyDetectorsCommand, se_DescribeAnomalyDetectorsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectorsCommand}.
 */
export interface DescribeAnomalyDetectorsCommandInput extends DescribeAnomalyDetectorsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectorsCommand}.
 */
export interface DescribeAnomalyDetectorsCommandOutput extends DescribeAnomalyDetectorsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the anomaly detection models that you have created in your account.
 * 			For single metric anomaly detectors,
 * 			you can list all of the models in your account or filter the results
 * 			to only the models that are related to a certain namespace, metric name, or metric dimension.
 * 			For metric math anomaly detectors,
 * 			you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array.
 * 			This will return all metric math anomaly detectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAnomalyDetectorsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAnomalyDetectorsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Namespace: "STRING_VALUE",
 *   MetricName: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AnomalyDetectorTypes: [ // AnomalyDetectorTypes
 *     "SINGLE_METRIC" || "METRIC_MATH",
 *   ],
 * };
 * const command = new DescribeAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectorsOutput
 * //   AnomalyDetectors: [ // AnomalyDetectors
 * //     { // AnomalyDetector
 * //       Namespace: "STRING_VALUE",
 * //       MetricName: "STRING_VALUE",
 * //       Dimensions: [ // Dimensions
 * //         { // Dimension
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Stat: "STRING_VALUE",
 * //       Configuration: { // AnomalyDetectorConfiguration
 * //         ExcludedTimeRanges: [ // AnomalyDetectorExcludedTimeRanges
 * //           { // Range
 * //             StartTime: new Date("TIMESTAMP"), // required
 * //             EndTime: new Date("TIMESTAMP"), // required
 * //           },
 * //         ],
 * //         MetricTimezone: "STRING_VALUE",
 * //       },
 * //       StateValue: "PENDING_TRAINING" || "TRAINED_INSUFFICIENT_DATA" || "TRAINED",
 * //       SingleMetricAnomalyDetector: { // SingleMetricAnomalyDetector
 * //         Namespace: "STRING_VALUE",
 * //         MetricName: "STRING_VALUE",
 * //         Dimensions: [
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Stat: "STRING_VALUE",
 * //       },
 * //       MetricMathAnomalyDetector: { // MetricMathAnomalyDetector
 * //         MetricDataQueries: [ // MetricDataQueries
 * //           { // MetricDataQuery
 * //             Id: "STRING_VALUE", // required
 * //             MetricStat: { // MetricStat
 * //               Metric: { // Metric
 * //                 Namespace: "STRING_VALUE",
 * //                 MetricName: "STRING_VALUE",
 * //                 Dimensions: "<Dimensions>",
 * //               },
 * //               Period: Number("int"), // required
 * //               Stat: "STRING_VALUE", // required
 * //               Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //             },
 * //             Expression: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             ReturnData: true || false,
 * //             Period: Number("int"),
 * //             AccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectorsCommandInput - {@link DescribeAnomalyDetectorsCommandInput}
 * @returns {@link DescribeAnomalyDetectorsCommandOutput}
 * @see {@link DescribeAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class DescribeAnomalyDetectorsCommand extends $Command<
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: DescribeAnomalyDetectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAnomalyDetectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAnomalyDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "DescribeAnomalyDetectors",
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
  private serialize(input: DescribeAnomalyDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAnomalyDetectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnomalyDetectorsCommandOutput> {
    return de_DescribeAnomalyDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
