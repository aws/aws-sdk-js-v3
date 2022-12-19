// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AthenaServiceException as __BaseException } from "./AthenaServiceException";

export enum S3AclOption {
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
}

/**
 * <p>Indicates that an Amazon S3 canned ACL should be set to control ownership of
 *             stored query results. When Athena stores query results in Amazon S3,
 *             the canned ACL is set with the <code>x-amz-acl</code> request header. For more
 *             information about S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview">Object Ownership settings</a> in the <i>Amazon S3 User
 *                 Guide</i>.</p>
 */
export interface AclConfiguration {
  /**
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
 * <p>Contains an array of named query IDs.</p>
 */
export interface BatchGetNamedQueryInput {
  /**
   * <p>An array of query IDs.</p>
   */
  NamedQueryIds: string[] | undefined;
}

/**
 * <p>A query, where <code>QueryString</code> contains the SQL statements that make up the
 *             query.</p>
 */
export interface NamedQuery {
  /**
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * <p>The SQL statements that make up the query.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The unique identifier of the query.</p>
   */
  NamedQueryId?: string;

  /**
   * <p>The name of the workgroup that contains the named query.</p>
   */
  WorkGroup?: string;
}

/**
 * <p>Information about a named query ID that could not be processed.</p>
 */
export interface UnprocessedNamedQueryId {
  /**
   * <p>The unique identifier of the named query.</p>
   */
  NamedQueryId?: string;

  /**
   * <p>The error code returned when the processing request for the named query failed, if
   *             applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the processing request for the named query failed, if
   *             applicable.</p>
   */
  ErrorMessage?: string;
}

export interface BatchGetNamedQueryOutput {
  /**
   * <p>Information about the named query IDs submitted.</p>
   */
  NamedQueries?: NamedQuery[];

  /**
   * <p>Information about provided query IDs.</p>
   */
  UnprocessedNamedQueryIds?: UnprocessedNamedQueryId[];
}

/**
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
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
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

export interface BatchGetPreparedStatementInput {
  /**
   * <p>A list of prepared statement names to return.</p>
   */
  PreparedStatementNames: string[] | undefined;

  /**
   * <p>The name of the workgroup to which the prepared statements belong.</p>
   */
  WorkGroup: string | undefined;
}

/**
 * <p>A prepared SQL statement for use with Athena.</p>
 */
export interface PreparedStatement {
  /**
   * <p>The name of the prepared statement.</p>
   */
  StatementName?: string;

  /**
   * <p>The query string for the prepared statement.</p>
   */
  QueryStatement?: string;

  /**
   * <p>The name of the workgroup to which the prepared statement belongs.</p>
   */
  WorkGroupName?: string;

  /**
   * <p>The description of the prepared statement.</p>
   */
  Description?: string;

  /**
   * <p>The last modified time of the prepared statement.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>The name of a prepared statement that could not be returned.</p>
 */
export interface UnprocessedPreparedStatementName {
  /**
   * <p>The name of a prepared statement that could not be returned due to an error.</p>
   */
  StatementName?: string;

  /**
   * <p>The error code returned when the request for the prepared statement failed.</p>
   */
  ErrorCode?: string;

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
   */
  ErrorMessage?: string;
}

export interface BatchGetPreparedStatementOutput {
  /**
   * <p>The list of prepared statements returned.</p>
   */
  PreparedStatements?: PreparedStatement[];

  /**
   * <p>A list of one or more prepared statements that were requested but could not be
   *             returned.</p>
   */
  UnprocessedPreparedStatementNames?: UnprocessedPreparedStatementName[];
}

/**
 * <p>Contains an array of query execution IDs.</p>
 */
export interface BatchGetQueryExecutionInput {
  /**
   * <p>An array of query execution IDs.</p>
   */
  QueryExecutionIds: string[] | undefined;
}

/**
 * <p>The Athena engine version for running queries, or the PySpark engine
 *             version for running sessions.</p>
 */
export interface EngineVersion {
  /**
   * <p>The engine version requested by the user. Possible values are determined by the output
   *             of <code>ListEngineVersions</code>, including Auto. The default is Auto.</p>
   */
  SelectedEngineVersion?: string;

  /**
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
 * <p>The database and data catalog context in which the query execution occurs.</p>
 */
export interface QueryExecutionContext {
  /**
   * <p>The name of the database used in the query execution. The database must exist in the
   *             catalog.</p>
   */
  Database?: string;

  /**
   * <p>The name of the data catalog used in the query execution.</p>
   */
  Catalog?: string;
}

export enum EncryptionOption {
  CSE_KMS = "CSE_KMS",
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3",
}

/**
 * <p>If query results are encrypted in Amazon S3, indicates the encryption option
 *             used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key
 *             information.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (<code>SSE_S3</code>), server-side encryption with KMS-managed keys
   *                 (<code>SSE_KMS</code>), or client-side encryption with KMS-managed keys
   *                 (<code>CSE_KMS</code>) is used.</p>
   *          <p>If a query runs in a workgroup and the workgroup overrides client-side settings, then
   *             the workgroup's setting for encryption is used. It specifies whether query results must
   *             be encrypted, for all queries that run in this workgroup. </p>
   */
  EncryptionOption: EncryptionOption | string | undefined;

  /**
   * <p>For <code>SSE_KMS</code> and <code>CSE_KMS</code>, this is the KMS key ARN or
   *             ID.</p>
   */
  KmsKey?: string;
}

/**
 * <p>The location in Amazon S3 where query results are stored and the encryption
 *             option, if any, used for query results. These are known as "client-side settings". If
 *             workgroup settings override client-side settings, then the query uses the workgroup
 *             settings.</p>
 */
export interface ResultConfiguration {
  /**
   * <p>The location in Amazon S3 where your query results are stored, such as
   *                 <code>s3://path/to/query/bucket/</code>. To run the query, you must specify the
   *             query results location using one of the ways: either for individual queries using either
   *             this setting (client-side), or in the workgroup, using <a>WorkGroupConfiguration</a>. If none of them is set, Athena
   *             issues an error that no output location is provided. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a>. If
   *             workgroup settings override client-side settings, then the query uses the settings
   *             specified for the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;

  /**
   * <p>If query results are encrypted in Amazon S3, indicates the encryption option
   *             used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key information.
   *             This is a client-side setting. If workgroup settings override client-side settings, then
   *             the query uses the encryption configuration that is specified for the workgroup, and
   *             also uses the location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

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
   */
  ExpectedBucketOwner?: string;

  /**
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
 * <p>Specifies whether previous query results are reused, and if so, their maximum age.</p>
 */
export interface ResultReuseByAgeConfiguration {
  /**
   * <p>True if previous query results can be reused when the query is run; otherwise, false. The default is false.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies, in minutes, the maximum age of a previous query result that Athena should consider for reuse. The default is 60.</p>
   */
  MaxAgeInMinutes?: number;
}

/**
 * <p>Specifies the query result reuse behavior for the query.</p>
 */
export interface ResultReuseConfiguration {
  /**
   * <p>Specifies whether previous query results are reused, and if so, their maximum age.</p>
   */
  ResultReuseByAgeConfiguration?: ResultReuseByAgeConfiguration;
}

export enum StatementType {
  DDL = "DDL",
  DML = "DML",
  UTILITY = "UTILITY",
}

/**
 * <p>Contains information about whether the result of a previous query was reused.</p>
 */
export interface ResultReuseInformation {
  /**
   * <p>True if a previous query result was reused; false if the result was generated from a new run of the query.</p>
   */
  ReusedPreviousResult: boolean | undefined;
}

/**
 * <p>The amount of data scanned during the query execution and the amount of time that it
 *             took to execute, and the type of statement that was run.</p>
 */
export interface QueryExecutionStatistics {
  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;

  /**
   * <p>The number of bytes in the data that was queried.</p>
   */
  DataScannedInBytes?: number;

  /**
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
   * <p>The number of milliseconds that Athena took to run the query.</p>
   */
  TotalExecutionTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically
   *             add the query back to the queue.</p>
   */
  QueryQueueTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to plan the query processing
   *             flow. This includes the time spent retrieving table partitions from the data source.
   *             Note that because the query engine performs the query planning, query planning time is a
   *             subset of engine processing time.</p>
   */
  QueryPlanningTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to finalize and publish the
   *             query results after the query engine finished running the query.</p>
   */
  ServiceProcessingTimeInMillis?: number;

  /**
   * <p>Contains information about whether previous query results were reused for the query.</p>
   */
  ResultReuseInformation?: ResultReuseInformation;
}

/**
 * <p>Provides information about an Athena query error. The
 *                 <code>AthenaError</code> feature provides standardized error information to help you
 *             understand failed queries and take steps after a query failure occurs.
 *                 <code>AthenaError</code> includes an <code>ErrorCategory</code> field that specifies
 *             whether the cause of the failed query is due to system error, user error, or other
 *             error.</p>
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
   */
  ErrorCategory?: number;

  /**
   * <p>An integer value that provides specific information about an Athena query
   *             error. For the meaning of specific values, see the <a href="https://docs.aws.amazon.com/athena/latest/ug/error-reference.html#error-reference-error-type-reference">Error Type Reference</a> in the <i>Amazon Athena User
   *                 Guide</i>.</p>
   */
  ErrorType?: number;

  /**
   * <p>True if the query might succeed if resubmitted.</p>
   */
  Retryable?: boolean;

  /**
   * <p>Contains a short description of the error that occurred.</p>
   */
  ErrorMessage?: string;
}

export enum QueryExecutionState {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>The completion date, current state, submission time, and state change reason (if
 *             applicable) for the query execution.</p>
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

  /**
   * <p>The date and time that the query completed.</p>
   */
  CompletionDateTime?: Date;

  /**
   * <p>Provides information about an Athena query error.</p>
   */
  AthenaError?: AthenaError;
}

/**
 * <p>Information about a single instance of a query execution.</p>
 */
export interface QueryExecution {
  /**
   * <p>The unique identifier for each query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * <p>The SQL query statements which the query execution ran.</p>
   */
  Query?: string;

  /**
   * <p>The type of query statement that was run. <code>DDL</code> indicates DDL query
   *             statements. <code>DML</code> indicates DML (Data Manipulation Language) query
   *             statements, such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code> indicates
   *             query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>, or
   *                 <code>DESCRIBE TABLE</code>.</p>
   */
  StatementType?: StatementType | string;

  /**
   * <p>The location in Amazon S3 where query results were stored and the encryption
   *             option, if any, used for query results. These are known as "client-side settings". If
   *             workgroup settings override client-side settings, then the query uses the location for
   *             the query results and the encryption configuration that are specified for the
   *             workgroup.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>Specifies the query result reuse behavior that was used for the query.</p>
   */
  ResultReuseConfiguration?: ResultReuseConfiguration;

  /**
   * <p>The database in which the query execution occurred.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * <p>The completion date, current state, submission time, and state change reason (if
   *             applicable) for the query execution.</p>
   */
  Status?: QueryExecutionStatus;

  /**
   * <p>Query execution statistics, such as the amount of data scanned, the amount of time
   *             that the query took to process, and the type of statement that was run.</p>
   */
  Statistics?: QueryExecutionStatistics;

  /**
   * <p>The name of the workgroup in which the query ran.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The engine version that executed the query.</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * <p>A list of values for the parameters in a query. The values are applied sequentially to
   *             the parameters in the query in the order in which the parameters occur.</p>
   */
  ExecutionParameters?: string[];
}

/**
 * <p>Describes a query execution that failed to process.</p>
 */
export interface UnprocessedQueryExecutionId {
  /**
   * <p>The unique identifier of the query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * <p>The error code returned when the query execution failed to process, if
   *             applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the query execution failed to process, if
   *             applicable.</p>
   */
  ErrorMessage?: string;
}

export interface BatchGetQueryExecutionOutput {
  /**
   * <p>Information about a query execution.</p>
   */
  QueryExecutions?: QueryExecution[];

  /**
   * <p>Information about the query executions that failed to run.</p>
   */
  UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];
}

/**
 * <p>A label that you assign to a resource. In Athena, a resource can be a
 *             workgroup or data catalog. Each tag consists of a key and an optional value, both of
 *             which you define. For example, you can use tags to categorize Athena
 *             workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of
 *             tag keys to make it easier to search and filter workgroups or data catalogs in your
 *             account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode
 *             characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use
 *             letters and numbers representable in UTF-8, and the following characters: + - = . _ : /
 *             @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you
 *             specify more than one tag, separate them by commas. </p>
 */
export interface Tag {
  /**
   * <p>A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can
   *             use letters and numbers representable in UTF-8, and the following characters: + - = . _
   *             : / @. Tag keys are case-sensitive and must be unique per resource. </p>
   */
  Key?: string;

  /**
   * <p>A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You
   *             can use letters and numbers representable in UTF-8, and the following characters: + - =
   *             . _ : / @. Tag values are case-sensitive. </p>
   */
  Value?: string;
}

export enum DataCatalogType {
  GLUE = "GLUE",
  HIVE = "HIVE",
  LAMBDA = "LAMBDA",
}

export interface CreateDataCatalogInput {
  /**
   * <p>The name of the data catalog to create. The catalog name must be unique for the
   *                 Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at
   *             sign, or hyphen characters. The remainder of the length constraint of 256 is reserved
   *             for use by Athena.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an
   *                 Glue Data Catalog.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * <p>A description of the data catalog to be created.</p>
   */
  Description?: string;

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
   * <p>A list of comma separated tags to add to the data catalog that is created.</p>
   */
  Tags?: Tag[];
}

export interface CreateDataCatalogOutput {}

export interface CreateNamedQueryInput {
  /**
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * <p>The contents of the query with all query statements.</p>
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
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the workgroup in which the named query is being created.</p>
   */
  WorkGroup?: string;
}

export interface CreateNamedQueryOutput {
  /**
   * <p>The unique ID of the query.</p>
   */
  NamedQueryId?: string;
}

export interface CreateNotebookInput {
  /**
   * <p>The name of the Spark enabled workgroup in which the notebook will be created.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>The name of the <code>ipynb</code> file to be created in the Spark workgroup, without
   *             the <code>.ipynb</code> extension.</p>
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
   */
  ClientRequestToken?: string;
}

export interface CreateNotebookOutput {
  /**
   * <p>A unique identifier for the notebook.</p>
   */
  NotebookId?: string;
}

export enum ThrottleReason {
  CONCURRENT_QUERY_LIMIT_EXCEEDED = "CONCURRENT_QUERY_LIMIT_EXCEEDED",
}

/**
 * <p>Indicates that the request was throttled.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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

export interface CreatePreparedStatementInput {
  /**
   * <p>The name of the prepared statement.</p>
   */
  StatementName: string | undefined;

  /**
   * <p>The name of the workgroup to which the prepared statement belongs.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>The query string for the prepared statement.</p>
   */
  QueryStatement: string | undefined;

  /**
   * <p>The description of the prepared statement.</p>
   */
  Description?: string;
}

export interface CreatePreparedStatementOutput {}

export interface CreatePresignedNotebookUrlRequest {
  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

export interface CreatePresignedNotebookUrlResponse {
  /**
   * <p>The URL of the notebook. The URL includes the authentication token and notebook file
   *             name and points directly to the opened notebook.</p>
   */
  NotebookUrl: string | undefined;

  /**
   * <p>The authentication token for the notebook.</p>
   */
  AuthToken: string | undefined;

  /**
   * <p>The UTC epoch time when the authentication token expires.</p>
   */
  AuthTokenExpirationTime: number | undefined;
}

/**
 * <p>A resource, such as a workgroup, was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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
 * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena.</p>
 */
export interface CustomerContentEncryptionConfiguration {
  /**
   * <p>The KMS key that is used to encrypt the user's data stores in Athena.</p>
   */
  KmsKey: string | undefined;
}

/**
 * <p>The configuration of the workgroup, which includes the location in Amazon S3
 *             where query results are stored, the encryption option, if any, used for query results,
 *             whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether
 *             workgroup settings override query settings, and the data usage limits for the amount of
 *             data scanned per query or per workgroup. The workgroup settings override is specified in
 *                 <code>EnforceWorkGroupConfiguration</code> (true/false) in the
 *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. </p>
 */
export interface WorkGroupConfiguration {
  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3
   *             where query results are stored and the encryption option, if any, used for query
   *             results. To run the query, you must specify the query results location using one of the
   *             ways: either in the workgroup using this setting, or for individual queries
   *             (client-side), using <a>ResultConfiguration$OutputLocation</a>. If none of
   *             them is set, Athena issues an error that no output location is provided. For
   *             more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false", client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The upper data usage limit (cutoff) for the amount of bytes a single query in a
   *             workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
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
   * <p>The engine version that all queries running on the workgroup use. Queries on the
   *                 <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine
   *             regardless of this setting.</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * <p>Specifies a user defined JSON string that is passed to the notebook engine.</p>
   */
  AdditionalConfiguration?: string;

  /**
   * <p>Role used in a notebook session for accessing the user's resources.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena.</p>
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
}

export interface CreateWorkGroupInput {
  /**
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * <p>Contains configuration information for creating an Athena SQL workgroup,
   *             which includes the location in Amazon S3 where query results are stored, the
   *             encryption configuration, if any, used for encrypting query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the limit for the amount of
   *             bytes scanned (cutoff) per query, if it is specified, and whether workgroup's settings
   *             (specified with <code>EnforceWorkGroupConfiguration</code>) in the
   *                 <code>WorkGroupConfiguration</code> override client-side settings. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>A list of comma separated tags to add to the workgroup that is created.</p>
   */
  Tags?: Tag[];
}

export interface CreateWorkGroupOutput {}

export interface DeleteDataCatalogInput {
  /**
   * <p>The name of the data catalog to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteDataCatalogOutput {}

export interface DeleteNamedQueryInput {
  /**
   * <p>The unique ID of the query to delete.</p>
   */
  NamedQueryId?: string;
}

export interface DeleteNamedQueryOutput {}

export interface DeleteNotebookInput {
  /**
   * <p>The ID of the notebook to delete.</p>
   */
  NotebookId: string | undefined;
}

export interface DeleteNotebookOutput {}

export interface DeletePreparedStatementInput {
  /**
   * <p>The name of the prepared statement to delete.</p>
   */
  StatementName: string | undefined;

  /**
   * <p>The workgroup to which the statement to be deleted belongs.</p>
   */
  WorkGroup: string | undefined;
}

export interface DeletePreparedStatementOutput {}

export interface DeleteWorkGroupInput {
  /**
   * <p>The unique name of the workgroup to delete.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>The option to delete the workgroup and its contents even if the workgroup contains any
   *             named queries or query executions.</p>
   */
  RecursiveDeleteOption?: boolean;
}

export interface DeleteWorkGroupOutput {}

export interface ExportNotebookInput {
  /**
   * <p>The ID of the notebook to export.</p>
   */
  NotebookId: string | undefined;
}

export enum NotebookType {
  IPYNB = "IPYNB",
}

/**
 * <p>Contains metadata for notebook, including the notebook name, ID, workgroup, and time
 *             created.</p>
 */
export interface NotebookMetadata {
  /**
   * <p>The notebook ID.</p>
   */
  NotebookId?: string;

  /**
   * <p>The name of the notebook.</p>
   */
  Name?: string;

  /**
   * <p>The name of the Spark enabled workgroup to which the notebook belongs.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The time when the notebook was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The type of notebook. Currently, the only valid type is <code>IPYNB</code>.</p>
   */
  Type?: NotebookType | string;

  /**
   * <p>The time when the notebook was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface ExportNotebookOutput {
  /**
   * <p>The notebook metadata, including notebook ID, notebook name, and workgroup
   *             name.</p>
   */
  NotebookMetadata?: NotebookMetadata;

  /**
   * <p>The content of the exported notebook.</p>
   */
  Payload?: string;
}

export interface GetCalculationExecutionRequest {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

/**
 * <p>Contains information about an application-specific calculation result.</p>
 */
export interface CalculationResult {
  /**
   * <p>The Amazon S3 location of the <code>stdout</code> file for the calculation.</p>
   */
  StdOutS3Uri?: string;

  /**
   * <p>The Amazon S3 location of the <code>stderr</code> error messages file for the
   *             calculation.</p>
   */
  StdErrorS3Uri?: string;

  /**
   * <p>The Amazon S3 location of the folder for the calculation results.</p>
   */
  ResultS3Uri?: string;

  /**
   * <p>The data format of the calculation result.</p>
   */
  ResultType?: string;
}

/**
 * <p>Contains statistics for a notebook calculation.</p>
 */
export interface CalculationStatistics {
  /**
   * <p>The data processing unit execution time in milliseconds for the calculation.</p>
   */
  DpuExecutionInMillis?: number;

  /**
   * <p>The progress of the calculation.</p>
   */
  Progress?: string;
}

export enum CalculationExecutionState {
  CANCELED = "CANCELED",
  CANCELING = "CANCELING",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  CREATING = "CREATING",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

/**
 * <p>Contains information about the status of a notebook calculation.</p>
 */
export interface CalculationStatus {
  /**
   * <p>The date and time the calculation was submitted for processing.</p>
   */
  SubmissionDateTime?: Date;

  /**
   * <p>The date and time the calculation completed processing.</p>
   */
  CompletionDateTime?: Date;

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
   */
  State?: CalculationExecutionState | string;

  /**
   * <p>The reason for the calculation state change (for example, the calculation was canceled
   *             because the session was terminated).</p>
   */
  StateChangeReason?: string;
}

export interface GetCalculationExecutionResponse {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId?: string;

  /**
   * <p>The session ID that the calculation ran in.</p>
   */
  SessionId?: string;

  /**
   * <p>The description of the calculation execution.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon S3 location in which calculation results are stored.</p>
   */
  WorkingDirectory?: string;

  /**
   * <p>Contains information about the status of the calculation.</p>
   */
  Status?: CalculationStatus;

  /**
   * <p>Contains information about the data processing unit (DPU) execution time and progress.
   *             This field is populated only when statistics are available.</p>
   */
  Statistics?: CalculationStatistics;

  /**
   * <p>Contains result information. This field is populated only if the calculation is
   *             completed.</p>
   */
  Result?: CalculationResult;
}

export interface GetCalculationExecutionCodeRequest {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

export interface GetCalculationExecutionCodeResponse {
  /**
   * <p>A pre-signed URL to the code that executed the calculation.</p>
   */
  CodeBlock?: string;
}

export interface GetCalculationExecutionStatusRequest {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

export interface GetCalculationExecutionStatusResponse {
  /**
   * <p>Contains information about the calculation execution status.</p>
   */
  Status?: CalculationStatus;

  /**
   * <p>Contains information about the DPU execution time and progress.</p>
   */
  Statistics?: CalculationStatistics;
}

export interface GetDatabaseInput {
  /**
   * <p>The name of the data catalog that contains the database to return.</p>
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the database to return.</p>
   */
  DatabaseName: string | undefined;
}

/**
 * <p>Contains metadata information for a database in a data catalog.</p>
 */
export interface Database {
  /**
   * <p>The name of the database.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the database.</p>
   */
  Description?: string;

  /**
   * <p>A set of custom key/value pairs.</p>
   */
  Parameters?: Record<string, string>;
}

export interface GetDatabaseOutput {
  /**
   * <p>The database returned.</p>
   */
  Database?: Database;
}

/**
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

export interface GetDataCatalogInput {
  /**
   * <p>The name of the data catalog to return.</p>
   */
  Name: string | undefined;
}

/**
 * <p>Contains information about a data catalog in an Amazon Web Services account.</p>
 */
export interface DataCatalog {
  /**
   * <p>The name of the data catalog. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign,
   *             or hyphen characters. The remainder of the length constraint of 256 is reserved for use
   *             by Athena.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the data catalog.</p>
   */
  Description?: string;

  /**
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>HIVE</code> for an external hive metastore, or <code>GLUE</code> for an
   *                 Glue Data Catalog.</p>
   */
  Type: DataCatalogType | string | undefined;

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

export interface GetDataCatalogOutput {
  /**
   * <p>The data catalog returned.</p>
   */
  DataCatalog?: DataCatalog;
}

export interface GetNamedQueryInput {
  /**
   * <p>The unique ID of the query. Use <a>ListNamedQueries</a> to get query
   *             IDs.</p>
   */
  NamedQueryId: string | undefined;
}

export interface GetNamedQueryOutput {
  /**
   * <p>Information about the query.</p>
   */
  NamedQuery?: NamedQuery;
}

export interface GetNotebookMetadataInput {
  /**
   * <p>The ID of the notebook whose metadata is to be retrieved.</p>
   */
  NotebookId: string | undefined;
}

export interface GetNotebookMetadataOutput {
  /**
   * <p>The metadata that is returned for the specified notebook ID.</p>
   */
  NotebookMetadata?: NotebookMetadata;
}

export interface GetPreparedStatementInput {
  /**
   * <p>The name of the prepared statement to retrieve.</p>
   */
  StatementName: string | undefined;

  /**
   * <p>The workgroup to which the statement to be retrieved belongs.</p>
   */
  WorkGroup: string | undefined;
}

export interface GetPreparedStatementOutput {
  /**
   * <p>The name of the prepared statement that was retrieved.</p>
   */
  PreparedStatement?: PreparedStatement;
}

export interface GetQueryExecutionInput {
  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

export interface GetQueryExecutionOutput {
  /**
   * <p>Information about the query execution.</p>
   */
  QueryExecution?: QueryExecution;
}

export interface GetQueryResultsInput {
  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results (rows) to return in this request.</p>
   */
  MaxResults?: number;
}

export enum ColumnNullable {
  NOT_NULL = "NOT_NULL",
  NULLABLE = "NULLABLE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Information about the columns in a query execution result.</p>
 */
export interface ColumnInfo {
  /**
   * <p>The catalog to which the query results belong.</p>
   */
  CatalogName?: string;

  /**
   * <p>The schema name (database name) to which the query results belong.</p>
   */
  SchemaName?: string;

  /**
   * <p>The table name for the query results.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the column.</p>
   */
  Name: string | undefined;

  /**
   * <p>A column label.</p>
   */
  Label?: string;

  /**
   * <p>The data type of the column.</p>
   */
  Type: string | undefined;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38.
   *             For performance reasons, we recommend up to 18 digits.</p>
   */
  Precision?: number;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits in the
   *             fractional part of the value. Defaults to 0.</p>
   */
  Scale?: number;

  /**
   * <p>Indicates the column's nullable status.</p>
   */
  Nullable?: ColumnNullable | string;

  /**
   * <p>Indicates whether values in the column are case-sensitive.</p>
   */
  CaseSensitive?: boolean;
}

/**
 * <p>The metadata that describes the column structure and data types of a table of query
 *             results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.</p>
 */
export interface ResultSetMetadata {
  /**
   * <p>Information about the columns returned in a query result metadata.</p>
   */
  ColumnInfo?: ColumnInfo[];
}

/**
 * <p>A piece of data (a field in the table).</p>
 */
export interface Datum {
  /**
   * <p>The value of the datum.</p>
   */
  VarCharValue?: string;
}

/**
 * <p>The rows that make up a query result table.</p>
 */
export interface Row {
  /**
   * <p>The data that populates a row in a query result table.</p>
   */
  Data?: Datum[];
}

/**
 * <p>The metadata and rows that make up a query result set. The metadata describes the
 *             column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.</p>
 */
export interface ResultSet {
  /**
   * <p>The rows in the table.</p>
   */
  Rows?: Row[];

  /**
   * <p>The metadata that describes the column structure and data types of a table of query
   *             results.</p>
   */
  ResultSetMetadata?: ResultSetMetadata;
}

export interface GetQueryResultsOutput {
  /**
   * <p>The number of rows inserted with a <code>CREATE TABLE AS SELECT</code> statement.
   *         </p>
   */
  UpdateCount?: number;

  /**
   * <p>The results of the query execution.</p>
   */
  ResultSet?: ResultSet;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface GetQueryRuntimeStatisticsInput {
  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

/**
 * <p>Statistics such as input rows and bytes read by the query, rows and bytes output by
 *             the query, and the number of rows written by the query.</p>
 */
export interface QueryRuntimeStatisticsRows {
  /**
   * <p>The number of rows read to execute the query.</p>
   */
  InputRows?: number;

  /**
   * <p>The number of bytes read to execute the query.</p>
   */
  InputBytes?: number;

  /**
   * <p>The number of bytes returned by the query.</p>
   */
  OutputBytes?: number;

  /**
   * <p>The number of rows returned by the query.</p>
   */
  OutputRows?: number;
}

/**
 * <p>Timeline statistics such as query queue time, planning time, execution time, service
 *             processing time, and total execution time.</p>
 */
export interface QueryRuntimeStatisticsTimeline {
  /**
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically
   *             add the query back to the queue.</p>
   */
  QueryQueueTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to plan the query processing
   *             flow. This includes the time spent retrieving table partitions from the data source.
   *             Note that because the query engine performs the query planning, query planning time is a
   *             subset of engine processing time.</p>
   */
  QueryPlanningTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to finalize and publish the
   *             query results after the query engine finished running the query.</p>
   */
  ServiceProcessingTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to run the query.</p>
   */
  TotalExecutionTimeInMillis?: number;
}

export interface GetSessionRequest {
  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

/**
 * <p>Contains data processing unit (DPU) configuration settings and parameter mappings for
 *             a notebook engine.</p>
 */
export interface EngineConfiguration {
  /**
   * <p>The number of DPUs to use for the coordinator. A coordinator is a special executor
   *             that orchestrates processing work and manages other executors in a notebook
   *             session.</p>
   */
  CoordinatorDpuSize?: number;

  /**
   * <p>The maximum number of DPUs that can run concurrently.</p>
   */
  MaxConcurrentDpus: number | undefined;

  /**
   * <p>The default number of DPUs to use for executors. An executor is the smallest unit of
   *             compute that a notebook session can request from Athena.</p>
   */
  DefaultExecutorDpuSize?: number;

  /**
   * <p>Contains additional notebook engine <code>MAP<string, string></code> parameter
   *             mappings in the form of key-value pairs. To specify an Amazon S3 URI that the
   *             Jupyter server will download and serve, specify a value for the <a>StartSessionRequest$NotebookVersion</a> field, and then add a key named
   *                 <code>NotebookFileURI</code> to <code>AdditionalConfigs</code> that has value of the
   *                 Amazon S3 URI.</p>
   */
  AdditionalConfigs?: Record<string, string>;
}

/**
 * <p>Contains session configuration information.</p>
 */
export interface SessionConfiguration {
  /**
   * <p>The ARN of the execution role used for the session.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The Amazon S3 location that stores information for the notebook.</p>
   */
  WorkingDirectory?: string;

  /**
   * <p>The idle timeout in seconds for the session.</p>
   */
  IdleTimeoutSeconds?: number;

  /**
   * <p>If query results are encrypted in Amazon S3, indicates the encryption option
   *             used (for example, <code>SSE_KMS</code> or <code>CSE_KMS</code>) and key
   *             information.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

/**
 * <p>Contains statistics for a notebook session.</p>
 */
export interface SessionStatistics {
  /**
   * <p>The data processing unit execution time for a session in milliseconds.</p>
   */
  DpuExecutionInMillis?: number;
}

export enum SessionState {
  BUSY = "BUSY",
  CREATED = "CREATED",
  CREATING = "CREATING",
  DEGRADED = "DEGRADED",
  FAILED = "FAILED",
  IDLE = "IDLE",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

/**
 * <p>Contains information about the status of a notebook session.</p>
 */
export interface SessionStatus {
  /**
   * <p>The date and time that the session started.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The most recent date and time that the session was modified.</p>
   */
  LastModifiedDateTime?: Date;

  /**
   * <p>The date and time that the session ended.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>The date and time starting at which the session became idle. Can be empty if the
   *             session is not currently idle.</p>
   */
  IdleSinceDateTime?: Date;

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
   */
  State?: SessionState | string;

  /**
   * <p>The reason for the session state change (for example, canceled because the session was
   *             terminated).</p>
   */
  StateChangeReason?: string;
}

export interface GetSessionResponse {
  /**
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * <p>The session description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup to which the session belongs.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The engine version used by the session (for example, <code>PySpark engine version
   *                 3</code>). You can get a list of engine versions by calling <a>ListEngineVersions</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Contains engine configuration information like DPU usage.</p>
   */
  EngineConfiguration?: EngineConfiguration;

  /**
   * <p>The notebook version.</p>
   */
  NotebookVersion?: string;

  /**
   * <p>Contains the workgroup configuration information used by the session.</p>
   */
  SessionConfiguration?: SessionConfiguration;

  /**
   * <p>Contains information about the status of the session.</p>
   */
  Status?: SessionStatus;

  /**
   * <p>Contains the DPU execution time.</p>
   */
  Statistics?: SessionStatistics;
}

export interface GetSessionStatusRequest {
  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

export interface GetSessionStatusResponse {
  /**
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * <p>Contains information about the status of the session.</p>
   */
  Status?: SessionStatus;
}

export interface GetTableMetadataInput {
  /**
   * <p>The name of the data catalog that contains the database and table metadata to
   *             return.</p>
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the database that contains the table metadata to return.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which metadata is returned.</p>
   */
  TableName: string | undefined;
}

/**
 * <p>Contains metadata for a column in a table.</p>
 */
export interface Column {
  /**
   * <p>The name of the column.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the column.</p>
   */
  Type?: string;

  /**
   * <p>Optional information about the column.</p>
   */
  Comment?: string;
}

/**
 * <p>Contains metadata for a table.</p>
 */
export interface TableMetadata {
  /**
   * <p>The name of the table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that the table was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The last time the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The type of table. In Athena, only <code>EXTERNAL_TABLE</code> is
   *             supported.</p>
   */
  TableType?: string;

  /**
   * <p>A list of the columns in the table.</p>
   */
  Columns?: Column[];

  /**
   * <p>A list of the partition keys in the table.</p>
   */
  PartitionKeys?: Column[];

  /**
   * <p>A set of custom key/value pairs for table properties.</p>
   */
  Parameters?: Record<string, string>;
}

export interface GetTableMetadataOutput {
  /**
   * <p>An object that contains table metadata.</p>
   */
  TableMetadata?: TableMetadata;
}

export interface GetWorkGroupInput {
  /**
   * <p>The name of the workgroup.</p>
   */
  WorkGroup: string | undefined;
}

export enum WorkGroupState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
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
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The state of the workgroup: ENABLED or DISABLED.</p>
   */
  State?: WorkGroupState | string;

  /**
   * <p>The configuration of the workgroup, which includes the location in Amazon S3
   *             where query results are stored, the encryption configuration, if any, used for query
   *             results; whether the Amazon CloudWatch Metrics are enabled for the workgroup;
   *             whether workgroup settings override client-side settings; and the data usage limits for
   *             the amount of data scanned per query or per workgroup. The workgroup settings override
   *             is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the
   *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the workgroup was created.</p>
   */
  CreationTime?: Date;
}

export interface GetWorkGroupOutput {
  /**
   * <p>Information about the workgroup.</p>
   */
  WorkGroup?: WorkGroup;
}

export interface ImportNotebookInput {
  /**
   * <p>The name of the Spark enabled workgroup to import the notebook to.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>The name of the notebook to import.</p>
   */
  Name: string | undefined;

  /**
   * <p>The notebook content to be imported.</p>
   */
  Payload: string | undefined;

  /**
   * <p>The notebook content type. Currently, the only valid type is
   *             <code>IPYNB</code>.</p>
   */
  Type: NotebookType | string | undefined;

  /**
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

export interface ImportNotebookOutput {
  /**
   * <p>The ID of the notebook to import.</p>
   */
  NotebookId?: string;
}

export interface ListApplicationDPUSizesInput {
  /**
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the application runtime IDs and their supported DPU sizes.</p>
 */
export interface ApplicationDPUSizes {
  /**
   * <p>The name of the supported application runtime (for example, <code>Jupyter
   *             1.0</code>).</p>
   */
  ApplicationRuntimeId?: string;

  /**
   * <p>A list of the supported DPU sizes that the application runtime supports.</p>
   */
  SupportedDPUSizes?: number[];
}

export interface ListApplicationDPUSizesOutput {
  /**
   * <p>A list of the supported DPU sizes that the application runtime supports.</p>
   */
  ApplicationDPUSizes?: ApplicationDPUSizes[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface ListCalculationExecutionsRequest {
  /**
   * <p>The session ID.</p>
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
   */
  StateFilter?: CalculationExecutionState | string;

  /**
   * <p>The maximum number of calculation executions to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Summary information for a notebook calculation.</p>
 */
export interface CalculationSummary {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId?: string;

  /**
   * <p>A description of the calculation.</p>
   */
  Description?: string;

  /**
   * <p>Contains information about the status of the calculation.</p>
   */
  Status?: CalculationStatus;
}

export interface ListCalculationExecutionsResponse {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <a>CalculationSummary</a> objects.</p>
   */
  Calculations?: CalculationSummary[];
}

export interface ListDatabasesInput {
  /**
   * <p>The name of the data catalog that contains the databases to return.</p>
   */
  CatalogName: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export interface ListDatabasesOutput {
  /**
   * <p>A list of databases from a data catalog.</p>
   */
  DatabaseList?: Database[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface ListDataCatalogsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of data catalogs to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The summary information for the data catalog, which includes its name and type.</p>
 */
export interface DataCatalogSummary {
  /**
   * <p>The name of the data catalog. The catalog name is unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign,
   *             or hyphen characters. The remainder of the length constraint of 256 is reserved for use
   *             by Athena.</p>
   */
  CatalogName?: string;

  /**
   * <p>The data catalog type.</p>
   */
  Type?: DataCatalogType | string;
}

export interface ListDataCatalogsOutput {
  /**
   * <p>A summary list of data catalogs.</p>
   */
  DataCatalogsSummary?: DataCatalogSummary[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface ListEngineVersionsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of engine versions to return in this request.</p>
   */
  MaxResults?: number;
}

export interface ListEngineVersionsOutput {
  /**
   * <p>A list of engine versions that are available to choose from.</p>
   */
  EngineVersions?: EngineVersion[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export enum ExecutorState {
  CREATED = "CREATED",
  CREATING = "CREATING",
  FAILED = "FAILED",
  REGISTERED = "REGISTERED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

export interface ListExecutorsRequest {
  /**
   * <p>The session ID.</p>
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
   */
  ExecutorStateFilter?: ExecutorState | string;

  /**
   * <p>The maximum number of executors to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export enum ExecutorType {
  COORDINATOR = "COORDINATOR",
  GATEWAY = "GATEWAY",
  WORKER = "WORKER",
}

/**
 * <p>Contains summary information about an executor.</p>
 */
export interface ExecutorsSummary {
  /**
   * <p>The UUID of the executor.</p>
   */
  ExecutorId: string | undefined;

  /**
   * <p>The type of executor used for the application (<code>COORDINATOR</code>,
   *                 <code>GATEWAY</code>, or <code>WORKER</code>).</p>
   */
  ExecutorType?: ExecutorType | string;

  /**
   * <p>The date and time that the executor started.</p>
   */
  StartDateTime?: number;

  /**
   * <p>The date and time that the executor was terminated.</p>
   */
  TerminationDateTime?: number;

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
   */
  ExecutorState?: ExecutorState | string;

  /**
   * <p>The smallest unit of compute that a session can request from Athena. Size
   *             is measured in data processing unit (DPU) values, a relative measure of processing
   *             power.</p>
   */
  ExecutorSize?: number;
}

export interface ListExecutorsResponse {
  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>Contains summary information about the executor.</p>
   */
  ExecutorsSummary?: ExecutorsSummary[];
}

export interface ListNamedQueriesInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of queries to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the workgroup from which the named queries are being returned. If a
   *             workgroup is not specified, the saved queries for the primary workgroup are
   *             returned.</p>
   */
  WorkGroup?: string;
}

export interface ListNamedQueriesOutput {
  /**
   * <p>The list of unique query IDs.</p>
   */
  NamedQueryIds?: string[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * <p>A string for searching notebook names.</p>
 */
export interface FilterDefinition {
  /**
   * <p>The name of the notebook to search for.</p>
   */
  Name?: string;
}

export interface ListNotebookMetadataInput {
  /**
   * <p>Search filter string.</p>
   */
  Filters?: FilterDefinition;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the Spark enabled workgroup to retrieve notebook metadata for.</p>
   */
  WorkGroup: string | undefined;
}

export interface ListNotebookMetadataOutput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of notebook metadata for the specified workgroup.</p>
   */
  NotebookMetadataList?: NotebookMetadata[];
}

export interface ListNotebookSessionsRequest {
  /**
   * <p>The ID of the notebook to list sessions for.</p>
   */
  NotebookId: string | undefined;

  /**
   * <p>The maximum number of notebook sessions to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the notebook session ID and notebook session creation time.</p>
 */
export interface NotebookSessionSummary {
  /**
   * <p>The notebook session ID.</p>
   */
  SessionId?: string;

  /**
   * <p>The time when the notebook session was created.</p>
   */
  CreationTime?: Date;
}

export interface ListNotebookSessionsResponse {
  /**
   * <p>A list of the sessions belonging to the notebook.</p>
   */
  NotebookSessionsList: NotebookSessionSummary[] | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface ListPreparedStatementsInput {
  /**
   * <p>The workgroup to list the prepared statements for.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The name and last modified time of the prepared statement.</p>
 */
export interface PreparedStatementSummary {
  /**
   * <p>The name of the prepared statement.</p>
   */
  StatementName?: string;

  /**
   * <p>The last modified time of the prepared statement.</p>
   */
  LastModifiedTime?: Date;
}

export interface ListPreparedStatementsOutput {
  /**
   * <p>The list of prepared statements for the workgroup.</p>
   */
  PreparedStatements?: PreparedStatementSummary[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface ListQueryExecutionsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of query executions to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the workgroup from which queries are being returned. If a workgroup is not
   *             specified, a list of available query execution IDs for the queries in the primary
   *             workgroup is returned.</p>
   */
  WorkGroup?: string;
}

export interface ListQueryExecutionsOutput {
  /**
   * <p>The unique IDs of each query execution as an array of strings.</p>
   */
  QueryExecutionIds?: string[];

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

export interface ListSessionsRequest {
  /**
   * <p>The workgroup to which the session belongs.</p>
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
   */
  StateFilter?: SessionState | string;

  /**
   * <p>The maximum number of sessions to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains summary information about a notebook session.</p>
 */
export interface SessionSummary {
  /**
   * <p>The session ID.</p>
   */
  SessionId?: string;

  /**
   * <p>The session description.</p>
   */
  Description?: string;

  /**
   * <p>The engine version used by the session (for example, <code>PySpark engine version
   *                 3</code>).</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * <p>The notebook version.</p>
   */
  NotebookVersion?: string;

  /**
   * <p>Contains information about the session status.</p>
   */
  Status?: SessionStatus;
}

export interface ListSessionsResponse {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of sessions.</p>
   */
  Sessions?: SessionSummary[];
}

export interface ListTableMetadataInput {
  /**
   * <p>The name of the data catalog for which table metadata should be returned.</p>
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the database for which table metadata should be returned.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regex filter that pattern-matches table names. If no expression is supplied,
   *             metadata for all tables are listed.</p>
   */
  Expression?: string;

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export interface ListTableMetadataOutput {
  /**
   * <p>A list of table metadata.</p>
   */
  TableMetadataList?: TableMetadata[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the NextToken from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceInput {
  /**
   * <p>Lists the tags for the resource with the specified ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results for
   *             this request, where the request lists the tags for the resource with the specified
   *             ARN.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned per request that lists the tags for the
   *             resource.</p>
   */
  MaxResults?: number;
}

export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags associated with the specified resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

export interface ListWorkGroupsInput {
  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workgroups to return in this request.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The summary information for the workgroup, which includes its name, state,
 *             description, and the date and time it was created.</p>
 */
export interface WorkGroupSummary {
  /**
   * <p>The name of the workgroup.</p>
   */
  Name?: string;

  /**
   * <p>The state of the workgroup.</p>
   */
  State?: WorkGroupState | string;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup creation date and time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The engine version setting for all queries on the workgroup. Queries on the
   *                 <code>AmazonAthenaPreviewFunctionality</code> workgroup run on the preview engine
   *             regardless of this setting.</p>
   */
  EngineVersion?: EngineVersion;
}

export interface ListWorkGroupsOutput {
  /**
   * <p>A list of <a>WorkGroupSummary</a> objects that include the names,
   *             descriptions, creation times, and states for each workgroup.</p>
   */
  WorkGroups?: WorkGroupSummary[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue
   *             pagination if a previous request was truncated. To obtain the next set of pages, pass in
   *             the <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains configuration information for the calculation.</p>
 */
export interface CalculationConfiguration {
  /**
   * <p>A string that contains the code for the calculation.</p>
   */
  CodeBlock?: string;
}

export interface StartCalculationExecutionRequest {
  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>A description of the calculation.</p>
   */
  Description?: string;

  /**
   * @deprecated
   *
   * <p>Contains configuration information for the calculation.</p>
   */
  CalculationConfiguration?: CalculationConfiguration;

  /**
   * <p>A string that contains the code of the calculation.</p>
   */
  CodeBlock?: string;

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
   */
  ClientRequestToken?: string;
}

export interface StartCalculationExecutionResponse {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId?: string;

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
   */
  State?: CalculationExecutionState | string;
}

export interface StartQueryExecutionInput {
  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
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
   * <p>The database within which the query executes.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * <p>Specifies information about where and how to save the results of the query execution.
   *             If the query runs in a workgroup, then workgroup's settings may override query settings.
   *             This affects the query results location. The workgroup settings override is specified in
   *             EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>The name of the workgroup in which the query is being started.</p>
   */
  WorkGroup?: string;

  /**
   * <p>A list of values for the parameters in a query. The values are applied sequentially to
   *             the parameters in the query in the order in which the parameters occur.</p>
   */
  ExecutionParameters?: string[];

  /**
   * <p>Specifies the query result reuse behavior for the query.</p>
   */
  ResultReuseConfiguration?: ResultReuseConfiguration;
}

export interface StartQueryExecutionOutput {
  /**
   * <p>The unique ID of the query that ran as a result of this request.</p>
   */
  QueryExecutionId?: string;
}

/**
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

export interface StartSessionRequest {
  /**
   * <p>The session description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup to which the session belongs.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>Contains engine data processing unit (DPU) configuration settings and parameter
   *             mappings.</p>
   */
  EngineConfiguration: EngineConfiguration | undefined;

  /**
   * <p>The notebook version. This value is required only when requesting that a notebook
   *             server be started for the session. The only valid notebook version is
   *                 <code>Jupyter1.0</code>.</p>
   */
  NotebookVersion?: string;

  /**
   * <p>The idle timeout in minutes for the session.</p>
   */
  SessionIdleTimeoutInMinutes?: number;

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
   */
  ClientRequestToken?: string;
}

export interface StartSessionResponse {
  /**
   * <p>The session ID.</p>
   */
  SessionId?: string;

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
   */
  State?: SessionState | string;
}

export interface StopCalculationExecutionRequest {
  /**
   * <p>The calculation execution UUID.</p>
   */
  CalculationExecutionId: string | undefined;
}

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
   */
  State?: CalculationExecutionState | string;
}

export interface StopQueryExecutionInput {
  /**
   * <p>The unique ID of the query execution to stop.</p>
   */
  QueryExecutionId?: string;
}

export interface StopQueryExecutionOutput {}

export interface TagResourceInput {
  /**
   * <p>Specifies the ARN of the Athena resource (workgroup or data catalog) to
   *             which tags are to be added.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A collection of one or more tags, separated by commas, to be added to an Athena workgroup or data catalog resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceOutput {}

export interface TerminateSessionRequest {
  /**
   * <p>The session ID.</p>
   */
  SessionId: string | undefined;
}

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
   */
  State?: SessionState | string;
}

export interface UntagResourceInput {
  /**
   * <p>Specifies the ARN of the resource from which tags are to be removed.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A comma-separated list of one or more tag keys whose tags are to be removed from the
   *             specified resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceOutput {}

export interface UpdateDataCatalogInput {
  /**
   * <p>The name of the data catalog to update. The catalog name must be unique for the
   *                 Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at
   *             sign, or hyphen characters. The remainder of the length constraint of 256 is reserved
   *             for use by Athena.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the type of data catalog to update. Specify <code>LAMBDA</code> for a
   *             federated catalog, <code>HIVE</code> for an external hive metastore, or
   *                 <code>GLUE</code> for an Glue Data Catalog.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * <p>New or modified text that describes the data catalog.</p>
   */
  Description?: string;

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
   */
  Parameters?: Record<string, string>;
}

export interface UpdateDataCatalogOutput {}

export interface UpdateNamedQueryInput {
  /**
   * <p>The unique identifier (UUID) of the query.</p>
   */
  NamedQueryId: string | undefined;

  /**
   * <p>The name of the query.</p>
   */
  Name: string | undefined;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The contents of the query with all query statements.</p>
   */
  QueryString: string | undefined;
}

export interface UpdateNamedQueryOutput {}

export interface UpdateNotebookInput {
  /**
   * <p>The ID of the notebook to update.</p>
   */
  NotebookId: string | undefined;

  /**
   * <p>The updated content for the notebook.</p>
   */
  Payload: string | undefined;

  /**
   * <p>The notebook content type. Currently, the only valid type is
   *             <code>IPYNB</code>.</p>
   */
  Type: NotebookType | string | undefined;

  /**
   * <p>The ID of the session in which the notebook will be updated.</p>
   */
  SessionId?: string;

  /**
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

export interface UpdateNotebookOutput {}

export interface UpdateNotebookMetadataInput {
  /**
   * <p>The ID of the notebook to update the metadata for.</p>
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
   */
  ClientRequestToken?: string;

  /**
   * <p>The name to update the notebook to.</p>
   */
  Name: string | undefined;
}

export interface UpdateNotebookMetadataOutput {}

export interface UpdatePreparedStatementInput {
  /**
   * <p>The name of the prepared statement.</p>
   */
  StatementName: string | undefined;

  /**
   * <p>The workgroup for the prepared statement.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>The query string for the prepared statement.</p>
   */
  QueryStatement: string | undefined;

  /**
   * <p>The description of the prepared statement.</p>
   */
  Description?: string;
}

export interface UpdatePreparedStatementOutput {}

/**
 * <p>The information about the updates in the query results, such as output location and
 *             encryption configuration for the query results.</p>
 */
export interface ResultConfigurationUpdates {
  /**
   * <p>The location in Amazon S3 where your query results are stored, such as
   *                 <code>s3://path/to/query/bucket/</code>. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> If
   *             workgroup settings override client-side settings, then the query uses the location for
   *             the query results and the encryption configuration that are specified for the workgroup.
   *             The "workgroup settings override" is specified in
   *                 <code>EnforceWorkGroupConfiguration</code> (true/false) in the
   *                 <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;

  /**
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
   * <p>The encryption configuration for the query results.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
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
   * <p>The ACL configuration for the query results.</p>
   */
  AclConfiguration?: AclConfiguration;

  /**
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
 * <p>The configuration information that will be updated for this workgroup, which includes
 *             the location in Amazon S3 where query results are stored, the encryption option,
 *             if any, used for query results, whether the Amazon CloudWatch Metrics are enabled
 *             for the workgroup, whether the workgroup settings override the client-side settings, and
 *             the data usage limit for the amount of bytes scanned per query, if it is
 *             specified.</p>
 */
export interface WorkGroupConfigurationUpdates {
  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false" client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>The result configuration information about the queries in this workgroup that will be
   *             updated. Includes the updated results location and an updated option for encrypting
   *             query results.</p>
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates;

  /**
   * <p>Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The upper limit (cutoff) for the amount of bytes a single query in a workgroup is
   *             allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * <p>Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a>
   *          </p>
   */
  RemoveBytesScannedCutoffPerQuery?: boolean;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup
   *             members cannot query data from Requester Pays buckets, and queries that retrieve data
   *             from Requester Pays buckets cause an error. The default is <code>false</code>. For more
   *             information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>
   *             in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * <p>The engine version requested when a workgroup is updated. After the update, all
   *             queries on the workgroup run on the requested engine version. If no value was previously
   *             set, the default is Auto. Queries on the <code>AmazonAthenaPreviewFunctionality</code>
   *             workgroup run on the preview engine regardless of this setting.</p>
   */
  EngineVersion?: EngineVersion;

  /**
   * <p>Removes content encryption configuration for a workgroup.</p>
   */
  RemoveCustomerContentEncryptionConfiguration?: boolean;

  /**
   * <p>Contains a user defined string in JSON format for a Spark-enabled workgroup.</p>
   */
  AdditionalConfiguration?: string;

  /**
   * <p>Contains the ARN of the execution role for the workgroup</p>
   */
  ExecutionRole?: string;

  /**
   * <p>Specifies the KMS key that is used to encrypt the user's data stores in Athena.</p>
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
}

export interface UpdateWorkGroupInput {
  /**
   * <p>The specified workgroup that will be updated.</p>
   */
  WorkGroup: string | undefined;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>Contains configuration updates for an Athena SQL workgroup.</p>
   */
  ConfigurationUpdates?: WorkGroupConfigurationUpdates;

  /**
   * <p>The workgroup state that will be updated for the given workgroup.</p>
   */
  State?: WorkGroupState | string;
}

export interface UpdateWorkGroupOutput {}

/**
 * <p>Stage plan information such as name, identifier, sub plans, and remote sources.</p>
 */
export interface QueryStagePlanNode {
  /**
   * <p>Name of the query stage plan that describes the operation this stage is performing as
   *             part of query execution.</p>
   */
  Name?: string;

  /**
   * <p>Information about the operation this query stage plan node is performing.</p>
   */
  Identifier?: string;

  /**
   * <p>Stage plan information such as name, identifier, sub plans, and remote sources of
   *             child plan nodes/</p>
   */
  Children?: QueryStagePlanNode[];

  /**
   * <p>Source plan node IDs.</p>
   */
  RemoteSources?: string[];
}

/**
 * <p>Stage statistics such as input and output rows and bytes, execution time and stage
 *             state. This information also includes substages and the query stage plan.</p>
 */
export interface QueryStage {
  /**
   * <p>The identifier for a stage.</p>
   */
  StageId?: number;

  /**
   * <p>State of the stage after query execution.</p>
   */
  State?: string;

  /**
   * <p>The number of bytes output from the stage after execution.</p>
   */
  OutputBytes?: number;

  /**
   * <p>The number of rows output from the stage after execution.</p>
   */
  OutputRows?: number;

  /**
   * <p>The number of bytes input into the stage for execution.</p>
   */
  InputBytes?: number;

  /**
   * <p>The number of rows input into the stage for execution.</p>
   */
  InputRows?: number;

  /**
   * <p>Time taken to execute this stage.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>Stage plan information such as name, identifier, sub plans, and source stages.</p>
   */
  QueryStagePlan?: QueryStagePlanNode;

  /**
   * <p>List of sub query stages that form this stage execution plan.</p>
   */
  SubStages?: QueryStage[];
}

/**
 * <p>The query execution timeline, statistics on input and output rows and bytes, and the
 *             different query stages that form the query execution plan.</p>
 */
export interface QueryRuntimeStatistics {
  /**
   * <p>Timeline statistics such as query queue time, planning time, execution time, service
   *             processing time, and total execution time.</p>
   */
  Timeline?: QueryRuntimeStatisticsTimeline;

  /**
   * <p>Statistics such as input rows and bytes read by the query, rows and bytes output by
   *             the query, and the number of rows written by the query.</p>
   */
  Rows?: QueryRuntimeStatisticsRows;

  /**
   * <p>Stage statistics such as input and output rows and bytes, execution time, and stage
   *             state. This information also includes substages and the query stage plan.</p>
   */
  OutputStage?: QueryStage;
}

export interface GetQueryRuntimeStatisticsOutput {
  /**
   * <p>Runtime statistics about the query execution.</p>
   */
  QueryRuntimeStatistics?: QueryRuntimeStatistics;
}

/**
 * @internal
 */
export const AclConfigurationFilterSensitiveLog = (obj: AclConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetNamedQueryInputFilterSensitiveLog = (obj: BatchGetNamedQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NamedQueryFilterSensitiveLog = (obj: NamedQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedNamedQueryIdFilterSensitiveLog = (obj: UnprocessedNamedQueryId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetNamedQueryOutputFilterSensitiveLog = (obj: BatchGetNamedQueryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetPreparedStatementInputFilterSensitiveLog = (obj: BatchGetPreparedStatementInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PreparedStatementFilterSensitiveLog = (obj: PreparedStatement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedPreparedStatementNameFilterSensitiveLog = (obj: UnprocessedPreparedStatementName): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetPreparedStatementOutputFilterSensitiveLog = (obj: BatchGetPreparedStatementOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetQueryExecutionInputFilterSensitiveLog = (obj: BatchGetQueryExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineVersionFilterSensitiveLog = (obj: EngineVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryExecutionContextFilterSensitiveLog = (obj: QueryExecutionContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionConfigurationFilterSensitiveLog = (obj: EncryptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultConfigurationFilterSensitiveLog = (obj: ResultConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultReuseByAgeConfigurationFilterSensitiveLog = (obj: ResultReuseByAgeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultReuseConfigurationFilterSensitiveLog = (obj: ResultReuseConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultReuseInformationFilterSensitiveLog = (obj: ResultReuseInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryExecutionStatisticsFilterSensitiveLog = (obj: QueryExecutionStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AthenaErrorFilterSensitiveLog = (obj: AthenaError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryExecutionStatusFilterSensitiveLog = (obj: QueryExecutionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryExecutionFilterSensitiveLog = (obj: QueryExecution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedQueryExecutionIdFilterSensitiveLog = (obj: UnprocessedQueryExecutionId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetQueryExecutionOutputFilterSensitiveLog = (obj: BatchGetQueryExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataCatalogInputFilterSensitiveLog = (obj: CreateDataCatalogInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataCatalogOutputFilterSensitiveLog = (obj: CreateDataCatalogOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNamedQueryInputFilterSensitiveLog = (obj: CreateNamedQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNamedQueryOutputFilterSensitiveLog = (obj: CreateNamedQueryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotebookInputFilterSensitiveLog = (obj: CreateNotebookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotebookOutputFilterSensitiveLog = (obj: CreateNotebookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePreparedStatementInputFilterSensitiveLog = (obj: CreatePreparedStatementInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePreparedStatementOutputFilterSensitiveLog = (obj: CreatePreparedStatementOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePresignedNotebookUrlRequestFilterSensitiveLog = (obj: CreatePresignedNotebookUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePresignedNotebookUrlResponseFilterSensitiveLog = (obj: CreatePresignedNotebookUrlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerContentEncryptionConfigurationFilterSensitiveLog = (
  obj: CustomerContentEncryptionConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkGroupConfigurationFilterSensitiveLog = (obj: WorkGroupConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkGroupInputFilterSensitiveLog = (obj: CreateWorkGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkGroupOutputFilterSensitiveLog = (obj: CreateWorkGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataCatalogInputFilterSensitiveLog = (obj: DeleteDataCatalogInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataCatalogOutputFilterSensitiveLog = (obj: DeleteDataCatalogOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNamedQueryInputFilterSensitiveLog = (obj: DeleteNamedQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNamedQueryOutputFilterSensitiveLog = (obj: DeleteNamedQueryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotebookInputFilterSensitiveLog = (obj: DeleteNotebookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotebookOutputFilterSensitiveLog = (obj: DeleteNotebookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePreparedStatementInputFilterSensitiveLog = (obj: DeletePreparedStatementInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePreparedStatementOutputFilterSensitiveLog = (obj: DeletePreparedStatementOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkGroupInputFilterSensitiveLog = (obj: DeleteWorkGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkGroupOutputFilterSensitiveLog = (obj: DeleteWorkGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportNotebookInputFilterSensitiveLog = (obj: ExportNotebookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotebookMetadataFilterSensitiveLog = (obj: NotebookMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportNotebookOutputFilterSensitiveLog = (obj: ExportNotebookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCalculationExecutionRequestFilterSensitiveLog = (obj: GetCalculationExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculationResultFilterSensitiveLog = (obj: CalculationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculationStatisticsFilterSensitiveLog = (obj: CalculationStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculationStatusFilterSensitiveLog = (obj: CalculationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCalculationExecutionResponseFilterSensitiveLog = (obj: GetCalculationExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCalculationExecutionCodeRequestFilterSensitiveLog = (obj: GetCalculationExecutionCodeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCalculationExecutionCodeResponseFilterSensitiveLog = (
  obj: GetCalculationExecutionCodeResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCalculationExecutionStatusRequestFilterSensitiveLog = (
  obj: GetCalculationExecutionStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCalculationExecutionStatusResponseFilterSensitiveLog = (
  obj: GetCalculationExecutionStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatabaseInputFilterSensitiveLog = (obj: GetDatabaseInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseFilterSensitiveLog = (obj: Database): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatabaseOutputFilterSensitiveLog = (obj: GetDatabaseOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataCatalogInputFilterSensitiveLog = (obj: GetDataCatalogInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCatalogFilterSensitiveLog = (obj: DataCatalog): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataCatalogOutputFilterSensitiveLog = (obj: GetDataCatalogOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNamedQueryInputFilterSensitiveLog = (obj: GetNamedQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNamedQueryOutputFilterSensitiveLog = (obj: GetNamedQueryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNotebookMetadataInputFilterSensitiveLog = (obj: GetNotebookMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNotebookMetadataOutputFilterSensitiveLog = (obj: GetNotebookMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPreparedStatementInputFilterSensitiveLog = (obj: GetPreparedStatementInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPreparedStatementOutputFilterSensitiveLog = (obj: GetPreparedStatementOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryExecutionInputFilterSensitiveLog = (obj: GetQueryExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryExecutionOutputFilterSensitiveLog = (obj: GetQueryExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryResultsInputFilterSensitiveLog = (obj: GetQueryResultsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnInfoFilterSensitiveLog = (obj: ColumnInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultSetMetadataFilterSensitiveLog = (obj: ResultSetMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatumFilterSensitiveLog = (obj: Datum): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RowFilterSensitiveLog = (obj: Row): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultSetFilterSensitiveLog = (obj: ResultSet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryResultsOutputFilterSensitiveLog = (obj: GetQueryResultsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryRuntimeStatisticsInputFilterSensitiveLog = (obj: GetQueryRuntimeStatisticsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryRuntimeStatisticsRowsFilterSensitiveLog = (obj: QueryRuntimeStatisticsRows): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryRuntimeStatisticsTimelineFilterSensitiveLog = (obj: QueryRuntimeStatisticsTimeline): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionRequestFilterSensitiveLog = (obj: GetSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineConfigurationFilterSensitiveLog = (obj: EngineConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionConfigurationFilterSensitiveLog = (obj: SessionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionStatisticsFilterSensitiveLog = (obj: SessionStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionStatusFilterSensitiveLog = (obj: SessionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionResponseFilterSensitiveLog = (obj: GetSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionStatusRequestFilterSensitiveLog = (obj: GetSessionStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionStatusResponseFilterSensitiveLog = (obj: GetSessionStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTableMetadataInputFilterSensitiveLog = (obj: GetTableMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnFilterSensitiveLog = (obj: Column): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableMetadataFilterSensitiveLog = (obj: TableMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTableMetadataOutputFilterSensitiveLog = (obj: GetTableMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkGroupInputFilterSensitiveLog = (obj: GetWorkGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkGroupFilterSensitiveLog = (obj: WorkGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkGroupOutputFilterSensitiveLog = (obj: GetWorkGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportNotebookInputFilterSensitiveLog = (obj: ImportNotebookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportNotebookOutputFilterSensitiveLog = (obj: ImportNotebookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationDPUSizesInputFilterSensitiveLog = (obj: ListApplicationDPUSizesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationDPUSizesFilterSensitiveLog = (obj: ApplicationDPUSizes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationDPUSizesOutputFilterSensitiveLog = (obj: ListApplicationDPUSizesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCalculationExecutionsRequestFilterSensitiveLog = (obj: ListCalculationExecutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculationSummaryFilterSensitiveLog = (obj: CalculationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCalculationExecutionsResponseFilterSensitiveLog = (obj: ListCalculationExecutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatabasesInputFilterSensitiveLog = (obj: ListDatabasesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatabasesOutputFilterSensitiveLog = (obj: ListDatabasesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataCatalogsInputFilterSensitiveLog = (obj: ListDataCatalogsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCatalogSummaryFilterSensitiveLog = (obj: DataCatalogSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataCatalogsOutputFilterSensitiveLog = (obj: ListDataCatalogsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEngineVersionsInputFilterSensitiveLog = (obj: ListEngineVersionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEngineVersionsOutputFilterSensitiveLog = (obj: ListEngineVersionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutorsRequestFilterSensitiveLog = (obj: ListExecutorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutorsSummaryFilterSensitiveLog = (obj: ExecutorsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExecutorsResponseFilterSensitiveLog = (obj: ListExecutorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNamedQueriesInputFilterSensitiveLog = (obj: ListNamedQueriesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNamedQueriesOutputFilterSensitiveLog = (obj: ListNamedQueriesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterDefinitionFilterSensitiveLog = (obj: FilterDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookMetadataInputFilterSensitiveLog = (obj: ListNotebookMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookMetadataOutputFilterSensitiveLog = (obj: ListNotebookMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookSessionsRequestFilterSensitiveLog = (obj: ListNotebookSessionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotebookSessionSummaryFilterSensitiveLog = (obj: NotebookSessionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNotebookSessionsResponseFilterSensitiveLog = (obj: ListNotebookSessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPreparedStatementsInputFilterSensitiveLog = (obj: ListPreparedStatementsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PreparedStatementSummaryFilterSensitiveLog = (obj: PreparedStatementSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPreparedStatementsOutputFilterSensitiveLog = (obj: ListPreparedStatementsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueryExecutionsInputFilterSensitiveLog = (obj: ListQueryExecutionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueryExecutionsOutputFilterSensitiveLog = (obj: ListQueryExecutionsOutput): any => ({
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
export const SessionSummaryFilterSensitiveLog = (obj: SessionSummary): any => ({
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
export const ListTableMetadataInputFilterSensitiveLog = (obj: ListTableMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTableMetadataOutputFilterSensitiveLog = (obj: ListTableMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceInputFilterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkGroupsInputFilterSensitiveLog = (obj: ListWorkGroupsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkGroupSummaryFilterSensitiveLog = (obj: WorkGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkGroupsOutputFilterSensitiveLog = (obj: ListWorkGroupsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CalculationConfigurationFilterSensitiveLog = (obj: CalculationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCalculationExecutionRequestFilterSensitiveLog = (obj: StartCalculationExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCalculationExecutionResponseFilterSensitiveLog = (obj: StartCalculationExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartQueryExecutionInputFilterSensitiveLog = (obj: StartQueryExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartQueryExecutionOutputFilterSensitiveLog = (obj: StartQueryExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSessionRequestFilterSensitiveLog = (obj: StartSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartSessionResponseFilterSensitiveLog = (obj: StartSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCalculationExecutionRequestFilterSensitiveLog = (obj: StopCalculationExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCalculationExecutionResponseFilterSensitiveLog = (obj: StopCalculationExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopQueryExecutionInputFilterSensitiveLog = (obj: StopQueryExecutionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopQueryExecutionOutputFilterSensitiveLog = (obj: StopQueryExecutionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceOutputFilterSensitiveLog = (obj: TagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateSessionRequestFilterSensitiveLog = (obj: TerminateSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateSessionResponseFilterSensitiveLog = (obj: TerminateSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceInputFilterSensitiveLog = (obj: UntagResourceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceOutputFilterSensitiveLog = (obj: UntagResourceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataCatalogInputFilterSensitiveLog = (obj: UpdateDataCatalogInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataCatalogOutputFilterSensitiveLog = (obj: UpdateDataCatalogOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNamedQueryInputFilterSensitiveLog = (obj: UpdateNamedQueryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNamedQueryOutputFilterSensitiveLog = (obj: UpdateNamedQueryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookInputFilterSensitiveLog = (obj: UpdateNotebookInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookOutputFilterSensitiveLog = (obj: UpdateNotebookOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookMetadataInputFilterSensitiveLog = (obj: UpdateNotebookMetadataInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNotebookMetadataOutputFilterSensitiveLog = (obj: UpdateNotebookMetadataOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePreparedStatementInputFilterSensitiveLog = (obj: UpdatePreparedStatementInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePreparedStatementOutputFilterSensitiveLog = (obj: UpdatePreparedStatementOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResultConfigurationUpdatesFilterSensitiveLog = (obj: ResultConfigurationUpdates): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkGroupConfigurationUpdatesFilterSensitiveLog = (obj: WorkGroupConfigurationUpdates): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkGroupInputFilterSensitiveLog = (obj: UpdateWorkGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkGroupOutputFilterSensitiveLog = (obj: UpdateWorkGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStagePlanNodeFilterSensitiveLog = (obj: QueryStagePlanNode): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryStageFilterSensitiveLog = (obj: QueryStage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueryRuntimeStatisticsFilterSensitiveLog = (obj: QueryRuntimeStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQueryRuntimeStatisticsOutputFilterSensitiveLog = (obj: GetQueryRuntimeStatisticsOutput): any => ({
  ...obj,
});
