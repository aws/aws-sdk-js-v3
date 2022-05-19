// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { LakeFormationServiceException as __BaseException } from "./LakeFormationServiceException";

/**
 * <p>Access to a resource was denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>A structure containing an LF-tag key-value pair.</p>
 */
export interface LFTagPair {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

export namespace LFTagPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LFTagPair): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for the catalog object.</p>
 */
export interface CatalogResource {}

export namespace CatalogResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogResource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for the database object.</p>
 */
export interface DatabaseResource {
  /**
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database resource. Unique to the Data Catalog.</p>
   */
  Name: string | undefined;
}

export namespace DatabaseResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatabaseResource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a data cells filter resource. </p>
 */
export interface DataCellsFilterResource {
  /**
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId?: string;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the data cells filter. </p>
   */
  Name?: string;
}

export namespace DataCellsFilterResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCellsFilterResource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a data location object where permissions are granted or revoked. </p>
 */
export interface DataLocationResource {
  /**
   * <p>The identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the data location resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DataLocationResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataLocationResource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing an LF-tag key and values for a resource.</p>
 */
export interface LFTagKeyResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

export namespace LFTagKeyResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LFTagKeyResource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.</p>
 */
export interface LFTag {
  /**
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

export namespace LFTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LFTag): any => ({
    ...obj,
  });
}

export enum ResourceType {
  DATABASE = "DATABASE",
  TABLE = "TABLE",
}

/**
 * <p>A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy.</p>
 */
export interface LFTagPolicyResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The resource type for which the LF-tag policy applies.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>A list of LF-tag conditions that apply to the resource's LF-tag policy.</p>
   */
  Expression: LFTag[] | undefined;
}

export namespace LFTagPolicyResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LFTagPolicyResource): any => ({
    ...obj,
  });
}

/**
 * <p>A wildcard object representing every table under a database.</p>
 */
export interface TableWildcard {}

export namespace TableWildcard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableWildcard): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
 */
export interface TableResource {
  /**
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  Name?: string;

  /**
   * <p>A wildcard object representing every table under a database.</p>
   *
   *          <p>At least one of <code>TableResource$Name</code> or <code>TableResource$TableWildcard</code> is required.</p>
   */
  TableWildcard?: TableWildcard;
}

export namespace TableResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableResource): any => ({
    ...obj,
  });
}

/**
 * <p>A wildcard object, consisting of an optional list of excluded column names or indexes.</p>
 */
export interface ColumnWildcard {
  /**
   * <p>Excludes column names. Any column with this name will be excluded.</p>
   */
  ExcludedColumnNames?: string[];
}

export namespace ColumnWildcard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnWildcard): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p>
 * 	        <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
 */
export interface TableWithColumnsResource {
  /**
   * <p>The identifier for the Data Catalog. By default, it is the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   */
  Name: string | undefined;

  /**
   * <p>The list of column names for the table. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   */
  ColumnNames?: string[];

  /**
   * <p>A wildcard specified by a <code>ColumnWildcard</code> object. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   */
  ColumnWildcard?: ColumnWildcard;
}

export namespace TableWithColumnsResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableWithColumnsResource): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for the resource.</p>
 */
export interface Resource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  Catalog?: CatalogResource;

  /**
   * <p>The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. </p>
   */
  Database?: DatabaseResource;

  /**
   * <p>The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   */
  Table?: TableResource;

  /**
   * <p>The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.</p>
   */
  TableWithColumns?: TableWithColumnsResource;

  /**
   * <p>The location of an Amazon S3 path where permissions are granted or revoked. </p>
   */
  DataLocation?: DataLocationResource;

  /**
   * <p>A data cell filter.</p>
   */
  DataCellsFilter?: DataCellsFilterResource;

  /**
   * <p>The LF-tag key and values attached to a resource.</p>
   */
  LFTag?: LFTagKeyResource;

  /**
   * <p>A list of LF-tag conditions that define a resource's LF-tag policy.</p>
   */
  LFTagPolicy?: LFTagPolicyResource;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

export interface AddLFTagsToResourceRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The database, table, or column resource to which to attach an LF-tag.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The LF-tags to attach to the resource.</p>
   */
  LFTags: LFTagPair[] | undefined;
}

export namespace AddLFTagsToResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddLFTagsToResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error.</p>
 */
export interface ErrorDetail {
  /**
   * <p>The code associated with this error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetail): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.</p>
 */
export interface LFTagError {
  /**
   * <p>The key-name of the LF-tag.</p>
   */
  LFTag?: LFTagPair;

  /**
   * <p>An error that occurred with the attachment or detachment of the LF-tag.</p>
   */
  Error?: ErrorDetail;
}

export namespace LFTagError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LFTagError): any => ({
    ...obj,
  });
}

export interface AddLFTagsToResourceResponse {
  /**
   * <p>A list of failures to tag the resource.</p>
   */
  Failures?: LFTagError[];
}

export namespace AddLFTagsToResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddLFTagsToResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>A specified entity does not exist</p>
 */
export class EntityNotFoundException extends __BaseException {
  readonly name: "EntityNotFoundException" = "EntityNotFoundException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>An internal service error occurred.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
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
 * <p>The input provided was not valid.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>The operation timed out.</p>
 */
export class OperationTimeoutException extends __BaseException {
  readonly name: "OperationTimeoutException" = "OperationTimeoutException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>A new object to add to the governed table.</p>
 */
export interface AddObjectInput {
  /**
   * <p>The Amazon S3 location of the object.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   */
  ETag: string | undefined;

  /**
   * <p>The size of the Amazon S3 object in bytes.</p>
   */
  Size: number | undefined;

  /**
   * <p>A list of partition values for the object. A value must be specified for each partition key associated with the table.</p>
   * 	        <p>The supported data types are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p>
   */
  PartitionValues?: string[];
}

export namespace AddObjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddObjectInput): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that you pass to indicate you want all rows in a filter. </p>
 */
export interface AllRowsWildcard {}

export namespace AllRowsWildcard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllRowsWildcard): any => ({
    ...obj,
  });
}

/**
 * <p>A resource to be created or added already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>A structure used to include auditing information on the privileged API. </p>
 */
export interface AuditContext {
  /**
   * <p>The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.</p>
   */
  AdditionalAuditContext?: string;
}

export namespace AuditContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AuditContext): any => ({
    ...obj,
  });
}

export enum Permission {
  ALL = "ALL",
  ALTER = "ALTER",
  ASSOCIATE = "ASSOCIATE",
  CREATE_DATABASE = "CREATE_DATABASE",
  CREATE_TABLE = "CREATE_TABLE",
  CREATE_TAG = "CREATE_TAG",
  DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS",
  DELETE = "DELETE",
  DESCRIBE = "DESCRIBE",
  DROP = "DROP",
  INSERT = "INSERT",
  SELECT = "SELECT",
}

/**
 * <p>The Lake Formation principal. Supported principals are IAM users
 *       or IAM roles.</p>
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

export namespace DataLakePrincipal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataLakePrincipal): any => ({
    ...obj,
  });
}

/**
 * <p>A permission to a resource granted by batch operation to the principal.</p>
 */
export interface BatchPermissionsRequestEntry {
  /**
   * <p>A unique identifier for the batch permissions request entry.</p>
   */
  Id: string | undefined;

  /**
   * <p>The principal to be granted a permission.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The resource to which the principal is to be granted a permission.</p>
   */
  Resource?: Resource;

  /**
   * <p>The permissions to be granted.</p>
   */
  Permissions?: (Permission | string)[];

  /**
   * <p>Indicates if the option to pass permissions is granted.</p>
   */
  PermissionsWithGrantOption?: (Permission | string)[];
}

export namespace BatchPermissionsRequestEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPermissionsRequestEntry): any => ({
    ...obj,
  });
}

export interface BatchGrantPermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.</p>
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

export namespace BatchGrantPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGrantPermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of failures when performing a batch grant or batch revoke operation.</p>
 */
export interface BatchPermissionsFailureEntry {
  /**
   * <p>An identifier for an entry of the batch request.</p>
   */
  RequestEntry?: BatchPermissionsRequestEntry;

  /**
   * <p>An error message that applies to the failure of the entry.</p>
   */
  Error?: ErrorDetail;
}

export namespace BatchPermissionsFailureEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPermissionsFailureEntry): any => ({
    ...obj,
  });
}

export interface BatchGrantPermissionsResponse {
  /**
   * <p>A list of failures to grant permissions to the resources.</p>
   */
  Failures?: BatchPermissionsFailureEntry[];
}

export namespace BatchGrantPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGrantPermissionsResponse): any => ({
    ...obj,
  });
}

export interface BatchRevokePermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.</p>
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

export namespace BatchRevokePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchRevokePermissionsRequest): any => ({
    ...obj,
  });
}

export interface BatchRevokePermissionsResponse {
  /**
   * <p>A list of failures to revoke permissions to the resources.</p>
   */
  Failures?: BatchPermissionsFailureEntry[];
}

export namespace BatchRevokePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchRevokePermissionsResponse): any => ({
    ...obj,
  });
}

export interface CancelTransactionRequest {
  /**
   * <p>The transaction to cancel.</p>
   */
  TransactionId: string | undefined;
}

export namespace CancelTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelTransactionRequest): any => ({
    ...obj,
  });
}

export interface CancelTransactionResponse {}

export namespace CancelTransactionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelTransactionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error related to a transaction commit that was in progress.</p>
 */
export class TransactionCommitInProgressException extends __BaseException {
  readonly name: "TransactionCommitInProgressException" = "TransactionCommitInProgressException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 */
export class TransactionCommittedException extends __BaseException {
  readonly name: "TransactionCommittedException" = "TransactionCommittedException";
  readonly $fault: "client" = "client";
  /**
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

export interface CommitTransactionRequest {
  /**
   * <p>The transaction to commit.</p>
   */
  TransactionId: string | undefined;
}

export namespace CommitTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommitTransactionRequest): any => ({
    ...obj,
  });
}

export enum TransactionStatus {
  ABORTED = "ABORTED",
  ACTIVE = "ACTIVE",
  COMMITTED = "COMMITTED",
  COMMIT_IN_PROGRESS = "COMMIT_IN_PROGRESS",
}

export interface CommitTransactionResponse {
  /**
   * <p>The status of the transaction.</p>
   */
  TransactionStatus?: TransactionStatus | string;
}

export namespace CommitTransactionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommitTransactionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error related to a transaction that was cancelled.</p>
 */
export class TransactionCanceledException extends __BaseException {
  readonly name: "TransactionCanceledException" = "TransactionCanceledException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>A PartiQL predicate.</p>
 */
export interface RowFilter {
  /**
   * <p>A filter expression.</p>
   */
  FilterExpression?: string;

  /**
   * <p>A wildcard for all rows.</p>
   */
  AllRowsWildcard?: AllRowsWildcard;
}

export namespace RowFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RowFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that describes certain columns on certain rows.</p>
 */
export interface DataCellsFilter {
  /**
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId: string | undefined;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table in the database.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name given by the user to the data filter cell.</p>
   */
  Name: string | undefined;

  /**
   * <p>A PartiQL predicate.</p>
   */
  RowFilter?: RowFilter;

  /**
   * <p>A list of column names.</p>
   */
  ColumnNames?: string[];

  /**
   * <p>A wildcard with exclusions.</p>
   *
   *          <p>You must specify either a <code>ColumnNames</code> list or the
   *       <code>ColumnWildCard</code>. </p>
   */
  ColumnWildcard?: ColumnWildcard;
}

export namespace DataCellsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCellsFilter): any => ({
    ...obj,
  });
}

export interface CreateDataCellsFilterRequest {
  /**
   * <p>A <code>DataCellsFilter</code> structure containing information about the data cells filter.</p>
   */
  TableData: DataCellsFilter | undefined;
}

export namespace CreateDataCellsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataCellsFilterRequest): any => ({
    ...obj,
  });
}

export interface CreateDataCellsFilterResponse {}

export namespace CreateDataCellsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataCellsFilterResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export class ResourceNumberLimitExceededException extends __BaseException {
  readonly name: "ResourceNumberLimitExceededException" = "ResourceNumberLimitExceededException";
  readonly $fault: "client" = "client";
  /**
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

export interface CreateLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues: string[] | undefined;
}

export namespace CreateLFTagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLFTagRequest): any => ({
    ...obj,
  });
}

export interface CreateLFTagResponse {}

export namespace CreateLFTagResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLFTagResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataCellsFilterRequest {
  /**
   * <p>The ID of the catalog to which the table belongs.</p>
   */
  TableCatalogId?: string;

  /**
   * <p>A database in the Glue Data Catalog.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A table in the database.</p>
   */
  TableName?: string;

  /**
   * <p>The name given by the user to the data filter cell.</p>
   */
  Name?: string;
}

export namespace DeleteDataCellsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataCellsFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataCellsFilterResponse {}

export namespace DeleteDataCellsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataCellsFilterResponse): any => ({
    ...obj,
  });
}

export interface DeleteLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag to delete.</p>
   */
  TagKey: string | undefined;
}

export namespace DeleteLFTagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLFTagRequest): any => ({
    ...obj,
  });
}

export interface DeleteLFTagResponse {}

export namespace DeleteLFTagResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLFTagResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that
 *       <code>VirtualPut</code> was called before writing the object.</p>
 */
export interface VirtualObject {
  /**
   * <p>The path to the Amazon S3 object. Must start with s3://</p>
   */
  Uri: string | undefined;

  /**
   * <p>The ETag of the Amazon S3 object.</p>
   */
  ETag?: string;
}

export namespace VirtualObject {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VirtualObject): any => ({
    ...obj,
  });
}

export interface DeleteObjectsOnCancelRequest {
  /**
   * <p>The Glue data catalog that contains the governed table. Defaults to the current account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database that contains the governed table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the governed table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>ID of the transaction that the writes occur in.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.</p>
   */
  Objects: VirtualObject[] | undefined;
}

export namespace DeleteObjectsOnCancelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteObjectsOnCancelRequest): any => ({
    ...obj,
  });
}

export interface DeleteObjectsOnCancelResponse {}

export namespace DeleteObjectsOnCancelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteObjectsOnCancelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeregisterResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to deregister.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeregisterResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterResourceRequest): any => ({
    ...obj,
  });
}

export interface DeregisterResourceResponse {}

export namespace DeregisterResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterResourceResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DescribeResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing information about an Lake Formation resource.</p>
 */
export interface ResourceInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The IAM role that registered a resource.</p>
   */
  RoleArn?: string;

  /**
   * <p>The date and time the resource was last modified.</p>
   */
  LastModified?: Date;
}

export namespace ResourceInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInfo): any => ({
    ...obj,
  });
}

export interface DescribeResourceResponse {
  /**
   * <p>A structure containing information about an Lake Formation resource.</p>
   */
  ResourceInfo?: ResourceInfo;
}

export namespace DescribeResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceResponse): any => ({
    ...obj,
  });
}

export interface DescribeTransactionRequest {
  /**
   * <p>The transaction for which to return status.</p>
   */
  TransactionId: string | undefined;
}

export namespace DescribeTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTransactionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains information about a transaction.</p>
 */
export interface TransactionDescription {
  /**
   * <p>The ID of the transaction.</p>
   */
  TransactionId?: string;

  /**
   * <p>A status of ACTIVE, COMMITTED, or ABORTED.</p>
   */
  TransactionStatus?: TransactionStatus | string;

  /**
   * <p>The time when the transaction started.</p>
   */
  TransactionStartTime?: Date;

  /**
   * <p>The time when the transaction committed or aborted, if it is not currently active.</p>
   */
  TransactionEndTime?: Date;
}

export namespace TransactionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransactionDescription): any => ({
    ...obj,
  });
}

export interface DescribeTransactionResponse {
  /**
   * <p>Returns a <code>TransactionDescription</code> object containing information about the transaction.</p>
   */
  TransactionDescription?: TransactionDescription;
}

export namespace DescribeTransactionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTransactionResponse): any => ({
    ...obj,
  });
}

export interface ExtendTransactionRequest {
  /**
   * <p>The transaction to extend.</p>
   */
  TransactionId?: string;
}

export namespace ExtendTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExtendTransactionRequest): any => ({
    ...obj,
  });
}

export interface ExtendTransactionResponse {}

export namespace ExtendTransactionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExtendTransactionResponse): any => ({
    ...obj,
  });
}

export interface GetDataLakeSettingsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;
}

export namespace GetDataLakeSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataLakeSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
  /**
   * <p>The principal who is granted permissions.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The permissions that are granted to the principal.</p>
   */
  Permissions?: (Permission | string)[];
}

export namespace PrincipalPermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrincipalPermissions): any => ({
    ...obj,
  });
}

/**
 * <p>A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.</p>
 */
export interface DataLakeSettings {
  /**
   * <p>A list of Lake Formation principals. Supported principals are IAM users or IAM roles.</p>
   */
  DataLakeAdmins?: DataLakePrincipal[];

  /**
   * <p>Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions. You can override this default setting when you create a database.</p>
   *
   *          <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p>
   *
   * 	        <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.</p>
   *
   *          <p>A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.</p>
   *
   * 	        <p>The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html">Changing the Default Security Settings for Your Data Lake</a>.</p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log.</p>
   *
   * 	        <p>You may want to specify this property when you are in a high-trust boundary, such as the same team or company. </p>
   */
  TrustedResourceOwners?: string[];

  /**
   * <p>Whether to allow Amazon EMR clusters to access data managed by Lake Formation. </p>
   *
   *          <p>If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation.</p>
   *
   *          <p>If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation.</p>
   *
   *          <p>For more information, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/getting-started-setup.html#emr-switch">(Optional) Allow Data Filtering on Amazon EMR</a>.</p>
   */
  AllowExternalDataFiltering?: boolean;

  /**
   * <p>A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.></p>
   */
  ExternalDataFilteringAllowList?: DataLakePrincipal[];

  /**
   * <p>Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation's administrative APIs.</p>
   */
  AuthorizedSessionTagValueList?: string[];
}

export namespace DataLakeSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataLakeSettings): any => ({
    ...obj,
  });
}

export interface GetDataLakeSettingsResponse {
  /**
   * <p>A structure representing a list of Lake Formation principals designated as data lake administrators.</p>
   */
  DataLakeSettings?: DataLakeSettings;
}

export namespace GetDataLakeSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataLakeSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetEffectivePermissionsForPathRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get permissions.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace GetEffectivePermissionsForPathRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEffectivePermissionsForPathRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p>
 *
 *          <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p>
 */
export interface DetailsMap {
  /**
   * <p>A resource share ARN for a catalog resource shared through RAM.</p>
   */
  ResourceShare?: string[];
}

export namespace DetailsMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetailsMap): any => ({
    ...obj,
  });
}

/**
 * <p>The permissions granted or revoked on a resource.</p>
 */
export interface PrincipalResourcePermissions {
  /**
   * <p>The Data Lake principal to be granted or revoked permissions.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The resource where permissions are to be granted or revoked.</p>
   */
  Resource?: Resource;

  /**
   * <p>The permissions to be granted or revoked on the resource.</p>
   */
  Permissions?: (Permission | string)[];

  /**
   * <p>Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).</p>
   */
  PermissionsWithGrantOption?: (Permission | string)[];

  /**
   * <p>This attribute can be used to return any additional details of <code>PrincipalResourcePermissions</code>. Currently returns only as a RAM resource share ARN.</p>
   */
  AdditionalDetails?: DetailsMap;
}

export namespace PrincipalResourcePermissions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrincipalResourcePermissions): any => ({
    ...obj,
  });
}

export interface GetEffectivePermissionsForPathResponse {
  /**
   * <p>A list of the permissions for the specified table or database resource located at the path in Amazon S3.</p>
   */
  Permissions?: PrincipalResourcePermissions[];

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

export namespace GetEffectivePermissionsForPathResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEffectivePermissionsForPathResponse): any => ({
    ...obj,
  });
}

export interface GetLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey: string | undefined;
}

export namespace GetLFTagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLFTagRequest): any => ({
    ...obj,
  });
}

export interface GetLFTagResponse {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag.</p>
   */
  TagKey?: string;

  /**
   * <p>A list of possible values an attribute can take.</p>
   */
  TagValues?: string[];
}

export namespace GetLFTagResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLFTagResponse): any => ({
    ...obj,
  });
}

export interface GetQueryStateRequest {
  /**
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;
}

export namespace GetQueryStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueryStateRequest): any => ({
    ...obj,
  });
}

export enum QueryStateString {
  ERROR = "ERROR",
  EXPIRED = "EXPIRED",
  FINISHED = "FINISHED",
  PENDING = "PENDING",
  WORKUNITS_AVAILABLE = "WORKUNITS_AVAILABLE",
}

/**
 * <p>A structure for the output.</p>
 */
export interface GetQueryStateResponse {
  /**
   * <p>An error message when the operation fails.</p>
   */
  Error?: string;

  /**
   * <p>The state of a query previously submitted. The possible states are:</p>
   *
   * 	        <ul>
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
  State: QueryStateString | string | undefined;
}

export namespace GetQueryStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueryStateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error where the query request expired.</p>
 */
export class ExpiredException extends __BaseException {
  readonly name: "ExpiredException" = "ExpiredException";
  readonly $fault: "client" = "client";
  /**
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

export interface GetQueryStatisticsRequest {
  /**
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;
}

export namespace GetQueryStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueryStatisticsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics related to the processing of a query statement.</p>
 */
export interface ExecutionStatistics {
  /**
   * <p>The average time the request took to be executed.</p>
   */
  AverageExecutionTimeMillis?: number;

  /**
   * <p>The amount of data that was scanned in bytes.</p>
   */
  DataScannedBytes?: number;

  /**
   * <p>The number of work units executed.</p>
   */
  WorkUnitsExecutedCount?: number;
}

export namespace ExecutionStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecutionStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics related to the processing of a query statement.</p>
 */
export interface PlanningStatistics {
  /**
   * <p>An estimate of the data that was scanned in bytes.</p>
   */
  EstimatedDataToScanBytes?: number;

  /**
   * <p>The time that it took to process the request.</p>
   */
  PlanningTimeMillis?: number;

  /**
   * <p>The time the request was in queue to be processed.</p>
   */
  QueueTimeMillis?: number;

  /**
   * <p>The number of work units generated.</p>
   */
  WorkUnitsGeneratedCount?: number;
}

export namespace PlanningStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlanningStatistics): any => ({
    ...obj,
  });
}

export interface GetQueryStatisticsResponse {
  /**
   * <p>An <code>ExecutionStatistics</code> structure containing execution statistics.</p>
   */
  ExecutionStatistics?: ExecutionStatistics;

  /**
   * <p>A <code>PlanningStatistics</code> structure containing query planning statistics.</p>
   */
  PlanningStatistics?: PlanningStatistics;

  /**
   * <p>The time that the query was submitted.</p>
   */
  QuerySubmissionTime?: Date;
}

export namespace GetQueryStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQueryStatisticsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error related to statistics not being ready.</p>
 */
export class StatisticsNotReadyYetException extends __BaseException {
  readonly name: "StatisticsNotReadyYetException" = "StatisticsNotReadyYetException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>Contains details about an error where the query request was throttled.</p>
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
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

export interface GetResourceLFTagsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The database, table, or column resource for which you want to return LF-tags.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>Indicates whether to show the assigned LF-tags.</p>
   */
  ShowAssignedLFTags?: boolean;
}

export namespace GetResourceLFTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceLFTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the name of a column resource and the LF-tags attached to it.</p>
 */
export interface ColumnLFTag {
  /**
   * <p>The name of a column resource.</p>
   */
  Name?: string;

  /**
   * <p>The LF-tags attached to a column resource.</p>
   */
  LFTags?: LFTagPair[];
}

export namespace ColumnLFTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnLFTag): any => ({
    ...obj,
  });
}

export interface GetResourceLFTagsResponse {
  /**
   * <p>A list of LF-tags applied to a database resource.</p>
   */
  LFTagOnDatabase?: LFTagPair[];

  /**
   * <p>A list of LF-tags applied to a table resource.</p>
   */
  LFTagsOnTable?: LFTagPair[];

  /**
   * <p>A list of LF-tags applied to a column resource.</p>
   */
  LFTagsOnColumns?: ColumnLFTag[];
}

export namespace GetResourceLFTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceLFTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption operation failed.</p>
 */
export class GlueEncryptionException extends __BaseException {
  readonly name: "GlueEncryptionException" = "GlueEncryptionException";
  readonly $fault: "client" = "client";
  /**
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

export interface GetTableObjectsRequest {
  /**
   * <p>The catalog containing the governed table. Defaults to the caller’s account.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database containing the governed table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The governed table for which to retrieve objects.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.</p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;

  /**
   * <p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p>
   * 	        <ul>
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
   * <p>Specifies how many values to return in a page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token if this is not the first call to retrieve these objects.</p>
   */
  NextToken?: string;
}

export namespace GetTableObjectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableObjectsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the details of a governed table.</p>
 */
export interface TableObject {
  /**
   * <p>The Amazon S3 location of the object.</p>
   */
  Uri?: string;

  /**
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   */
  ETag?: string;

  /**
   * <p>The size of the Amazon S3 object in bytes.</p>
   */
  Size?: number;
}

export namespace TableObject {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TableObject): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing a list of partition values and table objects.</p>
 */
export interface PartitionObjects {
  /**
   * <p>A list of partition values.</p>
   */
  PartitionValues?: string[];

  /**
   * <p>A list of table objects</p>
   */
  Objects?: TableObject[];
}

export namespace PartitionObjects {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionObjects): any => ({
    ...obj,
  });
}

export interface GetTableObjectsResponse {
  /**
   * <p>A list of objects organized by partition keys.</p>
   */
  Objects?: PartitionObjects[];

  /**
   * <p>A continuation token indicating whether additional data is available.</p>
   */
  NextToken?: string;
}

export namespace GetTableObjectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableObjectsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a list of values defining partitions.</p>
 */
export interface PartitionValueList {
  /**
   * <p>The list of partition values.</p>
   */
  Values: string[] | undefined;
}

export namespace PartitionValueList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartitionValueList): any => ({
    ...obj,
  });
}

export enum PermissionType {
  CELL_FILTER_PERMISSION = "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION = "COLUMN_PERMISSION",
}

export interface GetTemporaryGluePartitionCredentialsRequest {
  /**
   * <p>The ARN of the partitions' table.</p>
   */
  TableArn: string | undefined;

  /**
   * <p>A list of partition values identifying a single partition.</p>
   */
  Partition: PartitionValueList | undefined;

  /**
   * <p>Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).</p>
   */
  Permissions?: (Permission | string)[];

  /**
   * <p>The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.</p>
   */
  DurationSeconds?: number;

  /**
   * <p>A structure representing context to access a resource (column names, query ID, etc).</p>
   */
  AuditContext?: AuditContext;

  /**
   * <p>A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.</p>
   */
  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

export namespace GetTemporaryGluePartitionCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemporaryGluePartitionCredentialsRequest): any => ({
    ...obj,
  });
}

export interface GetTemporaryGluePartitionCredentialsResponse {
  /**
   * <p>The access key ID for the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The secret key for the temporary credentials.</p>
   */
  SecretAccessKey?: string;

  /**
   * <p>The session token for the temporary credentials.</p>
   */
  SessionToken?: string;

  /**
   * <p>The date and time when the temporary credentials expire.</p>
   */
  Expiration?: Date;
}

export namespace GetTemporaryGluePartitionCredentialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemporaryGluePartitionCredentialsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The engine does not support filtering data based on the enforced permissions. For example, if you call the <code>GetTemporaryGlueTableCredentials</code> operation with <code>SupportedPermissionType</code> equal to <code>ColumnPermission</code>, but cell-level permissions exist on the table, this exception is thrown.</p>
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
  /**
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

export interface GetTemporaryGlueTableCredentialsRequest {
  /**
   * <p>The ARN identifying a table in the Data Catalog for the temporary credentials request.</p>
   */
  TableArn: string | undefined;

  /**
   * <p>Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).</p>
   */
  Permissions?: (Permission | string)[];

  /**
   * <p>The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.</p>
   */
  DurationSeconds?: number;

  /**
   * <p>A structure representing context to access a resource (column names, query ID, etc).</p>
   */
  AuditContext?: AuditContext;

  /**
   * <p>A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.</p>
   */
  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

export namespace GetTemporaryGlueTableCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemporaryGlueTableCredentialsRequest): any => ({
    ...obj,
  });
}

export interface GetTemporaryGlueTableCredentialsResponse {
  /**
   * <p>The access key ID for the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The secret key for the temporary credentials.</p>
   */
  SecretAccessKey?: string;

  /**
   * <p>The session token for the temporary credentials.</p>
   */
  SessionToken?: string;

  /**
   * <p>The date and time when the temporary credentials expire.</p>
   */
  Expiration?: Date;
}

export namespace GetTemporaryGlueTableCredentialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemporaryGlueTableCredentialsResponse): any => ({
    ...obj,
  });
}

export interface GetWorkUnitResultsRequest {
  /**
   * <p>The ID of the plan query operation for which to get results.</p>
   */
  QueryId: string | undefined;

  /**
   * <p>The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.</p>
   */
  WorkUnitId: number | undefined;

  /**
   * <p>A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.</p>
   */
  WorkUnitToken: string | undefined;
}

export namespace GetWorkUnitResultsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkUnitResultsRequest): any => ({
    ...obj,
    ...(obj.WorkUnitToken && { WorkUnitToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>A structure for the output.</p>
 */
export interface GetWorkUnitResultsResponse {
  /**
   * <p>Rows returned from the <code>GetWorkUnitResults</code> operation as a stream of Apache Arrow v1.0 messages.</p>
   */
  ResultStream?: Readable | ReadableStream | Blob;
}

export namespace GetWorkUnitResultsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkUnitResultsResponse): any => ({
    ...obj,
  });
}

export interface GetWorkUnitsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.</p>
   */
  PageSize?: number;

  /**
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;
}

export namespace GetWorkUnitsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkUnitsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the valid range of work unit IDs for querying the execution service.</p>
 */
export interface WorkUnitRange {
  /**
   * <p>Defines the maximum work unit ID in the range. The maximum value is inclusive.</p>
   */
  WorkUnitIdMax: number | undefined;

  /**
   * <p>Defines the minimum work unit ID in the range.</p>
   */
  WorkUnitIdMin: number | undefined;

  /**
   * <p>A work token used to query the execution service.</p>
   */
  WorkUnitToken: string | undefined;
}

export namespace WorkUnitRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkUnitRange): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for the output.</p>
 */
export interface GetWorkUnitsResponse {
  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the plan query operation.</p>
   */
  QueryId: string | undefined;

  /**
   * <p>A <code>WorkUnitRangeList</code> object that specifies the valid range of work unit IDs for querying the execution service.</p>
   */
  WorkUnitRanges: WorkUnitRange[] | undefined;
}

export namespace GetWorkUnitsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkUnitsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an error related to work units not being ready.</p>
 */
export class WorkUnitsNotReadyYetException extends __BaseException {
  readonly name: "WorkUnitsNotReadyYetException" = "WorkUnitsNotReadyYetException";
  readonly $fault: "client" = "client";
  /**
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

export interface GrantPermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.</p>
   * 	        <p>Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. </p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be granted. Resources in Lake Formation are the Data Catalog, databases, and tables.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources. </p>
   */
  Permissions: (Permission | string)[] | undefined;

  /**
   * <p>Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.</p>
   */
  PermissionsWithGrantOption?: (Permission | string)[];
}

export namespace GrantPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantPermissionsRequest): any => ({
    ...obj,
  });
}

export interface GrantPermissionsResponse {}

export namespace GrantPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantPermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListDataCellsFilterRequest {
  /**
   * <p>A table in the Glue Data Catalog.</p>
   */
  Table?: TableResource;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace ListDataCellsFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataCellsFilterRequest): any => ({
    ...obj,
  });
}

export interface ListDataCellsFilterResponse {
  /**
   * <p>A list of <code>DataCellFilter</code> structures.</p>
   */
  DataCellsFilters?: DataCellsFilter[];

  /**
   * <p>A continuation token, if not all requested data cell filters have been returned.</p>
   */
  NextToken?: string;
}

export namespace ListDataCellsFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataCellsFilterResponse): any => ({
    ...obj,
  });
}

export enum ResourceShareType {
  ALL = "ALL",
  FOREIGN = "FOREIGN",
}

export interface ListLFTagsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.</p>
   */
  ResourceShareType?: ResourceShareType | string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

export namespace ListLFTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLFTagsRequest): any => ({
    ...obj,
  });
}

export interface ListLFTagsResponse {
  /**
   * <p>A list of LF-tags that the requested has permission to view.</p>
   */
  LFTags?: LFTagPair[];

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListLFTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLFTagsResponse): any => ({
    ...obj,
  });
}

export enum DataLakeResourceType {
  CATALOG = "CATALOG",
  DATABASE = "DATABASE",
  DATA_LOCATION = "DATA_LOCATION",
  LF_TAG = "LF_TAG",
  LF_TAG_POLICY = "LF_TAG_POLICY",
  LF_TAG_POLICY_DATABASE = "LF_TAG_POLICY_DATABASE",
  LF_TAG_POLICY_TABLE = "LF_TAG_POLICY_TABLE",
  TABLE = "TABLE",
}

export interface ListPermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies a principal to filter the permissions returned.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>Specifies a resource type to filter the permissions returned.</p>
   */
  ResourceType?: DataLakeResourceType | string;

  /**
   * <p>A resource where you will get a list of the principal permissions.</p>
   *          <p>This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.</p>
   */
  Resource?: Resource;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Indicates that related permissions should be included in the results.</p>
   */
  IncludeRelated?: string;
}

export namespace ListPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPermissionsRequest): any => ({
    ...obj,
  });
}

export interface ListPermissionsResponse {
  /**
   * <p>A list of principals and their permissions on the resource for the specified principal and resource types.</p>
   */
  PrincipalResourcePermissions?: PrincipalResourcePermissions[];

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;
}

export namespace ListPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPermissionsResponse): any => ({
    ...obj,
  });
}

export enum ComparisonOperator {
  BEGINS_WITH = "BEGINS_WITH",
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  EQ = "EQ",
  GE = "GE",
  GT = "GT",
  IN = "IN",
  LE = "LE",
  LT = "LT",
  NE = "NE",
  NOT_CONTAINS = "NOT_CONTAINS",
}

export enum FieldNameString {
  LAST_MODIFIED = "LAST_MODIFIED",
  RESOURCE_ARN = "RESOURCE_ARN",
  ROLE_ARN = "ROLE_ARN",
}

/**
 * <p>This structure describes the filtering of columns in a table based on a filter condition.</p>
 */
export interface FilterCondition {
  /**
   * <p>The field to filter in the filter condition.</p>
   */
  Field?: FieldNameString | string;

  /**
   * <p>The comparison operator used in the filter condition.</p>
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   * <p>A string with values used in evaluating the filter condition.</p>
   */
  StringValueList?: string[];
}

export namespace FilterCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterCondition): any => ({
    ...obj,
  });
}

export interface ListResourcesRequest {
  /**
   * <p>Any applicable row-level and/or column-level filtering conditions for the resources.</p>
   */
  FilterConditionList?: FilterCondition[];

  /**
   * <p>The maximum number of resource results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   */
  NextToken?: string;
}

export namespace ListResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
}

export interface ListResourcesResponse {
  /**
   * <p>A summary of the data lake resources.</p>
   */
  ResourceInfoList?: ResourceInfo[];

  /**
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   */
  NextToken?: string;
}

export namespace ListResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesResponse): any => ({
    ...obj,
  });
}

export enum OptimizerType {
  COMPACTION = "COMPACTION",
  GARBAGE_COLLECTION = "GARBAGE_COLLECTION",
  GENERIC = "ALL",
}

export interface ListTableStorageOptimizersRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   */
  CatalogId?: string;

  /**
   * <p>Name of the database where the table is present.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Name of the table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The specific type of storage optimizers to list. The supported value is <code>compaction</code>.</p>
   */
  StorageOptimizerType?: OptimizerType | string;

  /**
   * <p>The number of storage optimizers to return on each call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListTableStorageOptimizersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTableStorageOptimizersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure describing the configuration and details of a storage optimizer.</p>
 */
export interface StorageOptimizer {
  /**
   * <p>The specific type of storage optimizer. The supported value is <code>compaction</code>.</p>
   */
  StorageOptimizerType?: OptimizerType | string;

  /**
   * <p>A map of the storage optimizer configuration. Currently contains only one key-value pair: <code>is_enabled</code> indicates true or false for acceleration.</p>
   */
  Config?: { [key: string]: string };

  /**
   * <p>A message that contains information about any error (if present).</p>
   *
   * 	        <p>When an acceleration result has an enabled status, the error message is empty.</p>
   * 	        <p>When an acceleration result has a disabled status, the message describes an error or simply indicates "disabled by the user".</p>
   */
  ErrorMessage?: string;

  /**
   * <p>A message that contains information about any warnings (if present).</p>
   */
  Warnings?: string;

  /**
   * <p>When an acceleration result has an enabled status, contains the details of the last job run.</p>
   */
  LastRunDetails?: string;
}

export namespace StorageOptimizer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageOptimizer): any => ({
    ...obj,
  });
}

export interface ListTableStorageOptimizersResponse {
  /**
   * <p>A list of the storage optimizers associated with a table.</p>
   */
  StorageOptimizerList?: StorageOptimizer[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListTableStorageOptimizersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTableStorageOptimizersResponse): any => ({
    ...obj,
  });
}

export enum TransactionStatusFilter {
  ABORTED = "ABORTED",
  ACTIVE = "ACTIVE",
  ALL = "ALL",
  COMMITTED = "COMMITTED",
  COMPLETED = "COMPLETED",
}

export interface ListTransactionsRequest {
  /**
   * <p>The catalog for which to list transactions. Defaults to the account ID of the caller.</p>
   */
  CatalogId?: string;

  /**
   * <p> A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.</p>
   */
  StatusFilter?: TransactionStatusFilter | string;

  /**
   * <p>The maximum number of transactions to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token if this is not the first call to retrieve transactions.</p>
   */
  NextToken?: string;
}

export namespace ListTransactionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTransactionsRequest): any => ({
    ...obj,
  });
}

export interface ListTransactionsResponse {
  /**
   * <p>A list of transactions. The record for each transaction is a <code>TransactionDescription</code> object.</p>
   */
  Transactions?: TransactionDescription[];

  /**
   * <p>A continuation token indicating whether additional data is available.</p>
   */
  NextToken?: string;
}

export namespace ListTransactionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTransactionsResponse): any => ({
    ...obj,
  });
}

export interface PutDataLakeSettingsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A structure representing a list of Lake Formation principals designated as data lake administrators.</p>
   */
  DataLakeSettings: DataLakeSettings | undefined;
}

export namespace PutDataLakeSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDataLakeSettingsRequest): any => ({
    ...obj,
  });
}

export interface PutDataLakeSettingsResponse {}

export namespace PutDataLakeSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDataLakeSettingsResponse): any => ({
    ...obj,
  });
}

export interface RegisterResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to register.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p>
   *
   *          <p>For more information, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p>
   */
  UseServiceLinkedRole?: boolean;

  /**
   * <p>The identifier for the role that registers the resource.</p>
   */
  RoleArn?: string;
}

export namespace RegisterResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterResourceRequest): any => ({
    ...obj,
  });
}

export interface RegisterResourceResponse {}

export namespace RegisterResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterResourceResponse): any => ({
    ...obj,
  });
}

export interface RemoveLFTagsFromResourceRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The database, table, or column resource where you want to remove an LF-tag.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The LF-tags to be removed from the resource.</p>
   */
  LFTags: LFTagPair[] | undefined;
}

export namespace RemoveLFTagsFromResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveLFTagsFromResourceRequest): any => ({
    ...obj,
  });
}

export interface RemoveLFTagsFromResourceResponse {
  /**
   * <p>A list of failures to untag a resource.</p>
   */
  Failures?: LFTagError[];
}

export namespace RemoveLFTagsFromResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveLFTagsFromResourceResponse): any => ({
    ...obj,
  });
}

export interface RevokePermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The principal to be revoked permissions on the resource.</p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be revoked.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security
   *       and Access Control to Metadata and Data</a>.</p>
   */
  Permissions: (Permission | string)[] | undefined;

  /**
   * <p>Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.</p>
   */
  PermissionsWithGrantOption?: (Permission | string)[];
}

export namespace RevokePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokePermissionsRequest): any => ({
    ...obj,
  });
}

export interface RevokePermissionsResponse {}

export namespace RevokePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokePermissionsResponse): any => ({
    ...obj,
  });
}

export interface SearchDatabasesByLFTagsRequest {
  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of conditions (<code>LFTag</code> structures) to search for in database resources.</p>
   */
  Expression: LFTag[] | undefined;
}

export namespace SearchDatabasesByLFTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchDatabasesByLFTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure describing a database resource with LF-tags.</p>
 */
export interface TaggedDatabase {
  /**
   * <p>A database that has LF-tags attached to it.</p>
   */
  Database?: DatabaseResource;

  /**
   * <p>A list of LF-tags attached to the database.</p>
   */
  LFTags?: LFTagPair[];
}

export namespace TaggedDatabase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaggedDatabase): any => ({
    ...obj,
  });
}

export interface SearchDatabasesByLFTagsResponse {
  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of databases that meet the LF-tag conditions.</p>
   */
  DatabaseList?: TaggedDatabase[];
}

export namespace SearchDatabasesByLFTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchDatabasesByLFTagsResponse): any => ({
    ...obj,
  });
}

export interface SearchTablesByLFTagsRequest {
  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of conditions (<code>LFTag</code> structures) to search for in table resources.</p>
   */
  Expression: LFTag[] | undefined;
}

export namespace SearchTablesByLFTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTablesByLFTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure describing a table resource with LF-tags.</p>
 */
export interface TaggedTable {
  /**
   * <p>A table that has LF-tags attached to it.</p>
   */
  Table?: TableResource;

  /**
   * <p>A list of LF-tags attached to the database where the table resides.</p>
   */
  LFTagOnDatabase?: LFTagPair[];

  /**
   * <p>A list of LF-tags attached to the table.</p>
   */
  LFTagsOnTable?: LFTagPair[];

  /**
   * <p>A list of LF-tags attached to columns in the table.</p>
   */
  LFTagsOnColumns?: ColumnLFTag[];
}

export namespace TaggedTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaggedTable): any => ({
    ...obj,
  });
}

export interface SearchTablesByLFTagsResponse {
  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of tables that meet the LF-tag conditions.</p>
   */
  TableList?: TaggedTable[];
}

export namespace SearchTablesByLFTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchTablesByLFTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing information about the query plan.</p>
 */
export interface QueryPlanningContext {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database containing the table.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;

  /**
   * <p>A map consisting of key-value pairs.</p>
   */
  QueryParameters?: { [key: string]: string };

  /**
   * <p>The transaction ID at which to read the table contents. If this transaction is not committed, the read will be treated as part of that transaction and will see its writes. If this transaction has aborted, an error will be returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.</p>
   */
  TransactionId?: string;
}

export namespace QueryPlanningContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryPlanningContext): any => ({
    ...obj,
  });
}

export interface StartQueryPlanningRequest {
  /**
   * <p>A structure containing information about the query plan.</p>
   */
  QueryPlanningContext: QueryPlanningContext | undefined;

  /**
   * <p>A PartiQL query statement used as an input to the planner service.</p>
   */
  QueryString: string | undefined;
}

export namespace StartQueryPlanningRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartQueryPlanningRequest): any => ({
    ...obj,
    ...(obj.QueryString && { QueryString: SENSITIVE_STRING }),
  });
}

/**
 * <p>A structure for the output.</p>
 */
export interface StartQueryPlanningResponse {
  /**
   * <p>The ID of the plan query operation can be used to fetch the actual work unit descriptors that are produced as the result of the operation. The ID is also used to get the query state and as an input to the <code>Execute</code> operation.</p>
   */
  QueryId: string | undefined;
}

export namespace StartQueryPlanningResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartQueryPlanningResponse): any => ({
    ...obj,
  });
}

export enum TransactionType {
  READ_AND_WRITE = "READ_AND_WRITE",
  READ_ONLY = "READ_ONLY",
}

export interface StartTransactionRequest {
  /**
   * <p>Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. </p>
   */
  TransactionType?: TransactionType | string;
}

export namespace StartTransactionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTransactionRequest): any => ({
    ...obj,
  });
}

export interface StartTransactionResponse {
  /**
   * <p>An opaque identifier for the transaction.</p>
   */
  TransactionId?: string;
}

export namespace StartTransactionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTransactionResponse): any => ({
    ...obj,
  });
}

export interface UpdateLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the LF-tag for which to add or delete values.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of LF-tag values to delete from the LF-tag.</p>
   */
  TagValuesToDelete?: string[];

  /**
   * <p>A list of LF-tag values to add from the LF-tag.</p>
   */
  TagValuesToAdd?: string[];
}

export namespace UpdateLFTagRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLFTagRequest): any => ({
    ...obj,
  });
}

export interface UpdateLFTagResponse {}

export namespace UpdateLFTagResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLFTagResponse): any => ({
    ...obj,
  });
}

export interface UpdateResourceRequest {
  /**
   * <p>The new role to use for the given resource registered in Lake Formation.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UpdateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceResponse {}

export namespace UpdateResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object to delete from the governed table.</p>
 */
export interface DeleteObjectInput {
  /**
   * <p>The Amazon S3 location of the object to delete.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The Amazon S3 ETag of the object. Returned by <code>GetTableObjects</code> for validation and used to identify changes to the underlying data.</p>
   */
  ETag?: string;

  /**
   * <p>A list of partition values for the object. A value must be specified for each partition key associated with the governed table.</p>
   */
  PartitionValues?: string[];
}

export namespace DeleteObjectInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteObjectInput): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an object to add to or delete from a governed table.</p>
 */
export interface WriteOperation {
  /**
   * <p>A new object to add to the governed table.</p>
   */
  AddObject?: AddObjectInput;

  /**
   * <p>An object to delete from the governed table.</p>
   */
  DeleteObject?: DeleteObjectInput;
}

export namespace WriteOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteOperation): any => ({
    ...obj,
  });
}

export interface UpdateTableObjectsRequest {
  /**
   * <p>The catalog containing the governed table to update. Defaults to the caller’s account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database containing the governed table to update.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The governed table to update.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The transaction at which to do the write.</p>
   */
  TransactionId?: string;

  /**
   * <p>A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.</p>
   */
  WriteOperations: WriteOperation[] | undefined;
}

export namespace UpdateTableObjectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableObjectsRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableObjectsResponse {}

export namespace UpdateTableObjectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableObjectsResponse): any => ({
    ...obj,
  });
}

export interface UpdateTableStorageOptimizerRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   */
  CatalogId?: string;

  /**
   * <p>Name of the database where the table is present.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Name of the table for which to enable the storage optimizer.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Name of the table for which to enable the storage optimizer.</p>
   */
  StorageOptimizerConfig: { [key: string]: { [key: string]: string } } | undefined;
}

export namespace UpdateTableStorageOptimizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableStorageOptimizerRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableStorageOptimizerResponse {
  /**
   * <p>A response indicating the success of failure of the operation.</p>
   */
  Result?: string;
}

export namespace UpdateTableStorageOptimizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableStorageOptimizerResponse): any => ({
    ...obj,
  });
}
