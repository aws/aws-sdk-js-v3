// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";
import {
  Action,
  Aggregate,
  AthenaConnectorSource,
  BasicCatalogTarget,
  CatalogHudiSource,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSource,
  Compatibility,
  ConnectionInput,
  ConnectionsList,
  CrawlerTargets,
  CsvHeaderOption,
  CustomCode,
  CustomEntityType,
  DatabaseInput,
  DataQualityTargetTable,
  DataSource,
  DirectKafkaSource,
  DirectKinesisSource,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamicTransform,
  DynamoDBCatalogSource,
  ErrorDetail,
  EvaluateDataQuality,
  EventBatchingCondition,
  ExecutionClass,
  ExecutionProperty,
  FillMissingValues,
  Filter,
  GovernedCatalogSource,
  GovernedCatalogTarget,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JobCommand,
  Join,
  LakeFormationConfiguration,
  LineageConfiguration,
  Merge,
  MicrosoftSQLServerCatalogSource,
  MicrosoftSQLServerCatalogTarget,
  MySQLCatalogSource,
  MySQLCatalogTarget,
  NotificationProperty,
  OracleSQLCatalogSource,
  OracleSQLCatalogTarget,
  PartitionInput,
  PIIDetection,
  PostgreSQLCatalogSource,
  PostgreSQLCatalogTarget,
  Predicate,
  RecrawlPolicy,
  RedshiftSource,
  RedshiftTarget,
  RegistryId,
  RelationalCatalogSource,
  RenameField,
  S3CatalogHudiSource,
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DirectTarget,
  S3GlueParquetTarget,
  S3HudiCatalogTarget,
  S3HudiDirectTarget,
  S3HudiSource,
  S3JsonSource,
  S3ParquetSource,
  SchemaChangePolicy,
  SchemaId,
  SchemaStatus,
  SchemaVersionStatus,
  SelectFields,
  SelectFromCollection,
  SourceControlAuthStrategy,
  SourceControlDetails,
  SourceControlProvider,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  TaskStatusType,
  TransformParameters,
  Trigger,
  Union,
  WorkerType,
} from "./models_0";
import {
  ColumnStatistics,
  DataCatalogEncryptionSettings,
  DataQualityEvaluationRunAdditionalRunOptions,
  JobBookmarkEntry,
  RegistryStatus,
  ResourceShareType,
  SchemaVersionNumber,
  Session,
  Statement,
  Table,
  TableInput,
  TransformFilterCriteria,
  TransformSortCriteria,
  UserDefinedFunctionInput,
} from "./models_1";

export enum CrawlerHistoryState {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

/**
 * <p>Contains the information for a run of a crawler.</p>
 */
export interface CrawlerHistory {
  /**
   * <p>A UUID identifier for each crawl.</p>
   */
  CrawlId?: string;

  /**
   * <p>The state of the crawl.</p>
   */
  State?: CrawlerHistoryState | string;

  /**
   * <p>The date and time on which the crawl started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time on which the crawl ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.</p>
   */
  Summary?: string;

  /**
   * <p>If an error occurred, the error message associated with the crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group associated with the crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream associated with the crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>The prefix for a CloudWatch message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * <p>The number of data processing units (DPU) used in hours for the crawl.</p>
   */
  DPUHour?: number;
}

export interface ListCrawlsResponse {
  /**
   * <p>A list of <code>CrawlerHistory</code> objects representing the crawl runs that meet your criteria.</p>
   */
  Crawls?: CrawlerHistory[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
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

/**
 * <p>Criteria used to return data quality results.</p>
 */
export interface DataQualityResultFilterCriteria {
  /**
   * <p>Filter results by the specified data source. For example, retrieving all results for an Glue table.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>Filter results by the specified job name.</p>
   */
  JobName?: string;

  /**
   * <p>Filter results by the specified job run ID.</p>
   */
  JobRunId?: string;

  /**
   * <p>Filter results by runs that started after this time.</p>
   */
  StartedAfter?: Date;

  /**
   * <p>Filter results by runs that started before this time.</p>
   */
  StartedBefore?: Date;
}

export interface ListDataQualityResultsRequest {
  /**
   * <p>The filter criteria.</p>
   */
  Filter?: DataQualityResultFilterCriteria;

  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes a data quality result.</p>
 */
export interface DataQualityResultDescription {
  /**
   * <p>The unique result ID for this data quality result.</p>
   */
  ResultId?: string;

  /**
   * <p>The table name associated with the data quality result.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The job name associated with the data quality result.</p>
   */
  JobName?: string;

  /**
   * <p>The job run ID associated with the data quality result.</p>
   */
  JobRunId?: string;

  /**
   * <p>The time that the run started for this data quality result.</p>
   */
  StartedOn?: Date;
}

export interface ListDataQualityResultsResponse {
  /**
   * <p>A list of <code>DataQualityResultDescription</code> objects.</p>
   */
  Results: DataQualityResultDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * <p>A filter for listing data quality recommendation runs.</p>
 */
export interface DataQualityRuleRecommendationRunFilter {
  /**
   * <p>Filter based on a specified data source (Glue table).</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter based on time for results started before provided time.</p>
   */
  StartedBefore?: Date;

  /**
   * <p>Filter based on time for results started after provided time.</p>
   */
  StartedAfter?: Date;
}

export interface ListDataQualityRuleRecommendationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   */
  Filter?: DataQualityRuleRecommendationRunFilter;

  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes the result of a data quality rule recommendation run.</p>
 */
export interface DataQualityRuleRecommendationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;

  /**
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The date and time when this run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The data source (Glue table) associated with the recommendation run.</p>
   */
  DataSource?: DataSource;
}

export interface ListDataQualityRuleRecommendationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRuleRecommendationRunDescription</code> objects.</p>
   */
  Runs?: DataQualityRuleRecommendationRunDescription[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * <p>The filter criteria.</p>
 */
export interface DataQualityRulesetEvaluationRunFilter {
  /**
   * <p>Filter based on a data source (an Glue table) associated with the run.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter results by runs that started before this time.</p>
   */
  StartedBefore?: Date;

  /**
   * <p>Filter results by runs that started after this time.</p>
   */
  StartedAfter?: Date;
}

export interface ListDataQualityRulesetEvaluationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   */
  Filter?: DataQualityRulesetEvaluationRunFilter;

  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes the result of a data quality ruleset evaluation run.</p>
 */
export interface DataQualityRulesetEvaluationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;

  /**
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The date and time when the run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The data source (an Glue table) associated with the run.</p>
   */
  DataSource?: DataSource;
}

export interface ListDataQualityRulesetEvaluationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRulesetEvaluationRunDescription</code> objects representing data quality ruleset runs.</p>
   */
  Runs?: DataQualityRulesetEvaluationRunDescription[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * <p>The criteria used to filter data quality rulesets.</p>
 */
export interface DataQualityRulesetFilterCriteria {
  /**
   * <p>The name of the ruleset filter criteria.</p>
   */
  Name?: string;

  /**
   * <p>The description of the ruleset filter criteria.</p>
   */
  Description?: string;

  /**
   * <p>Filter on rulesets created before this date.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Filter on rulesets created after this date.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter on rulesets last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * <p>Filter on rulesets last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * <p>The name and database name of the target table.</p>
   */
  TargetTable?: DataQualityTargetTable;
}

export interface ListDataQualityRulesetsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filter criteria. </p>
   */
  Filter?: DataQualityRulesetFilterCriteria;

  /**
   * <p>A list of key-value pair tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.</p>
 */
export interface DataQualityRulesetListDetails {
  /**
   * <p>The name of the data quality ruleset.</p>
   */
  Name?: string;

  /**
   * <p>A description of the data quality ruleset.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the data quality ruleset was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time the data quality ruleset was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>An object representing an Glue table.</p>
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   */
  RecommendationRunId?: string;

  /**
   * <p>The number of rules in the ruleset.</p>
   */
  RuleCount?: number;
}

export interface ListDataQualityRulesetsResponse {
  /**
   * <p>A paginated list of rulesets for the specified list of Glue tables.</p>
   */
  Rulesets?: DataQualityRulesetListDetails[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
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

/**
 * <p>A structure containing the details for a registry.</p>
 */
export interface RegistryListItem {
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
   * <p>The data the registry was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date the registry was updated.</p>
   */
  UpdatedTime?: string;
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

/**
 * <p>An object that contains minimal details for a schema.</p>
 */
export interface SchemaListItem {
  /**
   * <p>the name of the registry where the schema resides.</p>
   */
  RegistryName?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>A description for the schema.</p>
   */
  Description?: string;

  /**
   * <p>The status of the schema.</p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * <p>The date and time that a schema was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date and time that a schema was updated.</p>
   */
  UpdatedTime?: string;
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

/**
 * <p>An object containing the details about a schema version.</p>
 */
export interface SchemaVersionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The unique identifier of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * <p>The date and time the schema version was created.</p>
   */
  CreatedTime?: string;
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

export interface ListSessionsResponse {
  /**
   * <p>Returns the ID of the session. </p>
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

export interface ListStatementsRequest {
  /**
   * <p>The Session ID of the statements.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The origin of the request to list statements.</p>
   */
  RequestOrigin?: string;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export interface ListStatementsResponse {
  /**
   * <p>Returns the list of statements.</p>
   */
  Statements?: Statement[];

  /**
   * <p>A continuation token, if not all statements have yet been returned.</p>
   */
  NextToken?: string;
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

export interface PutDataCatalogEncryptionSettingsResponse {}

export enum EnableHybridValues {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export enum ExistCondition {
  MUST_EXIST = "MUST_EXIST",
  NONE = "NONE",
  NOT_EXIST = "NOT_EXIST",
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

export interface PutResourcePolicyResponse {
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   */
  PolicyHash?: string;
}

/**
 * <p>A structure containing a key value pair for metadata.</p>
 */
export interface MetadataKeyValuePair {
  /**
   * <p>A metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * <p>A metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;
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

export interface PutWorkflowRunPropertiesResponse {}

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

/**
 * <p>A structure containing other metadata for a schema version belonging to the same metadata key.</p>
 */
export interface OtherMetadataValueListItem {
  /**
   * <p>The metadata key’s corresponding value for the other metadata belonging to the same metadata key.</p>
   */
  MetadataValue?: string;

  /**
   * <p>The time at which the entry was created.</p>
   */
  CreatedTime?: string;
}

/**
 * <p>A structure containing metadata information for a schema version.</p>
 */
export interface MetadataInfo {
  /**
   * <p>The metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;

  /**
   * <p>The time at which the entry was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>Other metadata belonging to the same metadata key.</p>
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[];
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
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for the <code>SchemaName</code>.</p>
   */
  SchemaDefinition: string | undefined;
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

export interface ResetJobBookmarkResponse {
  /**
   * <p>The reset bookmark entry.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

/**
 * <p>Too many jobs are being run concurrently.</p>
 */
export class ConcurrentRunsExceededException extends __BaseException {
  readonly name: "ConcurrentRunsExceededException" = "ConcurrentRunsExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentRunsExceededException, __BaseException>) {
    super({
      name: "ConcurrentRunsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentRunsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The workflow is in an invalid state to perform a requested operation.</p>
 */
export class IllegalWorkflowStateException extends __BaseException {
  readonly name: "IllegalWorkflowStateException" = "IllegalWorkflowStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalWorkflowStateException, __BaseException>) {
    super({
      name: "IllegalWorkflowStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalWorkflowStateException.prototype);
    this.Message = opts.Message;
  }
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

export interface RunStatementResponse {
  /**
   * <p>Returns the Id of the statement that was run.</p>
   */
  Id?: number;
}

export enum Comparator {
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_EQUALS = "GREATER_THAN_EQUALS",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_EQUALS = "LESS_THAN_EQUALS",
}

/**
 * <p>Defines a property predicate.</p>
 */
export interface PropertyPredicate {
  /**
   * <p>The key of the property.</p>
   */
  Key?: string;

  /**
   * <p>The value of the property.</p>
   */
  Value?: string;

  /**
   * <p>The comparator used to compare this property to others.</p>
   */
  Comparator?: Comparator | string;
}

export enum Sort {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 */
export interface SortCriterion {
  /**
   * <p>The name of the field on which to sort.</p>
   */
  FieldName?: string;

  /**
   * <p>An ascending or descending sort.</p>
   */
  Sort?: Sort | string;
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
   *          <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   */
  Filters?: PropertyPredicate[];

  /**
   * <p>A string used for a text search.</p>
   *          <p>Specifying a value in quotes filters based on an exact match to the value.</p>
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
   *          <ul>
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

/**
 * <p>The blueprint is in an invalid state to perform a requested operation.</p>
 */
export class IllegalBlueprintStateException extends __BaseException {
  readonly name: "IllegalBlueprintStateException" = "IllegalBlueprintStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalBlueprintStateException, __BaseException>) {
    super({
      name: "IllegalBlueprintStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalBlueprintStateException.prototype);
    this.Message = opts.Message;
  }
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

export interface StartBlueprintRunResponse {
  /**
   * <p>The run ID for this blueprint run.</p>
   */
  RunId?: string;
}

export interface StartCrawlerRequest {
  /**
   * <p>Name of the crawler to start.</p>
   */
  Name: string | undefined;
}

export interface StartCrawlerResponse {}

/**
 * <p>There is no applicable schedule.</p>
 */
export class NoScheduleException extends __BaseException {
  readonly name: "NoScheduleException" = "NoScheduleException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoScheduleException, __BaseException>) {
    super({
      name: "NoScheduleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoScheduleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified scheduler is already running.</p>
 */
export class SchedulerRunningException extends __BaseException {
  readonly name: "SchedulerRunningException" = "SchedulerRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerRunningException, __BaseException>) {
    super({
      name: "SchedulerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerRunningException.prototype);
    this.Message = opts.Message;
  }
}

export interface StartCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler to schedule.</p>
   */
  CrawlerName: string | undefined;
}

export interface StartCrawlerScheduleResponse {}

export interface StartDataQualityRuleRecommendationRunRequest {
  /**
   * <p>The data source (Glue table) associated with this run.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   */
  Role: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>A name for the ruleset.</p>
   */
  CreatedRulesetName?: string;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   */
  ClientToken?: string;
}

export interface StartDataQualityRuleRecommendationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;
}

export interface StartDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The data source (Glue table) associated with this run.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   */
  Role: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   */
  ClientToken?: string;

  /**
   * <p>Additional run options you can specify for an evaluation run.</p>
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;

  /**
   * <p>A list of ruleset names.</p>
   */
  RulesetNames: string[] | undefined;
}

export interface StartDataQualityRulesetEvaluationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;
}

export interface StartExportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon S3 path where you export the labels.</p>
   */
  OutputS3Path: string | undefined;
}

export interface StartExportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export interface StartImportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   */
  InputS3Path: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  ReplaceAllLabels?: boolean;
}

export interface StartImportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export interface StartJobRunRequest {
  /**
   * <p>The name of the job definition to use.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   */
  JobRunId?: string;

  /**
   * <p>The job arguments specifically for this run. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments.
   *     Retrieve secrets from a Glue Connection, Secrets Manager or
   *     other secret management mechanism if you intend to keep them within the Job.
   *     </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  Arguments?: Record<string, string>;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this JobRun.
   *       You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This value overrides the timeout value set in the parent job.</p>
   *          <p>Streaming jobs do not have a timeout. The default for non-streaming jobs is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *         allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate a minimum of 2 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X.</p>
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
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;
}

export interface StartJobRunResponse {
  /**
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;
}

/**
 * <p>The machine learning transform is not ready to run.</p>
 */
export class MLTransformNotReadyException extends __BaseException {
  readonly name: "MLTransformNotReadyException" = "MLTransformNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MLTransformNotReadyException, __BaseException>) {
    super({
      name: "MLTransformNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MLTransformNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

export interface StartMLEvaluationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export interface StartMLEvaluationTaskRunResponse {
  /**
   * <p>The unique identifier associated with this run.</p>
   */
  TaskRunId?: string;
}

export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
   *       set.</p>
   */
  OutputS3Path: string | undefined;
}

export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   */
  TaskRunId?: string;
}

export interface StartTriggerRequest {
  /**
   * <p>The name of the trigger to start.</p>
   */
  Name: string | undefined;
}

export interface StartTriggerResponse {
  /**
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;
}

export interface StartWorkflowRunRequest {
  /**
   * <p>The name of the workflow to start.</p>
   */
  Name: string | undefined;

  /**
   * <p>The workflow run properties for the new workflow run.</p>
   */
  RunProperties?: Record<string, string>;
}

export interface StartWorkflowRunResponse {
  /**
   * <p>An Id for the new run.</p>
   */
  RunId?: string;
}

/**
 * <p>The specified crawler is not running.</p>
 */
export class CrawlerNotRunningException extends __BaseException {
  readonly name: "CrawlerNotRunningException" = "CrawlerNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerNotRunningException, __BaseException>) {
    super({
      name: "CrawlerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified crawler is stopping.</p>
 */
export class CrawlerStoppingException extends __BaseException {
  readonly name: "CrawlerStoppingException" = "CrawlerStoppingException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerStoppingException, __BaseException>) {
    super({
      name: "CrawlerStoppingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerStoppingException.prototype);
    this.Message = opts.Message;
  }
}

export interface StopCrawlerRequest {
  /**
   * <p>Name of the crawler to stop.</p>
   */
  Name: string | undefined;
}

export interface StopCrawlerResponse {}

/**
 * <p>The specified scheduler is not running.</p>
 */
export class SchedulerNotRunningException extends __BaseException {
  readonly name: "SchedulerNotRunningException" = "SchedulerNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerNotRunningException, __BaseException>) {
    super({
      name: "SchedulerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

export interface StopCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler whose schedule state to set.</p>
   */
  CrawlerName: string | undefined;
}

export interface StopCrawlerScheduleResponse {}

export interface StopSessionRequest {
  /**
   * <p>The ID of the session to be stopped.</p>
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

export interface StopSessionResponse {
  /**
   * <p>Returns the Id of the stopped session.</p>
   */
  Id?: string;
}

export interface StopTriggerRequest {
  /**
   * <p>The name of the trigger to stop.</p>
   */
  Name: string | undefined;
}

export interface StopTriggerResponse {
  /**
   * <p>The name of the trigger that was stopped.</p>
   */
  Name?: string;
}

export interface StopWorkflowRunRequest {
  /**
   * <p>The name of the workflow to stop.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to stop.</p>
   */
  RunId: string | undefined;
}

export interface StopWorkflowRunResponse {}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the Glue resource to which to add the tags. For more
   *       information about Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">Glue ARN string pattern</a>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to add to this resource.</p>
   */
  TagsToAdd: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to remove from this resource.</p>
   */
  TagsToRemove: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateBlueprintRequest {
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
}

export interface UpdateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was updated.</p>
   */
  Name?: string;
}

/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 */
export interface UpdateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Specifies the configuration of custom datatypes.</p>
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * <p>Specifies a list of supported custom datatypes.</p>
   */
  CustomDatatypes?: string[];
}

/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 */
export interface UpdateGrokClassifierRequest {
  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   */
  Classification?: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern?: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

/**
 * <p>Specifies a JSON classifier to be updated.</p>
 */
export interface UpdateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath?: string;
}

/**
 * <p>Specifies an XML classifier to be updated.</p>
 */
export interface UpdateXMLClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification?: string;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export interface UpdateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   */
  GrokClassifier?: UpdateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   */
  XMLClassifier?: UpdateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   */
  JsonClassifier?: UpdateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   */
  CsvClassifier?: UpdateCsvClassifierRequest;
}

export interface UpdateClassifierResponse {}

/**
 * <p>There was a version conflict.</p>
 */
export class VersionMismatchException extends __BaseException {
  readonly name: "VersionMismatchException" = "VersionMismatchException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionMismatchException, __BaseException>) {
    super({
      name: "VersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}

export interface UpdateColumnStatisticsForPartitionRequest {
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
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * <p>Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.</p>
 */
export interface ColumnStatisticsError {
  /**
   * <p>The <code>ColumnStatistics</code> of the column.</p>
   */
  ColumnStatistics?: ColumnStatistics;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;
}

export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * <p>Error occurred during updating column statistics data.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export interface UpdateColumnStatisticsForTableRequest {
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
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

export interface UpdateColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatisticsErrors.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection definition to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   */
  ConnectionInput: ConnectionInput | undefined;
}

export interface UpdateConnectionResponse {}

export interface UpdateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   */
  Role?: string;

  /**
   * <p>The Glue database where results are stored, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>A list of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
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
   * <p>Specifies Lake Formation configuration settings for the crawler.</p>
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;
}

export interface UpdateCrawlerResponse {}

export interface UpdateCrawlerScheduleRequest {
  /**
   * <p>The name of the crawler whose schedule to update.</p>
   */
  CrawlerName: string | undefined;

  /**
   * <p>The updated <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;
}

export interface UpdateCrawlerScheduleResponse {}

export interface UpdateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to update in the catalog. For Hive
   *       compatibility, this is folded to lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>DatabaseInput</code> object specifying the new definition
   *       of the metadata database in the catalog.</p>
   */
  DatabaseInput: DatabaseInput | undefined;
}

export interface UpdateDatabaseResponse {}

export interface UpdateDataQualityRulesetRequest {
  /**
   * <p>The name of the data quality ruleset.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new name of the ruleset, if you are renaming it.</p>
   */
  UpdatedName?: string;

  /**
   * <p>A description of the ruleset.</p>
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   */
  Ruleset?: string;
}

export interface UpdateDataQualityRulesetResponse {
  /**
   * <p>The name of the data quality ruleset.</p>
   */
  Name?: string;

  /**
   * <p>A description of the ruleset.</p>
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   */
  Ruleset?: string;
}

/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 */
export interface DevEndpointCustomLibraries {
  /**
   * <p>The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3)
   *       bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be
   *       complete paths separated by a comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;
}

export interface UpdateDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   */
  PublicKey?: string;

  /**
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   */
  AddPublicKeys?: string[];

  /**
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   */
  DeletePublicKeys?: string[];

  /**
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   */
  CustomLibraries?: DevEndpointCustomLibraries;

  /**
   * <p>
   *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
   *       needs to be updated, or <code>False</code> if otherwise.</p>
   */
  UpdateEtlLibraries?: boolean;

  /**
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   */
  DeleteArguments?: string[];

  /**
   * <p>The map of arguments to add the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   *          <p>Valid arguments are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  AddArguments?: Record<string, string>;
}

export interface UpdateDevEndpointResponse {}

export interface UpdateJobResponse {
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

export interface UpdateJobFromSourceControlRequest {
  /**
   * <p>The name of the Glue job to be synchronized to or from the remote repository.</p>
   */
  JobName?: string;

  /**
   * <p>The provider for the remote repository.</p>
   */
  Provider?: SourceControlProvider | string;

  /**
   * <p>The name of the remote repository that contains the job artifacts.</p>
   */
  RepositoryName?: string;

  /**
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   */
  RepositoryOwner?: string;

  /**
   * <p>An optional branch in the remote repository.</p>
   */
  BranchName?: string;

  /**
   * <p>An optional folder in the remote repository.</p>
   */
  Folder?: string;

  /**
   * <p>A commit ID for a commit in the remote repository.</p>
   */
  CommitId?: string;

  /**
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   */
  AuthStrategy?: SourceControlAuthStrategy | string;

  /**
   * <p>The value of the authorization token.</p>
   */
  AuthToken?: string;
}

export interface UpdateJobFromSourceControlResponse {
  /**
   * <p>The name of the Glue job.</p>
   */
  JobName?: string;
}

export interface UpdateMLTransformRequest {
  /**
   * <p>A unique identifier that was generated when the transform was created.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The unique name that you gave the transform when you created it.</p>
   */
  Name?: string;

  /**
   * <p>A description of the transform. The default is an empty string.</p>
   */
  Description?: string;

  /**
   * <p>The configuration parameters that are specific to the transform type (algorithm) used.
   *       Conditionally dependent on the transform type.</p>
   */
  Parameters?: TransformParameters;

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
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

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
}

export interface UpdateMLTransformResponse {
  /**
   * <p>The unique identifier for the transform that was updated.</p>
   */
  TransformId?: string;
}

export interface UpdatePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in which the partition to be updated is located.</p>
   */
  TableName: string | undefined;

  /**
   * <p>List of partition key values that define the partition to update.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The new partition object to update the partition to.</p>
   *          <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export interface UpdatePartitionResponse {}

export interface UpdateRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;

  /**
   * <p>A description of the registry. If description is not provided, this field will not be updated.</p>
   */
  Description: string | undefined;
}

export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource name (ARN) of the updated registry.</p>
   */
  RegistryArn?: string;
}

export interface UpdateSchemaInput {
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
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Version number required for check pointing. One of <code>VersionNumber</code> or <code>Compatibility</code> has to be provided.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The new compatibility setting for the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>The new description for the schema.</p>
   */
  Description?: string;
}

export interface UpdateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the registry that contains the schema.</p>
   */
  RegistryName?: string;
}

export interface UpdateSourceControlFromJobRequest {
  /**
   * <p>The name of the Glue job to be synchronized to or from the remote repository.</p>
   */
  JobName?: string;

  /**
   * <p>The provider for the remote repository.</p>
   */
  Provider?: SourceControlProvider | string;

  /**
   * <p>The name of the remote repository that contains the job artifacts.</p>
   */
  RepositoryName?: string;

  /**
   * <p>The owner of the remote repository that contains the job artifacts.</p>
   */
  RepositoryOwner?: string;

  /**
   * <p>An optional branch in the remote repository.</p>
   */
  BranchName?: string;

  /**
   * <p>An optional folder in the remote repository.</p>
   */
  Folder?: string;

  /**
   * <p>A commit ID for a commit in the remote repository.</p>
   */
  CommitId?: string;

  /**
   * <p>The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token.</p>
   */
  AuthStrategy?: SourceControlAuthStrategy | string;

  /**
   * <p>The value of the authorization token.</p>
   */
  AuthToken?: string;
}

export interface UpdateSourceControlFromJobResponse {
  /**
   * <p>The name of the Glue job.</p>
   */
  JobName?: string;
}

export interface UpdateTableRequest {
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
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   */
  TableInput: TableInput | undefined;

  /**
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
   *       before updating it. However, if <code>skipArchive</code> is set to true,
   *         <code>UpdateTable</code> does not create the archived version.</p>
   */
  SkipArchive?: boolean;

  /**
   * <p>The transaction ID at which to update the table contents. </p>
   */
  TransactionId?: string;

  /**
   * <p>The version ID at which to update the table contents. </p>
   */
  VersionId?: string;
}

export interface UpdateTableResponse {}

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
  /**
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

export interface UpdateTriggerRequest {
  /**
   * <p>The name of the trigger to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new values with which to update the trigger.</p>
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

export interface UpdateTriggerResponse {
  /**
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

export interface UpdateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export interface UpdateUserDefinedFunctionResponse {}

export interface UpdateWorkflowRequest {
  /**
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

export interface UpdateWorkflowResponse {
  /**
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

/**
 * <p>Specifies the mapping of data property keys.</p>
 */
export interface Mapping {
  /**
   * <p>After the apply mapping, what the name of the column should be. Can be the same as <code>FromPath</code>.</p>
   */
  ToKey?: string;

  /**
   * <p>The table or column to be modified.</p>
   */
  FromPath?: string[];

  /**
   * <p>The type of the data to be modified.</p>
   */
  FromType?: string;

  /**
   * <p>The data type that the data is to be modified to.</p>
   */
  ToType?: string;

  /**
   * <p>If true, then the column is removed.</p>
   */
  Dropped?: boolean;

  /**
   * <p>Only applicable to nested data structures. If you want to change the parent structure, but also one of its children, you can fill out this data strucutre. It is also <code>Mapping</code>, but its <code>FromPath</code> will be the parent's <code>FromPath</code> plus the <code>FromPath</code> from this structure.</p>
   *          <p>For the children part, suppose you have the structure:</p>
   *          <p>
   *             <code>{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   }]
   * }</code>
   *          </p>
   *          <p>You can specify a <code>Mapping</code> that looks like:</p>
   *          <p>
   *             <code>{
   *   "FromPath": "OuterStructure",
   *   "ToKey": "OuterStructure",
   *   "ToType": "Struct",
   *   "Dropped": false,
   *   "Chidlren": [{
   *        "FromPath": "inner",
   *        "ToKey": "inner",
   *        "ToType": "Double",
   *       "Dropped": false,
   *   }]
   * }</code>
   *          </p>
   */
  Children?: Mapping[];
}

/**
 * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
 */
export interface ApplyMapping {
  /**
   * <p>The name of the transform node.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data inputs identified by their node names.</p>
   */
  Inputs: string[] | undefined;

  /**
   * <p>Specifies the mapping of data property keys in the data source to data property keys in the data target.</p>
   */
  Mapping: Mapping[] | undefined;
}

/**
 * <p>
 *             <code>CodeGenConfigurationNode</code> enumerates all valid Node types. One and only one of its member variables can be populated.</p>
 */
export interface CodeGenConfigurationNode {
  /**
   * <p>Specifies a connector to an Amazon Athena data source.</p>
   */
  AthenaConnectorSource?: AthenaConnectorSource;

  /**
   * <p>Specifies a connector to a JDBC data source.</p>
   */
  JDBCConnectorSource?: JDBCConnectorSource;

  /**
   * <p>Specifies a connector to an Apache Spark data source.</p>
   */
  SparkConnectorSource?: SparkConnectorSource;

  /**
   * <p>Specifies a data store in the Glue Data Catalog.</p>
   */
  CatalogSource?: CatalogSource;

  /**
   * <p>Specifies an Amazon Redshift data store.</p>
   */
  RedshiftSource?: RedshiftSource;

  /**
   * <p>Specifies an Amazon S3 data store in the Glue Data Catalog.</p>
   */
  S3CatalogSource?: S3CatalogSource;

  /**
   * <p>Specifies a command-separated value (CSV) data store stored in Amazon S3.</p>
   */
  S3CsvSource?: S3CsvSource;

  /**
   * <p>Specifies a JSON data store stored in Amazon S3.</p>
   */
  S3JsonSource?: S3JsonSource;

  /**
   * <p>Specifies an Apache Parquet data store stored in Amazon S3.</p>
   */
  S3ParquetSource?: S3ParquetSource;

  /**
   * <p>Specifies a Relational database data source in the Glue Data Catalog.</p>
   */
  RelationalCatalogSource?: RelationalCatalogSource;

  /**
   * <p>Specifies a DynamoDB data source in the Glue Data Catalog.</p>
   */
  DynamoDBCatalogSource?: DynamoDBCatalogSource;

  /**
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   */
  JDBCConnectorTarget?: JDBCConnectorTarget;

  /**
   * <p>Specifies a target that uses an Apache Spark connector.</p>
   */
  SparkConnectorTarget?: SparkConnectorTarget;

  /**
   * <p>Specifies a target that uses a Glue Data Catalog table.</p>
   */
  CatalogTarget?: BasicCatalogTarget;

  /**
   * <p>Specifies a target that uses Amazon Redshift.</p>
   */
  RedshiftTarget?: RedshiftTarget;

  /**
   * <p>Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.</p>
   */
  S3CatalogTarget?: S3CatalogTarget;

  /**
   * <p>Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.</p>
   */
  S3GlueParquetTarget?: S3GlueParquetTarget;

  /**
   * <p>Specifies a data target that writes to Amazon S3.</p>
   */
  S3DirectTarget?: S3DirectTarget;

  /**
   * <p>Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.</p>
   */
  ApplyMapping?: ApplyMapping;

  /**
   * <p>Specifies a transform that chooses the data property keys that you want to keep.</p>
   */
  SelectFields?: SelectFields;

  /**
   * <p>Specifies a transform that chooses the data property keys that you want to drop.</p>
   */
  DropFields?: DropFields;

  /**
   * <p>Specifies a transform that renames a single data property key.</p>
   */
  RenameField?: RenameField;

  /**
   * <p>Specifies a transform that writes samples of the data to an Amazon S3 bucket.</p>
   */
  Spigot?: Spigot;

  /**
   * <p>Specifies a transform that joins two datasets into one dataset using a comparison phrase on the specified data property keys. You can use inner, outer, left, right, left semi, and left anti joins.</p>
   */
  Join?: Join;

  /**
   * <p>Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.</p>
   */
  SplitFields?: SplitFields;

  /**
   * <p>Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
   *          </p>
   */
  SelectFromCollection?: SelectFromCollection;

  /**
   * <p>Specifies a transform that locates records in the dataset that have missing values and adds a new field with a value determined by imputation. The input data set is used to train the machine learning model that determines what the missing value should be.</p>
   */
  FillMissingValues?: FillMissingValues;

  /**
   * <p>Specifies a transform that splits a dataset into two, based on a filter condition.</p>
   */
  Filter?: Filter;

  /**
   * <p>Specifies a transform that uses custom code you provide to perform the data transformation. The output is a collection of DynamicFrames.</p>
   */
  CustomCode?: CustomCode;

  /**
   * <p>Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.</p>
   */
  SparkSQL?: SparkSQL;

  /**
   * <p>Specifies a direct Amazon Kinesis data source.</p>
   */
  DirectKinesisSource?: DirectKinesisSource;

  /**
   * <p>Specifies an Apache Kafka data store.</p>
   */
  DirectKafkaSource?: DirectKafkaSource;

  /**
   * <p>Specifies a Kinesis data source in the Glue Data Catalog.</p>
   */
  CatalogKinesisSource?: CatalogKinesisSource;

  /**
   * <p>Specifies an Apache Kafka data store in the Data Catalog.</p>
   */
  CatalogKafkaSource?: CatalogKafkaSource;

  /**
   * <p>Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.</p>
   */
  DropNullFields?: DropNullFields;

  /**
   * <p>Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated. </p>
   */
  Merge?: Merge;

  /**
   * <p>Specifies a transform that combines the rows from two or more datasets into a single result.</p>
   */
  Union?: Union;

  /**
   * <p>Specifies a transform that identifies, removes or masks PII data.</p>
   */
  PIIDetection?: PIIDetection;

  /**
   * <p>Specifies a transform that groups rows by chosen fields and computes the aggregated value by specified function.</p>
   */
  Aggregate?: Aggregate;

  /**
   * <p>Specifies a transform that removes rows of repeating data from a data set.</p>
   */
  DropDuplicates?: DropDuplicates;

  /**
   * <p>Specifies a data target that writes to a goverened catalog.</p>
   */
  GovernedCatalogTarget?: GovernedCatalogTarget;

  /**
   * <p>Specifies a data source in a goverened Data Catalog.</p>
   */
  GovernedCatalogSource?: GovernedCatalogSource;

  /**
   * <p>Specifies a Microsoft SQL server data source in the Glue Data Catalog.</p>
   */
  MicrosoftSQLServerCatalogSource?: MicrosoftSQLServerCatalogSource;

  /**
   * <p>Specifies a MySQL data source in the Glue Data Catalog.</p>
   */
  MySQLCatalogSource?: MySQLCatalogSource;

  /**
   * <p>Specifies an Oracle data source in the Glue Data Catalog.</p>
   */
  OracleSQLCatalogSource?: OracleSQLCatalogSource;

  /**
   * <p>Specifies a PostgresSQL data source in the Glue Data Catalog.</p>
   */
  PostgreSQLCatalogSource?: PostgreSQLCatalogSource;

  /**
   * <p>Specifies a target that uses Microsoft SQL.</p>
   */
  MicrosoftSQLServerCatalogTarget?: MicrosoftSQLServerCatalogTarget;

  /**
   * <p>Specifies a target that uses MySQL.</p>
   */
  MySQLCatalogTarget?: MySQLCatalogTarget;

  /**
   * <p>Specifies a target that uses Oracle SQL.</p>
   */
  OracleSQLCatalogTarget?: OracleSQLCatalogTarget;

  /**
   * <p>Specifies a target that uses Postgres SQL.</p>
   */
  PostgreSQLCatalogTarget?: PostgreSQLCatalogTarget;

  /**
   * <p>Specifies a custom visual transform created by a user.</p>
   */
  DynamicTransform?: DynamicTransform;

  /**
   * <p>Specifies your data quality evaluation criteria.</p>
   */
  EvaluateDataQuality?: EvaluateDataQuality;

  /**
   * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog. The Hudi data source must be stored in Amazon S3.</p>
   */
  S3CatalogHudiSource?: S3CatalogHudiSource;

  /**
   * <p>Specifies a Hudi data source that is registered in the Glue Data Catalog.</p>
   */
  CatalogHudiSource?: CatalogHudiSource;

  /**
   * <p>Specifies a Hudi data source stored in Amazon S3.</p>
   */
  S3HudiSource?: S3HudiSource;

  /**
   * <p>Specifies a target that writes to a Hudi data source in the Glue Data Catalog.</p>
   */
  S3HudiCatalogTarget?: S3HudiCatalogTarget;

  /**
   * <p>Specifies a target that writes to a Hudi data source in Amazon S3.</p>
   */
  S3HudiDirectTarget?: S3HudiDirectTarget;
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
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments.
   *     Retrieve secrets from a Glue Connection, Secrets Manager or
   *     other secret management mechanism if you intend to keep them within the Job.
   *     </p>
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
   *          <p>The number of Glue data processing units (DPUs) to allocate to this Job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
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
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *          Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate a minimum of 2 DPUs.
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
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;

  /**
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   */
  SourceControlDetails?: SourceControlDetails;
}

/**
 * <p>Specifies a job definition.</p>
 */
export interface Job {
  /**
   * <p>The name you assign to this job definition.</p>
   */
  Name?: string;

  /**
   * <p>A description of the job.</p>
   */
  Description?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role?: string;

  /**
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that runs this job.</p>
   */
  Command?: JobCommand;

  /**
   * <p>The default arguments for this job, specified as name-value pairs.</p>
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
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   */
  MaxRetries?: number;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   *          <p></p>
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
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *       pricing page</a>.</p>
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *             Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate a minimum of 2 DPUs.
   *             The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   *          <p>For Glue version 2.0 jobs, you cannot instead specify a <code>Maximum capacity</code>. Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *          <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;

  /**
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   */
  SourceControlDetails?: SourceControlDetails;
}

/**
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 */
export interface JobUpdate {
  /**
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
   *       (required).</p>
   */
  Role?: string;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The <code>JobCommand</code> that runs this job (required).</p>
   */
  Command?: JobCommand;

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
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
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
   *      of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing page</a>.</p>
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *            Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate a minimum of 2 DPUs.
   *            The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   *          <p>For Glue version 2.0 jobs, you cannot instead specify a <code>Maximum capacity</code>. Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies the configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   */
  ExecutionClass?: ExecutionClass | string;

  /**
   * <p>The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository.</p>
   */
  SourceControlDetails?: SourceControlDetails;
}

export interface GetJobResponse {
  /**
   * <p>The requested job definition.</p>
   */
  Job?: Job;
}

export interface UpdateJobRequest {
  /**
   * <p>The name of the job definition to update.</p>
   */
  JobName: string | undefined;

  /**
   * <p>Specifies the values with which to update the job definition. Unspecified configuration is removed or reset to default values.</p>
   */
  JobUpdate: JobUpdate | undefined;
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

/**
 * @internal
 */
export const CrawlerHistoryFilterSensitiveLog = (obj: CrawlerHistory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCrawlsResponseFilterSensitiveLog = (obj: ListCrawlsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomEntityTypesRequestFilterSensitiveLog = (obj: ListCustomEntityTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomEntityTypesResponseFilterSensitiveLog = (obj: ListCustomEntityTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityResultFilterCriteriaFilterSensitiveLog = (obj: DataQualityResultFilterCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityResultsRequestFilterSensitiveLog = (obj: ListDataQualityResultsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityResultDescriptionFilterSensitiveLog = (obj: DataQualityResultDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityResultsResponseFilterSensitiveLog = (obj: ListDataQualityResultsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityRuleRecommendationRunFilterFilterSensitiveLog = (
  obj: DataQualityRuleRecommendationRunFilter
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityRuleRecommendationRunsRequestFilterSensitiveLog = (
  obj: ListDataQualityRuleRecommendationRunsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityRuleRecommendationRunDescriptionFilterSensitiveLog = (
  obj: DataQualityRuleRecommendationRunDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityRuleRecommendationRunsResponseFilterSensitiveLog = (
  obj: ListDataQualityRuleRecommendationRunsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityRulesetEvaluationRunFilterFilterSensitiveLog = (
  obj: DataQualityRulesetEvaluationRunFilter
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityRulesetEvaluationRunsRequestFilterSensitiveLog = (
  obj: ListDataQualityRulesetEvaluationRunsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityRulesetEvaluationRunDescriptionFilterSensitiveLog = (
  obj: DataQualityRulesetEvaluationRunDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityRulesetEvaluationRunsResponseFilterSensitiveLog = (
  obj: ListDataQualityRulesetEvaluationRunsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityRulesetFilterCriteriaFilterSensitiveLog = (obj: DataQualityRulesetFilterCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityRulesetsRequestFilterSensitiveLog = (obj: ListDataQualityRulesetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualityRulesetListDetailsFilterSensitiveLog = (obj: DataQualityRulesetListDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataQualityRulesetsResponseFilterSensitiveLog = (obj: ListDataQualityRulesetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevEndpointsRequestFilterSensitiveLog = (obj: ListDevEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevEndpointsResponseFilterSensitiveLog = (obj: ListDevEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResponseFilterSensitiveLog = (obj: ListJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMLTransformsRequestFilterSensitiveLog = (obj: ListMLTransformsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMLTransformsResponseFilterSensitiveLog = (obj: ListMLTransformsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRegistriesInputFilterSensitiveLog = (obj: ListRegistriesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegistryListItemFilterSensitiveLog = (obj: RegistryListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRegistriesResponseFilterSensitiveLog = (obj: ListRegistriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemasInputFilterSensitiveLog = (obj: ListSchemasInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaListItemFilterSensitiveLog = (obj: SchemaListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemasResponseFilterSensitiveLog = (obj: ListSchemasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemaVersionsInputFilterSensitiveLog = (obj: ListSchemaVersionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaVersionListItemFilterSensitiveLog = (obj: SchemaVersionListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchemaVersionsResponseFilterSensitiveLog = (obj: ListSchemaVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSessionsRequestFilterSensitiveLog = (obj: ListSessionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSessionsResponseFilterSensitiveLog = (obj: ListSessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStatementsRequestFilterSensitiveLog = (obj: ListStatementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStatementsResponseFilterSensitiveLog = (obj: ListStatementsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTriggersRequestFilterSensitiveLog = (obj: ListTriggersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTriggersResponseFilterSensitiveLog = (obj: ListTriggersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowsRequestFilterSensitiveLog = (obj: ListWorkflowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkflowsResponseFilterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDataCatalogEncryptionSettingsRequestFilterSensitiveLog = (
  obj: PutDataCatalogEncryptionSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDataCatalogEncryptionSettingsResponseFilterSensitiveLog = (
  obj: PutDataCatalogEncryptionSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResponseFilterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataKeyValuePairFilterSensitiveLog = (obj: MetadataKeyValuePair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSchemaVersionMetadataInputFilterSensitiveLog = (obj: PutSchemaVersionMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSchemaVersionMetadataResponseFilterSensitiveLog = (obj: PutSchemaVersionMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutWorkflowRunPropertiesRequestFilterSensitiveLog = (obj: PutWorkflowRunPropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutWorkflowRunPropertiesResponseFilterSensitiveLog = (obj: PutWorkflowRunPropertiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QuerySchemaVersionMetadataInputFilterSensitiveLog = (obj: QuerySchemaVersionMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OtherMetadataValueListItemFilterSensitiveLog = (obj: OtherMetadataValueListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataInfoFilterSensitiveLog = (obj: MetadataInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QuerySchemaVersionMetadataResponseFilterSensitiveLog = (obj: QuerySchemaVersionMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterSchemaVersionInputFilterSensitiveLog = (obj: RegisterSchemaVersionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterSchemaVersionResponseFilterSensitiveLog = (obj: RegisterSchemaVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveSchemaVersionMetadataInputFilterSensitiveLog = (obj: RemoveSchemaVersionMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveSchemaVersionMetadataResponseFilterSensitiveLog = (
  obj: RemoveSchemaVersionMetadataResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetJobBookmarkRequestFilterSensitiveLog = (obj: ResetJobBookmarkRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetJobBookmarkResponseFilterSensitiveLog = (obj: ResetJobBookmarkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeWorkflowRunRequestFilterSensitiveLog = (obj: ResumeWorkflowRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeWorkflowRunResponseFilterSensitiveLog = (obj: ResumeWorkflowRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunStatementRequestFilterSensitiveLog = (obj: RunStatementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunStatementResponseFilterSensitiveLog = (obj: RunStatementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyPredicateFilterSensitiveLog = (obj: PropertyPredicate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SortCriterionFilterSensitiveLog = (obj: SortCriterion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchTablesRequestFilterSensitiveLog = (obj: SearchTablesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchTablesResponseFilterSensitiveLog = (obj: SearchTablesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBlueprintRunRequestFilterSensitiveLog = (obj: StartBlueprintRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBlueprintRunResponseFilterSensitiveLog = (obj: StartBlueprintRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCrawlerRequestFilterSensitiveLog = (obj: StartCrawlerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCrawlerResponseFilterSensitiveLog = (obj: StartCrawlerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCrawlerScheduleRequestFilterSensitiveLog = (obj: StartCrawlerScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCrawlerScheduleResponseFilterSensitiveLog = (obj: StartCrawlerScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataQualityRuleRecommendationRunRequestFilterSensitiveLog = (
  obj: StartDataQualityRuleRecommendationRunRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataQualityRuleRecommendationRunResponseFilterSensitiveLog = (
  obj: StartDataQualityRuleRecommendationRunResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataQualityRulesetEvaluationRunRequestFilterSensitiveLog = (
  obj: StartDataQualityRulesetEvaluationRunRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataQualityRulesetEvaluationRunResponseFilterSensitiveLog = (
  obj: StartDataQualityRulesetEvaluationRunResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExportLabelsTaskRunRequestFilterSensitiveLog = (obj: StartExportLabelsTaskRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartExportLabelsTaskRunResponseFilterSensitiveLog = (obj: StartExportLabelsTaskRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImportLabelsTaskRunRequestFilterSensitiveLog = (obj: StartImportLabelsTaskRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImportLabelsTaskRunResponseFilterSensitiveLog = (obj: StartImportLabelsTaskRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRunRequestFilterSensitiveLog = (obj: StartJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRunResponseFilterSensitiveLog = (obj: StartJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMLEvaluationTaskRunRequestFilterSensitiveLog = (obj: StartMLEvaluationTaskRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMLEvaluationTaskRunResponseFilterSensitiveLog = (obj: StartMLEvaluationTaskRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMLLabelingSetGenerationTaskRunRequestFilterSensitiveLog = (
  obj: StartMLLabelingSetGenerationTaskRunRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMLLabelingSetGenerationTaskRunResponseFilterSensitiveLog = (
  obj: StartMLLabelingSetGenerationTaskRunResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTriggerRequestFilterSensitiveLog = (obj: StartTriggerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTriggerResponseFilterSensitiveLog = (obj: StartTriggerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartWorkflowRunRequestFilterSensitiveLog = (obj: StartWorkflowRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartWorkflowRunResponseFilterSensitiveLog = (obj: StartWorkflowRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCrawlerRequestFilterSensitiveLog = (obj: StopCrawlerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCrawlerResponseFilterSensitiveLog = (obj: StopCrawlerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCrawlerScheduleRequestFilterSensitiveLog = (obj: StopCrawlerScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCrawlerScheduleResponseFilterSensitiveLog = (obj: StopCrawlerScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSessionRequestFilterSensitiveLog = (obj: StopSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopSessionResponseFilterSensitiveLog = (obj: StopSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTriggerRequestFilterSensitiveLog = (obj: StopTriggerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTriggerResponseFilterSensitiveLog = (obj: StopTriggerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopWorkflowRunRequestFilterSensitiveLog = (obj: StopWorkflowRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopWorkflowRunResponseFilterSensitiveLog = (obj: StopWorkflowRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBlueprintRequestFilterSensitiveLog = (obj: UpdateBlueprintRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBlueprintResponseFilterSensitiveLog = (obj: UpdateBlueprintResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCsvClassifierRequestFilterSensitiveLog = (obj: UpdateCsvClassifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGrokClassifierRequestFilterSensitiveLog = (obj: UpdateGrokClassifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJsonClassifierRequestFilterSensitiveLog = (obj: UpdateJsonClassifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateXMLClassifierRequestFilterSensitiveLog = (obj: UpdateXMLClassifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassifierRequestFilterSensitiveLog = (obj: UpdateClassifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassifierResponseFilterSensitiveLog = (obj: UpdateClassifierResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateColumnStatisticsForPartitionRequestFilterSensitiveLog = (
  obj: UpdateColumnStatisticsForPartitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnStatisticsErrorFilterSensitiveLog = (obj: ColumnStatisticsError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateColumnStatisticsForPartitionResponseFilterSensitiveLog = (
  obj: UpdateColumnStatisticsForPartitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateColumnStatisticsForTableRequestFilterSensitiveLog = (
  obj: UpdateColumnStatisticsForTableRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateColumnStatisticsForTableResponseFilterSensitiveLog = (
  obj: UpdateColumnStatisticsForTableResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionRequestFilterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionResponseFilterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCrawlerRequestFilterSensitiveLog = (obj: UpdateCrawlerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCrawlerResponseFilterSensitiveLog = (obj: UpdateCrawlerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCrawlerScheduleRequestFilterSensitiveLog = (obj: UpdateCrawlerScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCrawlerScheduleResponseFilterSensitiveLog = (obj: UpdateCrawlerScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatabaseRequestFilterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatabaseResponseFilterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataQualityRulesetRequestFilterSensitiveLog = (obj: UpdateDataQualityRulesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataQualityRulesetResponseFilterSensitiveLog = (obj: UpdateDataQualityRulesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DevEndpointCustomLibrariesFilterSensitiveLog = (obj: DevEndpointCustomLibraries): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDevEndpointRequestFilterSensitiveLog = (obj: UpdateDevEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDevEndpointResponseFilterSensitiveLog = (obj: UpdateDevEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobResponseFilterSensitiveLog = (obj: UpdateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobFromSourceControlRequestFilterSensitiveLog = (obj: UpdateJobFromSourceControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobFromSourceControlResponseFilterSensitiveLog = (obj: UpdateJobFromSourceControlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMLTransformRequestFilterSensitiveLog = (obj: UpdateMLTransformRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMLTransformResponseFilterSensitiveLog = (obj: UpdateMLTransformResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePartitionRequestFilterSensitiveLog = (obj: UpdatePartitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePartitionResponseFilterSensitiveLog = (obj: UpdatePartitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRegistryInputFilterSensitiveLog = (obj: UpdateRegistryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRegistryResponseFilterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchemaInputFilterSensitiveLog = (obj: UpdateSchemaInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchemaResponseFilterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSourceControlFromJobRequestFilterSensitiveLog = (obj: UpdateSourceControlFromJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSourceControlFromJobResponseFilterSensitiveLog = (obj: UpdateSourceControlFromJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTableRequestFilterSensitiveLog = (obj: UpdateTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTableResponseFilterSensitiveLog = (obj: UpdateTableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TriggerUpdateFilterSensitiveLog = (obj: TriggerUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTriggerRequestFilterSensitiveLog = (obj: UpdateTriggerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTriggerResponseFilterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserDefinedFunctionRequestFilterSensitiveLog = (obj: UpdateUserDefinedFunctionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserDefinedFunctionResponseFilterSensitiveLog = (obj: UpdateUserDefinedFunctionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkflowRequestFilterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkflowResponseFilterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MappingFilterSensitiveLog = (obj: Mapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplyMappingFilterSensitiveLog = (obj: ApplyMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeGenConfigurationNodeFilterSensitiveLog = (obj: CodeGenConfigurationNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobUpdateFilterSensitiveLog = (obj: JobUpdate): any => ({
  ...obj,
  ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetJobResponseFilterSensitiveLog = (obj: GetJobResponse): any => ({
  ...obj,
  ...(obj.Job && { Job: JobFilterSensitiveLog(obj.Job) }),
});

/**
 * @internal
 */
export const UpdateJobRequestFilterSensitiveLog = (obj: UpdateJobRequest): any => ({
  ...obj,
  ...(obj.JobUpdate && { JobUpdate: JobUpdateFilterSensitiveLog(obj.JobUpdate) }),
});

/**
 * @internal
 */
export const BatchGetJobsResponseFilterSensitiveLog = (obj: BatchGetJobsResponse): any => ({
  ...obj,
  ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => JobFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetJobsResponseFilterSensitiveLog = (obj: GetJobsResponse): any => ({
  ...obj,
  ...(obj.Jobs && { Jobs: obj.Jobs.map((item) => JobFilterSensitiveLog(item)) }),
});
