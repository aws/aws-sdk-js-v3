import {
  _SpotFleetLaunchSpecification,
  _UnmarshalledSpotFleetLaunchSpecification
} from "./_SpotFleetLaunchSpecification";
import {
  _LaunchTemplateConfig,
  _UnmarshalledLaunchTemplateConfig
} from "./_LaunchTemplateConfig";
import {
  _LoadBalancersConfig,
  _UnmarshalledLoadBalancersConfig
} from "./_LoadBalancersConfig";

/**
 * <p>Describes the configuration of a Spot Fleet request.</p>
 */
export interface _SpotFleetRequestConfigData {
  /**
   * <p>Indicates how to allocate the target capacity across the Spot pools specified by the Spot Fleet request. The default is <code>lowestPrice</code>.</p>
   */
  AllocationStrategy?:
    | "lowestPrice"
    | "diversified"
    | "capacityOptimized"
    | string;

  /**
   * <p>The order of the launch template overrides to use in fulfilling On-Demand capacity. If you specify <code>lowestPrice</code>, Spot Fleet uses price to determine the order, launching the lowest price first. If you specify <code>prioritized</code>, Spot Fleet uses the priority that you assign to each Spot Fleet launch template override, launching the highest priority first. If you do not specify a value, Spot Fleet defaults to <code>lowestPrice</code>.</p>
   */
  OnDemandAllocationStrategy?: "lowestPrice" | "prioritized" | string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of your listings. This helps to avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running Spot Instances should be terminated if you decrease the target capacity of the Spot Fleet request below the current size of the Spot Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: "noTermination" | "default" | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity. You cannot set this value.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The number of On-Demand units fulfilled by this request compared to the set target On-Demand capacity.</p>
   */
  OnDemandFulfilledCapacity?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the Spot Fleet the permission to request, launch, terminate, and tag instances on your behalf. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites">Spot Fleet Prerequisites</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>. Spot Fleet can terminate Spot Instances on your behalf when you cancel its Spot Fleet request using <a>CancelSpotFleetRequests</a> or when the Spot Fleet request expires, if you set <code>TerminateInstancesWithExpiration</code>.</p>
   */
  IamFleetRole: string;

  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify <code>LaunchSpecifications</code>, you can't specify <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchSpecifications?:
    | Array<_SpotFleetLaunchSpecification>
    | Iterable<_SpotFleetLaunchSpecification>;

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>, you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchTemplateConfigs?:
    | Array<_LaunchTemplateConfig>
    | Iterable<_LaunchTemplateConfig>;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. The default is the On-Demand price.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The number of units to request for the Spot Fleet. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacity: number;

  /**
   * <p>The number of On-Demand units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p>
   */
  OnDemandTargetCapacity?: number;

  /**
   * <p>The maximum amount per hour for On-Demand Instances that you're willing to pay. You can use the <code>onDemandMaxTotalPrice</code> parameter, the <code>spotMaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.</p>
   */
  OnDemandMaxTotalPrice?: string;

  /**
   * <p>The maximum amount per hour for Spot Instances that you're willing to pay. You can use the <code>spotdMaxTotalPrice</code> parameter, the <code>onDemandMaxTotalPrice</code> parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.</p>
   */
  SpotMaxTotalPrice?: string;

  /**
   * <p>Indicates whether running Spot Instances are terminated when the Spot Fleet request expires.</p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of request. Indicates whether the Spot Fleet only requests the target capacity or also attempts to maintain it. When this value is <code>request</code>, the Spot Fleet only places the required requests. It does not attempt to replenish Spot Instances if capacity is diminished, nor does it submit requests in alternative Spot pools if capacity is not available. When this value is <code>maintain</code>, the Spot Fleet maintains the target capacity. The Spot Fleet places the required requests to meet capacity and automatically replenishes any interrupted instances. Default: <code>maintain</code>. <code>instant</code> is listed but is not used by Spot Fleet.</p>
   */
  Type?: "request" | "maintain" | "instant" | string;

  /**
   * <p>The start date and time of the request, in UTC format (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). By default, Amazon EC2 starts fulfilling the request immediately.</p>
   */
  ValidFrom?: Date | string | number;

  /**
   * <p>The end date and time of the request, in UTC format (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). After the end date and time, no new Spot Instance requests are placed or able to fulfill the request. If no value is specified, the Spot Fleet request remains until you cancel it.</p>
   */
  ValidUntil?: Date | string | number;

  /**
   * <p>Indicates whether Spot Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate" | string;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet request. Spot Fleet registers the running Spot Instances with the specified Classic Load Balancers and target groups.</p> <p>With Network Load Balancers, Spot Fleet cannot register instances that have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1.</p>
   */
  LoadBalancersConfig?: _LoadBalancersConfig;

  /**
   * <p>The number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot <b>AllocationStrategy</b> is set to <code>lowest-price</code>. Spot Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.</p>
   */
  InstancePoolsToUseCount?: number;
}

export interface _UnmarshalledSpotFleetRequestConfigData
  extends _SpotFleetRequestConfigData {
  /**
   * <p>The launch specifications for the Spot Fleet request. If you specify <code>LaunchSpecifications</code>, you can't specify <code>LaunchTemplateConfigs</code>. If you include On-Demand capacity in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchSpecifications?: Array<_UnmarshalledSpotFleetLaunchSpecification>;

  /**
   * <p>The launch template and overrides. If you specify <code>LaunchTemplateConfigs</code>, you can't specify <code>LaunchSpecifications</code>. If you include On-Demand capacity in your request, you must use <code>LaunchTemplateConfigs</code>.</p>
   */
  LaunchTemplateConfigs?: Array<_UnmarshalledLaunchTemplateConfig>;

  /**
   * <p>The start date and time of the request, in UTC format (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). By default, Amazon EC2 starts fulfilling the request immediately.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format (<i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). After the end date and time, no new Spot Instance requests are placed or able to fulfill the request. If no value is specified, the Spot Fleet request remains until you cancel it.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>One or more Classic Load Balancers and target groups to attach to the Spot Fleet request. Spot Fleet registers the running Spot Instances with the specified Classic Load Balancers and target groups.</p> <p>With Network Load Balancers, Spot Fleet cannot register instances that have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1.</p>
   */
  LoadBalancersConfig?: _UnmarshalledLoadBalancersConfig;
}
