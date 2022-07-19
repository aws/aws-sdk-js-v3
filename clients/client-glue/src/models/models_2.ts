// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";
import {
  Action,
  Aggregate,
  AthenaConnectorSource,
  BasicCatalogTarget,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSource,
  Compatibility,
  ConnectionInput,
  ConnectionsList,
  CrawlerTargets,
  CsvHeaderOption,
  CustomCode,
  DatabaseInput,
  DirectKafkaSource,
  DirectKinesisSource,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamoDBCatalogSource,
  ErrorDetail,
  EventBatchingCondition,
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
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DirectTarget,
  S3GlueParquetTarget,
  S3JsonSource,
  S3ParquetSource,
  SchemaChangePolicy,
  SchemaId,
  SchemaVersionStatus,
  SelectFields,
  SelectFromCollection,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  TableInput,
  TransformParameters,
  Trigger,
  Union,
  UserDefinedFunctionInput,
  WorkerType,
} from "./models_0";
import {
  ColumnStatistics,
  JobBookmarkEntry,
  MetadataKeyValuePair,
  ResourceShareType,
  SchemaVersionNumber,
  Table,
} from "./models_1";

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

export namespace PropertyPredicate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyPredicate): any => ({
    ...obj,
  });
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

export namespace SortCriterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
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

export namespace StartCrawlerScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface StartCrawlerScheduleResponse {}

export namespace StartCrawlerScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartCrawlerScheduleResponse): any => ({
    ...obj,
  });
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

export namespace StartExportLabelsTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExportLabelsTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartExportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartExportLabelsTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExportLabelsTaskRunResponse): any => ({
    ...obj,
  });
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

export namespace StartImportLabelsTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImportLabelsTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartImportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartImportLabelsTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImportLabelsTaskRunResponse): any => ({
    ...obj,
  });
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
   *
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
   *
   *          <p>Streaming jobs do not have a timeout. The default for non-streaming jobs is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   *
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
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
}

export namespace StartJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRunRequest): any => ({
    ...obj,
  });
}

export interface StartJobRunResponse {
  /**
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;
}

export namespace StartJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRunResponse): any => ({
    ...obj,
  });
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

export namespace StartMLEvaluationTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLEvaluationTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartMLEvaluationTaskRunResponse {
  /**
   * <p>The unique identifier associated with this run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLEvaluationTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLEvaluationTaskRunResponse): any => ({
    ...obj,
  });
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

export namespace StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLLabelingSetGenerationTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMLLabelingSetGenerationTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartTriggerRequest {
  /**
   * <p>The name of the trigger to start.</p>
   */
  Name: string | undefined;
}

export namespace StartTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTriggerRequest): any => ({
    ...obj,
  });
}

export interface StartTriggerResponse {
  /**
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;
}

export namespace StartTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTriggerResponse): any => ({
    ...obj,
  });
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

export namespace StartWorkflowRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface StartWorkflowRunResponse {
  /**
   * <p>An Id for the new run.</p>
   */
  RunId?: string;
}

export namespace StartWorkflowRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartWorkflowRunResponse): any => ({
    ...obj,
  });
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

export namespace StopCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerRequest): any => ({
    ...obj,
  });
}

export interface StopCrawlerResponse {}

export namespace StopCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerResponse): any => ({
    ...obj,
  });
}

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

export namespace StopCrawlerScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface StopCrawlerScheduleResponse {}

export namespace StopCrawlerScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

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

export namespace StopSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSessionRequest): any => ({
    ...obj,
  });
}

export interface StopSessionResponse {
  /**
   * <p>Returns the Id of the stopped session.</p>
   */
  Id?: string;
}

export namespace StopSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSessionResponse): any => ({
    ...obj,
  });
}

export interface StopTriggerRequest {
  /**
   * <p>The name of the trigger to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTriggerRequest): any => ({
    ...obj,
  });
}

export interface StopTriggerResponse {
  /**
   * <p>The name of the trigger that was stopped.</p>
   */
  Name?: string;
}

export namespace StopTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopTriggerResponse): any => ({
    ...obj,
  });
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

export namespace StopWorkflowRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface StopWorkflowRunResponse {}

export namespace StopWorkflowRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopWorkflowRunResponse): any => ({
    ...obj,
  });
}

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
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to remove from this resource.</p>
   */
  TagsToRemove: string[] | undefined;
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

export namespace UpdateBlueprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBlueprintRequest): any => ({
    ...obj,
  });
}

export interface UpdateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was updated.</p>
   */
  Name?: string;
}

export namespace UpdateBlueprintResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBlueprintResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateCsvClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCsvClassifierRequest): any => ({
    ...obj,
  });
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

export namespace UpdateGrokClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGrokClassifierRequest): any => ({
    ...obj,
  });
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

export namespace UpdateJsonClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJsonClassifierRequest): any => ({
    ...obj,
  });
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

export namespace UpdateXMLClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateXMLClassifierRequest): any => ({
    ...obj,
  });
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

export namespace UpdateClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClassifierRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassifierResponse {}

export namespace UpdateClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClassifierResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateColumnStatisticsForPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
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

export namespace ColumnStatisticsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatisticsError): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * <p>Error occurred during updating column statistics data.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export namespace UpdateColumnStatisticsForPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
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

export namespace UpdateColumnStatisticsForTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatisticsErrors.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export namespace UpdateColumnStatisticsForTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
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

export namespace UpdateConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionResponse {}

export namespace UpdateConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
    ...obj,
  });
}

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
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;
}

export namespace UpdateCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerRequest): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerResponse {}

export namespace UpdateCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateCrawlerScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerScheduleResponse {}

export namespace UpdateCrawlerScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatabaseResponse {}

export namespace UpdateDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
    ...obj,
  });
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

export namespace DevEndpointCustomLibraries {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DevEndpointCustomLibraries): any => ({
    ...obj,
  });
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
  AddArguments?: Record<string, string>;
}

export namespace UpdateDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface UpdateDevEndpointResponse {}

export namespace UpdateDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobResponse {
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

export namespace UpdateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMLTransformRequest): any => ({
    ...obj,
  });
}

export interface UpdateMLTransformResponse {
  /**
   * <p>The unique identifier for the transform that was updated.</p>
   */
  TransformId?: string;
}

export namespace UpdateMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMLTransformResponse): any => ({
    ...obj,
  });
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
   *
   * 	        <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export namespace UpdatePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartitionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePartitionResponse {}

export namespace UpdatePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartitionResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegistryInput): any => ({
    ...obj,
  });
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

export namespace UpdateRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
    ...obj,
  });
}

export interface UpdateSchemaInput {
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

export namespace UpdateSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaInput): any => ({
    ...obj,
  });
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

export namespace UpdateSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
    ...obj,
  });
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

export namespace UpdateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableResponse {}

export namespace UpdateTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableResponse): any => ({
    ...obj,
  });
}

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

export namespace TriggerUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerUpdate): any => ({
    ...obj,
  });
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

export namespace UpdateTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerRequest): any => ({
    ...obj,
  });
}

export interface UpdateTriggerResponse {
  /**
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace UpdateTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
    ...obj,
  });
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

export namespace UpdateUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionResponse {}

export namespace UpdateUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowResponse {
  /**
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

export namespace UpdateWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
    ...obj,
  });
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
   *
   *          <p>For the children part, suppose you have the structure:</p>
   *
   * 	        <p>
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
   *
   *          <p>You can specify a <code>Mapping</code> that looks like:</p>
   *
   * 	        <p>
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

export namespace Mapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Mapping): any => ({
    ...obj,
  });
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

export namespace ApplyMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplyMapping): any => ({
    ...obj,
  });
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
}

export namespace CodeGenConfigurationNode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeGenConfigurationNode): any => ({
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
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments.
   *     Retrieve secrets from a Glue Connection, Secrets Manager or
   *     other secret management mechanism if you intend to keep them within the Job.
   *     </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *
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
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X.</p>
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
   *
   *          <p>The number of Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *       page</a>.</p>
   * 	        <p></p>
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
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   * 	        <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *         <ul>
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
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
}

export namespace Job {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
    ...(obj.CodeGenConfigurationNodes && { CodeGenConfigurationNodes: SENSITIVE_STRING }),
  });
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
   *
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
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *
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
   * 	        <p>For Glue version 2.0 jobs, you cannot instead specify a <code>Maximum capacity</code>. Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, G.2X, or G.025X.</p>
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
   *
   *          <p>For more information about the available Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based.</p>
   */
  CodeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
}

export namespace JobUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobUpdate): any => ({
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

export namespace UpdateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj,
    ...(obj.JobUpdate && { JobUpdate: JobUpdate.filterSensitiveLog(obj.JobUpdate) }),
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
