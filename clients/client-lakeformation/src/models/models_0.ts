// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import { LakeFormationServiceException as __BaseException } from "./LakeFormationServiceException";

/**
 * <p>Access to a resource was denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A structure containing an LF-tag key-value pair.</p>
 * @public
 */
export interface LFTagPair {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p>A structure for the catalog object.</p>
 * @public
 */
export interface CatalogResource {
  /**
   * <p>An identifier for the catalog resource.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>A structure for the database object.</p>
 * @public
 */
export interface DatabaseResource {
  /**
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database resource. Unique to the Data Catalog.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A structure for a data cells filter resource. </p>
 * @public
 */
export interface DataCellsFilterResource {
  /**
   * <p>The ID of the catalog to which the table belongs.</p>
   * @public
   */
  TableCatalogId?: string | undefined;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The name of the data cells filter. </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A structure for a data location object where permissions are granted or revoked. </p>
 * @public
 */
export interface DataLocationResource {
  /**
   * <p>The identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the data location resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>A structure containing an LF-tag key and values for a resource.</p>
 * @public
 */
export interface LFTagKeyResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * <p>A structure containing a LF-Tag expression (keys and values).</p>
 * @public
 */
export interface LFTagExpressionResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the LF-Tag expression to grant permissions on.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.</p>
 * @public
 */
export interface LFTag {
  /**
   * <p>The key-name for the LF-tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   *          <p>The maximum number of values that can be defined for a LF-Tag is 1000. A single API call
   *       supports 50 values. You can use multiple API calls to add more values.</p>
   * @public
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
 * <p>A structure containing a list of LF-tag conditions or saved LF-Tag expressions that apply to a resource's LF-tag policy.</p>
 * @public
 */
export interface LFTagPolicyResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The resource type for which the LF-tag policy applies.</p>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>A list of LF-tag conditions or a saved expression that apply to the resource's LF-tag policy.</p>
   * @public
   */
  Expression?: LFTag[] | undefined;

  /**
   * <p>If provided, permissions are granted to the Data Catalog resources whose assigned LF-Tags
   *       match the expression body of the saved expression under the provided
   *         <code>ExpressionName</code>.</p>
   * @public
   */
  ExpressionName?: string | undefined;
}

/**
 * <p>A wildcard object representing every table under a database.</p>
 * @public
 */
export interface TableWildcard {}

/**
 * <p>A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
 * @public
 */
export interface TableResource {
  /**
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A wildcard object representing every table under a database.</p>
   *          <p>At least one of <code>TableResource$Name</code> or <code>TableResource$TableWildcard</code> is required.</p>
   * @public
   */
  TableWildcard?: TableWildcard | undefined;
}

/**
 * <p>A wildcard object, consisting of an optional list of excluded column names or indexes.</p>
 * @public
 */
export interface ColumnWildcard {
  /**
   * <p>Excludes column names. Any column with this name will be excluded.</p>
   * @public
   */
  ExcludedColumnNames?: string[] | undefined;
}

/**
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p>
 *          <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
 * @public
 */
export interface TableWithColumnsResource {
  /**
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The list of column names for the table. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   * @public
   */
  ColumnNames?: string[] | undefined;

  /**
   * <p>A wildcard specified by a <code>ColumnWildcard</code> object. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   * @public
   */
  ColumnWildcard?: ColumnWildcard | undefined;
}

/**
 * <p>A structure for the resource.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  Catalog?: CatalogResource | undefined;

  /**
   * <p>The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. </p>
   * @public
   */
  Database?: DatabaseResource | undefined;

  /**
   * <p>The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   * @public
   */
  Table?: TableResource | undefined;

  /**
   * <p>The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.</p>
   * @public
   */
  TableWithColumns?: TableWithColumnsResource | undefined;

  /**
   * <p>The location of an Amazon S3 path where permissions are granted or revoked. </p>
   * @public
   */
  DataLocation?: DataLocationResource | undefined;

  /**
   * <p>A data cell filter.</p>
   * @public
   */
  DataCellsFilter?: DataCellsFilterResource | undefined;

  /**
   * <p>The LF-tag key and values attached to a resource.</p>
   * @public
   */
  LFTag?: LFTagKeyResource | undefined;

  /**
   * <p>A list of LF-tag conditions or saved LF-Tag expressions that define a resource's LF-tag policy.</p>
   * @public
   */
  LFTagPolicy?: LFTagPolicyResource | undefined;

  /**
   * <p>LF-Tag expression resource. A logical expression composed of one or more LF-Tag key:value pairs.</p>
   * @public
   */
  LFTagExpression?: LFTagExpressionResource | undefined;
}

/**
 * @public
 */
export interface AddLFTagsToResourceRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database, table, or column resource to which to attach an LF-tag.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>The LF-tags to attach to the resource.</p>
   * @public
   */
  LFTags: LFTagPair[] | undefined;
}

/**
 * <p>Contains details about an error.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The code associated with this error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.</p>
 * @public
 */
export interface LFTagError {
  /**
   * <p>The key-name of the LF-tag.</p>
   * @public
   */
  LFTag?: LFTagPair | undefined;

  /**
   * <p>An error that occurred with the attachment or detachment of the LF-tag.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface AddLFTagsToResourceResponse {
  /**
   * <p>A list of failures to tag the resource.</p>
   * @public
   */
  Failures?: LFTagError[] | undefined;
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A specified entity does not exist.</p>
 * @public
 */
export class EntityNotFoundException extends __BaseException {
  readonly name: "EntityNotFoundException" = "EntityNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>An internal service error occurred.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The input provided was not valid.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The operation timed out.</p>
 * @public
 */
export class OperationTimeoutException extends __BaseException {
  readonly name: "OperationTimeoutException" = "OperationTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A new object to add to the governed table.</p>
 * @public
 */
export interface AddObjectInput {
  /**
   * <p>The Amazon S3 location of the object.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>The size of the Amazon S3 object in bytes.</p>
   * @public
   */
  Size: number | undefined;

  /**
   * <p>A list of partition values for the object. A value must be specified for each partition key associated with the table.</p>
   *          <p>The supported data types are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p>
   * @public
   */
  PartitionValues?: string[] | undefined;
}

/**
 * <p>A structure that you pass to indicate you want all rows in a filter. </p>
 * @public
 */
export interface AllRowsWildcard {}

/**
 * <p>A resource to be created or added already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @enum
 */
export const ApplicationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 */
export interface AssumeDecoratedRoleWithSAMLRequest {
  /**
   * <p>A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.</p>
   * @public
   */
  SAMLAssertion: string | undefined;

  /**
   * <p>The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role.  </p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.</p>
   * @public
   */
  PrincipalArn: string | undefined;

  /**
   * <p>The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.</p>
   * @public
   */
  DurationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface AssumeDecoratedRoleWithSAMLResponse {
  /**
   * <p>The access key ID for the temporary credentials. (The access key consists of an access key ID and a secret key).</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The secret key for the temporary credentials. (The access key consists of an access key ID and a secret key).</p>
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * <p>The session token for the temporary credentials.</p>
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * <p>The date and time when the temporary credentials expire.</p>
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * <p>A structure used to include auditing information on the privileged API. </p>
 * @public
 */
export interface AuditContext {
  /**
   * <p>The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.</p>
   * @public
   */
  AdditionalAuditContext?: string | undefined;
}

/**
 * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>An expression written based on the Cedar Policy Language used to match the principal attributes.</p>
   * @public
   */
  Expression?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  ALL: "ALL",
  ALTER: "ALTER",
  ASSOCIATE: "ASSOCIATE",
  CREATE_CATALOG: "CREATE_CATALOG",
  CREATE_DATABASE: "CREATE_DATABASE",
  CREATE_LF_TAG: "CREATE_LF_TAG",
  CREATE_LF_TAG_EXPRESSION: "CREATE_LF_TAG_EXPRESSION",
  CREATE_TABLE: "CREATE_TABLE",
  DATA_LOCATION_ACCESS: "DATA_LOCATION_ACCESS",
  DELETE: "DELETE",
  DESCRIBE: "DESCRIBE",
  DROP: "DROP",
  GRANT_WITH_LF_TAG_EXPRESSION: "GRANT_WITH_LF_TAG_EXPRESSION",
  INSERT: "INSERT",
  SELECT: "SELECT",
  SUPER_USER: "SUPER_USER",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * <p>The Lake Formation principal. Supported principals are IAM users
 *       or IAM roles.</p>
 * @public
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the Lake Formation principal.</p>
   * @public
   */
  DataLakePrincipalIdentifier?: string | undefined;
}

/**
 * <p>A permission to a resource granted by batch operation to the principal.</p>
 * @public
 */
export interface BatchPermissionsRequestEntry {
  /**
   * <p>A unique identifier for the batch permissions request entry.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The principal to be granted a permission.</p>
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which the principal is to be granted a permission.</p>
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * <p>The permissions to be granted.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>Indicates if the option to pass permissions is granted.</p>
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;
}

/**
 * @public
 */
export interface BatchGrantPermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.</p>
   * @public
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

/**
 * <p>A list of failures when performing a batch grant or batch revoke operation.</p>
 * @public
 */
export interface BatchPermissionsFailureEntry {
  /**
   * <p>An identifier for an entry of the batch request.</p>
   * @public
   */
  RequestEntry?: BatchPermissionsRequestEntry | undefined;

  /**
   * <p>An error message that applies to the failure of the entry.</p>
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchGrantPermissionsResponse {
  /**
   * <p>A list of failures to grant permissions to the resources.</p>
   * @public
   */
  Failures?: BatchPermissionsFailureEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchRevokePermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.</p>
   * @public
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchRevokePermissionsResponse {
  /**
   * <p>A list of failures to revoke permissions to the resources.</p>
   * @public
   */
  Failures?: BatchPermissionsFailureEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelTransactionRequest {
  /**
   * <p>The transaction to cancel.</p>
   * @public
   */
  TransactionId: string | undefined;
}

/**
 * @public
 */
export interface CancelTransactionResponse {}

/**
 * <p>Contains details about an error related to a transaction commit that was in progress.</p>
 * @public
 */
export class TransactionCommitInProgressException extends __BaseException {
  readonly name: "TransactionCommitInProgressException" = "TransactionCommitInProgressException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 * @public
 */
export class TransactionCommittedException extends __BaseException {
  readonly name: "TransactionCommittedException" = "TransactionCommittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The transaction to commit.</p>
   * @public
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
   * <p>The status of the transaction.</p>
   * @public
   */
  TransactionStatus?: TransactionStatus | undefined;
}

/**
 * <p>Contains details about an error related to a transaction that was cancelled.</p>
 * @public
 */
export class TransactionCanceledException extends __BaseException {
  readonly name: "TransactionCanceledException" = "TransactionCanceledException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A PartiQL predicate.</p>
 * @public
 */
export interface RowFilter {
  /**
   * <p>A filter expression.</p>
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * <p>A wildcard for all rows.</p>
   * @public
   */
  AllRowsWildcard?: AllRowsWildcard | undefined;
}

/**
 * <p>A structure that describes certain columns on certain rows.</p>
 * @public
 */
export interface DataCellsFilter {
  /**
   * <p>The ID of the catalog to which the table belongs.</p>
   * @public
   */
  TableCatalogId: string | undefined;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table in the database.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The name given by the user to the data filter cell.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A PartiQL predicate.</p>
   * @public
   */
  RowFilter?: RowFilter | undefined;

  /**
   * <p>A list of column names and/or nested column attributes. When specifying nested attributes, use a qualified dot (.) delimited format such as "address"."zip". Nested attributes within this list may not exceed a depth of 5.</p>
   * @public
   */
  ColumnNames?: string[] | undefined;

  /**
   * <p>A wildcard with exclusions.</p>
   *          <p>You must specify either a <code>ColumnNames</code> list or the
   *       <code>ColumnWildCard</code>. </p>
   * @public
   */
  ColumnWildcard?: ColumnWildcard | undefined;

  /**
   * <p>The ID of the data cells filter version.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataCellsFilterRequest {
  /**
   * <p>A <code>DataCellsFilter</code> structure containing information about the data cells filter.</p>
   * @public
   */
  TableData: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface CreateDataCellsFilterResponse {}

/**
 * <p>A resource numerical limit was exceeded.</p>
 * @public
 */
export class ResourceNumberLimitExceededException extends __BaseException {
  readonly name: "ResourceNumberLimitExceededException" = "ResourceNumberLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @enum
 */
export const EnableStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EnableStatus = (typeof EnableStatus)[keyof typeof EnableStatus];

/**
 * <p>Configuration for enabling external data filtering for third-party applications to
 *          access data managed by Lake Formation .</p>
 * @public
 */
export interface ExternalFilteringConfiguration {
  /**
   * <p>Allows to enable or disable the third-party applications that are allowed to access data
   *          managed by Lake Formation.</p>
   * @public
   */
  Status: EnableStatus | undefined;

  /**
   * <p>List of third-party application <code>ARNs</code> integrated with Lake Formation.</p>
   * @public
   */
  AuthorizedTargets: string[] | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationIdentityCenterConfigurationRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the
   *          persistent metadata store. It contains database definitions, table definitions, view
   *          definitions, and other control information to manage your Lake Formation
   *          environment.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The ARN of the IAM Identity Center instance for which the operation will be executed.
   *          For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service
   *          Namespaces in the Amazon Web Services General Reference.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>A list of the account IDs of Amazon Web Services accounts of third-party applications
   *          that are allowed to access data managed by Lake Formation.</p>
   * @public
   */
  ExternalFiltering?: ExternalFilteringConfiguration | undefined;

  /**
   * <p>A list of Amazon Web Services account IDs and/or Amazon Web Services organization/organizational unit ARNs
   *          that are allowed to access data managed by Lake Formation. </p>
   *          <p>If the <code>ShareRecipients</code> list includes valid values, a resource share is created with the principals you want to have access to the resources.</p>
   *          <p>If the <code>ShareRecipients</code> value is null or the list is empty, no resource share is created.</p>
   * @public
   */
  ShareRecipients?: DataLakePrincipal[] | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationIdentityCenterConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lake Formation application integrated with IAM Identity Center.</p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationOptInRequest {
  /**
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>A structure for the resource.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   * @public
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
export interface CreateLFTagExpressionRequest {
  /**
   * <p>A name for the expression.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description with information about the LF-Tag expression.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of LF-Tag conditions (key-value pairs).</p>
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 */
export interface CreateLFTagExpressionResponse {}

/**
 * @public
 */
export interface DeleteDataCellsFilterRequest {
  /**
   * <p>The ID of the catalog to which the table belongs.</p>
   * @public
   */
  TableCatalogId?: string | undefined;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>A table in the database.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The name given by the user to the data filter cell.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataCellsFilterResponse {}

/**
 * @public
 */
export interface DeleteLakeFormationIdentityCenterConfigurationRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the
   *          persistent metadata store. It contains database definitions, table definitions, view
   *          definition, and other control information to manage your Lake Formation environment.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLakeFormationIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface DeleteLakeFormationOptInRequest {
  /**
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>A structure for the resource.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag to delete.</p>
   * @public
   */
  TagKey: string | undefined;
}

/**
 * @public
 */
export interface DeleteLFTagResponse {}

/**
 * @public
 */
export interface DeleteLFTagExpressionRequest {
  /**
   * <p>The name for the LF-Tag expression.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID in which the LF-Tag expression is saved. </p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLFTagExpressionResponse {}

/**
 * <p>An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that
 *       <code>VirtualPut</code> was called before writing the object.</p>
 * @public
 */
export interface VirtualObject {
  /**
   * <p>The path to the Amazon S3 object. Must start with s3://</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The ETag of the Amazon S3 object.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsOnCancelRequest {
  /**
   * <p>The Glue data catalog that contains the governed table. Defaults to the current account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database that contains the governed table.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the governed table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>ID of the transaction that the writes occur in.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.</p>
   * @public
   */
  Objects: VirtualObject[] | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsOnCancelResponse {}

/**
 * <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to deregister.</p>
   * @public
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
export interface DescribeLakeFormationIdentityCenterConfigurationRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLakeFormationIdentityCenterConfigurationResponse {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection.</p>
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lake Formation application integrated with IAM Identity Center.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>Indicates if external filtering is enabled.</p>
   * @public
   */
  ExternalFiltering?: ExternalFilteringConfiguration | undefined;

  /**
   * <p>A list of Amazon Web Services account IDs or Amazon Web Services organization/organizational unit ARNs that
   *          are allowed to access data managed by Lake Formation. </p>
   *          <p>If the <code>ShareRecipients</code> list includes valid values, a resource share is created with the principals you want to have access to the resources as the <code>ShareRecipients</code>.</p>
   *          <p>If the <code>ShareRecipients</code> value is null or the list is empty, no resource share is created.</p>
   * @public
   */
  ShareRecipients?: DataLakePrincipal[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the RAM share.</p>
   * @public
   */
  ResourceShare?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>A structure containing information about an Lake Formation resource.</p>
 * @public
 */
export interface ResourceInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The IAM role that registered a resource.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The date and time the resource was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>Whether or not the resource is a federated resource.</p>
   * @public
   */
  WithFederation?: boolean | undefined;

  /**
   * <p>
   *       Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *     </p>
   * @public
   */
  HybridAccessEnabled?: boolean | undefined;

  /**
   * <p>Grants the calling principal the permissions to perform all supported Lake Formation operations on the registered data location. </p>
   * @public
   */
  WithPrivilegedAccess?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeResourceResponse {
  /**
   * <p>A structure containing information about an Lake Formation resource.</p>
   * @public
   */
  ResourceInfo?: ResourceInfo | undefined;
}

/**
 * @public
 */
export interface DescribeTransactionRequest {
  /**
   * <p>The transaction for which to return status.</p>
   * @public
   */
  TransactionId: string | undefined;
}

/**
 * <p>A structure that contains information about a transaction.</p>
 * @public
 */
export interface TransactionDescription {
  /**
   * <p>The ID of the transaction.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>A status of ACTIVE, COMMITTED, or ABORTED.</p>
   * @public
   */
  TransactionStatus?: TransactionStatus | undefined;

  /**
   * <p>The time when the transaction started.</p>
   * @public
   */
  TransactionStartTime?: Date | undefined;

  /**
   * <p>The time when the transaction committed or aborted, if it is not currently active.</p>
   * @public
   */
  TransactionEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTransactionResponse {
  /**
   * <p>Returns a <code>TransactionDescription</code> object containing information about the transaction.</p>
   * @public
   */
  TransactionDescription?: TransactionDescription | undefined;
}

/**
 * @public
 */
export interface ExtendTransactionRequest {
  /**
   * <p>The transaction to extend.</p>
   * @public
   */
  TransactionId?: string | undefined;
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
   * <p>The ID of the catalog to which the table belongs.</p>
   * @public
   */
  TableCatalogId: string | undefined;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table in the database.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The name given by the user to the data filter cell.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDataCellsFilterResponse {
  /**
   * <p>A structure that describes certain columns on certain rows.</p>
   * @public
   */
  DataCellsFilter?: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface GetDataLakePrincipalRequest {}

/**
 * @public
 */
export interface GetDataLakePrincipalResponse {
  /**
   * <p>A unique identifier of the invoking principal.</p>
   * @public
   */
  Identity?: string | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSettingsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * <p>Permissions granted to a principal.</p>
 * @public
 */
export interface PrincipalPermissions {
  /**
   * <p>The principal who is granted permissions.</p>
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>The permissions that are granted to the principal.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * <p>A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.</p>
 * @public
 */
export interface DataLakeSettings {
  /**
   * <p>A list of Lake Formation principals. Supported principals are IAM users or IAM roles.</p>
   * @public
   */
  DataLakeAdmins?: DataLakePrincipal[] | undefined;

  /**
   * <p>A list of Lake Formation principals with only view access to the resources, without the ability to make changes. Supported principals are IAM users or IAM roles.</p>
   * @public
   */
  ReadOnlyAdmins?: DataLakePrincipal[] | undefined;

  /**
   * <p>Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.</p>
   *          <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p>
   *          <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>
   * @public
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * <p>Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.</p>
   *          <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p>
   *          <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * <p>A key-value map that provides an additional configuration on your data lake. CROSS_ACCOUNT_VERSION is the key you can configure in the Parameters field. Accepted values for the CrossAccountVersion key are 1, 2, 3, and 4.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * <p>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log.</p>
   *          <p>You may want to specify this property when you are in a high-trust boundary, such as the same team or company. </p>
   * @public
   */
  TrustedResourceOwners?: string[] | undefined;

  /**
   * <p>Whether to allow Amazon EMR clusters to access data managed by Lake Formation. </p>
   *          <p>If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation.</p>
   *          <p>If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/initial-LF-setup.html#external-data-filter">(Optional) Allow external data filtering</a>.</p>
   * @public
   */
  AllowExternalDataFiltering?: boolean | undefined;

  /**
   * <p>Whether to allow a third-party query engine to get data access credentials without session tags when a caller has full data access permissions.</p>
   * @public
   */
  AllowFullTableExternalDataAccess?: boolean | undefined;

  /**
   * <p>A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.></p>
   * @public
   */
  ExternalDataFilteringAllowList?: DataLakePrincipal[] | undefined;

  /**
   * <p>Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation's administrative APIs.</p>
   * @public
   */
  AuthorizedSessionTagValueList?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSettingsResponse {
  /**
   * <p>A structure representing a list of Lake Formation principals designated as data lake administrators.</p>
   * @public
   */
  DataLakeSettings?: DataLakeSettings | undefined;
}

/**
 * @public
 */
export interface GetEffectivePermissionsForPathRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get permissions.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p>
 *          <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p>
 * @public
 */
export interface DetailsMap {
  /**
   * <p>A resource share ARN for a catalog resource shared through RAM.</p>
   * @public
   */
  ResourceShare?: string[] | undefined;
}

/**
 * <p>The permissions granted or revoked on a resource.</p>
 * @public
 */
export interface PrincipalResourcePermissions {
  /**
   * <p>The Data Lake principal to be granted or revoked permissions.</p>
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>The resource where permissions are to be granted or revoked.</p>
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>The permissions to be granted or revoked on the resource.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).</p>
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;

  /**
   * <p>This attribute can be used to return any additional details of <code>PrincipalResourcePermissions</code>. Currently returns only as a RAM resource share ARN.</p>
   * @public
   */
  AdditionalDetails?: DetailsMap | undefined;

  /**
   * <p>The date and time when the resource was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The user who updated the record.</p>
   * @public
   */
  LastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetEffectivePermissionsForPathResponse {
  /**
   * <p>A list of the permissions for the specified table or database resource located at the path in Amazon S3.</p>
   * @public
   */
  Permissions?: PrincipalResourcePermissions[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag.</p>
   * @public
   */
  TagKey: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagResponse {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag.</p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLFTagExpressionRequest {
  /**
   * <p>The name for the LF-Tag expression</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagExpressionResponse {
  /**
   * <p>The name for the LF-Tag expression. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description with information about the LF-Tag expression.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID in which the LF-Tag expression is saved.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The body of the LF-Tag expression. It is composed of one or more LF-Tag key-value pairs.</p>
   * @public
   */
  Expression?: LFTag[] | undefined;
}

/**
 * @public
 */
export interface GetQueryStateRequest {
  /**
   * <p>The ID of the plan query operation.</p>
   * @public
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
 * <p>A structure for the output.</p>
 * @public
 */
export interface GetQueryStateResponse {
  /**
   * <p>An error message when the operation fails.</p>
   * @public
   */
  Error?: string | undefined;

  /**
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
   * @public
   */
  State: QueryStateString | undefined;
}

/**
 * <p>Contains details about an error where the query request expired.</p>
 * @public
 */
export class ExpiredException extends __BaseException {
  readonly name: "ExpiredException" = "ExpiredException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The ID of the plan query operation.</p>
   * @public
   */
  QueryId: string | undefined;
}

/**
 * <p>Statistics related to the processing of a query statement.</p>
 * @public
 */
export interface ExecutionStatistics {
  /**
   * <p>The average time the request took to be executed.</p>
   * @public
   */
  AverageExecutionTimeMillis?: number | undefined;

  /**
   * <p>The amount of data that was scanned in bytes.</p>
   * @public
   */
  DataScannedBytes?: number | undefined;

  /**
   * <p>The number of work units executed.</p>
   * @public
   */
  WorkUnitsExecutedCount?: number | undefined;
}

/**
 * <p>Statistics related to the processing of a query statement.</p>
 * @public
 */
export interface PlanningStatistics {
  /**
   * <p>An estimate of the data that was scanned in bytes.</p>
   * @public
   */
  EstimatedDataToScanBytes?: number | undefined;

  /**
   * <p>The time that it took to process the request.</p>
   * @public
   */
  PlanningTimeMillis?: number | undefined;

  /**
   * <p>The time the request was in queue to be processed.</p>
   * @public
   */
  QueueTimeMillis?: number | undefined;

  /**
   * <p>The number of work units generated.</p>
   * @public
   */
  WorkUnitsGeneratedCount?: number | undefined;
}

/**
 * @public
 */
export interface GetQueryStatisticsResponse {
  /**
   * <p>An <code>ExecutionStatistics</code> structure containing execution statistics.</p>
   * @public
   */
  ExecutionStatistics?: ExecutionStatistics | undefined;

  /**
   * <p>A <code>PlanningStatistics</code> structure containing query planning statistics.</p>
   * @public
   */
  PlanningStatistics?: PlanningStatistics | undefined;

  /**
   * <p>The time that the query was submitted.</p>
   * @public
   */
  QuerySubmissionTime?: Date | undefined;
}

/**
 * <p>Contains details about an error related to statistics not being ready.</p>
 * @public
 */
export class StatisticsNotReadyYetException extends __BaseException {
  readonly name: "StatisticsNotReadyYetException" = "StatisticsNotReadyYetException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Contains details about an error where the query request was throttled.</p>
 * @public
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database, table, or column resource for which you want to return LF-tags.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>Indicates whether to show the assigned LF-tags.</p>
   * @public
   */
  ShowAssignedLFTags?: boolean | undefined;
}

/**
 * <p>A structure containing the name of a column resource and the LF-tags attached to it.</p>
 * @public
 */
export interface ColumnLFTag {
  /**
   * <p>The name of a column resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The LF-tags attached to a column resource.</p>
   * @public
   */
  LFTags?: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface GetResourceLFTagsResponse {
  /**
   * <p>A list of LF-tags applied to a database resource.</p>
   * @public
   */
  LFTagOnDatabase?: LFTagPair[] | undefined;

  /**
   * <p>A list of LF-tags applied to a table resource.</p>
   * @public
   */
  LFTagsOnTable?: LFTagPair[] | undefined;

  /**
   * <p>A list of LF-tags applied to a column resource.</p>
   * @public
   */
  LFTagsOnColumns?: ColumnLFTag[] | undefined;
}

/**
 * <p>An encryption operation failed.</p>
 * @public
 */
export class GlueEncryptionException extends __BaseException {
  readonly name: "GlueEncryptionException" = "GlueEncryptionException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The catalog containing the governed table. Defaults to the caller’s account.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database containing the governed table.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The governed table for which to retrieve objects.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
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
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * <p>Specifies how many values to return in a page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token if this is not the first call to retrieve these objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies the details of a governed table.</p>
 * @public
 */
export interface TableObject {
  /**
   * <p>The Amazon S3 location of the object.</p>
   * @public
   */
  Uri?: string | undefined;

  /**
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The size of the Amazon S3 object in bytes.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>A structure containing a list of partition values and table objects.</p>
 * @public
 */
export interface PartitionObjects {
  /**
   * <p>A list of partition values.</p>
   * @public
   */
  PartitionValues?: string[] | undefined;

  /**
   * <p>A list of table objects</p>
   * @public
   */
  Objects?: TableObject[] | undefined;
}

/**
 * @public
 */
export interface GetTableObjectsResponse {
  /**
   * <p>A list of objects organized by partition keys.</p>
   * @public
   */
  Objects?: PartitionObjects[] | undefined;

  /**
   * <p>A continuation token indicating whether additional data is available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains a list of values defining partitions.</p>
 * @public
 */
export interface PartitionValueList {
  /**
   * <p>The list of partition values.</p>
   * @public
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
   * <p>The ARN of the partitions' table.</p>
   * @public
   */
  TableArn: string | undefined;

  /**
   * <p>A list of partition values identifying a single partition.</p>
   * @public
   */
  Partition: PartitionValueList | undefined;

  /**
   * <p>Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.</p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>A structure representing context to access a resource (column names, query ID, etc).</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.</p>
   * @public
   */
  SupportedPermissionTypes?: PermissionType[] | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGluePartitionCredentialsResponse {
  /**
   * <p>The access key ID for the temporary credentials.</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The secret key for the temporary credentials.</p>
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * <p>The session token for the temporary credentials.</p>
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * <p>The date and time when the temporary credentials expire.</p>
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * <p>The engine does not support filtering data based on the enforced permissions. For example, if you call the <code>GetTemporaryGlueTableCredentials</code> operation with <code>SupportedPermissionType</code> equal to <code>ColumnPermission</code>, but cell-level permissions exist on the table, this exception is thrown.</p>
 * @public
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
 * @public
 */
export interface QuerySessionContext {
  /**
   * <p>A unique identifier generated by the query engine for the query.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>A timestamp provided by the query engine for when the query started.</p>
   * @public
   */
  QueryStartTime?: Date | undefined;

  /**
   * <p>An identifier string for the consumer cluster.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>A cryptographically generated query identifier generated by Glue or Lake Formation.</p>
   * @public
   */
  QueryAuthorizationId?: string | undefined;

  /**
   * <p>An opaque string-string map passed by the query engine.</p>
   * @public
   */
  AdditionalContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGlueTableCredentialsRequest {
  /**
   * <p>The ARN identifying a table in the Data Catalog for the temporary credentials request.</p>
   * @public
   */
  TableArn: string | undefined;

  /**
   * <p>Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).</p>
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * <p>The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.</p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>A structure representing context to access a resource (column names, query ID, etc).</p>
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * <p>A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.</p>
   * @public
   */
  SupportedPermissionTypes?: PermissionType[] | undefined;

  /**
   * <p>The Amazon S3 path for the table.</p>
   * @public
   */
  S3Path?: string | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGlueTableCredentialsResponse {
  /**
   * <p>The access key ID for the temporary credentials.</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The secret key for the temporary credentials.</p>
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * <p>The session token for the temporary credentials.</p>
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * <p>The date and time when the temporary credentials expire.</p>
   * @public
   */
  Expiration?: Date | undefined;

  /**
   * <p>The Amazon S3 path for the temporary credentials.</p>
   * @public
   */
  VendedS3Path?: string[] | undefined;
}

/**
 * @public
 */
export interface GetWorkUnitResultsRequest {
  /**
   * <p>The ID of the plan query operation for which to get results.</p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p>The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.</p>
   * @public
   */
  WorkUnitId: number | undefined;

  /**
   * <p>A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.</p>
   * @public
   */
  WorkUnitToken: string | undefined;
}

/**
 * <p>A structure for the output.</p>
 * @public
 */
export interface GetWorkUnitResultsResponse {
  /**
   * <p>Rows returned from the <code>GetWorkUnitResults</code> operation as a stream of Apache Arrow v1.0 messages.</p>
   * @public
   */
  ResultStream?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface GetWorkUnitsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The ID of the plan query operation.</p>
   * @public
   */
  QueryId: string | undefined;
}

/**
 * <p>Defines the valid range of work unit IDs for querying the execution service.</p>
 * @public
 */
export interface WorkUnitRange {
  /**
   * <p>Defines the maximum work unit ID in the range. The maximum value is inclusive.</p>
   * @public
   */
  WorkUnitIdMax: number | undefined;

  /**
   * <p>Defines the minimum work unit ID in the range.</p>
   * @public
   */
  WorkUnitIdMin: number | undefined;

  /**
   * <p>A work token used to query the execution service.</p>
   * @public
   */
  WorkUnitToken: string | undefined;
}

/**
 * <p>A structure for the output.</p>
 * @public
 */
export interface GetWorkUnitsResponse {
  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ID of the plan query operation.</p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p>A <code>WorkUnitRangeList</code> object that specifies the valid range of work unit IDs for querying the execution service.</p>
   * @public
   */
  WorkUnitRanges: WorkUnitRange[] | undefined;
}

/**
 * <p>Contains details about an error related to work units not being ready.</p>
 * @public
 */
export class WorkUnitsNotReadyYetException extends __BaseException {
  readonly name: "WorkUnitsNotReadyYetException" = "WorkUnitsNotReadyYetException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.</p>
   *          <p>Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. </p>
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be granted. Resources in Lake Formation are the Data Catalog, databases, and tables.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources. </p>
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.</p>
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;
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
   * <p>A table in the Glue Data Catalog.</p>
   * @public
   */
  Table?: TableResource | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataCellsFilterResponse {
  /**
   * <p>A list of <code>DataCellFilter</code> structures.</p>
   * @public
   */
  DataCellsFilters?: DataCellsFilter[] | undefined;

  /**
   * <p>A continuation token, if not all requested data cell filters have been returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLakeFormationOptInsRequest {
  /**
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>A structure for the resource.</p>
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A single principal-resource pair that has Lake Formation permissins enforced.</p>
 * @public
 */
export interface LakeFormationOptInsInfo {
  /**
   * <p>A structure for the resource.</p>
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * <p>The Lake Formation principal. Supported principals are IAM users
   *       or IAM roles.</p>
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>The last modified date and time of the record.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The user who updated the record.</p>
   * @public
   */
  LastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListLakeFormationOptInsResponse {
  /**
   * <p>A list of principal-resource pairs that have Lake Formation permissins enforced.</p>
   * @public
   */
  LakeFormationOptInsInfoList?: LakeFormationOptInsInfo[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLFTagExpressionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure consists LF-Tag expression name and catalog ID.</p>
 * @public
 */
export interface LFTagExpression {
  /**
   * <p>The name for saved the LF-Tag expression.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A structure that contains information about the LF-Tag expression.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A logical expression composed of one or more LF-Tags.</p>
   * @public
   */
  Expression?: LFTag[] | undefined;
}

/**
 * @public
 */
export interface ListLFTagExpressionsResponse {
  /**
   * <p>Logical expressions composed of one more LF-Tag key-value pairs.</p>
   * @public
   */
  LFTagExpressions?: LFTagExpression[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.</p>
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLFTagsResponse {
  /**
   * <p>A list of LF-tags that the requested has permission to view.</p>
   * @public
   */
  LFTags?: LFTagPair[] | undefined;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataLakeResourceType = {
  CATALOG: "CATALOG",
  DATABASE: "DATABASE",
  DATA_LOCATION: "DATA_LOCATION",
  LF_NAMED_TAG_EXPRESSION: "LF_NAMED_TAG_EXPRESSION",
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Specifies a principal to filter the permissions returned.</p>
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * <p>Specifies a resource type to filter the permissions returned.</p>
   * @public
   */
  ResourceType?: DataLakeResourceType | undefined;

  /**
   * <p>A resource where you will get a list of the principal permissions.</p>
   *          <p>This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.</p>
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Indicates that related permissions should be included in the results.</p>
   * @public
   */
  IncludeRelated?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * <p>A list of principals and their permissions on the resource for the specified principal and resource types.</p>
   * @public
   */
  PrincipalResourcePermissions?: PrincipalResourcePermissions[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>This structure describes the filtering of columns in a table based on a filter condition.</p>
 * @public
 */
export interface FilterCondition {
  /**
   * <p>The field to filter in the filter condition.</p>
   * @public
   */
  Field?: FieldNameString | undefined;

  /**
   * <p>The comparison operator used in the filter condition.</p>
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * <p>A string with values used in evaluating the filter condition.</p>
   * @public
   */
  StringValueList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * <p>Any applicable row-level and/or column-level filtering conditions for the resources.</p>
   * @public
   */
  FilterConditionList?: FilterCondition[] | undefined;

  /**
   * <p>The maximum number of resource results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * <p>A summary of the data lake resources.</p>
   * @public
   */
  ResourceInfoList?: ResourceInfo[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Name of the database where the table is present.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The specific type of storage optimizers to list. The supported value is <code>compaction</code>.</p>
   * @public
   */
  StorageOptimizerType?: OptimizerType | undefined;

  /**
   * <p>The number of storage optimizers to return on each call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A structure describing the configuration and details of a storage optimizer.</p>
 * @public
 */
export interface StorageOptimizer {
  /**
   * <p>The specific type of storage optimizer. The supported value is <code>compaction</code>.</p>
   * @public
   */
  StorageOptimizerType?: OptimizerType | undefined;

  /**
   * <p>A map of the storage optimizer configuration. Currently contains only one key-value pair: <code>is_enabled</code> indicates true or false for acceleration.</p>
   * @public
   */
  Config?: Record<string, string> | undefined;

  /**
   * <p>A message that contains information about any error (if present).</p>
   *          <p>When an acceleration result has an enabled status, the error message is empty.</p>
   *          <p>When an acceleration result has a disabled status, the message describes an error or simply indicates "disabled by the user".</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>A message that contains information about any warnings (if present).</p>
   * @public
   */
  Warnings?: string | undefined;

  /**
   * <p>When an acceleration result has an enabled status, contains the details of the last job run.</p>
   * @public
   */
  LastRunDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListTableStorageOptimizersResponse {
  /**
   * <p>A list of the storage optimizers associated with a table.</p>
   * @public
   */
  StorageOptimizerList?: StorageOptimizer[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>The catalog for which to list transactions. Defaults to the account ID of the caller.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p> A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.</p>
   * @public
   */
  StatusFilter?: TransactionStatusFilter | undefined;

  /**
   * <p>The maximum number of transactions to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A continuation token if this is not the first call to retrieve transactions.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTransactionsResponse {
  /**
   * <p>A list of transactions. The record for each transaction is a <code>TransactionDescription</code> object.</p>
   * @public
   */
  Transactions?: TransactionDescription[] | undefined;

  /**
   * <p>A continuation token indicating whether additional data is available.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDataLakeSettingsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A structure representing a list of Lake Formation principals designated as data lake administrators.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to register.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p>
   * @public
   */
  UseServiceLinkedRole?: boolean | undefined;

  /**
   * <p>The identifier for the role that registers the resource.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Whether or not the resource is a federated resource.</p>
   * @public
   */
  WithFederation?: boolean | undefined;

  /**
   * <p>
   *     Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *   </p>
   * @public
   */
  HybridAccessEnabled?: boolean | undefined;

  /**
   * <p>Grants the calling principal the permissions to perform all supported Lake Formation operations on the registered data location. </p>
   * @public
   */
  WithPrivilegedAccess?: boolean | undefined;
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database, table, or column resource where you want to remove an LF-tag.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>The LF-tags to be removed from the resource.</p>
   * @public
   */
  LFTags: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface RemoveLFTagsFromResourceResponse {
  /**
   * <p>A list of failures to untag a resource.</p>
   * @public
   */
  Failures?: LFTagError[] | undefined;
}

/**
 * @public
 */
export interface RevokePermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The principal to be revoked permissions on the resource.</p>
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be revoked.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security
   *       and Access Control to Metadata and Data</a>.</p>
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * <p>A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.</p>
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;
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
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of conditions (<code>LFTag</code> structures) to search for in database resources.</p>
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * <p>A structure describing a database resource with LF-tags.</p>
 * @public
 */
export interface TaggedDatabase {
  /**
   * <p>A database that has LF-tags attached to it.</p>
   * @public
   */
  Database?: DatabaseResource | undefined;

  /**
   * <p>A list of LF-tags attached to the database.</p>
   * @public
   */
  LFTags?: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface SearchDatabasesByLFTagsResponse {
  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of databases that meet the LF-tag conditions.</p>
   * @public
   */
  DatabaseList?: TaggedDatabase[] | undefined;
}

/**
 * @public
 */
export interface SearchTablesByLFTagsRequest {
  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of conditions (<code>LFTag</code> structures) to search for in table resources.</p>
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * <p>A structure describing a table resource with LF-tags.</p>
 * @public
 */
export interface TaggedTable {
  /**
   * <p>A table that has LF-tags attached to it.</p>
   * @public
   */
  Table?: TableResource | undefined;

  /**
   * <p>A list of LF-tags attached to the database where the table resides.</p>
   * @public
   */
  LFTagOnDatabase?: LFTagPair[] | undefined;

  /**
   * <p>A list of LF-tags attached to the table.</p>
   * @public
   */
  LFTagsOnTable?: LFTagPair[] | undefined;

  /**
   * <p>A list of LF-tags attached to columns in the table.</p>
   * @public
   */
  LFTagsOnColumns?: ColumnLFTag[] | undefined;
}

/**
 * @public
 */
export interface SearchTablesByLFTagsResponse {
  /**
   * <p>A continuation token, present if the current list segment is not the last. On the first run, if you include a not null (a value) token you can get empty pages.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of tables that meet the LF-tag conditions.</p>
   * @public
   */
  TableList?: TaggedTable[] | undefined;
}

/**
 * <p>A structure containing information about the query plan.</p>
 * @public
 */
export interface QueryPlanningContext {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database containing the table.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * <p>A map consisting of key-value pairs.</p>
   * @public
   */
  QueryParameters?: Record<string, string> | undefined;

  /**
   * <p>The transaction ID at which to read the table contents. If this transaction is not committed, the read will be treated as part of that transaction and will see its writes. If this transaction has aborted, an error will be returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryPlanningRequest {
  /**
   * <p>A structure containing information about the query plan.</p>
   * @public
   */
  QueryPlanningContext: QueryPlanningContext | undefined;

  /**
   * <p>A PartiQL query statement used as an input to the planner service.</p>
   * @public
   */
  QueryString: string | undefined;
}

/**
 * <p>A structure for the output.</p>
 * @public
 */
export interface StartQueryPlanningResponse {
  /**
   * <p>The ID of the plan query operation can be used to fetch the actual work unit descriptors that are produced as the result of the operation. The ID is also used to get the query state and as an input to the <code>Execute</code> operation.</p>
   * @public
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
   * <p>Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. </p>
   * @public
   */
  TransactionType?: TransactionType | undefined;
}

/**
 * @public
 */
export interface StartTransactionResponse {
  /**
   * <p>An opaque identifier for the transaction.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataCellsFilterRequest {
  /**
   * <p>A <code>DataCellsFilter</code> structure containing information about the data cells filter.</p>
   * @public
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
export interface UpdateLakeFormationIdentityCenterConfigurationRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the
   *          persistent metadata store. It contains database definitions, table definitions, view
   *          definitions, and other control information to manage your Lake Formation
   *          environment.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>A list of Amazon Web Services account IDs or Amazon Web Services organization/organizational unit ARNs that
   *          are allowed to access to access data managed by Lake Formation. </p>
   *          <p>If the <code>ShareRecipients</code> list includes valid values, then the resource share is updated with the principals you want to have access to the resources.</p>
   *          <p>If the <code>ShareRecipients</code> value is null, both the list of share recipients and
   *          the resource share remain unchanged.</p>
   *          <p>If the <code>ShareRecipients</code> value is an empty list, then the existing share
   *          recipients list will be cleared, and the resource share will be deleted.</p>
   * @public
   */
  ShareRecipients?: DataLakePrincipal[] | undefined;

  /**
   * <p>Allows to enable or disable the IAM Identity Center connection.</p>
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * <p>A list of the account IDs of Amazon Web Services accounts of third-party applications
   *          that are allowed to access data managed by Lake Formation.</p>
   * @public
   */
  ExternalFiltering?: ExternalFilteringConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateLakeFormationIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The key-name for the LF-tag for which to add or delete values.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>A list of LF-tag values to delete from the LF-tag.</p>
   * @public
   */
  TagValuesToDelete?: string[] | undefined;

  /**
   * <p>A list of LF-tag values to add from the LF-tag.</p>
   * @public
   */
  TagValuesToAdd?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateLFTagResponse {}

/**
 * @public
 */
export interface UpdateLFTagExpressionRequest {
  /**
   * <p>The name for the LF-Tag expression.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description with information about the saved LF-Tag expression.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. </p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The LF-Tag expression body composed of one more LF-Tag key-value pairs.</p>
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 */
export interface UpdateLFTagExpressionResponse {}

/**
 * @public
 */
export interface UpdateResourceRequest {
  /**
   * <p>The new role to use for the given resource registered in Lake Formation.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Whether or not the resource is a federated resource.</p>
   * @public
   */
  WithFederation?: boolean | undefined;

  /**
   * <p>
   *       Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *     </p>
   * @public
   */
  HybridAccessEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateResourceResponse {}

/**
 * <p>An object to delete from the governed table.</p>
 * @public
 */
export interface DeleteObjectInput {
  /**
   * <p>The Amazon S3 location of the object to delete.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>A list of partition values for the object. A value must be specified for each partition key associated with the governed table.</p>
   * @public
   */
  PartitionValues?: string[] | undefined;
}

/**
 * <p>Defines an object to add to or delete from a governed table.</p>
 * @public
 */
export interface WriteOperation {
  /**
   * <p>A new object to add to the governed table.</p>
   * @public
   */
  AddObject?: AddObjectInput | undefined;

  /**
   * <p>An object to delete from the governed table.</p>
   * @public
   */
  DeleteObject?: DeleteObjectInput | undefined;
}

/**
 * @public
 */
export interface UpdateTableObjectsRequest {
  /**
   * <p>The catalog containing the governed table to update. Defaults to the caller’s account ID.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The database containing the governed table to update.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The governed table to update.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The transaction at which to do the write.</p>
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * <p>A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.</p>
   * @public
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
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Name of the database where the table is present.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Name of the table for which to enable the storage optimizer.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Name of the configuration for the storage optimizer.</p>
   * @public
   */
  StorageOptimizerConfig: Partial<Record<OptimizerType, Record<string, string>>> | undefined;
}

/**
 * @public
 */
export interface UpdateTableStorageOptimizerResponse {
  /**
   * <p>A response indicating the success of failure of the operation.</p>
   * @public
   */
  Result?: string | undefined;
}
