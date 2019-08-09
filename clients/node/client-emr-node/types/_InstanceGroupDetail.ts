/**
 * <p>Detailed information about an instance group.</p>
 */
export interface _InstanceGroupDetail {
  /**
   * <p>Unique identifier for the instance group.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>Friendly name for the instance group.</p>
   */
  Name?: string;

  /**
   * <p>Market type of the EC2 instances used to create a cluster node.</p>
   */
  Market: "ON_DEMAND" | "SPOT" | string;

  /**
   * <p>Instance group role in the cluster</p>
   */
  InstanceRole: "MASTER" | "CORE" | "TASK" | string;

  /**
   * <p>The maximum Spot price your are willing to pay for EC2 instances.</p> <p>An optional, nullable field that applies if the <code>MarketType</code> for the instance group is specified as <code>SPOT</code>. Specified in USD. If the value is NULL and <code>SPOT</code> is specified, the maximum Spot price is set equal to the On-Demand price.</p>
   */
  BidPrice?: string;

  /**
   * <p>EC2 instance type.</p>
   */
  InstanceType: string;

  /**
   * <p>Target number of instances to run in the instance group.</p>
   */
  InstanceRequestCount: number;

  /**
   * <p>Actual count of running instances.</p>
   */
  InstanceRunningCount: number;

  /**
   * <p>State of instance group. The following values are deprecated: STARTING, TERMINATED, and FAILED.</p>
   */
  State:
    | "PROVISIONING"
    | "BOOTSTRAPPING"
    | "RUNNING"
    | "RECONFIGURING"
    | "RESIZING"
    | "SUSPENDED"
    | "TERMINATING"
    | "TERMINATED"
    | "ARRESTED"
    | "SHUTTING_DOWN"
    | "ENDED"
    | string;

  /**
   * <p>Details regarding the state of the instance group.</p>
   */
  LastStateChangeReason?: string;

  /**
   * <p>The date/time the instance group was created.</p>
   */
  CreationDateTime: Date | string | number;

  /**
   * <p>The date/time the instance group was started.</p>
   */
  StartDateTime?: Date | string | number;

  /**
   * <p>The date/time the instance group was available to the cluster.</p>
   */
  ReadyDateTime?: Date | string | number;

  /**
   * <p>The date/time the instance group was terminated.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledInstanceGroupDetail extends _InstanceGroupDetail {
  /**
   * <p>The date/time the instance group was created.</p>
   */
  CreationDateTime: Date;

  /**
   * <p>The date/time the instance group was started.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date/time the instance group was available to the cluster.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date/time the instance group was terminated.</p>
   */
  EndDateTime?: Date;
}
