// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchGetServiceLevelObjectiveBudgetReportInput,
  BatchGetServiceLevelObjectiveBudgetReportOutput,
} from "../models/models_0";
import { BatchGetServiceLevelObjectiveBudgetReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetServiceLevelObjectiveBudgetReportCommand}.
 */
export interface BatchGetServiceLevelObjectiveBudgetReportCommandInput extends BatchGetServiceLevelObjectiveBudgetReportInput {}
/**
 * @public
 *
 * The output of {@link BatchGetServiceLevelObjectiveBudgetReportCommand}.
 */
export interface BatchGetServiceLevelObjectiveBudgetReportCommandOutput extends BatchGetServiceLevelObjectiveBudgetReportOutput, __MetadataBearer {}

/**
 * <p>Use this operation to retrieve one or more <i>service level objective (SLO) budget reports</i>.</p> <p>An <i>error budget</i> is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month.</p> <p>Budget reports include a health indicator, the attainment value, and remaining budget.</p> <p>For more information about SLO error budgets, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html#CloudWatch-ServiceLevelObjectives-concepts"> SLO concepts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, BatchGetServiceLevelObjectiveBudgetReportCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, BatchGetServiceLevelObjectiveBudgetReportCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // BatchGetServiceLevelObjectiveBudgetReportInput
 *   Timestamp: new Date("TIMESTAMP"), // required
 *   SloIds: [ // ServiceLevelObjectiveIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetServiceLevelObjectiveBudgetReportCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetServiceLevelObjectiveBudgetReportOutput
 * //   Timestamp: new Date("TIMESTAMP"), // required
 * //   Reports: [ // ServiceLevelObjectiveBudgetReports // required
 * //     { // ServiceLevelObjectiveBudgetReport
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       EvaluationType: "PeriodBased" || "RequestBased",
 * //       BudgetStatus: "OK" || "WARNING" || "BREACHED" || "INSUFFICIENT_DATA", // required
 * //       Attainment: Number("double"),
 * //       TotalBudgetSeconds: Number("int"),
 * //       BudgetSecondsRemaining: Number("int"),
 * //       TotalBudgetRequests: Number("int"),
 * //       BudgetRequestsRemaining: Number("int"),
 * //       Sli: { // ServiceLevelIndicator
 * //         SliMetric: { // ServiceLevelIndicatorMetric
 * //           KeyAttributes: { // Attributes
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           OperationName: "STRING_VALUE",
 * //           MetricType: "LATENCY" || "AVAILABILITY",
 * //           MetricDataQueries: [ // MetricDataQueries // required
 * //             { // MetricDataQuery
 * //               Id: "STRING_VALUE", // required
 * //               MetricStat: { // MetricStat
 * //                 Metric: { // Metric
 * //                   Namespace: "STRING_VALUE",
 * //                   MetricName: "STRING_VALUE",
 * //                   Dimensions: [ // Dimensions
 * //                     { // Dimension
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 Period: Number("int"), // required
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //               },
 * //               Expression: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //               Period: Number("int"),
 * //               AccountId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           DependencyConfig: { // DependencyConfig
 * //             DependencyKeyAttributes: { // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             DependencyOperationName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         MetricThreshold: Number("double"), // required
 * //         ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo", // required
 * //       },
 * //       RequestBasedSli: { // RequestBasedServiceLevelIndicator
 * //         RequestBasedSliMetric: { // RequestBasedServiceLevelIndicatorMetric
 * //           KeyAttributes: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           OperationName: "STRING_VALUE",
 * //           MetricType: "LATENCY" || "AVAILABILITY",
 * //           TotalRequestCountMetric: [ // required
 * //             {
 * //               Id: "STRING_VALUE", // required
 * //               MetricStat: {
 * //                 Metric: {
 * //                   Namespace: "STRING_VALUE",
 * //                   MetricName: "STRING_VALUE",
 * //                   Dimensions: [
 * //                     {
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 Period: Number("int"), // required
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //               },
 * //               Expression: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //               Period: Number("int"),
 * //               AccountId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           MonitoredRequestCountMetric: { // MonitoredRequestCountMetricDataQueries Union: only one key present
 * //             GoodCountMetric: [
 * //               {
 * //                 Id: "STRING_VALUE", // required
 * //                 MetricStat: {
 * //                   Metric: {
 * //                     Namespace: "STRING_VALUE",
 * //                     MetricName: "STRING_VALUE",
 * //                     Dimensions: [
 * //                       {
 * //                         Name: "STRING_VALUE", // required
 * //                         Value: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                   },
 * //                   Period: Number("int"), // required
 * //                   Stat: "STRING_VALUE", // required
 * //                   Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //                 },
 * //                 Expression: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 ReturnData: true || false,
 * //                 Period: Number("int"),
 * //                 AccountId: "STRING_VALUE",
 * //               },
 * //             ],
 * //             BadCountMetric: [
 * //               {
 * //                 Id: "STRING_VALUE", // required
 * //                 MetricStat: {
 * //                   Metric: {
 * //                     Namespace: "STRING_VALUE",
 * //                     MetricName: "STRING_VALUE",
 * //                     Dimensions: [
 * //                       {
 * //                         Name: "STRING_VALUE", // required
 * //                         Value: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                   },
 * //                   Period: Number("int"), // required
 * //                   Stat: "STRING_VALUE", // required
 * //                   Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //                 },
 * //                 Expression: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 ReturnData: true || false,
 * //                 Period: Number("int"),
 * //                 AccountId: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           DependencyConfig: {
 * //             DependencyKeyAttributes: { // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             DependencyOperationName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         MetricThreshold: Number("double"),
 * //         ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo",
 * //       },
 * //       Goal: { // Goal
 * //         Interval: { // Interval Union: only one key present
 * //           RollingInterval: { // RollingInterval
 * //             DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 * //             Duration: Number("int"), // required
 * //           },
 * //           CalendarInterval: { // CalendarInterval
 * //             StartTime: new Date("TIMESTAMP"), // required
 * //             DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 * //             Duration: Number("int"), // required
 * //           },
 * //         },
 * //         AttainmentGoal: Number("double"),
 * //         WarningThreshold: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // ServiceLevelObjectiveBudgetReportErrors // required
 * //     { // ServiceLevelObjectiveBudgetReportError
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetServiceLevelObjectiveBudgetReportCommandInput - {@link BatchGetServiceLevelObjectiveBudgetReportCommandInput}
 * @returns {@link BatchGetServiceLevelObjectiveBudgetReportCommandOutput}
 * @see {@link BatchGetServiceLevelObjectiveBudgetReportCommandInput} for command's `input` shape.
 * @see {@link BatchGetServiceLevelObjectiveBudgetReportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 *
 * @public
 */
export class BatchGetServiceLevelObjectiveBudgetReportCommand extends $Command
  .classBuilder<
    BatchGetServiceLevelObjectiveBudgetReportCommandInput,
    BatchGetServiceLevelObjectiveBudgetReportCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "BatchGetServiceLevelObjectiveBudgetReport", {})
  .n("ApplicationSignalsClient", "BatchGetServiceLevelObjectiveBudgetReportCommand")
  .sc(BatchGetServiceLevelObjectiveBudgetReport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetServiceLevelObjectiveBudgetReportInput;
      output: BatchGetServiceLevelObjectiveBudgetReportOutput;
    };
    sdk: {
      input: BatchGetServiceLevelObjectiveBudgetReportCommandInput;
      output: BatchGetServiceLevelObjectiveBudgetReportCommandOutput;
    };
  };
}
