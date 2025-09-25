// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAlarmsForMetricInput, DescribeAlarmsForMetricOutput } from "../models/models_0";
import { DescribeAlarmsForMetric } from "../schemas/schemas_3_Alarm";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlarmsForMetricCommand}.
 */
export interface DescribeAlarmsForMetricCommandInput extends DescribeAlarmsForMetricInput {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmsForMetricCommand}.
 */
export interface DescribeAlarmsForMetricCommandOutput extends DescribeAlarmsForMetricOutput, __MetadataBearer {}

/**
 * <p>Retrieves the alarms for the specified metric. To filter the results, specify a
 *             statistic, period, or unit.</p>
 *          <p>This operation retrieves only standard alarms that are based on the specified
 *             metric. It does not return alarms based on math expressions that use the specified
 *             metric, or composite alarms that use the specified metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsForMetricCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmsForMetricCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAlarmsForMetricInput
 *   MetricName: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum",
 *   ExtendedStatistic: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Period: Number("int"),
 *   Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * };
 * const command = new DescribeAlarmsForMetricCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlarmsForMetricOutput
 * //   MetricAlarms: [ // MetricAlarms
 * //     { // MetricAlarm
 * //       AlarmName: "STRING_VALUE",
 * //       AlarmArn: "STRING_VALUE",
 * //       AlarmDescription: "STRING_VALUE",
 * //       AlarmConfigurationUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       ActionsEnabled: true || false,
 * //       OKActions: [ // ResourceList
 * //         "STRING_VALUE",
 * //       ],
 * //       AlarmActions: [
 * //         "STRING_VALUE",
 * //       ],
 * //       InsufficientDataActions: [
 * //         "STRING_VALUE",
 * //       ],
 * //       StateValue: "OK" || "ALARM" || "INSUFFICIENT_DATA",
 * //       StateReason: "STRING_VALUE",
 * //       StateReasonData: "STRING_VALUE",
 * //       StateUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       MetricName: "STRING_VALUE",
 * //       Namespace: "STRING_VALUE",
 * //       Statistic: "SampleCount" || "Average" || "Sum" || "Minimum" || "Maximum",
 * //       ExtendedStatistic: "STRING_VALUE",
 * //       Dimensions: [ // Dimensions
 * //         { // Dimension
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Period: Number("int"),
 * //       Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //       EvaluationPeriods: Number("int"),
 * //       DatapointsToAlarm: Number("int"),
 * //       Threshold: Number("double"),
 * //       ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold" || "LessThanLowerOrGreaterThanUpperThreshold" || "LessThanLowerThreshold" || "GreaterThanUpperThreshold",
 * //       TreatMissingData: "STRING_VALUE",
 * //       EvaluateLowSampleCountPercentile: "STRING_VALUE",
 * //       Metrics: [ // MetricDataQueries
 * //         { // MetricDataQuery
 * //           Id: "STRING_VALUE", // required
 * //           MetricStat: { // MetricStat
 * //             Metric: { // Metric
 * //               Namespace: "STRING_VALUE",
 * //               MetricName: "STRING_VALUE",
 * //               Dimensions: [
 * //                 {
 * //                   Name: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             Period: Number("int"), // required
 * //             Stat: "STRING_VALUE", // required
 * //             Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //           },
 * //           Expression: "STRING_VALUE",
 * //           Label: "STRING_VALUE",
 * //           ReturnData: true || false,
 * //           Period: Number("int"),
 * //           AccountId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ThresholdMetricId: "STRING_VALUE",
 * //       EvaluationState: "PARTIAL_DATA",
 * //       StateTransitionedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAlarmsForMetricCommandInput - {@link DescribeAlarmsForMetricCommandInput}
 * @returns {@link DescribeAlarmsForMetricCommandOutput}
 * @see {@link DescribeAlarmsForMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsForMetricCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DescribeAlarmsForMetricCommand extends $Command
  .classBuilder<
    DescribeAlarmsForMetricCommandInput,
    DescribeAlarmsForMetricCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DescribeAlarmsForMetric", {})
  .n("CloudWatchClient", "DescribeAlarmsForMetricCommand")
  .sc(DescribeAlarmsForMetric)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlarmsForMetricInput;
      output: DescribeAlarmsForMetricOutput;
    };
    sdk: {
      input: DescribeAlarmsForMetricCommandInput;
      output: DescribeAlarmsForMetricCommandOutput;
    };
  };
}
