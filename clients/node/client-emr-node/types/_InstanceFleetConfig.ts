import {
  _InstanceTypeConfig,
  _UnmarshalledInstanceTypeConfig
} from "./_InstanceTypeConfig";
import {
  _InstanceFleetProvisioningSpecifications,
  _UnmarshalledInstanceFleetProvisioningSpecifications
} from "./_InstanceFleetProvisioningSpecifications";

/**
 * <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleetConfig {
  /**
   * <p>The friendly name of the instance fleet.</p>
   */
  Name?: string;

  /**
   * <p>The node type that the instance fleet hosts. Valid values are MASTER,CORE,and TASK.</p>
   */
  InstanceFleetType: "MASTER" | "CORE" | "TASK" | string;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.</p> <note> <p>If not specified or set to 0, only Spot instances are provisioned for the instance fleet using <code>TargetSpotCapacity</code>. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When a Spot instance is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.</p> <note> <p>If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p> </note>
   */
  TargetSpotCapacity?: number;

  /**
   * <p>The instance type configurations that define the EC2 instances in the instance fleet.</p>
   */
  InstanceTypeConfigs?:
    | Array<_InstanceTypeConfig>
    | Iterable<_InstanceTypeConfig>;

  /**
   * <p>The launch specification for the instance fleet.</p>
   */
  LaunchSpecifications?: _InstanceFleetProvisioningSpecifications;
}

export interface _UnmarshalledInstanceFleetConfig extends _InstanceFleetConfig {
  /**
   * <p>The instance type configurations that define the EC2 instances in the instance fleet.</p>
   */
  InstanceTypeConfigs?: Array<_UnmarshalledInstanceTypeConfig>;

  /**
   * <p>The launch specification for the instance fleet.</p>
   */
  LaunchSpecifications?: _UnmarshalledInstanceFleetProvisioningSpecifications;
}
