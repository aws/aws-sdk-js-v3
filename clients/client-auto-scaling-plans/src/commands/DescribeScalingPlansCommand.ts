// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScalingPlansRequest, DescribeScalingPlansResponse } from "../models/models_0";
import { DescribeScalingPlans } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingPlansCommand}.
 */
export interface DescribeScalingPlansCommandInput extends DescribeScalingPlansRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingPlansCommand}.
 */
export interface DescribeScalingPlansCommandOutput extends DescribeScalingPlansResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your scaling plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DescribeScalingPlansCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DescribeScalingPlansCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * // import type { AutoScalingPlansClientConfig } from "@aws-sdk/client-auto-scaling-plans";
 * const config = {}; // type is AutoScalingPlansClientConfig
 * const client = new AutoScalingPlansClient(config);
 * const input = { // DescribeScalingPlansRequest
 *   ScalingPlanNames: [ // ScalingPlanNames
 *     "STRING_VALUE",
 *   ],
 *   ScalingPlanVersion: Number("long"),
 *   ApplicationSources: [ // ApplicationSources
 *     { // ApplicationSource
 *       CloudFormationStackARN: "STRING_VALUE",
 *       TagFilters: [ // TagFilters
 *         { // TagFilter
 *           Key: "STRING_VALUE",
 *           Values: [ // TagValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScalingPlansCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingPlansResponse
 * //   ScalingPlans: [ // ScalingPlans
 * //     { // ScalingPlan
 * //       ScalingPlanName: "STRING_VALUE", // required
 * //       ScalingPlanVersion: Number("long"), // required
 * //       ApplicationSource: { // ApplicationSource
 * //         CloudFormationStackARN: "STRING_VALUE",
 * //         TagFilters: [ // TagFilters
 * //           { // TagFilter
 * //             Key: "STRING_VALUE",
 * //             Values: [ // TagValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ScalingInstructions: [ // ScalingInstructions // required
 * //         { // ScalingInstruction
 * //           ServiceNamespace: "autoscaling" || "ecs" || "ec2" || "rds" || "dynamodb", // required
 * //           ResourceId: "STRING_VALUE", // required
 * //           ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity" || "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "rds:cluster:ReadReplicaCount" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits", // required
 * //           MinCapacity: Number("int"), // required
 * //           MaxCapacity: Number("int"), // required
 * //           TargetTrackingConfigurations: [ // TargetTrackingConfigurations // required
 * //             { // TargetTrackingConfiguration
 * //               PredefinedScalingMetricSpecification: { // PredefinedScalingMetricSpecification
 * //                 PredefinedScalingMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "DynamoDBReadCapacityUtilization" || "DynamoDBWriteCapacityUtilization" || "ECSServiceAverageCPUUtilization" || "ECSServiceAverageMemoryUtilization" || "ALBRequestCountPerTarget" || "RDSReaderAverageCPUUtilization" || "RDSReaderAverageDatabaseConnections" || "EC2SpotFleetRequestAverageCPUUtilization" || "EC2SpotFleetRequestAverageNetworkIn" || "EC2SpotFleetRequestAverageNetworkOut", // required
 * //                 ResourceLabel: "STRING_VALUE",
 * //               },
 * //               CustomizedScalingMetricSpecification: { // CustomizedScalingMetricSpecification
 * //                 MetricName: "STRING_VALUE", // required
 * //                 Namespace: "STRING_VALUE", // required
 * //                 Dimensions: [ // MetricDimensions
 * //                   { // MetricDimension
 * //                     Name: "STRING_VALUE", // required
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //               TargetValue: Number("double"), // required
 * //               DisableScaleIn: true || false,
 * //               ScaleOutCooldown: Number("int"),
 * //               ScaleInCooldown: Number("int"),
 * //               EstimatedInstanceWarmup: Number("int"),
 * //             },
 * //           ],
 * //           PredefinedLoadMetricSpecification: { // PredefinedLoadMetricSpecification
 * //             PredefinedLoadMetricType: "ASGTotalCPUUtilization" || "ASGTotalNetworkIn" || "ASGTotalNetworkOut" || "ALBTargetGroupRequestCount", // required
 * //             ResourceLabel: "STRING_VALUE",
 * //           },
 * //           CustomizedLoadMetricSpecification: { // CustomizedLoadMetricSpecification
 * //             MetricName: "STRING_VALUE", // required
 * //             Namespace: "STRING_VALUE", // required
 * //             Dimensions: [
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 * //             Unit: "STRING_VALUE",
 * //           },
 * //           ScheduledActionBufferTime: Number("int"),
 * //           PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity" || "SetMaxCapacityToForecastCapacity" || "SetMaxCapacityAboveForecastCapacity",
 * //           PredictiveScalingMaxCapacityBuffer: Number("int"),
 * //           PredictiveScalingMode: "ForecastAndScale" || "ForecastOnly",
 * //           ScalingPolicyUpdateBehavior: "KeepExternalPolicies" || "ReplaceExternalPolicies",
 * //           DisableDynamicScaling: true || false,
 * //         },
 * //       ],
 * //       StatusCode: "Active" || "ActiveWithProblems" || "CreationInProgress" || "CreationFailed" || "DeletionInProgress" || "DeletionFailed" || "UpdateInProgress" || "UpdateFailed", // required
 * //       StatusMessage: "STRING_VALUE",
 * //       StatusStartTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingPlansCommandInput - {@link DescribeScalingPlansCommandInput}
 * @returns {@link DescribeScalingPlansCommandOutput}
 * @see {@link DescribeScalingPlansCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPlansCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token provided is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
 *
 *
 * @public
 */
export class DescribeScalingPlansCommand extends $Command
  .classBuilder<
    DescribeScalingPlansCommandInput,
    DescribeScalingPlansCommandOutput,
    AutoScalingPlansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingPlansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AnyScaleScalingPlannerFrontendService", "DescribeScalingPlans", {})
  .n("AutoScalingPlansClient", "DescribeScalingPlansCommand")
  .sc(DescribeScalingPlans)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalingPlansRequest;
      output: DescribeScalingPlansResponse;
    };
    sdk: {
      input: DescribeScalingPlansCommandInput;
      output: DescribeScalingPlansCommandOutput;
    };
  };
}
