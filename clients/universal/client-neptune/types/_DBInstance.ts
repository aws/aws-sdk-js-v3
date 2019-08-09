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

/**
 * <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
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
   * <p>The database name.</p>
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
   * <p> Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p> Provides List of DB security group elements containing only <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
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
   * <p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB instance.</p>
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
   * <p>This flag should no longer be used.</p>
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
   * <p>Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p> Not supported: The encryption for DB instances is managed by the DB cluster.</p>
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
   * <p>Not supported</p>
   */
  DomainMemberships?: Array<_DomainMembership> | Iterable<_DomainMembership>;

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</p>
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
   * <p>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p>
   */
  PromotionTier?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>Not supported.</p>
   */
  Timezone?: string;

  /**
   * <p>True if AWS Identity and Access Management (IAM) authentication is enabled, and otherwise false.</p>
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
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: Array<string> | Iterable<string>;
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
   * <p> Provides List of DB security group elements containing only <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
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
   * <p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB instance.</p>
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
   * <p>Not supported</p>
   */
  DomainMemberships?: Array<_UnmarshalledDomainMembership>;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: Array<string>;
}
