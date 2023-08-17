// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AthenaServiceException as __BaseException } from "./AthenaServiceException";

/**
 * @public
 * @enum
 */
export const S3AclOption = {
  BUCKET_OWNER_FULL_CONTROL: "BUCKET_OWNER_FULL_CONTROL",
} as const;

/**
 * @public
 */
export type S3AclOption = (typeof S3AclOption)[keyof typeof S3AclOption];

/**
 * @public
 * <p>Indicates that an Amazon S3 canned ACL should be set to control ownership of
 *             stored query results. When Athena stores query results in Amazon S3,
 *             the canned ACL is set with the <code>x-amz-acl</code> request header. For more
 *             information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User
 *                 Guide</i>.</p>
 */
export interface AclConfiguration {
  /**
   * @public
   * <p>The Amazon S3 canned ACL that Athena should specify when storing
   *             query results. Currently the only supported canned ACL is
   *                 <code>BUCKET_OWNER_FULL_CONTROL</code>. If a query runs in a workgroup and the
   *             workgroup overrides client-side settings, then the Amazon S3 canned ACL
   *             specified in the workgroup's settings is used for all queries that run in the workgroup.
   *             For more information about Amazon S3 canned ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl">Canned ACL</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  S3AclOption: S3AclOption | string | undefined;
}

/**
 * @public
 * <p>Contains an array of named query IDs.</p>
 */
export interface BatchGetNamedQueryInput {
  /**
   * @public
   * <p>An array of query IDs.</p>
   */
  NamedQueryIds: string[] | undefined;
}

/**
 * @public
 * <p>A query, where <code>QueryString</code> contains the SQL statements that make up the
 *             query.</p>
 */
export interface NamedQuery {
  /**
   * @public
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>The SQL statements that make up the query.</p>
   */
  QueryString: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the query.</p>
   */
  NamedQueryId?: string;

  /**
   * @public
   * <p>The name of the workgroup that contains the named query.</p>
   */
  WorkGroup?: string;
}

/**
 * @public
 * <p>Information about a named query ID that could not be processed.</p>
 */
export interface UnprocessedNamedQueryId {
  /**
   * @public
   * <p>The unique identifier of the named query.</p>
   */
  NamedQueryId?: string;

  /**
   * @public
   * <p>The error code returned when the processing request for the named query failed, if
   *             applicable.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message returned when the processing request for the named query failed, if
   *             applicable.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchGetNamedQueryOutput {
  /**
   * @public
   * <p>Information about the named query IDs submitted.</p>
   */
  NamedQueries?: NamedQuery[];

  /**
   * @public
   * <p>Information about provided query IDs.</p>
   */
  UnprocessedNamedQueryIds?: UnprocessedNamedQueryId[];
}

/**
 * @public
 * <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code returned when the query execution failed to process, or when the
   *             processing request for the named query failed.</p>
   */
  AthenaErrorCode?: string;

  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.AthenaErrorCode = opts.AthenaErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface BatchGetPreparedStatementInput {
  /**
   * @public
   * <p>A list of prepared statement names to return.</p>
   */
  PreparedStatementNames: string[] | undefined;

  /**
   * @public
   * <p>The name of the workgroup to which the prepared statements belong.</p>
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 * <p>A prepared SQL statement for use with Athena.</p>
 */
export interface PreparedStatement {
  /**
   * @public
   * <p>The name of the prepared statement.</p>
   */
  StatementName?: string;

  /**
   * @public
   * <p>The query string for the prepared statement.</p>
   */
  QueryStatement?: string;

  /**
   * @public
   * <p>The name of the workgroup to which the prepared statement belongs.</p>
   */
  WorkGroupName?: string;

  /**
   * @public
   * <p>The description of the prepared statement.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The last modified time of the prepared statement.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The name of a prepared statement that could not be returned.</p>
 */
export interface UnprocessedPreparedStatementName {
  /**
   * @public
   * <p>The name of a prepared statement that could not be returned due to an error.</p>
   */
  StatementName?: string;

  /**
   * @public
   * <p>The error code returned when the request for the prepared statement failed.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message containing the reason why the prepared statement could not be
   *             returned. The following error messages are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INVALID_INPUT</code> - The name of the prepared statement that was
   *                     provided is not valid (for example, the name is too long).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATEMENT_NOT_FOUND</code> - A prepared statement with the name provided
   *                     could not be found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNAUTHORIZED</code> - The requester does not have permission to access
   *                     the workgroup that contains the prepared statement.</p>
   *             </li>
   *          </ul>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchGetPreparedStatementOutput {
  /**
   * @public
   * <p>The list of prepared statements returned.</p>
   */
  PreparedStatements?: PreparedStatement[];

  /**
   * @public
   * <p>A list of one or more prepared statements that were requested but could not be
   *             returned.</p>
   */
  UnprocessedPreparedStatementNames?: UnprocessedPreparedStatementName[];
}

/**
 * @public
 * <p>Contains an array of query execution IDs.</p>
 */
export interface BatchGetQueryExecutionInput {
  /**
   * @public
   * <p>An array of query execution IDs.</p>
   */
  QueryExecutionIds: string[] | undefined;
}

/**
 * @public
 * <p>The Athena engine version for running queries, or the PySpark engine
 *             version for running sessions.</p>
 */
export interface EngineVersion {
  /**
   * @public
   * <p>The engine version requested by the user. Possible values are determined by the output
   *             of <code>ListEngineVersions</code>, including AUTO. The default is AUTO.</p>
   */
  SelectedEngineVersion?: string;

  /**
   * @public
   * <p>Read only. The engine version on which the query runs. If the user requests a valid
   *             engine version other than Auto, the effective engine version is the same as the engine
   *             version that the user requested. If the user requests Auto, the effective engine version
   *             is chosen by Athena. When a request to update the engine version is made by
   *             a <code>CreateWorkGroup</code> or <code>UpdateWorkGroup</code> operation, the
   *                 <code>EffectiveEngineVersion</code> field is ignored.</p>
   */
  EffectiveEngineVersion?: string;
}

/**
 * @public
 * <p>The database and data catalog context in which the query execution occurs.</p>
 */
export interface QueryExecutionContext {
  /**
   * @public
   * <p>The name of the database used in the query execution. The database must exist in the
   *             catalog.</p>
   */
  Database?: string;

  /**
   * @public
   * <p>The name of the data catalog used in the query execution.</p>
   */
  Catalog?: string;
}

/**
 * @public
 * @enum
 */
export const EncryptionOption = {
  CSE_KMS: "CSE_KMS",
  SSE_KMS: "SSE_KMS",
  SSE_S3: "SSE_S3",
} as const;

/**
 * @public
 */
export type EncryptionOption = (typeof EncryptionOption)[keyof typeof EncryptionOption];

/**
 * @public
 * <p>If query and calculation results are encrypted in Amazon S3, indicates the encryption option
 *             used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key
 *             information.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (<code>SSE_S3</code>), server-side encryption with KMS-managed keys
   *                 (<code>SSE_KMS</code>), or client-side encryption with KMS-managed keys
   *                 (<code>CSE_KMS</code>) is used.</p>
   *          <p>If a query runs in a workgroup and the workgroup overrides client-side settings, then
   *             the workgroup's setting for encryption is used. It specifies whether query results must
   *             be encrypted, for all queries that run in this workgroup. </p>
   */
  EncryptionOption: EncryptionOption | string | undefined;

  /**
   * @public
   * <p>For <code>SSE_KMS</code> and <code>CSE_KMS</code>, this is the KMS key ARN or
   *             ID.</p>
   */
  KmsKey?: string;
}

/**
 * @public
 * <p>The location in Amazon S3 where query and calculation results are stored and the encryption
 *             option, if any, used for query and calculation results. These are known as "client-side settings". If
 *             workgroup settings override client-side settings, then the query uses the workgroup
 *             settings.</p>
 */
export interface ResultConfiguration {
  /**
   * @public
   * <p>The location in Amazon S3 where your query and calculation results are stored, such as
   *                 <code>s3://path/to/query/bucket/</code>. To run the query, you must specify the
   *             query results location using one of the ways: either for individual queries using either
   *             this setting (client-side), or in the workgroup, using <a>WorkGroupConfiguration</a>. If none of them is set, Athena
   *             issues an error that no output location is provided. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query
   *                 results, recent queries, and output files</a>. If workgroup settings override
   *             client-side settings, then the query uses the settings specified for the workgroup. See
   *                 <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;

  /**
   * @public
   * <p>If query and calculation results are encrypted in Amazon S3, indicates the encryption option
   *             used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.
   *             This is a client-side setting. If workgroup settings override client-side settings, then
   *             the query uses the encryption configuration that is specified for the workgroup, and
   *             also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by <a>ResultConfiguration$OutputLocation</a>.
   *             If set, Athena uses the value for <code>ExpectedBucketOwner</code> when it
   *             makes Amazon S3 calls to your specified output location. If the
   *                 <code>ExpectedBucketOwner</code>
   *             Amazon Web Services account ID does not match the actual owner of the Amazon S3
   *             bucket, the call fails with a permissions error.</p>
   *          <p>This is a client-side setting. If workgroup settings override client-side settings,
   *             then the query uses the <code>ExpectedBucketOwner</code> setting that is specified for
   *             the workgroup, and also uses the location for storing query results specified in the
   *             workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>
   *             and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>Indicates that an Amazon S3 canned ACL should be set to control ownership of
   *             stored query results. Currently the only supported canned ACL is
   *                 <code>BUCKET_OWNER_FULL_CONTROL</code>. This is a client-side setting. If workgroup
   *             settings override client-side settings, then the query uses the ACL configuration that
   *             is specified for the workgroup, and also uses the location for storing query results
   *             specified in the workgroup. For more information, see <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  AclConfiguration?: AclConfiguration;
}

/**
 * @public
 * <p>Specifies whether previous query results are reused, and if so, their maximum
 *             age.</p>
 */
export interface ResultReuseByAgeConfiguration {
  /**
   * @public
   * <p>True if previous query results can be reused when the query is run; otherwise, false.
   *             The default is false.</p>
   */
  Enabled: boolean | undefined;

  /**
   * @public
   * <p>Specifies, in minutes, the maximum age of a previous query result that Athena should consider for reuse. The default is 60.</p>
   */
  MaxAgeInMinutes?: number;
}

/**
 * @public
 * <p>Specifies the query result reuse behavior for the query.</p>
 */
export interface ResultReuseConfiguration {
  /**
   * @public
   * <p>Specifies whether previous query results are reused, and if so, their maximum
   *             age.</p>
   */
  ResultReuseByAgeConfiguration?: ResultReuseByAgeConfiguration;
}

/**
 * @public
 * @enum
 */
export const StatementType = {
  DDL: "DDL",
  DML: "DML",
  UTILITY: "UTILITY",
} as const;

/**
 * @public
 */
export type StatementType = (typeof StatementType)[keyof typeof StatementType];

/**
 * @public
 * <p>Contains information about whether the result of a previous query was reused.</p>
 */
export interface ResultReuseInformation {
  /**
   * @public
   * <p>True if a previous query result was reused; false if the result was generated from a
   *             new run of the query.</p>
   */
  ReusedPreviousResult: boolean | undefined;
}

/**
 * @public
 * <p>The amount of data scanned during the query execution and the amount of time that it
 *             took to execute, and the type of statement that was run.</p>
 */
export interface QueryExecutionStatistics {
  /**
   * @public
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;

  /**
   * @public
   * <p>The number of bytes in the data that was queried.</p>
   */
  DataScannedInBytes?: number;

  /**
   * @public
   * <p>The location and file name of a data manifest file. The manifest file is saved to the
   *                 Athena query results location in Amazon S3. The manifest file
   *             tracks files that the query wrote to Amazon S3. If the query fails, the manifest
   *             file also tracks files that the query intended to write. The manifest is useful for
   *             identifying orphaned files resulting from a failed query. For more information, see
   *                 <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with Query
   *                 Results, Output Files, and Query History</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  DataManifestLocation?: string;

  /**
   * @public
   * <p>The number of milliseconds that Athena took to run the query.</p>
   */
  TotalExecutionTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically
   *             add the query back to the queue.</p>
   */
  QueryQueueTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that Athena took to plan the query processing
   *             flow. This includes the time spent retrieving table partitions from the data source.
   *             Note that because the query engine performs the query planning, query planning time is a
   *             subset of engine processing time.</p>
   */
  QueryPlanningTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that Athena took to finalize and publish the
   *             query results after the query engine finished running the query.</p>
   */
  ServiceProcessingTimeInMillis?: number;

  /**
   * @public
   * <p>Contains information about whether previous query results were reused for the
   *             query.</p>
   */
  ResultReuseInformation?: ResultReuseInformation;
}

/**
 * @public
 * <p>Provides information about an Athena query error. The
 *                 <code>AthenaError</code> feature provides standardized error information to help you
 *             understand failed queries and take steps after a query failure occurs.
 *                 <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies
 *             whether the cause of the failed query is due to system error, user error, or other
 *             error.</p>
 */
export interface AthenaError {
  /**
   * @public
   * <p>An integer value that specifies the category of a query failure error. The following
   *             list shows the category for each integer value.</p>
   *          <p>
   *             <b>1</b> - System</p>
   *          <p>
   *             <b>2</b> - User</p>
   *          <p>
   *             <b>3</b> - Other</p>
   */
  ErrorCategory?: number;

  /**
   * @public
   * <p>An integer value that provides specific information about an Athena query
   *             error. For the meaning of specific values, see the <a href="https://docs.aws.amazon.com/athena/latest/ug/error-reference.html#error-reference-error-type-reference">Error Type Reference</a> in the <i>Amazon Athena User
   *                 Guide</i>.</p>
   */
  ErrorType?: number;

  /**
   * @public
   * <p>True if the query might succeed if resubmitted.</p>
   */
  Retryable?: boolean;

  /**
   * @public
   * <p>Contains a short description of the error that occurred.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const QueryExecutionState = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type QueryExecutionState = (typeof QueryExecutionState)[keyof typeof QueryExecutionState];

/**
 * @public
 * <p>The completion date, current state, submission time, and state change reason (if
 *             applicable) for the query execution.</p>
 */
export interface QueryExecutionStatus {
  /**
   * @public
   * <p>The state of query execution. <code>QUEUED</code> indicates that the query has been
   *             submitted to the service, and Athena will execute the query as soon as
   *             resources are available. <code>RUNNING</code> indicates that the query is in execution
   *             phase. <code>SUCCEEDED</code> indicates that the query completed without errors.
   *                 <code>FAILED</code> indicates that the query experienced an error and did not
   *             complete processing. <code>CANCELLED</code> indicates that a user input interrupted
   *             query execution.</p>
   *          <note>
   *             <p>Athena automatically retries your queries in cases of certain
   *                 transient errors. As a result, you may see the query state transition from
   *                     <code>RUNNING</code> or <code>FAILED</code> to <code>QUEUED</code>. </p>
   *          </note>
   */
  State?: QueryExecutionState | string;

  /**
   * @public
   * <p>Further detail about the status of the query.</p>
   */
  StateChangeReason?: string;

  /**
   * @public
   * <p>The date and time that the query was submitted.</p>
   */
  SubmissionDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the query completed.</p>
   */
  CompletionDateTime?: Date;

  /**
   * @public
   * <p>Provides information about an Athena query error.</p>
   */
  AthenaError?: AthenaError;
}

/**
 * @public
 * <p>Information about a single instance of a query execution.</p>
 */
export interface QueryExecution {
  /**
   * @public
   * <p>The unique identifier for each query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * @public
   * <p>The SQL query statements which the query execution ran.</p>
   */
  Query?: string;

  /**
   * @public
   * <p>The type of query statement that was run. <code>DDL</code> indicates DDL query
   *             statements. <code>DML</code> indicates DML (Data Manipulation Language) query
   *             statements, such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code> indicates
   *             query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>, or
   *                 <code>DESCRIBE TABLE</code>.</p>
   */
  StatementType?: StatementType | string;

  /**
   * @public
   * <p>The location in Amazon S3 where query and calculation results are stored and the encryption
   *             option, if any, used for query results. These are known as "client-side settings". If
   *             workgroup settings override client-side settings, then the query uses the location for
   *             the query results and the encryption configuration that are specified for the
   *             workgroup.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * @public
   * <p>Specifies the query result reuse behavior that was used for the query.</p>
   */
  ResultReuseConfiguration?: ResultReuseConfiguration;

  /**
   * @public
   * <p>The database in which the query execution occurred.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * @public
   * <p>The completion date, current state, submission time, and state change reason (if
   *             applicable) for the query execution.</p>
   */
  Status?: QueryExecutionStatus;

  /**
   * @public
   * <p>Query execution statistics, such as the amount of data scanned, the amount of time
   *             that the query took to process, and the type of statement that was run.</p>
   */
  Statistics?: QueryExecutionStatistics;

  /**
   * @public
   * <p>The name of the workgroup in which the query ran.</p>
   */
  WorkGroup?: string;

  /**
   * @public
   * <p>The engine version that executed the query.</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * @public
   * <p>A list of values for the parameters in a query. The values are applied sequentially to
   *             the parameters in the query in the order in which the parameters occur. The list of parameters is not returned in the response.</p>
   */
  ExecutionParameters?: string[];

  /**
   * @public
   * <p>The kind of query statement that was run.</p>
   */
  SubstatementType?: string;
}

/**
 * @public
 * <p>Describes a query execution that failed to process.</p>
 */
export interface UnprocessedQueryExecutionId {
  /**
   * @public
   * <p>The unique identifier of the query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * @public
   * <p>The error code returned when the query execution failed to process, if
   *             applicable.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message returned when the query execution failed to process, if
   *             applicable.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchGetQueryExecutionOutput {
  /**
   * @public
   * <p>Information about a query execution.</p>
   */
  QueryExecutions?: QueryExecution[];

  /**
   * @public
   * <p>Information about the query executions that failed to run.</p>
   */
  UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];
}

/**
 * @public
 */
export interface CancelCapacityReservationInput {
  /**
   * @public
   * <p>The name of the capacity reservation to cancel.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationOutput {}

/**
 * @public
 * <p>A label that you assign to a resource. Athena resources include
 *             workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of
 *             which you define. For example, you can use tags to categorize Athena
 *             resources by purpose, owner, or environment. Use a consistent set of
 *             tag keys to make it easier to search and filter the resources in your
 *             account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode
 *             characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use
 *             letters and numbers representable in UTF-8, and the following characters: + - = . _ : /
 *             @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you
 *             specify more than one tag, separate them by commas. </p>
 */
export interface Tag {
  /**
   * @public
   * <p>A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can
   *             use letters and numbers representable in UTF-8, and the following characters: + - = . _
   *             : / @. Tag keys are case-sensitive and must be unique per resource. </p>
   */
  Key?: string;

  /**
   * @public
   * <p>A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You
   *             can use letters and numbers representable in UTF-8, and the following characters: + - =
   *             . _ : / @. Tag values are case-sensitive. </p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateCapacityReservationInput {
  /**
   * @public
   * <p>The number of requested data processing units.</p>
   */
  TargetDpus: number | undefined;

  /**
   * @public
   * <p>The name of the capacity reservation to create.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The tags for the capacity reservation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateCapacityReservationOutput {}

/**
 * @public
 * @enum
 */
export const DataCatalogType = {
  GLUE: "GLUE",
  HIVE: "HIVE",
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type DataCatalogType = (typeof DataCatalogType)[keyof typeof DataCatalogType];

/**
 * @public
 */
export interface CreateDataCatalogInput {
  /**
   * @public
   * <p>The name of the data catalog to create. The catalog name must be unique for the
   *                 Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at
   *             sign, or hyphen characters. The remainder of the length constraint of 256 is reserved
   *             for use by Athena.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an
   *                 Glue Data Catalog.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * @public
   * <p>A description of the data catalog to be created.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the Lambda function or functions to use for creating the data
   *             catalog. This is a mapping whose values depend on the catalog type. </p>
   *          <ul>
   *             <li>
   *                <p>For the <code>HIVE</code> data catalog type, use the following syntax. The
   *                         <code>metadata-function</code> parameter is required. <code>The
   *                         sdk-version</code> parameter is optional and defaults to the currently
   *                     supported version.</p>
   *                <p>
   *                   <code>metadata-function=<i>lambda_arn</i>,
   *                             sdk-version=<i>version_number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets
   *                     of required parameters, but not both.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have one Lambda function that processes metadata
   *                             and another for reading the actual data, use the following syntax. Both
   *                             parameters are required.</p>
   *                      <p>
   *                         <code>metadata-function=<i>lambda_arn</i>,
   *                                     record-function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p> If you have a composite Lambda function that processes
   *                             both metadata and data, use the following syntax to specify your Lambda function.</p>
   *                      <p>
   *                         <code>function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The <code>GLUE</code> type takes a catalog ID parameter and is required. The
   *                             <code>
   *                      <i>catalog_id</i>
   *                   </code> is the account ID of the
   *                         Amazon Web Services account to which the Glue Data Catalog
   *                     belongs.</p>
   *                <p>
   *                   <code>catalog-id=<i>catalog_id</i>
   *                   </code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>The <code>GLUE</code> data catalog type also applies to the default
   *                                 <code>AwsDataCatalog</code> that already exists in your account, of
   *                             which you can have only one and cannot modify.</p>
   *                   </li>
   *                   <li>
   *                      <p>Queries that specify a Glue Data Catalog other than the default
   *                                 <code>AwsDataCatalog</code> must be run on Athena engine
   *                             version 2.</p>
   *                   </li>
   *                   <li>
   *                      <p>In Regions where Athena engine version 2 is not available,
   *                             creating new Glue data catalogs results in an
   *                                 <code>INVALID_INPUT</code> error.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>A list of comma separated tags to add to the data catalog that is created.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDataCatalogOutput {}

/**
 * @public
 */
export interface CreateNamedQueryInput {
  /**
   * @public
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>The contents of the query with all query statements.</p>
   */
  QueryString: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the query is
   *             idempotent (executes only once). If another <code>CreateNamedQuery</code> request is
   *             received, the same response is returned and another query is not created. If a parameter
   *             has changed, for example, the <code>QueryString</code>, an error is returned.</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for users. If you are
   *                 not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name of the workgroup in which the named query is being created.</p>
   */
  WorkGroup?: string;
}

/**
 * @public
 */
export interface CreateNamedQueryOutput {
  /**
   * @public
   * <p>The unique ID of the query.</p>
   */
  NamedQueryId?: string;
}

/**
 * @public
 */
export interface CreateNotebookInput {
  /**
   * @public
   * <p>The name of the Spark enabled workgroup in which the notebook will be created.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>The name of the <code>ipynb</code> file to be created in the Spark workgroup, without
   *             the <code>.ipynb</code> extension.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateNotebookOutput {
  /**
   * @public
   * <p>A unique identifier for the notebook.</p>
   */
  NotebookId?: string;
}

/**
 * @public
 * @enum
 */
export const ThrottleReason = {
  CONCURRENT_QUERY_LIMIT_EXCEEDED: "CONCURRENT_QUERY_LIMIT_EXCEEDED",
} as const;

/**
 * @public
 */
export type ThrottleReason = (typeof ThrottleReason)[keyof typeof ThrottleReason];

/**
 * @public
 * <p>Indicates that the request was throttled.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The reason for the query throttling, for example, when it exceeds the concurrent query
   *             limit.</p>
   */
  Reason?: ThrottleReason | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 */
export interface CreatePreparedStatementInput {
  /**
   * @public
   * <p>The name of the prepared statement.</p>
   */
  StatementName: string | undefined;

  /**
   * @public
   * <p>The name of the workgroup to which the prepared statement belongs.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>The query string for the prepared statement.</p>
   */
  QueryStatement: string | undefined;

  /**
   * @public
   * <p>The description of the prepared statement.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface CreatePreparedStatementOutput {}

/**
 * @public
 */
export interface CreatePresignedNotebookUrlRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedNotebookUrlResponse {
  /**
   * @public
   * <p>The URL of the notebook. The URL includes the authentication token and notebook file
   *             name and points directly to the opened notebook.</p>
   */
  NotebookUrl: string | undefined;

  /**
   * @public
   * <p>The authentication token for the notebook.</p>
   */
  AuthToken: string | undefined;

  /**
   * @public
   * <p>The UTC epoch time when the authentication token expires.</p>
   */
  AuthTokenExpirationTime: number | undefined;
}

/**
 * @public
 * <p>A resource, such as a workgroup, was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The name of the Amazon resource.</p>
   */
  ResourceName?: string;
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
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.</p>
 */
export interface CustomerContentEncryptionConfiguration {
  /**
   * @public
   * <p>The KMS key that is used to encrypt the user's data stores in Athena.</p>
   */
  KmsKey: string | undefined;
}

/**
 * @public
 * <p>The configuration of the workgroup, which includes the location in Amazon S3
 *             where query and calculation results are stored, the encryption option, if any, used for query and calculation results,
 *             whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether
 *             workgroup settings override query settings, and the data usage limits for the amount of
 *             data scanned per query or per workgroup. The workgroup settings override is specified in
 *                 <code>EnforceWorkGroupConfiguration</code> (true/false) in the
 *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. </p>
 */
export interface WorkGroupConfiguration {
  /**
   * @public
   * <p>The configuration for the workgroup, which includes the location in Amazon S3
   *             where query and calculation results are stored and the encryption option, if any, used for query and calculation results. To run the query, you must specify the query results location using one of the
   *             ways: either in the workgroup using this setting, or for individual queries
   *             (client-side), using <a>ResultConfiguration$OutputLocation</a>. If none of
   *             them is set, Athena issues an error that no output location is provided. For
   *             more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * @public
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false", client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * @public
   * <p>Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * @public
   * <p>The upper data usage limit (cutoff) for the amount of bytes a single query in a
   *             workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * @public
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to reference
   *                 Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>,
   *             workgroup members cannot query data from Requester Pays buckets, and queries that
   *             retrieve data from Requester Pays buckets cause an error. The default is
   *                 <code>false</code>. For more information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester
   *                 Pays Buckets</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * @public
   * <p>The engine version that all queries running on the workgroup use. Queries on the
   *                 <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine
   *             regardless of this setting.</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * @public
   * <p>Specifies a user defined JSON string that is passed to the notebook engine.</p>
   */
  AdditionalConfiguration?: string;

  /**
   * @public
   * <p>Role used in a session for accessing the user's resources.</p>
   */
  ExecutionRole?: string;

  /**
   * @public
   * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.</p>
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;

  /**
   * @public
   * <p>Enforces a minimal level of encryption for the workgroup for query and calculation
   *             results that are written to Amazon S3. When enabled, workgroup users can set
   *             encryption only to the minimum level set by the administrator or higher when they submit queries.</p>
   *          <p>The <code>EnforceWorkGroupConfiguration</code> setting takes precedence over the <code>EnableMinimumEncryptionConfiguration</code> flag. This means that if <code>EnforceWorkGroupConfiguration</code> is true, the <code>EnableMinimumEncryptionConfiguration</code> flag is ignored, and the workgroup configuration for encryption is used.</p>
   */
  EnableMinimumEncryptionConfiguration?: boolean;
}

/**
 * @public
 */
export interface CreateWorkGroupInput {
  /**
   * @public
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Contains configuration information for creating an Athena SQL workgroup or
   *             Spark enabled Athena workgroup. Athena SQL workgroup
   *             configuration includes the location in Amazon S3 where query and calculation results are stored,
   *             the encryption configuration, if any, used for encrypting query results, whether the
   *                 Amazon CloudWatch Metrics are enabled for the workgroup, the limit for the
   *             amount of bytes scanned (cutoff) per query, if it is specified, and whether workgroup's
   *             settings (specified with <code>EnforceWorkGroupConfiguration</code>) in the
   *                 <code>WorkGroupConfiguration</code> override client-side settings. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * @public
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of comma separated tags to add to the workgroup that is created.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWorkGroupOutput {}

/**
 * @public
 */
export interface DeleteCapacityReservationInput {
  /**
   * @public
   * <p>The name of the capacity reservation to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityReservationOutput {}

/**
 * @public
 */
export interface DeleteDataCatalogInput {
  /**
   * @public
   * <p>The name of the data catalog to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataCatalogOutput {}

/**
 * @public
 */
export interface DeleteNamedQueryInput {
  /**
   * @public
   * <p>The unique ID of the query to delete.</p>
   */
  NamedQueryId?: string;
}

/**
 * @public
 */
export interface DeleteNamedQueryOutput {}

/**
 * @public
 */
export interface DeleteNotebookInput {
  /**
   * @public
   * <p>The ID of the notebook to delete.</p>
   */
  NotebookId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookOutput {}

/**
 * @public
 */
export interface DeletePreparedStatementInput {
  /**
   * @public
   * <p>The name of the prepared statement to delete.</p>
   */
  StatementName: string | undefined;

  /**
   * @public
   * <p>The workgroup to which the statement to be deleted belongs.</p>
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface DeletePreparedStatementOutput {}

/**
 * @public
 */
export interface DeleteWorkGroupInput {
  /**
   * @public
   * <p>The unique name of the workgroup to delete.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>The option to delete the workgroup and its contents even if the workgroup contains any
   *             named queries, query executions, or notebooks.</p>
   */
  RecursiveDeleteOption?: boolean;
}

/**
 * @public
 */
export interface DeleteWorkGroupOutput {}

/**
 * @public
 */
export interface ExportNotebookInput {
  /**
   * @public
   * <p>The ID of the notebook to export.</p>
   */
  NotebookId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotebookType = {
  IPYNB: "IPYNB",
} as const;

/**
 * @public
 */
export type NotebookType = (typeof NotebookType)[keyof typeof NotebookType];

/**
 * @public
 * <p>Contains metadata for notebook, including the notebook name, ID, workgroup, and time
 *             created.</p>
 */
export interface NotebookMetadata {
  /**
   * @public
   * <p>The notebook ID.</p>
   */
  NotebookId?: string;

  /**
   * @public
   * <p>The name of the notebook.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the Spark enabled workgroup to which the notebook belongs.</p>
   */
  WorkGroup?: string;

  /**
   * @public
   * <p>The time when the notebook was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The type of notebook. Currently, the only valid type is <code>IPYNB</code>.</p>
   */
  Type?: NotebookType | string;

  /**
   * @public
   * <p>The time when the notebook was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ExportNotebookOutput {
  /**
   * @public
   * <p>The notebook metadata, including notebook ID, notebook name, and workgroup
   *             name.</p>
   */
  NotebookMetadata?: NotebookMetadata;

  /**
   * @public
   * <p>The content of the exported notebook.</p>
   */
  Payload?: string;
}

/**
 * @public
 */
export interface GetCalculationExecutionRequest {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 * <p>Contains information about an application-specific calculation result.</p>
 */
export interface CalculationResult {
  /**
   * @public
   * <p>The Amazon S3 location of the <code>stdout</code> file for the calculation.</p>
   */
  StdOutS3Uri?: string;

  /**
   * @public
   * <p>The Amazon S3 location of the <code>stderr</code> error messages file for the
   *             calculation.</p>
   */
  StdErrorS3Uri?: string;

  /**
   * @public
   * <p>The Amazon S3 location of the folder for the calculation results.</p>
   */
  ResultS3Uri?: string;

  /**
   * @public
   * <p>The data format of the calculation result.</p>
   */
  ResultType?: string;
}

/**
 * @public
 * <p>Contains statistics for a notebook calculation.</p>
 */
export interface CalculationStatistics {
  /**
   * @public
   * <p>The data processing unit execution time in milliseconds for the calculation.</p>
   */
  DpuExecutionInMillis?: number;

  /**
   * @public
   * <p>The progress of the calculation.</p>
   */
  Progress?: string;
}

/**
 * @public
 * @enum
 */
export const CalculationExecutionState = {
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  CREATING: "CREATING",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type CalculationExecutionState = (typeof CalculationExecutionState)[keyof typeof CalculationExecutionState];

/**
 * @public
 * <p>Contains information about the status of a notebook calculation.</p>
 */
export interface CalculationStatus {
  /**
   * @public
   * <p>The date and time the calculation was submitted for processing.</p>
   */
  SubmissionDateTime?: Date;

  /**
   * @public
   * <p>The date and time the calculation completed processing.</p>
   */
  CompletionDateTime?: Date;

  /**
   * @public
   * <p>The state of the calculation execution. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The calculation is in the process of being created.</p>
   *          <p>
   *             <code>CREATED</code> - The calculation has been created and is ready to run.</p>
   *          <p>
   *             <code>QUEUED</code> - The calculation has been queued for processing.</p>
   *          <p>
   *             <code>RUNNING</code> - The calculation is running.</p>
   *          <p>
   *             <code>CANCELING</code> - A request to cancel the calculation has been received and the
   *             system is working to stop it.</p>
   *          <p>
   *             <code>CANCELED</code> - The calculation is no longer running as the result of a cancel
   *             request.</p>
   *          <p>
   *             <code>COMPLETED</code> - The calculation has completed without error.</p>
   *          <p>
   *             <code>FAILED</code> - The calculation failed and is no longer running.</p>
   */
  State?: CalculationExecutionState | string;

  /**
   * @public
   * <p>The reason for the calculation state change (for example, the calculation was canceled
   *             because the session was terminated).</p>
   */
  StateChangeReason?: string;
}

/**
 * @public
 */
export interface GetCalculationExecutionResponse {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId?: string;

  /**
   * @public
   * <p>The session ID that the calculation ran in.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The description of the calculation execution.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon S3 location in which calculation results are stored.</p>
   */
  WorkingDirectory?: string;

  /**
   * @public
   * <p>Contains information about the status of the calculation.</p>
   */
  Status?: CalculationStatus;

  /**
   * @public
   * <p>Contains information about the data processing unit (DPU) execution time and progress.
   *             This field is populated only when statistics are available.</p>
   */
  Statistics?: CalculationStatistics;

  /**
   * @public
   * <p>Contains result information. This field is populated only if the calculation is
   *             completed.</p>
   */
  Result?: CalculationResult;
}

/**
 * @public
 */
export interface GetCalculationExecutionCodeRequest {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionCodeResponse {
  /**
   * @public
   * <p>The unencrypted code that was executed for the calculation.</p>
   */
  CodeBlock?: string;
}

/**
 * @public
 */
export interface GetCalculationExecutionStatusRequest {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionStatusResponse {
  /**
   * @public
   * <p>Contains information about the calculation execution status.</p>
   */
  Status?: CalculationStatus;

  /**
   * @public
   * <p>Contains information about the DPU execution time and progress.</p>
   */
  Statistics?: CalculationStatistics;
}

/**
 * @public
 */
export interface GetCapacityAssignmentConfigurationInput {
  /**
   * @public
   * <p>The name of the capacity reservation to retrieve the capacity assignment configuration for.</p>
   */
  CapacityReservationName: string | undefined;
}

/**
 * @public
 * <p>A mapping between one or more workgroups and a capacity reservation.</p>
 */
export interface CapacityAssignment {
  /**
   * @public
   * <p>The list of workgroup names for the capacity assignment.</p>
   */
  WorkGroupNames?: string[];
}

/**
 * @public
 * <p>Assigns Athena workgroups (and hence their queries) to capacity reservations. A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to.</p>
 */
export interface CapacityAssignmentConfiguration {
  /**
   * @public
   * <p>The name of the reservation that the capacity assignment configuration is for.</p>
   */
  CapacityReservationName?: string;

  /**
   * @public
   * <p>The list of assignments that make up the capacity assignment configuration.</p>
   */
  CapacityAssignments?: CapacityAssignment[];
}

/**
 * @public
 */
export interface GetCapacityAssignmentConfigurationOutput {
  /**
   * @public
   * <p>The requested capacity assignment configuration for the specified capacity reservation.</p>
   */
  CapacityAssignmentConfiguration: CapacityAssignmentConfiguration | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationInput {
  /**
   * @public
   * <p>The name of the capacity reservation.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapacityAllocationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type CapacityAllocationStatus = (typeof CapacityAllocationStatus)[keyof typeof CapacityAllocationStatus];

/**
 * @public
 * <p>Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.</p>
 */
export interface CapacityAllocation {
  /**
   * @public
   * <p>The status of the capacity allocation.</p>
   */
  Status: CapacityAllocationStatus | string | undefined;

  /**
   * @public
   * <p>The status message of the capacity allocation.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The time when the capacity allocation was requested.</p>
   */
  RequestTime: Date | undefined;

  /**
   * @public
   * <p>The time when the capacity allocation request was completed.</p>
   */
  RequestCompletionTime?: Date;
}

/**
 * @public
 * @enum
 */
export const CapacityReservationStatus = {
  ACTIVE: "ACTIVE",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATE_PENDING: "UPDATE_PENDING",
} as const;

/**
 * @public
 */
export type CapacityReservationStatus = (typeof CapacityReservationStatus)[keyof typeof CapacityReservationStatus];

/**
 * @public
 * <p>A reservation for a specified number of data processing units (DPUs). When a reservation is initially created, it has no DPUs. Athena allocates DPUs until the allocated amount equals the requested amount.</p>
 */
export interface CapacityReservation {
  /**
   * @public
   * <p>The name of the capacity reservation.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The status of the capacity reservation.</p>
   */
  Status: CapacityReservationStatus | string | undefined;

  /**
   * @public
   * <p>The number of data processing units requested.</p>
   */
  TargetDpus: number | undefined;

  /**
   * @public
   * <p>The number of data processing units currently allocated.</p>
   */
  AllocatedDpus: number | undefined;

  /**
   * @public
   * <p>Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.</p>
   */
  LastAllocation?: CapacityAllocation;

  /**
   * @public
   * <p>The time of the most recent capacity allocation that succeeded.</p>
   */
  LastSuccessfulAllocationTime?: Date;

  /**
   * @public
   * <p>The time in UTC epoch millis when the capacity reservation was created.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationOutput {
  /**
   * @public
   * <p>The requested capacity reservation structure.</p>
   */
  CapacityReservation: CapacityReservation | undefined;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * @public
   * <p>The name of the data catalog that contains the database to return.</p>
   */
  CatalogName: string | undefined;

  /**
   * @public
   * <p>The name of the database to return.</p>
   */
  DatabaseName: string | undefined;
}

/**
 * @public
 * <p>Contains metadata information for a database in a data catalog.</p>
 */
export interface Database {
  /**
   * @public
   * <p>The name of the database.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An optional description of the database.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A set of custom key/value pairs.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * @public
   * <p>The database returned.</p>
   */
  Database?: Database;
}

/**
 * @public
 * <p>An exception that Athena received when it called a custom metastore.
 *             Occurs if the error is not caused by user input (<code>InvalidRequestException</code>)
 *             or from the Athena platform (<code>InternalServerException</code>). For
 *             example, if a user-created Lambda function is missing permissions, the
 *                 Lambda
 *             <code>4XX</code> exception is returned in a <code>MetadataException</code>.</p>
 */
export class MetadataException extends __BaseException {
  readonly name: "MetadataException" = "MetadataException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MetadataException, __BaseException>) {
    super({
      name: "MetadataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MetadataException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetDataCatalogInput {
  /**
   * @public
   * <p>The name of the data catalog to return.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Contains information about a data catalog in an Amazon Web Services account.</p>
 *          <note>
 *             <p>In the Athena console, data catalogs are listed as "data sources" on
 *                 the <b>Data sources</b> page under the <b>Data source name</b> column.</p>
 *          </note>
 */
export interface DataCatalog {
  /**
   * @public
   * <p>The name of the data catalog. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign,
   *             or hyphen characters. The remainder of the length constraint of 256 is reserved for use
   *             by Athena.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An optional description of the data catalog.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an
   *                 Glue Data Catalog.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * @public
   * <p>Specifies the Lambda function or functions to use for the data catalog.
   *             This is a mapping whose values depend on the catalog type. </p>
   *          <ul>
   *             <li>
   *                <p>For the <code>HIVE</code> data catalog type, use the following syntax. The
   *                         <code>metadata-function</code> parameter is required. <code>The
   *                         sdk-version</code> parameter is optional and defaults to the currently
   *                     supported version.</p>
   *                <p>
   *                   <code>metadata-function=<i>lambda_arn</i>,
   *                             sdk-version=<i>version_number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets
   *                     of required parameters, but not both.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have one Lambda function that processes metadata
   *                             and another for reading the actual data, use the following syntax. Both
   *                             parameters are required.</p>
   *                      <p>
   *                         <code>metadata-function=<i>lambda_arn</i>,
   *                                     record-function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p> If you have a composite Lambda function that processes
   *                             both metadata and data, use the following syntax to specify your Lambda function.</p>
   *                      <p>
   *                         <code>function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The <code>GLUE</code> type takes a catalog ID parameter and is required. The
   *                             <code>
   *                      <i>catalog_id</i>
   *                   </code> is the account ID of the
   *                         Amazon Web Services account to which the Glue catalog
   *                     belongs.</p>
   *                <p>
   *                   <code>catalog-id=<i>catalog_id</i>
   *                   </code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>The <code>GLUE</code> data catalog type also applies to the default
   *                                 <code>AwsDataCatalog</code> that already exists in your account, of
   *                             which you can have only one and cannot modify.</p>
   *                   </li>
   *                   <li>
   *                      <p>Queries that specify a Glue Data Catalog other than the default
   *                                 <code>AwsDataCatalog</code> must be run on Athena engine
   *                             version 2.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDataCatalogOutput {
  /**
   * @public
   * <p>The data catalog returned.</p>
   */
  DataCatalog?: DataCatalog;
}

/**
 * @public
 */
export interface GetNamedQueryInput {
  /**
   * @public
   * <p>The unique ID of the query. Use <a>ListNamedQueries</a> to get query
   *             IDs.</p>
   */
  NamedQueryId: string | undefined;
}

/**
 * @public
 */
export interface GetNamedQueryOutput {
  /**
   * @public
   * <p>Information about the query.</p>
   */
  NamedQuery?: NamedQuery;
}

/**
 * @public
 */
export interface GetNotebookMetadataInput {
  /**
   * @public
   * <p>The ID of the notebook whose metadata is to be retrieved.</p>
   */
  NotebookId: string | undefined;
}

/**
 * @public
 */
export interface GetNotebookMetadataOutput {
  /**
   * @public
   * <p>The metadata that is returned for the specified notebook ID.</p>
   */
  NotebookMetadata?: NotebookMetadata;
}

/**
 * @public
 */
export interface GetPreparedStatementInput {
  /**
   * @public
   * <p>The name of the prepared statement to retrieve.</p>
   */
  StatementName: string | undefined;

  /**
   * @public
   * <p>The workgroup to which the statement to be retrieved belongs.</p>
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface GetPreparedStatementOutput {
  /**
   * @public
   * <p>The name of the prepared statement that was retrieved.</p>
   */
  PreparedStatement?: PreparedStatement;
}

/**
 * @public
 */
export interface GetQueryExecutionInput {
  /**
   * @public
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryExecutionOutput {
  /**
   * @public
   * <p>Information about the query execution.</p>
   */
  QueryExecution?: QueryExecution;
}

/**
 * @public
 */
export interface GetQueryResultsInput {
  /**
   * @public
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results (rows) to return in this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ColumnNullable = {
  NOT_NULL: "NOT_NULL",
  NULLABLE: "NULLABLE",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ColumnNullable = (typeof ColumnNullable)[keyof typeof ColumnNullable];

/**
 * @public
 * <p>Information about the columns in a query execution result.</p>
 */
export interface ColumnInfo {
  /**
   * @public
   * <p>The catalog to which the query results belong.</p>
   */
  CatalogName?: string;

  /**
   * @public
   * <p>The schema name (database name) to which the query results belong.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The table name for the query results.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The name of the column.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A column label.</p>
   */
  Label?: string;

  /**
   * @public
   * <p>The data type of the column.</p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38.
   *             For performance reasons, we recommend up to 18 digits.</p>
   */
  Precision?: number;

  /**
   * @public
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits in the
   *             fractional part of the value. Defaults to 0.</p>
   */
  Scale?: number;

  /**
   * @public
   * <p>Indicates the column's nullable status.</p>
   */
  Nullable?: ColumnNullable | string;

  /**
   * @public
   * <p>Indicates whether values in the column are case-sensitive.</p>
   */
  CaseSensitive?: boolean;
}

/**
 * @public
 * <p>The metadata that describes the column structure and data types of a table of query
 *             results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.</p>
 */
export interface ResultSetMetadata {
  /**
   * @public
   * <p>Information about the columns returned in a query result metadata.</p>
   */
  ColumnInfo?: ColumnInfo[];
}

/**
 * @public
 * <p>A piece of data (a field in the table).</p>
 */
export interface Datum {
  /**
   * @public
   * <p>The value of the datum.</p>
   */
  VarCharValue?: string;
}

/**
 * @public
 * <p>The rows that make up a query result table.</p>
 */
export interface Row {
  /**
   * @public
   * <p>The data that populates a row in a query result table.</p>
   */
  Data?: Datum[];
}

/**
 * @public
 * <p>The metadata and rows that make up a query result set. The metadata describes the
 *             column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.</p>
 */
export interface ResultSet {
  /**
   * @public
   * <p>The rows in the table.</p>
   */
  Rows?: Row[];

  /**
   * @public
   * <p>The metadata that describes the column structure and data types of a table of query
   *             results.</p>
   */
  ResultSetMetadata?: ResultSetMetadata;
}

/**
 * @public
 */
export interface GetQueryResultsOutput {
  /**
   * @public
   * <p>The number of rows inserted with a <code>CREATE TABLE AS SELECT</code> statement.
   *         </p>
   */
  UpdateCount?: number;

  /**
   * @public
   * <p>The results of the query execution.</p>
   */
  ResultSet?: ResultSet;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetQueryRuntimeStatisticsInput {
  /**
   * @public
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

/**
 * @public
 * <p>Statistics such as input rows and bytes read by the query, rows and bytes output by
 *             the query, and the number of rows written by the query.</p>
 */
export interface QueryRuntimeStatisticsRows {
  /**
   * @public
   * <p>The number of rows read to execute the query.</p>
   */
  InputRows?: number;

  /**
   * @public
   * <p>The number of bytes read to execute the query.</p>
   */
  InputBytes?: number;

  /**
   * @public
   * <p>The number of bytes returned by the query.</p>
   */
  OutputBytes?: number;

  /**
   * @public
   * <p>The number of rows returned by the query.</p>
   */
  OutputRows?: number;
}

/**
 * @public
 * <p>Timeline statistics such as query queue time, planning time, execution time, service
 *             processing time, and total execution time.</p>
 */
export interface QueryRuntimeStatisticsTimeline {
  /**
   * @public
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically
   *             add the query back to the queue.</p>
   */
  QueryQueueTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that Athena took to plan the query processing
   *             flow. This includes the time spent retrieving table partitions from the data source.
   *             Note that because the query engine performs the query planning, query planning time is a
   *             subset of engine processing time.</p>
   */
  QueryPlanningTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that Athena took to finalize and publish the
   *             query results after the query engine finished running the query.</p>
   */
  ServiceProcessingTimeInMillis?: number;

  /**
   * @public
   * <p>The number of milliseconds that Athena took to run the query.</p>
   */
  TotalExecutionTimeInMillis?: number;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 * <p>Contains data processing unit (DPU) configuration settings and parameter mappings for
 *             a notebook engine.</p>
 */
export interface EngineConfiguration {
  /**
   * @public
   * <p>The number of DPUs to use for the coordinator. A coordinator is a special executor
   *             that orchestrates processing work and manages other executors in a notebook
   *             session. The default is 1.</p>
   */
  CoordinatorDpuSize?: number;

  /**
   * @public
   * <p>The maximum number of DPUs that can run concurrently.</p>
   */
  MaxConcurrentDpus: number | undefined;

  /**
   * @public
   * <p>The default number of DPUs to use for executors. An executor is the smallest unit of
   *             compute that a notebook session can request from Athena. The default is 1.</p>
   */
  DefaultExecutorDpuSize?: number;

  /**
   * @public
   * <p>Contains additional notebook engine <code>MAP<string, string></code> parameter
   *             mappings in the form of key-value pairs. To specify an Athena notebook that
   *             the Jupyter server will download and serve, specify a value for the <a>StartSessionRequest$NotebookVersion</a> field, and then add a key named
   *                 <code>NotebookId</code> to <code>AdditionalConfigs</code> that has the value of the
   *                 Athena notebook ID.</p>
   */
  AdditionalConfigs?: Record<string, string>;

  /**
   * @public
   * <p>Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.</p>
   */
  SparkProperties?: Record<string, string>;
}

/**
 * @public
 * <p>Contains session configuration information.</p>
 */
export interface SessionConfiguration {
  /**
   * @public
   * <p>The ARN of the execution role used for the session.</p>
   */
  ExecutionRole?: string;

  /**
   * @public
   * <p>The Amazon S3 location that stores information for the notebook.</p>
   */
  WorkingDirectory?: string;

  /**
   * @public
   * <p>The idle timeout in seconds for the session.</p>
   */
  IdleTimeoutSeconds?: number;

  /**
   * @public
   * <p>If query and calculation results are encrypted in Amazon S3, indicates the encryption option
   *             used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key
   *             information.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

/**
 * @public
 * <p>Contains statistics for a session.</p>
 */
export interface SessionStatistics {
  /**
   * @public
   * <p>The data processing unit execution time for a session in milliseconds.</p>
   */
  DpuExecutionInMillis?: number;
}

/**
 * @public
 * @enum
 */
export const SessionState = {
  BUSY: "BUSY",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  FAILED: "FAILED",
  IDLE: "IDLE",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type SessionState = (typeof SessionState)[keyof typeof SessionState];

/**
 * @public
 * <p>Contains information about the status of a session.</p>
 */
export interface SessionStatus {
  /**
   * @public
   * <p>The date and time that the session started.</p>
   */
  StartDateTime?: Date;

  /**
   * @public
   * <p>The most recent date and time that the session was modified.</p>
   */
  LastModifiedDateTime?: Date;

  /**
   * @public
   * <p>The date and time that the session ended.</p>
   */
  EndDateTime?: Date;

  /**
   * @public
   * <p>The date and time starting at which the session became idle. Can be empty if the
   *             session is not currently idle.</p>
   */
  IdleSinceDateTime?: Date;

  /**
   * @public
   * <p>The state of the session. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The session is being started, including acquiring
   *             resources.</p>
   *          <p>
   *             <code>CREATED</code> - The session has been started.</p>
   *          <p>
   *             <code>IDLE</code> - The session is able to accept a calculation.</p>
   *          <p>
   *             <code>BUSY</code> - The session is processing another task and is unable to accept a
   *             calculation.</p>
   *          <p>
   *             <code>TERMINATING</code> - The session is in the process of shutting down.</p>
   *          <p>
   *             <code>TERMINATED</code> - The session and its resources are no longer running.</p>
   *          <p>
   *             <code>DEGRADED</code> - The session has no healthy coordinators.</p>
   *          <p>
   *             <code>FAILED</code> - Due to a failure, the session and its resources are no longer
   *             running.</p>
   */
  State?: SessionState | string;

  /**
   * @public
   * <p>The reason for the session state change (for example, canceled because the session was
   *             terminated).</p>
   */
  StateChangeReason?: string;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The session description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The workgroup to which the session belongs.</p>
   */
  WorkGroup?: string;

  /**
   * @public
   * <p>The engine version used by the session (for example, <code>PySpark engine version
   *                 3</code>). You can get a list of engine versions by calling <a>ListEngineVersions</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Contains engine configuration information like DPU usage.</p>
   */
  EngineConfiguration?: EngineConfiguration;

  /**
   * @public
   * <p>The notebook version.</p>
   */
  NotebookVersion?: string;

  /**
   * @public
   * <p>Contains the workgroup configuration information used by the session.</p>
   */
  SessionConfiguration?: SessionConfiguration;

  /**
   * @public
   * <p>Contains information about the status of the session.</p>
   */
  Status?: SessionStatus;

  /**
   * @public
   * <p>Contains the DPU execution time.</p>
   */
  Statistics?: SessionStatistics;
}

/**
 * @public
 */
export interface GetSessionStatusRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionStatusResponse {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>Contains information about the status of the session.</p>
   */
  Status?: SessionStatus;
}

/**
 * @public
 */
export interface GetTableMetadataInput {
  /**
   * @public
   * <p>The name of the data catalog that contains the database and table metadata to
   *             return.</p>
   */
  CatalogName: string | undefined;

  /**
   * @public
   * <p>The name of the database that contains the table metadata to return.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table for which metadata is returned.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 * <p>Contains metadata for a column in a table.</p>
 */
export interface Column {
  /**
   * @public
   * <p>The name of the column.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The data type of the column.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>Optional information about the column.</p>
   */
  Comment?: string;
}

/**
 * @public
 * <p>Contains metadata for a table.</p>
 */
export interface TableMetadata {
  /**
   * @public
   * <p>The name of the table.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The time that the table was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The last time the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * @public
   * <p>The type of table. In Athena, only <code>EXTERNAL_TABLE</code> is
   *             supported.</p>
   */
  TableType?: string;

  /**
   * @public
   * <p>A list of the columns in the table.</p>
   */
  Columns?: Column[];

  /**
   * @public
   * <p>A list of the partition keys in the table.</p>
   */
  PartitionKeys?: Column[];

  /**
   * @public
   * <p>A set of custom key/value pairs for table properties.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface GetTableMetadataOutput {
  /**
   * @public
   * <p>An object that contains table metadata.</p>
   */
  TableMetadata?: TableMetadata;
}

/**
 * @public
 */
export interface GetWorkGroupInput {
  /**
   * @public
   * <p>The name of the workgroup.</p>
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkGroupState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type WorkGroupState = (typeof WorkGroupState)[keyof typeof WorkGroupState];

/**
 * @public
 * <p>A workgroup, which contains a name, description, creation time, state, and other
 *             configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup
 *             enables you to isolate queries for you or your group of users from other queries in the
 *             same account, to configure the query results location and the encryption configuration
 *             (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch,
 *             and to establish per-query data usage control limits for all queries in a workgroup. The
 *             workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code>
 *             (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
 */
export interface WorkGroup {
  /**
   * @public
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The state of the workgroup: ENABLED or DISABLED.</p>
   */
  State?: WorkGroupState | string;

  /**
   * @public
   * <p>The configuration of the workgroup, which includes the location in Amazon S3
   *             where query and calculation results are stored, the encryption configuration, if any, used for query and calculation results; whether the Amazon CloudWatch Metrics are enabled for the workgroup;
   *             whether workgroup settings override client-side settings; and the data usage limits for
   *             the amount of data scanned per query or per workgroup. The workgroup settings override
   *             is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the
   *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * @public
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The date and time the workgroup was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface GetWorkGroupOutput {
  /**
   * @public
   * <p>Information about the workgroup.</p>
   */
  WorkGroup?: WorkGroup;
}

/**
 * @public
 */
export interface ImportNotebookInput {
  /**
   * @public
   * <p>The name of the Spark enabled workgroup to import the notebook to.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>The name of the notebook to import.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The notebook content to be imported.</p>
   */
  Payload: string | undefined;

  /**
   * @public
   * <p>The notebook content type. Currently, the only valid type is
   *             <code>IPYNB</code>.</p>
   */
  Type: NotebookType | string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to import the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface ImportNotebookOutput {
  /**
   * @public
   * <p>The ID assigned to the imported notebook.</p>
   */
  NotebookId?: string;
}

/**
 * @public
 */
export interface ListApplicationDPUSizesInput {
  /**
   * @public
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the application runtime IDs and their supported DPU sizes.</p>
 */
export interface ApplicationDPUSizes {
  /**
   * @public
   * <p>The name of the supported application runtime (for example, <code>Athena notebook
   *                 version 1</code>).</p>
   */
  ApplicationRuntimeId?: string;

  /**
   * @public
   * <p>A list of the supported DPU sizes that the application runtime supports.</p>
   */
  SupportedDPUSizes?: number[];
}

/**
 * @public
 */
export interface ListApplicationDPUSizesOutput {
  /**
   * @public
   * <p>A list of the supported DPU sizes that the application runtime supports.</p>
   */
  ApplicationDPUSizes?: ApplicationDPUSizes[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCalculationExecutionsRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>A filter for a specific calculation execution state. A description of each state
   *             follows.</p>
   *          <p>
   *             <code>CREATING</code> - The calculation is in the process of being created.</p>
   *          <p>
   *             <code>CREATED</code> - The calculation has been created and is ready to run.</p>
   *          <p>
   *             <code>QUEUED</code> - The calculation has been queued for processing.</p>
   *          <p>
   *             <code>RUNNING</code> - The calculation is running.</p>
   *          <p>
   *             <code>CANCELING</code> - A request to cancel the calculation has been received and the
   *             system is working to stop it.</p>
   *          <p>
   *             <code>CANCELED</code> - The calculation is no longer running as the result of a cancel
   *             request.</p>
   *          <p>
   *             <code>COMPLETED</code> - The calculation has completed without error.</p>
   *          <p>
   *             <code>FAILED</code> - The calculation failed and is no longer running.</p>
   */
  StateFilter?: CalculationExecutionState | string;

  /**
   * @public
   * <p>The maximum number of calculation executions to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information for a notebook calculation.</p>
 */
export interface CalculationSummary {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId?: string;

  /**
   * @public
   * <p>A description of the calculation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contains information about the status of the calculation.</p>
   */
  Status?: CalculationStatus;
}

/**
 * @public
 */
export interface ListCalculationExecutionsResponse {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of <a>CalculationSummary</a> objects.</p>
   */
  Calculations?: CalculationSummary[];
}

/**
 * @public
 */
export interface ListCapacityReservationsInput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListCapacityReservationsOutput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The capacity reservations for the current account.</p>
   */
  CapacityReservations: CapacityReservation[] | undefined;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * @public
   * <p>The name of the data catalog that contains the databases to return.</p>
   */
  CatalogName: string | undefined;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * @public
   * <p>A list of databases from a data catalog.</p>
   */
  DatabaseList?: Database[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDataCatalogsInput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of data catalogs to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary information for the data catalog, which includes its name and type.</p>
 */
export interface DataCatalogSummary {
  /**
   * @public
   * <p>The name of the data catalog. The catalog name is unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign,
   *             or hyphen characters. The remainder of the length constraint of 256 is reserved for use
   *             by Athena.</p>
   */
  CatalogName?: string;

  /**
   * @public
   * <p>The data catalog type.</p>
   */
  Type?: DataCatalogType | string;
}

/**
 * @public
 */
export interface ListDataCatalogsOutput {
  /**
   * @public
   * <p>A summary list of data catalogs.</p>
   */
  DataCatalogsSummary?: DataCatalogSummary[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEngineVersionsInput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of engine versions to return in this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEngineVersionsOutput {
  /**
   * @public
   * <p>A list of engine versions that are available to choose from.</p>
   */
  EngineVersions?: EngineVersion[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ExecutorState = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  FAILED: "FAILED",
  REGISTERED: "REGISTERED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type ExecutorState = (typeof ExecutorState)[keyof typeof ExecutorState];

/**
 * @public
 */
export interface ListExecutorsRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>A filter for a specific executor state. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The executor is being started, including acquiring
   *             resources.</p>
   *          <p>
   *             <code>CREATED</code> - The executor has been started.</p>
   *          <p>
   *             <code>REGISTERED</code> - The executor has been registered.</p>
   *          <p>
   *             <code>TERMINATING</code> - The executor is in the process of shutting down.</p>
   *          <p>
   *             <code>TERMINATED</code> - The executor is no longer running.</p>
   *          <p>
   *             <code>FAILED</code> - Due to a failure, the executor is no longer running.</p>
   */
  ExecutorStateFilter?: ExecutorState | string;

  /**
   * @public
   * <p>The maximum number of executors to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ExecutorType = {
  COORDINATOR: "COORDINATOR",
  GATEWAY: "GATEWAY",
  WORKER: "WORKER",
} as const;

/**
 * @public
 */
export type ExecutorType = (typeof ExecutorType)[keyof typeof ExecutorType];

/**
 * @public
 * <p>Contains summary information about an executor.</p>
 */
export interface ExecutorsSummary {
  /**
   * @public
   * <p>The UUID of the executor.</p>
   */
  ExecutorId: string | undefined;

  /**
   * @public
   * <p>The type of executor used for the application (<code>COORDINATOR</code>,
   *                 <code>GATEWAY</code>, or <code>WORKER</code>).</p>
   */
  ExecutorType?: ExecutorType | string;

  /**
   * @public
   * <p>The date and time that the executor started.</p>
   */
  StartDateTime?: number;

  /**
   * @public
   * <p>The date and time that the executor was terminated.</p>
   */
  TerminationDateTime?: number;

  /**
   * @public
   * <p>The processing state of the executor. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The executor is being started, including acquiring
   *             resources.</p>
   *          <p>
   *             <code>CREATED</code> - The executor has been started.</p>
   *          <p>
   *             <code>REGISTERED</code> - The executor has been registered.</p>
   *          <p>
   *             <code>TERMINATING</code> - The executor is in the process of shutting down.</p>
   *          <p>
   *             <code>TERMINATED</code> - The executor is no longer running.</p>
   *          <p>
   *             <code>FAILED</code> - Due to a failure, the executor is no longer running.</p>
   */
  ExecutorState?: ExecutorState | string;

  /**
   * @public
   * <p>The smallest unit of compute that a session can request from Athena. Size
   *             is measured in data processing unit (DPU) values, a relative measure of processing
   *             power.</p>
   */
  ExecutorSize?: number;
}

/**
 * @public
 */
export interface ListExecutorsResponse {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Contains summary information about the executor.</p>
   */
  ExecutorsSummary?: ExecutorsSummary[];
}

/**
 * @public
 */
export interface ListNamedQueriesInput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of queries to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The name of the workgroup from which the named queries are being returned. If a
   *             workgroup is not specified, the saved queries for the primary workgroup are
   *             returned.</p>
   */
  WorkGroup?: string;
}

/**
 * @public
 */
export interface ListNamedQueriesOutput {
  /**
   * @public
   * <p>The list of unique query IDs.</p>
   */
  NamedQueryIds?: string[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A string for searching notebook names.</p>
 */
export interface FilterDefinition {
  /**
   * @public
   * <p>The name of the notebook to search for.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListNotebookMetadataInput {
  /**
   * @public
   * <p>Search filter string.</p>
   */
  Filters?: FilterDefinition;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The name of the Spark enabled workgroup to retrieve notebook metadata for.</p>
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookMetadataOutput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of notebook metadata for the specified workgroup.</p>
   */
  NotebookMetadataList?: NotebookMetadata[];
}

/**
 * @public
 */
export interface ListNotebookSessionsRequest {
  /**
   * @public
   * <p>The ID of the notebook to list sessions for.</p>
   */
  NotebookId: string | undefined;

  /**
   * @public
   * <p>The maximum number of notebook sessions to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the notebook session ID and notebook session creation time.</p>
 */
export interface NotebookSessionSummary {
  /**
   * @public
   * <p>The notebook session ID.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The time when the notebook session was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListNotebookSessionsResponse {
  /**
   * @public
   * <p>A list of the sessions belonging to the notebook.</p>
   */
  NotebookSessionsList: NotebookSessionSummary[] | undefined;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPreparedStatementsInput {
  /**
   * @public
   * <p>The workgroup to list the prepared statements for.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The name and last modified time of the prepared statement.</p>
 */
export interface PreparedStatementSummary {
  /**
   * @public
   * <p>The name of the prepared statement.</p>
   */
  StatementName?: string;

  /**
   * @public
   * <p>The last modified time of the prepared statement.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListPreparedStatementsOutput {
  /**
   * @public
   * <p>The list of prepared statements for the workgroup.</p>
   */
  PreparedStatements?: PreparedStatementSummary[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQueryExecutionsInput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of query executions to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The name of the workgroup from which queries are being returned. If a workgroup is not
   *             specified, a list of available query execution IDs for the queries in the primary
   *             workgroup is returned.</p>
   */
  WorkGroup?: string;
}

/**
 * @public
 */
export interface ListQueryExecutionsOutput {
  /**
   * @public
   * <p>The unique IDs of each query execution as an array of strings.</p>
   */
  QueryExecutionIds?: string[];

  /**
   * @public
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * @public
   * <p>The workgroup to which the session belongs.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>A filter for a specific session state. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The session is being started, including acquiring
   *             resources.</p>
   *          <p>
   *             <code>CREATED</code> - The session has been started.</p>
   *          <p>
   *             <code>IDLE</code> - The session is able to accept a calculation.</p>
   *          <p>
   *             <code>BUSY</code> - The session is processing another task and is unable to accept a
   *             calculation.</p>
   *          <p>
   *             <code>TERMINATING</code> - The session is in the process of shutting down.</p>
   *          <p>
   *             <code>TERMINATED</code> - The session and its resources are no longer running.</p>
   *          <p>
   *             <code>DEGRADED</code> - The session has no healthy coordinators.</p>
   *          <p>
   *             <code>FAILED</code> - Due to a failure, the session and its resources are no longer
   *             running.</p>
   */
  StateFilter?: SessionState | string;

  /**
   * @public
   * <p>The maximum number of sessions to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains summary information about a session.</p>
 */
export interface SessionSummary {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The session description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The engine version used by the session (for example, <code>PySpark engine version
   *                 3</code>).</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * @public
   * <p>The notebook version.</p>
   */
  NotebookVersion?: string;

  /**
   * @public
   * <p>Contains information about the session status.</p>
   */
  Status?: SessionStatus;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of sessions.</p>
   */
  Sessions?: SessionSummary[];
}

/**
 * @public
 */
export interface ListTableMetadataInput {
  /**
   * @public
   * <p>The name of the data catalog for which table metadata should be returned.</p>
   */
  CatalogName: string | undefined;

  /**
   * @public
   * <p>The name of the database for which table metadata should be returned.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>A regex filter that pattern-matches table names. If no expression is supplied,
   *             metadata for all tables are listed.</p>
   */
  Expression?: string;

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTableMetadataOutput {
  /**
   * @public
   * <p>A list of table metadata.</p>
   */
  TableMetadataList?: TableMetadata[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>Lists the tags for the resource with the specified ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results for
   *             this request, where the request lists the tags for the resource with the specified
   *             ARN.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned per request that lists the tags for the
   *             resource.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The list of tags associated with the specified resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWorkGroupsInput {
  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of workgroups to return in this request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary information for the workgroup, which includes its name, state,
 *             description, and the date and time it was created.</p>
 */
export interface WorkGroupSummary {
  /**
   * @public
   * <p>The name of the workgroup.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the workgroup.</p>
   */
  State?: WorkGroupState | string;

  /**
   * @public
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The workgroup creation date and time.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The engine version setting for all queries on the workgroup. Queries on the
   *                 <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine
   *             regardless of this setting.</p>
   */
  EngineVersion?: EngineVersion;
}

/**
 * @public
 */
export interface ListWorkGroupsOutput {
  /**
   * @public
   * <p>A list of <a>WorkGroupSummary</a> objects that include the names,
   *             descriptions, creation times, and states for each workgroup.</p>
   */
  WorkGroups?: WorkGroupSummary[];

  /**
   * @public
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutCapacityAssignmentConfigurationInput {
  /**
   * @public
   * <p>The name of the capacity reservation to put a capacity assignment configuration for.</p>
   */
  CapacityReservationName: string | undefined;

  /**
   * @public
   * <p>The list of assignments for the capacity assignment configuration.</p>
   */
  CapacityAssignments: CapacityAssignment[] | undefined;
}

/**
 * @public
 */
export interface PutCapacityAssignmentConfigurationOutput {}

/**
 * @public
 * <p>Contains configuration information for the calculation.</p>
 */
export interface CalculationConfiguration {
  /**
   * @public
   * <p>A string that contains the code for the calculation.</p>
   */
  CodeBlock?: string;
}

/**
 * @public
 */
export interface StartCalculationExecutionRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>A description of the calculation.</p>
   */
  Description?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>Contains configuration information for the calculation.</p>
   */
  CalculationConfiguration?: CalculationConfiguration;

  /**
   * @public
   * <p>A string that contains the code of the calculation.</p>
   */
  CodeBlock?: string;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the calculation is
   *             idempotent (executes only once). If another
   *                 <code>StartCalculationExecutionRequest</code> is received, the same response is
   *             returned and another calculation is not created. If a parameter has changed, an error is
   *             returned.</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for users. If you are
   *                 not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartCalculationExecutionResponse {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId?: string;

  /**
   * @public
   * <p>
   *             <code>CREATING</code> - The calculation is in the process of being created.</p>
   *          <p>
   *             <code>CREATED</code> - The calculation has been created and is ready to run.</p>
   *          <p>
   *             <code>QUEUED</code> - The calculation has been queued for processing.</p>
   *          <p>
   *             <code>RUNNING</code> - The calculation is running.</p>
   *          <p>
   *             <code>CANCELING</code> - A request to cancel the calculation has been received and the
   *             system is working to stop it.</p>
   *          <p>
   *             <code>CANCELED</code> - The calculation is no longer running as the result of a cancel
   *             request.</p>
   *          <p>
   *             <code>COMPLETED</code> - The calculation has completed without error.</p>
   *          <p>
   *             <code>FAILED</code> - The calculation failed and is no longer running.</p>
   */
  State?: CalculationExecutionState | string;
}

/**
 * @public
 */
export interface StartQueryExecutionInput {
  /**
   * @public
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the query is
   *             idempotent (executes only once). If another <code>StartQueryExecution</code> request is
   *             received, the same response is returned and another query is not created. If a parameter
   *             has changed, for example, the <code>QueryString</code>, an error is returned.</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for users. If you are
   *                 not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The database within which the query executes.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * @public
   * <p>Specifies information about where and how to save the results of the query execution.
   *             If the query runs in a workgroup, then workgroup's settings may override query settings.
   *             This affects the query results location. The workgroup settings override is specified in
   *             EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * @public
   * <p>The name of the workgroup in which the query is being started.</p>
   */
  WorkGroup?: string;

  /**
   * @public
   * <p>A list of values for the parameters in a query. The values are applied sequentially to
   *             the parameters in the query in the order in which the parameters occur.</p>
   */
  ExecutionParameters?: string[];

  /**
   * @public
   * <p>Specifies the query result reuse behavior for the query.</p>
   */
  ResultReuseConfiguration?: ResultReuseConfiguration;
}

/**
 * @public
 */
export interface StartQueryExecutionOutput {
  /**
   * @public
   * <p>The unique ID of the query that ran as a result of this request.</p>
   */
  QueryExecutionId?: string;
}

/**
 * @public
 * <p>The specified session already exists.</p>
 */
export class SessionAlreadyExistsException extends __BaseException {
  readonly name: "SessionAlreadyExistsException" = "SessionAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionAlreadyExistsException, __BaseException>) {
    super({
      name: "SessionAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartSessionRequest {
  /**
   * @public
   * <p>The session description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The workgroup to which the session belongs.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>Contains engine data processing unit (DPU) configuration settings and parameter
   *             mappings.</p>
   */
  EngineConfiguration: EngineConfiguration | undefined;

  /**
   * @public
   * <p>The notebook version. This value is supplied automatically for notebook sessions in the Athena console and is not required for programmatic session access. The only valid notebook version is <code>Athena notebook version 1</code>. If you specify a value for <code>NotebookVersion</code>, you must also specify a value for <code>NotebookId</code>. See <a>EngineConfiguration$AdditionalConfigs</a>.</p>
   */
  NotebookVersion?: string;

  /**
   * @public
   * <p>The idle timeout in minutes for the session.</p>
   */
  SessionIdleTimeoutInMinutes?: number;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the session is
   *             idempotent (executes only once). If another <code>StartSessionRequest</code> is
   *             received, the same response is returned and another session is not created. If a
   *             parameter has changed, an error is returned.</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for users. If you are
   *                 not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>The state of the session. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The session is being started, including acquiring
   *             resources.</p>
   *          <p>
   *             <code>CREATED</code> - The session has been started.</p>
   *          <p>
   *             <code>IDLE</code> - The session is able to accept a calculation.</p>
   *          <p>
   *             <code>BUSY</code> - The session is processing another task and is unable to accept a
   *             calculation.</p>
   *          <p>
   *             <code>TERMINATING</code> - The session is in the process of shutting down.</p>
   *          <p>
   *             <code>TERMINATED</code> - The session and its resources are no longer running.</p>
   *          <p>
   *             <code>DEGRADED</code> - The session has no healthy coordinators.</p>
   *          <p>
   *             <code>FAILED</code> - Due to a failure, the session and its resources are no longer
   *             running.</p>
   */
  State?: SessionState | string;
}

/**
 * @public
 */
export interface StopCalculationExecutionRequest {
  /**
   * @public
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface StopCalculationExecutionResponse {
  /**
   * @public
   * <p>
   *             <code>CREATING</code> - The calculation is in the process of being created.</p>
   *          <p>
   *             <code>CREATED</code> - The calculation has been created and is ready to run.</p>
   *          <p>
   *             <code>QUEUED</code> - The calculation has been queued for processing.</p>
   *          <p>
   *             <code>RUNNING</code> - The calculation is running.</p>
   *          <p>
   *             <code>CANCELING</code> - A request to cancel the calculation has been received and the
   *             system is working to stop it.</p>
   *          <p>
   *             <code>CANCELED</code> - The calculation is no longer running as the result of a cancel
   *             request.</p>
   *          <p>
   *             <code>COMPLETED</code> - The calculation has completed without error.</p>
   *          <p>
   *             <code>FAILED</code> - The calculation failed and is no longer running.</p>
   */
  State?: CalculationExecutionState | string;
}

/**
 * @public
 */
export interface StopQueryExecutionInput {
  /**
   * @public
   * <p>The unique ID of the query execution to stop.</p>
   */
  QueryExecutionId?: string;
}

/**
 * @public
 */
export interface StopQueryExecutionOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>Specifies the ARN of the Athena resource to
   *             which tags are to be added.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A collection of one or more tags, separated by commas, to be added to an Athena resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface TerminateSessionRequest {
  /**
   * @public
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionResponse {
  /**
   * @public
   * <p>The state of the session. A description of each state follows.</p>
   *          <p>
   *             <code>CREATING</code> - The session is being started, including acquiring
   *             resources.</p>
   *          <p>
   *             <code>CREATED</code> - The session has been started.</p>
   *          <p>
   *             <code>IDLE</code> - The session is able to accept a calculation.</p>
   *          <p>
   *             <code>BUSY</code> - The session is processing another task and is unable to accept a
   *             calculation.</p>
   *          <p>
   *             <code>TERMINATING</code> - The session is in the process of shutting down.</p>
   *          <p>
   *             <code>TERMINATED</code> - The session and its resources are no longer running.</p>
   *          <p>
   *             <code>DEGRADED</code> - The session has no healthy coordinators.</p>
   *          <p>
   *             <code>FAILED</code> - Due to a failure, the session and its resources are no longer
   *             running.</p>
   */
  State?: SessionState | string;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>Specifies the ARN of the resource from which tags are to be removed.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A comma-separated list of one or more tag keys whose tags are to be removed from the
   *             specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateCapacityReservationInput {
  /**
   * @public
   * <p>The new number of requested data processing units.</p>
   */
  TargetDpus: number | undefined;

  /**
   * @public
   * <p>The name of the capacity reservation.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityReservationOutput {}

/**
 * @public
 */
export interface UpdateDataCatalogInput {
  /**
   * @public
   * <p>The name of the data catalog to update. The catalog name must be unique for the
   *                 Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at
   *             sign, or hyphen characters. The remainder of the length constraint of 256 is reserved
   *             for use by Athena.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the type of data catalog to update. Specify <code>LAMBDA</code> for a
   *             federated catalog, <code>HIVE</code> for an external hive metastore, or
   *                 <code>GLUE</code> for an Glue Data Catalog.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * @public
   * <p>New or modified text that describes the data catalog.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the Lambda function or functions to use for updating the data
   *             catalog. This is a mapping whose values depend on the catalog type. </p>
   *          <ul>
   *             <li>
   *                <p>For the <code>HIVE</code> data catalog type, use the following syntax. The
   *                         <code>metadata-function</code> parameter is required. <code>The
   *                         sdk-version</code> parameter is optional and defaults to the currently
   *                     supported version.</p>
   *                <p>
   *                   <code>metadata-function=<i>lambda_arn</i>,
   *                             sdk-version=<i>version_number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets
   *                     of required parameters, but not both.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have one Lambda function that processes metadata
   *                             and another for reading the actual data, use the following syntax. Both
   *                             parameters are required.</p>
   *                      <p>
   *                         <code>metadata-function=<i>lambda_arn</i>,
   *                                     record-function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p> If you have a composite Lambda function that processes
   *                             both metadata and data, use the following syntax to specify your Lambda function.</p>
   *                      <p>
   *                         <code>function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateDataCatalogOutput {}

/**
 * @public
 */
export interface UpdateNamedQueryInput {
  /**
   * @public
   * <p>The unique identifier (UUID) of the query.</p>
   */
  NamedQueryId: string | undefined;

  /**
   * @public
   * <p>The name of the query.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The contents of the query with all query statements.</p>
   */
  QueryString: string | undefined;
}

/**
 * @public
 */
export interface UpdateNamedQueryOutput {}

/**
 * @public
 */
export interface UpdateNotebookInput {
  /**
   * @public
   * <p>The ID of the notebook to update.</p>
   */
  NotebookId: string | undefined;

  /**
   * @public
   * <p>The updated content for the notebook.</p>
   */
  Payload: string | undefined;

  /**
   * @public
   * <p>The notebook content type. Currently, the only valid type is
   *             <code>IPYNB</code>.</p>
   */
  Type: NotebookType | string | undefined;

  /**
   * @public
   * <p>The active notebook session ID. Required if the notebook has an active session.</p>
   */
  SessionId?: string;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface UpdateNotebookOutput {}

/**
 * @public
 */
export interface UpdateNotebookMetadataInput {
  /**
   * @public
   * <p>The ID of the notebook to update the metadata for.</p>
   */
  NotebookId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive string used to ensure the request to create the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name to update the notebook to.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotebookMetadataOutput {}

/**
 * @public
 */
export interface UpdatePreparedStatementInput {
  /**
   * @public
   * <p>The name of the prepared statement.</p>
   */
  StatementName: string | undefined;

  /**
   * @public
   * <p>The workgroup for the prepared statement.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>The query string for the prepared statement.</p>
   */
  QueryStatement: string | undefined;

  /**
   * @public
   * <p>The description of the prepared statement.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdatePreparedStatementOutput {}

/**
 * @public
 * <p>The information about the updates in the query results, such as output location and
 *             encryption configuration for the query results.</p>
 */
export interface ResultConfigurationUpdates {
  /**
   * @public
   * <p>The location in Amazon S3 where your query and calculation results are stored, such as
   *                 <code>s3://path/to/query/bucket/</code>. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query
   *                 results, recent queries, and output files</a>. If workgroup settings override
   *             client-side settings, then the query uses the location for the query results and the
   *             encryption configuration that are specified for the workgroup. The "workgroup settings
   *             override" is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the
   *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;

  /**
   * @public
   * <p>If set to "true", indicates that the previously-specified query results location (also
   *             known as a client-side setting) for queries in this workgroup should be ignored and set
   *             to null. If set to "false" or not set, and a value is present in the
   *                 <code>OutputLocation</code> in <code>ResultConfigurationUpdates</code> (the
   *             client-side setting), the <code>OutputLocation</code> in the workgroup's
   *                 <code>ResultConfiguration</code> will be updated with the new value. For more
   *             information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   */
  RemoveOutputLocation?: boolean;

  /**
   * @public
   * <p>The encryption configuration for query and calculation results.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>If set to "true", indicates that the previously-specified encryption configuration
   *             (also known as the client-side setting) for queries in this workgroup should be ignored
   *             and set to null. If set to "false" or not set, and a value is present in the
   *                 <code>EncryptionConfiguration</code> in <code>ResultConfigurationUpdates</code> (the
   *             client-side setting), the <code>EncryptionConfiguration</code> in the workgroup's
   *                 <code>ResultConfiguration</code> will be updated with the new value. For more
   *             information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   */
  RemoveEncryptionConfiguration?: boolean;

  /**
   * @public
   * <p>The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by <a>ResultConfiguration$OutputLocation</a>.
   *             If set, Athena uses the value for <code>ExpectedBucketOwner</code> when it
   *             makes Amazon S3 calls to your specified output location. If the
   *                 <code>ExpectedBucketOwner</code>
   *             Amazon Web Services account ID does not match the actual owner of the Amazon S3
   *             bucket, the call fails with a permissions error.</p>
   *          <p>If workgroup settings override client-side settings, then the query uses the
   *                 <code>ExpectedBucketOwner</code> setting that is specified for the workgroup, and
   *             also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>If set to "true", removes the Amazon Web Services account ID previously specified for
   *                 <a>ResultConfiguration$ExpectedBucketOwner</a>. If set to "false" or not
   *             set, and a value is present in the <code>ExpectedBucketOwner</code> in
   *                 <code>ResultConfigurationUpdates</code> (the client-side setting), the
   *                 <code>ExpectedBucketOwner</code> in the workgroup's <code>ResultConfiguration</code>
   *             is updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   */
  RemoveExpectedBucketOwner?: boolean;

  /**
   * @public
   * <p>The ACL configuration for the query results.</p>
   */
  AclConfiguration?: AclConfiguration;

  /**
   * @public
   * <p>If set to <code>true</code>, indicates that the previously-specified ACL configuration
   *             for queries in this workgroup should be ignored and set to null. If set to
   *                 <code>false</code> or not set, and a value is present in the
   *                 <code>AclConfiguration</code> of <code>ResultConfigurationUpdates</code>, the
   *                 <code>AclConfiguration</code> in the workgroup's <code>ResultConfiguration</code> is
   *             updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   */
  RemoveAclConfiguration?: boolean;
}

/**
 * @public
 * <p>The configuration information that will be updated for this workgroup, which includes
 *             the location in Amazon S3 where query and calculation results are stored, the encryption option,
 *             if any, used for query results, whether the Amazon CloudWatch Metrics are enabled
 *             for the workgroup, whether the workgroup settings override the client-side settings, and
 *             the data usage limit for the amount of bytes scanned per query, if it is
 *             specified.</p>
 */
export interface WorkGroupConfigurationUpdates {
  /**
   * @public
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false" client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * @public
   * <p>The result configuration information about the queries in this workgroup that will be
   *             updated. Includes the updated results location and an updated option for encrypting
   *             query results.</p>
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates;

  /**
   * @public
   * <p>Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * @public
   * <p>The upper limit (cutoff) for the amount of bytes a single query in a workgroup is
   *             allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * @public
   * <p>Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a>
   *          </p>
   */
  RemoveBytesScannedCutoffPerQuery?: boolean;

  /**
   * @public
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup
   *             members cannot query data from Requester Pays buckets, and queries that retrieve data
   *             from Requester Pays buckets cause an error. The default is <code>false</code>. For more
   *             information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>
   *             in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * @public
   * <p>The engine version requested when a workgroup is updated. After the update, all
   *             queries on the workgroup run on the requested engine version. If no value was previously
   *             set, the default is Auto. Queries on the <code>AmazonAthenaPreviewFunctionality</code>
   *             workgroup run on the preview engine regardless of this setting.</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * @public
   * <p>Removes content encryption configuration from an Apache Spark-enabled Athena workgroup.</p>
   */
  RemoveCustomerContentEncryptionConfiguration?: boolean;

  /**
   * @public
   * <p>Contains a user defined string in JSON format for a Spark-enabled workgroup.</p>
   */
  AdditionalConfiguration?: string;

  /**
   * @public
   * <p>Contains the ARN of the execution role for the workgroup</p>
   */
  ExecutionRole?: string;

  /**
   * @public
   * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.</p>
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;

  /**
   * @public
   * <p>Enforces a minimal level of encryption for the workgroup for query and calculation
   *             results that are written to Amazon S3. When enabled, workgroup users can set
   *             encryption only to the minimum level set by the administrator or higher when they submit queries. This setting does not apply to Spark-enabled workgroups.</p>
   *          <p>The <code>EnforceWorkGroupConfiguration</code> setting takes precedence over the <code>EnableMinimumEncryptionConfiguration</code> flag. This means that if <code>EnforceWorkGroupConfiguration</code> is true, the <code>EnableMinimumEncryptionConfiguration</code> flag is ignored, and the workgroup configuration for encryption is used.</p>
   */
  EnableMinimumEncryptionConfiguration?: boolean;
}

/**
 * @public
 */
export interface UpdateWorkGroupInput {
  /**
   * @public
   * <p>The specified workgroup that will be updated.</p>
   */
  WorkGroup: string | undefined;

  /**
   * @public
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contains configuration updates for an Athena SQL workgroup.</p>
   */
  ConfigurationUpdates?: WorkGroupConfigurationUpdates;

  /**
   * @public
   * <p>The workgroup state that will be updated for the given workgroup.</p>
   */
  State?: WorkGroupState | string;
}

/**
 * @public
 */
export interface UpdateWorkGroupOutput {}

/**
 * @public
 * <p>Stage plan information such as name, identifier, sub plans, and remote sources.</p>
 */
export interface QueryStagePlanNode {
  /**
   * @public
   * <p>Name of the query stage plan that describes the operation this stage is performing as
   *             part of query execution.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Information about the operation this query stage plan node is performing.</p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>Stage plan information such as name, identifier, sub plans, and remote sources of
   *             child plan nodes/</p>
   */
  Children?: QueryStagePlanNode[];

  /**
   * @public
   * <p>Source plan node IDs.</p>
   */
  RemoteSources?: string[];
}

/**
 * @public
 * <p>Stage statistics such as input and output rows and bytes, execution time and stage
 *             state. This information also includes substages and the query stage plan.</p>
 */
export interface QueryStage {
  /**
   * @public
   * <p>The identifier for a stage.</p>
   */
  StageId?: number;

  /**
   * @public
   * <p>State of the stage after query execution.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The number of bytes output from the stage after execution.</p>
   */
  OutputBytes?: number;

  /**
   * @public
   * <p>The number of rows output from the stage after execution.</p>
   */
  OutputRows?: number;

  /**
   * @public
   * <p>The number of bytes input into the stage for execution.</p>
   */
  InputBytes?: number;

  /**
   * @public
   * <p>The number of rows input into the stage for execution.</p>
   */
  InputRows?: number;

  /**
   * @public
   * <p>Time taken to execute this stage.</p>
   */
  ExecutionTime?: number;

  /**
   * @public
   * <p>Stage plan information such as name, identifier, sub plans, and source stages.</p>
   */
  QueryStagePlan?: QueryStagePlanNode;

  /**
   * @public
   * <p>List of sub query stages that form this stage execution plan.</p>
   */
  SubStages?: QueryStage[];
}

/**
 * @public
 * <p>The query execution timeline, statistics on input and output rows and bytes, and the
 *             different query stages that form the query execution plan.</p>
 */
export interface QueryRuntimeStatistics {
  /**
   * @public
   * <p>Timeline statistics such as query queue time, planning time, execution time, service
   *             processing time, and total execution time.</p>
   */
  Timeline?: QueryRuntimeStatisticsTimeline;

  /**
   * @public
   * <p>Statistics such as input rows and bytes read by the query, rows and bytes output by
   *             the query, and the number of rows written by the query.</p>
   */
  Rows?: QueryRuntimeStatisticsRows;

  /**
   * @public
   * <p>Stage statistics such as input and output rows and bytes, execution time, and stage
   *             state. This information also includes substages and the query stage plan.</p>
   */
  OutputStage?: QueryStage;
}

/**
 * @public
 */
export interface GetQueryRuntimeStatisticsOutput {
  /**
   * @public
   * <p>Runtime statistics about the query execution.</p>
   */
  QueryRuntimeStatistics?: QueryRuntimeStatistics;
}
