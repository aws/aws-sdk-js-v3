// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceLevelObjectiveInput, CreateServiceLevelObjectiveOutput } from "../models/models_0";
import {
  de_CreateServiceLevelObjectiveCommand,
  se_CreateServiceLevelObjectiveCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a service level objective (SLO), which can help you ensure that your critical business operations are
 *       meeting customer expectations. Use SLOs to set and track specific target levels for the
 *       reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to
 *       calculate whether the application is performing at the level that you want.</p>
 *          <p>Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch
 *       measures this target frequently you can find whether it has been breached. </p>
 *          <p>The target performance quality that is defined for an SLO is the <i>attainment goal</i>.</p>
 *          <p>You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability.
 *         You can also set SLOs against any CloudWatch metric or math expression that produces a time series.</p>
 *          <note>
 *             <p>You can't create an SLO for a service operation that was discovered by Application Signals until after that operation has reported standard
 *      metrics to Application Signals.</p>
 *          </note>
 *          <p>When you create an SLO, you specify whether it is a <i>period-based SLO</i>
 *        or a <i>request-based SLO</i>. Each type of SLO has a different way of evaluating
 *     your application's performance against its attainment goal.</p>
 *          <ul>
 *             <li>
 *                <p>A <i>period-based SLO</i> uses defined <i>periods</i> of time within
 *         a specified total time interval. For each period of time, Application Signals determines whether the
 *         application met its goal. The attainment rate is calculated as the <code>number of good periods/number of total periods</code>.</p>
 *                <p>For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its
 *               performance goal during at least 99.9% of the
 *               time periods.</p>
 *             </li>
 *             <li>
 *                <p>A <i>request-based SLO</i> doesn't use pre-defined periods of time. Instead,
 *            the SLO measures <code>number of good requests/number of total requests</code> during the interval. At any time, you can find the ratio of
 *            good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.</p>
 *             </li>
 *          </ul>
 *          <p>After you have created an SLO, you can retrieve error budget reports for it.
 *       An <i>error budget</i> is the amount of time or amount of requests that your application can be non-compliant
 *        with the SLO's goal, and still have your application meet the goal.</p>
 *          <ul>
 *             <li>
 *                <p>For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold,
 *            while still meeting the overall goal. The <i>remaining error budget</i> decreases with every failed period
 *         that is recorded. The error budget within one interval can never increase.</p>
 *                <p>For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month
 *               translates to an error budget of 21.9 minutes of downtime per month.</p>
 *             </li>
 *             <li>
 *                <p>For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on
 *            the ratio of good requests to total requests.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about SLOs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html">
 *       Service level objectives (SLOs)</a>.
 *     </p>
 *          <p>When you perform a <code>CreateServiceLevelObjective</code> operation, Application Signals creates the <i>AWSServiceRoleForCloudWatchApplicationSignals</i> service-linked role,
 *         if it doesn't already exist in your account. This service-
 *         linked role has the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>xray:GetServiceGraph</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>logs:StartQuery</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>logs:GetQueryResults</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudwatch:GetMetricData</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudwatch:ListMetrics</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>autoscaling:DescribeAutoScalingGroups</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, CreateServiceLevelObjectiveCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, CreateServiceLevelObjectiveCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
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
 *       Statistic: "STRING_VALUE",
 *       PeriodSeconds: Number("int"),
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
 *     },
 *     MetricThreshold: Number("double"), // required
 *     ComparisonOperator: "GreaterThanOrEqualTo" || "GreaterThan" || "LessThan" || "LessThanOrEqualTo", // required
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
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
export class CreateServiceLevelObjectiveCommand extends $Command
  .classBuilder<
    CreateServiceLevelObjectiveCommandInput,
    CreateServiceLevelObjectiveCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationSignals", "CreateServiceLevelObjective", {})
  .n("ApplicationSignalsClient", "CreateServiceLevelObjectiveCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceLevelObjectiveCommand)
  .de(de_CreateServiceLevelObjectiveCommand)
  .build() {
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
