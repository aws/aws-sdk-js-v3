// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  Action,
  AuditContext,
  BatchStopJobRunError,
  BatchStopJobRunSuccessfulSubmission,
  BatchUpdatePartitionFailureEntry,
  BatchUpdatePartitionRequestEntry,
  Blueprint,
  BlueprintRun,
  CatalogEntry,
  CatalogImportStatus,
  Classifier,
  CodeGenConfigurationNode,
  CodeGenEdge,
  CodeGenNode,
  ColumnError,
  ColumnRowFilter,
  ColumnStatistics,
  Connection,
  ConnectionInput,
  ConnectionsList,
  Crawler,
  CrawlerMetrics,
  CrawlerTargets,
  CreateCsvClassifierRequest,
  CreateGrokClassifierRequest,
  CreateJsonClassifierRequest,
  CreateXMLClassifierRequest,
  CustomEntityType,
  DatabaseInput,
  DataCatalogEncryptionSettings,
  DevEndpoint,
  EncryptionConfiguration,
  ErrorDetail,
  EventBatchingCondition,
  ExecutionProperty,
  GetConnectionsFilter,
  GlueTable,
  Job,
  JobCommand,
  LakeFormationConfiguration,
  LineageConfiguration,
  Location,
  MappingEntry,
  MetadataKeyValuePair,
  NotificationProperty,
  Partition,
  PartitionError,
  PartitionIndex,
  PartitionInput,
  PartitionValueList,
  PermissionType,
  Predicate,
  PropertyPredicate,
  RecrawlPolicy,
  RegistryId,
  SchemaChangePolicy,
  SchemaColumn,
  SchemaId,
  SchemaVersionNumber,
  Segment,
  SessionCommand,
  SortCriterion,
  TableError,
  TableInput,
  TableVersionError,
  TaskRunFilterCriteria,
  TaskRunSortCriteria,
  TransformEncryption,
  TransformFilterCriteria,
  TransformParameters,
  TransformSortCriteria,
  Trigger,
  UserDefinedFunctionInput,
  Workflow,
} from "./models_1";
import {
  Compatibility,
  Database,
  DataFormat,
  EnableHybridValues,
  EvaluationMetrics,
  ExistCondition,
  GluePolicy,
  JobBookmarkEntry,
  JobRun,
  Language,
  MetadataInfo,
  MLTransform,
  PartitionIndexDescriptor,
  RegistryListItem,
  RegistryStatus,
  ResourceShareType,
  SchemaDiffType,
  SchemaListItem,
  SchemaStatus,
  SchemaVersionErrorItem,
  SchemaVersionListItem,
  SchemaVersionStatus,
  SecurityConfiguration,
  Session,
  Statement,
  Table,
  TableVersion,
  TaskRun,
  TaskRunProperties,
  TaskStatusType,
  TransformStatusType,
  TriggerType,
  UnfilteredPartition,
  UserDefinedFunction,
  WorkerType,
  WorkflowRun,
} from "./models_2";

export interface BatchCreatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be created. Currently, this should be
   *       the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be created.</p>
   */
  PartitionInputList: PartitionInput[] | undefined;
}

export namespace BatchCreatePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreatePartitionRequest): any => ({
    ...obj,
  });
}

export interface BatchCreatePartitionResponse {
  /**
   * <p>The errors encountered when trying to create the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

export namespace BatchCreatePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreatePartitionResponse): any => ({
    ...obj,
  });
}

export interface BatchDeleteConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of names of the connections to delete.</p>
   */
  ConnectionNameList: string[] | undefined;
}

export namespace BatchDeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface BatchDeleteConnectionResponse {
  /**
   * <p>A list of names of the connection definitions that were
   *        successfully deleted.</p>
   */
  Succeeded?: string[];

  /**
   * <p>A map of the names of connections that were not successfully
   *        deleted to error details.</p>
   */
  Errors?: Record<string, ErrorDetail>;
}

export namespace BatchDeleteConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteConnectionResponse): any => ({
    ...obj,
  });
}

export interface BatchDeletePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partitions to be deleted.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be deleted.</p>
   */
  PartitionsToDelete: PartitionValueList[] | undefined;
}

export namespace BatchDeletePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeletePartitionRequest): any => ({
    ...obj,
  });
}

export interface BatchDeletePartitionResponse {
  /**
   * <p>The errors encountered when trying to delete the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

export namespace BatchDeletePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeletePartitionResponse): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the tables to delete reside. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the table to delete.</p>
   */
  TablesToDelete: string[] | undefined;

  /**
   * <p>The transaction ID at which to delete the table contents.</p>
   */
  TransactionId?: string;
}

export namespace BatchDeleteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteTableRequest): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableResponse {
  /**
   * <p>A list of errors encountered in attempting to delete the specified tables.</p>
   */
  Errors?: TableError[];
}

export namespace BatchDeleteTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteTableResponse): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the IDs of versions to be deleted. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionIds: string[] | undefined;
}

export namespace BatchDeleteTableVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteTableVersionRequest): any => ({
    ...obj,
  });
}

export interface BatchDeleteTableVersionResponse {
  /**
   * <p>A list of errors encountered while trying to delete
   *       the specified table versions.</p>
   */
  Errors?: TableVersionError[];
}

export namespace BatchDeleteTableVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteTableVersionResponse): any => ({
    ...obj,
  });
}

export interface BatchGetBlueprintsRequest {
  /**
   * <p>A list of blueprint names.</p>
   */
  Names: string[] | undefined;

  /**
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   */
  IncludeBlueprint?: boolean;

  /**
   * <p>Specifies whether or not to include the parameters, as a JSON string, for the blueprint in the response.</p>
   */
  IncludeParameterSpec?: boolean;
}

export namespace BatchGetBlueprintsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetBlueprintsRequest): any => ({
    ...obj,
  });
}

export interface BatchGetBlueprintsResponse {
  /**
   * <p>Returns a list of blueprint as a <code>Blueprints</code> object.</p>
   */
  Blueprints?: Blueprint[];

  /**
   * <p>Returns a list of <code>BlueprintNames</code> that were not found.</p>
   */
  MissingBlueprints?: string[];
}

export namespace BatchGetBlueprintsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetBlueprintsResponse): any => ({
    ...obj,
  });
}

export interface BatchGetCrawlersRequest {
  /**
   * <p>A list of crawler names, which might be the names returned from the
   *         <code>ListCrawlers</code> operation.</p>
   */
  CrawlerNames: string[] | undefined;
}

export namespace BatchGetCrawlersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCrawlersRequest): any => ({
    ...obj,
  });
}

export interface BatchGetCrawlersResponse {
  /**
   * <p>A list of crawler definitions.</p>
   */
  Crawlers?: Crawler[];

  /**
   * <p>A list of names of crawlers that were not found.</p>
   */
  CrawlersNotFound?: string[];
}

export namespace BatchGetCrawlersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCrawlersResponse): any => ({
    ...obj,
  });
}

export interface BatchGetCustomEntityTypesRequest {
  /**
   * <p>A list of names of the custom patterns that you want to retrieve.</p>
   */
  Names: string[] | undefined;
}

export namespace BatchGetCustomEntityTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCustomEntityTypesRequest): any => ({
    ...obj,
  });
}

export interface BatchGetCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing the custom patterns that have been created.</p>
   */
  CustomEntityTypes?: CustomEntityType[];

  /**
   * <p>A list of the names of custom patterns that were not found.</p>
   */
  CustomEntityTypesNotFound?: string[];
}

export namespace BatchGetCustomEntityTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCustomEntityTypesResponse): any => ({
    ...obj,
  });
}

export interface BatchGetDevEndpointsRequest {
  /**
   * <p>The list of <code>DevEndpoint</code> names, which might be the names returned from the
   *         <code>ListDevEndpoint</code> operation.</p>
   */
  DevEndpointNames: string[] | undefined;
}

export namespace BatchGetDevEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetDevEndpointsRequest): any => ({
    ...obj,
  });
}

export interface BatchGetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A list of <code>DevEndpoints</code> not found.</p>
   */
  DevEndpointsNotFound?: string[];
}

export namespace BatchGetDevEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface BatchGetJobsRequest {
  /**
   * <p>A list of job names, which might be the names returned from the <code>ListJobs</code>
   *       operation.</p>
   */
  JobNames: string[] | undefined;
}

export namespace BatchGetJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetJobsRequest): any => ({
    ...obj,
  });
}

export interface BatchGetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partitions to retrieve.</p>
   */
  PartitionsToGet: PartitionValueList[] | undefined;
}

export namespace BatchGetPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetPartitionRequest): any => ({
    ...obj,
  });
}

export interface BatchGetPartitionResponse {
  /**
   * <p>A list of the requested partitions.</p>
   */
  Partitions?: Partition[];

  /**
   * <p>A list of the partition values in the request for which partitions were not
   *       returned.</p>
   */
  UnprocessedKeys?: PartitionValueList[];
}

export namespace BatchGetPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetPartitionResponse): any => ({
    ...obj,
  });
}

export interface BatchGetTriggersRequest {
  /**
   * <p>A list of trigger names, which may be the names returned from the <code>ListTriggers</code> operation.</p>
   */
  TriggerNames: string[] | undefined;
}

export namespace BatchGetTriggersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetTriggersRequest): any => ({
    ...obj,
  });
}

export interface BatchGetTriggersResponse {
  /**
   * <p>A list of trigger definitions.</p>
   */
  Triggers?: Trigger[];

  /**
   * <p>A list of names of triggers not found.</p>
   */
  TriggersNotFound?: string[];
}

export namespace BatchGetTriggersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetTriggersResponse): any => ({
    ...obj,
  });
}

export interface BatchGetWorkflowsRequest {
  /**
   * <p>A list of workflow names, which may be the names returned from the <code>ListWorkflows</code> operation.</p>
   */
  Names: string[] | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;
}

export namespace BatchGetWorkflowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetWorkflowsRequest): any => ({
    ...obj,
  });
}

export interface BatchGetWorkflowsResponse {
  /**
   * <p>A list of workflow resource metadata.</p>
   */
  Workflows?: Workflow[];

  /**
   * <p>A list of names of workflows not found.</p>
   */
  MissingWorkflows?: string[];
}

export namespace BatchGetWorkflowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetWorkflowsResponse): any => ({
    ...obj,
  });
}

export interface BatchStopJobRunRequest {
  /**
   * <p>The name of the job definition for which to stop job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>A list of the <code>JobRunIds</code> that should be stopped for that job
   *       definition.</p>
   */
  JobRunIds: string[] | undefined;
}

export namespace BatchStopJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopJobRunRequest): any => ({
    ...obj,
  });
}

export interface BatchStopJobRunResponse {
  /**
   * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
   */
  SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];

  /**
   * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>,
   *       including the <code>JobRunId</code> for which each error was encountered and details about the
   *       error.</p>
   */
  Errors?: BatchStopJobRunError[];
}

export namespace BatchStopJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchStopJobRunResponse): any => ({
    ...obj,
  });
}

export interface BatchUpdatePartitionRequest {
  /**
   * <p>The ID of the catalog in which the partition is to be updated. Currently, this should be
   *       the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be updated.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be updated.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of up to 100 <code>BatchUpdatePartitionRequestEntry</code> objects to update.</p>
   */
  Entries: BatchUpdatePartitionRequestEntry[] | undefined;
}

export namespace BatchUpdatePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePartitionRequest): any => ({
    ...obj,
  });
}

export interface BatchUpdatePartitionResponse {
  /**
   * <p>The errors encountered when trying to update the requested partitions. A list of <code>BatchUpdatePartitionFailureEntry</code> objects.</p>
   */
  Errors?: BatchUpdatePartitionFailureEntry[];
}

export namespace BatchUpdatePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePartitionResponse): any => ({
    ...obj,
  });
}

export interface CancelMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>A unique identifier for the task run.</p>
   */
  TaskRunId: string | undefined;
}

export namespace CancelMLTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMLTaskRunRequest): any => ({
    ...obj,
  });
}

export interface CancelMLTaskRunResponse {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;
}

export namespace CancelMLTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMLTaskRunResponse): any => ({
    ...obj,
  });
}

export interface CancelStatementRequest {
  /**
   * <p>The Session ID of the statement to be cancelled.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The ID of the statement to be cancelled.</p>
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request to cancel the statement.</p>
   */
  RequestOrigin?: string;
}

export namespace CancelStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelStatementRequest): any => ({
    ...obj,
  });
}

export interface CancelStatementResponse {}

export namespace CancelStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelStatementResponse): any => ({
    ...obj,
  });
}

export interface CheckSchemaVersionValidityInput {
  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat: DataFormat | string | undefined;

  /**
   * <p>The definition of the schema that has to be validated.</p>
   */
  SchemaDefinition: string | undefined;
}

export namespace CheckSchemaVersionValidityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CheckSchemaVersionValidityInput): any => ({
    ...obj,
  });
}

export interface CheckSchemaVersionValidityResponse {
  /**
   * <p>Return true, if the schema is valid and false otherwise.</p>
   */
  Valid?: boolean;

  /**
   * <p>A validation failure error message.</p>
   */
  Error?: string;
}

export namespace CheckSchemaVersionValidityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CheckSchemaVersionValidityResponse): any => ({
    ...obj,
  });
}

export interface CreateBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   */
  Description?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   */
  BlueprintLocation: string | undefined;

  /**
   * <p>The tags to be applied to this blueprint.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateBlueprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBlueprintRequest): any => ({
    ...obj,
  });
}

export interface CreateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was registered.</p>
   */
  Name?: string;
}

export namespace CreateBlueprintResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBlueprintResponse): any => ({
    ...obj,
  });
}

export interface CreateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  GrokClassifier?: CreateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  XMLClassifier?: CreateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  JsonClassifier?: CreateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  CsvClassifier?: CreateCsvClassifierRequest;
}

export namespace CreateClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClassifierRequest): any => ({
    ...obj,
  });
}

export interface CreateClassifierResponse {}

export namespace CreateClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClassifierResponse): any => ({
    ...obj,
  });
}

export interface CreateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the connection. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>ConnectionInput</code> object defining the connection
   *       to create.</p>
   */
  ConnectionInput: ConnectionInput | undefined;

  /**
   * <p>The tags you assign to the connection.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectionResponse {}

export namespace CreateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectionResponse): any => ({
    ...obj,
  });
}

export interface CreateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to
   *       access customer resources.</p>
   */
  Role: string | undefined;

  /**
   * <p>The Glue database where results are written, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>A list of collection of targets to crawl.</p>
   */
  Targets: CrawlerTargets | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>A list of custom classifiers that the user has registered. By default, all built-in
   *       classifiers are included in a crawl, but these custom classifiers always override the default
   *       classifiers for a given classification.</p>
   */
  Classifiers?: string[];

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * <p>Specifies data lineage configuration settings for the crawler.</p>
   */
  LineageConfiguration?: LineageConfiguration;

  /**
   * <p>Specifies AWS Lake Formation configuration settings for the crawler.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * <p>Crawler configuration information. This versioned JSON
   *       string allows users to specify aspects of a crawler's behavior.
   *       For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The tags to use with this crawler request. You may use tags to limit access to the
   *             crawler. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer
   *             guide.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCrawlerRequest): any => ({
    ...obj,
  });
}

export interface CreateCrawlerResponse {}

export namespace CreateCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCrawlerResponse): any => ({
    ...obj,
  });
}

export interface CreateCustomEntityTypeRequest {
  /**
   * <p>A name for the custom pattern that allows it to be retrieved or deleted later. This name must be unique per Amazon Web Services account.</p>
   */
  Name: string | undefined;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   */
  RegexString: string | undefined;

  /**
   * <p>A list of context words. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   *
   * 	        <p>If no context words are passed only a regular expression is checked.</p>
   */
  ContextWords?: string[];
}

export namespace CreateCustomEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface CreateCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you created.</p>
   */
  Name?: string;
}

export namespace CreateCustomEntityTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomEntityTypeResponse): any => ({
    ...obj,
  });
}

export interface CreateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the database. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The metadata for the database.</p>
   */
  DatabaseInput: DatabaseInput | undefined;
}

export namespace CreateDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatabaseRequest): any => ({
    ...obj,
  });
}

export interface CreateDatabaseResponse {}

export namespace CreateDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatabaseResponse): any => ({
    ...obj,
  });
}

export interface CreateDevEndpointRequest {
  /**
   * <p>The name to be assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The IAM role for the <code>DevEndpoint</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Security group IDs for the security groups to be used by the new
   *       <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
   */
  SubnetId?: string;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of public keys to be used by the development endpoints for authentication. The use
   *       of this attribute is preferred over a single public key because the public keys allow you to
   *       have a different private key per client.</p>
   *
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be able
   *         to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API with the public
   *         key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the
   *           <code>addPublicKeys</code> attribute.</p>
   *          </note>
   */
  PublicKeys?: string[];

  /**
   * <p>The number of Glue Data Processing Units (DPUs) to allocate to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *
   * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *
   * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not yet supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   */
  Arguments?: Record<string, string>;
}

export namespace CreateDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface CreateDevEndpointResponse {
  /**
   * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>The current status of the new <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role assigned to the new
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;

  /**
   * <p>The number of Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
   *         <code>DevEndpoint</code>.</p>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
   *       your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The map of arguments used to configure this <code>DevEndpoint</code>.</p>
   *
   * 	        <p>Valid arguments are:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  Arguments?: Record<string, string>;
}

export namespace CreateDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface CreateJobResponse {
  /**
   * <p>The unique name that was provided for this job definition.</p>
   */
  Name?: string;
}

export namespace CreateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

export interface CreateMLTransformRequest {
  /**
   * <p>The unique name that you give the transform when you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the machine learning transform that is being defined. The default is an
   *       empty string.</p>
   */
  Description?: string;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables: GlueTable[] | undefined;

  /**
   * <p>The algorithmic parameters that are specific to the transform type used. Conditionally
   *       dependent on the transform type.</p>
   */
  Parameters: TransformParameters | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *
   * 		       <ul>
   *             <li>
   *                <p>This role needs Glue service role permissions to allow access to resources in Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   */
  Role: string | undefined;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *
   * 			      <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
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
   *
   * 	        <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   *
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
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
   *
   * 	        <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
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
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   *
   * 		       <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

export namespace CreateMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMLTransformRequest): any => ({
    ...obj,
  });
}

export interface CreateMLTransformResponse {
  /**
   * <p>A unique identifier that is generated for the transform.</p>
   */
  TransformId?: string;
}

export namespace CreateMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMLTransformResponse): any => ({
    ...obj,
  });
}

export interface CreatePartitionRequest {
  /**
   * <p>The Amazon Web Services account ID of the catalog in which the partition is to be created.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A <code>PartitionInput</code> structure defining the partition
   *       to be created.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export namespace CreatePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartitionRequest): any => ({
    ...obj,
  });
}

export interface CreatePartitionResponse {}

export namespace CreatePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartitionResponse): any => ({
    ...obj,
  });
}

export interface CreatePartitionIndexRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of a database in which you want to create a partition index.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table in which you want to create a partition index.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Specifies a <code>PartitionIndex</code> structure to create a partition index in an existing table.</p>
   */
  PartitionIndex: PartitionIndex | undefined;
}

export namespace CreatePartitionIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartitionIndexRequest): any => ({
    ...obj,
  });
}

export interface CreatePartitionIndexResponse {}

export namespace CreatePartitionIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartitionIndexResponse): any => ({
    ...obj,
  });
}

export interface CreateRegistryInput {
  /**
   * <p>Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.</p>
   */
  RegistryName: string | undefined;

  /**
   * <p>A description of the registry. If description is not provided, there will not be any default value for this.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRegistryInput): any => ({
    ...obj,
  });
}

export interface CreateRegistryResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the newly created registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The tags for the registry.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRegistryResponse): any => ({
    ...obj,
  });
}

export interface CreateSchemaInput {
  /**
   * <p> This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: <code>arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id</code>.</p>
   */
  RegistryId?: RegistryId;

  /**
   * <p>Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat: DataFormat | string | undefined;

  /**
   * <p>The compatibility mode of the schema. The possible values are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>NONE</i>: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DISABLED</i>: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>BACKWARD</i>: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>BACKWARD_ALL</i>: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORWARD</i>: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORWARD_ALL</i>: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FULL</i>: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FULL_ALL</i>: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions.</p>
   *             </li>
   *          </ul>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>An optional description of the schema. If description is not provided, there will not be any automatic default value for this.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for <code>SchemaName</code>.</p>
   */
  SchemaDefinition?: string;
}

export namespace CreateSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSchemaInput): any => ({
    ...obj,
  });
}

export interface CreateSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>A description of the schema if specified when created.</p>
   */
  Description?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The schema compatibility mode.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   */
  SchemaCheckpoint?: number;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   */
  LatestSchemaVersion?: number;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   */
  NextSchemaVersion?: number;

  /**
   * <p>The status of the schema. </p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * <p>The tags for the schema.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The unique identifier of the first schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The status of the first schema version created.</p>
   */
  SchemaVersionStatus?: SchemaVersionStatus | string;
}

export namespace CreateSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSchemaResponse): any => ({
    ...obj,
  });
}

export interface CreateScriptRequest {
  /**
   * <p>A list of the nodes in the DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>A list of the edges in the DAG.</p>
   */
  DagEdges?: CodeGenEdge[];

  /**
   * <p>The programming language of the resulting code from the DAG.</p>
   */
  Language?: Language | string;
}

export namespace CreateScriptRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScriptRequest): any => ({
    ...obj,
  });
}

export interface CreateScriptResponse {
  /**
   * <p>The Python script generated from the DAG.</p>
   */
  PythonScript?: string;

  /**
   * <p>The Scala code generated from the DAG.</p>
   */
  ScalaCode?: string;
}

export namespace CreateScriptResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScriptResponse): any => ({
    ...obj,
  });
}

export interface CreateSecurityConfigurationRequest {
  /**
   * <p>The name for the new security configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The encryption configuration for the new security configuration.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;
}

export namespace CreateSecurityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateSecurityConfigurationResponse {
  /**
   * <p>The name assigned to the new security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The time at which the new security configuration was created.</p>
   */
  CreatedTimestamp?: Date;
}

export namespace CreateSecurityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request to create a new session.</p>
 */
export interface CreateSessionRequest {
  /**
   * <p>The ID of the session request. </p>
   */
  Id: string | undefined;

  /**
   * <p>The description of the session. </p>
   */
  Description?: string;

  /**
   * <p>The IAM Role ARN </p>
   */
  Role: string | undefined;

  /**
   * <p>The <code>SessionCommand</code> that runs the job. </p>
   */
  Command: SessionCommand | undefined;

  /**
   * <p>The number of seconds before request times out. </p>
   */
  Timeout?: number;

  /**
   * <p>The number of seconds when idle before request times out. </p>
   */
  IdleTimeout?: number;

  /**
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>The number of connections to use for the session. </p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   */
  MaxCapacity?: number;

  /**
   * <p>The number of workers to use for the session. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The Worker Type. Can be one of G.1X, G.2X, Standard </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The name of the SecurityConfiguration structure to be used with the session </p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
   *       The GlueVersion must be greater than 2.0. </p>
   */
  GlueVersion?: string;

  /**
   * <p>The map of key value pairs (tags) belonging to the session.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

export namespace CreateSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSessionRequest): any => ({
    ...obj,
  });
}

export interface CreateSessionResponse {
  /**
   * <p>Returns the session object in the response.</p>
   */
  Session?: Session;
}

export namespace CreateSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSessionResponse): any => ({
    ...obj,
  });
}

export interface CreateTableRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the <code>Table</code>.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The catalog database in which to create the new table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The <code>TableInput</code> object that defines the metadata table
   *       to create in the catalog.</p>
   */
  TableInput: TableInput | undefined;

  /**
   * <p>A list of partition indexes, <code>PartitionIndex</code> structures, to create in the table.</p>
   */
  PartitionIndexes?: PartitionIndex[];

  /**
   * <p>The ID of the transaction.</p>
   */
  TransactionId?: string;
}

export namespace CreateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableRequest): any => ({
    ...obj,
  });
}

export interface CreateTableResponse {}

export namespace CreateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTableResponse): any => ({
    ...obj,
  });
}

export interface CreateTriggerRequest {
  /**
   * <p>The name of the trigger.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * <p>The type of the new trigger.</p>
   */
  Type: TriggerType | string | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   *          <p>This field is required when the trigger type is SCHEDULED.</p>
   */
  Schedule?: string;

  /**
   * <p>A predicate to specify when the new trigger should fire.</p>
   *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>The actions initiated by this trigger when it fires.</p>
   */
  Actions: Action[] | undefined;

  /**
   * <p>A description of the new trigger.</p>
   */
  Description?: string;

  /**
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
   *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   */
  StartOnCreation?: boolean;

  /**
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
   *       For more information about tags in Glue, see
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

export namespace CreateTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTriggerRequest): any => ({
    ...obj,
  });
}

export interface CreateTriggerResponse {
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;
}

export namespace CreateTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTriggerResponse): any => ({
    ...obj,
  });
}

export interface CreateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog in which to create the function. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which to create the function.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that defines the function
   *       to create in the Data Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export namespace CreateUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface CreateUserDefinedFunctionResponse {}

export namespace CreateUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface CreateWorkflowRequest {
  /**
   * <p>The name to be assigned to the workflow. It should be unique within your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * <p>The tags to be used with this workflow.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

export namespace CreateWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkflowRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkflowResponse {
  /**
   * <p>The name of the workflow which was provided as part of the request.</p>
   */
  Name?: string;
}

export namespace CreateWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkflowResponse): any => ({
    ...obj,
  });
}

export interface DeleteBlueprintRequest {
  /**
   * <p>The name of the blueprint to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteBlueprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBlueprintRequest): any => ({
    ...obj,
  });
}

export interface DeleteBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was deleted.</p>
   */
  Name?: string;
}

export namespace DeleteBlueprintResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBlueprintResponse): any => ({
    ...obj,
  });
}

export interface DeleteClassifierRequest {
  /**
   * <p>Name of the classifier to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClassifierRequest): any => ({
    ...obj,
  });
}

export interface DeleteClassifierResponse {}

export namespace DeleteClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClassifierResponse): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>Name of the column.</p>
   */
  ColumnName: string | undefined;
}

export namespace DeleteColumnStatisticsForPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForPartitionResponse {}

export namespace DeleteColumnStatisticsForPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;
}

export namespace DeleteColumnStatisticsForTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForTableResponse {}

export namespace DeleteColumnStatisticsForTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection to delete.</p>
   */
  ConnectionName: string | undefined;
}

export namespace DeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionResponse {}

export namespace DeleteConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

export interface DeleteCrawlerRequest {
  /**
   * <p>The name of the crawler to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCrawlerRequest): any => ({
    ...obj,
  });
}

export interface DeleteCrawlerResponse {}

export namespace DeleteCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCrawlerResponse): any => ({
    ...obj,
  });
}

export interface DeleteCustomEntityTypeRequest {
  /**
   * <p>The name of the custom pattern that you want to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCustomEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you deleted.</p>
   */
  Name?: string;
}

export namespace DeleteCustomEntityTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomEntityTypeResponse): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to delete. For Hive compatibility, this must be all
   *       lowercase.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseResponse {}

export namespace DeleteDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatabaseResponse): any => ({
    ...obj,
  });
}

export interface DeleteDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteDevEndpointResponse {}

export namespace DeleteDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteJobRequest {
  /**
   * <p>The name of the job definition to delete.</p>
   */
  JobName: string | undefined;
}

export namespace DeleteJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobResponse {
  /**
   * <p>The name of the job definition that was deleted.</p>
   */
  JobName?: string;
}

export namespace DeleteJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteMLTransformRequest {
  /**
   * <p>The unique identifier of the transform to delete.</p>
   */
  TransformId: string | undefined;
}

export namespace DeleteMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMLTransformRequest): any => ({
    ...obj,
  });
}

export interface DeleteMLTransformResponse {
  /**
   * <p>The unique identifier of the transform that was deleted.</p>
   */
  TransformId?: string;
}

export namespace DeleteMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMLTransformResponse): any => ({
    ...obj,
  });
}

export interface DeletePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partition to be deleted.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

export namespace DeletePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionRequest): any => ({
    ...obj,
  });
}

export interface DeletePartitionResponse {}

export namespace DeletePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionResponse): any => ({
    ...obj,
  });
}

export interface DeletePartitionIndexRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of a database from which you want to delete a partition index.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table from which you want to delete a partition index.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the partition index to be deleted.</p>
   */
  IndexName: string | undefined;
}

export namespace DeletePartitionIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionIndexRequest): any => ({
    ...obj,
  });
}

export interface DeletePartitionIndexResponse {}

export namespace DeletePartitionIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionIndexResponse): any => ({
    ...obj,
  });
}

export interface DeleteRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;
}

export namespace DeleteRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistryInput): any => ({
    ...obj,
  });
}

export interface DeleteRegistryResponse {
  /**
   * <p>The name of the registry being deleted.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry being deleted.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The status of the registry. A successful operation will return the <code>Deleting</code> status.</p>
   */
  Status?: RegistryStatus | string;
}

export namespace DeleteRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistryResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The hash value returned when this policy was set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * <p>The ARN of the Glue resource for the resource policy to be deleted.</p>
   */
  ResourceArn?: string;
}

export namespace DeleteResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteSchemaInput {
  /**
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId: SchemaId | undefined;
}

export namespace DeleteSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaInput): any => ({
    ...obj,
  });
}

export interface DeleteSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema being deleted.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema being deleted.</p>
   */
  SchemaName?: string;

  /**
   * <p>The status of the schema.</p>
   */
  Status?: SchemaStatus | string;
}

export namespace DeleteSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaResponse): any => ({
    ...obj,
  });
}

export interface DeleteSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>A version range may be supplied which may be of the format:</p>
   * 	        <ul>
   *             <li>
   *                <p>a single version number, 5</p>
   *             </li>
   *             <li>
   *                <p>a range, 5-8 : deletes versions 5, 6, 7, 8</p>
   *             </li>
   *          </ul>
   */
  Versions: string | undefined;
}

export namespace DeleteSchemaVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaVersionsInput): any => ({
    ...obj,
  });
}

export interface DeleteSchemaVersionsResponse {
  /**
   * <p>A list of <code>SchemaVersionErrorItem</code> objects, each containing an error and schema version.</p>
   */
  SchemaVersionErrors?: SchemaVersionErrorItem[];
}

export namespace DeleteSchemaVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaVersionsResponse): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteSecurityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationResponse {}

export namespace DeleteSecurityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteSessionRequest {
  /**
   * <p>The ID of the session to be deleted.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the origin of the delete session request.</p>
   */
  RequestOrigin?: string;
}

export namespace DeleteSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSessionResponse {
  /**
   * <p>Returns the ID of the deleted session.</p>
   */
  Id?: string;
}

export namespace DeleteSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSessionResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table to be deleted. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to delete the table contents.</p>
   */
  TransactionId?: string;
}

export namespace DeleteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableResponse {}

export namespace DeleteTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID of the table version to be deleted. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId: string | undefined;
}

export namespace DeleteTableVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableVersionResponse {}

export namespace DeleteTableVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteTriggerRequest {
  /**
   * <p>The name of the trigger to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTriggerRequest): any => ({
    ...obj,
  });
}

export interface DeleteTriggerResponse {
  /**
   * <p>The name of the trigger that was deleted.</p>
   */
  Name?: string;
}

export namespace DeleteTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTriggerResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be deleted is
   *       located. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function definition to be deleted.</p>
   */
  FunctionName: string | undefined;
}

export namespace DeleteUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserDefinedFunctionResponse {}

export namespace DeleteUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorkflowRequest {
  /**
   * <p>Name of the workflow to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkflowRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkflowResponse {
  /**
   * <p>Name of the workflow specified in input.</p>
   */
  Name?: string;
}

export namespace DeleteWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkflowResponse): any => ({
    ...obj,
  });
}

export interface GetBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   */
  IncludeBlueprint?: boolean;

  /**
   * <p>Specifies whether or not to include the parameter specification.</p>
   */
  IncludeParameterSpec?: boolean;
}

export namespace GetBlueprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintResponse {
  /**
   * <p>Returns a <code>Blueprint</code> object.</p>
   */
  Blueprint?: Blueprint;
}

export namespace GetBlueprintResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintResponse): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * <p>The run ID for the blueprint run you want to retrieve.</p>
   */
  RunId: string | undefined;
}

export namespace GetBlueprintRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunResponse {
  /**
   * <p>Returns a <code>BlueprintRun</code> object.</p>
   */
  BlueprintRun?: BlueprintRun;
}

export namespace GetBlueprintRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunResponse): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunsRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace GetBlueprintRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunsRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunsResponse {
  /**
   * <p>Returns a list of <code>BlueprintRun</code> objects.</p>
   */
  BlueprintRuns?: BlueprintRun[];

  /**
   * <p>A continuation token, if not all blueprint runs have been returned.</p>
   */
  NextToken?: string;
}

export namespace GetBlueprintRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunsResponse): any => ({
    ...obj,
  });
}

export interface GetCatalogImportStatusRequest {
  /**
   * <p>The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;
}

export namespace GetCatalogImportStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCatalogImportStatusRequest): any => ({
    ...obj,
  });
}

export interface GetCatalogImportStatusResponse {
  /**
   * <p>The status of the specified catalog migration.</p>
   */
  ImportStatus?: CatalogImportStatus;
}

export namespace GetCatalogImportStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCatalogImportStatusResponse): any => ({
    ...obj,
  });
}

export interface GetClassifierRequest {
  /**
   * <p>Name of the classifier to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifierRequest): any => ({
    ...obj,
  });
}

export interface GetClassifierResponse {
  /**
   * <p>The requested classifier.</p>
   */
  Classifier?: Classifier;
}

export namespace GetClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifierResponse): any => ({
    ...obj,
  });
}

export interface GetClassifiersRequest {
  /**
   * <p>The size of the list to return (optional).</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional continuation token.</p>
   */
  NextToken?: string;
}

export namespace GetClassifiersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifiersRequest): any => ({
    ...obj,
  });
}

export interface GetClassifiersResponse {
  /**
   * <p>The requested list of classifier
   *       objects.</p>
   */
  Classifiers?: Classifier[];

  /**
   * <p>A continuation token.</p>
   */
  NextToken?: string;
}

export namespace GetClassifiersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifiersResponse): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;
}

export namespace GetColumnStatisticsForPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForPartitionResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>Error occurred during retrieving column statistics data.</p>
   */
  Errors?: ColumnError[];
}

export namespace GetColumnStatisticsForPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;
}

export namespace GetColumnStatisticsForTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  Errors?: ColumnError[];
}

export namespace GetColumnStatisticsForTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface GetConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection definition to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;
}

export namespace GetConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionResponse {
  /**
   * <p>The requested connection definition.</p>
   */
  Connection?: Connection;
}

export namespace GetConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionResponse): any => ({
    ...obj,
  });
}

export interface GetConnectionsRequest {
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A filter that controls which connections are returned.</p>
   */
  Filter?: GetConnectionsFilter;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of connections to return in one response.</p>
   */
  MaxResults?: number;
}

export namespace GetConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionsResponse {
  /**
   * <p>A list of requested connection definitions.</p>
   */
  ConnectionList?: Connection[];

  /**
   * <p>A continuation token, if the list of connections returned does not
   *       include the last of the filtered connections.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlerRequest {
  /**
   * <p>The name of the crawler to retrieve metadata for.</p>
   */
  Name: string | undefined;
}

export namespace GetCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlerResponse {
  /**
   * <p>The metadata for the specified crawler.</p>
   */
  Crawler?: Crawler;
}

export namespace GetCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlerMetricsRequest {
  /**
   * <p>A list of the names of crawlers about which to retrieve metrics.</p>
   */
  CrawlerNameList?: string[];

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlerMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerMetricsRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlerMetricsResponse {
  /**
   * <p>A list of metrics for the specified crawler.</p>
   */
  CrawlerMetricsList?: CrawlerMetrics[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlerMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlersRequest {
  /**
   * <p>The number of crawlers to return on each call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlersRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlersResponse {
  /**
   * <p>A list of crawler metadata.</p>
   */
  Crawlers?: Crawler[];

  /**
   * <p>A continuation token, if the returned list has not reached the end
   *       of those defined in this customer account.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlersResponse): any => ({
    ...obj,
  });
}

export interface GetCustomEntityTypeRequest {
  /**
   * <p>The name of the custom pattern that you want to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetCustomEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface GetCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern that you retrieved.</p>
   */
  Name?: string;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   */
  RegexString?: string;

  /**
   * <p>A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   */
  ContextWords?: string[];
}

export namespace GetCustomEntityTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomEntityTypeResponse): any => ({
    ...obj,
  });
}

export interface GetDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to retrieve. For Hive compatibility, this
   *       should be all lowercase.</p>
   */
  Name: string | undefined;
}

export namespace GetDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabaseRequest): any => ({
    ...obj,
  });
}

export interface GetDatabaseResponse {
  /**
   * <p>The definition of the specified database in the Data Catalog.</p>
   */
  Database?: Database;
}

export namespace GetDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabaseResponse): any => ({
    ...obj,
  });
}

export interface GetDatabasesRequest {
  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Allows you to specify that you want to list the databases shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *
   * 	        <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will list the databases shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will list the databases shared with your account, as well as the databases in yor local account. </p>
   *             </li>
   *          </ul>
   */
  ResourceShareType?: ResourceShareType | string;
}

export namespace GetDatabasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabasesRequest): any => ({
    ...obj,
  });
}

export interface GetDatabasesResponse {
  /**
   * <p>A list of <code>Database</code> objects from the specified catalog.</p>
   */
  DatabaseList: Database[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens,
   *       returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace GetDatabasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabasesResponse): any => ({
    ...obj,
  });
}

export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetDataCatalogEncryptionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataCatalogEncryptionSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * <p>The requested security configuration.</p>
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}

export namespace GetDataCatalogEncryptionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataCatalogEncryptionSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetDataflowGraphRequest {
  /**
   * <p>The Python script to transform.</p>
   */
  PythonScript?: string;
}

export namespace GetDataflowGraphRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataflowGraphRequest): any => ({
    ...obj,
  });
}

export interface GetDataflowGraphResponse {
  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>A list of the edges in the resulting DAG.</p>
   */
  DagEdges?: CodeGenEdge[];
}

export namespace GetDataflowGraphResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataflowGraphResponse): any => ({
    ...obj,
  });
}

export interface GetDevEndpointRequest {
  /**
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   */
  EndpointName: string | undefined;
}

export namespace GetDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetDevEndpointResponse {
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   */
  DevEndpoint?: DevEndpoint;
}

export namespace GetDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetDevEndpointsRequest {
  /**
   * <p>The maximum size of information to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetDevEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointsRequest): any => ({
    ...obj,
  });
}

export interface GetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   */
  NextToken?: string;
}

export namespace GetDevEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface GetJobRequest {
  /**
   * <p>The name of the job definition to retrieve.</p>
   */
  JobName: string | undefined;
}

export namespace GetJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

export interface GetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

export namespace GetJobBookmarkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobBookmarkRequest): any => ({
    ...obj,
  });
}

export interface GetJobBookmarkResponse {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace GetJobBookmarkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobBookmarkResponse): any => ({
    ...obj,
  });
}

export interface GetJobRunRequest {
  /**
   * <p>Name of the job definition being run.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   */
  RunId: string | undefined;

  /**
   * <p>True if a list of predecessor runs should be returned.</p>
   */
  PredecessorsIncluded?: boolean;
}

export namespace GetJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunRequest): any => ({
    ...obj,
  });
}

export interface GetJobRunResponse {
  /**
   * <p>The requested job-run metadata.</p>
   */
  JobRun?: JobRun;
}

export namespace GetJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunResponse): any => ({
    ...obj,
  });
}

export interface GetJobRunsRequest {
  /**
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetJobRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunsRequest): any => ({
    ...obj,
  });
}

export interface GetJobRunsResponse {
  /**
   * <p>A list of job-run metadata objects.</p>
   */
  JobRuns?: JobRun[];

  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   */
  NextToken?: string;
}

export namespace GetJobRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunsResponse): any => ({
    ...obj,
  });
}

export interface GetJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobsRequest): any => ({
    ...obj,
  });
}

export interface GetMappingRequest {
  /**
   * <p>Specifies the source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>A list of target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>Parameters for the mapping.</p>
   */
  Location?: Location;
}

export namespace GetMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMappingRequest): any => ({
    ...obj,
  });
}

export interface GetMappingResponse {
  /**
   * <p>A list of mappings to the specified targets.</p>
   */
  Mapping: MappingEntry[] | undefined;
}

export namespace GetMappingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMappingResponse): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The unique identifier of the task run.</p>
   */
  TaskRunId: string | undefined;
}

export namespace GetMLTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunRequest): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunResponse {
  /**
   * <p>The unique identifier of the task run.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The status for this task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The error strings that are associated with the task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The date and time when this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when this task run was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time when this task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;
}

export namespace GetMLTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunResponse): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunsRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. </p>
   */
  MaxResults?: number;

  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   */
  Filter?: TaskRunFilterCriteria;

  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   */
  Sort?: TaskRunSortCriteria;
}

export namespace GetMLTaskRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunsRequest): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunsResponse {
  /**
   * <p>A list of task runs that are associated with the transform.</p>
   */
  TaskRuns?: TaskRun[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace GetMLTaskRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunsResponse): any => ({
    ...obj,
  });
}

export interface GetMLTransformRequest {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformRequest): any => ({
    ...obj,
  });
}

export interface GetMLTransformResponse {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique name given to the transform when it was created.</p>
   */
  Name?: string;

  /**
   * <p>A description of the transform.</p>
   */
  Description?: string;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>The date and time when the transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the transform was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The latest evaluation metrics.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>The number of labels available for this transform.</p>
   */
  LabelCount?: number;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
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
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

export namespace GetMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformResponse): any => ({
    ...obj,
  });
}

export interface GetMLTransformsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filter transformation criteria.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: TransformSortCriteria;
}

export namespace GetMLTransformsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformsRequest): any => ({
    ...obj,
  });
}

export interface GetMLTransformsResponse {
  /**
   * <p>A list of machine learning transforms.</p>
   */
  Transforms: MLTransform[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace GetMLTransformsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformsResponse): any => ({
    ...obj,
  });
}

export interface GetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partition's table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

export namespace GetPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionRequest): any => ({
    ...obj,
  });
}

export interface GetPartitionResponse {
  /**
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   */
  Partition?: Partition;
}

export namespace GetPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionResponse): any => ({
    ...obj,
  });
}

export interface GetPartitionIndexesRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionIndexesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionIndexesRequest): any => ({
    ...obj,
  });
}

export interface GetPartitionIndexesResponse {
  /**
   * <p>A list of index descriptors.</p>
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[];

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionIndexesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionIndexesResponse): any => ({
    ...obj,
  });
}

export interface GetPartitionsRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
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
   *
   *          <p>
   *             <i>Sample API Call</i>: </p>
   */
  Expression?: string;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   */
  NextToken?: string;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: Segment;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.</p>
   */
  ExcludeColumnSchema?: boolean;

  /**
   * <p>The transaction ID at which to read the partition contents.</p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

export namespace GetPartitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionsRequest): any => ({
    ...obj,
  });
}

export interface GetPartitionsResponse {
  /**
   * <p>A list of requested partitions.</p>
   */
  Partitions?: Partition[];

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionsResponse): any => ({
    ...obj,
  });
}

export interface GetPlanRequest {
  /**
   * <p>The list of mappings from a source table to target tables.</p>
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>The target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>The parameters for the mapping.</p>
   */
  Location?: Location;

  /**
   * <p>The programming language of the code to perform the mapping.</p>
   */
  Language?: Language | string;

  /**
   * <p>A map to hold additional optional key-value parameters.</p>
   *
   * 	        <p>Currently, these key-value pairs are supported:</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>inferSchema</code>  —  Specifies whether to set <code>inferSchema</code> to true or false for the default script generated by an Glue job. For example, to set <code>inferSchema</code> to true, pass the following key value pair:</p>
   * 	              <p>
   *                   <code>--additional-plan-options-map '{"inferSchema":"true"}'</code>
   *                </p>
   * 	           </li>
   *          </ul>
   */
  AdditionalPlanOptionsMap?: Record<string, string>;
}

export namespace GetPlanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlanRequest): any => ({
    ...obj,
  });
}

export interface GetPlanResponse {
  /**
   * <p>A Python script to perform the mapping.</p>
   */
  PythonScript?: string;

  /**
   * <p>The Scala code to perform the mapping.</p>
   */
  ScalaCode?: string;
}

export namespace GetPlanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlanResponse): any => ({
    ...obj,
  });
}

export interface GetRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;
}

export namespace GetRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryInput): any => ({
    ...obj,
  });
}

export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The status of the registry.</p>
   */
  Status?: RegistryStatus | string;

  /**
   * <p>The date and time the registry was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date and time the registry was updated.</p>
   */
  UpdatedTime?: string;
}

export namespace GetRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace GetResourcePoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesResponse {
  /**
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   */
  GetResourcePoliciesResponseList?: GluePolicy[];

  /**
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   */
  NextToken?: string;
}

export namespace GetResourcePoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the Glue resource for which to retrieve the resource policy. If not
   *       supplied, the Data Catalog resource policy is returned. Use <code>GetResourcePolicies</code>
   *       to view all existing resource policies. For more information see <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource ARNs</a>.
   *     </p>
   */
  ResourceArn?: string;
}

export namespace GetResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyResponse {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

export namespace GetResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;
}

export namespace GetSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaInput): any => ({
    ...obj,
  });
}

export interface GetSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>A description of schema if specified when created</p>
   */
  Description?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The compatibility mode of the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   */
  SchemaCheckpoint?: number;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   */
  LatestSchemaVersion?: number;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   */
  NextSchemaVersion?: number;

  /**
   * <p>The status of the schema.</p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * <p>The date and time the schema was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date and time the schema was updated.</p>
   */
  UpdatedTime?: string;
}

export namespace GetSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaByDefinitionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The definition of the schema for which schema details are required.</p>
   */
  SchemaDefinition: string | undefined;
}

export namespace GetSchemaByDefinitionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaByDefinitionInput): any => ({
    ...obj,
  });
}

export interface GetSchemaByDefinitionResponse {
  /**
   * <p>The schema ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * <p>The date and time the schema was created.</p>
   */
  CreatedTime?: string;
}

export namespace GetSchemaByDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaByDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The <code>SchemaVersionId</code> of the schema version. This field is required for fetching by schema ID. Either this or the <code>SchemaId</code> wrapper has to be provided.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;
}

export namespace GetSchemaVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionInput): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionResponse {
  /**
   * <p>The <code>SchemaVersionId</code> of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The schema definition for the schema ID.</p>
   */
  SchemaDefinition?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version. </p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * <p>The date and time the schema version was created.</p>
   */
  CreatedTime?: string;
}

export namespace GetSchemaVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionsDiffInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The first of the two schema versions to be compared.</p>
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>The second of the two schema versions to be compared.</p>
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>Refers to <code>SYNTAX_DIFF</code>, which is the currently supported diff type.</p>
   */
  SchemaDiffType: SchemaDiffType | string | undefined;
}

export namespace GetSchemaVersionsDiffInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionsDiffInput): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionsDiffResponse {
  /**
   * <p>The difference between schemas as a string in JsonPatch format.</p>
   */
  Diff?: string;
}

export namespace GetSchemaVersionsDiffResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionsDiffResponse): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetSecurityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationResponse {
  /**
   * <p>The requested security configuration.</p>
   */
  SecurityConfiguration?: SecurityConfiguration;
}

export namespace GetSecurityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetSecurityConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationsResponse {
  /**
   * <p>A list of security configurations.</p>
   */
  SecurityConfigurations?: SecurityConfiguration[];

  /**
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   */
  NextToken?: string;
}

export namespace GetSecurityConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface GetSessionRequest {
  /**
   * <p>The ID of the session. </p>
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

export namespace GetSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionRequest): any => ({
    ...obj,
  });
}

export interface GetSessionResponse {
  /**
   * <p>The session object is returned in the response.</p>
   */
  Session?: Session;
}

export namespace GetSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionResponse): any => ({
    ...obj,
  });
}

export interface GetStatementRequest {
  /**
   * <p>The Session ID of the statement.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The Id of the statement.</p>
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

export namespace GetStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStatementRequest): any => ({
    ...obj,
  });
}

export interface GetStatementResponse {
  /**
   * <p>Returns the statement.</p>
   */
  Statement?: Statement;
}

export namespace GetStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStatementResponse): any => ({
    ...obj,
  });
}

export interface GetTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to read the table contents. </p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

export namespace GetTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableRequest): any => ({
    ...obj,
  });
}

export interface GetTableResponse {
  /**
   * <p>The <code>Table</code> object that defines the specified table.</p>
   */
  Table?: Table;
}

export namespace GetTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableResponse): any => ({
    ...obj,
  });
}

export interface GetTablesRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   */
  Expression?: string;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The transaction ID at which to read the table contents.</p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

export namespace GetTablesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTablesRequest): any => ({
    ...obj,
  });
}

export interface GetTablesResponse {
  /**
   * <p>A list of the requested <code>Table</code> objects.</p>
   */
  TableList?: Table[];

  /**
   * <p>A continuation token, present if the current list segment is
   *       not the last.</p>
   */
  NextToken?: string;
}

export namespace GetTablesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTablesResponse): any => ({
    ...obj,
  });
}

export interface GetTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   */
  VersionId?: string;
}

export namespace GetTableVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableVersionRequest): any => ({
    ...obj,
  });
}

export interface GetTableVersionResponse {
  /**
   * <p>The requested table version.</p>
   */
  TableVersion?: TableVersion;
}

export namespace GetTableVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableVersionResponse): any => ({
    ...obj,
  });
}

export interface GetTableVersionsRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   */
  MaxResults?: number;
}

export namespace GetTableVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetTableVersionsResponse {
  /**
   * <p>A list of strings identifying available versions of the
   *       specified table.</p>
   */
  TableVersions?: TableVersion[];

  /**
   * <p>A continuation token, if the list of available versions does
   *       not include the last one.</p>
   */
  NextToken?: string;
}

export namespace GetTableVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
}

export interface GetTagsResponse {
  /**
   * <p>The requested tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace GetTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj,
  });
}

export interface GetTriggerRequest {
  /**
   * <p>The name of the trigger to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggerRequest): any => ({
    ...obj,
  });
}

export interface GetTriggerResponse {
  /**
   * <p>The requested trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace GetTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggerResponse): any => ({
    ...obj,
  });
}

export interface GetTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetTriggersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggersRequest): any => ({
    ...obj,
  });
}

export interface GetTriggersResponse {
  /**
   * <p>A list of triggers for the specified job.</p>
   */
  Triggers?: Trigger[];

  /**
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   */
  NextToken?: string;
}

export namespace GetTriggersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggersResponse): any => ({
    ...obj,
  });
}

export interface GetUnfilteredPartitionMetadataRequest {
  CatalogId: string | undefined;
  DatabaseName: string | undefined;
  TableName: string | undefined;
  PartitionValues: string[] | undefined;
  /**
   * <p>A structure containing information for audit.</p>
   */
  AuditContext?: AuditContext;

  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

export namespace GetUnfilteredPartitionMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * <p>Represents a slice of table data.</p>
   */
  Partition?: Partition;

  AuthorizedColumns?: string[];
  IsRegisteredWithLakeFormation?: boolean;
}

export namespace GetUnfilteredPartitionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionMetadataResponse): any => ({
    ...obj,
  });
}

export interface GetUnfilteredPartitionsMetadataRequest {
  CatalogId: string | undefined;
  DatabaseName: string | undefined;
  TableName: string | undefined;
  Expression?: string;
  /**
   * <p>A structure containing information for audit.</p>
   */
  AuditContext?: AuditContext;

  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
  NextToken?: string;
  /**
   * <p>Defines a non-overlapping region of a table's partitions, allowing
   *       multiple requests to be run in parallel.</p>
   */
  Segment?: Segment;

  MaxResults?: number;
}

export namespace GetUnfilteredPartitionsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionsMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetUnfilteredPartitionsMetadataResponse {
  UnfilteredPartitions?: UnfilteredPartition[];
  NextToken?: string;
}

export namespace GetUnfilteredPartitionsMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionsMetadataResponse): any => ({
    ...obj,
  });
}

export interface GetUnfilteredTableMetadataRequest {
  CatalogId: string | undefined;
  DatabaseName: string | undefined;
  Name: string | undefined;
  /**
   * <p>A structure containing information for audit.</p>
   */
  AuditContext?: AuditContext;

  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

export namespace GetUnfilteredTableMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredTableMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetUnfilteredTableMetadataResponse {
  /**
   * <p>Represents a collection of related data organized in columns and rows.</p>
   */
  Table?: Table;

  AuthorizedColumns?: string[];
  IsRegisteredWithLakeFormation?: boolean;
  CellFilters?: ColumnRowFilter[];
}

export namespace GetUnfilteredTableMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredTableMetadataResponse): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionResponse {
  /**
   * <p>The requested function definition.</p>
   */
  UserDefinedFunction?: UserDefinedFunction;
}

export namespace GetUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionsRequest {
  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   */
  DatabaseName?: string;

  /**
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   */
  Pattern: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of functions to return in one response.</p>
   */
  MaxResults?: number;
}

export namespace GetUserDefinedFunctionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionsRequest): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionsResponse {
  /**
   * <p>A list of requested function definitions.</p>
   */
  UserDefinedFunctions?: UserDefinedFunction[];

  /**
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   */
  NextToken?: string;
}

export namespace GetUserDefinedFunctionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionsResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRequest {
  /**
   * <p>The name of the workflow to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;
}

export namespace GetWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowResponse {
  /**
   * <p>The resource metadata for the workflow.</p>
   */
  Workflow?: Workflow;
}

export namespace GetWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunRequest {
  /**
   * <p>Name of the workflow being run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run.</p>
   */
  RunId: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;
}

export namespace GetWorkflowRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunResponse {
  /**
   * <p>The requested workflow run metadata.</p>
   */
  Run?: WorkflowRun;
}

export namespace GetWorkflowRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run whose run properties should be returned.</p>
   */
  RunId: string | undefined;
}

export namespace GetWorkflowRunPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunPropertiesRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunPropertiesResponse {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   */
  RunProperties?: Record<string, string>;
}

export namespace GetWorkflowRunPropertiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunPropertiesResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunsRequest {
  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>The maximum size of the response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetWorkflowRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunsRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunsResponse {
  /**
   * <p>A list of workflow run metadata objects.</p>
   */
  Runs?: WorkflowRun[];

  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   */
  NextToken?: string;
}

export namespace GetWorkflowRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunsResponse): any => ({
    ...obj,
  });
}

export interface ImportCatalogToGlueRequest {
  /**
   * <p>The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;
}

export namespace ImportCatalogToGlueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportCatalogToGlueRequest): any => ({
    ...obj,
  });
}

export interface ImportCatalogToGlueResponse {}

export namespace ImportCatalogToGlueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportCatalogToGlueResponse): any => ({
    ...obj,
  });
}

export interface ListBlueprintsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the list by an Amazon Web Services resource tag.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListBlueprintsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBlueprintsRequest): any => ({
    ...obj,
  });
}

export interface ListBlueprintsResponse {
  /**
   * <p>List of names of blueprints in the account.</p>
   */
  Blueprints?: string[];

  /**
   * <p>A continuation token, if not all blueprint names have been returned.</p>
   */
  NextToken?: string;
}

export namespace ListBlueprintsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBlueprintsResponse): any => ({
    ...obj,
  });
}

export interface ListCrawlersRequest {
  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListCrawlersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrawlersRequest): any => ({
    ...obj,
  });
}

export interface ListCrawlersResponse {
  /**
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   */
  CrawlerNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListCrawlersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrawlersResponse): any => ({
    ...obj,
  });
}

export interface ListCustomEntityTypesRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace ListCustomEntityTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomEntityTypesRequest): any => ({
    ...obj,
  });
}

export interface ListCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing custom patterns.</p>
   */
  CustomEntityTypes?: CustomEntityType[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace ListCustomEntityTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomEntityTypesResponse): any => ({
    ...obj,
  });
}

export interface ListDevEndpointsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListDevEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevEndpointsRequest): any => ({
    ...obj,
  });
}

export interface ListDevEndpointsResponse {
  /**
   * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
   *         <code>DevEndpoint</code>s with the specified tags.</p>
   */
  DevEndpointNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListDevEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   */
  JobNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListMLTransformsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   */
  Sort?: TransformSortCriteria;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListMLTransformsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMLTransformsRequest): any => ({
    ...obj,
  });
}

export interface ListMLTransformsResponse {
  /**
   * <p>The identifiers of all the machine learning transforms in the account, or the
   *         machine learning transforms with the specified tags.</p>
   */
  TransformIds: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListMLTransformsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMLTransformsResponse): any => ({
    ...obj,
  });
}

export interface ListRegistriesInput {
  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListRegistriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegistriesInput): any => ({
    ...obj,
  });
}

export interface ListRegistriesResponse {
  /**
   * <p>An array of <code>RegistryDetailedListItem</code> objects containing minimal details of each registry.</p>
   */
  Registries?: RegistryListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListRegistriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegistriesResponse): any => ({
    ...obj,
  });
}

export interface ListSchemasInput {
  /**
   * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId?: RegistryId;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListSchemasInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemasInput): any => ({
    ...obj,
  });
}

export interface ListSchemasResponse {
  /**
   * <p>An array of <code>SchemaListItem</code> objects containing details of each schema.</p>
   */
  Schemas?: SchemaListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListSchemasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj,
  });
}

export interface ListSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListSchemaVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemaVersionsInput): any => ({
    ...obj,
  });
}

export interface ListSchemaVersionsResponse {
  /**
   * <p>An array of <code>SchemaVersionList</code> objects containing details of each schema version.</p>
   */
  Schemas?: SchemaVersionListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListSchemaVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemaVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListSessionsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>Tags belonging to the session. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

export namespace ListSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSessionsRequest): any => ({
    ...obj,
  });
}

export interface ListSessionsResponse {
  /**
   * <p>Returns the Id of the session. </p>
   */
  Ids?: string[];

  /**
   * <p>Returns the session object. </p>
   */
  Sessions?: Session[];

  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   */
  NextToken?: string;
}

export namespace ListSessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSessionsResponse): any => ({
    ...obj,
  });
}

export interface ListStatementsRequest {
  /**
   * <p>The Session ID of the statements.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The origin of the request to list statements.</p>
   */
  RequestOrigin?: string;

  NextToken?: string;
}

export namespace ListStatementsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStatementsRequest): any => ({
    ...obj,
  });
}

export interface ListStatementsResponse {
  /**
   * <p>Returns the list of statements.</p>
   */
  Statements?: Statement[];

  NextToken?: string;
}

export namespace ListStatementsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStatementsResponse): any => ({
    ...obj,
  });
}

export interface ListTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTriggersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTriggersRequest): any => ({
    ...obj,
  });
}

export interface ListTriggersResponse {
  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   */
  TriggerNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListTriggersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTriggersResponse): any => ({
    ...obj,
  });
}

export interface ListWorkflowsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkflowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkflowsRequest): any => ({
    ...obj,
  });
}

export interface ListWorkflowsResponse {
  /**
   * <p>List of names of workflows in the account.</p>
   */
  Workflows?: string[];

  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   */
  NextToken?: string;
}

export namespace ListWorkflowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
    ...obj,
  });
}

export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The security configuration to set.</p>
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

export namespace PutDataCatalogEncryptionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDataCatalogEncryptionSettingsRequest): any => ({
    ...obj,
  });
}

export interface PutDataCatalogEncryptionSettingsResponse {}

export namespace PutDataCatalogEncryptionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDataCatalogEncryptionSettingsResponse): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyRequest {
  /**
   * <p>Contains the policy document to set, in JSON format.</p>
   */
  PolicyInJson: string | undefined;

  /**
   * <p>Do not use. For internal use only.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call does not depend on the existence of a policy.</p>
   */
  PolicyExistsCondition?: ExistCondition | string;

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
   */
  EnableHybrid?: EnableHybridValues | string;
}

export namespace PutResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyResponse {
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   */
  PolicyHash?: string;
}

export namespace PutResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface PutSchemaVersionMetadataInput {
  /**
   * <p>The unique ID for the schema.</p>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key's corresponding value.</p>
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

export namespace PutSchemaVersionMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSchemaVersionMetadataInput): any => ({
    ...obj,
  });
}

export interface PutSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name for the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name for the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The latest version of the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * <p>The value of the metadata key.</p>
   */
  MetadataValue?: string;
}

export namespace PutSchemaVersionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSchemaVersionMetadataResponse): any => ({
    ...obj,
  });
}

export interface PutWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   */
  RunId: string | undefined;

  /**
   * <p>The properties to put for the specified run.</p>
   */
  RunProperties: Record<string, string> | undefined;
}

export namespace PutWorkflowRunPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutWorkflowRunPropertiesRequest): any => ({
    ...obj,
  });
}

export interface PutWorkflowRunPropertiesResponse {}

export namespace PutWorkflowRunPropertiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutWorkflowRunPropertiesResponse): any => ({
    ...obj,
  });
}

export interface QuerySchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.</p>
   */
  MetadataList?: MetadataKeyValuePair[];

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace QuerySchemaVersionMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuerySchemaVersionMetadataInput): any => ({
    ...obj,
  });
}

export interface QuerySchemaVersionMetadataResponse {
  /**
   * <p>A map of a metadata key and associated values.</p>
   */
  MetadataInfoMap?: Record<string, MetadataInfo>;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace QuerySchemaVersionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuerySchemaVersionMetadataResponse): any => ({
    ...obj,
  });
}

export interface RegisterSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for the <code>SchemaName</code>.</p>
   */
  SchemaDefinition: string | undefined;
}

export namespace RegisterSchemaVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterSchemaVersionInput): any => ({
    ...obj,
  });
}

export interface RegisterSchemaVersionResponse {
  /**
   * <p>The unique ID that represents the version of this schema.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The version of this schema (for sync flow only, in case this is the first version).</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;
}

export namespace RegisterSchemaVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterSchemaVersionResponse): any => ({
    ...obj,
  });
}

export interface RemoveSchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The value of the metadata key.</p>
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

export namespace RemoveSchemaVersionMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveSchemaVersionMetadataInput): any => ({
    ...obj,
  });
}

export interface RemoveSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The latest version of the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The version ID for the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * <p>The value of the metadata key.</p>
   */
  MetadataValue?: string;
}

export namespace RemoveSchemaVersionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveSchemaVersionMetadataResponse): any => ({
    ...obj,
  });
}

export interface ResetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

export namespace ResetJobBookmarkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetJobBookmarkRequest): any => ({
    ...obj,
  });
}

export interface ResetJobBookmarkResponse {
  /**
   * <p>The reset bookmark entry.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace ResetJobBookmarkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetJobBookmarkResponse): any => ({
    ...obj,
  });
}

export interface ResumeWorkflowRunRequest {
  /**
   * <p>The name of the workflow to resume.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to resume.</p>
   */
  RunId: string | undefined;

  /**
   * <p>A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.</p>
   */
  NodeIds: string[] | undefined;
}

export namespace ResumeWorkflowRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface ResumeWorkflowRunResponse {
  /**
   * <p>The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.</p>
   */
  RunId?: string;

  /**
   * <p>A list of the node IDs for the nodes that were actually restarted.</p>
   */
  NodeIds?: string[];
}

export namespace ResumeWorkflowRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeWorkflowRunResponse): any => ({
    ...obj,
  });
}

export interface RunStatementRequest {
  /**
   * <p>The Session Id of the statement to be run.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The statement code to be run.</p>
   */
  Code: string | undefined;

  /**
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

export namespace RunStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunStatementRequest): any => ({
    ...obj,
  });
}

export interface RunStatementResponse {
  /**
   * <p>Returns the Id of the statement that was run.</p>
   */
  Id?: number;
}

export namespace RunStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunStatementResponse): any => ({
    ...obj,
  });
}

export interface SearchTablesRequest {
  /**
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>
   *             </code>.</p>
   */
  CatalogId?: string;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   *
   * 	        <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   */
  Filters?: PropertyPredicate[];

  /**
   * <p>A string used for a text search.</p>
   * 	        <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   */
  SearchText?: string;

  /**
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Allows you to specify that you want to search the tables shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *
   * 	        <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will search the tables shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will search the tables shared with your account, as well as the tables in yor local account. </p>
   *             </li>
   *          </ul>
   */
  ResourceShareType?: ResourceShareType | string;
}

export namespace SearchTablesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTablesRequest): any => ({
    ...obj,
  });
}

export interface SearchTablesResponse {
  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the requested <code>Table</code> objects. The <code>SearchTables</code> response returns only the tables that you have access to.</p>
   */
  TableList?: Table[];
}

export namespace SearchTablesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTablesResponse): any => ({
    ...obj,
  });
}

export interface StartBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * <p>Specifies the parameters as a <code>BlueprintParameters</code> object.</p>
   */
  Parameters?: string;

  /**
   * <p>Specifies the IAM role used to create the workflow.</p>
   */
  RoleArn: string | undefined;
}

export namespace StartBlueprintRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBlueprintRunRequest): any => ({
    ...obj,
  });
}

export interface StartBlueprintRunResponse {
  /**
   * <p>The run ID for this blueprint run.</p>
   */
  RunId?: string;
}

export namespace StartBlueprintRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBlueprintRunResponse): any => ({
    ...obj,
  });
}

export interface StartCrawlerRequest {
  /**
   * <p>Name of the crawler to start.</p>
   */
  Name: string | undefined;
}

export namespace StartCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCrawlerRequest): any => ({
    ...obj,
  });
}

export interface StartCrawlerResponse {}

export namespace StartCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCrawlerResponse): any => ({
    ...obj,
  });
}

export interface CreateJobRequest {
  /**
   * <p>The name you assign to this job definition. It must be unique in your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role: string | undefined;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that runs this job.</p>
   */
  Command: JobCommand | undefined;

  /**
   * <p>The default arguments for this job.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>Non-overridable arguments for this job, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: Record<string, string>;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * @deprecated
   *
   * <p>This parameter is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of Glue data processing units (DPUs) to allocate to this Job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *        of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *        For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *          pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *          Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *          The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   *          <p>For Glue version 2.0 jobs, you cannot instead specify a <code>Maximum capacity</code>. Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The tags to use with this job. You may use tags to limit access to the job. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
}

export namespace CreateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
    ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
  });
}

export interface GetJobResponse {
  /**
   * <p>The requested job definition.</p>
   */
  Job?: Job;
}

export namespace GetJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj,
    ...(obj.Job && { Job: Job.filterSensitiveLog(obj.Job) }),
  });
}

export interface BatchGetJobsResponse {
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * <p>A list of names of jobs not found.</p>
   */
  JobsNotFound?: string[];
}

export namespace BatchGetJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetJobsResponse): any => ({
    ...obj,
    ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => Job.filterSensitiveLog(item)) }),
  });
}

export interface GetJobsResponse {
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * <p>A continuation token, if not all job definitions have yet been returned.</p>
   */
  NextToken?: string;
}

export namespace GetJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobsResponse): any => ({
    ...obj,
    ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => Job.filterSensitiveLog(item)) }),
  });
}
