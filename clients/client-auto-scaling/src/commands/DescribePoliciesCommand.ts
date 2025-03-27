// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePoliciesType, PoliciesType } from "../models/models_0";
import { de_DescribePoliciesCommand, se_DescribePoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePoliciesCommand}.
 */
export interface DescribePoliciesCommandInput extends DescribePoliciesType {}
/**
 * @public
 *
 * The output of {@link DescribePoliciesCommand}.
 */
export interface DescribePoliciesCommandOutput extends PoliciesType, __MetadataBearer {}

/**
 * <p>Gets information about the scaling policies in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribePoliciesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribePoliciesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribePoliciesType
 *   AutoScalingGroupName: "STRING_VALUE",
 *   PolicyNames: [ // PolicyNames
 *     "STRING_VALUE",
 *   ],
 *   PolicyTypes: [ // PolicyTypes
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // PoliciesType
 * //   ScalingPolicies: [ // ScalingPolicies
 * //     { // ScalingPolicy
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyARN: "STRING_VALUE",
 * //       PolicyType: "STRING_VALUE",
 * //       AdjustmentType: "STRING_VALUE",
 * //       MinAdjustmentStep: Number("int"),
 * //       MinAdjustmentMagnitude: Number("int"),
 * //       ScalingAdjustment: Number("int"),
 * //       Cooldown: Number("int"),
 * //       StepAdjustments: [ // StepAdjustments
 * //         { // StepAdjustment
 * //           MetricIntervalLowerBound: Number("double"),
 * //           MetricIntervalUpperBound: Number("double"),
 * //           ScalingAdjustment: Number("int"), // required
 * //         },
 * //       ],
 * //       MetricAggregationType: "STRING_VALUE",
 * //       EstimatedInstanceWarmup: Number("int"),
 * //       Alarms: [ // Alarms
 * //         { // Alarm
 * //           AlarmName: "STRING_VALUE",
 * //           AlarmARN: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TargetTrackingConfiguration: { // TargetTrackingConfiguration
 * //         PredefinedMetricSpecification: { // PredefinedMetricSpecification
 * //           PredefinedMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "ALBRequestCountPerTarget", // required
 * //           ResourceLabel: "STRING_VALUE",
 * //         },
 * //         CustomizedMetricSpecification: { // CustomizedMetricSpecification
 * //           MetricName: "STRING_VALUE",
 * //           Namespace: "STRING_VALUE",
 * //           Dimensions: [ // MetricDimensions
 * //             { // MetricDimension
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum",
 * //           Unit: "STRING_VALUE",
 * //           Period: Number("int"),
 * //           Metrics: [ // TargetTrackingMetricDataQueries
 * //             { // TargetTrackingMetricDataQuery
 * //               Id: "STRING_VALUE", // required
 * //               Expression: "STRING_VALUE",
 * //               MetricStat: { // TargetTrackingMetricStat
 * //                 Metric: { // Metric
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
 * //                 Period: Number("int"),
 * //               },
 * //               Label: "STRING_VALUE",
 * //               Period: Number("int"),
 * //               ReturnData: true || false,
 * //             },
 * //           ],
 * //         },
 * //         TargetValue: Number("double"), // required
 * //         DisableScaleIn: true || false,
 * //       },
 * //       Enabled: true || false,
 * //       PredictiveScalingConfiguration: { // PredictiveScalingConfiguration
 * //         MetricSpecifications: [ // PredictiveScalingMetricSpecifications // required
 * //           { // PredictiveScalingMetricSpecification
 * //             TargetValue: Number("double"), // required
 * //             PredefinedMetricPairSpecification: { // PredictiveScalingPredefinedMetricPair
 * //               PredefinedMetricType: "ASGCPUUtilization" || "ASGNetworkIn" || "ASGNetworkOut" || "ALBRequestCount", // required
 * //               ResourceLabel: "STRING_VALUE",
 * //             },
 * //             PredefinedScalingMetricSpecification: { // PredictiveScalingPredefinedScalingMetric
 * //               PredefinedMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "ALBRequestCountPerTarget", // required
 * //               ResourceLabel: "STRING_VALUE",
 * //             },
 * //             PredefinedLoadMetricSpecification: { // PredictiveScalingPredefinedLoadMetric
 * //               PredefinedMetricType: "ASGTotalCPUUtilization" || "ASGTotalNetworkIn" || "ASGTotalNetworkOut" || "ALBTargetGroupRequestCount", // required
 * //               ResourceLabel: "STRING_VALUE",
 * //             },
 * //             CustomizedScalingMetricSpecification: { // PredictiveScalingCustomizedScalingMetric
 * //               MetricDataQueries: [ // MetricDataQueries // required
 * //                 { // MetricDataQuery
 * //                   Id: "STRING_VALUE", // required
 * //                   Expression: "STRING_VALUE",
 * //                   MetricStat: { // MetricStat
 * //                     Metric: {
 * //                       Namespace: "STRING_VALUE", // required
 * //                       MetricName: "STRING_VALUE", // required
 * //                       Dimensions: "<MetricDimensions>",
 * //                     },
 * //                     Stat: "STRING_VALUE", // required
 * //                     Unit: "STRING_VALUE",
 * //                   },
 * //                   Label: "STRING_VALUE",
 * //                   ReturnData: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             CustomizedLoadMetricSpecification: { // PredictiveScalingCustomizedLoadMetric
 * //               MetricDataQueries: [ // required
 * //                 {
 * //                   Id: "STRING_VALUE", // required
 * //                   Expression: "STRING_VALUE",
 * //                   MetricStat: {
 * //                     Metric: {
 * //                       Namespace: "STRING_VALUE", // required
 * //                       MetricName: "STRING_VALUE", // required
 * //                       Dimensions: "<MetricDimensions>",
 * //                     },
 * //                     Stat: "STRING_VALUE", // required
 * //                     Unit: "STRING_VALUE",
 * //                   },
 * //                   Label: "STRING_VALUE",
 * //                   ReturnData: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             CustomizedCapacityMetricSpecification: { // PredictiveScalingCustomizedCapacityMetric
 * //               MetricDataQueries: [ // required
 * //                 {
 * //                   Id: "STRING_VALUE", // required
 * //                   Expression: "STRING_VALUE",
 * //                   MetricStat: {
 * //                     Metric: {
 * //                       Namespace: "STRING_VALUE", // required
 * //                       MetricName: "STRING_VALUE", // required
 * //                       Dimensions: "<MetricDimensions>",
 * //                     },
 * //                     Stat: "STRING_VALUE", // required
 * //                     Unit: "STRING_VALUE",
 * //                   },
 * //                   Label: "STRING_VALUE",
 * //                   ReturnData: true || false,
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         Mode: "ForecastAndScale" || "ForecastOnly",
 * //         SchedulingBufferTime: Number("int"),
 * //         MaxCapacityBreachBehavior: "HonorMaxCapacity" || "IncreaseMaxCapacity",
 * //         MaxCapacityBuffer: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePoliciesCommandInput - {@link DescribePoliciesCommandInput}
 * @returns {@link DescribePoliciesCommandOutput}
 * @see {@link DescribePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribePoliciesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To describe scaling policies
 * ```javascript
 * // This example describes the policies for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DescribePoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScalingPolicies: [
 *     {
 *       AdjustmentType: "ChangeInCapacity",
 *       Alarms:       [],
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       PolicyARN: "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:2233f3d7-6290-403b-b632-93c553560106:autoScalingGroupName/my-auto-scaling-group:policyName/ScaleIn",
 *       PolicyName: "ScaleIn",
 *       ScalingAdjustment: -1
 *     },
 *     {
 *       AdjustmentType: "PercentChangeInCapacity",
 *       Alarms:       [],
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       Cooldown: 60,
 *       MinAdjustmentStep: 2,
 *       PolicyARN: "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:2b435159-cf77-4e89-8c0e-d63b497baad7:autoScalingGroupName/my-auto-scaling-group:policyName/ScalePercentChange",
 *       PolicyName: "ScalePercentChange",
 *       ScalingAdjustment: 25
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribePoliciesCommand extends $Command
  .classBuilder<
    DescribePoliciesCommandInput,
    DescribePoliciesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribePolicies", {})
  .n("AutoScalingClient", "DescribePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribePoliciesCommand)
  .de(de_DescribePoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePoliciesType;
      output: PoliciesType;
    };
    sdk: {
      input: DescribePoliciesCommandInput;
      output: DescribePoliciesCommandOutput;
    };
  };
}
