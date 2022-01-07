import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

import {
  AccountDetails,
  Action,
  ActionTarget,
  Adjustment,
  AdminAccount,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2StageDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCloudFrontDistributionDetails,
  AwsCloudTrailTrailDetails,
  AwsCodeBuildProjectDetails,
  AwsDynamoDbTableDetails,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2SecurityGroupDetails,
  AwsEc2SubnetDetails,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpcEndpointServiceDetails,
  AwsEc2VpnConnectionDetails,
  AwsEcrContainerImageDetails,
  AwsEcrRepositoryDetails,
  AwsEcsClusterDetails,
  AwsEcsServiceDetails,
  AwsEcsTaskDefinitionDetails,
  AwsEksClusterDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticsearchDomainDetails,
  AwsElbLoadBalancerDetails,
  AwsElbv2LoadBalancerDetails,
  AwsIamAccessKeyDetails,
  AwsIamGroupDetails,
  AwsIamPolicyDetails,
  AwsIamRoleDetails,
  AwsIamUserDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionDetails,
  AwsLambdaLayerVersionDetails,
  AwsNetworkFirewallFirewallDetails,
  AwsNetworkFirewallFirewallPolicyDetails,
  AwsNetworkFirewallRuleGroupDetails,
  AwsOpenSearchServiceDomainDetails,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbDomainMembership,
  AwsRdsDbInstanceAssociatedRole,
  AwsRdsDbInstanceEndpoint,
  AwsRdsDbInstanceVpcSecurityGroup,
  AwsRdsDbOptionGroupMembership,
  AwsRdsDbParameterGroup,
  AwsRdsDbSubnetGroup,
  AwsRdsPendingCloudWatchLogsExports,
} from "./models_0";

/**
 * <p>A processor feature.</p>
 */
export interface AwsRdsDbProcessorFeature {
  /**
   * <p>The name of the processor feature.</p>
   */
  Name?: string;

  /**
   * <p>The value of the processor feature.</p>
   */
  Value?: string;
}

export namespace AwsRdsDbProcessorFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbProcessorFeature): any => ({
    ...obj,
  });
}

/**
 * <p>Changes to a DB instance that are currently pending.</p>
 */
export interface AwsRdsDbPendingModifiedValues {
  /**
   * <p>The new DB instance class for the DB instance.</p>
   */
  DbInstanceClass?: string;

  /**
   * <p>The new value of the allocated storage for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new master user password for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The new backup retention period for the DB instance.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that a single Availability Zone DB instance is changing to a multiple Availability Zone deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The new engine version for the DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new license model value for the DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The new provisioned IOPS value for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The new DB instance identifier for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The new storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The new CA certificate identifier for the DB instance.</p>
   */
  CaCertificateIdentifier?: string;

  /**
   * <p>The name of the new subnet group for the DB instance.</p>
   */
  DbSubnetGroupName?: string;

  /**
   * <p>A list of log types that are being enabled or disabled.</p>
   */
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;

  /**
   * <p>Processor features that are being updated.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}

export namespace AwsRdsDbPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of a read replica.</p>
 */
export interface AwsRdsDbStatusInfo {
  /**
   * <p>The type of status. For a read replica, the status type is read replication.</p>
   */
  StatusType?: string;

  /**
   * <p>Whether the read replica instance is operating normally.</p>
   */
  Normal?: boolean;

  /**
   * <p>The status of the read replica instance.</p>
   */
  Status?: string;

  /**
   * <p>If the read replica is currently in an error state, provides the error details.</p>
   */
  Message?: string;
}

export namespace AwsRdsDbStatusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 */
export interface AwsRdsDbInstanceDetails {
  /**
   * <p>The IAM roles associated with the DB
   *          instance.</p>
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The Amazon Web Services Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in CloudTrail log entries whenever the KMS key for the DB instance is
   *          accessed. </p>
   */
  DbiResourceId?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create
   *          time, if one was specified when the DB instance was created. This same name is returned for
   *          the life of the DB instance.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the
   *          returned parameters do not apply to an Oracle DB instance. </p>
   */
  DBName?: string;

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of IAM accounts to database
   *          accounts is enabled, and otherwise false.</p>
   *          <p>IAM database authentication can be enabled for the following database engines.</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Indicates when the DB instance was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the KMS key identifier for the encrypted
   *          DB instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Whether the DB instance is a multiple Availability Zone deployment.</p>
   */
  MultiAz?: boolean;

  /**
   * <p>The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics
   *          data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>The current status of the DB instance.</p>
   */
  DbInstanceStatus?: string;

  /**
   * <p>The master user name of the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The amount of storage (in gigabytes) to initially allocate for the DB instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The range of time each day when automated backups are created, if automated backups are
   *          enabled.</p>
   *          <p>Uses the format <code>HH:MM-HH:MM</code>. For example, <code>04:52-05:22</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The number of days for which to retain automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A list of the DB security groups to assign to the DB instance.</p>
   */
  DbSecurityGroups?: string[];

  /**
   * <p>A list of the DB parameter groups to assign to the DB instance.</p>
   */
  DbParameterGroups?: AwsRdsDbParameterGroup[];

  /**
   * <p>The Availability Zone where the DB instance will be created.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Information about the subnet group that is associated with the DB instance.</p>
   */
  DbSubnetGroup?: AwsRdsDbSubnetGroup;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p>Uses the format <code><day>:HH:MM-<day>:HH:MM</code>.</p>
   *          <p>For the day values, use
   *             <code>mon</code>|<code>tue</code>|<code>wed</code>|<code>thu</code>|<code>fri</code>|<code>sat</code>|<code>sun</code>.</p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Changes to the DB instance that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *          restore.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LatestRestorableTime?: string;

  /**
   * <p>Indicates whether minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>If this DB instance is a read replica, contains the identifier of the source DB
   *          instance.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>List of identifiers of the read replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as
   *          a read replica.</p>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the provisioned IOPS (I/O operations per second) for this DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  /**
   * <p>The name of the character set that this DB instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>For a DB instance with multi-Availability Zone support, the name of the secondary
   *          Availability Zone.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a read replica. If the instance isn't a read replica, this is
   *          empty.</p>
   */
  StatusInfos?: AwsRdsDbStatusInfo[];

  /**
   * <p>The storage type for the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The Active Directory domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: AwsRdsDbDomainMembership[];

  /**
   * <p>Whether to copy resource tags to snapshots of the DB instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when enhanced monitoring metrics are collected
   *          for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to
   *          CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The order in which to promote an Aurora replica to the primary instance after a failure
   *          of the existing primary instance.</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>Indicates whether Performance Insights is enabled for the DB instance.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The identifier of the KMS key used to encrypt the Performance Insights data.</p>
   */
  PerformanceInsightsKmsKeyId?: string;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudWatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of
   *          the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;
}

export namespace AwsRdsDbInstanceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about an Amazon RDS DB cluster snapshot.</p>
 */
export interface AwsRdsDbSnapshotDetails {
  /**
   * <p>The name or ARN of the DB snapshot that is used to restore the DB instance.</p>
   */
  DbSnapshotIdentifier?: string;

  /**
   * <p>A name for the DB instance.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>When the snapshot was taken in Coordinated Universal Time (UTC).</p>
   */
  SnapshotCreateTime?: string;

  /**
   * <p>The name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the database instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>The port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the name of the Availability Zone in which the DB instance was located at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;

  /**
   * <p>Specifies the time in Coordinated Universal Time (UTC) when the DB instance, from which the snapshot was taken, was created.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>The master user name for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>The provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>The option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>The Amazon Web Services Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>The DB snapshot ARN that the DB snapshot was copied from.</p>
   */
  SourceDbSnapshotIdentifier?: string;

  /**
   * <p>The storage type associated with the DB snapshot.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>If <code>Encrypted</code> is <code>true</code>, the KMS key identifier for the encrypted DB snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time zone of the DB snapshot.</p>
   */
  Timezone?: string;

  /**
   * <p>Whether mapping of IAM accounts to database accounts is enabled.</p>
   */
  IamDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];

  /**
   * <p>The identifier for the source DB instance.</p>
   */
  DbiResourceId?: string;
}

export namespace AwsRdsDbSnapshotDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsDbSnapshotDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.</p>
 */
export interface AwsRdsEventSubscriptionDetails {
  /**
   * <p>The identifier of the account that is associated with the event notification subscription.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The identifier of the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>Whether the event notification subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The ARN of the event notification subscription.</p>
   */
  EventSubscriptionArn?: string;

  /**
   * <p>The ARN of the SNS topic to post the event notifications to.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of source identifiers for the event notification subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>The status of the event notification subscription.</p>
   *          <p>Valid values: <code>creating</code> | <code>modifying</code> | <code>deleting</code> | <code>active</code> | <code>no-permission</code> | <code>topic-not-exist</code>
   *          </p>
   */
  Status?: string;

  /**
   * <p>The datetime when the event notification subscription was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  SubscriptionCreationTime?: string;
}

export namespace AwsRdsEventSubscriptionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRdsEventSubscriptionDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A node in an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterNode {
  /**
   * <p>The role of the node. A node might be a leader node or a compute node.</p>
   */
  NodeRole?: string;

  /**
   * <p>The private IP address of the node.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The public IP address of the node.</p>
   */
  PublicIpAddress?: string;
}

export namespace AwsRedshiftClusterClusterNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterNode): any => ({
    ...obj,
  });
}

/**
 * <p>The status of a parameter in a cluster parameter group for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterStatus {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The status of the parameter. Indicates whether the parameter is in sync with the
   *          database, waiting for a cluster reboot, or encountered an error when it was applied.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>pending-reboot</code> | <code>applying</code>
   *          | <code>invalid-parameter</code> | <code>apply-deferred</code> | <code>apply-error</code> |
   *             <code>unknown-error</code>
   *          </p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The error that prevented the parameter from being applied to the database.</p>
   */
  ParameterApplyErrorDescription?: string;
}

export namespace AwsRedshiftClusterClusterParameterStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterParameterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A cluster parameter group that is associated with an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterClusterParameterGroup {
  /**
   * <p>The list of parameter statuses.</p>
   */
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  /**
   * <p>The status of updates to the parameters.</p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;
}

export namespace AwsRedshiftClusterClusterParameterGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterParameterGroup): any => ({
    ...obj,
  });
}

/**
 * <p>A security group that is associated with the cluster.</p>
 */
export interface AwsRedshiftClusterClusterSecurityGroup {
  /**
   * <p>The name of the cluster security group.</p>
   */
  ClusterSecurityGroupName?: string;

  /**
   * <p>The status of the cluster security group.</p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterClusterSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a cross-Region snapshot copy.</p>
 */
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * <p>The destination Region that snapshots are automatically copied to when cross-Region
   *          snapshot copy is enabled.</p>
   */
  DestinationRegion?: string;

  /**
   * <p>The number of days that manual snapshots are retained in the destination region after
   *          they are copied from a source region.</p>
   *          <p>If the value is -1, then the manual snapshot is retained indefinitely.</p>
   *          <p>Valid values: Either -1 or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The number of days to retain automated snapshots in the destination Region after they
   *          are copied from a source Region.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;
}

export namespace AwsRedshiftClusterClusterSnapshotCopyStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterClusterSnapshotCopyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A time windows during which maintenance was deferred for an Amazon Redshift
 *          cluster.</p>
 */
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * <p>The end of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceEndTime?: string;

  /**
   * <p>The identifier of the maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>The start of the time window for which maintenance was deferred.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  DeferMaintenanceStartTime?: string;
}

export namespace AwsRedshiftClusterDeferredMaintenanceWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterDeferredMaintenanceWindow): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the elastic IP (EIP) address for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterElasticIpStatus {
  /**
   * <p>The elastic IP address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP address.</p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterElasticIpStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterElasticIpStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The connection endpoint for an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterEndpoint {
  /**
   * <p>The DNS address of the cluster.</p>
   */
  Address?: string;

  /**
   * <p>The port that the database engine listens on.</p>
   */
  Port?: number;
}

export namespace AwsRedshiftClusterEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Information about whether an Amazon Redshift cluster finished applying any hardware
 *          changes to security module (HSM) settings that were specified in a modify cluster
 *          command.</p>
 */
export interface AwsRedshiftClusterHsmStatus {
  /**
   * <p>The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve
   *          the data encryption keys that are stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>The name of the HSM configuration that contains the information that the Amazon Redshift
   *          cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>Indicates whether the Amazon Redshift cluster has finished applying any HSM settings
   *          changes specified in a modify cluster command.</p>
   *          <p>Type: String</p>
   *          <p>Valid values: <code>active</code> | <code>applying</code>
   *          </p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterHsmStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterHsmStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM role that the cluster can use to access other Amazon Web Services services.</p>
 */
export interface AwsRedshiftClusterIamRole {
  /**
   * <p>The status of the IAM role's association with the cluster.</p>
   *          <p>Valid values: <code>in-sync</code> | <code>adding</code> | <code>removing</code>
   *          </p>
   */
  ApplyStatus?: string;

  /**
   * <p>The ARN of the IAM role.</p>
   */
  IamRoleArn?: string;
}

export namespace AwsRedshiftClusterIamRole {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterIamRole): any => ({
    ...obj,
  });
}

/**
 * <p>Changes to the Amazon Redshift cluster that are currently pending.</p>
 */
export interface AwsRedshiftClusterPendingModifiedValues {
  /**
   * <p>The pending or in-progress change to the automated snapshot retention period.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The pending or in-progress change to the identifier for the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The pending or in-progress change to the cluster type.</p>
   */
  ClusterType?: string;

  /**
   * <p>The pending or in-progress change to the service version.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The encryption type for a cluster.</p>
   */
  EncryptionType?: string;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name of the maintenance track that the cluster changes to during the next
   *          maintenance window.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The pending or in-progress change to the master user password for the cluster.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The pending or in-progress change to the cluster's node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The pending or in-progress change to the number of nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The pending or in-progress change to whether the cluster can be connected to from the
   *          public network.</p>
   */
  PubliclyAccessible?: boolean;
}

export namespace AwsRedshiftClusterPendingModifiedValues {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the resize operation for the cluster.</p>
 */
export interface AwsRedshiftClusterResizeInfo {
  /**
   * <p>Indicates whether the resize operation can be canceled.</p>
   */
  AllowCancelResize?: boolean;

  /**
   * <p>The type of resize operation.</p>
   *          <p>Valid values: <code>ClassicResize</code>
   *          </p>
   */
  ResizeType?: string;
}

export namespace AwsRedshiftClusterResizeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterResizeInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the status of a cluster restore action. It only applies if the cluster
 *          was created by restoring a snapshot.</p>
 */
export interface AwsRedshiftClusterRestoreStatus {
  /**
   * <p>The number of megabytes per second being transferred from the backup storage. Returns
   *          the average rate for a completed backup.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  CurrentRestoreRateInMegaBytesPerSecond?: number;

  /**
   * <p>The amount of time an in-progress restore has been running, or the amount of time it
   *          took a completed restore to finish.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ElapsedTimeInSeconds?: number;

  /**
   * <p>The estimate of the time remaining before the restore is complete. Returns 0 for a
   *          completed restore.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  EstimatedTimeToCompletionInSeconds?: number;

  /**
   * <p>The number of megabytes that were transferred from snapshot storage.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The size of the set of snapshot data that was used to restore the cluster.</p>
   *          <p>This field is only updated when you restore to DC2 and DS2 node types.</p>
   */
  SnapshotSizeInMegaBytes?: number;

  /**
   * <p>The status of the restore action.</p>
   *          <p>Valid values: <code>starting</code> | <code>restoring</code> | <code>completed</code> |
   *             <code>failed</code>
   *          </p>
   */
  Status?: string;
}

export namespace AwsRedshiftClusterRestoreStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterRestoreStatus): any => ({
    ...obj,
  });
}

/**
 * <p>A VPC security group that the cluster belongs to, if the cluster is in a VPC.</p>
 */
export interface AwsRedshiftClusterVpcSecurityGroup {
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The identifier of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace AwsRedshiftClusterVpcSecurityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterVpcSecurityGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon Redshift cluster.</p>
 */
export interface AwsRedshiftClusterDetails {
  /**
   * <p>Indicates whether major version upgrades are applied automatically to the cluster during
   *          the maintenance window.</p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The number of days that automatic cluster snapshots are retained.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The name of the Availability Zone in which the cluster is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The availability status of the cluster for queries. Possible values are the
   *          following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Available</code> - The cluster is available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unavailable</code> - The cluster is not available for queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maintenance</code> - The cluster is intermittently available for queries due
   *                to maintenance activities.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modifying</code> -The cluster is intermittently available for queries due to
   *                changes that modify the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The cluster failed and is not available for queries.</p>
   *             </li>
   *          </ul>
   */
  ClusterAvailabilityStatus?: string;

  /**
   * <p>Indicates when the cluster was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ClusterCreateTime?: string;

  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The nodes in the cluster.</p>
   */
  ClusterNodes?: AwsRedshiftClusterClusterNode[];

  /**
   * <p>The list of cluster parameter groups that are associated with this cluster.</p>
   */
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  /**
   * <p>The public key for the cluster.</p>
   */
  ClusterPublicKey?: string;

  /**
   * <p>The specific revision number of the database in the cluster.</p>
   */
  ClusterRevisionNumber?: string;

  /**
   * <p>A list of cluster security groups that are associated with the cluster.</p>
   */
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  /**
   * <p>Information about the destination Region and retention period for the cross-Region
   *          snapshot copy.</p>
   */
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  /**
   * <p>The current status of the cluster.</p>
   *          <p>Valid values: <code>available</code> | <code>available, prep-for-resize</code> |
   *             <code>available, resize-cleanup</code> |<code> cancelling-resize</code> |
   *             <code>creating</code> | <code>deleting</code> | <code>final-snapshot</code> |
   *             <code>hardware-failure</code> | <code>incompatible-hsm</code> |<code>
   *             incompatible-network</code> | <code>incompatible-parameters</code> |
   *             <code>incompatible-restore</code> | <code>modifying</code> | <code>paused</code> |
   *             <code>rebooting</code> | <code>renaming</code> | <code>resizing</code> |
   *             <code>rotating-keys</code> | <code>storage-full</code> |
   *          <code>updating-hsm</code>
   *          </p>
   */
  ClusterStatus?: string;

  /**
   * <p>The name of the subnet group that is associated with the cluster. This parameter is
   *          valid only when the cluster is in a VPC.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>The version ID of the Amazon Redshift engine that runs on the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the initial database that was created when the cluster was created.</p>
   *          <p>The same name is returned for the life of the cluster.</p>
   *          <p>If an initial database is not specified, a database named <code>devdev</code> is created
   *          by default.</p>
   */
  DBName?: string;

  /**
   * <p>List of time windows during which maintenance was deferred.</p>
   */
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  /**
   * <p>Information about the status of the Elastic IP (EIP) address.</p>
   */
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  /**
   * <p>The number of nodes that you can use the elastic resize method to resize the cluster
   *          to.</p>
   */
  ElasticResizeNumberOfNodeOptions?: string;

  /**
   * <p>Indicates whether the data in the cluster is encrypted at rest.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The connection endpoint.</p>
   */
  Endpoint?: AwsRedshiftClusterEndpoint;

  /**
   * <p>Indicates whether to create the cluster with enhanced VPC routing enabled.</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>Indicates when the next snapshot is expected to be taken. The cluster must have a valid
   *          snapshot schedule and have backups enabled.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpectedNextSnapshotScheduleTime?: string;

  /**
   * <p>The status of the next expected snapshot.</p>
   *          <p>Valid values: <code>OnTrack</code> | <code>Pending</code>
   *          </p>
   */
  ExpectedNextSnapshotScheduleTimeStatus?: string;

  /**
   * <p>Information about whether the Amazon Redshift cluster finished applying any changes to
   *          hardware security module (HSM) settings that were specified in a modify cluster
   *          command.</p>
   */
  HsmStatus?: AwsRedshiftClusterHsmStatus;

  /**
   * <p>A list of IAM roles that the cluster can use to access other Amazon Web Services services.</p>
   */
  IamRoles?: AwsRedshiftClusterIamRole[];

  /**
   * <p>The identifier of the KMS encryption key that is used to encrypt data in the
   *          cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the maintenance track for the cluster.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The default number of days to retain a manual snapshot.</p>
   *          <p>If the value is -1, the snapshot is retained indefinitely.</p>
   *          <p>This setting doesn't change the retention period of existing snapshots.</p>
   *          <p>Valid values: Either -1 or an integer between 1 and 3,653</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The master user name for the cluster. This name is used to connect to the database that
   *          is specified in as the value of <code>DBName</code>.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Indicates the start of the next maintenance window.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  NextMaintenanceWindowStartTime?: string;

  /**
   * <p>The node type for the nodes in the cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>The number of compute nodes in the cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A list of cluster operations that are waiting to start.</p>
   */
  PendingActions?: string[];

  /**
   * <p>A list of changes to the cluster that are currently pending.</p>
   */
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  /**
   * <p>The weekly time range, in Universal Coordinated Time (UTC), during which system
   *          maintenance can occur.</p>
   *          <p>Format:
   *             <code>
   *                <i><day></i>:HH:MM-<i><day></i>:HH:MM</code>
   *          </p>
   *          <p>For the day values, use <code>mon</code> | <code>tue</code> | <code>wed</code> |
   *             <code>thu</code> | <code>fri</code> | <code>sat</code> | <code>sun</code>
   *          </p>
   *          <p>For example, <code>sun:09:32-sun:10:02</code>
   *          </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Whether the cluster can be accessed from a public network.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Information about the resize operation for the cluster.</p>
   */
  ResizeInfo?: AwsRedshiftClusterResizeInfo;

  /**
   * <p>Information about the status of a cluster restore action. Only applies to a cluster that
   *          was created by restoring a snapshot.</p>
   */
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;

  /**
   * <p>A unique identifier for the cluster snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The current state of the cluster snapshot schedule.</p>
   *          <p>Valid values: <code>MODIFYING</code> | <code>ACTIVE</code> | <code>FAILED</code>
   *          </p>
   */
  SnapshotScheduleState?: string;

  /**
   * <p>The identifier of the VPC that the cluster is in, if the cluster is in a VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The list of VPC security groups that the cluster belongs to, if the cluster is in a
   *          VPC.</p>
   */
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];
}

export namespace AwsRedshiftClusterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsRedshiftClusterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>provides information about the Amazon S3 Public Access Block configuration for accounts.</p>
 */
export interface AwsS3AccountPublicAccessBlockDetails {
  /**
   * <p>Indicates whether to reject calls to update an S3 bucket if the calls include a public access control list (ACL).</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates whether to reject calls to update the access policy for an S3 bucket or access point if the policy allows public access.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Indicates whether Amazon S3 ignores public ACLs that are associated with an S3 bucket.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Indicates whether to restrict access to an access point or S3 bucket that has a public policy to only Amazon Web Services service principals and authorized users within the S3 bucket owner's account.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace AwsS3AccountPublicAccessBlockDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3AccountPublicAccessBlockDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about what Amazon S3
 *          does when a multipart upload is incomplete.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * <p>The number of days after which Amazon S3 cancels an incomplete multipart upload.</p>
   */
  DaysAfterInitiation?: number;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A tag that is assigned to matching objects.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A value to use for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * <p>Prefix text for matching objects.</p>
   */
  Prefix?: string;

  /**
   * <p>A tag that is assigned to matching objects.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;

  /**
   * <p>The type of filter value.</p>
   */
  Type?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A tag filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value</p>
   */
  Value?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for the filter.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * <p>The values to use for the filter.</p>
   */
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];

  /**
   * <p>A prefix filter.</p>
   */
  Prefix?: string;

  /**
   * <p>A tag filter.</p>
   */
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;

  /**
   * <p>Whether to use <code>AND</code> or <code>OR</code> to join the operands.</p>
   */
  Type?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the objects that a rule applies to.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * <p>The configuration for the filter.</p>
   */
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A transition rule that describes when noncurrent objects transition to a specified storage class.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  Days?: number;

  /**
   * <p>The class of storage to change the object to after the object is noncurrent for the specified number of days.</p>
   */
  StorageClass?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (
    obj: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
  ): any => ({
    ...obj,
  });
}

/**
 * <p>A rule for when objects transition to specific storage classes.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * <p>A date on which to transition objects to the specified storage class. If you provide <code>Date</code>, you cannot provide <code>Days</code>.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  Date?: string;

  /**
   * <p>The number of days after which to transition the object to the specified storage class. If you provide <code>Days</code>, you cannot provide <code>Date</code>.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to transition the object to.</p>
   */
  StorageClass?: string;
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration for a lifecycle rule.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * <p>How Amazon S3 responds when a multipart upload is incomplete. Specifically, provides a number
   *          of days before Amazon S3 cancels the entire upload.</p>
   */
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;

  /**
   * <p>The date when objects are moved or deleted.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *          Date/Time Format</a>. The value cannot contain spaces. For example,
   *          <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  ExpirationDate?: string;

  /**
   * <p>The length in days of the lifetime for objects that are subject to the rule.</p>
   */
  ExpirationInDays?: number;

  /**
   * <p>Whether Amazon S3 removes a delete marker that has no noncurrent versions. If set to
   *          <code>true</code>, the delete marker is expired. If set to <code>false</code>, the policy
   *          takes no action.</p>
   *          <p>If you provide <code>ExpiredObjectDeleteMarker</code>, you cannot provide
   *          <code>ExpirationInDays</code> or <code>ExpirationDate</code>.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;

  /**
   * <p>Identifies the objects that a rule applies to.</p>
   */
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;

  /**
   * <p>The unique identifier of the rule.</p>
   */
  ID?: string;

  /**
   * <p>The number of days that an object is noncurrent before Amazon S3 can perform the associated action.</p>
   */
  NoncurrentVersionExpirationInDays?: number;

  /**
   * <p>Transition rules that describe when noncurrent objects transition to a specified storage class.</p>
   */
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];

  /**
   * <p>A prefix that identifies one or more objects that the rule applies to.</p>
   */
  Prefix?: string;

  /**
   * <p>The current status of the rule. Indicates whether the rule is currently being applied.</p>
   */
  Status?: string;

  /**
   * <p>Transition rules that indicate when objects transition to a specified storage class.</p>
   */
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}

export namespace AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationRulesDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The lifecycle configuration for the objects in the S3 bucket.</p>
 */
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * <p>The lifecycle rules.</p>
   */
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}

export namespace AwsS3BucketBucketLifecycleConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketLifecycleConfigurationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the versioning state of an S3 bucket.</p>
 */
export interface AwsS3BucketBucketVersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is currently enabled in the S3 bucket versioning configuration. If the S3 bucket was never configured with MFA delete, then this attribute is not included.</p>
   */
  IsMfaDeleteEnabled?: boolean;

  /**
   * <p>The versioning status of the S3 bucket.</p>
   */
  Status?: string;
}

export namespace AwsS3BucketBucketVersioningConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketBucketVersioningConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Information about logging for
 *          the S3 bucket</p>
 */
export interface AwsS3BucketLoggingConfiguration {
  /**
   * <p>The name of the S3 bucket where log files for the S3 bucket are stored.</p>
   */
  DestinationBucketName?: string;

  /**
   * <p>The prefix added to log files for the S3 bucket.</p>
   */
  LogFilePrefix?: string;
}

export namespace AwsS3BucketLoggingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketLoggingConfiguration): any => ({
    ...obj,
  });
}

export enum AwsS3BucketNotificationConfigurationS3KeyFilterRuleName {
  PREFIX = "Prefix",
  SUFFIX = "Suffix",
}

/**
 * <p>Details for a filter rule.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * <p>Indicates whether the filter is based on the prefix or suffix of the Amazon S3 key.</p>
   */
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName | string;

  /**
   * <p>The filter value.</p>
   */
  Value?: string;
}

export namespace AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationS3KeyFilterRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an Amazon S3 filter.</p>
 */
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * <p>The filter rules for the filter.</p>
   */
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}

export namespace AwsS3BucketNotificationConfigurationS3KeyFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationS3KeyFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Filtering information for the notifications. The
 *          filtering is based on Amazon S3 key names.</p>
 */
export interface AwsS3BucketNotificationConfigurationFilter {
  /**
   * <p>Details for an Amazon S3 filter.</p>
   */
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}

export namespace AwsS3BucketNotificationConfigurationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an S3 bucket notification configuration.</p>
 */
export interface AwsS3BucketNotificationConfigurationDetail {
  /**
   * <p>The list of events that trigger a notification.</p>
   */
  Events?: string[];

  /**
   * <p>The filters that determine which S3 buckets generate notifications.</p>
   */
  Filter?: AwsS3BucketNotificationConfigurationFilter;

  /**
   * <p>The ARN of the Lambda function, Amazon SQS queue, or Amazon SNS topic that generates the
   *          notification.</p>
   */
  Destination?: string;

  /**
   * <p>Indicates the type of notification. Notifications can be generated using Lambda functions,
   *          Amazon SQS queues or Amazon SNS topics.</p>
   */
  Type?: string;
}

export namespace AwsS3BucketNotificationConfigurationDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfigurationDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The notification
 *          configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketNotificationConfiguration {
  /**
   * <p>Configurations for S3 bucket notifications.</p>
   */
  Configurations?: AwsS3BucketNotificationConfigurationDetail[];
}

export namespace AwsS3BucketNotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketNotificationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The redirect behavior for requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * <p>The name of the host to redirect requests to.</p>
   */
  Hostname?: string;

  /**
   * <p>The protocol to use when redirecting requests. By default, uses the same protocol as the
   *          original request.</p>
   */
  Protocol?: string;
}

export namespace AwsS3BucketWebsiteConfigurationRedirectTo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRedirectTo): any => ({
    ...obj,
  });
}

/**
 * <p>The condition that must be met in order to apply the routing rule.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * <p>Indicates to redirect the request if the HTTP error code matches this value.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * <p>Indicates to redirect the request if the key prefix matches this value.</p>
   */
  KeyPrefixEquals?: string;
}

export namespace AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRoutingRuleCondition): any => ({
    ...obj,
  });
}

/**
 * <p>The rules to redirect the request if the condition in <code>Condition</code> is
 *          met.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * <p>The host name to use in the redirect request.</p>
   */
  Hostname?: string;

  /**
   * <p>The HTTP redirect code to use in the response.</p>
   */
  HttpRedirectCode?: string;

  /**
   * <p>The protocol to use to redirect the request. By default, uses the protocol from the
   *          original request.</p>
   */
  Protocol?: string;

  /**
   * <p>The object key prefix to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyWith</code> is present.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * <p>The specific object key to use in the redirect request.</p>
   *          <p>Cannot be provided if <code>ReplaceKeyPrefixWith</code> is present.</p>
   */
  ReplaceKeyWith?: string;
}

export namespace AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect): any => ({
    ...obj,
  });
}

/**
 * <p>A rule for redirecting requests
 *          to the website.</p>
 */
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * <p>Provides the condition that must be met in order to apply the routing rule.</p>
   */
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;

  /**
   * <p>Provides the rules to redirect the request if the condition in <code>Condition</code> is
   *          met.</p>
   */
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}

export namespace AwsS3BucketWebsiteConfigurationRoutingRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfigurationRoutingRule): any => ({
    ...obj,
  });
}

/**
 * <p>Website parameters for the S3
 *          bucket.</p>
 */
export interface AwsS3BucketWebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: string;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocumentSuffix?: string;

  /**
   * <p>The redirect behavior for requests to the website.</p>
   */
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;

  /**
   * <p>The rules for applying redirects for requests to the website.</p>
   */
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}

export namespace AwsS3BucketWebsiteConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketWebsiteConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm?: string;

  /**
   * <p>KMS key ID to use for the default encryption.</p>
   */
  KMSMasterKeyID?: string;
}

export namespace AwsS3BucketServerSideEncryptionByDefault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionByDefault): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption rule to apply to the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}

export namespace AwsS3BucketServerSideEncryptionRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionRule): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}

export namespace AwsS3BucketServerSideEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;

  /**
   * <p>The Amazon Web Services account identifier of the account that owns the S3 bucket.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Indicates when the S3 bucket was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

  /**
   * <p>The lifecycle configuration for objects in the S3 bucket.</p>
   */
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;

  /**
   * <p>Provides information about the Amazon S3 Public Access Block configuration for the S3 bucket.</p>
   */
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>The access control list for the S3 bucket.</p>
   */
  AccessControlList?: string;

  /**
   * <p>The logging configuration for the S3 bucket.</p>
   */
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;

  /**
   * <p>The website configuration parameters for the S3 bucket.</p>
   */
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;

  /**
   * <p>The notification configuration for the S3 bucket.</p>
   */
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;

  /**
   * <p>The versioning state of an S3 bucket.</p>
   */
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
}

export namespace AwsS3BucketDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3BucketDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Amazon S3 object.</p>
 */
export interface AwsS3ObjectDetails {
  /**
   * <p>Indicates when the object was last modified.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastModified?: string;

  /**
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>The version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   */
  ServerSideEncryption?: string;

  /**
   * <p>The identifier of the KMS symmetric customer managed key that was used for the object.</p>
   */
  SSEKMSKeyId?: string;
}

export namespace AwsS3ObjectDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsS3ObjectDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the rotation schedule for the secret.</p>
 */
export interface AwsSecretsManagerSecretRotationRules {
  /**
   * <p>The number of days after the previous rotation to rotate the secret.</p>
   */
  AutomaticallyAfterDays?: number;
}

export namespace AwsSecretsManagerSecretRotationRules {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecretsManagerSecretRotationRules): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an Secrets Manager secret.</p>
 */
export interface AwsSecretsManagerSecretDetails {
  /**
   * <p>Defines the rotation schedule for the secret.</p>
   */
  RotationRules?: AwsSecretsManagerSecretRotationRules;

  /**
   * <p>Whether the rotation occurred within the specified rotation frequency.</p>
   */
  RotationOccurredWithinFrequency?: boolean;

  /**
   * <p>The ARN, Key ID, or alias of the KMS key used to encrypt the
   *             <code>SecretString</code> or <code>SecretBinary</code> values for versions of this
   *          secret.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Whether rotation is enabled.</p>
   */
  RotationEnabled?: boolean;

  /**
   * <p>The ARN of the Lambda function that rotates the secret.</p>
   */
  RotationLambdaArn?: string;

  /**
   * <p>Whether the secret is deleted.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The user-provided description of the secret.</p>
   */
  Description?: string;
}

export namespace AwsSecretsManagerSecretDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecretsManagerSecretDetails): any => ({
    ...obj,
  });
}

export enum ComplianceStatus {
  FAILED = "FAILED",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PASSED = "PASSED",
  WARNING = "WARNING",
}

/**
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 */
export interface StatusReason {
  /**
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  ReasonCode: string | undefined;

  /**
   * <p>The corresponding description for the status reason code.</p>
   */
  Description?: string;
}

export namespace StatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusReason): any => ({
    ...obj,
  });
}

/**
 * <p>Contains finding details that are specific to control-based findings. Only returned for
 *          findings generated from controls.</p>
 */
export interface Compliance {
  /**
   * <p>The result of a standards check.</p>
   *          <p>The valid values for <code>Status</code> are as follows.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PASSED</code> - Standards check passed for all evaluated
   *                      resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WARNING</code> - Some information is missing or this check is not
   *                      supported for your configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code> - Standards check failed for at least one evaluated
   *                      resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service
   *                      outage, API error, or because the result of the Config evaluation was
   *                         <code>NOT_APPLICABLE</code>. If the Config evaluation result was
   *                      <code>NOT_APPLICABLE</code>, then after 3 days, Security Hub automatically archives
   *                      the finding.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>For a control, the industry or regulatory framework requirements that are related to the
   *          control. The check for that control is aligned with these requirements.</p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>For findings generated from controls, a list of reasons behind the value of
   *             <code>Status</code>. For the list of status reason codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>Security Hub User Guide</i>. </p>
   */
  StatusReasons?: StatusReason[];
}

export namespace Compliance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Compliance): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a related finding.</p>
 */
export interface RelatedFinding {
  /**
   * <p>The ARN of the product that generated a related finding.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The product-generated identifier for a related finding.</p>
   */
  Id: string | undefined;
}

export namespace RelatedFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelatedFinding): any => ({
    ...obj,
  });
}

export enum SeverityLabel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>The severity assigned to the finding by the finding provider.</p>
 */
export interface FindingProviderSeverity {
  /**
   * <p>The severity label assigned to the finding by the finding provider.</p>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  Original?: string;
}

export namespace FindingProviderSeverity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingProviderSeverity): any => ({
    ...obj,
  });
}

/**
 * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.</p>
 */
export interface FindingProviderFields {
  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A list of findings that are related to the current finding.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>The severity of a finding.</p>
   */
  Severity?: FindingProviderSeverity;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];
}

export namespace FindingProviderFields {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingProviderFields): any => ({
    ...obj,
  });
}

export enum MalwareState {
  OBSERVED = "OBSERVED",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVED = "REMOVED",
}

export enum MalwareType {
  ADWARE = "ADWARE",
  BLENDED_THREAT = "BLENDED_THREAT",
  BOTNET_AGENT = "BOTNET_AGENT",
  COIN_MINER = "COIN_MINER",
  EXPLOIT_KIT = "EXPLOIT_KIT",
  KEYLOGGER = "KEYLOGGER",
  MACRO = "MACRO",
  POTENTIALLY_UNWANTED = "POTENTIALLY_UNWANTED",
  RANSOMWARE = "RANSOMWARE",
  REMOTE_ACCESS = "REMOTE_ACCESS",
  ROOTKIT = "ROOTKIT",
  SPYWARE = "SPYWARE",
  TROJAN = "TROJAN",
  VIRUS = "VIRUS",
  WORM = "WORM",
}

/**
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  /**
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType | string;

  /**
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState | string;
}

export namespace Malware {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Malware): any => ({
    ...obj,
  });
}

export enum NetworkDirection {
  IN = "IN",
  OUT = "OUT",
}

/**
 * <p>A range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the port range.</p>
   */
  Begin?: number;

  /**
   * <p>The last port in the port range.</p>
   */
  End?: number;
}

export namespace PortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  /**
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection | string;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

export namespace Network {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  /**
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];

  /**
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];
}

export namespace NetworkPathComponentDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponentDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  /**
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

export namespace NetworkHeader {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  /**
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

export namespace NetworkPathComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  /**
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;
}

export namespace Note {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Note): any => ({
    ...obj,
  });
}

/**
 * <p>Provides an overview of the patch compliance status for an instance against a selected
 *          compliance standard.</p>
 */
export interface PatchSummary {
  /**
   * <p>The identifier of the compliance standard that was used to determine the patch
   *          compliance status.</p>
   */
  Id: string | undefined;

  /**
   * <p>The number of patches from the compliance standard that were installed
   *          successfully.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches that are part of the compliance standard but are not installed.
   *          The count includes patches that failed to install.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the compliance standard that failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of installed patches that are not part of the compliance standard.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of patches that are installed but are also on a list of patches that the
   *          customer rejected.</p>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches that were applied, but that require the instance to be rebooted in
   *          order to be marked as installed.</p>
   */
  InstalledPendingReboot?: number;

  /**
   * <p>Indicates when the operation started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationStartTime?: string;

  /**
   * <p>Indicates when the operation completed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  OperationEndTime?: string;

  /**
   * <p>The reboot option specified for the instance.</p>
   */
  RebootOption?: string;

  /**
   * <p>The type of patch operation performed. For Patch Manager, the values are
   *             <code>SCAN</code> and <code>INSTALL</code>. </p>
   */
  Operation?: string;
}

export namespace PatchSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PatchSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>Indicates when the process was launched.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>Indicates when the process was terminated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  TerminatedAt?: string;
}

export namespace ProcessDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessDetails): any => ({
    ...obj,
  });
}

export enum RecordState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

export namespace Remediation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Remediation): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.</p>
 */
export interface Cell {
  /**
   * <p>The column number of the column that contains the data. For a Microsoft Excel workbook, the column number corresponds to the alphabetical column identifiers. For example, a value of 1 for Column corresponds to the A column in the workbook.</p>
   */
  Column?: number;

  /**
   * <p>The row number of the row that contains the data.</p>
   */
  Row?: number;

  /**
   * <p>The name of the column that contains the data.</p>
   */
  ColumnName?: string;

  /**
   * <p>For a Microsoft Excel workbook, provides the location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2.</p>
   */
  CellReference?: string;
}

export namespace Cell {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cell): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies where the sensitive data begins and ends.</p>
 */
export interface Range {
  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  Start?: number;

  /**
   * <p>The number of lines (for a line range) or characters (for an offset range) from the beginning of the file to the end of the sensitive data.</p>
   */
  End?: number;

  /**
   * <p>In the line where the sensitive data starts, the column within the line where the sensitive data starts.</p>
   */
  StartColumn?: number;
}

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
 */
export interface Page {
  /**
   * <p>The page number of the page that contains the sensitive data.</p>
   */
  PageNumber?: number;

  /**
   * <p>An occurrence of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRange?: Range;

  /**
   * <p>An occurrence of sensitive data detected in a binary text file.</p>
   */
  OffsetRange?: Range;
}

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

/**
 * <p>An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
 */
export interface _Record {
  /**
   * <p>The path, as a JSONPath expression, to the field in the record that contains the data. If the field name is longer than 20 characters, it is truncated. If the path is longer than 250 characters, it is truncated.</p>
   */
  JsonPath?: string;

  /**
   * <p>The record index, starting from 0, for the record that contains the data.</p>
   */
  RecordIndex?: number;
}

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

/**
 * <p>The detected occurrences of sensitive data.</p>
 */
export interface Occurrences {
  /**
   * <p>Occurrences of sensitive data detected in a non-binary text file or a Microsoft Word file. Non-binary text files include files such as HTML, XML, JSON, and TXT files.</p>
   */
  LineRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data detected in a binary text file.</p>
   */
  OffsetRanges?: Range[];

  /**
   * <p>Occurrences of sensitive data in an Adobe Portable Document Format (PDF) file.</p>
   */
  Pages?: Page[];

  /**
   * <p>Occurrences of sensitive data in an Apache Avro object container or an Apache Parquet file.</p>
   */
  Records?: _Record[];

  /**
   * <p>Occurrences of sensitive data detected in Microsoft Excel workbooks, comma-separated value (CSV) files, or tab-separated value (TSV) files.</p>
   */
  Cells?: Cell[];
}

export namespace Occurrences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Occurrences): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface CustomDataIdentifiersDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The ARN of the custom identifier that was used to detect the sensitive data.</p>
   */
  Arn?: string;

  /**
   * <p>he name of the custom identifier that detected the sensitive data.</p>
   */
  Name?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace CustomDataIdentifiersDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an instance of sensitive data that was detected by a customer-defined identifier.</p>
 */
export interface CustomDataIdentifiersResult {
  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: CustomDataIdentifiersDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace CustomDataIdentifiersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomDataIdentifiersResult): any => ({
    ...obj,
  });
}

/**
 * <p>The list of detected instances of sensitive data.</p>
 */
export interface SensitiveDataDetections {
  /**
   * <p>The total number of occurrences of sensitive data that were detected.</p>
   */
  Count?: number;

  /**
   * <p>The type of sensitive data that was detected. For example, the type might indicate that the data is an email address.</p>
   */
  Type?: string;

  /**
   * <p>Details about the sensitive data that was detected.</p>
   */
  Occurrences?: Occurrences;
}

export namespace SensitiveDataDetections {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataDetections): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a detected instance of sensitive data that are based on built-in identifiers.</p>
 */
export interface SensitiveDataResult {
  /**
   * <p>The category of sensitive data that was detected. For example, the category can indicate that the sensitive data involved credentials, financial information, or personal information.</p>
   */
  Category?: string;

  /**
   * <p>The list of detected instances of sensitive data.</p>
   */
  Detections?: SensitiveDataDetections[];

  /**
   * <p>The total number of occurrences of sensitive data.</p>
   */
  TotalCount?: number;
}

export namespace SensitiveDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SensitiveDataResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the current status of the sensitive data detection.</p>
 */
export interface ClassificationStatus {
  /**
   * <p>The code that represents the status of the sensitive data detection.</p>
   */
  Code?: string;

  /**
   * <p>A longer description of the current status of the sensitive data detection.</p>
   */
  Reason?: string;
}

export namespace ClassificationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the sensitive data that was detected on the resource.</p>
 */
export interface ClassificationResult {
  /**
   * <p>The type of content that the finding applies to.</p>
   */
  MimeType?: string;

  /**
   * <p>The total size in bytes of the affected data.</p>
   */
  SizeClassified?: number;

  /**
   * <p>Indicates whether there are additional occurrences of sensitive data that are not included in the finding. This occurs when the number of occurrences exceeds the maximum that can be included.</p>
   */
  AdditionalOccurrences?: boolean;

  /**
   * <p>The current status of the sensitive data detection.</p>
   */
  Status?: ClassificationStatus;

  /**
   * <p>Provides details about sensitive data that was identified based on built-in configuration.</p>
   */
  SensitiveData?: SensitiveDataResult[];

  /**
   * <p>Provides details about sensitive data that was identified based on customer-defined configuration.</p>
   */
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}

export namespace ClassificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClassificationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 */
export interface DataClassificationDetails {
  /**
   * <p>The path to the folder or file that contains the sensitive data.</p>
   */
  DetailedResultsLocation?: string;

  /**
   * <p>The details about the sensitive data that was detected on the resource.</p>
   */
  Result?: ClassificationResult;
}

export namespace DataClassificationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataClassificationDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

export namespace AwsSnsTopicSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper type for the topic's ARN.</p>
 */
export interface AwsSnsTopicDetails {
  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the topic.</p>
   */
  TopicName?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;
}

export namespace AwsSnsTopicDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SQS or a custom
   *          KMS key.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * <p>The ARN of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;
}

export namespace AwsSqsQueueDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the details about the compliance status for a patch.</p>
 */
export interface AwsSsmComplianceSummary {
  /**
   * <p>The current patch compliance status.</p>
   *          <p>The possible status values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  CompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   */
  CompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  CompliantMediumCount?: number;

  /**
   * <p>The type of execution that was used determine compliance.</p>
   */
  ExecutionType?: string;

  /**
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   */
  NonCompliantCriticalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  CompliantInformationalCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   */
  NonCompliantInformationalCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  CompliantUnspecifiedCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   */
  NonCompliantLowCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   */
  NonCompliantHighCount?: number;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   */
  CompliantLowCount?: number;

  /**
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   */
  ComplianceType?: string;

  /**
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   */
  PatchBaselineId?: string;

  /**
   * <p>The highest severity for the patches.</p>
   */
  OverallSeverity?: string;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   */
  NonCompliantMediumCount?: number;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   */
  NonCompliantUnspecifiedCount?: number;

  /**
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   */
  PatchGroup?: string;
}

export namespace AwsSsmComplianceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmComplianceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about the compliance for a patch.</p>
 */
export interface AwsSsmPatch {
  /**
   * <p>The compliance status details for the patch.</p>
   */
  ComplianceSummary?: AwsSsmComplianceSummary;
}

export namespace AwsSsmPatch {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatch): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * <p>Information about the status of a patch.</p>
   */
  Patch?: AwsSsmPatch;
}

export namespace AwsSsmPatchComplianceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSsmPatchComplianceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.
   *       </p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate.</p>
   */
  Type?: string;
}

export namespace AwsWafRateBasedRuleMatchPredicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRateBasedRuleMatchPredicate): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
}

export namespace AwsWafRateBasedRuleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRateBasedRuleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 */
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   */
  DataId?: string;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.</p>
   */
  Negated?: boolean;

  /**
   * <p>The type of predicate.</p>
   */
  Type?: string;
}

export namespace AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRateBasedRuleMatchPredicate): any => ({
    ...obj,
  });
}

/**
 * <p>contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 */
export interface AwsWafRegionalRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   */
  MetricName?: string;

  /**
   * <p>The name of the rate-based rule.</p>
   */
  Name?: string;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   */
  RateKey?: string;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   */
  RateLimit?: number;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   */
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
}

export namespace AwsWafRegionalRateBasedRuleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafRegionalRateBasedRuleDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the action that CloudFront or WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  /**
   * <p>Specifies how you want WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - WAF increments a counter of the requests that match all
   *                of the conditions in the rule. WAF then continues to inspect the web request
   *                based on the remaining rules in the web ACL. You can't specify <code>COUNT</code> for
   *                the default action for a WebACL.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

export namespace WafAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

export namespace WafExcludedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafExcludedRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

export namespace WafOverrideAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WafOverrideAction): any => ({
    ...obj,
  });
}

/**
 * <p>Details for a rule in an WAF WebACL.</p>
 */
export interface AwsWafWebAclRule {
  /**
   * <p>Specifies the action that CloudFront or WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];

  /**
   * <p>Use the <code>OverrideAction</code> to test your RuleGroup.</p>
   *          <p>Any rule in a RuleGroup can potentially block a request. If you set the
   *             <code>OverrideAction</code> to <code>None</code>, the RuleGroup blocks a request if any
   *          individual rule in the RuleGroup matches the request and is configured to block that
   *          request.</p>
   *          <p>However, if you first want to test the RuleGroup, set the <code>OverrideAction</code> to
   *             <code>Count</code>. The RuleGroup then overrides any block action specified by
   *          individual rules contained within the group. Instead of blocking matching requests, those
   *          requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a RuleGroup to a WebACL. In this case you do not use
   *             <code>ActivatedRule</code>|<code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>|<code>Action</code> is used instead of
   *             <code>ActivatedRule</code>|<code>OverrideAction</code>. </p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * <p>Specifies the order in which the rules in a WebACL are evaluated. Rules with a lower
   *          value for <code>Priority</code> are evaluated before rules with a higher value. The value
   *          must be a unique integer. If you add multiple rules to a WebACL, the values do not need to
   *          be consecutive.</p>
   */
  Priority?: number;

  /**
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;
}

export namespace AwsWafWebAclRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclRule): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an WAF WebACL.</p>
 */
export interface AwsWafWebAclDetails {
  /**
   * <p>A friendly name or description of the WebACL. You can't change the name of a WebACL
   *          after you create it.</p>
   */
  Name?: string;

  /**
   * <p>The action to perform if none of the rules contained in the WebACL match.</p>
   */
  DefaultAction?: string;

  /**
   * <p>An array that contains the action for each rule in a WebACL, the priority of the rule,
   *          and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * <p>A unique identifier for a WebACL.</p>
   */
  WebAclId?: string;
}

export namespace AwsWafWebAclDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsWafWebAclDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the encryption configuration for X-Ray.</p>
 */
export interface AwsXrayEncryptionConfigDetails {
  /**
   * <p>The identifier of the KMS key that is used for encryption. Provided if <code>Type</code> is <code>KMS</code>.</p>
   */
  KeyId?: string;

  /**
   * <p>The current status of the encryption configuration. When <code>Status</code> is <code>UPDATING</code>, X-Ray might use both the old and new encryption.</p>
   */
  Status?: string;

  /**
   * <p>The type of encryption. <code>KMS</code> indicates that the encryption uses KMS keys. <code>NONE</code> indicates to use the default encryption.</p>
   */
  Type?: string;
}

export namespace AwsXrayEncryptionConfigDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsXrayEncryptionConfigDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>Indicates when the container started.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LaunchedAt?: string;
}

export namespace ContainerDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 */
export interface ResourceDetails {
  /**
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * <p>Details for an CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about an EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details for an EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * <p>Details for an EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * <p>Details for an EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * <p>Details about an Elastic IP address.</p>
   */
  AwsEc2Eip?: AwsEc2EipDetails;

  /**
   * <p>Details about a subnet in Amazon EC2.</p>
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails;

  /**
   * <p>Details about an EC2 network access control list (ACL).</p>
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details about an Elastic Beanstalk environment.</p>
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * <p>Details about an S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;

  /**
   * <p>Details about an S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * <p>Details about a Secrets Manager secret.</p>
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details about an IAM user.</p>
   */
  AwsIamUser?: AwsIamUserDetails;

  /**
   * <p>Details about an IAM permissions policy.</p>
   */
  AwsIamPolicy?: AwsIamPolicyDetails;

  /**
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;

  /**
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;

  /**
   * <p>Details about a DynamoDB table.</p>
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;

  /**
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;

  /**
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;

  /**
   * <p>Provides details about a CloudTrail trail.</p>
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;

  /**
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;

  /**
   * <p>Provides details about an Certificate Manager certificate.</p>
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;

  /**
   * <p>Contains details about an Amazon Redshift cluster.</p>
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;

  /**
   * <p>Contains details about a Classic Load Balancer.</p>
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;

  /**
   * <p>Contains details about an IAM group.</p>
   */
  AwsIamGroup?: AwsIamGroupDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details about an KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details for an WAF WebACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * <p>Details about an Amazon RDS database snapshot.</p>
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;

  /**
   * <p>Details about an Amazon RDS database cluster.</p>
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;

  /**
   * <p>Details about an ECS cluster.</p>
   */
  AwsEcsCluster?: AwsEcsClusterDetails;

  /**
   * <p>Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   */
  Other?: { [key: string]: string };

  /**
   * <p>Details about an RDS event notification subscription.</p>
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;

  /**
   * <p>Details about a service within an ECS cluster.</p>
   */
  AwsEcsService?: AwsEcsServiceDetails;

  /**
   * <p>Provides details about a launch configuration.</p>
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;

  /**
   * <p>Details about an EC2 VPN connection.</p>
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;

  /**
   * <p>Information about an Amazon ECR image.</p>
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
   * <p>Details about an Amazon OpenSearch Service domain.</p>
   */
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;

  /**
   * <p>Details about the service configuration for a VPC endpoint service.</p>
   */
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;

  /**
   * <p>Information about the encryption configuration for X-Ray.</p>
   */
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;

  /**
   * <p>Details about a rate-based rule for global resources.</p>
   */
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;

  /**
   * <p>Details about a rate-based rule for Regional resources.</p>
   */
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;

  /**
   * <p>Information about an Amazon Elastic Container Registry repository.</p>
   */
  AwsEcrRepository?: AwsEcrRepositoryDetails;

  /**
   * <p>Details about an Amazon EKS cluster.</p>
   */
  AwsEksCluster?: AwsEksClusterDetails;

  /**
   * <p>Details about an Network Firewall firewall policy.</p>
   */
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;

  /**
   * <p>Details about an Network Firewall firewall.</p>
   */
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;

  /**
   * <p>Details about an Network Firewall rule group.</p>
   */
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;
}

export namespace ResourceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
}

export enum Partition {
  AWS = "aws",
  AWS_CN = "aws-cn",
  AWS_US_GOV = "aws-us-gov",
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   */
  ResourceRole?: string;

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   */
  DataClassification?: DataClassificationDetails;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it has not been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  /**
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>Deprecated. The normalized severity of a finding. This attribute is being deprecated.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>If you provide <code>Label</code> and do not provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;
}

export namespace Severity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
}

export enum ThreatIntelIndicatorCategory {
  BACKDOOR = "BACKDOOR",
  CARD_STEALER = "CARD_STEALER",
  COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL",
  DROP_SITE = "DROP_SITE",
  EXPLOIT_SITE = "EXPLOIT_SITE",
  KEYLOGGER = "KEYLOGGER",
}

export enum ThreatIntelIndicatorType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  HASH_MD5 = "HASH_MD5",
  HASH_SHA1 = "HASH_SHA1",
  HASH_SHA256 = "HASH_SHA256",
  HASH_SHA512 = "HASH_SHA512",
  IPV4_ADDRESS = "IPV4_ADDRESS",
  IPV6_ADDRESS = "IPV6_ADDRESS",
  MUTEX = "MUTEX",
  PROCESS = "PROCESS",
  URL = "URL",
}

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  /**
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;
}

export namespace ThreatIntelIndicator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
    ...obj,
  });
}

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;

  /**
   * <p>The origin of the original CVSS score and vector.</p>
   */
  Source?: string;

  /**
   * <p>Adjustments to the CVSS metrics.</p>
   */
  Adjustments?: Adjustment[];
}

export namespace Cvss {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Cvss): any => ({
    ...obj,
  });
}

/**
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  /**
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorCreatedAt?: string;

  /**
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  VendorUpdatedAt?: string;
}

export namespace VulnerabilityVendor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VulnerabilityVendor): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  /**
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;

  /**
   * <p>The source of the package.</p>
   */
  PackageManager?: string;

  /**
   * <p>The file system path to the package manager inventory file.</p>
   */
  FilePath?: string;
}

export namespace SoftwarePackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SoftwarePackage): any => ({
    ...obj,
  });
}

/**
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  /**
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];
}

export namespace Vulnerability {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vulnerability): any => ({
    ...obj,
  });
}

export enum WorkflowStatus {
  NEW = "NEW",
  NOTIFIED = "NOTIFIED",
  RESOLVED = "RESOLVED",
  SUPPRESSED = "SUPPRESSED",
}

/**
 * <p>Provides information about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                         <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ComplianceStatus</code> changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace Workflow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
}

export enum WorkflowState {
  ASSIGNED = "ASSIGNED",
  DEFERRED = "DEFERRED",
  IN_PROGRESS = "IN_PROGRESS",
  NEW = "NEW",
  RESOLVED = "RESOLVED",
}

/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings.
 *          <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services
 *          security services and third-party solutions, and security standards checks.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party
 *             solutions and standards checks.</p>
 *          </note>
 */
export interface AwsSecurityFinding {
  /**
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is when you use a custom integration.</p>
   *          <p>When you use the Security Hub console to filter findings by product name, you use this attribute.</p>
   *          <p>When you use the Security Hub API to filter findings by product name, you use the <code>aws/securityhub/ProductName</code> attribute under <code>ProductFields</code>.</p>
   *          <p>Security Hub does not synchronize those two attributes.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company for the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot be updated using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is when you use a custom integration.</p>
   *          <p>When you use the Security Hub console to filter findings by company name, you use this attribute.</p>
   *          <p>When you use the Security Hub API to filter findings by company name, you use the <code>aws/securityhub/CompanyName</code> attribute under <code>ProductFields</code>.</p>
   *          <p>Security Hub does not synchronize those two attributes.</p>
   */
  CompanyName?: string;

  /**
   * <p>The Region from which the finding was generated.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>.</p>
   */
  Region?: string;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types?: string[];

  /**
   * <p>Indicates when the security-findings provider first observed the potential security
   *          issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  FirstObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider most recently observed the potential
   *          security issue that a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>Indicates when the security-findings provider created the potential security issue that
   *          a finding captured.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>Indicates when the security-findings provider last updated the finding record.</p>
   *          <p>Uses the <code>date-time</code> format specified in <a href="https://tools.ietf.org/html/rfc3339#section-5.6">RFC 3339 section 5.6, Internet
   *             Date/Time Format</a>. The value cannot contain spaces. For example,
   *             <code>2020-03-22T13:22:13.933Z</code>.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>A finding's severity.</p>
   */
  Severity?: Severity;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</p>
   */
  ProductFields?: { [key: string]: string };

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   */
  NetworkPath?: NetworkPathComponent[];

  /**
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * <p>Threat intelligence details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations.
   *          Contains security standard-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * @deprecated
   *
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState | string;

  /**
   * <p>Provides information about the status of the investigation into a finding.</p>
   */
  Workflow?: Workflow;

  /**
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   */
  Vulnerabilities?: Vulnerability[];

  /**
   * <p>Provides an overview of the patch compliance status for an instance against a selected
   *          compliance standard.</p>
   */
  PatchSummary?: PatchSummary;

  /**
   * <p>Provides details about an action that affects or that was taken on a resource.</p>
   */
  Action?: Action;

  /**
   * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update their own values for confidence, criticality, related findings, severity, and types.</p>
   */
  FindingProviderFields?: FindingProviderFields;
}

export namespace AwsSecurityFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFinding): any => ({
    ...obj,
  });
}

export enum StringFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  PREFIX = "PREFIX",
  PREFIX_NOT_EQUALS = "PREFIX_NOT_EQUALS",
}

/**
 * <p>A string filter for querying findings.</p>
 */
export interface StringFilter {
  /**
   * <p>The string filter value. Filter values are case sensitive. For example, the product name
   *          for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code>
   *          as the filter text, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a string value when querying for findings. To search for
   *          values that contain the filter criteria value, use one of the following comparison
   *          operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that exactly match the filter value, use
   *                <code>EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType EQUALS AwsEc2SecurityGroup</code> only
   *                matches findings that have a resource type of
   *                <code>AwsEc2SecurityGroup</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that start with the filter value, use
   *                <code>PREFIX</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX AwsIam</code> matches findings
   *                that have a resource type that starts with <code>AwsIam</code>. Findings with a
   *                resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>, or
   *                   <code>AwsIamUser</code> would all match.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EQUALS</code> and <code>PREFIX</code> filters on the same field are joined by
   *             <code>OR</code>. A finding matches if it matches any one of those filters.</p>
   *          <p>To search for values that do not contain the filter criteria value, use one of the
   *          following comparison operators:</p>
   *          <ul>
   *             <li>
   *                <p>To search for values that do not exactly match the filter value, use
   *                   <code>NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType NOT_EQUALS AwsIamPolicy</code> matches
   *                findings that have a resource type other than <code>AwsIamPolicy</code>.</p>
   *             </li>
   *             <li>
   *                <p>To search for values that do not start with the filter value, use
   *                   <code>PREFIX_NOT_EQUALS</code>.</p>
   *                <p>For example, the filter <code>ResourceType PREFIX_NOT_EQUALS AwsIam</code> matches
   *                findings that have a resource type that does not start with <code>AwsIam</code>.
   *                Findings with a resource type of <code>AwsIamPolicy</code>, <code>AwsIamRole</code>,
   *                or <code>AwsIamUser</code> would all be excluded from the results.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>NOT_EQUALS</code> and <code>PREFIX_NOT_EQUALS</code> filters on the same field are
   *          joined by <code>AND</code>. A finding matches only if it matches all of those
   *          filters.</p>
   *          <p>For filters on the same field, you cannot provide both an <code>EQUALS</code> filter and
   *          a <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filter. Combining filters in
   *          this way always returns an error, even if the provided filter values would return valid
   *          results.</p>
   *          <p>You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or
   *          <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the
   *             <code>PREFIX</code> filters, then the <code>NOT_EQUALS</code> or
   *             <code>PREFIX_NOT_EQUALS</code> filters.</p>
   *          <p> For example, for the following filter, Security Hub first identifies findings that have
   *          resource types that start with either <code>AwsIAM</code> or <code>AwsEc2</code>. It then
   *          excludes findings that have a resource type of <code>AwsIamPolicy</code> and findings that
   *          have a resource type of <code>AwsEc2NetworkInterface</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsIam</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType PREFIX AwsEc2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsIamPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceType NOT_EQUALS AwsEc2NetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Comparison?: StringFilterComparison | string;
}

export namespace StringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;
}

export namespace NumberFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj,
  });
}

export enum DateRangeUnit {
  DAYS = "DAYS",
}

/**
 * <p>A date range for the date filter.</p>
 */
export interface DateRange {
  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;

  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: DateRangeUnit | string;
}

export namespace DateRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateRange): any => ({
    ...obj,
  });
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

export namespace DateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  /**
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

export namespace KeywordFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeywordFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  /**
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

export namespace IpFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IpFilter): any => ({
    ...obj,
  });
}

export enum MapFilterComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
 * <p>A map filter for querying findings. Each map filter provides the field to check, the
 *          value to look for, and the comparison operator.</p>
 */
export interface MapFilter {
  /**
   * <p>The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code>
   *          identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the
   *          name of the field.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter. Filter values are case sensitive. For example,
   *          one of the values for a tag called <code>Department</code> might be <code>Security</code>.
   *          If you provide <code>security</code> as the filter value, then there is no match.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to the key value when querying for findings with a map
   *          filter.</p>
   *          <p>To search for values that exactly match the filter value, use <code>EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department EQUALS
   *             Security</code> matches findings that have the value <code>Security</code> for the tag
   *             <code>Department</code>.</p>
   *          <p>To search for values other than the filter value, use <code>NOT_EQUALS</code>. For
   *          example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS
   *             Finance</code> matches findings that do not have the value <code>Finance</code> for the
   *          tag <code>Department</code>.</p>
   *          <p>
   *             <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A finding
   *          matches if it matches any one of those filters.</p>
   *          <p>
   *             <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A
   *          finding matches only if it matches all of those filters.</p>
   *          <p>You cannot have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter
   *          on the same field.</p>
   */
  Comparison?: MapFilterComparison | string;
}

export namespace MapFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MapFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and
 *          that result in a subset of findings that are included in this insight.</p>
 *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
 *          20 filter values.</p>
 */
export interface AwsSecurityFindingFilters {
  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p>The Region from which the finding was generated.</p>
   */
  Region?: StringFilter[];

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          captured the potential security issue that a finding captured.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * @deprecated
   *
   * <p>The native severity as defined by the security-findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * @deprecated
   *
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   *          <p>Note that this is a filter against the <code>aws/securityhub/ProductName</code> field in <code>ProductFields</code>. It is not a filter for the top-level <code>ProductName</code> field.</p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   *          <p>Note that this is a filter against the <code>aws/securityhub/CompanyName</code> field in <code>ProductFields</code>. It is not a filter for the top-level <code>CompanyName</code> field.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * <p>The name of the malware that was observed.</p>
   */
  MalwareName?: StringFilter[];

  /**
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * <p>The parent process ID.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * <p>The date/time that the process was launched.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * <p>The date/time that the process was terminated.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * <p>The type of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * <p>The date/time of the last observation of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * <p>The source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * <p>The URL for more details from the source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * <p>The date and time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The name of the principal that is associated with an IAM access key.</p>
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * <p>The name of an IAM user.</p>
   */
  ResourceAwsIamUserUserName?: StringFilter[];

  /**
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * <p>The date/time that the container was started.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security
   *          standard-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   */
  WorkflowState?: StringFilter[];

  /**
   * <p>The status of the investigation into a finding. Allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to either <code>WARNING</code>,
   *                         <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *                <p>If one of the following occurs, the workflow status is changed automatically from
   *                <code>NOTIFIED</code> to <code>NEW</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is
   *                needed.</p>
   *                <p>The workflow status of a <code>SUPPRESSED</code> finding does not change if
   *                <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                <code>ACTIVE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *                <p>The finding remains <code>RESOLVED</code> unless one of the following occurs:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *                <p>In those cases, the workflow status is automatically reset to <code>NEW</code>.</p>
   *                <p>For findings from controls, if <code>Compliance.Status</code> is <code>PASSED</code>,
   *                then Security Hub automatically sets the workflow status to <code>RESOLVED</code>.</p>
   *             </li>
   *          </ul>
   */
  WorkflowStatus?: StringFilter[];

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * @deprecated
   *
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];

  /**
   * <p>The finding provider value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  FindingProviderFieldsConfidence?: NumberFilter[];

  /**
   * <p>The finding provider value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  FindingProviderFieldsCriticality?: NumberFilter[];

  /**
   * <p>The finding identifier of a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding that is identified by the finding provider.</p>
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The finding provider value for the severity label.</p>
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[];

  /**
   * <p>The finding provider's original value for the severity.</p>
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[];

  /**
   * <p>One or more finding types that the finding provider assigned to the finding. Uses the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  FindingProviderFieldsTypes?: StringFilter[];
}

export namespace AwsSecurityFindingFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFindingFilters): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a finding to update using <code>BatchUpdateFindings</code>.</p>
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;
}

export namespace AwsSecurityFindingIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsSecurityFindingIdentifier): any => ({
    ...obj,
  });
}

export interface BatchDisableStandardsRequest {
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

export namespace BatchDisableStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableStandardsRequest): any => ({
    ...obj,
  });
}

export enum StandardsStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  PENDING = "PENDING",
  READY = "READY",
}

export enum StatusReasonCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  NO_AVAILABLE_CONFIGURATION_RECORDER = "NO_AVAILABLE_CONFIGURATION_RECORDER",
}

/**
 * <p>The reason for the current status of a standard subscription.</p>
 */
export interface StandardsStatusReason {
  /**
   * <p>The reason code that represents the reason for the current status of a standard subscription.</p>
   */
  StatusReasonCode: StatusReasonCode | string | undefined;
}

export namespace StandardsStatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsStatusReason): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: { [key: string]: string } | undefined;

  /**
   * <p>The status of the standard subscription.</p>
   *          <p>The status values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Standard is in the process of being enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - Standard is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCOMPLETE</code> - Standard could not be enabled completely. Some controls may not be available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - Standard is in the process of being disabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Standard could not be disabled.</p>
   *             </li>
   *          </ul>
   */
  StandardsStatus: StandardsStatus | string | undefined;

  /**
   * <p>The reason for the current status.</p>
   */
  StandardsStatusReason?: StandardsStatusReason;
}

export namespace StandardsSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsSubscription): any => ({
    ...obj,
  });
}

export interface BatchDisableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchDisableStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisableStandardsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  /**
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>DescribeStandards</code> operation.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string };
}

export namespace StandardsSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableStandardsRequest {
  /**
   * <p>The list of standards checks to enable.</p>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

export namespace BatchEnableStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableStandardsRequest): any => ({
    ...obj,
  });
}

export interface BatchEnableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchEnableStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchEnableStandardsResponse): any => ({
    ...obj,
  });
}

export interface BatchImportFindingsRequest {
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

export namespace BatchImportFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  /**
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace ImportFindingsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportFindingsError): any => ({
    ...obj,
  });
}

export interface BatchImportFindingsResponse {
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];
}

export namespace BatchImportFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchImportFindingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;
}

export namespace NoteUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoteUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Updates to the severity information for a finding.</p>
 */
export interface SeverityUpdate {
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>,
   *             <code>Label</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;
}

export namespace SeverityUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SeverityUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Used to update information about the investigation into the finding.</p>
 */
export interface WorkflowUpdate {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets <code>WorkFlowStatus</code> from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>The record state changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The compliance status changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and do not believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace WorkflowUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkflowUpdate): any => ({
    ...obj,
  });
}

export interface BatchUpdateFindingsRequest {
  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;

  /**
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];
}

export namespace BatchUpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>The code associated with the error.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with the error.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace BatchUpdateFindingsUnprocessedFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsUnprocessedFinding): any => ({
    ...obj,
  });
}

export interface BatchUpdateFindingsResponse {
  /**
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

export namespace BatchUpdateFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateFindingsResponse): any => ({
    ...obj,
  });
}

export enum ControlStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   */
  Id: string | undefined;
}

export namespace CreateActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface CreateActionTargetResponse {
  /**
   * <p>The ARN for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace CreateActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateActionTargetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace ResourceConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

export interface CreateFindingAggregatorRequest {
  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a comma-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a comma-separated list of Regions that do aggregate findings to the aggregation Region.
   *       </p>
   */
  Regions?: string[];
}

export namespace CreateFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface CreateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop finding aggregation.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export namespace CreateFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export interface CreateInsightRequest {
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace CreateInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInsightRequest): any => ({
    ...obj,
  });
}

export interface CreateInsightResponse {
  /**
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

export namespace CreateInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInsightResponse): any => ({
    ...obj,
  });
}

export interface CreateMembersRequest {
  /**
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   */
  AccountDetails: AccountDetails[] | undefined;
}

export namespace CreateMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  /**
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;
}

export namespace Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj,
  });
}

export interface CreateMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace CreateMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsRequest {
  /**
   * <p>The list of account IDs for the accounts from which to decline the invitations to
   *          Security Hub.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeclineInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeclineInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionTargetRequest): any => ({
    ...obj,
  });
}

export interface DeleteActionTargetResponse {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteActionTargetResponse): any => ({
    ...obj,
  });
}

export interface DeleteFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

export namespace DeleteFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface DeleteFindingAggregatorResponse {}

export namespace DeleteFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export interface DeleteInsightRequest {
  /**
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightRequest): any => ({
    ...obj,
  });
}

export interface DeleteInsightResponse {
  /**
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInsightResponse): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsRequest {
  /**
   * <p>The list of the account IDs that sent the invitations to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
}

export interface DeleteMembersRequest {
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj,
  });
}

export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj,
  });
}

export interface DescribeActionTargetsRequest {
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeActionTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionTargetsRequest): any => ({
    ...obj,
  });
}

export interface DescribeActionTargetsResponse {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeActionTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeActionTargetsResponse): any => ({
    ...obj,
  });
}

export interface DescribeHubRequest {
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

export namespace DescribeHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHubRequest): any => ({
    ...obj,
  });
}

export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;
}

export namespace DescribeHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHubResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;
}

export namespace DescribeOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

export namespace DescribeProductsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProductsRequest): any => ({
    ...obj,
  });
}

export enum IntegrationType {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB = "UPDATE_FINDINGS_IN_SECURITY_HUB",
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export namespace Product {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Product): any => ({
    ...obj,
  });
}

export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProductsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a specific standard.</p>
 */
export interface Standard {
  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * <p>The name of the standard.</p>
   */
  Name?: string;

  /**
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;
}

export namespace Standard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Standard): any => ({
    ...obj,
  });
}

export interface DescribeStandardsResponse {
  /**
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStandardsControlsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsControlsRequest): any => ({
    ...obj,
  });
}

export enum SeverityRating {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  /**
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

export namespace StandardsControl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StandardsControl): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsResponse {
  /**
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsControlsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStandardsControlsResponse): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export namespace DisableImportFindingsForProductRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductResponse {}

export namespace DisableImportFindingsForProductResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountResponse {}

export namespace DisableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubRequest {}

export namespace DisableSecurityHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubResponse {}

export namespace DisableSecurityHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountRequest {}

export namespace DisassociateFromAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromAdministratorAccountResponse {}

export namespace DisassociateFromAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountRequest {}

export namespace DisassociateFromMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountResponse {}

export namespace DisassociateFromMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DisassociateMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMembersResponse {}

export namespace DisassociateMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export namespace EnableImportFindingsForProductRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

export namespace EnableImportFindingsForProductResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace EnableOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountResponse {}

export namespace EnableOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;
}

export namespace EnableSecurityHubRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubResponse {}

export namespace EnableSecurityHubResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A finding aggregator. A finding aggregator contains the configuration for finding aggregation.</p>
 */
export interface FindingAggregator {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;
}

export namespace FindingAggregator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingAggregator): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountRequest {}

export namespace GetAdministratorAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between the member and administrator accounts.</p>
   */
  MemberStatus?: string;
}

export namespace Invitation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
}

export interface GetAdministratorAccountResponse {
  /**
   * <p>Details about an invitation.</p>
   */
  Administrator?: Invitation;
}

export namespace GetAdministratorAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
    ...obj,
  });
}

export interface GetEnabledStandardsRequest {
  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetEnabledStandardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
    ...obj,
  });
}

export interface GetEnabledStandardsResponse {
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetEnabledStandardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnabledStandardsResponse): any => ({
    ...obj,
  });
}

export interface GetFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

export namespace GetFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface GetFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export namespace GetFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export enum SortOrder {
  ASCENDING = "asc",
  DESCENDING = "desc",
}

/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SortCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj,
  });
}

export interface GetFindingsRequest {
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;
}

export namespace GetFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
}

export interface GetFindingsResponse {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

export namespace GetInsightResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

export namespace InsightResultValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightResultValue): any => ({
    ...obj,
  });
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

export namespace InsightResults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightResults): any => ({
    ...obj,
  });
}

export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

export namespace GetInsightResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResultsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightsRequest {
  /**
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetInsightsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace Insight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj,
  });
}

export interface GetInsightsResponse {
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetInsightsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountRequest {}

export namespace GetInvitationsCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
}

export interface GetMasterAccountRequest {}

export namespace GetMasterAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

export namespace GetMasterAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * @deprecated
   *
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  AdministratorId?: string;

  /**
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVED</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIGNED</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_SUSPENDED</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   */
  MemberStatus?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace GetMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
}

export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace InviteMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj,
  });
}

export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace InviteMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj,
  });
}

export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListEnabledProductsForImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportRequest): any => ({
    ...obj,
  });
}

export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEnabledProductsForImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportResponse): any => ({
    ...obj,
  });
}

export interface ListFindingAggregatorsRequest {
  /**
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   */
  MaxResults?: number;
}

export namespace ListFindingAggregatorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingAggregatorsRequest): any => ({
    ...obj,
  });
}

export interface ListFindingAggregatorsResponse {
  /**
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   */
  FindingAggregators?: FindingAggregator[];

  /**
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListFindingAggregatorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingAggregatorsResponse): any => ({
    ...obj,
  });
}

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
}

export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
}

export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace ListMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
}

export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   */
  NextToken?: string;
}

export namespace ListOrganizationAdminAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub administrator accounts.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationAdminAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;
}

export namespace UpdateActionTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetResponse {}

export namespace UpdateActionTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;

  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a comma-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a comma-separated list of Regions that do aggregate findings to the aggregation Region.</p>
   */
  Regions?: string[];
}

export namespace UpdateFindingAggregatorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingAggregatorRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export namespace UpdateFindingAggregatorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingAggregatorResponse): any => ({
    ...obj,
  });
}

export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;
}

export namespace UpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsResponse {}

export namespace UpdateFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateInsightRequest {
  /**
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;

  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;
}

export namespace UpdateInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInsightRequest): any => ({
    ...obj,
  });
}

export interface UpdateInsightResponse {}

export namespace UpdateInsightResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInsightResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;
}

export namespace UpdateOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {}

export namespace UpdateOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationRequest {
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;
}

export namespace UpdateSecurityHubConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationResponse {}

export namespace UpdateSecurityHubConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlRequest {
  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;
}

export namespace UpdateStandardsControlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStandardsControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlResponse {}

export namespace UpdateStandardsControlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStandardsControlResponse): any => ({
    ...obj,
  });
}
