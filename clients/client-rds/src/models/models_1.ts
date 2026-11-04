// smithy-typescript generated code
import type {
  ActivityStreamMode,
  ActivityStreamPolicyStatus,
  ActivityStreamStatus,
  AuditPolicyState,
  AutomationMode,
  CustomEngineVersionStatus,
  DatabaseInsightsMode,
  DefaultAuthScheme,
  EndDateType,
  MasterUserAuthenticationType,
  ReplicaMode,
} from "./enums";
import type {
  AdditionalStorageVolume,
  AvailableProcessorFeature,
  BlueGreenDeployment,
  Certificate,
  DBCapacityReservation,
  DBCluster,
  DBClusterAssociatedRole,
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
  EventSubscription,
  Filter,
  GlobalCluster,
  OptionGroup,
  OptionSetting,
  Parameter,
  ProcessorFeature,
  RdsCustomClusterConfiguration,
  ScalingConfiguration,
  ServerlessV2FeaturesSupport,
  ServerlessV2ScalingConfiguration,
  Tag,
  TagSpecification,
  TenantDatabase,
  UserAuthConfig,
} from "./models_0";

/**
 * @public
 */
export interface DescribeReservedDBInstancesMessage {
  /**
   * The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.
   *
   * @public
   */
  ReservedDBInstanceId?: string | undefined;

  /**
   * The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.
   *
   * @public
   */
  ReservedDBInstancesOfferingId?: string | undefined;

  /**
   * The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.
   *
   * Valid Values: `1 | 3 | 31536000 | 94608000`
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * The product description filter value. Specify this parameter to show only those reservations matching the specified product description.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.
   *
   * Valid Values: `"Partial Upfront" | "All Upfront" | "No Upfront"`
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * Specifies whether to show only those reservations that support Multi-AZ.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.
   *
   * > **Note:** Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.
   *
   * @public
   */
  LeaseId?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more than the `MaxRecords` value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This data type is used as a response element in the `DescribeReservedDBInstances` and `DescribeReservedDBInstancesOfferings` actions.
 *
 * @public
 */
export interface RecurringCharge {
  /**
   * The amount of the recurring charge.
   *
   * @public
   */
  RecurringChargeAmount?: number | undefined;

  /**
   * The frequency of the recurring charge.
   *
   * @public
   */
  RecurringChargeFrequency?: string | undefined;
}

/**
 * This data type is used as a response element in the `DescribeReservedDBInstances` and `PurchaseReservedDBInstancesOffering` actions.
 *
 * @public
 */
export interface ReservedDBInstance {
  /**
   * The unique identifier for the reservation.
   *
   * @public
   */
  ReservedDBInstanceId?: string | undefined;

  /**
   * The offering identifier.
   *
   * @public
   */
  ReservedDBInstancesOfferingId?: string | undefined;

  /**
   * The DB instance class for the reserved DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The time the reservation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The duration of the reservation in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The fixed price charged for this reserved DB instance.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly price charged for this reserved DB instance.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the reserved DB instance.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The number of reserved DB instances.
   *
   * @public
   */
  DBInstanceCount?: number | undefined;

  /**
   * The description of the reserved DB instance.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type of this reserved DB instance.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * Indicates whether the reservation applies to Multi-AZ deployments.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The state of the reserved DB instance.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The recurring price charged to run this reserved DB instance.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the reserved DB instance.
   *
   * @public
   */
  ReservedDBInstanceArn?: string | undefined;

  /**
   * The unique identifier for the lease associated with the reserved DB instance.
   *
   * > **Note:** Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.
   *
   * @public
   */
  LeaseId?: string | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeReservedDBInstances` action.
 *
 * @public
 */
export interface ReservedDBInstanceMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of reserved DB instances.
   *
   * @public
   */
  ReservedDBInstances?: ReservedDBInstance[] | undefined;
}

/**
 * @public
 */
export interface DescribeReservedDBInstancesOfferingsMessage {
  /**
   * The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier.
   *
   * Example: `438012d3-4052-4cc7-b2e3-8d3372e0e706`
   *
   * @public
   */
  ReservedDBInstancesOfferingId?: string | undefined;

  /**
   * The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.
   *
   * Valid Values: `1 | 3 | 31536000 | 94608000`
   *
   * @public
   */
  Duration?: string | undefined;

  /**
   * Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.
   *
   * > **Note:** The results show offerings that partially match the filter value.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.
   *
   * Valid Values: `"Partial Upfront" | "All Upfront" | "No Upfront"`
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * Specifies whether to show only those reservations that support Multi-AZ.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum number of records to include in the response. If more than the `MaxRecords` value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This data type is used as a response element in the `DescribeReservedDBInstancesOfferings` action.
 *
 * @public
 */
export interface ReservedDBInstancesOffering {
  /**
   * The offering identifier.
   *
   * @public
   */
  ReservedDBInstancesOfferingId?: string | undefined;

  /**
   * The DB instance class for the reserved DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The duration of the offering in seconds.
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * The fixed price charged for this offering.
   *
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * The hourly price charged for this offering.
   *
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * The currency code for the reserved DB instance offering.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The database engine used by the offering.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The offering type.
   *
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * Indicates whether the offering applies to Multi-AZ deployments.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The recurring price charged to run this reserved DB instance.
   *
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeReservedDBInstancesOfferings` action.
 *
 * @public
 */
export interface ReservedDBInstancesOfferingMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of reserved DB instance offerings.
   *
   * @public
   */
  ReservedDBInstancesOfferings?: ReservedDBInstancesOffering[] | undefined;
}

/**
 * @public
 */
export interface DescribeServerlessV2PlatformVersionsMessage {
  /**
   * A specific platform version to return details for.
   *
   * Example: `3`
   *
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * The database engine to return platform version details for.
   *
   * Valid Values:
   *
   * - `aurora-mysql`
   * - `aurora-postgresql`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * Specifies whether to return only the default platform versions for each engine. The default platform version is the version used for new DB clusters.
   *
   * @public
   */
  DefaultOnly?: boolean | undefined;

  /**
   * Specifies whether to also include platform versions which are no longer in use.
   *
   * @public
   */
  IncludeAll?: boolean | undefined;

  /**
   * The maximum number of records to include in the response. If more than the `MaxRecords` value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 20
   *
   * Constraints: Minimum 1, maximum 200.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This data type is used as a response element in the action `DescribeServerlessV2PlatformVersions`.
 *
 * @public
 */
export interface ServerlessV2PlatformVersionInfo {
  /**
   * The version number of the serverless platform.
   *
   * @public
   */
  ServerlessV2PlatformVersion?: string | undefined;

  /**
   * The description of the serverless platform.
   *
   * @public
   */
  ServerlessV2PlatformVersionDescription?: string | undefined;

  /**
   * The name of the database engine.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Specifies any Aurora Serverless v2 properties or limits that differ between Aurora Serverless v2 platform versions. You can retrieve the platform version of an existing DB cluster and check whether that version supports certain Aurora Serverless v2 features before you attempt to use those features.
   *
   * @public
   */
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport | undefined;

  /**
   * The status of the serverless platform. Valid statuses are the following:
   *
   * - `enabled` - The platform version is in use.
   * - `disabled` - The platform version is not in use.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates whether this platform version is the default version for the engine. The default platform version is the version used for new DB clusters.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeServerlessV2PlatformVersions` action.
 *
 * @public
 */
export interface ServerlessV2PlatformVersionsMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `ServerlessV2PlatformVersionInfo` elements.
   *
   * @public
   */
  ServerlessV2PlatformVersions?: ServerlessV2PlatformVersionInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeSourceRegionsMessage {
  /**
   * The source Amazon Web Services Region name. For example, `us-east-1`.
   *
   * Constraints:
   *
   * - Must specify a valid Amazon Web Services Region name.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *
   * Default: 100
   *
   * Constraints: Minimum 20, maximum 100.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeSourceRegions` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Contains an Amazon Web Services Region name as the result of a successful call to the `DescribeSourceRegions` action.
 *
 * @public
 */
export interface SourceRegion {
  /**
   * The name of the source Amazon Web Services Region.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The endpoint for the source Amazon Web Services Region endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The status of the source Amazon Web Services Region.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Indicates whether the source Amazon Web Services Region supports replicating automated backups to the current Amazon Web Services Region.
   *
   * @public
   */
  SupportsDBInstanceAutomatedBackupsReplication?: boolean | undefined;
}

/**
 * Contains the result of a successful invocation of the `DescribeSourceRegions` action.
 *
 * @public
 */
export interface SourceRegionMessage {
  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of `SourceRegion` instances that contains each source Amazon Web Services Region that the current Amazon Web Services Region can get a read replica or a DB snapshot from.
   *
   * @public
   */
  SourceRegions?: SourceRegion[] | undefined;
}

/**
 * @public
 */
export interface DescribeTenantDatabasesMessage {
  /**
   * The user-supplied DB instance identifier, which must match the identifier of an existing instance owned by the Amazon Web Services account. This parameter isn't case-sensitive.
   *
   * @public
   */
  DBInstanceIdentifier?: string | undefined;

  /**
   * The user-supplied tenant database name, which must match the name of an existing tenant database on the specified DB instance owned by your Amazon Web Services account. This parameter isn’t case-sensitive.
   *
   * @public
   */
  TenantDBName?: string | undefined;

  /**
   * A filter that specifies one or more database tenants to describe.
   *
   * Supported filters:
   *
   * - `tenant-db-name` - Tenant database names. The results list only includes information about the tenant databases that match these tenant DB names.
   * - `tenant-database-resource-id` - Tenant database resource identifiers.
   * - `dbi-resource-id` - DB instance resource identifiers. The results list only includes information about the tenants contained within the DB instances identified by these resource identifiers.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * An optional pagination token provided by a previous `DescribeTenantDatabases` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of records to include in the response. If more records exist than the specified `MaxRecords` value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface TenantDatabasesMessage {
  /**
   * An optional pagination token provided by a previous `DescribeTenantDatabases` request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * An array of the tenant databases requested by the `DescribeTenantDatabases` operation.
   *
   * @public
   */
  TenantDatabases?: TenantDatabase[] | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsMessage {
  /**
   * The customer identifier or the ARN of your DB instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * A range of double values.
 *
 * @public
 */
export interface DoubleRange {
  /**
   * The minimum value in the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The maximum value in the range.
   *
   * @public
   */
  To?: number | undefined;
}

/**
 * A range of integer values.
 *
 * @public
 */
export interface Range {
  /**
   * The minimum value in the range.
   *
   * @public
   */
  From?: number | undefined;

  /**
   * The maximum value in the range.
   *
   * @public
   */
  To?: number | undefined;

  /**
   * The step value for the range. For example, if you have a range of 5,000 to 10,000, with a step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500 is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000, 7,000, 8,000...
   *
   * @public
   */
  Step?: number | undefined;
}

/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the `DescribeValidDBInstanceModifications` action.
 *
 * @public
 */
export interface ValidStorageOptions {
  /**
   * The valid storage types for your DB instance. For example: gp2, gp3, io1, io2.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The valid range of storage in gibibytes (GiB). For example, 100 to 16,384.
   *
   * @public
   */
  StorageSize?: Range[] | undefined;

  /**
   * The valid range of provisioned IOPS. For example, 1000-256,000.
   *
   * @public
   */
  ProvisionedIops?: Range[] | undefined;

  /**
   * The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10, which means that provisioned IOPS can be between 3 and 10 times storage.
   *
   * @public
   */
  IopsToStorageRatio?: DoubleRange[] | undefined;

  /**
   * The valid range of provisioned storage throughput. For example, 500-4,000 mebibytes per second (MiBps).
   *
   * @public
   */
  ProvisionedStorageThroughput?: Range[] | undefined;

  /**
   * The valid range of storage throughput to provisioned IOPS ratios. For example, 0-0.25.
   *
   * @public
   */
  StorageThroughputToIopsRatio?: DoubleRange[] | undefined;

  /**
   * Indicates whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.
   *
   * @public
   */
  SupportsStorageAutoscaling?: boolean | undefined;
}

/**
 * Contains the valid options for an additional storage volume.
 *
 * @public
 */
export interface ValidVolumeOptions {
  /**
   * The name of the additional storage volume.
   *
   * @public
   */
  VolumeName?: string | undefined;

  /**
   * The valid storage options for the additional storage volume.
   *
   * @public
   */
  Storage?: ValidStorageOptions[] | undefined;
}

/**
 * Contains the valid options for additional storage volumes for a DB instance.
 *
 * @public
 */
export interface ValidAdditionalStorageOptions {
  /**
   * Indicates whether the DB instance supports additional storage volumes.
   *
   * @public
   */
  SupportsAdditionalStorageVolumes?: boolean | undefined;

  /**
   * The valid additional storage volume options for the DB instance.
   *
   * @public
   */
  Volumes?: ValidVolumeOptions[] | undefined;
}

/**
 * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the `DescribeValidDBInstanceModifications` action. You can use this information when you call `ModifyDBInstance`.
 *
 * @public
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * Valid storage options for your DB instance.
   *
   * @public
   */
  Storage?: ValidStorageOptions[] | undefined;

  /**
   * Valid processor features for your DB instance.
   *
   * @public
   */
  ValidProcessorFeatures?: AvailableProcessorFeature[] | undefined;

  /**
   * Indicates whether a DB instance supports using a dedicated log volume (DLV).
   *
   * @public
   */
  SupportsDedicatedLogVolume?: boolean | undefined;

  /**
   * The valid additional storage options for the DB instance.
   *
   * @public
   */
  AdditionalStorage?: ValidAdditionalStorageOptions | undefined;
}

/**
 * @public
 */
export interface DescribeValidDBInstanceModificationsResult {
  /**
   * Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the `DescribeValidDBInstanceModifications` action. You can use this information when you call `ModifyDBInstance`.
   *
   * @public
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage | undefined;
}

/**
 * @public
 */
export interface DisableHttpEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the DB cluster.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisableHttpEndpointResponse {
  /**
   * The ARN of the DB cluster.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Indicates whether the HTTP endpoint is enabled or disabled for the DB cluster.
   *
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;
}

/**
 * This data type is used as a response element to `DownloadDBLogFilePortion`.
 *
 * @public
 */
export interface DownloadDBLogFilePortionDetails {
  /**
   * Entries from the specified log file.
   *
   * @public
   */
  LogFileData?: string | undefined;

  /**
   * A pagination token that can be used in a later `DownloadDBLogFilePortion` request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A Boolean value that, if true, indicates there is more data to be downloaded.
   *
   * @public
   */
  AdditionalDataPending?: boolean | undefined;
}

/**
 * @public
 */
export interface DownloadDBLogFilePortionMessage {
  /**
   * The customer-assigned name of the DB instance that contains the log files you want to list.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The name of the log file to be downloaded.
   *
   * @public
   */
  LogFileName: string | undefined;

  /**
   * The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.
   *
   * If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning or the end of the log file, depending on the value of the Marker parameter.
   *
   * - If neither Marker or NumberOfLines are specified, the entire log file is returned up to a maximum of 10000 lines, starting with the most recent log entries first.
   * - If NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end of the log file are returned.
   * - If Marker is specified as "0", then the specified number of lines from the beginning of the log file are returned.
   * - You can download the log file in blocks of lines by specifying the size of the block using the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your first request. Include the Marker value returned in the response as the Marker value for the next request, continuing until the AdditionalDataPending response element returns false.
   *
   * @public
   */
  NumberOfLines?: number | undefined;
}

/**
 * @public
 */
export interface EnableHttpEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the DB cluster.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface EnableHttpEndpointResponse {
  /**
   * The ARN of the DB cluster.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Indicates whether the HTTP endpoint is enabled or disabled for the DB cluster.
   *
   * @public
   */
  HttpEndpointEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterMessage {
  /**
   * The identifier of the DB cluster to force a failover for. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB cluster.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The name of the DB instance to promote to the primary DB instance.
   *
   * Specify the DB instance identifier for an Aurora Replica or a Multi-AZ readable standby in the DB cluster, for example `mydbcluster-replica1`.
   *
   * This setting isn't supported for RDS for MySQL Multi-AZ DB clusters.
   *
   * @public
   */
  TargetDBInstanceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface FailoverDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterMessage {
  /**
   * The identifier of the global database cluster (Aurora global database) this operation should apply to. The identifier is the unique key assigned by the user when the Aurora global database is created. In other words, it's the name of the Aurora global database.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The identifier of the secondary Aurora DB cluster that you want to promote to the primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that Aurora can locate the cluster in its Amazon Web Services Region.
   *
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;

  /**
   * Specifies whether to allow data loss for this global database cluster operation. Allowing data loss triggers a global failover operation.
   *
   * If you don't specify `AllowDataLoss`, the global database cluster operation defaults to a switchover.
   *
   * Constraints:
   *
   * - Can't be specified together with the `Switchover` parameter.
   *
   * @public
   */
  AllowDataLoss?: boolean | undefined;

  /**
   * Specifies whether to switch over this global database cluster.
   *
   * Constraints:
   *
   * - Can't be specified together with the `AllowDataLoss` parameter.
   *
   * @public
   */
  Switchover?: boolean | undefined;
}

/**
 * @public
 */
export interface FailoverGlobalClusterResult {
  /**
   * A data type representing an Aurora global database.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an ARN for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * This parameter isn't currently supported.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface TagListMessage {
  /**
   * List of tags returned by the `ListTagsForResource` operation.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyActivityStreamRequest {
  /**
   * The Amazon Resource Name (ARN) of the RDS for Oracle or Microsoft SQL Server DB instance. For example, `arn:aws:rds:us-east-1:12345667890:db:my-orcl-db`.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is read-only. You can edit your audit policy only when the activity stream is unlocked or stopped.
   *
   * @public
   */
  AuditPolicyState?: AuditPolicyState | undefined;
}

/**
 * @public
 */
export interface ModifyActivityStreamResponse {
  /**
   * The Amazon Web Services KMS key identifier for encryption of messages in the database activity stream.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The name of the Amazon Kinesis data stream to be used for the database activity stream.
   *
   * @public
   */
  KinesisStreamName?: string | undefined;

  /**
   * The status of the modification to the database activity stream.
   *
   * @public
   */
  Status?: ActivityStreamStatus | undefined;

  /**
   * The mode of the database activity stream.
   *
   * @public
   */
  Mode?: ActivityStreamMode | undefined;

  /**
   * Indicates whether engine-native audit fields are included in the database activity stream.
   *
   * @public
   */
  EngineNativeAuditFieldsIncluded?: boolean | undefined;

  /**
   * The status of the modification to the policy state of the database activity stream.
   *
   * @public
   */
  PolicyStatus?: ActivityStreamPolicyStatus | undefined;
}

/**
 * @public
 */
export interface ModifyCertificatesMessage {
  /**
   * The new default certificate identifier to override the current one with.
   *
   * To determine the valid values, use the `describe-certificates` CLI command or the `DescribeCertificates` API operation.
   *
   * @public
   */
  CertificateIdentifier?: string | undefined;

  /**
   * Specifies whether to remove the override for the default certificate. If the override is removed, the default certificate is the system default.
   *
   * @public
   */
  RemoveCustomerOverride?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyCertificatesResult {
  /**
   * A CA certificate for an Amazon Web Services account.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface DBClusterCapacityInfo {
  /**
   * A user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.
   *
   * @public
   */
  DBClusterIdentifier?: string | undefined;

  /**
   * A value that specifies the capacity that the DB cluster scales to next.
   *
   * @public
   */
  PendingCapacity?: number | undefined;

  /**
   * The current capacity of the DB cluster.
   *
   * @public
   */
  CurrentCapacity?: number | undefined;

  /**
   * The number of seconds before a call to `ModifyCurrentDBClusterCapacity` times out.
   *
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;

  /**
   * The timeout action of a call to `ModifyCurrentDBClusterCapacity`, either `ForceApplyCapacityChange` or `RollbackCapacityChange`.
   *
   * @public
   */
  TimeoutAction?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCurrentDBClusterCapacityMessage {
  /**
   * The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB cluster.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The DB cluster capacity.
   *
   * When you change the capacity of a paused Aurora Serverless v1 DB cluster, it automatically resumes.
   *
   * Constraints:
   *
   * - For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
   * - For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.
   *
   * Specify a value between 10 and 600 seconds.
   *
   * @public
   */
  SecondsBeforeTimeout?: number | undefined;

  /**
   * The action to take when the timeout is reached, either `ForceApplyCapacityChange` or `RollbackCapacityChange`.
   *
   * `ForceApplyCapacityChange`, the default, sets the capacity to the specified value as soon as possible.
   *
   * `RollbackCapacityChange` ignores the capacity change if a scaling point isn't found in the timeout period.
   *
   * @public
   */
  TimeoutAction?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCustomDBEngineVersionMessage {
  /**
   * The database engine.
   *
   * RDS Custom for Oracle supports the following values:
   *
   * - `custom-oracle-ee`
   * - `custom-oracle-ee-cdb`
   * - `custom-oracle-se2`
   * - `custom-oracle-se2-cdb`
   *
   * RDS Custom for SQL Server supports the following values:
   *
   * - `custom-sqlserver-ee`
   * - `custom-sqlserver-se`
   * - `custom-sqlserver-web`
   * - `custom-sqlserver-dev`
   *
   * RDS for SQL Server supports the following values:
   *
   * - `sqlserver-ee` (Bring Your Own Media)
   * - `sqlserver-se` (Bring Your Own Media)
   * - `sqlserver-dev-ee`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The custom engine version (CEV) that you want to modify. This option is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Amazon Web Services Region.
   *
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * An optional description of your CEV.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The availability status to be assigned to the CEV. Valid values are as follows:
   *
   * - **available**
   *
   *   You can use this CEV to create a new RDS Custom DB instance.
   *
   * - **inactive**
   *
   *   You can create a new RDS Custom instance by restoring a DB snapshot with this CEV. You can't patch or create new instances with this CEV.
   *
   * You can change any status to any status. A typical reason to change status is to prevent the accidental use of a CEV, or to make a deprecated CEV eligible for use again. For example, you might change the status of your CEV from `available` to `inactive`, and from `inactive` back to `available`. To change the availability status of the CEV, it must not currently be in use by an RDS Custom instance, snapshot, or automated backup.
   *
   * @public
   */
  Status?: CustomEngineVersionStatus | undefined;
}

/**
 * @public
 */
export interface ModifyDBCapacityReservationRequest {
  /**
   * The identifier or the name of the DB capacity reservation to modify. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name.
   *
   * @public
   */
  DBCapacityReservationIdentifier: string | undefined;

  /**
   * The new number of DB instances to reserve in each Availability Zone of the reservation. Amazon RDS applies this number to every Availability Zone of the reservation.
   *
   * An increase reserves more capacity at the time of the request, so it can fail when the Amazon Web Services Region has insufficient capacity.
   *
   * This value multiplied by the number of Availability Zones counts against the DB instances quota for your Amazon Web Services account in the Amazon Web Services Region. Amazon RDS checks the quota only when you increase the value.
   *
   * Constraints:
   *
   * - Minimum 1.
   * - Can't be less than the highest number of DB instances that use the reservation in any single Availability Zone of the reservation. That number includes a DB instance that holds a unit of reserved capacity for a pending modification. To find that number for an Availability Zone, subtract `AvailableCapacity` from `ReservedCapacityPerAvailabilityZone`.
   * - During a capacity commitment, can't be less than `CommittedCapacityPerAvailabilityZone`.
   *
   * @public
   */
  CapacityPerAvailabilityZone?: number | undefined;

  /**
   * The end date type for the reservation.
   *
   * Valid Values:
   *
   * - `limited` - The reservation has a specific end date. You must also specify `EndDate`.
   * - `unlimited` - The reservation doesn't expire. Don't specify `EndDate`.
   *
   * @public
   */
  EndDateType?: EndDateType | undefined;

  /**
   * The new end date for the reservation, in Universal Coordinated Time (UTC). Required when `EndDateType` is `limited`. Don't specify a value when `EndDateType` is `unlimited`.
   *
   * When you specify `EndDate`, you must also specify `EndDateType`.
   *
   * Constraints:
   *
   * - Must be a date and time in the future.
   * - During a capacity commitment, must be at or after `CommitmentEndDate`.
   *
   * @public
   */
  EndDate?: Date | undefined;
}

/**
 * @public
 */
export interface ModifyDBCapacityReservationResponse {
  /**
   * Contains the details of the modified DB capacity reservation.
   *
   * @public
   */
  DBCapacityReservation?: DBCapacityReservation | undefined;
}

/**
 * The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.
 *
 * The `EnableLogTypes` and `DisableLogTypes` arrays determine which logs will be exported (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB engine being used.
 *
 * For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
 *
 * For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
 *
 * @public
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * The list of log types to enable.
   *
   * The following values are valid for each DB engine:
   *
   * - Aurora MySQL - `audit | error | general | slowquery`
   * - Aurora PostgreSQL - `postgresql`
   * - RDS for MySQL - `error | general | slowquery`
   * - RDS for PostgreSQL - `postgresql | upgrade`
   *
   * @public
   */
  EnableLogTypes?: string[] | undefined;

  /**
   * The list of log types to disable.
   *
   * The following values are valid for each DB engine:
   *
   * - Aurora MySQL - `audit | error | general | slowquery`
   * - Aurora PostgreSQL - `postgresql`
   * - RDS for MySQL - `error | general | slowquery`
   * - RDS for PostgreSQL - `postgresql | upgrade`
   *
   * @public
   */
  DisableLogTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterMessage {
  /**
   * The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB cluster.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster2`
   *
   * @public
   */
  NewDBClusterIdentifier?: string | undefined;

  /**
   * Specifies whether the modifications in this request are asynchronously applied as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window.
   *
   * Most modifications can be applied immediately or during the next scheduled maintenance window. Some modifications, such as turning on deletion protection and changing the master password, are applied immediately—regardless of when you choose to apply them.
   *
   * By default, this parameter is disabled.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * The number of days for which automated backups are retained. Specify a minimum value of `1`.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Default: `1`
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The name of the DB cluster parameter group to use for the DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The port number on which the DB cluster accepts connections.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * Valid Values: `1150-65535`
   *
   * Default: The same port as the original DB cluster.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The new password for the master database user.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must contain from 8 to 41 characters.
   * - Can contain any printable ASCII character except "/", """, or "@".
   * - Can't be specified if `ManageMasterUserPassword` is turned on.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The option group to associate the DB cluster with.
   *
   * DB clusters are associated with a default option group that can't be modified.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see [Adjusting the Preferred DB Cluster Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide*.
   *
   * Constraints:
   *
   * - Must be in the format `ddd:hh24:mi-ddd:hh24:mi`.
   * - Days must be one of `Mon | Tue | Wed | Thu | Fri | Sat | Sun`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide* or [IAM database authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to `0`.
   *
   * Valid for Cluster Type: Aurora MySQL DB clusters only
   *
   * Default: `0`
   *
   * Constraints:
   *
   * - If specified, this value must be set to a number from 0 to 259,200 (72 hours).
   *
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * The following values are valid for each DB engine:
   *
   * - Aurora MySQL - `audit | error | general | instance | slowquery | iam-db-auth-error`
   * - Aurora PostgreSQL - `instance | postgresql | iam-db-auth-error`
   * - RDS for MySQL - `error | general | slowquery | iam-db-auth-error`
   * - RDS for PostgreSQL - `postgresql | upgrade | iam-db-auth-error`
   *
   * For more information about exporting CloudWatch Logs for Amazon RDS, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * For more information about exporting CloudWatch Logs for Amazon Aurora, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless `ApplyImmediately` is enabled.
   *
   * If the cluster that you're modifying has one or more read replicas, all replicas must be running an engine version that's the same or later than the version you specify.
   *
   * To list all of the available engine versions for Aurora MySQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for Aurora PostgreSQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for RDS for MySQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for RDS for PostgreSQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Specifies whether major version upgrades are allowed.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - You must allow major version upgrades when specifying a value for the `EngineVersion` parameter that is a different major version than the DB cluster's current version.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * The name of the DB parameter group to apply to all instances of the DB cluster.
   *
   * > **Note:** When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * Default: The existing name setting
   *
   * Constraints:
   *
   * - The DB parameter group must be in the same DB parameter group family as this DB cluster.
   * - The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.
   *
   * @public
   */
  DBInstanceParameterGroupName?: string | undefined;

  /**
   * The Active Directory directory ID to move the DB cluster to. Specify `none` to remove the cluster from its current domain. The domain must be created prior to this operation.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in `serverless` DB engine mode.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * Specifies whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Specifies whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint isn't enabled.
   *
   * When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
   *
   * For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
   *
   * > **Note:** This parameter applies only to Aurora Serverless v1 DB clusters. To enable or disable the HTTP endpoint for an Aurora Serverless v2 or provisioned DB cluster, use the `EnableHttpEndpoint` and `DisableHttpEndpoint` operations.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  EnableHttpEndpoint?: boolean | undefined;

  /**
   * Specifies whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
   *
   * You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  EnableGlobalWriteForwarding?: boolean | undefined;

  /**
   * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6gd.xlarge`. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *
   * For the full list of DB instance classes and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The storage type to associate with the DB cluster.
   *
   * For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).
   *
   * When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values:
   *
   * - Aurora DB clusters - `aurora | aurora-iopt1`
   * - Multi-AZ DB clusters - `io1 | io2 | gp3`
   *
   * Default:
   *
   * - Aurora DB clusters - `aurora`
   * - Multi-AZ DB clusters - `io1`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
   *
   * For information about valid IOPS values, see [Amazon RDS Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * Constraints:
   *
   * - Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The network type of the DB cluster.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * Valid Values: `IPV4 | DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
   *
   * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify `0`.
   *
   * If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [To create an IAM role for Amazon RDS Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole) in the *Amazon RDS User Guide.*
   *
   * If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters only
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * Specifies the mode of Database Insights to enable for the DB cluster.
   *
   * If you change the value from `standard` to `advanced`, you must set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
   *
   * If you change the value from `advanced` to `standard`, you can set the `PerformanceInsightsEnabled` parameter to `true` to collect detailed database counter and per-query metrics.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Specifies whether to turn on Performance Insights for the DB cluster.
   *
   * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * If the DB cluster doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management. In this case, you can't specify `MasterUserPassword`.
   *
   * If the DB cluster already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify `MasterUserPassword`. In this case, RDS deletes the secret and uses the new password for the master user specified by `MasterUserPassword`.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster. The secret value contains the updated password.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - You must apply the change immediately when rotating the master user password.
   *
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  EnableLocalWriteForwarding?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if both of the following conditions are met:
   *
   * - The DB cluster doesn't manage the master user password in Amazon Web Services Secrets Manager.
   *
   *   If the DB cluster already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key that is used to encrypt the secret.
   * - You are turning on `ManageMasterUserPassword` to manage the master user password in Amazon Web Services Secrets Manager.
   *
   *   If you are turning on `ManageMasterUserPassword` and don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * The DB engine mode of the DB cluster, either `provisioned` or `serverless`.
   *
   * > **Note:** The DB engine mode can be modified only from `serverless` to `provisioned`.
   *
   * For more information, see [CreateDBCluster](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html).
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * Specifies whether engine mode changes from `serverless` to `provisioned` are allowed.
   *
   * Valid for Cluster Type: Aurora Serverless v1 DB clusters only
   *
   * Constraints:
   *
   * - You must allow engine mode changes when specifying a different value for the `EngineMode` parameter from the DB cluster's current engine mode.
   *
   * @public
   */
  AllowEngineModeChange?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.
   *
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * Specifies whether to enable Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group.
   *
   * Valid for: Aurora DB clusters only
   *
   * > **Note:** This setting is no longer used. Instead use the `ClusterScalabilityType` setting when you create your Aurora Limitless Database DB cluster.
   *
   * @public
   */
  EnableLimitlessDatabase?: boolean | undefined;

  /**
   * The CA certificate identifier to use for the DB cluster's server certificate.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide*.
   *
   * Valid for Cluster Type: Multi-AZ DB clusters
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * Specifies the authentication type for the master user. With IAM master user authentication, you can change the master DB user to use IAM database authentication.
   *
   * You can specify one of the following values:
   *
   * - `password` - Use standard database authentication with a password.
   * - `iam-db-auth` - Use IAM database authentication for the master user.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
   *
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;

  /**
   * The lifecycle type for this DB cluster.
   *
   * You can use this setting to enroll your DB cluster into Amazon RDS Extended Support or to opt out. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
   *
   * - Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
   * - Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterEndpointMessage {
  /**
   * The identifier of the endpoint to modify. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * The type of the endpoint. One of: `READER`, `WRITER`, `ANY`.
   *
   * @public
   */
  EndpointType?: string | undefined;

  /**
   * List of DB instance identifiers that are part of the custom endpoint group.
   *
   * @public
   */
  StaticMembers?: string[] | undefined;

  /**
   * List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.
   *
   * @public
   */
  ExcludedMembers?: string[] | undefined;
}

/**
 * @public
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * The name of the DB cluster parameter group.
   *
   * Constraints:
   *
   * - Must be 1 to 255 letters or numbers.
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * > **Note:** This value is stored as a lowercase string.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * The name of the DB cluster parameter group to modify.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * A list of parameters in the DB cluster parameter group to modify.
   *
   * Valid Values (for the application method): `immediate | pending-reboot`
   *
   * > **Note:**
   * >
   * > You can use the `immediate` value with dynamic parameters only. You can use the `pending-reboot` value for both dynamic and static parameters.
   * >
   * > When the application method is `immediate`, changes to dynamic parameters are applied immediately to the DB clusters associated with the parameter group. When the application method is `pending-reboot`, changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the parameter group.
   *
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * The identifier for the DB cluster snapshot to modify the attributes for.
   *
   * @public
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * The name of the DB cluster snapshot attribute to modify.
   *
   * To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this value to `restore`.
   *
   * > **Note:** To view the list of attributes available to modify, use the DescribeDBClusterSnapshotAttributes API operation.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * A list of DB cluster snapshot attributes to add to the attribute specified by `AttributeName`.
   *
   * To authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account IDs, or `all` to make the manual DB cluster snapshot restorable by any Amazon Web Services account. Do not add the `all` value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.
   *
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * A list of DB cluster snapshot attributes to remove from the attribute specified by `AttributeName`.
   *
   * To remove authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account identifiers, or `all` to remove authorization for any Amazon Web Services account to copy or restore the DB cluster snapshot. If you specify `all`, an Amazon Web Services account whose account ID is explicitly added to the `restore` attribute can still copy or restore a manual DB cluster snapshot.
   *
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * Contains the results of a successful call to the `DescribeDBClusterSnapshotAttributes` API action.
   *
   * Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the `ModifyDBClusterSnapshotAttribute` API action.
   *
   * @public
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult | undefined;
}

/**
 * Contains details about the modification of an additional storage volume.
 *
 * @public
 */
export interface ModifyAdditionalStorageVolume {
  /**
   * The name of the additional storage volume that you want to modify.
   *
   * Valid Values: `RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4`
   *
   * @public
   */
  VolumeName: string | undefined;

  /**
   * The amount of storage allocated for the additional storage volume, in gibibytes (GiB). The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The number of I/O operations per second (IOPS) provisioned for the additional storage volume. This setting is only supported for Provisioned IOPS SSD (`io1` and `io2`) storage types.
   *
   * @public
   */
  IOPS?: number | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume. You must provide a value greater than or equal to `AllocatedStorage`.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). This setting applies only to the General Purpose SSD (`gp3`) storage type.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The new storage type for the additional storage volume.
   *
   * Valid Values: `GP3 | IO2`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Indicates whether to delete the additional storage volume. The value `true` schedules the volume for deletion. You can delete an additional storage volume only when it doesn't contain database files or other data.
   *
   * @public
   */
  SetForDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceMessage {
  /**
   * The identifier of DB instance to modify. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The new amount of storage in gibibytes (GiB) to allocate for the DB instance.
   *
   * For RDS for Db2, MariaDB, RDS for MySQL, RDS for Oracle, and RDS for PostgreSQL, the value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.
   *
   * For the valid values for allocated storage for each engine, see `CreateDBInstance`.
   *
   * Constraints:
   *
   * - When you increase the allocated storage for a DB instance that uses Provisioned IOPS (`gp3`, `io1`, or `io2` storage type), you must also specify the `Iops` parameter. You can use the current value for `Iops`.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The new compute and memory capacity of the DB instance, for example `db.m4.large`. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. For RDS Custom, see [DB instance class support for RDS Custom for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits.html#custom-reqs-limits.instances) and [DB instance class support for RDS Custom for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits-MS.html#custom-reqs-limits.instancesMS).
   *
   * If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless you specify `ApplyImmediately` in your request.
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - If you are modifying the DB instance class and upgrading the engine version at the same time, the currently running engine version must be supported on the specified DB instance class. Otherwise, the operation returns an error. In this case, first run the operation to upgrade the engine version, and then run it again to modify the DB instance class.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC. If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC. For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC) in the *Amazon RDS User Guide*.
   *
   * Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you enable `ApplyImmediately`.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Constraints:
   *
   * - If supplied, must match existing DB subnet group.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Constraints:
   *
   * - If supplied, must match existing DB security groups.
   *
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * A list of Amazon EC2 VPC security groups to associate with this DB instance. This change is asynchronously applied as soon as possible.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora (The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see `ModifyDBCluster`.)
   * - RDS Custom
   *
   * Constraints:
   *
   * - If supplied, must match existing VPC security group IDs.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the `PreferredMaintenanceWindow` setting for the DB instance. By default, this parameter is disabled.
   *
   * If this parameter is disabled, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to RebootDBInstance, or the next failure reboot. Review the table of parameters in [Modifying a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html) in the *Amazon RDS User Guide* to see the impact of enabling or disabling `ApplyImmediately` for each modified parameter and to determine when the changes are applied.
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * The new password for the master user.
   *
   * Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. Between the time of the request and the completion of the request, the `MasterUserPassword` element exists in the `PendingModifiedValues` element of the operation response.
   *
   * > **Note:** Amazon RDS API operations never return the password, so this operation provides a way to regain access to a primary instance user if the password is lost. This includes restoring privileges that might have been accidentally revoked.
   *
   * This setting doesn't apply to the following DB instances:
   *
   * - Amazon Aurora
   *
   *   The password for the master user is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   * - RDS Custom
   * - RDS for Oracle CDBs in the multi-tenant configuration
   *
   *   Specify the master password in `ModifyTenantDatabase` instead.
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Can't be specified if `ManageMasterUserPassword` is turned on.
   * - Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&amp;" (ampersand) or the "'" (single quotes) character.
   *
   * Length Constraints:
   *
   * - RDS for Db2 - Must contain from 8 to 255 characters.
   * - RDS for MariaDB - Must contain from 8 to 41 characters.
   * - RDS for Microsoft SQL Server - Must contain from 8 to 128 characters.
   * - RDS for MySQL - Must contain from 8 to 41 characters.
   * - RDS for Oracle - Must contain from 8 to 30 characters.
   * - RDS for PostgreSQL - Must contain from 8 to 128 characters.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The name of the DB parameter group to apply to the DB instance.
   *
   * Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. In this case, the DB instance isn't rebooted automatically, and the parameter changes aren't applied during the next maintenance window. However, if you modify dynamic parameters in the newly associated DB parameter group, these changes are applied immediately without a reboot.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be in the same DB parameter group family as the DB instance.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
   *
   * > **Note:** Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.
   *
   * These changes are applied during the next maintenance window unless the `ApplyImmediately` parameter is enabled for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously applied as soon as possible.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be a value from 0 to 35.
   * - Can't be set to 0 if the DB instance is a source to read replicas.
   * - Can't be set to 0 for an RDS Custom for Oracle DB instance.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod` parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter causes a reboot of the DB instance. If you change this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.
   *
   * For more information, see [Amazon RDS Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance) in the *Amazon RDS User Guide.*
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be in the format `ddd:hh24:mi-ddd:hh24:mi`.
   * - The day values must be `mon | tue | wed | thu | fri | sat | sun`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred backup window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * Specifies whether the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage. The change is applied during the next maintenance window unless the `ApplyImmediately` parameter is enabled for this request.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The version number of the database engine to upgrade to. Changing this parameter results in an outage and the change is applied during the next maintenance window unless the `ApplyImmediately` parameter is enabled for this request.
   *
   * For major version upgrades, if a nondefault DB parameter group is currently in use, a new DB parameter group in the DB parameter group family for the new engine version must be specified. The new DB parameter group can be the default for that DB parameter group family.
   *
   * If you specify only a major version, Amazon RDS updates the DB instance to the default minor version if the current minor version is lower. For information about valid engine versions, see `CreateDBInstance`, or call `DescribeDBEngineVersions`.
   *
   * If the instance that you're modifying is acting as a read replica, the engine version that you specify must be the same or higher than the version that the source DB instance or cluster is running.
   *
   * In RDS Custom for Oracle, this parameter is supported for read replicas only if they are in the `PATCH_DB_FAILURE` lifecycle.
   *
   * Constraints:
   *
   * - If you are upgrading the engine version and modifying the DB instance class at the same time, the currently running engine version must be supported on the specified DB instance class. Otherwise, the operation returns an error. In this case, first run the operation to upgrade the engine version, and then run it again to modify the DB instance class.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Specifies whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Constraints:
   *
   * - Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that's a different major version than the DB instance's current version.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
   * Specifies whether minor version upgrades are applied automatically to the DB instance during the maintenance window. An outage occurs when all the following conditions are met:
   *
   * - The automatic upgrade is enabled for the maintenance window.
   * - A newer minor version is available.
   * - RDS has enabled automatic patching for the engine version.
   *
   * If any of the preceding conditions isn't met, Amazon RDS applies the change as soon as possible and doesn't cause an outage.
   *
   * For an RDS Custom DB instance, don't enable this setting. Otherwise, the operation returns an error.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The license model for the DB instance.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - RDS for Db2 - `bring-your-own-license`
   * - RDS for MariaDB - `general-public-license`
   * - RDS for Microsoft SQL Server - `license-included | bring-your-own-media`
   * - RDS for MySQL - `general-public-license`
   * - RDS for Oracle - `bring-your-own-license | license-included`
   * - RDS for PostgreSQL - `postgresql-license`
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The new Provisioned IOPS (I/O operations per second) value for the RDS instance.
   *
   * Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the `ApplyImmediately` parameter is enabled for this request. If you are migrating from Provisioned IOPS to standard storage, set this value to 0. The DB instance will require a reboot for the change in storage type to take effect.
   *
   * If you choose to migrate your DB instance from using standard storage to Provisioned IOPS (io1), or from Provisioned IOPS to standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance.
   *
   * Constraints:
   *
   * - For RDS for MariaDB, RDS for MySQL, RDS for Oracle, and RDS for PostgreSQL - The value supplied must be at least 10% greater than the current value. Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.
   * - When you increase the Provisioned IOPS, you must also specify the `AllocatedStorage` parameter. You can use the current value for `AllocatedStorage`.
   *
   * Default: Uses existing setting
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput value for the DB instance.
   *
   * This setting applies only to the `gp3` storage type.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The option group to associate the DB instance with.
   *
   * Changing this parameter doesn't result in an outage, with one exception. If the parameter change results in an option group that enables OEM, it can cause a brief period, lasting less than a second, during which new connections are rejected but existing connections aren't interrupted.
   *
   * The change is applied during the next maintenance window unless the `ApplyImmediately` parameter is enabled for this request.
   *
   * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The new identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot occurs immediately if you enable `ApplyImmediately`, or will occur during the next maintenance window if you disable `ApplyImmediately`. This value is stored as a lowercase string.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  NewDBInstanceIdentifier?: string | undefined;

  /**
   * The storage type to associate with the DB instance.
   *
   * If you specify `io1`, `io2`, or `gp3` you must also include a value for the `Iops` parameter.
   *
   * If you choose to migrate your DB instance from using standard storage to gp2 (General Purpose SSD), gp3, or Provisioned IOPS (io1), or from these storage types to standard storage, the process can take time. The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases. During the migration, the DB instance is available for use, but might experience performance degradation. While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a read replica for the instance, and creating a DB snapshot of the instance.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
   *
   * Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp2`.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The password for the given ARN from the key store in order to access the device.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * The CA certificate identifier to use for the DB instance's server certificate.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The Active Directory directory ID to move the DB instance to. Specify `none` to remove the instance from its current domain. You must create the domain before this operation. Currently, you can create only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of an Active Directory domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `mymanagedADtest.mymanagedAD.mydomain`
   *
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * The Active Directory organizational unit for your DB instance to join.
   *
   * Constraints:
   *
   * - Must be in the distinguished name format.
   *
   * Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`
   *
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
   *
   * Example: `arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456`
   *
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
   *
   * Constraints:
   *
   * - Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
   *
   * Example: `123.124.125.126,234.235.236.237`
   *
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * Specifies whether to remove the DB instance from the Active Directory domain.
   *
   * @public
   */
  DisableDomain?: boolean | undefined;

  /**
   * Specifies whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags aren't copied.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting. For more information, see `ModifyDBCluster`.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify `0`.
   *
   * If `MonitoringRoleArn` is specified, set `MonitoringInterval` to a value other than `0`.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The port number on which the database accepts connections.
   *
   * The value of the `DBPortNumber` parameter must not match any of the port values specified for options in the option group for the DB instance.
   *
   * If you change the `DBPortNumber` value, your database restarts regardless of the value of the `ApplyImmediately` parameter.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values: `1150-65535`
   *
   * Default:
   *
   * - Amazon Aurora - `3306`
   * - RDS for Db2 - `50000`
   * - RDS for MariaDB - `3306`
   * - RDS for Microsoft SQL Server - `1433`
   * - RDS for MySQL - `3306`
   * - RDS for Oracle - `1521`
   * - RDS for PostgreSQL - `5432`
   *
   * Constraints:
   *
   * - For RDS for Microsoft SQL Server, the value can't be `1234`, `1434`, `3260`, `3343`, `3389`, `47001`, or `49152-49156`.
   *
   * @public
   */
  DBPortNumber?: number | undefined;

  /**
   * Specifies whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible and you connect from outside of the DB instance's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB instance, the endpoint resolves to the private IP address. Access to the DB instance is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB instance doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * `PubliclyAccessible` only applies to DB instances in a VPC. The DB instance must be part of a public subnet and `PubliclyAccessible` must be enabled for it to be publicly accessible.
   *
   * Changes to the `PubliclyAccessible` parameter are applied immediately regardless of the value of the `ApplyImmediately` parameter.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [To create an IAM role for Amazon RDS Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole) in the *Amazon RDS User Guide.*
   *
   * If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Default: `1`
   *
   * Valid Values: `0 - 15`
   *
   * @public
   */
  PromotionTier?: number | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * This setting doesn't apply to Amazon Aurora. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster.
   *
   * For more information about IAM database authentication, see [IAM Database Authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * Specifies the mode of Database Insights to enable for the DB instance.
   *
   * > **Note:** Aurora DB instances inherit this value from the DB cluster, so you can't change this value.
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Specifies whether to enable Performance Insights for the DB instance.
   *
   * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * The log types to be enabled for export to CloudWatch Logs for a specific DB instance.
   *
   * A change to the `CloudwatchLogsExportConfiguration` parameter is always applied to the DB instance immediately. Therefore, the `ApplyImmediately` parameter has no effect.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * The following values are valid for each DB engine:
   *
   * - Aurora MySQL - `audit | error | general | slowquery | iam-db-auth-error`
   * - Aurora PostgreSQL - `postgresql | iam-db-auth-error`
   * - RDS for MySQL - `error | general | slowquery | iam-db-auth-error`
   * - RDS for PostgreSQL - `postgresql | upgrade | iam-db-auth-error`
   *
   * For more information about exporting CloudWatch Logs for Amazon RDS, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * For more information about exporting CloudWatch Logs for Amazon Aurora, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Specifies whether the DB instance class of the DB instance uses its default processor features.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `ModifyDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
   *
   * By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
   *
   * > **Important:** Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
   *
   * If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:
   *
   * - For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
   * - For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  CertificateRotationRestart?: boolean | undefined;

  /**
   * The open mode of a replica database.
   *
   * This parameter is only supported for Db2 DB instances and Oracle DB instances.
   *
   * - **Db2**
   *
   *   Standby DB replicas are included in Db2 Advanced Edition (AE), Db2 Community Edition (CE), and Db2 Standard Edition (SE). The main use case for standby replicas is cross-Region disaster recovery. Because it doesn't accept user connections, a standby replica can't serve a read-only workload.
   *
   *   You can create a combination of standby and read-only DB replicas for the same primary DB instance. For more information, see [Working with replicas for Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-replication.html) in the *Amazon RDS User Guide*.
   *
   *   To create standby DB replicas for RDS for Db2, set this parameter to `mounted`.
   *
   * - **Oracle**
   *
   *   Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload.
   *
   *   You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see [Working with read replicas for Amazon RDS for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
   *
   *   For RDS Custom, you must specify this parameter and set it to `mounted`. The value won't be set by default. After replica creation, you can manage the open mode manually.
   *
   * @public
   */
  ReplicaMode?: ReplicaMode | undefined;

  /**
   * The automation mode of the RDS Custom DB instance. If `full`, the DB instance automates monitoring and instance recovery. If `all paused`, the instance pauses automation for the duration set by `ResumeFullAutomationModeMinutes`.
   *
   * @public
   */
  AutomationMode?: AutomationMode | undefined;

  /**
   * The number of minutes to pause the automation. When the time period ends, RDS Custom resumes full automation.
   *
   * Default: `60`
   *
   * Constraints:
   *
   * - Must be at least 60.
   * - Must be no more than 1,440.
   *
   * @public
   */
  ResumeFullAutomationModeMinutes?: number | undefined;

  /**
   * Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.
   *
   * A *CoIP* provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network.
   *
   * For more information about RDS on Outposts, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * For more information about CoIPs, see [Customer-owned IP addresses](https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the *Amazon Web Services Outposts User Guide*.
   *
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * Valid Values: `IPV4 | DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  AwsBackupRecoveryPointArn?: string | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * If the DB instance doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management. In this case, you can't specify `MasterUserPassword`.
   *
   * If the DB instance already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify `MasterUserPassword`. In this case, Amazon RDS deletes the secret and uses the new password for the master user specified by `MasterUserPassword`.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   * - Can't specify for RDS for Oracle CDB instances in the multi-tenant configuration. Use `ModifyTenantDatabase` instead.
   * - Can't specify the parameters `ManageMasterUserPassword` and `MultiTenant` in the same operation.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The secret value contains the updated password.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - You must apply the change immediately when rotating the master user password.
   *
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if both of the following conditions are met:
   *
   * - The DB instance doesn't manage the master user password in Amazon Web Services Secrets Manager.
   *
   *   If the DB instance already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key used to encrypt the secret.
   * - You are turning on `ManageMasterUserPassword` to manage the master user password in Amazon Web Services Secrets Manager.
   *
   *   If you are turning on `ManageMasterUserPassword` and don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * Specifies whether the to convert your DB instance from the single-tenant conﬁguration to the multi-tenant conﬁguration. This parameter is supported only for RDS for Oracle CDB instances.
   *
   * During the conversion, RDS creates an initial tenant database and associates the DB name, master user name, character set, and national character set metadata with this database. The tags associated with the instance also propagate to the initial tenant database. You can add more tenant databases to your DB instance by using the `CreateTenantDatabase` operation.
   *
   * > **Important:** The conversion to the multi-tenant configuration is permanent and irreversible, so you can't later convert back to the single-tenant configuration. When you specify this parameter, you must also specify `ApplyImmediately`.
   *
   * @public
   */
  MultiTenant?: boolean | undefined;

  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The target Oracle DB engine when you convert a non-CDB to a CDB. This intermediate step is necessary to upgrade an Oracle Database 19c non-CDB to an Oracle Database 21c CDB.
   *
   * Note the following requirements:
   *
   * - Make sure that you specify `oracle-ee-cdb` or `oracle-se2-cdb`.
   * - Make sure that your DB engine runs Oracle Database 19c with an April 2021 or later RU.
   *
   * Note the following limitations:
   *
   * - You can't convert a CDB to a non-CDB.
   * - You can't convert a replica database.
   * - You can't convert a non-CDB to a CDB and upgrade the engine version in the same command.
   * - You can't convert the existing custom parameter or option group when it has options or parameters that are permanent or persistent. In this situation, the DB instance reverts to the default option and parameter group. To avoid reverting to the default, specify a new parameter group with `--db-parameter-group-name` and a new option group with `--option-group-name`.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * A list of additional storage volumes to modify or delete for the DB instance. You can create up to 3 additional storage volumes. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
   *
   * @public
   */
  AdditionalStorageVolumes?: ModifyAdditionalStorageVolume[] | undefined;

  /**
   * The identifier or the name of the DB capacity reservation for the DB instance to use. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name. After the modification completes, the DB instance uses reserved capacity from this reservation.
   *
   * You can't change the DB capacity reservation of a DB instance on its own. A request that changes the reservation must also change the DB instance class, the Multi-AZ setting, the license model, or the engine. Therefore, this request always changes the configuration of the DB instance.
   *
   * If the DB instance already uses the reservation that you specify, this requirement doesn't apply. You can then change another setting, such as the Multi-AZ setting, and keep the reservation.
   *
   * For a DB instance that uses no reservation, change `DBInstanceClass` to the DB instance class that the reservation reserves. A reservation reserves capacity for one DB instance class, so that change moves the DB instance onto the reserved capacity. That change also resizes the DB instance, which interrupts it.
   *
   * If the DB instance already runs the DB instance class that the reservation reserves, change `MultiAZ` or `LicenseModel` instead. Only RDS for Oracle and RDS for Microsoft SQL Server accept a change of license model, so `MultiAZ` is the remaining choice for every other engine.
   *
   * > **Important:**
   * >
   * > If you don't specify this parameter, Amazon RDS moves the DB instance to unreserved capacity, and it releases the reserved capacity that the DB instance holds. A request that changes the DB instance class, the Multi-AZ setting, the license model, or the engine moves the DB instance to different hardware, and Amazon RDS places the DB instance on unreserved capacity. Therefore, to keep the DB instance on reserved capacity, specify this parameter in every request that changes any of those settings.
   * >
   * > The DB instance keeps its current reservation until Amazon RDS applies the modification. Until then, the `DBCapacityReservationIdentifier` field of the DB instance still reports that reservation, and `PendingModifiedValues` reports no reservation. Amazon RDS releases the reserved capacity when it moves the DB instance.
   *
   * Constraints:
   *
   * - If the request changes which DB capacity reservation the DB instance uses, it must also set a new value for `DBInstanceClass`, `MultiAZ`, `LicenseModel`, or `Engine`. The new value must differ from the current value. The only engine change that `ModifyDBInstance` supports is a conversion to the CDB architecture. Repeating the current value doesn't satisfy this requirement. This requirement applies both when the DB instance uses no reservation, and when it moves to a different reservation.
   * - The reservation must reserve capacity for the DB instance class that the DB instance uses after the modification, and for the database engine of the DB instance. Therefore, when the request changes `DBInstanceClass`, the reservation reserves capacity for a DB instance class that the DB instance doesn't use today.
   * - The reservation must be in the `active` state, and it must not be past its end date.
   * - The reservation must have available capacity in each Availability Zone that the DB instance uses after the modification.
   * - The reservation must cover the Availability Zone of the DB instance, except when the request changes the DB instance from Multi-AZ to Single-AZ.
   * - For a Multi-AZ DB instance, the reservation must cover two or more Availability Zones. A Multi-AZ DB instance uses one unit of reserved capacity in each of two Availability Zones.
   * - If the DB instance is already Multi-AZ, the reservation must cover both of its Availability Zones. If the request converts the DB instance to Multi-AZ, the reservation must cover the current Availability Zone of the DB instance, and Amazon RDS chooses the second Availability Zone from the reservation.
   * - If the reservation reserves capacity for a specific license model, the license model of the DB instance must match it. Amazon RDS checks the license model only when the request specifies `LicenseModel`.
   * - You can't specify this parameter together with a change to `DBSubnetGroupName`.
   * - You can't specify this parameter together with a change to both `DBInstanceClass` and `LicenseModel`. Submit those changes as two separate requests.
   * - Can't be specified together with a change to `DBInstanceClass` when the request also changes the DB instance from Multi-AZ to Single-AZ.
   * - When the request changes the DB instance from Multi-AZ to Single-AZ, the reservation must cover either the primary or the secondary Availability Zone of the DB instance. Amazon RDS keeps the DB instance in its primary Availability Zone, and it removes the standby replica. Therefore, the primary Availability Zone keeps its unit of reserved capacity, and the secondary Availability Zone releases its unit.
   * - Can't be specified together with `LicenseModel` while a modification of the DB instance class or the Multi-AZ setting is pending.
   * - Can't be specified together with `DBInstanceClass` or `MultiAZ` while a modification of the license model is pending.
   * - When a modification is already pending, the reservation must reserve capacity for the DB instance as it will be after both the pending modification and the requested modification complete.
   * - The DB subnet group must be in a VPC with default tenancy.
   * - The DB subnet group must cover each Availability Zone that the DB instance uses.
   * - Isn't supported for an RDS on Outposts DB instance.
   * - If the reservation expires within one week, you must also enable `ApplyImmediately`. Otherwise, choose a reservation with a later end date.
   * - Amazon RDS holds a unit of reserved capacity for the DB instance when it accepts the request, even when the modification waits for the maintenance window.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies the authentication type for the master user. With IAM master user authentication, you can change the master DB user to use IAM database authentication.
   *
   * You can specify one of the following values:
   *
   * - `password` - Use standard database authentication with a password.
   * - `iam-db-auth` - Use IAM database authentication for the master user.
   *
   * This option is only valid for RDS for PostgreSQL and Aurora PostgreSQL engines.
   *
   * @public
   */
  MasterUserAuthenticationType?: MasterUserAuthenticationType | undefined;

  /**
   * The lifecycle type for this DB instance.
   *
   * This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
   *
   * You can use this setting to enroll your DB instance into Amazon RDS Extended Support or to opt out. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBInstanceResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * Contains the result of a successful invocation of the `ModifyDBParameterGroup` or `ResetDBParameterGroup` operation.
 *
 * @public
 */
export interface DBParameterGroupNameMessage {
  /**
   * The name of the DB parameter group.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing `DBParameterGroup`.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * An array of parameter names, values, and the application methods for the parameter update. At least one parameter name, value, and application method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request.
   *
   * Valid Values (for the application method): `immediate | pending-reboot`
   *
   * You can use the `immediate` value with dynamic parameters only. You can use the `pending-reboot` value for both dynamic and static parameters.
   *
   * When the application method is `immediate`, changes to dynamic parameters are applied immediately to the DB instances associated with the parameter group.
   *
   * When the application method is `pending-reboot`, changes to dynamic and static parameters are applied after a reboot without failover to the DB instances associated with the parameter group.
   *
   * > **Note:** You can't use `pending-reboot` with dynamic parameters on RDS for SQL Server DB instances. Use `immediate`.
   *
   * For more information on modifying DB parameters, see [Working with DB parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyRequest {
  /**
   * The identifier for the `DBProxy` to modify.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The new identifier for the `DBProxy`. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  NewDBProxyName?: string | undefined;

  /**
   * The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are `NONE` and `IAM_AUTH`. When set to `IAM_AUTH`, the proxy uses end-to-end IAM authentication to connect to the database.
   *
   * @public
   */
  DefaultAuthScheme?: DefaultAuthScheme | undefined;

  /**
   * The new authentication settings for the `DBProxy`.
   *
   * @public
   */
  Auth?: UserAuthConfig[] | undefined;

  /**
   * Whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't use TLS.
   *
   * @public
   */
  RequireTLS?: boolean | undefined;

  /**
   * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
   *
   * @public
   */
  IdleClientTimeout?: number | undefined;

  /**
   * Specifies whether the proxy logs detailed connection and query information. When you enable `DebugLogging`, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.
   *
   * @public
   */
  DebugLogging?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The new list of security groups for the `DBProxy`.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyResponse {
  /**
   * The `DBProxy` object representing the new settings for the proxy.
   *
   * @public
   */
  DBProxy?: DBProxy | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyEndpointRequest {
  /**
   * The name of the DB proxy sociated with the DB proxy endpoint that you want to modify.
   *
   * @public
   */
  DBProxyEndpointName: string | undefined;

  /**
   * The new identifier for the `DBProxyEndpoint`. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  NewDBProxyEndpointName?: string | undefined;

  /**
   * The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint uses a different VPC than the original proxy, you also specify a different set of security group IDs than for the original proxy.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyEndpointResponse {
  /**
   * The `DBProxyEndpoint` object representing the new settings for the DB proxy endpoint.
   *
   * @public
   */
  DBProxyEndpoint?: DBProxyEndpoint | undefined;
}

/**
 * Specifies the settings that control the size and behavior of the connection pool associated with a `DBProxyTargetGroup`.
 *
 * @public
 */
export interface ConnectionPoolConfiguration {
  /**
   * The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *
   * If you specify `MaxIdleConnectionsPercent`, then you must also include a value for this parameter.
   *
   * Default: `10` for RDS for Microsoft SQL Server, and `100` for all other engines
   *
   * Constraints:
   *
   * - Must be between 1 and 100.
   *
   * @public
   */
  MaxConnectionsPercent?: number | undefined;

  /**
   * A value that controls how actively the proxy closes idle database connections in the connection pool. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group. With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.
   *
   * If you specify this parameter, then you must also include a value for `MaxConnectionsPercent`.
   *
   * Default: The default value is half of the value of `MaxConnectionsPercent`. For example, if `MaxConnectionsPercent` is 80, then the default value of `MaxIdleConnectionsPercent` is 40. If the value of `MaxConnectionsPercent` isn't specified, then for SQL Server, `MaxIdleConnectionsPercent` is `5`, and for all other engines, the default is `50`.
   *
   * Constraints:
   *
   * - Must be between 0 and the value of `MaxConnectionsPercent`.
   *
   * @public
   */
  MaxIdleConnectionsPercent?: number | undefined;

  /**
   * The number of seconds for a proxy to wait for a connection to become available in the connection pool. This setting only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions.
   *
   * Default: `120`
   *
   * Constraints:
   *
   * - Must be between 0 and 300.
   *
   * @public
   */
  ConnectionBorrowTimeout?: number | undefined;

  /**
   * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. Including an item in the list exempts that class of SQL operations from the pinning behavior.
   *
   * Default: no session pinning filters
   *
   * @public
   */
  SessionPinningFilters?: string[] | undefined;

  /**
   * Add an initialization query, or modify the current one. You can specify one or more SQL statements for the proxy to run when opening each new database connection. The setting is typically used with `SET` statements to make sure that each connection has identical settings. Make sure the query added here is valid. This is an optional field, so you can choose to leave it empty. For including multiple variables in a single SET statement, use a comma separator.
   *
   * For example: `SET variable1=value1, variable2=value2`
   *
   * Default: no initialization query
   *
   * > **Important:** Since you can access initialization query as part of target group configuration, it is not protected by authentication or cryptographic methods. Anyone with access to view or manage your proxy target group configuration can view the initialization query. You should not add sensitive data, such as passwords or long-lived encryption keys, to this option.
   *
   * @public
   */
  InitQuery?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyTargetGroupRequest {
  /**
   * The name of the target group to modify.
   *
   * @public
   */
  TargetGroupName: string | undefined;

  /**
   * The name of the proxy.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The settings that determine the size and behavior of the connection pool for the target group.
   *
   * @public
   */
  ConnectionPoolConfig?: ConnectionPoolConfiguration | undefined;

  /**
   * The new name for the modified `DBProxyTarget`. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
   *
   * You can't rename the `default` target group.
   *
   * @public
   */
  NewName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBProxyTargetGroupResponse {
  /**
   * The settings of the modified `DBProxyTarget`.
   *
   * @public
   */
  DBProxyTargetGroup?: DBProxyTargetGroup | undefined;
}

/**
 * @public
 */
export interface DBRecommendationMessage {
  /**
   * The recommendation for your DB instances, DB clusters, and DB parameter groups.
   *
   * @public
   */
  DBRecommendation?: DBRecommendation | undefined;
}

/**
 * The recommended status to update for the specified recommendation action ID.
 *
 * @public
 */
export interface RecommendedActionUpdate {
  /**
   * A unique identifier of the updated recommendation action.
   *
   * @public
   */
  ActionId: string | undefined;

  /**
   * The status of the updated recommendation action.
   *
   * - `applied`
   * - `scheduled`
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBRecommendationMessage {
  /**
   * The identifier of the recommendation to update.
   *
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * The language of the modified recommendation.
   *
   * @public
   */
  Locale?: string | undefined;

  /**
   * The recommendation status to update.
   *
   * Valid values:
   *
   * - active
   * - dismissed
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The list of recommended action status to update. You can update multiple recommended actions at one time.
   *
   * @public
   */
  RecommendedActionUpdates?: RecommendedActionUpdate[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBShardGroupMessage {
  /**
   * The name of the DB shard group to modify.
   *
   * @public
   */
  DBShardGroupIdentifier: string | undefined;

  /**
   * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
   *
   * @public
   */
  MaxACU?: number | undefined;

  /**
   * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
   *
   * @public
   */
  MinACU?: number | undefined;

  /**
   * Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:
   *
   * - 0 - Creates a DB shard group without a standby DB shard group. This is the default value.
   * - 1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ).
   * - 2 - Creates a DB shard group with two standby DB shard groups in two different AZs.
   *
   * @public
   */
  ComputeRedundancy?: number | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotMessage {
  /**
   * The identifier of the DB snapshot to modify.
   *
   * @public
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * The engine version to upgrade the DB snapshot to.
   *
   * The following are the database engines and engine versions that are available when you upgrade a DB snapshot.
   *
   * **MariaDB**
   *
   * For the list of engine versions that are available for upgrading a DB snapshot, see [Upgrading a MariaDB DB snapshot engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mariadb-upgrade-snapshot.html) in the *Amazon RDS User Guide.*
   *
   * **MySQL**
   *
   * For the list of engine versions that are available for upgrading a DB snapshot, see [Upgrading a MySQL DB snapshot engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-upgrade-snapshot.html) in the *Amazon RDS User Guide.*
   *
   * **Oracle**
   *
   * - `21.0.0.0.ru-2025-04.rur-2025-04.r1` (supported for 21.0.0.0.ru-2022-01.rur-2022-01.r1, 21.0.0.0.ru-2022-04.rur-2022-04.r1, 21.0.0.0.ru-2022-07.rur-2022-07.r1, 21.0.0.0.ru-2022-10.rur-2022-10.r1, 21.0.0.0.ru-2023-01.rur-2023-01.r1 and 21.0.0.0.ru-2023-01.rur-2023-01.r2 DB snapshots)
   * - `19.0.0.0.ru-2025-04.rur-2025-04.r1` (supported for 19.0.0.0.ru-2019-07.rur-2019-07.r1, 19.0.0.0.ru-2019-10.rur-2019-10.r1 and 0.0.0.ru-2020-01.rur-2020-01.r1 DB snapshots)
   * - `19.0.0.0.ru-2022-01.rur-2022-01.r1` (supported for 12.2.0.1 DB snapshots)
   * - `19.0.0.0.ru-2022-07.rur-2022-07.r1` (supported for 12.1.0.2 DB snapshots)
   * - `12.1.0.2.v8` (supported for 12.1.0.1 DB snapshots)
   * - `11.2.0.4.v12` (supported for 11.2.0.2 DB snapshots)
   * - `11.2.0.4.v11` (supported for 11.2.0.3 DB snapshots)
   *
   * **PostgreSQL**
   *
   * For the list of engine versions that are available for upgrading a DB snapshot, see [Upgrading a PostgreSQL DB snapshot engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBSnapshot.PostgreSQL.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The option group to identify with the upgraded DB snapshot.
   *
   * You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance. For more information, see [Option group considerations](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  OptionGroupName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotResult {
  /**
   * Contains the details of an Amazon RDS DB snapshot.
   *
   * This data type is used as a response element in the `DescribeDBSnapshots` action.
   *
   * @public
   */
  DBSnapshot?: DBSnapshot | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotAttributeMessage {
  /**
   * The identifier for the DB snapshot to modify the attributes for.
   *
   * @public
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * The name of the DB snapshot attribute to modify.
   *
   * To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB snapshot, set this value to `restore`.
   *
   * > **Note:** To view the list of attributes available to modify, use the DescribeDBSnapshotAttributes API operation.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * A list of DB snapshot attributes to add to the attribute specified by `AttributeName`.
   *
   * To authorize other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account IDs, or `all` to make the manual DB snapshot restorable by any Amazon Web Services account. Do not add the `all` value for any manual DB snapshots that contain private information that you don't want available to all Amazon Web Services accounts.
   *
   * @public
   */
  ValuesToAdd?: string[] | undefined;

  /**
   * A list of DB snapshot attributes to remove from the attribute specified by `AttributeName`.
   *
   * To remove authorization for other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account identifiers, or `all` to remove authorization for any Amazon Web Services account to copy or restore the DB snapshot. If you specify `all`, an Amazon Web Services account whose account ID is explicitly added to the `restore` attribute can still copy or restore the manual DB snapshot.
   *
   * @public
   */
  ValuesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSnapshotAttributeResult {
  /**
   * Contains the results of a successful call to the `DescribeDBSnapshotAttributes` API action.
   *
   * Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the `ModifyDBSnapshotAttribute` API action.
   *
   * @public
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.
   *
   * Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName: string | undefined;

  /**
   * The description for the DB subnet group.
   *
   * @public
   */
  DBSubnetGroupDescription?: string | undefined;

  /**
   * The EC2 subnet IDs for the DB subnet group.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyDBSubnetGroupResult {
  /**
   * Contains the details of an Amazon RDS DB subnet group.
   *
   * This data type is used as a response element in the `DescribeDBSubnetGroups` action.
   *
   * @public
   */
  DBSubnetGroup?: DBSubnetGroup | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * The name of the RDS event notification subscription.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. For RDS Proxy events, specify `db-proxy`. If this value isn't specified, all events are returned.
   *
   * Valid Values:`db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment`
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A list of event categories for a source type (`SourceType`) that you want to subscribe to. You can see a list of the categories for a given source type in [Events](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html) in the *Amazon RDS User Guide* or by using the `DescribeEventCategories` operation.
   *
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * Specifies whether to activate the subscription.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * Contains the results of a successful invocation of the `DescribeEventSubscriptions` action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterMessage {
  /**
   * The cluster identifier for the global cluster to modify. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The new cluster identifier for the global database cluster. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - The first character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster2`
   *
   * @public
   */
  NewGlobalClusterIdentifier?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the global database cluster. The global database cluster can't be deleted when deletion protection is enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The version number of the database engine to which you want to upgrade.
   *
   * To list all of the available engine versions for `aurora-mysql` (for MySQL-based Aurora global databases), use the following command:
   *
   * ``aws rds describe-db-engine-versions --engine aurora-mysql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'``
   *
   * To list all of the available engine versions for `aurora-postgresql` (for PostgreSQL-based Aurora global databases), use the following command:
   *
   * ``aws rds describe-db-engine-versions --engine aurora-postgresql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'``
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Specifies whether to allow major version upgrades.
   *
   * Constraints: Must be enabled if you specify a value for the `EngineVersion` parameter that's a different major version than the global cluster's current version.
   *
   * If you upgrade the major version of a global database, the cluster and DB instance parameter groups are set to the default parameter groups for the new version. Apply any custom parameter groups after completing the upgrade.
   *
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyGlobalClusterResult {
  /**
   * A data type representing an Aurora global database.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationMessage {
  /**
   * The unique identifier of the integration to modify.
   *
   * @public
   */
  IntegrationIdentifier: string | undefined;

  /**
   * A new name for the integration.
   *
   * @public
   */
  IntegrationName?: string | undefined;

  /**
   * A new data filter for the integration. For more information, see [Data filtering for Aurora zero-ETL integrations with Amazon Redshift](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Zero_ETL_Filtering.html) or [Data filtering for Amazon RDS zero-ETL integrations with Amazon Redshift](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/zero-etl.filtering.html).
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * A new description for the integration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * A list of all available options for an option group.
 *
 * @public
 */
export interface OptionConfiguration {
  /**
   * The configuration of options to include in a group.
   *
   * @public
   */
  OptionName: string | undefined;

  /**
   * The optional port for the option.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The version for the option.
   *
   * @public
   */
  OptionVersion?: string | undefined;

  /**
   * A list of DB security groups used for this option.
   *
   * @public
   */
  DBSecurityGroupMemberships?: string[] | undefined;

  /**
   * A list of VPC security group names used for this option.
   *
   * @public
   */
  VpcSecurityGroupMemberships?: string[] | undefined;

  /**
   * The option settings to include in an option group.
   *
   * @public
   */
  OptionSettings?: OptionSetting[] | undefined;
}

/**
 * @public
 */
export interface ModifyOptionGroupMessage {
  /**
   * The name of the option group to be modified.
   *
   * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance
   *
   * @public
   */
  OptionGroupName: string | undefined;

  /**
   * Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.
   *
   * @public
   */
  OptionsToInclude?: OptionConfiguration[] | undefined;

  /**
   * Options in this list are removed from the option group.
   *
   * @public
   */
  OptionsToRemove?: string[] | undefined;

  /**
   * Specifies whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyOptionGroupResult {
  /**
   * @public
   */
  OptionGroup?: OptionGroup | undefined;
}

/**
 * @public
 */
export interface ModifyTenantDatabaseMessage {
  /**
   * The identifier of the DB instance that contains the tenant database that you are modifying. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The user-supplied name of the tenant database that you want to modify. This parameter isn’t case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing tenant database.
   *
   * @public
   */
  TenantDBName: string | undefined;

  /**
   * The new password for the master user of the specified tenant database in your DB instance.
   *
   * > **Note:** Amazon RDS operations never return the password, so this action provides a way to regain access to a tenant database user if the password is lost. This includes restoring privileges that might have been accidentally revoked.
   *
   * Constraints:
   *
   * - Can include any printable ASCII character except `/`, `"` (double quote), `@`, `&` (ampersand), and `'` (single quote).
   *
   * Length constraints:
   *
   * - Must contain between 8 and 30 characters.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * The new name of the tenant database when renaming a tenant database. This parameter isn’t case-sensitive.
   *
   * Constraints:
   *
   * - Can't be the string null or any other reserved word.
   * - Can't be longer than 8 characters.
   *
   * @public
   */
  NewTenantDBName?: string | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * If the tenant database doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management. In this case, you can't specify `MasterUserPassword`.
   *
   * If the tenant database already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify `MasterUserPassword`. In this case, Amazon RDS deletes the secret and uses the new password for the master user specified by `MasterUserPassword`.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The secret value contains the updated password.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - You must apply the change immediately when rotating the master user password.
   *
   * @public
   */
  RotateMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if both of the following conditions are met:
   *
   * - The tenant database doesn't manage the master user password in Amazon Web Services Secrets Manager.
   *
   *   If the tenant database already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key used to encrypt the secret.
   * - You're turning on `ManageMasterUserPassword` to manage the master user password in Amazon Web Services Secrets Manager.
   *
   *   If you're turning on `ManageMasterUserPassword` and don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a self-managed KMS key.
   *
   * The Amazon Web Services KMS key identifier is any of the following:
   *
   * - Key ARN
   * - Key ID
   * - Alias ARN
   * - Alias name for the KMS key
   *
   * To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * A default KMS key exists for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyTenantDatabaseResult {
  /**
   * A tenant database in the DB instance. This data type is an element in the response to the `DescribeTenantDatabases` action.
   *
   * @public
   */
  TenantDatabase?: TenantDatabase | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaMessage {
  /**
   * The DB instance identifier. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing read replica DB instance.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
   *
   * Default: 1
   *
   * Constraints:
   *
   * - Must be a value from 0 to 35.
   * - Can't be set to 0 if the DB instance is a source to read replicas.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To see the time blocks available, see [Adjusting the Preferred Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * The identifier of the DB cluster read replica to promote. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB cluster read replica.
   *
   * Example: `my-cluster-replica1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface PromoteReadReplicaDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedDBInstancesOfferingMessage {
  /**
   * The ID of the Reserved DB instance offering to purchase.
   *
   * Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706
   *
   * @public
   */
  ReservedDBInstancesOfferingId: string | undefined;

  /**
   * Customer-specified identifier to track this reservation.
   *
   * Example: myreservationID
   *
   * @public
   */
  ReservedDBInstanceId?: string | undefined;

  /**
   * The number of instances to reserve.
   *
   * Default: `1`
   *
   * @public
   */
  DBInstanceCount?: number | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedDBInstancesOfferingResult {
  /**
   * This data type is used as a response element in the `DescribeReservedDBInstances` and `PurchaseReservedDBInstancesOffering` actions.
   *
   * @public
   */
  ReservedDBInstance?: ReservedDBInstance | undefined;
}

/**
 * @public
 */
export interface RebootDBClusterMessage {
  /**
   * The DB cluster identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBCluster.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RebootDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceMessage {
  /**
   * The DB instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBInstance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * Specifies whether the reboot is conducted through a Multi-AZ failover.
   *
   * Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.
   *
   * @public
   */
  ForceFailover?: boolean | undefined;
}

/**
 * @public
 */
export interface RebootDBInstanceResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RebootDBShardGroupMessage {
  /**
   * The name of the DB shard group to reboot.
   *
   * @public
   */
  DBShardGroupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RegisterDBProxyTargetsRequest {
  /**
   * The identifier of the `DBProxy` that is associated with the `DBProxyTargetGroup`.
   *
   * @public
   */
  DBProxyName: string | undefined;

  /**
   * The identifier of the `DBProxyTargetGroup`.
   *
   * @public
   */
  TargetGroupName?: string | undefined;

  /**
   * One or more DB instance identifiers.
   *
   * @public
   */
  DBInstanceIdentifiers?: string[] | undefined;

  /**
   * One or more DB cluster identifiers.
   *
   * @public
   */
  DBClusterIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterDBProxyTargetsResponse {
  /**
   * One or more `DBProxyTarget` objects that are created when you register targets with a target group.
   *
   * @public
   */
  DBProxyTargets?: DBProxyTarget[] | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterMessage {
  /**
   * The cluster identifier to detach from the Aurora global database cluster.
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.
   *
   * @public
   */
  DbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveFromGlobalClusterResult {
  /**
   * A data type representing an Aurora global database.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromDBClusterMessage {
  /**
   * The name of the DB cluster to disassociate the IAM role from.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example `arn:aws:iam::123456789012:role/AuroraAccessRole`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature for the DB cluster that the IAM role is to be disassociated from. For information about supported feature names, see DBEngineVersion.
   *
   * @public
   */
  FeatureName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromDBInstanceMessage {
  /**
   * The name of the DB instance to disassociate the IAM role from.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance, for example, `arn:aws:iam::123456789012:role/AccessRole`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the feature for the DB instance that the IAM role is to be disassociated from. For information about supported feature names, see `DBEngineVersion`.
   *
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * The name of the RDS event notification subscription you want to remove a source identifier from.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * The source identifier to be removed from the subscription, such as the **DB instance identifier** for a DB instance or the name of a security group.
   *
   * @public
   */
  SourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * Contains the results of a successful invocation of the `DescribeEventSubscriptions` action.
   *
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an ARN for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  ResourceName: string | undefined;

  /**
   * The tag key (name) of the tag to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * The name of the DB cluster parameter group to reset.
   *
   * @public
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * Specifies whether to reset all parameters in the DB cluster parameter group to their default values. You can't use this parameter if there is a list of parameter names specified for the `Parameters` parameter.
   *
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the `ResetAllParameters` parameter is enabled.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ResetDBParameterGroupMessage {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   *
   * - Must match the name of an existing `DBParameterGroup`.
   *
   * @public
   */
  DBParameterGroupName: string | undefined;

  /**
   * Specifies whether to reset all parameters in the DB parameter group to default values. By default, all parameters in the DB parameter group are reset to default values.
   *
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * To reset the entire DB parameter group, specify the `DBParameterGroup` name and `ResetAllParameters` parameters. To reset specific parameters, provide a list of the following: `ParameterName` and `ApplyMethod`. A maximum of 20 parameters can be modified in a single request.
   *
   * **MySQL**
   *
   * Valid Values (for Apply method): `immediate` | `pending-reboot`
   *
   * You can use the immediate value with dynamic parameters only. You can use the `pending-reboot` value for both dynamic and static parameters, and changes are applied when DB instance reboots.
   *
   * **MariaDB**
   *
   * Valid Values (for Apply method): `immediate` | `pending-reboot`
   *
   * You can use the immediate value with dynamic parameters only. You can use the `pending-reboot` value for both dynamic and static parameters, and changes are applied when DB instance reboots.
   *
   * **Oracle**
   *
   * Valid Values (for Apply method): `pending-reboot`
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromS3Message {
  /**
   * A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.
   *
   * Default: 1
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.
   *
   * @public
   */
  CharacterSetName?: string | undefined;

  /**
   * The database name for the restored DB cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-cluster1`
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The name of the DB cluster parameter group to associate with the restored DB cluster. If this argument is omitted, the default parameter group for the engine version is used.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DBClusterParameterGroup.
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with the restored DB cluster.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * A DB subnet group to associate with the restored DB cluster.
   *
   * Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The name of the database engine to be used for this DB cluster.
   *
   * Valid Values: `aurora-mysql` (for Aurora MySQL)
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version number of the database engine to use.
   *
   * To list all of the available engine versions for `aurora-mysql` (Aurora MySQL), use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * **Aurora MySQL**
   *
   * Examples: `5.7.mysql_aurora.2.12.0`, `8.0.mysql_aurora.3.04.0`
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the instances in the restored DB cluster accept connections.
   *
   * Default: `3306`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the master user for the restored DB cluster.
   *
   * Constraints:
   *
   * - Must be 1 to 16 letters or numbers.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   * @public
   */
  MasterUsername: string | undefined;

  /**
   * The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".
   *
   * Constraints:
   *
   * - Must contain from 8 to 41 characters.
   * - Can't be specified if `ManageMasterUserPassword` is turned on.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * A value that indicates that the restored DB cluster should be associated with the specified option group.
   *
   * Permanent options can't be removed from an option group. An option group can't be removed from a DB cluster once it is associated with a DB cluster.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide*.
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see [Adjusting the Preferred Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide*.
   *
   * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   *
   * Constraints: Minimum 30-minute window.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the restored DB cluster is encrypted.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If the StorageEncrypted parameter is enabled, and you do not specify a value for the `KmsKeyId` parameter, then Amazon RDS will use your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The identifier for the database engine that was backed up to create the files stored in the Amazon S3 bucket.
   *
   * Valid Values: `mysql`
   *
   * @public
   */
  SourceEngine: string | undefined;

  /**
   * The version of the database that the backup files were created from.
   *
   * MySQL versions 5.7 and 8.0 are supported.
   *
   * Example: `5.7.40`, `8.0.28`
   *
   * @public
   */
  SourceEngineVersion: string | undefined;

  /**
   * The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster. If you do not specify a **SourceS3Prefix** value, then the Amazon Aurora DB cluster is created by using all of the files in the Amazon S3 bucket.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that authorizes Amazon RDS to access the Amazon S3 bucket on your behalf.
   *
   * @public
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to 0.
   *
   * > **Note:** Currently, Backtrack is only supported for Aurora MySQL DB clusters.
   *
   * Default: 0
   *
   * Constraints:
   *
   * - If specified, this value must be set to a number from 0 to 259,200 (72 hours).
   *
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used.
   *
   * **Aurora MySQL**
   *
   * Possible values are `audit`, `error`, `general`, `instance`, `slowquery`, and `iam-db-auth-error`.
   *
   * **Aurora PostgreSQL**
   *
   * Possible value are `instance`, `postgresql`, and `iam-db-auth-error`.
   *
   * For more information about exporting CloudWatch Logs for Amazon RDS, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * For more information about exporting CloudWatch Logs for Amazon Aurora, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * Specifies whether to enable deletion protection for the DB cluster. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled.
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * Specify the Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation.
   *
   * For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * Specify the name of the IAM role to be used when making API calls to the Directory Service.
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * Specifies the storage type to be associated with the DB cluster.
   *
   * Valid Values: `aurora`, `aurora-iopt1`
   *
   * Default: `aurora`
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
   *
   * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * The lifecycle type for this DB cluster.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
   *
   * - Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
   * - Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * Tags to assign to resources associated with the DB cluster.
   *
   * Valid Values:
   *
   * - `cluster-auto-backup` - The DB cluster's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * A list of Amazon Web Services Identity and Access Management (IAM) roles to associate with the DB cluster when it's restored from Amazon S3. Each role grants the DB cluster permission to access other Amazon Web Services on your behalf. For each role, specify a role ARN and, optionally, the feature name (such as `s3Import`, `s3Export`, or `Lambda`).
   *
   * @public
   */
  AssociatedRoles?: DBClusterAssociatedRole[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromS3Result {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * Provides the list of Availability Zones (AZs) where instances in the restored DB cluster can be created.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Example: `my-snapshot-id`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The identifier for the DB snapshot or DB cluster snapshot to restore from.
   *
   * You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing Snapshot.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * The database engine to use for the new DB cluster.
   *
   * Default: The same as source
   *
   * Constraint: Must be compatible with the engine of the source
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The version of the database engine to use for the new DB cluster. If you don't specify an engine version, the default version for the database engine in the Amazon Web Services Region is used.
   *
   * To list all of the available engine versions for Aurora MySQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for Aurora PostgreSQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for RDS for MySQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for RDS for PostgreSQL, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
   *
   * **Aurora MySQL**
   *
   * See [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide*.
   *
   * **Aurora PostgreSQL**
   *
   * See [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide*.
   *
   * **MySQL**
   *
   * See [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
   *
   * **PostgreSQL**
   *
   * See [Amazon RDS for PostgreSQL versions and extensions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide.*
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The port number on which the new DB cluster accepts connections.
   *
   * Constraints: This value must be `1150-65535`
   *
   * Default: The same port as the original DB cluster.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The name of the DB subnet group to use for the new DB cluster.
   *
   * Constraints: If supplied, must match the name of an existing DB subnet group.
   *
   * Example: `mydbsubnetgroup`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The database name for the restored DB cluster.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the option group to use for the restored DB cluster.
   *
   * DB clusters are associated with a default option group that can't be modified.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * A list of VPC security groups that the new DB cluster will belong to.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The tags to be assigned to the restored DB cluster.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * When you don't specify a value for the `KmsKeyId` parameter, then the following occurs:
   *
   * - If the DB snapshot or DB cluster snapshot in `SnapshotIdentifier` is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.
   * - If the DB snapshot or DB cluster snapshot in `SnapshotIdentifier` isn't encrypted, then the restored DB cluster isn't encrypted.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide* or [IAM database authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide*.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to 0.
   *
   * > **Note:** Currently, Backtrack is only supported for Aurora MySQL DB clusters.
   *
   * Default: 0
   *
   * Constraints:
   *
   * - If specified, this value must be set to a number from 0 to 259,200 (72 hours).
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs. The values in the list depend on the DB engine being used.
   *
   * **RDS for MySQL**
   *
   * Possible values are `error`, `general`, `slowquery`, and `iam-db-auth-error`.
   *
   * **RDS for PostgreSQL**
   *
   * Possible values are `postgresql`, `upgrade`, and `iam-db-auth-error`.
   *
   * **Aurora MySQL**
   *
   * Possible values are `audit`, `error`, `general`, `instance`, `slowquery`, and `iam-db-auth-error`.
   *
   * **Aurora PostgreSQL**
   *
   * Possible value are `instance`, `postgresql`, and `iam-db-auth-error`.
   *
   * For more information about exporting CloudWatch Logs for Amazon RDS, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * For more information about exporting CloudWatch Logs for Amazon Aurora, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The DB engine mode of the DB cluster, either `provisioned` or `serverless`.
   *
   * For more information, see [CreateDBCluster](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html).
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * For DB clusters in `serverless` DB engine mode, the scaling properties of the DB cluster.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default DB cluster parameter group for the specified engine is used.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing default DB cluster parameter group.
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the DB cluster. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The name of the IAM role to be used when making API calls to the Directory Service.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *
   * For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide.*
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * Specifies the storage type to be associated with the DB cluster.
   *
   * When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
   *
   * Valid Values: `aurora`, `aurora-iopt1` (Aurora DB clusters); `io1` (Multi-AZ DB clusters)
   *
   * Default: `aurora` (Aurora DB clusters); `io1` (Multi-AZ DB clusters)
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
   *
   * For information about valid IOPS values, see [Amazon RDS Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
   *
   * Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies whether the DB cluster is publicly accessible.
   *
   * When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
   *
   * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
   *
   * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
   *
   * - If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.
   * - If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.
   *
   * If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:
   *
   * - If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.
   * - If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
   *
   * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify `0`.
   *
   * If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
   *
   * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is `arn:aws:iam:123456789012:role/emaccess`.
   *
   * If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * Specifies whether to turn on Performance Insights for the DB cluster.
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * The number of days for which automated backups are retained. Specify a minimum value of `1`.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The lifecycle type for this DB cluster.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
   *
   * - Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
   * - Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * Tags to assign to resources associated with the DB cluster.
   *
   * Valid Values:
   *
   * - `cluster-auto-backup` - The DB cluster's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies whether to enable VPC networking for the restored DB cluster. Set this parameter to `false` to create a cluster without the VPC network interface (ENI).
   *
   * This parameter must be used together with `EnableInternetAccessGateway`. When both parameters are specified, IAM database authentication is required. You must also specify `EnableIAMDatabaseAuthentication`.
   *
   * Valid for Cluster Type: Aurora PostgreSQL clusters
   *
   * @public
   */
  EnableVPCNetworking?: boolean | undefined;

  /**
   * Specifies that the restored DB cluster should use internet-based connectivity through an internet access gateway. This allows clients to connect to the cluster over the internet without requiring a VPC.
   *
   * This parameter must be used together with `EnableVPCNetworking` set to `false`. When both parameters are specified, IAM database authentication is required. You must also specify `EnableIAMDatabaseAuthentication`.
   *
   * Valid for Cluster Type: Aurora PostgreSQL clusters
   *
   * @public
   */
  EnableInternetAccessGateway?: boolean | undefined;

  /**
   * A list of Amazon Web Services Identity and Access Management (IAM) roles to associate with the DB cluster when it's restored from a snapshot. Each role grants the DB cluster permission to access other Amazon Web Services on your behalf. For each role, specify a role ARN and, optionally, the feature name (such as `s3Import`, `s3Export`, or `Lambda`).
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  AssociatedRoles?: DBClusterAssociatedRole[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterFromSnapshotResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * The name of the new DB cluster to be created.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens
   * - First character must be a letter
   * - Can't end with a hyphen or contain two consecutive hyphens
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;

  /**
   * The type of restore to be performed. You can specify one of the following values:
   *
   * - `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
   * - `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.
   *
   * If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  RestoreType?: string | undefined;

  /**
   * The identifier of the source DB cluster from which to restore.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DBCluster.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  SourceDBClusterIdentifier?: string | undefined;

  /**
   * The date and time to restore the DB cluster to.
   *
   * Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
   *
   * Constraints:
   *
   * - Must be before the latest restorable time for the DB instance
   * - Must be specified if `UseLatestRestorableTime` parameter isn't provided
   * - Can't be specified if the `UseLatestRestorableTime` parameter is enabled
   * - Can't be specified if the `RestoreType` parameter is `copy-on-write`
   *
   * Example: `2015-03-07T23:45:00Z`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  RestoreToTime?: Date | undefined;

  /**
   * Specifies whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time.
   *
   * Constraints: Can't be specified if `RestoreToTime` parameter is provided.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * The port number on which the new DB cluster accepts connections.
   *
   * Constraints: A value from `1150-65535`.
   *
   * Default: The default port for the engine.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The DB subnet group name to use for the new DB cluster.
   *
   * Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *
   * Example: `mydbsubnetgroup`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The name of the option group for the new DB cluster.
   *
   * DB clusters are associated with a default option group that can't be modified.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * A list of VPC security groups that the new DB cluster belongs to.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different from the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the `KmsKeyId` parameter.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, then the following occurs:
   *
   * - If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.
   * - If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.
   *
   * If `DBClusterIdentifier` refers to a DB cluster that isn't encrypted, then the restore request is rejected.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide* or [IAM database authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide*.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to 0.
   *
   * Default: 0
   *
   * Constraints:
   *
   * - If specified, this value must be set to a number from 0 to 259,200 (72 hours).
   *
   * Valid for: Aurora MySQL DB clusters only
   *
   * @public
   */
  BacktrackWindow?: number | undefined;

  /**
   * The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values in the list depend on the DB engine being used.
   *
   * **RDS for MySQL**
   *
   * Possible values are `error`, `general`, `slowquery`, and `iam-db-auth-error`.
   *
   * **RDS for PostgreSQL**
   *
   * Possible values are `postgresql`, `upgrade`, and `iam-db-auth-error`.
   *
   * **Aurora MySQL**
   *
   * Possible values are `audit`, `error`, `general`, `instance`, `slowquery`, and `iam-db-auth-error`.
   *
   * **Aurora PostgreSQL**
   *
   * Possible value are `instance`, `postgresql`, and `iam-db-auth-error`.
   *
   * For more information about exporting CloudWatch Logs for Amazon RDS, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * For more information about exporting CloudWatch Logs for Amazon Aurora, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The name of the custom DB cluster parameter group to associate with this DB cluster.
   *
   * If the `DBClusterParameterGroupName` parameter is omitted, the default DB cluster parameter group for the specified engine is used.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB cluster parameter group.
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DBClusterParameterGroupName?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the DB cluster. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The Active Directory directory ID to restore the DB cluster in. The domain must be created prior to this operation.
   *
   * For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster. For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The name of the IAM role to be used when making API calls to the Directory Service.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The compute and memory capacity of the each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *
   * For the full list of DB instance classes, and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * @public
   */
  DBClusterInstanceClass?: string | undefined;

  /**
   * Specifies the storage type to be associated with the DB cluster.
   *
   * When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
   *
   * Valid Values: `aurora`, `aurora-iopt1` (Aurora DB clusters); `io1` (Multi-AZ DB clusters)
   *
   * Default: `aurora` (Aurora DB clusters); `io1` (Multi-AZ DB clusters)
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Specifies whether the DB cluster is publicly accessible.
   *
   * When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
   *
   * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
   *
   * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
   *
   * - If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.
   * - If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.
   *
   * If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:
   *
   * - If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.
   * - If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
   *
   * For information about valid IOPS values, see [Amazon RDS Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
   *
   * Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB instance.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The network type of the DB cluster.
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The resource ID of the source DB cluster from which to restore.
   *
   * @public
   */
  SourceDbClusterResourceId?: string | undefined;

  /**
   * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
   *
   * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration | undefined;

  /**
   * For DB clusters in `serverless` DB engine mode, the scaling properties of the DB cluster.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  ScalingConfiguration?: ScalingConfiguration | undefined;

  /**
   * The engine mode of the new cluster. Specify `provisioned` or `serverless`, depending on the type of the cluster you are creating. You can create an Aurora Serverless v1 clone from a provisioned cluster, or a provisioned clone from an Aurora Serverless v1 cluster. To create a clone that is an Aurora Serverless v1 cluster, the original cluster must be an Aurora Serverless v1 cluster or an encrypted provisioned cluster. To create a full copy that is an Aurora Serverless v1 cluster, specify the engine mode `serverless`.
   *
   * Valid for: Aurora DB clusters only
   *
   * @public
   */
  EngineMode?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  RdsCustomClusterConfiguration?: RdsCustomClusterConfiguration | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify `0`.
   *
   * If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
   *
   * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is `arn:aws:iam:123456789012:role/emaccess`.
   *
   * If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * Specifies whether to turn on Performance Insights for the DB cluster.
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data.
   *
   * Valid Values:
   *
   * - `7`
   * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
   * - `731`
   *
   * Default: `7` days
   *
   * If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * The number of days for which automated backups are retained. Specify a minimum value of `1`.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be a value from 1 to 35.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide*.
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The lifecycle type for this DB cluster.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, RDS automatically upgrades your restored DB cluster to a higher engine version, if the major engine version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
   *
   * - Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
   * - Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
   *
   * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * Tags to assign to resources associated with the DB cluster.
   *
   * Valid Values:
   *
   * - `cluster-auto-backup` - The DB cluster's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies whether to enable VPC networking for the restored DB cluster. Set this parameter to `false` to create a cluster without the VPC network interface (ENI).
   *
   * This parameter must be used together with `EnableInternetAccessGateway`. When both parameters are specified, IAM database authentication is required. You must also specify `EnableIAMDatabaseAuthentication`.
   *
   * Valid for Cluster Type: Aurora PostgreSQL clusters
   *
   * @public
   */
  EnableVPCNetworking?: boolean | undefined;

  /**
   * Specifies that the restored DB cluster should use internet-based connectivity through an internet access gateway. This allows clients to connect to the cluster over the internet without requiring a VPC.
   *
   * This parameter must be used together with `EnableVPCNetworking` set to `false`. When both parameters are specified, IAM database authentication is required. You must also specify `EnableIAMDatabaseAuthentication`.
   *
   * Valid for Cluster Type: Aurora PostgreSQL clusters
   *
   * @public
   */
  EnableInternetAccessGateway?: boolean | undefined;

  /**
   * A list of Amazon Web Services Identity and Access Management (IAM) roles to associate with the DB cluster when it's restored to a point in time. Each role grants the DB cluster permission to access other Amazon Web Services on your behalf. For each role, specify a role ARN and, optionally, the feature name (such as `s3Import`, `s3Export`, or `Lambda`).
   *
   * Valid for Cluster Type: Aurora DB clusters only
   *
   * @public
   */
  AssociatedRoles?: DBClusterAssociatedRole[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBClusterToPointInTimeResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromDBSnapshotMessage {
  /**
   * The name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 numbers, letters, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `my-snapshot-id`
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The identifier for the DB snapshot to restore from.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB snapshot.
   * - Can't be specified when `DBClusterSnapshotIdentifier` is specified.
   * - Must be specified when `DBClusterSnapshotIdentifier` isn't specified.
   * - If you are restoring from a shared manual DB snapshot, the `DBSnapshotIdentifier` must be the ARN of the shared DB snapshot.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide.*
   *
   * Default: The same DBInstanceClass as the original DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The port number on which the database accepts connections.
   *
   * Default: The same port as the original DB instance
   *
   * Constraints: Value must be `1150-65535`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Availability Zone (AZ) where the DB instance will be created.
   *
   * Default: A random, system-chosen Availability Zone.
   *
   * Constraint: You can't specify the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
   *
   * Example: `us-east-1a`
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The name of the DB subnet group to use for the new instance.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB subnet group.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * Specifies whether the DB instance is a Multi-AZ deployment.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Constraint: You can't specify the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * Specifies whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBInstance.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Specifies whether to automatically apply minor version upgrades to the DB instance during the maintenance window.
   *
   * If you restore an RDS Custom DB instance, you must disable this parameter.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * License model information for the restored DB instance.
   *
   * > **Note:** License models for RDS for Db2 require additional configuration. The bring your own license (BYOL) model requires a custom parameter group and an Amazon Web Services License Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model requires an Amazon Web Services Marketplace subscription. For more information, see [Amazon RDS for Db2 licensing options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - RDS for Db2 - `bring-your-own-license | marketplace-license`
   * - RDS for MariaDB - `general-public-license`
   * - RDS for Microsoft SQL Server - `license-included | bring-your-own-media`
   * - RDS for MySQL - `general-public-license`
   * - RDS for Oracle - `bring-your-own-license | license-included`
   * - RDS for PostgreSQL - `postgresql-license`
   *
   * Default: Same as the source.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The name of the database for the restored DB instance.
   *
   * This parameter only applies to RDS for Oracle and RDS for SQL Server DB instances. It doesn't apply to the other engines or to RDS Custom DB instances.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The database engine to use for the new instance.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Default: The same as source
   *
   * Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.
   *
   * Valid Values:
   *
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second. If this parameter isn't specified, the IOPS value is taken from the backup. If this parameter is set to 0, the new instance is converted to a non-PIOPS instance. The conversion takes additional time, though your DB instance is available for connections before the conversion starts.
   *
   * The provisioned IOPS value must follow the requirements for your database engine. For more information, see [Amazon RDS Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide.*
   *
   * Constraints: Must be an integer greater than 1000.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the storage throughput value for the DB instance.
   *
   * This setting doesn't apply to RDS Custom or Amazon Aurora.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The name of the option group to be used for the restored DB instance.
   *
   * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the storage type to be associated with the DB instance.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
   *
   * If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
   *
   * Default: `io1` if the `Iops` parameter is specified, otherwise `gp3`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The password for the given ARN from the key store in order to access the device.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this DB instance.
   *
   * Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Active Directory directory ID to restore the DB instance in. The domain/ must be created prior to this operation. Currently, you can create only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of an Active Directory domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `mymanagedADtest.mymanagedAD.mydomain`
   *
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * The Active Directory organizational unit for your DB instance to join.
   *
   * Constraints:
   *
   * - Must be in the distinguished name format.
   * - Can't be longer than 64 characters.
   *
   * Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`
   *
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456`
   *
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
   *
   * Constraints:
   *
   * - Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
   *
   * Example: `123.124.125.126,234.235.236.237`
   *
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB instance to snapshots of the DB instance.
   *
   * In most cases, tags aren't copied by default. However, when you restore a DB instance from a DB snapshot, RDS checks whether you specify new tags. If yes, the new tags are added to the restored DB instance. If there are no new tags, RDS looks for the tags from the source DB instance for the DB snapshot, and then adds those tags to the restored DB instance.
   *
   * For more information, see [Copying tags to DB instance snapshots](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.CopyTags) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *
   * For more information about IAM database authentication, see [IAM Database Authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The list of logs for the restored DB instance to export to CloudWatch Logs. The values in the list depend on the DB engine. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Specifies whether the DB instance class of the DB instance uses its default processor features.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * The name of the DB parameter group to associate with this DB instance.
   *
   * If you don't specify a value for `DBParameterGroupName`, then RDS uses the default `DBParameterGroup` for the specified DB engine.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB parameter group.
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * Specifies whether to enable deletion protection for the DB instance. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.
   *
   * A *CoIP* provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * For more information about RDS on Outposts, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * For more information about CoIPs, see [Customer-owned IP addresses](https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the *Amazon Web Services Outposts User Guide*.
   *
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies where automated backups and manual snapshots are stored for the restored DB instance.
   *
   * Possible values are `local` (Dedicated Local Zone), `outposts` (Amazon Web Services Outposts), and `region` (Amazon Web Services Region). The default is `region`.
   *
   * For more information, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:
   *
   * - The profile must exist in your account.
   * - The profile must have an IAM role that Amazon EC2 has permissions to assume.
   * - The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.
   *
   * For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
   *
   * This setting is required for RDS Custom.
   *
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * The amount of storage (in gibibytes) to allocate initially for the DB instance. Follow the allocation rules specified in CreateDBInstance.
   *
   * This setting isn't valid for RDS for SQL Server.
   *
   * > **Note:** Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed. You can also allocate additional storage for future growth.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The identifier for the Multi-AZ DB cluster snapshot to restore from.
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing Multi-AZ DB cluster snapshot.
   * - Can't be specified when `DBSnapshotIdentifier` is specified.
   * - Must be specified when `DBSnapshotIdentifier` isn't specified.
   * - If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
   * - Can't be the identifier of an Aurora DB cluster snapshot.
   *
   * @public
   */
  DBClusterSnapshotIdentifier?: string | undefined;

  /**
   * The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
   *
   * > **Note:** Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be a value from 0 to 35.
   * - Can't be set to 0 if the DB instance is a source to read replicas.
   * - Can't be set to 0 for an RDS Custom for Oracle DB instance.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod` parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The identifier or the name of the DB capacity reservation to associate with this DB instance. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name. When you specify this parameter, the DB instance uses reserved capacity from the specified reservation.
   *
   * If you specify `AvailabilityZone`, Amazon RDS places the DB instance in that Availability Zone, and the reservation must cover it.
   *
   * Constraints:
   *
   * - The reservation must reserve capacity for the DB instance class and the database engine of the DB instance.
   * - If the reservation reserves capacity for a specific license model, the license model of the DB instance must match it.
   * - The reservation must be in the `active` state, and it must not be past its end date.
   * - If you specify `AvailabilityZone`, it must be one of the Availability Zones of the reservation.
   * - For a Multi-AZ DB instance, the reservation must cover two or more Availability Zones. A Multi-AZ DB instance uses one unit of reserved capacity in each of two Availability Zones. If the reservation covers more than two Availability Zones, Amazon RDS chooses the two that the DB instance uses.
   * - The reservation must have available capacity in each Availability Zone that the DB instance uses.
   * - The DB subnet group must be in a VPC with default tenancy.
   * - The DB subnet group must cover each Availability Zone that the DB instance uses.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * Specifies whether to enable a dedicated log volume (DLV) for the DB instance.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The CA certificate identifier to use for the DB instance's server certificate.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The lifecycle type for this DB instance.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
   *
   * This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * A list of additional storage volumes to create for the DB instance. You can create up to three additional storage volumes using the names `rdsdbdata2`, `rdsdbdata3`, and `rdsdbdata4`. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager in the restored DB instance.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide*.
   *
   * Constraints:
   *
   * - Applies to RDS for Oracle only.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromDBSnapshotResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromS3Message {
  /**
   * The name of the database to create when the DB instance is created. Follow the naming rules specified in `CreateDBInstance`.
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The DB instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * Example: `mydbinstance`
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The amount of storage (in gibibytes) to allocate initially for the DB instance. Follow the allocation rules specified in `CreateDBInstance`.
   *
   * This setting isn't valid for RDS for SQL Server.
   *
   * > **Note:** Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed. You can also allocate additional storage for future growth.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The compute and memory capacity of the DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide.*
   *
   * Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.
   *
   * @public
   */
  DBInstanceClass: string | undefined;

  /**
   * The name of the database engine to be used for this instance.
   *
   * Valid Values: `mysql`
   *
   * @public
   */
  Engine: string | undefined;

  /**
   * The name for the master user.
   *
   * Constraints:
   *
   * - Must be 1 to 16 letters or numbers.
   * - First character must be a letter.
   * - Can't be a reserved word for the chosen database engine.
   *
   * @public
   */
  MasterUsername?: string | undefined;

  /**
   * The password for the master user.
   *
   * Constraints:
   *
   * - Can't be specified if `ManageMasterUserPassword` is turned on.
   * - Can include any printable ASCII character except "/", """, or "@". For RDS for Oracle, can't include the "&amp;" (ampersand) or the "'" (single quotes) character.
   *
   * Length Constraints:
   *
   * - RDS for Db2 - Must contain from 8 to 128 characters.
   * - RDS for MariaDB - Must contain from 8 to 41 characters.
   * - RDS for Microsoft SQL Server - Must contain from 8 to 128 characters.
   * - RDS for MySQL - Must contain from 8 to 41 characters.
   * - RDS for Oracle - Must contain from 8 to 30 characters.
   * - RDS for PostgreSQL - Must contain from 8 to 128 characters.
   *
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * A list of DB security groups to associate with this DB instance.
   *
   * Default: The default DB security group for the database engine.
   *
   * @public
   */
  DBSecurityGroups?: string[] | undefined;

  /**
   * A list of VPC security groups to associate with this DB instance.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Availability Zone that the DB instance is created in. For information about Amazon Web Services Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon RDS User Guide.*
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.
   *
   * Example: `us-east-1d`
   *
   * Constraint: The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * A DB subnet group to associate with this DB instance.
   *
   * Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see [Amazon RDS Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Must be in the format `ddd:hh24:mi-ddd:hh24:mi`.
   * - Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred backup window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * The name of the DB parameter group to associate with this DB instance.
   *
   * If you do not specify a value for `DBParameterGroupName`, then the default `DBParameterGroup` for the specified DB engine is used.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. For more information, see `CreateDBInstance`.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The time range each day during which automated backups are created if automated backups are enabled. For more information, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The port number on which the database accepts connections.
   *
   * Type: Integer
   *
   * Valid Values: `1150`-`65535`
   *
   * Default: `3306`
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Specifies whether the DB instance is a Multi-AZ deployment. If the DB instance is a Multi-AZ deployment, you can't set the `AvailabilityZone` parameter.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * The version number of the database engine to use. Choose the latest minor version of your database engine. For information about engine versions, see `CreateDBInstance`, or call `DescribeDBEngineVersions`.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Specifies whether to automatically apply minor engine upgrades to the DB instance during the maintenance window. By default, minor engine upgrades are not applied automatically.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The license model for this DB instance. Use `general-public-license`.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to allocate initially for the DB instance. For information about valid IOPS values, see [Amazon RDS Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies the storage throughput value for the DB instance.
   *
   * This setting doesn't apply to RDS Custom or Amazon Aurora.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The name of the option group to associate with this DB instance. If this argument is omitted, the default option group for the specified engine is used.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * Specifies whether the DB instance is publicly accessible.
   *
   * When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBInstance.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * A list of tags to associate with this DB instance. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the storage type to be associated with the DB instance.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
   *
   * If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
   *
   * Default: `io1` if the `Iops` parameter is specified; otherwise `gp2`
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * Specifies whether the new DB instance is encrypted or not.
   *
   * @public
   */
  StorageEncrypted?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for an encrypted DB instance.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If the `StorageEncrypted` parameter is enabled, and you do not specify a value for the `KmsKeyId` parameter, then Amazon RDS will use your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0.
   *
   * If `MonitoringRoleArn` is specified, then you must also set `MonitoringInterval` to a value other than 0.
   *
   * Valid Values: 0, 1, 5, 10, 15, 30, 60
   *
   * Default: `0`
   *
   * @public
   */
  MonitoringInterval?: number | undefined;

  /**
   * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide.*
   *
   * If `MonitoringInterval` is set to a value other than 0, then you must supply a `MonitoringRoleArn` value.
   *
   * @public
   */
  MonitoringRoleArn?: string | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * For more information about IAM database authentication, see [IAM Database Authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The name of the engine of your source database.
   *
   * Valid Values: `mysql`
   *
   * @public
   */
  SourceEngine: string | undefined;

  /**
   * The version of the database that the backup files were created from.
   *
   * MySQL versions 5.6 and 5.7 are supported.
   *
   * Example: `5.6.40`
   *
   * @public
   */
  SourceEngineVersion: string | undefined;

  /**
   * The name of your Amazon S3 bucket that contains your database backup file.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The prefix of your Amazon S3 bucket.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * An Amazon Web Services Identity and Access Management (IAM) role with a trust policy and a permissions policy that allows Amazon RDS to access your Amazon S3 bucket. For information about this role, see [Creating an IAM role manually](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html#MySQL.Procedural.Importing.Enabling.IAM) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * Specifies the mode of Database Insights to enable for the DB instance.
   *
   * > **Note:** Aurora DB instances inherit this value from the DB cluster, so you can't change this value.
   *
   * @public
   */
  DatabaseInsightsMode?: DatabaseInsightsMode | undefined;

  /**
   * Specifies whether to enable Performance Insights for the DB instance.
   *
   * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  EnablePerformanceInsights?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you do not specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  PerformanceInsightsKMSKeyId?: string | undefined;

  /**
   * The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:
   *
   * - 7
   * - *month* * 31, where *month* is a number of months from 1-23
   * - 731
   *
   * For example, the following values are valid:
   *
   * - 93 (3 months * 31)
   * - 341 (11 months * 31)
   * - 589 (19 months * 31)
   * - 731
   *
   * If you specify a retention period such as 94, which isn't a valid value, RDS issues an error.
   *
   * @public
   */
  PerformanceInsightsRetentionPeriod?: number | undefined;

  /**
   * The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Specifies whether the DB instance class of the DB instance uses its default processor features.
   *
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * Specifies whether to enable deletion protection for the DB instance. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * The network type of the DB instance.
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
   *
   * Constraints:
   *
   * - Can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;

  /**
   * The identifier or the name of the DB capacity reservation to associate with this DB instance. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name. When you specify this parameter, the DB instance uses reserved capacity from the specified reservation.
   *
   * If you specify `AvailabilityZone`, Amazon RDS places the DB instance in that Availability Zone, and the reservation must cover it.
   *
   * Constraints:
   *
   * - The reservation must reserve capacity for the DB instance class and the database engine of the DB instance.
   * - If the reservation reserves capacity for a specific license model, the license model of the DB instance must match it.
   * - The reservation must be in the `active` state, and it must not be past its end date.
   * - If you specify `AvailabilityZone`, it must be one of the Availability Zones of the reservation.
   * - For a Multi-AZ DB instance, the reservation must cover two or more Availability Zones. A Multi-AZ DB instance uses one unit of reserved capacity in each of two Availability Zones. If the reservation covers more than two Availability Zones, Amazon RDS chooses the two that the DB instance uses.
   * - The reservation must have available capacity in each Availability Zone that the DB instance uses.
   * - The DB subnet group must be in a VPC with default tenancy.
   * - The DB subnet group must cover each Availability Zone that the DB instance uses.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * Specifies whether to enable a dedicated log volume (DLV) for the DB instance.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The CA certificate identifier to use for the DB instance's server certificate.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The lifecycle type for this DB instance.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
   *
   * This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * A list of additional storage volumes to modify or delete for the DB instance. You can modify or delete up to three additional storage volumes using the names `rdsdbdata2`, `rdsdbdata3`, and `rdsdbdata4`. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceFromS3Result {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceToPointInTimeMessage {
  /**
   * The identifier of the source DB instance from which to restore.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing DB instance.
   *
   * @public
   */
  SourceDBInstanceIdentifier?: string | undefined;

  /**
   * The name of the new DB instance to create.
   *
   * Constraints:
   *
   * - Must contain from 1 to 63 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  TargetDBInstanceIdentifier: string | undefined;

  /**
   * The date and time to restore from.
   *
   * Constraints:
   *
   * - Must be a time in Universal Coordinated Time (UTC) format.
   * - Must be before the latest restorable time for the DB instance.
   * - Can't be specified if the `UseLatestRestorableTime` parameter is enabled.
   *
   * Example: `2009-09-07T23:45:00Z`
   *
   * @public
   */
  RestoreTime?: Date | undefined;

  /**
   * Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time.
   *
   * Constraints:
   *
   * - Can't be specified if the `RestoreTime` parameter is provided.
   *
   * @public
   */
  UseLatestRestorableTime?: boolean | undefined;

  /**
   * The compute and memory capacity of the Amazon RDS DB instance, for example db.m4.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
   *
   * Default: The same DB instance class as the original DB instance.
   *
   * @public
   */
  DBInstanceClass?: string | undefined;

  /**
   * The port number on which the database accepts connections.
   *
   * Default: The same port as the original DB instance.
   *
   * Constraints:
   *
   * - The value must be `1150-65535`.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The Availability Zone (AZ) where the DB instance will be created.
   *
   * Default: A random, system-chosen Availability Zone.
   *
   * Constraints:
   *
   * - You can't specify the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
   *
   * Example: `us-east-1a`
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The DB subnet group name to use for the new instance.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB subnet group.
   *
   * Example: `mydbsubnetgroup`
   *
   * @public
   */
  DBSubnetGroupName?: string | undefined;

  /**
   * Secifies whether the DB instance is a Multi-AZ deployment.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Constraints:
   *
   * - You can't specify the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
   *
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * Specifies whether the DB instance is publicly accessible.
   *
   * When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.
   *
   * For more information, see CreateDBInstance.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * Specifies whether minor version upgrades are applied automatically to the DB instance during the maintenance window.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The license model information for the restored DB instance.
   *
   * > **Note:** License models for RDS for Db2 require additional configuration. The bring your own license (BYOL) model requires a custom parameter group and an Amazon Web Services License Manager self-managed license. The Db2 license through Amazon Web Services Marketplace model requires an Amazon Web Services Marketplace subscription. For more information, see [Amazon RDS for Db2 licensing options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
   *
   * Valid Values:
   *
   * - RDS for Db2 - `bring-your-own-license | marketplace-license`
   * - RDS for MariaDB - `general-public-license`
   * - RDS for Microsoft SQL Server - `license-included | bring-your-own-media`
   * - RDS for MySQL - `general-public-license`
   * - RDS for Oracle - `bring-your-own-license | license-included`
   * - RDS for PostgreSQL - `postgresql-license`
   *
   * Default: Same as the source.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * The database name for the restored DB instance.
   *
   * This parameter doesn't apply to the following DB instances:
   *
   * - RDS Custom
   * - RDS for Db2
   * - RDS for MariaDB
   * - RDS for MySQL
   *
   * @public
   */
  DBName?: string | undefined;

  /**
   * The database engine to use for the new instance.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Valid Values:
   *
   * - `db2-ae`
   * - `db2-ce`
   * - `db2-se`
   * - `mariadb`
   * - `mysql`
   * - `oracle-ee`
   * - `oracle-ee-cdb`
   * - `oracle-se2`
   * - `oracle-se2-cdb`
   * - `postgres`
   * - `sqlserver-ee`
   * - `sqlserver-se`
   * - `sqlserver-ex`
   * - `sqlserver-web`
   *
   * Default: The same as source
   *
   * Constraints:
   *
   * - Must be compatible with the engine of the source.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to initially allocate for the DB instance.
   *
   * This setting doesn't apply to SQL Server.
   *
   * Constraints:
   *
   * - Must be an integer greater than 1000.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The storage throughput value for the DB instance.
   *
   * This setting doesn't apply to RDS Custom or Amazon Aurora.
   *
   * @public
   */
  StorageThroughput?: number | undefined;

  /**
   * The name of the option group to use for the restored DB instance.
   *
   * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance after it is associated with a DB instance
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  OptionGroupName?: string | undefined;

  /**
   * Specifies whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * @public
   */
  CopyTagsToSnapshot?: boolean | undefined;

  /**
   * A list of tags.
   *
   * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The storage type to associate with the DB instance.
   *
   * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
   *
   * Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.
   *
   * Constraints:
   *
   * - If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
   *
   * @public
   */
  StorageType?: string | undefined;

  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  TdeCredentialArn?: string | undefined;

  /**
   * The password for the given ARN from the key store in order to access the device.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  TdeCredentialPassword?: string | undefined;

  /**
   * A list of EC2 VPC security groups to associate with this DB instance.
   *
   * Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * The Active Directory directory ID to restore the DB instance in. Create the domain before running this command. Currently, you can create only the MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances in an Active Directory Domain.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The name of the IAM role to use when making API calls to the Directory Service.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * @public
   */
  DomainIAMRoleName?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of an Active Directory domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `mymanagedADtest.mymanagedAD.mydomain`
   *
   * @public
   */
  DomainFqdn?: string | undefined;

  /**
   * The Active Directory organizational unit for your DB instance to join.
   *
   * Constraints:
   *
   * - Must be in the distinguished name format.
   * - Can't be longer than 64 characters.
   *
   * Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`
   *
   * @public
   */
  DomainOu?: string | undefined;

  /**
   * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
   *
   * Constraints:
   *
   * - Can't be longer than 64 characters.
   *
   * Example: `arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456`
   *
   * @public
   */
  DomainAuthSecretArn?: string | undefined;

  /**
   * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
   *
   * Constraints:
   *
   * - Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
   *
   * Example: `123.124.125.126,234.235.236.237`
   *
   * @public
   */
  DomainDnsIps?: string[] | undefined;

  /**
   * Specifies whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * For more information about IAM database authentication, see [IAM Database Authentication for MySQL and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  EnableIAMDatabaseAuthentication?: boolean | undefined;

  /**
   * The list of logs that the restored DB instance is to export to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  EnableCloudwatchLogsExports?: string[] | undefined;

  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  ProcessorFeatures?: ProcessorFeature[] | undefined;

  /**
   * Specifies whether the DB instance class of the DB instance uses its default processor features.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  UseDefaultProcessorFeatures?: boolean | undefined;

  /**
   * The name of the DB parameter group to associate with this DB instance.
   *
   * If you do not specify a value for `DBParameterGroupName`, then the default `DBParameterGroup` for the specified DB engine is used.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Constraints:
   *
   * - If supplied, must match the name of an existing DB parameter group.
   * - Must be 1 to 255 letters, numbers, or hyphens.
   * - First character must be a letter.
   * - Can't end with a hyphen or contain two consecutive hyphens.
   *
   * @public
   */
  DBParameterGroupName?: string | undefined;

  /**
   * Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * @public
   */
  DeletionProtection?: boolean | undefined;

  /**
   * The resource ID of the source DB instance from which to restore.
   *
   * @public
   */
  SourceDbiResourceId?: string | undefined;

  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  MaxAllocatedStorage?: number | undefined;

  /**
   * Specifies whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.
   *
   * A *CoIP* provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * For more information about RDS on Outposts, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * For more information about CoIPs, see [Customer-owned IP addresses](https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the *Amazon Web Services Outposts User Guide*.
   *
   * @public
   */
  EnableCustomerOwnedIp?: boolean | undefined;

  /**
   * The network type of the DB instance.
   *
   * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (`DUAL`).
   *
   * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
   *
   * Valid Values:
   *
   * - `IPV4`
   * - `DUAL`
   *
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, `arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE`.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * @public
   */
  SourceDBInstanceAutomatedBackupsArn?: string | undefined;

  /**
   * The location for storing automated backups and manual snapshots for the restored DB instance.
   *
   * Valid Values:
   *
   * - `local` (Dedicated Local Zone)
   * - `outposts` (Amazon Web Services Outposts)
   * - `region` (Amazon Web Services Region)
   *
   * Default: `region`
   *
   * For more information, see [Working with Amazon RDS on Amazon Web Services Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
   *
   * @public
   */
  BackupTarget?: string | undefined;

  /**
   * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:
   *
   * - The profile must exist in your account.
   * - The profile must have an IAM role that Amazon EC2 has permissions to assume.
   * - The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.
   *
   * For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
   *
   * This setting is required for RDS Custom.
   *
   * @public
   */
  CustomIamInstanceProfile?: string | undefined;

  /**
   * The amount of storage (in gibibytes) to allocate initially for the DB instance. Follow the allocation rules specified in `CreateDBInstance`.
   *
   * This setting isn't valid for RDS for SQL Server.
   *
   * > **Note:** Be sure to allocate enough storage for your new DB instance so that the restore operation can succeed. You can also allocate additional storage for future growth.
   *
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
   *
   * > **Note:** Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The retention period for automated backups is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   *
   * Default: Uses existing setting
   *
   * Constraints:
   *
   * - Must be a value from 0 to 35.
   * - Can't be set to 0 if the DB instance is a source to read replicas.
   * - Can't be set to 0 for an RDS Custom for Oracle DB instance.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod` parameter. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see [Backup window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide*.
   *
   * This setting doesn't apply to Amazon Aurora DB instances. The daily time range for creating automated backups is managed by the DB cluster. For more information, see `ModifyDBCluster`.
   *
   * Constraints:
   *
   * - Must be in the format `hh24:mi-hh24:mi`.
   * - Must be in Universal Coordinated Time (UTC).
   * - Must not conflict with the preferred maintenance window.
   * - Must be at least 30 minutes.
   *
   * @public
   */
  PreferredBackupWindow?: string | undefined;

  /**
   * The identifier or the name of the DB capacity reservation to associate with this DB instance. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name. When you specify this parameter, the DB instance uses reserved capacity from the specified reservation.
   *
   * If you specify `AvailabilityZone`, Amazon RDS places the DB instance in that Availability Zone, and the reservation must cover it.
   *
   * Constraints:
   *
   * - The reservation must reserve capacity for the DB instance class and the database engine of the DB instance.
   * - If the reservation reserves capacity for a specific license model, the license model of the DB instance must match it.
   * - The reservation must be in the `active` state, and it must not be past its end date.
   * - If you specify `AvailabilityZone`, it must be one of the Availability Zones of the reservation.
   * - For a Multi-AZ DB instance, the reservation must cover two or more Availability Zones. A Multi-AZ DB instance uses one unit of reserved capacity in each of two Availability Zones. If the reservation covers more than two Availability Zones, Amazon RDS chooses the two that the DB instance uses.
   * - The reservation must have available capacity in each Availability Zone that the DB instance uses.
   * - The DB subnet group must be in a VPC with default tenancy.
   * - The DB subnet group must cover each Availability Zone that the DB instance uses.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;

  /**
   * Specifies whether to enable a dedicated log volume (DLV) for the DB instance.
   *
   * @public
   */
  DedicatedLogVolume?: boolean | undefined;

  /**
   * The CA certificate identifier to use for the DB instance's server certificate.
   *
   * This setting doesn't apply to RDS Custom DB instances.
   *
   * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  CACertificateIdentifier?: string | undefined;

  /**
   * The lifecycle type for this DB instance.
   *
   * > **Note:** By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, RDS automatically upgrades your restored DB instance to a higher engine version, if the major engine version is past its end of standard support date.
   *
   * You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
   *
   * This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
   *
   * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
   *
   * Default: `open-source-rds-extended-support`
   *
   * @public
   */
  EngineLifecycleSupport?: string | undefined;

  /**
   * A list of additional storage volumes to restore to the DB instance. You can restore up to three additional storage volumes using the names `rdsdbdata2`, `rdsdbdata3`, and `rdsdbdata4`. Additional storage volumes are supported for RDS for Oracle and RDS for SQL Server DB instances only.
   *
   * @public
   */
  AdditionalStorageVolumes?: AdditionalStorageVolume[] | undefined;

  /**
   * Tags to assign to resources associated with the DB instance.
   *
   * Valid Values:
   *
   * - `auto-backup` - The DB instance's automated backup.
   *
   * @public
   */
  TagSpecifications?: TagSpecification[] | undefined;

  /**
   * Specifies whether to manage the master user password with Amazon Web Services Secrets Manager in the restored DB instance.
   *
   * For more information, see [Password management with Amazon Web Services Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide*.
   *
   * Constraints:
   *
   * - Applies to RDS for Oracle only.
   *
   * @public
   */
  ManageMasterUserPassword?: boolean | undefined;

  /**
   * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager.
   *
   * This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
   *
   * If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
   *
   * There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
   *
   * @public
   */
  MasterUserSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface RestoreDBInstanceToPointInTimeResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface RevokeDBSecurityGroupIngressMessage {
  /**
   * The name of the DB security group to revoke ingress from.
   *
   * @public
   */
  DBSecurityGroupName: string | undefined;

  /**
   * The IP range to revoke access from. Must be a valid CIDR range. If `CIDRIP` is specified, `EC2SecurityGroupName`, `EC2SecurityGroupId` and `EC2SecurityGroupOwnerId` can't be provided.
   *
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * The name of the EC2 security group to revoke access from. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, EC2SecurityGroupOwnerId and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
   *
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * The id of the EC2 security group to revoke access from. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, EC2SecurityGroupOwnerId and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
   *
   * @public
   */
  EC2SecurityGroupId?: string | undefined;

  /**
   * The Amazon Web Services account number of the owner of the EC2 security group specified in the `EC2SecurityGroupName` parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, EC2SecurityGroupOwnerId and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
   *
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeDBSecurityGroupIngressResult {
  /**
   * Contains the details for an Amazon RDS DB security group.
   *
   * This data type is used as a response element in the `DescribeDBSecurityGroups` action.
   *
   * @public
   */
  DBSecurityGroup?: DBSecurityGroup | undefined;
}

/**
 * @public
 */
export interface StartActivityStreamRequest {
  /**
   * The Amazon Resource Name (ARN) of the DB cluster, for example, `arn:aws:rds:us-east-1:12345667890:cluster:das-cluster`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously.
   *
   * @public
   */
  Mode: ActivityStreamMode | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId: string | undefined;

  /**
   * Specifies whether or not the database activity stream is to start as soon as possible, regardless of the maintenance window for the database.
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * Specifies whether the database activity stream includes engine-native audit fields. This option applies to an Oracle or Microsoft SQL Server DB instance. By default, no engine-native audit fields are included.
   *
   * @public
   */
  EngineNativeAuditFieldsIncluded?: boolean | undefined;
}

/**
 * @public
 */
export interface StartActivityStreamResponse {
  /**
   * The Amazon Web Services KMS key identifier for encryption of messages in the database activity stream.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The name of the Amazon Kinesis data stream to be used for the database activity stream.
   *
   * @public
   */
  KinesisStreamName?: string | undefined;

  /**
   * The status of the database activity stream.
   *
   * @public
   */
  Status?: ActivityStreamStatus | undefined;

  /**
   * The mode of the database activity stream.
   *
   * @public
   */
  Mode?: ActivityStreamMode | undefined;

  /**
   * Indicates whether engine-native audit fields are included in the database activity stream.
   *
   * @public
   */
  EngineNativeAuditFieldsIncluded?: boolean | undefined;

  /**
   * Indicates whether or not the database activity stream will start as soon as possible, regardless of the maintenance window for the database.
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface StartDBClusterMessage {
  /**
   * The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceMessage {
  /**
   * The user-supplied instance identifier.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The identifier or the name of the DB capacity reservation for the DB instance to use after it starts. You can specify the identifier, which has the prefix `dbcr-`, or the reservation name.
   *
   * Specify this parameter when the DB instance stopped using a reservation, or when you want the DB instance to use a different reservation.
   *
   * If you omit this parameter, and the DB instance kept a DB capacity reservation when it stopped, Amazon RDS starts the DB instance in that reservation.
   *
   * If that reservation is deleted, ended, or cancelled, the DB instance still starts. Amazon RDS starts the DB instance outside the reservation, on unreserved capacity, and it charges on-demand prices for the DB instance.
   *
   * If that reservation has no available capacity in the Availability Zone of the DB instance, the request fails. Amazon RDS doesn't start the DB instance, and it doesn't wait for capacity in that Availability Zone. Specify a reservation that has available capacity in that Availability Zone, or retry the request after the reservation has available capacity.
   *
   * Constraints:
   *
   * - The reservation must be in the `active` state.
   * - The reservation must reserve capacity for the DB instance class and the engine of the DB instance.
   * - The reservation must cover the Availability Zone of the DB instance, and it must have available capacity in that Availability Zone.
   *
   * @public
   */
  DBCapacityReservationIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, `arn:aws:rds:us-west-2:123456789012:db:mydatabase`.
   *
   * @public
   */
  SourceDBInstanceArn: string | undefined;

  /**
   * The retention period for the replicated automated backups.
   *
   * @public
   */
  BackupRetentionPeriod?: number | undefined;

  /**
   * The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * In an Amazon Web Services GovCloud (US) Region, an URL that contains a Signature Version 4 signed request for the `StartDBInstanceAutomatedBackupsReplication` operation to call in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the `StartDBInstanceAutomatedBackupsReplication` API operation that can run in the Amazon Web Services Region that contains the source DB instance.
   *
   * This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions.
   *
   * To learn how to generate a Signature Version 4 signed request, see [Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * > **Note:** If you are using an Amazon Web Services SDK tool or the CLI, you can specify `SourceRegion` (or `--source-region` for the CLI) instead of specifying `PreSignedUrl` manually. Specifying `SourceRegion` autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * A list of tags to associate with the replicated automated backups.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartDBInstanceAutomatedBackupsReplicationResult {
  /**
   * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
   *
   * @public
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined;
}

/**
 * @public
 */
export interface StartExportTaskMessage {
  /**
   * A unique identifier for the export task. This ID isn't an identifier for the Amazon S3 bucket where the data is to be exported.
   *
   * @public
   */
  ExportTaskIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot or cluster to export to Amazon S3.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The name of the Amazon S3 bucket to export the snapshot or cluster data to.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The name of the IAM role to use for writing to the Amazon S3 bucket when exporting a snapshot or cluster.
   *
   * In the IAM policy attached to your IAM role, include the following required actions to allow the transfer of files from Amazon RDS or Amazon Aurora to an S3 bucket:
   *
   * - s3:PutObject*
   * - s3:GetObject*
   * - s3:ListBucket
   * - s3:DeleteObject*
   * - s3:GetBucketLocation
   *
   * In the policy, include the resources to identify the S3 bucket and objects in the bucket. The following list of resources shows the Amazon Resource Name (ARN) format for accessing S3:
   *
   * - `arn:aws:s3:::your-s3-bucket`
   * - `arn:aws:s3:::your-s3-bucket/*`
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ID of the Amazon Web Services KMS key to use to encrypt the data exported to Amazon S3. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. The caller of this operation must be authorized to run the following operations. These can be set in the Amazon Web Services KMS key policy:
   *
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * @public
   */
  KmsKeyId: string | undefined;

  /**
   * The Amazon S3 bucket prefix to use as the file name and path of the exported data.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The data to be exported from the snapshot or cluster. If this parameter isn't provided, all of the data is exported.
   *
   * Valid Values:
   *
   * - `database` - Export all the data from a specified database.
   * - `database.table` *table-name* - Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.
   * - `database.schema` *schema-name* - Export a database schema of the snapshot or cluster. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.
   * - `database.schema.table` *table-name* - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.
   *
   * @public
   */
  ExportOnly?: string[] | undefined;
}

/**
 * @public
 */
export interface StopActivityStreamRequest {
  /**
   * The Amazon Resource Name (ARN) of the DB cluster for the database activity stream. For example, `arn:aws:rds:us-east-1:12345667890:cluster:das-cluster`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database.
   *
   * @public
   */
  ApplyImmediately?: boolean | undefined;
}

/**
 * @public
 */
export interface StopActivityStreamResponse {
  /**
   * The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.
   *
   * The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The name of the Amazon Kinesis data stream used for the database activity stream.
   *
   * @public
   */
  KinesisStreamName?: string | undefined;

  /**
   * The status of the database activity stream.
   *
   * @public
   */
  Status?: ActivityStreamStatus | undefined;
}

/**
 * @public
 */
export interface StopDBClusterMessage {
  /**
   * The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as a lowercase string.
   *
   * @public
   */
  DBClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDBClusterResult {
  /**
   * Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster.
   *
   * For an Amazon Aurora DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `PromoteReadReplicaDBCluster`, `RestoreDBClusterFromS3`, `RestoreDBClusterFromSnapshot`, `RestoreDBClusterToPointInTime`, `StartDBCluster`, and `StopDBCluster`.
   *
   * For a Multi-AZ DB cluster, this data type is used as a response element in the operations `CreateDBCluster`, `DeleteDBCluster`, `DescribeDBClusters`, `FailoverDBCluster`, `ModifyDBCluster`, `RebootDBCluster`, `RestoreDBClusterFromSnapshot`, and `RestoreDBClusterToPointInTime`.
   *
   * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide.*
   *
   * For more information on Multi-AZ DB clusters, see [Multi-AZ deployments with two readable standby DB instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
   *
   * @public
   */
  DBCluster?: DBCluster | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceMessage {
  /**
   * The user-supplied instance identifier.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.
   *
   * @public
   */
  DBSnapshotIdentifier?: string | undefined;

  /**
   * Specifies whether the DB instance stops using its DB capacity reservation when the DB instance stops. When you specify `true`, the DB instance belongs to no reservation after it stops, and a later start launches it outside the reservation.
   *
   * By default, a stopped DB instance keeps its DB capacity reservation, and a later start returns the DB instance to the same reservation.
   *
   * Every stop releases the unit of reserved capacity that the DB instance holds, for either value of this parameter. Another DB instance can then use that capacity. This parameter controls the reservation that the DB instance belongs to, and it does not control the release of the capacity.
   *
   * If the DB instance uses no DB capacity reservation, this parameter has no effect.
   *
   * > **Important:** Amazon RDS holds no capacity for a stopped DB instance. When the reservation has no available capacity in the Availability Zone of the DB instance, a later start waits for capacity in that Availability Zone. When the DB instance belongs to no reservation, a later start can fail because the Amazon Web Services Region has insufficient capacity for the DB instance class.
   *
   * @public
   */
  DetachFromDBCapacityReservation?: boolean | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating automate backups, for example, `arn:aws:rds:us-west-2:123456789012:db:mydatabase`.
   *
   * @public
   */
  SourceDBInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface StopDBInstanceAutomatedBackupsReplicationResult {
  /**
   * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
   *
   * @public
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup | undefined;
}

/**
 * @public
 */
export interface SwitchoverBlueGreenDeploymentRequest {
  /**
   * The resource ID of the blue/green deployment.
   *
   * Constraints:
   *
   * - Must match an existing blue/green deployment resource ID.
   *
   * @public
   */
  BlueGreenDeploymentIdentifier: string | undefined;

  /**
   * The amount of time, in seconds, for the switchover to complete.
   *
   * Default: 300
   *
   * If the switchover takes longer than the specified duration, then any changes are rolled back, and no changes are made to the environments.
   *
   * @public
   */
  SwitchoverTimeout?: number | undefined;
}

/**
 * @public
 */
export interface SwitchoverBlueGreenDeploymentResponse {
  /**
   * Details about a blue/green deployment.
   *
   * For more information, see [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html) in the *Amazon RDS User Guide* and [Using Amazon RDS Blue/Green Deployments for database updates](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html) in the *Amazon Aurora User Guide*.
   *
   * @public
   */
  BlueGreenDeployment?: BlueGreenDeployment | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterMessage {
  /**
   * The identifier of the global database cluster to switch over. This parameter isn't case-sensitive.
   *
   * Constraints:
   *
   * - Must match the identifier of an existing global database cluster (Aurora global database).
   *
   * @public
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * The identifier of the secondary Aurora DB cluster to promote to the new primary for the global database cluster. Use the Amazon Resource Name (ARN) for the identifier so that Aurora can locate the cluster in its Amazon Web Services Region.
   *
   * @public
   */
  TargetDbClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverGlobalClusterResult {
  /**
   * A data type representing an Aurora global database.
   *
   * @public
   */
  GlobalCluster?: GlobalCluster | undefined;
}

/**
 * @public
 */
export interface SwitchoverReadReplicaMessage {
  /**
   * The DB instance identifier of the current standby database. This value is stored as a lowercase string.
   *
   * Constraints:
   *
   * - Must match the identiﬁer of an existing Oracle read replica DB instance.
   *
   * @public
   */
  DBInstanceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface SwitchoverReadReplicaResult {
  /**
   * Contains the details of an Amazon RDS DB instance.
   *
   * This data type is used as a response element in the operations `CreateDBInstance`, `CreateDBInstanceReadReplica`, `DeleteDBInstance`, `DescribeDBInstances`, `ModifyDBInstance`, `PromoteReadReplica`, `RebootDBInstance`, `RestoreDBInstanceFromDBSnapshot`, `RestoreDBInstanceFromS3`, `RestoreDBInstanceToPointInTime`, `StartDBInstance`, and `StopDBInstance`.
   *
   * @public
   */
  DBInstance?: DBInstance | undefined;
}
