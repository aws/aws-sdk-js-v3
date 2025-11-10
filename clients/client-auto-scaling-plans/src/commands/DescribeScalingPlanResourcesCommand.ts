// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse } from "../models/models_0";
import { DescribeScalingPlanResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingPlanResourcesCommand}.
 */
export interface DescribeScalingPlanResourcesCommandInput extends DescribeScalingPlanResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingPlanResourcesCommand}.
 */
export interface DescribeScalingPlanResourcesCommandOutput
  extends DescribeScalingPlanResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the scalable resources in the specified scaling plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * // import type { AutoScalingPlansClientConfig } from "@aws-sdk/client-auto-scaling-plans";
 * const config = {}; // type is AutoScalingPlansClientConfig
 * const client = new AutoScalingPlansClient(config);
 * const input = { // DescribeScalingPlanResourcesRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeScalingPlanResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingPlanResourcesResponse
 * //   ScalingPlanResources: [ // ScalingPlanResources
 * //     { // ScalingPlanResource
 * //       ScalingPlanName: "STRING_VALUE", // required
 * //       ScalingPlanVersion: Number("long"), // required
 * //       ServiceNamespace: "autoscaling" || "ecs" || "ec2" || "rds" || "dynamodb", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity" || "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "rds:cluster:ReadReplicaCount" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits", // required
 * //       ScalingPolicies: [ // ScalingPolicies
 * //         { // ScalingPolicy
 * //           PolicyName: "STRING_VALUE", // required
 * //           PolicyType: "TargetTrackingScaling", // required
 * //           TargetTrackingConfiguration: { // TargetTrackingConfiguration
 * //             PredefinedScalingMetricSpecification: { // PredefinedScalingMetricSpecification
 * //               PredefinedScalingMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "DynamoDBReadCapacityUtilization" || "DynamoDBWriteCapacityUtilization" || "ECSServiceAverageCPUUtilization" || "ECSServiceAverageMemoryUtilization" || "ALBRequestCountPerTarget" || "RDSReaderAverageCPUUtilization" || "RDSReaderAverageDatabaseConnections" || "EC2SpotFleetRequestAverageCPUUtilization" || "EC2SpotFleetRequestAverageNetworkIn" || "EC2SpotFleetRequestAverageNetworkOut", // required
 * //               ResourceLabel: "STRING_VALUE",
 * //             },
 * //             CustomizedScalingMetricSpecification: { // CustomizedScalingMetricSpecification
 * //               MetricName: "STRING_VALUE", // required
 * //               Namespace: "STRING_VALUE", // required
 * //               Dimensions: [ // MetricDimensions
 * //                 { // MetricDimension
 * //                   Name: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 * //               Unit: "STRING_VALUE",
 * //             },
 * //             TargetValue: Number("double"), // required
 * //             DisableScaleIn: true || false,
 * //             ScaleOutCooldown: Number("int"),
 * //             ScaleInCooldown: Number("int"),
 * //             EstimatedInstanceWarmup: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       ScalingStatusCode: "Inactive" || "PartiallyActive" || "Active", // required
 * //       ScalingStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingPlanResourcesCommandInput - {@link DescribeScalingPlanResourcesCommandInput}
 * @returns {@link DescribeScalingPlanResourcesCommandOutput}
 * @see {@link DescribeScalingPlanResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPlanResourcesCommandOutput} for command's `response` shape.
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
export class DescribeScalingPlanResourcesCommand extends $Command
  .classBuilder<
    DescribeScalingPlanResourcesCommandInput,
    DescribeScalingPlanResourcesCommandOutput,
    AutoScalingPlansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingPlansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AnyScaleScalingPlannerFrontendService", "DescribeScalingPlanResources", {})
  .n("AutoScalingPlansClient", "DescribeScalingPlanResourcesCommand")
  .sc(DescribeScalingPlanResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalingPlanResourcesRequest;
      output: DescribeScalingPlanResourcesResponse;
    };
    sdk: {
      input: DescribeScalingPlanResourcesCommandInput;
      output: DescribeScalingPlanResourcesCommandOutput;
    };
  };
}
