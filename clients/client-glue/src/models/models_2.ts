// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BackfillErrorCode,
  CatalogEncryptionMode,
  Compatibility,
  ConnectionType,
  CrawlerHistoryState,
  DatabaseAttributes,
  DataFormat,
  DataQualityEngine,
  DataQualityModelStatus,
  EnableHybridValues,
  ExistCondition,
  ExportSetting,
  ExportStatus,
  FieldName,
  FilterOperator,
  FunctionType,
  InclusionAnnotationValue,
  IntegrationStatus,
  Language,
  LastRefreshType,
  MaterializedViewRefreshState,
  MaterializedViewRefreshType,
  ObservationConfiguration,
  ObservationMode,
  PartitionIndexStatus,
  Permission,
  PermissionType,
  PrincipalType,
  RecommendationMode,
  RegistryStatus,
  ResourceShareType,
  ResourceState,
  SchemaDiffType,
  SchemaStatus,
  SchemaVersionStatus,
  SortDirectionType,
  StatementState,
  StatisticEvaluationLevel,
  TableAttributes,
  TableOptimizerType,
  TableResourceShareType,
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
  DataQualityAggregatedMetrics,
  DataQualityAnalyzerResult,
  DataQualityEvaluationRunAdditionalRunOptions,
  DataQualityObservation,
  DataQualityRuleResult,
  DataSource,
  DevEndpoint,
  DistributionData,
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
  CodeGenEdge,
  CodeGenNode,
  CodeGenNodeArg,
  Database,
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
  Session,
  SourceProcessingProperties,
  SourceTableConfig,
  SubObjectStatistics,
  Tag,
  TargetProcessingProperties,
  TargetTableConfig,
  TransformEncryption,
  TransformParameters,
} from "./models_1";

/**
 * @public
 */
export interface GetDatabasesRequest {
  /**
   * The ID of the Data Catalog from which to retrieve `Databases`. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of databases to return in one response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Allows you to specify that you want to list the databases shared with your account. The allowable values are `FEDERATED`, `FOREIGN` or `ALL`.
   *
   * - If set to `FEDERATED`, will list the federated databases (referencing an external entity) shared with your account.
   * - If set to `FOREIGN`, will list the databases shared with your account.
   * - If set to `ALL`, will list the databases shared with your account, as well as the databases in yor local account.
   *
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * Specifies the database fields returned by the `GetDatabases` call. This parameter doesn’t accept an empty list. The request must include the `NAME`.
   *
   * @public
   */
  AttributesToGet?: DatabaseAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetDatabasesResponse {
  /**
   * A list of `Database` objects from the specified catalog.
   *
   * @public
   */
  DatabaseList: Database[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * The ID of the Data Catalog to retrieve the security configuration for. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * The data structure used by the Data Catalog to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties. You can enable catalog encryption or only password encryption.
 *
 * When a `CreationConnection` request arrives containing a password, the Data Catalog first encrypts the password using your KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.
 *
 * This encryption requires that you set KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.
 *
 * @public
 */
export interface ConnectionPasswordEncryption {
  /**
   * When the `ReturnConnectionPasswordEncrypted` flag is set to "true", passwords remain encrypted in the responses of `GetConnection` and `GetConnections`. This encryption takes effect independently from catalog encryption.
   *
   * @public
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;

  /**
   * An KMS key that is used to encrypt the connection password.
   *
   * If connection password protection is enabled, the caller of `CreateConnection` and `UpdateConnection` needs at least `kms:Encrypt` permission on the specified KMS key, to encrypt passwords before storing them in the Data Catalog.
   *
   * You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.
   *
   * @public
   */
  AwsKmsKeyId?: string | undefined;
}

/**
 * Specifies the encryption-at-rest configuration for the Data Catalog.
 *
 * @public
 */
export interface EncryptionAtRest {
  /**
   * The encryption-at-rest mode for encrypting Data Catalog data.
   *
   * @public
   */
  CatalogEncryptionMode: CatalogEncryptionMode | undefined;

  /**
   * The ID of the KMS key to use for encryption at rest.
   *
   * @public
   */
  SseAwsKmsKeyId?: string | undefined;

  /**
   * The role that Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.
   *
   * @public
   */
  CatalogEncryptionServiceRole?: string | undefined;
}

/**
 * Contains configuration information for maintaining Data Catalog security.
 *
 * @public
 */
export interface DataCatalogEncryptionSettings {
  /**
   * Specifies the encryption-at-rest configuration for the Data Catalog.
   *
   * @public
   */
  EncryptionAtRest?: EncryptionAtRest | undefined;

  /**
   * When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties. You can enable catalog encryption or only password encryption.
   *
   * @public
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * The requested security configuration.
   *
   * @public
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogExportConfigurationInput {}

/**
 * The encryption configuration for exported data catalog metadata.
 *
 * @public
 */
export interface ExportEncryptionConfiguration {
  /**
   * The server-side encryption algorithm used for the exported data. Valid values are `AES256` and `aws:kms`.
   *
   * @public
   */
  SseAlgorithm?: string | undefined;

  /**
   * The ARN of the KMS key used to encrypt the exported data.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * The export configuration returned by the `GetDataCatalogExportConfiguration` operation.
 *
 * @public
 */
export interface GetDataCatalogExportConfigurationOutput {
  /**
   * The export setting for the data catalog. Valid values are `ENABLED` and `DISABLED`.
   *
   * @public
   */
  ExportSetting?: ExportSetting | undefined;

  /**
   * The current status of the export. Valid values are `ENABLING`, `ENABLED`, `DISABLING`, `DISABLED`, and `FAILED`.
   *
   * @public
   */
  Status?: ExportStatus | undefined;

  /**
   * The encryption configuration for the exported data.
   *
   * @public
   */
  EncryptionConfiguration?: ExportEncryptionConfiguration | undefined;

  /**
   * The ARN of the S3 Tables bucket where catalog metadata is exported.
   *
   * @public
   */
  S3TableBucketArn?: string | undefined;

  /**
   * The timestamp at which the export configuration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp at which the export configuration was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDataflowGraphRequest {
  /**
   * The Python script to transform.
   *
   * @public
   */
  PythonScript?: string | undefined;
}

/**
 * @public
 */
export interface GetDataflowGraphResponse {
  /**
   * A list of the nodes in the resulting DAG.
   *
   * @public
   */
  DagNodes?: CodeGenNode[] | undefined;

  /**
   * A list of the edges in the resulting DAG.
   *
   * @public
   */
  DagEdges?: CodeGenEdge[] | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelRequest {
  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The Profile ID.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelResponse {
  /**
   * The training status of the data quality model.
   *
   * @public
   */
  Status?: DataQualityModelStatus | undefined;

  /**
   * The timestamp when the data quality model training started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The timestamp when the data quality model training completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The training failure reason.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelResultRequest {
  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId: string | undefined;

  /**
   * The Profile ID.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * The statistic model result.
 *
 * @public
 */
export interface StatisticModelResult {
  /**
   * The lower bound.
   *
   * @public
   */
  LowerBound?: number | undefined;

  /**
   * The upper bound.
   *
   * @public
   */
  UpperBound?: number | undefined;

  /**
   * The predicted value.
   *
   * @public
   */
  PredictedValue?: number | undefined;

  /**
   * The actual value.
   *
   * @public
   */
  ActualValue?: number | undefined;

  /**
   * The date.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The inclusion annotation.
   *
   * @public
   */
  InclusionAnnotation?: InclusionAnnotationValue | undefined;
}

/**
 * @public
 */
export interface GetDataQualityModelResultResponse {
  /**
   * The timestamp when the data quality model training completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * A list of `StatisticModelResult`
   *
   * @public
   */
  Model?: StatisticModelResult[] | undefined;
}

/**
 * @public
 */
export interface GetDataQualityResultRequest {
  /**
   * A unique result ID for the data quality result.
   *
   * @public
   */
  ResultId: string | undefined;
}

/**
 * The response for the data quality result.
 *
 * @public
 */
export interface GetDataQualityResultResponse {
  /**
   * A unique result ID for the data quality result.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The Profile ID for the data quality result.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * The table associated with the data quality result, if any.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The name of the ruleset associated with the data quality result.
   *
   * @public
   */
  RulesetName?: string | undefined;

  /**
   * In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the `evaluationContext` can differentiate the nodes.
   *
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * The date and time when the run for this data quality result started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The date and time when the run for this data quality result was completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The job name associated with the data quality result, if any.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The job run ID associated with the data quality result, if any.
   *
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * The unique run ID associated with the ruleset evaluation.
   *
   * @public
   */
  RulesetEvaluationRunId?: string | undefined;

  /**
   * A list of `DataQualityRuleResult` objects representing the results for each rule.
   *
   * @public
   */
  RuleResults?: DataQualityRuleResult[] | undefined;

  /**
   * A list of `DataQualityAnalyzerResult` objects representing the results for each analyzer.
   *
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[] | undefined;

  /**
   * A list of `DataQualityObservation` objects representing the anomaly detection observations generated after evaluating the rules and analyzers.
   *
   * @public
   */
  Observations?: DataQualityObservation[] | undefined;

  /**
   * A summary of `DataQualityAggregatedMetrics` objects showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.
   *
   * @public
   */
  AggregatedMetrics?: DataQualityAggregatedMetrics | undefined;
}

/**
 * @public
 */
export interface GetDataQualityResultV2Request {
  /**
   * A unique result ID for the data quality result.
   *
   * @public
   */
  ResultId: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityResultV2Response {
  /**
   * A unique result ID for the data quality result.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The table associated with the data quality result, if any.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The Profile ID for the data quality result.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * A map of platform-specific identifiers, such as cluster, application, workgroup, or project IDs, that identify where the data quality evaluation ran.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * A map of tags associated with the data quality result.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The date and time when this data quality run started.
   *
   * @public
   */
  ExecutionStartedOn?: Date | undefined;

  /**
   * The date and time when this data quality run completed.
   *
   * @public
   */
  ExecutionCompletedOn?: Date | undefined;

  /**
   * The date and time when this data quality result was published.
   *
   * @public
   */
  ResultPublishedOn?: Date | undefined;

  /**
   * An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.
   *
   * @public
   */
  Score?: number | undefined;

  /**
   * A list of `DataQualityRuleResult` objects representing the results for each rule.
   *
   * @public
   */
  RuleResults?: DataQualityRuleResult[] | undefined;

  /**
   * A list of `DataQualityAnalyzerResult` objects representing the results for each analyzer.
   *
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[] | undefined;

  /**
   * A list of `DataQualityObservation` objects representing the anomaly detection observations generated after evaluating the rules and analyzers.
   *
   * @public
   */
  Observations?: DataQualityObservation[] | undefined;

  /**
   * The evaluation context for the data quality result. This value identifies a specific data quality result, or a series of related results, within a run.
   *
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * A map of user-provided descriptors that add contextual metadata and configuration to the data quality result, such as database name, table name, team, or environment.
   *
   * @public
   */
  Descriptors?: Record<string, string> | undefined;

  /**
   * A summary of `DataQualityAggregatedMetrics` objects showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.
   *
   * @public
   */
  AggregatedMetrics?: DataQualityAggregatedMetrics | undefined;

  /**
   * The name of the ruleset associated with the data quality result.
   *
   * @public
   */
  RulesetName?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRuleRecommendationRunRequest {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * Additional run options you can specify for a recommendation run.
 *
 * @public
 */
export interface DataQualityRuleRecommendationRunAdditionalRunOptions {
  /**
   * A custom prefix for the CloudWatch log group names. When specified, recommendation run logs are written to `<CustomLogGroupPrefix>/error` and `<CustomLogGroupPrefix>/output` instead of the default `/aws-glue/data-quality/error` and `/aws-glue/data-quality/output` log groups.
   *
   * @public
   */
  CustomLogGroupPrefix?: string | undefined;
}

/**
 * The response for the Data Quality rule recommendation run.
 *
 * @public
 */
export interface GetDataQualityRuleRecommendationRunResponse {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The data source (an Glue table) associated with this run.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The IAM role that Glue assumes to access resources for the run.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The number of `G.1X` workers to be used in the run. The default is 5.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters `TIMEOUT` status. The default is 2,880 minutes (48 hours).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The status for this run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The error strings that are associated with the run.
   *
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * The date and time when this run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * A timestamp. The last point in time when this data quality rule recommendation run was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The date and time when this run was completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The amount of time (in seconds) that the run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * When a start rule recommendation run completes, it creates a recommended ruleset (a set of rules). This member has those rules in Data Quality Definition Language (DQDL) format.
   *
   * @public
   */
  RecommendedRuleset?: string | undefined;

  /**
   * The name of the ruleset that was created by the run.
   *
   * @public
   */
  CreatedRulesetName?: string | undefined;

  /**
   * The name of the security configuration created with the data quality encryption option.
   *
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;

  /**
   * Additional run options you can specify for a recommendation run.
   *
   * @public
   */
  AdditionalRunOptions?: DataQualityRuleRecommendationRunAdditionalRunOptions | undefined;

  /**
   * The mode that Glue Data Quality uses to recommend rules.
   *
   * The default is `BASIC`.
   *
   * @public
   */
  RecommendationMode?: RecommendationMode | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetRequest {
  /**
   * The name of the ruleset.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Returns the data quality ruleset response.
 *
 * @public
 */
export interface GetDataQualityRulesetResponse {
  /**
   * The name of the ruleset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.
   *
   * @public
   */
  Ruleset?: string | undefined;

  /**
   * The name and database name of the target table.
   *
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

  /**
   * A timestamp. The time and date that this data quality ruleset was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * A timestamp. The last point in time when this data quality ruleset was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * When a ruleset was created from a recommendation run, this run ID is generated to link the two together.
   *
   * @public
   */
  RecommendationRunId?: string | undefined;

  /**
   * The name of the security configuration created with the data quality encryption option.
   *
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunRequest {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunResponse {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The data source (an Glue table) associated with this evaluation run.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * An IAM role supplied to encrypt the results of the run.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The number of `G.1X` workers to be used in the run. The default is 5.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters `TIMEOUT` status. The default is 2,880 minutes (48 hours).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * Additional run options you can specify for an evaluation run.
   *
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions | undefined;

  /**
   * The status for this run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The error strings that are associated with the run.
   *
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * The date and time when this run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * A timestamp. The last point in time when this data quality rule recommendation run was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The date and time when this run was completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The amount of time (in seconds) that the run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * A list of ruleset names for the run. Currently, this parameter takes only one Ruleset name.
   *
   * @public
   */
  RulesetNames?: string[] | undefined;

  /**
   * A list of result IDs for the data quality results for the run.
   *
   * @public
   */
  ResultIds?: string[] | undefined;

  /**
   * A map of reference strings to additional data sources you can specify for an evaluation run.
   *
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource> | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointRequest {
  /**
   * Name of the `DevEndpoint` to retrieve information for.
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointResponse {
  /**
   * A `DevEndpoint` definition.
   *
   * @public
   */
  DevEndpoint?: DevEndpoint | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointsRequest {
  /**
   * The maximum size of information to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointsResponse {
  /**
   * A list of `DevEndpoint` definitions.
   *
   * @public
   */
  DevEndpoints?: DevEndpoint[] | undefined;

  /**
   * A continuation token, if not all `DevEndpoint` definitions have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEntityRecordsRequest {
  /**
   * The name of the connection that contains the connection type credentials.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Name of the entity that we want to query the preview data from the given connection type.
   *
   * @public
   */
  EntityName: string | undefined;

  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The API version of the SaaS connector.
   *
   * @public
   */
  DataStoreApiVersion?: string | undefined;

  /**
   * Connector options that are required to query the data.
   *
   * @public
   */
  ConnectionOptions?: Record<string, string> | undefined;

  /**
   * A filter predicate that you can apply in the query request.
   *
   * @public
   */
  FilterPredicate?: string | undefined;

  /**
   * Limits the number of records fetched with the request.
   *
   * @public
   */
  Limit: number | undefined;

  /**
   * A parameter that orders the response preview data.
   *
   * @public
   */
  OrderBy?: string | undefined;

  /**
   * List of fields that we want to fetch as part of preview data.
   *
   * @public
   */
  SelectedFields?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEntityRecordsResponse {
  /**
   * A list of the requested objects.
   *
   * @public
   */
  Records?: __DocumentType[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeRequest {
  /**
   * The identifier of the form type to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeResponse {
  /**
   * The identifier of the form type.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the form type.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Smithy IDL schema of the form type.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryRequest {
  /**
   * The unique identifier of the glossary to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryResponse {
  /**
   * The unique identifier of the glossary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the glossary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the glossary.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermRequest {
  /**
   * The unique identifier of the glossary term to retrieve.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermResponse {
  /**
   * The unique identifier of the glossary term.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The unique identifier of the glossary containing this term.
   *
   * @public
   */
  GlossaryId?: string | undefined;

  /**
   * The name of the glossary term.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The short description of the glossary term.
   *
   * @public
   */
  ShortDescription?: string | undefined;

  /**
   * The long description of the glossary term.
   *
   * @public
   */
  LongDescription?: string | undefined;
}

/**
 * Request to retrieve the Glue Identity Center configuration.
 *
 * @public
 */
export interface GetGlueIdentityCenterConfigurationRequest {}

/**
 * Response containing the Glue Identity Center configuration details.
 *
 * @public
 */
export interface GetGlueIdentityCenterConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the Identity Center application associated with the Glue configuration.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity Center instance associated with the Glue configuration.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * A list of Identity Center scopes that define the permissions and access levels for the Glue configuration.
   *
   * @public
   */
  Scopes?: string[] | undefined;

  /**
   * Indicates whether users can run background sessions when using Identity Center authentication with Glue services.
   *
   * @public
   */
  UserBackgroundSessionsEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResourcePropertyRequest {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResourcePropertyResponse {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*
   *
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * The resource properties associated with the integration source.
   *
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * The resource properties associated with the integration target.
   *
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface GetIntegrationTablePropertiesRequest {
  /**
   * The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The name of the table to be replicated.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationTablePropertiesResponse {
  /**
   * The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The name of the table to be replicated.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A structure for the source table configuration.
   *
   * @public
   */
  SourceTableConfig?: SourceTableConfig | undefined;

  /**
   * A structure for the target table configuration.
   *
   * @public
   */
  TargetTableConfig?: TargetTableConfig | undefined;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * The name of the job definition to retrieve.
   *
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkRequest {
  /**
   * The name of the job in question.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The unique run identifier associated with this job run.
   *
   * @public
   */
  RunId?: string | undefined;
}

/**
 * Defines a point that a job can resume processing.
 *
 * @public
 */
export interface JobBookmarkEntry {
  /**
   * The name of the job in question.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The version of the job.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The run ID number.
   *
   * @public
   */
  Run?: number | undefined;

  /**
   * The attempt ID number.
   *
   * @public
   */
  Attempt?: number | undefined;

  /**
   * The unique run identifier associated with the previous job run.
   *
   * @public
   */
  PreviousRunId?: string | undefined;

  /**
   * The run ID number.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The bookmark itself.
   *
   * @public
   */
  JobBookmark?: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkResponse {
  /**
   * A structure that defines a point that a job can resume processing.
   *
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry | undefined;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * Name of the job definition being run.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * True if a list of predecessor runs should be returned.
   *
   * @public
   */
  PredecessorsIncluded?: boolean | undefined;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * The requested job-run metadata.
   *
   * @public
   */
  JobRun?: JobRun | undefined;
}

/**
 * @public
 */
export interface GetJobRunsRequest {
  /**
   * The name of the job definition for which to retrieve all job runs.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetJobRunsResponse {
  /**
   * A list of job-run metadata objects.
   *
   * @public
   */
  JobRuns?: JobRun[] | undefined;

  /**
   * A continuation token, if not all requested job runs have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetJobsRequest {
  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The location of resources.
 *
 * @public
 */
export interface Location {
  /**
   * A JDBC location.
   *
   * @public
   */
  Jdbc?: CodeGenNodeArg[] | undefined;

  /**
   * An Amazon Simple Storage Service (Amazon S3) location.
   *
   * @public
   */
  S3?: CodeGenNodeArg[] | undefined;

  /**
   * An Amazon DynamoDB table location.
   *
   * @public
   */
  DynamoDB?: CodeGenNodeArg[] | undefined;
}

/**
 * Specifies a table definition in the Glue Data Catalog.
 *
 * @public
 */
export interface CatalogEntry {
  /**
   * The database in which the table metadata resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table in question.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetMappingRequest {
  /**
   * Specifies the source table.
   *
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * A list of target tables.
   *
   * @public
   */
  Sinks?: CatalogEntry[] | undefined;

  /**
   * Parameters for the mapping.
   *
   * @public
   */
  Location?: Location | undefined;
}

/**
 * Defines a mapping.
 *
 * @public
 */
export interface MappingEntry {
  /**
   * The name of the source table.
   *
   * @public
   */
  SourceTable?: string | undefined;

  /**
   * The source path.
   *
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * The source type.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The target table.
   *
   * @public
   */
  TargetTable?: string | undefined;

  /**
   * The target path.
   *
   * @public
   */
  TargetPath?: string | undefined;

  /**
   * The target type.
   *
   * @public
   */
  TargetType?: string | undefined;
}

/**
 * @public
 */
export interface GetMappingResponse {
  /**
   * A list of mappings to the specified targets.
   *
   * @public
   */
  Mapping: MappingEntry[] | undefined;
}

/**
 * @public
 */
export interface GetMaterializedViewRefreshTaskRunRequest {
  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The identifier for the particular materialized view refresh task run.
   *
   * @public
   */
  MaterializedViewRefreshTaskRunId: string | undefined;
}

/**
 * The object that shows the details of the materialized view refresh task run.
 *
 * @public
 */
export interface MaterializedViewRefreshTaskRun {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * The identifier of the materialized view refresh task run.
   *
   * @public
   */
  MaterializedViewRefreshTaskRunId?: string | undefined;

  /**
   * The database where the table resides.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the materialized view.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The IAM role that the service assumes to run the materialized view refresh task.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The status of the task run.
   *
   * @public
   */
  Status?: MaterializedViewRefreshState | undefined;

  /**
   * The time that this task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last point in time when this task was modified.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The start time of the task.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the task.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The error message for the job.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The calculated DPU usage in seconds for all autoscaled workers.
   *
   * @public
   */
  DPUSeconds?: number | undefined;

  /**
   * The type of the refresh task run. Either FULL or INCREMENTAL.
   *
   * @public
   */
  RefreshType?: MaterializedViewRefreshType | undefined;

  /**
   * The number of bytes the refresh task run has scanned to refresh the materialized view.
   *
   * @public
   */
  ProcessedBytes?: number | undefined;
}

/**
 * @public
 */
export interface GetMaterializedViewRefreshTaskRunResponse {
  /**
   * A MaterializedViewRefreshTaskRun object representing the details of the task run.
   *
   * @public
   */
  MaterializedViewRefreshTaskRun?: MaterializedViewRefreshTaskRun | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunRequest {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * The unique identifier of the task run.
   *
   * @public
   */
  TaskRunId: string | undefined;
}

/**
 * Specifies configuration properties for an exporting labels task run.
 *
 * @public
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * The Amazon Simple Storage Service (Amazon S3) path where you will export the labels.
   *
   * @public
   */
  OutputS3Path?: string | undefined;
}

/**
 * Specifies configuration properties for a Find Matches task run.
 *
 * @public
 */
export interface FindMatchesTaskRunProperties {
  /**
   * The job ID for the Find Matches task run.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name assigned to the job for the Find Matches task run.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The job run ID for the Find Matches task run.
   *
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * Specifies configuration properties for an importing labels task run.
 *
 * @public
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * The Amazon Simple Storage Service (Amazon S3) path from where you will import the labels.
   *
   * @public
   */
  InputS3Path?: string | undefined;

  /**
   * Indicates whether to overwrite your existing labels.
   *
   * @public
   */
  Replace?: boolean | undefined;
}

/**
 * Specifies configuration properties for a labeling set generation task run.
 *
 * @public
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling set.
   *
   * @public
   */
  OutputS3Path?: string | undefined;
}

/**
 * The configuration properties for the task run.
 *
 * @public
 */
export interface TaskRunProperties {
  /**
   * The type of task run.
   *
   * @public
   */
  TaskType?: TaskType | undefined;

  /**
   * The configuration properties for an importing labels task run.
   *
   * @public
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties | undefined;

  /**
   * The configuration properties for an exporting labels task run.
   *
   * @public
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties | undefined;

  /**
   * The configuration properties for a labeling set generation task run.
   *
   * @public
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties | undefined;

  /**
   * The configuration properties for a find matches task run.
   *
   * @public
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunResponse {
  /**
   * The unique identifier of the task run.
   *
   * @public
   */
  TransformId?: string | undefined;

  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * The status for this task run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The names of the log groups that are associated with the task run.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The list of properties that are associated with the task run.
   *
   * @public
   */
  Properties?: TaskRunProperties | undefined;

  /**
   * The error strings that are associated with the task run.
   *
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * The date and time when this task run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The date and time when this task run was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The date and time when this task run was completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The amount of time (in seconds) that the task run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;
}

/**
 * The criteria that are used to filter the task runs for the machine learning transform.
 *
 * @public
 */
export interface TaskRunFilterCriteria {
  /**
   * The type of task run.
   *
   * @public
   */
  TaskRunType?: TaskType | undefined;

  /**
   * The current status of the task run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * Filter on task runs started before this date.
   *
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * Filter on task runs started after this date.
   *
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * The sorting criteria that are used to sort the list of task runs for the machine learning transform.
 *
 * @public
 */
export interface TaskRunSortCriteria {
  /**
   * The column to be used to sort the list of task runs for the machine learning transform.
   *
   * @public
   */
  Column: TaskRunSortColumnType | undefined;

  /**
   * The sort direction to be used to sort the list of task runs for the machine learning transform.
   *
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsRequest {
  /**
   * The unique identifier of the machine learning transform.
   *
   * @public
   */
  TransformId: string | undefined;

  /**
   * A token for pagination of the results. The default is empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filter criteria, in the `TaskRunFilterCriteria` structure, for the task run.
   *
   * @public
   */
  Filter?: TaskRunFilterCriteria | undefined;

  /**
   * The sorting criteria, in the `TaskRunSortCriteria` structure, for the task run.
   *
   * @public
   */
  Sort?: TaskRunSortCriteria | undefined;
}

/**
 * The sampling parameters that are associated with the machine learning transform.
 *
 * @public
 */
export interface TaskRun {
  /**
   * The unique identifier for the transform.
   *
   * @public
   */
  TransformId?: string | undefined;

  /**
   * The unique identifier for this task run.
   *
   * @public
   */
  TaskRunId?: string | undefined;

  /**
   * The current status of the requested task run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The names of the log group for secure logging, associated with this task run.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * Specifies configuration properties associated with this task run.
   *
   * @public
   */
  Properties?: TaskRunProperties | undefined;

  /**
   * The list of error strings associated with this task run.
   *
   * @public
   */
  ErrorString?: string | undefined;

  /**
   * The date and time that this task run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The last point in time that the requested task run was updated.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * The last point in time that the requested task run was completed.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The amount of time (in seconds) that the task run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsResponse {
  /**
   * A list of task runs that are associated with the transform.
   *
   * @public
   */
  TaskRuns?: TaskRun[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformRequest {
  /**
   * The unique identifier of the transform, generated at the time that the transform was created.
   *
   * @public
   */
  TransformId: string | undefined;
}

/**
 * A structure containing the column name and column importance score for a column.
 *
 * Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.
 *
 * @public
 */
export interface ColumnImportance {
  /**
   * The name of a column.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * The column importance score for the column, as a decimal.
   *
   * @public
   */
  Importance?: number | undefined;
}

/**
 * The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.
 *
 * For more information, see [Confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) in Wikipedia.
 *
 * @public
 */
export interface ConfusionMatrix {
  /**
   * The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.
   *
   * @public
   */
  NumTruePositives?: number | undefined;

  /**
   * The number of nonmatches in the data that the transform incorrectly classified as a match, in the confusion matrix for your transform.
   *
   * @public
   */
  NumFalsePositives?: number | undefined;

  /**
   * The number of nonmatches in the data that the transform correctly rejected, in the confusion matrix for your transform.
   *
   * @public
   */
  NumTrueNegatives?: number | undefined;

  /**
   * The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.
   *
   * @public
   */
  NumFalseNegatives?: number | undefined;
}

/**
 * The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
 *
 * @public
 */
export interface FindMatchesMetrics {
  /**
   * The area under the precision/recall curve (AUPRC) is a single number measuring the overall quality of the transform, that is independent of the choice made for precision vs. recall. Higher values indicate that you have a more attractive precision vs. recall tradeoff.
   *
   * For more information, see [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall) in Wikipedia.
   *
   * @public
   */
  AreaUnderPRCurve?: number | undefined;

  /**
   * The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.
   *
   * For more information, see [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall) in Wikipedia.
   *
   * @public
   */
  Precision?: number | undefined;

  /**
   * The recall metric indicates that for an actual match, how often your transform predicts the match. Specifically, it measures how well the transform finds true positives from the total records in the source data.
   *
   * For more information, see [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall) in Wikipedia.
   *
   * @public
   */
  Recall?: number | undefined;

  /**
   * The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.
   *
   * For more information, see [F1 score](https://en.wikipedia.org/wiki/F1_score) in Wikipedia.
   *
   * @public
   */
  F1?: number | undefined;

  /**
   * The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.
   *
   * For more information, see [Confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) in Wikipedia.
   *
   * @public
   */
  ConfusionMatrix?: ConfusionMatrix | undefined;

  /**
   * A list of `ColumnImportance` structures containing column importance metrics, sorted in order of descending importance.
   *
   * @public
   */
  ColumnImportances?: ColumnImportance[] | undefined;
}

/**
 * Evaluation metrics provide an estimate of the quality of your machine learning transform.
 *
 * @public
 */
export interface EvaluationMetrics {
  /**
   * The type of machine learning transform.
   *
   * @public
   */
  TransformType: TransformType | undefined;

  /**
   * The evaluation metrics for the find matches algorithm.
   *
   * @public
   */
  FindMatchesMetrics?: FindMatchesMetrics | undefined;
}

/**
 * A key-value pair representing a column and data type that this transform can run against. The `Schema` parameter of the `MLTransform` may contain up to 100 of these structures.
 *
 * @public
 */
export interface SchemaColumn {
  /**
   * The name of the column.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of data in the column.
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformResponse {
  /**
   * The unique identifier of the transform, generated at the time that the transform was created.
   *
   * @public
   */
  TransformId?: string | undefined;

  /**
   * The unique name given to the transform when it was created.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the transform.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".
   *
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * The date and time when the transform was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The date and time when the transform was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * A list of Glue table definitions used by the transform.
   *
   * @public
   */
  InputRecordTables?: GlueTable[] | undefined;

  /**
   * The configuration parameters that are specific to the algorithm used.
   *
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * The latest evaluation metrics.
   *
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics | undefined;

  /**
   * The number of labels available for this transform.
   *
   * @public
   */
  LabelCount?: number | undefined;

  /**
   * The `Map<Column, Type>` object that represents the schema that this transform accepts. Has an upper bound of 100 columns.
   *
   * @public
   */
  Schema?: SchemaColumn[] | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](https://aws.amazon.com/glue/pricing/).
   *
   * When the `WorkerType` field is set to a value other than `Standard`, the `MaxCapacity` field is set automatically and becomes read-only.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.
   *
   * - For the `Standard` worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
   * - For the `G.1X` worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.
   * - For the `G.2X` worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * The number of workers of a defined `workerType` that are allocated when this task runs.
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters `TIMEOUT` status. The default is 2,880 minutes (48 hours).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The maximum number of times to retry a task for this transform after a task run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
   *
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * The criteria used to filter the machine learning transforms.
 *
 * @public
 */
export interface TransformFilterCriteria {
  /**
   * A unique transform name that is used to filter the machine learning transforms.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of machine learning transform that is used to filter the machine learning transforms.
   *
   * @public
   */
  TransformType?: TransformType | undefined;

  /**
   * Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".
   *
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The time and date before which the transforms were created.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The time and date after which the transforms were created.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter on transforms last modified before this date.
   *
   * @public
   */
  LastModifiedBefore?: Date | undefined;

  /**
   * Filter on transforms last modified after this date.
   *
   * @public
   */
  LastModifiedAfter?: Date | undefined;

  /**
   * Filters on datasets with a specific schema. The `Map<Column, Type>` object is an array of key-value pairs representing the schema this transform accepts, where `Column` is the name of a column, and `Type` is the type of the data such as an integer or string. Has an upper bound of 100 columns.
   *
   * @public
   */
  Schema?: SchemaColumn[] | undefined;
}

/**
 * The sorting criteria that are associated with the machine learning transform.
 *
 * @public
 */
export interface TransformSortCriteria {
  /**
   * The column to be used in the sorting criteria that are associated with the machine learning transform.
   *
   * @public
   */
  Column: TransformSortColumnType | undefined;

  /**
   * The sort direction to be used in the sorting criteria that are associated with the machine learning transform.
   *
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsRequest {
  /**
   * A paginated token to offset the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filter transformation criteria.
   *
   * @public
   */
  Filter?: TransformFilterCriteria | undefined;

  /**
   * The sorting criteria.
   *
   * @public
   */
  Sort?: TransformSortCriteria | undefined;
}

/**
 * A structure for a machine learning transform.
 *
 * @public
 */
export interface MLTransform {
  /**
   * The unique transform ID that is generated for the machine learning transform. The ID is guaranteed to be unique and does not change.
   *
   * @public
   */
  TransformId?: string | undefined;

  /**
   * A user-defined name for the machine learning transform. Names are not guaranteed unique and can be changed at any time.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A user-defined, long-form description text for the machine learning transform. Descriptions are not guaranteed to be unique and can be changed at any time.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the machine learning transform.
   *
   * @public
   */
  Status?: TransformStatusType | undefined;

  /**
   * A timestamp. The time and date that this machine learning transform was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * A timestamp. The last point in time when this machine learning transform was modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * A list of Glue table definitions used by the transform.
   *
   * @public
   */
  InputRecordTables?: GlueTable[] | undefined;

  /**
   * A `TransformParameters` object. You can use parameters to tune (customize) the behavior of the machine learning transform by specifying what data it learns from and your preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).
   *
   * @public
   */
  Parameters?: TransformParameters | undefined;

  /**
   * An `EvaluationMetrics` object. Evaluation metrics provide an estimate of the quality of your machine learning transform.
   *
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics | undefined;

  /**
   * A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.
   *
   * @public
   */
  LabelCount?: number | undefined;

  /**
   * A map of key-value pairs representing the columns and data types that this transform can run against. Has an upper bound of 100 columns.
   *
   * @public
   */
  Schema?: SchemaColumn[] | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform.
   *
   * - This role needs Glue service role permissions to allow access to resources in Glue. See [Attach a Policy to IAM Users That Access Glue](https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html).
   * - This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
   *
   * @public
   */
  GlueVersion?: string | undefined;

  /**
   * The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [Glue pricing page](http://aws.amazon.com/glue/pricing/).
   *
   * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType`.
   *
   * - If either `NumberOfWorkers` or `WorkerType` is set, then `MaxCapacity` cannot be set.
   * - If `MaxCapacity` is set then neither `NumberOfWorkers` or `WorkerType` can be set.
   * - If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   * - `MaxCapacity` and `NumberOfWorkers` must both be at least 1.
   *
   * When the `WorkerType` field is set to a value other than `Standard`, the `MaxCapacity` field is set automatically and becomes read-only.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.
   *
   * - For the `Standard` worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
   * - For the `G.1X` worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.
   * - For the `G.2X` worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.
   *
   * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType`.
   *
   * - If either `NumberOfWorkers` or `WorkerType` is set, then `MaxCapacity` cannot be set.
   * - If `MaxCapacity` is set then neither `NumberOfWorkers` or `WorkerType` can be set.
   * - If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   * - `MaxCapacity` and `NumberOfWorkers` must both be at least 1.
   *
   * @public
   */
  WorkerType?: WorkerType | undefined;

  /**
   * The number of workers of a defined `workerType` that are allocated when a task of the transform runs.
   *
   * If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   *
   * @public
   */
  NumberOfWorkers?: number | undefined;

  /**
   * The timeout in minutes of the machine learning transform.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The maximum number of times to retry after an `MLTaskRun` of the machine learning transform fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
   *
   * @public
   */
  TransformEncryption?: TransformEncryption | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsResponse {
  /**
   * A list of machine learning transforms.
   *
   * @public
   */
  Transforms: MLTransform[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPartitionRequest {
  /**
   * The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the partition resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partition's table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The values that define the partition.
   *
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * A structure containing the Lake Formation audit context.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetPartitionResponse {
  /**
   * The requested information, in the form of a `Partition` object.
   *
   * @public
   */
  Partition?: Partition | undefined;
}

/**
 * @public
 */
export interface GetPartitionIndexesRequest {
  /**
   * The catalog ID where the table resides.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Specifies the name of a database from which you want to retrieve partition indexes.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Specifies the name of a table for which you want to retrieve the partition indexes.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A list of errors that can occur when registering partition indexes for an existing table.
 *
 * These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:
 *
 * - EncryptedPartitionError: The partitions are encrypted.
 * - InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.
 * - MissingPartitionValueError: The partitions are encrypted.
 * - UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.
 * - InternalError: Any error which does not belong to other error codes.
 *
 * @public
 */
export interface BackfillError {
  /**
   * The error code for an error that occurred when registering partition indexes for an existing table.
   *
   * @public
   */
  Code?: BackfillErrorCode | undefined;

  /**
   * A list of a limited number of partitions in the response.
   *
   * @public
   */
  Partitions?: PartitionValueList[] | undefined;
}

/**
 * A partition key pair consisting of a name and a type.
 *
 * @public
 */
export interface KeySchemaElement {
  /**
   * The name of a partition key.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of a partition key.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * A descriptor for a partition index in a table.
 *
 * @public
 */
export interface PartitionIndexDescriptor {
  /**
   * The name of the partition index.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * A list of one or more keys, as `KeySchemaElement` structures, for the partition index.
   *
   * @public
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * The status of the partition index.
   *
   * The possible statuses are:
   *
   * - CREATING: The index is being created. When an index is in a CREATING state, the index or its table cannot be deleted.
   * - ACTIVE: The index creation succeeds.
   * - FAILED: The index creation fails.
   * - DELETING: The index is deleted from the list of indexes.
   *
   * @public
   */
  IndexStatus: PartitionIndexStatus | undefined;

  /**
   * A list of errors that can occur when registering partition indexes for an existing table.
   *
   * @public
   */
  BackfillErrors?: BackfillError[] | undefined;
}

/**
 * @public
 */
export interface GetPartitionIndexesResponse {
  /**
   * A list of index descriptors.
   *
   * @public
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[] | undefined;

  /**
   * A continuation token, present if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
 *
 * @public
 */
export interface Segment {
  /**
   * The zero-based index number of the segment. For example, if the total number of segments is 4, `SegmentNumber` values range from 0 through 3.
   *
   * @public
   */
  SegmentNumber: number | undefined;

  /**
   * The total number of segments.
   *
   * @public
   */
  TotalSegments: number | undefined;
}

/**
 * @public
 */
export interface GetPartitionsRequest {
  /**
   * The ID of the Data Catalog where the partitions in question reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the partitions reside.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the partitions' table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * An expression that filters the partitions to be returned.
   *
   * The expression uses SQL syntax similar to the SQL `WHERE` filter clause. The SQL statement parser [JSQLParser](http://jsqlparser.sourceforge.net/home.php) parses the expression.
   *
   * *Operators*: The following are the operators that you can use in the `Expression` API call:
   *
   * - **=**
   *
   *   Checks whether the values of the two operands are equal; if yes, then the condition becomes true.
   *
   *   Example: Assume 'variable a' holds 10 and 'variable b' holds 20.
   *
   *   (a = b) is not true.
   *
   * - **< >**
   *
   *   Checks whether the values of two operands are equal; if the values are not equal, then the condition becomes true.
   *
   *   Example: (a < > b) is true.
   *
   * - **>**
   *
   *   Checks whether the value of the left operand is greater than the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a > b) is not true.
   *
   * - **<**
   *
   *   Checks whether the value of the left operand is less than the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a < b) is true.
   *
   * - **>=**
   *
   *   Checks whether the value of the left operand is greater than or equal to the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a >= b) is not true.
   *
   * - **<=**
   *
   *   Checks whether the value of the left operand is less than or equal to the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a <= b) is true.
   *
   * - **AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL**
   *
   *   Logical operators.
   *
   * *Supported Partition Key Types*: The following are the supported partition keys.
   *
   * - `string`
   * - `date`
   * - `timestamp`
   * - `int`
   * - `bigint`
   * - `long`
   * - `tinyint`
   * - `smallint`
   * - `decimal`
   *
   * If an type is encountered that is not valid, an exception is thrown.
   *
   * The following list shows the valid operators on each type. When you define a crawler, the `partitionKey` type is created as a `STRING`, to be compatible with the catalog partitions.
   *
   * *Sample API Call*:
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve these partitions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The segment of the table's partitions to scan in this request.
   *
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * The maximum number of partitions to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.
   *
   * @public
   */
  ExcludeColumnSchema?: boolean | undefined;

  /**
   * The transaction ID at which to read the partition contents.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with `TransactionId`.
   *
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * A structure containing the Lake Formation audit context.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetPartitionsResponse {
  /**
   * A list of requested partitions.
   *
   * @public
   */
  Partitions?: Partition[] | undefined;

  /**
   * A continuation token, if the returned list of partitions does not include the last one.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPlanRequest {
  /**
   * The list of mappings from a source table to target tables.
   *
   * @public
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * The source table.
   *
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * The target tables.
   *
   * @public
   */
  Sinks?: CatalogEntry[] | undefined;

  /**
   * The parameters for the mapping.
   *
   * @public
   */
  Location?: Location | undefined;

  /**
   * The programming language of the code to perform the mapping.
   *
   * @public
   */
  Language?: Language | undefined;

  /**
   * A map to hold additional optional key-value parameters.
   *
   * Currently, these key-value pairs are supported:
   *
   * - `inferSchema`  —  Specifies whether to set `inferSchema` to true or false for the default script generated by an Glue job. For example, to set `inferSchema` to true, pass the following key value pair:
   *
   *   `--additional-plan-options-map '\{"inferSchema":"true"\}'`
   *
   * @public
   */
  AdditionalPlanOptionsMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * A Python script to perform the mapping.
   *
   * @public
   */
  PythonScript?: string | undefined;

  /**
   * The Scala code to perform the mapping.
   *
   * @public
   */
  ScalaCode?: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryInput {
  /**
   * This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
   *
   * @public
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * A description of the registry.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the registry.
   *
   * @public
   */
  Status?: RegistryStatus | undefined;

  /**
   * The date and time the registry was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The date and time the registry was updated.
   *
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure for returning a resource policy.
 *
 * @public
 */
export interface GluePolicy {
  /**
   * Contains the requested policy document, in JSON format.
   *
   * @public
   */
  PolicyInJson?: string | undefined;

  /**
   * Contains the hash value associated with this policy.
   *
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * The date and time at which the policy was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time at which the policy was last updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * A list of the individual resource policies and the account-level resource policy.
   *
   * @public
   */
  GetResourcePoliciesResponseList?: GluePolicy[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last resource policy available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The ARN of the Glue resource for which to retrieve the resource policy. If not supplied, the Data Catalog resource policy is returned. Use `GetResourcePolicies` to view all existing resource policies. For more information see [Specifying Glue Resource ARNs](https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html).
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * Contains the requested policy document, in JSON format.
   *
   * @public
   */
  PolicyInJson?: string | undefined;

  /**
   * Contains the hash value associated with this policy.
   *
   * @public
   */
  PolicyHash?: string | undefined;

  /**
   * The date and time at which the policy was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The date and time at which the policy was last updated.
   *
   * @public
   */
  UpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   *
   * @public
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface GetSchemaResponse {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * A description of schema if specified when created
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data format of the schema definition. Currently `AVRO`, `JSON` and `PROTOBUF` are supported.
   *
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * The compatibility mode of the schema.
   *
   * @public
   */
  Compatibility?: Compatibility | undefined;

  /**
   * The version number of the checkpoint (the last time the compatibility mode was changed).
   *
   * @public
   */
  SchemaCheckpoint?: number | undefined;

  /**
   * The latest version of the schema associated with the returned schema definition.
   *
   * @public
   */
  LatestSchemaVersion?: number | undefined;

  /**
   * The next version of the schema associated with the returned schema definition.
   *
   * @public
   */
  NextSchemaVersion?: number | undefined;

  /**
   * The status of the schema.
   *
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * The date and time the schema was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The date and time the schema was updated.
   *
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   *
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * The definition of the schema for which schema details are required.
   *
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionResponse {
  /**
   * The schema ID of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The data format of the schema definition. Currently `AVRO`, `JSON` and `PROTOBUF` are supported.
   *
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * The status of the schema version.
   *
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * The date and time the schema was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * A structure containing the schema version information.
 *
 * @public
 */
export interface SchemaVersionNumber {
  /**
   * The latest version available for the schema.
   *
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  VersionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   *
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * The `SchemaVersionId` of the schema version. This field is required for fetching by schema ID. Either this or the `SchemaId` wrapper has to be provided.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * The `SchemaVersionId` of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The schema definition for the schema ID.
   *
   * @public
   */
  SchemaDefinition?: string | undefined;

  /**
   * The data format of the schema definition. Currently `AVRO`, `JSON` and `PROTOBUF` are supported.
   *
   * @public
   */
  DataFormat?: DataFormat | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The status of the schema version.
   *
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * The date and time the schema version was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. One of `SchemaArn` or `SchemaName` has to be provided.
   *
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * The first of the two schema versions to be compared.
   *
   * @public
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * The second of the two schema versions to be compared.
   *
   * @public
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * Refers to `SYNTAX_DIFF`, which is the currently supported diff type.
   *
   * @public
   */
  SchemaDiffType: SchemaDiffType | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffResponse {
  /**
   * The difference between schemas as a string in JsonPatch format.
   *
   * @public
   */
  Diff?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationRequest {
  /**
   * The name of the security configuration to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Specifies a security configuration.
 *
 * @public
 */
export interface SecurityConfiguration {
  /**
   * The name of the security configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time at which this security configuration was created.
   *
   * @public
   */
  CreatedTimeStamp?: Date | undefined;

  /**
   * The encryption configuration associated with this security configuration.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationResponse {
  /**
   * The requested security configuration.
   *
   * @public
   */
  SecurityConfiguration?: SecurityConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsResponse {
  /**
   * A list of security configurations.
   *
   * @public
   */
  SecurityConfigurations?: SecurityConfiguration[] | undefined;

  /**
   * A continuation token, if there are more security configurations to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The ID of the session.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The origin of the request.
   *
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The session object is returned in the response.
   *
   * @public
   */
  Session?: Session | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointRequest {
  /**
   * The unique identifier of the interactive session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * Contains the Spark Connect endpoint details for an interactive session, including the URL and authentication credentials.
 *
 * @public
 */
export interface SessionEndpoint {
  /**
   * The Spark Connect endpoint URL for the session.
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The authentication token to include in requests to the Spark Connect endpoint.
   *
   * @public
   */
  AuthToken: string | undefined;

  /**
   * The time at which the authentication token expires.
   *
   * @public
   */
  AuthTokenExpirationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointResponse {
  /**
   * The Spark Connect endpoint details for the session.
   *
   * @public
   */
  SparkConnect: SessionEndpoint | undefined;
}

/**
 * @public
 */
export interface GetStatementRequest {
  /**
   * The Session ID of the statement.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The Id of the statement.
   *
   * @public
   */
  Id: number | undefined;

  /**
   * The origin of the request.
   *
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * The code execution output in JSON format.
 *
 * @public
 */
export interface StatementOutputData {
  /**
   * The code execution output in text format.
   *
   * @public
   */
  TextPlain?: string | undefined;
}

/**
 * The code execution output in JSON format.
 *
 * @public
 */
export interface StatementOutput {
  /**
   * The code execution output.
   *
   * @public
   */
  Data?: StatementOutputData | undefined;

  /**
   * The execution count of the output.
   *
   * @public
   */
  ExecutionCount?: number | undefined;

  /**
   * The status of the code execution output.
   *
   * @public
   */
  Status?: StatementState | undefined;

  /**
   * The name of the error in the output.
   *
   * @public
   */
  ErrorName?: string | undefined;

  /**
   * The error value of the output.
   *
   * @public
   */
  ErrorValue?: string | undefined;

  /**
   * The traceback of the output.
   *
   * @public
   */
  Traceback?: string[] | undefined;
}

/**
 * The statement or request for a particular action to occur in a session.
 *
 * @public
 */
export interface Statement {
  /**
   * The ID of the statement.
   *
   * @public
   */
  Id?: number | undefined;

  /**
   * The execution code of the statement.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The state while request is actioned.
   *
   * @public
   */
  State?: StatementState | undefined;

  /**
   * The output in JSON.
   *
   * @public
   */
  Output?: StatementOutput | undefined;

  /**
   * The code execution progress.
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * The unix time and date that the job definition was started.
   *
   * @public
   */
  StartedOn?: number | undefined;

  /**
   * The unix time and date that the job definition was completed.
   *
   * @public
   */
  CompletedOn?: number | undefined;
}

/**
 * @public
 */
export interface GetStatementResponse {
  /**
   * Returns the statement.
   *
   * @public
   */
  Statement?: Statement | undefined;
}

/**
 * @public
 */
export interface GetSystemLogsForJobRunRequest {
  /**
   * The name of the job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The ID of the job run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetSystemLogsForJobRunResponse {
  /**
   * The URL to download the system logs for the job run.
   *
   * @public
   */
  SystemLogsUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetSystemLogsForSessionRequest {
  /**
   * The ID of the session.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetSystemLogsForSessionResponse {
  /**
   * The URL to download the system logs for the session.
   *
   * @public
   */
  SystemLogsUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which to retrieve the definition. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The transaction ID at which to read the table contents.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with `TransactionId`.
   *
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * A structure containing the Lake Formation [audit context](https://docs.aws.amazon.com/glue/latest/webapi/API_AuditContext.html).
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.
   *
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;

  /**
   * Specifies the table fields returned by the `GetTable` call. This parameter doesn't accept an empty list.
   *
   * The following are the valid combinations of values:
   *
   * - `DEFAULT` - Returns the Hive-style table definition only.
   * - `LATEST_ICEBERG_METADATA` - Returns only the latest Apache Iceberg table metadata.
   * - `DEFAULT`, `LATEST_ICEBERG_METADATA` - Returns both the Hive-style table definition and the latest Apache Iceberg table metadata.
   *
   * @public
   */
  AttributesToGet?: TableAttributes[] | undefined;
}

/**
 * The Apache Iceberg table metadata, including format version, table identifier, schemas, partition specifications, sort orders, and table properties. This structure captures the current state of an Iceberg table's metadata as managed by the Glue Data Catalog.
 *
 * @public
 */
export interface IcebergTableMetadata {
  /**
   * The Apache Iceberg table format version, such as `1` or `2`. Determines the set of features and on-disk layout supported by the table.
   *
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * The unique identifier (UUID) for the Iceberg table, assigned when the table is created and used to track the table across metadata updates.
   *
   * @public
   */
  TableUuid?: string | undefined;

  /**
   * The base S3 location where the Iceberg table's data and metadata files are stored.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * A map of key-value pairs that define table-level properties and configuration settings for the Iceberg table.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * The list of schemas that have been associated with the Iceberg table over its history, supporting schema evolution.
   *
   * @public
   */
  Schemas?: IcebergSchema[] | undefined;

  /**
   * The identifier of the schema that is currently active for the Iceberg table. Matches an entry in `Schemas`.
   *
   * @public
   */
  CurrentSchemaId?: number | undefined;

  /**
   * The highest column identifier that has been assigned in the Iceberg table's schema, used to ensure unique IDs as new columns are added.
   *
   * @public
   */
  LastColumnId?: number | undefined;

  /**
   * The list of partition specifications that have been associated with the Iceberg table over its history, supporting partition evolution.
   *
   * @public
   */
  PartitionSpecs?: IcebergPartitionSpec[] | undefined;

  /**
   * The identifier of the partition specification that is currently used by default when writing new data to the Iceberg table.
   *
   * @public
   */
  DefaultSpecId?: number | undefined;

  /**
   * The highest partition field identifier that has been assigned across the table's partition specifications.
   *
   * @public
   */
  LastPartitionId?: number | undefined;

  /**
   * The list of sort order specifications that have been associated with the Iceberg table over its history.
   *
   * @public
   */
  SortOrders?: IcebergSortOrder[] | undefined;

  /**
   * The identifier of the sort order that is currently used by default when writing new data to the Iceberg table.
   *
   * @public
   */
  DefaultSortOrderId?: number | undefined;
}

/**
 * A structure that describes the default row-level security policy of a table.
 *
 * @public
 */
export interface RLSProperties {
  /**
   * The name of the default row-level security policy applied to the table.
   *
   * @public
   */
  DefaultRLSPolicy?: string | undefined;
}

/**
 * A structure that contains information for an analytical engine to validate a view, prior to persisting the view metadata. Used in the case of direct `UpdateTable` or `CreateTable` API calls.
 *
 * @public
 */
export interface ViewValidation {
  /**
   * The dialect of the query engine.
   *
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * The version of the dialect of the query engine. For example, 3.0.0.
   *
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * The `SELECT` query that defines the view, as provided by the customer.
   *
   * @public
   */
  ViewValidationText?: string | undefined;

  /**
   * The time of the last update.
   *
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * The state of the validation.
   *
   * @public
   */
  State?: ResourceState | undefined;

  /**
   * An error associated with the validation.
   *
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * A structure that contains the dialect of the view, and the query that defines the view.
 *
 * @public
 */
export interface ViewRepresentation {
  /**
   * The dialect of the query engine.
   *
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * The version of the dialect of the query engine. For example, 3.0.0.
   *
   * @public
   */
  DialectVersion?: string | undefined;

  /**
   * The `SELECT` query provided by the customer during `CREATE VIEW DDL`. This SQL is not used during a query on a view (`ViewExpandedText` is used instead). `ViewOriginalText` is used for cases like `SHOW CREATE VIEW` where users want to see the original DDL command that created the view.
   *
   * @public
   */
  ViewOriginalText?: string | undefined;

  /**
   * The expanded SQL for the view. This SQL is used by engines while processing a query on a view. Engines may perform operations during view creation to transform `ViewOriginalText` to `ViewExpandedText`. For example:
   *
   * - Fully qualified identifiers: `SELECT * from table1 -> SELECT * from db1.table1`
   *
   * @public
   */
  ViewExpandedText?: string | undefined;

  /**
   * The name of the connection to be used to validate the specific representation of the view.
   *
   * @public
   */
  ValidationConnection?: string | undefined;

  /**
   * Dialects marked as stale are no longer valid and must be updated before they can be queried in their respective query engines.
   *
   * @public
   */
  IsStale?: boolean | undefined;
}

/**
 * A structure containing details for representations.
 *
 * @public
 */
export interface ViewDefinition {
  /**
   * You can set this flag as true to instruct the engine not to push user-provided operations into the logical plan of the view during query planning. However, setting this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.
   *
   * @public
   */
  IsProtected?: boolean | undefined;

  /**
   * Specifies whether the materialized view is managed by Glue.
   *
   * @public
   */
  IsManaged?: boolean | undefined;

  /**
   * The definer of a view in SQL.
   *
   * @public
   */
  Definer?: string | undefined;

  /**
   * The ID value that identifies this view's version. For materialized views, the version ID is the Apache Iceberg table's snapshot ID.
   *
   * @public
   */
  ViewVersionId?: number | undefined;

  /**
   * The version ID of the Apache Iceberg table.
   *
   * @public
   */
  ViewVersionToken?: string | undefined;

  /**
   * Auto refresh interval in seconds for the materialized view. If not specified, the view will not automatically refresh.
   *
   * @public
   */
  RefreshSeconds?: number | undefined;

  /**
   * Sets the method used for the most recent refresh.
   *
   * @public
   */
  LastRefreshType?: LastRefreshType | undefined;

  /**
   * A list of table Amazon Resource Names (ARNs).
   *
   * @public
   */
  SubObjects?: string[] | undefined;

  /**
   * List of the Apache Iceberg table versions referenced by the materialized view.
   *
   * @public
   */
  SubObjectVersionIds?: number[] | undefined;

  /**
   * Statistics captured for each sub-object referenced by the materialized view as of its most recent refresh, such as the source type, Glue version ID, and the partition, file, and byte counts. Each entry describes one sub-object, identified by its source type.
   *
   * @public
   */
  SubObjectsStatistics?: SubObjectStatistics[] | undefined;

  /**
   * A list of representations.
   *
   * @public
   */
  Representations?: ViewRepresentation[] | undefined;

  /**
   * A map of key-value pairs containing Spark Declarative Pipelines (SDP) information for the materialized view.
   *
   * @public
   */
  SparkPipelineInfo?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerRequest {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The type of table optimizer.
   *
   * @public
   */
  Type: TableOptimizerType | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerResponse {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The optimizer associated with the specified table.
   *
   * @public
   */
  TableOptimizer?: TableOptimizer | undefined;
}

/**
 * @public
 */
export interface GetTablesRequest {
  /**
   * The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database in the catalog whose tables to list. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A regular expression pattern. If present, only those tables whose names match the pattern are returned.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of tables to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The transaction ID at which to read the table contents.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with `TransactionId`.
   *
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * A structure containing the Lake Formation [audit context](https://docs.aws.amazon.com/glue/latest/webapi/API_AuditContext.html).
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * Specifies which tables the `GetTables` call returns. The allowable values are `FEDERATED` or `ALL`.
   *
   * - If set to `FEDERATED`, returns only federated tables, which reference an entity outside the Glue Data Catalog.
   * - If set to `ALL`, returns all tables in the database, both federated and non-federated.
   *
   * @public
   */
  ResourceShareType?: TableResourceShareType | undefined;

  /**
   * Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.
   *
   * @public
   */
  IncludeStatusDetails?: boolean | undefined;

  /**
   * Specifies the table fields returned by the `GetTables` call. This parameter doesn’t accept an empty list. The request must include `NAME`.
   *
   * The following are the valid combinations of values:
   *
   * - `NAME` - Names of all tables in the database.
   * - `NAME`, `TABLE_TYPE` - Names of all tables and the table types.
   *
   * @public
   */
  AttributesToGet?: TableAttributes[] | undefined;
}

/**
 * @public
 */
export interface GetTableVersionRequest {
  /**
   * The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The ID value of the table version to be retrieved. A `VersionID` is a string representation of an integer. Each version is incremented by 1.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * A structure containing the Lake Formation audit context.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetTableVersionsRequest {
  /**
   * The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table. For Hive compatibility, this name is entirely lowercase.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A continuation token, if this is not the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of table versions to return in one response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A structure containing the Lake Formation audit context.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to retrieve tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * The requested tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTriggerRequest {
  /**
   * The name of the trigger to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTriggerResponse {
  /**
   * The requested trigger definition.
   *
   * @public
   */
  Trigger?: Trigger | undefined;
}

/**
 * @public
 */
export interface GetTriggersRequest {
  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the job to retrieve triggers for. The trigger that can start this job is returned, and if there is no such trigger, all triggers are returned.
   *
   * @public
   */
  DependentJobName?: string | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetTriggersResponse {
  /**
   * A list of triggers for the specified job.
   *
   * @public
   */
  Triggers?: Trigger[] | undefined;

  /**
   * A continuation token, if not all the requested triggers have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataRequest {
  /**
   * Specified only if the base tables belong to a different Amazon Web Services Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The catalog ID where the partition resides.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * (Required) Specifies the name of a database that contains the partition.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * (Required) Specifies the name of a table that contains the partition.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * (Required) A list of partition key values.
   *
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * A structure containing Lake Formation audit context information.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * (Required) A list of supported permission types.
   *
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
   *
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * A Partition object containing the partition metadata.
   *
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * A list of column names that the user has been granted access to.
   *
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * A Boolean value that indicates whether the partition location is registered with Lake Formation.
   *
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataRequest {
  /**
   * Specified only if the base tables belong to a different Amazon Web Services Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The ID of the Data Catalog where the partitions in question reside. If none is provided, the AWS account ID is used by default.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the catalog database where the partitions reside.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table that contains the partition.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * An expression that filters the partitions to be returned.
   *
   * The expression uses SQL syntax similar to the SQL `WHERE` filter clause. The SQL statement parser [JSQLParser](http://jsqlparser.sourceforge.net/home.php) parses the expression.
   *
   * *Operators*: The following are the operators that you can use in the `Expression` API call:
   *
   * - **=**
   *
   *   Checks whether the values of the two operands are equal; if yes, then the condition becomes true.
   *
   *   Example: Assume 'variable a' holds 10 and 'variable b' holds 20.
   *
   *   (a = b) is not true.
   *
   * - **< >**
   *
   *   Checks whether the values of two operands are equal; if the values are not equal, then the condition becomes true.
   *
   *   Example: (a < > b) is true.
   *
   * - **>**
   *
   *   Checks whether the value of the left operand is greater than the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a > b) is not true.
   *
   * - **<**
   *
   *   Checks whether the value of the left operand is less than the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a < b) is true.
   *
   * - **>=**
   *
   *   Checks whether the value of the left operand is greater than or equal to the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a >= b) is not true.
   *
   * - **<=**
   *
   *   Checks whether the value of the left operand is less than or equal to the value of the right operand; if yes, then the condition becomes true.
   *
   *   Example: (a <= b) is true.
   *
   * - **AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL**
   *
   *   Logical operators.
   *
   * *Supported Partition Key Types*: The following are the supported partition keys.
   *
   * - `string`
   * - `date`
   * - `timestamp`
   * - `int`
   * - `bigint`
   * - `long`
   * - `tinyint`
   * - `smallint`
   * - `decimal`
   *
   * If an type is encountered that is not valid, an exception is thrown.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A structure containing Lake Formation audit context information.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * A list of supported permission types.
   *
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve these partitions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The segment of the table's partitions to scan in this request.
   *
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * The maximum number of partitions to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
   *
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * A partition that contains unfiltered metadata.
 *
 * @public
 */
export interface UnfilteredPartition {
  /**
   * The partition object.
   *
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * The list of columns the user has permissions to access.
   *
   * @public
   */
  AuthorizedColumns?: string[] | undefined;

  /**
   * A Boolean value indicating that the partition location is registered with Lake Formation.
   *
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataResponse {
  /**
   * A list of requested partitions.
   *
   * @public
   */
  UnfilteredPartitions?: UnfilteredPartition[] | undefined;

  /**
   * A continuation token, if the returned list of partitions does not include the last one.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure specifying the dialect and dialect version used by the query engine.
 *
 * @public
 */
export interface SupportedDialect {
  /**
   * The dialect of the query engine.
   *
   * @public
   */
  Dialect?: ViewDialect | undefined;

  /**
   * The version of the dialect of the query engine. For example, 3.0.0.
   *
   * @public
   */
  DialectVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataRequest {
  /**
   * Specified only if the base tables belong to a different Amazon Web Services Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The catalog ID where the table resides.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * (Required) Specifies the name of a database that contains the table.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * (Required) Specifies the name of a table for which you are requesting metadata.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A structure containing Lake Formation audit context information.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * Indicates the level of filtering a third-party analytical engine is capable of enforcing when calling the `GetUnfilteredTableMetadata` API operation. Accepted values are:
   *
   * - `COLUMN_PERMISSION` - Column permissions ensure that users can access only specific columns in the table. If there are particular columns contain sensitive data, data lake administrators can define column filters that exclude access to specific columns.
   * - `CELL_FILTER_PERMISSION` - Cell-level filtering combines column filtering (include or exclude columns) and row filter expressions to restrict access to individual elements in the table.
   * - `NESTED_PERMISSION` - Nested permissions combines cell-level filtering and nested column filtering to restrict access to columns and/or nested columns in specific rows based on row filter expressions.
   * - `NESTED_CELL_PERMISSION` - Nested cell permissions combines nested permission with nested cell-level filtering. This allows different subsets of nested columns to be restricted based on an array of row filter expressions.
   *
   * Note: Each of these permission types follows a hierarchical order where each subsequent permission type includes all permission of the previous type.
   *
   * Important: If you provide a supported permission type that doesn't match the user's level of permissions on the table, then Lake Formation raises an exception. For example, if the third-party engine calling the `GetUnfilteredTableMetadata` operation can enforce only column-level filtering, and the user has nested cell filtering applied on the table, Lake Formation throws an exception, and will not return unfiltered table metadata and data access credentials.
   *
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * The resource ARN of the view.
   *
   * @public
   */
  ParentResourceArn?: string | undefined;

  /**
   * The resource ARN of the root view in a chain of nested views.
   *
   * @public
   */
  RootResourceArn?: string | undefined;

  /**
   * A structure specifying the dialect and dialect version used by the query engine.
   *
   * @public
   */
  SupportedDialect?: SupportedDialect | undefined;

  /**
   * The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
   *
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * A filter that uses both column-level and row-level filtering.
 *
 * @public
 */
export interface ColumnRowFilter {
  /**
   * A string containing the name of the column.
   *
   * @public
   */
  ColumnName?: string | undefined;

  /**
   * A string containing the row-level filter expression.
   *
   * @public
   */
  RowFilterExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileRequest {
  /**
   * The name of the usage profile to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileResponse {
  /**
   * The name of the usage profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the usage profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A `ProfileConfiguration` object specifying the job and session values for the profile.
   *
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * The date and time when the usage profile was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The date and time when the usage profile was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionRequest {
  /**
   * The ID of the Data Catalog where the function to be retrieved is located. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the function is located.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * Represents the equivalent of a Hive user-defined function (`UDF`) definition.
 *
 * @public
 */
export interface UserDefinedFunction {
  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * The name of the catalog database that contains the function.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The Java class that contains the function code.
   *
   * @public
   */
  ClassName?: string | undefined;

  /**
   * The owner of the function.
   *
   * @public
   */
  OwnerName?: string | undefined;

  /**
   * The type of the function.
   *
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * The owner type.
   *
   * @public
   */
  OwnerType?: PrincipalType | undefined;

  /**
   * The time at which the function was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The resource URIs for the function.
   *
   * @public
   */
  ResourceUris?: ResourceUri[] | undefined;

  /**
   * The ID of the Data Catalog in which the function resides.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionResponse {
  /**
   * The requested function definition.
   *
   * @public
   */
  UserDefinedFunction?: UserDefinedFunction | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsRequest {
  /**
   * The ID of the Data Catalog where the functions to be retrieved are located. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the catalog database where the functions are located. If none is provided, functions from all the databases across the catalog will be returned.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * An optional function-name pattern string that filters the function definitions returned.
   *
   * @public
   */
  Pattern: string | undefined;

  /**
   * An optional function-type pattern string that filters the function definitions returned from Amazon Redshift Federated Permissions Catalog.
   *
   * Specify a value of `REGULAR_FUNCTION` or `STORED_PROCEDURE`. The `STORED_PROCEDURE` function type is only compatible with Amazon Redshift Federated Permissions Catalog.
   *
   * @public
   */
  FunctionType?: FunctionType | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of functions to return in one response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsResponse {
  /**
   * A list of requested function definitions.
   *
   * @public
   */
  UserDefinedFunctions?: UserDefinedFunction[] | undefined;

  /**
   * A continuation token, if the list of functions returned does not include the last requested function.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * The name of the workflow to retrieve.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether to include a graph when returning the workflow resource metadata.
   *
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * The resource metadata for the workflow.
   *
   * @public
   */
  Workflow?: Workflow | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * Name of the workflow being run.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the workflow run.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * Specifies whether to include the workflow graph in response or not.
   *
   * @public
   */
  IncludeGraph?: boolean | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * The requested workflow run metadata.
   *
   * @public
   */
  Run?: WorkflowRun | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesRequest {
  /**
   * Name of the workflow which was run.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the workflow run whose run properties should be returned.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesResponse {
  /**
   * The workflow run properties which were set during the specified run.
   *
   * @public
   */
  RunProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunsRequest {
  /**
   * Name of the workflow whose metadata of runs should be returned.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether to include the workflow graph in response or not.
   *
   * @public
   */
  IncludeGraph?: boolean | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of workflow runs to be included in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunsResponse {
  /**
   * A list of workflow run metadata objects.
   *
   * @public
   */
  Runs?: WorkflowRun[] | undefined;

  /**
   * A continuation token, if not all requested workflow runs have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportCatalogToGlueRequest {
  /**
   * The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.
   *
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
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetTypesResponse {
  /**
   * The list of asset type items.
   *
   * @public
   */
  Items?: AssetTypeItem[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlueprintsRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the list by an Amazon Web Services resource tag.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListBlueprintsResponse {
  /**
   * List of names of blueprints in the account.
   *
   * @public
   */
  Blueprints?: string[] | undefined;

  /**
   * A continuation token, if not all blueprint names have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsRequest {
  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsResponse {
  /**
   * A list of column statistics task run IDs.
   *
   * @public
   */
  ColumnStatisticsTaskRunIds?: string[] | undefined;

  /**
   * A continuation token, if not all task run IDs have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionTypesRequest {
  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a variant of a connection type in Glue. Connection type variants provide specific configurations and behaviors for different implementations of the same general connection type.
 *
 * @public
 */
export interface ConnectionTypeVariant {
  /**
   * The unique identifier for the connection type variant. This name is used internally to identify the specific variant of a connection type.
   *
   * @public
   */
  ConnectionTypeVariantName?: string | undefined;

  /**
   * The human-readable name for the connection type variant that is displayed in the Glue console.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A detailed description of the connection type variant, including its purpose, use cases, and any specific configuration requirements.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URL of the logo associated with a connection type variant.
   *
   * @public
   */
  LogoUrl?: string | undefined;
}

/**
 * Brief information about a supported connection type returned by the `ListConnectionTypes` API.
 *
 * @public
 */
export interface ConnectionTypeBrief {
  /**
   * The name of the connection type.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * The human-readable name for the connection type that is displayed in the Glue console.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The name of the vendor or provider that created or maintains this connection type.
   *
   * @public
   */
  Vendor?: string | undefined;

  /**
   * A description of the connection type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of categories that this connection type belongs to. Categories help users filter and find appropriate connection types based on their use cases.
   *
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * The supported authentication types, data interface types (compute environments), and data operations of the connector.
   *
   * @public
   */
  Capabilities?: Capabilities | undefined;

  /**
   * The URL of the logo associated with a connection type.
   *
   * @public
   */
  LogoUrl?: string | undefined;

  /**
   * A list of variants available for this connection type. Different variants may provide specialized configurations for specific use cases or implementations of the same general connection type.
   *
   * @public
   */
  ConnectionTypeVariants?: ConnectionTypeVariant[] | undefined;
}

/**
 * @public
 */
export interface ListConnectionTypesResponse {
  /**
   * A list of `ConnectionTypeBrief` objects containing brief information about the supported connection types.
   *
   * @public
   */
  ConnectionTypes?: ConnectionTypeBrief[] | undefined;

  /**
   * A continuation token, if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCrawlersRequest {
  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies to return only these tagged resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCrawlersResponse {
  /**
   * The names of all crawlers in the account, or the crawlers with the specified tags.
   *
   * @public
   */
  CrawlerNames?: string[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last metric available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.
 *
 * @public
 */
export interface CrawlsFilter {
  /**
   * A key used to filter the crawler runs for a specified crawler. Valid values for each of the field names are:
   *
   * - `CRAWL_ID`: A string representing the UUID identifier for a crawl.
   * - `STATE`: A string representing the state of the crawl.
   * - `START_TIME` and `END_TIME`: The epoch timestamp in milliseconds.
   * - `DPU_HOUR`: The number of data processing unit (DPU) hours used for the crawl.
   *
   * @public
   */
  FieldName?: FieldName | undefined;

  /**
   * A defined comparator that operates on the value. The available operators are:
   *
   * - `GT`: Greater than.
   * - `GE`: Greater than or equal to.
   * - `LT`: Less than.
   * - `LE`: Less than or equal to.
   * - `EQ`: Equal to.
   * - `NE`: Not equal to.
   *
   * @public
   */
  FilterOperator?: FilterOperator | undefined;

  /**
   * The value provided for comparison on the crawl field.
   *
   * @public
   */
  FieldValue?: string | undefined;
}

/**
 * @public
 */
export interface ListCrawlsRequest {
  /**
   * The name of the crawler whose runs you want to retrieve.
   *
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * The maximum number of results to return. The default is 20, and maximum is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the crawls by the criteria you specify in a list of `CrawlsFilter` objects.
   *
   * @public
   */
  Filters?: CrawlsFilter[] | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the information for a run of a crawler.
 *
 * @public
 */
export interface CrawlerHistory {
  /**
   * A UUID identifier for each crawl.
   *
   * @public
   */
  CrawlId?: string | undefined;

  /**
   * The state of the crawl.
   *
   * @public
   */
  State?: CrawlerHistoryState | undefined;

  /**
   * The date and time on which the crawl started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time on which the crawl ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.
   *
   * @public
   */
  Summary?: string | undefined;

  /**
   * If an error occurred, the error message associated with the crawl.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The log group associated with the crawl.
   *
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * The log stream associated with the crawl.
   *
   * @public
   */
  LogStream?: string | undefined;

  /**
   * The prefix for a CloudWatch message about this crawl.
   *
   * @public
   */
  MessagePrefix?: string | undefined;

  /**
   * The number of data processing units (DPU) used in hours for the crawl.
   *
   * @public
   */
  DPUHour?: number | undefined;
}

/**
 * @public
 */
export interface ListCrawlsResponse {
  /**
   * A list of `CrawlerHistory` objects representing the crawl runs that meet your criteria.
   *
   * @public
   */
  Crawls?: CrawlerHistory[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomEntityTypesRequest {
  /**
   * A paginated token to offset the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A list of key-value pair tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCustomEntityTypesResponse {
  /**
   * A list of `CustomEntityType` objects representing custom patterns.
   *
   * @public
   */
  CustomEntityTypes?: CustomEntityType[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Criteria used to return data quality results.
 *
 * @public
 */
export interface DataQualityResultFilterCriteria {
  /**
   * Filter results by the specified data source. For example, retrieving all results for an Glue table.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * Filter results by the specified job name.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * Filter results by the specified job run ID.
   *
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * Filter results by runs that started after this time.
   *
   * @public
   */
  StartedAfter?: Date | undefined;

  /**
   * Filter results by runs that started before this time.
   *
   * @public
   */
  StartedBefore?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsRequest {
  /**
   * The filter criteria.
   *
   * @public
   */
  Filter?: DataQualityResultFilterCriteria | undefined;

  /**
   * A paginated token to offset the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a data quality result.
 *
 * @public
 */
export interface DataQualityResultDescription {
  /**
   * The unique result ID for this data quality result.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The table name associated with the data quality result.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The job name associated with the data quality result.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The job run ID associated with the data quality result.
   *
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * The time that the run started for this data quality result.
   *
   * @public
   */
  StartedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsResponse {
  /**
   * A list of `DataQualityResultDescription` objects.
   *
   * @public
   */
  Results: DataQualityResultDescription[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the criteria used to filter the data quality results returned by `ListDataQualityResultsV2`.
 *
 * @public
 */
export interface DataQualityResultsV2FilterCriteria {
  /**
   * The data source used to filter the results. For example, you can retrieve all results for an Glue table. `DatabaseName` and `TableName` are required. If you omit `CatalogId`, the catalog of the calling account is used.
   *
   * When you filter by data source, a page of results can be empty but still include a `NextToken`. Keep requesting pages until `NextToken` is absent.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The time after which to include published results.
   *
   * @public
   */
  PublishedAfter?: Date | undefined;

  /**
   * The time before which to include published results.
   *
   * @public
   */
  PublishedBefore?: Date | undefined;

  /**
   * The platform dimensions to filter results by.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * The evaluation context to filter results by.
   *
   * @public
   */
  EvaluationContext?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsV2Request {
  /**
   * The filter criteria.
   *
   * @public
   */
  Filter?: DataQualityResultsV2FilterCriteria | undefined;

  /**
   * A pagination token to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return. If you don't specify a value, the operation uses the default number of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a data quality result returned by `ListDataQualityResultsV2`.
 *
 * @public
 */
export interface DataQualityResultsV2Description {
  /**
   * The unique result ID for this data quality result.
   *
   * @public
   */
  ResultId?: string | undefined;

  /**
   * The table associated with the data quality result, if any.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The date and time when this data quality result was published.
   *
   * @public
   */
  ResultPublishedOn?: Date | undefined;

  /**
   * A map of platform-specific identifiers, such as cluster, application, workgroup, or project IDs, that identify where the data quality evaluation ran.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * The evaluation context for the data quality result. This value identifies a specific data quality result, or a series of related results, within a run.
   *
   * @public
   */
  EvaluationContext?: string | undefined;

  /**
   * A map of user-provided descriptors that add contextual metadata and configuration to the data quality result, such as database name, table name, team, or environment.
   *
   * @public
   */
  Descriptors?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDataQualityResultsV2Response {
  /**
   * A list of `DataQualityResultsV2Description` objects.
   *
   * @public
   */
  Results: DataQualityResultsV2Description[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter for listing data quality recommendation runs.
 *
 * @public
 */
export interface DataQualityRuleRecommendationRunFilter {
  /**
   * Filter based on a specified data source (Glue table).
   *
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * Filter based on time for results started before provided time.
   *
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * Filter based on time for results started after provided time.
   *
   * @public
   */
  StartedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsRequest {
  /**
   * The filter criteria.
   *
   * @public
   */
  Filter?: DataQualityRuleRecommendationRunFilter | undefined;

  /**
   * A paginated token to offset the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A list of key-value pair tags to filter recommendation runs.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Describes the result of a data quality rule recommendation run.
 *
 * @public
 */
export interface DataQualityRuleRecommendationRunDescription {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The status for this run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The date and time when this run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The data source (Glue table) associated with the recommendation run.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The name of the ruleset that was created by the recommendation run.
   *
   * @public
   */
  CreatedRulesetName?: string | undefined;

  /**
   * The mode that Glue Data Quality uses to recommend rules.
   *
   * The default is `BASIC`.
   *
   * @public
   */
  RecommendationMode?: RecommendationMode | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsResponse {
  /**
   * A list of `DataQualityRuleRecommendationRunDescription` objects.
   *
   * @public
   */
  Runs?: DataQualityRuleRecommendationRunDescription[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter criteria.
 *
 * @public
 */
export interface DataQualityRulesetEvaluationRunFilter {
  /**
   * Filter based on a data source (an Glue table) associated with the run.
   *
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * Filter results by runs that started before this time.
   *
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * Filter results by runs that started after this time.
   *
   * @public
   */
  StartedAfter?: Date | undefined;

  /**
   * Filter results by the name of the ruleset.
   *
   * @public
   */
  RulesetName?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsRequest {
  /**
   * The filter criteria.
   *
   * @public
   */
  Filter?: DataQualityRulesetEvaluationRunFilter | undefined;

  /**
   * A paginated token to offset the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the result of a data quality ruleset evaluation run.
 *
 * @public
 */
export interface DataQualityRulesetEvaluationRunDescription {
  /**
   * The unique run identifier associated with this run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The status for this run.
   *
   * @public
   */
  Status?: TaskStatusType | undefined;

  /**
   * The date and time when the run started.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * The data source (an Glue table) associated with the run.
   *
   * @public
   */
  DataSource?: DataSource | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsResponse {
  /**
   * A list of `DataQualityRulesetEvaluationRunDescription` objects representing data quality ruleset runs.
   *
   * @public
   */
  Runs?: DataQualityRulesetEvaluationRunDescription[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The criteria used to filter data quality rulesets.
 *
 * @public
 */
export interface DataQualityRulesetFilterCriteria {
  /**
   * The name of the ruleset filter criteria.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the ruleset filter criteria.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Filter on rulesets created before this date.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter on rulesets created after this date.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter on rulesets last modified before this date.
   *
   * @public
   */
  LastModifiedBefore?: Date | undefined;

  /**
   * Filter on rulesets last modified after this date.
   *
   * @public
   */
  LastModifiedAfter?: Date | undefined;

  /**
   * The name and database name of the target table.
   *
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsRequest {
  /**
   * A paginated token to offset the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filter criteria.
   *
   * @public
   */
  Filter?: DataQualityRulesetFilterCriteria | undefined;

  /**
   * A list of key-value pair tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Describes a data quality ruleset returned by `GetDataQualityRuleset`.
 *
 * @public
 */
export interface DataQualityRulesetListDetails {
  /**
   * The name of the data quality ruleset.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the data quality ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the data quality ruleset was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The date and time the data quality ruleset was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;

  /**
   * An object representing an Glue table.
   *
   * @public
   */
  TargetTable?: DataQualityTargetTable | undefined;

  /**
   * When a ruleset was created from a recommendation run, this run ID is generated to link the two together.
   *
   * @public
   */
  RecommendationRunId?: string | undefined;

  /**
   * The number of rules in the ruleset.
   *
   * @public
   */
  RuleCount?: number | undefined;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsResponse {
  /**
   * A paginated list of rulesets for the specified list of Glue tables.
   *
   * @public
   */
  Rulesets?: DataQualityRulesetListDetails[] | undefined;

  /**
   * A pagination token, if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A timestamp filter.
 *
 * @public
 */
export interface TimestampFilter {
  /**
   * The timestamp before which statistics should be included in the results.
   *
   * @public
   */
  RecordedBefore?: Date | undefined;

  /**
   * The timestamp after which statistics should be included in the results.
   *
   * @public
   */
  RecordedAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsRequest {
  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The Profile ID.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * A timestamp filter.
   *
   * @public
   */
  TimestampFilter?: TimestampFilter | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsResponse {
  /**
   * A list of `StatisticAnnotation` applied to the Statistic
   *
   * @public
   */
  Annotations?: StatisticAnnotation[] | undefined;

  /**
   * A pagination token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsRequest {
  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The Profile ID.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * A timestamp filter.
   *
   * @public
   */
  TimestampFilter?: TimestampFilter | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A pagination token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A run identifier.
 *
 * @public
 */
export interface RunIdentifier {
  /**
   * The Run ID.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The Job Run ID.
   *
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * Summary information about a statistic.
 *
 * @public
 */
export interface StatisticSummary {
  /**
   * The Statistic ID.
   *
   * @public
   */
  StatisticId?: string | undefined;

  /**
   * The Profile ID.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The Run Identifier
   *
   * @public
   */
  RunIdentifier?: RunIdentifier | undefined;

  /**
   * The name of the statistic.
   *
   * @public
   */
  StatisticName?: string | undefined;

  /**
   * The value of the statistic.
   *
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * The distribution value for the statistic.
   *
   * @public
   */
  DistributionValue?: DistributionData | undefined;

  /**
   * The evaluation level of the statistic. Possible values: `Dataset`, `Column`, `Multicolumn`.
   *
   * @public
   */
  EvaluationLevel?: StatisticEvaluationLevel | undefined;

  /**
   * The list of columns referenced by the statistic.
   *
   * @public
   */
  ColumnsReferenced?: string[] | undefined;

  /**
   * The list of datasets referenced by the statistic.
   *
   * @public
   */
  ReferencedDatasets?: string[] | undefined;

  /**
   * A `StatisticPropertiesMap`, which contains a `NameString` and `DescriptionString`
   *
   * @public
   */
  StatisticProperties?: Record<string, string> | undefined;

  /**
   * The timestamp when the statistic was recorded.
   *
   * @public
   */
  RecordedOn?: Date | undefined;

  /**
   * The inclusion annotation for the statistic.
   *
   * @public
   */
  InclusionAnnotation?: TimestampedInclusionAnnotation | undefined;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsResponse {
  /**
   * A `StatisticSummaryList`.
   *
   * @public
   */
  Statistics?: StatisticSummary[] | undefined;

  /**
   * A pagination token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEndpointsRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies to return only these tagged resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDevEndpointsResponse {
  /**
   * The names of all the `DevEndpoint`s in the account, or the `DevEndpoint`s with the specified tags.
   *
   * @public
   */
  DevEndpointNames?: string[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last metric available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * A name for the connection that has required credentials to query any connection type.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Name of the parent entity for which you want to list the children. This parameter takes a fully-qualified path of the entity in order to list the child entities.
   *
   * @public
   */
  ParentEntityName?: string | undefined;

  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The API version of the SaaS connector.
   *
   * @public
   */
  DataStoreApiVersion?: string | undefined;
}

/**
 * An entity supported by a given `ConnectionType`.
 *
 * @public
 */
export interface Entity {
  /**
   * The name of the entity.
   *
   * @public
   */
  EntityName?: string | undefined;

  /**
   * Label used for the entity.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * A Boolean value which helps to determine whether there are sub objects that can be listed.
   *
   * @public
   */
  IsParentEntity?: boolean | undefined;

  /**
   * A description of the entity.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of entities that are present in the response. This value depends on the source connection. For example this is `SObjects` for Salesforce and `databases` or `schemas` or `tables` for sources like Amazon Redshift.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * An optional map of keys which may be returned for an entity by a connector.
   *
   * @public
   */
  CustomProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * A list of `Entity` objects.
   *
   * @public
   */
  Entities?: Entity[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFormTypesRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of a form type.
 *
 * @public
 */
export interface FormTypeItem {
  /**
   * The identifier of the form type.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the form type.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListFormTypesResponse {
  /**
   * The list of form type items.
   *
   * @public
   */
  Items: FormTypeItem[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossariesRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of a business glossary.
 *
 * @public
 */
export interface GlossaryItem {
  /**
   * The unique identifier of the glossary.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the glossary.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the glossary.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossariesResponse {
  /**
   * The list of glossary items.
   *
   * @public
   */
  Items?: GlossaryItem[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossaryTermsRequest {
  /**
   * The unique identifier of the glossary whose terms to list.
   *
   * @public
   */
  GlossaryIdentifier: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of a glossary term.
 *
 * @public
 */
export interface GlossaryTermItem {
  /**
   * The unique identifier of the glossary term.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the glossary term.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The short description of the glossary term.
   *
   * @public
   */
  ShortDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListGlossaryTermsResponse {
  /**
   * The list of glossary term items.
   *
   * @public
   */
  Items?: GlossaryTermItem[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter for integration resource properties.
 *
 * @public
 */
export interface IntegrationResourcePropertyFilter {
  /**
   * The name of the filter. Supported filter keys are `SourceArn` and `TargetArn`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of filter values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListIntegrationResourcePropertiesRequest {
  /**
   * This is the pagination token for next page, initial value is `null`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of filters, supported filter Key is `SourceArn` and `TargetArn`.
   *
   * @public
   */
  Filters?: IntegrationResourcePropertyFilter[] | undefined;

  /**
   * This is total number of items to be evaluated.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * A structure representing an integration resource property.
 *
 * @public
 */
export interface IntegrationResourceProperty {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource ARN created through this create API. The format is something like arn:aws:glue:<region>:<account_id>:integrationresourceproperty/*
   *
   * @public
   */
  ResourcePropertyArn?: string | undefined;

  /**
   * The resource properties associated with the integration source.
   *
   * @public
   */
  SourceProcessingProperties?: SourceProcessingProperties | undefined;

  /**
   * The resource properties associated with the integration target.
   *
   * @public
   */
  TargetProcessingProperties?: TargetProcessingProperties | undefined;
}

/**
 * @public
 */
export interface ListIntegrationResourcePropertiesResponse {
  /**
   * A list of integration resource property meeting the filter criteria.
   *
   * @public
   */
  IntegrationResourcePropertyList?: IntegrationResourceProperty[] | undefined;

  /**
   * This is the pagination token for the next page.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A key-value filter used to narrow the list of integration table properties returned by ListIntegrationTableProperties. Specify a filter key and one or more values to match.
 *
 * @public
 */
export interface IntegrationTablePropertiesFilter {
  /**
   * The name of the filter. Supported filter keys are `SourceArn`, `TargetArn`, `SourceTableName`, and `TargetTableName`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of filter values.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListIntegrationTablePropertiesRequest {
  /**
   * The pagination token for the next page of results. The initial value is `null`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * A list of filters. Supported filter keys are `SourceArn`, `TargetArn`, `SourceTableName`, and `TargetTableName`.
   *
   * @public
   */
  Filters?: IntegrationTablePropertiesFilter[] | undefined;

  /**
   * The maximum number of records to return in the response.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * The properties of a single integration table, including the resource ARN, the table name, and the source or target table configuration.
 *
 * @public
 */
export interface IntegrationTableProperties {
  /**
   * The connection ARN of the source, or the database ARN of the target.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The name of the source table to be replicated.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * A structure for the source table configuration.
   *
   * @public
   */
  SourceTableConfig?: SourceTableConfig | undefined;

  /**
   * A structure for the target table configuration.
   *
   * @public
   */
  TargetTableConfig?: TargetTableConfig | undefined;
}

/**
 * @public
 */
export interface ListIntegrationTablePropertiesResponse {
  /**
   * A list of integration table properties meeting the filter criteria.
   *
   * @public
   */
  IntegrationTablePropertiesList?: IntegrationTableProperties[] | undefined;

  /**
   * The pagination token for the next page. Returns `null` if there are no more results.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListIterableFormsRequest {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * The name of the iterable form to list items from.
   *
   * @public
   */
  IterableFormName: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of an item in an iterable form.
 *
 * @public
 */
export interface IterableFormListItem {
  /**
   * The unique identifier of the item.
   *
   * @public
   */
  ItemId?: string | undefined;

  /**
   * The name of the item.
   *
   * @public
   */
  ItemName?: string | undefined;

  /**
   * The description of the item.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifiers of the glossary terms associated with the item.
   *
   * @public
   */
  GlossaryTerms?: string[] | undefined;
}

/**
 * @public
 */
export interface ListIterableFormsResponse {
  /**
   * The list of iterable form items.
   *
   * @public
   */
  Items?: IterableFormListItem[] | undefined;

  /**
   * A continuation token, present if the current segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies to return only these tagged resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * The names of all jobs in the account, or the jobs with the specified tags.
   *
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last metric available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMaterializedViewRefreshTaskRunsRequest {
  /**
   * The ID of the Data Catalog where the table resides. If none is supplied, the account ID is used by default.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The database where the table resides.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the materialized view.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMaterializedViewRefreshTaskRunsResponse {
  /**
   * The results of the ListMaterializedViewRefreshTaskRuns action.
   *
   * @public
   */
  MaterializedViewRefreshTaskRuns?: MaterializedViewRefreshTaskRun[] | undefined;

  /**
   * A continuation token, if not all task run IDs have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMLTransformsRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A `TransformFilterCriteria` used to filter the machine learning transforms.
   *
   * @public
   */
  Filter?: TransformFilterCriteria | undefined;

  /**
   * A `TransformSortCriteria` used to sort the machine learning transforms.
   *
   * @public
   */
  Sort?: TransformSortCriteria | undefined;

  /**
   * Specifies to return only these tagged resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMLTransformsResponse {
  /**
   * The identifiers of all the machine learning transforms in the account, or the machine learning transforms with the specified tags.
   *
   * @public
   */
  TransformIds: string[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last metric available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesInput {
  /**
   * Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure containing the details for a registry.
 *
 * @public
 */
export interface RegistryListItem {
  /**
   * The name of the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  RegistryArn?: string | undefined;

  /**
   * A description of the registry.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the registry.
   *
   * @public
   */
  Status?: RegistryStatus | undefined;

  /**
   * The data the registry was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The date the registry was updated.
   *
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * An array of `RegistryDetailedListItem` objects containing minimal details of each registry.
   *
   * @public
   */
  Registries?: RegistryListItem[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
   *
   * @public
   */
  RegistryId?: RegistryId | undefined;

  /**
   * Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that contains minimal details for a schema.
 *
 * @public
 */
export interface SchemaListItem {
  /**
   * the name of the registry where the schema resides.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * A description for the schema.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the schema.
   *
   * @public
   */
  SchemaStatus?: SchemaStatus | undefined;

  /**
   * The date and time that a schema was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;

  /**
   * The date and time that a schema was updated.
   *
   * @public
   */
  UpdatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * An array of `SchemaListItem` objects containing details of each schema.
   *
   * @public
   */
  Schemas?: SchemaListItem[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsInput {
  /**
   * This is a wrapper structure to contain schema identity fields. The structure contains:
   *
   * - SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   * - SchemaId$SchemaName: The name of the schema. Either `SchemaArn` or `SchemaName` and `RegistryName` has to be provided.
   *
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object containing the details about a schema version.
 *
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * The Amazon Resource Name (ARN) of the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The unique identifier of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The status of the schema version.
   *
   * @public
   */
  Status?: SchemaVersionStatus | undefined;

  /**
   * The date and time the schema version was created.
   *
   * @public
   */
  CreatedTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * An array of `SchemaVersionList` objects containing details of each schema version.
   *
   * @public
   */
  Schemas?: SchemaVersionListItem[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * The token for the next set of results, or null if there are no more result.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Tags belonging to the session.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The origin of the request.
   *
   * @public
   */
  RequestOrigin?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * Returns the ID of the session.
   *
   * @public
   */
  Ids?: string[] | undefined;

  /**
   * Returns the session object.
   *
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * The token for the next set of results, or null if there are no more result.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsRequest {
  /**
   * The Session ID of the statements.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The origin of the request to list statements.
   *
   * @public
   */
  RequestOrigin?: string | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsResponse {
  /**
   * Returns the list of statements.
   *
   * @public
   */
  Statements?: Statement[] | undefined;

  /**
   * A continuation token, if not all statements have yet been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsRequest {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The type of table optimizer.
   *
   * @public
   */
  Type: TableOptimizerType | undefined;

  /**
   * The maximum number of optimizer runs to return on each call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsResponse {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database in the catalog in which the table resides.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * A continuation token for paginating the returned list of optimizer runs, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the optimizer runs associated with a table.
   *
   * @public
   */
  TableOptimizerRuns?: TableOptimizerRun[] | undefined;
}

/**
 * @public
 */
export interface ListTriggersRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the job for which to retrieve triggers. The trigger that can start this job is returned. If there is no such trigger, all triggers are returned.
   *
   * @public
   */
  DependentJobName?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies to return only these tagged resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTriggersResponse {
  /**
   * The names of all triggers in the account, or the triggers with the specified tags.
   *
   * @public
   */
  TriggerNames?: string[] | undefined;

  /**
   * A continuation token, if the returned list does not contain the last metric available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsageProfilesRequest {
  /**
   * A continuation token, included if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of usage profiles to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes an Glue usage profile.
 *
 * @public
 */
export interface UsageProfileDefinition {
  /**
   * The name of the usage profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the usage profile.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time when the usage profile was created.
   *
   * @public
   */
  CreatedOn?: Date | undefined;

  /**
   * The date and time when the usage profile was last modified.
   *
   * @public
   */
  LastModifiedOn?: Date | undefined;
}

/**
 * @public
 */
export interface ListUsageProfilesResponse {
  /**
   * A list of usage profile (`UsageProfileDefinition`) objects.
   *
   * @public
   */
  Profiles?: UsageProfileDefinition[] | undefined;

  /**
   * A continuation token, present if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * A continuation token, if this is a continuation request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of a list to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * List of names of workflows in the account.
   *
   * @public
   */
  Workflows?: string[] | undefined;

  /**
   * A continuation token, if not all workflow names have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) for the integration.
   *
   * @public
   */
  IntegrationIdentifier: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Selects source tables for the integration using Maxwell filter syntax.
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * The configuration settings for the integration. Currently, only the RefreshInterval can be modified.
   *
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;

  /**
   * A unique name for an integration in Glue.
   *
   * @public
   */
  IntegrationName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationResponse {
  /**
   * The ARN of the source for the integration.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The ARN of the target for the integration.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A unique name for an integration in Glue.
   *
   * @public
   */
  IntegrationName: string | undefined;

  /**
   * A description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the integration.
   *
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * The ARN of a KMS key used for encrypting the channel.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information for encryption.
   *
   * @public
   */
  AdditionalEncryptionContext?: Record<string, string> | undefined;

  /**
   * Metadata assigned to the resource consisting of a list of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status of the integration being modified.
   *
   * The possible statuses are:
   *
   * - CREATING: The integration is being created.
   * - ACTIVE: The integration creation succeeds.
   * - MODIFYING: The integration is being modified.
   * - FAILED: The integration creation fails.
   * - DELETING: The integration is deleted.
   * - SYNCING: The integration is synchronizing.
   * - NEEDS_ATTENTION: The integration needs attention, such as synchronization.
   *
   * @public
   */
  Status: IntegrationStatus | undefined;

  /**
   * The time when the integration was created, in UTC.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * A list of errors associated with the integration modification.
   *
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * Selects source tables for the integration using Maxwell filter syntax.
   *
   * @public
   */
  DataFilter?: string | undefined;

  /**
   * The updated configuration settings for the integration.
   *
   * @public
   */
  IntegrationConfig?: IntegrationConfig | undefined;
}

/**
 * The run configuration for a data quality result.
 *
 * @public
 */
export interface DataQualityConfigurationV2 {
  /**
   * Whether observations are enabled for the run. Valid values are:
   *
   * - `ALL`
   * - `NONE`
   *
   * @public
   */
  ObservationsEnabled?: ObservationConfiguration | undefined;

  /**
   * The observation mode for the run. Valid values are:
   *
   * - `SCHEDULED`
   * - `FIXED`
   *
   * @public
   */
  ObservationMode?: ObservationMode | undefined;
}

/**
 * @public
 */
export interface DataQualityTelemetry {
  VcpuHours?: number | undefined;
  FlagsEnabled?: Record<string, string> | undefined;
  LibraryVersion?: string | undefined;
  SparkVersion?: string | undefined;
  HostRuntimeVersion?: string | undefined;
  Engine?: DataQualityEngine | undefined;
}

/**
 * @public
 */
export interface PublishDataQualityResultV2Request {
  /**
   * The dimensions for the result.
   *
   * @public
   */
  Dimensions: Record<string, string> | undefined;

  /**
   * The tags for the result.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The time execution started for the result.
   *
   * @public
   */
  ExecutionStartedOn?: Date | undefined;

  /**
   * The time execution completed for the result.
   *
   * @public
   */
  ExecutionCompletedOn?: Date | undefined;

  /**
   * The score for the result.
   *
   * @public
   */
  Score: number | undefined;

  /**
   * The rule level results.
   *
   * @public
   */
  RuleResults: DataQualityRuleResult[] | undefined;

  /**
   * The analyzer level results.
   *
   * @public
   */
  AnalyzerResults?: DataQualityAnalyzerResult[] | undefined;

  /**
   * The observations for the result.
   *
   * @public
   */
  Observations?: DataQualityObservation[] | undefined;

  /**
   * The aggregated metrics for the result.
   *
   * @public
   */
  AggregatedMetrics?: DataQualityAggregatedMetrics | undefined;

  /**
   * The statistics for the result.
   *
   * @public
   */
  Statistics?: StatisticSummary[] | undefined;

  /**
   * The run configuration for the result.
   *
   * @public
   */
  RunConfiguration?: DataQualityConfigurationV2 | undefined;

  /**
   * The client token for the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The evaluation context for the result.
   *
   * @public
   */
  EvaluationContext: string | undefined;

  /**
   * The descriptors for the result.
   *
   * @public
   */
  Descriptors?: Record<string, string> | undefined;

  /**
   * The ruleset name for the result.
   *
   * @public
   */
  RulesetName?: string | undefined;

  /**
   * The security configuration for the result.
   *
   * @public
   */
  DataQualitySecurityConfiguration?: string | undefined;

  Telemetry?: DataQualityTelemetry | undefined;
}

/**
 * @public
 */
export interface PublishDataQualityResultV2Response {
  /**
   * The ID of the result.
   *
   * @public
   */
  ResultId: string | undefined;
}

/**
 * @public
 */
export interface PutAssetRequest {
  /**
   * The identifier of the asset type for the asset.
   *
   * @public
   */
  AssetTypeId: string | undefined;

  /**
   * The unique identifier of the asset. If an asset with this identifier already exists, it is updated.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the asset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The forms to set on the asset, keyed by form name. Each entry specifies the form type and its JSON content.
   *
   * @public
   */
  Forms: Record<string, AssetFormEntry> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetResponse {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the asset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp at which the asset was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The forms attached to the asset, keyed by form name.
   *
   * @public
   */
  Forms?: Record<string, AssetFormEntry> | undefined;
}

/**
 * @public
 */
export interface PutAssetTypeRequest {
  /**
   * The name of the asset type.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The forms that make up the asset type, keyed by form name. Each entry references the form type that defines the form's schema.
   *
   * @public
   */
  Forms: Record<string, AssetTypeFormReference> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetTypeResponse {
  /**
   * The identifier of the asset type.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the asset type.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The forms that make up the asset type, keyed by form name.
   *
   * @public
   */
  Forms?: Record<string, AssetTypeFormReference> | undefined;
}

/**
 * @public
 */
export interface PutAttachmentRequest {
  /**
   * The unique identifier of the asset to attach the form to.
   *
   * @public
   */
  AssetIdentifier: string | undefined;

  /**
   * The name of the iterable form. When specified along with `itemIdentifier`, the attachment targets an item within the iterable form rather than the asset itself.
   *
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * The identifier of the item within the iterable form. Required when `iterableFormName` is specified.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * The name of the attachment.
   *
   * @public
   */
  AttachmentName: string | undefined;

  /**
   * The JSON content of the form, conforming to the schema of the specified form type.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The identifier of the form type for this attachment.
   *
   * @public
   */
  FormTypeId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAttachmentResponse {
  /**
   * The unique identifier of the asset.
   *
   * @public
   */
  AssetIdentifier?: string | undefined;

  /**
   * The name of the iterable form, if the attachment targets an item.
   *
   * @public
   */
  IterableFormName?: string | undefined;

  /**
   * The identifier of the item within the iterable form, if applicable.
   *
   * @public
   */
  ItemIdentifier?: string | undefined;

  /**
   * The name of the attachment.
   *
   * @public
   */
  AttachmentName?: string | undefined;

  /**
   * The identifier of the form type for this attachment.
   *
   * @public
   */
  FormTypeId?: string | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * The ID of the Data Catalog to set the security configuration for. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The security configuration to set.
   *
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
export interface PutDataCatalogExportConfigurationInput {
  /**
   * The export setting for the data catalog. Specify `ENABLED` to start exporting catalog metadata to S3 Tables, or `DISABLED` to stop exporting. This field is required.
   *
   * @public
   */
  ExportSetting: ExportSetting | undefined;

  /**
   * The encryption configuration for the exported data. If not specified, the default encryption settings are used.
   *
   * @public
   */
  EncryptionConfiguration?: ExportEncryptionConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * The export configuration returned by the `PutDataCatalogExportConfiguration` operation.
 *
 * @public
 */
export interface PutDataCatalogExportConfigurationOutput {
  /**
   * The export setting for the data catalog.
   *
   * @public
   */
  ExportSetting?: ExportSetting | undefined;

  /**
   * The encryption configuration for the exported data.
   *
   * @public
   */
  EncryptionConfiguration?: ExportEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface PutDataQualityProfileAnnotationRequest {
  /**
   * The ID of the data quality monitoring profile to annotate.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The inclusion annotation value to apply to the profile.
   *
   * @public
   */
  InclusionAnnotation: InclusionAnnotationValue | undefined;
}

/**
 * Left blank.
 *
 * @public
 */
export interface PutDataQualityProfileAnnotationResponse {}

/**
 * @public
 */
export interface PutFormTypeRequest {
  /**
   * The name of the form type. Must start with an uppercase letter.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Smithy IDL schema definition for the form type.
   *
   * @public
   */
  Schema: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFormTypeResponse {
  /**
   * The identifier of the form type.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the form type.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Smithy IDL schema of the form type.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * Contains the policy document to set, in JSON format.
   *
   * @public
   */
  PolicyInJson: string | undefined;

  /**
   * Do not use. For internal use only.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The hash value returned when the previous policy was set using `PutResourcePolicy`. Its purpose is to prevent concurrent modifications of a policy. Do not use this parameter if no previous policy has been set.
   *
   * @public
   */
  PolicyHashCondition?: string | undefined;

  /**
   * A value of `MUST_EXIST` is used to update a policy. A value of `NOT_EXIST` is used to create a new policy. If a value of `NONE` or a null value is used, the call does not depend on the existence of a policy.
   *
   * @public
   */
  PolicyExistsCondition?: ExistCondition | undefined;

  /**
   * If `'TRUE'`, indicates that you are using both methods to grant cross-account access to Data Catalog resources:
   *
   * - By directly updating the resource policy with `PutResourePolicy`
   * - By using the **Grant permissions** command on the Amazon Web Services Management Console.
   *
   * Must be set to `'TRUE'` if you have already used the Management Console to grant cross-account access, otherwise the call fails. Default is 'FALSE'.
   *
   * @public
   */
  EnableHybrid?: EnableHybridValues | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * A hash of the policy that has just been set. This must be included in a subsequent call that overwrites or updates this policy.
   *
   * @public
   */
  PolicyHash?: string | undefined;
}

/**
 * A structure containing a key value pair for metadata.
 *
 * @public
 */
export interface MetadataKeyValuePair {
  /**
   * A metadata key.
   *
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * A metadata key’s corresponding value.
   *
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataInput {
  /**
   * The unique ID for the schema.
   *
   * @public
   */
  SchemaId?: SchemaId | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber | undefined;

  /**
   * The unique version ID of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The metadata key's corresponding value.
   *
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataResponse {
  /**
   * The Amazon Resource Name (ARN) for the schema.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name for the schema.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The name for the registry.
   *
   * @public
   */
  RegistryName?: string | undefined;

  /**
   * The latest version of the schema.
   *
   * @public
   */
  LatestVersion?: boolean | undefined;

  /**
   * The version number of the schema.
   *
   * @public
   */
  VersionNumber?: number | undefined;

  /**
   * The unique version ID of the schema version.
   *
   * @public
   */
  SchemaVersionId?: string | undefined;

  /**
   * The metadata key.
   *
   * @public
   */
  MetadataKey?: string | undefined;

  /**
   * The value of the metadata key.
   *
   * @public
   */
  MetadataValue?: string | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesRequest {
  /**
   * Name of the workflow which was run.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the workflow run for which the run properties should be updated.
   *
   * @public
   */
  RunId: string | undefined;

  /**
   * The properties to put for the specified run.
   *
   * Run properties may be logged. Do not pass plaintext secrets as properties. Retrieve secrets from a Glue Connection, Amazon Web Services Secrets Manager or other secret management mechanism if you intend to use them within the workflow run.
   *
   * @public
   */
  RunProperties: Record<string, string> | undefined;
}
