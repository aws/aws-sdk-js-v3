// smithy-typescript generated code
import type {
  AuthenticationType,
  CalculationExecutionState,
  CapacityAllocationStatus,
  CapacityReservationStatus,
  ColumnNullable,
  ConnectionType,
  DataCatalogStatus,
  DataCatalogType,
  EncryptionOption,
  ExecutorState,
  ExecutorType,
  NotebookType,
  QueryExecutionState,
  QueryResultType,
  S3AclOption,
  SessionState,
  StatementType,
  WorkGroupState,
} from "./enums";

/**
 * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results, including data files inserted by Athena as the result of statements like CTAS or INSERT INTO. When Athena stores query results in Amazon S3, the canned ACL is set with the `x-amz-acl` request header. For more information about S3 Object Ownership, see [Object Ownership settings](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface AclConfiguration {
  /**
   * The Amazon S3 canned ACL that Athena should specify when storing query results, including data files inserted by Athena as the result of statements like CTAS or INSERT INTO. Currently the only supported canned ACL is `BUCKET_OWNER_FULL_CONTROL`. If a query runs in a workgroup and the workgroup overrides client-side settings, then the Amazon S3 canned ACL specified in the workgroup's settings is used for all queries that run in the workgroup. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  S3AclOption: S3AclOption | undefined;
}

/**
 * Contains an array of named query IDs.
 *
 * @public
 */
export interface BatchGetNamedQueryInput {
  /**
   * An array of query IDs.
   *
   * @public
   */
  NamedQueryIds: string[] | undefined;
}

/**
 * A query, where `QueryString` contains the SQL statements that make up the query.
 *
 * @public
 */
export interface NamedQuery {
  /**
   * The query name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The query description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The database to which the query belongs.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The SQL statements that make up the query.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * The unique identifier of the query.
   *
   * @public
   */
  NamedQueryId?: string | undefined;

  /**
   * The name of the workgroup that contains the named query.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * Information about a named query ID that could not be processed.
 *
 * @public
 */
export interface UnprocessedNamedQueryId {
  /**
   * The unique identifier of the named query.
   *
   * @public
   */
  NamedQueryId?: string | undefined;

  /**
   * The error code returned when the processing request for the named query failed, if applicable.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message returned when the processing request for the named query failed, if applicable.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetNamedQueryOutput {
  /**
   * Information about the named query IDs submitted.
   *
   * @public
   */
  NamedQueries?: NamedQuery[] | undefined;

  /**
   * Information about provided query IDs.
   *
   * @public
   */
  UnprocessedNamedQueryIds?: UnprocessedNamedQueryId[] | undefined;
}

/**
 * @public
 */
export interface BatchGetPreparedStatementInput {
  /**
   * A list of prepared statement names to return.
   *
   * @public
   */
  PreparedStatementNames: string[] | undefined;

  /**
   * The name of the workgroup to which the prepared statements belong.
   *
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * A prepared SQL statement for use with Athena.
 *
 * @public
 */
export interface PreparedStatement {
  /**
   * The name of the prepared statement.
   *
   * @public
   */
  StatementName?: string | undefined;

  /**
   * The query string for the prepared statement.
   *
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * The name of the workgroup to which the prepared statement belongs.
   *
   * @public
   */
  WorkGroupName?: string | undefined;

  /**
   * The description of the prepared statement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The last modified time of the prepared statement.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * The name of a prepared statement that could not be returned.
 *
 * @public
 */
export interface UnprocessedPreparedStatementName {
  /**
   * The name of a prepared statement that could not be returned due to an error.
   *
   * @public
   */
  StatementName?: string | undefined;

  /**
   * The error code returned when the request for the prepared statement failed.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message containing the reason why the prepared statement could not be returned. The following error messages are possible:
   *
   * - `INVALID_INPUT` - The name of the prepared statement that was provided is not valid (for example, the name is too long).
   * - `STATEMENT_NOT_FOUND` - A prepared statement with the name provided could not be found.
   * - `UNAUTHORIZED` - The requester does not have permission to access the workgroup that contains the prepared statement.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetPreparedStatementOutput {
  /**
   * The list of prepared statements returned.
   *
   * @public
   */
  PreparedStatements?: PreparedStatement[] | undefined;

  /**
   * A list of one or more prepared statements that were requested but could not be returned.
   *
   * @public
   */
  UnprocessedPreparedStatementNames?: UnprocessedPreparedStatementName[] | undefined;
}

/**
 * Contains an array of query execution IDs.
 *
 * @public
 */
export interface BatchGetQueryExecutionInput {
  /**
   * An array of query execution IDs.
   *
   * @public
   */
  QueryExecutionIds: string[] | undefined;
}

/**
 * The Athena engine version for running queries, or the PySpark engine version for running sessions.
 *
 * @public
 */
export interface EngineVersion {
  /**
   * The engine version requested by the user. Possible values are determined by the output of `ListEngineVersions`, including AUTO. The default is AUTO.
   *
   * @public
   */
  SelectedEngineVersion?: string | undefined;

  /**
   * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a `CreateWorkGroup` or `UpdateWorkGroup` operation, the `EffectiveEngineVersion` field is ignored.
   *
   * @public
   */
  EffectiveEngineVersion?: string | undefined;
}

/**
 * If you encrypt query and calculation results in Athena owned storage, this field indicates the encryption option (for example, SSE_KMS or CSE_KMS) and key information.
 *
 * @public
 */
export interface ManagedQueryResultsEncryptionConfiguration {
  /**
   * The ARN of an KMS key for encrypting managed query results.
   *
   * @public
   */
  KmsKey: string | undefined;
}

/**
 * The configuration for storing results in Athena owned storage, which includes whether this feature is enabled; whether encryption configuration, if any, is used for encrypting query results.
 *
 * @public
 */
export interface ManagedQueryResultsConfiguration {
  /**
   * If set to true, allows you to store query results in Athena owned storage. If set to false, workgroup member stores query results in location specified under `ResultConfiguration$OutputLocation`. The default is false. A workgroup cannot have the `ResultConfiguration$OutputLocation` parameter when you set this field to true.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * If you encrypt query and calculation results in Athena owned storage, this field indicates the encryption option (for example, SSE_KMS or CSE_KMS) and key information.
   *
   * @public
   */
  EncryptionConfiguration?: ManagedQueryResultsEncryptionConfiguration | undefined;
}

/**
 * The database and data catalog context in which the query execution occurs.
 *
 * @public
 */
export interface QueryExecutionContext {
  /**
   * The name of the database used in the query execution. The database must exist in the catalog.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * The name of the data catalog used in the query execution.
   *
   * @public
   */
  Catalog?: string | undefined;
}

/**
 * Specifies whether Amazon S3 access grants are enabled for query results.
 *
 * @public
 */
export interface QueryResultsS3AccessGrantsConfiguration {
  /**
   * Specifies whether Amazon S3 access grants are enabled for query results.
   *
   * @public
   */
  EnableS3AccessGrants: boolean | undefined;

  /**
   * When enabled, appends the user ID as an Amazon S3 path prefix to the query result output location.
   *
   * @public
   */
  CreateUserLevelPrefix?: boolean | undefined;

  /**
   * The authentication type used for Amazon S3 access grants. Currently, only `DIRECTORY_IDENTITY` is supported.
   *
   * @public
   */
  AuthenticationType: AuthenticationType | undefined;
}

/**
 * If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS`) and key information.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (`SSE_S3`), server-side encryption with KMS-managed keys (`SSE_KMS`), or client-side encryption with KMS-managed keys (`CSE_KMS`) is used.
   *
   * If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup.
   *
   * @public
   */
  EncryptionOption: EncryptionOption | undefined;

  /**
   * For `SSE_KMS` and `CSE_KMS`, this is the KMS key ARN or ID.
   *
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
 *
 * @public
 */
export interface ResultConfiguration {
  /**
   * The location in Amazon S3 where your query and calculation results are stored, such as `s3://path/to/query/bucket/`. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration. If none of them is set, Athena issues an error that no output location is provided. If workgroup settings override client-side settings, then the query uses the settings specified for the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
   *
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS`) and key information. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by ResultConfiguration$OutputLocation. If set, Athena uses the value for `ExpectedBucketOwner` when it makes Amazon S3 calls to your specified output location. If the `ExpectedBucketOwner` Amazon Web Services account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.
   *
   * This is a client-side setting. If workgroup settings override client-side settings, then the query uses the `ExpectedBucketOwner` setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. Currently the only supported canned ACL is `BUCKET_OWNER_FULL_CONTROL`. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the ACL configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. For more information, see WorkGroupConfiguration$EnforceWorkGroupConfiguration and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  AclConfiguration?: AclConfiguration | undefined;
}

/**
 * Specifies whether previous query results are reused, and if so, their maximum age.
 *
 * @public
 */
export interface ResultReuseByAgeConfiguration {
  /**
   * True if previous query results can be reused when the query is run; otherwise, false. The default is false.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Specifies, in minutes, the maximum age of a previous query result that Athena should consider for reuse. The default is 60.
   *
   * @public
   */
  MaxAgeInMinutes?: number | undefined;
}

/**
 * Specifies the query result reuse behavior for the query.
 *
 * @public
 */
export interface ResultReuseConfiguration {
  /**
   * Specifies whether previous query results are reused, and if so, their maximum age.
   *
   * @public
   */
  ResultReuseByAgeConfiguration?: ResultReuseByAgeConfiguration | undefined;
}

/**
 * Contains information about whether the result of a previous query was reused.
 *
 * @public
 */
export interface ResultReuseInformation {
  /**
   * True if a previous query result was reused; false if the result was generated from a new run of the query.
   *
   * @public
   */
  ReusedPreviousResult: boolean | undefined;
}

/**
 * The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.
 *
 * @public
 */
export interface QueryExecutionStatistics {
  /**
   * The number of milliseconds that the query took to execute.
   *
   * @public
   */
  EngineExecutionTimeInMillis?: number | undefined;

  /**
   * The number of bytes in the data that was queried.
   *
   * @public
   */
  DataScannedInBytes?: number | undefined;

  /**
   * The location and file name of a data manifest file. The manifest file is saved to the Athena query results location in Amazon S3. The manifest file tracks files that the query wrote to Amazon S3. If the query fails, the manifest file also tracks files that the query intended to write. The manifest is useful for identifying orphaned files resulting from a failed query. For more information, see [Working with Query Results, Output Files, and Query History](https://docs.aws.amazon.com/athena/latest/ug/querying.html) in the *Amazon Athena User Guide*.
   *
   * @public
   */
  DataManifestLocation?: string | undefined;

  /**
   * The number of milliseconds that Athena took to run the query.
   *
   * @public
   */
  TotalExecutionTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that the query was in your query queue waiting for resources. Note that if transient errors occur, Athena might automatically add the query back to the queue.
   *
   * @public
   */
  QueryQueueTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena took to preprocess the query before submitting the query to the query engine.
   *
   * @public
   */
  ServicePreProcessingTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena took to plan the query processing flow. This includes the time spent retrieving table partitions from the data source. Note that because the query engine performs the query planning, query planning time is a subset of engine processing time.
   *
   * @public
   */
  QueryPlanningTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena took to finalize and publish the query results after the query engine finished running the query.
   *
   * @public
   */
  ServiceProcessingTimeInMillis?: number | undefined;

  /**
   * Contains information about whether previous query results were reused for the query.
   *
   * @public
   */
  ResultReuseInformation?: ResultReuseInformation | undefined;

  /**
   * The number of Data Processing Units (DPUs) that Athena used to run the query.
   *
   * @public
   */
  DpuCount?: number | undefined;
}

/**
 * Provides information about an Athena query error. The `AthenaError` feature provides standardized error information to help you understand failed queries and take steps after a query failure occurs. `AthenaError` includes an `ErrorCategory` field that specifies whether the cause of the failed query is due to system error, user error, or other error.
 *
 * @public
 */
export interface AthenaError {
  /**
   * An integer value that specifies the category of a query failure error. The following list shows the category for each integer value.
   *
   * **1** - System
   *
   * **2** - User
   *
   * **3** - Other
   *
   * @public
   */
  ErrorCategory?: number | undefined;

  /**
   * An integer value that provides specific information about an Athena query error. For the meaning of specific values, see the [Error Type Reference](https://docs.aws.amazon.com/athena/latest/ug/error-reference.html#error-reference-error-type-reference) in the *Amazon Athena User Guide*.
   *
   * @public
   */
  ErrorType?: number | undefined;

  /**
   * True if the query might succeed if resubmitted.
   *
   * @public
   */
  Retryable?: boolean | undefined;

  /**
   * Contains a short description of the error that occurred.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
 *
 * @public
 */
export interface QueryExecutionStatus {
  /**
   * The state of query execution. `QUEUED` indicates that the query has been submitted to the service, and Athena will execute the query as soon as resources are available. `RUNNING` indicates that the query is in execution phase. `SUCCEEDED` indicates that the query completed without errors. `FAILED` indicates that the query experienced an error and did not complete processing. `CANCELLED` indicates that a user input interrupted query execution.
   *
   * > **Note:** For queries that experience certain transient errors, the state transitions from `RUNNING` back to `QUEUED`. The `FAILED` state is always terminal with no automatic retry.
   *
   * @public
   */
  State?: QueryExecutionState | undefined;

  /**
   * Further detail about the status of the query.
   *
   * @public
   */
  StateChangeReason?: string | undefined;

  /**
   * The date and time that the query was submitted.
   *
   * @public
   */
  SubmissionDateTime?: Date | undefined;

  /**
   * The date and time that the query completed.
   *
   * @public
   */
  CompletionDateTime?: Date | undefined;

  /**
   * Provides information about an Athena query error.
   *
   * @public
   */
  AthenaError?: AthenaError | undefined;
}

/**
 * Information about a single instance of a query execution.
 *
 * @public
 */
export interface QueryExecution {
  /**
   * The unique identifier for each query execution.
   *
   * @public
   */
  QueryExecutionId?: string | undefined;

  /**
   * The SQL query statements which the query execution ran.
   *
   * @public
   */
  Query?: string | undefined;

  /**
   * The type of query statement that was run. `DDL` indicates DDL query statements. `DML` indicates DML (Data Manipulation Language) query statements, such as `CREATE TABLE AS SELECT`. `UTILITY` indicates query statements other than DDL and DML, such as `SHOW CREATE TABLE`, `EXPLAIN`, `DESCRIBE`, or `SHOW TABLES`.
   *
   * @public
   */
  StatementType?: StatementType | undefined;

  /**
   * The configuration for storing results in Athena owned storage, which includes whether this feature is enabled; whether encryption configuration, if any, is used for encrypting query results.
   *
   * @public
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration | undefined;

  /**
   * The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.
   *
   * @public
   */
  ResultConfiguration?: ResultConfiguration | undefined;

  /**
   * Specifies the query result reuse behavior that was used for the query.
   *
   * @public
   */
  ResultReuseConfiguration?: ResultReuseConfiguration | undefined;

  /**
   * The database in which the query execution occurred.
   *
   * @public
   */
  QueryExecutionContext?: QueryExecutionContext | undefined;

  /**
   * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
   *
   * @public
   */
  Status?: QueryExecutionStatus | undefined;

  /**
   * Query execution statistics, such as the amount of data scanned, the amount of time that the query took to process, and the type of statement that was run.
   *
   * @public
   */
  Statistics?: QueryExecutionStatistics | undefined;

  /**
   * The name of the workgroup in which the query ran.
   *
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * The engine version that executed the query.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * A list of values for the parameters in a query. The values are applied sequentially to the parameters in the query in the order in which the parameters occur. The list of parameters is not returned in the response.
   *
   * @public
   */
  ExecutionParameters?: string[] | undefined;

  /**
   * The kind of query statement that was run.
   *
   * @public
   */
  SubstatementType?: string | undefined;

  /**
   * Specifies whether Amazon S3 access grants are enabled for query results.
   *
   * @public
   */
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration | undefined;
}

/**
 * Describes a query execution that failed to process.
 *
 * @public
 */
export interface UnprocessedQueryExecutionId {
  /**
   * The unique identifier of the query execution.
   *
   * @public
   */
  QueryExecutionId?: string | undefined;

  /**
   * The error code returned when the query execution failed to process, if applicable.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message returned when the query execution failed to process, if applicable.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetQueryExecutionOutput {
  /**
   * Information about a query execution.
   *
   * @public
   */
  QueryExecutions?: QueryExecution[] | undefined;

  /**
   * Information about the query executions that failed to run.
   *
   * @public
   */
  UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[] | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationInput {
  /**
   * The name of the capacity reservation to cancel.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CancelCapacityReservationOutput {}

/**
 * A label that you assign to a resource. Athena resources include workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena resources by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see [Tagging Best Practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html). Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
 *
 * @public
 */
export interface Tag {
  /**
   * A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys are case-sensitive and must be unique per resource.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag values are case-sensitive.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityReservationInput {
  /**
   * The number of requested data processing units.
   *
   * @public
   */
  TargetDpus: number | undefined;

  /**
   * The name of the capacity reservation to create.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The tags for the capacity reservation.
   *
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
 */
export interface CreateDataCatalogInput {
  /**
   * The name of the data catalog to create. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.
   *
   * For `FEDERATED` type the catalog name has following considerations and limits:
   *
   * - The catalog name allows special characters such as `_ , @ , \ , -`. These characters are replaced with a hyphen (-) when creating the CFN Stack Name and with an underscore (_) when creating the Lambda Function and Glue Connection Name.
   * - The catalog name has a theoretical limit of 128 characters. However, since we use it to create other resources that allow less characters and we prepend a prefix to it, the actual catalog name limit for `FEDERATED` catalog is 64 - 23 = 41 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of data catalog to create: `LAMBDA` for a federated catalog, `GLUE` for an Glue Data Catalog, and `HIVE` for an external Apache Hive metastore. `FEDERATED` is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass.
   *
   * For `FEDERATED` type, we do not support IAM identity center.
   *
   * @public
   */
  Type: DataCatalogType | undefined;

  /**
   * A description of the data catalog to be created.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type.
   *
   * - For the `HIVE` data catalog type, use the following syntax. The `metadata-function` parameter is required. `The sdk-version` parameter is optional and defaults to the currently supported version.
   *
   *   `metadata-function=lambda_arn, sdk-version=version_number`
   * - For the `LAMBDA` data catalog type, use one of the following sets of required parameters, but not both.
   *
   *   - If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.
   *
   *     `metadata-function=lambda_arn, record-function=lambda_arn`
   *   - If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.
   *
   *     `function=lambda_arn`
   * - The `GLUE` type takes a catalog ID parameter and is required. The `catalog_id` is the account ID of the Amazon Web Services account to which the Glue Data Catalog belongs.
   *
   *   `catalog-id=catalog_id`
   *
   *   - The `GLUE` data catalog type also applies to the default `AwsDataCatalog` that already exists in your account, of which you can have only one and cannot modify.
   * - The `FEDERATED` data catalog type uses one of the following parameters, but not both. Use `connection-arn` for an existing Glue connection. Use `connection-type` and `connection-properties` to specify the configuration setting for a new connection.
   *
   *   - `connection-arn:<glue_connection_arn_to_reuse>`
   *   - `lambda-role-arn` (optional): The execution role to use for the Lambda function. If not provided, one is created.
   *   - `connection-type:MYSQL|REDSHIFT|...., connection-properties:"<json_string>"`
   *
   *     For *`<json_string>`* , use escaped JSON text, as in the following example.
   *
   *     `"\{\"spill_bucket\":\"my_spill\",\"spill_prefix\":\"athena-spill\",\"host\":\"abc12345.snowflakecomputing.com\",\"port\":\"1234\",\"warehouse\":\"DEV_WH\",\"database\":\"TEST\",\"schema\":\"PUBLIC\",\"SecretArn\":\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\"\}"`
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * A list of comma separated tags to add to the data catalog that is created. All the resources that are created by the `CreateDataCatalog` API operation with `FEDERATED` type will have the tag `federated_athena_datacatalog="true"`. This includes the CFN Stack, Glue Connection, Athena DataCatalog, and all the resources created as part of the CFN Stack (Lambda Function, IAM policies/roles).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about a data catalog in an Amazon Web Services account.
 *
 * > **Note:** In the Athena console, data catalogs are listed as "data sources" on the **Data sources** page under the **Data source name** column.
 *
 * @public
 */
export interface DataCatalog {
  /**
   * The name of the data catalog. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description of the data catalog.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of data catalog to create: `LAMBDA` for a federated catalog, `GLUE` for an Glue Data Catalog, and `HIVE` for an external Apache Hive metastore. `FEDERATED` is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass.
   *
   * @public
   */
  Type: DataCatalogType | undefined;

  /**
   * Specifies the Lambda function or functions to use for the data catalog. This is a mapping whose values depend on the catalog type.
   *
   * - For the `HIVE` data catalog type, use the following syntax. The `metadata-function` parameter is required. `The sdk-version` parameter is optional and defaults to the currently supported version.
   *
   *   `metadata-function=lambda_arn, sdk-version=version_number`
   * - For the `LAMBDA` data catalog type, use one of the following sets of required parameters, but not both.
   *
   *   - If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.
   *
   *     `metadata-function=lambda_arn, record-function=lambda_arn`
   *   - If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.
   *
   *     `function=lambda_arn`
   * - The `GLUE` type takes a catalog ID parameter and is required. The `catalog_id` is the account ID of the Amazon Web Services account to which the Glue catalog belongs.
   *
   *   `catalog-id=catalog_id`
   *
   *   - The `GLUE` data catalog type also applies to the default `AwsDataCatalog` that already exists in your account, of which you can have only one and cannot modify.
   * - The `FEDERATED` data catalog type uses one of the following parameters, but not both. Use `connection-arn` for an existing Glue connection. Use `connection-type` and `connection-properties` to specify the configuration setting for a new connection.
   *
   *   - `connection-arn:<glue_connection_arn_to_reuse>`
   *   - `connection-type:MYSQL|REDSHIFT|...., connection-properties:"<json_string>"`
   *
   *     For *`<json_string>`* , use escaped JSON text, as in the following example.
   *
   *     `"\{\"spill_bucket\":\"my_spill\",\"spill_prefix\":\"athena-spill\",\"host\":\"abc12345.snowflakecomputing.com\",\"port\":\"1234\",\"warehouse\":\"DEV_WH\",\"database\":\"TEST\",\"schema\":\"PUBLIC\",\"SecretArn\":\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\"\}"`
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The status of the creation or deletion of the data catalog.
   *
   * - The `LAMBDA`, `GLUE`, and `HIVE` data catalog types are created synchronously. Their status is either `CREATE_COMPLETE` or `CREATE_FAILED`.
   * - The `FEDERATED` data catalog type is created asynchronously.
   *
   * Data catalog creation status:
   *
   * - `CREATE_IN_PROGRESS`: Federated data catalog creation in progress.
   * - `CREATE_COMPLETE`: Data catalog creation complete.
   * - `CREATE_FAILED`: Data catalog could not be created.
   * - `CREATE_FAILED_CLEANUP_IN_PROGRESS`: Federated data catalog creation failed and is being removed.
   * - `CREATE_FAILED_CLEANUP_COMPLETE`: Federated data catalog creation failed and was removed.
   * - `CREATE_FAILED_CLEANUP_FAILED`: Federated data catalog creation failed but could not be removed.
   *
   * Data catalog deletion status:
   *
   * - `DELETE_IN_PROGRESS`: Federated data catalog deletion in progress.
   * - `DELETE_COMPLETE`: Federated data catalog deleted.
   * - `DELETE_FAILED`: Federated data catalog could not be deleted.
   *
   * @public
   */
  Status?: DataCatalogStatus | undefined;

  /**
   * The type of connection for a `FEDERATED` data catalog (for example, `REDSHIFT`, `MYSQL`, or `SQLSERVER`). For information about individual connectors, see [Available data source connectors](https://docs.aws.amazon.com/athena/latest/ug/connectors-available.html).
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Text of the error that occurred during data catalog creation or deletion.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataCatalogOutput {
  /**
   * Contains information about a data catalog in an Amazon Web Services account.
   *
   * > **Note:** In the Athena console, data catalogs are listed as "data sources" on the **Data sources** page under the **Data source name** column.
   *
   * @public
   */
  DataCatalog?: DataCatalog | undefined;
}

/**
 * @public
 */
export interface CreateNamedQueryInput {
  /**
   * The query name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The query description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The database to which the query belongs.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The contents of the query with all query statements.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another `CreateNamedQuery` request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the `QueryString`, an error is returned.
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the workgroup in which the named query is being created.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface CreateNamedQueryOutput {
  /**
   * The unique ID of the query.
   *
   * @public
   */
  NamedQueryId?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInput {
  /**
   * The name of the Spark enabled workgroup in which the notebook will be created.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * The name of the `ipynb` file to be created in the Spark workgroup, without the `.ipynb` extension.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookOutput {
  /**
   * A unique identifier for the notebook.
   *
   * @public
   */
  NotebookId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePreparedStatementInput {
  /**
   * The name of the prepared statement.
   *
   * @public
   */
  StatementName: string | undefined;

  /**
   * The name of the workgroup to which the prepared statement belongs.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * The query string for the prepared statement.
   *
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * The description of the prepared statement.
   *
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
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedNotebookUrlResponse {
  /**
   * The URL of the notebook. The URL includes the authentication token and notebook file name and points directly to the opened notebook.
   *
   * @public
   */
  NotebookUrl: string | undefined;

  /**
   * The authentication token for the notebook.
   *
   * @public
   */
  AuthToken: string | undefined;

  /**
   * The UTC epoch time when the authentication token expires.
   *
   * @public
   */
  AuthTokenExpirationTime: number | undefined;
}

/**
 * Specifies the customer managed KMS key that is used to encrypt the user's data stores in Athena. When an Amazon Web Services managed key is used, this value is null. This setting does not apply to Athena SQL workgroups.
 *
 * @public
 */
export interface CustomerContentEncryptionConfiguration {
  /**
   * The customer managed KMS key that is used to encrypt the user's data stores in Athena.
   *
   * @public
   */
  KmsKey: string | undefined;
}

/**
 * A classification refers to a set of specific configurations.
 *
 * @public
 */
export interface Classification {
  /**
   * The name of the configuration classification.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A set of properties specified within a configuration classification.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * The engine configuration for the workgroup, which includes the minimum/maximum number of Data Processing Units (DPU) that queries should use when running in provisioned capacity. If not specified, Athena uses default values (Default value for min is 4 and for max is Minimum of 124 and allocated DPUs).
 *
 * To specify DPU values for PC queries the WG containing EngineConfiguration should have the following values: The name of the Classifications should be `athena-query-engine-properties`, with the only allowed properties as `max-dpu-count` and `min-dpu-count`.
 *
 * @public
 */
export interface EngineConfiguration {
  /**
   * The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
   *
   * @public
   */
  CoordinatorDpuSize?: number | undefined;

  /**
   * The maximum number of DPUs that can run concurrently.
   *
   * @public
   */
  MaxConcurrentDpus?: number | undefined;

  /**
   * The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
   *
   * @public
   */
  DefaultExecutorDpuSize?: number | undefined;

  /**
   * Contains additional notebook engine `MAP<string, string>` parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named `NotebookId` to `AdditionalConfigs` that has the value of the Athena notebook ID.
   *
   * @public
   */
  AdditionalConfigs?: Record<string, string> | undefined;

  /**
   * Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.
   *
   * @public
   */
  SparkProperties?: Record<string, string> | undefined;

  /**
   * The configuration classifications that can be specified for the engine.
   *
   * @public
   */
  Classifications?: Classification[] | undefined;
}

/**
 * Specifies whether the workgroup is IAM Identity Center supported.
 *
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * Specifies whether the workgroup is IAM Identity Center supported.
   *
   * @public
   */
  EnableIdentityCenter?: boolean | undefined;

  /**
   * The IAM Identity Center instance ARN that the workgroup associates to.
   *
   * @public
   */
  IdentityCenterInstanceArn?: string | undefined;
}

/**
 * Configuration settings for delivering logs to Amazon CloudWatch log groups.
 *
 * @public
 */
export interface CloudWatchLoggingConfiguration {
  /**
   * Enables CloudWatch logging.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
   *
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * Prefix for the CloudWatch log stream name.
   *
   * @public
   */
  LogStreamNamePrefix?: string | undefined;

  /**
   * The types of logs that you want to publish to CloudWatch.
   *
   * @public
   */
  LogTypes?: Record<string, string[]> | undefined;
}

/**
 * Configuration settings for delivering logs to Amazon S3 buckets.
 *
 * @public
 */
export interface ManagedLoggingConfiguration {
  /**
   * Enables mamanged log persistence.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The KMS key ARN to encrypt the logs stored in managed log persistence.
   *
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * Configuration settings for delivering logs to Amazon S3 buckets.
 *
 * @public
 */
export interface S3LoggingConfiguration {
  /**
   * Enables S3 log delivery.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * The Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  LogLocation?: string | undefined;
}

/**
 * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
 *
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * Configuration settings for delivering logs to Amazon CloudWatch log groups.
   *
   * @public
   */
  CloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration | undefined;

  /**
   * Configuration settings for managed log persistence.
   *
   * @public
   */
  ManagedLoggingConfiguration?: ManagedLoggingConfiguration | undefined;

  /**
   * Configuration settings for delivering logs to Amazon S3 buckets.
   *
   * @public
   */
  S3LoggingConfiguration?: S3LoggingConfiguration | undefined;
}

/**
 * The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query and calculation results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in `EnforceWorkGroupConfiguration` (true/false) in the `WorkGroupConfiguration`. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
 *
 * @public
 */
export interface WorkGroupConfiguration {
  /**
   * The configuration for the workgroup, which includes the location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. To run the query, you must specify the query results location using one of the ways: either in the workgroup using this setting, or for individual queries (client-side), using ResultConfiguration$OutputLocation. If none of them is set, Athena issues an error that no output location is provided.
   *
   * @public
   */
  ResultConfiguration?: ResultConfiguration | undefined;

  /**
   * The configuration for storing results in Athena owned storage, which includes whether this feature is enabled; whether encryption configuration, if any, is used for encrypting query results.
   *
   * @public
   */
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration | undefined;

  /**
   * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used. This property is not required for Apache Spark enabled workgroups. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  EnforceWorkGroupConfiguration?: boolean | undefined;

  /**
   * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
   *
   * @public
   */
  PublishCloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
   *
   * @public
   */
  BytesScannedCutoffPerQuery?: number | undefined;

  /**
   * If set to `true`, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to `false`, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is `false`. For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service Developer Guide*.
   *
   * @public
   */
  RequesterPaysEnabled?: boolean | undefined;

  /**
   * The engine version that all queries running on the workgroup use. Queries on the `AmazonAthenaPreviewFunctionality` workgroup run on the preview engine regardless of this setting.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * Specifies a user defined JSON string that is passed to the notebook engine.
   *
   * @public
   */
  AdditionalConfiguration?: string | undefined;

  /**
   * The ARN of the execution role used to access user resources for Spark sessions and IAM Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and IAM Identity Center enabled workgroups. The property is required for IAM Identity Center enabled workgroups.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The engine configuration for the workgroup, which includes the minimum/maximum number of Data Processing Units (DPU) that queries should use when running in provisioned capacity. If not specified, Athena uses default values (Default value for min is 4 and for max is Minimum of 124 and allocated DPUs).
   *
   * To specify DPU values for PC queries the WG containing EngineConfiguration should have the following values: The name of the Classifications should be `athena-query-engine-properties`, with the only allowed properties as `max-dpu-count` and `min-dpu-count`.
   *
   * @public
   */
  EngineConfiguration?: EngineConfiguration | undefined;

  /**
   * Specifies the KMS key that is used to encrypt the user's data stores in Athena. This setting does not apply to Athena SQL workgroups.
   *
   * @public
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration | undefined;

  /**
   * Enforces a minimal level of encryption for the workgroup for query and calculation results that are written to Amazon S3. When enabled, workgroup users can set encryption only to the minimum level set by the administrator or higher when they submit queries.
   *
   * The `EnforceWorkGroupConfiguration` setting takes precedence over the `EnableMinimumEncryptionConfiguration` flag. This means that if `EnforceWorkGroupConfiguration` is true, the `EnableMinimumEncryptionConfiguration` flag is ignored, and the workgroup configuration for encryption is used.
   *
   * @public
   */
  EnableMinimumEncryptionConfiguration?: boolean | undefined;

  /**
   * Specifies whether the workgroup is IAM Identity Center supported.
   *
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;

  /**
   * Specifies whether Amazon S3 access grants are enabled for query results.
   *
   * @public
   */
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateWorkGroupInput {
  /**
   * The workgroup name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Contains configuration information for creating an Athena SQL workgroup or Spark enabled Athena workgroup. Athena SQL workgroup configuration includes the location in Amazon S3 where query and calculation results are stored, the encryption configuration, if any, used for encrypting query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the limit for the amount of bytes scanned (cutoff) per query, if it is specified, and whether workgroup's settings (specified with `EnforceWorkGroupConfiguration`) in the `WorkGroupConfiguration` override client-side settings. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
   *
   * @public
   */
  Configuration?: WorkGroupConfiguration | undefined;

  /**
   * The workgroup description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of comma separated tags to add to the workgroup that is created.
   *
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
   * The name of the capacity reservation to delete.
   *
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
   * The name of the data catalog to delete.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Deletes the Athena Data Catalog. You can only use this with the `FEDERATED` catalogs. You usually perform this before registering the connector with Glue Data Catalog. After deletion, you will have to manage the Glue Connection and Lambda function.
   *
   * @public
   */
  DeleteCatalogOnly?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDataCatalogOutput {
  /**
   * Contains information about a data catalog in an Amazon Web Services account.
   *
   * > **Note:** In the Athena console, data catalogs are listed as "data sources" on the **Data sources** page under the **Data source name** column.
   *
   * @public
   */
  DataCatalog?: DataCatalog | undefined;
}

/**
 * @public
 */
export interface DeleteNamedQueryInput {
  /**
   * The unique ID of the query to delete.
   *
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
   * The ID of the notebook to delete.
   *
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
   * The name of the prepared statement to delete.
   *
   * @public
   */
  StatementName: string | undefined;

  /**
   * The workgroup to which the statement to be deleted belongs.
   *
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
   * The unique name of the workgroup to delete.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * The option to delete the workgroup and its contents even if the workgroup contains any named queries, query executions, or notebooks.
   *
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
   * The ID of the notebook to export.
   *
   * @public
   */
  NotebookId: string | undefined;
}

/**
 * Contains metadata for notebook, including the notebook name, ID, workgroup, and time created.
 *
 * @public
 */
export interface NotebookMetadata {
  /**
   * The notebook ID.
   *
   * @public
   */
  NotebookId?: string | undefined;

  /**
   * The name of the notebook.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The name of the Spark enabled workgroup to which the notebook belongs.
   *
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * The time when the notebook was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The type of notebook. Currently, the only valid type is `IPYNB`.
   *
   * @public
   */
  Type?: NotebookType | undefined;

  /**
   * The time when the notebook was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ExportNotebookOutput {
  /**
   * The notebook metadata, including notebook ID, notebook name, and workgroup name.
   *
   * @public
   */
  NotebookMetadata?: NotebookMetadata | undefined;

  /**
   * The content of the exported notebook.
   *
   * @public
   */
  Payload?: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionRequest {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * Contains information about an application-specific calculation result.
 *
 * @public
 */
export interface CalculationResult {
  /**
   * The Amazon S3 location of the `stdout` file for the calculation.
   *
   * @public
   */
  StdOutS3Uri?: string | undefined;

  /**
   * The Amazon S3 location of the `stderr` error messages file for the calculation.
   *
   * @public
   */
  StdErrorS3Uri?: string | undefined;

  /**
   * The Amazon S3 location of the folder for the calculation results.
   *
   * @public
   */
  ResultS3Uri?: string | undefined;

  /**
   * The data format of the calculation result.
   *
   * @public
   */
  ResultType?: string | undefined;
}

/**
 * Contains statistics for a notebook calculation.
 *
 * @public
 */
export interface CalculationStatistics {
  /**
   * The data processing unit execution time in milliseconds for the calculation.
   *
   * @public
   */
  DpuExecutionInMillis?: number | undefined;

  /**
   * The progress of the calculation.
   *
   * @public
   */
  Progress?: string | undefined;
}

/**
 * Contains information about the status of a notebook calculation.
 *
 * @public
 */
export interface CalculationStatus {
  /**
   * The date and time the calculation was submitted for processing.
   *
   * @public
   */
  SubmissionDateTime?: Date | undefined;

  /**
   * The date and time the calculation completed processing.
   *
   * @public
   */
  CompletionDateTime?: Date | undefined;

  /**
   * The state of the calculation execution. A description of each state follows.
   *
   * `CREATING` - The calculation is in the process of being created.
   *
   * `CREATED` - The calculation has been created and is ready to run.
   *
   * `QUEUED` - The calculation has been queued for processing.
   *
   * `RUNNING` - The calculation is running.
   *
   * `CANCELING` - A request to cancel the calculation has been received and the system is working to stop it.
   *
   * `CANCELED` - The calculation is no longer running as the result of a cancel request.
   *
   * `COMPLETED` - The calculation has completed without error.
   *
   * `FAILED` - The calculation failed and is no longer running.
   *
   * @public
   */
  State?: CalculationExecutionState | undefined;

  /**
   * The reason for the calculation state change (for example, the calculation was canceled because the session was terminated).
   *
   * @public
   */
  StateChangeReason?: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionResponse {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId?: string | undefined;

  /**
   * The session ID that the calculation ran in.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The description of the calculation execution.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon S3 location in which calculation results are stored.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * Contains information about the status of the calculation.
   *
   * @public
   */
  Status?: CalculationStatus | undefined;

  /**
   * Contains information about the data processing unit (DPU) execution time and progress. This field is populated only when statistics are available.
   *
   * @public
   */
  Statistics?: CalculationStatistics | undefined;

  /**
   * Contains result information. This field is populated only if the calculation is completed.
   *
   * @public
   */
  Result?: CalculationResult | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionCodeRequest {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionCodeResponse {
  /**
   * The unencrypted code that was executed for the calculation.
   *
   * @public
   */
  CodeBlock?: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionStatusRequest {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetCalculationExecutionStatusResponse {
  /**
   * Contains information about the calculation execution status.
   *
   * @public
   */
  Status?: CalculationStatus | undefined;

  /**
   * Contains information about the DPU execution time and progress.
   *
   * @public
   */
  Statistics?: CalculationStatistics | undefined;
}

/**
 * @public
 */
export interface GetCapacityAssignmentConfigurationInput {
  /**
   * The name of the capacity reservation to retrieve the capacity assignment configuration for.
   *
   * @public
   */
  CapacityReservationName: string | undefined;
}

/**
 * A mapping between one or more workgroups and a capacity reservation.
 *
 * @public
 */
export interface CapacityAssignment {
  /**
   * The list of workgroup names for the capacity assignment.
   *
   * @public
   */
  WorkGroupNames?: string[] | undefined;
}

/**
 * Assigns Athena workgroups (and hence their queries) to capacity reservations. A capacity reservation can have only one capacity assignment configuration, but the capacity assignment configuration can be made up of multiple individual assignments. Each assignment specifies how Athena queries can consume capacity from the capacity reservation that their workgroup is mapped to.
 *
 * @public
 */
export interface CapacityAssignmentConfiguration {
  /**
   * The name of the reservation that the capacity assignment configuration is for.
   *
   * @public
   */
  CapacityReservationName?: string | undefined;

  /**
   * The list of assignments that make up the capacity assignment configuration.
   *
   * @public
   */
  CapacityAssignments?: CapacityAssignment[] | undefined;
}

/**
 * @public
 */
export interface GetCapacityAssignmentConfigurationOutput {
  /**
   * The requested capacity assignment configuration for the specified capacity reservation.
   *
   * @public
   */
  CapacityAssignmentConfiguration: CapacityAssignmentConfiguration | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationInput {
  /**
   * The name of the capacity reservation.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.
 *
 * @public
 */
export interface CapacityAllocation {
  /**
   * The status of the capacity allocation.
   *
   * @public
   */
  Status: CapacityAllocationStatus | undefined;

  /**
   * The status message of the capacity allocation.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The time when the capacity allocation was requested.
   *
   * @public
   */
  RequestTime: Date | undefined;

  /**
   * The time when the capacity allocation request was completed.
   *
   * @public
   */
  RequestCompletionTime?: Date | undefined;
}

/**
 * A reservation for a specified number of data processing units (DPUs). When a reservation is initially created, it has no DPUs. Athena allocates DPUs until the allocated amount equals the requested amount.
 *
 * @public
 */
export interface CapacityReservation {
  /**
   * The name of the capacity reservation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The status of the capacity reservation.
   *
   * @public
   */
  Status: CapacityReservationStatus | undefined;

  /**
   * The number of data processing units requested.
   *
   * @public
   */
  TargetDpus: number | undefined;

  /**
   * The number of data processing units currently allocated.
   *
   * @public
   */
  AllocatedDpus: number | undefined;

  /**
   * Contains the submission time of a single allocation request for a capacity reservation and the most recent status of the attempted allocation.
   *
   * @public
   */
  LastAllocation?: CapacityAllocation | undefined;

  /**
   * The time of the most recent capacity allocation that succeeded.
   *
   * @public
   */
  LastSuccessfulAllocationTime?: Date | undefined;

  /**
   * The time in UTC epoch millis when the capacity reservation was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetCapacityReservationOutput {
  /**
   * The requested capacity reservation structure.
   *
   * @public
   */
  CapacityReservation: CapacityReservation | undefined;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * The name of the data catalog that contains the database to return.
   *
   * @public
   */
  CatalogName: string | undefined;

  /**
   * The name of the database to return.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * Contains metadata information for a database in a data catalog.
 *
 * @public
 */
export interface Database {
  /**
   * The name of the database.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An optional description of the database.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A set of custom key/value pairs.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * The database returned.
   *
   * @public
   */
  Database?: Database | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogInput {
  /**
   * The name of the data catalog to return.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the workgroup. Required if making an IAM Identity Center request.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface GetDataCatalogOutput {
  /**
   * The data catalog returned.
   *
   * @public
   */
  DataCatalog?: DataCatalog | undefined;
}

/**
 * @public
 */
export interface GetNamedQueryInput {
  /**
   * The unique ID of the query. Use ListNamedQueries to get query IDs.
   *
   * @public
   */
  NamedQueryId: string | undefined;
}

/**
 * @public
 */
export interface GetNamedQueryOutput {
  /**
   * Information about the query.
   *
   * @public
   */
  NamedQuery?: NamedQuery | undefined;
}

/**
 * @public
 */
export interface GetNotebookMetadataInput {
  /**
   * The ID of the notebook whose metadata is to be retrieved.
   *
   * @public
   */
  NotebookId: string | undefined;
}

/**
 * @public
 */
export interface GetNotebookMetadataOutput {
  /**
   * The metadata that is returned for the specified notebook ID.
   *
   * @public
   */
  NotebookMetadata?: NotebookMetadata | undefined;
}

/**
 * @public
 */
export interface GetPreparedStatementInput {
  /**
   * The name of the prepared statement to retrieve.
   *
   * @public
   */
  StatementName: string | undefined;

  /**
   * The workgroup to which the statement to be retrieved belongs.
   *
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface GetPreparedStatementOutput {
  /**
   * The name of the prepared statement that was retrieved.
   *
   * @public
   */
  PreparedStatement?: PreparedStatement | undefined;
}

/**
 * @public
 */
export interface GetQueryExecutionInput {
  /**
   * The unique ID of the query execution.
   *
   * @public
   */
  QueryExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryExecutionOutput {
  /**
   * Information about the query execution.
   *
   * @public
   */
  QueryExecution?: QueryExecution | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsInput {
  /**
   * The unique ID of the query execution.
   *
   * @public
   */
  QueryExecutionId: string | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results (rows) to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When you set this to `DATA_ROWS` or empty, `GetQueryResults` returns the query results in rows. If set to `DATA_MANIFEST`, it returns the manifest file in rows. Only the query types `CREATE TABLE AS SELECT`, `UNLOAD`, and `INSERT` can generate a manifest file. If you use `DATA_MANIFEST` for other query types, the query will fail.
   *
   * @public
   */
  QueryResultType?: QueryResultType | undefined;
}

/**
 * Information about the columns in a query execution result.
 *
 * @public
 */
export interface ColumnInfo {
  /**
   * The catalog to which the query results belong.
   *
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * The schema name (database name) to which the query results belong.
   *
   * @public
   */
  SchemaName?: string | undefined;

  /**
   * The table name for the query results.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The name of the column.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A column label.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The data type of the column.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * For `DECIMAL` data types, specifies the total number of digits, up to 38. For performance reasons, we recommend up to 18 digits.
   *
   * @public
   */
  Precision?: number | undefined;

  /**
   * For `DECIMAL` data types, specifies the total number of digits in the fractional part of the value. Defaults to 0.
   *
   * @public
   */
  Scale?: number | undefined;

  /**
   * Unsupported constraint. This value always shows as `UNKNOWN`.
   *
   * @public
   */
  Nullable?: ColumnNullable | undefined;

  /**
   * Indicates whether values in the column are case-sensitive.
   *
   * @public
   */
  CaseSensitive?: boolean | undefined;
}

/**
 * The metadata that describes the column structure and data types of a table of query results. To return a `ResultSetMetadata` object, use GetQueryResults.
 *
 * @public
 */
export interface ResultSetMetadata {
  /**
   * Information about the columns returned in a query result metadata.
   *
   * @public
   */
  ColumnInfo?: ColumnInfo[] | undefined;
}

/**
 * A piece of data (a field in the table).
 *
 * @public
 */
export interface Datum {
  /**
   * The value of the datum.
   *
   * @public
   */
  VarCharValue?: string | undefined;
}

/**
 * The rows that make up a query result table.
 *
 * @public
 */
export interface Row {
  /**
   * The data that populates a row in a query result table.
   *
   * @public
   */
  Data?: Datum[] | undefined;
}

/**
 * The metadata and rows that make up a query result set. The metadata describes the column structure and data types. To return a `ResultSet` object, use GetQueryResults.
 *
 * @public
 */
export interface ResultSet {
  /**
   * The rows in the table.
   *
   * @public
   */
  Rows?: Row[] | undefined;

  /**
   * The metadata that describes the column structure and data types of a table of query results.
   *
   * @public
   */
  ResultSetMetadata?: ResultSetMetadata | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsOutput {
  /**
   * The number of rows inserted with a `CREATE TABLE AS SELECT`, `INSERT INTO`, or `UPDATE` statement.
   *
   * @public
   */
  UpdateCount?: number | undefined;

  /**
   * The results of the query execution.
   *
   * @public
   */
  ResultSet?: ResultSet | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryRuntimeStatisticsInput {
  /**
   * The unique ID of the query execution.
   *
   * @public
   */
  QueryExecutionId: string | undefined;
}

/**
 * Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.
 *
 * @public
 */
export interface QueryRuntimeStatisticsRows {
  /**
   * The number of rows read to execute the query.
   *
   * @public
   */
  InputRows?: number | undefined;

  /**
   * The number of bytes read to execute the query.
   *
   * @public
   */
  InputBytes?: number | undefined;

  /**
   * The number of bytes returned by the query.
   *
   * @public
   */
  OutputBytes?: number | undefined;

  /**
   * The number of rows returned by the query.
   *
   * @public
   */
  OutputRows?: number | undefined;
}

/**
 * Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.
 *
 * @public
 */
export interface QueryRuntimeStatisticsTimeline {
  /**
   * The number of milliseconds that the query was in your query queue waiting for resources. Note that if transient errors occur, Athena might automatically add the query back to the queue.
   *
   * @public
   */
  QueryQueueTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena spends on preprocessing before it submits the query to the engine.
   *
   * @public
   */
  ServicePreProcessingTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena took to plan the query processing flow. This includes the time spent retrieving table partitions from the data source. Note that because the query engine performs the query planning, query planning time is a subset of engine processing time.
   *
   * @public
   */
  QueryPlanningTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that the query took to execute.
   *
   * @public
   */
  EngineExecutionTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena took to finalize and publish the query results after the query engine finished running the query.
   *
   * @public
   */
  ServiceProcessingTimeInMillis?: number | undefined;

  /**
   * The number of milliseconds that Athena took to run the query.
   *
   * @public
   */
  TotalExecutionTimeInMillis?: number | undefined;
}

/**
 * @public
 */
export interface GetResourceDashboardRequest {
  /**
   * The The Amazon Resource Name (ARN) for a session.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface GetResourceDashboardResponse {
  /**
   * The Live UI/Persistence UI url for a session.
   *
   * @public
   */
  Url: string | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * Contains session configuration information.
 *
 * @public
 */
export interface SessionConfiguration {
  /**
   * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * The Amazon S3 location that stores information for the notebook.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;

  /**
   * The idle timeout in seconds for the session.
   *
   * @public
   */
  IdleTimeoutSeconds?: number | undefined;

  /**
   * The idle timeout in seconds for the session.
   *
   * @public
   */
  SessionIdleTimeoutInMinutes?: number | undefined;

  /**
   * If query and calculation results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS`) and key information.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * Contains statistics for a session.
 *
 * @public
 */
export interface SessionStatistics {
  /**
   * The data processing unit execution time for a session in milliseconds.
   *
   * @public
   */
  DpuExecutionInMillis?: number | undefined;
}

/**
 * Contains information about the status of a session.
 *
 * @public
 */
export interface SessionStatus {
  /**
   * The date and time that the session started.
   *
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * The most recent date and time that the session was modified.
   *
   * @public
   */
  LastModifiedDateTime?: Date | undefined;

  /**
   * The date and time that the session ended.
   *
   * @public
   */
  EndDateTime?: Date | undefined;

  /**
   * The date and time starting at which the session became idle. Can be empty if the session is not currently idle.
   *
   * @public
   */
  IdleSinceDateTime?: Date | undefined;

  /**
   * The state of the session. A description of each state follows.
   *
   * `CREATING` - The session is being started, including acquiring resources.
   *
   * `CREATED` - The session has been started.
   *
   * `IDLE` - The session is able to accept a calculation.
   *
   * `BUSY` - The session is processing another task and is unable to accept a calculation.
   *
   * `TERMINATING` - The session is in the process of shutting down.
   *
   * `TERMINATED` - The session and its resources are no longer running.
   *
   * `DEGRADED` - The session has no healthy coordinators.
   *
   * `FAILED` - Due to a failure, the session and its resources are no longer running.
   *
   * @public
   */
  State?: SessionState | undefined;

  /**
   * The reason for the session state change (for example, canceled because the session was terminated).
   *
   * @public
   */
  StateChangeReason?: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The session description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The workgroup to which the session belongs.
   *
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * The engine version used by the session (for example, `PySpark engine version 3`). You can get a list of engine versions by calling ListEngineVersions.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Contains engine configuration information like DPU usage.
   *
   * @public
   */
  EngineConfiguration?: EngineConfiguration | undefined;

  /**
   * The notebook version.
   *
   * @public
   */
  NotebookVersion?: string | undefined;

  /**
   * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * Contains the workgroup configuration information used by the session.
   *
   * @public
   */
  SessionConfiguration?: SessionConfiguration | undefined;

  /**
   * Contains information about the status of the session.
   *
   * @public
   */
  Status?: SessionStatus | undefined;

  /**
   * Contains the DPU execution time.
   *
   * @public
   */
  Statistics?: SessionStatistics | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointRequest {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionEndpointResponse {
  /**
   * The endpoint for connecting to the session.
   *
   * @public
   */
  EndpointUrl: string | undefined;

  /**
   * Authentication token for the connection
   *
   * @public
   */
  AuthToken: string | undefined;

  /**
   * Expiration time of the auth token.
   *
   * @public
   */
  AuthTokenExpirationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSessionStatusRequest {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionStatusResponse {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * Contains information about the status of the session.
   *
   * @public
   */
  Status?: SessionStatus | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataInput {
  /**
   * The name of the data catalog that contains the database and table metadata to return.
   *
   * @public
   */
  CatalogName: string | undefined;

  /**
   * The name of the database that contains the table metadata to return.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table for which metadata is returned.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * Contains metadata for a column in a table.
 *
 * @public
 */
export interface Column {
  /**
   * The name of the column.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the column.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Optional information about the column.
   *
   * @public
   */
  Comment?: string | undefined;
}

/**
 * Contains metadata for a table.
 *
 * @public
 */
export interface TableMetadata {
  /**
   * The name of the table.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The time that the table was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The last time the table was accessed.
   *
   * @public
   */
  LastAccessTime?: Date | undefined;

  /**
   * The type of table. In Athena, only `EXTERNAL_TABLE` is supported.
   *
   * @public
   */
  TableType?: string | undefined;

  /**
   * A list of the columns in the table.
   *
   * @public
   */
  Columns?: Column[] | undefined;

  /**
   * A list of the partition keys in the table.
   *
   * @public
   */
  PartitionKeys?: Column[] | undefined;

  /**
   * A set of custom key/value pairs for table properties.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTableMetadataOutput {
  /**
   * An object that contains table metadata.
   *
   * @public
   */
  TableMetadata?: TableMetadata | undefined;
}

/**
 * @public
 */
export interface GetWorkGroupInput {
  /**
   * The name of the workgroup.
   *
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * A workgroup, which contains a name, description, creation time, state, and other configuration, listed under WorkGroup$Configuration. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in `EnforceWorkGroupConfiguration` (true/false) in the `WorkGroupConfiguration`. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
 *
 * @public
 */
export interface WorkGroup {
  /**
   * The workgroup name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The state of the workgroup: ENABLED or DISABLED.
   *
   * @public
   */
  State?: WorkGroupState | undefined;

  /**
   * The configuration of the workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption configuration, if any, used for query and calculation results; whether the Amazon CloudWatch Metrics are enabled for the workgroup; whether workgroup settings override client-side settings; and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in `EnforceWorkGroupConfiguration` (true/false) in the `WorkGroupConfiguration`. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
   *
   * @public
   */
  Configuration?: WorkGroupConfiguration | undefined;

  /**
   * The workgroup description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date and time the workgroup was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The ARN of the IAM Identity Center enabled application associated with the workgroup.
   *
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkGroupOutput {
  /**
   * Information about the workgroup.
   *
   * @public
   */
  WorkGroup?: WorkGroup | undefined;
}

/**
 * @public
 */
export interface ImportNotebookInput {
  /**
   * The name of the Spark enabled workgroup to import the notebook to.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * The name of the notebook to import.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The notebook content to be imported. The payload must be in `ipynb` format.
   *
   * @public
   */
  Payload?: string | undefined;

  /**
   * The notebook content type. Currently, the only valid type is `IPYNB`.
   *
   * @public
   */
  Type: NotebookType | undefined;

  /**
   * A URI that specifies the Amazon S3 location of a notebook file in `ipynb` format.
   *
   * @public
   */
  NotebookS3LocationUri?: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to import the notebook is idempotent (executes only once).
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportNotebookOutput {
  /**
   * The ID assigned to the imported notebook.
   *
   * @public
   */
  NotebookId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationDPUSizesInput {
  /**
   * Specifies the maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the application runtime IDs and their supported DPU sizes.
 *
 * @public
 */
export interface ApplicationDPUSizes {
  /**
   * The name of the supported application runtime (for example, `Athena notebook version 1`).
   *
   * @public
   */
  ApplicationRuntimeId?: string | undefined;

  /**
   * A list of the supported DPU sizes that the application runtime supports.
   *
   * @public
   */
  SupportedDPUSizes?: number[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationDPUSizesOutput {
  /**
   * A list of the supported DPU sizes that the application runtime supports.
   *
   * @public
   */
  ApplicationDPUSizes?: ApplicationDPUSizes[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCalculationExecutionsRequest {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * A filter for a specific calculation execution state. A description of each state follows.
   *
   * `CREATING` - The calculation is in the process of being created.
   *
   * `CREATED` - The calculation has been created and is ready to run.
   *
   * `QUEUED` - The calculation has been queued for processing.
   *
   * `RUNNING` - The calculation is running.
   *
   * `CANCELING` - A request to cancel the calculation has been received and the system is working to stop it.
   *
   * `CANCELED` - The calculation is no longer running as the result of a cancel request.
   *
   * `COMPLETED` - The calculation has completed without error.
   *
   * `FAILED` - The calculation failed and is no longer running.
   *
   * @public
   */
  StateFilter?: CalculationExecutionState | undefined;

  /**
   * The maximum number of calculation executions to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information for a notebook calculation.
 *
 * @public
 */
export interface CalculationSummary {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId?: string | undefined;

  /**
   * A description of the calculation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contains information about the status of the calculation.
   *
   * @public
   */
  Status?: CalculationStatus | undefined;
}

/**
 * @public
 */
export interface ListCalculationExecutionsResponse {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of CalculationSummary objects.
   *
   * @public
   */
  Calculations?: CalculationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCapacityReservationsInput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCapacityReservationsOutput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The capacity reservations for the current account.
   *
   * @public
   */
  CapacityReservations: CapacityReservation[] | undefined;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * The name of the data catalog that contains the databases to return.
   *
   * @public
   */
  CatalogName: string | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * A list of databases from a data catalog.
   *
   * @public
   */
  DatabaseList?: Database[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataCatalogsInput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of data catalogs to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the workgroup. Required if making an IAM Identity Center request.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * The summary information for the data catalog, which includes its name and type.
 *
 * @public
 */
export interface DataCatalogSummary {
  /**
   * The name of the data catalog. The catalog name is unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.
   *
   * @public
   */
  CatalogName?: string | undefined;

  /**
   * The data catalog type.
   *
   * @public
   */
  Type?: DataCatalogType | undefined;

  /**
   * The status of the creation or deletion of the data catalog.
   *
   * - The `LAMBDA`, `GLUE`, and `HIVE` data catalog types are created synchronously. Their status is either `CREATE_COMPLETE` or `CREATE_FAILED`.
   * - The `FEDERATED` data catalog type is created asynchronously.
   *
   * Data catalog creation status:
   *
   * - `CREATE_IN_PROGRESS`: Federated data catalog creation in progress.
   * - `CREATE_COMPLETE`: Data catalog creation complete.
   * - `CREATE_FAILED`: Data catalog could not be created.
   * - `CREATE_FAILED_CLEANUP_IN_PROGRESS`: Federated data catalog creation failed and is being removed.
   * - `CREATE_FAILED_CLEANUP_COMPLETE`: Federated data catalog creation failed and was removed.
   * - `CREATE_FAILED_CLEANUP_FAILED`: Federated data catalog creation failed but could not be removed.
   *
   * Data catalog deletion status:
   *
   * - `DELETE_IN_PROGRESS`: Federated data catalog deletion in progress.
   * - `DELETE_COMPLETE`: Federated data catalog deleted.
   * - `DELETE_FAILED`: Federated data catalog could not be deleted.
   *
   * @public
   */
  Status?: DataCatalogStatus | undefined;

  /**
   * The type of connection for a `FEDERATED` data catalog (for example, `REDSHIFT`, `MYSQL`, or `SQLSERVER`). For information about individual connectors, see [Available data source connectors](https://docs.aws.amazon.com/athena/latest/ug/connectors-available.html).
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Text of the error that occurred during data catalog creation or deletion.
   *
   * @public
   */
  Error?: string | undefined;
}

/**
 * @public
 */
export interface ListDataCatalogsOutput {
  /**
   * A summary list of data catalogs.
   *
   * @public
   */
  DataCatalogsSummary?: DataCatalogSummary[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsInput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of engine versions to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEngineVersionsOutput {
  /**
   * A list of engine versions that are available to choose from.
   *
   * @public
   */
  EngineVersions?: EngineVersion[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutorsRequest {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * A filter for a specific executor state. A description of each state follows.
   *
   * `CREATING` - The executor is being started, including acquiring resources.
   *
   * `CREATED` - The executor has been started.
   *
   * `REGISTERED` - The executor has been registered.
   *
   * `TERMINATING` - The executor is in the process of shutting down.
   *
   * `TERMINATED` - The executor is no longer running.
   *
   * `FAILED` - Due to a failure, the executor is no longer running.
   *
   * @public
   */
  ExecutorStateFilter?: ExecutorState | undefined;

  /**
   * The maximum number of executors to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about an executor.
 *
 * @public
 */
export interface ExecutorsSummary {
  /**
   * The UUID of the executor.
   *
   * @public
   */
  ExecutorId: string | undefined;

  /**
   * The type of executor used for the application (`COORDINATOR`, `GATEWAY`, or `WORKER`).
   *
   * @public
   */
  ExecutorType?: ExecutorType | undefined;

  /**
   * The date and time that the executor started.
   *
   * @public
   */
  StartDateTime?: number | undefined;

  /**
   * The date and time that the executor was terminated.
   *
   * @public
   */
  TerminationDateTime?: number | undefined;

  /**
   * The processing state of the executor. A description of each state follows.
   *
   * `CREATING` - The executor is being started, including acquiring resources.
   *
   * `CREATED` - The executor has been started.
   *
   * `REGISTERED` - The executor has been registered.
   *
   * `TERMINATING` - The executor is in the process of shutting down.
   *
   * `TERMINATED` - The executor is no longer running.
   *
   * `FAILED` - Due to a failure, the executor is no longer running.
   *
   * @public
   */
  ExecutorState?: ExecutorState | undefined;

  /**
   * The smallest unit of compute that a session can request from Athena. Size is measured in data processing unit (DPU) values, a relative measure of processing power.
   *
   * @public
   */
  ExecutorSize?: number | undefined;
}

/**
 * @public
 */
export interface ListExecutorsResponse {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Contains summary information about the executor.
   *
   * @public
   */
  ExecutorsSummary?: ExecutorsSummary[] | undefined;
}

/**
 * @public
 */
export interface ListNamedQueriesInput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of queries to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the workgroup from which the named queries are being returned. If a workgroup is not specified, the saved queries for the primary workgroup are returned.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListNamedQueriesOutput {
  /**
   * The list of unique query IDs.
   *
   * @public
   */
  NamedQueryIds?: string[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A string for searching notebook names.
 *
 * @public
 */
export interface FilterDefinition {
  /**
   * The name of the notebook to search for.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookMetadataInput {
  /**
   * Search filter string.
   *
   * @public
   */
  Filters?: FilterDefinition | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the Spark enabled workgroup to retrieve notebook metadata for.
   *
   * @public
   */
  WorkGroup: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookMetadataOutput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of notebook metadata for the specified workgroup.
   *
   * @public
   */
  NotebookMetadataList?: NotebookMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListNotebookSessionsRequest {
  /**
   * The ID of the notebook to list sessions for.
   *
   * @public
   */
  NotebookId: string | undefined;

  /**
   * The maximum number of notebook sessions to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the notebook session ID and notebook session creation time.
 *
 * @public
 */
export interface NotebookSessionSummary {
  /**
   * The notebook session ID.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The time when the notebook session was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotebookSessionsResponse {
  /**
   * A list of the sessions belonging to the notebook.
   *
   * @public
   */
  NotebookSessionsList: NotebookSessionSummary[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPreparedStatementsInput {
  /**
   * The workgroup to list the prepared statements for.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The name and last modified time of the prepared statement.
 *
 * @public
 */
export interface PreparedStatementSummary {
  /**
   * The name of the prepared statement.
   *
   * @public
   */
  StatementName?: string | undefined;

  /**
   * The last modified time of the prepared statement.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPreparedStatementsOutput {
  /**
   * The list of prepared statements for the workgroup.
   *
   * @public
   */
  PreparedStatements?: PreparedStatementSummary[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQueryExecutionsInput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of query executions to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the workgroup from which queries are being returned. If a workgroup is not specified, a list of available query execution IDs for the queries in the primary workgroup is returned.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListQueryExecutionsOutput {
  /**
   * The unique IDs of each query execution as an array of strings.
   *
   * @public
   */
  QueryExecutionIds?: string[] | undefined;

  /**
   * A token to be used by the next request if this request is truncated.
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
   * The workgroup to which the session belongs.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * A filter for a specific session state. A description of each state follows.
   *
   * `CREATING` - The session is being started, including acquiring resources.
   *
   * `CREATED` - The session has been started.
   *
   * `IDLE` - The session is able to accept a calculation.
   *
   * `BUSY` - The session is processing another task and is unable to accept a calculation.
   *
   * `TERMINATING` - The session is in the process of shutting down.
   *
   * `TERMINATED` - The session and its resources are no longer running.
   *
   * `DEGRADED` - The session has no healthy coordinators.
   *
   * `FAILED` - Due to a failure, the session and its resources are no longer running.
   *
   * @public
   */
  StateFilter?: SessionState | undefined;

  /**
   * The maximum number of sessions to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about a session.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The session description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The engine version used by the session (for example, `PySpark engine version 3`).
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * The notebook version.
   *
   * @public
   */
  NotebookVersion?: string | undefined;

  /**
   * Contains information about the session status.
   *
   * @public
   */
  Status?: SessionStatus | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of sessions.
   *
   * @public
   */
  Sessions?: SessionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTableMetadataInput {
  /**
   * The name of the data catalog for which table metadata should be returned.
   *
   * @public
   */
  CatalogName: string | undefined;

  /**
   * The name of the database for which table metadata should be returned.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A regex filter that pattern-matches table names. If no expression is supplied, metadata for all tables are listed.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog.
   *
   * @public
   */
  WorkGroup?: string | undefined;
}

/**
 * @public
 */
export interface ListTableMetadataOutput {
  /**
   * A list of table metadata.
   *
   * @public
   */
  TableMetadataList?: TableMetadata[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * Lists the tags for the resource with the specified ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results for this request, where the request lists the tags for the resource with the specified ARN.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned per request that lists the tags for the resource.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tags associated with the specified resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token to be used by the next request if this request is truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkGroupsInput {
  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of workgroups to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.
 *
 * @public
 */
export interface WorkGroupSummary {
  /**
   * The name of the workgroup.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the workgroup.
   *
   * @public
   */
  State?: WorkGroupState | undefined;

  /**
   * The workgroup description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The workgroup creation date and time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The engine version setting for all queries on the workgroup. Queries on the `AmazonAthenaPreviewFunctionality` workgroup run on the preview engine regardless of this setting.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * The ARN of the IAM Identity Center enabled application associated with the workgroup.
   *
   * @public
   */
  IdentityCenterApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkGroupsOutput {
  /**
   * A list of WorkGroupSummary objects that include the names, descriptions, creation times, and states for each workgroup.
   *
   * @public
   */
  WorkGroups?: WorkGroupSummary[] | undefined;

  /**
   * A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the `NextToken` from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutCapacityAssignmentConfigurationInput {
  /**
   * The name of the capacity reservation to put a capacity assignment configuration for.
   *
   * @public
   */
  CapacityReservationName: string | undefined;

  /**
   * The list of assignments for the capacity assignment configuration.
   *
   * @public
   */
  CapacityAssignments: CapacityAssignment[] | undefined;
}

/**
 * @public
 */
export interface PutCapacityAssignmentConfigurationOutput {}

/**
 * Contains configuration information for the calculation.
 *
 * @public
 */
export interface CalculationConfiguration {
  /**
   * A string that contains the code for the calculation.
   *
   * @public
   */
  CodeBlock?: string | undefined;
}

/**
 * @public
 */
export interface StartCalculationExecutionRequest {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * A description of the calculation.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contains configuration information for the calculation.
   *
   * @deprecated Structure is deprecated.
   * @public
   */
  CalculationConfiguration?: CalculationConfiguration | undefined;

  /**
   * A string that contains the code of the calculation. Use this parameter instead of CalculationConfiguration$CodeBlock, which is deprecated.
   *
   * @public
   */
  CodeBlock?: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the calculation is idempotent (executes only once). If another `StartCalculationExecutionRequest` is received, the same response is returned and another calculation is not created. If a parameter has changed, an error is returned.
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCalculationExecutionResponse {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId?: string | undefined;

  /**
   * `CREATING` - The calculation is in the process of being created.
   *
   * `CREATED` - The calculation has been created and is ready to run.
   *
   * `QUEUED` - The calculation has been queued for processing.
   *
   * `RUNNING` - The calculation is running.
   *
   * `CANCELING` - A request to cancel the calculation has been received and the system is working to stop it.
   *
   * `CANCELED` - The calculation is no longer running as the result of a cancel request.
   *
   * `COMPLETED` - The calculation has completed without error.
   *
   * `FAILED` - The calculation failed and is no longer running.
   *
   * @public
   */
  State?: CalculationExecutionState | undefined;
}

/**
 * @public
 */
export interface StartQueryExecutionInput {
  /**
   * The SQL query statements to be executed.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another `StartQueryExecution` request is received, the same response is returned and another query is not created. An error is returned if a parameter, such as `QueryString`, has changed. A call to `StartQueryExecution` that uses a previous client request token returns the same `QueryExecutionId` even if the requester doesn't have permission on the tables specified in `QueryString`.
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The database within which the query executes.
   *
   * @public
   */
  QueryExecutionContext?: QueryExecutionContext | undefined;

  /**
   * Specifies information about where and how to save the results of the query execution. If the query runs in a workgroup, then workgroup's settings may override query settings. This affects the query results location. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
   *
   * @public
   */
  ResultConfiguration?: ResultConfiguration | undefined;

  /**
   * The name of the workgroup in which the query is being started.
   *
   * @public
   */
  WorkGroup?: string | undefined;

  /**
   * A list of values for the parameters in a query. The values are applied sequentially to the parameters in the query in the order in which the parameters occur.
   *
   * @public
   */
  ExecutionParameters?: string[] | undefined;

  /**
   * Specifies the query result reuse behavior for the query.
   *
   * @public
   */
  ResultReuseConfiguration?: ResultReuseConfiguration | undefined;

  /**
   * The engine configuration for the workgroup, which includes the minimum/maximum number of Data Processing Units (DPU) that queries should use when running in provisioned capacity. If not specified, Athena uses default values (Default value for min is 4 and for max is Minimum of 124 and allocated DPUs).
   *
   * To specify minimum and maximum DPU values for Capacity Reservations queries, the workgroup containing `EngineConfiguration` should have the following values: The name of the `Classifications` should be `athena-query-engine-properties`, with the only allowed properties as `max-dpu-count` and `min-dpu-count`.
   *
   * @public
   */
  EngineConfiguration?: EngineConfiguration | undefined;
}

/**
 * @public
 */
export interface StartQueryExecutionOutput {
  /**
   * The unique ID of the query that ran as a result of this request.
   *
   * @public
   */
  QueryExecutionId?: string | undefined;
}

/**
 * @public
 */
export interface StartSessionRequest {
  /**
   * The session description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The workgroup to which the session belongs.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * Contains engine data processing unit (DPU) configuration settings and parameter mappings.
   *
   * @public
   */
  EngineConfiguration: EngineConfiguration | undefined;

  /**
   * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The notebook version. This value is supplied automatically for notebook sessions in the Athena console and is not required for programmatic session access. The only valid notebook version is `Athena notebook version 1`. If you specify a value for `NotebookVersion`, you must also specify a value for `NotebookId`. See EngineConfiguration$AdditionalConfigs.
   *
   * @public
   */
  NotebookVersion?: string | undefined;

  /**
   * The idle timeout in minutes for the session.
   *
   * @public
   */
  SessionIdleTimeoutInMinutes?: number | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the session is idempotent (executes only once). If another `StartSessionRequest` is received, the same response is returned and another session is not created. If a parameter has changed, an error is returned.
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * A list of comma separated tags to add to the session that is created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Copies the tags from the Workgroup to the Session when.
   *
   * @public
   */
  CopyWorkGroupTags?: boolean | undefined;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * The session ID.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * The state of the session. A description of each state follows.
   *
   * `CREATING` - The session is being started, including acquiring resources.
   *
   * `CREATED` - The session has been started.
   *
   * `IDLE` - The session is able to accept a calculation.
   *
   * `BUSY` - The session is processing another task and is unable to accept a calculation.
   *
   * `TERMINATING` - The session is in the process of shutting down.
   *
   * `TERMINATED` - The session and its resources are no longer running.
   *
   * `DEGRADED` - The session has no healthy coordinators.
   *
   * `FAILED` - Due to a failure, the session and its resources are no longer running.
   *
   * @public
   */
  State?: SessionState | undefined;
}

/**
 * @public
 */
export interface StopCalculationExecutionRequest {
  /**
   * The calculation execution UUID.
   *
   * @public
   */
  CalculationExecutionId: string | undefined;
}

/**
 * @public
 */
export interface StopCalculationExecutionResponse {
  /**
   * `CREATING` - The calculation is in the process of being created.
   *
   * `CREATED` - The calculation has been created and is ready to run.
   *
   * `QUEUED` - The calculation has been queued for processing.
   *
   * `RUNNING` - The calculation is running.
   *
   * `CANCELING` - A request to cancel the calculation has been received and the system is working to stop it.
   *
   * `CANCELED` - The calculation is no longer running as the result of a cancel request.
   *
   * `COMPLETED` - The calculation has completed without error.
   *
   * `FAILED` - The calculation failed and is no longer running.
   *
   * @public
   */
  State?: CalculationExecutionState | undefined;
}

/**
 * @public
 */
export interface StopQueryExecutionInput {
  /**
   * The unique ID of the query execution to stop.
   *
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
   * Specifies the ARN of the Athena resource to which tags are to be added.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A collection of one or more tags, separated by commas, to be added to an Athena resource.
   *
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
   * The session ID.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateSessionResponse {
  /**
   * The state of the session. A description of each state follows.
   *
   * `CREATING` - The session is being started, including acquiring resources.
   *
   * `CREATED` - The session has been started.
   *
   * `IDLE` - The session is able to accept a calculation.
   *
   * `BUSY` - The session is processing another task and is unable to accept a calculation.
   *
   * `TERMINATING` - The session is in the process of shutting down.
   *
   * `TERMINATED` - The session and its resources are no longer running.
   *
   * `DEGRADED` - The session has no healthy coordinators.
   *
   * `FAILED` - Due to a failure, the session and its resources are no longer running.
   *
   * @public
   */
  State?: SessionState | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * Specifies the ARN of the resource from which tags are to be removed.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A comma-separated list of one or more tag keys whose tags are to be removed from the specified resource.
   *
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
   * The new number of requested data processing units.
   *
   * @public
   */
  TargetDpus: number | undefined;

  /**
   * The name of the capacity reservation.
   *
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
   * The name of the data catalog to update. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies the type of data catalog to update. Specify `LAMBDA` for a federated catalog, `HIVE` for an external hive metastore, or `GLUE` for an Glue Data Catalog.
   *
   * @public
   */
  Type: DataCatalogType | undefined;

  /**
   * New or modified text that describes the data catalog.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the Lambda function or functions to use for updating the data catalog. This is a mapping whose values depend on the catalog type.
   *
   * - For the `HIVE` data catalog type, use the following syntax. The `metadata-function` parameter is required. `The sdk-version` parameter is optional and defaults to the currently supported version.
   *
   *   `metadata-function=lambda_arn, sdk-version=version_number`
   * - For the `LAMBDA` data catalog type, use one of the following sets of required parameters, but not both.
   *
   *   - If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.
   *
   *     `metadata-function=lambda_arn, record-function=lambda_arn`
   *   - If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.
   *
   *     `function=lambda_arn`
   *
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
   * The unique identifier (UUID) of the query.
   *
   * @public
   */
  NamedQueryId: string | undefined;

  /**
   * The name of the query.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The query description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The contents of the query with all query statements.
   *
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
   * The ID of the notebook to update.
   *
   * @public
   */
  NotebookId: string | undefined;

  /**
   * The updated content for the notebook.
   *
   * @public
   */
  Payload: string | undefined;

  /**
   * The notebook content type. Currently, the only valid type is `IPYNB`.
   *
   * @public
   */
  Type: NotebookType | undefined;

  /**
   * The active notebook session ID. Required if the notebook has an active session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
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
   * The ID of the notebook to update the metadata for.
   *
   * @public
   */
  NotebookId: string | undefined;

  /**
   * A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).
   *
   * > **Important:** This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name to update the notebook to.
   *
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
   * The name of the prepared statement.
   *
   * @public
   */
  StatementName: string | undefined;

  /**
   * The workgroup for the prepared statement.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * The query string for the prepared statement.
   *
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * The description of the prepared statement.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePreparedStatementOutput {}

/**
 * Updates the configuration for managed query results.
 *
 * @public
 */
export interface ManagedQueryResultsConfigurationUpdates {
  /**
   * If set to true, specifies that Athena manages query results in Athena owned storage.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * If you encrypt query and calculation results in Athena owned storage, this field indicates the encryption option (for example, SSE_KMS or CSE_KMS) and key information.
   *
   * @public
   */
  EncryptionConfiguration?: ManagedQueryResultsEncryptionConfiguration | undefined;

  /**
   * If set to true, it removes workgroup from Athena owned storage. The existing query results are cleaned up after 24hrs. You must provide query results in location specified under `ResultConfiguration$OutputLocation`.
   *
   * @public
   */
  RemoveEncryptionConfiguration?: boolean | undefined;
}

/**
 * The information about the updates in the query results, such as output location and encryption configuration for the query results.
 *
 * @public
 */
export interface ResultConfigurationUpdates {
  /**
   * The location in Amazon S3 where your query and calculation results are stored, such as `s3://path/to/query/bucket/`. If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup. The "workgroup settings override" is specified in `EnforceWorkGroupConfiguration` (true/false) in the `WorkGroupConfiguration`. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
   *
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * If set to "true", indicates that the previously-specified query results location (also known as a client-side setting) for queries in this workgroup should be ignored and set to null. If set to "false" or not set, and a value is present in the `OutputLocation` in `ResultConfigurationUpdates` (the client-side setting), the `OutputLocation` in the workgroup's `ResultConfiguration` will be updated with the new value. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  RemoveOutputLocation?: boolean | undefined;

  /**
   * The encryption configuration for query and calculation results.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * If set to "true", indicates that the previously-specified encryption configuration (also known as the client-side setting) for queries in this workgroup should be ignored and set to null. If set to "false" or not set, and a value is present in the `EncryptionConfiguration` in `ResultConfigurationUpdates` (the client-side setting), the `EncryptionConfiguration` in the workgroup's `ResultConfiguration` will be updated with the new value. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  RemoveEncryptionConfiguration?: boolean | undefined;

  /**
   * The Amazon Web Services account ID that you expect to be the owner of the Amazon S3 bucket specified by ResultConfiguration$OutputLocation. If set, Athena uses the value for `ExpectedBucketOwner` when it makes Amazon S3 calls to your specified output location. If the `ExpectedBucketOwner` Amazon Web Services account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.
   *
   * If workgroup settings override client-side settings, then the query uses the `ExpectedBucketOwner` setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * If set to "true", removes the Amazon Web Services account ID previously specified for ResultConfiguration$ExpectedBucketOwner. If set to "false" or not set, and a value is present in the `ExpectedBucketOwner` in `ResultConfigurationUpdates` (the client-side setting), the `ExpectedBucketOwner` in the workgroup's `ResultConfiguration` is updated with the new value. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  RemoveExpectedBucketOwner?: boolean | undefined;

  /**
   * The ACL configuration for the query results.
   *
   * @public
   */
  AclConfiguration?: AclConfiguration | undefined;

  /**
   * If set to `true`, indicates that the previously-specified ACL configuration for queries in this workgroup should be ignored and set to null. If set to `false` or not set, and a value is present in the `AclConfiguration` of `ResultConfigurationUpdates`, the `AclConfiguration` in the workgroup's `ResultConfiguration` is updated with the new value. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  RemoveAclConfiguration?: boolean | undefined;
}

/**
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query and calculation results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
 *
 * @public
 */
export interface WorkGroupConfigurationUpdates {
  /**
   * If set to "true", the settings for the workgroup override client-side settings. If set to "false" client-side settings are used. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * @public
   */
  EnforceWorkGroupConfiguration?: boolean | undefined;

  /**
   * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
   *
   * @public
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates | undefined;

  /**
   * Updates configuration information for managed query results in the workgroup.
   *
   * @public
   */
  ManagedQueryResultsConfigurationUpdates?: ManagedQueryResultsConfigurationUpdates | undefined;

  /**
   * Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.
   *
   * @public
   */
  PublishCloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
   *
   * @public
   */
  BytesScannedCutoffPerQuery?: number | undefined;

  /**
   * Indicates that the data usage control limit per query is removed. WorkGroupConfiguration$BytesScannedCutoffPerQuery
   *
   * @public
   */
  RemoveBytesScannedCutoffPerQuery?: boolean | undefined;

  /**
   * If set to `true`, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to `false`, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is `false`. For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the *Amazon Simple Storage Service Developer Guide*.
   *
   * @public
   */
  RequesterPaysEnabled?: boolean | undefined;

  /**
   * The engine version requested when a workgroup is updated. After the update, all queries on the workgroup run on the requested engine version. If no value was previously set, the default is Auto. Queries on the `AmazonAthenaPreviewFunctionality` workgroup run on the preview engine regardless of this setting.
   *
   * @public
   */
  EngineVersion?: EngineVersion | undefined;

  /**
   * Removes content encryption configuration from an Apache Spark-enabled Athena workgroup.
   *
   * @public
   */
  RemoveCustomerContentEncryptionConfiguration?: boolean | undefined;

  /**
   * Contains a user defined string in JSON format for a Spark-enabled workgroup.
   *
   * @public
   */
  AdditionalConfiguration?: string | undefined;

  /**
   * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * Specifies the customer managed KMS key that is used to encrypt the user's data stores in Athena. When an Amazon Web Services managed key is used, this value is null. This setting does not apply to Athena SQL workgroups.
   *
   * @public
   */
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration | undefined;

  /**
   * Enforces a minimal level of encryption for the workgroup for query and calculation results that are written to Amazon S3. When enabled, workgroup users can set encryption only to the minimum level set by the administrator or higher when they submit queries. This setting does not apply to Spark-enabled workgroups.
   *
   * The `EnforceWorkGroupConfiguration` setting takes precedence over the `EnableMinimumEncryptionConfiguration` flag. This means that if `EnforceWorkGroupConfiguration` is true, the `EnableMinimumEncryptionConfiguration` flag is ignored, and the workgroup configuration for encryption is used.
   *
   * @public
   */
  EnableMinimumEncryptionConfiguration?: boolean | undefined;

  /**
   * Specifies whether Amazon S3 access grants are enabled for query results.
   *
   * @public
   */
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration | undefined;

  /**
   * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * The engine configuration for the workgroup, which includes the minimum/maximum number of Data Processing Units (DPU) that queries should use when running in provisioned capacity. If not specified, Athena uses default values (Default value for min is 4 and for max is Minimum of 124 and allocated DPUs).
   *
   * To specify DPU values for PC queries the WG containing EngineConfiguration should have the following values: The name of the Classifications should be `athena-query-engine-properties`, with the only allowed properties as `max-dpu-count` and `min-dpu-count`.
   *
   * @public
   */
  EngineConfiguration?: EngineConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateWorkGroupInput {
  /**
   * The specified workgroup that will be updated.
   *
   * @public
   */
  WorkGroup: string | undefined;

  /**
   * The workgroup description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contains configuration updates for an Athena SQL workgroup.
   *
   * @public
   */
  ConfigurationUpdates?: WorkGroupConfigurationUpdates | undefined;

  /**
   * The workgroup state that will be updated for the given workgroup.
   *
   * @public
   */
  State?: WorkGroupState | undefined;
}

/**
 * @public
 */
export interface UpdateWorkGroupOutput {}

/**
 * Stage plan information such as name, identifier, sub plans, and remote sources.
 *
 * @public
 */
export interface QueryStagePlanNode {
  /**
   * Name of the query stage plan that describes the operation this stage is performing as part of query execution.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Information about the operation this query stage plan node is performing.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * Stage plan information such as name, identifier, sub plans, and remote sources of child plan nodes/
   *
   * @public
   */
  Children?: QueryStagePlanNode[] | undefined;

  /**
   * Source plan node IDs.
   *
   * @public
   */
  RemoteSources?: string[] | undefined;
}

/**
 * Stage statistics such as input and output rows and bytes, execution time and stage state. This information also includes substages and the query stage plan.
 *
 * @public
 */
export interface QueryStage {
  /**
   * The identifier for a stage.
   *
   * @public
   */
  StageId?: number | undefined;

  /**
   * State of the stage after query execution.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The number of bytes output from the stage after execution.
   *
   * @public
   */
  OutputBytes?: number | undefined;

  /**
   * The number of rows output from the stage after execution.
   *
   * @public
   */
  OutputRows?: number | undefined;

  /**
   * The number of bytes input into the stage for execution.
   *
   * @public
   */
  InputBytes?: number | undefined;

  /**
   * The number of rows input into the stage for execution.
   *
   * @public
   */
  InputRows?: number | undefined;

  /**
   * Time taken to execute this stage.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * Stage plan information such as name, identifier, sub plans, and source stages.
   *
   * @public
   */
  QueryStagePlan?: QueryStagePlanNode | undefined;

  /**
   * List of sub query stages that form this stage execution plan.
   *
   * @public
   */
  SubStages?: QueryStage[] | undefined;
}

/**
 * The query execution timeline, statistics on input and output rows and bytes, and the different query stages that form the query execution plan.
 *
 * @public
 */
export interface QueryRuntimeStatistics {
  /**
   * Timeline statistics such as query queue time, planning time, execution time, service processing time, and total execution time.
   *
   * @public
   */
  Timeline?: QueryRuntimeStatisticsTimeline | undefined;

  /**
   * Statistics such as input rows and bytes read by the query, rows and bytes output by the query, and the number of rows written by the query.
   *
   * @public
   */
  Rows?: QueryRuntimeStatisticsRows | undefined;

  /**
   * Stage statistics such as input and output rows and bytes, execution time, and stage state. This information also includes substages and the query stage plan.
   *
   * @public
   */
  OutputStage?: QueryStage | undefined;
}

/**
 * @public
 */
export interface GetQueryRuntimeStatisticsOutput {
  /**
   * Runtime statistics about the query execution.
   *
   * @public
   */
  QueryRuntimeStatistics?: QueryRuntimeStatistics | undefined;
}
