import { _Tag } from "./_Tag";
import { _ProcessorFeature } from "./_ProcessorFeature";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface RestoreDBInstanceToPointInTimeInput {
  /**
   * <p>The identifier of the source DB instance from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DB instance.</p> </li> </ul>
   */
  SourceDBInstanceIdentifier?: string;

  /**
   * <p>The name of the new DB instance to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
   */
  TargetDBInstanceIdentifier: string;

  /**
   * <p>The date and time to restore from.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p> </li> </ul> <p>Example: <code>2009-09-07T23:45:00Z</code> </p>
   */
  RestoreTime?: Date | string | number;

  /**
   * <p> A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance is not restored from the latest backup time. </p> <p>Constraints: Can't be specified if the <code>RestoreTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The port number on which the database accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p> <p>Default: A random, system-chosen Availability Zone.</p> <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p> <p>Example: <code>us-east-1a</code> </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The DB subnet group name to use for the new instance.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p> <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance is not publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for the restored DB instance.</p> <p>Default: Same as source.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
   */
  LicenseModel?: string;

  /**
   * <p>The database name for the restored DB instance.</p> <note> <p>This parameter is not used for the MySQL or MariaDB engines.</p> </note>
   */
  DBName?: string;

  /**
   * <p>The database engine to use for the new instance.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p> <p>Valid Values:</p> <ul> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>
   */
  Engine?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p> <p>Constraints: Must be an integer greater than 1000.</p> <p> <b>SQL Server</b> </p> <p>Setting the IOPS value for the SQL Server database engine is not supported.</p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
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
   * <p> A list of EC2 VPC security groups to associate with this DB instance. </p> <p> Default: The default EC2 VPC security group for the DB subnet group's VPC. </p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>Specify the Active Directory Domain to restore the instance in.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>You can enable IAM database authentication for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> </ul>
   */
  EnableIAMDatabaseAuthentication?: boolean;

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
   * <p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The resource ID of the source DB instance from which to restore.</p>
   */
  SourceDbiResourceId?: string;

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
