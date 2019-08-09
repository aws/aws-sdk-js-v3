import { _Configuration, _UnmarshalledConfiguration } from "./_Configuration";
import {
  _EbsConfiguration,
  _UnmarshalledEbsConfiguration
} from "./_EbsConfiguration";
import {
  _AutoScalingPolicy,
  _UnmarshalledAutoScalingPolicy
} from "./_AutoScalingPolicy";

/**
 * <p>Configuration defining a new instance group.</p>
 */
export interface _InstanceGroupConfig {
  /**
   * <p>Friendly name given to the instance group.</p>
   */
  Name?: string;

  /**
   * <p>Market type of the EC2 instances used to create a cluster node.</p>
   */
  Market?: "ON_DEMAND" | "SPOT" | string;

  /**
   * <p>The role of the instance group in the cluster.</p>
   */
  InstanceRole: "MASTER" | "CORE" | "TASK" | string;

  /**
   * <p>The maximum Spot price your are willing to pay for EC2 instances.</p> <p>An optional, nullable field that applies if the <code>MarketType</code> for the instance group is specified as <code>SPOT</code>. Specify the maximum spot price in USD. If the value is NULL and <code>SPOT</code> is specified, the maximum Spot price is set equal to the On-Demand price.</p>
   */
  BidPrice?: string;

  /**
   * <p>The EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType: string;

  /**
   * <p>Target number of instances for the instance group.</p>
   */
  InstanceCount: number;

  /**
   * <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;

  /**
   * <p>EBS configurations that will be attached to each EC2 instance in the instance group.</p>
   */
  EbsConfiguration?: _EbsConfiguration;

  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
   */
  AutoScalingPolicy?: _AutoScalingPolicy;
}

export interface _UnmarshalledInstanceGroupConfig extends _InstanceGroupConfig {
  /**
   * <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   * <p>EBS configurations that will be attached to each EC2 instance in the instance group.</p>
   */
  EbsConfiguration?: _UnmarshalledEbsConfiguration;

  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
   */
  AutoScalingPolicy?: _UnmarshalledAutoScalingPolicy;
}
