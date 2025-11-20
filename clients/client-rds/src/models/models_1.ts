// smithy-typescript generated code
import {
  ActivityStreamMode,
  ActivityStreamPolicyStatus,
  ActivityStreamStatus,
  AuditPolicyState,
  AutomationMode,
  CustomEngineVersionStatus,
  DatabaseInsightsMode,
  DefaultAuthScheme,
  MasterUserAuthenticationType,
  ReplicaMode,
} from "./enums";

import {
  AvailableProcessorFeature,
  BlueGreenDeployment,
  Certificate,
  DBCluster,
  DBClusterSnapshotAttributesResult,
  DBInstance,
  DBInstanceAutomatedBackup,
  DBProxy,
  DBProxyEndpoint,
  DBProxyTarget,
  DBProxyTargetGroup,
  DBRecommendation,
  DBSecurityGroup,
  DBSnapshot,
  DBSnapshotAttributesResult,
  DBSubnetGroup,
  DoubleRange,
  EventSubscription,
  Filter,
  GlobalCluster,
  OptionGroup,
  OptionSetting,
  Parameter,
  ProcessorFeature,
  Range,
  RdsCustomClusterConfiguration,
  ReservedDBInstance,
  ScalingConfiguration,
  ServerlessV2ScalingConfiguration,
  Tag,
  TenantDatabase,
  UserAuthConfig,
} from "./models_0";

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.</p>
 * @public
 */
export interface ValidStorageOptions {
  /**
   * <p>The valid storage types for your DB instance.
   *             For example: gp2, gp3, io1, io2.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The valid range of storage in gibibytes (GiB).
   *             For example, 100 to 16,384.</p>
   * @public
   */
  StorageSize?: Range[] | undefined;

  /**
   * <p>The valid range of provisioned IOPS.
   *             For example, 1000-256,000.</p>
   * @public
   */
  ProvisionedIops?: Range[] | undefined;

  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier.
   *             For example, 3-10,
   *             which means that provisioned IOPS can be between 3 and 10 times storage.</p>
   * @public
   */
  IopsToStorageRatio?: DoubleRange[] | undefined;

  /**
   * <p>The valid range of provisioned storage throughput. For example,
   *             500-4,000 mebibytes per second (MiBps).</p>
   * @public
   */
  ProvisionedStorageThroughput?: Range[] | undefined;

  /**
   * <p>The valid range of storage throughput to provisioned IOPS ratios. For example,
   *         0-0.25.</p>
   * @public
   */
  StorageThroughputToIopsRatio?: DoubleRange[] | undefined;

  /**
   * <p>Indicates whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.</p>
   * @public
   */
  SupportsStorageAutoscaling?: boolean | undefined;
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.</p>
 * @public
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.</p>
   * @public
   */
  Storage?: ValidStorageOptions[] | undefined;

  /**
   * <p>Valid processor features for your DB instance.</p>
   * @public
   */
  ValidProcessorFeatures?: AvailableProcessorFeature[] | undefined;

  /**
   * <p>Indicates whether a DB instance supports using a dedicated log volume (DLV).</p>
   * @public
   */
  SupportsDedicatedLogVolume?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsResult {
  /**
   * <p>Information about valid modifications that you can make to your DB instance.
   *             Contains the result of a successful call to the
   *             <code>DescribeValidDBInstanceModifications</code> action.
   *             You can use this information when you call
   *             <code>ModifyDBInstance</code>.</p>
   * @public
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage | undefined;
}

/**
 * @public
 */
export interface DisableHttpEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisableHttpEndpointResponse {
  /**
   * <p>The ARN of the DB cluster.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Indicates whether the HTTP endpoint is enabled or disabled for the DB cluster.</p>
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;
}

/**
 * <p>This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.</p>
 * @public
 */
export interface DownloadDBLogFilePortionDetails {
  /**
   * <p>Entries from the specified log file.</p>
   * @public
   */
  LogFileData?: string | undefined;

  /**
   * <p>A pagination token that can be used in a later <code>DownloadDBLogFilePortion</code> request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A Boolean value that, if true, indicates there is more data to be downloaded.</p>
   * @public
   */
  AdditionalDataPending?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DownloadDBLogFilePortionMessage {
  /**
   * <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the log file to be downloaded.</p>
   * @public
   */
  LogFileName: string | undefined;

  /**
   * <p>The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.</p>
   *          <p>If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning
   *             or the end of the log file, depending on the value of the Marker parameter.</p>
   *          <ul>
   *             <li>
   *                <p>If neither Marker or NumberOfLines are specified, the entire log file is returned up to a
   *               maximum of 10000 lines, starting with the most recent log entries first.</p>
   *             </li>
   *             <li>
   *                <p>If
   *               NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end
   *                     of the log file are returned.</p>
   *             </li>
   *             <li>
   *                <p>If Marker is specified as "0", then the specified
   *                       number of lines from the beginning of the log file are returned.</p>
   *             </li>
   *             <li>
   *                <p>You can
   *                         download the log file in blocks of lines by specifying the size of the block using
   *                     the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your
   *                     first request. Include the Marker value returned in the response as the Marker value for the next
   *                     request, continuing until the AdditionalDataPending response element returns false.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NumberOfLines?: number | undefined;
}

/**
 * @public
 */
export interface EnableHttpEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface EnableHttpEndpointResponse {
  /**
   * <p>The ARN of the DB cluster.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Indicates whether the HTTP endpoint is enabled or disabled for the DB cluster.</p>
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * <p>The identifier of the DB cluster to force a failover for. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB instance to promote to the primary DB instance.</p>
   *          <p>Specify the DB instance identifier for an Aurora Replica or a Multi-AZ readable standby in the DB cluster,
   *         for example <code>mydbcluster-replica1</code>.</p>
   *          <p>This setting isn't supported for RDS for MySQL Multi-AZ DB clusters.</p>
   * @public
   */
  TargetDBInstanceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterMessage {
  /**
   * <p>The identifier of the global database cluster (Aurora global database) this operation should apply to.
   *         The identifier is the unique key assigned by the user when the Aurora global database is created. In other words,
   *         it's the name of the Aurora global database.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global database cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the secondary Aurora DB cluster that you want to promote to the primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that
   *        Aurora can locate the cluster in its Amazon Web Services Region.</p>
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;

  /**
   * <p>Specifies whether to allow data loss for this global database cluster operation. Allowing data loss triggers a global failover operation.</p>
   *          <p>If you don't specify <code>AllowDataLoss</code>, the global database cluster operation defaults to a switchover.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified together with the <code>Switchover</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AllowDataLoss?: boolean | undefined;

  /**
   * <p>Specifies whether to switch over this global database cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified together with the <code>AllowDataLoss</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Switchover?: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TagListMessage {
  /**
   * <p>List of tags returned by the <code>ListTagsForResource</code> operation.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the RDS for Oracle or Microsoft SQL Server DB instance.
   *             For example, <code>arn:aws:rds:us-east-1:12345667890:db:my-orcl-db</code>.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is
   *             read-only. You can edit your audit policy only when the activity stream is unlocked or stopped.</p>
   * @public
   */
  AuditPolicyState?: AuditPolicyState | undefined;
}

/**
 * @public
 */
export interface ModifyActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of messages in the database activity stream.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   * @public
   */
  KinesisStreamName?: string | undefined;

  /**
   * <p>The status of the modification to the database activity stream.</p>
   * @public
   */
  Status?: ActivityStreamStatus | undefined;

  /**
   * <p>The mode of the database activity stream.</p>
   * @public
   */
  Mode?: ActivityStreamMode | undefined;

  /**
   * <p>Indicates whether engine-native audit fields are included in the database activity stream.</p>
   * @public
   */
  EngineNativeAuditFieldsIncluded?: boolean | undefined;

  /**
   * <p>The status of the modification to the policy state of the database activity stream.</p>
   * @public
   */
  PolicyStatus?: ActivityStreamPolicyStatus | undefined;
}

/**
 * @public
 */
export interface ModifyCertificatesMessage {
  /**
   * <p>The new default certificate identifier to override the current one with.</p>
   *          <p>To determine the valid values, use the <code>describe-certificates</code> CLI
   *             command or the <code>DescribeCertificates</code> API operation.</p>
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to remove the override for the default certificate.
   *             If the override is removed, the default certificate is the system
   *             default.</p>
   * @public
   */
  RemoveCustomerOverride?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCertificatesResult {
  /**
   * <p>A CA certificate for an Amazon Web Services account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface DBClusterCapacityInfo {
  /**
   * <p>A user-supplied DB cluster identifier. This identifier is the unique key that
   *             identifies a DB cluster.</p>
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * <p>A value that specifies the capacity that the DB cluster scales to next.</p>
   * @public
   */
  PendingCapacity?: number | undefined;

  /**
   * <p>The current capacity of the DB cluster.</p>
   * @public
   */
  CurrentCapacity?: number | undefined;

  /**
   * <p>The number of seconds before a call to <code>ModifyCurrentDBClusterCapacity</code> times out.</p>
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *             <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   * @public
   */
  TimeoutAction?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCurrentDBClusterCapacityMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The DB cluster capacity.</p>
   *          <p>When you change the capacity of a paused Aurora Serverless v1 DB cluster, it automatically resumes.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *             </li>
   *             <li>
   *                <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is
   *             300.</p>
   *          <p>Specify a value between 10 and 600 seconds.</p>
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *          <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *          <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   * @public
   */
  TimeoutAction?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCustomDBEngineVersionMessage {
  /**
   * <p>The database engine. RDS Custom for Oracle supports the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>custom-oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The custom engine version (CEV) that you want to modify. This option is required for
   *             RDS Custom for Oracle, but optional for Amazon RDS. The combination of <code>Engine</code> and
   *             <code>EngineVersion</code> is unique per customer per Amazon Web Services Region.</p>
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * <p>An optional description of your CEV.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The availability status to be assigned to the CEV. Valid values are as follows:</p>
   *          <dl>
   *             <dt>available</dt>
   *             <dd>
   *                <p>You can use this CEV to create a new RDS Custom DB instance.</p>
   *             </dd>
   *             <dt>inactive</dt>
   *             <dd>
   *                <p>You can create a new RDS Custom instance by restoring a DB snapshot with this CEV.
   *                     You can't patch or create new instances with this CEV.</p>
   *             </dd>
   *          </dl>
   *          <p>You can change any status to any status. A typical reason to change status is to prevent the accidental
   *             use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status
   *             of your CEV from <code>available</code> to <code>inactive</code>, and from <code>inactive</code> back to
   *             <code>available</code>. To change the availability status of the CEV, it must not currently be in use by an
   *             RDS Custom instance, snapshot, or automated backup.</p>
   * @public
   */
  Status?: CustomEngineVersionStatus | undefined;
}

/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch
 *             Logs for a specific DB instance or DB cluster.</p>
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported
 *             (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB
 *             engine being used.</p>
 *          <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @public
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * <p>The list of log types to enable.</p>
   *          <p>The following values are valid for each DB engine:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora MySQL - <code>audit | error | general | slowquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Aurora PostgreSQL - <code>postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>error | general | slowquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql | upgrade</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  EnableLogTypes?: string[] | undefined;

  /**
   * <p>The list of log types to disable.</p>
   *          <p>The following values are valid for each DB engine:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora MySQL - <code>audit | error | general | slowquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Aurora PostgreSQL - <code>postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>error | general | slowquery</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql | upgrade</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  DisableLogTypes?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   * @public
   */
  NewDBClusterIdentifier?: string | undefined;

  /**
   * <p>Specifies whether the modifications in this request are asynchronously applied as soon as possible, regardless of the
   *             <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is disabled, changes to the DB cluster
   *             are applied during the next maintenance window.</p>
   *          <p>Most modifications can be applied immediately or during the next scheduled maintenance window. Some modifications, such as
   *             turning on deletion protection and changing the master password, are applied immediately—regardless of when you choose to apply them.</p>
   *          <p>By default, this parameter is disabled.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>The number of days for which automated backups are retained. Specify a minimum value of <code>1</code>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The new password for the master database user.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>Can contain any printable ASCII character except "/", """, or "@".</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if <code>ManageMasterUserPassword</code> is turned on.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The option group to associate the DB cluster with.</p>
   *          <p>DB clusters are associated with a default option group that can't be modified.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled,
   *             using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To view the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *                 Backup window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Days must be one of <code>Mon | Tue | Wed | Thu | Fri | Sat | Sun</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database
   *                 Authentication</a> in the <i>Amazon Aurora User Guide</i> or
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">IAM database
   *                 authentication for MariaDB, MySQL, and PostgreSQL</a> in the <i>Amazon
   *                 RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             <code>0</code>.</p>
   *          <p>Valid for Cluster Type: Aurora MySQL DB clusters only</p>
   *          <p>Default: <code>0</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>The following values are valid for each DB engine:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora MySQL - <code>audit | error | general | instance | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Aurora PostgreSQL - <code>instance | postgresql | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>error | general | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql | upgrade | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">
   *                 Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * <p>The version number of the database engine to which you want to upgrade. Changing this
   *             parameter results in an outage. The change is applied during the next maintenance window
   *             unless <code>ApplyImmediately</code> is enabled.</p>
   *          <p>If the cluster that you're modifying has one or more read replicas, all replicas must
   *             be running an engine version that's the same or later than the version you
   *             specify.</p>
   *          <p>To list all of the available engine versions for Aurora MySQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query
   *                 "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for Aurora PostgreSQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for RDS for MySQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for RDS for PostgreSQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Specifies whether major version upgrades are allowed.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster.</p>
   *          <note>
   *             <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB
   *           cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than
   *              during the next maintenance window.</p>
   *          </note>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   *          <p>Default: The existing name setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>The <code>DBInstanceParameterGroupName</code> parameter is valid in combination with the
   *               <code>AllowMajorVersionUpgrade</code> parameter for a major version upgrade only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceParameterGroupName?: string | undefined;

  /**
   * <p>The Active Directory directory ID to move the DB cluster to.
   *           Specify <code>none</code> to remove the cluster from its current domain.
   *           The domain must be created prior to this operation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *             in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * <p>Specifies whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Specifies whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint
   *             isn't enabled.</p>
   *          <p>When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running
   *             SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database
   *             from inside the RDS console with the RDS query editor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using RDS Data API</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   *          <note>
   *             <p>This parameter applies only to Aurora Serverless v1 DB clusters. To enable or disable the HTTP endpoint for an Aurora
   *         Serverless v2 or provisioned DB cluster, use the <code>EnableHttpEndpoint</code> and <code>DisableHttpEndpoint</code> operations.</p>
   *          </note>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  EnableHttpEndpoint?: boolean | undefined;

  /**
   * <p>Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster
   *       (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that
   *       are secondary clusters in an Aurora global database.</p>
   *          <p>You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter
   *       enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to
   *       this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the
   *         primary is demoted by a global cluster API operation, but it does nothing until then.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  EnableGlobalWriteForwarding?: boolean | undefined;

  /**
   * <p>The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example <code>db.m6gd.xlarge</code>.
   *             Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.</p>
   *          <p>For the full list of DB instance classes and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">
   *         DB Instance Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * <p>The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The storage type to associate with the DB cluster.</p>
   *          <p>For information on storage types for Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type">Storage configurations for Amazon Aurora DB clusters</a>. For information on storage types for Multi-AZ DB
   *             clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings">Settings for creating Multi-AZ DB clusters</a>.</p>
   *          <p>When specified for a Multi-AZ DB cluster, a value for the <code>Iops</code> parameter is required.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora DB clusters - <code>aurora | aurora-iopt1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Multi-AZ DB clusters - <code>io1 | io2 | gp3</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora DB clusters - <code>aurora</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Multi-AZ DB clusters - <code>io1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated
   *             for each DB instance in the Multi-AZ DB cluster.</p>
   *          <p>For information about valid IOPS values, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a multiple between .5 and 50 of the storage amount for the DB cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.
   *             By default, minor engine upgrades are applied automatically.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The network type of the DB cluster.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   *          <p>Valid Values: <code>IPV4 | DUAL</code>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.
   *             To turn off collecting Enhanced Monitoring metrics, specify <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code>
   *             to a value other than <code>0</code>.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   *          <p>Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An
   *             example is <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *                 create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, supply a <code>MonitoringRoleArn</code> value.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters only</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>Specifies the mode of Database Insights to enable for the DB cluster.</p>
   *          <p>If you change the value from <code>standard</code> to <code>advanced</code>, you must set the
   *             <code>PerformanceInsightsEnabled</code> parameter to <code>true</code> and the
   *             <code>PerformanceInsightsRetentionPeriod</code> parameter to 465.</p>
   *          <p>If you change the value from <code>advanced</code> to <code>standard</code>, you can set the <code>PerformanceInsightsEnabled</code> parameter to <code>true</code> to collect detailed database counter and per-query metrics.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Specifies whether to turn on Performance Insights for the DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">
   *             Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS issues an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>If the DB cluster doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn
   *             on this management. In this case, you can't specify <code>MasterUserPassword</code>.</p>
   *          <p>If the DB cluster already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the
   *             master user password is not managed with Amazon Web Services Secrets Manager, then you must specify <code>MasterUserPassword</code>.
   *             In this case, RDS deletes the secret and uses the new password for the master user specified by
   *             <code>MasterUserPassword</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the
   *             master user password.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB cluster. The secret value contains the updated password.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You must apply the change immediately when rotating the master user password.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * <p>Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By
   *             default, write operations aren't allowed on reader DB instances.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  EnableLocalWriteForwarding?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if both of the following conditions are met:</p>
   *          <ul>
   *             <li>
   *                <p>The DB cluster doesn't manage the master user password in Amazon Web Services Secrets Manager.</p>
   *                <p>If the DB cluster already manages the master user password in Amazon Web Services Secrets
   *                     Manager, you can't change the KMS key that is used to encrypt the secret.</p>
   *             </li>
   *             <li>
   *                <p>You are turning on <code>ManageMasterUserPassword</code> to manage the master user password
   *                     in Amazon Web Services Secrets Manager.</p>
   *                <p>If you are turning on <code>ManageMasterUserPassword</code> and don't specify
   *                     <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *                     KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *                     use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *                     managed KMS key.</p>
   *             </li>
   *          </ul>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code> or <code>serverless</code>.</p>
   *          <note>
   *             <p>The DB engine mode can be modified only from <code>serverless</code> to <code>provisioned</code>.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html">
   *             CreateDBCluster</a>.</p>
   *          <p>Valid for Cluster Type: Aurora DB clusters only</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>Specifies whether engine mode changes from <code>serverless</code> to <code>provisioned</code>
   *             are allowed.</p>
   *          <p>Valid for Cluster Type: Aurora Serverless v1 DB clusters only</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You must allow engine mode changes when specifying a different value for the <code>EngineMode</code> parameter
   *             from the DB cluster's current engine mode.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AllowEngineModeChange?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * <p>Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   *          <note>
   *             <p>This setting is no longer used. Instead use the <code>ClusterScalabilityType</code> setting when you create your Aurora Limitless Database DB cluster.</p>
   *          </note>
   * @public
   */
  EnableLimitlessDatabase?: boolean | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB cluster's server certificate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for Cluster Type: Multi-AZ DB clusters</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>Specifies the authentication type for the master user. With IAM master user authentication, you can change the master DB user to use IAM database authentication.</p>
   *          <p>You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>password</code> - Use standard database authentication with a password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-db-auth</code> - Use IAM database authentication for the master user.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.</p>
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterEndpointMessage {
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   * @public
   */
  ExcludedMembers?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <note>
   *             <p>You can use the <code>immediate</code> value with dynamic parameters only. You can use the
   *               <code>pending-reboot</code> value for both dynamic and static parameters.</p>
   *             <p>When the application method is <code>immediate</code>, changes to dynamic parameters are applied immediately
   *           to the DB clusters associated with the parameter group. When the application method is <code>pending-reboot</code>,
   *           changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the
   *           parameter group.</p>
   *          </note>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot,
   *             set this value to <code>restore</code>.</p>
   *          <note>
   *             <p>To view the list of attributes available to modify, use the
   *                 <a>DescribeDBClusterSnapshotAttributes</a> API operation.</p>
   *          </note>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account
   *             IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by
   *             any Amazon Web Services account. Do not add the <code>all</code> value for any
   *             manual DB cluster snapshots that contain private information that you don't want available
   *             to all Amazon Web Services accounts.</p>
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include
   *             one or more Amazon Web Services account
   *             identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or
   *             restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon Web Services account whose account ID is
   *             explicitly added to the <code>restore</code> attribute
   *             can still copy or restore a manual DB cluster snapshot.</p>
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBInstanceMessage {
  /**
   * <p>The identifier of DB instance to modify. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The new amount of storage in gibibytes (GiB) to allocate for the DB instance.</p>
   *          <p>For RDS for Db2, MariaDB, RDS for MySQL, RDS for Oracle, and RDS for PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up
   *           so that they are 10% greater than the current value.</p>
   *          <p>For the valid values for allocated storage for each engine,
   *           see <code>CreateDBInstance</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>When you increase the allocated storage for a DB instance that uses
   *                     Provisioned IOPS (<code>gp3</code>, <code>io1</code>, or <code>io2</code>
   *                     storage type), you must also specify the <code>Iops</code> parameter. You can
   *                     use the current value for <code>Iops</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example <code>db.m4.large</code>. Not all DB instance classes are available in all
   *             Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the
   *                 <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html">Aurora
   *                 DB instance classes</a> in the <i>Amazon Aurora User Guide</i>. For RDS Custom, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits.html#custom-reqs-limits.instances">DB instance class support for RDS Custom for Oracle</a> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits-MS.html#custom-reqs-limits.instancesMS">
   *                 DB instance class support for RDS Custom for SQL Server</a>.</p>
   *          <p>If you modify the DB instance class, an outage occurs during the change. The change is
   *             applied during the next maintenance window, unless you specify
   *                 <code>ApplyImmediately</code> in your request. </p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If you are modifying the DB instance class and upgrading the engine version at the same time, the currently running engine version must be supported on the
   *             specified DB instance class. Otherwise, the operation returns an error. In this case, first run the operation to upgrade the engine version,
   *             and then run it again to modify the DB instance class.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The new DB subnet group for the DB instance.
   *           You can use this parameter to move your DB instance to a different VPC.
   *
   *
   *           If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC">Working with a DB instance in a VPC</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Changing the subnet group causes an outage during the change.
   *         The change is applied during the next maintenance window,
   *         unless you enable <code>ApplyImmediately</code>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DB subnet group.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't
   *           result in an outage and the change is asynchronously applied as soon as possible.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DB security groups.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with this DB instance. This change is
   *           asynchronously applied as soon as possible.</p>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora (The associated list of EC2 VPC security groups is managed by
   *           the DB cluster. For more information, see <code>ModifyDBCluster</code>.)</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *          </ul>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing VPC security group IDs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible,
   *           regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance. By default, this parameter is disabled.</p>
   *          <p>If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage
   *         and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot. Review the table of parameters in
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html">Modifying a DB Instance</a> in the
   *         <i>Amazon RDS User Guide</i> to see the impact of enabling or disabling <code>ApplyImmediately</code> for each modified parameter and to
   *         determine when the changes are applied.</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>The new password for the master user.</p>
   *          <p>Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *         Between the time of the request and the completion of the request,
   *         the <code>MasterUserPassword</code> element exists in the
   *           <code>PendingModifiedValues</code> element of the operation response.</p>
   *          <note>
   *             <p>Amazon RDS API operations never return the password,
   *               so this operation provides a way to regain access to a primary instance user if the password is lost.
   *               This includes restoring privileges that might have been accidentally revoked.</p>
   *          </note>
   *          <p>This setting doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora</p>
   *                <p>The password for the master user is managed by the DB cluster. For more
   *                     information, see <code>ModifyDBCluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle CDBs in the multi-tenant configuration</p>
   *                <p>Specify the master password in <code>ModifyTenantDatabase</code>
   *                     instead.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>ManageMasterUserPassword</code> is turned on.</p>
   *             </li>
   *             <li>
   *                <p>Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&" (ampersand) or  the "'" (single quotes) character.</p>
   *             </li>
   *          </ul>
   *          <p>Length Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - Must contain from 8 to 255 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - Must contain from 8 to 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - Must contain from 8 to 30 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - Must contain from 8 to 128 characters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The name of the DB parameter group to apply to the DB instance.</p>
   *          <p>Changing this setting doesn't result in an outage. The parameter group name itself is changed
   *           immediately, but the actual parameter changes are not applied until you reboot the
   *           instance without failover. In this case, the DB instance isn't rebooted automatically, and the
   *           parameter changes aren't applied during the next maintenance window. However, if you modify
   *           dynamic parameters in the newly associated DB parameter group, these changes are applied
   *           immediately without a reboot.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the same DB parameter group family as the DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *          <note>
   *             <p>Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.</p>
   *          </note>
   *          <p>These changes are applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled
   *             for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously
   *             applied as soon as possible.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB
   *             cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to
   *               read replicas.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 for an RDS Custom for Oracle DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         as determined by the <code>BackupRetentionPeriod</code> parameter.
   *         Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *           The default is a 30-minute window selected at random from an
   *           8-hour block of time for each Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by
   *           the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, which
   *             might result in an outage. Changing this parameter doesn't result in an outage, except
   *             in the following situation, and the change is asynchronously applied as soon as
   *             possible. If there are pending actions that cause a reboot, and the maintenance window
   *             is changed to include the current time, then changing this parameter causes a reboot
   *             of the DB instance. If you change this window to the current time, there must be at least 30
   *             minutes between the current time and end of the window to ensure pending changes are
   *             applied.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>The day values must be <code>mon | tue | wed | thu | fri | sat | sun</code>. </p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result
   *           in an outage. The change is applied during the next maintenance window unless the <code>ApplyImmediately</code>
   *           parameter is enabled for this request.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The version number of the database engine to upgrade to.
   *     Changing this parameter results in an outage and the change
   *     is applied during the next maintenance window
   *     unless the <code>ApplyImmediately</code> parameter is enabled for this request.</p>
   *          <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a
   *             new DB parameter group in the DB parameter group family for the new engine version must
   *             be specified. The new DB parameter group can be the default for that DB parameter group
   *             family.</p>
   *          <p>If you specify only a major version, Amazon RDS updates the DB instance to the
   *           default minor version if the current minor version is lower.
   *           For information about valid engine versions, see <code>CreateDBInstance</code>,
   *           or call <code>DescribeDBEngineVersions</code>.</p>
   *          <p>If the instance that you're modifying is acting as a read replica, the engine version
   *             that you specify must be the same or higher than the version that the source DB instance
   *             or cluster is running.</p>
   *          <p>In RDS Custom for Oracle, this parameter is supported for read replicas only if they are in the
   *           <code>PATCH_DB_FAILURE</code> lifecycle.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If you are upgrading the engine version and modifying the DB instance class at the same time, the currently running engine version must be supported on the
   *             specified DB instance class. Otherwise, the operation returns an error. In this case, first run the operation to upgrade the engine version,
   *             and then run it again to modify the DB instance class.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Specifies whether major version upgrades are allowed. Changing this parameter doesn't
   *           result in an outage and the change is asynchronously applied as soon as possible.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Major version upgrades must be allowed when specifying a value
   *           for the <code>EngineVersion</code> parameter that's a different major version than the DB instance's current version.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Specifies whether minor version upgrades are applied automatically to the DB instance
   *           during the maintenance window. An outage occurs when all the following conditions are met:</p>
   *          <ul>
   *             <li>
   *                <p>The automatic upgrade is enabled for the maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>A newer minor version is available.</p>
   *             </li>
   *             <li>
   *                <p>RDS has enabled automatic patching for the engine version.</p>
   *             </li>
   *          </ul>
   *          <p>If any of the preceding conditions isn't met, Amazon RDS applies the change as soon as possible and
   *       doesn't cause an outage.</p>
   *          <p>For an RDS Custom DB instance, don't enable this setting. Otherwise, the operation returns an error.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The license model for the DB instance.</p>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - <code>bring-your-own-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>bring-your-own-license | license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql-license</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the RDS instance.</p>
   *          <p>Changing this setting doesn't result in an outage and
   *             the change is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled for this request.
   *           If you are migrating from Provisioned IOPS to standard storage, set this value to 0.
   *           The DB instance will require a reboot for the change in storage type to take effect.</p>
   *          <p>If you choose to migrate your DB instance from using standard storage to Provisioned
   *             IOPS (io1), or from Provisioned IOPS to standard storage, the process can take time. The
   *             duration of the migration depends on several factors such as database load, storage
   *             size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any),
   *             and the number of prior scale storage operations. Typical migration times are under 24
   *             hours, but the process can take up to several days in some cases. During the migration,
   *             the DB instance is available for use, but might experience performance degradation.
   *             While the migration takes place, nightly backups for the instance are suspended. No
   *             other Amazon RDS operations can take place for the instance, including modifying the
   *             instance, rebooting the instance, deleting the instance, creating a read replica for the
   *             instance, and creating a DB snapshot of the instance.</p>
   *          <p></p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>For RDS for MariaDB, RDS for MySQL, RDS for Oracle, and RDS for PostgreSQL - The value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.</p>
   *             </li>
   *             <li>
   *                <p>When you increase the Provisioned IOPS, you must also specify the
   *                         <code>AllocatedStorage</code> parameter. You can use the current value for
   *                         <code>AllocatedStorage</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Uses existing setting</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput value for the DB instance.</p>
   *          <p>This setting applies only to the <code>gp3</code> storage type.</p>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The option group to associate the DB instance with.</p>
   *          <p>Changing this parameter doesn't result in an outage, with one exception. If the parameter change results
   *           in an option group that enables OEM, it can cause a brief period, lasting less than a second, during which
   *           new connections are rejected but existing connections aren't interrupted.</p>
   *          <p>The change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter
   *           is enabled for this request.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed
   *           from an option group, and that option group can't be removed from a DB instance after
   *           it is associated with a DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The new identifier for the DB instance when renaming a DB instance. When you change the DB instance
   *           identifier, an instance reboot occurs immediately if you enable <code>ApplyImmediately</code>, or will occur
   *           during the next maintenance window if you disable <code>ApplyImmediately</code>. This value is stored as a lowercase string.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   * @public
   */
  NewDBInstanceIdentifier?: string | undefined;

  /**
   * <p>The storage type to associate with the DB instance.</p>
   *          <p>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>
   *           you must also include a value for the <code>Iops</code> parameter.</p>
   *          <p>If you choose to migrate your DB instance from using standard storage to gp2 (General
   *             Purpose SSD), gp3, or Provisioned IOPS (io1), or from these storage types to standard
   *             storage, the process can take time. The duration of the migration depends on several
   *             factors such as database load, storage size, storage type (standard or Provisioned
   *             IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage
   *             operations. Typical migration times are under 24 hours, but the process can take up to
   *             several days in some cases. During the migration, the DB instance is available for use,
   *             but might experience performance degradation. While the migration takes place, nightly
   *             backups for the instance are suspended. No other Amazon RDS operations can take place
   *             for the instance, including modifying the instance, rebooting the instance, deleting the
   *             instance, creating a read replica for the instance, and creating a DB snapshot of the
   *             instance.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code>
   *          </p>
   *          <p>Default: <code>io1</code>, if the <code>Iops</code> parameter
   *           is specified. Otherwise, <code>gp2</code>.</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB instance's server certificate.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *             User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The Active Directory directory ID to move the DB instance to.
   *           Specify <code>none</code> to remove the instance from its current domain.
   *           You must create the domain before this operation. Currently, you can create only Db2, MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *           Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of an Active Directory domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mymanagedADtest.mymanagedAD.mydomain</code>
   *          </p>
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * <p>The Active Directory organizational unit for your DB instance to join.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the distinguished name format.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</code>
   *          </p>
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * <p>The ARN for the Secrets Manager secret with the credentials for the user joining the domain.</p>
   *          <p>Example: <code>arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</code>
   *          </p>
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * <p>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Two IP addresses must be provided.  If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>123.124.125.126,234.235.236.237</code>
   *          </p>
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * <p>Specifies whether to remove the DB instance from the Active Directory domain.</p>
   * @public
   */
  DisableDomain?: boolean | undefined;

  /**
   * <p>Specifies whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags aren't copied.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *           information, see <code>ModifyDBCluster</code>.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for
   *           the DB instance. To disable collection of Enhanced Monitoring metrics, specify <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, set <code>MonitoringInterval</code>
   *         to a value other than <code>0</code>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values
   *           specified for options in the option group for the DB instance.</p>
   *          <p>If you change the <code>DBPortNumber</code> value, your database restarts regardless of
   *           the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Default:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora - <code>3306</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Db2 - <code>50000</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>3306</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>1433</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>3306</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>1521</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>5432</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>For RDS for Microsoft SQL Server, the value can't be <code>1234</code>, <code>1434</code>,
   *                 <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, or
   *                 <code>49152-49156</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBPortNumber?: number | undefined;

  /**
   * <p>Specifies whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC),
   *               its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance,
   *               the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public
   *               access isn't permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>
   *             <code>PubliclyAccessible</code> only applies to DB instances in a VPC. The DB instance must be part of a
   *           public subnet and <code>PubliclyAccessible</code> must be enabled for it to be publicly accessible.</p>
   *          <p>Changes to the <code>PubliclyAccessible</code> parameter are applied immediately regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, supply a <code>MonitoringRoleArn</code>
   *           value.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The order of priority in which an Aurora Replica is promoted to the primary instance
   *           after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   *          <p>Valid Values: <code>0 - 15</code>
   *          </p>
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *          <p>This setting doesn't apply to Amazon Aurora. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB
   *           cluster.</p>
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>Specifies the mode of Database Insights to enable for the DB instance.</p>
   *          <note>
   *             <p>Aurora DB instances inherit this value from the DB cluster, so you can't change this value.</p>
   *          </note>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Specifies whether to enable Performance Insights for the DB instance.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                 Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS returns an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>The log types to be enabled for export to CloudWatch Logs for a
   *             specific DB instance.</p>
   *          <p>A change to the <code>CloudwatchLogsExportConfiguration</code> parameter is always applied to the DB instance
   *             immediately. Therefore, the <code>ApplyImmediately</code> parameter has no effect.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>The following values are valid for each DB engine:</p>
   *          <ul>
   *             <li>
   *                <p>Aurora MySQL - <code>audit | error | general | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Aurora PostgreSQL - <code>postgresql | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>error | general | slowquery | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql | upgrade | iam-db-auth-error</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">
   *             Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Specifies whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * <p>Specifies whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   *          <p>This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster.
   *         For more information, see <code>ModifyDBCluster</code>. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *          <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether the DB instance is restarted when you rotate your
   *             SSL/TLS certificate.</p>
   *          <p>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate
   *             is not updated until the DB instance is restarted.</p>
   *          <important>
   *             <p>Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.</p>
   *          </important>
   *          <p>If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your
   *             DB engine to rotate your SSL/TLS certificate:</p>
   *          <ul>
   *             <li>
   *                <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate.</a> in the <i>Amazon RDS User Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  CertificateRotationRestart?: boolean | undefined;

  /**
   * <p>The open mode of a replica database.</p>
   *          <p>This parameter is only supported for Db2 DB instances and Oracle DB
   *             instances.</p>
   *          <dl>
   *             <dt>Db2</dt>
   *             <dd>
   *                <p>Standby DB replicas are included in Db2 Advanced Edition (AE) and Db2
   *                         Standard Edition (SE). The main use case for standby replicas is
   *                         cross-Region disaster recovery. Because it doesn't accept user
   *                         connections, a standby replica can't serve a read-only workload.</p>
   *                <p>You can create a combination of standby and read-only DB replicas for the
   *                         same primary DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-replication.html">Working with
   *                             replicas for Amazon RDS for Db2</a> in the <i>Amazon RDS User
   *                             Guide</i>.</p>
   *                <p>To create standby DB replicas for RDS for Db2, set this parameter to
   *                         <code>mounted</code>.</p>
   *             </dd>
   *             <dt>Oracle</dt>
   *             <dd>
   *                <p>Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for
   *                         mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active
   *                         Data Guard to transmit information to the mounted replica. Because it doesn't accept
   *                         user connections, a mounted replica can't serve a read-only workload.</p>
   *                <p>You can create a combination of mounted and read-only DB replicas for the
   *                         same primary DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with
   *                             read replicas for Amazon RDS for Oracle</a> in the <i>Amazon
   *                             RDS User Guide</i>.</p>
   *                <p>For RDS Custom, you must specify this parameter and set it to
   *                             <code>mounted</code>. The value won't be set by default. After replica
   *                         creation, you can manage the open mode manually.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;

  /**
   * <p>The automation mode of the RDS Custom DB instance.
   *             If <code>full</code>, the DB instance automates monitoring and instance recovery. If
   *             <code>all paused</code>, the instance pauses automation for the duration set by
   *             <code>ResumeFullAutomationModeMinutes</code>.</p>
   * @public
   */
  AutomationMode?: AutomationMode | undefined;

  /**
   * <p>The number of minutes to pause the automation. When the time period ends, RDS Custom
   *             resumes full automation.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be at least 60.</p>
   *             </li>
   *             <li>
   *                <p>Must be no more than 1,440.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResumeFullAutomationModeMinutes?: number | undefined;

  /**
   * <p>Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *          <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Valid Values: <code>IPV4 | DUAL</code>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>If the DB instance doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn
   *             on this management. In this case, you can't specify <code>MasterUserPassword</code>.</p>
   *          <p>If the DB instance already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the
   *             master user password is not managed with Amazon Web Services Secrets Manager, then you must specify <code>MasterUserPassword</code>.
   *             In this case, Amazon RDS deletes the secret and uses the new password for the master user specified by
   *             <code>MasterUserPassword</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *             <li>
   *                <p>Can't specify for RDS for Oracle CDB instances in the multi-tenant
   *                     configuration. Use <code>ModifyTenantDatabase</code> instead.</p>
   *             </li>
   *             <li>
   *                <p>Can't specify the parameters <code>ManageMasterUserPassword</code> and
   *                         <code>MultiTenant</code> in the same operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the
   *             master user password.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance. The secret value contains the updated password.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You must apply the change immediately when rotating the master user password.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if both of the following conditions are met:</p>
   *          <ul>
   *             <li>
   *                <p>The DB instance doesn't manage the master user password in Amazon Web Services Secrets Manager.</p>
   *                <p>If the DB instance already manages the master user password in Amazon Web Services Secrets Manager,
   *                     you can't change the KMS key used to encrypt the secret.</p>
   *             </li>
   *             <li>
   *                <p>You are turning on <code>ManageMasterUserPassword</code> to manage the master user password
   *                     in Amazon Web Services Secrets Manager.</p>
   *                <p>If you are turning on <code>ManageMasterUserPassword</code> and don't specify
   *                     <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *                     KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *                     use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *                     managed KMS key.</p>
   *             </li>
   *          </ul>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the to convert your DB instance from the single-tenant conﬁguration
   *             to the multi-tenant conﬁguration. This parameter is supported only for RDS for Oracle
   *             CDB instances.</p>
   *          <p>During the conversion, RDS creates an initial tenant database and associates the DB
   *             name, master user name, character set, and national character set metadata with this
   *             database. The tags associated with the instance also propagate to the initial tenant
   *             database. You can add more tenant databases to your DB instance by using the
   *                 <code>CreateTenantDatabase</code> operation.</p>
   *          <important>
   *             <p>The conversion to the multi-tenant configuration is permanent and irreversible, so
   *                 you can't later convert back to the single-tenant configuration. When you specify
   *                 this parameter, you must also specify <code>ApplyImmediately</code>.</p>
   *          </important>
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * <p>Indicates whether the DB instance has a dedicated log volume (DLV) enabled.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>The target Oracle DB engine when you convert a non-CDB to a CDB. This intermediate step is necessary to upgrade an Oracle Database 19c non-CDB
   *            to an Oracle Database 21c CDB.</p>
   *          <p>Note the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Make sure that you specify <code>oracle-ee-cdb</code> or <code>oracle-se2-cdb</code>.</p>
   *             </li>
   *             <li>
   *                <p>Make sure that your DB engine runs Oracle Database 19c with an April 2021 or later RU.</p>
   *             </li>
   *          </ul>
   *          <p>Note the following limitations:</p>
   *          <ul>
   *             <li>
   *                <p>You can't convert a CDB to a non-CDB.</p>
   *             </li>
   *             <li>
   *                <p>You can't convert a replica database.</p>
   *             </li>
   *             <li>
   *                <p>You can't convert a non-CDB to a CDB and upgrade the engine version in the
   *                    same command.</p>
   *             </li>
   *             <li>
   *                <p>You can't convert the existing custom parameter or option group when it has
   *                    options or parameters that are permanent or persistent. In this situation, the
   *                    DB instance reverts to the default option and parameter group. To avoid
   *                    reverting to the default, specify a new parameter group with
   *                        <code>--db-parameter-group-name</code> and a new option group with
   *                        <code>--option-group-name</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the authentication type for the master user. With IAM master user authentication, you can change the master DB user to use IAM database authentication.</p>
   *          <p>You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>password</code> - Use standard database authentication with a password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>iam-db-auth</code> - Use IAM database authentication for the master user.</p>
   *             </li>
   *          </ul>
   *          <p>This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.</p>
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p>Contains the result of a successful invocation of the
 *         <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> operation.</p>
 * @public
 */
export interface DBParameterGroupNameMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names, values, and the application methods for the parameter update. At least one parameter name, value, and
   *           application method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <p>You can use the <code>immediate</code> value with dynamic parameters only. You can use the <code>pending-reboot</code> value for both dynamic
   *           and static parameters.</p>
   *          <p>When the application method is <code>immediate</code>, changes to dynamic parameters are applied immediately to the DB instances associated with
   *           the parameter group.</p>
   *          <p>When the application method is <code>pending-reboot</code>, changes to dynamic and static parameters are applied after a reboot without failover
   *           to the DB instances associated with the parameter group.</p>
   *          <note>
   *             <p>You can't use <code>pending-reboot</code> with dynamic parameters on RDS for SQL Server DB instances. Use <code>immediate</code>.</p>
   *          </note>
   *          <p>For more information on modifying DB parameters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html">Working
   *           with DB parameter groups</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyRequest {
  /**
   * <p>The identifier for the <code>DBProxy</code> to modify.</p>
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * <p>The new identifier for the <code>DBProxy</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   * @public
   */
  NewDBProxyName?: string | undefined;

  /**
   * <p>The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.
   *             Valid values are <code>NONE</code> and <code>IAM_AUTH</code>.
   *             When set to <code>IAM_AUTH</code>, the proxy uses end-to-end IAM authentication to connect to the database.</p>
   * @public
   */
  DefaultAuthScheme?: DefaultAuthScheme | undefined;

  /**
   * <p>The new authentication settings for the <code>DBProxy</code>.</p>
   * @public
   */
  Auth?: UserAuthConfig[] | undefined;

  /**
   * <p>Whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't
   *         use TLS.</p>
   * @public
   */
  RequireTLS?: boolean | undefined;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   * @public
   */
  IdleClientTimeout?: number | undefined;

  /**
   * <p>Specifies whether the proxy logs detailed connection and query information.
   *             When you enable <code>DebugLogging</code>, the proxy captures connection details
   *             and connection pool behavior from your queries. Debug logging increases CloudWatch costs
   *             and can impact proxy performance. Enable this option only when you need
   *             to troubleshoot connection or performance issues.</p>
   * @public
   */
  DebugLogging?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The new list of security groups for the <code>DBProxy</code>.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyResponse {
  /**
   * <p>The <code>DBProxy</code> object representing the new settings for the proxy.</p>
   * @public
   */
  DBProxy?: DBProxy | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy sociated with the DB proxy endpoint that you want to modify.</p>
   * @public
   */
  DBProxyEndpointName: string | undefined;

  /**
   * <p>The new identifier for the <code>DBProxyEndpoint</code>. An identifier must
   *         begin with a letter and must contain only ASCII letters, digits, and hyphens; it
   *         can't end with a hyphen or contain two consecutive hyphens.</p>
   * @public
   */
  NewDBProxyEndpointName?: string | undefined;

  /**
   * <p>The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint
   *         uses a different VPC than the original proxy, you also specify a different
   *         set of security group IDs than for the original proxy.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyEndpointResponse {
  /**
   * <p>The <code>DBProxyEndpoint</code> object representing the new settings for the DB proxy endpoint.</p>
   * @public
   */
  DBProxyEndpoint?: DBProxyEndpoint | undefined;
}

/**
 * <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p>
 * @public
 */
export interface ConnectionPoolConfiguration {
  /**
   * <p>The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   *          <p>If you specify <code>MaxIdleConnectionsPercent</code>, then you must also include a value for this parameter.</p>
   *          <p>Default: <code>10</code> for RDS for Microsoft SQL Server, and <code>100</code> for all other engines</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be between 1 and 100.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxConnectionsPercent?: number | undefined;

  /**
   * <p>A value that controls how actively the proxy closes idle database connections in the connection pool.
   *         The value is expressed as a percentage of the <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *         With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.</p>
   *          <p>If you specify this parameter, then you must also include a value for <code>MaxConnectionsPercent</code>.</p>
   *          <p>Default: The default value is half of the value of <code>MaxConnectionsPercent</code>. For example, if <code>MaxConnectionsPercent</code> is 80, then the default value of
   *         <code>MaxIdleConnectionsPercent</code> is 40. If the value of <code>MaxConnectionsPercent</code> isn't specified, then for SQL Server, <code>MaxIdleConnectionsPercent</code> is <code>5</code>, and
   *         for all other engines, the default is <code>50</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be between 0 and the value of <code>MaxConnectionsPercent</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxIdleConnectionsPercent?: number | undefined;

  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. This setting only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   *          <p>Default: <code>120</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be between 0 and 300.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ConnectionBorrowTimeout?: number | undefined;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior.</p>
   *          <p>Default: no session pinning filters</p>
   * @public
   */
  SessionPinningFilters?: string[] | undefined;

  /**
   * <p>Add an initialization query, or modify the current one. You can specify one or more SQL statements for the proxy to run when opening each new database connection.
   *             The setting is typically used with <code>SET</code> statements to make sure that each connection has identical settings.
   *             Make sure the query added here is valid. This is an optional field, so you can choose to leave it empty.
   *             For including multiple variables in a single SET statement, use a comma separator.</p>
   *          <p>For example: <code>SET variable1=value1, variable2=value2</code>
   *          </p>
   *          <p>Default: no initialization query</p>
   *          <important>
   *             <p>Since you can access initialization query as part of target group configuration, it is not protected by authentication or cryptographic methods.
   *                 Anyone with access to view or manage your proxy target group configuration can view the initialization query.
   *                 You should not add sensitive data, such as passwords or long-lived encryption keys, to this option.</p>
   *          </important>
   * @public
   */
  InitQuery?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyTargetGroupRequest {
  /**
   * <p>The name of the target group to modify.</p>
   * @public
   */
  TargetGroupName: string | undefined;

  /**
   * <p>The name of the proxy.</p>
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   * @public
   */
  ConnectionPoolConfig?: ConnectionPoolConfiguration | undefined;

  /**
   * <p>The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   *          <p>You can't rename the <code>default</code> target group.</p>
   * @public
   */
  NewName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyTargetGroupResponse {
  /**
   * <p>The settings of the modified <code>DBProxyTarget</code>.</p>
   * @public
   */
  DBProxyTargetGroup?: DBProxyTargetGroup | undefined;
}

/**
 * @public
 */
export interface DBRecommendationMessage {
  /**
   * <p>The recommendation for your DB instances, DB clusters, and DB parameter groups.</p>
   * @public
   */
  DBRecommendation?: DBRecommendation | undefined;
}

/**
 * <p>The recommended status to update for the specified recommendation action ID.</p>
 * @public
 */
export interface RecommendedActionUpdate {
  /**
   * <p>A unique identifier of the updated recommendation action.</p>
   * @public
   */
  ActionId: string | undefined;

  /**
   * <p>The status of the updated recommendation action.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>applied</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>scheduled</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBRecommendationMessage {
  /**
   * <p>The identifier of the recommendation to update.</p>
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * <p>The language of the modified recommendation.</p>
   * @public
   */
  Locale?: string | undefined;

  /**
   * <p>The recommendation status to update.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>active</p>
   *             </li>
   *             <li>
   *                <p>dismissed</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The list of recommended action status to update. You can update multiple recommended actions at one time.</p>
   * @public
   */
  RecommendedActionUpdates?: RecommendedActionUpdate[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBShardGroupMessage {
  /**
   * <p>The name of the DB shard group to modify.</p>
   * @public
   */
  DBShardGroupIdentifier: string | undefined;

  /**
   * <p>The maximum capacity of the DB shard group in Aurora capacity units (ACUs).</p>
   * @public
   */
  MaxACU?: number | undefined;

  /**
   * <p>The minimum capacity of the DB shard group in Aurora capacity units (ACUs).</p>
   * @public
   */
  MinACU?: number | undefined;

  /**
   * <p>Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:</p>
   *          <ul>
   *             <li>
   *                <p>0 - Creates a DB shard group without a standby DB shard group. This is the default value.</p>
   *             </li>
   *             <li>
   *                <p>1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ).</p>
   *             </li>
   *             <li>
   *                <p>2 - Creates a DB shard group with two standby DB shard groups in two different AZs.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ComputeRedundancy?: number | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotMessage {
  /**
   * <p>The identifier of the DB snapshot to modify.</p>
   * @public
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The engine version to upgrade the DB snapshot to.</p>
   *          <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot.</p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mariadb-upgrade-snapshot.html">
   *                 Upgrading a MariaDB DB snapshot engine version</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-upgrade-snapshot.html">
   *                 Upgrading a MySQL DB snapshot engine version</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>21.0.0.0.ru-2025-04.rur-2025-04.r1</code> (supported for 21.0.0.0.ru-2022-01.rur-2022-01.r1, 21.0.0.0.ru-2022-04.rur-2022-04.r1, 21.0.0.0.ru-2022-07.rur-2022-07.r1, 21.0.0.0.ru-2022-10.rur-2022-10.r1, 21.0.0.0.ru-2023-01.rur-2023-01.r1 and 21.0.0.0.ru-2023-01.rur-2023-01.r2 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>19.0.0.0.ru-2025-04.rur-2025-04.r1</code> (supported for 19.0.0.0.ru-2019-07.rur-2019-07.r1, 19.0.0.0.ru-2019-10.rur-2019-10.r1 and 0.0.0.ru-2020-01.rur-2020-01.r1 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>19.0.0.0.ru-2022-01.rur-2022-01.r1</code> (supported for 12.2.0.1 DB
   *                     snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>19.0.0.0.ru-2022-07.rur-2022-07.r1</code> (supported for 12.1.0.2 DB
   *                     snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>12.1.0.2.v8</code>  (supported for 12.1.0.1 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBSnapshot.PostgreSQL.html">
   *                 Upgrading a PostgreSQL DB snapshot engine version</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The option group to identify with the upgraded DB snapshot.</p>
   *          <p>You can specify this parameter when you upgrade an Oracle DB snapshot.
   *             The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG">Option group considerations</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  OptionGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.</p>
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB snapshot to modify the attributes for.</p>
   * @public
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB snapshot,
   *       set this value to <code>restore</code>.</p>
   *          <note>
   *             <p>To view the list of attributes available to modify, use the
   *               <a>DescribeDBSnapshotAttributes</a> API operation.</p>
   *          </note>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account
   *       IDs, or <code>all</code> to make the manual DB snapshot restorable by
   *       any Amazon Web Services account. Do not add the <code>all</code> value for any
   *       manual DB snapshots that contain private information that you don't want available
   *       to all Amazon Web Services accounts.</p>
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * <p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include
   *       one or more Amazon Web Services account
   *       identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or
   *       restore the DB snapshot. If you specify <code>all</code>, an Amazon Web Services account whose
   *       account ID is explicitly added to the <code>restore</code> attribute
   *       can still copy or restore the manual DB snapshot.</p>
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   * @public
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.
   *           You can't modify the default subnet group.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the DB subnet group.</p>
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.</p>
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. For RDS Proxy events, specify <code>db-proxy</code>. If this value isn't specified, all events are returned.</p>
   *          <p>Valid Values:<code> db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment </code>
   *          </p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of event categories for a source type (<code>SourceType</code>) that you want to subscribe to.
   *             You can see a list of the categories for a given source type
   *             in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i>
   *             or by using the <code>DescribeEventCategories</code> operation.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>Specifies whether to activate the subscription.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * <p>The cluster identifier for the global cluster to modify. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global database cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster identifier for the global database cluster.
   *         This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   * @public
   */
  NewGlobalClusterIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the global database cluster. The global database cluster
   *         can't be deleted when deletion protection is enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *           </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL-based Aurora global databases), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code> (for PostgreSQL-based Aurora global databases), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Specifies whether to allow major version upgrades.</p>
   *          <p>Constraints: Must be enabled if you specify a value for the
   *                 <code>EngineVersion</code> parameter that's a different major version than the global
   *             cluster's current version.</p>
   *          <p>If you upgrade the major version of a global database, the cluster and DB instance parameter
   *         groups are set to the default parameter groups for the new version. Apply any custom parameter
   *         groups after completing the upgrade.</p>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationMessage {
  /**
   * <p>The unique identifier of the integration to modify.</p>
   * @public
   */
  IntegrationIdentifier: string | undefined;

  /**
   * <p>A new name for the integration.</p>
   * @public
   */
  IntegrationName?: string | undefined;

  /**
   * <p>A new data filter for the integration. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Zero_ETL_Filtering.html">Data filtering
   *                 for Aurora zero-ETL integrations with Amazon Redshift</a> or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/zero-etl.filtering.html">Data
   *                 filtering for Amazon RDS zero-ETL integrations with Amazon Redshift</a>.</p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>A new description for the integration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>A list of all available options for an option group.</p>
 * @public
 */
export interface OptionConfiguration {
  /**
   * <p>The configuration of options to include in a group.</p>
   * @public
   */
  OptionName: string | undefined;

  /**
   * <p>The optional port for the option.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The version for the option.</p>
   * @public
   */
  OptionVersion?: string | undefined;

  /**
   * <p>A list of DB security groups used for this option.</p>
   * @public
   */
  DBSecurityGroupMemberships?: string[] | undefined;

  /**
   * <p>A list of VPC security group names used for this option.</p>
   * @public
   */
  VpcSecurityGroupMemberships?: string[] | undefined;

  /**
   * <p>The option settings to include in an option group.</p>
   * @public
   */
  OptionSettings?: OptionSetting[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyOptionGroupMessage {
  /**
   * <p>The name of the option group to be modified.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   * @public
   */
  OptionGroupName: string | undefined;

  /**
   * <p>Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.</p>
   * @public
   */
  OptionsToInclude?: OptionConfiguration[] | undefined;

  /**
   * <p>Options in this list are removed from the option group.</p>
   * @public
   */
  OptionsToRemove?: string[] | undefined;

  /**
   * <p>Specifies whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyOptionGroupResult {
  /**
   * <p></p>
   * @public
   */
  OptionGroup?: OptionGroup | undefined;
}

/**
 * @public
 */
export interface ModifyTenantDatabaseMessage {
  /**
   * <p>The identifier of the DB instance that contains the tenant database that you are
   *             modifying. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The user-supplied name of the tenant database that you want to modify. This parameter
   *             isn’t case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing tenant database.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TenantDBName: string | undefined;

  /**
   * <p>The new password for the master user of the specified tenant database in your DB
   *             instance.</p>
   *          <note>
   *             <p>Amazon RDS operations never return the password, so this action provides a way to regain
   *                 access to a tenant database user if the password is lost. This includes restoring
   *                 privileges that might have been accidentally revoked.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can include any printable ASCII character except <code>/</code>, <code>"</code> (double
   *                     quote), <code>@</code>, <code>&</code> (ampersand), and <code>'</code>
   *                     (single quote).</p>
   *             </li>
   *          </ul>
   *          <p>Length constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain between 8 and 30 characters. </p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The new name of the tenant database when renaming a tenant database. This parameter
   *             isn’t case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be the string null or any other reserved word.</p>
   *             </li>
   *             <li>
   *                <p>Can't be longer than 8 characters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NewTenantDBName?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>If the tenant database doesn't manage the master user password with Amazon Web Services Secrets
   *             Manager, you can turn on this management. In this case, you can't specify
   *                 <code>MasterUserPassword</code>.</p>
   *          <p>If the tenant database already manages the master user password with Amazon Web Services Secrets
   *             Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets
   *             Manager, then you must specify <code>MasterUserPassword</code>. In this case, Amazon RDS
   *             deletes the secret and uses the new password for the master user specified by
   *                 <code>MasterUserPassword</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the
   *             master user password.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance. The secret value contains the updated password.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You must apply the change immediately when rotating the master user password.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if both of the following conditions are met:</p>
   *          <ul>
   *             <li>
   *                <p>The tenant database doesn't manage the master user password in Amazon Web Services Secrets Manager.</p>
   *                <p>If the tenant database already manages the master user password in Amazon Web Services Secrets Manager,
   *                     you can't change the KMS key used to encrypt the secret.</p>
   *             </li>
   *             <li>
   *                <p>You're turning on <code>ManageMasterUserPassword</code> to manage the master user password
   *                     in Amazon Web Services Secrets Manager.</p>
   *                <p>If you're turning on <code>ManageMasterUserPassword</code> and don't specify
   *                     <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *                     KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *                     use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a self-managed
   *                     KMS key.</p>
   *             </li>
   *          </ul>
   *          <p>The Amazon Web Services KMS key identifier is any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ARN</p>
   *             </li>
   *             <li>
   *                <p>Key ID</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN</p>
   *             </li>
   *             <li>
   *                <p>Alias name for the KMS key</p>
   *             </li>
   *          </ul>
   *          <p>To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias
   *             ARN.</p>
   *          <p>A default KMS key exists for your Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyTenantDatabaseResult {
  /**
   * <p>A tenant database in the DB instance. This data type is an element in the response to
   *             the <code>DescribeTenantDatabases</code> action.</p>
   * @public
   */
  TenantDatabase?: TenantDatabase | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface PromoteReadReplicaMessage {
  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing read replica DB instance.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to read replicas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html">
   *             Adjusting the Preferred Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * <p>The identifier of the DB cluster read replica to promote. This parameter isn't
   *             case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB cluster read replica.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-replica1</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface PurchaseReservedDBInstancesOfferingMessage {
  /**
   * <p>The ID of the Reserved DB instance offering to purchase.</p>
   *          <p>Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</p>
   * @public
   */
  ReservedDBInstancesOfferingId: string | undefined;

  /**
   * <p>Customer-specified identifier to track this reservation.</p>
   *          <p>Example: myreservationID</p>
   * @public
   */
  ReservedDBInstanceId?: string | undefined;

  /**
   * <p>The number of instances to reserve.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   * @public
   */
  DBInstanceCount?: number | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedDBInstancesOfferingResult {
  /**
   * <p>This data type is used as a response element in the
   *             <code>DescribeReservedDBInstances</code> and
   *             <code>PurchaseReservedDBInstancesOffering</code> actions.</p>
   * @public
   */
  ReservedDBInstance?: ReservedDBInstance | undefined;
}

/**
 * @public
 */
export interface RebootDBClusterMessage {
  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RebootDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Specifies whether the reboot is conducted through a Multi-AZ failover.</p>
   *          <p>Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</p>
   * @public
   */
  ForceFailover?: boolean | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RebootDBShardGroupMessage {
  /**
   * <p>The name of the DB shard group to reboot.</p>
   * @public
   */
  DBShardGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RegisterDBProxyTargetsRequest {
  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * <p>One or more DB instance identifiers.</p>
   * @public
   */
  DBInstanceIdentifiers?: string[] | undefined;

  /**
   * <p>One or more DB cluster identifiers.</p>
   * @public
   */
  DBClusterIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterDBProxyTargetsResponse {
  /**
   * <p>One or more <code>DBProxyTarget</code> objects that are created when you register targets with a target group.</p>
   * @public
   */
  DBProxyTargets?: DBProxyTarget[] | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * <p>The cluster identifier to detach from the Aurora global database cluster.</p>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.</p>
   * @public
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromDBClusterMessage {
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example
   *         <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *             For information about supported feature names, see <a>DBEngineVersion</a>.</p>
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromDBInstanceMessage {
  /**
   * <p>The name of the DB instance to disassociate the IAM role from.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance,
   *             for example, <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be disassociated from.
   *             For information about supported feature names, see <code>DBEngineVersion</code>.</p>
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to remove a source identifier from.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b>
   *             for a DB instance or the name of a security group.</p>
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>Specifies whether to reset all parameters in the DB cluster parameter group
   *         to their default values. You can't use this parameter if there
   *         is a list of parameter names specified for the <code>Parameters</code> parameter.</p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this
   *         parameter if the <code>ResetAllParameters</code> parameter is enabled.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ResetDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>Specifies whether to reset all parameters in the DB parameter group to default values.
   *           By default, all parameters in the DB parameter group are reset to default values.</p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code>
   *             name and <code>ResetAllParameters</code> parameters. To reset specific parameters,
   *             provide a list of the following: <code>ParameterName</code> and
   *             <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single
   *             request.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *          <p>You can use the immediate value with dynamic parameters only. You can use
   *             the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *             are applied when DB instance reboots.</p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *          <p>You can use the immediate value with dynamic parameters only. You can use
   *       the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *       are applied when DB instance reboots.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromS3Message {
  /**
   * <p>A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</p>
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * <p>The database name for the restored DB cluster.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with the restored DB cluster. If this argument is omitted, the default parameter group for the engine version is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with the restored DB cluster.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>A DB subnet group to associate with the restored DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>aurora-mysql</code> (for Aurora MySQL)</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (Aurora MySQL), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Examples: <code>5.7.mysql_aurora.2.12.0</code>, <code>8.0.mysql_aurora.3.04.0</code>
   *          </p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the instances in the restored DB cluster accept connections.</p>
   *          <p>Default: <code>3306</code>
   *          </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the master user for the restored DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if <code>ManageMasterUserPassword</code> is turned on.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p>
   *          <p>Permanent options can't be removed from an option group. An option group can't be removed from a
   *             DB cluster once it is associated with a DB cluster.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled
   *             using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To view the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *                 Backup window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the restored DB cluster is encrypted.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If the StorageEncrypted parameter is enabled, and you do
   *             not specify a value for the <code>KmsKeyId</code> parameter, then
   *             Amazon RDS will use your default KMS key. There is a
   *             default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different
   *             default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The identifier for the database engine that was backed up to create the files stored in the
   *             Amazon S3 bucket.</p>
   *          <p>Valid Values: <code>mysql</code>
   *          </p>
   * @public
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *          <p>MySQL versions 5.7 and 8.0 are supported.</p>
   *          <p>Example: <code>5.7.40</code>, <code>8.0.28</code>
   *          </p>
   * @public
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster.
   *         If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is
   *         created by using all of the files in the Amazon S3 bucket.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that authorizes
   *         Amazon RDS to access the Amazon S3 bucket on your behalf.</p>
   * @public
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *          <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *          </note>
   *          <p>Default: 0</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used.</p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, <code>instance</code>, <code>slowquery</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Possible value are <code>instance</code>, <code>postgresql</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the DB cluster.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *           The domain must be created prior to this operation.</p>
   *          <p>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster.
   *         For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *         in the <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>Valid Values: <code>aurora</code>, <code>aurora-iopt1</code>
   *          </p>
   *          <p>Default: <code>aurora</code>
   *          </p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The network type of the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>The life cycle type for this DB cluster.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB cluster into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html">Amazon RDS Extended Support with Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon RDS - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromS3Result {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the restored DB
   *             cluster can be created.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot.
   *             This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *          <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB
   *             cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster. If you don't specify an engine version, the default version
   *             for the database engine in the Amazon Web Services Region is used.</p>
   *          <p>To list all of the available engine versions for Aurora MySQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for Aurora PostgreSQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for RDS for MySQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for RDS for PostgreSQL, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html">Database
   *             engine updates for Amazon Aurora MySQL</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html">Amazon
   *             Aurora PostgreSQL releases and engine versions</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">Amazon
   *             RDS for MySQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts">Amazon
   *             RDS for PostgreSQL versions and extensions</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: This value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DB subnet group.</p>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The database name for the restored DB cluster.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the option group to use for the restored DB cluster.</p>
   *          <p>DB clusters are associated with a default option group that can't be modified.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *             snapshot or DB cluster snapshot.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *           To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>When you don't specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster
   *                     is encrypted using the KMS key that was used to encrypt the DB snapshot or DB
   *                     cluster snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> isn't encrypted, then the restored DB cluster
   *                     isn't encrypted.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database
   *                 Authentication</a> in the <i>Amazon Aurora User Guide</i> or
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM database
   *                 authentication for MariaDB, MySQL, and PostgreSQL</a> in the <i>Amazon
   *                 RDS User Guide</i>.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *          <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *          </note>
   *          <p>Default: 0</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
   *             The values in the list depend on the DB engine being used.</p>
   *          <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *          <p>Possible values are <code>error</code>, <code>general</code>, <code>slowquery</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *          <p>Possible values are <code>postgresql</code>, <code>upgrade</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, <code>instance</code>, <code>slowquery</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Possible value are <code>instance</code>, <code>postgresql</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code> or <code>serverless</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html">
   *             CreateDBCluster</a>.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster. If this
   *             argument is omitted, the default DB cluster parameter group for the specified engine is
   *             used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the DB cluster.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The Active Directory directory ID to restore the DB cluster in.
   *            The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL
   *            Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *             Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge.
   *             Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.</p>
   *          <p>For the full list of DB instance classes, and availability for your engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Valid for: Multi-AZ DB clusters only</p>
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>When specified for a Multi-AZ DB cluster, a value for the <code>Iops</code> parameter is required.</p>
   *          <p>Valid Values: <code>aurora</code>, <code>aurora-iopt1</code> (Aurora DB clusters); <code>io1</code> (Multi-AZ DB clusters)</p>
   *          <p>Default: <code>aurora</code> (Aurora DB clusters); <code>io1</code> (Multi-AZ DB clusters)</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for
   *             each DB instance in the Multi-AZ DB cluster.</p>
   *          <p>For information about valid IOPS values,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies whether the DB cluster is publicly accessible.</p>
   *          <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *             from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC.
   *             Access to the DB cluster is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB cluster doesn't permit it.</p>
   *          <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *          <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *          <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                <p>If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The network type of the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off
   *             collecting Enhanced Monitoring metrics, specify <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code> to a value other than <code>0</code>.</p>
   *          <p>Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *             An example is <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, supply a <code>MonitoringRoleArn</code> value.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>Specifies whether to turn on Performance Insights for the DB cluster.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default KMS key.
   *             There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                     Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS issues an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>The life cycle type for this DB cluster.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB cluster into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html">Amazon RDS Extended Support with Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon RDS - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * <p>The name of the new DB cluster to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the
   *                 source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the
   *                 source DB cluster.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is
   *             restored as a full copy of the source DB cluster.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  RestoreType?: string | undefined;

  /**
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  RestoreToTime?: Date | undefined;

  /**
   * <p>Specifies whether to restore the DB cluster to the latest
   *             restorable backup time. By default, the DB cluster isn't restored to the latest
   *             restorable backup time.</p>
   *          <p>Constraints: Can't be specified if <code>RestoreToTime</code> parameter is provided.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: A value from <code>1150-65535</code>.</p>
   *          <p>Default: The default port for the engine.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The name of the option group for the new DB cluster.</p>
   *          <p>DB clusters are associated with a default option group that can't be modified.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *           To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different from the
   *           KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key
   *           identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that isn't encrypted, then the restore request
   *       is rejected.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping isn't
   *             enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"> IAM Database
   *                 Authentication</a> in the <i>Amazon Aurora User Guide</i> or
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"> IAM database
   *                 authentication for MariaDB, MySQL, and PostgreSQL</a> in the <i>Amazon
   *                 RDS User Guide</i>.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *          <p>Default: 0</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora MySQL DB clusters only</p>
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used.</p>
   *          <p>
   *             <b>RDS for MySQL</b>
   *          </p>
   *          <p>Possible values are <code>error</code>, <code>general</code>, <code>slowquery</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>RDS for PostgreSQL</b>
   *          </p>
   *          <p>Possible values are <code>postgresql</code>, <code>upgrade</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Possible values are <code>audit</code>, <code>error</code>, <code>general</code>, <code>instance</code>, <code>slowquery</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Possible value are <code>instance</code>, <code>postgresql</code>, and <code>iam-db-auth-error</code>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon RDS, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about exporting CloudWatch Logs for Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The name of the custom DB cluster parameter group to associate with this DB cluster.</p>
   *          <p>If the <code>DBClusterParameterGroupName</code> parameter is omitted, the default DB cluster parameter group for the specified
   *             engine is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the DB cluster.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The Active Directory directory ID to restore the DB cluster in.
   *           The domain must be created prior to this operation.</p>
   *          <p>For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster.
   *         For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *         in the <i>Amazon Aurora User Guide</i>.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster,
   *             for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services
   *             Regions, or for all database engines.</p>
   *          <p>For the full list of DB instance classes, and availability for your engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB instance class</a> in the
   *             <i>Amazon RDS User Guide</i>.</p>
   *          <p>Valid for: Multi-AZ DB clusters only</p>
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB cluster.</p>
   *          <p>When specified for a Multi-AZ DB cluster, a value for the <code>Iops</code> parameter is required.</p>
   *          <p>Valid Values: <code>aurora</code>, <code>aurora-iopt1</code> (Aurora DB clusters); <code>io1</code> (Multi-AZ DB clusters)</p>
   *          <p>Default: <code>aurora</code> (Aurora DB clusters); <code>io1</code> (Multi-AZ DB clusters)</p>
   *          <p>Valid for: Aurora DB clusters and Multi-AZ DB clusters</p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies whether the DB cluster is publicly accessible.</p>
   *          <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *             from within the DB cluster's virtual private cloud (VPC). It resolves
   *             to the public IP address from outside of the DB cluster's VPC.
   *             Access to the DB cluster is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB cluster doesn't permit it.</p>
   *          <p>When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.</p>
   *          <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *          <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                <p>If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *                <p>If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.</p>
   *             </li>
   *             <li>
   *                <p>If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.</p>
   *             </li>
   *          </ul>
   *          <p>Valid for: Multi-AZ DB clusters only</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for
   *             each DB instance in the Multi-AZ DB cluster.</p>
   *          <p>For information about valid IOPS values,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance.</p>
   *          <p>Valid for: Multi-AZ DB clusters only</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The network type of the DB cluster.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB cluster.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The resource ID of the source DB cluster from which to restore.</p>
   * @public
   */
  SourceDbClusterResourceId?: string | undefined;

  /**
   * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * <p>The engine mode of the new cluster. Specify <code>provisioned</code> or <code>serverless</code>,
   *       depending on the type of the cluster you are creating. You can create an Aurora Serverless v1 clone
   *       from a provisioned cluster, or a provisioned clone from an Aurora Serverless v1 cluster. To create a clone
   *       that is an Aurora Serverless v1 cluster, the original cluster must be an Aurora Serverless v1 cluster or
   *       an encrypted provisioned cluster. To create a full copy that is an Aurora Serverless v1 cluster, specify
   *       the engine mode <code>serverless</code>.</p>
   *          <p>Valid for: Aurora DB clusters only</p>
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off
   *             collecting Enhanced Monitoring metrics, specify <code>0</code>.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, also set <code>MonitoringInterval</code> to a value other than <code>0</code>.</p>
   *          <p>Valid Values: <code>0 | 1 | 5 | 10 | 15 | 30 | 60</code>
   *          </p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   *             An example is <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than <code>0</code>, supply a <code>MonitoringRoleArn</code> value.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>Specifies whether to turn on Performance Insights for the DB cluster.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you don't specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default KMS key.
   *             There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>7</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23.
   *                     Examples: <code>93</code> (3 months * 31), <code>341</code> (11 months * 31), <code>589</code> (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>731</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>7</code> days</p>
   *          <p>If you specify a retention period that isn't valid, such as <code>94</code>,  Amazon RDS issues an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>The life cycle type for this DB cluster.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB cluster into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Aurora - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html">Amazon RDS Extended Support with Amazon Aurora</a> in the <i>Amazon Aurora User Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon RDS - <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreDBInstanceFromDBSnapshotMessage {
  /**
   * <p>The name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 numbers, letters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot to restore from.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB snapshot.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified when <code>DBClusterSnapshotIdentifier</code> is specified.</p>
   *             </li>
   *             <li>
   *                <p>Must be specified when <code>DBClusterSnapshotIdentifier</code> isn't specified.</p>
   *             </li>
   *             <li>
   *                <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
   *               must be the ARN of the shared DB snapshot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: The same DBInstanceClass as the original DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Default: The same port as the original DB instance</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *          <p>Example: <code>us-east-1a</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The name of the DB subnet group to use for the new instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB subnet group.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is a Multi-AZ deployment.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Specifies whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *           from within the DB instance's virtual private cloud (VPC).
   *           It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled
   *           by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Specifies whether to automatically apply minor version upgrades to the DB instance
   *           during the maintenance window.</p>
   *          <p>If you restore an RDS Custom DB instance, you must disable this parameter.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>License model information for the restored DB instance.</p>
   *          <note>
   *             <p>License models for RDS for Db2 require additional configuration. The bring your
   *                 own license (BYOL) model requires a custom parameter group and an Amazon Web Services License
   *                 Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model
   *                 requires an Amazon Web Services Marketplace subscription. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html">Amazon
   *                     RDS for Db2 licensing options</a> in the <i>Amazon RDS User
   *                     Guide</i>.</p>
   *          </note>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - <code>bring-your-own-license | marketplace-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>bring-your-own-license | license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql-license</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: Same as the source.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The name of the database for the restored DB instance.</p>
   *          <p>This parameter only applies to RDS for Oracle and RDS for SQL Server DB instances. It doesn't apply to the other engines or to RDS
   *           Custom DB instances.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The database engine to use for the new instance.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db2-ae</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second.
   *           If this parameter isn't specified, the IOPS value is taken from the backup.
   *           If this parameter is set to 0, the new instance is converted to a non-PIOPS instance.
   *           The conversion takes additional time, though your DB instance is available for connections before the conversion starts.</p>
   *          <p>The provisioned IOPS value must follow the requirements for your database engine.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints: Must be an integer greater than 1000.</p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies the storage throughput value for the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom or Amazon Aurora.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option
   *         group, and that option group can't be removed from a DB instance after it is associated with a DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code>
   *          </p>
   *          <p>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *          <p>Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise
   *                 <code>gp3</code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The Active Directory directory ID to restore the DB instance in.
   *            The domain/ must be created prior to this operation. Currently, you can create only Db2, MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *            Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of an Active Directory domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mymanagedADtest.mymanagedAD.mydomain</code>
   *          </p>
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * <p>The Active Directory organizational unit for your DB instance to join.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the distinguished name format.</p>
   *             </li>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</code>
   *          </p>
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * <p>The ARN for the Secrets Manager secret with the credentials for the user joining the domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</code>
   *          </p>
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * <p>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Two IP addresses must be provided.  If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>123.124.125.126,234.235.236.237</code>
   *          </p>
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * <p>Specifies whether to copy all tags from the restored DB instance to snapshots of the DB instance.</p>
   *          <p>In most cases, tags aren't copied by default. However, when you restore a DB instance from a DB snapshot, RDS checks whether you
   *           specify new tags. If yes, the new tags are added to the restored DB instance. If there are no new tags, RDS looks for the tags from
   *           the source DB instance for the DB snapshot, and then adds those tags to the restored DB instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.CopyTags">
   *           Copying tags to DB instance snapshots</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The list of logs for the restored DB instance to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Specifies whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *          <p>If you don't specify a value for <code>DBParameterGroupName</code>, then RDS uses the default <code>DBParameterGroup</code>
   *             for the specified DB engine.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the DB instance.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *          <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Specifies where automated backups and manual snapshots are stored for the restored DB instance.</p>
   *          <p>Possible values are <code>local</code> (Dedicated Local Zone), <code>outposts</code> (Amazon Web Services Outposts), and <code>region</code> (Amazon Web Services Region). The default is <code>region</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working
   *             with Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * <p>The instance profile associated with the underlying Amazon EC2 instance of an
   *             RDS Custom DB instance. The instance profile must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>The profile must exist in your account.</p>
   *             </li>
   *             <li>
   *                <p>The profile must have an IAM role that Amazon EC2 has permissions to assume.</p>
   *             </li>
   *             <li>
   *                <p>The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of permissions required for the IAM role, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc">
   *                 Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting is required for RDS Custom.</p>
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * <p>The amount of storage (in gibibytes) to allocate initially for the DB instance. Follow the allocation rules specified in
   *             CreateDBInstance.</p>
   *          <p>This setting isn't valid for RDS for SQL Server.</p>
   *          <note>
   *             <p>Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed. You can also
   *                 allocate additional storage for future growth.</p>
   *          </note>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The identifier for the Multi-AZ DB cluster snapshot to restore from.</p>
   *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
   *                 cluster deployments</a> in the <i>Amazon RDS User
   *             Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Multi-AZ DB cluster snapshot.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified when <code>DBSnapshotIdentifier</code> is specified.</p>
   *             </li>
   *             <li>
   *                <p>Must be specified when <code>DBSnapshotIdentifier</code> isn't specified.</p>
   *             </li>
   *             <li>
   *                <p>If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the <code>DBClusterSnapshotIdentifier</code>
   *                     must be the ARN of the shared snapshot.</p>
   *             </li>
   *             <li>
   *                <p>Can't be the identifier of an Aurora DB cluster snapshot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * <p>Specifies whether to enable a dedicated log volume (DLV) for the DB instance.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB instance's server certificate.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *                 Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *                     User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The life cycle type for this DB instance.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB instance into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager in the
   *             restored DB instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Applies to RDS for Oracle only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromS3Message {
  /**
   * <p>The name of the database to create when the DB instance is created.
   *             Follow the naming rules specified in <code>CreateDBInstance</code>.</p>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The amount of storage (in gibibytes) to allocate initially for the DB instance.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.</p>
   *          <p>This setting isn't valid for RDS for SQL Server.</p>
   *          <note>
   *             <p>Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed.
   *                 You can also allocate additional storage for future growth.</p>
   *          </note>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>The compute and memory capacity of the DB instance,
   *             for example db.m4.large.
   *             Not all DB instance classes are available in all Amazon Web Services Regions,
   *             or for all database engines.
   *             For the full list of DB instance classes,
   *             and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.</p>
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid Values:
   *             <code>mysql</code>
   *          </p>
   * @public
   */
  Engine: string | undefined;

  /**
   * <p>The name for the master user.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * <p>The password for the master user.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if <code>ManageMasterUserPassword</code> is turned on.</p>
   *             </li>
   *             <li>
   *                <p>Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&" (ampersand) or  the "'" (single quotes) character.</p>
   *             </li>
   *          </ul>
   *          <p>Length Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - Must contain from 8 to 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - Must contain from 8 to 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - Must contain from 8 to 41 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - Must contain from 8 to 30 characters.</p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - Must contain from 8 to 128 characters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *          <p>Default: The default DB security group for the database engine.</p>
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of VPC security groups to associate with this DB instance.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The Availability Zone that the DB instance is created in.
   *             For information about Amazon Web Services Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.</p>
   *          <p>Example: <code>us-east-1d</code>
   *          </p>
   *          <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>The time range each week during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *          <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>The number of days for which automated backups are retained.
   *             Setting this parameter to a positive number enables backups.
   *             For more information, see <code>CreateDBInstance</code>.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The time range each day
   *             during which automated backups are created
   *             if automated backups are enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Type: Integer</p>
   *          <p>Valid Values: <code>1150</code>-<code>65535</code>
   *          </p>
   *          <p>Default: <code>3306</code>
   *          </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>Specifies whether the DB instance is a Multi-AZ deployment.
   *             If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The version number of the database engine to use.
   *             Choose the latest minor version of your database engine.
   *             For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Specifies whether to automatically apply minor engine upgrades
   *             to the DB instance during the maintenance window. By default, minor engine upgrades
   *             are not applied automatically.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The license model for this DB instance.
   *             Use <code>general-public-license</code>.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second)
   *             to allocate initially for the DB instance.
   *             For information about valid IOPS values,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS storage</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>Specifies the storage throughput value for the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom or Amazon Aurora.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The name of the option group to associate with this DB instance.
   *             If this argument is omitted, the default option group for the specified engine is used.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>Specifies whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address
   *             from within the DB instance's virtual private cloud (VPC).
   *             It resolves to the public IP address from outside of the DB instance's VPC.
   *             Access to the DB instance is ultimately controlled by the security group it uses.
   *             That public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>A list of tags to associate with this DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code>
   *          </p>
   *          <p>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>,
   *             you must also include a value for the <code>Iops</code> parameter.</p>
   *          <p>Default: <code>io1</code>
   *             if the <code>Iops</code> parameter is specified;
   *             otherwise <code>gp2</code>
   *          </p>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>Specifies whether the new DB instance is encrypted or not.</p>
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If the <code>StorageEncrypted</code> parameter is enabled,
   *             and you do not specify a value for the <code>KmsKeyId</code> parameter,
   *             then Amazon RDS will use your default KMS key.
   *             There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>The interval, in seconds,
   *             between points when Enhanced Monitoring metrics are collected for the DB instance.
   *             To disable collecting Enhanced Monitoring metrics, specify 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified,
   *             then you must also set <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: 0, 1, 5, 10, 15, 30, 60</p>
   *          <p>Default: <code>0</code>
   *          </p>
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * <p>The ARN for the IAM role that permits RDS
   *             to send enhanced monitoring metrics to Amazon CloudWatch Logs.
   *             For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.
   *             For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0,
   *             then you must supply a <code>MonitoringRoleArn</code> value.</p>
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *          <p>For more information about IAM database authentication, see
   *          <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *              IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The name of the engine of your source database.</p>
   *          <p>Valid Values:
   *             <code>mysql</code>
   *          </p>
   * @public
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *          <p>MySQL versions 5.6 and 5.7 are supported.</p>
   *          <p>Example: <code>5.6.40</code>
   *          </p>
   * @public
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>The name of your Amazon S3 bucket
   *             that contains your database backup file.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix of your Amazon S3 bucket.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>An Amazon Web Services Identity and Access Management (IAM) role with a trust policy and a permissions policy that allows Amazon RDS to access your Amazon S3 bucket.
   *         For information about this role,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html#MySQL.Procedural.Importing.Enabling.IAM">
   *             Creating an IAM role manually</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>Specifies the mode of Database Insights to enable for the DB instance.</p>
   *          <note>
   *             <p>Aurora DB instances inherit this value from the DB cluster, so you can't change this value.</p>
   *          </note>
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * <p>Specifies whether to enable Performance Insights for the DB instance.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default KMS key. There is a default KMS key for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * <p>The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:</p>
   *          <ul>
   *             <li>
   *                <p>7</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>month</i> * 31, where <i>month</i> is a number of months from 1-23</p>
   *             </li>
   *             <li>
   *                <p>731</p>
   *             </li>
   *          </ul>
   *          <p>For example, the following values are valid:</p>
   *          <ul>
   *             <li>
   *                <p>93 (3 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>341 (11 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>589 (19 months * 31)</p>
   *             </li>
   *             <li>
   *                <p>731</p>
   *             </li>
   *          </ul>
   *          <p>If you specify a retention period such as 94, which isn't a valid value, RDS issues an error.</p>
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Specifies whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * <p>Specifies whether to enable deletion protection for the DB instance.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *          <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't manage the master user password with Amazon Web Services Secrets Manager if <code>MasterUserPassword</code>
   *                     is specified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether to enable a dedicated log volume (DLV) for the DB instance.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB instance's server certificate.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *             instance</a> in the <i>Amazon RDS User Guide</i> and
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *                 Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *                     User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The life cycle type for this DB instance.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB instance into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromS3Result {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreDBInstanceToPointInTimeMessage {
  /**
   * <p>The identifier of the source DB instance from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceDBInstanceIdentifier?: string | undefined;

  /**
   * <p>The name of the new DB instance to create.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetDBInstanceIdentifier: string | undefined;

  /**
   * <p>The date and time to restore from.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a time in Universal Coordinated Time (UTC) format.</p>
   *             </li>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2009-09-07T23:45:00Z</code>
   *          </p>
   * @public
   */
  RestoreTime?: Date | undefined;

  /**
   * <p>Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance
   *           isn't restored from the latest backup time.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be specified if the <code>RestoreTime</code> parameter is provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example
   *                 db.m4.large. Not all DB instance classes are available in all Amazon Web Services
   *             Regions, or for all database engines. For the full list of DB instance classes, and
   *             availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance
   *                 Class</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Default: The same DB instance class as the original DB instance.</p>
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Default: The same port as the original DB instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The value must be <code>1150-65535</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>us-east-1a</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB subnet group.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbsubnetgroup</code>
   *          </p>
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * <p>Secifies whether the DB instance is a Multi-AZ deployment.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a
   *           Multi-AZ deployment.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>Specifies whether the DB instance is publicly accessible.</p>
   *          <p>When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint
   *           resolves to the private IP address from within the DB cluster's virtual private cloud
   *           (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access
   *           to the DB cluster is ultimately controlled by the security group it uses. That public
   *           access isn't permitted if the security group assigned to the DB cluster doesn't permit
   *           it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Specifies whether minor version upgrades are applied automatically to the
   *           DB instance during the maintenance window.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>For more information about automatic minor version upgrades, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades">Automatically upgrading the minor engine version</a>.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The license model information for the restored DB instance.</p>
   *          <note>
   *             <p>License models for RDS for Db2 require additional configuration. The bring your
   *                 own license (BYOL) model requires a custom parameter group and an Amazon Web Services License
   *                 Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model
   *                 requires an Amazon Web Services Marketplace subscription. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html">Amazon
   *                     RDS for Db2 licensing options</a> in the <i>Amazon RDS User
   *                     Guide</i>.</p>
   *          </note>
   *          <p>This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>RDS for Db2 - <code>bring-your-own-license | marketplace-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Microsoft SQL Server - <code>license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL - <code>general-public-license</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for Oracle - <code>bring-your-own-license | license-included</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDS for PostgreSQL - <code>postgresql-license</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: Same as the source.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>The database name for the restored DB instance.</p>
   *          <p>This parameter doesn't apply to the following DB instances:</p>
   *          <ul>
   *             <li>
   *                <p>RDS Custom</p>
   *             </li>
   *             <li>
   *                <p>RDS for Db2</p>
   *             </li>
   *             <li>
   *                <p>RDS for MariaDB</p>
   *             </li>
   *             <li>
   *                <p>RDS for MySQL</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBName?: string | undefined;

  /**
   * <p>The database engine to use for the new instance.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db2-ae</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db2-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Default: The same as source</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be compatible with the engine of the source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance.</p>
   *          <p>This setting doesn't apply to SQL Server.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be an integer greater than 1000.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Iops?: number | undefined;

  /**
   * <p>The storage throughput value for the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom or Amazon Aurora.</p>
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * <p>The name of the option group to use for the restored DB instance.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an
   *         option group, and that option group can't be removed from a DB instance after it is associated with a DB instance</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * <p>Specifies whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   *          <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS resources</a> in the <i>Amazon RDS User Guide</i> or
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html">Tagging Amazon Aurora and Amazon RDS resources</a> in the <i>Amazon Aurora User Guide</i>.
   *             </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The storage type to associate with the DB instance.</p>
   *          <p>Valid Values: <code>gp2 | gp3 | io1 | io2 | standard</code>
   *          </p>
   *          <p>Default: <code>io1</code>, if the <code>Iops</code> parameter is specified. Otherwise,
   *                 <code>gp3</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>io1</code>, <code>io2</code>, or <code>gp3</code>, you must also include a value for the
   *             <code>Iops</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StorageType?: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The Active Directory directory ID to restore the DB instance in.
   *           Create the domain before running this command. Currently, you can create only the MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *           Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of an Active Directory domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mymanagedADtest.mymanagedAD.mydomain</code>
   *          </p>
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * <p>The Active Directory organizational unit for your DB instance to join.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the distinguished name format.</p>
   *             </li>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain</code>
   *          </p>
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * <p>The ARN for the Secrets Manager secret with the credentials for the user joining the domain.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 64 characters.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456</code>
   *          </p>
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * <p>The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Two IP addresses must be provided.  If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>123.124.125.126,234.235.236.237</code>
   *          </p>
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * <p>Specifies whether to enable mapping of Amazon Web Services Identity and Access Management
   *             (IAM) accounts to database accounts. By default, mapping isn't enabled.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>For more information about IAM database authentication, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *             IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * <p>Specifies whether the DB instance class of the DB instance uses its default processor features.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *          <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *                 for the specified DB engine is used.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * <p>Specifies whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection isn't enabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.</p>
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * <p>The resource ID of the source DB instance from which to restore.</p>
   * @public
   */
  SourceDbiResourceId?: string | undefined;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *          <p>For more information about this setting, including limitations that apply to it, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *               Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *          <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   *          <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * <p>The network type of the DB instance.</p>
   *          <p>The network type is determined by the <code>DBSubnetGroup</code> specified for the DB instance.
   *             A <code>DBSubnetGroup</code> can support only the IPv4 protocol or the IPv4 and the IPv6
   *             protocols (<code>DUAL</code>).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html">
   *             Working with a DB instance in a VPC</a> in the
   *             <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IPV4</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DUAL</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example,
   *             <code>arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p>
   *          <p>This setting doesn't apply to RDS Custom.</p>
   * @public
   */
  SourceDBInstanceAutomatedBackupsArn?: string | undefined;

  /**
   * <p>The location for storing automated backups and manual snapshots for the restored DB instance.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>local</code> (Dedicated Local Zone)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>outposts</code> (Amazon Web Services Outposts)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code> (Amazon Web Services Region)</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>region</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working
   *             with Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide</i>.</p>
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * <p>The instance profile associated with the underlying Amazon EC2 instance of an
   *             RDS Custom DB instance. The instance profile must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>The profile must exist in your account.</p>
   *             </li>
   *             <li>
   *                <p>The profile must have an IAM role that Amazon EC2 has permissions to assume.</p>
   *             </li>
   *             <li>
   *                <p>The instance profile name and the associated IAM role name must start with the prefix <code>AWSRDSCustom</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For the list of permissions required for the IAM role, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc">
   *                 Configure IAM and your VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting is required for RDS Custom.</p>
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * <p>The amount of storage (in gibibytes) to allocate initially for the DB instance.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.</p>
   *          <p>This setting isn't valid for RDS for SQL Server.</p>
   *          <note>
   *             <p>Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed.
   *                 You can also allocate additional storage for future growth.</p>
   *          </note>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether to enable a dedicated log volume (DLV) for the DB instance.</p>
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * <p>The CA certificate identifier to use for the DB instance's server certificate.</p>
   *          <p>This setting doesn't apply to RDS Custom DB instances.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
   *                 instance</a> in the <i>Amazon RDS User Guide</i> and
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
   *                     Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
   *                         User Guide</i>.</p>
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * <p>The life cycle type for this DB instance.</p>
   *          <note>
   *             <p>By default, this value is set to <code>open-source-rds-extended-support</code>, which enrolls your DB instance into Amazon RDS Extended Support.
   *               At the end of standard support, you can avoid charges for Extended Support by setting the value to <code>open-source-rds-extended-support-disabled</code>. In this case,
   *               RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date.</p>
   *          </note>
   *          <p>You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support,
   *         you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html">Amazon RDS Extended Support with Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.</p>
   *          <p>Valid Values: <code>open-source-rds-extended-support | open-source-rds-extended-support-disabled</code>
   *          </p>
   *          <p>Default: <code>open-source-rds-extended-support</code>
   *          </p>
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * <p>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager in the
   *             restored DB instance.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Applies to RDS for Oracle only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and
   *             managed in Amazon Web Services Secrets Manager.</p>
   *          <p>This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets
   *             Manager for the DB instance.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>If you don't specify <code>MasterUserSecretKmsKeyId</code>, then the <code>aws/secretsmanager</code>
   *             KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't
   *             use the <code>aws/secretsmanager</code> KMS key to encrypt the secret, and you must use a customer
   *             managed KMS key.</p>
   *          <p>There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account
   *             has a different default KMS key for each Amazon Web Services Region.</p>
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceToPointInTimeResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RevokeDBSecurityGroupIngressMessage {
  /**
   * <p>The name of the DB security group to revoke ingress from.</p>
   * @public
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>The IP range to revoke access from.
   *         Must be a valid CIDR range. If <code>CIDRIP</code> is specified,
   *         <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code>
   *         can't be provided.</p>
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * <p>The name of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>The id of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   * @public
   */
  EC2SecurityGroupId?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The Amazon Web Services access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.</p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeDBSecurityGroupIngressResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.</p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.</p>
   * @public
   */
  DBSecurityGroup?: DBSecurityGroup | undefined;
}

/**
 * @public
 */
export interface StartActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster,
   *             for example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the mode of the database activity stream.
   *             Database events such as a change or access generate an activity stream event.
   *             The database session can handle these events either synchronously or asynchronously.</p>
   * @public
   */
  Mode: ActivityStreamMode | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Specifies whether or not the database activity stream is to start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>Specifies whether the database activity stream includes engine-native audit fields. This option applies
   *         to an Oracle or Microsoft SQL Server DB instance. By default, no engine-native audit fields are included.</p>
   * @public
   */
  EngineNativeAuditFieldsIncluded?: boolean | undefined;
}

/**
 * @public
 */
export interface StartActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of messages in the database activity stream.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   * @public
   */
  KinesisStreamName?: string | undefined;

  /**
   * <p>The status of the database activity stream.</p>
   * @public
   */
  Status?: ActivityStreamStatus | undefined;

  /**
   * <p>The mode of the database activity stream.</p>
   * @public
   */
  Mode?: ActivityStreamMode | undefined;

  /**
   * <p>Indicates whether engine-native audit fields are included in the database activity stream.</p>
   * @public
   */
  EngineNativeAuditFieldsIncluded?: boolean | undefined;

  /**
   * <p>Indicates whether or not the database activity stream will start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as
   *         a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceMessage {
  /**
   * <p>The user-supplied instance identifier.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example,
   *             <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.</p>
   * @public
   */
  SourceDBInstanceArn: string | undefined;

  /**
   * <p>The retention period for the replicated automated backups.</p>
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the
   *             Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example,
   *             <code>arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE</code>.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>In an Amazon Web Services GovCloud (US) Region, an URL that contains a Signature Version 4 signed request
   *             for the <code>StartDBInstanceAutomatedBackupsReplication</code> operation to call
   *             in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the
   *             <code>StartDBInstanceAutomatedBackupsReplication</code> API operation that can run in
   *             the Amazon Web Services Region that contains the source DB instance.</p>
   *          <p>This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other
   *             Amazon Web Services Regions.</p>
   *          <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *          <note>
   *             <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify
   *                     <code>SourceRegion</code> (or <code>--source-region</code> for the CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying
   *                     <code>SourceRegion</code> autogenerates a presigned URL that is a valid request
   *                 for the operation that can run in the source Amazon Web Services Region.</p>
   *          </note>
   * @public
   */
  PreSignedUrl?: string | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceAutomatedBackupsReplicationResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   * @public
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined;
}

/**
 * @public
 */
export interface StartExportTaskMessage {
  /**
   * <p>A unique identifier for the export task. This ID isn't an identifier for
   *             the Amazon S3 bucket where the data is to be exported.</p>
   * @public
   */
  ExportTaskIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot or cluster to export to Amazon S3.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket to export the snapshot or cluster data to.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The name of the IAM role to use for writing to the Amazon S3 bucket
   *             when exporting a snapshot or cluster.</p>
   *          <p>In the IAM policy attached to your IAM role, include the following required actions to allow the transfer of files from Amazon
   *             RDS or Amazon Aurora to an S3 bucket:</p>
   *          <ul>
   *             <li>
   *                <p>s3:PutObject*</p>
   *             </li>
   *             <li>
   *                <p>s3:GetObject*</p>
   *             </li>
   *             <li>
   *                <p>s3:ListBucket</p>
   *             </li>
   *             <li>
   *                <p>s3:DeleteObject*</p>
   *             </li>
   *             <li>
   *                <p>s3:GetBucketLocation </p>
   *             </li>
   *          </ul>
   *          <p>In the policy, include the resources to identify the S3 bucket and objects in the bucket. The following list of resources shows
   *             the Amazon Resource Name (ARN) format for accessing S3:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:s3:::<i>your-s3-bucket</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:s3:::<i>your-s3-bucket</i>/*</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services KMS key to use to encrypt the data exported to Amazon S3. The Amazon Web Services KMS
   *             key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *             The caller of this operation must be authorized to run the following operations.
   *             These can be set in the Amazon Web Services KMS key policy:</p>
   *          <ul>
   *             <li>
   *                <p>kms:CreateGrant</p>
   *             </li>
   *             <li>
   *                <p>kms:DescribeKey</p>
   *             </li>
   *          </ul>
   * @public
   */
  KmsKeyId: string | undefined;

  /**
   * <p>The Amazon S3 bucket prefix to use as the file name and path of the exported data.</p>
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * <p>The data to be exported from the snapshot or cluster.
   *             If this parameter isn't provided, all of the data is exported.</p>
   *          <p>Valid Values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>database</code> - Export all the data from a specified database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.table</code>
   *                   <i>table-name</i> -
   *                     Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.schema</code>
   *                   <i>schema-name</i> - Export a database schema of the snapshot or cluster.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.schema.table</code>
   *                   <i>table-name</i> - Export a table of the database schema.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ExportOnly?: string[] | undefined;
}

/**
 * @public
 */
export interface StopActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster for the database activity stream.
   *             For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies whether or not the database activity stream is to stop as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface StopActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   * @public
   */
  KinesisStreamName?: string | undefined;

  /**
   * <p>The status of the database activity stream.</p>
   * @public
   */
  Status?: ActivityStreamStatus | undefined;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as
   *         a lowercase string.</p>
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. </p>
   *          <p>For an Amazon Aurora DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>PromoteReadReplicaDBCluster</code>,
   *           <code>RestoreDBClusterFromS3</code>, <code>RestoreDBClusterFromSnapshot</code>,
   *           <code>RestoreDBClusterToPointInTime</code>, <code>StartDBCluster</code>, and <code>StopDBCluster</code>.</p>
   *          <p>For a Multi-AZ DB cluster, this data type is used as a response element in the operations
   *           <code>CreateDBCluster</code>, <code>DeleteDBCluster</code>, <code>DescribeDBClusters</code>,
   *           <code>FailoverDBCluster</code>, <code>ModifyDBCluster</code>, <code>RebootDBCluster</code>,
   *           <code>RestoreDBClusterFromSnapshot</code>, and <code>RestoreDBClusterToPointInTime</code>.</p>
   *          <p>For more information on Amazon Aurora DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
   *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   *          <p>For more information on Multi-AZ DB clusters, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
   *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceMessage {
  /**
   * <p>The user-supplied instance identifier.</p>
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.</p>
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating
   *             automate backups, for example,
   *                 <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.</p>
   * @public
   */
  SourceDBInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceAutomatedBackupsReplicationResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   * @public
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined;
}

/**
 * @public
 */
export interface SwitchoverBlueGreenDeploymentRequest {
  /**
   * <p>The resource ID of the blue/green deployment.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing blue/green deployment resource ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  BlueGreenDeploymentIdentifier: string | undefined;

  /**
   * <p>The amount of time, in seconds, for the switchover to complete.</p>
   *          <p>Default: 300</p>
   *          <p>If the switchover takes longer than the specified duration, then any changes are rolled back,
   *            and no changes are made to the environments.</p>
   * @public
   */
  SwitchoverTimeout?: number | undefined;
}

/**
 * @public
 */
export interface SwitchoverBlueGreenDeploymentResponse {
  /**
   * <p>Details about a blue/green deployment.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
   *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
   *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
   *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
   *                 User Guide</i>.</p>
   * @public
   */
  BlueGreenDeployment?: BlueGreenDeployment | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterMessage {
  /**
   * <p>The identifier of the global database cluster to switch over. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global database cluster (Aurora global database).</p>
   *             </li>
   *          </ul>
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the secondary Aurora DB cluster to promote to the new primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that
   *        Aurora can locate the cluster in its Amazon Web Services Region.</p>
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface SwitchoverReadReplicaMessage {
  /**
   * <p>The DB instance identifier of the current standby database. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identiﬁer of an existing Oracle read replica DB instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverReadReplicaResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.</p>
   *          <p>This data type is used as a response element in the operations <code>CreateDBInstance</code>,
   *           <code>CreateDBInstanceReadReplica</code>, <code>DeleteDBInstance</code>, <code>DescribeDBInstances</code>,
   *           <code>ModifyDBInstance</code>, <code>PromoteReadReplica</code>, <code>RebootDBInstance</code>,
   *           <code>RestoreDBInstanceFromDBSnapshot</code>, <code>RestoreDBInstanceFromS3</code>, <code>RestoreDBInstanceToPointInTime</code>,
   *           <code>StartDBInstance</code>, and <code>StopDBInstance</code>.</p>
   * @public
   */
  DBInstance?: DBInstance | undefined;
}
