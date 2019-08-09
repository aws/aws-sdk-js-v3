import { _Tag } from "./_Tag";
import { _ProcessorFeature } from "./_ProcessorFeature";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreDBInstanceFromS3Input shape
 */
export interface RestoreDBInstanceFromS3Input {
  /**
   * <p>The name of the database to create when the DB instance is created. Follow the naming rules specified in <code>CreateDBInstance</code>. </p>
   */
  DBName?: string;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string. </p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
   */
  DBInstanceIdentifier: string;

  /**
   * <p>The amount of storage (in gigabytes) to allocate initially for the DB instance. Follow the allocation rules specified in <code>CreateDBInstance</code>. </p> <note> <p>Be sure to allocate enough memory for your new DB instance so that the restore operation can succeed. You can also allocate additional memory for future growth. </p> </note>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Importing from Amazon S3 is not supported on the db.t2.micro DB instance class. </p>
   */
  DBInstanceClass: string;

  /**
   * <p>The name of the database engine to be used for this instance. </p> <p>Valid Values: <code>mysql</code> </p>
   */
  Engine: string;

  /**
   * <p>The name for the master user. </p> <p>Constraints: </p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@". </p> <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A list of VPC security groups to associate with this DB instance. </p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The Availability Zone that the DB instance is created in. For information about AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region. </p> <p> Example: <code>us-east-1d</code> </p> <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p> </li> <li> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred backup window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default parameter group for the specified engine is used. </p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. For more information, see <code>CreateDBInstance</code>. </p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The time range each day during which automated backups are created if automated backups are enabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections. </p> <p>Type: Integer </p> <p>Valid Values: <code>1150</code>-<code>65535</code> </p> <p>Default: <code>3306</code> </p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment. If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use. Choose the latest minor version of your database engine. For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>. </p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are not applied automatically. </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The license model for this DB instance. Use <code>general-public-license</code>. </p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to allocate initially for the DB instance. For information about valid Iops values, see see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to associate with this DB instance. If this argument is omitted, the default option group for the specified engine is used. </p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance is not publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of tags to associate with this DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies the storage type to be associated with the DB instance. </p> <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code> </p> <p>If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified; otherwise <code>gp2</code> </p>
   */
  StorageType?: string;

  /**
   * <p>A value that indicates whether the new DB instance is encrypted or not. </p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance. </p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key. </p> <p>If the <code>StorageEncrypted</code> parameter is enabled, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied. </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. </p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0. </p> <p>Valid Values: 0, 1, 5, 10, 15, 30, 60 </p> <p>Default: <code>0</code> </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i> </p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value. </p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the engine of your source database. </p> <p>Valid Values: <code>mysql</code> </p>
   */
  SourceEngine: string;

  /**
   * <p>The engine version of your source database. </p> <p>Valid Values: <code>5.6</code> </p>
   */
  SourceEngineVersion: string;

  /**
   * <p>The name of your Amazon S3 bucket that contains your database backup file. </p>
   */
  S3BucketName: string;

  /**
   * <p>The prefix of your Amazon S3 bucket. </p>
   */
  S3Prefix?: string;

  /**
   * <p>An AWS Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket. </p>
   */
  S3IngestionRoleArn: string;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), the KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<_ProcessorFeature> | Iterable<_ProcessorFeature>;

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. </p>
   */
  DeletionProtection?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
