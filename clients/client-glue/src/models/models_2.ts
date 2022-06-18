// smithy-typescript generated code
import {
  BackfillError,
  Column,
  ColumnImportance,
  ConfusionMatrix,
  ConnectionsList,
  CrawlerNodeDetails,
  DatabaseIdentifier,
  EncryptionConfiguration,
  GlueTable,
  NotificationProperty,
  Partition,
  PrincipalPermissions,
  ResourceUri,
  SchemaColumn,
  SessionCommand,
  StorageDescriptor,
  TableIdentifier,
  TransformEncryption,
  TransformParameters,
  Trigger,
} from "./models_1";

export enum AggFunction {
  avg = "avg",
  count = "count",
  countDistinct = "countDistinct",
  first = "first",
  kurtosis = "kurtosis",
  last = "last",
  max = "max",
  min = "min",
  skewness = "skewness",
  stddev_pop = "stddev_pop",
  stddev_samp = "stddev_samp",
  sum = "sum",
  sumDistinct = "sumDistinct",
  var_pop = "var_pop",
  var_samp = "var_samp",
}

export enum BlueprintStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

export enum LastCrawlStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  SUCCEEDED = "SUCCEEDED",
}

export enum CrawlerLineageSettings {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export enum RecrawlBehavior {
  CRAWL_EVENT_MODE = "CRAWL_EVENT_MODE",
  CRAWL_EVERYTHING = "CRAWL_EVERYTHING",
  CRAWL_NEW_FOLDERS_ONLY = "CRAWL_NEW_FOLDERS_ONLY",
}

export enum ScheduleState {
  NOT_SCHEDULED = "NOT_SCHEDULED",
  SCHEDULED = "SCHEDULED",
  TRANSITIONING = "TRANSITIONING",
}

export enum DeleteBehavior {
  DELETE_FROM_DATABASE = "DELETE_FROM_DATABASE",
  DEPRECATE_IN_DATABASE = "DEPRECATE_IN_DATABASE",
  LOG = "LOG",
}

export enum UpdateBehavior {
  LOG = "LOG",
  UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE",
}

export enum CrawlerState {
  READY = "READY",
  RUNNING = "RUNNING",
  STOPPING = "STOPPING",
}

export type WorkerType = "G.1X" | "G.2X" | "Standard";

export enum StartingPosition {
  EARLIEST = "earliest",
  LATEST = "latest",
  TRIM_HORIZON = "trim_horizon",
}

export enum FilterOperation {
  EQ = "EQ",
  GT = "GT",
  GTE = "GTE",
  ISNULL = "ISNULL",
  LT = "LT",
  LTE = "LTE",
  REGEX = "REGEX",
}

export enum FilterValueType {
  COLUMNEXTRACTED = "COLUMNEXTRACTED",
  CONSTANT = "CONSTANT",
}

export enum FilterLogicalOperator {
  AND = "AND",
  OR = "OR",
}

export enum UpdateCatalogBehavior {
  LOG = "LOG",
  UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE",
}

export enum JoinType {
  EQUIJOIN = "equijoin",
  LEFT = "left",
  LEFT_ANTI = "leftanti",
  LEFT_SEMI = "leftsemi",
  OUTER = "outer",
  RIGHT = "right",
}

export enum PiiType {
  ColumnAudit = "ColumnAudit",
  ColumnMasking = "ColumnMasking",
  RowAudit = "RowAudit",
  RowMasking = "RowMasking",
}

export enum CompressionType {
  BZIP2 = "bzip2",
  GZIP = "gzip",
}

export enum QuoteChar {
  DISABLED = "disabled",
  QUILLEMET = "quillemet",
  QUOTE = "quote",
  SINGLE_QUOTE = "single_quote",
}

export enum Separator {
  COMMA = "comma",
  CTRLA = "ctrla",
  PIPE = "pipe",
  SEMICOLON = "semicolon",
  TAB = "tab",
}

export enum TargetFormat {
  AVRO = "avro",
  CSV = "csv",
  JSON = "json",
  ORC = "orc",
  PARQUET = "parquet",
}

export enum ParquetCompressionType {
  GZIP = "gzip",
  LZO = "lzo",
  NONE = "none",
  SNAPPY = "snappy",
  UNCOMPRESSED = "uncompressed",
}

export enum UnionType {
  ALL = "ALL",
  DISTINCT = "DISTINCT",
}

export enum CrawlState {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

export enum LogicalOperator {
  EQUALS = "EQUALS",
}

export enum JobRunState {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT",
}

export enum Logical {
  AND = "AND",
  ANY = "ANY",
}

export enum TriggerState {
  ACTIVATED = "ACTIVATED",
  ACTIVATING = "ACTIVATING",
  CREATED = "CREATED",
  CREATING = "CREATING",
  DEACTIVATED = "DEACTIVATED",
  DEACTIVATING = "DEACTIVATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

export enum TriggerType {
  CONDITIONAL = "CONDITIONAL",
  EVENT = "EVENT",
  ON_DEMAND = "ON_DEMAND",
  SCHEDULED = "SCHEDULED",
}

/**
 * <p>An edge represents a directed connection between two components
 *       on a workflow graph.</p>
 */
export interface Edge {
  /**
   * <p>The unique of the node within the workflow where the edge starts.</p>
   */
  SourceId?: string;

  /**
   * <p>The unique of the node within the workflow where the edge ends.</p>
   */
  DestinationId?: string;
}

export namespace Edge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj,
  });
}

/**
 * <p>A job run that was used in the predicate of a conditional trigger
 *       that triggered this job run.</p>
 */
export interface Predecessor {
  /**
   * <p>The name of the job definition used by the predecessor job run.</p>
   */
  JobName?: string;

  /**
   * <p>The job-run ID of the predecessor job run.</p>
   */
  RunId?: string;
}

export namespace Predecessor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Predecessor): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a job run.</p>
 */
export interface JobRun {
  /**
   * <p>The ID of this job run.</p>
   */
  Id?: string;

  /**
   * <p>The number of the attempt to run this job.</p>
   */
  Attempt?: number;

  /**
   * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified
   *       in the <code>StartJobRun</code> action.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The name of the trigger that started this job run.</p>
   */
  TriggerName?: string;

  /**
   * <p>The name of the job definition being used in this run.</p>
   */
  JobName?: string;

  /**
   * <p>The date and time at which this job run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The last time that this job run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time that this job run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The current state of the job run. For more information about the statuses of jobs that have terminated abnormally, see <a href="https://docs.aws.amazon.com/glue/latest/dg/job-run-statuses.html">Glue Job Run Statuses</a>.</p>
   */
  JobRunState?: JobRunState | string;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   */
  Arguments?: Record<string, string>;

  /**
   * <p>An error message associated with this job run.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>A list of predecessors to this job run.</p>
   */
  PredecessorRuns?: Predecessor[];

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of Glue data processing units (DPUs) allocated to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The amount of time (in seconds) that the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
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
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *         allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon
   *       CloudWatch using KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the
   *       default encryption is <code>NONE</code>. If you add a role name and
   *       <code>SecurityConfiguration</code> name (in other words,
   *       <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security
   *       configuration is used to encrypt the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
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
   * <p>This field populates only when an Auto Scaling job run completes, and represents the total time each executor ran during the lifecycle of a job run in seconds, multiplied by a DPU factor (1 for <code>G.1X</code> and 2 for <code>G.2X</code> workers). This value may be different than the <code>executionEngineRuntime</code> * <code>MaxCapacity</code> as in the case of Auto Scaling jobs, as the number of executors running at a given time may be less than the <code>MaxCapacity</code>. Therefore, it is possible that the value of <code>DPUSeconds</code> is less than <code>executionEngineRuntime</code> * <code>MaxCapacity</code>.</p>
   */
  DPUSeconds?: number;
}

export namespace JobRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobRun): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a Job node present in the workflow.</p>
 */
export interface JobNodeDetails {
  /**
   * <p>The information for the job runs represented by the job node.</p>
   */
  JobRuns?: JobRun[];
}

export namespace JobNodeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobNodeDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The details of a Trigger node present in the workflow.</p>
 */
export interface TriggerNodeDetails {
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   */
  Trigger?: Trigger;
}

export namespace TriggerNodeDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerNodeDetails): any => ({
    ...obj,
  });
}

export enum NodeType {
  CRAWLER = "CRAWLER",
  JOB = "JOB",
  TRIGGER = "TRIGGER",
}

/**
 * <p>A node represents an Glue component (trigger, crawler, or job) on a workflow graph.</p>
 */
export interface Node {
  /**
   * <p>The type of Glue component represented by the node.</p>
   */
  Type?: NodeType | string;

  /**
   * <p>The name of the Glue component represented by the node.</p>
   */
  Name?: string;

  /**
   * <p>The unique Id assigned to the node within the workflow.</p>
   */
  UniqueId?: string;

  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   */
  TriggerDetails?: TriggerNodeDetails;

  /**
   * <p>Details of the Job when the node represents a Job.</p>
   */
  JobDetails?: JobNodeDetails;

  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   */
  CrawlerDetails?: CrawlerNodeDetails;
}

export namespace Node {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj,
  });
}

/**
 * <p>A workflow graph represents the complete workflow containing all the Glue components present in the
 *       workflow and all the directed connections between them.</p>
 */
export interface WorkflowGraph {
  /**
   * <p>A list of the the Glue components belong to the workflow represented as nodes.</p>
   */
  Nodes?: Node[];

  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   */
  Edges?: Edge[];
}

export namespace WorkflowGraph {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkflowGraph): any => ({
    ...obj,
  });
}

/**
 * <p>The batch condition that started the workflow run. Either the number of events in the batch size arrived,
 *       in which case the BatchSize member is non-zero, or the batch window expired, in which case the BatchWindow
 *       member is non-zero.</p>
 */
export interface StartingEventBatchCondition {
  /**
   * <p>Number of events in the batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>Duration of the batch window in seconds.</p>
   */
  BatchWindow?: number;
}

export namespace StartingEventBatchCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartingEventBatchCondition): any => ({
    ...obj,
  });
}

/**
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 */
export interface WorkflowRunStatistics {
  /**
   * <p>Total number of Actions in the workflow run.</p>
   */
  TotalActions?: number;

  /**
   * <p>Total number of Actions that timed out.</p>
   */
  TimeoutActions?: number;

  /**
   * <p>Total number of Actions that have failed.</p>
   */
  FailedActions?: number;

  /**
   * <p>Total number of Actions that have stopped.</p>
   */
  StoppedActions?: number;

  /**
   * <p>Total number of Actions that have succeeded.</p>
   */
  SucceededActions?: number;

  /**
   * <p>Total number Actions in running state.</p>
   */
  RunningActions?: number;
}

export namespace WorkflowRunStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkflowRunStatistics): any => ({
    ...obj,
  });
}

export enum WorkflowRunStatus {
  COMPLETED = "COMPLETED",
  ERROR = "ERROR",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 */
export interface WorkflowRun {
  /**
   * <p>Name of the workflow that was run.</p>
   */
  Name?: string;

  /**
   * <p>The ID of this workflow run.</p>
   */
  WorkflowRunId?: string;

  /**
   * <p>The ID of the previous workflow run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The workflow run properties which were set during the run.</p>
   */
  WorkflowRunProperties?: Record<string, string>;

  /**
   * <p>The date and time when the workflow run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when the workflow run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The status of the workflow run.</p>
   */
  Status?: WorkflowRunStatus | string;

  /**
   * <p>This error message describes any error that may have occurred in starting the workflow run. Currently the only error message is "Concurrent runs exceeded for workflow: <code>foo</code>."</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The statistics of the run.</p>
   */
  Statistics?: WorkflowRunStatistics;

  /**
   * <p>The graph representing all the Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>The batch condition that started the workflow run.</p>
   */
  StartingEventBatchCondition?: StartingEventBatchCondition;
}

export namespace WorkflowRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkflowRun): any => ({
    ...obj,
  });
}

export enum TaskStatusType {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT",
}

export enum DataFormat {
  AVRO = "AVRO",
  JSON = "JSON",
  PROTOBUF = "PROTOBUF",
}

export enum CsvHeaderOption {
  ABSENT = "ABSENT",
  PRESENT = "PRESENT",
  UNKNOWN = "UNKNOWN",
}

export enum ConnectionType {
  CUSTOM = "CUSTOM",
  JDBC = "JDBC",
  KAFKA = "KAFKA",
  MARKETPLACE = "MARKETPLACE",
  MONGODB = "MONGODB",
  NETWORK = "NETWORK",
  SFTP = "SFTP",
}

export enum TransformType {
  FIND_MATCHES = "FIND_MATCHES",
}

export enum MLUserDataEncryptionModeString {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
}

export enum Compatibility {
  BACKWARD = "BACKWARD",
  BACKWARD_ALL = "BACKWARD_ALL",
  DISABLED = "DISABLED",
  FORWARD = "FORWARD",
  FORWARD_ALL = "FORWARD_ALL",
  FULL = "FULL",
  FULL_ALL = "FULL_ALL",
  NONE = "NONE",
}

export enum SchemaStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
  PENDING = "PENDING",
}

export enum SchemaVersionStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
  FAILURE = "FAILURE",
  PENDING = "PENDING",
}

export enum Language {
  PYTHON = "PYTHON",
  SCALA = "SCALA",
}

export enum CloudWatchEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
}

export enum JobBookmarksEncryptionMode {
  CSEKMS = "CSE-KMS",
  DISABLED = "DISABLED",
}

export enum S3EncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
  SSES3 = "SSE-S3",
}

export enum SessionStatus {
  FAILED = "FAILED",
  PROVISIONING = "PROVISIONING",
  READY = "READY",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  TIMEOUT = "TIMEOUT",
}

/**
 * <p>The period in which a remote Spark runtime environment is running.</p>
 */
export interface Session {
  /**
   * <p>The ID of the session.</p>
   */
  Id?: string;

  /**
   * <p>The time and date when the session was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The session status. </p>
   */
  Status?: SessionStatus | string;

  /**
   * <p>The error message displayed during the session.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The description of the session.</p>
   */
  Description?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with the Session.</p>
   */
  Role?: string;

  /**
   * <p>The command object.See SessionCommand.</p>
   */
  Command?: SessionCommand;

  /**
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * <p>The number of connections used for the session.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The code execution progress of the session.</p>
   */
  Progress?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the SecurityConfiguration structure to be used with the session.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
   *       The GlueVersion must be greater than 2.0.</p>
   */
  GlueVersion?: string;
}

export namespace Session {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Session): any => ({
    ...obj,
  });
}

export enum PrincipalType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER",
}

export enum ResourceType {
  ARCHIVE = "ARCHIVE",
  FILE = "FILE",
  JAR = "JAR",
}

export enum RegistryStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
}

/**
 * <p>An object containing error details.</p>
 */
export interface ErrorDetails {
  /**
   * <p>The error code for an error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message for an error.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the error details for an operation on a schema version.</p>
 */
export interface SchemaVersionErrorItem {
  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The details of the error for the schema version.</p>
   */
  ErrorDetails?: ErrorDetails;
}

export namespace SchemaVersionErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaVersionErrorItem): any => ({
    ...obj,
  });
}

export enum BlueprintRunState {
  FAILED = "FAILED",
  ROLLING_BACK = "ROLLING_BACK",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

export enum ColumnStatisticsType {
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DECIMAL = "DECIMAL",
  DOUBLE = "DOUBLE",
  LONG = "LONG",
  STRING = "STRING",
}

/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 */
export interface Database {
  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   */
  CatalogId?: string;
}

export namespace Database {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Database): any => ({
    ...obj,
  });
}

export enum ResourceShareType {
  ALL = "ALL",
  FOREIGN = "FOREIGN",
}

export enum CatalogEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
}

/**
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface JobBookmarkEntry {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName?: string;

  /**
   * <p>The version of the job.</p>
   */
  Version?: number;

  /**
   * <p>The run ID number.</p>
   */
  Run?: number;

  /**
   * <p>The attempt ID number.</p>
   */
  Attempt?: number;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The run ID number.</p>
   */
  RunId?: string;

  /**
   * <p>The bookmark itself.</p>
   */
  JobBookmark?: string;
}

export namespace JobBookmarkEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobBookmarkEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   */
  OutputS3Path?: string;
}

export namespace ExportLabelsTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportLabelsTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 */
export interface FindMatchesTaskRunProperties {
  /**
   * <p>The job ID for the Find Matches task run.</p>
   */
  JobId?: string;

  /**
   * <p>The name assigned to the job for the Find Matches task run.</p>
   */
  JobName?: string;

  /**
   * <p>The job run ID for the Find Matches task run.</p>
   */
  JobRunId?: string;
}

export namespace FindMatchesTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchesTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
   *       labels.</p>
   */
  InputS3Path?: string;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  Replace?: boolean;
}

export namespace ImportLabelsTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportLabelsTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   */
  OutputS3Path?: string;
}

export namespace LabelingSetGenerationTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingSetGenerationTaskRunProperties): any => ({
    ...obj,
  });
}

export enum TaskType {
  EVALUATION = "EVALUATION",
  EXPORT_LABELS = "EXPORT_LABELS",
  FIND_MATCHES = "FIND_MATCHES",
  IMPORT_LABELS = "IMPORT_LABELS",
  LABELING_SET_GENERATION = "LABELING_SET_GENERATION",
}

/**
 * <p>The configuration properties for the task run.</p>
 */
export interface TaskRunProperties {
  /**
   * <p>The type of task run.</p>
   */
  TaskType?: TaskType | string;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
}

export namespace TaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRunProperties): any => ({
    ...obj,
  });
}

export enum TaskRunSortColumnType {
  STARTED = "STARTED",
  STATUS = "STATUS",
  TASK_RUN_TYPE = "TASK_RUN_TYPE",
}

export enum SortDirectionType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 */
export interface TaskRun {
  /**
   * <p>The unique identifier for the transform.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique identifier for this task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The current status of the requested task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The list of error strings associated with this task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The date and time that this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The last point in time that the requested task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;
}

export namespace TaskRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRun): any => ({
    ...obj,
  });
}

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 */
export interface FindMatchesMetrics {
  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  AreaUnderPRCurve?: number;

  /**
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Precision?: number;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Recall?: number;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   */
  F1?: number;

  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   */
  ConfusionMatrix?: ConfusionMatrix;

  /**
   * <p>A list of <code>ColumnImportance</code> structures containing column importance metrics, sorted in order of descending importance.</p>
   */
  ColumnImportances?: ColumnImportance[];
}

export namespace FindMatchesMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchesMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
  /**
   * <p>The type of machine learning transform.</p>
   */
  TransformType: TransformType | string | undefined;

  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   */
  FindMatchesMetrics?: FindMatchesMetrics;
}

export namespace EvaluationMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationMetrics): any => ({
    ...obj,
  });
}

export enum TransformStatusType {
  DELETING = "DELETING",
  NOT_READY = "NOT_READY",
  READY = "READY",
}

export enum TransformSortColumnType {
  CREATED = "CREATED",
  LAST_MODIFIED = "LAST_MODIFIED",
  NAME = "NAME",
  STATUS = "STATUS",
  TRANSFORM_TYPE = "TRANSFORM_TYPE",
}

/**
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   */
  TransformId?: string;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   */
  Name?: string;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the machine learning transform.</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   */
  LabelCount?: number;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

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
  Role?: string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *
   * 		       <p>
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
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *
   * 	        <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

export namespace MLTransform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MLTransform): any => ({
    ...obj,
  });
}

export enum BackfillErrorCode {
  ENCRYPTED_PARTITION_ERROR = "ENCRYPTED_PARTITION_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_PARTITION_TYPE_DATA_ERROR = "INVALID_PARTITION_TYPE_DATA_ERROR",
  MISSING_PARTITION_VALUE_ERROR = "MISSING_PARTITION_VALUE_ERROR",
  UNSUPPORTED_PARTITION_CHARACTER_ERROR = "UNSUPPORTED_PARTITION_CHARACTER_ERROR",
}

export enum PartitionIndexStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

/**
 * <p>A partition key pair consisting of a name and a type.</p>
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a partition key.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of a partition key.</p>
   */
  Type: string | undefined;
}

export namespace KeySchemaElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySchemaElement): any => ({
    ...obj,
  });
}

/**
 * <p>A descriptor for a partition index in a table.</p>
 */
export interface PartitionIndexDescriptor {
  /**
   * <p>The name of the partition index.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * <p>The status of the partition index. </p>
   *
   * 	        <p>The possible statuses are:</p>
   * 	        <ul>
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
   */
  IndexStatus: PartitionIndexStatus | string | undefined;

  /**
   * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
   */
  BackfillErrors?: BackfillError[];
}

export namespace PartitionIndexDescriptor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionIndexDescriptor): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for returning a resource policy.</p>
 */
export interface GluePolicy {
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

export namespace GluePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GluePolicy): any => ({
    ...obj,
  });
}

export enum SchemaDiffType {
  SYNTAX_DIFF = "SYNTAX_DIFF",
}

/**
 * <p>Specifies a security configuration.</p>
 */
export interface SecurityConfiguration {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The time at which this security configuration was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

export namespace SecurityConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The code execution output in JSON format.</p>
 */
export interface StatementOutputData {
  /**
   * <p>The code execution output in text format.</p>
   */
  TextPlain?: string;
}

export namespace StatementOutputData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatementOutputData): any => ({
    ...obj,
  });
}

export enum StatementState {
  AVAILABLE = "AVAILABLE",
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  ERROR = "ERROR",
  RUNNING = "RUNNING",
  WAITING = "WAITING",
}

/**
 * <p>The code execution output in JSON format.</p>
 */
export interface StatementOutput {
  /**
   * <p>The code execution output.</p>
   */
  Data?: StatementOutputData;

  /**
   * <p>The execution count of the output.</p>
   */
  ExecutionCount?: number;

  /**
   * <p>The status of the code execution output.</p>
   */
  Status?: StatementState | string;

  /**
   * <p>The name of the error in the output.</p>
   */
  ErrorName?: string;

  /**
   * <p>The error value of the output.</p>
   */
  ErrorValue?: string;

  /**
   * <p>The traceback of the output.</p>
   */
  Traceback?: string[];
}

export namespace StatementOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatementOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The statement or request for a particular action to occur in a session.</p>
 */
export interface Statement {
  /**
   * <p>The ID of the statement.</p>
   */
  Id?: number;

  /**
   * <p>The execution code of the statement.</p>
   */
  Code?: string;

  /**
   * <p>The state while request is actioned.</p>
   */
  State?: StatementState | string;

  /**
   * <p>The output in JSON.</p>
   */
  Output?: StatementOutput;

  /**
   * <p>The code execution progress.</p>
   */
  Progress?: number;

  /**
   * <p>The unix time and date that the job definition was started.</p>
   */
  StartedOn?: number;

  /**
   * <p>The unix time and date that the job definition was completed.</p>
   */
  CompletedOn?: number;
}

export namespace Statement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface Table {
  /**
   * <p>The table name. For Hive compatibility, this must be entirely
   *       lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database where the table metadata resides.
   *       For Hive compatibility, this must be all lowercase.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * <p>The owner of the table.</p>
   */
  Owner?: string;

  /**
   * <p>The time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The last time that the table was updated.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The last time that the table was accessed. This is usually taken from HDFS, and might not
   *       be reliable.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>A list of columns by which the table is partitioned. Only primitive
   *       types are supported as partition keys.</p>
   * 	        <p>When you create a table used by Amazon Athena, and you do not specify any
   *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
   *       an empty list. For example:</p>
   *          <p>
   *             <code>"PartitionKeys": []</code>
   *          </p>
   */
  PartitionKeys?: Column[];

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The person or entity who created the table.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the table has been registered with Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;

  /**
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;

  /**
   * <p>The ID of the Data Catalog in which the table resides.</p>
   */
  CatalogId?: string;

  VersionId?: string;
}

export namespace Table {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Table): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a version of a table.</p>
 */
export interface TableVersion {
  /**
   * <p>The table in question.</p>
   */
  Table?: Table;

  /**
   * <p>The ID value that identifies this table version. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;
}

export namespace TableVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableVersion): any => ({
    ...obj,
  });
}

export interface UnfilteredPartition {
  /**
   * <p>Represents a slice of table data.</p>
   */
  Partition?: Partition;

  AuthorizedColumns?: string[];
  IsRegisteredWithLakeFormation?: boolean;
}

export namespace UnfilteredPartition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnfilteredPartition): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 */
export interface UserDefinedFunction {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The name of the catalog database that contains the function.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];

  /**
   * <p>The ID of the Data Catalog in which the function resides.</p>
   */
  CatalogId?: string;
}

export namespace UserDefinedFunction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserDefinedFunction): any => ({
    ...obj,
  });
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

export namespace RegistryListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryListItem): any => ({
    ...obj,
  });
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

export namespace SchemaListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaListItem): any => ({
    ...obj,
  });
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

export namespace SchemaVersionListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaVersionListItem): any => ({
    ...obj,
  });
}

export enum EnableHybridValues {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export enum ExistCondition {
  MUST_EXIST = "MUST_EXIST",
  NONE = "NONE",
  NOT_EXIST = "NOT_EXIST",
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

export namespace OtherMetadataValueListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OtherMetadataValueListItem): any => ({
    ...obj,
  });
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

export namespace MetadataInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataInfo): any => ({
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

export enum Sort {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}
