import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";
import {
  _DBSecurityGroupMembership,
  _UnmarshalledDBSecurityGroupMembership
} from "./_DBSecurityGroupMembership";
import {
  _VpcSecurityGroupMembership,
  _UnmarshalledVpcSecurityGroupMembership
} from "./_VpcSecurityGroupMembership";
import {
  _DBParameterGroupStatus,
  _UnmarshalledDBParameterGroupStatus
} from "./_DBParameterGroupStatus";
import { _DBSubnetGroup, _UnmarshalledDBSubnetGroup } from "./_DBSubnetGroup";
import {
  _PendingModifiedValues,
  _UnmarshalledPendingModifiedValues
} from "./_PendingModifiedValues";
import {
  _OptionGroupMembership,
  _UnmarshalledOptionGroupMembership
} from "./_OptionGroupMembership";
import {
  _DBInstanceStatusInfo,
  _UnmarshalledDBInstanceStatusInfo
} from "./_DBInstanceStatusInfo";
import {
  _DomainMembership,
  _UnmarshalledDomainMembership
} from "./_DomainMembership";
import {
  _ProcessorFeature,
  _UnmarshalledProcessorFeature
} from "./_ProcessorFeature";
import {
  _DBInstanceRole,
  _UnmarshalledDBInstanceRole
} from "./_DBInstanceRole";

/**
 * <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
 */
export interface _DBInstance {
  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>Contains the master username for the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p> <p> <b>MySQL, MariaDB, SQL Server, PostgreSQL</b> </p> <p>Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.</p> <p>Type: String</p> <p> <b>Oracle</b> </p> <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance.</p>
   */
  DBName?: string;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: _Endpoint;

  /**
   * <p>Specifies the allocated storage size specified in gibibytes.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date | string | number;

  /**
   * <p> Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>. </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p> A list of DB security group elements containing <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements. </p>
   */
  DBSecurityGroups?:
    | Array<_DBSecurityGroupMembership>
    | Iterable<_DBSecurityGroupMembership>;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?:
    | Array<_VpcSecurityGroupMembership>
    | Iterable<_VpcSecurityGroupMembership>;

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?:
    | Array<_DBParameterGroupStatus>
    | Iterable<_DBParameterGroupStatus>;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: _DBSubnetGroup;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: _PendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date | string | number;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read Replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: Array<string> | Iterable<string>;

  /**
   * <p>Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a Read Replica. For example, when you create an Aurora Read Replica of an RDS MySQL DB instance, the Aurora MySQL DB cluster for the Aurora Read Replica is shown. This output does not contain information about cross region Aurora Read Replicas.</p> <note> <p>Currently, each RDS DB instance can have only one Aurora Read Replica.</p> </note>
   */
  ReadReplicaDBClusterIdentifiers?: Array<string> | Iterable<string>;

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   */
  Iops?: number;

  /**
   * <p>Provides the list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?:
    | Array<_OptionGroupMembership>
    | Iterable<_OptionGroupMembership>;

  /**
   * <p>If present, specifies the name of the character set that this instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>
   */
  StatusInfos?: Array<_DBInstanceStatusInfo> | Iterable<_DBInstanceStatusInfo>;

  /**
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p> If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The Active Directory Domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: Array<_DomainMembership> | Iterable<_DomainMembership>;

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see <code>DBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p>
   */
  PromotionTier?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>The time zone of the DB instance. In most cases, the <code>Timezone</code> element is empty. <code>Timezone</code> content appears only for Microsoft SQL Server DB instances that were created with a time zone specified. </p>
   */
  Timezone?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p> <p>IAM database authentication can be enabled for the following database engines</p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> <li> <p>Aurora 5.6 or higher. To enable IAM database authentication for Aurora, see DBCluster Type.</p> </li> </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>True if Performance Insights is enabled for the DB instance, and otherwise false.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p> <p>Log types vary by DB engine. For information about the log types for each DB engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  EnabledCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<_ProcessorFeature> | Iterable<_ProcessorFeature>;

  /**
   * <p>Indicates if the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p> The AWS Identity and Access Management (IAM) roles associated with the DB instance. </p>
   */
  AssociatedRoles?: Array<_DBInstanceRole> | Iterable<_DBInstanceRole>;

  /**
   * <p>Specifies the listener connection endpoint for SQL Server Always On.</p>
   */
  ListenerEndpoint?: _Endpoint;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;
}

export interface _UnmarshalledDBInstance extends _DBInstance {
  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: _UnmarshalledEndpoint;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p> A list of DB security group elements containing <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements. </p>
   */
  DBSecurityGroups?: Array<_UnmarshalledDBSecurityGroupMembership>;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: Array<_UnmarshalledVpcSecurityGroupMembership>;

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?: Array<_UnmarshalledDBParameterGroupStatus>;

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: _UnmarshalledDBSubnetGroup;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: _UnmarshalledPendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: Array<string>;

  /**
   * <p>Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a Read Replica. For example, when you create an Aurora Read Replica of an RDS MySQL DB instance, the Aurora MySQL DB cluster for the Aurora Read Replica is shown. This output does not contain information about cross region Aurora Read Replicas.</p> <note> <p>Currently, each RDS DB instance can have only one Aurora Read Replica.</p> </note>
   */
  ReadReplicaDBClusterIdentifiers?: Array<string>;

  /**
   * <p>Provides the list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: Array<_UnmarshalledOptionGroupMembership>;

  /**
   * <p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>
   */
  StatusInfos?: Array<_UnmarshalledDBInstanceStatusInfo>;

  /**
   * <p>The Active Directory Domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: Array<_UnmarshalledDomainMembership>;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p> <p>Log types vary by DB engine. For information about the log types for each DB engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  EnabledCloudwatchLogsExports?: Array<string>;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<_UnmarshalledProcessorFeature>;

  /**
   * <p> The AWS Identity and Access Management (IAM) roles associated with the DB instance. </p>
   */
  AssociatedRoles?: Array<_UnmarshalledDBInstanceRole>;

  /**
   * <p>Specifies the listener connection endpoint for SQL Server Always On.</p>
   */
  ListenerEndpoint?: _UnmarshalledEndpoint;
}
