/**
 * <p/>
 */
export interface _ReplicationPendingModifiedValues {
  /**
   * <p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;
}

export type _UnmarshalledReplicationPendingModifiedValues = _ReplicationPendingModifiedValues;
