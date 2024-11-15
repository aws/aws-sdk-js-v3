// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetricDataInput, GetMetricDataOutput } from "../models/models_0";
import { de_GetMetricDataCommand, se_GetMetricDataCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricDataCommand}.
 */
export interface GetMetricDataCommandInput extends GetMetricDataInput {}
/**
 * @public
 *
 * The output of {@link GetMetricDataCommand}.
 */
export interface GetMetricDataCommandOutput extends GetMetricDataOutput, __MetadataBearer {}

/**
 * <p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric
 *             values. The operation can also include a CloudWatch Metrics Insights query, and
 *             one or more metric math functions.</p>
 *          <p>A <code>GetMetricData</code> operation that does not include a query can retrieve
 *             as many as 500 different metrics in a single request, with a total of as many as 100,800
 *             data points. You can also optionally perform metric math expressions on the values of
 *             the returned statistics, to create new time series that represent new insights into your
 *             data. For example, using Lambda metrics, you could divide the Errors metric by the
 *             Invocations metric to get an error rate time series. For more information about metric
 *             math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *          <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can
 *             include only one query. But the same <code>GetMetricData</code> operation can also
 *             retrieve other metrics. Metrics Insights queries can query only the most recent three
 *             hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p>
 *          <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than
 *             calls to <code>GetMetricStatistics</code>. For more information about pricing, see
 *             <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch
 *             Pricing</a>.</p>
 *          <p>Amazon CloudWatch retains metric data as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Data points with a period of less than 60 seconds are available for 3
 *                     hours. These data points are high-resolution metrics and are available only for
 *                     custom metrics that have been defined with a <code>StorageResolution</code> of
 *                     1.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 60 seconds (1-minute) are available for 15
 *                     days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 300 seconds (5-minute) are available for 63
 *                     days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 3600 seconds (1 hour) are available for 455
 *                     days (15 months).</p>
 *             </li>
 *          </ul>
 *          <p>Data points that are initially published with a shorter period are aggregated
 *             together for long-term storage. For example, if you collect data using a period of 1
 *             minute, the data remains available for 15 days with 1-minute resolution. After 15 days,
 *             this data is still available, but is aggregated and retrievable only with a resolution
 *             of 5 minutes. After 63 days, the data is further aggregated and is available with a
 *             resolution of 1 hour.</p>
 *          <p>If you omit <code>Unit</code> in your request, all data that was collected with any
 *             unit is returned, along with the corresponding units that were specified when the data
 *             was reported to CloudWatch. If you specify a unit, the operation returns only data that
 *             was collected with that unit specified. If you specify a unit that does not match the
 *             data collected, the results of the operation are null. CloudWatch does not perform unit
 *             conversions.</p>
 *          <p>
 *             <b>Using Metrics Insights queries with metric
 *             math</b>
 *          </p>
 *          <p>You can't mix a Metric Insights query and metric math syntax in the same expression,
 *             but you can reference results from a Metrics Insights query within other Metric math
 *             expressions. A Metrics Insights query without a <b>GROUP
 *                 BY</b> clause returns a single time-series (TS), and can be used as input for
 *             a metric math expression that expects a single time series. A Metrics Insights query
 *             with a <b>GROUP BY</b> clause returns an array of time-series
 *             (TS[]), and can be used as input for a metric math expression that expects an array of
 *             time series. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricDataCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricDataCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricDataInput
 *   MetricDataQueries: [ // MetricDataQueries // required
 *     { // MetricDataQuery
 *       Id: "STRING_VALUE", // required
 *       MetricStat: { // MetricStat
 *         Metric: { // Metric
 *           Namespace: "STRING_VALUE",
 *           MetricName: "STRING_VALUE",
 *           Dimensions: [ // Dimensions
 *             { // Dimension
 *               Name: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         Period: Number("int"), // required
 *         Stat: "STRING_VALUE", // required
 *         Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *       },
 *       Expression: "STRING_VALUE",
 *       Label: "STRING_VALUE",
 *       ReturnData: true || false,
 *       Period: Number("int"),
 *       AccountId: "STRING_VALUE",
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   NextToken: "STRING_VALUE",
 *   ScanBy: "TimestampDescending" || "TimestampAscending",
 *   MaxDatapoints: Number("int"),
 *   LabelOptions: { // LabelOptions
 *     Timezone: "STRING_VALUE",
 *   },
 * };
 * const command = new GetMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricDataOutput
 * //   MetricDataResults: [ // MetricDataResults
 * //     { // MetricDataResult
 * //       Id: "STRING_VALUE",
 * //       Label: "STRING_VALUE",
 * //       Timestamps: [ // Timestamps
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       Values: [ // DatapointValues
 * //         Number("double"),
 * //       ],
 * //       StatusCode: "Complete" || "InternalError" || "PartialData" || "Forbidden",
 * //       Messages: [ // MetricDataResultMessages
 * //         { // MessageData
 * //           Code: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Messages: [
 * //     {
 * //       Code: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetricDataCommandInput - {@link GetMetricDataCommandInput}
 * @returns {@link GetMetricDataCommandOutput}
 * @see {@link GetMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 * @public
 */
export class GetMetricDataCommand extends $Command
  .classBuilder<
    GetMetricDataCommandInput,
    GetMetricDataCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "GetMetricData", {})
  .n("CloudWatchClient", "GetMetricDataCommand")
  .f(void 0, void 0)
  .ser(se_GetMetricDataCommand)
  .de(de_GetMetricDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricDataInput;
      output: GetMetricDataOutput;
    };
    sdk: {
      input: GetMetricDataCommandInput;
      output: GetMetricDataCommandOutput;
    };
  };
}
