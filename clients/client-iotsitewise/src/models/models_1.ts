// smithy-typescript generated code
import type {
  AggregateType,
  AssetModelType,
  AssetModelVersionType,
  CapabilitySyncStatus,
  ComputationModelType,
  DatasetExportJobFilter,
  DatasetExportJobStatus,
  DatasetSourceType,
  DatasetTypeEnum,
  DisassociatedDataStorageState,
  EncryptionType,
  EnrichmentJobStatus,
  EnrichmentStatus,
  IdentityType,
  JobStatus,
  JobType,
  ListAssetModelPropertiesFilter,
  ListAssetPropertiesFilter,
  ListAssetsFilter,
  ListBulkImportJobsFilter,
  ListTimeSeriesType,
  Permission,
  PipelineExecutionState,
  PortalType,
  PropertyDataType,
  PropertyNotificationState,
  Quality,
  QueryStatus,
  ResolveToResourceType,
  ResourceType,
  ScalarType,
  SearchStatus,
  SearchType,
  StorageType,
  TargetResourceType,
  TimeOrdering,
  TraversalDirection,
  TraversalType,
  VideoDataType,
  WarmTierState,
} from "./enums";
import type {
  AccessDeniedException,
  ConflictingOperationException,
  InternalFailureException,
  InvalidRequestException,
  LimitExceededException,
  ResourceNotFoundException,
  ThrottlingException,
} from "./errors";
import type {
  AccessPolicySummary,
  ActionDefinition,
  ActionPayload,
  ActionSummary,
  AggregatedValue,
  Alarms,
  ApplicationSummary,
  AssetBindingValueFilter,
  AssetModelBindingValueFilter,
  AssetModelCompositeModel,
  AssetModelCompositeModelPathSegment,
  AssetModelCompositeModelSummary,
  AssetModelHierarchy,
  AssetModelProperty,
  AssetModelPropertyBindingValue,
  AssetModelPropertyBindingValueFilter,
  AssetModelPropertySummary,
  AssetModelStatus,
  AssetModelSummary,
  AssetPropertyBindingValue,
  AssetPropertyBindingValueFilter,
  AssetPropertySummary,
  AssetPropertyValue,
  AssetRelationshipSummary,
  AssetStatus,
  AssetSummary,
  AssociatedAssetsSummary,
  ComputationModelConfiguration,
  ComputationModelStatus,
  ComputeNode,
  ConfigurationStatus,
  DatasetConfig,
  DatasetEnrichment,
  DatasetSource,
  DatasetStatus,
  ExecutionEnvironmentVariables,
  ExecutionStatus,
  FormatSettings,
  GatewayCapabilitySummary,
  GatewayPlatform,
  Identity,
  ImageFile,
  LoggingOptions,
  MountOverrides,
  PipelineExecutionStatus,
  PortalStatus,
  PortalTypeEntry,
  PropertyMapping,
  ResolveTo,
  Resource,
  ResourceStatus,
  TargetResource,
  TaskConfiguration,
  TimeInNanos,
  Variant,
  WorkspaceEncryptionConfiguration,
  WorkspaceStatus,
} from "./models_0";

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * The ID of the project.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the project, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}`
   *
   * @public
   */
  projectArn: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The ID of the portal that the project is in.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The project's description.
   *
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * The date the project was created, in Unix epoch time.
   *
   * @public
   */
  projectCreationDate: Date | undefined;

  /**
   * The date the project was last updated, in Unix epoch time.
   *
   * @public
   */
  projectLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryRequest {
  /**
   * The name of the workspace associated with the query.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The unique identifier for the query execution.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * Contains statistics about a completed query execution.
 *
 * @public
 */
export interface QueryStatistics {
  /**
   * The total number of rows returned by the query.
   *
   * @public
   */
  rowCount: number | undefined;

  /**
   * The total number of bytes scanned during query execution.
   *
   * @public
   */
  bytesScanned: number | undefined;

  /**
   * The total query execution time, in milliseconds.
   *
   * @public
   */
  executionTimeInMillis: number | undefined;
}

/**
 * Contains the response for the DescribeQuery operation.
 *
 * @public
 */
export interface DescribeQueryResponse {
  /**
   * The unique identifier for the query execution.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The current query status.
   *
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * The date and time when the query was submitted, in Unix epoch time.
   *
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * The date and time when the query reached a terminal state, in Unix epoch time. This field is present when the query status is COMPLETED, FAILED, or CANCELED.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The query execution statistics. This field is present when the query status is COMPLETED.
   *
   * @public
   */
  statistics?: QueryStatistics | undefined;

  /**
   * A human-readable error description. This field is present when the query status is FAILED.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Input for the DescribeSearch operation.
 *
 * @public
 */
export interface DescribeSearchRequest {
  /**
   * The name of the workspace the search belongs to.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The identifier of the search to describe.
   *
   * @public
   */
  searchId: string | undefined;
}

/**
 * Output of the DescribeSearch operation.
 *
 * @public
 */
export interface DescribeSearchResponse {
  /**
   * The unique identifier of the search.
   *
   * @public
   */
  searchId: string | undefined;

  /**
   * The name of the workspace the search runs against.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The current status of the search.
   *
   * @public
   */
  status: SearchStatus | undefined;

  /**
   * The natural-language query that was submitted for the search.
   *
   * @public
   */
  queryStatement: string | undefined;

  /**
   * The search strategy used for the search.
   *
   * @public
   */
  searchType: SearchType | undefined;

  /**
   * A human-readable explanation of the current status. Populated when the search has `FAILED`.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the search was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The group identifier associated with the search, if one was supplied on the request.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStorageConfigurationRequest {}

/**
 * Contains information about a customer managed Amazon S3 bucket.
 *
 * @public
 */
export interface CustomerManagedS3Storage {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Amazon S3 object. For more information about how to find the ARN for an Amazon S3 object, see [Amazon S3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  s3ResourceArn: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Contains information about the storage destination.
 *
 * @public
 */
export interface MultiLayerStorage {
  /**
   * Contains information about a customer managed Amazon S3 bucket.
   *
   * @public
   */
  customerManagedS3Storage: CustomerManagedS3Storage | undefined;
}

/**
 * The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
 *
 * @public
 */
export interface RetentionPeriod {
  /**
   * The number of days that your data is kept.
   *
   * > **Note:** If you specified a value for this parameter, the `unlimited` parameter must be `false`.
   *
   * @public
   */
  numberOfDays?: number | undefined;

  /**
   * If true, your data is kept indefinitely.
   *
   * > **Note:** If configured to `true`, you must not specify a value for the `numberOfDays` parameter.
   *
   * @public
   */
  unlimited?: boolean | undefined;
}

/**
 * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
 *
 * @public
 */
export interface WarmTierRetentionPeriod {
  /**
   * The number of days the data is stored in the warm tier.
   *
   * @public
   */
  numberOfDays?: number | undefined;

  /**
   * If set to true, the data is stored indefinitely in the warm tier.
   *
   * @public
   */
  unlimited?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeStorageConfigurationResponse {
  /**
   * The storage tier that you specified for your data. The `storageType` parameter can be one of the following values:
   *
   * - `SITEWISE_DEFAULT_STORAGE` – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.
   * - `MULTI_LAYER_STORAGE` – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.
   *
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * Contains information about the storage destination.
   *
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The `disassociatedDataStorage` can be one of the following values:
   *
   * - `ENABLED` – IoT SiteWise accepts time series that aren't associated with asset properties.
   *
   *   > **Important:** After the `disassociatedDataStorage` is enabled, you can't disable it.
   * - `DISABLED` – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.
   *
   * For more information, see [Data streams](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
   *
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * Contains current status information for the configuration.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * The date the storage configuration was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate?: Date | undefined;

  /**
   * A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.
   *
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
   *
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * Describes the configuration for ingesting NULL and NaN data. By default the feature is allowed. The feature is disallowed if the value is `true`.
   *
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * Request structure for DescribeTask operation.
 *
 * @public
 */
export interface DescribeTaskRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the task.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * The version number of the task to retrieve. If not specified, returns the latest version.
   *
   * @public
   */
  taskVersion?: string | undefined;
}

/**
 * Response structure for DescribeTask operation.
 *
 * @public
 */
export interface DescribeTaskResponse {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the task.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * The description of the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the task.
   *
   * @public
   */
  taskArn: string | undefined;

  /**
   * The version of the task.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The task execution configuration. Contains a [containerTaskConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html) for custom container workloads.
   *
   * @public
   */
  taskConfiguration: TaskConfiguration | undefined;

  /**
   * The current lifecycle status of the task.
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * The time the task was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time the task was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTimeSeriesRequest {
  /**
   * The alias that identifies the time series.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTimeSeriesResponse {
  /**
   * The ID of the asset in which the asset property was created.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the time series.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The data type of the time series.
   *
   * If you specify `STRUCT`, you must also specify `dataTypeSpec` to identify the type of the structure for this time series.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The data type of the structure for this time series. This parameter is required for time series that have the `STRUCT` data type.
   *
   * The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use `AWS/ALARM_STATE` for alarm state in alarm composite models.
   *
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * The date that the time series was created, in Unix epoch time.
   *
   * @public
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * The date that the time series was last updated, in Unix epoch time.
   *
   * @public
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the time series, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}`
   *
   * @public
   */
  timeSeriesArn: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * Contains the encryption configuration information for a workspace.
 *
 * @public
 */
export interface WorkspaceEncryptionConfigurationInfo {
  /**
   * The type of encryption used for the workspace.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The key ARN of the KMS key used for KMS encryption if `encryptionType` is `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * The ARN of the workspace.
   *
   * @public
   */
  workspaceArn: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The description of the workspace.
   *
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * The status of the workspace, which contains the state and any error message.
   *
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;

  /**
   * The encryption configuration information for the workspace.
   *
   * @public
   */
  encryptionConfiguration?: WorkspaceEncryptionConfigurationInfo | undefined;

  /**
   * The date the workspace was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date the workspace was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DisassociateAssetsRequest {
  /**
   * The ID of the parent asset from which to disassociate the child asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.) Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  hierarchyId: string | undefined;

  /**
   * The ID of the child asset to disassociate. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  childAssetId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTimeSeriesFromAssetPropertyRequest {
  /**
   * The alias that identifies the time series.
   *
   * @public
   */
  alias: string | undefined;

  /**
   * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of the asset property. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteActionRequest {
  /**
   * The resource the action will be taken on.
   *
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * The ID of the action definition.
   *
   * @public
   */
  actionDefinitionId: string | undefined;

  /**
   * The JSON payload of the action.
   *
   * @public
   */
  actionPayload: ActionPayload | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The detailed resource this action resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface ExecuteActionResponse {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryRequest {
  /**
   * The IoT SiteWise query statement.
   *
   * @public
   */
  queryStatement: string | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * - Minimum is 1
   * - Maximum is 20000
   * - Default is 20000
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The data type of the column.
 *
 * @public
 */
export interface ColumnType {
  /**
   * The allowed data types that the column has as it's value.
   *
   * @public
   */
  scalarType?: ScalarType | undefined;
}

/**
 * A description of the column in the query results.
 *
 * @public
 */
export interface ColumnInfo {
  /**
   * The name of the column description.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the column description.
   *
   * @public
   */
  type?: ColumnType | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesRequest {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The data aggregating function.
   *
   * @public
   */
  aggregateTypes: AggregateType[] | undefined;

  /**
   * The time interval over which to aggregate data.
   *
   * @public
   */
  resolution: string | undefined;

  /**
   * The quality by which to filter asset data.
   *
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  endDate: Date | undefined;

  /**
   * The chronological sorting order of the requested information.
   *
   * Default: `ASCENDING`
   *
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.
   *
   * - The size of the result set is equal to 1 MB.
   * - The number of data points in the result set is equal to the value of `maxResults`. The maximum value of `maxResults` is 2500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesResponse {
  /**
   * The requested aggregated values.
   *
   * @public
   */
  aggregatedValues: AggregatedValue[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueRequest {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueResponse {
  /**
   * The current asset property value.
   *
   * @public
   */
  propertyValue?: AssetPropertyValue | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryRequest {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The quality by which to filter asset data.
   *
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * The chronological sorting order of the requested information.
   *
   * Default: `ASCENDING`
   *
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.
   *
   * - The size of the result set is equal to 4 MB.
   * - The number of data points in the result set is equal to the value of `maxResults`. The maximum value of `maxResults` is 20000.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryResponse {
  /**
   * The asset property's value history.
   *
   * @public
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request to retrieve video data for a specific time range. Exactly one of timeSeriesId or propertyAlias must be provided.
 *
 * @public
 */
export interface GetCaptureDataRequest {
  /**
   * The name of the workspace that contains the capture source.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The start time for the video data range.
   *
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * The end time for the video data range. Must be greater than startTime.
   *
   * @public
   */
  endTime: TimeInNanos | undefined;

  /**
   * The time series ID that identifies the capture source. Mutually exclusive with propertyAlias.
   *
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * The property alias that identifies the capture source. Mutually exclusive with timeSeriesId.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The optional format settings for the output.
   *
   * @public
   */
  formatSettings?: FormatSettings | undefined;

  /**
   * The token from a previous response used to continue retrieving data.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Response containing the video data.
 *
 * @public
 */
export interface GetCaptureDataResponse {
  /**
   * The binary video data.
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * The actual start time of the returned data.
   *
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * The actual end time of the returned data.
   *
   * @public
   */
  endTime: TimeInNanos | undefined;

  /**
   * The type of the returned data.
   *
   * @public
   */
  dataType: VideoDataType | undefined;

  /**
   * The token used to retrieve the next chunk. Absent if no more data is available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesRequest {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  startTimeInSeconds: number | undefined;

  /**
   * The nanosecond offset converted from `startTimeInSeconds`.
   *
   * @public
   */
  startTimeOffsetInNanos?: number | undefined;

  /**
   * The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  endTimeInSeconds: number | undefined;

  /**
   * The nanosecond offset converted from `endTimeInSeconds`.
   *
   * @public
   */
  endTimeOffsetInNanos?: number | undefined;

  /**
   * The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality.
   *
   * @public
   */
  quality: Quality | undefined;

  /**
   * The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends.
   *
   * @public
   */
  intervalInSeconds: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. If not specified, the default value is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The interpolation type.
   *
   * Valid values: `LINEAR_INTERPOLATION | LOCF_INTERPOLATION`
   *
   * - `LINEAR_INTERPOLATION` – Estimates missing data using [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).
   *
   *   For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on.
   * - `LOCF_INTERPOLATION` – Estimates missing data using last observation carried forward interpolation
   *
   *   If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found.
   *
   *   For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval.
   *
   * > **Note:**
   * >
   * > - If you specify a value for the `intervalWindowInSeconds` parameter, the value for the `type` parameter must be `LINEAR_INTERPOLATION`.
   * > - If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points.
   *
   * For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on.
   *
   * @public
   */
  intervalWindowInSeconds?: number | undefined;
}

/**
 * Contains information about an interpolated asset property value.
 *
 * @public
 */
export interface InterpolatedAssetPropertyValue {
  /**
   * Contains a timestamp with optional nanosecond granularity.
   *
   * @public
   */
  timestamp: TimeInNanos | undefined;

  /**
   * Contains an asset property value (of a single type only).
   *
   * @public
   */
  value: Variant | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesResponse {
  /**
   * The requested interpolated values.
   *
   * @public
   */
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * The name of the workspace associated with the query.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The unique identifier for the query execution.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains metadata about a column in the query results.
 *
 * @public
 */
export interface ColumnInformation {
  /**
   * The name of the column.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the column. Valid values are STRING, DOUBLE, BOOLEAN, INTEGER, TIMESTAMP, and VARIANT.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * Contains the response for the GetQueryResults operation.
 *
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * A list of column metadata for the query results. Each entry contains the column name and data type. Present when the query status is COMPLETED.
   *
   * @public
   */
  columnInfo?: ColumnInformation[] | undefined;

  /**
   * The result rows. Each row is a list of string column values, positional to match the columnInfo order. Present when the query status is COMPLETED.
   *
   * @public
   */
  rows?: (string | null)[][] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for the GetSearchResults operation.
 *
 * @public
 */
export interface GetSearchResultsRequest {
  /**
   * The identifier of the search whose results are retrieved.
   *
   * @public
   */
  searchId: string | undefined;

  /**
   * The name of the workspace the search belongs to.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The maximum number of results to return in a single page. Valid range is 1 to 10,000; if omitted, a service-defined default is used.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous GetSearchResults call. Provide it to retrieve the next page of results; omit it to retrieve the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A single matching segment of time-series data returned by a search.
 *
 * @public
 */
export interface SearchResult {
  /**
   * The identifier of the search that produced this result.
   *
   * @public
   */
  searchId: string | undefined;

  /**
   * The name of the workspace the search ran against.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The identifier of the dataset that contains the matching data.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The identifier of the time series that contains the matching data.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The start of the matching time-series segment, in nanoseconds since the Unix epoch.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The end of the matching time-series segment, in nanoseconds since the Unix epoch.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * The timestamp of the most relevant point within the matching segment, in nanoseconds since the Unix epoch.
   *
   * @public
   */
  topTimestamp: TimeInNanos | undefined;

  /**
   * The relevance score of this result. Higher scores indicate a stronger match.
   *
   * @public
   */
  score: number | undefined;
}

/**
 * Output of the GetSearchResults operation.
 *
 * @public
 */
export interface GetSearchResultsResponse {
  /**
   * A page of search results, ordered by descending relevance score.
   *
   * @public
   */
  searchResults: SearchResult[] | undefined;

  /**
   * The pagination token to use in a subsequent GetSearchResults call to retrieve the next page. Absent when there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface InvokeAssistantRequest {
  /**
   * The ID assigned to a conversation. IoT SiteWise automatically generates a unique ID for you, and this parameter is never required. However, if you prefer to have your own ID, you must specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * A text message sent to the SiteWise Assistant by the user.
   *
   * @public
   */
  message: string | undefined;

  /**
   * Specifies if to turn trace on or not. It is used to track the SiteWise Assistant's reasoning, and data access process.
   *
   * @public
   */
  enableTrace?: boolean | undefined;
}

/**
 * Contains the cited text from the data source.
 *
 * @public
 */
export interface Content {
  /**
   * The cited text from the data source.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Contains location information about the cited text and where it's stored.
 *
 * @public
 */
export interface Location {
  /**
   * The URI of the location.
   *
   * @public
   */
  uri?: string | undefined;
}

/**
 * The data source for the dataset.
 *
 * @public
 */
export interface Source {
  /**
   * Contains the ARN of the dataset. If the source is Kendra, it's the ARN of the Kendra index.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Contains the location information where the cited text is originally stored. For example, if the data source is Kendra, and the text synchronized is from an S3 bucket, then the location refers to an S3 object.
   *
   * @public
   */
  location?: Location | undefined;
}

/**
 * Contains information about the dataset use and it's source.
 *
 * @public
 */
export interface DataSetReference {
  /**
   * The [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the dataset. The format is `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}`.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * The data source for the dataset.
   *
   * @public
   */
  source?: Source | undefined;
}

/**
 * Contains the reference information.
 *
 * @public
 */
export interface Reference {
  /**
   * Contains the dataset reference information.
   *
   * @public
   */
  dataset?: DataSetReference | undefined;
}

/**
 * Contains text content to which the SiteWise Assistant refers to, and generate the final response. It also contains information about the source.
 *
 * @public
 */
export interface Citation {
  /**
   * Contains information about the data source.
   *
   * @public
   */
  reference?: Reference | undefined;

  /**
   * Contains the cited text from the data source.
   *
   * @public
   */
  content?: Content | undefined;
}

/**
 * This contains the SiteWise Assistant's response and the corresponding citation.
 *
 * @public
 */
export interface InvocationOutput {
  /**
   * The text message of the SiteWise Assistant's response.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of citations, and related information for the SiteWise Assistant's response.
   *
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * Contains tracing information of the SiteWise Assistant's reasoning and data access.
 *
 * @public
 */
export interface Trace {
  /**
   * The cited text from the data source.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Contains the response, citation, and trace from the SiteWise Assistant.
 *
 * @public
 */
export type ResponseStream =
  | ResponseStream.AccessDeniedExceptionMember
  | ResponseStream.ConflictingOperationExceptionMember
  | ResponseStream.InternalFailureExceptionMember
  | ResponseStream.InvalidRequestExceptionMember
  | ResponseStream.LimitExceededExceptionMember
  | ResponseStream.OutputMember
  | ResponseStream.ResourceNotFoundExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.TraceMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * Contains tracing information of the SiteWise Assistant's reasoning and data access.
   *
   * @public
   */
  export interface TraceMember {
    trace: Trace;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * Contains the SiteWise Assistant's response.
   *
   * @public
   */
  export interface OutputMember {
    trace?: never;
    output: InvocationOutput;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * Access is denied.
   *
   * @public
   */
  export interface AccessDeniedExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException: AccessDeniedException;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
   *
   * @public
   */
  export interface ConflictingOperationExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException: ConflictingOperationException;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * IoT SiteWise can't process your request right now. Try again later.
   *
   * @public
   */
  export interface InternalFailureExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException: InternalFailureException;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
   *
   * @public
   */
  export interface InvalidRequestExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException: InvalidRequestException;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
   *
   * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  export interface LimitExceededExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException: LimitExceededException;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * The requested resource can't be found.
   *
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
   *
   * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException: ThrottlingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    trace: (value: Trace) => T;
    output: (value: InvocationOutput) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictingOperationException: (value: ConflictingOperationException) => T;
    internalFailureException: (value: InternalFailureException) => T;
    invalidRequestException: (value: InvalidRequestException) => T;
    limitExceededException: (value: LimitExceededException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    throttlingException: (value: ThrottlingException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeAssistantResponse {
  /**
   * Contains the response, citation, and trace from the SiteWise Assistant.
   *
   * @public
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * The ID of the conversation, in UUID format. This ID uniquely identifies the conversation within IoT SiteWise.
   *
   * @public
   */
  conversationId: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify `identityId`.
   *
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * The ID of the identity. This parameter is required if you specify `USER` or `GROUP` for `identityType`.
   *
   * @public
   */
  identityId?: string | undefined;

  /**
   * The type of resource (portal or project). This parameter is required if you specify `resourceId`.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The ID of the resource. This parameter is required if you specify `resourceType`.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The ARN of the IAM user. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*. This parameter is required if you specify `IAM` for `identityType`.
   *
   * @public
   */
  iamArn?: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * A list that summarizes each access policy.
   *
   * @public
   */
  accessPolicySummaries: AccessPolicySummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * The type of resource.
   *
   * @public
   */
  targetResourceType: TargetResourceType | undefined;

  /**
   * The ID of the target resource.
   *
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of the resolved resource.
   *
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * The ID of the resolved resource.
   *
   * @public
   */
  resolveToResourceId?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * A list that summarizes the actions associated with the specified asset.
   *
   * @public
   */
  actionSummaries: ActionSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * Maximum number of results to return
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next Page Token
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * Next Page Token
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of applications
   *
   * @public
   */
  applications: ApplicationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAssetModelCompositeModelsRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is `LATEST`. See [Asset model versions](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelCompositeModelsResponse {
  /**
   * A list that summarizes each composite model.
   *
   * @public
   */
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelPropertiesRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. If not specified, the default value is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the requested list of asset model properties. You can choose one of the following options:
   *
   * - `ALL` – The list includes all asset model properties for a given asset model ID.
   * - `BASE` – The list includes only base asset model properties for a given asset model ID.
   *
   * Default: `BASE`
   *
   * @public
   */
  filter?: ListAssetModelPropertiesFilter | undefined;

  /**
   * The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is `LATEST`. See [Asset model versions](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelPropertiesResponse {
  /**
   * A list that summarizes the properties associated with the specified asset model.
   *
   * @public
   */
  assetModelPropertySummaries: AssetModelPropertySummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelsRequest {
  /**
   * The type of asset model. If you don't provide an `assetModelTypes`, all types of asset models are returned.
   *
   * - **ASSET_MODEL** – An asset model that you can use to create assets. Can't be included as a component in another asset model.
   * - **COMPONENT_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
   * - **INTERFACE** – An interface is a type of model that defines a standard structure that can be applied to different asset models.
   *
   * @public
   */
  assetModelTypes?: AssetModelType[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is `LATEST`. See [Asset model versions](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelsResponse {
  /**
   * A list that summarizes each asset model.
   *
   * @public
   */
  assetModelSummaries: AssetModelSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetPropertiesRequest {
  /**
   * The ID of the asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. If not specified, the default value is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the requested list of asset properties. You can choose one of the following options:
   *
   * - `ALL` – The list includes all asset properties for a given asset model ID.
   * - `BASE` – The list includes only base asset properties for a given asset model ID.
   *
   * Default: `BASE`
   *
   * @public
   */
  filter?: ListAssetPropertiesFilter | undefined;
}

/**
 * @public
 */
export interface ListAssetPropertiesResponse {
  /**
   * A list that summarizes the properties associated with the specified asset.
   *
   * @public
   */
  assetPropertySummaries: AssetPropertySummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetRelationshipsRequest {
  /**
   * The ID of the asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The type of traversal to use to identify asset relationships. Choose the following option:
   *
   * - `PATH_TO_ROOT` – Identify the asset's parent assets up to the root asset. The asset that you specify in `assetId` is the first result in the list of `assetRelationshipSummaries`, and the root asset is the last result.
   *
   * @public
   */
  traversalType: TraversalType | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetRelationshipsResponse {
  /**
   * A list that summarizes each asset relationship.
   *
   * @public
   */
  assetRelationshipSummaries: AssetRelationshipSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetsRequest {
  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ID of the asset model by which to filter the list of assets. This parameter is required if you choose `ALL` for `filter`. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * The filter for the requested list of assets. Choose one of the following options:
   *
   * - `ALL` – The list includes all assets for a given asset model ID. The `assetModelId` parameter is required if you filter by `ALL`.
   * - `TOP_LEVEL` – The list includes only top-level assets in the asset hierarchy tree.
   *
   * Default: `ALL`
   *
   * @public
   */
  filter?: ListAssetsFilter | undefined;
}

/**
 * @public
 */
export interface ListAssetsResponse {
  /**
   * A list that summarizes each asset.
   *
   * @public
   */
  assetSummaries: AssetSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAssetsRequest {
  /**
   * The ID of the asset to query. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * (Optional) If you don't provide a `hierarchyId`, all the immediate assets in the `traversalDirection` will be returned.
   *
   * The ID of the hierarchy by which child assets are associated to the asset. (This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.)
   *
   * For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  hierarchyId?: string | undefined;

  /**
   * The direction to list associated assets. Choose one of the following options:
   *
   * - `CHILD` – The list includes all child assets associated to the asset.
   * - `PARENT` – The list includes the asset's parent asset.
   *
   * Default: `CHILD`
   *
   * @public
   */
  traversalDirection?: TraversalDirection | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAssetsResponse {
  /**
   * A list that summarizes the associated assets.
   *
   * @public
   */
  assetSummaries: AssociatedAssetsSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBulkImportJobsRequest {
  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * You can use a filter to select the bulk import jobs that you want to retrieve.
   *
   * @public
   */
  filter?: ListBulkImportJobsFilter | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * Contains the job summary information.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The ID of the job.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The unique name that helps identify the job request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The status of the bulk import job can be one of following values:
   *
   * - `PENDING` – IoT SiteWise is waiting for the current bulk import job to finish.
   * - `CANCELLED` – The bulk import job has been canceled.
   * - `RUNNING` – IoT SiteWise is processing your request to import your data from Amazon S3.
   * - `COMPLETED` – IoT SiteWise successfully completed your request to import data from Amazon S3.
   * - `FAILED` – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.
   * - `COMPLETED_WITH_FAILURES` – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.
   *
   * @public
   */
  status: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListBulkImportJobsResponse {
  /**
   * One or more job summaries to list.
   *
   * @public
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCompositionRelationshipsRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of the components of the composite model.
 *
 * @public
 */
export interface CompositionRelationshipSummary {
  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of a composite model on this asset model.
   *
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * The composite model type. Valid values are `AWS/ALARM`, `CUSTOM`, or `AWS/L4E_ANOMALY`.
   *
   * @public
   */
  assetModelCompositeModelType: string | undefined;
}

/**
 * @public
 */
export interface ListCompositionRelationshipsResponse {
  /**
   * A list that summarizes each composition relationship.
   *
   * @public
   */
  compositionRelationshipSummaries: CompositionRelationshipSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter used to match specific data binding values based on criteria. This filter allows searching for data bindings by asset, asset model, asset property, or asset model property.
 *
 * @public
 */
export interface DataBindingValueFilter {
  /**
   * Filter criteria for matching data bindings based on a specific asset. Used to list all data bindings referencing a particular asset or its properties.
   *
   * @public
   */
  asset?: AssetBindingValueFilter | undefined;

  /**
   * Filter criteria for matching data bindings based on a specific asset model. Used to list all data bindings referencing a particular asset model or its properties.
   *
   * @public
   */
  assetModel?: AssetModelBindingValueFilter | undefined;

  /**
   * Filter criteria for matching data bindings based on a specific asset property. Used to list all data bindings referencing a particular property of an asset.
   *
   * @public
   */
  assetProperty?: AssetPropertyBindingValueFilter | undefined;

  /**
   * Filter criteria for matching data bindings based on a specific asset model property. Used to list all data bindings referencing a particular property of an asset model.
   *
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValueFilter | undefined;
}

/**
 * @public
 */
export interface ListComputationModelDataBindingUsagesRequest {
  /**
   * A filter used to limit the returned data binding usages based on specific data binding values. You can filter by asset, asset model, asset property, or asset model property to find all computation models using these specific data sources.
   *
   * @public
   */
  dataBindingValueFilter: DataBindingValueFilter | undefined;

  /**
   * The token used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a value used in a data binding. It can be an asset property or an asset model property.
 *
 * @public
 */
export interface DataBindingValue {
  /**
   * Contains information about an `assetModelProperty` binding value.
   *
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValue | undefined;

  /**
   * The asset property value used in the data binding.
   *
   * @public
   */
  assetProperty?: AssetPropertyBindingValue | undefined;
}

/**
 * Represents a data binding that matches the specified filter criteria.
 *
 * @public
 */
export interface MatchedDataBinding {
  /**
   * The value of the matched data binding.
   *
   * @public
   */
  value: DataBindingValue | undefined;
}

/**
 * A summary of how a specific data binding is used across computation models. This tracks dependencies between data sources and computation models, allowing you to understand the impact of changes to data sources.
 *
 * @public
 */
export interface ComputationModelDataBindingUsageSummary {
  /**
   * The list of computation model IDs that use this data binding. This allows identification of all computation models affected by changes to the referenced data source.
   *
   * @public
   */
  computationModelIds: string[] | undefined;

  /**
   * The data binding matched by the filter criteria. Contains details about specific data binding values used by the computation models.
   *
   * @public
   */
  matchedDataBinding: MatchedDataBinding | undefined;
}

/**
 * @public
 */
export interface ListComputationModelDataBindingUsagesResponse {
  /**
   * A list of summaries describing the data binding usages across computation models. Each summary includes the computation model IDs and the matched data binding details.
   *
   * @public
   */
  dataBindingUsageSummaries: ComputationModelDataBindingUsageSummary[] | undefined;

  /**
   * The token for the next set of paginated results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelResolveToResourcesRequest {
  /**
   * The ID of the computation model for which to list resolved resources.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The token used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of the resource that a computation model resolves to.
 *
 * @public
 */
export interface ComputationModelResolveToResourceSummary {
  /**
   * The detailed resource this execution summary resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface ListComputationModelResolveToResourcesResponse {
  /**
   * A list of summaries describing the distinct resources that this computation model resolves to when actions were executed.
   *
   * @public
   */
  computationModelResolveToResourceSummaries: ComputationModelResolveToResourceSummary[] | undefined;

  /**
   * The token for the next set of paginated results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelsRequest {
  /**
   * The type of computation model. If a `computationModelType` is not provided, all types of computation models are returned.
   *
   * @public
   */
  computationModelType?: ComputationModelType | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a computation model.
 *
 * @public
 */
export interface ComputationModelSummary {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the computation model, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}`
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the computation model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the computation model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the computation model.
   *
   * @public
   */
  type: ComputationModelType | undefined;

  /**
   * The model creation date, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The time the model was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * The current status of the computation model.
   *
   * @public
   */
  status: ComputationModelStatus | undefined;

  /**
   * The version of the computation model.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelsResponse {
  /**
   * A list summarizing each computation model.
   *
   * @public
   */
  computationModelSummaries: ComputationModelSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * The ID of the project.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a dashboard summary.
 *
 * @public
 */
export interface DashboardSummary {
  /**
   * The ID of the dashboard.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the dashboard
   *
   * @public
   */
  name: string | undefined;

  /**
   * The dashboard's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date the dashboard was created, in Unix epoch time.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the dashboard was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * A list that summarizes each dashboard in the project.
   *
   * @public
   */
  dashboardSummaries: DashboardSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentRelationshipsRequest {
  /**
   * The ID of the session dataset to list data segment relationships for.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a data segment relationship between a source session dataset that contains the data and a curated dataset that references it, including the time series and timestamp range.
 *
 * @public
 */
export interface DataSegmentRelationshipSummary {
  /**
   * The ID of the curated dataset that references the data segment.
   *
   * @public
   */
  targetDatasetId: string | undefined;

  /**
   * The ID of the source session dataset that contains the data segment.
   *
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentRelationshipsResponse {
  /**
   * A list that summarizes each data segment relationship.
   *
   * @public
   */
  dataSegmentRelationshipSummaries: DataSegmentRelationshipSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentsRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The version of the dataset to list data segments for.
   *
   * @public
   */
  datasetVersion?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains enrichment status information for a data segment.
 *
 * @public
 */
export interface DataSegmentEnrichment {
  /**
   * The enrichment status of the data segment.
   *
   * @public
   */
  status: EnrichmentStatus | undefined;

  /**
   * The date the data segment was last enriched, in Unix epoch time.
   *
   * @public
   */
  lastEnrichedAt?: Date | undefined;
}

/**
 * Contains summary information about a data segment, including its source dataset, time series, timestamp range, and enrichment status.
 *
 * @public
 */
export interface DataSegmentSummary {
  /**
   * The ID of the source dataset that contains the data segment.
   *
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * The alias of the time series.
   *
   * @public
   */
  alias: string | undefined;

  /**
   * The data type of the time series.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The enrichment information for the data segment.
   *
   * @public
   */
  enrichment?: DataSegmentEnrichment | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentsResponse {
  /**
   * A list that summarizes each data segment.
   *
   * @public
   */
  dataSegments: DataSegmentSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request to list dataset export jobs for a workspace.
 *
 * @public
 */
export interface ListDatasetExportJobsRequest {
  /**
   * The name of the workspace whose dataset export jobs should be listed.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The optional filter that returns only jobs matching the given filter value. Defaults to ALL.
   *
   * @public
   */
  filter?: DatasetExportJobFilter | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a dataset export job.
 *
 * @public
 */
export interface ExportJobSummary {
  /**
   * The unique identifier for the dataset export job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The current status of the dataset export job.
   *
   * @public
   */
  status: DatasetExportJobStatus | undefined;

  /**
   * The timestamp when the job started processing.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the job completed, or null if the job is still running.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The S3 URI where output clips are written.
   *
   * @public
   */
  destinationS3Uri: string | undefined;
}

/**
 * Response for list dataset export jobs request.
 *
 * @public
 */
export interface ListDatasetExportJobsResponse {
  /**
   * A list of dataset export job summaries.
   *
   * @public
   */
  jobs: ExportJobSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * The type of data source for the dataset.
   *
   * @public
   */
  sourceType: DatasetSourceType | undefined;

  /**
   * The name of the workspace to filter datasets by.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * The type of dataset to filter by: a session dataset, a curated dataset, or a connection to an external datasource.
   *
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary details for the dataset.
 *
 * @public
 */
export interface DatasetSummary {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the dataset. The format is `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description about the dataset, and its functionality.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The data source type of the dataset.
   *
   * @public
   */
  sourceType?: DatasetSourceType | undefined;

  /**
   * The type of dataset: a session dataset, a curated dataset, or a connection to an external datasource.
   *
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * The dataset creation date, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The date the dataset was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * The status of the dataset. This contains the state and any error messages. The state is `ACTIVE` when ready to use.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The enrichment status of the dataset.
   *
   * @public
   */
  enrichmentStatus?: DatasetEnrichment | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * A list that summarizes the dataset response.
   *
   * @public
   */
  datasetSummaries: DatasetSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface ListEnrichmentJobsRequest {
  /**
   * The name of the IoT SiteWise workspace to list enrichment jobs from.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * Filter jobs by dataset ID. Returns only jobs analyzing data from the specified dataset.
   *
   * @public
   */
  datasetId?: string | undefined;

  /**
   * Filter by property alias (human-readable sensor name). Specify either propertyAlias or timeSeriesId, but not both. Returns only jobs analyzing the specified property alias.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * Filter by time series ID (system identifier). Specify either timeSeriesId or propertyAlias, but not both. Returns only jobs analyzing the specified time series.
   *
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * Filter by job status. Returns only jobs in the specified status. Use RUNNING to find active jobs, or FAILED to identify jobs requiring attention.
   *
   * @public
   */
  status?: EnrichmentJobStatus | undefined;

  /**
   * Filter by enrichment job type. Currently only EVENT_DETECTION is supported. Use this filter to future-proof queries when additional job types are added.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * The exclusive start of the date range for filtering jobs by creation time. Jobs created after this timestamp are included. Use ISO 8601 format (e.g., 2024-01-01T00:00:00Z).
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The inclusive end of the date range for filtering jobs by creation time. Jobs created on or before this timestamp are included. Use ISO 8601 format (e.g., 2024-01-31T23:59:59Z).
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * Maximum number of jobs to return per page. Defaults to 50 if not specified. Use smaller values for faster responses, larger values to reduce API calls.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token from a previous ListEnrichmentJobs response. Include this token to retrieve the next page of results. Omit for the first request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information for an enrichment job returned by ListEnrichmentJobs. This lightweight representation includes identifiers, status, and key metadata without the full job configuration.
 *
 * Use DescribeEnrichmentJob to retrieve:
 *
 * - Complete job configuration (trim settings, full parameters)
 * - Detailed timestamps (completedAt, cancelledAt)
 * - Failure messages for failed jobs
 *
 * The summary is optimized for display in lists and dashboards, providing enough information to identify and filter jobs without the overhead of full configuration details.
 *
 * @public
 */
export interface EnrichmentJobSummary {
  /**
   * Unique identifier for the enrichment job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * Current status of the job: PENDING, RUNNING, COMPLETED, FAILED, TIMED_OUT, or CANCELLED. Use this to quickly identify active jobs or jobs requiring attention.
   *
   * @public
   */
  status: EnrichmentJobStatus | undefined;

  /**
   * The name of the IoT SiteWise workspace containing this job.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The type of enrichment job. Currently EVENT_DETECTION is the only supported type.
   *
   * @public
   */
  jobType: JobType | undefined;

  /**
   * The dataset being enriched. Useful for filtering and identifying jobs without fetching the full configuration. This allows you to quickly find all jobs related to a specific dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The property alias (human-readable sensor name) of the time series being enriched. Present when the job was created using a propertyAlias. Use this to identify which sensor the job analyzes.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The system identifier of the time series being enriched. Present when the job was created using a timeSeriesId. Use this to identify which time series the job analyzes.
   *
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * Timestamp when the job was created in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp of the last job status change in ISO 8601 format. Use this to track recent activity and identify stale jobs. For active jobs, this shows the last time the job transitioned to a new status.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListEnrichmentJobsResponse {
  /**
   * Array of job summaries matching the filter criteria, ordered by creation time descending (newest first). Each summary includes key identifiers (jobId, datasetId, propertyAlias/timeSeriesId) and status information without the full job configuration. Use DescribeEnrichmentJob to retrieve complete details.
   *
   * @public
   */
  jobs: EnrichmentJobSummary[] | undefined;

  /**
   * Pagination token to retrieve the next page of results. If present, more jobs exist that match the filter criteria. Include this token in a subsequent ListEnrichmentJobs request to retrieve the next page. If absent, you have retrieved all matching jobs.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * The type of the target resource.
   *
   * @public
   */
  targetResourceType: TargetResourceType | undefined;

  /**
   * The ID of the target resource.
   *
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * The type of the resolved resource.
   *
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * The ID of the resolved resource.
   *
   * @public
   */
  resolveToResourceId?: string | undefined;

  /**
   * The token used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results returned for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The type of action exectued.
   *
   * @public
   */
  actionType?: string | undefined;
}

/**
 * Contains the execution summary of the computation model.
 *
 * @public
 */
export interface ExecutionSummary {
  /**
   * The ID of the execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The type of action exectued.
   *
   * @public
   */
  actionType?: string | undefined;

  /**
   * The resource the action will be taken on. This can include asset-based resources and computation model resources.
   *
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * The version of the target resource.
   *
   * @public
   */
  targetResourceVersion: string | undefined;

  /**
   * The detailed resource this execution resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * The time the process started.
   *
   * @public
   */
  executionStartTime: Date | undefined;

  /**
   * The time the process ended.
   *
   * @public
   */
  executionEndTime?: Date | undefined;

  /**
   * The status of the execution process.
   *
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * The execution entity version associated with the summary.
   *
   * @public
   */
  executionEntityVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * Contains the list of execution summaries of the computation models.
   *
   * @public
   */
  executionSummaries: ExecutionSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a gateway.
 *
 * @public
 */
export interface GatewaySummary {
  /**
   * The ID of the gateway device.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  gatewayName: string | undefined;

  /**
   * The gateway's platform configuration. You can only specify one platform type in a gateway.
   *
   * (Legacy only) For Greengrass V1 gateways, specify the `greengrass` parameter with a valid Greengrass group ARN.
   *
   * For Greengrass V2 gateways, specify the `greengrassV2` parameter with a valid core device thing name. If creating a V3 gateway (`gatewayVersion=3`), you must also specify the `coreDeviceOperatingSystem`.
   *
   * For Siemens Industrial Edge gateways, specify the `siemensIE` parameter with a valid IoT Core thing name.
   *
   * @public
   */
  gatewayPlatform?: GatewayPlatform | undefined;

  /**
   * The version of the gateway. A value of `3` indicates an MQTT-enabled, V3 gateway, while `2` indicates a Classic streams, V2 gateway.
   *
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use [DescribeGatewayCapabilityConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html).
   *
   * @public
   */
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[] | undefined;

  /**
   * The date the gateway was created, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The date the gateway was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * A list that summarizes each gateway.
   *
   * @public
   */
  gatewaySummaries: GatewaySummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInterfaceRelationshipsRequest {
  /**
   * The ID of the interface asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about an interface relationship, which defines how an interface is applied to an asset model. This summary provides the essential identifiers needed to retrieve detailed information about the relationship.
 *
 * @public
 */
export interface InterfaceRelationshipSummary {
  /**
   * The ID of the asset model that has the interface applied to it.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListInterfaceRelationshipsResponse {
  /**
   * A list that summarizes each interface relationship.
   *
   * @public
   */
  interfaceRelationshipSummaries: InterfaceRelationshipSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for ListPipelineExecutions operation.
 *
 * @public
 */
export interface ListPipelineExecutionsRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per request. This is an upper bound; the actual number of results may be less. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filter by execution state. If not specified, executions in all states are returned.
   *
   * @public
   */
  state?: PipelineExecutionState | undefined;

  /**
   * Inclusive lower bound on execution start time (ISO-8601). Only executions with startTime &gt;= startTimeAfter are returned. Cannot be combined with endTimeAfter or endTimeBefore.
   *
   * @public
   */
  startTimeAfter?: Date | undefined;

  /**
   * Exclusive upper bound on execution start time (ISO-8601). Only executions with startTime &lt; startTimeBefore are returned. Cannot be combined with endTimeAfter or endTimeBefore.
   *
   * @public
   */
  startTimeBefore?: Date | undefined;

  /**
   * Inclusive lower bound on execution end time (ISO-8601). Only executions with endTime &gt;= endTimeAfter are returned. Cannot be combined with startTimeAfter or startTimeBefore. Only matches executions in terminal states.
   *
   * @public
   */
  endTimeAfter?: Date | undefined;

  /**
   * Exclusive upper bound on execution end time (ISO-8601). Only executions with endTime &lt; endTimeBefore are returned. Cannot be combined with startTimeAfter or startTimeBefore. Only matches executions in terminal states.
   *
   * @public
   */
  endTimeBefore?: Date | undefined;
}

/**
 * Contains summary information about a pipeline execution.
 *
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * The unique identifier of the pipeline execution.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The pipeline version this execution ran against.
   *
   * @public
   */
  pipelineVersion: string | undefined;

  /**
   * The current execution status of the pipeline.
   *
   * @public
   */
  status: PipelineExecutionStatus | undefined;

  /**
   * Scheduling priority for the execution. When not specified, defaults to lowest priority.
   *
   * @public
   */
  executionPriority?: number | undefined;

  /**
   * The time the pipeline execution started, in Unix epoch time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time the pipeline execution completed, in Unix epoch time.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * Response structure for ListPipelineExecutions operation.
 *
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * A list that summarizes each pipeline execution.
   *
   * @public
   */
  pipelineExecutionSummaries: PipelineExecutionSummary[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for ListPipelines operation.
 *
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a pipeline.
 *
 * @public
 */
export interface PipelineSummary {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The description of the pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the pipeline.
   *
   * @public
   */
  pipelineArn: string | undefined;

  /**
   * The version of the pipeline.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current lifecycle status of the pipeline.
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * The time the pipeline was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time the pipeline was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for ListPipelines operation.
 *
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * A list that summarizes each pipeline in the workspace.
   *
   * @public
   */
  pipelineSummaries: PipelineSummary[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a portal summary.
 *
 * @public
 */
export interface PortalSummary {
  /**
   * The ID of the portal.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the portal.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The portal's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.
   *
   * @public
   */
  startUrl: string | undefined;

  /**
   * The date the portal was created, in Unix epoch time.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the portal was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate?: Date | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see [Using service roles for IoT SiteWise Monitor](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Contains information about the current status of a portal.
   *
   * @public
   */
  status: PortalStatus | undefined;

  /**
   * Define the type of portal. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalType?: PortalType | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * A list that summarizes each portal.
   *
   * @public
   */
  portalSummaries?: PortalSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectAssetsRequest {
  /**
   * The ID of the project.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProjectAssetsResponse {
  /**
   * A list that contains the IDs of each asset associated with the project.
   *
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * The ID of the portal.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * Default: 50
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains project summary information.
 *
 * @public
 */
export interface ProjectSummary {
  /**
   * The ID of the project.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The project's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date the project was created, in Unix epoch time.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the project was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * A list that summarizes each project in the portal.
   *
   * @public
   */
  projectSummaries: ProjectSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueriesRequest {
  /**
   * The name of the workspace to list queries for.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * An optional filter to return only queries with the specified status. The value must be one of the supported query statuses: SUBMITTED, RUNNING, COMPLETED, FAILED, CANCELED, or CANCELING.
   *
   * @public
   */
  filter?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a query.
 *
 * @public
 */
export interface QuerySummary {
  /**
   * The unique identifier for the query execution.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The current query status.
   *
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * The date and time when the query was submitted, in Unix epoch time.
   *
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * The date and time when the query reached a terminal state, in Unix epoch time.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * Contains the response for the ListQueries operation.
 *
 * @public
 */
export interface ListQueriesResponse {
  /**
   * A list of query summaries for the workspace.
   *
   * @public
   */
  queries: QuerySummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Optional filters for ListSearches. When multiple filters are set, a search must match all of them.
 *
 * @public
 */
export interface ListSearchesFilters {
  /**
   * Returns only searches whose status is one of the listed values.
   *
   * @public
   */
  statusFilter?: SearchStatus[] | undefined;

  /**
   * Returns only searches started at or after this time.
   *
   * @public
   */
  startedAfter?: Date | undefined;

  /**
   * Returns only searches started at or before this time.
   *
   * @public
   */
  startedBefore?: Date | undefined;

  /**
   * Returns only searches whose `groupId` is one of the listed values.
   *
   * @public
   */
  groupIdFilter?: string[] | undefined;

  /**
   * Returns only searches whose `searchType` is one of the listed values.
   *
   * @public
   */
  searchTypeFilter?: SearchType[] | undefined;
}

/**
 * Input for the ListSearches operation.
 *
 * @public
 */
export interface ListSearchesRequest {
  /**
   * The name of the workspace whose searches are listed.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The maximum number of searches to return in a single page. Valid range is 1 to 1,000; if omitted, a service-defined default is used.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous ListSearches call. Provide it to retrieve the next page; omit it to retrieve the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional filters that restrict which searches are returned.
   *
   * @public
   */
  listSearchesFilters?: ListSearchesFilters | undefined;
}

/**
 * A summary of a single search as returned by ListSearches.
 *
 * @public
 */
export interface SearchSummary {
  /**
   * The unique identifier of the search.
   *
   * @public
   */
  searchId: string | undefined;

  /**
   * The name of the workspace the search runs against.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The current status of the search.
   *
   * @public
   */
  status: SearchStatus | undefined;

  /**
   * The natural-language query that was submitted for the search.
   *
   * @public
   */
  queryStatement: string | undefined;

  /**
   * The search strategy used for the search.
   *
   * @public
   */
  searchType: SearchType | undefined;

  /**
   * A human-readable explanation of the current status. Populated when the search has `FAILED`.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The time at which the search was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The group identifier associated with the search, if one was supplied on the request.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * Output of the ListSearches operation.
 *
 * @public
 */
export interface ListSearchesResponse {
  /**
   * A page of search summaries, most recently started first.
   *
   * @public
   */
  searchSummaries: SearchSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent ListSearches call to retrieve the next page. Absent when there are no more searches.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of key-value pairs that contain metadata for the resource. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Request structure for ListTasks operation.
 *
 * @public
 */
export interface ListTasksRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a task.
 *
 * @public
 */
export interface TaskSummary {
  /**
   * The name of the task.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * The description of the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the task.
   *
   * @public
   */
  taskArn: string | undefined;

  /**
   * The version of the task.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current lifecycle status of the task.
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * The time the task was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time the task was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for ListTasks operation.
 *
 * @public
 */
export interface ListTasksResponse {
  /**
   * A list that summarizes each task in the workspace.
   *
   * @public
   */
  taskSummaries: TaskSummary[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesRequest {
  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The alias prefix of the time series.
   *
   * @public
   */
  aliasPrefix?: string | undefined;

  /**
   * The type of the time series. The time series type can be one of the following values:
   *
   * - `ASSOCIATED` – The time series is associated with an asset property.
   * - `DISASSOCIATED` – The time series isn't associated with any asset property.
   *
   * @public
   */
  timeSeriesType?: ListTimeSeriesType | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * Contains a summary of a time series (data stream).
 *
 * @public
 */
export interface TimeSeriesSummary {
  /**
   * The ID of the asset in which the asset property was created.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the time series.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The data type of the time series.
   *
   * If you specify `STRUCT`, you must also specify `dataTypeSpec` to identify the type of the structure for this time series.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The data type of the structure for this time series. This parameter is required for time series that have the `STRUCT` data type.
   *
   * The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use `AWS/ALARM_STATE` for alarm state in alarm composite models.
   *
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * The date that the time series was created, in Unix epoch time.
   *
   * @public
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * The date that the time series was last updated, in Unix epoch time.
   *
   * @public
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the time series, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}`
   *
   * @public
   */
  timeSeriesArn: string | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesResponse {
  /**
   * One or more time series summaries to list.
   *
   * @public
   */
  TimeSeriesSummaries: TimeSeriesSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a workspace, including its name, ARN, status, and creation and update timestamps.
 *
 * @public
 */
export interface WorkspaceSummary {
  /**
   * The name of the workspace.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the workspace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the workspace.
   *
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * The date the workspace was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date the workspace was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * A list that summarizes each workspace.
   *
   * @public
   */
  workspaceSummaries: WorkspaceSummary[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains configuration options for mapping properties from an interface asset model to an asset model where the interface is applied.
 *
 * @public
 */
export interface PropertyMappingConfiguration {
  /**
   * If true, properties are matched by name between the interface asset model and the asset model where the interface is applied.
   *
   * @public
   */
  matchByPropertyName?: boolean | undefined;

  /**
   * If true, missing properties from the interface asset model are automatically created in the asset model where the interface is applied.
   *
   * @public
   */
  createMissingProperty?: boolean | undefined;

  /**
   * A list of specific property mappings that override the automatic mapping by name when an interface is applied to an asset model.
   *
   * @public
   */
  overrides?: PropertyMapping[] | undefined;
}

/**
 * @public
 */
export interface PutAssetModelInterfaceRelationshipRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the interface asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * The configuration for mapping properties from the interface asset model to the asset model where the interface is applied. This configuration controls how properties are matched and created during the interface application process.
   *
   * @public
   */
  propertyMappingConfiguration: PropertyMappingConfiguration | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetModelInterfaceRelationshipResponse {
  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the interface asset model.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * The ARN of the asset model, which has the following format. `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}`
   *
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * Contains current status information for an asset model. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * The type of encryption used for the encryption configuration.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The Key ID of the customer managed key used for KMS encryption. This is required if you use `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * The type of encryption used for the encryption configuration.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The Key ARN of the KMS key used for KMS encryption if you use `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The status of the account configuration. This contains the `ConfigurationState`. If there is an error, it also contains the `ErrorDetails`.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * The logging options to set.
   *
   * @public
   */
  loggingOptions: LoggingOptions | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsResponse {}

/**
 * @public
 */
export interface PutStorageConfigurationRequest {
  /**
   * The storage tier that you specified for your data. The `storageType` parameter can be one of the following values:
   *
   * - `SITEWISE_DEFAULT_STORAGE` – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.
   * - `MULTI_LAYER_STORAGE` – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.
   *
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * Identifies a storage destination. If you specified `MULTI_LAYER_STORAGE` for the storage type, you must specify a `MultiLayerStorage` object.
   *
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The `disassociatedDataStorage` can be one of the following values:
   *
   * - `ENABLED` – IoT SiteWise accepts time series that aren't associated with asset properties.
   *
   *   > **Important:** After the `disassociatedDataStorage` is enabled, you can't disable it.
   * - `DISABLED` – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.
   *
   * For more information, see [Data streams](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
   *
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.
   *
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
   *
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * Describes the configuration for ingesting NULL and NaN data. By default the feature is allowed. The feature is disallowed if the value is `true`.
   *
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * @public
 */
export interface PutStorageConfigurationResponse {
  /**
   * The storage tier that you specified for your data. The `storageType` parameter can be one of the following values:
   *
   * - `SITEWISE_DEFAULT_STORAGE` – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.
   * - `MULTI_LAYER_STORAGE` – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.
   *
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * Contains information about the storage destination.
   *
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The `disassociatedDataStorage` can be one of the following values:
   *
   * - `ENABLED` – IoT SiteWise accepts time series that aren't associated with asset properties.
   *
   *   > **Important:** After the `disassociatedDataStorage` is enabled, you can't disable it.
   * - `DISABLED` – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.
   *
   * For more information, see [Data streams](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
   *
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * Contains current status information for the configuration.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.
   *
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.
   *
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * Describes the configuration for ingesting NULL and NaN data. By default the feature is allowed. The feature is disallowed if the value is `true`.
   *
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * Request structure for StartPipelineExecution operation.
 *
 * @public
 */
export interface StartPipelineExecutionRequest {
  /**
   * The name of the workspace containing the pipeline.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline to execute.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * Runtime environment variable overrides for the execution. Includes global variables that apply to all compute nodes and computeNodes for per-node overrides. These take the highest priority in the environment variable hierarchy.
   *
   * @public
   */
  executionEnvironmentVariableOverrides?: ExecutionEnvironmentVariables | undefined;

  /**
   * Runtime mount overrides for the execution. Overrides are merged by mount name into each listed compute node's task-defined mounts: a matching name replaces the task-defined mount, a new name adds a mount, and task-defined mounts not referenced remain unchanged. Compute nodes not listed use their task-defined mounts as-is.
   *
   * @public
   */
  executionMountOverrides?: MountOverrides | undefined;

  /**
   * Scheduling priority for the execution. Lower values indicate higher priority. Defaults to 2 when not specified.
   *
   * @public
   */
  executionPriority?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token, the server returns the cached result from the original successful request without performing the operation again.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Response structure for StartPipelineExecution operation.
 *
 * @public
 */
export interface StartPipelineExecutionResponse {
  /**
   * The unique identifier of the created pipeline execution.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;
}

/**
 * @public
 */
export interface StartQueryRequest {
  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the workspace to query.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The SQL query to execute against the workspace telemetry, annotations, data segment, and dataset data.
   *
   * @public
   */
  queryStatement: string | undefined;
}

/**
 * Contains the response for the StartQuery operation.
 *
 * @public
 */
export interface StartQueryResponse {
  /**
   * The unique identifier for the query execution.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The initial query status. The value is always SUBMITTED upon creation.
   *
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * Contains a time interval with a start time and an end time. Use a time interval to restrict an operation, such as a search, to a specific time range.
 *
 * @public
 */
export interface TimeInterval {
  /**
   * The start of the time interval.
   *
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * The end of the time interval.
   *
   * @public
   */
  endTime: TimeInNanos | undefined;
}

/**
 * Optional filters that restrict a search to a subset of the workspace's data.
 *
 * @public
 */
export interface SearchFilters {
  /**
   * Restricts the search to these time series.
   *
   * @public
   */
  timeSeriesIds?: string[] | undefined;

  /**
   * Restricts the search to these datasets.
   *
   * @public
   */
  datasetIds?: string[] | undefined;

  /**
   * Restricts the search to these time intervals.
   *
   * @public
   */
  timeIntervals?: TimeInterval[] | undefined;
}

/**
 * Input for the StartSearch operation.
 *
 * @public
 */
export interface StartSearchRequest {
  /**
   * The name of the workspace whose data is searched.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The natural-language query describing the data to search for.
   *
   * @public
   */
  queryStatement: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure the request is idempotent. Repeating a StartSearch call with the same `clientToken` returns the original search rather than starting a new one. If omitted, the SDK autogenerates one.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The search strategy to use. Defaults to `QUICK` when omitted.
   *
   * @public
   */
  searchType?: SearchType | undefined;

  /**
   * Optional filters that restrict the search to a subset of the workspace's data.
   *
   * @public
   */
  searchFilters?: SearchFilters | undefined;

  /**
   * An optional caller-supplied identifier used to group related searches together.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * Output of the StartSearch operation.
 *
 * @public
 */
export interface StartSearchResponse {
  /**
   * The unique identifier assigned to the newly started search.
   *
   * @public
   */
  searchId: string | undefined;

  /**
   * The name of the workspace the search runs against.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The initial status of the search. A newly started search is `QUEUED`.
   *
   * @public
   */
  status: SearchStatus | undefined;

  /**
   * The group identifier associated with the search, if one was supplied on the request.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the resource. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the resource to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of keys for tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccessPolicyRequest {
  /**
   * The ID of the access policy.
   *
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.
   *
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.
   *
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * The permission level for this access policy. Note that a project `ADMINISTRATOR` is also known as a project owner.
   *
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessPolicyResponse {}

/**
 * @public
 */
export interface UpdateAssetRequest {
  /**
   * The ID of the asset to update. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * An external ID to assign to the asset. The asset must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * A friendly name for the asset.
   *
   * @public
   */
  assetName: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A description for the asset.
   *
   * @public
   */
  assetDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * The ID of the asset.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The status of the asset, which contains a state (`UPDATING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelRequest {
  /**
   * The ID of the asset model to update. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * An external ID to assign to the asset model. The asset model must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * A unique name for the asset model.
   *
   * @public
   */
  assetModelName: string | undefined;

  /**
   * A description for the asset model.
   *
   * @public
   */
  assetModelDescription?: string | undefined;

  /**
   * The updated property definitions of the asset model. For more information, see [Asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html) in the *IoT SiteWise User Guide*.
   *
   * You can specify up to 200 properties per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelProperties?: AssetModelProperty[] | undefined;

  /**
   * The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *IoT SiteWise User Guide*.
   *
   * You can specify up to 10 hierarchies per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelHierarchies?: AssetModelHierarchy[] | undefined;

  /**
   * The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.
   *
   * > **Note:** When creating custom composite models, you need to use [CreateAssetModelCompositeModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html). For more information, see [Creating custom composite models (Components)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-custom-composite-models.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModel[] | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The expected current entity tag (ETag) for the asset model’s latest or active version (specified using `matchForVersionType`). The update request is rejected if the tag does not match the latest or active version's current entity tag. See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * Accepts ***** to reject the update request if an active version (specified using `matchForVersionType` as `ACTIVE`) already exists for the asset model.
   *
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * Specifies the asset model version type (`LATEST` or `ACTIVE`) used in conjunction with `If-Match` or `If-None-Match` headers to determine the target ETag for the update operation.
   *
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelResponse {
  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * The status of the asset model, which contains a state (`UPDATING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelRequest {
  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of a composite model on this asset model.
   *
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * An external ID to assign to the asset model. You can only set the external ID of the asset model if it wasn't set when it was created, or you're setting it to the exact same thing as when it was created.
   *
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * A description for the composite model.
   *
   * @public
   */
  assetModelCompositeModelDescription?: string | undefined;

  /**
   * A unique name for the composite model.
   *
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The property definitions of the composite model. For more information, see [Inline custom composite models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html#inline-composite-models) in the *IoT SiteWise User Guide*.
   *
   * You can specify up to 200 properties per composite model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelCompositeModelProperties?: AssetModelProperty[] | undefined;

  /**
   * The expected current entity tag (ETag) for the asset model’s latest or active version (specified using `matchForVersionType`). The update request is rejected if the tag does not match the latest or active version's current entity tag. See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * Accepts ***** to reject the update request if an active version (specified using `matchForVersionType` as `ACTIVE`) already exists for the asset model.
   *
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * Specifies the asset model version type (`LATEST` or `ACTIVE`) used in conjunction with `If-Match` or `If-None-Match` headers to determine the target ETag for the update operation.
   *
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelResponse {
  /**
   * The path to the composite model listing the parent composite models.
   *
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * Contains current status information for an asset model. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetPropertyRequest {
  /**
   * The ID of the asset to be updated. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * If you omit this parameter, the alias is removed from the property.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see [Interacting with other services](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html) in the *IoT SiteWise User Guide*.
   *
   * If you omit this parameter, the notification state is set to `DISABLED`.
   *
   * @public
   */
  propertyNotificationState?: PropertyNotificationState | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the `assetModelProperty` in the asset model.
   *
   * @public
   */
  propertyUnit?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputationModelResponse {
  /**
   * The status of the computation model. It contains a state (UPDATING after successfully calling this operation) and an error message if any.
   *
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * The ID of the dashboard to update.
   *
   * @public
   */
  dashboardId: string | undefined;

  /**
   * A new friendly name for the dashboard.
   *
   * @public
   */
  dashboardName: string | undefined;

  /**
   * A new description for the dashboard.
   *
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * The new dashboard definition, as specified in a JSON literal.
   *
   * - IoT SiteWise Monitor (Classic) see [Create dashboards (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html)
   * - IoT SiteWise Monitor (AI-aware) see [Create dashboards (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-ai-dashboard-cli.html)
   *
   * in the *IoT SiteWise User Guide*
   *
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {}

/**
 * @public
 */
export interface UpdateDatasetRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  datasetName: string | undefined;

  /**
   * A description about the dataset, and its functionality.
   *
   * @public
   */
  datasetDescription?: string | undefined;

  /**
   * The updated configuration for the dataset.
   *
   * @public
   */
  datasetConfig?: DatasetConfig | undefined;

  /**
   * The updated metadata for the dataset.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The data source for the dataset.
   *
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the dataset. The format is `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}`.
   *
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * The status of the dataset. This contains the state and any error messages. State is `UPDATING` after a successfull call to this API, and any associated error message. The state is `ACTIVE` when ready to use.
   *
   * @public
   */
  datasetStatus?: DatasetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * The ID of the gateway to update.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * A unique name for the gateway.
   *
   * @public
   */
  gatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * The ID of the gateway to be updated.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC UA sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace `iotsitewise:opcuacollector:3`.
   *
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * The JSON document that defines the configuration for the gateway capability. For more information, see [Configuring data sources (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  capabilityConfiguration: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationResponse {
  /**
   * The namespace of the gateway capability.
   *
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * The synchronization status of the gateway capability configuration. The sync status can be one of the following:
   *
   * - `IN_SYNC` - The gateway is running with the latest configuration.
   * - `OUT_OF_SYNC` - The gateway hasn't received the latest configuration.
   * - `SYNC_FAILED` - The gateway rejected the latest configuration.
   * - `UNKNOWN` - The gateway hasn't reported its sync status.
   * - `NOT_APPLICABLE` - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.
   *
   * After you update a capability configuration, its sync status is `OUT_OF_SYNC` until the gateway receives and applies or rejects the updated configuration.
   *
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * Request structure for UpdatePipeline operation.
 *
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline to update.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * A new description for the pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Updated environment variables shared across all compute nodes.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Updated list of compute nodes forming the pipeline DAG.
   *
   * @public
   */
  computations?: ComputeNode[] | undefined;
}

/**
 * Response structure for UpdatePipeline operation.
 *
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * The new version of the pipeline created by this update.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current lifecycle status of the pipeline.
   *
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * Contains an image that is one of the following:
 *
 * - An image file. Choose this option to upload a new image.
 * - The ID of an existing image. Choose this option to keep an existing image.
 *
 * @public
 */
export interface Image {
  /**
   * The ID of an existing image. Specify this parameter to keep an existing image.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Contains an image file.
   *
   * @public
   */
  file?: ImageFile | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * The ID of the portal to update.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * A new friendly name for the portal.
   *
   * @public
   */
  portalName: string | undefined;

  /**
   * A new description for the portal.
   *
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * The Amazon Web Services administrator's contact email address.
   *
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * Contains an image that is one of the following:
   *
   * - An image file. Choose this option to upload a new image.
   * - The ID of an existing image. Choose this option to keep an existing image.
   *
   * @public
   */
  portalLogoImage?: Image | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see [Using service roles for IoT SiteWise Monitor](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The email address that sends alarm notifications.
   *
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see [Monitoring with alarms](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html) in the *IoT SiteWise Application Guide*.
   *
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * Define the type of portal. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * The status of the portal, which contains a state (`UPDATING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * The ID of the project to update.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * A new friendly name for the project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A new description for the project.
   *
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {}

/**
 * Request structure for UpdateTask operation.
 *
 * @public
 */
export interface UpdateTaskRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the task to update.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * A new description for the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated task execution configuration.
   *
   * @public
   */
  taskConfiguration?: TaskConfiguration | undefined;
}

/**
 * Response structure for UpdateTask operation.
 *
 * @public
 */
export interface UpdateTaskResponse {
  /**
   * The new version of the task created by this update.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current lifecycle status of the task.
   *
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * The name of the workspace to update.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * A new description for the workspace.
   *
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * The encryption configuration for the workspace. Omit this field to leave encryption unchanged. After a customer managed key configuration becomes active, the key can't be changed; supplying the same key is accepted.
   *
   * @public
   */
  encryptionConfiguration?: WorkspaceEncryptionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * The status of the workspace after the update, which is `UPDATING` when the operation returns.
   *
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;
}

/**
 * Contains computation model data binding value information, which can be one of `assetModelProperty`, `list`.
 *
 * @public
 */
export interface ComputationModelDataBindingValue {
  /**
   * Specifies an asset model property data binding value.
   *
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValue | undefined;

  /**
   * The asset property value used for computation model data binding.
   *
   * @public
   */
  assetProperty?: AssetPropertyBindingValue | undefined;

  /**
   * Specifies a list of data binding value.
   *
   * @public
   */
  list?: ComputationModelDataBindingValue[] | undefined;
}

/**
 * @public
 */
export interface CreateComputationModelRequest {
  /**
   * The name of the computation model.
   *
   * @public
   */
  computationModelName: string | undefined;

  /**
   * The description of the computation model.
   *
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * The configuration for the computation model.
   *
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * The data binding for the computation model. Key is a variable name defined in configuration. Value is a `ComputationModelDataBindingValue` referenced by the variable.
   *
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the asset. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelResponse {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the computation model, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}`
   *
   * @public
   */
  computationModelArn: string | undefined;

  /**
   * The name of the computation model.
   *
   * @public
   */
  computationModelName: string | undefined;

  /**
   * The description of the computation model.
   *
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * The configuration for the computation model.
   *
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * The data binding for the computation model. Key is a variable name defined in configuration. Value is a `ComputationModelDataBindingValue` referenced by the variable.
   *
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * The model creation date, in Unix epoch time.
   *
   * @public
   */
  computationModelCreationDate: Date | undefined;

  /**
   * The date the model was last updated, in Unix epoch time.
   *
   * @public
   */
  computationModelLastUpdateDate: Date | undefined;

  /**
   * The current status of the asset model, which contains a state and an error message if any.
   *
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;

  /**
   * The version of the computation model.
   *
   * @public
   */
  computationModelVersion: string | undefined;

  /**
   * The available actions for this computation model.
   *
   * @public
   */
  actionDefinitions: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface UpdateComputationModelRequest {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The name of the computation model.
   *
   * @public
   */
  computationModelName: string | undefined;

  /**
   * The description of the computation model.
   *
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * The configuration for the computation model.
   *
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * The data binding for the computation model. Key is a variable name defined in configuration. Value is a `ComputationModelDataBindingValue` referenced by the variable.
   *
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a single data point in a query result.
 *
 * @public
 */
export interface Datum {
  /**
   * Indicates if the data point is a scalar value such as integer, string, double, or Boolean.
   *
   * @public
   */
  scalarValue?: string | undefined;

  /**
   * Indicates if the data point is an array.
   *
   * @public
   */
  arrayValue?: Datum[] | undefined;

  /**
   * Indicates if the data point is a row.
   *
   * @public
   */
  rowValue?: Row | undefined;

  /**
   * Indicates if the data point is null.
   *
   * @public
   */
  nullValue?: boolean | undefined;
}

/**
 * Represents a single row in the query results.
 *
 * @public
 */
export interface Row {
  /**
   * List of data points in a single row of the result set.
   *
   * @public
   */
  data: Datum[] | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * Represents a single column in the query results.
   *
   * @public
   */
  columns?: ColumnInfo[] | undefined;

  /**
   * Represents a single row in the query results.
   *
   * @public
   */
  rows?: Row[] | undefined;

  /**
   * The string that specifies the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}
