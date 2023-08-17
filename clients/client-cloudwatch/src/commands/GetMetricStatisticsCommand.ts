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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricStatisticsInput, GetMetricStatisticsOutput } from "../models/models_0";
import { de_GetMetricStatisticsCommand, se_GetMetricStatisticsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMetricStatisticsCommand}.
 */
export interface GetMetricStatisticsCommandInput extends GetMetricStatisticsInput {}
/**
 * @public
 *
 * The output of {@link GetMetricStatisticsCommand}.
 */
export interface GetMetricStatisticsCommandOutput extends GetMetricStatisticsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets statistics for the specified metric.</p>
 *          <p>The maximum number of data points returned from a single call is 1,440. If
 * 			you request more than 1,440 data points, CloudWatch returns an error.
 * 			To reduce the number of data points, you can narrow the specified time range and make
 * 			multiple requests across adjacent time ranges, or you can increase the specified period.
 * 			Data points are not returned in chronological order.</p>
 *          <p>CloudWatch aggregates data points based on the length of the period
 * 			that you specify. For example, if you request statistics with a one-hour period,
 * 			CloudWatch aggregates all data points with time stamps that fall within each
 * 			one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than
 * 			the number of data points returned.</p>
 *          <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
 * 			data using a statistic set instead, you can only retrieve
 * 			percentile statistics for this data if one of the following conditions is true:</p>
 *          <ul>
 *             <li>
 *                <p>The SampleCount value of the statistic set is 1.</p>
 *             </li>
 *             <li>
 *                <p>The Min and the Max values of the statistic set are equal.</p>
 *             </li>
 *          </ul>
 *          <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p>
 *          <p>Amazon CloudWatch retains metric data as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution
 * 				metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p>
 *             </li>
 *          </ul>
 *          <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect
 * 			data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available,
 * 			but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with
 * 		a resolution of 1 hour.</p>
 *          <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p>
 *          <p>For information about metrics and dimensions supported by Amazon Web Services services, see the
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the
 * 			<i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStatisticsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStatisticsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricStatisticsInput
 *   Namespace: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Period: Number("int"), // required
 *   Statistics: [ // Statistics
 *     "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum",
 *   ],
 *   ExtendedStatistics: [ // ExtendedStatistics
 *     "STRING_VALUE",
 *   ],
 *   Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * };
 * const command = new GetMetricStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricStatisticsOutput
 * //   Label: "STRING_VALUE",
 * //   Datapoints: [ // Datapoints
 * //     { // Datapoint
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       SampleCount: Number("double"),
 * //       Average: Number("double"),
 * //       Sum: Number("double"),
 * //       Minimum: Number("double"),
 * //       Maximum: Number("double"),
 * //       Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //       ExtendedStatistics: { // DatapointValueMap
 * //         "<keys>": Number("double"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetricStatisticsCommandInput - {@link GetMetricStatisticsCommandInput}
 * @returns {@link GetMetricStatisticsCommandOutput}
 * @see {@link GetMetricStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetMetricStatisticsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class GetMetricStatisticsCommand extends $Command<
  GetMetricStatisticsCommandInput,
  GetMetricStatisticsCommandOutput,
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
  constructor(readonly input: GetMetricStatisticsCommandInput) {
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
  ): Handler<GetMetricStatisticsCommandInput, GetMetricStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricStatisticsCommand";
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
  private serialize(input: GetMetricStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetricStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricStatisticsCommandOutput> {
    return de_GetMetricStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
