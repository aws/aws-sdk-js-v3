// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPredictiveScalingForecastAnswer, GetPredictiveScalingForecastType } from "../models/models_0";
import { de_GetPredictiveScalingForecastCommand, se_GetPredictiveScalingForecastCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPredictiveScalingForecastCommand}.
 */
export interface GetPredictiveScalingForecastCommandInput extends GetPredictiveScalingForecastType {}
/**
 * @public
 *
 * The output of {@link GetPredictiveScalingForecastCommand}.
 */
export interface GetPredictiveScalingForecastCommandOutput
  extends GetPredictiveScalingForecastAnswer,
    __MetadataBearer {}

/**
 * <p>Retrieves the forecast data for a predictive scaling policy.</p>
 *          <p>Load forecasts are predictions of the hourly load values using historical load data
 *             from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as
 *             predicted values for the minimum capacity that is needed on an hourly basis, based on
 *             the hourly load forecast.</p>
 *          <p>A minimum of 24 hours of data is required to create the initial forecasts. However,
 *             having a full 14 days of historical data results in more accurate forecasts.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive
 *                 scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, GetPredictiveScalingForecastCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, GetPredictiveScalingForecastCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // GetPredictiveScalingForecastType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetPredictiveScalingForecastCommand(input);
 * const response = await client.send(command);
 * // { // GetPredictiveScalingForecastAnswer
 * //   LoadForecast: [ // LoadForecasts // required
 * //     { // LoadForecast
 * //       Timestamps: [ // PredictiveScalingForecastTimestamps // required
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       Values: [ // PredictiveScalingForecastValues // required
 * //         Number("double"),
 * //       ],
 * //       MetricSpecification: { // PredictiveScalingMetricSpecification
 * //         TargetValue: Number("double"), // required
 * //         PredefinedMetricPairSpecification: { // PredictiveScalingPredefinedMetricPair
 * //           PredefinedMetricType: "ASGCPUUtilization" || "ASGNetworkIn" || "ASGNetworkOut" || "ALBRequestCount", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         PredefinedScalingMetricSpecification: { // PredictiveScalingPredefinedScalingMetric
 * //           PredefinedMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "ALBRequestCountPerTarget", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         PredefinedLoadMetricSpecification: { // PredictiveScalingPredefinedLoadMetric
 * //           PredefinedMetricType: "ASGTotalCPUUtilization" || "ASGTotalNetworkIn" || "ASGTotalNetworkOut" || "ALBTargetGroupRequestCount", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         CustomizedScalingMetricSpecification: { // PredictiveScalingCustomizedScalingMetric
 * //           MetricDataQueries: [ // MetricDataQueries // required
 * //             { // MetricDataQuery
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: { // MetricStat
 * //                 Metric: { // Metric
 * //                   Namespace: "STRING_VALUE", // required
 * //                   MetricName: "STRING_VALUE", // required
 * //                   Dimensions: [ // MetricDimensions
 * //                     { // MetricDimension
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //         CustomizedLoadMetricSpecification: { // PredictiveScalingCustomizedLoadMetric
 * //           MetricDataQueries: [ // required
 * //             {
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: {
 * //                 Metric: {
 * //                   Namespace: "STRING_VALUE", // required
 * //                   MetricName: "STRING_VALUE", // required
 * //                   Dimensions: [
 * //                     {
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //         CustomizedCapacityMetricSpecification: { // PredictiveScalingCustomizedCapacityMetric
 * //           MetricDataQueries: [ // required
 * //             {
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: {
 * //                 Metric: {
 * //                   Namespace: "STRING_VALUE", // required
 * //                   MetricName: "STRING_VALUE", // required
 * //                   Dimensions: [
 * //                     {
 * //                       Name: "STRING_VALUE", // required
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 Stat: "STRING_VALUE", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               Label: "STRING_VALUE",
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   CapacityForecast: { // CapacityForecast
 * //     Timestamps: [ // required
 * //       new Date("TIMESTAMP"),
 * //     ],
 * //     Values: [ // required
 * //       Number("double"),
 * //     ],
 * //   },
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetPredictiveScalingForecastCommandInput - {@link GetPredictiveScalingForecastCommandInput}
 * @returns {@link GetPredictiveScalingForecastCommandOutput}
 * @see {@link GetPredictiveScalingForecastCommandInput} for command's `input` shape.
 * @see {@link GetPredictiveScalingForecastCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @public
 */
export class GetPredictiveScalingForecastCommand extends $Command
  .classBuilder<
    GetPredictiveScalingForecastCommandInput,
    GetPredictiveScalingForecastCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "GetPredictiveScalingForecast", {})
  .n("AutoScalingClient", "GetPredictiveScalingForecastCommand")
  .f(void 0, void 0)
  .ser(se_GetPredictiveScalingForecastCommand)
  .de(de_GetPredictiveScalingForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPredictiveScalingForecastType;
      output: GetPredictiveScalingForecastAnswer;
    };
    sdk: {
      input: GetPredictiveScalingForecastCommandInput;
      output: GetPredictiveScalingForecastCommandOutput;
    };
  };
}
