import {
  _ProcessorFeature,
  _UnmarshalledProcessorFeature
} from "./_ProcessorFeature";

/**
 * <p>Contains the details of an Amazon RDS DB snapshot. </p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action. </p>
 */
export interface _DBSnapshot {
  /**
   * <p>Specifies the identifier for the DB snapshot.</p>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>Specifies the DB instance identifier of the DB instance this DB snapshot was created from.</p>
   */
  DBInstanceIdentifier?: string;

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
   * <p>Specifies the status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  InstanceCreateTime?: Date | string | number;

  /**
   * <p>Provides the master username for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies the version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>Provides the option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The AWS Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has value in case of cross-customer or cross-region copy.</p>
   */
  SourceDBSnapshotIdentifier?: string;

  /**
   * <p>Specifies the storage type associated with DB snapshot.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p> If <code>Encrypted</code> is true, the AWS KMS key identifier for the encrypted DB snapshot. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB snapshot.</p>
   */
  DBSnapshotArn?: string;

  /**
   * <p>The time zone of the DB snapshot. In most cases, the <code>Timezone</code> element is empty. <code>Timezone</code> content appears only for snapshots taken from Microsoft SQL Server DB instances that were created with a time zone specified. </p>
   */
  Timezone?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance when the DB snapshot was created.</p>
   */
  ProcessorFeatures?: Array<_ProcessorFeature> | Iterable<_ProcessorFeature>;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId?: string;
}

export interface _UnmarshalledDBSnapshot extends _DBSnapshot {
  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Specifies the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance when the DB snapshot was created.</p>
   */
  ProcessorFeatures?: Array<_UnmarshalledProcessorFeature>;
}
