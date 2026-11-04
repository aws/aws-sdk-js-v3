// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMetricStatisticsInput, GetMetricStatisticsOutput } from "../models/models_0";
import { GetMetricStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets statistics for the specified metric.
 *
 * The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.
 *
 * CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.
 *
 * CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:
 *
 * - The SampleCount value of the statistic set is 1.
 * - The Min and the Max values of the statistic set are equal.
 *
 * Percentile statistics are not available for metrics when any of the metric values are negative numbers.
 *
 * Amazon CloudWatch retains metric data as follows:
 *
 * - Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a `StorageResolution` of 1.
 * - Data points with a period of 60 seconds (1-minute) are available for 15 days.
 * - Data points with a period of 300 seconds (5-minute) are available for 63 days.
 * - Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).
 *
 * Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.
 *
 * CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.
 *
 * For information about metrics and dimensions supported by Amazon Web Services services, see the [Amazon CloudWatch Metrics and Dimensions Reference](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html) in the *Amazon CloudWatch User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricStatisticsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricStatisticsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
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
 *
 * Request processing has failed due to some unknown error, exception, or failure.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Parameters were used together that cannot be used together.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * An input parameter that is required is missing.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class GetMetricStatisticsCommand extends command<GetMetricStatisticsCommandInput, GetMetricStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "GetMetricStatistics",
  GetMetricStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricStatisticsInput;
      output: GetMetricStatisticsOutput;
    };
    sdk: {
      input: GetMetricStatisticsCommandInput;
      output: GetMetricStatisticsCommandOutput;
    };
  };
}
