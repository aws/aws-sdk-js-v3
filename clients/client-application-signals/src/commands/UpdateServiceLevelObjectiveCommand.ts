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
import { UpdateServiceLevelObjectiveInput, UpdateServiceLevelObjectiveOutput } from "../models/models_0";
import {
  de_UpdateServiceLevelObjectiveCommand,
  se_UpdateServiceLevelObjectiveCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceLevelObjectiveCommand}.
 */
export interface UpdateServiceLevelObjectiveCommandInput extends UpdateServiceLevelObjectiveInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceLevelObjectiveCommand}.
 */
export interface UpdateServiceLevelObjectiveCommandOutput extends UpdateServiceLevelObjectiveOutput, __MetadataBearer {}

/**
 * <p>Updates an existing service level objective (SLO). If you omit parameters, the previous values
 *          of those parameters are retained. </p>
 *          <p>You cannot change from a period-based SLO to a request-based SLO,
 *          or change from a request-based SLO to a period-based SLO.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, UpdateServiceLevelObjectiveCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, UpdateServiceLevelObjectiveCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationSignalsClient(config);
 * const input = { // UpdateServiceLevelObjectiveInput
 *   Id: "STRING_VALUE", // required
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
 *   BurnRateConfigurations: [ // BurnRateConfigurations
 *     { // BurnRateConfiguration
 *       LookBackWindowMinutes: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateServiceLevelObjectiveCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceLevelObjectiveOutput
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
 * @param UpdateServiceLevelObjectiveCommandInput - {@link UpdateServiceLevelObjectiveCommandInput}
 * @returns {@link UpdateServiceLevelObjectiveCommandOutput}
 * @see {@link UpdateServiceLevelObjectiveCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceLevelObjectiveCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
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
 * @public
 */
export class UpdateServiceLevelObjectiveCommand extends $Command
  .classBuilder<
    UpdateServiceLevelObjectiveCommandInput,
    UpdateServiceLevelObjectiveCommandOutput,
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
  .s("ApplicationSignals", "UpdateServiceLevelObjective", {})
  .n("ApplicationSignalsClient", "UpdateServiceLevelObjectiveCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServiceLevelObjectiveCommand)
  .de(de_UpdateServiceLevelObjectiveCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceLevelObjectiveInput;
      output: UpdateServiceLevelObjectiveOutput;
    };
    sdk: {
      input: UpdateServiceLevelObjectiveCommandInput;
      output: UpdateServiceLevelObjectiveCommandOutput;
    };
  };
}
