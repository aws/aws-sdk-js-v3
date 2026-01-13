// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AutoScalingGroupNamesType, AutoScalingGroupsType } from "../models/models_0";
import { DescribeAutoScalingGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoScalingGroupsCommand}.
 */
export interface DescribeAutoScalingGroupsCommandInput extends AutoScalingGroupNamesType {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingGroupsCommand}.
 */
export interface DescribeAutoScalingGroupsCommandOutput extends AutoScalingGroupsType, __MetadataBearer {}

/**
 * <p>Gets information about the Auto Scaling groups in the account and Region.</p>
 *          <p>If you specify Auto Scaling group names, the output includes information for only the
 *             specified Auto Scaling groups. If you specify filters, the output includes information for only
 *             those Auto Scaling groups that meet the filter criteria. If you do not specify group names or
 *             filters, the output includes information for all Auto Scaling groups. </p>
 *          <p>This operation also returns information about instances in Auto Scaling groups. To retrieve
 *             information about the instances in a warm pool, you must call the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeWarmPool.html">DescribeWarmPool</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // AutoScalingGroupNamesType
 *   AutoScalingGroupNames: [ // AutoScalingGroupNames
 *     "STRING_VALUE",
 *   ],
 *   IncludeInstances: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // Values
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeAutoScalingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // AutoScalingGroupsType
 * //   AutoScalingGroups: [ // AutoScalingGroups // required
 * //     { // AutoScalingGroup
 * //       AutoScalingGroupName: "STRING_VALUE", // required
 * //       AutoScalingGroupARN: "STRING_VALUE",
 * //       LaunchConfigurationName: "STRING_VALUE",
 * //       LaunchTemplate: { // LaunchTemplateSpecification
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       MixedInstancesPolicy: { // MixedInstancesPolicy
 * //         LaunchTemplate: { // LaunchTemplate
 * //           LaunchTemplateSpecification: {
 * //             LaunchTemplateId: "STRING_VALUE",
 * //             LaunchTemplateName: "STRING_VALUE",
 * //             Version: "STRING_VALUE",
 * //           },
 * //           Overrides: [ // Overrides
 * //             { // LaunchTemplateOverrides
 * //               InstanceType: "STRING_VALUE",
 * //               WeightedCapacity: "STRING_VALUE",
 * //               LaunchTemplateSpecification: "<LaunchTemplateSpecification>",
 * //               InstanceRequirements: { // InstanceRequirements
 * //                 VCpuCount: { // VCpuCountRequest
 * //                   Min: Number("int"), // required
 * //                   Max: Number("int"),
 * //                 },
 * //                 MemoryMiB: { // MemoryMiBRequest
 * //                   Min: Number("int"), // required
 * //                   Max: Number("int"),
 * //                 },
 * //                 CpuManufacturers: [ // CpuManufacturers
 * //                   "intel" || "amd" || "amazon-web-services" || "apple",
 * //                 ],
 * //                 MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 * //                   Min: Number("double"),
 * //                   Max: Number("double"),
 * //                 },
 * //                 ExcludedInstanceTypes: [ // ExcludedInstanceTypes
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 InstanceGenerations: [ // InstanceGenerations
 * //                   "current" || "previous",
 * //                 ],
 * //                 SpotMaxPricePercentageOverLowestPrice: Number("int"),
 * //                 MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 * //                 OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 * //                 BareMetal: "included" || "excluded" || "required",
 * //                 BurstablePerformance: "included" || "excluded" || "required",
 * //                 RequireHibernateSupport: true || false,
 * //                 NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 * //                   Min: Number("int"),
 * //                   Max: Number("int"),
 * //                 },
 * //                 LocalStorage: "included" || "excluded" || "required",
 * //                 LocalStorageTypes: [ // LocalStorageTypes
 * //                   "hdd" || "ssd",
 * //                 ],
 * //                 TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 * //                   Min: Number("double"),
 * //                   Max: Number("double"),
 * //                 },
 * //                 BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 * //                   Min: Number("int"),
 * //                   Max: Number("int"),
 * //                 },
 * //                 AcceleratorTypes: [ // AcceleratorTypes
 * //                   "gpu" || "fpga" || "inference",
 * //                 ],
 * //                 AcceleratorCount: { // AcceleratorCountRequest
 * //                   Min: Number("int"),
 * //                   Max: Number("int"),
 * //                 },
 * //                 AcceleratorManufacturers: [ // AcceleratorManufacturers
 * //                   "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 * //                 ],
 * //                 AcceleratorNames: [ // AcceleratorNames
 * //                   "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p",
 * //                 ],
 * //                 AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 * //                   Min: Number("int"),
 * //                   Max: Number("int"),
 * //                 },
 * //                 NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 * //                   Min: Number("double"),
 * //                   Max: Number("double"),
 * //                 },
 * //                 AllowedInstanceTypes: [ // AllowedInstanceTypes
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BaselinePerformanceFactors: { // BaselinePerformanceFactorsRequest
 * //                   Cpu: { // CpuPerformanceFactorRequest
 * //                     References: [ // PerformanceFactorReferenceSetRequest
 * //                       { // PerformanceFactorReferenceRequest
 * //                         InstanceFamily: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 },
 * //               },
 * //               ImageId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         InstancesDistribution: { // InstancesDistribution
 * //           OnDemandAllocationStrategy: "STRING_VALUE",
 * //           OnDemandBaseCapacity: Number("int"),
 * //           OnDemandPercentageAboveBaseCapacity: Number("int"),
 * //           SpotAllocationStrategy: "STRING_VALUE",
 * //           SpotInstancePools: Number("int"),
 * //           SpotMaxPrice: "STRING_VALUE",
 * //         },
 * //       },
 * //       MinSize: Number("int"), // required
 * //       MaxSize: Number("int"), // required
 * //       DesiredCapacity: Number("int"), // required
 * //       PredictedCapacity: Number("int"),
 * //       DefaultCooldown: Number("int"), // required
 * //       AvailabilityZones: [ // AvailabilityZones // required
 * //         "STRING_VALUE",
 * //       ],
 * //       LoadBalancerNames: [ // LoadBalancerNames
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetGroupARNs: [ // TargetGroupARNs
 * //         "STRING_VALUE",
 * //       ],
 * //       HealthCheckType: "STRING_VALUE", // required
 * //       HealthCheckGracePeriod: Number("int"),
 * //       Instances: [ // Instances
 * //         { // Instance
 * //           InstanceId: "STRING_VALUE", // required
 * //           InstanceType: "STRING_VALUE",
 * //           AvailabilityZone: "STRING_VALUE", // required
 * //           LifecycleState: "Pending" || "Pending:Wait" || "Pending:Proceed" || "Quarantined" || "InService" || "Terminating" || "Terminating:Wait" || "Terminating:Proceed" || "Terminated" || "Detaching" || "Detached" || "EnteringStandby" || "Standby" || "Warmed:Pending" || "Warmed:Pending:Wait" || "Warmed:Pending:Proceed" || "Warmed:Terminating" || "Warmed:Terminating:Wait" || "Warmed:Terminating:Proceed" || "Warmed:Terminated" || "Warmed:Stopped" || "Warmed:Running" || "Warmed:Hibernated", // required
 * //           HealthStatus: "STRING_VALUE", // required
 * //           LaunchConfigurationName: "STRING_VALUE",
 * //           LaunchTemplate: "<LaunchTemplateSpecification>",
 * //           ImageId: "STRING_VALUE",
 * //           ProtectedFromScaleIn: true || false, // required
 * //           WeightedCapacity: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       SuspendedProcesses: [ // SuspendedProcesses
 * //         { // SuspendedProcess
 * //           ProcessName: "STRING_VALUE",
 * //           SuspensionReason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PlacementGroup: "STRING_VALUE",
 * //       VPCZoneIdentifier: "STRING_VALUE",
 * //       EnabledMetrics: [ // EnabledMetrics
 * //         { // EnabledMetric
 * //           Metric: "STRING_VALUE",
 * //           Granularity: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       Tags: [ // TagDescriptionList
 * //         { // TagDescription
 * //           ResourceId: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           PropagateAtLaunch: true || false,
 * //         },
 * //       ],
 * //       TerminationPolicies: [ // TerminationPolicies
 * //         "STRING_VALUE",
 * //       ],
 * //       NewInstancesProtectedFromScaleIn: true || false,
 * //       ServiceLinkedRoleARN: "STRING_VALUE",
 * //       MaxInstanceLifetime: Number("int"),
 * //       CapacityRebalance: true || false,
 * //       WarmPoolConfiguration: { // WarmPoolConfiguration
 * //         MaxGroupPreparedCapacity: Number("int"),
 * //         MinSize: Number("int"),
 * //         PoolState: "Stopped" || "Running" || "Hibernated",
 * //         Status: "PendingDelete",
 * //         InstanceReusePolicy: { // InstanceReusePolicy
 * //           ReuseOnScaleIn: true || false,
 * //         },
 * //       },
 * //       WarmPoolSize: Number("int"),
 * //       Context: "STRING_VALUE",
 * //       DesiredCapacityType: "STRING_VALUE",
 * //       DefaultInstanceWarmup: Number("int"),
 * //       TrafficSources: [ // TrafficSources
 * //         { // TrafficSourceIdentifier
 * //           Identifier: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InstanceMaintenancePolicy: { // InstanceMaintenancePolicy
 * //         MinHealthyPercentage: Number("int"),
 * //         MaxHealthyPercentage: Number("int"),
 * //       },
 * //       AvailabilityZoneDistribution: { // AvailabilityZoneDistribution
 * //         CapacityDistributionStrategy: "balanced-only" || "balanced-best-effort",
 * //       },
 * //       AvailabilityZoneImpairmentPolicy: { // AvailabilityZoneImpairmentPolicy
 * //         ZonalShiftEnabled: true || false,
 * //         ImpairedZoneHealthCheckBehavior: "ReplaceUnhealthy" || "IgnoreUnhealthy",
 * //       },
 * //       CapacityReservationSpecification: { // CapacityReservationSpecification
 * //         CapacityReservationPreference: "capacity-reservations-only" || "capacity-reservations-first" || "none" || "default",
 * //         CapacityReservationTarget: { // CapacityReservationTarget
 * //           CapacityReservationIds: [ // CapacityReservationIds
 * //             "STRING_VALUE",
 * //           ],
 * //           CapacityReservationResourceGroupArns: [ // CapacityReservationResourceGroupArns
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       InstanceLifecyclePolicy: { // InstanceLifecyclePolicy
 * //         RetentionTriggers: { // RetentionTriggers
 * //           TerminateHookAbandon: "retain" || "terminate",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutoScalingGroupsCommandInput - {@link DescribeAutoScalingGroupsCommandInput}
 * @returns {@link DescribeAutoScalingGroupsCommandOutput}
 * @see {@link DescribeAutoScalingGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To describe an Auto Scaling group
 * ```javascript
 * // This example describes the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupNames: [
 *     "my-auto-scaling-group"
 *   ]
 * };
 * const command = new DescribeAutoScalingGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AutoScalingGroups: [
 *     {
 *       AutoScalingGroupARN: "arn:aws:autoscaling:us-west-1:123456789012:autoScalingGroup:12345678-1234-1234-1234-123456789012:autoScalingGroupName/my-auto-scaling-group",
 *       AutoScalingGroupName: "my-auto-scaling-group",
 *       AvailabilityZones: [
 *         "us-west-2a",
 *         "us-west-2b",
 *         "us-west-2c"
 *       ],
 *       CreatedTime: "2023-03-09T22:15:11.611Z",
 *       DefaultCooldown: 300,
 *       DesiredCapacity: 2,
 *       EnabledMetrics:       [],
 *       HealthCheckGracePeriod: 300,
 *       HealthCheckType: "EC2",
 *       Instances: [
 *         {
 *           AvailabilityZone: "us-west-2c",
 *           HealthStatus: "Healthy",
 *           InstanceId: "i-05b4f7d5be44822a6",
 *           InstanceType: "t3.micro",
 *           LaunchConfigurationName: "my-launch-config",
 *           LifecycleState: "InService",
 *           ProtectedFromScaleIn: false
 *         },
 *         {
 *           AvailabilityZone: "us-west-2b",
 *           HealthStatus: "Healthy",
 *           InstanceId: "i-0c20ac468fa3049e8",
 *           InstanceType: "t3.micro",
 *           LaunchConfigurationName: "my-launch-config",
 *           LifecycleState: "InService",
 *           ProtectedFromScaleIn: false
 *         }
 *       ],
 *       LaunchConfigurationName: "my-launch-config",
 *       LoadBalancerNames:       [],
 *       MaxSize: 5,
 *       MinSize: 1,
 *       NewInstancesProtectedFromScaleIn: false,
 *       ServiceLinkedRoleARN: "arn:aws:iam::123456789012:role/aws-service-role/autoscaling.amazonaws.com/AWSServiceRoleForAutoScaling",
 *       SuspendedProcesses:       [],
 *       Tags:       [],
 *       TargetGroupARNs:       [],
 *       TerminationPolicies: [
 *         "Default"
 *       ],
 *       TrafficSources:       [],
 *       VPCZoneIdentifier: "subnet-5ea0c127,subnet-6194ea3b,subnet-c934b782"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAutoScalingGroupsCommand extends $Command
  .classBuilder<
    DescribeAutoScalingGroupsCommandInput,
    DescribeAutoScalingGroupsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DescribeAutoScalingGroups", {})
  .n("AutoScalingClient", "DescribeAutoScalingGroupsCommand")
  .sc(DescribeAutoScalingGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AutoScalingGroupNamesType;
      output: AutoScalingGroupsType;
    };
    sdk: {
      input: DescribeAutoScalingGroupsCommandInput;
      output: DescribeAutoScalingGroupsCommandOutput;
    };
  };
}
