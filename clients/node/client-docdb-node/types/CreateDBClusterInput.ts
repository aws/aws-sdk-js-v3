import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input to <a>CreateDBCluster</a>.</p>
 */
export interface CreateDBClusterInput {
  /**
   * <p>A list of Amazon EC2 Availability Zones that instances in the DB cluster can be created in.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35.</p> </li> </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster</code> </p>
   */
  DBClusterIdentifier: string;

  /**
   * <p> The name of the DB cluster parameter group to associate with this DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p> <p>Valid values: <code>docdb</code> </p>
   */
  Engine: string;

  /**
   * <p>The version number of the database engine to use.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be from 1 to 16 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul>
   */
  MasterUsername: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword: string;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.</p> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The tags to be assigned to the DB cluster.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are creating a DB cluster using the same AWS account that owns the AWS KMS encryption key that is used to encrypt the new DB cluster, you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon DocumentDB uses the encryption key that is used to encrypt the source. Otherwise, Amazon DocumentDB uses your default encryption key. </p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is <code>true</code> and <code>ReplicationSourceIdentifier</code> is not specified, Amazon DocumentDB uses your default encryption key.</p> </li> </ul> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p> <p>If you create a replica of an encrypted DB cluster in another AWS Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the replica in that AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether this cluster can be deleted. If <code>DeletionProtection</code> is enabled, the cluster cannot be deleted unless it is modified and <code>DeletionProtection</code> is disabled. <code>DeletionProtection</code> protects clusters from being accidentally deleted.</p>
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
