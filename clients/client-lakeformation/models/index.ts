import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface BatchGrantPermissionsRequest {
  __type?: "BatchGrantPermissionsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.</p>
   */
  Entries: Array<BatchPermissionsRequestEntry> | undefined;
}

export namespace BatchGrantPermissionsRequest {
  export function isa(o: any): o is BatchGrantPermissionsRequest {
    return __isa(o, "BatchGrantPermissionsRequest");
  }
}

export interface BatchGrantPermissionsResponse {
  __type?: "BatchGrantPermissionsResponse";
  /**
   * <p>A list of failures to grant permissions to the resources.</p>
   */
  Failures?: Array<BatchPermissionsFailureEntry>;
}

export namespace BatchGrantPermissionsResponse {
  export function isa(o: any): o is BatchGrantPermissionsResponse {
    return __isa(o, "BatchGrantPermissionsResponse");
  }
}

/**
 * <p>A list of failures when performing a batch grant or batch revoke operation.</p>
 */
export interface BatchPermissionsFailureEntry {
  __type?: "BatchPermissionsFailureEntry";
  /**
   * <p>An error message that applies to the failure of the entry.</p>
   */
  Error?: ErrorDetail;

  /**
   * <p>An identifier for an entry of the batch request.</p>
   */
  RequestEntry?: BatchPermissionsRequestEntry;
}

export namespace BatchPermissionsFailureEntry {
  export function isa(o: any): o is BatchPermissionsFailureEntry {
    return __isa(o, "BatchPermissionsFailureEntry");
  }
}

/**
 * <p>A permission to a resource granted by batch operation to the principal.</p>
 */
export interface BatchPermissionsRequestEntry {
  __type?: "BatchPermissionsRequestEntry";
  /**
   * <p>A unique identifier for the batch permissions request entry.</p>
   */
  Id: string | undefined;

  /**
   * <p>The permissions to be granted.</p>
   */
  Permissions?: Array<Permission | string>;

  /**
   * <p>Indicates if the option to pass permissions is granted.</p>
   */
  PermissionsWithGrantOption?: Array<Permission | string>;

  /**
   * <p>The principal to be granted a permission.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The resource to which the principal is to be granted a permission.</p>
   */
  Resource?: Resource;
}

export namespace BatchPermissionsRequestEntry {
  export function isa(o: any): o is BatchPermissionsRequestEntry {
    return __isa(o, "BatchPermissionsRequestEntry");
  }
}

export interface BatchRevokePermissionsRequest {
  __type?: "BatchRevokePermissionsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.</p>
   */
  Entries: Array<BatchPermissionsRequestEntry> | undefined;
}

export namespace BatchRevokePermissionsRequest {
  export function isa(o: any): o is BatchRevokePermissionsRequest {
    return __isa(o, "BatchRevokePermissionsRequest");
  }
}

export interface BatchRevokePermissionsResponse {
  __type?: "BatchRevokePermissionsResponse";
  /**
   * <p>A list of failures to revoke permissions to the resources.</p>
   */
  Failures?: Array<BatchPermissionsFailureEntry>;
}

export namespace BatchRevokePermissionsResponse {
  export function isa(o: any): o is BatchRevokePermissionsResponse {
    return __isa(o, "BatchRevokePermissionsResponse");
  }
}

/**
 * <p>A structure for the catalog object.</p>
 */
export interface CatalogResource {
  __type?: "CatalogResource";
}

export namespace CatalogResource {
  export function isa(o: any): o is CatalogResource {
    return __isa(o, "CatalogResource");
  }
}

/**
 * <p>A wildcard object, consisting of an optional list of excluded column names or indexes.</p>
 */
export interface ColumnWildcard {
  __type?: "ColumnWildcard";
  /**
   * <p>Excludes column names. Any column with this name will be excluded.</p>
   */
  ExcludedColumnNames?: Array<string>;
}

export namespace ColumnWildcard {
  export function isa(o: any): o is ColumnWildcard {
    return __isa(o, "ColumnWildcard");
  }
}

/**
 * <p>The AWS Lake Formation principal.</p>
 */
export interface DataLakePrincipal {
  __type?: "DataLakePrincipal";
  /**
   * <p>An identifier for the AWS Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

export namespace DataLakePrincipal {
  export function isa(o: any): o is DataLakePrincipal {
    return __isa(o, "DataLakePrincipal");
  }
}

export enum DataLakeResourceType {
  CATALOG = "CATALOG",
  DATABASE = "DATABASE",
  DATA_LOCATION = "DATA_LOCATION",
  TABLE = "TABLE"
}

/**
 * <p>The AWS Lake Formation principal.</p>
 */
export interface DataLakeSettings {
  __type?: "DataLakeSettings";
  /**
   * <p>A list of up to three principal permissions entries for default create database permissions.</p>
   */
  CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;

  /**
   * <p>A list of up to three principal permissions entries for default create table permissions.</p>
   */
  CreateTableDefaultPermissions?: Array<PrincipalPermissions>;

  /**
   * <p>A list of AWS Lake Formation principals.</p>
   */
  DataLakeAdmins?: Array<DataLakePrincipal>;
}

export namespace DataLakeSettings {
  export function isa(o: any): o is DataLakeSettings {
    return __isa(o, "DataLakeSettings");
  }
}

/**
 * <p>A structure for a data location object where permissions are granted or revoked. </p>
 */
export interface DataLocationResource {
  __type?: "DataLocationResource";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the data location resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DataLocationResource {
  export function isa(o: any): o is DataLocationResource {
    return __isa(o, "DataLocationResource");
  }
}

/**
 * <p>A structure for the database object.</p>
 */
export interface DatabaseResource {
  __type?: "DatabaseResource";
  /**
   * <p>The name of the database resource. Unique to the Data Catalog.</p>
   */
  Name: string | undefined;
}

export namespace DatabaseResource {
  export function isa(o: any): o is DatabaseResource {
    return __isa(o, "DatabaseResource");
  }
}

export interface DeregisterResourceRequest {
  __type?: "DeregisterResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to deregister.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeregisterResourceRequest {
  export function isa(o: any): o is DeregisterResourceRequest {
    return __isa(o, "DeregisterResourceRequest");
  }
}

export interface DeregisterResourceResponse {
  __type?: "DeregisterResourceResponse";
}

export namespace DeregisterResourceResponse {
  export function isa(o: any): o is DeregisterResourceResponse {
    return __isa(o, "DeregisterResourceResponse");
  }
}

export interface DescribeResourceRequest {
  __type?: "DescribeResourceRequest";
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DescribeResourceRequest {
  export function isa(o: any): o is DescribeResourceRequest {
    return __isa(o, "DescribeResourceRequest");
  }
}

export interface DescribeResourceResponse {
  __type?: "DescribeResourceResponse";
  /**
   * <p>A structure containing information about an AWS Lake Formation resource.</p>
   */
  ResourceInfo?: ResourceInfo;
}

export namespace DescribeResourceResponse {
  export function isa(o: any): o is DescribeResourceResponse {
    return __isa(o, "DescribeResourceResponse");
  }
}

export interface GetDataLakeSettingsRequest {
  __type?: "GetDataLakeSettingsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;
}

export namespace GetDataLakeSettingsRequest {
  export function isa(o: any): o is GetDataLakeSettingsRequest {
    return __isa(o, "GetDataLakeSettingsRequest");
  }
}

export interface GetDataLakeSettingsResponse {
  __type?: "GetDataLakeSettingsResponse";
  /**
   * <p>A list of AWS Lake Formation principals. </p>
   */
  DataLakeSettings?: DataLakeSettings;
}

export namespace GetDataLakeSettingsResponse {
  export function isa(o: any): o is GetDataLakeSettingsResponse {
    return __isa(o, "GetDataLakeSettingsResponse");
  }
}

export interface GetEffectivePermissionsForPathRequest {
  __type?: "GetEffectivePermissionsForPathRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get permissions.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetEffectivePermissionsForPathRequest {
  export function isa(o: any): o is GetEffectivePermissionsForPathRequest {
    return __isa(o, "GetEffectivePermissionsForPathRequest");
  }
}

export interface GetEffectivePermissionsForPathResponse {
  __type?: "GetEffectivePermissionsForPathResponse";
  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the permissions for the specified table or database resource located at the path in Amazon S3.</p>
   */
  Permissions?: Array<PrincipalResourcePermissions>;
}

export namespace GetEffectivePermissionsForPathResponse {
  export function isa(o: any): o is GetEffectivePermissionsForPathResponse {
    return __isa(o, "GetEffectivePermissionsForPathResponse");
  }
}

export interface GrantPermissionsRequest {
  __type?: "GrantPermissionsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The permissions granted to the principal on the resource. AWS Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. AWS Lake Formation requires that each principal be authorized to perform a specific task on AWS Lake Formation resources. </p>
   */
  Permissions: Array<Permission | string> | undefined;

  /**
   * <p>Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.</p>
   */
  PermissionsWithGrantOption?: Array<Permission | string>;

  /**
   * <p>The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.</p>
   * 	        <p>Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. </p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be granted. Resources in AWS Lake Formation are the Data Catalog, databases, and tables.</p>
   */
  Resource: Resource | undefined;
}

export namespace GrantPermissionsRequest {
  export function isa(o: any): o is GrantPermissionsRequest {
    return __isa(o, "GrantPermissionsRequest");
  }
}

export interface GrantPermissionsResponse {
  __type?: "GrantPermissionsResponse";
}

export namespace GrantPermissionsResponse {
  export function isa(o: any): o is GrantPermissionsResponse {
    return __isa(o, "GrantPermissionsResponse");
  }
}

export interface ListPermissionsRequest {
  __type?: "ListPermissionsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies a principal to filter the permissions returned.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>A resource where you will get a list of the principal permissions.</p>
   *          <p>This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.</p>
   */
  Resource?: Resource;

  /**
   * <p>Specifies a resource type to filter the permissions returned.</p>
   */
  ResourceType?: DataLakeResourceType | string;
}

export namespace ListPermissionsRequest {
  export function isa(o: any): o is ListPermissionsRequest {
    return __isa(o, "ListPermissionsRequest");
  }
}

export interface ListPermissionsResponse {
  __type?: "ListPermissionsResponse";
  /**
   * <p>A continuation token, if this is not the first call to retrieve this list.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of principals and their permissions on the resource for the specified principal and resource types.</p>
   */
  PrincipalResourcePermissions?: Array<PrincipalResourcePermissions>;
}

export namespace ListPermissionsResponse {
  export function isa(o: any): o is ListPermissionsResponse {
    return __isa(o, "ListPermissionsResponse");
  }
}

export interface ListResourcesRequest {
  __type?: "ListResourcesRequest";
  /**
   * <p>Any applicable row-level and/or column-level filtering conditions for the resources.</p>
   */
  FilterConditionList?: Array<FilterCondition>;

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
  export function isa(o: any): o is ListResourcesRequest {
    return __isa(o, "ListResourcesRequest");
  }
}

export interface ListResourcesResponse {
  __type?: "ListResourcesResponse";
  /**
   * <p>A continuation token, if this is not the first call to retrieve these resources.</p>
   */
  NextToken?: string;

  /**
   * <p>A summary of the data lake resources.</p>
   */
  ResourceInfoList?: Array<ResourceInfo>;
}

export namespace ListResourcesResponse {
  export function isa(o: any): o is ListResourcesResponse {
    return __isa(o, "ListResourcesResponse");
  }
}

export enum Permission {
  ALL = "ALL",
  ALTER = "ALTER",
  CREATE_DATABASE = "CREATE_DATABASE",
  CREATE_TABLE = "CREATE_TABLE",
  DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS",
  DELETE = "DELETE",
  DROP = "DROP",
  INSERT = "INSERT",
  SELECT = "SELECT"
}

/**
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
  __type?: "PrincipalPermissions";
  /**
   * <p>The permissions that are granted to the principal.</p>
   */
  Permissions?: Array<Permission | string>;

  /**
   * <p>The principal who is granted permissions.</p>
   */
  Principal?: DataLakePrincipal;
}

export namespace PrincipalPermissions {
  export function isa(o: any): o is PrincipalPermissions {
    return __isa(o, "PrincipalPermissions");
  }
}

/**
 * <p>The permissions granted or revoked on a resource.</p>
 */
export interface PrincipalResourcePermissions {
  __type?: "PrincipalResourcePermissions";
  /**
   * <p>The permissions to be granted or revoked on the resource.</p>
   */
  Permissions?: Array<Permission | string>;

  /**
   * <p>Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).</p>
   */
  PermissionsWithGrantOption?: Array<Permission | string>;

  /**
   * <p>The Data Lake principal to be granted or revoked permissions.</p>
   */
  Principal?: DataLakePrincipal;

  /**
   * <p>The resource where permissions are to be granted or revoked.</p>
   */
  Resource?: Resource;
}

export namespace PrincipalResourcePermissions {
  export function isa(o: any): o is PrincipalResourcePermissions {
    return __isa(o, "PrincipalResourcePermissions");
  }
}

export interface PutDataLakeSettingsRequest {
  __type?: "PutDataLakeSettingsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>A list of AWS Lake Formation principals.</p>
   */
  DataLakeSettings: DataLakeSettings | undefined;
}

export namespace PutDataLakeSettingsRequest {
  export function isa(o: any): o is PutDataLakeSettingsRequest {
    return __isa(o, "PutDataLakeSettingsRequest");
  }
}

export interface PutDataLakeSettingsResponse {
  __type?: "PutDataLakeSettingsResponse";
}

export namespace PutDataLakeSettingsResponse {
  export function isa(o: any): o is PutDataLakeSettingsResponse {
    return __isa(o, "PutDataLakeSettingsResponse");
  }
}

export interface RegisterResourceRequest {
  __type?: "RegisterResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to register.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The identifier for the role.</p>
   */
  RoleArn?: string;

  /**
   * <p>Designates a trusted caller, an IAM principal, by registering this caller with the Data Catalog. </p>
   */
  UseServiceLinkedRole?: boolean;
}

export namespace RegisterResourceRequest {
  export function isa(o: any): o is RegisterResourceRequest {
    return __isa(o, "RegisterResourceRequest");
  }
}

export interface RegisterResourceResponse {
  __type?: "RegisterResourceResponse";
}

export namespace RegisterResourceResponse {
  export function isa(o: any): o is RegisterResourceResponse {
    return __isa(o, "RegisterResourceResponse");
  }
}

/**
 * <p>A structure for the resource.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  Catalog?: CatalogResource;

  /**
   * <p>The location of an Amazon S3 path where permissions are granted or revoked. </p>
   */
  DataLocation?: DataLocationResource;

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
}

export namespace Resource {
  export function isa(o: any): o is Resource {
    return __isa(o, "Resource");
  }
}

export interface RevokePermissionsRequest {
  __type?: "RevokePermissionsRequest";
  /**
   * <p>The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. </p>
   */
  CatalogId?: string;

  /**
   * <p>The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security
   *       and Access Control to Metadata and Data</a>.</p>
   */
  Permissions: Array<Permission | string> | undefined;

  /**
   * <p>Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.</p>
   */
  PermissionsWithGrantOption?: Array<Permission | string>;

  /**
   * <p>The principal to be revoked permissions on the resource.</p>
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * <p>The resource to which permissions are to be revoked.</p>
   */
  Resource: Resource | undefined;
}

export namespace RevokePermissionsRequest {
  export function isa(o: any): o is RevokePermissionsRequest {
    return __isa(o, "RevokePermissionsRequest");
  }
}

export interface RevokePermissionsResponse {
  __type?: "RevokePermissionsResponse";
}

export namespace RevokePermissionsResponse {
  export function isa(o: any): o is RevokePermissionsResponse {
    return __isa(o, "RevokePermissionsResponse");
  }
}

/**
 * <p>A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
 */
export interface TableResource {
  __type?: "TableResource";
  /**
   * <p>The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   */
  Name: string | undefined;
}

export namespace TableResource {
  export function isa(o: any): o is TableResource {
    return __isa(o, "TableResource");
  }
}

/**
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p>
 * 	        <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
 */
export interface TableWithColumnsResource {
  __type?: "TableWithColumnsResource";
  /**
   * <p>The list of column names for the table. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   */
  ColumnNames?: Array<string>;

  /**
   * <p>A wildcard specified by a <code>ColumnWildcard</code> object. At least one of <code>ColumnNames</code> or <code>ColumnWildcard</code> is required.</p>
   */
  ColumnWildcard?: ColumnWildcard;

  /**
   * <p>The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. </p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. </p>
   */
  Name?: string;
}

export namespace TableWithColumnsResource {
  export function isa(o: any): o is TableWithColumnsResource {
    return __isa(o, "TableWithColumnsResource");
  }
}

export interface UpdateResourceRequest {
  __type?: "UpdateResourceRequest";
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The new role to use for the given resource registered in AWS Lake Formation.</p>
   */
  RoleArn: string | undefined;
}

export namespace UpdateResourceRequest {
  export function isa(o: any): o is UpdateResourceRequest {
    return __isa(o, "UpdateResourceRequest");
  }
}

export interface UpdateResourceResponse {
  __type?: "UpdateResourceResponse";
}

export namespace UpdateResourceResponse {
  export function isa(o: any): o is UpdateResourceResponse {
    return __isa(o, "UpdateResourceResponse");
  }
}

/**
 * <p>A resource to be created or added already exists.</p>
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AlreadyExistsException {
  export function isa(o: any): o is AlreadyExistsException {
    return __isa(o, "AlreadyExistsException");
  }
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return __isa(o, "ConcurrentModificationException");
  }
}

/**
 * <p>A specified entity does not exist</p>
 */
export interface EntityNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityNotFoundException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace EntityNotFoundException {
  export function isa(o: any): o is EntityNotFoundException {
    return __isa(o, "EntityNotFoundException");
  }
}

/**
 * <p>Contains details about an error.</p>
 */
export interface ErrorDetail {
  __type?: "ErrorDetail";
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
  export function isa(o: any): o is ErrorDetail {
    return __isa(o, "ErrorDetail");
  }
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InternalServiceException {
  export function isa(o: any): o is InternalServiceException {
    return __isa(o, "InternalServiceException");
  }
}

/**
 * <p>The input provided was not valid.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return __isa(o, "InvalidInputException");
  }
}

/**
 * <p>The operation timed out.</p>
 */
export interface OperationTimeoutException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationTimeoutException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace OperationTimeoutException {
  export function isa(o: any): o is OperationTimeoutException {
    return __isa(o, "OperationTimeoutException");
  }
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
  NOT_CONTAINS = "NOT_CONTAINS"
}

export enum FieldNameString {
  LAST_MODIFIED = "LAST_MODIFIED",
  RESOURCE_ARN = "RESOURCE_ARN",
  ROLE_ARN = "ROLE_ARN"
}

/**
 * <p>This structure describes the filtering of columns in a table based on a filter condition.</p>
 */
export interface FilterCondition {
  __type?: "FilterCondition";
  /**
   * <p>The comparison operator used in the filter condition.</p>
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   * <p>The field to filter in the filter condition.</p>
   */
  Field?: FieldNameString | string;

  /**
   * <p>A string with values used in evaluating the filter condition.</p>
   */
  StringValueList?: Array<string>;
}

export namespace FilterCondition {
  export function isa(o: any): o is FilterCondition {
    return __isa(o, "FilterCondition");
  }
}

/**
 * <p>A structure containing information about an AWS Lake Formation resource.</p>
 */
export interface ResourceInfo {
  __type?: "ResourceInfo";
  /**
   * <p>The date and time the resource was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The IAM role that registered a resource.</p>
   */
  RoleArn?: string;
}

export namespace ResourceInfo {
  export function isa(o: any): o is ResourceInfo {
    return __isa(o, "ResourceInfo");
  }
}
