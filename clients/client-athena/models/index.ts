import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface BatchGetNamedQueryInput {
  __type?: "BatchGetNamedQueryInput";
  /**
   * <p>An array of query IDs.</p>
   */
  NamedQueryIds: Array<string> | undefined;
}

export namespace BatchGetNamedQueryInput {
  export function isa(o: any): o is BatchGetNamedQueryInput {
    return __isa(o, "BatchGetNamedQueryInput");
  }
}

export interface BatchGetNamedQueryOutput {
  __type?: "BatchGetNamedQueryOutput";
  /**
   * <p>Information about the named query IDs submitted.</p>
   */
  NamedQueries?: Array<NamedQuery>;

  /**
   * <p>Information about provided query IDs.</p>
   */
  UnprocessedNamedQueryIds?: Array<UnprocessedNamedQueryId>;
}

export namespace BatchGetNamedQueryOutput {
  export function isa(o: any): o is BatchGetNamedQueryOutput {
    return __isa(o, "BatchGetNamedQueryOutput");
  }
}

export interface BatchGetQueryExecutionInput {
  __type?: "BatchGetQueryExecutionInput";
  /**
   * <p>An array of query execution IDs.</p>
   */
  QueryExecutionIds: Array<string> | undefined;
}

export namespace BatchGetQueryExecutionInput {
  export function isa(o: any): o is BatchGetQueryExecutionInput {
    return __isa(o, "BatchGetQueryExecutionInput");
  }
}

export interface BatchGetQueryExecutionOutput {
  __type?: "BatchGetQueryExecutionOutput";
  /**
   * <p>Information about a query execution.</p>
   */
  QueryExecutions?: Array<QueryExecution>;

  /**
   * <p>Information about the query executions that failed to run.</p>
   */
  UnprocessedQueryExecutionIds?: Array<UnprocessedQueryExecutionId>;
}

export namespace BatchGetQueryExecutionOutput {
  export function isa(o: any): o is BatchGetQueryExecutionOutput {
    return __isa(o, "BatchGetQueryExecutionOutput");
  }
}

/**
 * <p>Information about the columns in a query execution result.</p>
 */
export interface ColumnInfo {
  __type?: "ColumnInfo";
  /**
   * <p>Indicates whether values in the column are case-sensitive.</p>
   */
  CaseSensitive?: boolean;

  /**
   * <p>The catalog to which the query results belong.</p>
   */
  CatalogName?: string;

  /**
   * <p>A column label.</p>
   */
  Label?: string;

  /**
   * <p>The name of the column.</p>
   */
  Name: string | undefined;

  /**
   * <p>Indicates the column's nullable status.</p>
   */
  Nullable?: ColumnNullable | string;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38. For performance reasons, we recommend up to 18 digits.</p>
   */
  Precision?: number;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits in the fractional part of the value. Defaults to 0.</p>
   */
  Scale?: number;

  /**
   * <p>The schema name (database name) to which the query results belong.</p>
   */
  SchemaName?: string;

  /**
   * <p>The table name for the query results.</p>
   */
  TableName?: string;

  /**
   * <p>The data type of the column.</p>
   */
  Type: string | undefined;
}

export namespace ColumnInfo {
  export function isa(o: any): o is ColumnInfo {
    return __isa(o, "ColumnInfo");
  }
}

export enum ColumnNullable {
  NOT_NULL = "NOT_NULL",
  NULLABLE = "NULLABLE",
  UNKNOWN = "UNKNOWN"
}

export interface CreateNamedQueryInput {
  __type?: "CreateNamedQueryInput";
  /**
   * <p>A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another <code>CreateNamedQuery</code> request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the <code>QueryString</code>, an error is returned.</p>
   *          <important>
   *             <p>This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The contents of the query with all query statements.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The name of the workgroup in which the named query is being created.</p>
   */
  WorkGroup?: string;
}

export namespace CreateNamedQueryInput {
  export function isa(o: any): o is CreateNamedQueryInput {
    return __isa(o, "CreateNamedQueryInput");
  }
}

export interface CreateNamedQueryOutput {
  __type?: "CreateNamedQueryOutput";
  /**
   * <p>The unique ID of the query.</p>
   */
  NamedQueryId?: string;
}

export namespace CreateNamedQueryOutput {
  export function isa(o: any): o is CreateNamedQueryOutput {
    return __isa(o, "CreateNamedQueryOutput");
  }
}

export interface CreateWorkGroupInput {
  __type?: "CreateWorkGroupInput";
  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3
   *          where query results are stored, the encryption configuration, if any, used for encrypting query results,
   *          whether the Amazon CloudWatch Metrics are enabled for the workgroup,
   *          the limit for the amount of bytes scanned (cutoff) per query, if it is specified,
   *          and whether workgroup's settings (specified with EnforceWorkGroupConfiguration) in the WorkGroupConfiguration override client-side settings.
   *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more tags, separated by commas, that you want to attach to the workgroup as you create it.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateWorkGroupInput {
  export function isa(o: any): o is CreateWorkGroupInput {
    return __isa(o, "CreateWorkGroupInput");
  }
}

export interface CreateWorkGroupOutput {
  __type?: "CreateWorkGroupOutput";
}

export namespace CreateWorkGroupOutput {
  export function isa(o: any): o is CreateWorkGroupOutput {
    return __isa(o, "CreateWorkGroupOutput");
  }
}

/**
 * <p>A piece of data (a field in the table).</p>
 */
export interface Datum {
  __type?: "Datum";
  /**
   * <p>The value of the datum.</p>
   */
  VarCharValue?: string;
}

export namespace Datum {
  export function isa(o: any): o is Datum {
    return __isa(o, "Datum");
  }
}

export interface DeleteNamedQueryInput {
  __type?: "DeleteNamedQueryInput";
  /**
   * <p>The unique ID of the query to delete.</p>
   */
  NamedQueryId?: string;
}

export namespace DeleteNamedQueryInput {
  export function isa(o: any): o is DeleteNamedQueryInput {
    return __isa(o, "DeleteNamedQueryInput");
  }
}

export interface DeleteNamedQueryOutput {
  __type?: "DeleteNamedQueryOutput";
}

export namespace DeleteNamedQueryOutput {
  export function isa(o: any): o is DeleteNamedQueryOutput {
    return __isa(o, "DeleteNamedQueryOutput");
  }
}

export interface DeleteWorkGroupInput {
  __type?: "DeleteWorkGroupInput";
  /**
   * <p>The option to delete the workgroup and its contents even if the workgroup contains any named queries.</p>
   */
  RecursiveDeleteOption?: boolean;

  /**
   * <p>The unique name of the workgroup to delete.</p>
   */
  WorkGroup: string | undefined;
}

export namespace DeleteWorkGroupInput {
  export function isa(o: any): o is DeleteWorkGroupInput {
    return __isa(o, "DeleteWorkGroupInput");
  }
}

export interface DeleteWorkGroupOutput {
  __type?: "DeleteWorkGroupOutput";
}

export namespace DeleteWorkGroupOutput {
  export function isa(o: any): o is DeleteWorkGroupOutput {
    return __isa(o, "DeleteWorkGroupOutput");
  }
}

/**
 * <p>If query results are encrypted in Amazon S3, indicates the encryption
 *          option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.</p>
 */
export interface EncryptionConfiguration {
  __type?: "EncryptionConfiguration";
  /**
   * <p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys
   *             (<code>SSE-S3</code>), server-side encryption with KMS-managed keys
   *             (<code>SSE-KMS</code>), or client-side encryption with KMS-managed keys (CSE-KMS) is
   *          used.</p>
   *          <p>If a query runs in a workgroup and the workgroup overrides client-side settings,
   *          then the workgroup's setting for encryption is used. It specifies
   *          whether query results must be encrypted, for all queries that run in this workgroup. </p>
   */
  EncryptionOption: EncryptionOption | string | undefined;

  /**
   * <p>For <code>SSE-KMS</code> and <code>CSE-KMS</code>, this is the KMS key ARN or
   *          ID.</p>
   */
  KmsKey?: string;
}

export namespace EncryptionConfiguration {
  export function isa(o: any): o is EncryptionConfiguration {
    return __isa(o, "EncryptionConfiguration");
  }
}

export enum EncryptionOption {
  CSE_KMS = "CSE_KMS",
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3"
}

export interface GetNamedQueryInput {
  __type?: "GetNamedQueryInput";
  /**
   * <p>The unique ID of the query. Use <a>ListNamedQueries</a> to get query IDs.</p>
   */
  NamedQueryId: string | undefined;
}

export namespace GetNamedQueryInput {
  export function isa(o: any): o is GetNamedQueryInput {
    return __isa(o, "GetNamedQueryInput");
  }
}

export interface GetNamedQueryOutput {
  __type?: "GetNamedQueryOutput";
  /**
   * <p>Information about the query.</p>
   */
  NamedQuery?: NamedQuery;
}

export namespace GetNamedQueryOutput {
  export function isa(o: any): o is GetNamedQueryOutput {
    return __isa(o, "GetNamedQueryOutput");
  }
}

export interface GetQueryExecutionInput {
  __type?: "GetQueryExecutionInput";
  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

export namespace GetQueryExecutionInput {
  export function isa(o: any): o is GetQueryExecutionInput {
    return __isa(o, "GetQueryExecutionInput");
  }
}

export interface GetQueryExecutionOutput {
  __type?: "GetQueryExecutionOutput";
  /**
   * <p>Information about the query execution.</p>
   */
  QueryExecution?: QueryExecution;
}

export namespace GetQueryExecutionOutput {
  export function isa(o: any): o is GetQueryExecutionOutput {
    return __isa(o, "GetQueryExecutionOutput");
  }
}

export interface GetQueryResultsInput {
  __type?: "GetQueryResultsInput";
  /**
   * <p>The maximum number of results (rows) to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies where to start pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

export namespace GetQueryResultsInput {
  export function isa(o: any): o is GetQueryResultsInput {
    return __isa(o, "GetQueryResultsInput");
  }
}

export interface GetQueryResultsOutput {
  __type?: "GetQueryResultsOutput";
  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The results of the query execution.</p>
   */
  ResultSet?: ResultSet;

  /**
   * <p>The number of rows inserted with a CREATE TABLE AS SELECT statement.
   *       </p>
   */
  UpdateCount?: number;
}

export namespace GetQueryResultsOutput {
  export function isa(o: any): o is GetQueryResultsOutput {
    return __isa(o, "GetQueryResultsOutput");
  }
}

export interface GetWorkGroupInput {
  __type?: "GetWorkGroupInput";
  /**
   * <p>The name of the workgroup.</p>
   */
  WorkGroup: string | undefined;
}

export namespace GetWorkGroupInput {
  export function isa(o: any): o is GetWorkGroupInput {
    return __isa(o, "GetWorkGroupInput");
  }
}

export interface GetWorkGroupOutput {
  __type?: "GetWorkGroupOutput";
  /**
   * <p>Information about the workgroup.</p>
   */
  WorkGroup?: WorkGroup;
}

export namespace GetWorkGroupOutput {
  export function isa(o: any): o is GetWorkGroupOutput {
    return __isa(o, "GetWorkGroupOutput");
  }
}

/**
 * <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The error code returned when the query execution failed to process, or when the processing request for the named query failed.</p>
   */
  AthenaErrorCode?: string;

  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

export interface ListNamedQueriesInput {
  __type?: "ListNamedQueriesInput";
  /**
   * <p>The maximum number of queries to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies where to start pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the workgroup from which the named queries are being returned.</p>
   */
  WorkGroup?: string;
}

export namespace ListNamedQueriesInput {
  export function isa(o: any): o is ListNamedQueriesInput {
    return __isa(o, "ListNamedQueriesInput");
  }
}

export interface ListNamedQueriesOutput {
  __type?: "ListNamedQueriesOutput";
  /**
   * <p>The list of unique query IDs.</p>
   */
  NamedQueryIds?: Array<string>;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

export namespace ListNamedQueriesOutput {
  export function isa(o: any): o is ListNamedQueriesOutput {
    return __isa(o, "ListNamedQueriesOutput");
  }
}

export interface ListQueryExecutionsInput {
  __type?: "ListQueryExecutionsInput";
  /**
   * <p>The maximum number of query executions to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies where to start pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the workgroup from which queries are being returned.</p>
   */
  WorkGroup?: string;
}

export namespace ListQueryExecutionsInput {
  export function isa(o: any): o is ListQueryExecutionsInput {
    return __isa(o, "ListQueryExecutionsInput");
  }
}

export interface ListQueryExecutionsOutput {
  __type?: "ListQueryExecutionsOutput";
  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique IDs of each query execution as an array of strings.</p>
   */
  QueryExecutionIds?: Array<string>;
}

export namespace ListQueryExecutionsOutput {
  export function isa(o: any): o is ListQueryExecutionsOutput {
    return __isa(o, "ListQueryExecutionsOutput");
  }
}

export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   * <p>The maximum number of results to be returned per request that lists the tags for the workgroup resource.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no additional results for this request, where the request lists the tags for the workgroup resource with the specified ARN.</p>
   */
  NextToken?: string;

  /**
   * <p>Lists the tags for the workgroup resource with the specified ARN.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceInput {
  export function isa(o: any): o is ListTagsForResourceInput {
    return __isa(o, "ListTagsForResourceInput");
  }
}

export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of tags associated with this workgroup.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceOutput {
  export function isa(o: any): o is ListTagsForResourceOutput {
    return __isa(o, "ListTagsForResourceOutput");
  }
}

export interface ListWorkGroupsInput {
  __type?: "ListWorkGroupsInput";
  /**
   * <p>The maximum number of workgroups to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

export namespace ListWorkGroupsInput {
  export function isa(o: any): o is ListWorkGroupsInput {
    return __isa(o, "ListWorkGroupsInput");
  }
}

export interface ListWorkGroupsOutput {
  __type?: "ListWorkGroupsOutput";
  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of workgroups, including their names, descriptions, creation times, and states.</p>
   */
  WorkGroups?: Array<WorkGroupSummary>;
}

export namespace ListWorkGroupsOutput {
  export function isa(o: any): o is ListWorkGroupsOutput {
    return __isa(o, "ListWorkGroupsOutput");
  }
}

/**
 * <p>A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.</p>
 */
export interface NamedQuery {
  __type?: "NamedQuery";
  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the query.</p>
   */
  NamedQueryId?: string;

  /**
   * <p>The SQL query statements that comprise the query.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The name of the workgroup that contains the named query.</p>
   */
  WorkGroup?: string;
}

export namespace NamedQuery {
  export function isa(o: any): o is NamedQuery {
    return __isa(o, "NamedQuery");
  }
}

/**
 * <p>Information about a single instance of a query execution.</p>
 */
export interface QueryExecution {
  __type?: "QueryExecution";
  /**
   * <p>The SQL query statements which the query execution ran.</p>
   */
  Query?: string;

  /**
   * <p>The database in which the query execution occurred.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * <p>The unique identifier for each query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * <p>The location in Amazon S3 where query results were stored and the encryption option,
   *          if any, used for query results. These are known as "client-side settings".
   *          If workgroup settings override client-side settings, then the query uses
   *          the location for the query results and the encryption configuration that
   *          are specified for the workgroup.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>The type of query statement that was run. <code>DDL</code> indicates DDL query
   *          statements. <code>DML</code> indicates DML (Data Manipulation Language) query statements,
   *          such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code>
   *          indicates query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>,
   *          or <code>DESCRIBE <table></code>.</p>
   */
  StatementType?: StatementType | string;

  /**
   * <p>The amount of data scanned during the query execution and the amount of time that it
   *          took to execute, and the type of statement that was run.</p>
   */
  Statistics?: QueryExecutionStatistics;

  /**
   * <p>The completion date, current state, submission time, and state change reason (if applicable) for the query execution.</p>
   */
  Status?: QueryExecutionStatus;

  /**
   * <p>The name of the workgroup in which the query ran.</p>
   */
  WorkGroup?: string;
}

export namespace QueryExecution {
  export function isa(o: any): o is QueryExecution {
    return __isa(o, "QueryExecution");
  }
}

/**
 * <p>The database in which the query execution occurs.</p>
 */
export interface QueryExecutionContext {
  __type?: "QueryExecutionContext";
  /**
   * <p>The name of the database.</p>
   */
  Database?: string;
}

export namespace QueryExecutionContext {
  export function isa(o: any): o is QueryExecutionContext {
    return __isa(o, "QueryExecutionContext");
  }
}

export enum QueryExecutionState {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>The amount of data scanned during the query execution and the amount of time that it
 *          took to execute, and the type of statement that was run.</p>
 */
export interface QueryExecutionStatistics {
  __type?: "QueryExecutionStatistics";
  /**
   * <p>The location and file name of a data manifest file. The manifest file is saved to the Athena query results location in Amazon S3. The manifest file tracks files that the query wrote to Amazon S3. If the query fails, the manifest file also tracks files that the query intended to write. The manifest is useful for identifying orphaned files resulting from a failed query. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with Query Results, Output Files, and Query History</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  DataManifestLocation?: string;

  /**
   * <p>The number of bytes in the data that was queried.</p>
   */
  DataScannedInBytes?: number;

  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to plan the query processing flow. This includes the time spent retrieving table partitions from the data source. Note that because the query engine performs the query planning, query planning time is a subset of engine processing time.</p>
   */
  QueryPlanningTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that the query was in your query queue waiting for resources. Note that if transient errors occur, Athena might automatically add the query back to the queue.</p>
   */
  QueryQueueTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to finalize and publish the query results after the query engine finished running the query.</p>
   */
  ServiceProcessingTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to run the query.</p>
   */
  TotalExecutionTimeInMillis?: number;
}

export namespace QueryExecutionStatistics {
  export function isa(o: any): o is QueryExecutionStatistics {
    return __isa(o, "QueryExecutionStatistics");
  }
}

/**
 * <p>The completion date, current state, submission time, and state change reason (if applicable) for the query execution.</p>
 */
export interface QueryExecutionStatus {
  __type?: "QueryExecutionStatus";
  /**
   * <p>The date and time that the query completed.</p>
   */
  CompletionDateTime?: Date;

  /**
   * <p>The state of query execution. <code>QUEUED</code> state is listed but is not used by
   *          Athena and is reserved for future use. <code>RUNNING</code> indicates that the query has
   *          been submitted to the service, and Athena will execute the query as soon as resources are
   *          available. <code>SUCCEEDED</code> indicates that the query completed without errors.
   *             <code>FAILED</code> indicates that the query experienced an error and did not complete
   *             processing. <code>CANCELLED</code> indicates that a user input interrupted query execution. </p>
   */
  State?: QueryExecutionState | string;

  /**
   * <p>Further detail about the status of the query.</p>
   */
  StateChangeReason?: string;

  /**
   * <p>The date and time that the query was submitted.</p>
   */
  SubmissionDateTime?: Date;
}

export namespace QueryExecutionStatus {
  export function isa(o: any): o is QueryExecutionStatus {
    return __isa(o, "QueryExecutionStatus");
  }
}

/**
 * <p>A resource, such as a workgroup, was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The location in Amazon S3 where query results are stored and the encryption option,
 *          if any, used for query results. These are known as "client-side settings".
 *          If workgroup settings override client-side settings, then the query uses
 *          the workgroup settings.</p>
 */
export interface ResultConfiguration {
  __type?: "ResultConfiguration";
  /**
   * <p>If query results are encrypted in Amazon S3, indicates the encryption option used (for
   *          example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. This is a client-side setting.
   *          If workgroup settings override client-side settings, then the query uses the encryption configuration
   *          that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup.
   *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and
   *          <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The location in Amazon S3 where your query results are stored, such as <code>s3://path/to/query/bucket/</code>.
   *          To run the query, you must specify the query results location
   *          using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using
   *          <a>WorkGroupConfiguration</a>.
   *           If none of them is set, Athena issues an error that no output location is provided. For more information, see
   *          <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a>. If workgroup settings override client-side settings,
   *          then the query uses the settings specified for the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;
}

export namespace ResultConfiguration {
  export function isa(o: any): o is ResultConfiguration {
    return __isa(o, "ResultConfiguration");
  }
}

/**
 * <p>The information about the updates in the query results, such as output location and encryption configuration for the query results.</p>
 */
export interface ResultConfigurationUpdates {
  __type?: "ResultConfigurationUpdates";
  /**
   * <p>The encryption configuration for the query results.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The location in Amazon S3 where your query results are stored, such as <code>s3://path/to/query/bucket/</code>.
   *       For more information, see
   *          <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> If workgroup settings override client-side settings, then the query uses
   *          the location for the query results and the encryption configuration that
   *          are specified for the workgroup. The "workgroup settings override" is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration.
   *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;

  /**
   * <p>If set to "true", indicates that the previously-specified encryption configuration (also known as the client-side setting) for queries in this workgroup should be ignored and set to null.
   *          If set to "false" or not set, and a value is present in the EncryptionConfiguration in ResultConfigurationUpdates (the client-side setting), the EncryptionConfiguration in the workgroup's ResultConfiguration will be updated with the new value.
   *          For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  RemoveEncryptionConfiguration?: boolean;

  /**
   * <p>If set to "true", indicates that the previously-specified query results location (also known as a client-side setting) for queries in this workgroup should be ignored and set to null.
   *          If set to "false" or not set, and a value is present in the OutputLocation in ResultConfigurationUpdates (the client-side setting), the OutputLocation in the workgroup's ResultConfiguration will be updated with the new value.
   *          For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  RemoveOutputLocation?: boolean;
}

export namespace ResultConfigurationUpdates {
  export function isa(o: any): o is ResultConfigurationUpdates {
    return __isa(o, "ResultConfigurationUpdates");
  }
}

/**
 * <p>The metadata and rows that comprise a query result set. The metadata describes the column structure and data types.</p>
 */
export interface ResultSet {
  __type?: "ResultSet";
  /**
   * <p>The metadata that describes the column structure and data types of a table of query results.</p>
   */
  ResultSetMetadata?: ResultSetMetadata;

  /**
   * <p>The rows in the table.</p>
   */
  Rows?: Array<Row>;
}

export namespace ResultSet {
  export function isa(o: any): o is ResultSet {
    return __isa(o, "ResultSet");
  }
}

/**
 * <p>The metadata that describes the column structure and data types of a table of query
 *          results. </p>
 */
export interface ResultSetMetadata {
  __type?: "ResultSetMetadata";
  /**
   * <p>Information about the columns returned in a query result metadata.</p>
   */
  ColumnInfo?: Array<ColumnInfo>;
}

export namespace ResultSetMetadata {
  export function isa(o: any): o is ResultSetMetadata {
    return __isa(o, "ResultSetMetadata");
  }
}

/**
 * <p>The rows that comprise a query result table.</p>
 */
export interface Row {
  __type?: "Row";
  /**
   * <p>The data that populates a row in a query result table.</p>
   */
  Data?: Array<Datum>;
}

export namespace Row {
  export function isa(o: any): o is Row {
    return __isa(o, "Row");
  }
}

export interface StartQueryExecutionInput {
  __type?: "StartQueryExecutionInput";
  /**
   * <p>A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another <code>StartQueryExecution</code> request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the <code>QueryString</code>, an error is returned.</p>
   *          <important>
   *             <p>This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The database within which the query executes.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>Specifies information about where and how to save the results of the query execution. If the query runs in a workgroup, then workgroup's settings may override query settings.
   *          This affects the query results location. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration.
   *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>The name of the workgroup in which the query is being started.</p>
   */
  WorkGroup?: string;
}

export namespace StartQueryExecutionInput {
  export function isa(o: any): o is StartQueryExecutionInput {
    return __isa(o, "StartQueryExecutionInput");
  }
}

export interface StartQueryExecutionOutput {
  __type?: "StartQueryExecutionOutput";
  /**
   * <p>The unique ID of the query that ran as a result of this request.</p>
   */
  QueryExecutionId?: string;
}

export namespace StartQueryExecutionOutput {
  export function isa(o: any): o is StartQueryExecutionOutput {
    return __isa(o, "StartQueryExecutionOutput");
  }
}

export enum StatementType {
  DDL = "DDL",
  DML = "DML",
  UTILITY = "UTILITY"
}

export interface StopQueryExecutionInput {
  __type?: "StopQueryExecutionInput";
  /**
   * <p>The unique ID of the query execution to stop.</p>
   */
  QueryExecutionId?: string;
}

export namespace StopQueryExecutionInput {
  export function isa(o: any): o is StopQueryExecutionInput {
    return __isa(o, "StopQueryExecutionInput");
  }
}

export interface StopQueryExecutionOutput {
  __type?: "StopQueryExecutionOutput";
}

export namespace StopQueryExecutionOutput {
  export function isa(o: any): o is StopQueryExecutionOutput {
    return __isa(o, "StopQueryExecutionOutput");
  }
}

/**
 * <p>A tag that you can add to a resource. A tag is a label that you assign to an AWS Athena resource (a workgroup). Each tag consists of a key and an optional value, both of which you define.
 *          Tags enable you to categorize workgroups in Athena, for example, by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups in your account.
 *          The maximum tag key length is 128 Unicode characters in UTF-8. The maximum tag value length is 256 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @.
 *          Tag keys and values are case-sensitive. Tag keys must be unique per resource.
 *       </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys are case-sensitive and must be unique per resource.
   *       </p>
   */
  Key?: string;

  /**
   * <p>A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @.
   *          Tag values are case-sensitive.
   *       </p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>Requests that one or more tags are added to the resource (such as a workgroup) for the specified ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>One or more tags, separated by commas, to be added to the resource, such as a workgroup.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceInput {
  export function isa(o: any): o is TagResourceInput {
    return __isa(o, "TagResourceInput");
  }
}

export interface TagResourceOutput {
  __type?: "TagResourceOutput";
}

export namespace TagResourceOutput {
  export function isa(o: any): o is TagResourceOutput {
    return __isa(o, "TagResourceOutput");
  }
}

export enum ThrottleReason {
  CONCURRENT_QUERY_LIMIT_EXCEEDED = "CONCURRENT_QUERY_LIMIT_EXCEEDED"
}

/**
 * <p>Indicates that the request was throttled.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the query throttling, for example, when it exceeds the concurrent query limit.</p>
   */
  Reason?: ThrottleReason | string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

/**
 * <p>Information about a named query ID that could not be processed.</p>
 */
export interface UnprocessedNamedQueryId {
  __type?: "UnprocessedNamedQueryId";
  /**
   * <p>The error code returned when the processing request for the named query failed, if applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the processing request for the named query failed, if applicable.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The unique identifier of the named query.</p>
   */
  NamedQueryId?: string;
}

export namespace UnprocessedNamedQueryId {
  export function isa(o: any): o is UnprocessedNamedQueryId {
    return __isa(o, "UnprocessedNamedQueryId");
  }
}

/**
 * <p>Describes a query execution that failed to process.</p>
 */
export interface UnprocessedQueryExecutionId {
  __type?: "UnprocessedQueryExecutionId";
  /**
   * <p>The error code returned when the query execution failed to process, if applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the query execution failed to process, if applicable.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The unique identifier of the query execution.</p>
   */
  QueryExecutionId?: string;
}

export namespace UnprocessedQueryExecutionId {
  export function isa(o: any): o is UnprocessedQueryExecutionId {
    return __isa(o, "UnprocessedQueryExecutionId");
  }
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   * <p>Removes one or more tags from the workgroup resource for the specified ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>Removes the tags associated with one or more tag keys from the workgroup resource.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceInput {
  export function isa(o: any): o is UntagResourceInput {
    return __isa(o, "UntagResourceInput");
  }
}

export interface UntagResourceOutput {
  __type?: "UntagResourceOutput";
}

export namespace UntagResourceOutput {
  export function isa(o: any): o is UntagResourceOutput {
    return __isa(o, "UntagResourceOutput");
  }
}

export interface UpdateWorkGroupInput {
  __type?: "UpdateWorkGroupInput";
  /**
   * <p>The workgroup configuration that will be updated for the given workgroup.</p>
   */
  ConfigurationUpdates?: WorkGroupConfigurationUpdates;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup state that will be updated for the given workgroup.</p>
   */
  State?: WorkGroupState | string;

  /**
   * <p>The specified workgroup that will be updated.</p>
   */
  WorkGroup: string | undefined;
}

export namespace UpdateWorkGroupInput {
  export function isa(o: any): o is UpdateWorkGroupInput {
    return __isa(o, "UpdateWorkGroupInput");
  }
}

export interface UpdateWorkGroupOutput {
  __type?: "UpdateWorkGroupOutput";
}

export namespace UpdateWorkGroupOutput {
  export function isa(o: any): o is UpdateWorkGroupOutput {
    return __isa(o, "UpdateWorkGroupOutput");
  }
}

/**
 * <p>A workgroup, which contains a name, description, creation time, state, and other configuration,
 *          listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to
 *          isolate queries for you or your group of users from other queries in the same account,
 *          to configure the query results location and the encryption configuration (known as workgroup settings),
 *          to enable sending query metrics to Amazon CloudWatch,
 *          and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration.
 *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
 */
export interface WorkGroup {
  __type?: "WorkGroup";
  /**
   * <p>The configuration of the workgroup, which includes the location in Amazon S3
   *          where query results are stored, the encryption configuration, if any, used for query results;
   *          whether the Amazon CloudWatch Metrics are enabled for the workgroup;
   *          whether workgroup settings override client-side settings;
   *          and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration.
   *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * <p>The date and time the workgroup was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The state of the workgroup: ENABLED or DISABLED.</p>
   */
  State?: WorkGroupState | string;
}

export namespace WorkGroup {
  export function isa(o: any): o is WorkGroup {
    return __isa(o, "WorkGroup");
  }
}

/**
 * <p>The configuration of the workgroup, which includes the location in Amazon S3
 *          where query results are stored, the encryption option, if any, used for query results,
 *          whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and
 *          the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration.
 *          See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. </p>
 */
export interface WorkGroupConfiguration {
  __type?: "WorkGroupConfiguration";
  /**
   * <p>The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used.
   *          For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is <code>false</code>. For more information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3
   *          where query results are stored and the encryption option, if any, used for query results.
   *          To run the query, you must specify the query results location
   *          using one of the ways: either in the workgroup using this setting, or for individual queries (client-side), using
   *          <a>ResultConfiguration$OutputLocation</a>.
   *          If none of them is set, Athena issues an error that no output location is provided. For more information, see
   *          <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;
}

export namespace WorkGroupConfiguration {
  export function isa(o: any): o is WorkGroupConfiguration {
    return __isa(o, "WorkGroupConfiguration");
  }
}

/**
 * <p>The configuration information that will be updated for this workgroup, which includes the
 *          location in Amazon S3
 *          where query results are stored, the encryption option, if any, used for query results,
 *          whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and
 *          the data usage limit for the amount of bytes scanned per query, if it is specified.</p>
 */
export interface WorkGroupConfigurationUpdates {
  __type?: "WorkGroupConfigurationUpdates";
  /**
   * <p>The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set to "false" client-side settings are used.
   *          For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a>
   *          </p>
   */
  RemoveBytesScannedCutoffPerQuery?: boolean;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is <code>false</code>. For more information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * <p>The result configuration information about the queries in this workgroup that will be updated.
   *          Includes the updated results location and an updated option for encrypting query results.</p>
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates;
}

export namespace WorkGroupConfigurationUpdates {
  export function isa(o: any): o is WorkGroupConfigurationUpdates {
    return __isa(o, "WorkGroupConfigurationUpdates");
  }
}

export enum WorkGroupState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>The summary information for the workgroup, which includes its name, state, description, and the date and time
 *          it was created.</p>
 */
export interface WorkGroupSummary {
  __type?: "WorkGroupSummary";
  /**
   * <p>The workgroup creation date and time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The name of the workgroup.</p>
   */
  Name?: string;

  /**
   * <p>The state of the workgroup.</p>
   */
  State?: WorkGroupState | string;
}

export namespace WorkGroupSummary {
  export function isa(o: any): o is WorkGroupSummary {
    return __isa(o, "WorkGroupSummary");
  }
}
