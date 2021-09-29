import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Access to a resource was denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing a tag key-value pair.</p>
 */
export interface LFTagPair {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag.</p>
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
 * <p>A structure for a data location object where permissions are granted or revoked. </p>
 */
export interface DataLocationResource {
  /**
   * <p>The identifier for the Data Catalog where the location is registered with AWS Lake Formation. By default, it is the account ID of the caller.</p>
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
 * <p>A structure containing a tag key and values for a resource.</p>
 */
export interface LFTagKeyResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag.</p>
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
 * <p>A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.</p>
 */
export interface LFTag {
  /**
   * <p>The key-name for the tag.</p>
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
 * <p>A structure containing a list of tag conditions that apply to a resource's tag policy.</p>
 */
export interface LFTagPolicyResource {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The resource type for which the tag policy applies.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>A list of tag conditions that apply to the resource's tag policy.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
   * <p>The tag key and values attached to a resource.</p>
   */
  LFTag?: LFTagKeyResource;

  /**
   * <p>A list of tag conditions that define a resource's tag policy.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The resource to which to attach a tag.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The tags to attach to the resource.</p>
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
   * <p>The key-name of the tag.</p>
   */
  LFTag?: LFTagPair;

  /**
   * <p>An error that occurred with the attachment or detachment of the tag.</p>
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
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConcurrentModificationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>A specified entity does not exist</p>
 */
export interface EntityNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EntityNotFoundException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace EntityNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InternalServiceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The input provided was not valid.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation timed out.</p>
 */
export interface OperationTimeoutException extends __SmithyException, $MetadataBearer {
  name: "OperationTimeoutException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace OperationTimeoutException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource to be created or added already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
}

export enum Permission {
  ALL = "ALL",
  ALTER = "ALTER",
  ALTER_TAG = "ALTER_TAG",
  ASSOCIATE_TAG = "ASSOCIATE_TAG",
  CREATE_DATABASE = "CREATE_DATABASE",
  CREATE_TABLE = "CREATE_TABLE",
  CREATE_TAG = "CREATE_TAG",
  DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS",
  DELETE = "DELETE",
  DELETE_TAG = "DELETE_TAG",
  DESCRIBE = "DESCRIBE",
  DESCRIBE_TAG = "DESCRIBE_TAG",
  DROP = "DROP",
  INSERT = "INSERT",
  SELECT = "SELECT",
}

/**
 * <p>The AWS Lake Formation principal. Supported principals are IAM users or IAM roles.</p>
 */
export interface DataLakePrincipal {
  /**
   * <p>An identifier for the AWS Lake Formation principal.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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

export interface CreateLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag.</p>
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

/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export interface ResourceNumberLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceNumberLimitExceededException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ResourceNumberLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNumberLimitExceededException): any => ({
    ...obj,
  });
}

export interface DeleteLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag to delete.</p>
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
 * <p>A structure containing information about an AWS Lake Formation resource.</p>
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
   * <p>A structure containing information about an AWS Lake Formation resource.</p>
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

export interface GetDataLakeSettingsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
 * <p>A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.</p>
 */
export interface DataLakeSettings {
  /**
   * <p>A list of AWS Lake Formation principals. Supported principals are IAM users or IAM roles.</p>
   */
  DataLakeAdmins?: DataLakePrincipal[];

  /**
   * <p>A structure representing a list of up to three principal permissions entries for default create database permissions.</p>
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A structure representing a list of up to three principal permissions entries for default create table permissions.</p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's AWS CloudTrail log.</p>
   *
   * 	        <p>You may want to specify this property when you are in a high-trust boundary, such as the same team or company. </p>
   */
  TrustedResourceOwners?: string[];
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
   * <p>A structure representing a list of AWS Lake Formation principals designated as data lake administrators.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
 *          <p>If a catalog resource is shared through AWS Resource Access Manager (AWS RAM), then there will exist a corresponding RAM resource share ARN.</p>
 */
export interface DetailsMap {
  /**
   * <p>A resource share ARN for a catalog resource shared through AWS Resource Access Manager (AWS RAM).</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag.</p>
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

export interface GetResourceLFTagsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The resource for which you want to return tags.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>Indicates whether to show the assigned tags.</p>
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
 * <p>A structure containing the name of a column resource and the tags attached to it.</p>
 */
export interface ColumnLFTag {
  /**
   * <p>The name of a column resource.</p>
   */
  Name?: string;

  /**
   * <p>The tags attached to a column resource.</p>
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
   * <p>A list of tags applied to a database resource.</p>
   */
  LFTagOnDatabase?: LFTagPair[];

  /**
   * <p>A list of tags applied to a table resource.</p>
   */
  LFTagsOnTable?: LFTagPair[];

  /**
   * <p>A list of tags applied to a column resource.</p>
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
export interface GlueEncryptionException extends __SmithyException, $MetadataBearer {
  name: "GlueEncryptionException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace GlueEncryptionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlueEncryptionException): any => ({
    ...obj,
  });
}

export interface GrantPermissionsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.</p>
   * 	        <p>Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. </p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be granted. Resources in AWS Lake Formation are the Data Catalog, databases, and tables.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The permissions granted to the principal on the resource. AWS Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. AWS Lake Formation requires that each principal be authorized to perform a specific task on AWS Lake Formation resources. </p>
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

export enum ResourceShareType {
  ALL = "ALL",
  FOREIGN = "FOREIGN",
}

export interface ListLFTagsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>If resource share type is <code>ALL</code>, returns both in-account tags and shared tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share tags that the requester can view. If no resource share type is passed, lists tags in the given catalog ID that the requester has permission to view.</p>
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
   * <p>A list of tags that the requested has permission to view.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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

export interface PutDataLakeSettingsRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A structure representing a list of AWS Lake Formation principals designated as data lake administrators.</p>
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
   * <p>Designates an AWS Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The resource where you want to remove a tag.</p>
   */
  Resource: Resource | undefined;

  /**
   * <p>The tags to be removed from the resource.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
 * <p>A structure describing a database resource with tags.</p>
 */
export interface TaggedDatabase {
  /**
   * <p>A database that has tags attached to it.</p>
   */
  Database?: DatabaseResource;

  /**
   * <p>A list of tags attached to the database.</p>
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
   * <p>A list of databases that meet the tag conditions.</p>
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
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
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
 * <p>A structure describing a table resource with tags.</p>
 */
export interface TaggedTable {
  /**
   * <p>A table that has tags attached to it.</p>
   */
  Table?: TableResource;

  /**
   * <p>A list of tags attached to the database where the table resides.</p>
   */
  LFTagOnDatabase?: LFTagPair[];

  /**
   * <p>A list of tags attached to the table.</p>
   */
  LFTagsOnTable?: LFTagPair[];

  /**
   * <p>A list of tags attached to columns in the table.</p>
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
   * <p>A list of tables that meet the tag conditions.</p>
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

export interface UpdateLFTagRequest {
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The key-name for the tag for which to add or delete values.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>A list of tag values to delete from the tag.</p>
   */
  TagValuesToDelete?: string[];

  /**
   * <p>A list of tag values to add from the tag.</p>
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
   * <p>The new role to use for the given resource registered in AWS Lake Formation.</p>
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
