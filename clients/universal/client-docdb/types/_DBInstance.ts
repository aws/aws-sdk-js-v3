import { _Endpoint, _UnmarshalledEndpoint } from "./_Endpoint";
import {
  _VpcSecurityGroupMembership,
  _UnmarshalledVpcSecurityGroupMembership
} from "./_VpcSecurityGroupMembership";
import { _DBSubnetGroup, _UnmarshalledDBSubnetGroup } from "./_DBSubnetGroup";
import {
  _PendingModifiedValues,
  _UnmarshalledPendingModifiedValues
} from "./_PendingModifiedValues";
import {
  _DBInstanceStatusInfo,
  _UnmarshalledDBInstanceStatusInfo
} from "./_DBInstanceStatusInfo";

/**
 * <p>Detailed information about a DB instance. </p>
 */
export interface _DBInstance {
  /**
   * <p>Contains a user-provided database identifier. This identifier is the unique key that identifies a DB instance.</p>
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
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: _Endpoint;

  /**
   * <p>Provides the date and time that the DB instance was created.</p>
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
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?:
    | Array<_VpcSecurityGroupMembership>
    | Iterable<_VpcSecurityGroupMembership>;

  /**
   * <p>Specifies the name of the Availability Zone that the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies information on the subnet group that is associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: _DBSubnetGroup;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: _PendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date | string | number;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Specifies the availability options for the DB instance. A value of <code>true</code> specifies an internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of <code>false</code> specifies an internal instance with a DNS name that resolves to a private IP address.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The status of a read replica. If the instance is not a read replica, this is blank.</p>
   */
  StatusInfos?: Array<_DBInstanceStatusInfo> | Iterable<_DBInstanceStatusInfo>;

  /**
   * <p>Contains the name of the DB cluster that the DB instance is a member of if the DB instance is a member of a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p> If <code>StorageEncrypted</code> is <code>true</code>, the AWS KMS key identifier for the encrypted DB instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>A list of log types that this DB instance is configured to export to Amazon CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDBInstance extends _DBInstance {
  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: _UnmarshalledEndpoint;

  /**
   * <p>Provides the date and time that the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: Array<_UnmarshalledVpcSecurityGroupMembership>;

  /**
   * <p>Specifies information on the subnet group that is associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: _UnmarshalledDBSubnetGroup;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is included only when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: _UnmarshalledPendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>The status of a read replica. If the instance is not a read replica, this is blank.</p>
   */
  StatusInfos?: Array<_UnmarshalledDBInstanceStatusInfo>;

  /**
   * <p>A list of log types that this DB instance is configured to export to Amazon CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: Array<string>;
}
