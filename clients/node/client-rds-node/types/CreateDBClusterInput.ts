import { _Tag } from "./_Tag";
import { _ScalingConfiguration } from "./_ScalingConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateDBClusterInput {
  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html">Choosing the Regions and Availability Zones</a> in the <i>Amazon Aurora User Guide</i>. </p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The number of days for which automated backups are retained.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon RDS will not create a database in the DB cluster you are creating.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
   */
  DBClusterIdentifier: string;

  /**
   * <p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used. </p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DB cluster parameter group.</p> </li> </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), and <code>aurora-postgresql</code> </p>
   */
  Engine: string;

  /**
   * <p>The version number of the database engine to use.</p> <p> <b>Aurora MySQL</b> </p> <p>Example: <code>5.6.10a</code>, <code>5.7.12</code> </p> <p> <b>Aurora PostgreSQL</b> </p> <p>Example: <code>9.6.3</code> </p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>3306</code> if engine is set as aurora or <code>5432</code> if set to aurora-postgresql. </p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.</p> <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Tags to assign to the DB cluster.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A value that indicates whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon RDS will use the encryption key used to encrypt the source. Otherwise, Amazon RDS will use your default encryption key. </p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is enabled and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon RDS will use your default encryption key.</p> </li> </ul> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the Read Replica in that AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A URL that contains a Signature Version 4 signed request for the <code>CreateDBCluster</code> action to be called in the source AWS Region where the DB cluster is replicated from. You only need to specify <code>PreSignedUrl</code> when you are performing cross-region replication from an encrypted DB cluster.</p> <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied.</p> <p>The pre-signed URL request must contain the following parameter values:</p> <ul> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB cluster in the destination AWS Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code> action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p> </li> <li> <p> <code>DestinationRegion</code> - The name of the AWS Region that Aurora Read Replica will be created in.</p> </li> <li> <p> <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an encrypted DB cluster from the us-west-2 AWS Region, then your <code>ReplicationSourceIdentifier</code> would look like Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0. </p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, <code>parallelquery</code>, or <code>global</code>.</p>
   */
  EngineMode?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: _ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p> The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

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
