import { _RestoreWindow, _UnmarshalledRestoreWindow } from "./_RestoreWindow";

/**
 * <p>An automated backup of a DB instance. It it consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance. </p>
 */
export interface _DBInstanceAutomatedBackup {
  /**
   * <p>The Amazon Resource Name (ARN) for the automated backup.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The AWS Region associated with the automated backup.</p>
   */
  Region?: string;

  /**
   * <p>The customer id of the instance that is/was associated with the automated backup. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Earliest and latest time an instance can be restored to.</p>
   */
  RestoreWindow?: _RestoreWindow;

  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides a list of status information for an automated backup:</p> <ul> <li> <p> <code>active</code> - automated backups for current instances</p> </li> <li> <p> <code>retained</code> - automated backups for deleted instances</p> </li> <li> <p> <code>creating</code> - automated backups that are waiting for the first automated snapshot to be available.</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>The port number that the automated backup used for connections.</p> <p>Default: Inherits from the source DB instance</p> <p>Valid Values: <code>1150-65535</code> </p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone that the automated backup was created in. For information on AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB instance</p>
   */
  VpcId?: string;

  /**
   * <p>Provides the date and time that the DB instance was created. </p>
   */
  InstanceCreateTime?: Date | string | number;

  /**
   * <p>The license model of an automated backup.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The name of the database engine for this automated backup.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the database engine for the automated backup.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the automated backup.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The IOPS (I/O operations per second) value for the automated backup. </p>
   */
  Iops?: number;

  /**
   * <p>The option group the automated backup is associated with. If omitted, the default option group for the engine specified is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The ARN from the key store with which the automated backup is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies whether the automated backup is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Specifies the storage type associated with the automated backup.</p>
   */
  StorageType?: string;

  /**
   * <p>The AWS KMS key ID for an automated backup. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time zone of the automated backup. In most cases, the <code>Timezone</code> element is empty. <code>Timezone</code> content appears only for Microsoft SQL Server DB instances that were created with a time zone specified.</p>
   */
  Timezone?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;
}

export interface _UnmarshalledDBInstanceAutomatedBackup
  extends _DBInstanceAutomatedBackup {
  /**
   * <p>Earliest and latest time an instance can be restored to.</p>
   */
  RestoreWindow?: _UnmarshalledRestoreWindow;

  /**
   * <p>Provides the date and time that the DB instance was created. </p>
   */
  InstanceCreateTime?: Date;
}
