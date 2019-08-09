import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDBInstanceInput shape
 */
export interface CreateDBInstanceInput {
  /**
   * <p>Not supported.</p>
   */
  DBName?: string;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
   */
  DBInstanceIdentifier: string;

  /**
   * <p>The amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Type: Integer</p> <p>Not applicable. Neptune cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in a Neptune cluster volume.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions.</p>
   */
  DBInstanceClass: string;

  /**
   * <p>The name of the database engine to be used for this instance.</p> <p>Valid Values: <code>neptune</code> </p>
   */
  Engine: string;

  /**
   * <p>The name for the master user. Not used.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p> <p> Not used.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p> The EC2 Availability Zone that the DB instance is created in</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same AWS Region as the current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p> The daily time range during which automated backups are created.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>Indicates that the DB instance should be associated with the specified option group.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>Indicates that the DB instance should be associated with the specified CharacterSet.</p> <p>Not applicable. The character set is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The tags to assign to the new instance.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specify the Active Directory Domain to create the instance in.</p>
   */
  Domain?: string;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>True to enable AWS Identity and Access Management (IAM) authentication for Neptune.</p> <p>Default: <code>false</code> </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>True to enable Performance Insights for the DB instance, and otherwise false.</p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string> | Iterable<string>;

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
