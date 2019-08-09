import {
  _FleetLaunchTemplateConfig,
  _UnmarshalledFleetLaunchTemplateConfig
} from "./_FleetLaunchTemplateConfig";
import {
  _TargetCapacitySpecification,
  _UnmarshalledTargetCapacitySpecification
} from "./_TargetCapacitySpecification";
import { _SpotOptions, _UnmarshalledSpotOptions } from "./_SpotOptions";
import {
  _OnDemandOptions,
  _UnmarshalledOnDemandOptions
} from "./_OnDemandOptions";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _DescribeFleetError,
  _UnmarshalledDescribeFleetError
} from "./_DescribeFleetError";
import {
  _DescribeFleetsInstances,
  _UnmarshalledDescribeFleetsInstances
} from "./_DescribeFleetsInstances";

/**
 * <p>Describes an EC2 Fleet.</p>
 */
export interface _FleetData {
  /**
   * <p>The progress of the EC2 Fleet. If there is an error, the status is <code>error</code>. After all requests are placed, the status is <code>pending_fulfillment</code>. If the size of the EC2 Fleet is equal to or greater than its target capacity, the status is <code>fulfilled</code>. If the size of the EC2 Fleet is decreased, the status is <code>pending_termination</code> while instances are terminating.</p>
   */
  ActivityStatus?:
    | "error"
    | "pending-fulfillment"
    | "pending-termination"
    | "fulfilled"
    | string;

  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The state of the EC2 Fleet.</p>
   */
  FleetState?:
    | "submitted"
    | "active"
    | "deleted"
    | "failed"
    | "deleted-running"
    | "deleted-terminating"
    | "modifying"
    | string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p> <p>Constraints: Maximum 64 ASCII characters</p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates whether running instances should be terminated if the target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.</p>
   */
  ExcessCapacityTerminationPolicy?: "no-termination" | "termination" | string;

  /**
   * <p>The number of units fulfilled by this request compared to the set target capacity.</p>
   */
  FulfilledCapacity?: number;

  /**
   * <p>The number of units fulfilled by this request compared to the set target On-Demand capacity.</p>
   */
  FulfilledOnDemandCapacity?: number;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?:
    | Array<_FleetLaunchTemplateConfig>
    | Iterable<_FleetLaunchTemplateConfig>;

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacitySpecification?: _TargetCapacitySpecification;

  /**
   * <p>Indicates whether running instances should be terminated when the EC2 Fleet expires. </p>
   */
  TerminateInstancesWithExpiration?: boolean;

  /**
   * <p>The type of request. Indicates whether the EC2 Fleet only <code>requests</code> the target capacity, or also attempts to <code>maintain</code> it. If you request a certain target capacity, EC2 Fleet only places the required requests; it does not attempt to replenish instances if capacity is diminished, and does not submit requests in alternative capacity pools if capacity is unavailable. To maintain a certain target capacity, EC2 Fleet places the required requests to meet this target capacity. It also automatically replenishes any interrupted Spot Instances. Default: <code>maintain</code>.</p>
   */
  Type?: "request" | "maintain" | "instant" | string;

  /**
   * <p>The start date and time of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). The default is to start fulfilling the request immediately. </p>
   */
  ValidFrom?: Date | string | number;

  /**
   * <p>The end date and time of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). At this point, no new instance requests are placed or able to fulfill the request. The default end date is 7 days from the current date. </p>
   */
  ValidUntil?: Date | string | number;

  /**
   * <p>Indicates whether EC2 Fleet should replace unhealthy instances.</p>
   */
  ReplaceUnhealthyInstances?: boolean;

  /**
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: _SpotOptions;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: _OnDemandOptions;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: Array<_DescribeFleetError> | Iterable<_DescribeFleetError>;

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?:
    | Array<_DescribeFleetsInstances>
    | Iterable<_DescribeFleetsInstances>;
}

export interface _UnmarshalledFleetData extends _FleetData {
  /**
   * <p>The creation date and time of the EC2 Fleet.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The launch template and overrides.</p>
   */
  LaunchTemplateConfigs?: Array<_UnmarshalledFleetLaunchTemplateConfig>;

  /**
   * <p>The number of units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is <code>maintain</code>, you can specify a target capacity of 0 and add capacity later.</p>
   */
  TargetCapacitySpecification?: _UnmarshalledTargetCapacitySpecification;

  /**
   * <p>The start date and time of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). The default is to start fulfilling the request immediately. </p>
   */
  ValidFrom?: Date;

  /**
   * <p>The end date and time of the request, in UTC format (for example, <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z). At this point, no new instance requests are placed or able to fulfill the request. The default end date is 7 days from the current date. </p>
   */
  ValidUntil?: Date;

  /**
   * <p>The configuration of Spot Instances in an EC2 Fleet.</p>
   */
  SpotOptions?: _UnmarshalledSpotOptions;

  /**
   * <p>The allocation strategy of On-Demand Instances in an EC2 Fleet.</p>
   */
  OnDemandOptions?: _UnmarshalledOnDemandOptions;

  /**
   * <p>The tags for an EC2 Fleet resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: Array<_UnmarshalledDescribeFleetError>;

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: Array<_UnmarshalledDescribeFleetsInstances>;
}
