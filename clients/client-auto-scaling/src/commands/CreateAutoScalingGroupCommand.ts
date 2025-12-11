// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAutoScalingGroupType } from "../models/models_0";
import { CreateAutoScalingGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutoScalingGroupCommand}.
 */
export interface CreateAutoScalingGroupCommandInput extends CreateAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link CreateAutoScalingGroupCommand}.
 */
export interface CreateAutoScalingGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *             <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b>
 *          </p>
 *          <p>Creates an Auto Scaling group with the specified name and attributes. </p>
 *          <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit,
 *             call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> API. For information about updating
 *             this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-quotas.html">Quotas for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you're new to Amazon EC2 Auto Scaling, see the introductory tutorials in <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/get-started-with-ec2-auto-scaling.html">Get started
 *                 with Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>Every Auto Scaling group has three size properties (<code>DesiredCapacity</code>,
 *                 <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based
 *             on a specific number of instances. However, if you configure a mixed instances policy
 *             that defines weights for the instance types, you must specify these sizes with the same
 *             units that you use for weighting instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CreateAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CreateAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // CreateAutoScalingGroupType
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
 *     },
 *   },
 *   InstanceId: "STRING_VALUE",
 *   MinSize: Number("int"), // required
 *   MaxSize: Number("int"), // required
 *   DesiredCapacity: Number("int"),
 *   DefaultCooldown: Number("int"),
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   LoadBalancerNames: [ // LoadBalancerNames
 *     "STRING_VALUE",
 *   ],
 *   TargetGroupARNs: [ // TargetGroupARNs
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
 *   CapacityRebalance: true || false,
 *   LifecycleHookSpecificationList: [ // LifecycleHookSpecifications
 *     { // LifecycleHookSpecification
 *       LifecycleHookName: "STRING_VALUE", // required
 *       LifecycleTransition: "STRING_VALUE", // required
 *       NotificationMetadata: "STRING_VALUE",
 *       HeartbeatTimeout: Number("int"),
 *       DefaultResult: "STRING_VALUE",
 *       NotificationTargetARN: "STRING_VALUE",
 *       RoleARN: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       ResourceId: "STRING_VALUE",
 *       ResourceType: "STRING_VALUE",
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       PropagateAtLaunch: true || false,
 *     },
 *   ],
 *   ServiceLinkedRoleARN: "STRING_VALUE",
 *   MaxInstanceLifetime: Number("int"),
 *   Context: "STRING_VALUE",
 *   DesiredCapacityType: "STRING_VALUE",
 *   DefaultInstanceWarmup: Number("int"),
 *   TrafficSources: [ // TrafficSources
 *     { // TrafficSourceIdentifier
 *       Identifier: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *     },
 *   ],
 *   InstanceMaintenancePolicy: { // InstanceMaintenancePolicy
 *     MinHealthyPercentage: Number("int"),
 *     MaxHealthyPercentage: Number("int"),
 *   },
 *   AvailabilityZoneDistribution: { // AvailabilityZoneDistribution
 *     CapacityDistributionStrategy: "balanced-only" || "balanced-best-effort",
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
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAutoScalingGroupCommandInput - {@link CreateAutoScalingGroupCommandInput}
 * @returns {@link CreateAutoScalingGroupCommandOutput}
 * @see {@link CreateAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
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
 * @example To create an Auto Scaling group with an attached target group
 * ```javascript
 * // This example creates an Auto Scaling group and attaches the specified target group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   HealthCheckGracePeriod: 300,
 *   HealthCheckType: "ELB",
 *   LaunchTemplate: {
 *     LaunchTemplateName: "my-template-for-auto-scaling",
 *     Version: "$Default"
 *   },
 *   MaxSize: 3,
 *   MinSize: 1,
 *   TargetGroupARNs: [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ],
 *   VPCZoneIdentifier: "subnet-057fa0918fEXAMPLE, subnet-610acd08EXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To create an Auto Scaling group with a mixed instances policy
 * ```javascript
 * // This example creates an Auto Scaling group with a mixed instances policy. It specifies the c5.large, c5a.large, and c6g.large instance types and defines a different launch template for the c6g.large instance type.
 * const input = {
 *   AutoScalingGroupName: "my-asg",
 *   DesiredCapacity: 3,
 *   MaxSize: 5,
 *   MinSize: 1,
 *   MixedInstancesPolicy: {
 *     InstancesDistribution: {
 *       OnDemandBaseCapacity: 1,
 *       OnDemandPercentageAboveBaseCapacity: 50,
 *       SpotAllocationStrategy: "price-capacity-optimized"
 *     },
 *     LaunchTemplate: {
 *       LaunchTemplateSpecification: {
 *         LaunchTemplateName: "my-launch-template-for-x86",
 *         Version: "$Default"
 *       },
 *       Overrides: [
 *         {
 *           InstanceType: "c6g.large",
 *           LaunchTemplateSpecification: {
 *             LaunchTemplateName: "my-launch-template-for-arm",
 *             Version: "$Default"
 *           }
 *         },
 *         {
 *           InstanceType: "c5.large"
 *         },
 *         {
 *           InstanceType: "c5a.large"
 *         }
 *       ]
 *     }
 *   },
 *   VPCZoneIdentifier: "subnet-057fa0918fEXAMPLE, subnet-610acd08EXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To create an Auto Scaling group using attribute-based instance type selection
 * ```javascript
 * // This example creates an Auto Scaling group using attribute-based instance type selection. It requires the instance types to have a minimum of four vCPUs and a maximum of eight vCPUs, a minimum of 16,384 MiB of memory, and an Intel manufactured CPU.
 * const input = {
 *   AutoScalingGroupName: "my-asg",
 *   DesiredCapacity: 4,
 *   DesiredCapacityType: "units",
 *   MaxSize: 100,
 *   MinSize: 0,
 *   MixedInstancesPolicy: {
 *     InstancesDistribution: {
 *       OnDemandPercentageAboveBaseCapacity: 50,
 *       SpotAllocationStrategy: "price-capacity-optimized"
 *     },
 *     LaunchTemplate: {
 *       LaunchTemplateSpecification: {
 *         LaunchTemplateName: "my-template-for-auto-scaling",
 *         Version: "$Default"
 *       },
 *       Overrides: [
 *         {
 *           InstanceRequirements: {
 *             CpuManufacturers: [
 *               "intel"
 *             ],
 *             MemoryMiB: {
 *               Min: 16384
 *             },
 *             VCpuCount: {
 *               Max: 8,
 *               Min: 4
 *             }
 *           }
 *         }
 *       ]
 *     }
 *   },
 *   VPCZoneIdentifier: "subnet-057fa0918fEXAMPLE, subnet-610acd08EXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To create an Auto Scaling group
 * ```javascript
 * // This example creates an Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   DefaultInstanceWarmup: 120,
 *   LaunchTemplate: {
 *     LaunchTemplateName: "my-template-for-auto-scaling",
 *     Version: "$Default"
 *   },
 *   MaxInstanceLifetime: 2592000,
 *   MaxSize: 3,
 *   MinSize: 1,
 *   VPCZoneIdentifier: "subnet-057fa0918fEXAMPLE"
 * };
 * const command = new CreateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAutoScalingGroupCommand extends $Command
  .classBuilder<
    CreateAutoScalingGroupCommandInput,
    CreateAutoScalingGroupCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "CreateAutoScalingGroup", {})
  .n("AutoScalingClient", "CreateAutoScalingGroupCommand")
  .sc(CreateAutoScalingGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutoScalingGroupType;
      output: {};
    };
    sdk: {
      input: CreateAutoScalingGroupCommandInput;
      output: CreateAutoScalingGroupCommandOutput;
    };
  };
}
