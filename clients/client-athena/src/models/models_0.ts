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
 * <p>Indicates that an Amazon S3 canned ACL should be set to control ownership of
 *             stored query results, including data files inserted by Athena as the result
 *             of statements like CTAS or INSERT INTO. When Athena stores query results in
 *                 Amazon S3, the canned ACL is set with the <code>x-amz-acl</code> request
 *             header. For more information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User
 *                 Guide</i>.</p>
 * @public
 */
export interface AclConfiguration {
  /**
   * <p>The Amazon S3 canned ACL that Athena should specify when storing
   *             query results, including data files inserted by Athena as the result
   *             of statements like CTAS or INSERT INTO. Currently the only supported canned ACL is
   *                 <code>BUCKET_OWNER_FULL_CONTROL</code>. If a query runs in a workgroup and the
   *             workgroup overrides client-side settings, then the Amazon S3 canned ACL
   *             specified in the workgroup's settings is used for all queries that run in the workgroup.
   *             For more information about Amazon S3 canned ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl">Canned ACL</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  S3AclOption: S3AclOption | undefined;
}

/**
 * <p>Contains an array of named query IDs.</p>
 * @public
 */
export interface BatchGetNamedQueryInput {
  /**
   * <p>An array of query IDs.</p>
   * @public
   */
  NamedQueryIds: string[] | undefined;
}

/**
 * <p>A query, where <code>QueryString</code> contains the SQL statements that make up the
 *             query.</p>
 * @public
 */
export interface NamedQuery {
  /**
   * <p>The query name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The query description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The database to which the query belongs.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The SQL statements that make up the query.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>The unique identifier of the query.</p>
   * @public
   */
  NamedQueryId?: string | undefined;

  /**
   * <p>The name of the workgroup that contains the named query.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * <p>Information about a named query ID that could not be processed.</p>
 * @public
 */
export interface UnprocessedNamedQueryId {
  /**
   * <p>The unique identifier of the named query.</p>
   * @public
   */
  NamedQueryId?: string | undefined;

  /**
   * <p>The error code returned when the processing request for the named query failed, if
   *             applicable.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message returned when the processing request for the named query failed, if
   *             applicable.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetNamedQueryOutput {
  /**
   * <p>Information about the named query IDs submitted.</p>
   * @public
   */
  NamedQueries?: NamedQuery[] | undefined;

  /**
   * <p>Information about provided query IDs.</p>
   * @public
   */
  UnprocessedNamedQueryIds?: UnprocessedNamedQueryId[] | undefined;
}

/**
 * <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error code returned when the query execution failed to process, or when the
   *             processing request for the named query failed.</p>
   * @public
   */
  AthenaErrorCode?: string | undefined;

  Message?: string | undefined;
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
   * <p>A list of prepared statement names to return.</p>
   * @public
   */
  PreparedStatementNames: string[] | undefined;

  /**
   * <p>The name of the workgroup to which the prepared statements belong.</p>
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * <p>A prepared SQL statement for use with Athena.</p>
 * @public
 */
export interface PreparedStatement {
  /**
   * <p>The name of the prepared statement.</p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The query string for the prepared statement.</p>
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * <p>The name of the workgroup to which the prepared statement belongs.</p>
   * @public
   */
  WorkGroupName?: string | undefined;

  /**
   * <p>The description of the prepared statement.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The last modified time of the prepared statement.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>The name of a prepared statement that could not be returned.</p>
 * @public
 */
export interface UnprocessedPreparedStatementName {
  /**
   * <p>The name of a prepared statement that could not be returned due to an error.</p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The error code returned when the request for the prepared statement failed.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
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
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPreparedStatementOutput {
  /**
   * <p>The list of prepared statements returned.</p>
   * @public
   */
  PreparedStatements?: PreparedStatement[] | undefined;

  /**
   * <p>A list of one or more prepared statements that were requested but could not be
   *             returned.</p>
   * @public
   */
  UnprocessedPreparedStatementNames?: UnprocessedPreparedStatementName[] | undefined;
}

/**
 * <p>Contains an array of query execution IDs.</p>
 * @public
 */
export interface BatchGetQueryExecutionInput {
  /**
   * <p>An array of query execution IDs.</p>
   * @public
   */
  QueryExecutionIds: string[] | undefined;
}

/**
 * <p>The Athena engine version for running queries, or the PySpark engine
 *             version for running sessions.</p>
 * @public
 */
export interface EngineVersion {
  /**
   * <p>The engine version requested by the user. Possible values are determined by the output
   *             of <code>ListEngineVersions</code>, including AUTO. The default is AUTO.</p>
   * @public
   */
  SelectedEngineVersion?: string | undefined;

  /**
   * <p>Read only. The engine version on which the query runs. If the user requests a valid
   *             engine version other than Auto, the effective engine version is the same as the engine
   *             version that the user requested. If the user requests Auto, the effective engine version
   *             is chosen by Athena. When a request to update the engine version is made by
   *             a <code>CreateWorkGroup</code> or <code>UpdateWorkGroup</code> operation, the
   *                 <code>EffectiveEngineVersion</code> field is ignored.</p>
   * @public
   */
  EffectiveEngineVersion?: string | undefined;
}

/**
 * <p>If you encrypt query and calculation results in Athena owned storage, this field
 *             indicates the encryption option (for example, SSE_KMS or CSE_KMS) and key
 *             information.</p>
 * @public
 */
export interface ManagedQueryResultsEncryptionConfiguration {
  /**
   * <p>The ARN of an KMS key for encrypting managed query results.</p>
   * @public
   */
  KmsKey: string | undefined;
}

/**
 * <p>
 *             The configuration for storing results in Athena owned storage, which includes whether this feature is enabled; whether encryption configuration, if any, is used for encrypting query results.
 *         </p>
 * @public
 */
export interface ManagedQueryResultsConfiguration {
  /**
   * <p>If set to true, allows you to store query results in Athena owned storage. If set to
   *             false, workgroup member stores query results in location specified under
   *                 <code>ResultConfiguration$OutputLocation</code>. The default is false. A workgroup
   *             cannot have the <code>ResultConfiguration$OutputLocation</code> parameter when you set
   *             this field to true. </p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>If you encrypt query and calculation results in Athena owned storage, this field
   *             indicates the encryption option (for example, SSE_KMS or CSE_KMS) and key
   *             information.</p>
   * @public
   */
  EncryptionConfiguration?: ManagedQueryResultsEncryptionConfiguration | undefined;
}

/**
 * <p>The database and data catalog context in which the query execution occurs.</p>
 * @public
 */
export interface QueryExecutionContext {
  /**
   * <p>The name of the database used in the query execution. The database must exist in the
   *             catalog.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The name of the data catalog used in the query execution.</p>
   * @public
   */
  Catalog?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  DIRECTORY_IDENTITY: "DIRECTORY_IDENTITY",
} as const;

/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * <p>Specifies whether Amazon S3 access grants are enabled for query
 *             results.</p>
 * @public
 */
export interface QueryResultsS3AccessGrantsConfiguration {
  /**
   * <p>Specifies whether Amazon S3 access grants are enabled for query
   *             results.</p>
   * @public
   */
  EnableS3AccessGrants: boolean | undefined;

  /**
   * <p>When enabled, appends the user ID as an Amazon S3 path prefix to the query
   *             result output location.</p>
   * @public
   */
  CreateUserLevelPrefix?: boolean | undefined;

  /**
   * <p>The authentication type used for Amazon S3 access grants. Currently, only
   *                 <code>DIRECTORY_IDENTITY</code> is supported.</p>
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
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
 * <p>If query and calculation results are encrypted in Amazon S3, indicates the
 *             encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and
 *             key information.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (<code>SSE_S3</code>), server-side encryption with KMS-managed keys
   *                 (<code>SSE_KMS</code>), or client-side encryption with KMS-managed keys
   *                 (<code>CSE_KMS</code>) is used.</p>
   *          <p>If a query runs in a workgroup and the workgroup overrides client-side settings, then
   *             the workgroup's setting for encryption is used. It specifies whether query results must
   *             be encrypted, for all queries that run in this workgroup. </p>
   * @public
   */
  EncryptionOption: EncryptionOption | undefined;

  /**
   * <p>For <code>SSE_KMS</code> and <code>CSE_KMS</code>, this is the KMS key ARN or
   *             ID.</p>
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * <p>The location in Amazon S3 where query and calculation results are stored and
 *             the encryption option, if any, used for query and calculation results. These are known
 *             as "client-side settings". If workgroup settings override client-side settings, then the
 *             query uses the workgroup settings.</p>
 * @public
 */
export interface ResultConfiguration {
  /**
   * <p>The location in Amazon S3 where your query and calculation results are stored,
   *             such as <code>s3://path/to/query/bucket/</code>. To run the query, you must specify the
   *             query results location using one of the ways: either for individual queries using either
   *             this setting (client-side), or in the workgroup, using <a>WorkGroupConfiguration</a>. If none of them is set, Athena
   *             issues an error that no output location is provided. If workgroup settings override
   *             client-side settings, then the query uses the settings specified for the workgroup. See
   *                 <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * <p>If query and calculation results are encrypted in Amazon S3, indicates the
   *             encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and
   *             key information. This is a client-side setting. If workgroup settings override
   *             client-side settings, then the query uses the encryption configuration that is specified
   *             for the workgroup, and also uses the location for storing query results specified in the
   *             workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>
   *             and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
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
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Indicates that an Amazon S3 canned ACL should be set to control ownership of
   *             stored query results. Currently the only supported canned ACL is
   *                 <code>BUCKET_OWNER_FULL_CONTROL</code>. This is a client-side setting. If workgroup
   *             settings override client-side settings, then the query uses the ACL configuration that
   *             is specified for the workgroup, and also uses the location for storing query results
   *             specified in the workgroup. For more information, see <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   * @public
   */
  AclConfiguration?: AclConfiguration | undefined;
}

/**
 * <p>Specifies whether previous query results are reused, and if so, their maximum
 *             age.</p>
 * @public
 */
export interface ResultReuseByAgeConfiguration {
  /**
   * <p>True if previous query results can be reused when the query is run; otherwise, false.
   *             The default is false.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies, in minutes, the maximum age of a previous query result that Athena should consider for reuse. The default is 60.</p>
   * @public
   */
  MaxAgeInMinutes?: number | undefined;
}

/**
 * <p>Specifies the query result reuse behavior for the query.</p>
 * @public
 */
export interface ResultReuseConfiguration {
  /**
   * <p>Specifies whether previous query results are reused, and if so, their maximum
   *             age.</p>
   * @public
   */
  ResultReuseByAgeConfiguration?: ResultReuseByAgeConfiguration | undefined;
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
 * <p>Contains information about whether the result of a previous query was reused.</p>
 * @public
 */
export interface ResultReuseInformation {
  /**
   * <p>True if a previous query result was reused; false if the result was generated from a
   *             new run of the query.</p>
   * @public
   */
  ReusedPreviousResult: boolean | undefined;
}

/**
 * <p>The amount of data scanned during the query execution and the amount of time that it
 *             took to execute, and the type of statement that was run.</p>
 * @public
 */
export interface QueryExecutionStatistics {
  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   * @public
   */
  EngineExecutionTimeInMillis?: number | undefined;

  /**
   * <p>The number of bytes in the data that was queried.</p>
   * @public
   */
  DataScannedInBytes?: number | undefined;

  /**
   * <p>The location and file name of a data manifest file. The manifest file is saved to the
   *                 Athena query results location in Amazon S3. The manifest file
   *             tracks files that the query wrote to Amazon S3. If the query fails, the manifest
   *             file also tracks files that the query intended to write. The manifest is useful for
   *             identifying orphaned files resulting from a failed query. For more information, see
   *                 <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with Query
   *                 Results, Output Files, and Query History</a> in the <i>Amazon Athena User Guide</i>.</p>
   * @public
   */
  DataManifestLocation?: string | undefined;

  /**
   * <p>The number of milliseconds that Athena took to run the query.</p>
   * @public
   */
  TotalExecutionTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically
   *             add the query back to the queue.</p>
   * @public
   */
  QueryQueueTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that Athena took to preprocess the query before
   *             submitting the query to the query engine.</p>
   * @public
   */
  ServicePreProcessingTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that Athena took to plan the query processing
   *             flow. This includes the time spent retrieving table partitions from the data source.
   *             Note that because the query engine performs the query planning, query planning time is a
   *             subset of engine processing time.</p>
   * @public
   */
  QueryPlanningTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that Athena took to finalize and publish the
   *             query results after the query engine finished running the query.</p>
   * @public
   */
  ServiceProcessingTimeInMillis?: number | undefined;

  /**
   * <p>Contains information about whether previous query results were reused for the
   *             query.</p>
   * @public
   */
  ResultReuseInformation?: ResultReuseInformation | undefined;
}

/**
 * <p>Provides information about an Athena query error. The
 *                 <code>AthenaError</code> feature provides standardized error information to help you
 *             understand failed queries and take steps after a query failure occurs.
 *                 <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies
 *             whether the cause of the failed query is due to system error, user error, or other
 *             error.</p>
 * @public
 */
export interface AthenaError {
  /**
   * <p>An integer value that specifies the category of a query failure error. The following
   *             list shows the category for each integer value.</p>
   *          <p>
   *             <b>1</b> - System</p>
   *          <p>
   *             <b>2</b> - User</p>
   *          <p>
   *             <b>3</b> - Other</p>
   * @public
   */
  ErrorCategory?: number | undefined;

  /**
   * <p>An integer value that provides specific information about an Athena query
   *             error. For the meaning of specific values, see the <a href="https://docs.aws.amazon.com/athena/latest/ug/error-reference.html#error-reference-error-type-reference">Error Type Reference</a> in the <i>Amazon Athena User
   *                 Guide</i>.</p>
   * @public
   */
  ErrorType?: number | undefined;

  /**
   * <p>True if the query might succeed if resubmitted.</p>
   * @public
   */
  Retryable?: boolean | undefined;

  /**
   * <p>Contains a short description of the error that occurred.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
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
 * <p>The completion date, current state, submission time, and state change reason (if
 *             applicable) for the query execution.</p>
 * @public
 */
export interface QueryExecutionStatus {
  /**
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
   * @public
   */
  State?: QueryExecutionState | undefined;

  /**
   * <p>Further detail about the status of the query.</p>
   * @public
   */
  StateChangeReason?: string | undefined;

  /**
   * <p>The date and time that the query was submitted.</p>
   * @public
   */
  SubmissionDateTime?: Date | undefined;

  /**
   * <p>The date and time that the query completed.</p>
   * @public
   */
  CompletionDateTime?: Date | undefined;

  /**
   * <p>Provides information about an Athena query error.</p>
   * @public
   */
  AthenaError?: AthenaError | undefined;
}

/**
 * <p>Information about a single instance of a query execution.</p>
 * @public
 */
export interface QueryExecution {
  /**
   * <p>The unique identifier for each query execution.</p>
   * @public
   */
  QueryExecutionId?: string | undefined;

  /**
   * <p>The SQL query statements which the query execution ran.</p>
   * @public
   */
  Query?: string | undefined;

  /**
   * <p>The type of query statement that was run. <code>DDL</code> indicates DDL query
   *             statements. <code>DML</code> indicates DML (Data Manipulation Language) query
   *             statements, such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code> indicates
   *             query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>, or
   *                 <code>DESCRIBE TABLE</code>.</p>
   * @public
   */
  StatementType?: StatementType | undefined;

  /**
   * <p> The configuration for storing results in Athena owned storage, which includes whether
   *             this feature is enabled; whether encryption configuration, if any, is used for
   *             encrypting query results. </p>
   * @public
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration | undefined;

  /**
   * <p>The location in Amazon S3 where query and calculation results are stored and
   *             the encryption option, if any, used for query results. These are known as "client-side
   *             settings". If workgroup settings override client-side settings, then the query uses the
   *             location for the query results and the encryption configuration that are specified for
   *             the workgroup.</p>
   * @public
   */
  ResultConfiguration?: ResultConfiguration | undefined;

  /**
   * <p>Specifies the query result reuse behavior that was used for the query.</p>
   * @public
   */
  ResultReuseConfiguration?: ResultReuseConfiguration | undefined;

  /**
   * <p>The database in which the query execution occurred.</p>
   * @public
   */
  QueryExecutionContext?: QueryExecutionContext | undefined;

  /**
   * <p>The completion date, current state, submission time, and state change reason (if
   *             applicable) for the query execution.</p>
   * @public
   */
  Status?: QueryExecutionStatus | undefined;

  /**
   * <p>Query execution statistics, such as the amount of data scanned, the amount of time
   *             that the query took to process, and the type of statement that was run.</p>
   * @public
   */
  Statistics?: QueryExecutionStatistics | undefined;

  /**
   * <p>The name of the workgroup in which the query ran.</p>
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * <p>The engine version that executed the query.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>A list of values for the parameters in a query. The values are applied sequentially to
   *             the parameters in the query in the order in which the parameters occur. The list of
   *             parameters is not returned in the response.</p>
   * @public
   */
  ExecutionParameters?: string[] | undefined;

  /**
   * <p>The kind of query statement that was run.</p>
   * @public
   */
  SubstatementType?: string | undefined;

  /**
   * <p>Specifies whether Amazon S3 access grants are enabled for query
   *             results.</p>
   * @public
   */
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration | undefined;
}

/**
 * <p>Describes a query execution that failed to process.</p>
 * @public
 */
export interface UnprocessedQueryExecutionId {
  /**
   * <p>The unique identifier of the query execution.</p>
   * @public
   */
  QueryExecutionId?: string | undefined;

  /**
   * <p>The error code returned when the query execution failed to process, if
   *             applicable.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message returned when the query execution failed to process, if
   *             applicable.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetQueryExecutionOutput {
  /**
   * <p>Information about a query execution.</p>
   * @public
   */
  QueryExecutions?: QueryExecution[] | undefined;

  /**
   * <p>Information about the query executions that failed to run.</p>
   * @public
   */
  UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[] | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationInput {
  /**
   * <p>The name of the capacity reservation to cancel.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationOutput {}

/**
 * <p>A label that you assign to a resource. Athena resources include
 *             workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an
 *             optional value, both of which you define. For example, you can use tags to categorize
 *                 Athena resources by purpose, owner, or environment. Use a consistent set
 *             of tag keys to make it easier to search and filter the resources in your account. For
 *             best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging
 *                 Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and
 *             tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and
 *             numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys
 *             and values are case-sensitive. Tag keys must be unique per resource. If you specify more
 *             than one tag, separate them by commas. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can
   *             use letters and numbers representable in UTF-8, and the following characters: + - = . _
   *             : / @. Tag keys are case-sensitive and must be unique per resource. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You
   *             can use letters and numbers representable in UTF-8, and the following characters: + - =
   *             . _ : / @. Tag values are case-sensitive. </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationInput {
  /**
   * <p>The number of requested data processing units.</p>
   * @public
   */
  TargetDpus: number | undefined;

  /**
   * <p>The name of the capacity reservation to create.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The tags for the capacity reservation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
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
  FEDERATED: "FEDERATED",
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
   * <p>The name of the data catalog to create. The catalog name must be unique for the
   *                 Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at
   *             sign, or hyphen characters. The remainder of the length constraint of 256 is reserved
   *             for use by Athena.</p>
   *          <p>For <code>FEDERATED</code> type the catalog name has following considerations and
   *             limits:</p>
   *          <ul>
   *             <li>
   *                <p>The catalog name allows special characters such as <code>_ , @ , \ , -
   *                     </code>. These characters are replaced with a hyphen (-) when creating the CFN
   *                     Stack Name and with an underscore (_) when creating the Lambda Function and Glue
   *                     Connection Name.</p>
   *             </li>
   *             <li>
   *                <p>The catalog name has a theoretical limit of 128 characters. However, since we
   *                     use it to create other resources that allow less characters and we prepend a
   *                     prefix to it, the actual catalog name limit for <code>FEDERATED</code> catalog
   *                     is 64 - 23 = 41 characters.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>GLUE</code> for an Glue Data Catalog, and <code>HIVE</code> for an
   *             external Apache Hive metastore. <code>FEDERATED</code> is a federated catalog for which
   *                 Athena creates the connection and the Lambda function for
   *             you based on the parameters that you pass.</p>
   *          <p>For <code>FEDERATED</code> type, we do not support IAM identity center.</p>
   * @public
   */
  Type: DataCatalogType | undefined;

  /**
   * <p>A description of the data catalog to be created.</p>
   * @public
   */
  Description?: string | undefined;

  /**
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
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The <code>FEDERATED</code> data catalog type uses one of the following
   *                     parameters, but not both. Use <code>connection-arn</code> for an existing
   *                         Glue connection. Use <code>connection-type</code> and
   *                         <code>connection-properties</code> to specify the configuration setting for
   *                     a new connection.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>connection-arn:<i><glue_connection_arn_to_reuse></i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>lambda-role-arn</code> (optional): The execution role to use for the
   *                             Lambda function. If not provided, one is created.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>connection-type:MYSQL|REDSHIFT|....,
   *                                     connection-properties:"<i><json_string></i>"</code>
   *                      </p>
   *                      <p>For <i>
   *                            <code><json_string></code>
   *                         </i>, use escaped
   *                             JSON text, as in the following example.</p>
   *                      <p>
   *                         <code>"\{\"spill_bucket\":\"my_spill\",\"spill_prefix\":\"athena-spill\",\"host\":\"abc12345.snowflakecomputing.com\",\"port\":\"1234\",\"warehouse\":\"DEV_WH\",\"database\":\"TEST\",\"schema\":\"PUBLIC\",\"SecretArn\":\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\"\}"</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>A list of comma separated tags to add to the data catalog that is created. All the
   *             resources that are created by the <code>CreateDataCatalog</code> API operation with
   *                 <code>FEDERATED</code> type will have the tag
   *                 <code>federated_athena_datacatalog="true"</code>. This includes the CFN Stack, Glue
   *             Connection, Athena DataCatalog, and all the resources created as part of the CFN Stack
   *             (Lambda Function, IAM policies/roles).</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  BIGQUERY: "BIGQUERY",
  CMDB: "CMDB",
  DATALAKEGEN2: "DATALAKEGEN2",
  DB2: "DB2",
  DB2AS400: "DB2AS400",
  DOCUMENTDB: "DOCUMENTDB",
  DYNAMODB: "DYNAMODB",
  GOOGLECLOUDSTORAGE: "GOOGLECLOUDSTORAGE",
  HBASE: "HBASE",
  MYSQL: "MYSQL",
  OPENSEARCH: "OPENSEARCH",
  ORACLE: "ORACLE",
  POSTGRESQL: "POSTGRESQL",
  REDSHIFT: "REDSHIFT",
  SAPHANA: "SAPHANA",
  SNOWFLAKE: "SNOWFLAKE",
  SQLSERVER: "SQLSERVER",
  SYNAPSE: "SYNAPSE",
  TIMESTREAM: "TIMESTREAM",
  TPCDS: "TPCDS",
} as const;

/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const DataCatalogStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_FAILED_CLEANUP_COMPLETE: "CREATE_FAILED_CLEANUP_COMPLETE",
  CREATE_FAILED_CLEANUP_FAILED: "CREATE_FAILED_CLEANUP_FAILED",
  CREATE_FAILED_CLEANUP_IN_PROGRESS: "CREATE_FAILED_CLEANUP_IN_PROGRESS",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type DataCatalogStatus = (typeof DataCatalogStatus)[keyof typeof DataCatalogStatus];

/**
 * <p>Contains information about a data catalog in an Amazon Web Services account.</p>
 *          <note>
 *             <p>In the Athena console, data catalogs are listed as "data sources" on
 *                 the <b>Data sources</b> page under the <b>Data source name</b> column.</p>
 *          </note>
 * @public
 */
export interface DataCatalog {
  /**
   * <p>The name of the data catalog. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign,
   *             or hyphen characters. The remainder of the length constraint of 256 is reserved for use
   *             by Athena.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the data catalog.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>GLUE</code> for an Glue Data Catalog, and <code>HIVE</code> for an
   *             external Apache Hive metastore. <code>FEDERATED</code> is a federated catalog for which
   *                 Athena creates the connection and the Lambda function for
   *             you based on the parameters that you pass.</p>
   * @public
   */
  Type: DataCatalogType | undefined;

  /**
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
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The <code>FEDERATED</code> data catalog type uses one of the following
   *                     parameters, but not both. Use <code>connection-arn</code> for an existing
   *                         Glue connection. Use <code>connection-type</code> and
   *                         <code>connection-properties</code> to specify the configuration setting for
   *                     a new connection.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>connection-arn:<i><glue_connection_arn_to_reuse></i>
   *                         </code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>connection-type:MYSQL|REDSHIFT|....,
   *                                     connection-properties:"<i><json_string></i>"</code>
   *                      </p>
   *                      <p>For <i>
   *                            <code><json_string></code>
   *                         </i>, use escaped
   *                             JSON text, as in the following example.</p>
   *                      <p>
   *                         <code>"\{\"spill_bucket\":\"my_spill\",\"spill_prefix\":\"athena-spill\",\"host\":\"abc12345.snowflakecomputing.com\",\"port\":\"1234\",\"warehouse\":\"DEV_WH\",\"database\":\"TEST\",\"schema\":\"PUBLIC\",\"SecretArn\":\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\"\}"</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>The status of the creation or deletion of the data catalog.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>LAMBDA</code>, <code>GLUE</code>, and <code>HIVE</code> data catalog
   *                     types are created synchronously. Their status is either
   *                         <code>CREATE_COMPLETE</code> or <code>CREATE_FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>FEDERATED</code> data catalog type is created asynchronously.</p>
   *             </li>
   *          </ul>
   *          <p>Data catalog creation status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code>: Federated data catalog creation in
   *                     progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_COMPLETE</code>: Data catalog creation complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>: Data catalog could not be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED_CLEANUP_IN_PROGRESS</code>: Federated data catalog
   *                     creation failed and is being removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED_CLEANUP_COMPLETE</code>: Federated data catalog creation
   *                     failed and was removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED_CLEANUP_FAILED</code>: Federated data catalog creation
   *                     failed but could not be removed.</p>
   *             </li>
   *          </ul>
   *          <p>Data catalog deletion status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code>: Federated data catalog deletion in
   *                     progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_COMPLETE</code>: Federated data catalog deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code>: Federated data catalog could not be
   *                     deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: DataCatalogStatus | undefined;

  /**
   * <p>The type of connection for a <code>FEDERATED</code> data catalog (for example,
   *                 <code>REDSHIFT</code>, <code>MYSQL</code>, or <code>SQLSERVER</code>). For
   *             information about individual connectors, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connectors-available.html">Available data source
   *                 connectors</a>.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Text of the error that occurred during data catalog creation or deletion.</p>
   * @public
   */
  Error?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataCatalogOutput {
  /**
   * <p>Contains information about a data catalog in an Amazon Web Services account.</p>
   *          <note>
   *             <p>In the Athena console, data catalogs are listed as "data sources" on
   *                 the <b>Data sources</b> page under the <b>Data source name</b> column.</p>
   *          </note>
   * @public
   */
  DataCatalog?: DataCatalog | undefined;
}

/**
 * @public
 */
export interface CreateNamedQueryInput {
  /**
   * <p>The query name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The query description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The database to which the query belongs.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The contents of the query with all query statements.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
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
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The name of the workgroup in which the named query is being created.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface CreateNamedQueryOutput {
  /**
   * <p>The unique ID of the query.</p>
   * @public
   */
  NamedQueryId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInput {
  /**
   * <p>The name of the Spark enabled workgroup in which the notebook will be created.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>The name of the <code>ipynb</code> file to be created in the Spark workgroup, without
   *             the <code>.ipynb</code> extension.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookOutput {
  /**
   * <p>A unique identifier for the notebook.</p>
   * @public
   */
  NotebookId?: string | undefined;
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
 * <p>Indicates that the request was throttled.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The reason for the query throttling, for example, when it exceeds the concurrent query
   *             limit.</p>
   * @public
   */
  Reason?: ThrottleReason | undefined;
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
   * <p>The name of the prepared statement.</p>
   * @public
   */
  StatementName: string | undefined;

  /**
   * <p>The name of the workgroup to which the prepared statement belongs.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>The query string for the prepared statement.</p>
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * <p>The description of the prepared statement.</p>
   * @public
   */
  Description?: string | undefined;
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
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedNotebookUrlResponse {
  /**
   * <p>The URL of the notebook. The URL includes the authentication token and notebook file
   *             name and points directly to the opened notebook.</p>
   * @public
   */
  NotebookUrl: string | undefined;

  /**
   * <p>The authentication token for the notebook.</p>
   * @public
   */
  AuthToken: string | undefined;

  /**
   * <p>The UTC epoch time when the authentication token expires.</p>
   * @public
   */
  AuthTokenExpirationTime: number | undefined;
}

/**
 * <p>A resource, such as a workgroup, was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The name of the Amazon resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
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
 * <p>Specifies the customer managed KMS key that is used to encrypt the user's data stores
 *             in Athena. When an Amazon Web Services managed key is used, this value is
 *             null. This setting does not apply to Athena SQL workgroups.</p>
 * @public
 */
export interface CustomerContentEncryptionConfiguration {
  /**
   * <p>The customer managed KMS key that is used to encrypt the user's data stores in Athena.</p>
   * @public
   */
  KmsKey: string | undefined;
}

/**
 * <p>Specifies whether the workgroup is IAM Identity Center supported.</p>
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * <p>Specifies whether the workgroup is IAM Identity Center supported.</p>
   * @public
   */
  EnableIdentityCenter?: boolean | undefined;

  /**
   * <p>The IAM Identity Center instance ARN that the workgroup associates to.</p>
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;
}

/**
 * <p>The configuration of the workgroup, which includes the location in Amazon S3
 *             where query and calculation results are stored, the encryption option, if any, used for
 *             query and calculation results, whether the Amazon CloudWatch Metrics are enabled for
 *             the workgroup and whether workgroup settings override query settings, and the data usage
 *             limits for the amount of data scanned per query or per workgroup. The workgroup settings
 *             override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the
 *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. </p>
 * @public
 */
export interface WorkGroupConfiguration {
  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3
   *             where query and calculation results are stored and the encryption option, if any, used
   *             for query and calculation results. To run the query, you must specify the query results
   *             location using one of the ways: either in the workgroup using this setting, or for
   *             individual queries (client-side), using <a>ResultConfiguration$OutputLocation</a>. If none of them is set, Athena issues an error that no output location is provided.</p>
   * @public
   */
  ResultConfiguration?: ResultConfiguration | undefined;

  /**
   * <p> The configuration for storing results in Athena owned storage, which includes whether
   *             this feature is enabled; whether encryption configuration, if any, is used for
   *             encrypting query results. </p>
   * @public
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration | undefined;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false", client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   * @public
   */
  EnforceWorkGroupConfiguration?: boolean | undefined;

  /**
   * <p>Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.</p>
   * @public
   */
  PublishCloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>The upper data usage limit (cutoff) for the amount of bytes a single query in a
   *             workgroup is allowed to scan.</p>
   * @public
   */
  BytesScannedCutoffPerQuery?: number | undefined;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to reference
   *                 Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>,
   *             workgroup members cannot query data from Requester Pays buckets, and queries that
   *             retrieve data from Requester Pays buckets cause an error. The default is
   *                 <code>false</code>. For more information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester
   *                 Pays Buckets</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide</i>.</p>
   * @public
   */
  RequesterPaysEnabled?: boolean | undefined;

  /**
   * <p>The engine version that all queries running on the workgroup use. Queries on the
   *                 <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine
   *             regardless of this setting.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>Specifies a user defined JSON string that is passed to the notebook engine.</p>
   * @public
   */
  AdditionalConfiguration?: string | undefined;

  /**
   * <p>The ARN of the execution role used to access user resources for Spark sessions and
   *                 IAM Identity Center enabled workgroups. This property applies only to Spark enabled
   *             workgroups and IAM Identity Center enabled workgroups. The property is required for
   *                 IAM Identity Center enabled workgroups.</p>
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.</p>
   * @public
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration | undefined;

  /**
   * <p>Enforces a minimal level of encryption for the workgroup for query and calculation
   *             results that are written to Amazon S3. When enabled, workgroup users can set
   *             encryption only to the minimum level set by the administrator or higher when they submit
   *             queries.</p>
   *          <p>The <code>EnforceWorkGroupConfiguration</code> setting takes precedence over the
   *                 <code>EnableMinimumEncryptionConfiguration</code> flag. This means that if
   *                 <code>EnforceWorkGroupConfiguration</code> is true, the
   *                 <code>EnableMinimumEncryptionConfiguration</code> flag is ignored, and the workgroup
   *             configuration for encryption is used.</p>
   * @public
   */
  EnableMinimumEncryptionConfiguration?: boolean | undefined;

  /**
   * <p>Specifies whether the workgroup is IAM Identity Center supported.</p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;

  /**
   * <p>Specifies whether Amazon S3 access grants are enabled for query
   *             results.</p>
   * @public
   */
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateWorkGroupInput {
  /**
   * <p>The workgroup name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Contains configuration information for creating an Athena SQL workgroup or
   *             Spark enabled Athena workgroup. Athena SQL workgroup
   *             configuration includes the location in Amazon S3 where query and calculation
   *             results are stored, the encryption configuration, if any, used for encrypting query
   *             results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the
   *             limit for the amount of bytes scanned (cutoff) per query, if it is specified, and
   *             whether workgroup's settings (specified with <code>EnforceWorkGroupConfiguration</code>)
   *             in the <code>WorkGroupConfiguration</code> override client-side settings. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   * @public
   */
  Configuration?: WorkGroupConfiguration | undefined;

  /**
   * <p>The workgroup description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of comma separated tags to add to the workgroup that is created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
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
   * <p>The name of the capacity reservation to delete.</p>
   * @public
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
   * <p>The name of the data catalog to delete.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Deletes the Athena Data Catalog. You can only use this with the <code>FEDERATED</code>
   *             catalogs. You usually perform this before registering the connector with Glue Data
   *             Catalog. After deletion, you will have to manage the Glue Connection and Lambda
   *             function. </p>
   * @public
   */
  DeleteCatalogOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDataCatalogOutput {
  /**
   * <p>Contains information about a data catalog in an Amazon Web Services account.</p>
   *          <note>
   *             <p>In the Athena console, data catalogs are listed as "data sources" on
   *                 the <b>Data sources</b> page under the <b>Data source name</b> column.</p>
   *          </note>
   * @public
   */
  DataCatalog?: DataCatalog | undefined;
}

/**
 * @public
 */
export interface DeleteNamedQueryInput {
  /**
   * <p>The unique ID of the query to delete.</p>
   * @public
   */
  NamedQueryId?: string | undefined;
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
   * <p>The ID of the notebook to delete.</p>
   * @public
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
   * <p>The name of the prepared statement to delete.</p>
   * @public
   */
  StatementName: string | undefined;

  /**
   * <p>The workgroup to which the statement to be deleted belongs.</p>
   * @public
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
   * <p>The unique name of the workgroup to delete.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>The option to delete the workgroup and its contents even if the workgroup contains any
   *             named queries, query executions, or notebooks.</p>
   * @public
   */
  RecursiveDeleteOption?: boolean | undefined;
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
   * <p>The ID of the notebook to export.</p>
   * @public
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
 * <p>Contains metadata for notebook, including the notebook name, ID, workgroup, and time
 *             created.</p>
 * @public
 */
export interface NotebookMetadata {
  /**
   * <p>The notebook ID.</p>
   * @public
   */
  NotebookId?: string | undefined;

  /**
   * <p>The name of the notebook.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the Spark enabled workgroup to which the notebook belongs.</p>
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * <p>The time when the notebook was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The type of notebook. Currently, the only valid type is <code>IPYNB</code>.</p>
   * @public
   */
  Type?: NotebookType | undefined;

  /**
   * <p>The time when the notebook was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ExportNotebookOutput {
  /**
   * <p>The notebook metadata, including notebook ID, notebook name, and workgroup
   *             name.</p>
   * @public
   */
  NotebookMetadata?: NotebookMetadata | undefined;

  /**
   * <p>The content of the exported notebook.</p>
   * @public
   */
  Payload?: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionRequest {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * <p>Contains information about an application-specific calculation result.</p>
 * @public
 */
export interface CalculationResult {
  /**
   * <p>The Amazon S3 location of the <code>stdout</code> file for the calculation.</p>
   * @public
   */
  StdOutS3Uri?: string | undefined;

  /**
   * <p>The Amazon S3 location of the <code>stderr</code> error messages file for the
   *             calculation.</p>
   * @public
   */
  StdErrorS3Uri?: string | undefined;

  /**
   * <p>The Amazon S3 location of the folder for the calculation results.</p>
   * @public
   */
  ResultS3Uri?: string | undefined;

  /**
   * <p>The data format of the calculation result.</p>
   * @public
   */
  ResultType?: string | undefined;
}

/**
 * <p>Contains statistics for a notebook calculation.</p>
 * @public
 */
export interface CalculationStatistics {
  /**
   * <p>The data processing unit execution time in milliseconds for the calculation.</p>
   * @public
   */
  DpuExecutionInMillis?: number | undefined;

  /**
   * <p>The progress of the calculation.</p>
   * @public
   */
  Progress?: string | undefined;
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
 * <p>Contains information about the status of a notebook calculation.</p>
 * @public
 */
export interface CalculationStatus {
  /**
   * <p>The date and time the calculation was submitted for processing.</p>
   * @public
   */
  SubmissionDateTime?: Date | undefined;

  /**
   * <p>The date and time the calculation completed processing.</p>
   * @public
   */
  CompletionDateTime?: Date | undefined;

  /**
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
   * @public
   */
  State?: CalculationExecutionState | undefined;

  /**
   * <p>The reason for the calculation state change (for example, the calculation was canceled
   *             because the session was terminated).</p>
   * @public
   */
  StateChangeReason?: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionResponse {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId?: string | undefined;

  /**
   * <p>The session ID that the calculation ran in.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The description of the calculation execution.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon S3 location in which calculation results are stored.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * <p>Contains information about the status of the calculation.</p>
   * @public
   */
  Status?: CalculationStatus | undefined;

  /**
   * <p>Contains information about the data processing unit (DPU) execution time and progress.
   *             This field is populated only when statistics are available.</p>
   * @public
   */
  Statistics?: CalculationStatistics | undefined;

  /**
   * <p>Contains result information. This field is populated only if the calculation is
   *             completed.</p>
   * @public
   */
  Result?: CalculationResult | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionCodeRequest {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionCodeResponse {
  /**
   * <p>The unencrypted code that was executed for the calculation.</p>
   * @public
   */
  CodeBlock?: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionStatusRequest {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionStatusResponse {
  /**
   * <p>Contains information about the calculation execution status.</p>
   * @public
   */
  Status?: CalculationStatus | undefined;

  /**
   * <p>Contains information about the DPU execution time and progress.</p>
   * @public
   */
  Statistics?: CalculationStatistics | undefined;
}

/**
 * @public
 */
export interface GetCapacityAssignmentConfigurationInput {
  /**
   * <p>The name of the capacity reservation to retrieve the capacity assignment configuration
   *             for.</p>
   * @public
   */
  CapacityReservationName: string | undefined;
}

/**
 * <p>A mapping between one or more workgroups and a capacity reservation.</p>
 * @public
 */
export interface CapacityAssignment {
  /**
   * <p>The list of workgroup names for the capacity assignment.</p>
   * @public
   */
  WorkGroupNames?: string[] | undefined;
}

/**
 * <p>Assigns Athena workgroups (and hence their queries) to capacity
 *             reservations. A capacity reservation can have only one capacity assignment
 *             configuration, but the capacity assignment configuration can be made up of multiple
 *             individual assignments. Each assignment specifies how Athena queries can
 *             consume capacity from the capacity reservation that their workgroup is mapped to.</p>
 * @public
 */
export interface CapacityAssignmentConfiguration {
  /**
   * <p>The name of the reservation that the capacity assignment configuration is for.</p>
   * @public
   */
  CapacityReservationName?: string | undefined;

  /**
   * <p>The list of assignments that make up the capacity assignment configuration.</p>
   * @public
   */
  CapacityAssignments?: CapacityAssignment[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityAssignmentConfigurationOutput {
  /**
   * <p>The requested capacity assignment configuration for the specified capacity
   *             reservation.</p>
   * @public
   */
  CapacityAssignmentConfiguration: CapacityAssignmentConfiguration | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationInput {
  /**
   * <p>The name of the capacity reservation.</p>
   * @public
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
 * <p>Contains the submission time of a single allocation request for a capacity reservation
 *             and the most recent status of the attempted allocation.</p>
 * @public
 */
export interface CapacityAllocation {
  /**
   * <p>The status of the capacity allocation.</p>
   * @public
   */
  Status: CapacityAllocationStatus | undefined;

  /**
   * <p>The status message of the capacity allocation.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The time when the capacity allocation was requested.</p>
   * @public
   */
  RequestTime: Date | undefined;

  /**
   * <p>The time when the capacity allocation request was completed.</p>
   * @public
   */
  RequestCompletionTime?: Date | undefined;
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
 * <p>A reservation for a specified number of data processing units (DPUs). When a
 *             reservation is initially created, it has no DPUs. Athena allocates DPUs
 *             until the allocated amount equals the requested amount.</p>
 * @public
 */
export interface CapacityReservation {
  /**
   * <p>The name of the capacity reservation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the capacity reservation.</p>
   * @public
   */
  Status: CapacityReservationStatus | undefined;

  /**
   * <p>The number of data processing units requested.</p>
   * @public
   */
  TargetDpus: number | undefined;

  /**
   * <p>The number of data processing units currently allocated.</p>
   * @public
   */
  AllocatedDpus: number | undefined;

  /**
   * <p>Contains the submission time of a single allocation request for a capacity reservation
   *             and the most recent status of the attempted allocation.</p>
   * @public
   */
  LastAllocation?: CapacityAllocation | undefined;

  /**
   * <p>The time of the most recent capacity allocation that succeeded.</p>
   * @public
   */
  LastSuccessfulAllocationTime?: Date | undefined;

  /**
   * <p>The time in UTC epoch millis when the capacity reservation was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationOutput {
  /**
   * <p>The requested capacity reservation structure.</p>
   * @public
   */
  CapacityReservation: CapacityReservation | undefined;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * <p>The name of the data catalog that contains the database to return.</p>
   * @public
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the database to return.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the workgroup for which the metadata is being fetched. Required if
   *             requesting an IAM Identity Center enabled Glue Data Catalog.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * <p>Contains metadata information for a database in a data catalog.</p>
 * @public
 */
export interface Database {
  /**
   * <p>The name of the database.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the database.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A set of custom key/value pairs.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * <p>The database returned.</p>
   * @public
   */
  Database?: Database | undefined;
}

/**
 * <p>An exception that Athena received when it called a custom metastore.
 *             Occurs if the error is not caused by user input (<code>InvalidRequestException</code>)
 *             or from the Athena platform (<code>InternalServerException</code>). For
 *             example, if a user-created Lambda function is missing permissions, the
 *                 Lambda
 *             <code>4XX</code> exception is returned in a <code>MetadataException</code>.</p>
 * @public
 */
export class MetadataException extends __BaseException {
  readonly name: "MetadataException" = "MetadataException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The name of the data catalog to return.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the workgroup. Required if making an IAM Identity Center request.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogOutput {
  /**
   * <p>The data catalog returned.</p>
   * @public
   */
  DataCatalog?: DataCatalog | undefined;
}

/**
 * @public
 */
export interface GetNamedQueryInput {
  /**
   * <p>The unique ID of the query. Use <a>ListNamedQueries</a> to get query
   *             IDs.</p>
   * @public
   */
  NamedQueryId: string | undefined;
}

/**
 * @public
 */
export interface GetNamedQueryOutput {
  /**
   * <p>Information about the query.</p>
   * @public
   */
  NamedQuery?: NamedQuery | undefined;
}

/**
 * @public
 */
export interface GetNotebookMetadataInput {
  /**
   * <p>The ID of the notebook whose metadata is to be retrieved.</p>
   * @public
   */
  NotebookId: string | undefined;
}

/**
 * @public
 */
export interface GetNotebookMetadataOutput {
  /**
   * <p>The metadata that is returned for the specified notebook ID.</p>
   * @public
   */
  NotebookMetadata?: NotebookMetadata | undefined;
}

/**
 * @public
 */
export interface GetPreparedStatementInput {
  /**
   * <p>The name of the prepared statement to retrieve.</p>
   * @public
   */
  StatementName: string | undefined;

  /**
   * <p>The workgroup to which the statement to be retrieved belongs.</p>
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface GetPreparedStatementOutput {
  /**
   * <p>The name of the prepared statement that was retrieved.</p>
   * @public
   */
  PreparedStatement?: PreparedStatement | undefined;
}

/**
 * @public
 */
export interface GetQueryExecutionInput {
  /**
   * <p>The unique ID of the query execution.</p>
   * @public
   */
  QueryExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryExecutionOutput {
  /**
   * <p>Information about the query execution.</p>
   * @public
   */
  QueryExecution?: QueryExecution | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  DATA_MANIFEST: "DATA_MANIFEST",
  DATA_ROWS: "DATA_ROWS",
} as const;

/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * @public
 */
export interface GetQueryResultsInput {
  /**
   * <p>The unique ID of the query execution.</p>
   * @public
   */
  QueryExecutionId: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results (rows) to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> When you set this to <code>DATA_ROWS</code> or empty, <code>GetQueryResults</code>
   *             returns the query results in rows. If set to <code>DATA_MANIFEST</code>, it returns the
   *             manifest file in rows. Only the query types <code>CREATE TABLE AS SELECT</code>,
   *                 <code>UNLOAD</code>, and <code>INSERT</code> can generate a manifest file. If you
   *             use <code>DATA_MANIFEST</code> for other query types, the query will fail. </p>
   * @public
   */
  QueryResultType?: QueryResultType | undefined;
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
 * <p>Information about the columns in a query execution result.</p>
 * @public
 */
export interface ColumnInfo {
  /**
   * <p>The catalog to which the query results belong.</p>
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * <p>The schema name (database name) to which the query results belong.</p>
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * <p>The table name for the query results.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The name of the column.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A column label.</p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38.
   *             For performance reasons, we recommend up to 18 digits.</p>
   * @public
   */
  Precision?: number | undefined;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits in the
   *             fractional part of the value. Defaults to 0.</p>
   * @public
   */
  Scale?: number | undefined;

  /**
   * <p>Unsupported constraint. This value always shows as <code>UNKNOWN</code>.</p>
   * @public
   */
  Nullable?: ColumnNullable | undefined;

  /**
   * <p>Indicates whether values in the column are case-sensitive.</p>
   * @public
   */
  CaseSensitive?: boolean | undefined;
}

/**
 * <p>The metadata that describes the column structure and data types of a table of query
 *             results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.</p>
 * @public
 */
export interface ResultSetMetadata {
  /**
   * <p>Information about the columns returned in a query result metadata.</p>
   * @public
   */
  ColumnInfo?: ColumnInfo[] | undefined;
}

/**
 * <p>A piece of data (a field in the table).</p>
 * @public
 */
export interface Datum {
  /**
   * <p>The value of the datum.</p>
   * @public
   */
  VarCharValue?: string | undefined;
}

/**
 * <p>The rows that make up a query result table.</p>
 * @public
 */
export interface Row {
  /**
   * <p>The data that populates a row in a query result table.</p>
   * @public
   */
  Data?: Datum[] | undefined;
}

/**
 * <p>The metadata and rows that make up a query result set. The metadata describes the
 *             column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.</p>
 * @public
 */
export interface ResultSet {
  /**
   * <p>The rows in the table.</p>
   * @public
   */
  Rows?: Row[] | undefined;

  /**
   * <p>The metadata that describes the column structure and data types of a table of query
   *             results.</p>
   * @public
   */
  ResultSetMetadata?: ResultSetMetadata | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsOutput {
  /**
   * <p>The number of rows inserted with a <code>CREATE TABLE AS SELECT</code>, <code>INSERT
   *                 INTO</code>, or <code>UPDATE</code> statement. </p>
   * @public
   */
  UpdateCount?: number | undefined;

  /**
   * <p>The results of the query execution.</p>
   * @public
   */
  ResultSet?: ResultSet | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryRuntimeStatisticsInput {
  /**
   * <p>The unique ID of the query execution.</p>
   * @public
   */
  QueryExecutionId: string | undefined;
}

/**
 * <p>Statistics such as input rows and bytes read by the query, rows and bytes output by
 *             the query, and the number of rows written by the query.</p>
 * @public
 */
export interface QueryRuntimeStatisticsRows {
  /**
   * <p>The number of rows read to execute the query.</p>
   * @public
   */
  InputRows?: number | undefined;

  /**
   * <p>The number of bytes read to execute the query.</p>
   * @public
   */
  InputBytes?: number | undefined;

  /**
   * <p>The number of bytes returned by the query.</p>
   * @public
   */
  OutputBytes?: number | undefined;

  /**
   * <p>The number of rows returned by the query.</p>
   * @public
   */
  OutputRows?: number | undefined;
}

/**
 * <p>Timeline statistics such as query queue time, planning time, execution time, service
 *             processing time, and total execution time.</p>
 * @public
 */
export interface QueryRuntimeStatisticsTimeline {
  /**
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically
   *             add the query back to the queue.</p>
   * @public
   */
  QueryQueueTimeInMillis?: number | undefined;

  /**
   * <p> The number of milliseconds that Athena spends on preprocessing before it
   *             submits the query to the engine. </p>
   * @public
   */
  ServicePreProcessingTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that Athena took to plan the query processing
   *             flow. This includes the time spent retrieving table partitions from the data source.
   *             Note that because the query engine performs the query planning, query planning time is a
   *             subset of engine processing time.</p>
   * @public
   */
  QueryPlanningTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   * @public
   */
  EngineExecutionTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that Athena took to finalize and publish the
   *             query results after the query engine finished running the query.</p>
   * @public
   */
  ServiceProcessingTimeInMillis?: number | undefined;

  /**
   * <p>The number of milliseconds that Athena took to run the query.</p>
   * @public
   */
  TotalExecutionTimeInMillis?: number | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * <p>Contains data processing unit (DPU) configuration settings and parameter mappings for
 *             a notebook engine.</p>
 * @public
 */
export interface EngineConfiguration {
  /**
   * <p>The number of DPUs to use for the coordinator. A coordinator is a special executor
   *             that orchestrates processing work and manages other executors in a notebook session. The
   *             default is 1.</p>
   * @public
   */
  CoordinatorDpuSize?: number | undefined;

  /**
   * <p>The maximum number of DPUs that can run concurrently.</p>
   * @public
   */
  MaxConcurrentDpus: number | undefined;

  /**
   * <p>The default number of DPUs to use for executors. An executor is the smallest unit of
   *             compute that a notebook session can request from Athena. The default is
   *             1.</p>
   * @public
   */
  DefaultExecutorDpuSize?: number | undefined;

  /**
   * <p>Contains additional notebook engine <code>MAP<string, string></code> parameter
   *             mappings in the form of key-value pairs. To specify an Athena notebook that
   *             the Jupyter server will download and serve, specify a value for the <a>StartSessionRequest$NotebookVersion</a> field, and then add a key named
   *                 <code>NotebookId</code> to <code>AdditionalConfigs</code> that has the value of the
   *                 Athena notebook ID.</p>
   * @public
   */
  AdditionalConfigs?: Record<string, string> | undefined;

  /**
   * <p>Specifies custom jar files and Spark properties for use cases like cluster encryption,
   *             table formats, and general Spark tuning.</p>
   * @public
   */
  SparkProperties?: Record<string, string> | undefined;
}

/**
 * <p>Contains session configuration information.</p>
 * @public
 */
export interface SessionConfiguration {
  /**
   * <p>The ARN of the execution role used to access user resources for Spark sessions and
   *             Identity Center enabled workgroups. This property applies only to Spark enabled
   *             workgroups and Identity Center enabled workgroups.</p>
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * <p>The Amazon S3 location that stores information for the notebook.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * <p>The idle timeout in seconds for the session.</p>
   * @public
   */
  IdleTimeoutSeconds?: number | undefined;

  /**
   * <p>If query and calculation results are encrypted in Amazon S3, indicates the
   *             encryption option used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and
   *             key information.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * <p>Contains statistics for a session.</p>
 * @public
 */
export interface SessionStatistics {
  /**
   * <p>The data processing unit execution time for a session in milliseconds.</p>
   * @public
   */
  DpuExecutionInMillis?: number | undefined;
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
 * <p>Contains information about the status of a session.</p>
 * @public
 */
export interface SessionStatus {
  /**
   * <p>The date and time that the session started.</p>
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * <p>The most recent date and time that the session was modified.</p>
   * @public
   */
  LastModifiedDateTime?: Date | undefined;

  /**
   * <p>The date and time that the session ended.</p>
   * @public
   */
  EndDateTime?: Date | undefined;

  /**
   * <p>The date and time starting at which the session became idle. Can be empty if the
   *             session is not currently idle.</p>
   * @public
   */
  IdleSinceDateTime?: Date | undefined;

  /**
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
   * @public
   */
  State?: SessionState | undefined;

  /**
   * <p>The reason for the session state change (for example, canceled because the session was
   *             terminated).</p>
   * @public
   */
  StateChangeReason?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The session description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The workgroup to which the session belongs.</p>
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * <p>The engine version used by the session (for example, <code>PySpark engine version
   *                 3</code>). You can get a list of engine versions by calling <a>ListEngineVersions</a>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Contains engine configuration information like DPU usage.</p>
   * @public
   */
  EngineConfiguration?: EngineConfiguration | undefined;

  /**
   * <p>The notebook version.</p>
   * @public
   */
  NotebookVersion?: string | undefined;

  /**
   * <p>Contains the workgroup configuration information used by the session.</p>
   * @public
   */
  SessionConfiguration?: SessionConfiguration | undefined;

  /**
   * <p>Contains information about the status of the session.</p>
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * <p>Contains the DPU execution time.</p>
   * @public
   */
  Statistics?: SessionStatistics | undefined;
}

/**
 * @public
 */
export interface GetSessionStatusRequest {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionStatusResponse {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>Contains information about the status of the session.</p>
   * @public
   */
  Status?: SessionStatus | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataInput {
  /**
   * <p>The name of the data catalog that contains the database and table metadata to
   *             return.</p>
   * @public
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the database that contains the table metadata to return.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which metadata is returned.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The name of the workgroup for which the metadata is being fetched. Required if
   *             requesting an IAM Identity Center enabled Glue Data Catalog.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * <p>Contains metadata for a column in a table.</p>
 * @public
 */
export interface Column {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type of the column.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Optional information about the column.</p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * <p>Contains metadata for a table.</p>
 * @public
 */
export interface TableMetadata {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The time that the table was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The last time the table was accessed.</p>
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * <p>The type of table. In Athena, only <code>EXTERNAL_TABLE</code> is
   *             supported.</p>
   * @public
   */
  TableType?: string | undefined;

  /**
   * <p>A list of the columns in the table.</p>
   * @public
   */
  Columns?: Column[] | undefined;

  /**
   * <p>A list of the partition keys in the table.</p>
   * @public
   */
  PartitionKeys?: Column[] | undefined;

  /**
   * <p>A set of custom key/value pairs for table properties.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataOutput {
  /**
   * <p>An object that contains table metadata.</p>
   * @public
   */
  TableMetadata?: TableMetadata | undefined;
}

/**
 * @public
 */
export interface GetWorkGroupInput {
  /**
   * <p>The name of the workgroup.</p>
   * @public
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
 * <p>A workgroup, which contains a name, description, creation time, state, and other
 *             configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup
 *             enables you to isolate queries for you or your group of users from other queries in the
 *             same account, to configure the query results location and the encryption configuration
 *             (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch,
 *             and to establish per-query data usage control limits for all queries in a workgroup. The
 *             workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code>
 *             (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
 * @public
 */
export interface WorkGroup {
  /**
   * <p>The workgroup name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The state of the workgroup: ENABLED or DISABLED.</p>
   * @public
   */
  State?: WorkGroupState | undefined;

  /**
   * <p>The configuration of the workgroup, which includes the location in Amazon S3
   *             where query and calculation results are stored, the encryption configuration, if any,
   *             used for query and calculation results; whether the Amazon CloudWatch Metrics are
   *             enabled for the workgroup; whether workgroup settings override client-side settings; and
   *             the data usage limits for the amount of data scanned per query or per workgroup. The
   *             workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code>
   *             (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   * @public
   */
  Configuration?: WorkGroupConfiguration | undefined;

  /**
   * <p>The workgroup description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the workgroup was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The ARN of the IAM Identity Center enabled application associated with the
   *             workgroup.</p>
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkGroupOutput {
  /**
   * <p>Information about the workgroup.</p>
   * @public
   */
  WorkGroup?: WorkGroup | undefined;
}

/**
 * @public
 */
export interface ImportNotebookInput {
  /**
   * <p>The name of the Spark enabled workgroup to import the notebook to.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>The name of the notebook to import.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The notebook content to be imported. The payload must be in <code>ipynb</code>
   *             format.</p>
   * @public
   */
  Payload?: string | undefined;

  /**
   * <p>The notebook content type. Currently, the only valid type is
   *             <code>IPYNB</code>.</p>
   * @public
   */
  Type: NotebookType | undefined;

  /**
   * <p>A URI that specifies the Amazon S3 location of a notebook file in
   *                 <code>ipynb</code> format.</p>
   * @public
   */
  NotebookS3LocationUri?: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure the request to import the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportNotebookOutput {
  /**
   * <p>The ID assigned to the imported notebook.</p>
   * @public
   */
  NotebookId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationDPUSizesInput {
  /**
   * <p>Specifies the maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the application runtime IDs and their supported DPU sizes.</p>
 * @public
 */
export interface ApplicationDPUSizes {
  /**
   * <p>The name of the supported application runtime (for example, <code>Athena notebook
   *                 version 1</code>).</p>
   * @public
   */
  ApplicationRuntimeId?: string | undefined;

  /**
   * <p>A list of the supported DPU sizes that the application runtime supports.</p>
   * @public
   */
  SupportedDPUSizes?: number[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationDPUSizesOutput {
  /**
   * <p>A list of the supported DPU sizes that the application runtime supports.</p>
   * @public
   */
  ApplicationDPUSizes?: ApplicationDPUSizes[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCalculationExecutionsRequest {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
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
   * @public
   */
  StateFilter?: CalculationExecutionState | undefined;

  /**
   * <p>The maximum number of calculation executions to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information for a notebook calculation.</p>
 * @public
 */
export interface CalculationSummary {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId?: string | undefined;

  /**
   * <p>A description of the calculation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Contains information about the status of the calculation.</p>
   * @public
   */
  Status?: CalculationStatus | undefined;
}

/**
 * @public
 */
export interface ListCalculationExecutionsResponse {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of <a>CalculationSummary</a> objects.</p>
   * @public
   */
  Calculations?: CalculationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCapacityReservationsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCapacityReservationsOutput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The capacity reservations for the current account.</p>
   * @public
   */
  CapacityReservations: CapacityReservation[] | undefined;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * <p>The name of the data catalog that contains the databases to return.</p>
   * @public
   */
  CatalogName: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the workgroup for which the metadata is being fetched. Required if
   *             requesting an IAM Identity Center enabled Glue Data Catalog.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * <p>A list of databases from a data catalog.</p>
   * @public
   */
  DatabaseList?: Database[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataCatalogsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of data catalogs to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the workgroup. Required if making an IAM Identity Center request.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * <p>The summary information for the data catalog, which includes its name and type.</p>
 * @public
 */
export interface DataCatalogSummary {
  /**
   * <p>The name of the data catalog. The catalog name is unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign,
   *             or hyphen characters. The remainder of the length constraint of 256 is reserved for use
   *             by Athena.</p>
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * <p>The data catalog type.</p>
   * @public
   */
  Type?: DataCatalogType | undefined;

  /**
   * <p>The status of the creation or deletion of the data catalog.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>LAMBDA</code>, <code>GLUE</code>, and <code>HIVE</code> data catalog
   *                     types are created synchronously. Their status is either
   *                         <code>CREATE_COMPLETE</code> or <code>CREATE_FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>FEDERATED</code> data catalog type is created asynchronously.</p>
   *             </li>
   *          </ul>
   *          <p>Data catalog creation status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code>: Federated data catalog creation in
   *                     progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_COMPLETE</code>: Data catalog creation complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>: Data catalog could not be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED_CLEANUP_IN_PROGRESS</code>: Federated data catalog
   *                     creation failed and is being removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED_CLEANUP_COMPLETE</code>: Federated data catalog creation
   *                     failed and was removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED_CLEANUP_FAILED</code>: Federated data catalog creation
   *                     failed but could not be removed.</p>
   *             </li>
   *          </ul>
   *          <p>Data catalog deletion status:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE_IN_PROGRESS</code>: Federated data catalog deletion in
   *                     progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_COMPLETE</code>: Federated data catalog deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code>: Federated data catalog could not be
   *                     deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: DataCatalogStatus | undefined;

  /**
   * <p>The type of connection for a <code>FEDERATED</code> data catalog (for example,
   *                 <code>REDSHIFT</code>, <code>MYSQL</code>, or <code>SQLSERVER</code>). For
   *             information about individual connectors, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connectors-available.html">Available data source
   *                 connectors</a>.</p>
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * <p>Text of the error that occurred during data catalog creation or deletion.</p>
   * @public
   */
  Error?: string | undefined;
}

/**
 * @public
 */
export interface ListDataCatalogsOutput {
  /**
   * <p>A summary list of data catalogs.</p>
   * @public
   */
  DataCatalogsSummary?: DataCatalogSummary[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of engine versions to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsOutput {
  /**
   * <p>A list of engine versions that are available to choose from.</p>
   * @public
   */
  EngineVersions?: EngineVersion[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
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
   * @public
   */
  ExecutorStateFilter?: ExecutorState | undefined;

  /**
   * <p>The maximum number of executors to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>Contains summary information about an executor.</p>
 * @public
 */
export interface ExecutorsSummary {
  /**
   * <p>The UUID of the executor.</p>
   * @public
   */
  ExecutorId: string | undefined;

  /**
   * <p>The type of executor used for the application (<code>COORDINATOR</code>,
   *                 <code>GATEWAY</code>, or <code>WORKER</code>).</p>
   * @public
   */
  ExecutorType?: ExecutorType | undefined;

  /**
   * <p>The date and time that the executor started.</p>
   * @public
   */
  StartDateTime?: number | undefined;

  /**
   * <p>The date and time that the executor was terminated.</p>
   * @public
   */
  TerminationDateTime?: number | undefined;

  /**
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
   * @public
   */
  ExecutorState?: ExecutorState | undefined;

  /**
   * <p>The smallest unit of compute that a session can request from Athena. Size
   *             is measured in data processing unit (DPU) values, a relative measure of processing
   *             power.</p>
   * @public
   */
  ExecutorSize?: number | undefined;
}

/**
 * @public
 */
export interface ListExecutorsResponse {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Contains summary information about the executor.</p>
   * @public
   */
  ExecutorsSummary?: ExecutorsSummary[] | undefined;
}

/**
 * @public
 */
export interface ListNamedQueriesInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of queries to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the workgroup from which the named queries are being returned. If a
   *             workgroup is not specified, the saved queries for the primary workgroup are
   *             returned.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListNamedQueriesOutput {
  /**
   * <p>The list of unique query IDs.</p>
   * @public
   */
  NamedQueryIds?: string[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A string for searching notebook names.</p>
 * @public
 */
export interface FilterDefinition {
  /**
   * <p>The name of the notebook to search for.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookMetadataInput {
  /**
   * <p>Search filter string.</p>
   * @public
   */
  Filters?: FilterDefinition | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the Spark enabled workgroup to retrieve notebook metadata for.</p>
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookMetadataOutput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of notebook metadata for the specified workgroup.</p>
   * @public
   */
  NotebookMetadataList?: NotebookMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListNotebookSessionsRequest {
  /**
   * <p>The ID of the notebook to list sessions for.</p>
   * @public
   */
  NotebookId: string | undefined;

  /**
   * <p>The maximum number of notebook sessions to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the notebook session ID and notebook session creation time.</p>
 * @public
 */
export interface NotebookSessionSummary {
  /**
   * <p>The notebook session ID.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The time when the notebook session was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotebookSessionsResponse {
  /**
   * <p>A list of the sessions belonging to the notebook.</p>
   * @public
   */
  NotebookSessionsList: NotebookSessionSummary[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPreparedStatementsInput {
  /**
   * <p>The workgroup to list the prepared statements for.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The name and last modified time of the prepared statement.</p>
 * @public
 */
export interface PreparedStatementSummary {
  /**
   * <p>The name of the prepared statement.</p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>The last modified time of the prepared statement.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPreparedStatementsOutput {
  /**
   * <p>The list of prepared statements for the workgroup.</p>
   * @public
   */
  PreparedStatements?: PreparedStatementSummary[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueryExecutionsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of query executions to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the workgroup from which queries are being returned. If a workgroup is not
   *             specified, a list of available query execution IDs for the queries in the primary
   *             workgroup is returned.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListQueryExecutionsOutput {
  /**
   * <p>The unique IDs of each query execution as an array of strings.</p>
   * @public
   */
  QueryExecutionIds?: string[] | undefined;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The workgroup to which the session belongs.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
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
   * @public
   */
  StateFilter?: SessionState | undefined;

  /**
   * <p>The maximum number of sessions to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a session.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>The session description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The engine version used by the session (for example, <code>PySpark engine version
   *                 3</code>).</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>The notebook version.</p>
   * @public
   */
  NotebookVersion?: string | undefined;

  /**
   * <p>Contains information about the session status.</p>
   * @public
   */
  Status?: SessionStatus | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of sessions.</p>
   * @public
   */
  Sessions?: SessionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTableMetadataInput {
  /**
   * <p>The name of the data catalog for which table metadata should be returned.</p>
   * @public
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the database for which table metadata should be returned.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regex filter that pattern-matches table names. If no expression is supplied,
   *             metadata for all tables are listed.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the workgroup for which the metadata is being fetched. Required if
   *             requesting an IAM Identity Center enabled Glue Data Catalog.</p>
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListTableMetadataOutput {
  /**
   * <p>A list of table metadata.</p>
   * @public
   */
  TableMetadataList?: TableMetadata[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>Lists the tags for the resource with the specified ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results for
   *             this request, where the request lists the tags for the resource with the specified
   *             ARN.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request that lists the tags for the
   *             resource.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with the specified resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkGroupsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of workgroups to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary information for the workgroup, which includes its name, state,
 *             description, and the date and time it was created.</p>
 * @public
 */
export interface WorkGroupSummary {
  /**
   * <p>The name of the workgroup.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the workgroup.</p>
   * @public
   */
  State?: WorkGroupState | undefined;

  /**
   * <p>The workgroup description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The workgroup creation date and time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The engine version setting for all queries on the workgroup. Queries on the
   *                 <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine
   *             regardless of this setting.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>The ARN of the IAM Identity Center enabled application associated with the
   *             workgroup.</p>
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkGroupsOutput {
  /**
   * <p>A list of <a>WorkGroupSummary</a> objects that include the names,
   *             descriptions, creation times, and states for each workgroup.</p>
   * @public
   */
  WorkGroups?: WorkGroupSummary[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutCapacityAssignmentConfigurationInput {
  /**
   * <p>The name of the capacity reservation to put a capacity assignment configuration
   *             for.</p>
   * @public
   */
  CapacityReservationName: string | undefined;

  /**
   * <p>The list of assignments for the capacity assignment configuration.</p>
   * @public
   */
  CapacityAssignments: CapacityAssignment[] | undefined;
}

/**
 * @public
 */
export interface PutCapacityAssignmentConfigurationOutput {}

/**
 * <p>Contains configuration information for the calculation.</p>
 * @public
 */
export interface CalculationConfiguration {
  /**
   * <p>A string that contains the code for the calculation.</p>
   * @public
   */
  CodeBlock?: string | undefined;
}

/**
 * @public
 */
export interface StartCalculationExecutionRequest {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>A description of the calculation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Contains configuration information for the calculation.</p>
   *
   * @deprecated
   * @public
   */
  CalculationConfiguration?: CalculationConfiguration | undefined;

  /**
   * <p>A string that contains the code of the calculation. Use this parameter instead of
   *                 <a>CalculationConfiguration$CodeBlock</a>, which is deprecated.</p>
   * @public
   */
  CodeBlock?: string | undefined;

  /**
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
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCalculationExecutionResponse {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId?: string | undefined;

  /**
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
   * @public
   */
  State?: CalculationExecutionState | undefined;
}

/**
 * @public
 */
export interface StartQueryExecutionInput {
  /**
   * <p>The SQL query statements to be executed.</p>
   * @public
   */
  QueryString: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the query is
   *             idempotent (executes only once). If another <code>StartQueryExecution</code> request is
   *             received, the same response is returned and another query is not created. An error is
   *             returned if a parameter, such as <code>QueryString</code>, has changed. A call to
   *                 <code>StartQueryExecution</code> that uses a previous client request token returns
   *             the same <code>QueryExecutionId</code> even if the requester doesn't have permission on
   *             the tables specified in <code>QueryString</code>.</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for users. If you are
   *                 not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The database within which the query executes.</p>
   * @public
   */
  QueryExecutionContext?: QueryExecutionContext | undefined;

  /**
   * <p>Specifies information about where and how to save the results of the query execution.
   *             If the query runs in a workgroup, then workgroup's settings may override query settings.
   *             This affects the query results location. The workgroup settings override is specified in
   *             EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   * @public
   */
  ResultConfiguration?: ResultConfiguration | undefined;

  /**
   * <p>The name of the workgroup in which the query is being started.</p>
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * <p>A list of values for the parameters in a query. The values are applied sequentially to
   *             the parameters in the query in the order in which the parameters occur.</p>
   * @public
   */
  ExecutionParameters?: string[] | undefined;

  /**
   * <p>Specifies the query result reuse behavior for the query.</p>
   * @public
   */
  ResultReuseConfiguration?: ResultReuseConfiguration | undefined;
}

/**
 * @public
 */
export interface StartQueryExecutionOutput {
  /**
   * <p>The unique ID of the query that ran as a result of this request.</p>
   * @public
   */
  QueryExecutionId?: string | undefined;
}

/**
 * <p>The specified session already exists.</p>
 * @public
 */
export class SessionAlreadyExistsException extends __BaseException {
  readonly name: "SessionAlreadyExistsException" = "SessionAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The session description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The workgroup to which the session belongs.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>Contains engine data processing unit (DPU) configuration settings and parameter
   *             mappings.</p>
   * @public
   */
  EngineConfiguration: EngineConfiguration | undefined;

  /**
   * <p>The notebook version. This value is supplied automatically for notebook sessions in
   *             the Athena console and is not required for programmatic session access. The
   *             only valid notebook version is <code>Athena notebook version 1</code>. If
   *             you specify a value for <code>NotebookVersion</code>, you must also specify a value for
   *                 <code>NotebookId</code>. See <a>EngineConfiguration$AdditionalConfigs</a>.</p>
   * @public
   */
  NotebookVersion?: string | undefined;

  /**
   * <p>The idle timeout in minutes for the session.</p>
   * @public
   */
  SessionIdleTimeoutInMinutes?: number | undefined;

  /**
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
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * <p>The session ID.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
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
   * @public
   */
  State?: SessionState | undefined;
}

/**
 * @public
 */
export interface StopCalculationExecutionRequest {
  /**
   * <p>The calculation execution UUID.</p>
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface StopCalculationExecutionResponse {
  /**
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
   * @public
   */
  State?: CalculationExecutionState | undefined;
}

/**
 * @public
 */
export interface StopQueryExecutionInput {
  /**
   * <p>The unique ID of the query execution to stop.</p>
   * @public
   */
  QueryExecutionId?: string | undefined;
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
   * <p>Specifies the ARN of the Athena resource to which tags are to be
   *             added.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A collection of one or more tags, separated by commas, to be added to an Athena resource.</p>
   * @public
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
   * <p>The session ID.</p>
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionResponse {
  /**
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
   * @public
   */
  State?: SessionState | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>Specifies the ARN of the resource from which tags are to be removed.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A comma-separated list of one or more tag keys whose tags are to be removed from the
   *             specified resource.</p>
   * @public
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
   * <p>The new number of requested data processing units.</p>
   * @public
   */
  TargetDpus: number | undefined;

  /**
   * <p>The name of the capacity reservation.</p>
   * @public
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
   * <p>The name of the data catalog to update. The catalog name must be unique for the
   *                 Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at
   *             sign, or hyphen characters. The remainder of the length constraint of 256 is reserved
   *             for use by Athena.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the type of data catalog to update. Specify <code>LAMBDA</code> for a
   *             federated catalog, <code>HIVE</code> for an external hive metastore, or
   *                 <code>GLUE</code> for an Glue Data Catalog.</p>
   * @public
   */
  Type: DataCatalogType | undefined;

  /**
   * <p>New or modified text that describes the data catalog.</p>
   * @public
   */
  Description?: string | undefined;

  /**
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
   * @public
   */
  Parameters?: Record<string, string> | undefined;
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
   * <p>The unique identifier (UUID) of the query.</p>
   * @public
   */
  NamedQueryId: string | undefined;

  /**
   * <p>The name of the query.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The query description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The contents of the query with all query statements.</p>
   * @public
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
   * <p>The ID of the notebook to update.</p>
   * @public
   */
  NotebookId: string | undefined;

  /**
   * <p>The updated content for the notebook.</p>
   * @public
   */
  Payload: string | undefined;

  /**
   * <p>The notebook content type. Currently, the only valid type is
   *             <code>IPYNB</code>.</p>
   * @public
   */
  Type: NotebookType | undefined;

  /**
   * <p>The active notebook session ID. Required if the notebook has an active session.</p>
   * @public
   */
  SessionId?: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * <p>The ID of the notebook to update the metadata for.</p>
   * @public
   */
  NotebookId: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the notebook is
   *             idempotent (executes only once).</p>
   *          <important>
   *             <p>This token is listed as not required because Amazon Web Services SDKs (for example
   *                 the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not
   *                 using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide
   *                 this token or the action will fail.</p>
   *          </important>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The name to update the notebook to.</p>
   * @public
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
   * <p>The name of the prepared statement.</p>
   * @public
   */
  StatementName: string | undefined;

  /**
   * <p>The workgroup for the prepared statement.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>The query string for the prepared statement.</p>
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * <p>The description of the prepared statement.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePreparedStatementOutput {}

/**
 * <p>Updates the configuration for managed query results.</p>
 * @public
 */
export interface ManagedQueryResultsConfigurationUpdates {
  /**
   * <p>If set to true, specifies that Athena manages query results in Athena owned
   *             storage.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>If you encrypt query and calculation results in Athena owned storage, this field
   *             indicates the encryption option (for example, SSE_KMS or CSE_KMS) and key
   *             information.</p>
   * @public
   */
  EncryptionConfiguration?: ManagedQueryResultsEncryptionConfiguration | undefined;

  /**
   * <p>If set to true, it removes workgroup from Athena owned storage. The existing query
   *             results are cleaned up after 24hrs. You must provide query results in location specified
   *             under <code>ResultConfiguration$OutputLocation</code>.</p>
   * @public
   */
  RemoveEncryptionConfiguration?: boolean | undefined;
}

/**
 * <p>The information about the updates in the query results, such as output location and
 *             encryption configuration for the query results.</p>
 * @public
 */
export interface ResultConfigurationUpdates {
  /**
   * <p>The location in Amazon S3 where your query and calculation results are stored,
   *             such as <code>s3://path/to/query/bucket/</code>. If workgroup settings override
   *             client-side settings, then the query uses the location for the query results and the
   *             encryption configuration that are specified for the workgroup. The "workgroup settings
   *             override" is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the
   *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * <p>If set to "true", indicates that the previously-specified query results location (also
   *             known as a client-side setting) for queries in this workgroup should be ignored and set
   *             to null. If set to "false" or not set, and a value is present in the
   *                 <code>OutputLocation</code> in <code>ResultConfigurationUpdates</code> (the
   *             client-side setting), the <code>OutputLocation</code> in the workgroup's
   *                 <code>ResultConfiguration</code> will be updated with the new value. For more
   *             information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   * @public
   */
  RemoveOutputLocation?: boolean | undefined;

  /**
   * <p>The encryption configuration for query and calculation results.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>If set to "true", indicates that the previously-specified encryption configuration
   *             (also known as the client-side setting) for queries in this workgroup should be ignored
   *             and set to null. If set to "false" or not set, and a value is present in the
   *                 <code>EncryptionConfiguration</code> in <code>ResultConfigurationUpdates</code> (the
   *             client-side setting), the <code>EncryptionConfiguration</code> in the workgroup's
   *                 <code>ResultConfiguration</code> will be updated with the new value. For more
   *             information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   * @public
   */
  RemoveEncryptionConfiguration?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by <a>ResultConfiguration$OutputLocation</a>.
   *             If set, Athena uses the value for <code>ExpectedBucketOwner</code> when it
   *             makes Amazon S3 calls to your specified output location. If the
   *                 <code>ExpectedBucketOwner</code>
   *             Amazon Web Services account ID does not match the actual owner of the Amazon S3
   *             bucket, the call fails with a permissions error.</p>
   *          <p>If workgroup settings override client-side settings, then the query uses the
   *                 <code>ExpectedBucketOwner</code> setting that is specified for the workgroup, and
   *             also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>If set to "true", removes the Amazon Web Services account ID previously specified for
   *                 <a>ResultConfiguration$ExpectedBucketOwner</a>. If set to "false" or not
   *             set, and a value is present in the <code>ExpectedBucketOwner</code> in
   *                 <code>ResultConfigurationUpdates</code> (the client-side setting), the
   *                 <code>ExpectedBucketOwner</code> in the workgroup's <code>ResultConfiguration</code>
   *             is updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   * @public
   */
  RemoveExpectedBucketOwner?: boolean | undefined;

  /**
   * <p>The ACL configuration for the query results.</p>
   * @public
   */
  AclConfiguration?: AclConfiguration | undefined;

  /**
   * <p>If set to <code>true</code>, indicates that the previously-specified ACL configuration
   *             for queries in this workgroup should be ignored and set to null. If set to
   *                 <code>false</code> or not set, and a value is present in the
   *                 <code>AclConfiguration</code> of <code>ResultConfigurationUpdates</code>, the
   *                 <code>AclConfiguration</code> in the workgroup's <code>ResultConfiguration</code> is
   *             updated with the new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   * @public
   */
  RemoveAclConfiguration?: boolean | undefined;
}

/**
 * <p>The configuration information that will be updated for this workgroup, which includes
 *             the location in Amazon S3 where query and calculation results are stored, the
 *             encryption option, if any, used for query results, whether the Amazon CloudWatch
 *             Metrics are enabled for the workgroup, whether the workgroup settings override the
 *             client-side settings, and the data usage limit for the amount of bytes scanned per
 *             query, if it is specified.</p>
 * @public
 */
export interface WorkGroupConfigurationUpdates {
  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false" client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   * @public
   */
  EnforceWorkGroupConfiguration?: boolean | undefined;

  /**
   * <p>The result configuration information about the queries in this workgroup that will be
   *             updated. Includes the updated results location and an updated option for encrypting
   *             query results.</p>
   * @public
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates | undefined;

  /**
   * <p>Updates configuration information for managed query results in the workgroup.</p>
   * @public
   */
  ManagedQueryResultsConfigurationUpdates?: ManagedQueryResultsConfigurationUpdates | undefined;

  /**
   * <p>Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.</p>
   * @public
   */
  PublishCloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>The upper limit (cutoff) for the amount of bytes a single query in a workgroup is
   *             allowed to scan.</p>
   * @public
   */
  BytesScannedCutoffPerQuery?: number | undefined;

  /**
   * <p>Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a>
   *          </p>
   * @public
   */
  RemoveBytesScannedCutoffPerQuery?: boolean | undefined;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup
   *             members cannot query data from Requester Pays buckets, and queries that retrieve data
   *             from Requester Pays buckets cause an error. The default is <code>false</code>. For more
   *             information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>
   *             in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   * @public
   */
  RequesterPaysEnabled?: boolean | undefined;

  /**
   * <p>The engine version requested when a workgroup is updated. After the update, all
   *             queries on the workgroup run on the requested engine version. If no value was previously
   *             set, the default is Auto. Queries on the <code>AmazonAthenaPreviewFunctionality</code>
   *             workgroup run on the preview engine regardless of this setting.</p>
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * <p>Removes content encryption configuration from an Apache Spark-enabled Athena workgroup.</p>
   * @public
   */
  RemoveCustomerContentEncryptionConfiguration?: boolean | undefined;

  /**
   * <p>Contains a user defined string in JSON format for a Spark-enabled workgroup.</p>
   * @public
   */
  AdditionalConfiguration?: string | undefined;

  /**
   * <p>The ARN of the execution role used to access user resources for Spark sessions and
   *             Identity Center enabled workgroups. This property applies only to Spark enabled
   *             workgroups and Identity Center enabled workgroups.</p>
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * <p>Specifies the customer managed KMS key that is used to encrypt the user's data stores
   *             in Athena. When an Amazon Web Services managed key is used, this value is
   *             null. This setting does not apply to Athena SQL workgroups.</p>
   * @public
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration | undefined;

  /**
   * <p>Enforces a minimal level of encryption for the workgroup for query and calculation
   *             results that are written to Amazon S3. When enabled, workgroup users can set
   *             encryption only to the minimum level set by the administrator or higher when they submit
   *             queries. This setting does not apply to Spark-enabled workgroups.</p>
   *          <p>The <code>EnforceWorkGroupConfiguration</code> setting takes precedence over the
   *                 <code>EnableMinimumEncryptionConfiguration</code> flag. This means that if
   *                 <code>EnforceWorkGroupConfiguration</code> is true, the
   *                 <code>EnableMinimumEncryptionConfiguration</code> flag is ignored, and the workgroup
   *             configuration for encryption is used.</p>
   * @public
   */
  EnableMinimumEncryptionConfiguration?: boolean | undefined;

  /**
   * <p>Specifies whether Amazon S3 access grants are enabled for query
   *             results.</p>
   * @public
   */
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkGroupInput {
  /**
   * <p>The specified workgroup that will be updated.</p>
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * <p>The workgroup description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Contains configuration updates for an Athena SQL workgroup.</p>
   * @public
   */
  ConfigurationUpdates?: WorkGroupConfigurationUpdates | undefined;

  /**
   * <p>The workgroup state that will be updated for the given workgroup.</p>
   * @public
   */
  State?: WorkGroupState | undefined;
}

/**
 * @public
 */
export interface UpdateWorkGroupOutput {}

/**
 * <p>Stage plan information such as name, identifier, sub plans, and remote sources.</p>
 * @public
 */
export interface QueryStagePlanNode {
  /**
   * <p>Name of the query stage plan that describes the operation this stage is performing as
   *             part of query execution.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Information about the operation this query stage plan node is performing.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>Stage plan information such as name, identifier, sub plans, and remote sources of
   *             child plan nodes/</p>
   * @public
   */
  Children?: QueryStagePlanNode[] | undefined;

  /**
   * <p>Source plan node IDs.</p>
   * @public
   */
  RemoteSources?: string[] | undefined;
}

/**
 * <p>Stage statistics such as input and output rows and bytes, execution time and stage
 *             state. This information also includes substages and the query stage plan.</p>
 * @public
 */
export interface QueryStage {
  /**
   * <p>The identifier for a stage.</p>
   * @public
   */
  StageId?: number | undefined;

  /**
   * <p>State of the stage after query execution.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The number of bytes output from the stage after execution.</p>
   * @public
   */
  OutputBytes?: number | undefined;

  /**
   * <p>The number of rows output from the stage after execution.</p>
   * @public
   */
  OutputRows?: number | undefined;

  /**
   * <p>The number of bytes input into the stage for execution.</p>
   * @public
   */
  InputBytes?: number | undefined;

  /**
   * <p>The number of rows input into the stage for execution.</p>
   * @public
   */
  InputRows?: number | undefined;

  /**
   * <p>Time taken to execute this stage.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>Stage plan information such as name, identifier, sub plans, and source stages.</p>
   * @public
   */
  QueryStagePlan?: QueryStagePlanNode | undefined;

  /**
   * <p>List of sub query stages that form this stage execution plan.</p>
   * @public
   */
  SubStages?: QueryStage[] | undefined;
}

/**
 * <p>The query execution timeline, statistics on input and output rows and bytes, and the
 *             different query stages that form the query execution plan.</p>
 * @public
 */
export interface QueryRuntimeStatistics {
  /**
   * <p>Timeline statistics such as query queue time, planning time, execution time, service
   *             processing time, and total execution time.</p>
   * @public
   */
  Timeline?: QueryRuntimeStatisticsTimeline | undefined;

  /**
   * <p>Statistics such as input rows and bytes read by the query, rows and bytes output by
   *             the query, and the number of rows written by the query.</p>
   * @public
   */
  Rows?: QueryRuntimeStatisticsRows | undefined;

  /**
   * <p>Stage statistics such as input and output rows and bytes, execution time, and stage
   *             state. This information also includes substages and the query stage plan.</p>
   * @public
   */
  OutputStage?: QueryStage | undefined;
}

/**
 * @public
 */
export interface GetQueryRuntimeStatisticsOutput {
  /**
   * <p>Runtime statistics about the query execution.</p>
   * @public
   */
  QueryRuntimeStatistics?: QueryRuntimeStatistics | undefined;
}
