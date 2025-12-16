// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AutoScalingPlansClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AutoScalingPlansClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateScalingPlanRequest, UpdateScalingPlanResponse } from "../models/models_0";
import { UpdateScalingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScalingPlanCommand}.
 */
export interface UpdateScalingPlanCommandInput extends UpdateScalingPlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScalingPlanCommand}.
 */
export interface UpdateScalingPlanCommandOutput extends UpdateScalingPlanResponse, __MetadataBearer {}

/**
 * <p>Updates the specified scaling plan.</p>
 *          <p>You cannot update a scaling plan if it is in the process of being created, updated, or
 *          deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, UpdateScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, UpdateScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * // import type { AutoScalingPlansClientConfig } from "@aws-sdk/client-auto-scaling-plans";
 * const config = {}; // type is AutoScalingPlansClientConfig
 * const client = new AutoScalingPlansClient(config);
 * const input = { // UpdateScalingPlanRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 *   ApplicationSource: { // ApplicationSource
 *     CloudFormationStackARN: "STRING_VALUE",
 *     TagFilters: [ // TagFilters
 *       { // TagFilter
 *         Key: "STRING_VALUE",
 *         Values: [ // TagValues
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ScalingInstructions: [ // ScalingInstructions
 *     { // ScalingInstruction
 *       ServiceNamespace: "autoscaling" || "ecs" || "ec2" || "rds" || "dynamodb", // required
 *       ResourceId: "STRING_VALUE", // required
 *       ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity" || "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "rds:cluster:ReadReplicaCount" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits", // required
 *       MinCapacity: Number("int"), // required
 *       MaxCapacity: Number("int"), // required
 *       TargetTrackingConfigurations: [ // TargetTrackingConfigurations // required
 *         { // TargetTrackingConfiguration
 *           PredefinedScalingMetricSpecification: { // PredefinedScalingMetricSpecification
 *             PredefinedScalingMetricType: "ASGAverageCPUUtilization" || "ASGAverageNetworkIn" || "ASGAverageNetworkOut" || "DynamoDBReadCapacityUtilization" || "DynamoDBWriteCapacityUtilization" || "ECSServiceAverageCPUUtilization" || "ECSServiceAverageMemoryUtilization" || "ALBRequestCountPerTarget" || "RDSReaderAverageCPUUtilization" || "RDSReaderAverageDatabaseConnections" || "EC2SpotFleetRequestAverageCPUUtilization" || "EC2SpotFleetRequestAverageNetworkIn" || "EC2SpotFleetRequestAverageNetworkOut", // required
 *             ResourceLabel: "STRING_VALUE",
 *           },
 *           CustomizedScalingMetricSpecification: { // CustomizedScalingMetricSpecification
 *             MetricName: "STRING_VALUE", // required
 *             Namespace: "STRING_VALUE", // required
 *             Dimensions: [ // MetricDimensions
 *               { // MetricDimension
 *                 Name: "STRING_VALUE", // required
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *             Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 *             Unit: "STRING_VALUE",
 *           },
 *           TargetValue: Number("double"), // required
 *           DisableScaleIn: true || false,
 *           ScaleOutCooldown: Number("int"),
 *           ScaleInCooldown: Number("int"),
 *           EstimatedInstanceWarmup: Number("int"),
 *         },
 *       ],
 *       PredefinedLoadMetricSpecification: { // PredefinedLoadMetricSpecification
 *         PredefinedLoadMetricType: "ASGTotalCPUUtilization" || "ASGTotalNetworkIn" || "ASGTotalNetworkOut" || "ALBTargetGroupRequestCount", // required
 *         ResourceLabel: "STRING_VALUE",
 *       },
 *       CustomizedLoadMetricSpecification: { // CustomizedLoadMetricSpecification
 *         MetricName: "STRING_VALUE", // required
 *         Namespace: "STRING_VALUE", // required
 *         Dimensions: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         Statistic: "Average" || "Minimum" || "Maximum" || "SampleCount" || "Sum", // required
 *         Unit: "STRING_VALUE",
 *       },
 *       ScheduledActionBufferTime: Number("int"),
 *       PredictiveScalingMaxCapacityBehavior: "SetForecastCapacityToMaxCapacity" || "SetMaxCapacityToForecastCapacity" || "SetMaxCapacityAboveForecastCapacity",
 *       PredictiveScalingMaxCapacityBuffer: Number("int"),
 *       PredictiveScalingMode: "ForecastAndScale" || "ForecastOnly",
 *       ScalingPolicyUpdateBehavior: "KeepExternalPolicies" || "ReplaceExternalPolicies",
 *       DisableDynamicScaling: true || false,
 *     },
 *   ],
 * };
 * const command = new UpdateScalingPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateScalingPlanCommandInput - {@link UpdateScalingPlanCommandInput}
 * @returns {@link UpdateScalingPlanCommandOutput}
 * @see {@link UpdateScalingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link ConcurrentUpdateException} (server fault)
 *  <p>Concurrent updates caused an exception, for example, if you request an update to a
 *          scaling plan that already has a pending update.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *  <p>The specified object could not be found.</p>
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
export class UpdateScalingPlanCommand extends $Command
  .classBuilder<
    UpdateScalingPlanCommandInput,
    UpdateScalingPlanCommandOutput,
    AutoScalingPlansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingPlansClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AnyScaleScalingPlannerFrontendService", "UpdateScalingPlan", {})
  .n("AutoScalingPlansClient", "UpdateScalingPlanCommand")
  .sc(UpdateScalingPlan$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScalingPlanRequest;
      output: {};
    };
    sdk: {
      input: UpdateScalingPlanCommandInput;
      output: UpdateScalingPlanCommandOutput;
    };
  };
}
