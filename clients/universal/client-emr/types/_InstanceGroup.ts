import {
  _InstanceGroupStatus,
  _UnmarshalledInstanceGroupStatus
} from "./_InstanceGroupStatus";
import { _Configuration, _UnmarshalledConfiguration } from "./_Configuration";
import {
  _EbsBlockDevice,
  _UnmarshalledEbsBlockDevice
} from "./_EbsBlockDevice";
import { _ShrinkPolicy, _UnmarshalledShrinkPolicy } from "./_ShrinkPolicy";
import {
  _AutoScalingPolicyDescription,
  _UnmarshalledAutoScalingPolicyDescription
} from "./_AutoScalingPolicyDescription";

/**
 * <p>This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.</p>
 */
export interface _InstanceGroup {
  /**
   * <p>The identifier of the instance group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the instance group.</p>
   */
  Name?: string;

  /**
   * <p>The marketplace to provision instances for this group. Valid values are ON_DEMAND or SPOT.</p>
   */
  Market?: "ON_DEMAND" | "SPOT" | string;

  /**
   * <p>The type of the instance group. Valid values are MASTER, CORE or TASK.</p>
   */
  InstanceGroupType?: "MASTER" | "CORE" | "TASK" | string;

  /**
   * <p>The maximum Spot price your are willing to pay for EC2 instances.</p> <p>An optional, nullable field that applies if the <code>MarketType</code> for the instance group is specified as <code>SPOT</code>. Specify the maximum spot price in USD. If the value is NULL and <code>SPOT</code> is specified, the maximum Spot price is set equal to the On-Demand price.</p>
   */
  BidPrice?: string;

  /**
   * <p>The EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType?: string;

  /**
   * <p>The target number of instances for the instance group.</p>
   */
  RequestedInstanceCount?: number;

  /**
   * <p>The number of instances currently running in this instance group.</p>
   */
  RunningInstanceCount?: number;

  /**
   * <p>The current status of the instance group.</p>
   */
  Status?: _InstanceGroupStatus;

  /**
   * <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;

  /**
   * <p>The version number of the requested configuration specification for this instance group.</p>
   */
  ConfigurationsVersion?: number;

  /**
   * <p>A list of configurations that were successfully applied for an instance group last time.</p>
   */
  LastSuccessfullyAppliedConfigurations?:
    | Array<_Configuration>
    | Iterable<_Configuration>;

  /**
   * <p>The version number of a configuration specification that was successfully applied for an instance group last time. </p>
   */
  LastSuccessfullyAppliedConfigurationsVersion?: number;

  /**
   * <p>The EBS block devices that are mapped to this instance group.</p>
   */
  EbsBlockDevices?: Array<_EbsBlockDevice> | Iterable<_EbsBlockDevice>;

  /**
   * <p>If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: _ShrinkPolicy;

  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.</p>
   */
  AutoScalingPolicy?: _AutoScalingPolicyDescription;
}

export interface _UnmarshalledInstanceGroup extends _InstanceGroup {
  /**
   * <p>The current status of the instance group.</p>
   */
  Status?: _UnmarshalledInstanceGroupStatus;

  /**
   * <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   * <p>A list of configurations that were successfully applied for an instance group last time.</p>
   */
  LastSuccessfullyAppliedConfigurations?: Array<_UnmarshalledConfiguration>;

  /**
   * <p>The EBS block devices that are mapped to this instance group.</p>
   */
  EbsBlockDevices?: Array<_UnmarshalledEbsBlockDevice>;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: _UnmarshalledShrinkPolicy;

  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.</p>
   */
  AutoScalingPolicy?: _UnmarshalledAutoScalingPolicyDescription;
}
