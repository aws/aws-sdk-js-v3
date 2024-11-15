// smithy-typescript generated code
import { getCompressionPlugin } from "@smithy/middleware-compression";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutMetricDataInput } from "../models/models_0";
import { de_PutMetricDataCommand, se_PutMetricDataCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Publishes metric data to Amazon CloudWatch. CloudWatch associates the data with the
 *             specified metric. If the specified metric does not exist, CloudWatch creates the metric.
 *             When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to
 *             appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
 *          <p>You can publish metrics with associated entity data (so that related telemetry can be
 *             found and viewed together), or publish metric data by itself. To send entity data with
 *             your metrics, use the <code>EntityMetricData</code> parameter. To send metrics without
 *             entity data, use the <code>MetricData</code> parameter. The
 *             <code>EntityMetricData</code> structure includes <code>MetricData</code> structures
 *             for the metric data.</p>
 *          <p>You can publish either individual values in the <code>Value</code> field, or arrays of
 *             values and the number of times each value occurred during the period by using the
 *                 <code>Values</code> and <code>Counts</code> fields in the <code>MetricData</code>
 *             structure. Using the <code>Values</code> and <code>Counts</code> method enables you to
 *             publish up to 150 values per metric with one <code>PutMetricData</code> request, and
 *             supports retrieving percentile statistics on this data.</p>
 *          <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST
 *             requests. You can send a payload compressed by gzip. Each request is also limited to no
 *             more than 1000 different metrics (across both the <code>MetricData</code> and
 *             <code>EntityMetricData</code> properties).</p>
 *          <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>,
 *             CloudWatch rejects values that are either too small or too large. Values must be in the
 *             range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity,
 *             -Infinity) are not supported.</p>
 *          <p>You can use up to 30 dimensions per metric to further clarify what data the metric
 *             collects. Each dimension consists of a Name and Value pair. For more information about
 *             specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing
 *                 Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 *          <p>You specify the time stamp to be associated with each data point. You can specify time
 *             stamps that are as much as two weeks before the current date, and as much as 2 hours
 *             after the current day and time.</p>
 *          <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to
 *             become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time
 *             stamps between 3 and 24 hours ago can take as much as 2 hours to become available for
 *                 <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 *          <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
 *             data using a statistic set instead, you can only retrieve percentile statistics for this
 *             data if one of the following conditions is true:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>SampleCount</code> value of the statistic set is 1 and
 *                         <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all
 *                     equal.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code>
 *                     is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricDataCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricDataCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
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
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
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
 * @public
 */
export class PutMetricDataCommand extends $Command
  .classBuilder<
    PutMetricDataCommandInput,
    PutMetricDataCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCompressionPlugin(config, {
        encodings: ["gzip"],
      }),
    ];
  })
  .s("GraniteServiceVersion20100801", "PutMetricData", {})
  .n("CloudWatchClient", "PutMetricDataCommand")
  .f(void 0, void 0)
  .ser(se_PutMetricDataCommand)
  .de(de_PutMetricDataCommand)
  .build() {
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
