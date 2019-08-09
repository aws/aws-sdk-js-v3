/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
 */
export interface _DBClusterSnapshot {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the identifier for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date | string | number;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date | string | number;

  /**
   * <p>Provides the master username for the DB cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Provides the license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the type of the DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;
}

export interface _UnmarshalledDBClusterSnapshot extends _DBClusterSnapshot {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;
}
