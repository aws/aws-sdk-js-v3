// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RedshiftDataServiceException as __BaseException } from "./RedshiftDataServiceException";

/**
 * <p>The Amazon Redshift Data API operation failed because the maximum number of active sessions exceeded.</p>
 * @public
 */
export class ActiveSessionsExceededException extends __BaseException {
  readonly name: "ActiveSessionsExceededException" = "ActiveSessionsExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveSessionsExceededException, __BaseException>) {
    super({
      name: "ActiveSessionsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveSessionsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of active statements exceeds the limit.</p>
 * @public
 */
export class ActiveStatementsExceededException extends __BaseException {
  readonly name: "ActiveStatementsExceededException" = "ActiveStatementsExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveStatementsExceededException, __BaseException>) {
    super({
      name: "ActiveStatementsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveStatementsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An SQL statement encountered an environmental error while running.</p>
 * @public
 */
export class BatchExecuteStatementException extends __BaseException {
  readonly name: "BatchExecuteStatementException" = "BatchExecuteStatementException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p>Statement identifier of the exception.</p>
   * @public
   */
  StatementId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchExecuteStatementException, __BaseException>) {
    super({
      name: "BatchExecuteStatementException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchExecuteStatementException.prototype);
    this.Message = opts.Message;
    this.StatementId = opts.StatementId;
  }
}

/**
 * @public
 * @enum
 */
export const ResultFormatString = {
  CSV: "CSV",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type ResultFormatString = (typeof ResultFormatString)[keyof typeof ResultFormatString];

/**
 * @public
 */
export interface BatchExecuteStatementInput {
  /**
   * <p>One or more SQL statements to run.
   *
   *       The SQL statements are run as a single transaction. They run serially in the order of the array.
   *       Subsequent SQL statements don't start until the previous statement in the array completes.
   *       If any SQL statement fails, then because they are run as one transaction, all work is rolled back.</p>
   * @public
   */
  Sqls: string[] | undefined;

  /**
   * <p>The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using Secrets Manager. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the database. This parameter is required when authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statements run. </p>
   * @public
   */
  WithEvent?: boolean | undefined;

  /**
   * <p>The name of the SQL statements. You can name the SQL statements when you create them to identify the query. </p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.</p>
   * @public
   */
  WorkgroupName?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The number of seconds to keep the session alive after the query finishes. The maximum time a session can keep alive is 24 hours. After 24 hours, the session is forced closed and the query is terminated.</p>
   * @public
   */
  SessionKeepAliveSeconds?: number | undefined;

  /**
   * <p>The session identifier of the query.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The data format of the result of the SQL statement. If no format is specified, the default is JSON.</p>
   * @public
   */
  ResultFormat?: ResultFormatString | undefined;
}

/**
 * @public
 */
export interface BatchExecuteStatementOutput {
  /**
   * <p>The identifier of the SQL statement whose results are to be fetched. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *       This identifier is returned by <code>BatchExecuteStatment</code>. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The date and time (UTC) the statement was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The cluster identifier. This element is not returned when connecting to a serverless workgroup. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The database user name.</p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>A list of colon (:) separated names of database groups.</p>
   * @public
   */
  DbGroups?: string[] | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This element is not returned when connecting to a provisioned cluster.</p>
   * @public
   */
  WorkgroupName?: string | undefined;

  /**
   * <p>The session identifier of the query.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CancelStatementRequest {
  /**
   * <p>The identifier of the SQL statement to cancel. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *         This identifier is returned by <code>BatchExecuteStatment</code>, <code>ExecuteStatment</code>, and <code>ListStatements</code>. </p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CancelStatementResponse {
  /**
   * <p>A value that indicates whether the cancel statement succeeded (true). </p>
   * @public
   */
  Status?: boolean | undefined;
}

/**
 * <p>Connection to a database failed.</p>
 * @public
 */
export class DatabaseConnectionException extends __BaseException {
  readonly name: "DatabaseConnectionException" = "DatabaseConnectionException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DatabaseConnectionException, __BaseException>) {
    super({
      name: "DatabaseConnectionException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DatabaseConnectionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Resource identifier associated with the exception.</p>
   * @public
   */
  ResourceId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * <p>The properties (metadata) of a column. </p>
 * @public
 */
export interface ColumnMetadata {
  /**
   * <p>A value that indicates whether the column is case-sensitive. </p>
   * @public
   */
  isCaseSensitive?: boolean | undefined;

  /**
   * <p>A value that indicates whether the column contains currency values.</p>
   * @public
   */
  isCurrency?: boolean | undefined;

  /**
   * <p>A value that indicates whether an integer column is signed.</p>
   * @public
   */
  isSigned?: boolean | undefined;

  /**
   * <p>The label for the column. </p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p>The name of the column. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A value that indicates whether the column is nullable. </p>
   * @public
   */
  nullable?: number | undefined;

  /**
   * <p>The precision value of a decimal number column. </p>
   * @public
   */
  precision?: number | undefined;

  /**
   * <p>The scale value of a decimal number column. </p>
   * @public
   */
  scale?: number | undefined;

  /**
   * <p>The name of the schema that contains the table that includes the column.</p>
   * @public
   */
  schemaName?: string | undefined;

  /**
   * <p>The name of the table that includes the column. </p>
   * @public
   */
  tableName?: string | undefined;

  /**
   * <p>The database-specific data type of the column. </p>
   * @public
   */
  typeName?: string | undefined;

  /**
   * <p>The length of the column.</p>
   * @public
   */
  length?: number | undefined;

  /**
   * <p>The default value of the column. </p>
   * @public
   */
  columnDefault?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStatementRequest {
  /**
   * <p>The identifier of the SQL statement to describe. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *        A suffix indicates the number of the SQL statement.
   *        For example, <code>d9b6c0c9-0747-4bf4-b142-e8883122f766:2</code> has a suffix of <code>:2</code> that indicates the second SQL statement of a batch query.
   *        This identifier is returned by <code>BatchExecuteStatment</code>, <code>ExecuteStatement</code>, and <code>ListStatements</code>. </p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>A parameter used in a SQL statement.</p>
 * @public
 */
export interface SqlParameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the parameter.
   *     Amazon Redshift implicitly converts to the proper data type. For more information, see
   *       <a href="https://docs.aws.amazon.com/redshift/latest/dg/c_Supported_data_types.html">Data types</a> in the
   *       <i>Amazon Redshift Database Developer Guide</i>. </p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StatusString = {
  ABORTED: "ABORTED",
  ALL: "ALL",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  PICKED: "PICKED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type StatusString = (typeof StatusString)[keyof typeof StatusString];

/**
 * @public
 * @enum
 */
export const StatementStatusString = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  PICKED: "PICKED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type StatementStatusString = (typeof StatementStatusString)[keyof typeof StatementStatusString];

/**
 * <p>Information about an SQL statement.</p>
 * @public
 */
export interface SubStatementData {
  /**
   * <p>The identifier of the SQL statement. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *       A suffix indicates the number of the SQL statement.
   *       For example, <code>d9b6c0c9-0747-4bf4-b142-e8883122f766:2</code> has a suffix of <code>:2</code> that indicates the second SQL statement of a batch query.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The amount of time in nanoseconds that the statement ran.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The error message from the cluster if the SQL statement encountered an error while running.</p>
   * @public
   */
  Error?: string | undefined;

  /**
   * <p>The status of the SQL statement. An
   *       example is the that the SQL statement finished.
   *       </p>
   * @public
   */
  Status?: StatementStatusString | undefined;

  /**
   * <p>The date and time (UTC) the statement was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time (UTC) that the statement metadata was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The SQL statement text.</p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p>Either the number of rows returned from the SQL statement or the number of rows affected.
   *       If result size is greater than zero, the result rows can be the number of rows affected by SQL statements such as INSERT, UPDATE, DELETE, COPY, and others.
   *       A <code>-1</code> indicates the value is null.</p>
   * @public
   */
  ResultRows?: number | undefined;

  /**
   * <p>The size in bytes of the returned results. A <code>-1</code> indicates the value is null.</p>
   * @public
   */
  ResultSize?: number | undefined;

  /**
   * <p>The SQL statement identifier. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   * @public
   */
  RedshiftQueryId?: number | undefined;

  /**
   * <p>A value that indicates whether the statement has a result set. The result set can be empty. The value is true for an empty result set.</p>
   * @public
   */
  HasResultSet?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeStatementResponse {
  /**
   * <p>The identifier of the SQL statement described. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the secret that enables access to the database. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the database. </p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The cluster identifier. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The amount of time in nanoseconds that the statement ran. </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The error message from the cluster if the SQL statement encountered an error while running. </p>
   * @public
   */
  Error?: string | undefined;

  /**
   * <p>The status of the SQL statement being described. Status values are defined as follows: </p>
   *          <ul>
   *             <li>
   *                <p>ABORTED - The query run was stopped by the user. </p>
   *             </li>
   *             <li>
   *                <p>ALL -  A status value that includes all query statuses. This value can be used to filter results. </p>
   *             </li>
   *             <li>
   *                <p>FAILED - The query run failed. </p>
   *             </li>
   *             <li>
   *                <p>FINISHED - The query has finished running. </p>
   *             </li>
   *             <li>
   *                <p>PICKED - The query has been chosen to be run. </p>
   *             </li>
   *             <li>
   *                <p>STARTED - The query run has started. </p>
   *             </li>
   *             <li>
   *                <p>SUBMITTED - The query was submitted, but not yet processed. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StatusString | undefined;

  /**
   * <p>The date and time (UTC) when the SQL statement was submitted to run. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time (UTC) that the metadata for the SQL statement was last updated. An
   *       example is the time the status last changed. </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The process identifier from Amazon Redshift. </p>
   * @public
   */
  RedshiftPid?: number | undefined;

  /**
   * <p>A value that indicates whether the statement has a result set. The result set can be empty. The value is true for an empty result set.
   *       The value is true if any substatement returns a result set.</p>
   * @public
   */
  HasResultSet?: boolean | undefined;

  /**
   * <p>The SQL statement text. </p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p>Either the number of rows returned from the SQL statement or the number of rows affected.
   *         If result size is greater than zero, the result rows can be the number of rows affected by SQL statements such as INSERT, UPDATE, DELETE, COPY, and others.
   *         A <code>-1</code> indicates the value is null.</p>
   * @public
   */
  ResultRows?: number | undefined;

  /**
   * <p>The size in bytes of the returned results. A <code>-1</code> indicates the value is null.</p>
   * @public
   */
  ResultSize?: number | undefined;

  /**
   * <p>The identifier of the query generated by Amazon Redshift.
   *       These identifiers are also available in the <code>query</code> column of the <code>STL_QUERY</code> system view. </p>
   * @public
   */
  RedshiftQueryId?: number | undefined;

  /**
   * <p>The parameters for the SQL statement.</p>
   * @public
   */
  QueryParameters?: SqlParameter[] | undefined;

  /**
   * <p>The SQL statements from a multiple statement run.</p>
   * @public
   */
  SubStatements?: SubStatementData[] | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN).</p>
   * @public
   */
  WorkgroupName?: string | undefined;

  /**
   * <p>The session identifier of the query.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The data format of the result of the SQL statement.</p>
   * @public
   */
  ResultFormat?: ResultFormatString | undefined;
}

/**
 * @public
 */
export interface DescribeTableRequest {
  /**
   * <p>The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using Secrets Manager. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the database that contains the tables to be described.
   *       If <code>ConnectedDatabase</code> is not specified, this is also the database to connect to with your authentication credentials.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A database name. The connected database is specified when you connect with your authentication credentials. </p>
   * @public
   */
  ConnectedDatabase?: string | undefined;

  /**
   * <p>The schema that contains the table. If no schema is specified, then matching tables for all schemas are returned. </p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>The table name. If no table is specified, then all tables for all matching schemas are returned.
   *        If no table and no schema is specified, then all tables for all schemas in the database are returned</p>
   * @public
   */
  Table?: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tables to return in the response.
   *       If more tables exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.</p>
   * @public
   */
  WorkgroupName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTableResponse {
  /**
   * <p>The table name. </p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>A list of columns in the table. </p>
   * @public
   */
  ColumnList?: ColumnMetadata[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The Amazon Redshift Data API operation failed due to timeout.</p>
 * @public
 */
export class QueryTimeoutException extends __BaseException {
  readonly name: "QueryTimeoutException" = "QueryTimeoutException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryTimeoutException, __BaseException>) {
    super({
      name: "QueryTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The SQL statement encountered an environmental error while running.</p>
 * @public
 */
export class ExecuteStatementException extends __BaseException {
  readonly name: "ExecuteStatementException" = "ExecuteStatementException";
  readonly $fault: "server" = "server";
  /**
   * <p>The exception message.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>Statement identifier of the exception.</p>
   * @public
   */
  StatementId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExecuteStatementException, __BaseException>) {
    super({
      name: "ExecuteStatementException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ExecuteStatementException.prototype);
    this.Message = opts.Message;
    this.StatementId = opts.StatementId;
  }
}

/**
 * @public
 */
export interface ExecuteStatementInput {
  /**
   * <p>The SQL statement text to run. </p>
   * @public
   */
  Sql: string | undefined;

  /**
   * <p>The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using Secrets Manager. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the database. This parameter is required when authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs. </p>
   * @public
   */
  WithEvent?: boolean | undefined;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to identify the query. </p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The parameters for the SQL statement.</p>
   * @public
   */
  Parameters?: SqlParameter[] | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.</p>
   * @public
   */
  WorkgroupName?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The number of seconds to keep the session alive after the query finishes. The maximum time a session can keep alive is 24 hours. After 24 hours, the session is forced closed and the query is terminated.</p>
   * @public
   */
  SessionKeepAliveSeconds?: number | undefined;

  /**
   * <p>The session identifier of the query.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The data format of the result of the SQL statement. If no format is specified, the default is JSON.</p>
   * @public
   */
  ResultFormat?: ResultFormatString | undefined;
}

/**
 * @public
 */
export interface ExecuteStatementOutput {
  /**
   * <p>The identifier of the SQL statement whose results are to be fetched. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The date and time (UTC) the statement was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The cluster identifier. This element is not returned when connecting to a serverless workgroup. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The database user name.</p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>A list of colon (:) separated names of database groups.</p>
   * @public
   */
  DbGroups?: string[] | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This element is not returned when connecting to a provisioned cluster.</p>
   * @public
   */
  WorkgroupName?: string | undefined;

  /**
   * <p>The session identifier of the query.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * <p>A data value in a column. </p>
 * @public
 */
export type Field =
  | Field.BlobValueMember
  | Field.BooleanValueMember
  | Field.DoubleValueMember
  | Field.IsNullMember
  | Field.LongValueMember
  | Field.StringValueMember
  | Field.$UnknownMember;

/**
 * @public
 */
export namespace Field {
  /**
   * <p>A value that indicates whether the data is NULL. </p>
   * @public
   */
  export interface IsNullMember {
    isNull: boolean;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the Boolean data type. </p>
   * @public
   */
  export interface BooleanValueMember {
    isNull?: never;
    booleanValue: boolean;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the long data type. </p>
   * @public
   */
  export interface LongValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue: number;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the double data type. </p>
   * @public
   */
  export interface DoubleValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue: number;
    stringValue?: never;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the string data type. </p>
   * @public
   */
  export interface StringValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue: string;
    blobValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A value of the BLOB data type. </p>
   * @public
   */
  export interface BlobValueMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    isNull?: never;
    booleanValue?: never;
    longValue?: never;
    doubleValue?: never;
    stringValue?: never;
    blobValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    isNull: (value: boolean) => T;
    booleanValue: (value: boolean) => T;
    longValue: (value: number) => T;
    doubleValue: (value: number) => T;
    stringValue: (value: string) => T;
    blobValue: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Field, visitor: Visitor<T>): T => {
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.longValue !== undefined) return visitor.longValue(value.longValue);
    if (value.doubleValue !== undefined) return visitor.doubleValue(value.doubleValue);
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The results of the SQL statement.</p>
 * @public
 */
export type QueryRecords = QueryRecords.CSVRecordsMember | QueryRecords.$UnknownMember;

/**
 * @public
 */
export namespace QueryRecords {
  /**
   * <p>The results of the SQL statement in CSV format.</p>
   * @public
   */
  export interface CSVRecordsMember {
    CSVRecords: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CSVRecords?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    CSVRecords: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QueryRecords, visitor: Visitor<T>): T => {
    if (value.CSVRecords !== undefined) return visitor.CSVRecords(value.CSVRecords);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetStatementResultRequest {
  /**
   * <p>The identifier of the SQL statement whose results are to be fetched. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *        A suffix indicates then number of the SQL statement.
   *        For example, <code>d9b6c0c9-0747-4bf4-b142-e8883122f766:2</code> has a suffix of <code>:2</code> that indicates the second SQL statement of a batch query.
   *        This identifier is returned by <code>BatchExecuteStatment</code>, <code>ExecuteStatment</code>, and <code>ListStatements</code>. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStatementResultResponse {
  /**
   * <p>The results of the SQL statement in JSON format.</p>
   * @public
   */
  Records: Field[][] | undefined;

  /**
   * <p>The properties (metadata) of a column. </p>
   * @public
   */
  ColumnMetadata?: ColumnMetadata[] | undefined;

  /**
   * <p>The total number of rows in the result set returned from a query.
   *        You can use this number to estimate the number of calls to the <code>GetStatementResult</code> operation needed to page through the results. </p>
   * @public
   */
  TotalNumRows?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStatementResultV2Request {
  /**
   * <p>The identifier of the SQL statement whose results are to be fetched. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API.
   *       A suffix indicates then number of the SQL statement.
   *       For example, <code>d9b6c0c9-0747-4bf4-b142-e8883122f766:2</code> has a suffix of <code>:2</code> that indicates the second SQL statement of a batch query.
   *       This identifier is returned by <code>BatchExecuteStatment</code>, <code>ExecuteStatment</code>, and <code>ListStatements</code>. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStatementResultV2Response {
  /**
   * <p>The results of the SQL statement in CSV format.</p>
   * @public
   */
  Records: QueryRecords[] | undefined;

  /**
   * <p>The properties (metadata) of a column.</p>
   * @public
   */
  ColumnMetadata?: ColumnMetadata[] | undefined;

  /**
   * <p>The total number of rows in the result set returned from a query.
   *       You can use this number to estimate the number of calls to the <code>GetStatementResultV2</code> operation needed to page through the results. </p>
   * @public
   */
  TotalNumRows?: number | undefined;

  /**
   * <p>The data format of the result of the SQL statement.</p>
   * @public
   */
  ResultFormat?: ResultFormatString | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatabasesRequest {
  /**
   * <p>The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name of the database. This parameter is required when authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using Secrets Manager. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of databases to return in the response.
   *        If more databases exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.</p>
   * @public
   */
  WorkgroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListDatabasesResponse {
  /**
   * <p>The names of databases. </p>
   * @public
   */
  Databases?: string[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasRequest {
  /**
   * <p>The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using Secrets Manager. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the database that contains the schemas to list.
   *      If <code>ConnectedDatabase</code> is not specified, this is also the database to connect to with your authentication credentials.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A database name. The connected database is specified when you connect with your authentication credentials. </p>
   * @public
   */
  ConnectedDatabase?: string | undefined;

  /**
   * <p>A pattern to filter results by schema name. Within a schema pattern, "%" means match any
   *       substring of 0 or more characters and "_" means match any one character. Only schema name
   *       entries matching the search pattern are returned. </p>
   * @public
   */
  SchemaPattern?: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of schemas to return in the response.
   *        If more schemas exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.</p>
   * @public
   */
  WorkgroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * <p>The schemas that match the request pattern. </p>
   * @public
   */
  Schemas?: string[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsRequest {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of SQL statements to return in the response.
   *        If more SQL statements exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the SQL statement specified as input to <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> to identify the query.
   *       You can list multiple statements by providing a prefix that matches the beginning of the statement name.
   *       For example, to list myStatement1, myStatement2, myStatement3, and so on, then provide the a value of <code>myStatement</code>.
   *       Data API does a case-sensitive match of SQL statement names to the prefix value you provide. </p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The status of the SQL statement to list. Status values are defined as follows: </p>
   *          <ul>
   *             <li>
   *                <p>ABORTED - The query run was stopped by the user. </p>
   *             </li>
   *             <li>
   *                <p>ALL -  A status value that includes all query statuses. This value can be used to filter results. </p>
   *             </li>
   *             <li>
   *                <p>FAILED - The query run failed. </p>
   *             </li>
   *             <li>
   *                <p>FINISHED - The query has finished running. </p>
   *             </li>
   *             <li>
   *                <p>PICKED - The query has been chosen to be run. </p>
   *             </li>
   *             <li>
   *                <p>STARTED - The query run has started. </p>
   *             </li>
   *             <li>
   *                <p>SUBMITTED - The query was submitted, but not yet processed. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StatusString | undefined;

  /**
   * <p>A value that filters which statements to return in the response. If true, all statements run by the caller's IAM role are returned.
   *       If false, only statements run by the caller's IAM role in the current IAM session are returned.  The default is true. </p>
   * @public
   */
  RoleLevel?: boolean | undefined;

  /**
   * <p>The name of the database when listing statements run against a <code>ClusterIdentifier</code> or <code>WorkgroupName</code>.
   *        </p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The cluster identifier. Only statements that ran on this cluster are returned.
   *       When providing <code>ClusterIdentifier</code>, then <code>WorkgroupName</code> can't be specified.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). Only statements that ran on this workgroup are returned.
   *       When providing <code>WorkgroupName</code>, then <code>ClusterIdentifier</code> can't be specified.</p>
   * @public
   */
  WorkgroupName?: string | undefined;
}

/**
 * <p>The SQL statement to run.</p>
 * @public
 */
export interface StatementData {
  /**
   * <p>The SQL statement identifier. This value is a universally unique identifier (UUID) generated by Amazon Redshift Data API. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The SQL statement.</p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p>One or more SQL statements. Each query string in the array corresponds to one of the queries in a batch query request.</p>
   * @public
   */
  QueryStrings?: string[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the secret that enables access to the database. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The status of the SQL statement. An
   *        example is the that the SQL statement finished.
   *       </p>
   * @public
   */
  Status?: StatusString | undefined;

  /**
   * <p>The name of the SQL statement. </p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The date and time (UTC) the statement was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time (UTC) that the statement metadata was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The parameters used in a SQL statement.</p>
   * @public
   */
  QueryParameters?: SqlParameter[] | undefined;

  /**
   * <p>A value that indicates whether the statement is a batch query request.</p>
   * @public
   */
  IsBatchStatement?: boolean | undefined;

  /**
   * <p>The data format of the result of the SQL statement.</p>
   * @public
   */
  ResultFormat?: ResultFormatString | undefined;

  /**
   * <p>The session identifier of the query.</p>
   * @public
   */
  SessionId?: string | undefined;
}

/**
 * @public
 */
export interface ListStatementsResponse {
  /**
   * <p>The SQL statements. </p>
   * @public
   */
  Statements: StatementData[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * <p>The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The name or ARN of the secret that enables access to the database. This parameter is required when authenticating using Secrets Manager. </p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials. </p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the database that contains the tables to list.
   *       If <code>ConnectedDatabase</code> is not specified, this is also the database to connect to with your authentication credentials.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>A database name. The connected database is specified when you connect with your authentication credentials. </p>
   * @public
   */
  ConnectedDatabase?: string | undefined;

  /**
   * <p>A pattern to filter results by schema name. Within a schema pattern, "%" means match any
   *       substring of 0 or more characters and "_" means match any one character. Only schema name
   *       entries matching the search pattern are returned. If <code>SchemaPattern</code> is not specified, then all tables that match
   *        <code>TablePattern</code> are returned.
   *        If neither <code>SchemaPattern</code> or <code>TablePattern</code> are specified, then all tables are returned. </p>
   * @public
   */
  SchemaPattern?: string | undefined;

  /**
   * <p>A pattern to filter results by table name. Within a table pattern, "%" means match any
   *       substring of 0 or more characters and "_" means match any one character. Only table name
   *       entries matching the search pattern are returned. If <code>TablePattern</code> is not specified, then all tables that match
   *        <code>SchemaPattern</code>are returned.
   *        If neither <code>SchemaPattern</code> or <code>TablePattern</code> are specified, then all tables are returned. </p>
   * @public
   */
  TablePattern?: string | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tables to return in the response.
   *        If more tables exist than fit in one response, then <code>NextToken</code> is returned to page through the results. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The serverless workgroup name or Amazon Resource Name (ARN). This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.</p>
   * @public
   */
  WorkgroupName?: string | undefined;
}

/**
 * <p>The properties of a table. </p>
 * @public
 */
export interface TableMember {
  /**
   * <p>The name of the table. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the table. Possible values include TABLE, VIEW, SYSTEM TABLE, GLOBAL
   *       TEMPORARY, LOCAL TEMPORARY, ALIAS, and SYNONYM. </p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The schema containing the table. </p>
   * @public
   */
  schema?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * <p>The tables that match the request pattern. </p>
   * @public
   */
  Tables?: TableMember[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned NextToken value in the next NextToken parameter and retrying the command. If the NextToken field is empty, all response records have been retrieved for the request. </p>
   * @public
   */
  NextToken?: string | undefined;
}
