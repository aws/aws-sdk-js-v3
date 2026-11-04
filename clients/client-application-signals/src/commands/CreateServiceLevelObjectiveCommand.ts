// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceLevelObjectiveInput, CreateServiceLevelObjectiveOutput } from "../models/models_0";
import { CreateServiceLevelObjective$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceLevelObjectiveCommand}.
 */
export interface CreateServiceLevelObjectiveCommandInput extends CreateServiceLevelObjectiveInput {}
/**
 * @public
 *
 * The output of {@link CreateServiceLevelObjectiveCommand}.
 */
export interface CreateServiceLevelObjectiveCommandOutput extends CreateServiceLevelObjectiveOutput, __MetadataBearer {}

/**
 * Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want.
 *
 * Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached.
 *
 * The target performance quality that is defined for an SLO is the *attainment goal*.
 *
 * You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series.
 *
 * > **Note:** You can't create an SLO for a service operation that was discovered by Application Signals until after that operation has reported standard metrics to Application Signals.
 *
 * When you create an SLO, you specify whether it is a *period-based SLO* or a *request-based SLO*. Each type of SLO has a different way of evaluating your application's performance against its attainment goal.
 *
 * - A *period-based SLO* uses defined *periods* of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the `number of good periods/number of total periods`.
 *
 *   For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods.
 * - A *request-based SLO* doesn't use pre-defined periods of time. Instead, the SLO measures `number of good requests/number of total requests` during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.
 *
 * After you have created an SLO, you can retrieve error budget reports for it. An *error budget* is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal.
 *
 * - For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The *remaining error budget* decreases with every failed period that is recorded. The error budget within one interval can never increase.
 *
 *   For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month.
 * - For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests.
 *
 * For more information about SLOs, see [Service level objectives (SLOs)](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html).
 *
 * When you perform a `CreateServiceLevelObjective` operation, Application Signals creates the *AWSServiceRoleForCloudWatchApplicationSignals* service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions:
 *
 * - `xray:GetServiceGraph`
 * - `logs:StartQuery`
 * - `logs:GetQueryResults`
 * - `cloudwatch:GetMetricData`
 * - `cloudwatch:ListMetrics`
 * - `tag:GetResources`
 * - `autoscaling:DescribeAutoScalingGroups`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, CreateServiceLevelObjectiveCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, CreateServiceLevelObjectiveCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // CreateServiceLevelObjectiveInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SliConfig: { // ServiceLevelIndicatorConfig
 *     SliMetricConfig: { // ServiceLevelIndicatorMetricConfig
 *       KeyAttributes: { // Attributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       OperationName: "STRING_VALUE",
 *       MetricType: "LATENCY" || "AVAILABILITY",
 *       MetricName: "STRING_VALUE",
 *       Statistic: "STRING_VALUE",
 *       PeriodSeconds: Number("int"),
 *       MetricSource: { // MetricSource
 *         MetricSourceKeyAttributes: { // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *         MetricSourceAttributes: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       MetricDataQueries: [ // MetricDataQueries
 *         { // MetricDataQuery
 *           Id: "STRING_VALUE", // required
 *           MetricStat: { // MetricStat
 *             Metric: { // Metric
 *               Namespace: "STRING_VALUE",
 *               MetricName: "STRING_VALUE",
 *               Dimensions: [ // Dimensions
 *                 { // Dimension
 *                   Name: "STRING_VALUE", // required
 *                   Value: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *             Period: Number("int"), // required
 *             Stat: "STRING_VALUE", // required
 *             Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *           },
 *           Expression: "STRING_VALUE",
 *           Label: "STRING_VALUE",
 *           ReturnData: true || false,
 *           Period: Number("int"),
 *           AccountId: "STRING_VALUE",
 *         },
 *       ],
 *       DependencyConfig: { // DependencyConfig
 *         DependencyKeyAttributes: { // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *         DependencyOperationName: "STRING_VALUE", // required
 *       },
 *       CompositeSliConfig: { // CompositeSliConfig
 *         SelectionConfig: { // SelectionConfig
 *           Type: "EXPLICIT" || "PREFIX" || "REGEX", // required
 *           Pattern: "STRING_VALUE",
 *         },
 *         Components: [ // CompositeSliComponents
 *           { // CompositeSliComponent Union: only one key present
 *             OperationName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     MetricThreshold: Number("double"),
 *     ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo",
 *   },
 *   RequestBasedSliConfig: { // RequestBasedServiceLevelIndicatorConfig
 *     RequestBasedSliMetricConfig: { // RequestBasedServiceLevelIndicatorMetricConfig
 *       KeyAttributes: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       OperationName: "STRING_VALUE",
 *       MetricType: "LATENCY" || "AVAILABILITY",
 *       TotalRequestCountMetric: [
 *         {
 *           Id: "STRING_VALUE", // required
 *           MetricStat: {
 *             Metric: {
 *               Namespace: "STRING_VALUE",
 *               MetricName: "STRING_VALUE",
 *               Dimensions: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Value: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *             Period: Number("int"), // required
 *             Stat: "STRING_VALUE", // required
 *             Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *           },
 *           Expression: "STRING_VALUE",
 *           Label: "STRING_VALUE",
 *           ReturnData: true || false,
 *           Period: Number("int"),
 *           AccountId: "STRING_VALUE",
 *         },
 *       ],
 *       MonitoredRequestCountMetric: { // MonitoredRequestCountMetricDataQueries Union: only one key present
 *         GoodCountMetric: [
 *           {
 *             Id: "STRING_VALUE", // required
 *             MetricStat: {
 *               Metric: {
 *                 Namespace: "STRING_VALUE",
 *                 MetricName: "STRING_VALUE",
 *                 Dimensions: [
 *                   {
 *                     Name: "STRING_VALUE", // required
 *                     Value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *               Period: Number("int"), // required
 *               Stat: "STRING_VALUE", // required
 *               Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *             },
 *             Expression: "STRING_VALUE",
 *             Label: "STRING_VALUE",
 *             ReturnData: true || false,
 *             Period: Number("int"),
 *             AccountId: "STRING_VALUE",
 *           },
 *         ],
 *         BadCountMetric: [
 *           {
 *             Id: "STRING_VALUE", // required
 *             MetricStat: {
 *               Metric: {
 *                 Namespace: "STRING_VALUE",
 *                 MetricName: "STRING_VALUE",
 *                 Dimensions: [
 *                   {
 *                     Name: "STRING_VALUE", // required
 *                     Value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *               Period: Number("int"), // required
 *               Stat: "STRING_VALUE", // required
 *               Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *             },
 *             Expression: "STRING_VALUE",
 *             Label: "STRING_VALUE",
 *             ReturnData: true || false,
 *             Period: Number("int"),
 *             AccountId: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       DependencyConfig: {
 *         DependencyKeyAttributes: "<Attributes>", // required
 *         DependencyOperationName: "STRING_VALUE", // required
 *       },
 *       MetricSource: {
 *         MetricSourceKeyAttributes: "<Attributes>", // required
 *         MetricSourceAttributes: "<Attributes>",
 *       },
 *       MetricName: "STRING_VALUE",
 *       CompositeSliConfig: {
 *         SelectionConfig: {
 *           Type: "EXPLICIT" || "PREFIX" || "REGEX", // required
 *           Pattern: "STRING_VALUE",
 *         },
 *         Components: [
 *           {//  Union: only one key present
 *             OperationName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     MetricThreshold: Number("double"),
 *     ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo",
 *   },
 *   Goal: { // Goal
 *     Interval: { // Interval Union: only one key present
 *       RollingInterval: { // RollingInterval
 *         DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 *         Duration: Number("int"), // required
 *       },
 *       CalendarInterval: { // CalendarInterval
 *         StartTime: new Date("TIMESTAMP"), // required
 *         DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 *         Duration: Number("int"), // required
 *       },
 *     },
 *     AttainmentGoal: Number("double"),
 *     WarningThreshold: Number("double"),
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   BurnRateConfigurations: [ // BurnRateConfigurations
 *     { // BurnRateConfiguration
 *       LookBackWindowMinutes: Number("int"), // required
 *     },
 *   ],
 *   CreateRecommendedSlo: true || false,
 *   AutoInvestigationEnabled: true || false,
 * };
 * const command = new CreateServiceLevelObjectiveCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceLevelObjectiveOutput
 * //   Slo: { // ServiceLevelObjective
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     Sli: { // ServiceLevelIndicator
 * //       SliMetric: { // ServiceLevelIndicatorMetric
 * //         KeyAttributes: { // Attributes
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         OperationName: "STRING_VALUE",
 * //         MetricType: "LATENCY" || "AVAILABILITY",
 * //         MetricDataQueries: [ // MetricDataQueries // required
 * //           { // MetricDataQuery
 * //             Id: "STRING_VALUE", // required
 * //             MetricStat: { // MetricStat
 * //               Metric: { // Metric
 * //                 Namespace: "STRING_VALUE",
 * //                 MetricName: "STRING_VALUE",
 * //                 Dimensions: [ // Dimensions
 * //                   { // Dimension
 * //                     Name: "STRING_VALUE", // required
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               Period: Number("int"), // required
 * //               Stat: "STRING_VALUE", // required
 * //               Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //             },
 * //             Expression: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             ReturnData: true || false,
 * //             Period: Number("int"),
 * //             AccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DependencyConfig: { // DependencyConfig
 * //           DependencyKeyAttributes: { // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           DependencyOperationName: "STRING_VALUE", // required
 * //         },
 * //         MetricSource: { // MetricSource
 * //           MetricSourceKeyAttributes: { // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           MetricSourceAttributes: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         CompositeSliConfig: { // CompositeSliConfig
 * //           SelectionConfig: { // SelectionConfig
 * //             Type: "EXPLICIT" || "PREFIX" || "REGEX", // required
 * //             Pattern: "STRING_VALUE",
 * //           },
 * //           Components: [ // CompositeSliComponents
 * //             { // CompositeSliComponent Union: only one key present
 * //               OperationName: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       MetricThreshold: Number("double"), // required
 * //       ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo", // required
 * //     },
 * //     RequestBasedSli: { // RequestBasedServiceLevelIndicator
 * //       RequestBasedSliMetric: { // RequestBasedServiceLevelIndicatorMetric
 * //         KeyAttributes: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         OperationName: "STRING_VALUE",
 * //         MetricType: "LATENCY" || "AVAILABILITY",
 * //         TotalRequestCountMetric: [ // required
 * //           {
 * //             Id: "STRING_VALUE", // required
 * //             MetricStat: {
 * //               Metric: {
 * //                 Namespace: "STRING_VALUE",
 * //                 MetricName: "STRING_VALUE",
 * //                 Dimensions: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //               Period: Number("int"), // required
 * //               Stat: "STRING_VALUE", // required
 * //               Unit: "Microseconds" || "Milliseconds" || "Seconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //             },
 * //             Expression: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             ReturnData: true || false,
 * //             Period: Number("int"),
 * //             AccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         MonitoredRequestCountMetric: { // MonitoredRequestCountMetricDataQueries Union: only one key present
 * //           GoodCountMetric: [
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
 * //           BadCountMetric: [
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
 * //         },
 * //         DependencyConfig: {
 * //           DependencyKeyAttributes: "<Attributes>", // required
 * //           DependencyOperationName: "STRING_VALUE", // required
 * //         },
 * //         MetricSource: {
 * //           MetricSourceKeyAttributes: "<Attributes>", // required
 * //           MetricSourceAttributes: "<Attributes>",
 * //         },
 * //         CompositeSliConfig: {
 * //           SelectionConfig: {
 * //             Type: "EXPLICIT" || "PREFIX" || "REGEX", // required
 * //             Pattern: "STRING_VALUE",
 * //           },
 * //           Components: [
 * //             {//  Union: only one key present
 * //               OperationName: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       MetricThreshold: Number("double"),
 * //       ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo",
 * //     },
 * //     EvaluationType: "PeriodBased" || "RequestBased",
 * //     Goal: { // Goal
 * //       Interval: { // Interval Union: only one key present
 * //         RollingInterval: { // RollingInterval
 * //           DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 * //           Duration: Number("int"), // required
 * //         },
 * //         CalendarInterval: { // CalendarInterval
 * //           StartTime: new Date("TIMESTAMP"), // required
 * //           DurationUnit: "MINUTE" || "HOUR" || "DAY" || "MONTH", // required
 * //           Duration: Number("int"), // required
 * //         },
 * //       },
 * //       AttainmentGoal: Number("double"),
 * //       WarningThreshold: Number("double"),
 * //     },
 * //     BurnRateConfigurations: [ // BurnRateConfigurations
 * //       { // BurnRateConfiguration
 * //         LookBackWindowMinutes: Number("int"), // required
 * //       },
 * //     ],
 * //     MetricSourceType: "ServiceOperation" || "CloudWatchMetric" || "ServiceDependency" || "AppMonitor" || "Canary" || "Service",
 * //     AutoInvestigationEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServiceLevelObjectiveCommandInput - {@link CreateServiceLevelObjectiveCommandInput}
 * @returns {@link CreateServiceLevelObjectiveCommandOutput}
 * @see {@link CreateServiceLevelObjectiveCommandInput} for command's `input` shape.
 * @see {@link CreateServiceLevelObjectiveCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The resource is not valid.
 *
 * @throws {@link ApplicationSignalsServiceException}
 *
 * Base exception class for all service exceptions from ApplicationSignals service.
 *
 * @public
 */
export class CreateServiceLevelObjectiveCommand extends command<CreateServiceLevelObjectiveCommandInput, CreateServiceLevelObjectiveCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceLevelObjective",
  CreateServiceLevelObjective$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceLevelObjectiveInput;
      output: CreateServiceLevelObjectiveOutput;
    };
    sdk: {
      input: CreateServiceLevelObjectiveCommandInput;
      output: CreateServiceLevelObjectiveCommandOutput;
    };
  };
}
