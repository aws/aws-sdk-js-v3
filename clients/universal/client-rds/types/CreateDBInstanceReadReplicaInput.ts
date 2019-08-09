import { _Tag } from "./_Tag";
import { _ProcessorFeature } from "./_ProcessorFeature";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDBInstanceReadReplicaInput shape
 */
export interface CreateDBInstanceReadReplicaInput {
  /**
   * <p>The DB instance identifier of the Read Replica. This identifier is the unique key that identifies a DB instance. This parameter is stored as a lowercase string.</p>
   */
  DBInstanceIdentifier: string;

  /**
   * <p>The identifier of the DB instance that will act as the source for the Read Replica. Each DB instance can have up to five Read Replicas.</p> <p>Constraints:</p> <ul> <li> <p>Must be the identifier of an existing MySQL, MariaDB, Oracle, or PostgreSQL DB instance.</p> </li> <li> <p>Can specify a DB instance that is a MySQL Read Replica only if the source is running MySQL 5.6 or later.</p> </li> <li> <p>For the limitations of Oracle Read Replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Read Replica Limitations with Oracle</a> in the <i>Amazon RDS User Guide</i>.</p> </li> <li> <p>Can specify a DB instance that is a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or later (9.4.7 and higher for cross-region replication).</p> </li> <li> <p>The specified DB instance must have automatic backups enabled, its backup retention period must be greater than 0.</p> </li> <li> <p>If the source DB instance is in the same AWS Region as the Read Replica, specify a valid DB instance identifier.</p> </li> <li> <p>If the source DB instance is in a different AWS Region than the Read Replica, specify a valid DB instance ARN. For more information, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing"> Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p> </li> </ul>
   */
  SourceDBInstanceIdentifier: string;

  /**
   * <p>The compute and memory capacity of the Read Replica, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p> <p>Default: Inherits from the source DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The Availability Zone (AZ) where the Read Replica will be created.</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The port number that the DB instance uses for connections.</p> <p>Default: Inherits from the source DB instance</p> <p>Valid Values: <code>1150-65535</code> </p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the Read Replica is in a Multi-AZ deployment. </p> <p>You can create a Read Replica as a Multi-AZ DB instance. RDS creates a standby of your replica in another Availability Zone for failover support for the replica. Creating your Read Replica as a Multi-AZ DB instance is independent of whether the source database is a Multi-AZ DB instance. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the Read Replica during the maintenance window.</p> <p>Default: Inherits from the source DB instance</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The option group the DB instance is associated with. If omitted, the option group associated with the source instance is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance is not publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address. For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance is not created in a VPC.</p> <p>Constraints:</p> <ul> <li> <p>Can only be specified if the source DB instance identifier specifies a DB instance in another AWS Region.</p> </li> <li> <p>If supplied, must match the name of an existing DBSubnetGroup.</p> </li> <li> <p>The specified DB subnet group must be in the same AWS Region in which the operation is running.</p> </li> <li> <p>All Read Replicas in one AWS Region that are created from the same source DB instance must either:&gt;</p> <ul> <li> <p>Specify DB subnet groups from the same VPC. All these Read Replicas are created in the same VPC.</p> </li> <li> <p>Not specify a DB subnet group. All these Read Replicas are created outside of any VPC.</p> </li> </ul> </li> </ul> <p>Example: <code>mySubnetgroup</code> </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p> A list of EC2 VPC security groups to associate with the Read Replica. </p> <p> Default: The default EC2 VPC security group for the DB subnet group's VPC. </p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the storage type to be associated with the Read Replica.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
   */
  StorageType?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the Read Replica to snapshots of the Read Replica. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the Read Replica. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The AWS KMS key ID for an encrypted Read Replica. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p> <p>If you create an encrypted Read Replica in the same AWS Region as the source DB instance, then you do not have to specify a value for this parameter. The Read Replica is encrypted with the same KMS key as the source DB instance. </p> <p>If you create an encrypted Read Replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region. </p> <p>You can't create an encrypted Read Replica from an unencrypted DB instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the <code>CreateDBInstanceReadReplica</code> API action in the source AWS Region that contains the source DB instance. </p> <p>You must specify this parameter when you create an encrypted Read Replica from another AWS Region by using the Amazon RDS API. You can specify the <code>--source-region</code> option instead of this parameter when you create an encrypted Read Replica from another AWS Region by using the AWS CLI. </p> <p>The presigned URL must be a valid request for the <code>CreateDBInstanceReadReplica</code> API action that can be executed in the source AWS Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: </p> <ul> <li> <p> <code>DestinationRegion</code> - The AWS Region that the encrypted Read Replica is created in. This AWS Region is the same one where the <code>CreateDBInstanceReadReplica</code> action is called that contains this presigned URL. </p> <p>For example, if you create an encrypted DB instance in the us-west-1 AWS Region, from a source DB instance in the us-east-2 AWS Region, then you call the <code>CreateDBInstanceReadReplica</code> action in the us-east-1 AWS Region and provide a presigned URL that contains a call to the <code>CreateDBInstanceReadReplica</code> action in the us-west-2 AWS Region. For this example, the <code>DestinationRegion</code> in the presigned URL must be set to the us-east-1 AWS Region. </p> </li> <li> <p> <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the Read Replica in the destination AWS Region. This is the same identifier for both the <code>CreateDBInstanceReadReplica</code> action that is called in the destination AWS Region, and the action contained in the presigned URL. </p> </li> <li> <p> <code>SourceDBInstanceIdentifier</code> - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are creating an encrypted Read Replica from a DB instance in the us-west-2 AWS Region, then your <code>SourceDBInstanceIdentifier</code> looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115</code>. </p> </li> </ul> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>. </p>
   */
  PreSignedUrl?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>You can enable IAM database authentication for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> <li> <p>Aurora MySQL 5.6 or higher</p> </li> </ul>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the Read Replica. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>. </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of logs that the new DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
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
