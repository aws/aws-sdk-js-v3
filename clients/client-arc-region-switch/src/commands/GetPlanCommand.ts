// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPlanRequest, GetPlanResponse } from "../models/models_0";
import { de_GetPlanCommand, se_GetPlanCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlanCommand}.
 */
export interface GetPlanCommandInput extends GetPlanRequest {}
/**
 * @public
 *
 * The output of {@link GetPlanCommand}.
 */
export interface GetPlanCommandOutput extends GetPlanResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a Region switch plan. You must specify the ARN of the plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, GetPlanCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, GetPlanCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // GetPlanRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetPlanResponse
 * //   plan: { // Plan
 * //     arn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     workflows: [ // WorkflowList // required
 * //       { // Workflow
 * //         steps: [ // Steps
 * //           { // Step
 * //             name: "STRING_VALUE", // required
 * //             description: "STRING_VALUE",
 * //             executionBlockConfiguration: { // ExecutionBlockConfiguration Union: only one key present
 * //               customActionLambdaConfig: { // CustomActionLambdaConfiguration
 * //                 timeoutMinutes: Number("int"),
 * //                 lambdas: [ // LambdaList // required
 * //                   { // Lambdas
 * //                     crossAccountRole: "STRING_VALUE",
 * //                     externalId: "STRING_VALUE",
 * //                     arn: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 retryIntervalMinutes: Number("float"), // required
 * //                 regionToRun: "activatingRegion" || "deactivatingRegion", // required
 * //                 ungraceful: { // LambdaUngraceful
 * //                   behavior: "skip",
 * //                 },
 * //               },
 * //               ec2AsgCapacityIncreaseConfig: { // Ec2AsgCapacityIncreaseConfiguration
 * //                 timeoutMinutes: Number("int"),
 * //                 asgs: [ // AsgList // required
 * //                   { // Asg
 * //                     crossAccountRole: "STRING_VALUE",
 * //                     externalId: "STRING_VALUE",
 * //                     arn: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 ungraceful: { // Ec2Ungraceful
 * //                   minimumSuccessPercentage: Number("int"), // required
 * //                 },
 * //                 targetPercent: Number("int"),
 * //                 capacityMonitoringApproach: "sampledMaxInLast24Hours" || "autoscalingMaxInLast24Hours",
 * //               },
 * //               executionApprovalConfig: { // ExecutionApprovalConfiguration
 * //                 timeoutMinutes: Number("int"),
 * //                 approvalRole: "STRING_VALUE", // required
 * //               },
 * //               arcRoutingControlConfig: { // ArcRoutingControlConfiguration
 * //                 timeoutMinutes: Number("int"),
 * //                 crossAccountRole: "STRING_VALUE",
 * //                 externalId: "STRING_VALUE",
 * //                 regionAndRoutingControls: { // RegionAndRoutingControls // required
 * //                   "<keys>": [ // ArcRoutingControlStates
 * //                     { // ArcRoutingControlState
 * //                       routingControlArn: "STRING_VALUE", // required
 * //                       state: "On" || "Off", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //               globalAuroraConfig: { // GlobalAuroraConfiguration
 * //                 timeoutMinutes: Number("int"),
 * //                 crossAccountRole: "STRING_VALUE",
 * //                 externalId: "STRING_VALUE",
 * //                 behavior: "switchoverOnly" || "failover", // required
 * //                 ungraceful: { // GlobalAuroraUngraceful
 * //                   ungraceful: "failover",
 * //                 },
 * //                 globalClusterIdentifier: "STRING_VALUE", // required
 * //                 databaseClusterArns: [ // AuroraClusterArns // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               parallelConfig: { // ParallelExecutionBlockConfiguration
 * //                 steps: [ // required
 * //                   {
 * //                     name: "STRING_VALUE", // required
 * //                     description: "STRING_VALUE",
 * //                     executionBlockConfiguration: {//  Union: only one key present
 * //                       customActionLambdaConfig: {
 * //                         timeoutMinutes: Number("int"),
 * //                         lambdas: [ // required
 * //                           {
 * //                             crossAccountRole: "STRING_VALUE",
 * //                             externalId: "STRING_VALUE",
 * //                             arn: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                         retryIntervalMinutes: Number("float"), // required
 * //                         regionToRun: "activatingRegion" || "deactivatingRegion", // required
 * //                         ungraceful: {
 * //                           behavior: "skip",
 * //                         },
 * //                       },
 * //                       ec2AsgCapacityIncreaseConfig: {
 * //                         timeoutMinutes: Number("int"),
 * //                         asgs: [ // required
 * //                           {
 * //                             crossAccountRole: "STRING_VALUE",
 * //                             externalId: "STRING_VALUE",
 * //                             arn: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                         ungraceful: {
 * //                           minimumSuccessPercentage: Number("int"), // required
 * //                         },
 * //                         targetPercent: Number("int"),
 * //                         capacityMonitoringApproach: "sampledMaxInLast24Hours" || "autoscalingMaxInLast24Hours",
 * //                       },
 * //                       executionApprovalConfig: {
 * //                         timeoutMinutes: Number("int"),
 * //                         approvalRole: "STRING_VALUE", // required
 * //                       },
 * //                       arcRoutingControlConfig: {
 * //                         timeoutMinutes: Number("int"),
 * //                         crossAccountRole: "STRING_VALUE",
 * //                         externalId: "STRING_VALUE",
 * //                         regionAndRoutingControls: { // required
 * //                           "<keys>": [
 * //                             {
 * //                               routingControlArn: "STRING_VALUE", // required
 * //                               state: "On" || "Off", // required
 * //                             },
 * //                           ],
 * //                         },
 * //                       },
 * //                       globalAuroraConfig: {
 * //                         timeoutMinutes: Number("int"),
 * //                         crossAccountRole: "STRING_VALUE",
 * //                         externalId: "STRING_VALUE",
 * //                         behavior: "switchoverOnly" || "failover", // required
 * //                         ungraceful: {
 * //                           ungraceful: "failover",
 * //                         },
 * //                         globalClusterIdentifier: "STRING_VALUE", // required
 * //                         databaseClusterArns: [ // required
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                       parallelConfig: {
 * //                         steps: "<Steps>", // required
 * //                       },
 * //                       regionSwitchPlanConfig: { // RegionSwitchPlanConfiguration
 * //                         crossAccountRole: "STRING_VALUE",
 * //                         externalId: "STRING_VALUE",
 * //                         arn: "STRING_VALUE", // required
 * //                       },
 * //                       ecsCapacityIncreaseConfig: { // EcsCapacityIncreaseConfiguration
 * //                         timeoutMinutes: Number("int"),
 * //                         services: [ // ServiceList // required
 * //                           { // Service
 * //                             crossAccountRole: "STRING_VALUE",
 * //                             externalId: "STRING_VALUE",
 * //                             clusterArn: "STRING_VALUE",
 * //                             serviceArn: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                         ungraceful: { // EcsUngraceful
 * //                           minimumSuccessPercentage: Number("int"), // required
 * //                         },
 * //                         targetPercent: Number("int"),
 * //                         capacityMonitoringApproach: "sampledMaxInLast24Hours" || "containerInsightsMaxInLast24Hours",
 * //                       },
 * //                       eksResourceScalingConfig: { // EksResourceScalingConfiguration
 * //                         timeoutMinutes: Number("int"),
 * //                         kubernetesResourceType: { // KubernetesResourceType
 * //                           apiVersion: "STRING_VALUE", // required
 * //                           kind: "STRING_VALUE", // required
 * //                         },
 * //                         scalingResources: [ // KubernetesScalingApps
 * //                           { // KubernetesScalingApplication
 * //                             "<keys>": { // RegionalScalingResource
 * //                               "<keys>": { // KubernetesScalingResource
 * //                                 namespace: "STRING_VALUE", // required
 * //                                 name: "STRING_VALUE", // required
 * //                                 hpaName: "STRING_VALUE",
 * //                               },
 * //                             },
 * //                           },
 * //                         ],
 * //                         eksClusters: [ // EksClusters
 * //                           { // EksCluster
 * //                             crossAccountRole: "STRING_VALUE",
 * //                             externalId: "STRING_VALUE",
 * //                             clusterArn: "STRING_VALUE", // required
 * //                           },
 * //                         ],
 * //                         ungraceful: { // EksResourceScalingUngraceful
 * //                           minimumSuccessPercentage: Number("int"), // required
 * //                         },
 * //                         targetPercent: Number("int"),
 * //                         capacityMonitoringApproach: "sampledMaxInLast24Hours",
 * //                       },
 * //                       route53HealthCheckConfig: { // Route53HealthCheckConfiguration
 * //                         timeoutMinutes: Number("int"),
 * //                         crossAccountRole: "STRING_VALUE",
 * //                         externalId: "STRING_VALUE",
 * //                         hostedZoneId: "STRING_VALUE", // required
 * //                         recordName: "STRING_VALUE", // required
 * //                         recordSets: [ // Route53ResourceRecordSetList
 * //                           { // Route53ResourceRecordSet
 * //                             recordSetIdentifier: "STRING_VALUE",
 * //                             region: "STRING_VALUE",
 * //                           },
 * //                         ],
 * //                       },
 * //                     },
 * //                     executionBlockType: "CustomActionLambda" || "ManualApproval" || "AuroraGlobalDatabase" || "EC2AutoScaling" || "ARCRoutingControl" || "ARCRegionSwitchPlan" || "Parallel" || "ECSServiceScaling" || "EKSResourceScaling" || "Route53HealthCheck", // required
 * //                   },
 * //                 ],
 * //               },
 * //               regionSwitchPlanConfig: {
 * //                 crossAccountRole: "STRING_VALUE",
 * //                 externalId: "STRING_VALUE",
 * //                 arn: "STRING_VALUE", // required
 * //               },
 * //               ecsCapacityIncreaseConfig: {
 * //                 timeoutMinutes: Number("int"),
 * //                 services: [ // required
 * //                   {
 * //                     crossAccountRole: "STRING_VALUE",
 * //                     externalId: "STRING_VALUE",
 * //                     clusterArn: "STRING_VALUE",
 * //                     serviceArn: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 ungraceful: {
 * //                   minimumSuccessPercentage: Number("int"), // required
 * //                 },
 * //                 targetPercent: Number("int"),
 * //                 capacityMonitoringApproach: "sampledMaxInLast24Hours" || "containerInsightsMaxInLast24Hours",
 * //               },
 * //               eksResourceScalingConfig: {
 * //                 timeoutMinutes: Number("int"),
 * //                 kubernetesResourceType: {
 * //                   apiVersion: "STRING_VALUE", // required
 * //                   kind: "STRING_VALUE", // required
 * //                 },
 * //                 scalingResources: [
 * //                   {
 * //                     "<keys>": {
 * //                       "<keys>": {
 * //                         namespace: "STRING_VALUE", // required
 * //                         name: "STRING_VALUE", // required
 * //                         hpaName: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //                 eksClusters: [
 * //                   {
 * //                     crossAccountRole: "STRING_VALUE",
 * //                     externalId: "STRING_VALUE",
 * //                     clusterArn: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 ungraceful: {
 * //                   minimumSuccessPercentage: Number("int"), // required
 * //                 },
 * //                 targetPercent: Number("int"),
 * //                 capacityMonitoringApproach: "sampledMaxInLast24Hours",
 * //               },
 * //               route53HealthCheckConfig: {
 * //                 timeoutMinutes: Number("int"),
 * //                 crossAccountRole: "STRING_VALUE",
 * //                 externalId: "STRING_VALUE",
 * //                 hostedZoneId: "STRING_VALUE", // required
 * //                 recordName: "STRING_VALUE", // required
 * //                 recordSets: [
 * //                   {
 * //                     recordSetIdentifier: "STRING_VALUE",
 * //                     region: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             executionBlockType: "CustomActionLambda" || "ManualApproval" || "AuroraGlobalDatabase" || "EC2AutoScaling" || "ARCRoutingControl" || "ARCRegionSwitchPlan" || "Parallel" || "ECSServiceScaling" || "EKSResourceScaling" || "Route53HealthCheck", // required
 * //           },
 * //         ],
 * //         workflowTargetAction: "activate" || "deactivate", // required
 * //         workflowTargetRegion: "STRING_VALUE",
 * //         workflowDescription: "STRING_VALUE",
 * //       },
 * //     ],
 * //     executionRole: "STRING_VALUE", // required
 * //     recoveryTimeObjectiveMinutes: Number("int"),
 * //     associatedAlarms: { // AssociatedAlarmMap
 * //       "<keys>": { // AssociatedAlarm
 * //         crossAccountRole: "STRING_VALUE",
 * //         externalId: "STRING_VALUE",
 * //         resourceIdentifier: "STRING_VALUE", // required
 * //         alarmType: "applicationHealth" || "trigger", // required
 * //       },
 * //     },
 * //     triggers: [ // TriggerList
 * //       { // Trigger
 * //         description: "STRING_VALUE",
 * //         targetRegion: "STRING_VALUE", // required
 * //         action: "activate" || "deactivate", // required
 * //         conditions: [ // TriggerConditionList // required
 * //           { // TriggerCondition
 * //             associatedAlarmName: "STRING_VALUE", // required
 * //             condition: "red" || "green", // required
 * //           },
 * //         ],
 * //         minDelayMinutesBetweenExecutions: Number("int"), // required
 * //       },
 * //     ],
 * //     name: "STRING_VALUE", // required
 * //     regions: [ // RegionList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     recoveryApproach: "activeActive" || "activePassive", // required
 * //     primaryRegion: "STRING_VALUE",
 * //     owner: "STRING_VALUE", // required
 * //     version: "STRING_VALUE",
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlanCommandInput - {@link GetPlanCommandInput}
 * @returns {@link GetPlanCommandOutput}
 * @see {@link GetPlanCommandInput} for command's `input` shape.
 * @see {@link GetPlanCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p> <p>HTTP Status Code: 404</p>
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class GetPlanCommand extends $Command
  .classBuilder<
    GetPlanCommandInput,
    GetPlanCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseControlPlaneEndpoint: { type: "staticContextParams", value: true },
  })
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ArcRegionSwitch", "GetPlan", {})
  .n("ARCRegionSwitchClient", "GetPlanCommand")
  .f(void 0, void 0)
  .ser(se_GetPlanCommand)
  .de(de_GetPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlanRequest;
      output: GetPlanResponse;
    };
    sdk: {
      input: GetPlanCommandInput;
      output: GetPlanCommandOutput;
    };
  };
}
