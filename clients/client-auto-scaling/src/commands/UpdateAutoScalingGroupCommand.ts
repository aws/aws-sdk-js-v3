// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAutoScalingGroupType } from "../models/models_0";
import { UpdateAutoScalingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAutoScalingGroupCommand}.
 */
export interface UpdateAutoScalingGroupCommandInput extends UpdateAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link UpdateAutoScalingGroupCommand}.
 */
export interface UpdateAutoScalingGroupCommandOutput extends __MetadataBearer {}

/**
 * **We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.**
 *
 * Updates the configuration for the specified Auto Scaling group.
 *
 * To update an Auto Scaling group, specify the name of the group and the property that you want to change. Any properties that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns.
 *
 * If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.
 *
 * Note the following about changing `DesiredCapacity`, `MaxSize`, or `MinSize`:
 *
 * - If a scale-in activity occurs as a result of a new `DesiredCapacity` value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.
 * - If you specify a new value for `MinSize` without specifying a value for `DesiredCapacity`, and the new `MinSize` is larger than the current size of the group, this sets the group's `DesiredCapacity` to the new `MinSize` value.
 * - If you specify a new value for `MaxSize` without specifying a value for `DesiredCapacity`, and the new `MaxSize` is smaller than the current size of the group, this sets the group's `DesiredCapacity` to the new `MaxSize` value.
 *
 * To see which properties have been set, call the [DescribeAutoScalingGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAutoScalingGroups.html) API. To view the scaling policies for an Auto Scaling group, call the [DescribePolicies](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribePolicies.html) API. If the group has scaling policies, you can update them by calling the [PutScalingPolicy](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PutScalingPolicy.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, UpdateAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, UpdateAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // UpdateAutoScalingGroupType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LaunchConfigurationName: "STRING_VALUE",
 *   LaunchTemplate: { // LaunchTemplateSpecification
 *     LaunchTemplateId: "STRING_VALUE",
 *     LaunchTemplateName: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 *   MixedInstancesPolicy: { // MixedInstancesPolicy
 *     LaunchTemplate: { // LaunchTemplate
 *       LaunchTemplateSpecification: {
 *         LaunchTemplateId: "STRING_VALUE",
 *         LaunchTemplateName: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       Overrides: [ // Overrides
 *         { // LaunchTemplateOverrides
 *           InstanceType: "STRING_VALUE",
 *           WeightedCapacity: "STRING_VALUE",
 *           LaunchTemplateSpecification: "<LaunchTemplateSpecification>",
 *           InstanceRequirements: { // InstanceRequirements
 *             VCpuCount: { // VCpuCountRequest
 *               Min: Number("int"), // required
 *               Max: Number("int"),
 *             },
 *             MemoryMiB: { // MemoryMiBRequest
 *               Min: Number("int"), // required
 *               Max: Number("int"),
 *             },
 *             CpuManufacturers: [ // CpuManufacturers
 *               "intel" || "amd" || "amazon-web-services" || "apple",
 *             ],
 *             MemoryGiBPerVCpu: { // MemoryGiBPerVCpuRequest
 *               Min: Number("double"),
 *               Max: Number("double"),
 *             },
 *             ExcludedInstanceTypes: [ // ExcludedInstanceTypes
 *               "STRING_VALUE",
 *             ],
 *             InstanceGenerations: [ // InstanceGenerations
 *               "current" || "previous",
 *             ],
 *             SpotMaxPricePercentageOverLowestPrice: Number("int"),
 *             MaxSpotPriceAsPercentageOfOptimalOnDemandPrice: Number("int"),
 *             OnDemandMaxPricePercentageOverLowestPrice: Number("int"),
 *             BareMetal: "included" || "excluded" || "required",
 *             BurstablePerformance: "included" || "excluded" || "required",
 *             RequireHibernateSupport: true || false,
 *             NetworkInterfaceCount: { // NetworkInterfaceCountRequest
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             LocalStorage: "included" || "excluded" || "required",
 *             LocalStorageTypes: [ // LocalStorageTypes
 *               "hdd" || "ssd",
 *             ],
 *             TotalLocalStorageGB: { // TotalLocalStorageGBRequest
 *               Min: Number("double"),
 *               Max: Number("double"),
 *             },
 *             BaselineEbsBandwidthMbps: { // BaselineEbsBandwidthMbpsRequest
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             AcceleratorTypes: [ // AcceleratorTypes
 *               "gpu" || "fpga" || "inference",
 *             ],
 *             AcceleratorCount: { // AcceleratorCountRequest
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             AcceleratorManufacturers: [ // AcceleratorManufacturers
 *               "nvidia" || "amd" || "amazon-web-services" || "xilinx",
 *             ],
 *             AcceleratorNames: [ // AcceleratorNames
 *               "a100" || "v100" || "k80" || "t4" || "m60" || "radeon-pro-v520" || "vu9p",
 *             ],
 *             AcceleratorTotalMemoryMiB: { // AcceleratorTotalMemoryMiBRequest
 *               Min: Number("int"),
 *               Max: Number("int"),
 *             },
 *             NetworkBandwidthGbps: { // NetworkBandwidthGbpsRequest
 *               Min: Number("double"),
 *               Max: Number("double"),
 *             },
 *             AllowedInstanceTypes: [ // AllowedInstanceTypes
 *               "STRING_VALUE",
 *             ],
 *             BaselinePerformanceFactors: { // BaselinePerformanceFactorsRequest
 *               Cpu: { // CpuPerformanceFactorRequest
 *                 References: [ // PerformanceFactorReferenceSetRequest
 *                   { // PerformanceFactorReferenceRequest
 *                     InstanceFamily: "STRING_VALUE",
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *           ImageId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     InstancesDistribution: { // InstancesDistribution
 *       OnDemandAllocationStrategy: "STRING_VALUE",
 *       OnDemandBaseCapacity: Number("int"),
 *       OnDemandPercentageAboveBaseCapacity: Number("int"),
 *       SpotAllocationStrategy: "STRING_VALUE",
 *       SpotInstancePools: Number("int"),
 *       SpotMaxPrice: "STRING_VALUE",
 *       DistributionSegments: [ // DistributionSegments
 *         { // DistributionSegment
 *           TargetCapacityTypes: [ // TargetCapacityTypes
 *             "on-demand-capacity-reservation" || "capacity-block" || "interruptible-capacity-reservation" || "on-demand",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   MinSize: Number("int"),
 *   MaxSize: Number("int"),
 *   DesiredCapacity: Number("int"),
 *   DefaultCooldown: Number("int"),
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZoneIds: [ // AvailabilityZoneIds
 *     "STRING_VALUE",
 *   ],
 *   HealthCheckType: "STRING_VALUE",
 *   HealthCheckGracePeriod: Number("int"),
 *   PlacementGroup: "STRING_VALUE",
 *   VPCZoneIdentifier: "STRING_VALUE",
 *   TerminationPolicies: [ // TerminationPolicies
 *     "STRING_VALUE",
 *   ],
 *   NewInstancesProtectedFromScaleIn: true || false,
 *   ServiceLinkedRoleARN: "STRING_VALUE",
 *   MaxInstanceLifetime: Number("int"),
 *   CapacityRebalance: true || false,
 *   Context: "STRING_VALUE",
 *   DesiredCapacityType: "STRING_VALUE",
 *   DefaultInstanceWarmup: Number("int"),
 *   InstanceMaintenancePolicy: { // InstanceMaintenancePolicy
 *     MinHealthyPercentage: Number("int"),
 *     MaxHealthyPercentage: Number("int"),
 *   },
 *   AvailabilityZoneDistribution: { // AvailabilityZoneDistribution
 *     CapacityDistributionStrategy: "balanced-only" || "balanced-best-effort" || "reservations-then-balanced",
 *   },
 *   AvailabilityZoneImpairmentPolicy: { // AvailabilityZoneImpairmentPolicy
 *     ZonalShiftEnabled: true || false,
 *     ImpairedZoneHealthCheckBehavior: "ReplaceUnhealthy" || "IgnoreUnhealthy",
 *   },
 *   SkipZonalShiftValidation: true || false,
 *   CapacityReservationSpecification: { // CapacityReservationSpecification
 *     CapacityReservationPreference: "capacity-reservations-only" || "capacity-reservations-first" || "none" || "default",
 *     CapacityReservationTarget: { // CapacityReservationTarget
 *       CapacityReservationIds: [ // CapacityReservationIds
 *         "STRING_VALUE",
 *       ],
 *       CapacityReservationResourceGroupArns: [ // CapacityReservationResourceGroupArns
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   InstanceLifecyclePolicy: { // InstanceLifecyclePolicy
 *     RetentionTriggers: { // RetentionTriggers
 *       TerminateHookAbandon: "retain" || "terminate",
 *     },
 *   },
 *   DeletionProtection: "none" || "prevent-force-deletion" || "prevent-all-deletion",
 * };
 * const command = new UpdateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAutoScalingGroupCommandInput - {@link UpdateAutoScalingGroupCommandInput}
 * @returns {@link UpdateAutoScalingGroupCommandOutput}
 * @see {@link UpdateAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *
 * The operation can't be performed because there are scaling activities in progress.
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *
 * The service-linked role is not yet ready for use.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @example To update an Auto Scaling group
 * ```javascript
 * // This example updates multiple properties at the same time.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   LaunchTemplate: {
 *     LaunchTemplateName: "my-template-for-auto-scaling",
 *     Version: "2"
 *   },
 *   MaxSize: 5,
 *   MinSize: 1,
 *   NewInstancesProtectedFromScaleIn: true
 * };
 * const command = new UpdateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAutoScalingGroupCommand extends command<UpdateAutoScalingGroupCommandInput, UpdateAutoScalingGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAutoScalingGroup",
  UpdateAutoScalingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutoScalingGroupType;
      output: {};
    };
    sdk: {
      input: UpdateAutoScalingGroupCommandInput;
      output: UpdateAutoScalingGroupCommandOutput;
    };
  };
}
