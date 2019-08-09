import {
  _InstanceFleetStatus,
  _UnmarshalledInstanceFleetStatus
} from "./_InstanceFleetStatus";
import {
  _InstanceTypeSpecification,
  _UnmarshalledInstanceTypeSpecification
} from "./_InstanceTypeSpecification";
import {
  _InstanceFleetProvisioningSpecifications,
  _UnmarshalledInstanceFleetProvisioningSpecifications
} from "./_InstanceFleetProvisioningSpecifications";

/**
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleet {
  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  Id?: string;

  /**
   * <p>A friendly name for the instance fleet.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the instance fleet. </p>
   */
  Status?: _InstanceFleetStatus;

  /**
   * <p>The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK. </p>
   */
  InstanceFleetType?: "MASTER" | "CORE" | "TASK" | string;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedOnDemandCapacity</a> to determine the Spot capacity units that have been provisioned for the instance fleet.</p> <note> <p>If not specified or set to 0, only Spot instances are provisioned for the instance fleet using <code>TargetSpotCapacity</code>. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When a Spot instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedSpotCapacity</a> to determine the Spot capacity units that have been provisioned for the instance fleet.</p> <note> <p>If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>
   */
  TargetSpotCapacity?: number;

  /**
   * <p>The number of On-Demand units that have been provisioned for the instance fleet to fulfill <code>TargetOnDemandCapacity</code>. This provisioned capacity might be less than or greater than <code>TargetOnDemandCapacity</code>.</p>
   */
  ProvisionedOnDemandCapacity?: number;

  /**
   * <p>The number of Spot units that have been provisioned for this instance fleet to fulfill <code>TargetSpotCapacity</code>. This provisioned capacity might be less than or greater than <code>TargetSpotCapacity</code>.</p>
   */
  ProvisionedSpotCapacity?: number;

  /**
   * <p>The specification for the instance types that comprise an instance fleet. Up to five unique instance specifications may be defined for each instance fleet. </p>
   */
  InstanceTypeSpecifications?:
    | Array<_InstanceTypeSpecification>
    | Iterable<_InstanceTypeSpecification>;

  /**
   * <p>Describes the launch specification for an instance fleet. </p>
   */
  LaunchSpecifications?: _InstanceFleetProvisioningSpecifications;
}

export interface _UnmarshalledInstanceFleet extends _InstanceFleet {
  /**
   * <p>The current status of the instance fleet. </p>
   */
  Status?: _UnmarshalledInstanceFleetStatus;

  /**
   * <p>The specification for the instance types that comprise an instance fleet. Up to five unique instance specifications may be defined for each instance fleet. </p>
   */
  InstanceTypeSpecifications?: Array<_UnmarshalledInstanceTypeSpecification>;

  /**
   * <p>Describes the launch specification for an instance fleet. </p>
   */
  LaunchSpecifications?: _UnmarshalledInstanceFleetProvisioningSpecifications;
}
