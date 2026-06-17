// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AuthenticationType,
  BackfillErrorCode,
  Comparator,
  Compatibility,
  ConnectionType,
  ConnectorOAuth2GrantType,
  ContentType,
  CrawlerHistoryState,
  DataFormat,
  DQCompositeRuleEvaluationMethod,
  EnableHybridValues,
  ExistCondition,
  FieldName,
  FilterOperator,
  FunctionType,
  HTTPMethod,
  InclusionAnnotationValue,
  IntegrationStatus,
  IntegrationType,
  Language,
  LastRefreshType,
  MaterializedViewRefreshState,
  MaterializedViewRefreshType,
  PartitionIndexStatus,
  Permission,
  PermissionType,
  PrincipalType,
  RegistryStatus,
  ResourceShareType,
  ResourceState,
  SchemaDiffType,
  SchemaStatus,
  SchemaVersionStatus,
  SearchFilterOperator,
  SearchSortOrder,
  Sort,
  SortDirectionType,
  StatementState,
  StatisticEvaluationLevel,
  TableAttributes,
  TableOptimizerType,
  TaskRunSortColumnType,
  TaskStatusType,
  TaskType,
  TransformSortColumnType,
  TransformStatusType,
  TransformType,
  ViewDialect,
  WorkerType,
} from "./enums";
import type {
  AssetFormEntry,
  AssetTypeFormReference,
  AssetTypeItem,
  AuditContext,
  CustomEntityType,
  DataSource,
  DevEndpoint,
  ErrorDetail,
  GlueTable,
  JobRun,
  Partition,
  PartitionValueList,
  QuerySessionContext,
  SchemaId,
  StatisticAnnotation,
  TableOptimizer,
  TableOptimizerRun,
  TimestampedInclusionAnnotation,
  Trigger,
  Workflow,
  WorkflowRun,
} from "./models_0";
import type {
  Capabilities,
  CodeGenNodeArg,
  ConnectorProperty,
  DataCatalogEncryptionSettings,
  DataQualityTargetTable,
  EncryptionConfiguration,
  IcebergPartitionSpec,
  IcebergSchema,
  IcebergSortOrder,
  IntegrationConfig,
  IntegrationError,
  ProfileConfiguration,
  RegistryId,
  ResourceUri,
  RestConfiguration,
  Session,
  SourceProcessingProperties,
  SourceTableConfig,
  Tag,
  TargetProcessingProperties,
  TargetTableConfig,
  TransformEncryption,
  TransformParameters,
} from "./models_1";

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * <p>Additional run options you can specify for an evaluation run.</p>
 * @public
 */
export interface DataQualityEvaluationRunAdditionalRunOptions {
  /**
   * <p>Whether or not to enable CloudWatch metrics.</p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>Prefix for Amazon S3 to store results.</p>
   * @public
   */
  ResultsS3Prefix?: string | undefined;

  /**
   * <p>Set the evaluation method for composite rules in the ruleset to ROW/COLUMN</p>
   * @public
   */
  CompositeRuleEvaluationMethod?: DQCompositeRuleEvaluationMethod | undefined;

  /**
   * <p>A custom prefix for the CloudWatch log group names. When specified, evaluation run logs are written to <code><CustomLogGroupPrefix>/error</code> and <code><CustomLogGroupPrefix>/output</code> instead of the default <code>/aws-glue/data-quality/error</code> and <code>/aws-glue/data-quality/output</code> log groups.</p>
   * @public
   */
  CustomLogGroupPrefix?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The data source (an Glue table) associated with this evaluation run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>Additional run options you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The error strings that are associated with the run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The date and time when this run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>A list of ruleset names for the run. Currently, this parameter takes only one Ruleset name.</p>
   * @public
   */
  RulesetNames?: string[] | undefined;

  /**
   * <p>A list of result IDs for the data quality results for the run.</p>
   * @public
   */
  ResultIds?: string[] | undefined;

  /**
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource> | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointRequest {
  /**
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointResponse {
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   * @public
   */
  DevEndpoint?: DevEndpoint | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointsRequest {
  /**
   * <p>The maximum size of information to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   * @public
   */
  DevEndpoints?: DevEndpoint[] | undefined;

  /**
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityRecordsRequest {
  /**
   * <p>The name of the connection that contains the connection type credentials.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Name of the entity that we want to query the preview data from the given connection type.</p>
   * @public
   */
  EntityName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The API version of the SaaS connector.</p>
   * @public
   */
  DataStoreApiVersion?: string | undefined;

  /**
   * <p>Connector options that are required to query the data.</p>
   * @public
   */
  ConnectionOptions?: Record<string, string> | undefined;

  /**
   * <p>A filter predicate that you can apply in the query request.</p>
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * <p>Limits the number of records fetched with the request.</p>
   * @public
   */
  Limit: number | undefined;

  /**
   * <p>A parameter that orders the response preview data.</p>
   * @public
   */
  OrderBy?: string | undefined;

  /**
   * <p> List of fields that we want to fetch as part of preview data.</p>
   * @public
   */
  SelectedFields?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEntityRecordsResponse {
  /**
   * <p>A list of the requested objects.</p>
   * @public
   */
  Records?: __DocumentType[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeRequest {
  /**
   * <p>The identifier of the form type to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeResponse {
  /**
   * <p>The identifier of the form type.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the form type.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Smithy IDL schema of the form type.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryRequest {
  /**
   * <p>The unique identifier of the glossary to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryResponse {
  /**
   * <p>The unique identifier of the glossary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the glossary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the glossary.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermRequest {
  /**
   * <p>The unique identifier of the glossary term to retrieve.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermResponse {
  /**
   * <p>The unique identifier of the glossary term.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The unique identifier of the glossary containing this term.</p>
   * @public
   */
  GlossaryId?: string | undefined;

  /**
   * <p>The name of the glossary term.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The short description of the glossary term.</p>
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * <p>The long description of the glossary term.</p>
   * @public
   */
  LongDescription?: string | undefined;
}

/**
 * <p>Request to retrieve the Glue Identity Center configuration.</p>
 * @public
 */
export interface GetGlueIdentityCenterConfigurationRequest {}

/**
 * <p>Response containing the Glue Identity Center configuration details.</p>
 * @public
 */
export interface GetGlueIdentityCenterConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Identity Center application associated with the Glue configuration.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity Center instance associated with the Glue configuration.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.</p>
   * @public
   */
  Scopes?: string[] | undefined;

  /**
   * <p>Indicates whether users can run background sessions when using Identity Center authentication with Glue services.</p>
   * @public
   */
  UserBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResourcePropertyRequest {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResourcePropertyResponse {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*</p>
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * <p>The resource properties associated with the integration source.</p>
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * <p>The resource properties associated with the integration target.</p>
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface GetIntegrationTablePropertiesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving
   *       properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration
   *       table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The name of the table to be replicated.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationTablePropertiesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving
   *       properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration
   *       table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *     </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The name of the table to be replicated.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A structure for the source table configuration.</p>
   * @public
   */
  SourceTableConfig?: SourceTableConfig | undefined;

  /**
   * <p>A structure for the target table configuration.</p>
   * @public
   */
  TargetTableConfig?: TargetTableConfig | undefined;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * <p>The name of the job definition to retrieve.</p>
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * <p>Defines a point that a job can resume processing.</p>
 * @public
 */
export interface JobBookmarkEntry {
  /**
   * <p>The name of the job in question.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The version of the job.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The run ID number.</p>
   * @public
   */
  Run?: number | undefined;

  /**
   * <p>The attempt ID number.</p>
   * @public
   */
  Attempt?: number | undefined;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * <p>The run ID number.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The bookmark itself.</p>
   * @public
   */
  JobBookmark?: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkResponse {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry | undefined;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * <p>Name of the job definition being run.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>True if a list of predecessor runs should be returned.</p>
   * @public
   */
  PredecessorsIncluded?: boolean | undefined;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * <p>The requested job-run metadata.</p>
   * @public
   */
  JobRun?: JobRun | undefined;
}

/**
 * @public
 */
export interface GetJobRunsRequest {
  /**
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetJobRunsResponse {
  /**
   * <p>A list of job-run metadata objects.</p>
   * @public
   */
  JobRuns?: JobRun[] | undefined;

  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The location of resources.</p>
 * @public
 */
export interface Location {
  /**
   * <p>A JDBC location.</p>
   * @public
   */
  Jdbc?: CodeGenNodeArg[] | undefined;

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   * @public
   */
  S3?: CodeGenNodeArg[] | undefined;

  /**
   * <p>An Amazon DynamoDB table location.</p>
   * @public
   */
  DynamoDB?: CodeGenNodeArg[] | undefined;
}

/**
 * <p>Specifies a table definition in the Glue Data Catalog.</p>
 * @public
 */
export interface CatalogEntry {
  /**
   * <p>The database in which the table metadata resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in question.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetMappingRequest {
  /**
   * <p>Specifies the source table.</p>
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>A list of target tables.</p>
   * @public
   */
  Sinks?: CatalogEntry[] | undefined;

  /**
   * <p>Parameters for the mapping.</p>
   * @public
   */
  Location?: Location | undefined;
}

/**
 * <p>Defines a mapping.</p>
 * @public
 */
export interface MappingEntry {
  /**
   * <p>The name of the source table.</p>
   * @public
   */
  SourceTable?: string | undefined;

  /**
   * <p>The source path.</p>
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The target table.</p>
   * @public
   */
  TargetTable?: string | undefined;

  /**
   * <p>The target path.</p>
   * @public
   */
  TargetPath?: string | undefined;

  /**
   * <p>The target type.</p>
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * @public
 */
export interface GetMappingResponse {
  /**
   * <p>A list of mappings to the specified targets.</p>
   * @public
   */
  Mapping: MappingEntry[] | undefined;
}

/**
 * @public
 */
export interface GetMaterializedViewRefreshTaskRunRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The identifier for the particular materialized view refresh task run.</p>
   * @public
   */
  MaterializedViewRefreshTaskRunId: string | undefined;
}

/**
 * <p>The object that shows the details of the materialized view refresh task run.</p>
 * @public
 */
export interface MaterializedViewRefreshTaskRun {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * <p>The identifier of the materialized view refresh task run.</p>
   * @public
   */
  MaterializedViewRefreshTaskRunId?: string | undefined;

  /**
   * <p>The database where the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table for which statistics is generated.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The IAM role that the service assumes to generate statistics.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The status of the task run.</p>
   * @public
   */
  Status?: MaterializedViewRefreshState | undefined;

  /**
   * <p>The time that this task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last point in time when this task was modified.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The start time of the task.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the task.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The error message for the job.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The calculated DPU usage in seconds for all autoscaled workers.</p>
   * @public
   */
  DPUSeconds?: number | undefined;

  /**
   * <p>The type of the refresh task run. Either FULL or INCREMENTAL.</p>
   * @public
   */
  RefreshType?: MaterializedViewRefreshType | undefined;

  /**
   * <p>The number of bytes the refresh task run has scanned to refresh the materialized view.</p>
   * @public
   */
  ProcessedBytes?: number | undefined;
}

/**
 * @public
 */
export interface GetMaterializedViewRefreshTaskRunResponse {
  /**
   * <p>A MaterializedViewRefreshTaskRun object representing the details of the task run.</p>
   * @public
   */
  MaterializedViewRefreshTaskRun?: MaterializedViewRefreshTaskRun | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The unique identifier of the task run.</p>
   * @public
   */
  TaskRunId: string | undefined;
}

/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 * @public
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   * @public
   */
  OutputS3Path?: string | undefined;
}

/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 * @public
 */
export interface FindMatchesTaskRunProperties {
  /**
   * <p>The job ID for the Find Matches task run.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The name assigned to the job for the Find Matches task run.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job run ID for the Find Matches task run.</p>
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 * @public
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
   *       labels.</p>
   * @public
   */
  InputS3Path?: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 * @public
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   * @public
   */
  OutputS3Path?: string | undefined;
}

/**
 * <p>The configuration properties for the task run.</p>
 * @public
 */
export interface TaskRunProperties {
  /**
   * <p>The type of task run.</p>
   * @public
   */
  TaskType?: TaskType | undefined;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   * @public
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties | undefined;

  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   * @public
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties | undefined;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   * @public
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties | undefined;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   * @public
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunResponse {
  /**
   * <p>The unique identifier of the task run.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * <p>The status for this task run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   * @public
   */
  Properties?: TaskRunProperties | undefined;

  /**
   * <p>The error strings that are associated with the task run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time when this task run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The date and time when this task run was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The date and time when this task run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 * @public
 */
export interface TaskRunFilterCriteria {
  /**
   * <p>The type of task run.</p>
   * @public
   */
  TaskRunType?: TaskType | undefined;

  /**
   * <p>The current status of the task run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>Filter on task runs started before this date.</p>
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * <p>Filter on task runs started after this date.</p>
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 * @public
 */
export interface TaskRunSortCriteria {
  /**
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   * @public
   */
  Column: TaskRunSortColumnType | undefined;

  /**
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   * @public
   */
  Filter?: TaskRunFilterCriteria | undefined;

  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   * @public
   */
  Sort?: TaskRunSortCriteria | undefined;
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 * @public
 */
export interface TaskRun {
  /**
   * <p>The unique identifier for the transform.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique identifier for this task run.</p>
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * <p>The current status of the requested task run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   * @public
   */
  Properties?: TaskRunProperties | undefined;

  /**
   * <p>The list of error strings associated with this task run.</p>
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * <p>The date and time that this task run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>The last point in time that the requested task run was completed.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsResponse {
  /**
   * <p>A list of task runs that are associated with the transform.</p>
   * @public
   */
  TaskRuns?: TaskRun[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformRequest {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   * @public
   */
  TransformId: string | undefined;
}

/**
 * <p>A structure containing the column name and column importance score for a column. </p>
 *          <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
 * @public
 */
export interface ColumnImportance {
  /**
   * <p>The name of a column.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>The column importance score for the column, as a decimal.</p>
   * @public
   */
  Importance?: number | undefined;
}

/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 * @public
 */
export interface ConfusionMatrix {
  /**
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   * @public
   */
  NumTruePositives?: number | undefined;

  /**
   * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
   *       in the confusion matrix for your transform.</p>
   * @public
   */
  NumFalsePositives?: number | undefined;

  /**
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   * @public
   */
  NumTrueNegatives?: number | undefined;

  /**
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   * @public
   */
  NumFalseNegatives?: number | undefined;
}

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 * @public
 */
export interface FindMatchesMetrics {
  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  AreaUnderPRCurve?: number | undefined;

  /**
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  Recall?: number | undefined;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   * @public
   */
  F1?: number | undefined;

  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   * @public
   */
  ConfusionMatrix?: ConfusionMatrix | undefined;

  /**
   * <p>A list of <code>ColumnImportance</code> structures containing column importance metrics, sorted in order of descending importance.</p>
   * @public
   */
  ColumnImportances?: ColumnImportance[] | undefined;
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 * @public
 */
export interface EvaluationMetrics {
  /**
   * <p>The type of machine learning transform.</p>
   * @public
   */
  TransformType: TransformType | undefined;

  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   * @public
   */
  FindMatchesMetrics?: FindMatchesMetrics | undefined;
}

/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 * @public
 */
export interface SchemaColumn {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of data in the column.</p>
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformResponse {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>The unique name given to the transform when it was created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the transform.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * <p>The date and time when the transform was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the transform was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables?: GlueTable[] | undefined;

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * <p>The latest evaluation metrics.</p>
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics | undefined;

  /**
   * <p>The number of labels available for this transform.</p>
   * @public
   */
  LabelCount?: number | undefined;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 * @public
 */
export interface TransformFilterCriteria {
  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   * @public
   */
  TransformType?: TransformType | undefined;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The time and date before which the transforms were created.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The time and date after which the transforms were created.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   * @public
   */
  LastModifiedBefore?: Date | undefined;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   * @public
   */
  LastModifiedAfter?: Date | undefined;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[] | undefined;
}

/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 * @public
 */
export interface TransformSortCriteria {
  /**
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   * @public
   */
  Column: TransformSortColumnType | undefined;

  /**
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter transformation criteria.</p>
   * @public
   */
  Filter?: TransformFilterCriteria | undefined;

  /**
   * <p>The sorting criteria.</p>
   * @public
   */
  Sort?: TransformSortCriteria | undefined;
}

/**
 * <p>A structure for a machine learning transform.</p>
 * @public
 */
export interface MLTransform {
  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   * @public
   */
  TransformId?: string | undefined;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current status of the machine learning transform.</p>
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables?: GlueTable[] | undefined;

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics | undefined;

  /**
   * <p>A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   * @public
   */
  LabelCount?: number | undefined;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *          <ul>
   *             <li>
   *                <p>This role needs Glue service role permissions to allow access to resources in Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsResponse {
  /**
   * <p>A list of machine learning transforms.</p>
   * @public
   */
  Transforms: MLTransform[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partition's table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A structure containing the Lake Formation audit context.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetPartitionResponse {
  /**
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   * @public
   */
  Partition?: Partition | undefined;
}

/**
 * @public
 */
export interface GetPartitionIndexesRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
 *          <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p>
 *          <ul>
 *             <li>
 *                <p>EncryptedPartitionError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p>
 *             </li>
 *             <li>
 *                <p>MissingPartitionValueError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p>
 *             </li>
 *             <li>
 *                <p>InternalError: Any error which does not belong to other error codes.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface BackfillError {
  /**
   * <p>The error code for an error that occurred when registering partition indexes for an existing table.</p>
   * @public
   */
  Code?: BackfillErrorCode | undefined;

  /**
   * <p>A list of a limited number of partitions in the response.</p>
   * @public
   */
  Partitions?: PartitionValueList[] | undefined;
}

/**
 * <p>A partition key pair consisting of a name and a type.</p>
 * @public
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a partition key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of a partition key.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>A descriptor for a partition index in a table.</p>
 * @public
 */
export interface PartitionIndexDescriptor {
  /**
   * <p>The name of the partition index.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   * @public
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * <p>The status of the partition index. </p>
   *          <p>The possible statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The index is being created. When an index is in a CREATING state, the index or its table cannot be deleted.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The index creation succeeds.</p>
   *             </li>
   *             <li>
   *                <p>FAILED: The index creation fails. </p>
   *             </li>
   *             <li>
   *                <p>DELETING: The index is deleted from the list of indexes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IndexStatus: PartitionIndexStatus | undefined;

  /**
   * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
   * @public
   */
  BackfillErrors?: BackfillError[] | undefined;
}

/**
 * @public
 */
export interface GetPartitionIndexesResponse {
  /**
   * <p>A list of index descriptors.</p>
   * @public
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[] | undefined;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be run in parallel.</p>
 * @public
 */
export interface Segment {
  /**
   * <p>The zero-based index number of the segment. For example, if the total number of segments
   *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
   * @public
   */
  SegmentNumber: number | undefined;

  /**
   * <p>The total number of segments.</p>
   * @public
   */
  TotalSegments: number | undefined;
}

/**
 * @public
 */
export interface GetPartitionsRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>An expression that filters the partitions to be returned.</p>
   *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
   *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
   *          <p>
   *             <i>Operators</i>: The following are the operators that you can use in the
   *         <code>Expression</code> API call:</p>
   *          <dl>
   *             <dt>=</dt>
   *             <dd>
   *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
   *             true.</p>
   *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
   *                <p>(a = b) is not true.</p>
   *             </dd>
   *             <dt>< ></dt>
   *             <dd>
   *                <p>Checks whether the values of two operands are equal; if the values are not equal,
   *             then the condition becomes true.</p>
   *                <p>Example: (a < > b) is true.</p>
   *             </dd>
   *             <dt>></dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a > b) is not true.</p>
   *             </dd>
   *             <dt><</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a < b) is true.</p>
   *             </dd>
   *             <dt>>=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than or equal to the value
   *             of the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a >= b) is not true.</p>
   *             </dd>
   *             <dt><=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than or equal to the value of
   *             the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a <= b) is true.</p>
   *             </dd>
   *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
   *             <dd>
   *                <p>Logical operators.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <i>Supported Partition Key Types</i>: The following are the supported
   *       partition keys.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>date</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>int</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tinyint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>smallint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>decimal</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   *          <p>The following list shows the valid operators on each type. When you define a crawler, the
   *         <code>partitionKey</code> type is created as a <code>STRING</code>, to be compatible with the catalog
   *       partitions. </p>
   *          <p>
   *             <i>Sample API Call</i>: </p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.</p>
   * @public
   */
  ExcludeColumnSchema?: boolean | undefined;

  /**
   * <p>The transaction ID at which to read the partition contents.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * <p>A structure containing the Lake Formation audit context.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetPartitionsResponse {
  /**
   * <p>A list of requested partitions.</p>
   * @public
   */
  Partitions?: Partition[] | undefined;

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanRequest {
  /**
   * <p>The list of mappings from a source table to target tables.</p>
   * @public
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The source table.</p>
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>The target tables.</p>
   * @public
   */
  Sinks?: CatalogEntry[] | undefined;

  /**
   * <p>The parameters for the mapping.</p>
   * @public
   */
  Location?: Location | undefined;

  /**
   * <p>The programming language of the code to perform the mapping.</p>
   * @public
   */
  Language?: Language | undefined;

  /**
   * <p>A map to hold additional optional key-value parameters.</p>
   *          <p>Currently, these key-value pairs are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>inferSchema</code>  —  Specifies whether to set <code>inferSchema</code> to true or false for the default script generated by an Glue job. For example, to set <code>inferSchema</code> to true, pass the following key value pair:</p>
   *                <p>
   *                   <code>--additional-plan-options-map '\{"inferSchema":"true"\}'</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  AdditionalPlanOptionsMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * <p>A Python script to perform the mapping.</p>
   * @public
   */
  PythonScript?: string | undefined;

  /**
   * <p>The Scala code to perform the mapping.</p>
   * @public
   */
  ScalaCode?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the registry.</p>
   * @public
   */
  Status?: RegistryStatus | undefined;

  /**
   * <p>The date and time the registry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date and time the registry was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure for returning a resource policy.</p>
 * @public
 */
export interface GluePolicy {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   * @public
   */
  PolicyInJson?: string | undefined;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * <p>The date and time at which the policy was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   * @public
   */
  GetResourcePoliciesResponseList?: GluePolicy[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the Glue resource for which to retrieve the resource policy. If not
   *       supplied, the Data Catalog resource policy is returned. Use <code>GetResourcePolicies</code>
   *       to view all existing resource policies. For more information see <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource ARNs</a>.
   *     </p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   * @public
   */
  PolicyInJson?: string | undefined;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * <p>The date and time at which the policy was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface GetSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>A description of schema if specified when created</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The compatibility mode of the schema.</p>
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   * @public
   */
  SchemaCheckpoint?: number | undefined;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   * @public
   */
  LatestSchemaVersion?: number | undefined;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   * @public
   */
  NextSchemaVersion?: number | undefined;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * <p>The date and time the schema was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date and time the schema was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The definition of the schema for which schema details are required.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionResponse {
  /**
   * <p>The schema ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * <p>The date and time the schema was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * <p>A structure containing the schema version information.</p>
 * @public
 */
export interface SchemaVersionNumber {
  /**
   * <p>The latest version available for the schema.</p>
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The <code>SchemaVersionId</code> of the schema version. This field is required for fetching by schema ID. Either this or the <code>SchemaId</code> wrapper has to be provided.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * <p>The <code>SchemaVersionId</code> of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The schema definition for the schema ID.</p>
   * @public
   */
  SchemaDefinition?: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The status of the schema version. </p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * <p>The date and time the schema version was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The first of the two schema versions to be compared.</p>
   * @public
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>The second of the two schema versions to be compared.</p>
   * @public
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>Refers to <code>SYNTAX_DIFF</code>, which is the currently supported diff type.</p>
   * @public
   */
  SchemaDiffType: SchemaDiffType | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffResponse {
  /**
   * <p>The difference between schemas as a string in JsonPatch format.</p>
   * @public
   */
  Diff?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Specifies a security configuration.</p>
 * @public
 */
export interface SecurityConfiguration {
  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time at which this security configuration was created.</p>
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationResponse {
  /**
   * <p>The requested security configuration.</p>
   * @public
   */
  SecurityConfiguration?: SecurityConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsResponse {
  /**
   * <p>A list of security configurations.</p>
   * @public
   */
  SecurityConfigurations?: SecurityConfiguration[] | undefined;

  /**
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The ID of the session. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session object is returned in the response.</p>
   * @public
   */
  Session?: Session | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointRequest {
  /**
   * <p>The unique identifier of the interactive session.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * <p>Contains the Spark Connect endpoint details for an interactive session, including the URL and authentication credentials.</p>
 * @public
 */
export interface SessionEndpoint {
  /**
   * <p>The Spark Connect endpoint URL for the session.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The authentication token to include in requests to the Spark Connect endpoint.</p>
   * @public
   */
  AuthToken: string | undefined;

  /**
   * <p>The time at which the authentication token expires.</p>
   * @public
   */
  AuthTokenExpirationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointResponse {
  /**
   * <p>The Spark Connect endpoint details for the session.</p>
   * @public
   */
  SparkConnect: SessionEndpoint | undefined;
}

/**
 * @public
 */
export interface GetStatementRequest {
  /**
   * <p>The Session ID of the statement.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The Id of the statement.</p>
   * @public
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * <p>The code execution output in JSON format.</p>
 * @public
 */
export interface StatementOutputData {
  /**
   * <p>The code execution output in text format.</p>
   * @public
   */
  TextPlain?: string | undefined;
}

/**
 * <p>The code execution output in JSON format.</p>
 * @public
 */
export interface StatementOutput {
  /**
   * <p>The code execution output.</p>
   * @public
   */
  Data?: StatementOutputData | undefined;

  /**
   * <p>The execution count of the output.</p>
   * @public
   */
  ExecutionCount?: number | undefined;

  /**
   * <p>The status of the code execution output.</p>
   * @public
   */
  Status?: StatementState | undefined;

  /**
   * <p>The name of the error in the output.</p>
   * @public
   */
  ErrorName?: string | undefined;

  /**
   * <p>The error value of the output.</p>
   * @public
   */
  ErrorValue?: string | undefined;

  /**
   * <p>The traceback of the output.</p>
   * @public
   */
  Traceback?: string[] | undefined;
}

/**
 * <p>The statement or request for a particular action to occur in a session.</p>
 * @public
 */
export interface Statement {
  /**
   * <p>The ID of the statement.</p>
   * @public
   */
  Id?: number | undefined;

  /**
   * <p>The execution code of the statement.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The state while request is actioned.</p>
   * @public
   */
  State?: StatementState | undefined;

  /**
   * <p>The output in JSON.</p>
   * @public
   */
  Output?: StatementOutput | undefined;

  /**
   * <p>The code execution progress.</p>
   * @public
   */
  Progress?: number | undefined;

  /**
   * <p>The unix time and date that the job definition was started.</p>
   * @public
   */
  StartedOn?: number | undefined;

  /**
   * <p>The unix time and date that the job definition was completed.</p>
   * @public
   */
  CompletedOn?: number | undefined;
}

/**
 * @public
 */
export interface GetStatementResponse {
  /**
   * <p>Returns the statement.</p>
   * @public
   */
  Statement?: Statement | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to read the table contents. </p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * <p>A structure containing the Lake Formation <a href="https://docs.aws.amazon.com/glue/latest/webapi/API_AuditContext.html">audit context</a>.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;

  /**
   * <p>Specifies the table fields returned by the <code>GetTable</code> call. This parameter doesn't accept an empty list.</p>
   *          <p>The following are the valid combinations of values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code> - Returns the Hive-style table definition only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST_ICEBERG_METADATA</code> - Returns only the latest Apache Iceberg table metadata.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code>, <code>LATEST_ICEBERG_METADATA</code> - Returns both the Hive-style table definition and the latest Apache Iceberg table metadata.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributesToGet?: TableAttributes[] | undefined;
}

/**
 * <p>A table that points to an entity outside the Glue Data Catalog.</p>
 * @public
 */
export interface FederatedTable {
  /**
   * <p>A unique identifier for the federated table.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>A unique identifier for the federated database.</p>
   * @public
   */
  DatabaseIdentifier?: string | undefined;

  /**
   * <p>The name of the connection to the external metastore.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The type of connection used to access the federated table, specifying the protocol or method for connecting to the external data source.</p>
   * @public
   */
  ConnectionType?: string | undefined;
}

/**
 * <p>The Apache Iceberg table metadata, including format version, table identifier, schemas, partition specifications, sort orders, and table properties. This structure captures the current state of an Iceberg table's metadata as managed by the Glue Data Catalog.</p>
 * @public
 */
export interface IcebergTableMetadata {
  /**
   * <p>The Apache Iceberg table format version, such as <code>1</code> or <code>2</code>. Determines the set of features and on-disk layout supported by the table.</p>
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * <p>The unique identifier (UUID) for the Iceberg table, assigned when the table is created and used to track the table across metadata updates.</p>
   * @public
   */
  TableUuid?: string | undefined;

  /**
   * <p>The base S3 location where the Iceberg table's data and metadata files are stored.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>A map of key-value pairs that define table-level properties and configuration settings for the Iceberg table.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * <p>The list of schemas that have been associated with the Iceberg table over its history, supporting schema evolution.</p>
   * @public
   */
  Schemas?: IcebergSchema[] | undefined;

  /**
   * <p>The identifier of the schema that is currently active for the Iceberg table. Matches an entry in <code>Schemas</code>.</p>
   * @public
   */
  CurrentSchemaId?: number | undefined;

  /**
   * <p>The highest column identifier that has been assigned in the Iceberg table's schema, used to ensure unique IDs as new columns are added.</p>
   * @public
   */
  LastColumnId?: number | undefined;

  /**
   * <p>The list of partition specifications that have been associated with the Iceberg table over its history, supporting partition evolution.</p>
   * @public
   */
  PartitionSpecs?: IcebergPartitionSpec[] | undefined;

  /**
   * <p>The identifier of the partition specification that is currently used by default when writing new data to the Iceberg table.</p>
   * @public
   */
  DefaultSpecId?: number | undefined;

  /**
   * <p>The highest partition field identifier that has been assigned across the table's partition specifications.</p>
   * @public
   */
  LastPartitionId?: number | undefined;

  /**
   * <p>The list of sort order specifications that have been associated with the Iceberg table over its history.</p>
   * @public
   */
  SortOrders?: IcebergSortOrder[] | undefined;

  /**
   * <p>The identifier of the sort order that is currently used by default when writing new data to the Iceberg table.</p>
   * @public
   */
  DefaultSortOrderId?: number | undefined;
}

/**
 * <p>A structure that contains information for an analytical engine to validate a view, prior to persisting the view metadata. Used in the case of direct <code>UpdateTable</code> or <code>CreateTable</code> API calls.</p>
 * @public
 */
export interface ViewValidation {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * <p>The <code>SELECT</code> query that defines the view, as provided by the customer.</p>
   * @public
   */
  ViewValidationText?: string | undefined;

  /**
   * <p>The time of the last update.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>The state of the validation.</p>
   * @public
   */
  State?: ResourceState | undefined;

  /**
   * <p>An error associated with the validation.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * <p>A structure that contains the dialect of the view, and the query that defines the view.</p>
 * @public
 */
export interface ViewRepresentation {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * <p>The <code>SELECT</code> query provided by the customer during <code>CREATE VIEW DDL</code>. This SQL is not used during a query on a view (<code>ViewExpandedText</code> is used instead). <code>ViewOriginalText</code> is used for cases like <code>SHOW CREATE VIEW</code> where users want to see the original DDL command that created the view.</p>
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * <p>The expanded SQL for the view. This SQL is used by engines while processing a query on a view. Engines may perform operations during view creation to transform <code>ViewOriginalText</code> to <code>ViewExpandedText</code>. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Fully qualified identifiers: <code>SELECT * from table1 -> SELECT * from db1.table1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ViewExpandedText?: string | undefined;

  /**
   * <p>The name of the connection to be used to validate the specific representation of the view.</p>
   * @public
   */
  ValidationConnection?: string | undefined;

  /**
   * <p>Dialects marked as stale are no longer valid and must be updated before they can be queried in their respective query engines.</p>
   * @public
   */
  IsStale?: boolean | undefined;
}

/**
 * <p>A structure containing details for representations.</p>
 * @public
 */
export interface ViewDefinition {
  /**
   * <p>You can set this flag as true to instruct the engine not to push user-provided operations into the logical plan of the view during query planning. However, setting this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.</p>
   * @public
   */
  IsProtected?: boolean | undefined;

  /**
   * <p>The definer of a view in SQL.</p>
   * @public
   */
  Definer?: string | undefined;

  /**
   * <p>The ID value that identifies this view's version. For materialized views, the version ID is the Apache Iceberg table's snapshot ID. </p>
   * @public
   */
  ViewVersionId?: number | undefined;

  /**
   * <p>The version ID of the Apache Iceberg table.</p>
   * @public
   */
  ViewVersionToken?: string | undefined;

  /**
   * <p>Auto refresh interval in seconds for the materialized view. If not specified, the view will
   *       not automatically refresh.</p>
   * @public
   */
  RefreshSeconds?: number | undefined;

  /**
   * <p>Sets the method used for the most recent refresh.</p>
   * @public
   */
  LastRefreshType?: LastRefreshType | undefined;

  /**
   * <p>A list of table Amazon Resource Names (ARNs).</p>
   * @public
   */
  SubObjects?: string[] | undefined;

  /**
   * <p>List of the Apache Iceberg table versions referenced by the materialized view.</p>
   * @public
   */
  SubObjectVersionIds?: number[] | undefined;

  /**
   * <p>A list of representations.</p>
   * @public
   */
  Representations?: ViewRepresentation[] | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The type of table optimizer.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerResponse {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The optimizer associated with the specified table.</p>
   * @public
   */
  TableOptimizer?: TableOptimizer | undefined;
}

/**
 * @public
 */
export interface GetTablesRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The transaction ID at which to read the table contents.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * <p>A structure containing the Lake Formation <a href="https://docs.aws.amazon.com/glue/latest/webapi/API_AuditContext.html">audit context</a>.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;

  /**
   * <p> Specifies the table fields returned by the <code>GetTables</code> call. This parameter doesn’t accept an empty list. The request must include <code>NAME</code>.</p>
   *          <p>The following are the valid combinations of values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NAME</code> - Names of all tables in the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAME</code>, <code>TABLE_TYPE</code> - Names of all tables and the table types.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributesToGet?: TableAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>A structure containing the Lake Formation audit context.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetTableVersionsRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A structure containing the Lake Formation audit context.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * <p>The requested tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTriggerRequest {
  /**
   * <p>The name of the trigger to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTriggerResponse {
  /**
   * <p>The requested trigger definition.</p>
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * @public
 */
export interface GetTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   * @public
   */
  DependentJobName?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetTriggersResponse {
  /**
   * <p>A list of triggers for the specified job.</p>
   * @public
   */
  Triggers?: Trigger[] | undefined;

  /**
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The catalog ID where the partition resides.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>(Required) Specifies the name of a database that contains the partition.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>(Required) Specifies the name of a table that contains the partition.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>(Required) A list of partition key values.</p>
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>(Required) A list of supported permission types. </p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * <p>A Partition object containing the partition metadata.</p>
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * <p>A list of column names that the user has been granted access to.</p>
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * <p>A Boolean value that indicates whether the partition location is registered
   *           with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *           the AWS account ID is used by default. </p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partition.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>An expression that filters the partitions to be returned.</p>
   *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
   *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
   *          <p>
   *             <i>Operators</i>: The following are the operators that you can use in the
   *         <code>Expression</code> API call:</p>
   *          <dl>
   *             <dt>=</dt>
   *             <dd>
   *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
   *             true.</p>
   *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
   *                <p>(a = b) is not true.</p>
   *             </dd>
   *             <dt>< ></dt>
   *             <dd>
   *                <p>Checks whether the values of two operands are equal; if the values are not equal,
   *             then the condition becomes true.</p>
   *                <p>Example: (a < > b) is true.</p>
   *             </dd>
   *             <dt>></dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a > b) is not true.</p>
   *             </dd>
   *             <dt><</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a < b) is true.</p>
   *             </dd>
   *             <dt>>=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than or equal to the value
   *             of the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a >= b) is not true.</p>
   *             </dd>
   *             <dt><=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than or equal to the value of
   *             the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a <= b) is true.</p>
   *             </dd>
   *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
   *             <dd>
   *                <p>Logical operators.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <i>Supported Partition Key Types</i>: The following are the supported
   *       partition keys.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>date</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>int</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tinyint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>smallint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>decimal</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>A list of supported permission types. </p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * <p>A partition that contains unfiltered metadata.</p>
 * @public
 */
export interface UnfilteredPartition {
  /**
   * <p>The partition object.</p>
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * <p>The list of columns the user has permissions to access.</p>
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * <p>A Boolean value indicating that the partition location is registered with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataResponse {
  /**
   * <p>A list of requested partitions.</p>
   * @public
   */
  UnfilteredPartitions?: UnfilteredPartition[] | undefined;

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure specifying the dialect and dialect version used by the query engine.</p>
 * @public
 */
export interface SupportedDialect {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>(Required) Specifies the name of a database that contains the table.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>(Required) Specifies the name of a table for which you are requesting metadata.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>Indicates the level of filtering a third-party analytical engine is capable of enforcing when calling the <code>GetUnfilteredTableMetadata</code> API operation. Accepted values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COLUMN_PERMISSION</code> - Column permissions ensure that users can access only specific columns in the table. If there are particular columns contain sensitive data, data lake administrators can define column filters that exclude access to specific columns.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CELL_FILTER_PERMISSION</code> - Cell-level filtering combines column filtering (include or exclude columns) and row filter expressions to restrict access to individual elements in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NESTED_PERMISSION</code> - Nested permissions combines cell-level filtering and nested column filtering to restrict access to columns and/or nested columns in specific rows based on row filter expressions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NESTED_CELL_PERMISSION</code> - Nested cell permissions combines nested permission with nested cell-level filtering. This allows different subsets of nested columns to be restricted based on an array of row filter expressions. </p>
   *             </li>
   *          </ul>
   *          <p>Note: Each of these permission types follows a hierarchical order where each subsequent permission type includes all permission of the previous type.</p>
   *          <p>Important: If you provide a supported permission type that doesn't match the user's level of permissions on the table, then Lake Formation raises an exception. For example, if the third-party engine calling the <code>GetUnfilteredTableMetadata</code> operation can enforce only column-level filtering, and the user has nested cell filtering applied on the table, Lake Formation throws an exception, and will not return unfiltered table metadata and data access credentials.</p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>The resource ARN of the view.</p>
   * @public
   */
  ParentResourceArn?: string | undefined;

  /**
   * <p>The resource ARN of the root view in a chain of nested views.</p>
   * @public
   */
  RootResourceArn?: string | undefined;

  /**
   * <p>A structure specifying the dialect and dialect version used by the query engine.</p>
   * @public
   */
  SupportedDialect?: SupportedDialect | undefined;

  /**
   * <p>The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * <p>A filter that uses both column-level and row-level filtering.</p>
 * @public
 */
export interface ColumnRowFilter {
  /**
   * <p>A string containing the name of the column.</p>
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * <p>A string containing the row-level filter expression.</p>
   * @public
   */
  RowFilterExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileRequest {
  /**
   * <p>The name of the usage profile to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileResponse {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A <code>ProfileConfiguration</code> object specifying the job and session values for the profile.</p>
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * <p>The date and time when the usage profile was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the usage profile was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 * @public
 */
export interface UserDefinedFunction {
  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>The name of the catalog database that contains the function.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The Java class that contains the function code.</p>
   * @public
   */
  ClassName?: string | undefined;

  /**
   * <p>The owner of the function.</p>
   * @public
   */
  OwnerName?: string | undefined;

  /**
   * <p>The type of the function.</p>
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * <p>The owner type.</p>
   * @public
   */
  OwnerType?: PrincipalType | undefined;

  /**
   * <p>The time at which the function was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The resource URIs for the function.</p>
   * @public
   */
  ResourceUris?: ResourceUri[] | undefined;

  /**
   * <p>The ID of the Data Catalog in which the function resides.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionResponse {
  /**
   * <p>The requested function definition.</p>
   * @public
   */
  UserDefinedFunction?: UserDefinedFunction | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsRequest {
  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   * @public
   */
  Pattern: string | undefined;

  /**
   * <p>An optional function-type pattern string that filters the function
   *       definitions returned from Amazon Redshift Federated Permissions Catalog.</p>
   *          <p>Specify a value of <code>REGULAR_FUNCTION</code> or <code>STORED_PROCEDURE</code>.
   *       The <code>STORED_PROCEDURE</code> function type is only compatible with
   *       Amazon Redshift Federated Permissions Catalog.
   *     </p>
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of functions to return in one response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsResponse {
  /**
   * <p>A list of requested function definitions.</p>
   * @public
   */
  UserDefinedFunctions?: UserDefinedFunction[] | undefined;

  /**
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The name of the workflow to retrieve.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The resource metadata for the workflow.</p>
   * @public
   */
  Workflow?: Workflow | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>Name of the workflow being run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>The requested workflow run metadata.</p>
   * @public
   */
  Run?: WorkflowRun | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run whose run properties should be returned.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesResponse {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   * @public
   */
  RunProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunsRequest {
  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   * @public
   */
  IncludeGraph?: boolean | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunsResponse {
  /**
   * <p>A list of workflow run metadata objects.</p>
   * @public
   */
  Runs?: WorkflowRun[] | undefined;

  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportCatalogToGlueRequest {
  /**
   * <p>The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface ImportCatalogToGlueResponse {}

/**
 * @public
 */
export interface ListAssetTypesRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetTypesResponse {
  /**
   * <p>The list of asset type items.</p>
   * @public
   */
  Items?: AssetTypeItem[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlueprintsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the list by an Amazon Web Services resource tag.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListBlueprintsResponse {
  /**
   * <p>List of names of blueprints in the account.</p>
   * @public
   */
  Blueprints?: string[] | undefined;

  /**
   * <p>A continuation token, if not all blueprint names have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsRequest {
  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsResponse {
  /**
   * <p>A list of column statistics task run IDs.</p>
   * @public
   */
  ColumnStatisticsTaskRunIds?: string[] | undefined;

  /**
   * <p>A continuation token, if not all task run IDs have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionTypesRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a variant of a connection type in Glue. Connection type variants provide specific configurations and behaviors
 *       for different implementations of the same general connection type.</p>
 * @public
 */
export interface ConnectionTypeVariant {
  /**
   * <p>The unique identifier for the connection type variant. This name is used internally to identify the specific variant of a connection type.
   *     </p>
   * @public
   */
  ConnectionTypeVariantName?: string | undefined;

  /**
   * <p>The human-readable name for the connection type variant that is displayed in the Glue console.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A detailed description of the connection type variant, including its purpose, use cases, and any specific configuration requirements.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL of the logo associated with a connection type variant.</p>
   * @public
   */
  LogoUrl?: string | undefined;
}

/**
 * <p>Brief information about a supported connection type returned by the <code>ListConnectionTypes</code> API.</p>
 * @public
 */
export interface ConnectionTypeBrief {
  /**
   * <p>The name of the connection type.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>The human-readable name for the connection type that is displayed in the Glue console.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The name of the vendor or provider that created or maintains this connection type.</p>
   * @public
   */
  Vendor?: string | undefined;

  /**
   * <p>A description of the connection type.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of categories that this connection type belongs to. Categories help users filter and find appropriate connection types based on their
   *       use cases.</p>
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * <p>The supported authentication types, data interface types (compute environments), and data operations of the connector.</p>
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * <p>The URL of the logo associated with a connection type.</p>
   * @public
   */
  LogoUrl?: string | undefined;

  /**
   * <p>A list of variants available for this connection type. Different variants may provide specialized configurations for specific use cases or
   *       implementations of the same general connection type.</p>
   * @public
   */
  ConnectionTypeVariants?: ConnectionTypeVariant[] | undefined;
}

/**
 * @public
 */
export interface ListConnectionTypesResponse {
  /**
   * <p>A list of <code>ConnectionTypeBrief</code> objects containing brief information about the supported connection types.</p>
   * @public
   */
  ConnectionTypes?: ConnectionTypeBrief[] | undefined;

  /**
   * <p>A continuation token, if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrawlersRequest {
  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCrawlersResponse {
  /**
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   * @public
   */
  CrawlerNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.</p>
 * @public
 */
export interface CrawlsFilter {
  /**
   * <p>A key used to filter the crawler runs for a specified crawler. Valid values for each of the field names are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRAWL_ID</code>: A string representing the UUID identifier for a crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATE</code>: A string representing the state of the crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>START_TIME</code> and <code>END_TIME</code>: The epoch timestamp in milliseconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DPU_HOUR</code>: The number of data processing unit (DPU) hours used for the crawl.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FieldName?: FieldName | undefined;

  /**
   * <p>A defined comparator that operates on the value. The available operators are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GT</code>: Greater than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code>: Greater than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code>: Less than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LE</code>: Less than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: Equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NE</code>: Not equal to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FilterOperator?: FilterOperator | undefined;

  /**
   * <p>The value provided for comparison on the crawl field. </p>
   * @public
   */
  FieldValue?: string | undefined;
}

/**
 * @public
 */
export interface ListCrawlsRequest {
  /**
   * <p>The name of the crawler whose runs you want to retrieve.</p>
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 20, and maximum is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the crawls by the criteria you specify in a list of <code>CrawlsFilter</code> objects.</p>
   * @public
   */
  Filters?: CrawlsFilter[] | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the information for a run of a crawler.</p>
 * @public
 */
export interface CrawlerHistory {
  /**
   * <p>A UUID identifier for each crawl.</p>
   * @public
   */
  CrawlId?: string | undefined;

  /**
   * <p>The state of the crawl.</p>
   * @public
   */
  State?: CrawlerHistoryState | undefined;

  /**
   * <p>The date and time on which the crawl started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time on which the crawl ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.</p>
   * @public
   */
  Summary?: string | undefined;

  /**
   * <p>If an error occurred, the error message associated with the crawl.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The log group associated with the crawl.</p>
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * <p>The log stream associated with the crawl.</p>
   * @public
   */
  LogStream?: string | undefined;

  /**
   * <p>The prefix for a CloudWatch message about this crawl.</p>
   * @public
   */
  MessagePrefix?: string | undefined;

  /**
   * <p>The number of data processing units (DPU) used in hours for the crawl.</p>
   * @public
   */
  DPUHour?: number | undefined;
}

/**
 * @public
 */
export interface ListCrawlsResponse {
  /**
   * <p>A list of <code>CrawlerHistory</code> objects representing the crawl runs that meet your criteria.</p>
   * @public
   */
  Crawls?: CrawlerHistory[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomEntityTypesRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A list of key-value pair tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing custom patterns.</p>
   * @public
   */
  CustomEntityTypes?: CustomEntityType[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Criteria used to return data quality results.</p>
 * @public
 */
export interface DataQualityResultFilterCriteria {
  /**
   * <p>Filter results by the specified data source. For example, retrieving all results for an Glue table.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Filter results by the specified job name.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>Filter results by the specified job run ID.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>Filter results by runs that started after this time.</p>
   * @public
   */
  StartedAfter?: Date | undefined;

  /**
   * <p>Filter results by runs that started before this time.</p>
   * @public
   */
  StartedBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityResultFilterCriteria | undefined;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes a data quality result.</p>
 * @public
 */
export interface DataQualityResultDescription {
  /**
   * <p>The unique result ID for this data quality result.</p>
   * @public
   */
  ResultId?: string | undefined;

  /**
   * <p>The table name associated with the data quality result.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>The job name associated with the data quality result.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job run ID associated with the data quality result.</p>
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * <p>The time that the run started for this data quality result.</p>
   * @public
   */
  StartedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsResponse {
  /**
   * <p>A list of <code>DataQualityResultDescription</code> objects.</p>
   * @public
   */
  Results: DataQualityResultDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter for listing data quality recommendation runs.</p>
 * @public
 */
export interface DataQualityRuleRecommendationRunFilter {
  /**
   * <p>Filter based on a specified data source (Glue table).</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter based on time for results started before provided time.</p>
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * <p>Filter based on time for results started after provided time.</p>
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityRuleRecommendationRunFilter | undefined;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the result of a data quality rule recommendation run.</p>
 * @public
 */
export interface DataQualityRuleRecommendationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The data source (Glue table) associated with the recommendation run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRuleRecommendationRunDescription</code> objects.</p>
   * @public
   */
  Runs?: DataQualityRuleRecommendationRunDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The filter criteria.</p>
 * @public
 */
export interface DataQualityRulesetEvaluationRunFilter {
  /**
   * <p>Filter based on a data source (an Glue table) associated with the run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter results by runs that started before this time.</p>
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * <p>Filter results by runs that started after this time.</p>
   * @public
   */
  StartedAfter?: Date | undefined;

  /**
   * <p>Filter results by the name of the ruleset.</p>
   * @public
   */
  RulesetName?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityRulesetEvaluationRunFilter | undefined;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes the result of a data quality ruleset evaluation run.</p>
 * @public
 */
export interface DataQualityRulesetEvaluationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * <p>The date and time when the run started.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>The data source (an Glue table) associated with the run.</p>
   * @public
   */
  DataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRulesetEvaluationRunDescription</code> objects representing data quality ruleset runs.</p>
   * @public
   */
  Runs?: DataQualityRulesetEvaluationRunDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The criteria used to filter data quality rulesets.</p>
 * @public
 */
export interface DataQualityRulesetFilterCriteria {
  /**
   * <p>The name of the ruleset filter criteria.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the ruleset filter criteria.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Filter on rulesets created before this date.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter on rulesets created after this date.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter on rulesets last modified before this date.</p>
   * @public
   */
  LastModifiedBefore?: Date | undefined;

  /**
   * <p>Filter on rulesets last modified after this date.</p>
   * @public
   */
  LastModifiedAfter?: Date | undefined;

  /**
   * <p>The name and database name of the target table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter criteria. </p>
   * @public
   */
  Filter?: DataQualityRulesetFilterCriteria | undefined;

  /**
   * <p>A list of key-value pair tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.</p>
 * @public
 */
export interface DataQualityRulesetListDetails {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the data quality ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the data quality ruleset was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time the data quality ruleset was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * <p>An object representing an Glue table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

  /**
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   * @public
   */
  RecommendationRunId?: string | undefined;

  /**
   * <p>The number of rules in the ruleset.</p>
   * @public
   */
  RuleCount?: number | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsResponse {
  /**
   * <p>A paginated list of rulesets for the specified list of Glue tables.</p>
   * @public
   */
  Rulesets?: DataQualityRulesetListDetails[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A timestamp filter.</p>
 * @public
 */
export interface TimestampFilter {
  /**
   * <p>The timestamp before which statistics should be included in the results.</p>
   * @public
   */
  RecordedBefore?: Date | undefined;

  /**
   * <p>The timestamp after which statistics should be included in the results.</p>
   * @public
   */
  RecordedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>A timestamp filter.</p>
   * @public
   */
  TimestampFilter?: TimestampFilter | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsResponse {
  /**
   * <p>A list of <code>StatisticAnnotation</code> applied to the Statistic</p>
   * @public
   */
  Annotations?: StatisticAnnotation[] | undefined;

  /**
   * <p>A pagination token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>A timestamp filter.</p>
   * @public
   */
  TimestampFilter?: TimestampFilter | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A run identifier.</p>
 * @public
 */
export interface RunIdentifier {
  /**
   * <p>The Run ID.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The Job Run ID.</p>
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * <p>Summary information about a statistic.</p>
 * @public
 */
export interface StatisticSummary {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>The Run Identifier</p>
   * @public
   */
  RunIdentifier?: RunIdentifier | undefined;

  /**
   * <p>The name of the statistic.</p>
   * @public
   */
  StatisticName?: string | undefined;

  /**
   * <p>The value of the statistic.</p>
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * <p>The evaluation level of the statistic. Possible values: <code>Dataset</code>, <code>Column</code>, <code>Multicolumn</code>.</p>
   * @public
   */
  EvaluationLevel?: StatisticEvaluationLevel | undefined;

  /**
   * <p>The list of columns referenced by the statistic.</p>
   * @public
   */
  ColumnsReferenced?: string[] | undefined;

  /**
   * <p>The list of datasets referenced by the statistic.</p>
   * @public
   */
  ReferencedDatasets?: string[] | undefined;

  /**
   * <p>A <code>StatisticPropertiesMap</code>, which contains a <code>NameString</code> and <code>DescriptionString</code>
   *          </p>
   * @public
   */
  StatisticProperties?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the statistic was recorded.</p>
   * @public
   */
  RecordedOn?: Date | undefined;

  /**
   * <p>The inclusion annotation for the statistic.</p>
   * @public
   */
  InclusionAnnotation?: TimestampedInclusionAnnotation | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsResponse {
  /**
   * <p>A <code>StatisticSummaryList</code>.</p>
   * @public
   */
  Statistics?: StatisticSummary[] | undefined;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEndpointsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDevEndpointsResponse {
  /**
   * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
   *         <code>DevEndpoint</code>s with the specified tags.</p>
   * @public
   */
  DevEndpointNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * <p>A name for the connection that has required credentials to query any connection type.</p>
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * <p>The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Name of the parent entity for which you want to list the children. This parameter takes a fully-qualified path of the entity in order to list the child entities.</p>
   * @public
   */
  ParentEntityName?: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The API version of the SaaS connector.</p>
   * @public
   */
  DataStoreApiVersion?: string | undefined;
}

/**
 * <p>An entity supported by a given <code>ConnectionType</code>.</p>
 * @public
 */
export interface Entity {
  /**
   * <p>The name of the entity.</p>
   * @public
   */
  EntityName?: string | undefined;

  /**
   * <p>Label used for the entity.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>A Boolean value which helps to determine whether there are sub objects that can be listed.</p>
   * @public
   */
  IsParentEntity?: boolean | undefined;

  /**
   * <p>A description of the entity.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of entities that are present in the response. This value depends on the source connection. For example this is <code>SObjects</code> for Salesforce and <code>databases</code> or <code>schemas</code> or <code>tables</code> for sources like Amazon Redshift.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>An optional map of keys which may be returned for an entity by a connector.</p>
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * <p>A list of <code>Entity</code> objects.</p>
   * @public
   */
  Entities?: Entity[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFormTypesRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of a form type.</p>
 * @public
 */
export interface FormTypeItem {
  /**
   * <p>The identifier of the form type.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the form type.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListFormTypesResponse {
  /**
   * <p>The list of form type items.</p>
   * @public
   */
  Items: FormTypeItem[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossariesRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of a business glossary.</p>
 * @public
 */
export interface GlossaryItem {
  /**
   * <p>The unique identifier of the glossary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the glossary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the glossary.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossariesResponse {
  /**
   * <p>The list of glossary items.</p>
   * @public
   */
  Items?: GlossaryItem[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossaryTermsRequest {
  /**
   * <p>The unique identifier of the glossary whose terms to list.</p>
   * @public
   */
  GlossaryIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of a glossary term.</p>
 * @public
 */
export interface GlossaryTermItem {
  /**
   * <p>The unique identifier of the glossary term.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the glossary term.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The short description of the glossary term.</p>
   * @public
   */
  ShortDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossaryTermsResponse {
  /**
   * <p>The list of glossary term items.</p>
   * @public
   */
  Items?: GlossaryTermItem[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A filter for integration resource properties.</p>
 * @public
 */
export interface IntegrationResourcePropertyFilter {
  /**
   * <p>The name of the filter. Supported filter keys are <code>SourceArn</code> and <code>TargetArn</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of filter values.</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListIntegrationResourcePropertiesRequest {
  /**
   * <p>This is the pagination token for next page, initial value is <code>null</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of filters, supported filter Key is <code>SourceArn</code> and <code>TargetArn</code>.</p>
   * @public
   */
  Filters?: IntegrationResourcePropertyFilter[] | undefined;

  /**
   * <p>This is total number of items to be evaluated.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * <p>A structure representing an integration resource property.</p>
 * @public
 */
export interface IntegrationResourceProperty {
  /**
   * <p>The connection ARN of the source, or the database ARN of the target.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*</p>
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * <p>The resource properties associated with the integration source.</p>
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * <p>The resource properties associated with the integration target.</p>
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface ListIntegrationResourcePropertiesResponse {
  /**
   * <p>A list of integration resource property meeting the filter criteria.</p>
   * @public
   */
  IntegrationResourcePropertyList?: IntegrationResourceProperty[] | undefined;

  /**
   * <p>This is the pagination token for the next page.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListIterableFormsRequest {
  /**
   * <p>The unique identifier of the asset.</p>
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * <p>The name of the iterable form to list items from.</p>
   * @public
   */
  IterableFormName: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of an item in an iterable form.</p>
 * @public
 */
export interface IterableFormListItem {
  /**
   * <p>The unique identifier of the item.</p>
   * @public
   */
  ItemId?: string | undefined;

  /**
   * <p>The name of the item.</p>
   * @public
   */
  ItemName?: string | undefined;

  /**
   * <p>The description of the item.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifiers of the glossary terms associated with the item.</p>
   * @public
   */
  GlossaryTerms?: string[] | undefined;
}

/**
 * @public
 */
export interface ListIterableFormsResponse {
  /**
   * <p>The list of iterable form items.</p>
   * @public
   */
  Items?: IterableFormListItem[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMaterializedViewRefreshTaskRunsRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The database where the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table for which statistics is generated.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMaterializedViewRefreshTaskRunsResponse {
  /**
   * <p>The results of the ListMaterializedViewRefreshTaskRuns action. </p>
   * @public
   */
  MaterializedViewRefreshTaskRuns?: MaterializedViewRefreshTaskRun[] | undefined;

  /**
   * <p>A continuation token, if not all task run IDs have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMLTransformsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   * @public
   */
  Filter?: TransformFilterCriteria | undefined;

  /**
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   * @public
   */
  Sort?: TransformSortCriteria | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMLTransformsResponse {
  /**
   * <p>The identifiers of all the machine learning transforms in the account, or the
   *         machine learning transforms with the specified tags.</p>
   * @public
   */
  TransformIds: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesInput {
  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure containing the details for a registry.</p>
 * @public
 */
export interface RegistryListItem {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the registry.</p>
   * @public
   */
  Status?: RegistryStatus | undefined;

  /**
   * <p>The data the registry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date the registry was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>An array of <code>RegistryDetailedListItem</code> objects containing minimal details of each registry.</p>
   * @public
   */
  Registries?: RegistryListItem[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId?: RegistryId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object that contains minimal details for a schema.</p>
 * @public
 */
export interface SchemaListItem {
  /**
   * <p>the name of the registry where the schema resides.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>A description for the schema.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * <p>The date and time that a schema was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>The date and time that a schema was updated.</p>
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * <p>An array of <code>SchemaListItem</code> objects containing details of each schema.</p>
   * @public
   */
  Schemas?: SchemaListItem[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>An object containing the details about a schema version.</p>
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The unique identifier of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * <p>The date and time the schema version was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * <p>An array of <code>SchemaVersionList</code> objects containing details of each schema version.</p>
   * @public
   */
  Schemas?: SchemaVersionListItem[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Tags belonging to the session. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>Returns the ID of the session. </p>
   * @public
   */
  Ids?: string[] | undefined;

  /**
   * <p>Returns the session object. </p>
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsRequest {
  /**
   * <p>The Session ID of the statements.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The origin of the request to list statements.</p>
   * @public
   */
  RequestOrigin?: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsResponse {
  /**
   * <p>Returns the list of statements.</p>
   * @public
   */
  Statements?: Statement[] | undefined;

  /**
   * <p>A continuation token, if not all statements have yet been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The type of table optimizer.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;

  /**
   * <p>The maximum number of optimizer runs to return on each call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsResponse {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A continuation token for paginating the returned list of optimizer runs, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the optimizer runs associated with a table.</p>
   * @public
   */
  TableOptimizerRuns?: TableOptimizerRun[] | undefined;
}

/**
 * @public
 */
export interface ListTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   * @public
   */
  DependentJobName?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTriggersResponse {
  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   * @public
   */
  TriggerNames?: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsageProfilesRequest {
  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of usage profiles to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Describes an Glue usage profile.</p>
 * @public
 */
export interface UsageProfileDefinition {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time when the usage profile was created.</p>
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * <p>The date and time when the usage profile was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListUsageProfilesResponse {
  /**
   * <p>A list of usage profile (<code>UsageProfileDefinition</code>) objects.</p>
   * @public
   */
  Profiles?: UsageProfileDefinition[] | undefined;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>List of names of workflows in the account.</p>
   * @public
   */
  Workflows?: string[] | undefined;

  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the integration.</p>
   * @public
   */
  IntegrationIdentifier: string | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>The configuration settings for the integration. Currently, only the RefreshInterval can be modified. </p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * <p>A unique name for an integration in Glue.</p>
   * @public
   */
  IntegrationName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationResponse {
  /**
   * <p>The ARN of the source for the integration.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The ARN of the target for the integration.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>A unique name for an integration in Glue.</p>
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * <p>A description of the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the integration.</p>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>The ARN of a KMS key used for encrypting the channel.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>An optional set of non-secret key–value pairs that contains additional contextual information for encryption.</p>
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Metadata assigned to the resource consisting of a list of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The status of the integration being modified.</p>
   *          <p>The possible statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The integration is being created.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The integration creation succeeds.</p>
   *             </li>
   *             <li>
   *                <p>MODIFYING: The integration is being modified.</p>
   *             </li>
   *             <li>
   *                <p>FAILED: The integration creation fails. </p>
   *             </li>
   *             <li>
   *                <p>DELETING: The integration is deleted.</p>
   *             </li>
   *             <li>
   *                <p>SYNCING: The integration is synchronizing.</p>
   *             </li>
   *             <li>
   *                <p>NEEDS_ATTENTION: The integration needs attention, such as synchronization.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * <p>The time when the integration was created, in UTC.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>A list of errors associated with the integration modification.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>Selects source tables for the integration using Maxwell filter syntax.</p>
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * <p>The updated configuration settings for the integration.</p>
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * @public
 */
export interface PutAssetRequest {
  /**
   * <p>The identifier of the asset type for the asset.</p>
   * @public
   */
  AssetTypeId: string | undefined;

  /**
   * <p>The unique identifier of the asset. If an asset with this identifier already exists, it is updated.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the asset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The forms to set on the asset, keyed by form name. Each entry specifies the form type and its JSON content.</p>
   * @public
   */
  Forms: Record<string, AssetFormEntry> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetResponse {
  /**
   * <p>The unique identifier of the asset.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the asset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp at which the asset was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The forms attached to the asset, keyed by form name.</p>
   * @public
   */
  Forms?: Record<string, AssetFormEntry> | undefined;
}

/**
 * @public
 */
export interface PutAssetTypeRequest {
  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The forms that make up the asset type, keyed by form name. Each entry references the form type that defines the form's schema.</p>
   * @public
   */
  Forms: Record<string, AssetTypeFormReference> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetTypeResponse {
  /**
   * <p>The identifier of the asset type.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The forms that make up the asset type, keyed by form name.</p>
   * @public
   */
  Forms?: Record<string, AssetTypeFormReference> | undefined;
}

/**
 * @public
 */
export interface PutAttachmentRequest {
  /**
   * <p>The unique identifier of the asset to attach the form to.</p>
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * <p>The name of the iterable form. When specified along with <code>itemIdentifier</code>, the attachment targets an item within the iterable form rather than the asset itself.</p>
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * <p>The identifier of the item within the iterable form. Required when <code>iterableFormName</code> is specified.</p>
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * <p>The name of the attachment.</p>
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * <p>The JSON content of the form, conforming to the schema of the specified form type.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The identifier of the form type for this attachment.</p>
   * @public
   */
  FormTypeId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAttachmentResponse {
  /**
   * <p>The unique identifier of the asset.</p>
   * @public
   */
  AssetId?: string | undefined;

  /**
   * <p>The name of the iterable form, if the attachment targets an item.</p>
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * <p>The identifier of the item within the iterable form, if applicable.</p>
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * <p>The name of the attachment.</p>
   * @public
   */
  AttachmentName?: string | undefined;

  /**
   * <p>The identifier of the form type for this attachment.</p>
   * @public
   */
  FormTypeId?: string | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The security configuration to set.</p>
   * @public
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsResponse {}

/**
 * @public
 */
export interface PutDataQualityProfileAnnotationRequest {
  /**
   * <p>The ID of the data quality monitoring profile to annotate.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The inclusion annotation value to apply to the profile.</p>
   * @public
   */
  InclusionAnnotation: InclusionAnnotationValue | undefined;
}

/**
 * <p>Left blank.</p>
 * @public
 */
export interface PutDataQualityProfileAnnotationResponse {}

/**
 * @public
 */
export interface PutFormTypeRequest {
  /**
   * <p>The name of the form type. Must start with an uppercase letter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Smithy IDL schema definition for the form type.</p>
   * @public
   */
  Schema: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFormTypeResponse {
  /**
   * <p>The identifier of the form type.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the form type.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Smithy IDL schema of the form type.</p>
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>Contains the policy document to set, in JSON format.</p>
   * @public
   */
  PolicyInJson: string | undefined;

  /**
   * <p>Do not use. For internal use only.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   * @public
   */
  PolicyHashCondition?: string | undefined;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call does not depend on the existence of a policy.</p>
   * @public
   */
  PolicyExistsCondition?: ExistCondition | undefined;

  /**
   * <p>If <code>'TRUE'</code>, indicates that you are using both methods to grant cross-account
   *       access to Data Catalog resources:</p>
   *          <ul>
   *             <li>
   *                <p>By directly updating the resource policy with <code>PutResourePolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>By using the <b>Grant permissions</b> command on the Amazon Web Services Management Console.</p>
   *             </li>
   *          </ul>
   *          <p>Must be set to <code>'TRUE'</code> if you have already used the Management Console to
   *       grant cross-account access, otherwise the call fails. Default is 'FALSE'.</p>
   * @public
   */
  EnableHybrid?: EnableHybridValues | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * <p>A structure containing a key value pair for metadata.</p>
 * @public
 */
export interface MetadataKeyValuePair {
  /**
   * <p>A metadata key.</p>
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * <p>A metadata key’s corresponding value.</p>
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataInput {
  /**
   * <p>The unique ID for the schema.</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The metadata key's corresponding value.</p>
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name for the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The name for the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The latest version of the schema.</p>
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The metadata key.</p>
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>The properties to put for the specified run.</p>
   *          <p>Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.</p>
   * @public
   */
  RunProperties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesResponse {}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.</p>
   * @public
   */
  MetadataList?: MetadataKeyValuePair[] | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure containing other metadata for a schema version belonging to the same metadata key.</p>
 * @public
 */
export interface OtherMetadataValueListItem {
  /**
   * <p>The metadata key’s corresponding value for the other metadata belonging to the same metadata key.</p>
   * @public
   */
  MetadataValue?: string | undefined;

  /**
   * <p>The time at which the entry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * <p>A structure containing metadata information for a schema version.</p>
 * @public
 */
export interface MetadataInfo {
  /**
   * <p>The metadata key’s corresponding value.</p>
   * @public
   */
  MetadataValue?: string | undefined;

  /**
   * <p>The time at which the entry was created.</p>
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * <p>Other metadata belonging to the same metadata key.</p>
   * @public
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[] | undefined;
}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataResponse {
  /**
   * <p>A map of a metadata key and associated values.</p>
   * @public
   */
  MetadataInfoMap?: Record<string, MetadataInfo> | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Configuration that defines the base URL and additional request parameters needed during connection creation.</p>
 * @public
 */
export interface ConnectionPropertiesConfiguration {
  /**
   * <p>The base instance URL for the endpoint that this connection type will connect to.</p>
   * @public
   */
  Url?: ConnectorProperty | undefined;

  /**
   * <p>Key-value pairs of additional request parameters that may be needed during connection creation, such as API versions or service-specific configuration options.</p>
   * @public
   */
  AdditionalRequestParameters?: ConnectorProperty[] | undefined;
}

/**
 * <p>Basic authentication configuration that defines the username and password properties for HTTP Basic authentication.</p>
 * @public
 */
export interface BasicAuthenticationProperties {
  /**
   * <p>The username property name to use for Basic authentication credentials.</p>
   * @public
   */
  Username?: ConnectorProperty | undefined;

  /**
   * <p>The password property name to use for Basic authentication credentials.</p>
   * @public
   */
  Password?: ConnectorProperty | undefined;
}

/**
 * <p>Custom authentication configuration that allows for flexible authentication mechanisms beyond standard Basic and OAuth2 flows.</p>
 * @public
 */
export interface CustomAuthenticationProperties {
  /**
   * <p>A map of custom authentication parameters that define the specific authentication mechanism and required properties.</p>
   * @public
   */
  AuthenticationParameters: ConnectorProperty[] | undefined;
}

/**
 * <p>OAuth2 authorization code configuration that defines the properties needed for the Authorization Code grant type flow.</p>
 * @public
 */
export interface ConnectorAuthorizationCodeProperties {
  /**
   * <p>The authorization endpoint URL where users will be redirected to grant authorization.</p>
   * @public
   */
  AuthorizationCodeUrl?: ConnectorProperty | undefined;

  /**
   * <p>The authorization code received from the authorization server after user consent.</p>
   * @public
   */
  AuthorizationCode?: ConnectorProperty | undefined;

  /**
   * <p>The redirect URI that must match the URI registered with the authorization server.</p>
   * @public
   */
  RedirectUri?: ConnectorProperty | undefined;

  /**
   * <p>The token endpoint URL where the authorization code will be exchanged for an access token.</p>
   * @public
   */
  TokenUrl?: ConnectorProperty | undefined;

  /**
   * <p>The HTTP method to use when making token exchange requests, typically POST.</p>
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * <p>The content type to use for token exchange requests, such as application/x-www-form-urlencoded or application/json.</p>
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * <p>The OAuth2 client identifier provided by the authorization server.</p>
   * @public
   */
  ClientId?: ConnectorProperty | undefined;

  /**
   * <p>The OAuth2 client secret provided by the authorization server.</p>
   * @public
   */
  ClientSecret?: ConnectorProperty | undefined;

  /**
   * <p>The OAuth2 scope that defines the level of access requested for the authorization code flow.</p>
   * @public
   */
  Scope?: ConnectorProperty | undefined;

  /**
   * <p>The OAuth2 prompt parameter that controls the authorization server's behavior during user authentication.</p>
   * @public
   */
  Prompt?: ConnectorProperty | undefined;

  /**
   * <p>Additional parameters to include in token URL requests as key-value pairs.</p>
   * @public
   */
  TokenUrlParameters?: ConnectorProperty[] | undefined;
}

/**
 * <p>OAuth2 client credentials configuration that defines the properties needed for the Client Credentials grant type flow.</p>
 * @public
 */
export interface ClientCredentialsProperties {
  /**
   * <p>The token endpoint URL where the client will request access tokens using client credentials.</p>
   * @public
   */
  TokenUrl?: ConnectorProperty | undefined;

  /**
   * <p>The HTTP method to use when making token requests, typically POST.</p>
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * <p>The content type to use for token requests, such as application/x-www-form-urlencoded or application/json.</p>
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * <p>The OAuth2 client identifier provided by the authorization server.</p>
   * @public
   */
  ClientId?: ConnectorProperty | undefined;

  /**
   * <p>The OAuth2 client secret provided by the authorization server.</p>
   * @public
   */
  ClientSecret?: ConnectorProperty | undefined;

  /**
   * <p>The OAuth2 scope that defines the level of access requested for the client credentials flow.</p>
   * @public
   */
  Scope?: ConnectorProperty | undefined;

  /**
   * <p>Additional parameters to include in token URL requests as key-value pairs.</p>
   * @public
   */
  TokenUrlParameters?: ConnectorProperty[] | undefined;
}

/**
 * <p>JWT bearer token configuration that defines the properties needed for the JWT Bearer grant type flow.</p>
 * @public
 */
export interface JWTBearerProperties {
  /**
   * <p>The token endpoint URL where the JWT bearer token will be exchanged for an access token.</p>
   * @public
   */
  TokenUrl?: ConnectorProperty | undefined;

  /**
   * <p>The HTTP method to use when making JWT bearer token requests, typically POST.</p>
   * @public
   */
  RequestMethod?: HTTPMethod | undefined;

  /**
   * <p>The content type to use for JWT bearer token requests, such as application/x-www-form-urlencoded or application/json.</p>
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * <p>The JWT token to be used in the bearer token grant flow for authentication.</p>
   * @public
   */
  JwtToken?: ConnectorProperty | undefined;

  /**
   * <p>Additional parameters to include in token URL requests as key-value pairs.</p>
   * @public
   */
  TokenUrlParameters?: ConnectorProperty[] | undefined;
}

/**
 * <p>OAuth2 configuration container that defines the authentication properties and flow-specific configurations for OAuth2-based connections.</p>
 * @public
 */
export interface ConnectorOAuth2Properties {
  /**
   * <p>The OAuth2 grant type to use for authentication, such as CLIENT_CREDENTIALS, JWT_BEARER, or AUTHORIZATION_CODE.</p>
   * @public
   */
  OAuth2GrantType: ConnectorOAuth2GrantType | undefined;

  /**
   * <p>Configuration properties specific to the OAuth2 Client Credentials grant type flow.</p>
   * @public
   */
  ClientCredentialsProperties?: ClientCredentialsProperties | undefined;

  /**
   * <p>Configuration properties specific to the OAuth2 JWT Bearer grant type flow.</p>
   * @public
   */
  JWTBearerProperties?: JWTBearerProperties | undefined;

  /**
   * <p>Configuration properties specific to the OAuth2 Authorization Code grant type flow.</p>
   * @public
   */
  AuthorizationCodeProperties?: ConnectorAuthorizationCodeProperties | undefined;
}

/**
 * <p>Configuration that defines the supported authentication types and required properties for the connection type.</p>
 * @public
 */
export interface ConnectorAuthenticationConfiguration {
  /**
   * <p>A list of authentication types supported by this connection type, such as Basic, OAuth2, or Custom authentication methods.</p>
   * @public
   */
  AuthenticationTypes: AuthenticationType[] | undefined;

  /**
   * <p>OAuth2 configuration container that defines the authentication properties and flow-specific configurations for OAuth2-based connections.</p>
   * @public
   */
  OAuth2Properties?: ConnectorOAuth2Properties | undefined;

  /**
   * <p>Basic authentication configuration that defines the username and password properties for HTTP Basic authentication.</p>
   * @public
   */
  BasicAuthenticationProperties?: BasicAuthenticationProperties | undefined;

  /**
   * <p>Custom authentication configuration that allows for flexible authentication mechanisms beyond standard Basic and OAuth2 flows.</p>
   * @public
   */
  CustomAuthenticationProperties?: CustomAuthenticationProperties | undefined;
}

/**
 * @public
 */
export interface RegisterConnectionTypeRequest {
  /**
   * <p>The name of the connection type. Must be between 1 and 255 characters and must be prefixed with "REST-" to indicate it is a REST-based connector.</p>
   * @public
   */
  ConnectionType: string | undefined;

  /**
   * <p>The integration type for the connection. Currently only "REST" protocol is supported.</p>
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * <p>A description of the connection type. Can be up to 2048 characters and provides details about the purpose and functionality of the connection type.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Defines the base URL and additional request parameters needed during connection creation for this connection type.</p>
   * @public
   */
  ConnectionProperties: ConnectionPropertiesConfiguration | undefined;

  /**
   * <p>Defines the supported authentication types and required properties for this connection type, including Basic, OAuth2, and Custom authentication methods.</p>
   * @public
   */
  ConnectorAuthenticationConfiguration: ConnectorAuthenticationConfiguration | undefined;

  /**
   * <p>Defines the HTTP request and response configuration, validation endpoint, and entity configurations for REST API interactions.</p>
   * @public
   */
  RestConfiguration: RestConfiguration | undefined;

  /**
   * <p>The tags you assign to the connection type.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains the Amazon Resource Name (ARN) of the newly registered connection type.</p>
 * @public
 */
export interface RegisterConnectionTypeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registered connection type. This unique identifier can be used to reference the connection type in other Glue operations.</p>
   * @public
   */
  ConnectionTypeArn?: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for the <code>SchemaName</code>.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionResponse {
  /**
   * <p>The unique ID that represents the version of this schema.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The version of this schema (for sync flow only, in case this is the first version).</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * <p>The latest version of the schema.</p>
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * <p>The version ID for the schema version.</p>
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * <p>The metadata key.</p>
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface ResetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface ResetJobBookmarkResponse {
  /**
   * <p>The reset bookmark entry.</p>
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunRequest {
  /**
   * <p>The name of the workflow to resume.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to resume.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.</p>
   * @public
   */
  NodeIds: string[] | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunResponse {
  /**
   * <p>The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>A list of the node IDs for the nodes that were actually restarted.</p>
   * @public
   */
  NodeIds?: string[] | undefined;
}

/**
 * @public
 */
export interface RunStatementRequest {
  /**
   * <p>The Session Id of the statement to be run.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The statement code to be run.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface RunStatementResponse {
  /**
   * <p>Returns the Id of the statement that was run.</p>
   * @public
   */
  Id?: number | undefined;
}

/**
 * <p>A filter value. Exactly one of <code>stringValue</code> or <code>longValue</code> must be specified.</p>
 * @public
 */
export type SearchFilterValue =
  | SearchFilterValue.LongValueMember
  | SearchFilterValue.StringValueMember
  | SearchFilterValue.$UnknownMember;

/**
 * @public
 */
export namespace SearchFilterValue {
  /**
   * <p>A string filter value.</p>
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    LongValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A long integer filter value.</p>
   * @public
   */
  export interface LongValueMember {
    StringValue?: never;
    LongValue: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    LongValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    LongValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A filter that compares an attribute value using an operator.</p>
 * @public
 */
export interface SearchAttributeFilter {
  /**
   * <p>The attribute name to filter on.</p>
   * @public
   */
  Attribute: string | undefined;

  /**
   * <p>The comparison operator. Valid values are <code>equals</code>, <code>greaterThan</code>, <code>greaterThanOrEquals</code>, <code>lessThan</code>, <code>lessThanOrEquals</code>, and <code>notExists</code>.</p>
   * @public
   */
  Operator: SearchFilterOperator | undefined;

  /**
   * <p>The value to compare against.</p>
   * @public
   */
  Value?: SearchFilterValue | undefined;
}

/**
 * <p>A map filter value. Currently supports string comparison only.</p>
 * @public
 */
export type SearchMapFilterValue =
  | SearchMapFilterValue.StringValueMember
  | SearchMapFilterValue.$UnknownMember;

/**
 * @public
 */
export namespace SearchMapFilterValue {
  /**
   * <p>A string filter value.</p>
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A filter on a map attribute's key-value pair.</p>
 * @public
 */
export interface SearchMapFilter {
  /**
   * <p>The map attribute name to filter on.</p>
   * @public
   */
  Attribute: string | undefined;

  /**
   * <p>The key within the map attribute to filter on.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value to compare against.</p>
   * @public
   */
  Value: SearchMapFilterValue | undefined;
}

/**
 * <p>The sort criteria for search results.</p>
 * @public
 */
export interface SearchSort {
  /**
   * <p>The attribute to sort by.</p>
   * @public
   */
  Attribute: string | undefined;

  /**
   * <p>The sort order. Valid values are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>
   * @public
   */
  Order?: SearchSortOrder | undefined;
}

/**
 * <p>A single search result item representing a matched asset.</p>
 * @public
 */
export interface SearchResultItem {
  /**
   * <p>The unique identifier of the matched asset.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the matched asset.</p>
   * @public
   */
  AssetName?: string | undefined;

  /**
   * <p>The description of the matched asset.</p>
   * @public
   */
  AssetDescription?: string | undefined;

  /**
   * <p>The timestamp at which the matched asset was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the asset type for the matched asset.</p>
   * @public
   */
  AssetTypeId?: string | undefined;
}

/**
 * @public
 */
export interface SearchOutput {
  /**
   * <p>The list of assets matching the search criteria.</p>
   * @public
   */
  Items?: SearchResultItem[] | undefined;

  /**
   * <p>A continuation token, present if the current segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Defines a property predicate.</p>
 * @public
 */
export interface PropertyPredicate {
  /**
   * <p>The key of the property.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The comparator used to compare this property to others.</p>
   * @public
   */
  Comparator?: Comparator | undefined;
}

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 * @public
 */
export interface SortCriterion {
  /**
   * <p>The name of the field on which to sort.</p>
   * @public
   */
  FieldName?: string | undefined;

  /**
   * <p>An ascending or descending sort.</p>
   * @public
   */
  Sort?: Sort | undefined;
}

/**
 * @public
 */
export interface SearchTablesRequest {
  /**
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>
   *             </code>.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   *          <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   * @public
   */
  Filters?: PropertyPredicate[] | undefined;

  /**
   * <p>A string used for a text search.</p>
   *          <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   * @public
   */
  SearchText?: string | undefined;

  /**
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Allows you to specify that you want to search the tables shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *          <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will search the tables shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will search the tables shared with your account, as well as the tables in yor local account. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * <p>Specifies the parameters as a <code>BlueprintParameters</code> object.</p>
   * @public
   */
  Parameters?: string | undefined;

  /**
   * <p>Specifies the IAM role used to create the workflow.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunResponse {
  /**
   * <p>The run ID for this blueprint run.</p>
   * @public
   */
  RunId?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table to generate statistics.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column names to generate statistics. If none is supplied, all column names for the table will be used by default.</p>
   * @public
   */
  ColumnNameList?: string[] | undefined;

  /**
   * <p>The IAM role that the service assumes to generate statistics.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p>The ID of the Data Catalog where the table reside. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogID?: string | undefined;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.</p>
   * @public
   */
  SecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunResponse {
  /**
   * <p>The identifier for the column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId?: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to start a column statistic task run schedule.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleResponse {}

/**
 * @public
 */
export interface StartCrawlerRequest {
  /**
   * <p>Name of the crawler to start.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerResponse {}
