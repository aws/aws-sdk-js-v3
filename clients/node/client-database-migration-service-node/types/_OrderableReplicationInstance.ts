/**
 * <p/>
 */
export interface _OrderableReplicationInstance {
  /**
   * <p>The version of the replication engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The compute and memory capacity of the replication instance.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The type of storage used by the replication instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.</p>
   */
  MinAllocatedStorage?: number;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The default amount of storage (in gigabytes) that is allocated for the replication instance.</p>
   */
  DefaultAllocatedStorage?: number;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication instance.</p>
   */
  IncludedAllocatedStorage?: number;

  /**
   * <p>List of Availability Zones for this replication instance.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The value returned when the specified <code>EngineVersion</code> of the replication instance is in Beta or test mode. This indicates some features might not work as expected.</p> <note> <p>AWS DMS supports <code>ReleaseStatus</code> in versions 3.1.4 and later.</p> </note>
   */
  ReleaseStatus?: "beta" | string;
}

export interface _UnmarshalledOrderableReplicationInstance
  extends _OrderableReplicationInstance {
  /**
   * <p>List of Availability Zones for this replication instance.</p>
   */
  AvailabilityZones?: Array<string>;
}
