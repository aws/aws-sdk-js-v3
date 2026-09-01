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
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}</code>
   *          </p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the portal that the project is in.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The project's description.</p>
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   * @public
   */
  projectCreationDate: Date | undefined;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   * @public
   */
  projectLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryRequest {
  /**
   * <p>The name of the workspace associated with the query.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * <p>Contains statistics about a completed query execution.</p>
 * @public
 */
export interface QueryStatistics {
  /**
   * <p>The total number of rows returned by the query.</p>
   * @public
   */
  rowCount: number | undefined;

  /**
   * <p>The total number of bytes scanned during query execution.</p>
   * @public
   */
  bytesScanned: number | undefined;

  /**
   * <p>The total query execution time, in milliseconds.</p>
   * @public
   */
  executionTimeInMillis: number | undefined;
}

/**
 * <p>Contains the response for the DescribeQuery operation.</p>
 * @public
 */
export interface DescribeQueryResponse {
  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The current query status.</p>
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * <p>The date and time when the query was submitted, in Unix epoch time.</p>
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * <p>The date and time when the query reached a terminal state, in Unix epoch time. This field is present when the query status is COMPLETED, FAILED, or CANCELED.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The query execution statistics. This field is present when the query status is COMPLETED.</p>
   * @public
   */
  statistics?: QueryStatistics | undefined;

  /**
   * <p>A human-readable error description. This field is present when the query status is FAILED.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Input for the DescribeSearch operation.</p>
 * @public
 */
export interface DescribeSearchRequest {
  /**
   * <p>The name of the workspace the search belongs to.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The identifier of the search to describe.</p>
   * @public
   */
  searchId: string | undefined;
}

/**
 * <p>Output of the DescribeSearch operation.</p>
 * @public
 */
export interface DescribeSearchResponse {
  /**
   * <p>The unique identifier of the search.</p>
   * @public
   */
  searchId: string | undefined;

  /**
   * <p>The name of the workspace the search runs against.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The current status of the search.</p>
   * @public
   */
  status: SearchStatus | undefined;

  /**
   * <p>The natural-language query that was submitted for the search.</p>
   * @public
   */
  queryStatement: string | undefined;

  /**
   * <p>The search strategy used for the search.</p>
   * @public
   */
  searchType: SearchType | undefined;

  /**
   * <p>A human-readable explanation of the current status. Populated when the search has <code>FAILED</code>.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the search was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The group identifier associated with the search, if one was supplied on the request.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStorageConfigurationRequest {}

/**
 * <p>Contains information about a customer managed Amazon S3 bucket.</p>
 * @public
 */
export interface CustomerManagedS3Storage {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Amazon S3 object. For more information about how to find the ARN for an
   *       Amazon S3 object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html">Amazon S3 resources</a> in the
   *         <i>Amazon Simple Storage Service User Guide</i>.</p>
   * @public
   */
  s3ResourceArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Contains information about the storage destination.</p>
 * @public
 */
export interface MultiLayerStorage {
  /**
   * <p>Contains information about a customer managed Amazon S3 bucket.</p>
   * @public
   */
  customerManagedS3Storage: CustomerManagedS3Storage | undefined;
}

/**
 * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
 * @public
 */
export interface RetentionPeriod {
  /**
   * <p>The number of days that your data is kept.</p>
   *          <note>
   *             <p>If you specified a value for this parameter, the <code>unlimited</code> parameter must
   *         be <code>false</code>.</p>
   *          </note>
   * @public
   */
  numberOfDays?: number | undefined;

  /**
   * <p>If true, your data is kept indefinitely.</p>
   *          <note>
   *             <p>If configured to <code>true</code>, you must not specify a value for the
   *           <code>numberOfDays</code> parameter.</p>
   *          </note>
   * @public
   */
  unlimited?: boolean | undefined;
}

/**
 * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
 * @public
 */
export interface WarmTierRetentionPeriod {
  /**
   * <p>The number of days the data is stored in the warm tier.</p>
   * @public
   */
  numberOfDays?: number | undefined;

  /**
   * <p>If set to true, the data is stored indefinitely in the warm tier.</p>
   * @public
   */
  unlimited?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeStorageConfigurationResponse {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Contains current status information for the configuration.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The date the storage configuration was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;

  /**
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * <p>Describes the configuration for ingesting NULL and NaN data. By default the feature is
   *       allowed. The feature is disallowed if the value is <code>true</code>.</p>
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * <p>Request structure for DescribeTask operation.</p>
 * @public
 */
export interface DescribeTaskRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the task.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>The version number of the task to retrieve. If not specified, returns the latest version.</p>
   * @public
   */
  taskVersion?: string | undefined;
}

/**
 * <p>Response structure for DescribeTask operation.</p>
 * @public
 */
export interface DescribeTaskResponse {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the task.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>The description of the task.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the task.</p>
   * @public
   */
  taskArn: string | undefined;

  /**
   * <p>The version of the task.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The task execution configuration. Contains a <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html">containerTaskConfiguration</a> for custom container workloads.</p>
   * @public
   */
  taskConfiguration: TaskConfiguration | undefined;

  /**
   * <p>The current lifecycle status of the task.</p>
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * <p>The time the task was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the task was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTimeSeriesRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTimeSeriesResponse {
  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The date that the time series was created, in Unix epoch time.</p>
   * @public
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   * @public
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}</code>
   *          </p>
   * @public
   */
  timeSeriesArn: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * <p>Contains the encryption configuration information for a workspace.</p>
 * @public
 */
export interface WorkspaceEncryptionConfigurationInfo {
  /**
   * <p>The type of encryption used for the workspace.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The key ARN of the KMS key used for KMS encryption if <code>encryptionType</code>
   *       is <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  workspaceArn: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The description of the workspace.</p>
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * <p>The status of the workspace, which contains the state and any error message.</p>
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;

  /**
   * <p>The encryption configuration information for the workspace.</p>
   * @public
   */
  encryptionConfiguration?: WorkspaceEncryptionConfigurationInfo | undefined;

  /**
   * <p>The date the workspace was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date the workspace was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DisassociateAssetsRequest {
  /**
   * <p>The ID of the parent asset from which to disassociate the child asset.
   *       This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.) Hierarchies allow
   *       different groupings of assets to be formed that all come from the same asset model. You can
   *       use the hierarchy ID to identify the correct asset to disassociate. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  hierarchyId: string | undefined;

  /**
   * <p>The ID of the child asset to disassociate. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  childAssetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTimeSeriesFromAssetPropertyRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ExecuteActionRequest {
  /**
   * <p>The resource the action will be taken on.</p>
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * <p>The ID of the action definition.</p>
   * @public
   */
  actionDefinitionId: string | undefined;

  /**
   * <p>The JSON payload of the action.</p>
   * @public
   */
  actionPayload: ActionPayload | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The detailed resource this action resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface ExecuteActionResponse {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryRequest {
  /**
   * <p>The IoT SiteWise query statement.</p>
   * @public
   */
  queryStatement: string | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   *          <ul>
   *             <li>
   *                <p>Minimum is 1</p>
   *             </li>
   *             <li>
   *                <p>Maximum is 20000</p>
   *             </li>
   *             <li>
   *                <p>Default is 20000</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The data type of the column.</p>
 * @public
 */
export interface ColumnType {
  /**
   * <p>The allowed data types that the column has as it's value.</p>
   * @public
   */
  scalarType?: ScalarType | undefined;
}

/**
 * <p>A description of the column in the query results.</p>
 * @public
 */
export interface ColumnInfo {
  /**
   * <p>The name of the column description.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the column description.</p>
   * @public
   */
  type?: ColumnType | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The data aggregating function.</p>
   * @public
   */
  aggregateTypes: AggregateType[] | undefined;

  /**
   * <p>The time interval over which to aggregate data.</p>
   * @public
   */
  resolution: string | undefined;

  /**
   * <p>The quality by which to filter asset data.</p>
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  endDate: Date | undefined;

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 1 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 2500.</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesResponse {
  /**
   * <p>The requested aggregated values.</p>
   * @public
   */
  aggregatedValues: AggregatedValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueResponse {
  /**
   * <p>The current asset property value.</p>
   * @public
   */
  propertyValue?: AssetPropertyValue | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>The quality by which to filter asset data.</p>
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 4 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 20000.</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryResponse {
  /**
   * <p>The asset property's value history.</p>
   * @public
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request to retrieve video data for a specific time range. Exactly one of timeSeriesId or propertyAlias must be provided.</p>
 * @public
 */
export interface GetCaptureDataRequest {
  /**
   * <p>The name of the workspace that contains the capture source.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The start time for the video data range.</p>
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * <p>The end time for the video data range. Must be greater than startTime.</p>
   * @public
   */
  endTime: TimeInNanos | undefined;

  /**
   * <p>The time series ID that identifies the capture source. Mutually exclusive with propertyAlias.</p>
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * <p>The property alias that identifies the capture source. Mutually exclusive with timeSeriesId.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The optional format settings for the output.</p>
   * @public
   */
  formatSettings?: FormatSettings | undefined;

  /**
   * <p>The token from a previous response used to continue retrieving data.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Response containing the video data.</p>
 * @public
 */
export interface GetCaptureDataResponse {
  /**
   * <p>The binary video data.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>The actual start time of the returned data.</p>
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * <p>The actual end time of the returned data.</p>
   * @public
   */
  endTime: TimeInNanos | undefined;

  /**
   * <p>The type of the returned data.</p>
   * @public
   */
  dataType: VideoDataType | undefined;

  /**
   * <p>The token used to retrieve the next chunk. Absent if no more data is available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The exclusive start of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   * @public
   */
  startTimeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset converted from <code>startTimeInSeconds</code>.</p>
   * @public
   */
  startTimeOffsetInNanos?: number | undefined;

  /**
   * <p>The inclusive end of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   * @public
   */
  endTimeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset converted from <code>endTimeInSeconds</code>.</p>
   * @public
   */
  endTimeOffsetInNanos?: number | undefined;

  /**
   * <p>The quality of the asset property value. You can use this parameter as a filter to choose
   *       only the asset property values that have a specific quality.</p>
   * @public
   */
  quality: Quality | undefined;

  /**
   * <p>The time interval in seconds over which to interpolate data. Each interval starts when the
   *       previous one ends.</p>
   * @public
   */
  intervalInSeconds: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The interpolation type.</p>
   *          <p>Valid values: <code>LINEAR_INTERPOLATION | LOCF_INTERPOLATION</code>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINEAR_INTERPOLATION</code> – Estimates missing data using <a href="https://en.wikipedia.org/wiki/Linear_interpolation">linear
   *           interpolation</a>.</p>
   *                <p>For example, you can use this operation to return the interpolated temperature values
   *           for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts
   *           July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM,
   *           the second interpolated value on July 3, 2021, at 9 AM, and so on.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCF_INTERPOLATION</code> – Estimates missing data using last observation
   *           carried forward interpolation</p>
   *                <p>If no data point is found for an interval, IoT SiteWise returns the last observed data point
   *           for the previous interval and carries forward this interpolated value until a new data
   *           point is found.</p>
   *                <p>For example, you can get the state of an on-off valve every 24 hours over a duration
   *           of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last
   *           observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first
   *           interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the
   *           same interpolated value for the rest of the days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by
   *       using data points from the timestamp of each interval, minus the window to the timestamp of
   *       each interval plus the window. If not specified, the window ranges between the start time
   *       minus the interval and the end time plus the interval.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you specify a value for the <code>intervalWindowInSeconds</code> parameter, the
   *             value for the <code>type</code> parameter must be
   *             <code>LINEAR_INTERPOLATION</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If a data point isn't found during the specified query window, IoT SiteWise won't return an
   *             interpolated value for the interval. This indicates that there's a gap in the ingested
   *             data points.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>For example, you can get the interpolated temperature values for a wind turbine every 24
   *       hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a
   *       window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM
   *       plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the
   *       data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to
   *       compute the second interpolated value, and so on. </p>
   * @public
   */
  intervalWindowInSeconds?: number | undefined;
}

/**
 * <p>Contains information about an interpolated asset property value.</p>
 * @public
 */
export interface InterpolatedAssetPropertyValue {
  /**
   * <p>Contains a timestamp with optional nanosecond granularity.</p>
   * @public
   */
  timestamp: TimeInNanos | undefined;

  /**
   * <p>Contains an asset property value (of a single type only).</p>
   * @public
   */
  value: Variant | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesResponse {
  /**
   * <p>The requested interpolated values.</p>
   * @public
   */
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * <p>The name of the workspace associated with the query.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains metadata about a column in the query results.</p>
 * @public
 */
export interface ColumnInformation {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the column. Valid values are STRING, DOUBLE, BOOLEAN, INTEGER, TIMESTAMP, and VARIANT.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>Contains the response for the GetQueryResults operation.</p>
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * <p>A list of column metadata for the query results. Each entry contains the column name and data type. Present when the query status is COMPLETED.</p>
   * @public
   */
  columnInfo?: ColumnInformation[] | undefined;

  /**
   * <p>The result rows. Each row is a list of string column values, positional to match the columnInfo order. Present when the query status is COMPLETED.</p>
   * @public
   */
  rows?: (string | null)[][] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for the GetSearchResults operation.</p>
 * @public
 */
export interface GetSearchResultsRequest {
  /**
   * <p>The identifier of the search whose results are retrieved.</p>
   * @public
   */
  searchId: string | undefined;

  /**
   * <p>The name of the workspace the search belongs to.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The maximum number of results to return in a single page. Valid range is 1 to 10,000; if
   * omitted, a service-defined default is used.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token returned by a previous GetSearchResults call. Provide it to retrieve the
   * next page of results; omit it to retrieve the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A single matching segment of time-series data returned by a search.</p>
 * @public
 */
export interface SearchResult {
  /**
   * <p>The identifier of the search that produced this result.</p>
   * @public
   */
  searchId: string | undefined;

  /**
   * <p>The name of the workspace the search ran against.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The identifier of the dataset that contains the matching data.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The identifier of the time series that contains the matching data.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The start of the matching time-series segment, in nanoseconds since the Unix epoch.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The end of the matching time-series segment, in nanoseconds since the Unix epoch.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * <p>The timestamp of the most relevant point within the matching segment, in nanoseconds since the
   * Unix epoch.</p>
   * @public
   */
  topTimestamp: TimeInNanos | undefined;

  /**
   * <p>The relevance score of this result. Higher scores indicate a stronger match.</p>
   * @public
   */
  score: number | undefined;
}

/**
 * <p>Output of the GetSearchResults operation.</p>
 * @public
 */
export interface GetSearchResultsResponse {
  /**
   * <p>A page of search results, ordered by descending relevance score.</p>
   * @public
   */
  searchResults: SearchResult[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent GetSearchResults call to retrieve the next page.
   * Absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface InvokeAssistantRequest {
  /**
   * <p>The ID assigned to a conversation. IoT SiteWise automatically generates a unique ID for you, and this parameter is never required.
   *   However, if you prefer to have your own ID, you must specify it here in UUID format. If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>A text message sent to the SiteWise Assistant by the user.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Specifies if to turn trace on or not. It is used to track the SiteWise Assistant's
   *   reasoning, and data access process.</p>
   * @public
   */
  enableTrace?: boolean | undefined;
}

/**
 * <p>Contains the cited text from the data source.</p>
 * @public
 */
export interface Content {
  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains location information about the cited text and where it's stored.</p>
 * @public
 */
export interface Location {
  /**
   * <p>The URI of the location.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>The data source for the dataset.</p>
 * @public
 */
export interface Source {
  /**
   * <p>Contains the ARN of the dataset. If the source is Kendra, it's the ARN of the Kendra index.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Contains the location information where the cited text is originally stored.
   *   For example, if the data source is Kendra, and the text synchronized is from an S3 bucket, then the location refers to an S3 object.</p>
   * @public
   */
  location?: Location | undefined;
}

/**
 * <p>Contains information about the dataset use and it's source.</p>
 * @public
 */
export interface DataSetReference {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The data source for the dataset.</p>
   * @public
   */
  source?: Source | undefined;
}

/**
 * <p>Contains the reference information.</p>
 * @public
 */
export interface Reference {
  /**
   * <p>Contains the dataset reference information.</p>
   * @public
   */
  dataset?: DataSetReference | undefined;
}

/**
 * <p>Contains text content to which the SiteWise Assistant refers to, and generate the final response.
 *   It also contains information about the source.</p>
 * @public
 */
export interface Citation {
  /**
   * <p>Contains information about the data source.</p>
   * @public
   */
  reference?: Reference | undefined;

  /**
   * <p>Contains the cited text from the data source.</p>
   * @public
   */
  content?: Content | undefined;
}

/**
 * <p>This contains the SiteWise Assistant's response and the corresponding citation.</p>
 * @public
 */
export interface InvocationOutput {
  /**
   * <p>The text message of the SiteWise Assistant's response.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of citations, and related information for the SiteWise Assistant's response.</p>
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * <p>Contains tracing information of the SiteWise Assistant's reasoning and data access.</p>
 * @public
 */
export interface Trace {
  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains the response, citation, and trace from the SiteWise Assistant.</p>
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
   * <p>Contains tracing information of the SiteWise Assistant's reasoning and data access.</p>
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
   * <p>Contains the SiteWise Assistant's response.</p>
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
   * <p>Access is denied.</p>
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
   * <p>Your request has conflicting operations. This can occur if you're trying to perform more
   *       than one operation on the same resource at the same time.</p>
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
   * <p>IoT SiteWise can't process your request right now. Try again later.</p>
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
   * <p>The request isn't valid. This can occur if your request contains malformed JSON or
   *       unsupported characters. Check your request and try again.</p>
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
   * <p>You've reached the quota for a resource. For example, this can occur if you're trying to
   *       associate more than the allowed number of child assets or attempting to create more than the
   *       allowed number of properties for an asset model.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
   * <p>The requested resource can't be found.</p>
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
   * <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
   *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
   *       on.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
   * <p>Contains the response, citation, and trace from the SiteWise Assistant.</p>
   * @public
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The ID of the conversation, in UUID format. This ID uniquely identifies the conversation within IoT SiteWise.</p>
   * @public
   */
  conversationId: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * <p>The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required
   *       if you specify <code>identityId</code>.</p>
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * <p>The ID of the identity. This parameter is required if you specify <code>USER</code> or
   *         <code>GROUP</code> for <code>identityType</code>.</p>
   * @public
   */
  identityId?: string | undefined;

  /**
   * <p>The type of resource (portal or project). This parameter is required if you specify
   *         <code>resourceId</code>.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The ID of the resource. This parameter is required if you specify
   *         <code>resourceType</code>.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>. This parameter is required if you specify
   *         <code>IAM</code> for <code>identityType</code>.</p>
   * @public
   */
  iamArn?: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * <p>A list that summarizes each access policy.</p>
   * @public
   */
  accessPolicySummaries: AccessPolicySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * <p>The type of resource.</p>
   * @public
   */
  targetResourceType: TargetResourceType | undefined;

  /**
   * <p>The ID of the target resource.</p>
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of the resolved resource.</p>
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * <p>The ID of the resolved resource.</p>
   * @public
   */
  resolveToResourceId?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * <p>A list that summarizes the actions associated with the specified asset.</p>
   * @public
   */
  actionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>Maximum number of results to return</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next Page Token</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Next Page Token</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of applications</p>
   * @public
   */
  applications: ApplicationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAssetModelCompositeModelsRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelCompositeModelsResponse {
  /**
   * <p>A list that summarizes each composite model.</p>
   * @public
   */
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelPropertiesRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> Filters the requested list of asset model properties. You can choose one of the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all asset model properties for a given asset
   *           model ID. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASE</code> – The list includes only base asset model properties for a given
   *           asset model ID. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>BASE</code>
   *          </p>
   * @public
   */
  filter?: ListAssetModelPropertiesFilter | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelPropertiesResponse {
  /**
   * <p>A list that summarizes the properties associated with the specified asset model.</p>
   * @public
   */
  assetModelPropertySummaries: AssetModelPropertySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelsRequest {
  /**
   * <p>The type of asset model. If you don't provide an <code>assetModelTypes</code>, all types
   *       of asset models are returned.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ASSET_MODEL</b> – An asset model that you can use
   *           to create assets. Can't be included as a component in another asset model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPONENT_MODEL</b> – A reusable component that
   *           you can include in the composite models of other asset models. You can't create
   *           assets directly from this type of asset model. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INTERFACE</b> – An interface is a type of model
   *           that defines a standard structure that can be applied to different asset models.</p>
   *             </li>
   *          </ul>
   * @public
   */
  assetModelTypes?: AssetModelType[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelsResponse {
  /**
   * <p>A list that summarizes each asset model.</p>
   * @public
   */
  assetModelSummaries: AssetModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetPropertiesRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> Filters the requested list of asset properties. You can choose one of the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all asset properties for a given asset model ID.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASE</code> – The list includes only base asset properties for a given asset
   *           model ID. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>BASE</code>
   *          </p>
   * @public
   */
  filter?: ListAssetPropertiesFilter | undefined;
}

/**
 * @public
 */
export interface ListAssetPropertiesResponse {
  /**
   * <p>A list that summarizes the properties associated with the specified asset.</p>
   * @public
   */
  assetPropertySummaries: AssetPropertySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetRelationshipsRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The type of traversal to use to identify asset relationships. Choose the following
   *       option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PATH_TO_ROOT</code> – Identify the asset's parent assets up to the root
   *           asset. The asset that you specify in <code>assetId</code> is the first result in the list
   *           of <code>assetRelationshipSummaries</code>, and the root asset is the last result.</p>
   *             </li>
   *          </ul>
   * @public
   */
  traversalType: TraversalType | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetRelationshipsResponse {
  /**
   * <p>A list that summarizes each asset relationship.</p>
   * @public
   */
  assetRelationshipSummaries: AssetRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ID of the asset model by which to filter the list of assets. This parameter is
   *       required if you choose <code>ALL</code> for <code>filter</code>. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * <p>The filter for the requested list of assets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all assets for a given asset model ID. The
   *             <code>assetModelId</code> parameter is required if you filter by
   *           <code>ALL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset
   *           hierarchy tree.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>ALL</code>
   *          </p>
   * @public
   */
  filter?: ListAssetsFilter | undefined;
}

/**
 * @public
 */
export interface ListAssetsResponse {
  /**
   * <p>A list that summarizes each asset.</p>
   * @public
   */
  assetSummaries: AssetSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAssetsRequest {
  /**
   * <p>The ID of the asset to query. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>(Optional) If you don't provide a <code>hierarchyId</code>, all the immediate assets in
   *       the <code>traversalDirection</code> will be returned. </p>
   *          <p> The ID of the hierarchy by which child assets are associated to the asset.
   *       (This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.)</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  hierarchyId?: string | undefined;

  /**
   * <p>The direction to list associated assets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> – The list includes all child assets associated to the
   *           asset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARENT</code> – The list includes the asset's parent asset.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>CHILD</code>
   *          </p>
   * @public
   */
  traversalDirection?: TraversalDirection | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAssetsResponse {
  /**
   * <p>A list that summarizes the associated assets.</p>
   * @public
   */
  assetSummaries: AssociatedAssetsSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBulkImportJobsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>You can use a filter to select the bulk import jobs that you want to retrieve.</p>
   * @public
   */
  filter?: ListBulkImportJobsFilter | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * <p>Contains the job summary information.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – The bulk import job has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListBulkImportJobsResponse {
  /**
   * <p>One or more job summaries to list.</p>
   * @public
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCompositionRelationshipsRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of the components of the composite model.</p>
 * @public
 */
export interface CompositionRelationshipSummary {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>The composite model type. Valid values are <code>AWS/ALARM</code>, <code>CUSTOM</code>, or
   *         <code> AWS/L4E_ANOMALY</code>.</p>
   * @public
   */
  assetModelCompositeModelType: string | undefined;
}

/**
 * @public
 */
export interface ListCompositionRelationshipsResponse {
  /**
   * <p>A list that summarizes each composition relationship.</p>
   * @public
   */
  compositionRelationshipSummaries: CompositionRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter used to match specific data binding values based on criteria. This filter allows
 *       searching for data bindings by asset, asset model, asset property, or asset model
 *       property.</p>
 * @public
 */
export interface DataBindingValueFilter {
  /**
   * <p>Filter criteria for matching data bindings based on a specific asset. Used to list all
   *       data bindings referencing a particular asset or its properties.</p>
   * @public
   */
  asset?: AssetBindingValueFilter | undefined;

  /**
   * <p>Filter criteria for matching data bindings based on a specific asset model. Used to list
   *       all data bindings referencing a particular asset model or its properties.</p>
   * @public
   */
  assetModel?: AssetModelBindingValueFilter | undefined;

  /**
   * <p>Filter criteria for matching data bindings based on a specific asset property. Used to
   *       list all data bindings referencing a particular property of an asset.</p>
   * @public
   */
  assetProperty?: AssetPropertyBindingValueFilter | undefined;

  /**
   * <p>Filter criteria for matching data bindings based on a specific asset model property. Used
   *       to list all data bindings referencing a particular property of an asset model.</p>
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValueFilter | undefined;
}

/**
 * @public
 */
export interface ListComputationModelDataBindingUsagesRequest {
  /**
   * <p>A filter used to limit the returned data binding usages based on specific data binding
   *       values. You can filter by asset, asset model, asset property, or asset model property to find
   *       all computation models using these specific data sources.</p>
   * @public
   */
  dataBindingValueFilter: DataBindingValueFilter | undefined;

  /**
   * <p>The token used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a value used in a data binding. It can be an asset property or an asset model
 *       property.</p>
 * @public
 */
export interface DataBindingValue {
  /**
   * <p>Contains information about an <code>assetModelProperty</code> binding value.</p>
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValue | undefined;

  /**
   * <p>The asset property value used in the data binding.</p>
   * @public
   */
  assetProperty?: AssetPropertyBindingValue | undefined;
}

/**
 * <p>Represents a data binding that matches the specified filter criteria.</p>
 * @public
 */
export interface MatchedDataBinding {
  /**
   * <p>The value of the matched data binding.</p>
   * @public
   */
  value: DataBindingValue | undefined;
}

/**
 * <p>A summary of how a specific data binding is used across computation models. This tracks
 *       dependencies between data sources and computation models, allowing you to understand the
 *       impact of changes to data sources.</p>
 * @public
 */
export interface ComputationModelDataBindingUsageSummary {
  /**
   * <p>The list of computation model IDs that use this data binding. This allows identification
   *       of all computation models affected by changes to the referenced data source.</p>
   * @public
   */
  computationModelIds: string[] | undefined;

  /**
   * <p>The data binding matched by the filter criteria. Contains details about specific data
   *       binding values used by the computation models.</p>
   * @public
   */
  matchedDataBinding: MatchedDataBinding | undefined;
}

/**
 * @public
 */
export interface ListComputationModelDataBindingUsagesResponse {
  /**
   * <p>A list of summaries describing the data binding usages across computation models. Each
   *       summary includes the computation model IDs and the matched data binding details.</p>
   * @public
   */
  dataBindingUsageSummaries: ComputationModelDataBindingUsageSummary[] | undefined;

  /**
   * <p>The token for the next set of paginated results, or null if there are no additional
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelResolveToResourcesRequest {
  /**
   * <p>The ID of the computation model for which to list resolved resources.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The token used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the resource that a computation model resolves to.</p>
 * @public
 */
export interface ComputationModelResolveToResourceSummary {
  /**
   * <p>The detailed resource this execution summary resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface ListComputationModelResolveToResourcesResponse {
  /**
   * <p>A list of summaries describing the distinct resources that this computation model resolves
   *       to when actions were executed.</p>
   * @public
   */
  computationModelResolveToResourceSummaries: ComputationModelResolveToResourceSummary[] | undefined;

  /**
   * <p>The token for the next set of paginated results, or null if there are no additional
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelsRequest {
  /**
   * <p>The type of computation model. If a <code>computationModelType</code> is not provided, all
   *       types of computation models are returned.</p>
   * @public
   */
  computationModelType?: ComputationModelType | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a computation model.</p>
 * @public
 */
export interface ComputationModelSummary {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the computation model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}</code>
   *          </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the computation model.</p>
   * @public
   */
  type: ComputationModelType | undefined;

  /**
   * <p>The model creation date, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The time the model was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the computation model.</p>
   * @public
   */
  status: ComputationModelStatus | undefined;

  /**
   * <p>The version of the computation model.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelsResponse {
  /**
   * <p>A list summarizing each computation model.</p>
   * @public
   */
  computationModelSummaries: ComputationModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a dashboard summary.</p>
 * @public
 */
export interface DashboardSummary {
  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the dashboard</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The dashboard's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * <p>A list that summarizes each dashboard in the project.</p>
   * @public
   */
  dashboardSummaries: DashboardSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentRelationshipsRequest {
  /**
   * <p>The ID of the session dataset to list data segment relationships for.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a data segment relationship between a source session
 *       dataset that contains the data and a curated dataset that references it, including the time
 *       series and timestamp range.</p>
 * @public
 */
export interface DataSegmentRelationshipSummary {
  /**
   * <p>The ID of the curated dataset that references the data segment.</p>
   * @public
   */
  targetDatasetId: string | undefined;

  /**
   * <p>The ID of the source session dataset that contains the data segment.</p>
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentRelationshipsResponse {
  /**
   * <p>A list that summarizes each data segment relationship.</p>
   * @public
   */
  dataSegmentRelationshipSummaries: DataSegmentRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentsRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The version of the dataset to list data segments for.</p>
   * @public
   */
  datasetVersion?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains enrichment status information for a data segment.</p>
 * @public
 */
export interface DataSegmentEnrichment {
  /**
   * <p>The enrichment status of the data segment.</p>
   * @public
   */
  status: EnrichmentStatus | undefined;

  /**
   * <p>The date the data segment was last enriched, in Unix epoch time.</p>
   * @public
   */
  lastEnrichedAt?: Date | undefined;
}

/**
 * <p>Contains summary information about a data segment, including its source dataset, time
 *       series, timestamp range, and enrichment status.</p>
 * @public
 */
export interface DataSegmentSummary {
  /**
   * <p>The ID of the source dataset that contains the data segment.</p>
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * <p>The alias of the time series.</p>
   * @public
   */
  alias: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The enrichment information for the data segment.</p>
   * @public
   */
  enrichment?: DataSegmentEnrichment | undefined;
}

/**
 * @public
 */
export interface ListDatasetDataSegmentsResponse {
  /**
   * <p>A list that summarizes each data segment.</p>
   * @public
   */
  dataSegments: DataSegmentSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request to list dataset export jobs for a workspace.</p>
 * @public
 */
export interface ListDatasetExportJobsRequest {
  /**
   * <p>The name of the workspace whose dataset export jobs should be listed.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The optional filter that returns only jobs matching the given filter value. Defaults to ALL.</p>
   * @public
   */
  filter?: DatasetExportJobFilter | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a dataset export job.</p>
 * @public
 */
export interface ExportJobSummary {
  /**
   * <p>The unique identifier for the dataset export job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The current status of the dataset export job.</p>
   * @public
   */
  status: DatasetExportJobStatus | undefined;

  /**
   * <p>The timestamp when the job started processing.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the job completed, or null if the job is still running.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The S3 URI where output clips are written.</p>
   * @public
   */
  destinationS3Uri: string | undefined;
}

/**
 * <p>Response for list dataset export jobs request.</p>
 * @public
 */
export interface ListDatasetExportJobsResponse {
  /**
   * <p>A list of dataset export job summaries.</p>
   * @public
   */
  jobs: ExportJobSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The type of data source for the dataset.</p>
   * @public
   */
  sourceType: DatasetSourceType | undefined;

  /**
   * <p>The name of the workspace to filter datasets by.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>The type of dataset to filter by: a session dataset, a curated dataset, or a connection
   *       to an external datasource.</p>
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary details for the dataset.</p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description about the dataset, and its functionality.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The data source type of the dataset.</p>
   * @public
   */
  sourceType?: DatasetSourceType | undefined;

  /**
   * <p>The type of dataset: a session dataset, a curated dataset, or a connection to an external
   *       datasource.</p>
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * <p>The dataset creation date, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the dataset was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The status of the dataset. This contains the state and any error messages. The state is
   *   <code>ACTIVE</code> when ready to use.</p>
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * <p>The enrichment status of the dataset.</p>
   * @public
   */
  enrichmentStatus?: DatasetEnrichment | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>A list that summarizes the dataset response.</p>
   * @public
   */
  datasetSummaries: DatasetSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface ListEnrichmentJobsRequest {
  /**
   * <p>The name of the IoT SiteWise workspace to list enrichment jobs from.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>Filter jobs by dataset ID. Returns only jobs analyzing data from the specified dataset.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>Filter by property alias (human-readable sensor name). Specify either propertyAlias or timeSeriesId,
   * but not both. Returns only jobs analyzing the specified property alias.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>Filter by time series ID (system identifier). Specify either timeSeriesId or propertyAlias, but not
   * both. Returns only jobs analyzing the specified time series.</p>
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * <p>Filter by job status. Returns only jobs in the specified status.
   * Use RUNNING to find active jobs, or FAILED to identify jobs requiring attention.</p>
   * @public
   */
  status?: EnrichmentJobStatus | undefined;

  /**
   * <p>Filter by enrichment job type. Currently only EVENT_DETECTION is supported.
   * Use this filter to future-proof queries when additional job types are added.</p>
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * <p>The exclusive start of the date range for filtering jobs by creation time. Jobs created after this
   * timestamp are included. Use ISO 8601 format (e.g., 2024-01-01T00:00:00Z).</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The inclusive end of the date range for filtering jobs by creation time. Jobs created on or before
   * this timestamp are included. Use ISO 8601 format (e.g., 2024-01-31T23:59:59Z).</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>Maximum number of jobs to return per page. Defaults to 50 if not specified.
   * Use smaller values for faster responses, larger values to reduce API calls.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token from a previous ListEnrichmentJobs response. Include this token to retrieve the
   * next page of results. Omit for the first request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information for an enrichment job returned by ListEnrichmentJobs. This lightweight
 * representation includes identifiers, status, and key metadata without the full job configuration.</p>
 * <p>Use DescribeEnrichmentJob to retrieve:</p>
 * <ul>
 * <li>Complete job configuration (trim settings, full parameters)</li>
 * <li>Detailed timestamps (completedAt, cancelledAt)</li>
 * <li>Failure messages for failed jobs</li>
 * </ul>
 * <p>The summary is optimized for display in lists and dashboards, providing enough information to
 * identify and filter jobs without the overhead of full configuration details.</p>
 * @public
 */
export interface EnrichmentJobSummary {
  /**
   * <p>Unique identifier for the enrichment job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>Current status of the job: PENDING, RUNNING, COMPLETED, FAILED, TIMED_OUT, or CANCELLED.
   * Use this to quickly identify active jobs or jobs requiring attention.</p>
   * @public
   */
  status: EnrichmentJobStatus | undefined;

  /**
   * <p>The name of the IoT SiteWise workspace containing this job.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The type of enrichment job. Currently EVENT_DETECTION is the only supported type.</p>
   * @public
   */
  jobType: JobType | undefined;

  /**
   * <p>The dataset being enriched. Useful for filtering and identifying jobs without fetching the full
   * configuration. This allows you to quickly find all jobs related to a specific dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The property alias (human-readable sensor name) of the time series being enriched.
   * Present when the job was created using a propertyAlias. Use this to identify which sensor the job analyzes.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The system identifier of the time series being enriched.
   * Present when the job was created using a timeSeriesId. Use this to identify which time series the job analyzes.</p>
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * <p>Timestamp when the job was created in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp of the last job status change in ISO 8601 format. Use this to track recent activity
   * and identify stale jobs. For active jobs, this shows the last time the job transitioned to a new status.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListEnrichmentJobsResponse {
  /**
   * <p>Array of job summaries matching the filter criteria, ordered by creation time descending (newest first).
   * Each summary includes key identifiers (jobId, datasetId, propertyAlias/timeSeriesId) and status
   * information without the full job configuration. Use DescribeEnrichmentJob to retrieve complete details.</p>
   * @public
   */
  jobs: EnrichmentJobSummary[] | undefined;

  /**
   * <p>Pagination token to retrieve the next page of results. If present, more jobs exist that match the
   * filter criteria. Include this token in a subsequent ListEnrichmentJobs request to retrieve the next
   * page. If absent, you have retrieved all matching jobs.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * <p>The type of the target resource.</p>
   * @public
   */
  targetResourceType: TargetResourceType | undefined;

  /**
   * <p>The ID of the target resource.</p>
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * <p>The type of the resolved resource.</p>
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * <p>The ID of the resolved resource.</p>
   * @public
   */
  resolveToResourceId?: string | undefined;

  /**
   * <p>The token used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of action exectued.</p>
   * @public
   */
  actionType?: string | undefined;
}

/**
 * <p>Contains the execution summary of the computation model.</p>
 * @public
 */
export interface ExecutionSummary {
  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The type of action exectued.</p>
   * @public
   */
  actionType?: string | undefined;

  /**
   * <p>The resource the action will be taken on. This can include asset-based resources and
   *       computation model resources.</p>
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * <p>The version of the target resource.</p>
   * @public
   */
  targetResourceVersion: string | undefined;

  /**
   * <p>The detailed resource this execution resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * <p>The time the process started.</p>
   * @public
   */
  executionStartTime: Date | undefined;

  /**
   * <p>The time the process ended.</p>
   * @public
   */
  executionEndTime?: Date | undefined;

  /**
   * <p>The status of the execution process.</p>
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * <p>The execution entity version associated with the summary.</p>
   * @public
   */
  executionEntityVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * <p>Contains the list of execution summaries of the computation models.</p>
   * @public
   */
  executionSummaries: ExecutionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a gateway.</p>
 * @public
 */
export interface GatewaySummary {
  /**
   * <p>The ID of the gateway device.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  gatewayName: string | undefined;

  /**
   * <p>The gateway's platform configuration. You can only specify one platform type in a
   *       gateway.</p>
   *          <p>(Legacy only) For Greengrass V1 gateways, specify the <code>greengrass</code> parameter
   *       with a valid Greengrass group ARN.</p>
   *          <p>For Greengrass V2 gateways, specify the <code>greengrassV2</code> parameter with a valid
   *       core device thing name. If creating a V3 gateway (<code>gatewayVersion=3</code>), you must
   *       also specify the <code>coreDeviceOperatingSystem</code>.</p>
   *          <p>For Siemens Industrial Edge gateways, specify the <code>siemensIE</code> parameter with a
   *       valid IoT Core thing name.</p>
   * @public
   */
  gatewayPlatform?: GatewayPlatform | undefined;

  /**
   * <p>The version of the gateway. A value of <code>3</code> indicates an MQTT-enabled, V3
   *       gateway, while <code>2</code> indicates a Classic streams, V2 gateway.</p>
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   * @public
   */
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[] | undefined;

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * <p>A list that summarizes each gateway.</p>
   * @public
   */
  gatewaySummaries: GatewaySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInterfaceRelationshipsRequest {
  /**
   * <p>The ID of the interface asset model. This can be either the actual ID in UUID format, or
   *       else externalId: followed by the external ID.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about an interface relationship, which defines how an
 *       interface is applied to an asset model. This summary provides the essential identifiers needed
 *       to retrieve detailed information about the relationship.</p>
 * @public
 */
export interface InterfaceRelationshipSummary {
  /**
   * <p>The ID of the asset model that has the interface applied to it.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListInterfaceRelationshipsResponse {
  /**
   * <p>A list that summarizes each interface relationship.</p>
   * @public
   */
  interfaceRelationshipSummaries: InterfaceRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for ListPipelineExecutions operation.</p>
 * @public
 */
export interface ListPipelineExecutionsRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per request.
   * This is an upper bound; the actual number of results may be less. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filter by execution state.
   * If not specified, executions in all states are returned.</p>
   * @public
   */
  state?: PipelineExecutionState | undefined;

  /**
   * <p>Inclusive lower bound on execution start time (ISO-8601).
   * Only executions with startTime &gt;= startTimeAfter are returned.
   * Cannot be combined with endTimeAfter or endTimeBefore.</p>
   * @public
   */
  startTimeAfter?: Date | undefined;

  /**
   * <p>Exclusive upper bound on execution start time (ISO-8601).
   * Only executions with startTime &lt; startTimeBefore are returned.
   * Cannot be combined with endTimeAfter or endTimeBefore.</p>
   * @public
   */
  startTimeBefore?: Date | undefined;

  /**
   * <p>Inclusive lower bound on execution end time (ISO-8601).
   * Only executions with endTime &gt;= endTimeAfter are returned.
   * Cannot be combined with startTimeAfter or startTimeBefore.
   * Only matches executions in terminal states.</p>
   * @public
   */
  endTimeAfter?: Date | undefined;

  /**
   * <p>Exclusive upper bound on execution end time (ISO-8601).
   * Only executions with endTime &lt; endTimeBefore are returned.
   * Cannot be combined with startTimeAfter or startTimeBefore.
   * Only matches executions in terminal states.</p>
   * @public
   */
  endTimeBefore?: Date | undefined;
}

/**
 * <p>Contains summary information about a pipeline execution.</p>
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The unique identifier of the pipeline execution.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The pipeline version this execution ran against.</p>
   * @public
   */
  pipelineVersion: string | undefined;

  /**
   * <p>The current execution status of the pipeline.</p>
   * @public
   */
  status: PipelineExecutionStatus | undefined;

  /**
   * <p>Scheduling priority for the execution. When not specified, defaults to lowest priority.</p>
   * @public
   */
  executionPriority?: number | undefined;

  /**
   * <p>The time the pipeline execution started, in Unix epoch time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time the pipeline execution completed, in Unix epoch time.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * <p>Response structure for ListPipelineExecutions operation.</p>
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * <p>A list that summarizes each pipeline execution.</p>
   * @public
   */
  pipelineExecutionSummaries: PipelineExecutionSummary[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for ListPipelines operation.</p>
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a pipeline.</p>
 * @public
 */
export interface PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the pipeline.</p>
   * @public
   */
  pipelineArn: string | undefined;

  /**
   * <p>The version of the pipeline.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The current lifecycle status of the pipeline.</p>
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * <p>The time the pipeline was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the pipeline was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for ListPipelines operation.</p>
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>A list that summarizes each pipeline in the workspace.</p>
   * @public
   */
  pipelineSummaries: PipelineSummary[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a portal summary.</p>
 * @public
 */
export interface PortalSummary {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the portal.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The portal's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   * @public
   */
  startUrl: string | undefined;

  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Contains information about the current status of a portal.</p>
   * @public
   */
  status: PortalStatus | undefined;

  /**
   * <p>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalType?: PortalType | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * <p>A list that summarizes each portal.</p>
   * @public
   */
  portalSummaries?: PortalSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectAssetsRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProjectAssetsResponse {
  /**
   * <p>A list that contains the IDs of each asset associated with the project.</p>
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains project summary information.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The project's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>A list that summarizes each project in the portal.</p>
   * @public
   */
  projectSummaries: ProjectSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueriesRequest {
  /**
   * <p>The name of the workspace to list queries for.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>An optional filter to return only queries with the specified status. The value must be one of the supported query statuses: SUBMITTED, RUNNING, COMPLETED, FAILED, CANCELED, or CANCELING.</p>
   * @public
   */
  filter?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a query.</p>
 * @public
 */
export interface QuerySummary {
  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The current query status.</p>
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * <p>The date and time when the query was submitted, in Unix epoch time.</p>
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * <p>The date and time when the query reached a terminal state, in Unix epoch time.</p>
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * <p>Contains the response for the ListQueries operation.</p>
 * @public
 */
export interface ListQueriesResponse {
  /**
   * <p>A list of query summaries for the workspace.</p>
   * @public
   */
  queries: QuerySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Optional filters for ListSearches. When multiple filters are set, a search must match all of them.</p>
 * @public
 */
export interface ListSearchesFilters {
  /**
   * <p>Returns only searches whose status is one of the listed values.</p>
   * @public
   */
  statusFilter?: SearchStatus[] | undefined;

  /**
   * <p>Returns only searches started at or after this time.</p>
   * @public
   */
  startedAfter?: Date | undefined;

  /**
   * <p>Returns only searches started at or before this time.</p>
   * @public
   */
  startedBefore?: Date | undefined;

  /**
   * <p>Returns only searches whose <code>groupId</code> is one of the listed values.</p>
   * @public
   */
  groupIdFilter?: string[] | undefined;

  /**
   * <p>Returns only searches whose <code>searchType</code> is one of the listed values.</p>
   * @public
   */
  searchTypeFilter?: SearchType[] | undefined;
}

/**
 * <p>Input for the ListSearches operation.</p>
 * @public
 */
export interface ListSearchesRequest {
  /**
   * <p>The name of the workspace whose searches are listed.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The maximum number of searches to return in a single page. Valid range is 1 to 1,000; if
   * omitted, a service-defined default is used.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token returned by a previous ListSearches call. Provide it to retrieve the next
   * page; omit it to retrieve the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional filters that restrict which searches are returned.</p>
   * @public
   */
  listSearchesFilters?: ListSearchesFilters | undefined;
}

/**
 * <p>A summary of a single search as returned by ListSearches.</p>
 * @public
 */
export interface SearchSummary {
  /**
   * <p>The unique identifier of the search.</p>
   * @public
   */
  searchId: string | undefined;

  /**
   * <p>The name of the workspace the search runs against.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The current status of the search.</p>
   * @public
   */
  status: SearchStatus | undefined;

  /**
   * <p>The natural-language query that was submitted for the search.</p>
   * @public
   */
  queryStatement: string | undefined;

  /**
   * <p>The search strategy used for the search.</p>
   * @public
   */
  searchType: SearchType | undefined;

  /**
   * <p>A human-readable explanation of the current status. Populated when the search has <code>FAILED</code>.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The time at which the search was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The group identifier associated with the search, if one was supplied on the request.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>Output of the ListSearches operation.</p>
 * @public
 */
export interface ListSearchesResponse {
  /**
   * <p>A page of search summaries, most recently started first.</p>
   * @public
   */
  searchSummaries: SearchSummary[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent ListSearches call to retrieve the next page. Absent
   * when there are no more searches.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Request structure for ListTasks operation.</p>
 * @public
 */
export interface ListTasksRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a task.</p>
 * @public
 */
export interface TaskSummary {
  /**
   * <p>The name of the task.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>The description of the task.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the task.</p>
   * @public
   */
  taskArn: string | undefined;

  /**
   * <p>The version of the task.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The current lifecycle status of the task.</p>
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * <p>The time the task was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the task was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for ListTasks operation.</p>
 * @public
 */
export interface ListTasksResponse {
  /**
   * <p>A list that summarizes each task in the workspace.</p>
   * @public
   */
  taskSummaries: TaskSummary[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The alias prefix of the time series.</p>
   * @public
   */
  aliasPrefix?: string | undefined;

  /**
   * <p>The type of the time series. The time series type can be one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASSOCIATED</code> – The time series is associated with an asset
   *           property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISASSOCIATED</code> – The time series isn't associated with any asset
   *           property.</p>
   *             </li>
   *          </ul>
   * @public
   */
  timeSeriesType?: ListTimeSeriesType | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * <p>Contains a summary of a time series (data stream).</p>
 * @public
 */
export interface TimeSeriesSummary {
  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The date that the time series was created, in Unix epoch time.</p>
   * @public
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   * @public
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}</code>
   *          </p>
   * @public
   */
  timeSeriesArn: string | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesResponse {
  /**
   * <p>One or more time series summaries to list.</p>
   * @public
   */
  TimeSeriesSummaries: TimeSeriesSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a workspace, including its name, ARN, status, and
 *       creation and update timestamps.</p>
 * @public
 */
export interface WorkspaceSummary {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the workspace.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The date the workspace was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date the workspace was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>A list that summarizes each workspace.</p>
   * @public
   */
  workspaceSummaries: WorkspaceSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains configuration options for mapping properties from an interface asset model to an
 *       asset model where the interface is applied.</p>
 * @public
 */
export interface PropertyMappingConfiguration {
  /**
   * <p>If true, properties are matched by name between the interface asset model and the asset
   *       model where the interface is applied.</p>
   * @public
   */
  matchByPropertyName?: boolean | undefined;

  /**
   * <p>If true, missing properties from the interface asset model are automatically created in
   *       the asset model where the interface is applied.</p>
   * @public
   */
  createMissingProperty?: boolean | undefined;

  /**
   * <p>A list of specific property mappings that override the automatic mapping by name when an
   *       interface is applied to an asset model.</p>
   * @public
   */
  overrides?: PropertyMapping[] | undefined;
}

/**
 * @public
 */
export interface PutAssetModelInterfaceRelationshipRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else
   *       externalId: followed by the external ID.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model. This can be either the actual ID in UUID format, or
   *       else externalId: followed by the external ID.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The configuration for mapping properties from the interface asset model to the asset model
   *       where the interface is applied. This configuration controls how properties are matched and
   *       created during the interface application process.</p>
   * @public
   */
  propertyMappingConfiguration: PropertyMappingConfiguration | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the
   *       request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetModelInterfaceRelationshipResponse {
  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The ARN of the asset model, which has the following format.
   *       <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key ID of the customer managed key used for KMS encryption. This is required if you
   *       use <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key ARN of the KMS key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there is an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * <p>The logging options to set.</p>
   * @public
   */
  loggingOptions: LoggingOptions | undefined;

  /**
   * <p>The name of the workspace.</p>
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
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Identifies a storage destination. If you specified <code>MULTI_LAYER_STORAGE</code> for the storage type,
   *       you must specify a <code>MultiLayerStorage</code> object.</p>
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * <p>Describes the configuration for ingesting NULL and NaN data. By default the feature is
   *       allowed. The feature is disallowed if the value is <code>true</code>.</p>
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * @public
 */
export interface PutStorageConfigurationResponse {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Contains current status information for the configuration.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * <p>Describes the configuration for ingesting NULL and NaN data. By default the feature is
   *       allowed. The feature is disallowed if the value is <code>true</code>.</p>
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * <p>Request structure for StartPipelineExecution operation.</p>
 * @public
 */
export interface StartPipelineExecutionRequest {
  /**
   * <p>The name of the workspace containing the pipeline.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline to execute.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>Runtime environment variable overrides for the execution. Includes global variables
   * that apply to all compute nodes and computeNodes for per-node overrides. These take the highest
   * priority in the environment variable hierarchy.</p>
   * @public
   */
  executionEnvironmentVariableOverrides?: ExecutionEnvironmentVariables | undefined;

  /**
   * <p>Runtime mount overrides for the execution. Overrides are merged by mount name into
   * each listed compute node's task-defined mounts: a matching name replaces the task-defined
   * mount, a new name adds a mount, and task-defined mounts not referenced remain unchanged.
   * Compute nodes not listed use their task-defined mounts as-is.</p>
   * @public
   */
  executionMountOverrides?: MountOverrides | undefined;

  /**
   * <p>Scheduling priority for the execution. Lower values indicate higher priority. Defaults to 2 when not specified.</p>
   * @public
   */
  executionPriority?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * If you retry a request that completed successfully using the same client token, the server returns the
   * cached result from the original successful request without performing the operation again.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Response structure for StartPipelineExecution operation.</p>
 * @public
 */
export interface StartPipelineExecutionResponse {
  /**
   * <p>The unique identifier of the created pipeline execution.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;
}

/**
 * @public
 */
export interface StartQueryRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the workspace to query.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The SQL query to execute against the workspace telemetry, annotations, data segment, and dataset data.</p>
   * @public
   */
  queryStatement: string | undefined;
}

/**
 * <p>Contains the response for the StartQuery operation.</p>
 * @public
 */
export interface StartQueryResponse {
  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The initial query status. The value is always SUBMITTED upon creation.</p>
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * <p>Contains a time interval with a start time and an end time. Use a time interval to restrict an operation, such as a search, to a specific time range.</p>
 * @public
 */
export interface TimeInterval {
  /**
   * <p>The start of the time interval.</p>
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * <p>The end of the time interval.</p>
   * @public
   */
  endTime: TimeInNanos | undefined;
}

/**
 * <p>Optional filters that restrict a search to a subset of the workspace's data.</p>
 * @public
 */
export interface SearchFilters {
  /**
   * <p>Restricts the search to these time series.</p>
   * @public
   */
  timeSeriesIds?: string[] | undefined;

  /**
   * <p>Restricts the search to these datasets.</p>
   * @public
   */
  datasetIds?: string[] | undefined;

  /**
   * <p>Restricts the search to these time intervals.</p>
   * @public
   */
  timeIntervals?: TimeInterval[] | undefined;
}

/**
 * <p>Input for the StartSearch operation.</p>
 * @public
 */
export interface StartSearchRequest {
  /**
   * <p>The name of the workspace whose data is searched.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The natural-language query describing the data to search for.</p>
   * @public
   */
  queryStatement: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure the request is idempotent. Repeating
   * a StartSearch call with the same <code>clientToken</code> returns the original search rather than starting
   * a new one. If omitted, the SDK autogenerates one.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The search strategy to use. Defaults to <code>QUICK</code> when omitted.</p>
   * @public
   */
  searchType?: SearchType | undefined;

  /**
   * <p>Optional filters that restrict the search to a subset of the workspace's data.</p>
   * @public
   */
  searchFilters?: SearchFilters | undefined;

  /**
   * <p>An optional caller-supplied identifier used to group related searches together.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>Output of the StartSearch operation.</p>
 * @public
 */
export interface StartSearchResponse {
  /**
   * <p>The unique identifier assigned to the newly started search.</p>
   * @public
   */
  searchId: string | undefined;

  /**
   * <p>The name of the workspace the search runs against.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The initial status of the search. A newly started search is <code>QUEUED</code>.</p>
   * @public
   */
  status: SearchStatus | undefined;

  /**
   * <p>The group identifier associated with the search, if one was supplied on the request.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys for tags to remove from the resource.</p>
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
   * <p>The ID of the access policy.</p>
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
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
   * <p>The ID of the asset to update. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>An external ID to assign to the asset. The asset must not already have an external ID.
   *       The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * <p>A friendly name for the asset.</p>
   * @public
   */
  assetName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A description for the asset.</p>
   * @public
   */
  assetDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The status of the asset, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelRequest {
  /**
   * <p>The ID of the asset model to update. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>An external ID to assign to the asset model. The asset model must not already have an
   *       external ID. The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * <p>A unique name for the asset model.</p>
   * @public
   */
  assetModelName: string | undefined;

  /**
   * <p>A description for the asset model.</p>
   * @public
   */
  assetModelDescription?: string | undefined;

  /**
   * <p>The updated property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelProperties?: AssetModelProperty[] | undefined;

  /**
   * <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset
   *       model whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelHierarchies?: AssetModelHierarchy[] | undefined;

  /**
   * <p>The composite models that are part of this asset model. It groups properties
   *   (such as attributes, measurements, transforms, and metrics) and child composite models that
   *       model parts of your industrial equipment. Each composite model has a type that defines the
   *       properties that the composite model supports. Use composite models to define alarms on this asset model.</p>
   *          <note>
   *             <p>When creating custom composite models, you need to use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html">CreateAssetModelCompositeModel</a>. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-custom-composite-models.html">Creating custom composite models (Components)</a> in the
   *       <i>IoT SiteWise User Guide</i>.</p>
   *          </note>
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModel[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The update request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the update request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the update operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelResponse {
  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * <p>The status of the asset model, which contains a state (<code>UPDATING</code> after
   *       successfully calling this operation) and any error message.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelRequest {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>An external ID to assign to the asset model. You can only set the external ID of the asset
   *       model if it wasn't set when it was created, or you're setting it to the exact same thing as
   *       when it was created.</p>
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * <p>A description for the composite model.</p>
   * @public
   */
  assetModelCompositeModelDescription?: string | undefined;

  /**
   * <p>A unique name for the composite model.</p>
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The property definitions of the composite model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html#inline-composite-models">
   *         Inline custom composite models</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per composite model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelCompositeModelProperties?: AssetModelProperty[] | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The update request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the update request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the update operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelResponse {
  /**
   * <p>The path to the composite model listing the parent composite models.</p>
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetPropertyRequest {
  /**
   * <p>The ID of the asset to be updated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the alias is removed from the property.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The MQTT notification state (enabled or disabled) for this asset property.
   *       When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>
   * @public
   */
  propertyNotificationState?: PropertyNotificationState | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a
   *       value for this parameter, the service uses the value of the <code>assetModelProperty</code> in
   *       the asset model.</p>
   * @public
   */
  propertyUnit?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputationModelResponse {
  /**
   * <p>The status of the computation model. It contains a state (UPDATING after successfully
   *       calling this operation) and an error message if any.</p>
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * <p>The ID of the dashboard to update.</p>
   * @public
   */
  dashboardId: string | undefined;

  /**
   * <p>A new friendly name for the dashboard.</p>
   * @public
   */
  dashboardName: string | undefined;

  /**
   * <p>A new description for the dashboard.</p>
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * <p>The new dashboard definition, as specified in a JSON literal.</p>
   *          <ul>
   *             <li>
   *                <p>IoT SiteWise Monitor (Classic) see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Create dashboards (CLI)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>IoT SiteWise Monitor (AI-aware) see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-ai-dashboard-cli.html">Create dashboards (CLI)</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>in the <i>IoT SiteWise User Guide</i>
   *          </p>
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
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
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>A description about the dataset, and its functionality.</p>
   * @public
   */
  datasetDescription?: string | undefined;

  /**
   * <p>The updated configuration for the dataset.</p>
   * @public
   */
  datasetConfig?: DatasetConfig | undefined;

  /**
   * <p>The updated metadata for the dataset.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The data source for the dataset.</p>
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The status of the dataset. This contains the state and any error messages.
   *   State is <code>UPDATING</code> after a successfull call to this API, and any associated error message. The state is
   *   <code>ACTIVE</code> when ready to use.</p>
   * @public
   */
  datasetStatus?: DatasetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * <p>The ID of the gateway to update.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>A unique name for the gateway.</p>
   * @public
   */
  gatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * <p>The ID of the gateway to be updated.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the gateway capability configuration to be updated.
   *       For example, if you configure OPC UA
   *       sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:3</code>.</p>
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the configuration for the gateway capability. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  capabilityConfiguration: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationResponse {
  /**
   * <p>The namespace of the gateway capability.</p>
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The synchronization status of the gateway capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> - The gateway is running with the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> - The gateway hasn't received the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> - The gateway rejected the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> - The gateway hasn't reported its sync status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_APPLICABLE</code> - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.</p>
   *             </li>
   *          </ul>
   *          <p>After you update a capability configuration, its sync status is <code>OUT_OF_SYNC</code>
   *       until the gateway receives and applies or rejects the updated configuration.</p>
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * <p>Request structure for UpdatePipeline operation.</p>
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline to update.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>A new description for the pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Updated environment variables shared across all compute nodes.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Updated list of compute nodes forming the pipeline DAG.</p>
   * @public
   */
  computations?: ComputeNode[] | undefined;
}

/**
 * <p>Response structure for UpdatePipeline operation.</p>
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>The new version of the pipeline created by this update.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The current lifecycle status of the pipeline.</p>
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * <p>Contains an image that is one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>An image file. Choose this option to upload a new image.</p>
 *             </li>
 *             <li>
 *                <p>The ID of an existing image. Choose this option to keep an existing image.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Image {
  /**
   * <p>The ID of an existing image. Specify this parameter to keep an existing image.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Contains an image file.</p>
   * @public
   */
  file?: ImageFile | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * <p>The ID of the portal to update.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>A new friendly name for the portal.</p>
   * @public
   */
  portalName: string | undefined;

  /**
   * <p>A new description for the portal.</p>
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * <p>Contains an image that is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An image file. Choose this option to upload a new image.</p>
   *             </li>
   *             <li>
   *                <p>The ID of an existing image. Choose this option to keep an existing image.</p>
   *             </li>
   *          </ul>
   * @public
   */
  portalLogoImage?: Image | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The email address that sends alarm notifications.</p>
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * <p>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * <p>The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The ID of the project to update.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>A new friendly name for the project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A new description for the project.</p>
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {}

/**
 * <p>Request structure for UpdateTask operation.</p>
 * @public
 */
export interface UpdateTaskRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the task to update.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>A new description for the task.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated task execution configuration.</p>
   * @public
   */
  taskConfiguration?: TaskConfiguration | undefined;
}

/**
 * <p>Response structure for UpdateTask operation.</p>
 * @public
 */
export interface UpdateTaskResponse {
  /**
   * <p>The new version of the task created by this update.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The current lifecycle status of the task.</p>
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceRequest {
  /**
   * <p>The name of the workspace to update.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>A new description for the workspace.</p>
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * <p>The encryption configuration for the workspace. Omit this field to leave encryption
   *       unchanged. After a customer managed key configuration becomes active, the key can't be
   *       changed; supplying the same key is accepted.</p>
   * @public
   */
  encryptionConfiguration?: WorkspaceEncryptionConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is
   *       idempotent. If you retry a request that completed successfully using the same client token,
   *       the retry succeeds without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceResponse {
  /**
   * <p>The status of the workspace after the update, which is <code>UPDATING</code> when the
   *       operation returns.</p>
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;
}

/**
 * <p>Contains computation model data binding value information, which can be one of
 *         <code>assetModelProperty</code>, <code>list</code>.</p>
 * @public
 */
export interface ComputationModelDataBindingValue {
  /**
   * <p>Specifies an asset model property data binding value.</p>
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValue | undefined;

  /**
   * <p>The asset property value used for computation model data binding.</p>
   * @public
   */
  assetProperty?: AssetPropertyBindingValue | undefined;

  /**
   * <p>Specifies a list of data binding value.</p>
   * @public
   */
  list?: ComputationModelDataBindingValue[] | undefined;
}

/**
 * @public
 */
export interface CreateComputationModelRequest {
  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  computationModelName: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * <p>The configuration for the computation model.</p>
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * <p>The data binding for the computation model. Key is a variable name defined in configuration.
   *   Value is a <code>ComputationModelDataBindingValue</code> referenced by the variable.</p>
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelResponse {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the computation model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}</code>
   *          </p>
   * @public
   */
  computationModelArn: string | undefined;

  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  computationModelName: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * <p>The configuration for the computation model.</p>
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * <p>The data binding for the computation model. Key is a variable name defined in configuration.
   *   Value is a <code>ComputationModelDataBindingValue</code> referenced by the variable.</p>
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * <p>The model creation date, in Unix epoch time.</p>
   * @public
   */
  computationModelCreationDate: Date | undefined;

  /**
   * <p>The date the model was last updated, in Unix epoch time.</p>
   * @public
   */
  computationModelLastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset model, which contains a state and an error message if
   *       any.</p>
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;

  /**
   * <p>The version of the computation model.</p>
   * @public
   */
  computationModelVersion: string | undefined;

  /**
   * <p>The available actions for this computation model.</p>
   * @public
   */
  actionDefinitions: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface UpdateComputationModelRequest {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  computationModelName: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * <p>The configuration for the computation model.</p>
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * <p>The data binding for the computation model. Key is a variable name defined in configuration.
   *   Value is a <code>ComputationModelDataBindingValue</code> referenced by the variable.</p>
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the
   *       request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents a single data point in a query result. </p>
 * @public
 */
export interface Datum {
  /**
   * <p>Indicates if the data point is a scalar value such as integer, string, double, or Boolean.
   *     </p>
   * @public
   */
  scalarValue?: string | undefined;

  /**
   * <p>Indicates if the data point is an array. </p>
   * @public
   */
  arrayValue?: Datum[] | undefined;

  /**
   * <p>Indicates if the data point is a row.</p>
   * @public
   */
  rowValue?: Row | undefined;

  /**
   * <p>Indicates if the data point is null.</p>
   * @public
   */
  nullValue?: boolean | undefined;
}

/**
 * <p>Represents a single row in the query results.</p>
 * @public
 */
export interface Row {
  /**
   * <p>List of data points in a single row of the result set.</p>
   * @public
   */
  data: Datum[] | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * <p>Represents a single column in the query results.</p>
   * @public
   */
  columns?: ColumnInfo[] | undefined;

  /**
   * <p>Represents a single row in the query results.</p>
   * @public
   */
  rows?: Row[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}
