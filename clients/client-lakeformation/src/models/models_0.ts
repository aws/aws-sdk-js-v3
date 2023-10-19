// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";

import { LakeFormationServiceException as __BaseException } from "./LakeFormationServiceException";

/**
 * @public
 * <p>Access to a resource was denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A structure containing an LF-tag key-value pair.</p>
 */
export interface LFTagPair {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

/**
 * @public
 * <p>A structure for the catalog object.</p>
 */
export interface CatalogResource {}

/**
 * @public
 * <p>A structure for the database object.</p>
 */
export interface DatabaseResource {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database resource. Unique to the Data Catalog.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>A structure for a data cells filter resource. </p>
 */
export interface DataCellsFilterResource {
  /**
   * @public
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId?: string;

  /**
   * @public
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The name of the data cells filter. </p>
   */
  Name?: string;
}

/**
 * @public
 * <p>A structure for a data location object where permissions are granted or revoked. </p>
 */
export interface DataLocationResource {
  /**
   * @public
   * <p>The identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the data location resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>A structure containing an LF-tag key and values for a resource.</p>
 */
export interface LFTagKeyResource {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

/**
 * @public
 * <p>A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.</p>
 */
export interface LFTag {
  /**
   * @public
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>A list of possible values an attribute can take.</p>
   *          <p>The maximum number of values that can be defined for a LF-Tag is 1000. A single API call
   *       supports 50 values. You can use multiple API calls to add more values.</p>
   */
  TagValues: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  DATABASE: "DATABASE",
  TABLE: "TABLE",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy.</p>
 */
export interface LFTagPolicyResource {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The resource type for which the LF-tag policy applies.</p>
   */
  ResourceType: ResourceType | undefined;

  /**
   * @public
   * <p>A list of LF-tag conditions that apply to the resource's LF-tag policy.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 * <p>A wildcard object representing every table under a database.</p>
 */
export interface TableWildcard {}

/**
 * @public
 * <p>A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
 */
export interface TableResource {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A wildcard object representing every table under a database.</p>
   *          <p>At least one of <code>TableResource$Name</code> or <code>TableResource$TableWildcard</code> is required.</p>
   */
  TableWildcard?: TableWildcard;
}

/**
 * @public
 * <p>A wildcard object, consisting of an optional list of excluded column names or indexes.</p>
 */
export interface ColumnWildcard {
  /**
   * @public
   * <p>Excludes column names. Any column with this name will be excluded.</p>
   */
  ExcludedColumnNames?: string[];
}

/**
 * @public
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p>
 *          <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
 */
export interface TableWithColumnsResource {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The list of column names for the table. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   */
  ColumnNames?: string[];

  /**
   * @public
   * <p>A wildcard specified by a <code>ColumnWildcard</code> object. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   */
  ColumnWildcard?: ColumnWildcard;
}

/**
 * @public
 * <p>A structure for the resource.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  Catalog?: CatalogResource;

  /**
   * @public
   * <p>The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. </p>
   */
  Database?: DatabaseResource;

  /**
   * @public
   * <p>The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   */
  Table?: TableResource;

  /**
   * @public
   * <p>The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.</p>
   */
  TableWithColumns?: TableWithColumnsResource;

  /**
   * @public
   * <p>The location of an Amazon S3 path where permissions are granted or revoked. </p>
   */
  DataLocation?: DataLocationResource;

  /**
   * @public
   * <p>A data cell filter.</p>
   */
  DataCellsFilter?: DataCellsFilterResource;

  /**
   * @public
   * <p>The LF-tag key and values attached to a resource.</p>
   */
  LFTag?: LFTagKeyResource;

  /**
   * @public
   * <p>A list of LF-tag conditions that define a resource's LF-tag policy.</p>
   */
  LFTagPolicy?: LFTagPolicyResource;
}

/**
 * @public
 */
export interface AddLFTagsToResourceRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database, table, or column resource to which to attach an LF-tag.</p>
   */
  Resource: Resource | undefined;

  /**
   * @public
   * <p>The LF-tags to attach to the resource.</p>
   */
  LFTags: LFTagPair[] | undefined;
}

/**
 * @public
 * <p>Contains details about an error.</p>
 */
export interface ErrorDetail {
  /**
   * @public
   * <p>The code associated with this error.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.</p>
 */
export interface LFTagError {
  /**
   * @public
   * <p>The key-name of the LF-tag.</p>
   */
  LFTag?: LFTagPair;

  /**
   * @public
   * <p>An error that occurred with the attachment or detachment of the LF-tag.</p>
   */
  Error?: ErrorDetail;
}

/**
 * @public
 */
export interface AddLFTagsToResourceResponse {
  /**
   * @public
   * <p>A list of failures to tag the resource.</p>
   */
  Failures?: LFTagError[];
}

/**
 * @public
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A specified entity does not exist.</p>
 */
export class EntityNotFoundException extends __BaseException {
  readonly name: "EntityNotFoundException" = "EntityNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotFoundException, __BaseException>) {
    super({
      name: "EntityNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An internal service error occurred.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The input provided was not valid.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation timed out.</p>
 */
export class OperationTimeoutException extends __BaseException {
  readonly name: "OperationTimeoutException" = "OperationTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationTimeoutException, __BaseException>) {
    super({
      name: "OperationTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationTimeoutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A new object to add to the governed table.</p>
 */
export interface AddObjectInput {
  /**
   * @public
   * <p>The Amazon S3 location of the object.</p>
   */
  Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   */
  ETag: string | undefined;

  /**
   * @public
   * <p>The size of the Amazon S3 object in bytes.</p>
   */
  Size: number | undefined;

  /**
   * @public
   * <p>A list of partition values for the object. A value must be specified for each partition key associated with the table.</p>
   *          <p>The supported data types are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p>
   */
  PartitionValues?: string[];
}

/**
 * @public
 * <p>A structure that you pass to indicate you want all rows in a filter. </p>
 */
export interface AllRowsWildcard {}

/**
 * @public
 * <p>A resource to be created or added already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssumeDecoratedRoleWithSAMLRequest {
  /**
   * @public
   * <p>A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.</p>
   */
  SAMLAssertion: string | undefined;

  /**
   * @public
   * <p>The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role.  </p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.</p>
   */
  PrincipalArn: string | undefined;

  /**
   * @public
   * <p>The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.</p>
   */
  DurationSeconds?: number;
}

/**
 * @public
 */
export interface AssumeDecoratedRoleWithSAMLResponse {
  /**
   * @public
   * <p>The access key ID for the temporary credentials. (The access key consists of an access key ID and a secret key).</p>
   */
  AccessKeyId?: string;

  /**
   * @public
   * <p>The secret key for the temporary credentials. (The access key consists of an access key ID and a secret key).</p>
   */
  SecretAccessKey?: string;

  /**
   * @public
   * <p>The session token for the temporary credentials.</p>
   */
  SessionToken?: string;

  /**
   * @public
   * <p>The date and time when the temporary credentials expire.</p>
   */
  Expiration?: Date;
}

/**
 * @public
 * <p>A structure used to include auditing information on the privileged API. </p>
 */
export interface AuditContext {
  /**
   * @public
   * <p>The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.</p>
   */
  AdditionalAuditContext?: string;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  ALL: "ALL",
  ALTER: "ALTER",
  ASSOCIATE: "ASSOCIATE",
  CREATE_DATABASE: "CREATE_DATABASE",
  CREATE_LF_TAG: "CREATE_LF_TAG",
  CREATE_TABLE: "CREATE_TABLE",
  DATA_LOCATION_ACCESS: "DATA_LOCATION_ACCESS",
  DELETE: "DELETE",
  DESCRIBE: "DESCRIBE",
  DROP: "DROP",
  GRANT_WITH_LF_TAG_EXPRESSION: "GRANT_WITH_LF_TAG_EXPRESSION",
  INSERT: "INSERT",
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * <p>The Lake Formation principal. Supported principals are IAM users
 *       or IAM roles.</p>
 */
export interface DataLakePrincipal {
  /**
   * @public
   * <p>An identifier for the Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

/**
 * @public
 * <p>A permission to a resource granted by batch operation to the principal.</p>
 */
export interface BatchPermissionsRequestEntry {
  /**
   * @public
   * <p>A unique identifier for the batch permissions request entry.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The principal to be granted a permission.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * @public
   * <p>The resource to which the principal is to be granted a permission.</p>
   */
  Resource?: Resource;

  /**
   * @public
   * <p>The permissions to be granted.</p>
   */
  Permissions?: Permission[];

  /**
   * @public
   * <p>Indicates if the option to pass permissions is granted.</p>
   */
  PermissionsWithGrantOption?: Permission[];
}

/**
 * @public
 */
export interface BatchGrantPermissionsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.</p>
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

/**
 * @public
 * <p>A list of failures when performing a batch grant or batch revoke operation.</p>
 */
export interface BatchPermissionsFailureEntry {
  /**
   * @public
   * <p>An identifier for an entry of the batch request.</p>
   */
  RequestEntry?: BatchPermissionsRequestEntry;

  /**
   * @public
   * <p>An error message that applies to the failure of the entry.</p>
   */
  Error?: ErrorDetail;
}

/**
 * @public
 */
export interface BatchGrantPermissionsResponse {
  /**
   * @public
   * <p>A list of failures to grant permissions to the resources.</p>
   */
  Failures?: BatchPermissionsFailureEntry[];
}

/**
 * @public
 */
export interface BatchRevokePermissionsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.</p>
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchRevokePermissionsResponse {
  /**
   * @public
   * <p>A list of failures to revoke permissions to the resources.</p>
   */
  Failures?: BatchPermissionsFailureEntry[];
}

/**
 * @public
 */
export interface CancelTransactionRequest {
  /**
   * @public
   * <p>The transaction to cancel.</p>
   */
  TransactionId: string | undefined;
}

/**
 * @public
 */
export interface CancelTransactionResponse {}

/**
 * @public
 * <p>Contains details about an error related to a transaction commit that was in progress.</p>
 */
export class TransactionCommitInProgressException extends __BaseException {
  readonly name: "TransactionCommitInProgressException" = "TransactionCommitInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCommitInProgressException, __BaseException>) {
    super({
      name: "TransactionCommitInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCommitInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 */
export class TransactionCommittedException extends __BaseException {
  readonly name: "TransactionCommittedException" = "TransactionCommittedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCommittedException, __BaseException>) {
    super({
      name: "TransactionCommittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCommittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CommitTransactionRequest {
  /**
   * @public
   * <p>The transaction to commit.</p>
   */
  TransactionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransactionStatus = {
  ABORTED: "ABORTED",
  ACTIVE: "ACTIVE",
  COMMITTED: "COMMITTED",
  COMMIT_IN_PROGRESS: "COMMIT_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];

/**
 * @public
 */
export interface CommitTransactionResponse {
  /**
   * @public
   * <p>The status of the transaction.</p>
   */
  TransactionStatus?: TransactionStatus;
}

/**
 * @public
 * <p>Contains details about an error related to a transaction that was cancelled.</p>
 */
export class TransactionCanceledException extends __BaseException {
  readonly name: "TransactionCanceledException" = "TransactionCanceledException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionCanceledException, __BaseException>) {
    super({
      name: "TransactionCanceledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionCanceledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A PartiQL predicate.</p>
 */
export interface RowFilter {
  /**
   * @public
   * <p>A filter expression.</p>
   */
  FilterExpression?: string;

  /**
   * @public
   * <p>A wildcard for all rows.</p>
   */
  AllRowsWildcard?: AllRowsWildcard;
}

/**
 * @public
 * <p>A structure that describes certain columns on certain rows.</p>
 */
export interface DataCellsFilter {
  /**
   * @public
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId: string | undefined;

  /**
   * @public
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>A table in the database.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The name given by the user to the data filter cell.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A PartiQL predicate.</p>
   */
  RowFilter?: RowFilter;

  /**
   * @public
   * <p>A list of column names and/or nested column attributes. When specifying nested attributes, use a qualified dot (.) delimited format such as "address"."zip". Nested attributes within this list may not exceed a depth of 5.</p>
   */
  ColumnNames?: string[];

  /**
   * @public
   * <p>A wildcard with exclusions.</p>
   *          <p>You must specify either a <code>ColumnNames</code> list or the
   *       <code>ColumnWildCard</code>. </p>
   */
  ColumnWildcard?: ColumnWildcard;

  /**
   * @public
   * <p>The ID of the data cells filter version.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface CreateDataCellsFilterRequest {
  /**
   * @public
   * <p>A <code>DataCellsFilter</code> structure containing information about the data cells filter.</p>
   */
  TableData: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface CreateDataCellsFilterResponse {}

/**
 * @public
 * <p>A resource numerical limit was exceeded.</p>
 */
export class ResourceNumberLimitExceededException extends __BaseException {
  readonly name: "ResourceNumberLimitExceededException" = "ResourceNumberLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNumberLimitExceededException, __BaseException>) {
    super({
      name: "ResourceNumberLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNumberLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateLakeFormationOptInRequest {
  /**
   * @public
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * @public
   * <p>A structure for the resource.</p>
   */
  Resource: Resource | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationOptInResponse {}

/**
 * @public
 */
export interface CreateLFTagRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

/**
 * @public
 */
export interface CreateLFTagResponse {}

/**
 * @public
 */
export interface DeleteDataCellsFilterRequest {
  /**
   * @public
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId?: string;

  /**
   * @public
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>A table in the database.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The name given by the user to the data filter cell.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DeleteDataCellsFilterResponse {}

/**
 * @public
 */
export interface DeleteLakeFormationOptInRequest {
  /**
   * @public
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * @public
   * <p>A structure for the resource.</p>
   */
  Resource: Resource | undefined;
}

/**
 * @public
 */
export interface DeleteLakeFormationOptInResponse {}

/**
 * @public
 */
export interface DeleteLFTagRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag to delete.</p>
   */
  TagKey: string | undefined;
}

/**
 * @public
 */
export interface DeleteLFTagResponse {}

/**
 * @public
 * <p>An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that
 *       <code>VirtualPut</code> was called before writing the object.</p>
 */
export interface VirtualObject {
  /**
   * @public
   * <p>The path to the Amazon S3 object. Must start with s3://</p>
   */
  Uri: string | undefined;

  /**
   * @public
   * <p>The ETag of the Amazon S3 object.</p>
   */
  ETag?: string;
}

/**
 * @public
 */
export interface DeleteObjectsOnCancelRequest {
  /**
   * @public
   * <p>The Glue data catalog that contains the governed table. Defaults to the current account ID.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database that contains the governed table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the governed table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>ID of the transaction that the writes occur in.</p>
   */
  TransactionId: string | undefined;

  /**
   * @public
   * <p>A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.</p>
   */
  Objects: VirtualObject[] | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsOnCancelResponse {}

/**
 * @public
 * <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeregisterResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to deregister.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterResourceResponse {}

/**
 * @public
 */
export interface DescribeResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>A structure containing information about an Lake Formation resource.</p>
 */
export interface ResourceInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The IAM role that registered a resource.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The date and time the resource was last modified.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>Whether or not the resource is a federated resource.</p>
   */
  WithFederation?: boolean;

  /**
   * @public
   * <p>
   *       Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *     </p>
   */
  HybridAccessEnabled?: boolean;
}

/**
 * @public
 */
export interface DescribeResourceResponse {
  /**
   * @public
   * <p>A structure containing information about an Lake Formation resource.</p>
   */
  ResourceInfo?: ResourceInfo;
}

/**
 * @public
 */
export interface DescribeTransactionRequest {
  /**
   * @public
   * <p>The transaction for which to return status.</p>
   */
  TransactionId: string | undefined;
}

/**
 * @public
 * <p>A structure that contains information about a transaction.</p>
 */
export interface TransactionDescription {
  /**
   * @public
   * <p>The ID of the transaction.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>A status of ACTIVE, COMMITTED, or ABORTED.</p>
   */
  TransactionStatus?: TransactionStatus;

  /**
   * @public
   * <p>The time when the transaction started.</p>
   */
  TransactionStartTime?: Date;

  /**
   * @public
   * <p>The time when the transaction committed or aborted, if it is not currently active.</p>
   */
  TransactionEndTime?: Date;
}

/**
 * @public
 */
export interface DescribeTransactionResponse {
  /**
   * @public
   * <p>Returns a <code>TransactionDescription</code> object containing information about the transaction.</p>
   */
  TransactionDescription?: TransactionDescription;
}

/**
 * @public
 */
export interface ExtendTransactionRequest {
  /**
   * @public
   * <p>The transaction to extend.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface ExtendTransactionResponse {}

/**
 * @public
 */
export interface GetDataCellsFilterRequest {
  /**
   * @public
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId: string | undefined;

  /**
   * @public
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>A table in the database.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The name given by the user to the data filter cell.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDataCellsFilterResponse {
  /**
   * @public
   * <p>A structure that describes certain columns on certain rows.</p>
   */
  DataCellsFilter?: DataCellsFilter;
}

/**
 * @public
 */
export interface GetDataLakeSettingsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;
}

/**
 * @public
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
  /**
   * @public
   * <p>The principal who is granted permissions.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * @public
   * <p>The permissions that are granted to the principal.</p>
   */
  Permissions?: Permission[];
}

/**
 * @public
 * <p>A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.</p>
 */
export interface DataLakeSettings {
  /**
   * @public
   * <p>A list of Lake Formation principals. Supported principals are IAM users or IAM roles.</p>
   */
  DataLakeAdmins?: DataLakePrincipal[];

  /**
   * @public
   * <p>A list of Lake Formation principals with only view access to the resources, without the ability to make changes. Supported principals are IAM users or IAM roles.</p>
   */
  ReadOnlyAdmins?: DataLakePrincipal[];

  /**
   * @public
   * <p>Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.</p>
   *          <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p>
   *          <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[];

  /**
   * @public
   * <p>Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.</p>
   *          <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p>
   *          <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * @public
   * <p>A key-value map that provides an additional configuration on your data lake. CrossAccountVersion is the key you can configure in the Parameters field. Accepted values for the CrossAccountVersion key are 1, 2, and 3.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log.</p>
   *          <p>You may want to specify this property when you are in a high-trust boundary, such as the same team or company. </p>
   */
  TrustedResourceOwners?: string[];

  /**
   * @public
   * <p>Whether to allow Amazon EMR clusters to access data managed by Lake Formation. </p>
   *          <p>If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation.</p>
   *          <p>If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/initial-LF-setup.html#external-data-filter">(Optional) Allow external data filtering</a>.</p>
   */
  AllowExternalDataFiltering?: boolean;

  /**
   * @public
   * <p>Whether to allow a third-party query engine to get data access credentials without session tags when a caller has full data access permissions.</p>
   */
  AllowFullTableExternalDataAccess?: boolean;

  /**
   * @public
   * <p>A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.></p>
   */
  ExternalDataFilteringAllowList?: DataLakePrincipal[];

  /**
   * @public
   * <p>Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation's administrative APIs.</p>
   */
  AuthorizedSessionTagValueList?: string[];
}

/**
 * @public
 */
export interface GetDataLakeSettingsResponse {
  /**
   * @public
   * <p>A structure representing a list of Lake Formation principals designated as data lake administrators.</p>
   */
  DataLakeSettings?: DataLakeSettings;
}

/**
 * @public
 */
export interface GetEffectivePermissionsForPathRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get permissions.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p>
 *          <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p>
 */
export interface DetailsMap {
  /**
   * @public
   * <p>A resource share ARN for a catalog resource shared through RAM.</p>
   */
  ResourceShare?: string[];
}

/**
 * @public
 * <p>The permissions granted or revoked on a resource.</p>
 */
export interface PrincipalResourcePermissions {
  /**
   * @public
   * <p>The Data Lake principal to be granted or revoked permissions.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * @public
   * <p>The resource where permissions are to be granted or revoked.</p>
   */
  Resource?: Resource;

  /**
   * @public
   * <p>The permissions to be granted or revoked on the resource.</p>
   */
  Permissions?: Permission[];

  /**
   * @public
   * <p>Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).</p>
   */
  PermissionsWithGrantOption?: Permission[];

  /**
   * @public
   * <p>This attribute can be used to return any additional details of <code>PrincipalResourcePermissions</code>. Currently returns only as a RAM resource share ARN.</p>
   */
  AdditionalDetails?: DetailsMap;

  /**
   * @public
   * <p>The date and time when the resource was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The user who updated the record.</p>
   */
  LastUpdatedBy?: string;
}

/**
 * @public
 */
export interface GetEffectivePermissionsForPathResponse {
  /**
   * @public
   * <p>A list of the permissions for the specified table or database resource located at the path in Amazon S3.</p>
   */
  Permissions?: PrincipalResourcePermissions[];

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetLFTagRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagResponse {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey?: string;

  /**
   * @public
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues?: string[];
}

/**
 * @public
 */
export interface GetQueryStateRequest {
  /**
   * @public
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryStateString = {
  ERROR: "ERROR",
  EXPIRED: "EXPIRED",
  FINISHED: "FINISHED",
  PENDING: "PENDING",
  WORKUNITS_AVAILABLE: "WORKUNITS_AVAILABLE",
} as const;

/**
 * @public
 */
export type QueryStateString = (typeof QueryStateString)[keyof typeof QueryStateString];

/**
 * @public
 * <p>A structure for the output.</p>
 */
export interface GetQueryStateResponse {
  /**
   * @public
   * <p>An error message when the operation fails.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The state of a query previously submitted. The possible states are:</p>
   *          <ul>
   *             <li>
   *                <p>PENDING: the query is pending.</p>
   *             </li>
   *             <li>
   *                <p>WORKUNITS_AVAILABLE: some work units are ready for retrieval and execution.</p>
   *             </li>
   *             <li>
   *                <p>FINISHED: the query planning finished successfully, and all work units are ready for retrieval and execution.</p>
   *             </li>
   *             <li>
   *                <p>ERROR: an error occurred with the query, such as an invalid query ID or a backend error.</p>
   *             </li>
   *          </ul>
   */
  State: QueryStateString | undefined;
}

/**
 * @public
 * <p>Contains details about an error where the query request expired.</p>
 */
export class ExpiredException extends __BaseException {
  readonly name: "ExpiredException" = "ExpiredException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredException, __BaseException>) {
    super({
      name: "ExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetQueryStatisticsRequest {
  /**
   * @public
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 * <p>Statistics related to the processing of a query statement.</p>
 */
export interface ExecutionStatistics {
  /**
   * @public
   * <p>The average time the request took to be executed.</p>
   */
  AverageExecutionTimeMillis?: number;

  /**
   * @public
   * <p>The amount of data that was scanned in bytes.</p>
   */
  DataScannedBytes?: number;

  /**
   * @public
   * <p>The number of work units executed.</p>
   */
  WorkUnitsExecutedCount?: number;
}

/**
 * @public
 * <p>Statistics related to the processing of a query statement.</p>
 */
export interface PlanningStatistics {
  /**
   * @public
   * <p>An estimate of the data that was scanned in bytes.</p>
   */
  EstimatedDataToScanBytes?: number;

  /**
   * @public
   * <p>The time that it took to process the request.</p>
   */
  PlanningTimeMillis?: number;

  /**
   * @public
   * <p>The time the request was in queue to be processed.</p>
   */
  QueueTimeMillis?: number;

  /**
   * @public
   * <p>The number of work units generated.</p>
   */
  WorkUnitsGeneratedCount?: number;
}

/**
 * @public
 */
export interface GetQueryStatisticsResponse {
  /**
   * @public
   * <p>An <code>ExecutionStatistics</code> structure containing execution statistics.</p>
   */
  ExecutionStatistics?: ExecutionStatistics;

  /**
   * @public
   * <p>A <code>PlanningStatistics</code> structure containing query planning statistics.</p>
   */
  PlanningStatistics?: PlanningStatistics;

  /**
   * @public
   * <p>The time that the query was submitted.</p>
   */
  QuerySubmissionTime?: Date;
}

/**
 * @public
 * <p>Contains details about an error related to statistics not being ready.</p>
 */
export class StatisticsNotReadyYetException extends __BaseException {
  readonly name: "StatisticsNotReadyYetException" = "StatisticsNotReadyYetException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatisticsNotReadyYetException, __BaseException>) {
    super({
      name: "StatisticsNotReadyYetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatisticsNotReadyYetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Contains details about an error where the query request was throttled.</p>
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetResourceLFTagsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database, table, or column resource for which you want to return LF-tags.</p>
   */
  Resource: Resource | undefined;

  /**
   * @public
   * <p>Indicates whether to show the assigned LF-tags.</p>
   */
  ShowAssignedLFTags?: boolean;
}

/**
 * @public
 * <p>A structure containing the name of a column resource and the LF-tags attached to it.</p>
 */
export interface ColumnLFTag {
  /**
   * @public
   * <p>The name of a column resource.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The LF-tags attached to a column resource.</p>
   */
  LFTags?: LFTagPair[];
}

/**
 * @public
 */
export interface GetResourceLFTagsResponse {
  /**
   * @public
   * <p>A list of LF-tags applied to a database resource.</p>
   */
  LFTagOnDatabase?: LFTagPair[];

  /**
   * @public
   * <p>A list of LF-tags applied to a table resource.</p>
   */
  LFTagsOnTable?: LFTagPair[];

  /**
   * @public
   * <p>A list of LF-tags applied to a column resource.</p>
   */
  LFTagsOnColumns?: ColumnLFTag[];
}

/**
 * @public
 * <p>An encryption operation failed.</p>
 */
export class GlueEncryptionException extends __BaseException {
  readonly name: "GlueEncryptionException" = "GlueEncryptionException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GlueEncryptionException, __BaseException>) {
    super({
      name: "GlueEncryptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GlueEncryptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetTableObjectsRequest {
  /**
   * @public
   * <p>The catalog containing the governed table. Defaults to the caller’s account.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database containing the governed table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The governed table for which to retrieve objects.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;

  /**
   * @public
   * <p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p>
   *          <ul>
   *             <li>
   *                <p>The comparison operators supported are: =, >, <, >=, <=</p>
   *             </li>
   *             <li>
   *                <p>The logical operators supported are: AND</p>
   *             </li>
   *             <li>
   *                <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p>
   *             </li>
   *          </ul>
   */
  PartitionPredicate?: string;

  /**
   * @public
   * <p>Specifies how many values to return in a page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token if this is not the first call to retrieve these objects.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies the details of a governed table.</p>
 */
export interface TableObject {
  /**
   * @public
   * <p>The Amazon S3 location of the object.</p>
   */
  Uri?: string;

  /**
   * @public
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>The size of the Amazon S3 object in bytes.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>A structure containing a list of partition values and table objects.</p>
 */
export interface PartitionObjects {
  /**
   * @public
   * <p>A list of partition values.</p>
   */
  PartitionValues?: string[];

  /**
   * @public
   * <p>A list of table objects</p>
   */
  Objects?: TableObject[];
}

/**
 * @public
 */
export interface GetTableObjectsResponse {
  /**
   * @public
   * <p>A list of objects organized by partition keys.</p>
   */
  Objects?: PartitionObjects[];

  /**
   * @public
   * <p>A continuation token indicating whether additional data is available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains a list of values defining partitions.</p>
 */
export interface PartitionValueList {
  /**
   * @public
   * <p>The list of partition values.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PermissionType = {
  CELL_FILTER_PERMISSION: "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION: "COLUMN_PERMISSION",
  NESTED_CELL_PERMISSION: "NESTED_CELL_PERMISSION",
  NESTED_PERMISSION: "NESTED_PERMISSION",
} as const;

/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 */
export interface GetTemporaryGluePartitionCredentialsRequest {
  /**
   * @public
   * <p>The ARN of the partitions' table.</p>
   */
  TableArn: string | undefined;

  /**
   * @public
   * <p>A list of partition values identifying a single partition.</p>
   */
  Partition: PartitionValueList | undefined;

  /**
   * @public
   * <p>Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).</p>
   */
  Permissions?: Permission[];

  /**
   * @public
   * <p>The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.</p>
   */
  DurationSeconds?: number;

  /**
   * @public
   * <p>A structure representing context to access a resource (column names, query ID, etc).</p>
   */
  AuditContext?: AuditContext;

  /**
   * @public
   * <p>A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.</p>
   */
  SupportedPermissionTypes?: PermissionType[];
}

/**
 * @public
 */
export interface GetTemporaryGluePartitionCredentialsResponse {
  /**
   * @public
   * <p>The access key ID for the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * @public
   * <p>The secret key for the temporary credentials.</p>
   */
  SecretAccessKey?: string;

  /**
   * @public
   * <p>The session token for the temporary credentials.</p>
   */
  SessionToken?: string;

  /**
   * @public
   * <p>The date and time when the temporary credentials expire.</p>
   */
  Expiration?: Date;
}

/**
 * @public
 * <p>The engine does not support filtering data based on the enforced permissions. For example, if you call the <code>GetTemporaryGlueTableCredentials</code> operation with <code>SupportedPermissionType</code> equal to <code>ColumnPermission</code>, but cell-level permissions exist on the table, this exception is thrown.</p>
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionTypeMismatchException, __BaseException>) {
    super({
      name: "PermissionTypeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionTypeMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetTemporaryGlueTableCredentialsRequest {
  /**
   * @public
   * <p>The ARN identifying a table in the Data Catalog for the temporary credentials request.</p>
   */
  TableArn: string | undefined;

  /**
   * @public
   * <p>Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).</p>
   */
  Permissions?: Permission[];

  /**
   * @public
   * <p>The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.</p>
   */
  DurationSeconds?: number;

  /**
   * @public
   * <p>A structure representing context to access a resource (column names, query ID, etc).</p>
   */
  AuditContext?: AuditContext;

  /**
   * @public
   * <p>A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.</p>
   */
  SupportedPermissionTypes?: PermissionType[];
}

/**
 * @public
 */
export interface GetTemporaryGlueTableCredentialsResponse {
  /**
   * @public
   * <p>The access key ID for the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * @public
   * <p>The secret key for the temporary credentials.</p>
   */
  SecretAccessKey?: string;

  /**
   * @public
   * <p>The session token for the temporary credentials.</p>
   */
  SessionToken?: string;

  /**
   * @public
   * <p>The date and time when the temporary credentials expire.</p>
   */
  Expiration?: Date;
}

/**
 * @public
 */
export interface GetWorkUnitResultsRequest {
  /**
   * @public
   * <p>The ID of the plan query operation for which to get results.</p>
   */
  QueryId: string | undefined;

  /**
   * @public
   * <p>The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.</p>
   */
  WorkUnitId: number | undefined;

  /**
   * @public
   * <p>A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.</p>
   */
  WorkUnitToken: string | undefined;
}

/**
 * @public
 * <p>A structure for the output.</p>
 */
export interface GetWorkUnitResultsResponse {
  /**
   * @public
   * <p>Rows returned from the <code>GetWorkUnitResults</code> operation as a stream of Apache Arrow v1.0 messages.</p>
   */
  ResultStream?: StreamingBlobTypes;
}

/**
 * @public
 */
export interface GetWorkUnitsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 * <p>Defines the valid range of work unit IDs for querying the execution service.</p>
 */
export interface WorkUnitRange {
  /**
   * @public
   * <p>Defines the maximum work unit ID in the range. The maximum value is inclusive.</p>
   */
  WorkUnitIdMax: number | undefined;

  /**
   * @public
   * <p>Defines the minimum work unit ID in the range.</p>
   */
  WorkUnitIdMin: number | undefined;

  /**
   * @public
   * <p>A work token used to query the execution service.</p>
   */
  WorkUnitToken: string | undefined;
}

/**
 * @public
 * <p>A structure for the output.</p>
 */
export interface GetWorkUnitsResponse {
  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;

  /**
   * @public
   * <p>A <code>WorkUnitRangeList</code> object that specifies the valid range of work unit IDs for querying the execution service.</p>
   */
  WorkUnitRanges: WorkUnitRange[] | undefined;
}

/**
 * @public
 * <p>Contains details about an error related to work units not being ready.</p>
 */
export class WorkUnitsNotReadyYetException extends __BaseException {
  readonly name: "WorkUnitsNotReadyYetException" = "WorkUnitsNotReadyYetException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkUnitsNotReadyYetException, __BaseException>) {
    super({
      name: "WorkUnitsNotReadyYetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkUnitsNotReadyYetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GrantPermissionsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.</p>
   *          <p>Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. </p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * @public
   * <p>The resource to which permissions are to be granted. Resources in Lake Formation are the Data Catalog, databases, and tables.</p>
   */
  Resource: Resource | undefined;

  /**
   * @public
   * <p>The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources. </p>
   */
  Permissions: Permission[] | undefined;

  /**
   * @public
   * <p>Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.</p>
   */
  PermissionsWithGrantOption?: Permission[];
}

/**
 * @public
 */
export interface GrantPermissionsResponse {}

/**
 * @public
 */
export interface ListDataCellsFilterRequest {
  /**
   * @public
   * <p>A table in the Glue Data Catalog.</p>
   */
  Table?: TableResource;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDataCellsFilterResponse {
  /**
   * @public
   * <p>A list of <code>DataCellFilter</code> structures.</p>
   */
  DataCellsFilters?: DataCellsFilter[];

  /**
   * @public
   * <p>A continuation token, if not all requested data cell filters have been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLakeFormationOptInsRequest {
  /**
   * @public
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * @public
   * <p>A structure for the resource.</p>
   */
  Resource?: Resource;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A single principal-resource pair that has Lake Formation permissins enforced.</p>
 */
export interface LakeFormationOptInsInfo {
  /**
   * @public
   * <p>A structure for the resource.</p>
   */
  Resource?: Resource;

  /**
   * @public
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * @public
   * <p>The last modified date and time of the record.</p>
   */
  LastModified?: Date;

  /**
   * @public
   * <p>The user who updated the record.</p>
   */
  LastUpdatedBy?: string;
}

/**
 * @public
 */
export interface ListLakeFormationOptInsResponse {
  /**
   * @public
   * <p>A list of principal-resource pairs that have Lake Formation permissins enforced.</p>
   */
  LakeFormationOptInsInfoList?: LakeFormationOptInsInfo[];

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceShareType = {
  ALL: "ALL",
  FOREIGN: "FOREIGN",
} as const;

/**
 * @public
 */
export type ResourceShareType = (typeof ResourceShareType)[keyof typeof ResourceShareType];

/**
 * @public
 */
export interface ListLFTagsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.</p>
   */
  ResourceShareType?: ResourceShareType;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLFTagsResponse {
  /**
   * @public
   * <p>A list of LF-tags that the requested has permission to view.</p>
   */
  LFTags?: LFTagPair[];

  /**
   * @public
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DataLakeResourceType = {
  CATALOG: "CATALOG",
  DATABASE: "DATABASE",
  DATA_LOCATION: "DATA_LOCATION",
  LF_TAG: "LF_TAG",
  LF_TAG_POLICY: "LF_TAG_POLICY",
  LF_TAG_POLICY_DATABASE: "LF_TAG_POLICY_DATABASE",
  LF_TAG_POLICY_TABLE: "LF_TAG_POLICY_TABLE",
  TABLE: "TABLE",
} as const;

/**
 * @public
 */
export type DataLakeResourceType = (typeof DataLakeResourceType)[keyof typeof DataLakeResourceType];

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Specifies a principal to filter the permissions returned.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * @public
   * <p>Specifies a resource type to filter the permissions returned.</p>
   */
  ResourceType?: DataLakeResourceType;

  /**
   * @public
   * <p>A resource where you will get a list of the principal permissions.</p>
   *          <p>This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.</p>
   */
  Resource?: Resource;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Indicates that related permissions should be included in the results.</p>
   */
  IncludeRelated?: string;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * @public
   * <p>A list of principals and their permissions on the resource for the specified principal and resource types.</p>
   */
  PrincipalResourcePermissions?: PrincipalResourcePermissions[];

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  IN: "IN",
  LE: "LE",
  LT: "LT",
  NE: "NE",
  NOT_CONTAINS: "NOT_CONTAINS",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const FieldNameString = {
  LAST_MODIFIED: "LAST_MODIFIED",
  RESOURCE_ARN: "RESOURCE_ARN",
  ROLE_ARN: "ROLE_ARN",
} as const;

/**
 * @public
 */
export type FieldNameString = (typeof FieldNameString)[keyof typeof FieldNameString];

/**
 * @public
 * <p>This structure describes the filtering of columns in a table based on a filter condition.</p>
 */
export interface FilterCondition {
  /**
   * @public
   * <p>The field to filter in the filter condition.</p>
   */
  Field?: FieldNameString;

  /**
   * @public
   * <p>The comparison operator used in the filter condition.</p>
   */
  ComparisonOperator?: ComparisonOperator;

  /**
   * @public
   * <p>A string with values used in evaluating the filter condition.</p>
   */
  StringValueList?: string[];
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * @public
   * <p>Any applicable row-level and/or column-level filtering conditions for the resources.</p>
   */
  FilterConditionList?: FilterCondition[];

  /**
   * @public
   * <p>The maximum number of resource results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * @public
   * <p>A summary of the data lake resources.</p>
   */
  ResourceInfoList?: ResourceInfo[];

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OptimizerType = {
  COMPACTION: "COMPACTION",
  GARBAGE_COLLECTION: "GARBAGE_COLLECTION",
  GENERIC: "ALL",
} as const;

/**
 * @public
 */
export type OptimizerType = (typeof OptimizerType)[keyof typeof OptimizerType];

/**
 * @public
 */
export interface ListTableStorageOptimizersRequest {
  /**
   * @public
   * <p>The Catalog ID of the table.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Name of the database where the table is present.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>Name of the table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The specific type of storage optimizers to list. The supported value is <code>compaction</code>.</p>
   */
  StorageOptimizerType?: OptimizerType;

  /**
   * @public
   * <p>The number of storage optimizers to return on each call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure describing the configuration and details of a storage optimizer.</p>
 */
export interface StorageOptimizer {
  /**
   * @public
   * <p>The specific type of storage optimizer. The supported value is <code>compaction</code>.</p>
   */
  StorageOptimizerType?: OptimizerType;

  /**
   * @public
   * <p>A map of the storage optimizer configuration. Currently contains only one key-value pair: <code>is_enabled</code> indicates true or false for acceleration.</p>
   */
  Config?: Record<string, string>;

  /**
   * @public
   * <p>A message that contains information about any error (if present).</p>
   *          <p>When an acceleration result has an enabled status, the error message is empty.</p>
   *          <p>When an acceleration result has a disabled status, the message describes an error or simply indicates "disabled by the user".</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>A message that contains information about any warnings (if present).</p>
   */
  Warnings?: string;

  /**
   * @public
   * <p>When an acceleration result has an enabled status, contains the details of the last job run.</p>
   */
  LastRunDetails?: string;
}

/**
 * @public
 */
export interface ListTableStorageOptimizersResponse {
  /**
   * @public
   * <p>A list of the storage optimizers associated with a table.</p>
   */
  StorageOptimizerList?: StorageOptimizer[];

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TransactionStatusFilter = {
  ABORTED: "ABORTED",
  ACTIVE: "ACTIVE",
  ALL: "ALL",
  COMMITTED: "COMMITTED",
  COMPLETED: "COMPLETED",
} as const;

/**
 * @public
 */
export type TransactionStatusFilter = (typeof TransactionStatusFilter)[keyof typeof TransactionStatusFilter];

/**
 * @public
 */
export interface ListTransactionsRequest {
  /**
   * @public
   * <p>The catalog for which to list transactions. Defaults to the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p> A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.</p>
   */
  StatusFilter?: TransactionStatusFilter;

  /**
   * @public
   * <p>The maximum number of transactions to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token if this is not the first call to retrieve transactions.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTransactionsResponse {
  /**
   * @public
   * <p>A list of transactions. The record for each transaction is a <code>TransactionDescription</code> object.</p>
   */
  Transactions?: TransactionDescription[];

  /**
   * @public
   * <p>A continuation token indicating whether additional data is available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutDataLakeSettingsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A structure representing a list of Lake Formation principals designated as data lake administrators.</p>
   */
  DataLakeSettings: DataLakeSettings | undefined;
}

/**
 * @public
 */
export interface PutDataLakeSettingsResponse {}

/**
 * @public
 */
export interface RegisterResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to register.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p>
   */
  UseServiceLinkedRole?: boolean;

  /**
   * @public
   * <p>The identifier for the role that registers the resource.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Whether or not the resource is a federated resource.</p>
   */
  WithFederation?: boolean;

  /**
   * @public
   * <p>
   *     Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *   </p>
   */
  HybridAccessEnabled?: boolean;
}

/**
 * @public
 */
export interface RegisterResourceResponse {}

/**
 * @public
 */
export interface RemoveLFTagsFromResourceRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database, table, or column resource where you want to remove an LF-tag.</p>
   */
  Resource: Resource | undefined;

  /**
   * @public
   * <p>The LF-tags to be removed from the resource.</p>
   */
  LFTags: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface RemoveLFTagsFromResourceResponse {
  /**
   * @public
   * <p>A list of failures to untag a resource.</p>
   */
  Failures?: LFTagError[];
}

/**
 * @public
 */
export interface RevokePermissionsRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The principal to be revoked permissions on the resource.</p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * @public
   * <p>The resource to which permissions are to be revoked.</p>
   */
  Resource: Resource | undefined;

  /**
   * @public
   * <p>The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security
   *       and Access Control to Metadata and Data</a>.</p>
   */
  Permissions: Permission[] | undefined;

  /**
   * @public
   * <p>Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.</p>
   */
  PermissionsWithGrantOption?: Permission[];
}

/**
 * @public
 */
export interface RevokePermissionsResponse {}

/**
 * @public
 */
export interface SearchDatabasesByLFTagsRequest {
  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A list of conditions (<code>LFTag</code> structures) to search for in database resources.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 * <p>A structure describing a database resource with LF-tags.</p>
 */
export interface TaggedDatabase {
  /**
   * @public
   * <p>A database that has LF-tags attached to it.</p>
   */
  Database?: DatabaseResource;

  /**
   * @public
   * <p>A list of LF-tags attached to the database.</p>
   */
  LFTags?: LFTagPair[];
}

/**
 * @public
 */
export interface SearchDatabasesByLFTagsResponse {
  /**
   * @public
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of databases that meet the LF-tag conditions.</p>
   */
  DatabaseList?: TaggedDatabase[];
}

/**
 * @public
 */
export interface SearchTablesByLFTagsRequest {
  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A list of conditions (<code>LFTag</code> structures) to search for in table resources.</p>
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 * <p>A structure describing a table resource with LF-tags.</p>
 */
export interface TaggedTable {
  /**
   * @public
   * <p>A table that has LF-tags attached to it.</p>
   */
  Table?: TableResource;

  /**
   * @public
   * <p>A list of LF-tags attached to the database where the table resides.</p>
   */
  LFTagOnDatabase?: LFTagPair[];

  /**
   * @public
   * <p>A list of LF-tags attached to the table.</p>
   */
  LFTagsOnTable?: LFTagPair[];

  /**
   * @public
   * <p>A list of LF-tags attached to columns in the table.</p>
   */
  LFTagsOnColumns?: ColumnLFTag[];
}

/**
 * @public
 */
export interface SearchTablesByLFTagsResponse {
  /**
   * @public
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of tables that meet the LF-tag conditions.</p>
   */
  TableList?: TaggedTable[];
}

/**
 * @public
 * <p>A structure containing information about the query plan.</p>
 */
export interface QueryPlanningContext {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database containing the table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;

  /**
   * @public
   * <p>A map consisting of key-value pairs.</p>
   */
  QueryParameters?: Record<string, string>;

  /**
   * @public
   * <p>The transaction ID at which to read the table contents. If this transaction is not committed, the read will be treated as part of that transaction and will see its writes. If this transaction has aborted, an error will be returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface StartQueryPlanningRequest {
  /**
   * @public
   * <p>A structure containing information about the query plan.</p>
   */
  QueryPlanningContext: QueryPlanningContext | undefined;

  /**
   * @public
   * <p>A PartiQL query statement used as an input to the planner service.</p>
   */
  QueryString: string | undefined;
}

/**
 * @public
 * <p>A structure for the output.</p>
 */
export interface StartQueryPlanningResponse {
  /**
   * @public
   * <p>The ID of the plan query operation can be used to fetch the actual work unit descriptors that are produced as the result of the operation. The ID is also used to get the query state and as an input to the <code>Execute</code> operation.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransactionType = {
  READ_AND_WRITE: "READ_AND_WRITE",
  READ_ONLY: "READ_ONLY",
} as const;

/**
 * @public
 */
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];

/**
 * @public
 */
export interface StartTransactionRequest {
  /**
   * @public
   * <p>Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. </p>
   */
  TransactionType?: TransactionType;
}

/**
 * @public
 */
export interface StartTransactionResponse {
  /**
   * @public
   * <p>An opaque identifier for the transaction.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface UpdateDataCellsFilterRequest {
  /**
   * @public
   * <p>A <code>DataCellsFilter</code> structure containing information about the data cells filter.</p>
   */
  TableData: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface UpdateDataCellsFilterResponse {}

/**
 * @public
 */
export interface UpdateLFTagRequest {
  /**
   * @public
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The key-name for the LF-tag for which to add or delete values.</p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>A list of LF-tag values to delete from the LF-tag.</p>
   */
  TagValuesToDelete?: string[];

  /**
   * @public
   * <p>A list of LF-tag values to add from the LF-tag.</p>
   */
  TagValuesToAdd?: string[];
}

/**
 * @public
 */
export interface UpdateLFTagResponse {}

/**
 * @public
 */
export interface UpdateResourceRequest {
  /**
   * @public
   * <p>The new role to use for the given resource registered in Lake Formation.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Whether or not the resource is a federated resource.</p>
   */
  WithFederation?: boolean;

  /**
   * @public
   * <p>
   *       Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *     </p>
   */
  HybridAccessEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateResourceResponse {}

/**
 * @public
 * <p>An object to delete from the governed table.</p>
 */
export interface DeleteObjectInput {
  /**
   * @public
   * <p>The Amazon S3 location of the object to delete.</p>
   */
  Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   */
  ETag?: string;

  /**
   * @public
   * <p>A list of partition values for the object. A value must be specified for each partition key associated with the governed table.</p>
   */
  PartitionValues?: string[];
}

/**
 * @public
 * <p>Defines an object to add to or delete from a governed table.</p>
 */
export interface WriteOperation {
  /**
   * @public
   * <p>A new object to add to the governed table.</p>
   */
  AddObject?: AddObjectInput;

  /**
   * @public
   * <p>An object to delete from the governed table.</p>
   */
  DeleteObject?: DeleteObjectInput;
}

/**
 * @public
 */
export interface UpdateTableObjectsRequest {
  /**
   * @public
   * <p>The catalog containing the governed table to update. Defaults to the caller’s account ID.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database containing the governed table to update.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The governed table to update.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The transaction at which to do the write.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.</p>
   */
  WriteOperations: WriteOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateTableObjectsResponse {}

/**
 * @public
 */
export interface UpdateTableStorageOptimizerRequest {
  /**
   * @public
   * <p>The Catalog ID of the table.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Name of the database where the table is present.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>Name of the table for which to enable the storage optimizer.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Name of the table for which to enable the storage optimizer.</p>
   */
  StorageOptimizerConfig: Partial<Record<OptimizerType, Record<string, string>>> | undefined;
}

/**
 * @public
 */
export interface UpdateTableStorageOptimizerResponse {
  /**
   * @public
   * <p>A response indicating the success of failure of the operation.</p>
   */
  Result?: string;
}

/**
 * @internal
 */
export const GetWorkUnitResultsRequestFilterSensitiveLog = (obj: GetWorkUnitResultsRequest): any => ({
  ...obj,
  ...(obj.WorkUnitToken && { WorkUnitToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetWorkUnitResultsResponseFilterSensitiveLog = (obj: GetWorkUnitResultsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartQueryPlanningRequestFilterSensitiveLog = (obj: StartQueryPlanningRequest): any => ({
  ...obj,
  ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
});
