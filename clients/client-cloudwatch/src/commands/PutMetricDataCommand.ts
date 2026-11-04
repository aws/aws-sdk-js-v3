// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { PutMetricDataInput } from "../models/models_0";
import { PutMetricData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMetricDataCommand}.
 */
export interface PutMetricDataCommandInput extends PutMetricDataInput {}
/**
 * @public
 *
 * The output of {@link PutMetricDataCommand}.
 */
export interface PutMetricDataCommandOutput extends __MetadataBearer {}

/**
 * Publishes metric data to Amazon CloudWatch. CloudWatch associates the data with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
 *
 * You can publish metrics with associated entity data (so that related telemetry can be found and viewed together), or publish metric data by itself. To send entity data with your metrics, use the `EntityMetricData` parameter. To send metrics without entity data, use the `MetricData` parameter. The `EntityMetricData` structure includes `MetricData` structures for the metric data.
 *
 * You can publish either individual values in the `Value` field, or arrays of values and the number of times each value occurred during the period by using the `Values` and `Counts` fields in the `MetricData` structure. Using the `Values` and `Counts` method enables you to publish up to 150 values per metric with one `PutMetricData` request, and supports retrieving percentile statistics on this data.
 *
 * Each `PutMetricData` request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics (across both the `MetricData` and `EntityMetricData` properties).
 *
 * Although the `Value` parameter accepts numbers of type `Double`, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.
 *
 * You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see [Publishing Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) in the *Amazon CloudWatch User Guide*.
 *
 * You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.
 *
 * Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for [GetMetricData](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html) or [GetMetricStatistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html) from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for [GetMetricData](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html) or [GetMetricStatistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html).
 *
 * CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:
 *
 * - The `SampleCount` value of the statistic set is 1 and `Min`, `Max`, and `Sum` are all equal.
 * - The `Min` and `Max` are equal, and `Sum` is equal to `Min` multiplied by `SampleCount`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricDataCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricDataCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutMetricDataInput
 *   Namespace: "STRING_VALUE", // required
 *   MetricData: [ // MetricData
 *     { // MetricDatum
 *       MetricName: "STRING_VALUE", // required
 *       Dimensions: [ // Dimensions
 *         { // Dimension
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Timestamp: new Date("TIMESTAMP"),
 *       Value: Number("double"),
 *       StatisticValues: { // StatisticSet
 *         SampleCount: Number("double"), // required
 *         Sum: Number("double"), // required
 *         Minimum: Number("double"), // required
 *         Maximum: Number("double"), // required
 *       },
 *       Values: [ // Values
 *         Number("double"),
 *       ],
 *       Counts: [ // Counts
 *         Number("double"),
 *       ],
 *       Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *       StorageResolution: Number("int"),
 *     },
 *   ],
 *   EntityMetricData: [ // EntityMetricDataList
 *     { // EntityMetricData
 *       Entity: { // Entity
 *         KeyAttributes: { // EntityKeyAttributesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Attributes: { // EntityAttributesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       MetricData: [
 *         {
 *           MetricName: "STRING_VALUE", // required
 *           Dimensions: [
 *             {
 *               Name: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *           Timestamp: new Date("TIMESTAMP"),
 *           Value: Number("double"),
 *           StatisticValues: {
 *             SampleCount: Number("double"), // required
 *             Sum: Number("double"), // required
 *             Minimum: Number("double"), // required
 *             Maximum: Number("double"), // required
 *           },
 *           Values: [
 *             Number("double"),
 *           ],
 *           Counts: [
 *             Number("double"),
 *           ],
 *           Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *           StorageResolution: Number("int"),
 *         },
 *       ],
 *     },
 *   ],
 *   StrictEntityValidation: true || false,
 * };
 * const command = new PutMetricDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetricDataCommandInput - {@link PutMetricDataCommandInput}
 * @returns {@link PutMetricDataCommandOutput}
 * @see {@link PutMetricDataCommandInput} for command's `input` shape.
 * @see {@link PutMetricDataCommandOutput} for command's `response` shape.
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
export class PutMetricDataCommand extends command<PutMetricDataCommandInput, PutMetricDataCommandOutput>(
  _ep0,
  _mw1,
  "PutMetricData",
  PutMetricData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetricDataInput;
      output: {};
    };
    sdk: {
      input: PutMetricDataCommandInput;
      output: PutMetricDataCommandOutput;
    };
  };
}
