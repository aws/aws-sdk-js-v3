import {
  _DBClusterOptionGroupStatus,
  _UnmarshalledDBClusterOptionGroupStatus
} from "./_DBClusterOptionGroupStatus";
import {
  _DBClusterMember,
  _UnmarshalledDBClusterMember
} from "./_DBClusterMember";
import {
  _VpcSecurityGroupMembership,
  _UnmarshalledVpcSecurityGroupMembership
} from "./_VpcSecurityGroupMembership";
import { _DBClusterRole, _UnmarshalledDBClusterRole } from "./_DBClusterRole";
import {
  _ScalingConfigurationInfo,
  _UnmarshalledScalingConfigurationInfo
} from "./_ScalingConfigurationInfo";

/**
 * <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
 */
export interface _DBCluster {
  /**
   * <p>For all database engines except Amazon Aurora, <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB). For Aurora, <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size is not fixed, but instead automatically adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>If present, specifies the name of the character set that this cluster is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time restore.</p>
   */
  EarliestRestorableTime?: Date | string | number;

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster. </p> <p>If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Identifies all custom endpoints associated with the cluster.</p>
   */
  CustomEndpoints?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date | string | number;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Contains the master username for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Provides the list of option group memberships for this DB cluster.</p>
   */
  DBClusterOptionGroupMemberships?:
    | Array<_DBClusterOptionGroupStatus>
    | Iterable<_DBClusterOptionGroupStatus>;

  /**
   * <p>Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Contains the identifier of the source DB cluster if this DB cluster is a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: Array<string> | Iterable<string>;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: Array<_DBClusterMember> | Iterable<_DBClusterMember>;

  /**
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?:
    | Array<_VpcSecurityGroupMembership>
    | Iterable<_VpcSecurityGroupMembership>;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is enabled, the AWS KMS key identifier for the encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.</p>
   */
  AssociatedRoles?: Array<_DBClusterRole> | Iterable<_DBClusterRole>;

  /**
   * <p>A value that indicates whether the mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date | string | number;

  /**
   * <p>The earliest time to which a DB cluster can be backtracked.</p>
   */
  EarliestBacktrackTime?: Date | string | number;

  /**
   * <p>The target backtrack window, in seconds. If this value is set to 0, backtracking is disabled for the DB cluster. Otherwise, backtracking is enabled.</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of change records stored for Backtrack.</p>
   */
  BacktrackConsumedChangeRecords?: number;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p> <p>Log types vary by DB engine. For information about the log types for each DB engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i> </p>
   */
  EnabledCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>The current capacity of an Aurora Serverless DB cluster. The capacity is 0 (zero) when the cluster is paused.</p> <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  Capacity?: number;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>, or <code>parallelquery</code>.</p>
   */
  EngineMode?: string;

  /**
   * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  ScalingConfigurationInfo?: _ScalingConfigurationInfo;

  /**
   * <p>Indicates if the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p> <p>When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>The mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. </p>
   */
  ActivityStreamMode?: "sync" | "async" | string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?:
    | "stopped"
    | "starting"
    | "started"
    | "stopping"
    | string;

  /**
   * <p>The AWS KMS key identifier used for encrypting messages in the database activity stream.</p>
   */
  ActivityStreamKmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  ActivityStreamKinesisStreamName?: string;

  /**
   * <p>Specifies whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specifies whether the DB cluster is a clone of a DB cluster owned by a different AWS account.</p>
   */
  CrossAccountClone?: boolean;
}

export interface _UnmarshalledDBCluster extends _DBCluster {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>Identifies all custom endpoints associated with the cluster.</p>
   */
  CustomEndpoints?: Array<string>;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Provides the list of option group memberships for this DB cluster.</p>
   */
  DBClusterOptionGroupMemberships?: Array<
    _UnmarshalledDBClusterOptionGroupStatus
  >;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: Array<string>;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: Array<_UnmarshalledDBClusterMember>;

  /**
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: Array<_UnmarshalledVpcSecurityGroupMembership>;

  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.</p>
   */
  AssociatedRoles?: Array<_UnmarshalledDBClusterRole>;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The earliest time to which a DB cluster can be backtracked.</p>
   */
  EarliestBacktrackTime?: Date;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p> <p>Log types vary by DB engine. For information about the log types for each DB engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i> </p>
   */
  EnabledCloudwatchLogsExports?: Array<string>;

  /**
   * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  ScalingConfigurationInfo?: _UnmarshalledScalingConfigurationInfo;
}
