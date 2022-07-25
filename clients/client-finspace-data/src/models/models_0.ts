// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { FinspaceDataServiceException as __BaseException } from "./FinspaceDataServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

export enum ApiAccess {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum ApplicationPermission {
  AccessNotebooks = "AccessNotebooks",
  CreateDataset = "CreateDataset",
  GetTemporaryCredentials = "GetTemporaryCredentials",
  ManageAttributeSets = "ManageAttributeSets",
  ManageClusters = "ManageClusters",
  ManageUsersAndGroups = "ManageUsersAndGroups",
  ViewAuditData = "ViewAuditData",
}

export interface AssociateUserToPermissionGroupRequest {
  /**
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  userId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface AssociateUserToPermissionGroupResponse {
  /**
   * <p>The returned status code of the response.</p>
   */
  statusCode?: number;
}

/**
 * <p>The request conflicts with an existing resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  reason?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p>One or more resources can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  reason?: string;
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
    this.reason = opts.reason;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  reason?: string;
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
    this.reason = opts.reason;
  }
}

/**
 * <p> The credentials required to access the external Dataview from the S3 location.</p>
 */
export interface AwsCredentials {
  /**
   * <p> The unique identifier for the security credentials.</p>
   */
  accessKeyId?: string;

  /**
   * <p> The secret access key that can be used to sign requests.</p>
   */
  secretAccessKey?: string;

  /**
   * <p> The token that users must pass to use the credentials.</p>
   */
  sessionToken?: string;

  /**
   * <p> The Epoch time when the current credentials expire.</p>
   */
  expiration?: number;
}

export enum ChangeType {
  APPEND = "APPEND",
  MODIFY = "MODIFY",
  REPLACE = "REPLACE",
}

/**
 * The request for a CreateChangeset operation.
 */
export interface CreateChangesetRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique identifier for the FinSpace Dataset where the Changeset will be created.
   *     </p>
   */
  datasetId: string | undefined;

  /**
   * <p>The option to indicate how a Changeset will be applied to a Dataset.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> – Changeset will be considered as a replacement to all prior
   *           loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> – Changeset will be considered as an addition to the end of all
   *           prior loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> – Changeset is considered as a replacement to a specific prior ingested Changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType: ChangeType | string | undefined;

  /**
   * <p>Options that define the location of the data being ingested (<code>s3SourcePath</code>) and the source of the changeset (<code>sourceType</code>).</p>
   *          <p>Both <code>s3SourcePath</code> and <code>sourceType</code> are required attributes.</p>
   *          <p>Here is an example of how you could specify the <code>sourceParams</code>:</p>
   *          <p>
   *             <code>
   *         "sourceParams":
   *         {
   *         "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv",
   *         "sourceType": "S3"
   *         }
   *       </code>
   *          </p>
   *          <p>The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#access-s3-buckets">Loading data from an Amazon S3 Bucket using the FinSpace API</a> section.</p>
   */
  sourceParams: Record<string, string> | undefined;

  /**
   * <p>Options that define the structure of the source file(s) including the format type (<code>formatType</code>), header row (<code>withHeader</code>), data separation character (<code>separator</code>) and the type of compression (<code>compression</code>).
   *     </p>
   *          <p>
   *             <code>formatType</code> is a required attribute and can have the following values:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PARQUET</code> – Parquet source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CSV</code> – CSV source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code> – JSON source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XML</code> – XML source file format.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Here is an example of how you could specify the <code>formatParams</code>:</p>
   *          <p>
   *             <code>
   *           "formatParams":
   *         {
   *          "formatType": "CSV",
   *          "withHeader": "true",
   *          "separator": ",",
   *          "compression":"None"
   *          }
   *       </code>
   *          </p>
   *          <p>Note that if you only provide <code>formatType</code> as <code>CSV</code>, the rest of the attributes will automatically default to CSV values as following:</p>
   *          <p>
   *             <code>
   *           {
   *           "withHeader": "true",
   *           "separator": ","
   *            }
   *         </code>
   *          </p>
   *          <p> For more information about supported file formats, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/supported-data-types.html">Supported Data Types and File Formats</a> in the FinSpace User Guide.</p>
   */
  formatParams: Record<string, string> | undefined;
}

/**
 * The response from a CreateChangeset operation.
 */
export interface CreateChangesetResponse {
  /**
   * <p>The unique identifier for the FinSpace Dataset where the Changeset is created.</p>
   */
  datasetId?: string;

  /**
   * <p>The unique identifier of the Changeset that is created.</p>
   */
  changesetId?: string;
}

/**
 * <p>A limit has exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

export enum DatasetKind {
  NON_TABULAR = "NON_TABULAR",
  TABULAR = "TABULAR",
}

/**
 * <p>A structure for Dataset owner info.</p>
 */
export interface DatasetOwnerInfo {
  /**
   * <p>The name of the Dataset owner.</p>
   */
  name?: string;

  /**
   * <p>Phone number for the Dataset owner.</p>
   */
  phoneNumber?: string;

  /**
   * <p>Email address for the Dataset owner.</p>
   */
  email?: string;
}

/**
 * <p>Resource permission for a dataset. When you create a dataset, all the other members of the same user group inherit access to the dataset. You can only create a dataset if your user group has application permission for Create Datasets.</p>
 *          <p>The following is a list of valid dataset permissions that you can apply:
 *
 *   </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ViewDatasetDetails</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ReadDatasetDetails</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AddDatasetData</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateDataView</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EditDatasetMetadata</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDataset</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information on the dataset permissions, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/managing-user-permissions.html#supported-dataset-permissions">Supported Dataset Permissions</a> in the FinSpace User Guide.</p>
 */
export interface ResourcePermission {
  /**
   * <p>Permission for a resource.</p>
   */
  permission?: string;
}

/**
 * <p>Permission group parameters for Dataset permissions.</p>
 *          <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p>
 *          <p>
 *             <code>
 *         {
 *         "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g",
 *         "datasetPermissions": [
 *         {"permission": "ViewDatasetDetails"},
 *         {"permission": "AddDatasetData"},
 *         {"permission": "EditDatasetMetadata"},
 *         {"permission": "DeleteDataset"}
 *         ]
 *         }
 *       </code>
 *          </p>
 */
export interface PermissionGroupParams {
  /**
   * <p>The unique identifier for the <code>PermissionGroup</code>.</p>
   */
  permissionGroupId?: string;

  /**
   * <p>List of resource permissions.</p>
   */
  datasetPermissions?: ResourcePermission[];
}

export enum ColumnDataType {
  BIGINT = "BIGINT",
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  CHAR = "CHAR",
  DATE = "DATE",
  DATETIME = "DATETIME",
  DOUBLE = "DOUBLE",
  FLOAT = "FLOAT",
  INTEGER = "INTEGER",
  SMALLINT = "SMALLINT",
  STRING = "STRING",
  TINYINT = "TINYINT",
}

/**
 * <p>The definition of a column in a tabular Dataset.</p>
 */
export interface ColumnDefinition {
  /**
   * <p>Data type of a column.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STRING</code> – A String data type.</p>
   *                <p>
   *                   <code>CHAR</code> – A char data type.</p>
   *                <p>
   *                   <code>INTEGER</code> – An integer data type.</p>
   *                <p>
   *                   <code>TINYINT</code> – A tinyint data type.</p>
   *                <p>
   *                   <code>SMALLINT</code> – A smallint data type.</p>
   *                <p>
   *                   <code>BIGINT</code> – A bigint data type.</p>
   *                <p>
   *                   <code>FLOAT</code> – A float data type.</p>
   *                <p>
   *                   <code>DOUBLE</code> – A double data type.</p>
   *                <p>
   *                   <code>DATE</code> – A date data type.</p>
   *                <p>
   *                   <code>DATETIME</code> – A datetime data type.</p>
   *                <p>
   *                   <code>BOOLEAN</code> – A boolean data type.</p>
   *                <p>
   *                   <code>BINARY</code> – A binary data type.</p>
   *             </li>
   *          </ul>
   */
  dataType?: ColumnDataType | string;

  /**
   * <p>The name of a column.</p>
   */
  columnName?: string;

  /**
   * <p>Description for a column.</p>
   */
  columnDescription?: string;
}

/**
 * <p>Definition for a schema on a tabular Dataset.</p>
 */
export interface SchemaDefinition {
  /**
   * <p>List of column definitions.</p>
   */
  columns?: ColumnDefinition[];

  /**
   * <p>List of column names used for primary key.</p>
   */
  primaryKeyColumns?: string[];
}

/**
 * <p>A union of schema types.</p>
 */
export interface SchemaUnion {
  /**
   * <p>The configuration for a schema on a tabular Dataset.</p>
   */
  tabularSchemaConfig?: SchemaDefinition;
}

/**
 * The request for a CreateDataset operation
 */
export interface CreateDatasetRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * <p>Display title for a FinSpace Dataset.</p>
   */
  datasetTitle: string | undefined;

  /**
   * <p>The format in which Dataset data is structured.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABULAR</code> – Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p>
   *             </li>
   *          </ul>
   */
  kind: DatasetKind | string | undefined;

  /**
   * <p>Description of a Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * <p>Contact information for a Dataset owner.</p>
   */
  ownerInfo?: DatasetOwnerInfo;

  /**
   * <p>Permission group parameters for Dataset permissions.</p>
   */
  permissionGroupParams: PermissionGroupParams | undefined;

  /**
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;

  /**
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;
}

/**
 * The response from a CreateDataset operation
 */
export interface CreateDatasetResponse {
  /**
   * <p>The unique identifier for the created Dataset.</p>
   */
  datasetId?: string;
}

export enum ExportFileFormat {
  DELIMITED_TEXT = "DELIMITED_TEXT",
  PARQUET = "PARQUET",
}

/**
 * <p>Structure for the Dataview destination type parameters.</p>
 */
export interface DataViewDestinationTypeParams {
  /**
   * <p>Destination type for a Dataview.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GLUE_TABLE</code> – Glue table destination type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> – S3 destination type.</p>
   *             </li>
   *          </ul>
   */
  destinationType: string | undefined;

  /**
   * <p>Dataview export file format.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PARQUET</code> – Parquet export file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIMITED_TEXT</code> – Delimited text export file format.</p>
   *             </li>
   *          </ul>
   */
  s3DestinationExportFileFormat?: ExportFileFormat | string;

  /**
   * <p>Format Options for S3 Destination type.</p>
   *          <p>Here is an example of how you could specify the <code>s3DestinationExportFileFormatOptions</code>
   *          </p>
   *          <p>
   *             <code>
   *         {
   *         "header": "true",
   *         "delimiter": ",",
   *         "compression": "gzip"
   *         }</code>
   *          </p>
   */
  s3DestinationExportFileFormatOptions?: Record<string, string>;
}

/**
 * Request for creating a data view.
 */
export interface CreateDataViewRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique Dataset identifier that is used to create a Dataview.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>Flag to indicate Dataview should be updated automatically.</p>
   */
  autoUpdate?: boolean;

  /**
   * <p>Columns to be used for sorting the data.</p>
   */
  sortColumns?: string[];

  /**
   * <p>Ordered set of column names used to partition data.</p>
   */
  partitionColumns?: string[];

  /**
   * <p>Beginning time to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * <p>Options that define the destination type for the Dataview.</p>
   */
  destinationTypeParams: DataViewDestinationTypeParams | undefined;
}

/**
 * Response for creating a data view.
 */
export interface CreateDataViewResponse {
  /**
   * <p>The unique identifier of the Dataset used for the Dataview.</p>
   */
  datasetId?: string;

  /**
   * <p>The unique identifier for the created Dataview.</p>
   */
  dataViewId?: string;
}

export interface CreatePermissionGroupRequest {
  /**
   * <p>The name of the permission group.</p>
   */
  name: string | undefined;

  /**
   * <p>A brief description for the permission group.</p>
   */
  description?: string;

  /**
   * <p>The option to indicate FinSpace application permissions that are granted to a specific group.</p>
   *          <important>
   *             <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p>
   *          </important>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateDataset</code> – Group members can create new datasets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ViewAuditData</code> – Group members can view audit data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p>
   *             </li>
   *          </ul>
   */
  applicationPermissions: (ApplicationPermission | string)[] | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface CreatePermissionGroupResponse {
  /**
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId?: string;
}

export enum UserType {
  APP_USER = "APP_USER",
  SUPER_USER = "SUPER_USER",
}

export interface CreateUserRequest {
  /**
   * <p>The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.</p>
   */
  emailAddress: string | undefined;

  /**
   * <p>The option to indicate the type of user. Use one of the following options to specify this parameter:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p>
   *             </li>
   *          </ul>
   */
  type: UserType | string | undefined;

  /**
   * <p>The first name of the user that you want to register.</p>
   */
  firstName?: string;

  /**
   * <p>The last name of the user that you want to register.</p>
   */
  lastName?: string;

  /**
   * <p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user has permissions to use the APIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user does not have permissions to use any APIs.</p>
   *             </li>
   *          </ul>
   */
  ApiAccess?: ApiAccess | string;

  /**
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface CreateUserResponse {
  /**
   * <p>The unique identifier for the user.</p>
   */
  userId?: string;
}

/**
 * The request for a DeleteDataset operation.
 */
export interface DeleteDatasetRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique identifier of the Dataset to be deleted.</p>
   */
  datasetId: string | undefined;
}

/**
 * The response from an DeleteDataset operation
 */
export interface DeleteDatasetResponse {
  /**
   * <p>The unique identifier for the deleted Dataset.</p>
   */
  datasetId?: string;
}

export interface DeletePermissionGroupRequest {
  /**
   * <p>The unique identifier for the permission group that you want to delete.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface DeletePermissionGroupResponse {
  /**
   * <p>The unique identifier for the deleted permission group.</p>
   */
  permissionGroupId?: string;
}

export interface DisableUserRequest {
  /**
   * <p>The unique identifier for the user account that you want to disable.</p>
   */
  userId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface DisableUserResponse {
  /**
   * <p>The unique identifier for the disabled user account.</p>
   */
  userId?: string;
}

export interface DisassociateUserFromPermissionGroupRequest {
  /**
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  userId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface DisassociateUserFromPermissionGroupResponse {
  /**
   * <p>The returned status code of the response.</p>
   */
  statusCode?: number;
}

export interface EnableUserRequest {
  /**
   * <p>The unique identifier for the user account that you want to enable.</p>
   */
  userId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface EnableUserResponse {
  /**
   * <p>The unique identifier for the enabled user account.</p>
   */
  userId?: string;
}

/**
 * Request to describe a changeset.
 */
export interface GetChangesetRequest {
  /**
   * <p>The unique identifier for the FinSpace Dataset where the Changeset is created.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>The unique identifier of the Changeset for which to get data.</p>
   */
  changesetId: string | undefined;
}

export enum ErrorCategory {
  ACCESS_DENIED = "ACCESS_DENIED",
  CANCELLED = "CANCELLED",
  INTERNAL_SERVICE_EXCEPTION = "INTERNAL_SERVICE_EXCEPTION",
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
  SERVICE_QUOTA_EXCEEDED = "SERVICE_QUOTA_EXCEEDED",
  THROTTLING = "THROTTLING",
  USER_RECOVERABLE = "USER_RECOVERABLE",
  VALIDATION = "VALIDATION",
}

/**
 * <p>The structure with error messages.</p>
 */
export interface ChangesetErrorInfo {
  /**
   * <p>The text of the error message.</p>
   */
  errorMessage?: string;

  /**
   * <p>The category of the error.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VALIDATION</code> – The inputs to this request are invalid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_EXCEEDED</code> – Service quotas have been exceeded. Please
   *           contact AWS support to increase quotas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code> – Missing required permission to perform this
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_NOT_FOUND</code> – One or more inputs to this request were not
   *           found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLING</code> – The system temporarily lacks sufficient resources to process
   *           the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVICE_EXCEPTION</code> – An internal service error has
   *           occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – Cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_RECOVERABLE</code> – A user recoverable error has occurred.</p>
   *             </li>
   *          </ul>
   */
  errorCategory?: ErrorCategory | string;
}

export enum IngestionStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUCCESS = "SUCCESS",
}

/**
 * The response from a describe changeset operation
 */
export interface GetChangesetResponse {
  /**
   * <p>The unique identifier for a Changeset.</p>
   */
  changesetId?: string;

  /**
   * <p>The ARN identifier of the Changeset.</p>
   */
  changesetArn?: string;

  /**
   * <p>The unique identifier for the FinSpace Dataset where the Changeset is created.</p>
   */
  datasetId?: string;

  /**
   * <p>Type that indicates how a Changeset is applied to a Dataset.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> – Changeset is considered as a replacement to all prior loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> – Changeset is considered as an addition to the end of all prior loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> – Changeset is considered as a replacement to a specific prior ingested Changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType?: ChangeType | string;

  /**
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams?: Record<string, string>;

  /**
   * <p>Structure of the source file(s).</p>
   */
  formatParams?: Record<string, string>;

  /**
   * <p>The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The status of Changeset creation operation.</p>
   */
  status?: IngestionStatus | string;

  /**
   * <p>The structure with error messages.</p>
   */
  errorInfo?: ChangesetErrorInfo;

  /**
   * <p>Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeUntilTimestamp?: number;

  /**
   * <p>Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeFromTimestamp?: number;

  /**
   * <p>The unique identifier of the Changeset that is being updated.</p>
   */
  updatesChangesetId?: string;

  /**
   * <p>The unique identifier of the updated Changeset.</p>
   */
  updatedByChangesetId?: string;
}

/**
 * Request for the GetDataset operation.
 */
export interface GetDatasetRequest {
  /**
   * <p>The unique identifier for a Dataset.</p>
   */
  datasetId: string | undefined;
}

export enum DatasetStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  SUCCESS = "SUCCESS",
}

/**
 * Response for the GetDataset operation
 */
export interface GetDatasetResponse {
  /**
   * <p>The unique identifier for a Dataset.</p>
   */
  datasetId?: string;

  /**
   * <p>The ARN identifier of the Dataset.</p>
   */
  datasetArn?: string;

  /**
   * <p>Display title for a Dataset.</p>
   */
  datasetTitle?: string;

  /**
   * <p>The format in which Dataset data is structured.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABULAR</code> – Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p>
   *             </li>
   *          </ul>
   */
  kind?: DatasetKind | string;

  /**
   * <p>A description of the Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * <p>The timestamp at which the Dataset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The last time that the Dataset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;

  /**
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;

  /**
   * <p>Status of the Dataset creation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – Dataset is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – Dataset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – Dataset creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – Dataset creation is running.</p>
   *             </li>
   *          </ul>
   */
  status?: DatasetStatus | string;
}

/**
 * Request for retrieving a data view detail. Grouped / accessible within a dataset by its dataset id.
 */
export interface GetDataViewRequest {
  /**
   * <p>The unique identifier for the Dataview.</p>
   */
  dataViewId: string | undefined;

  /**
   * <p>The unique identifier for the Dataset used in the Dataview.</p>
   */
  datasetId: string | undefined;
}

/**
 * <p>The structure with error messages.</p>
 */
export interface DataViewErrorInfo {
  /**
   * <p>The text of the error message.</p>
   */
  errorMessage?: string;

  /**
   * <p>The category of the error.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VALIDATION</code> – The inputs to this request are invalid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_EXCEEDED</code> – Service quotas have been exceeded. Please
   *           contact AWS support to increase quotas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code> – Missing required permission to perform this
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_NOT_FOUND</code> – One or more inputs to this request were not
   *           found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLING</code> – The system temporarily lacks sufficient resources to process
   *           the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVICE_EXCEPTION</code> – An internal service error has
   *           occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – Cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_RECOVERABLE</code> – A user recoverable error has occurred.</p>
   *             </li>
   *          </ul>
   */
  errorCategory?: ErrorCategory | string;
}

export enum DataViewStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  FAILED_CLEANUP_FAILED = "FAILED_CLEANUP_FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  SUCCESS = "SUCCESS",
  TIMEOUT = "TIMEOUT",
}

/**
 * Response from retrieving a dataview, which includes details on the target database and table name
 */
export interface GetDataViewResponse {
  /**
   * <p>Flag to indicate Dataview should be updated automatically.</p>
   */
  autoUpdate?: boolean;

  /**
   * <p>Ordered set of column names used to partition data.</p>
   */
  partitionColumns?: string[];

  /**
   * <p>The unique identifier for the Dataset used in the Dataview.</p>
   */
  datasetId?: string;

  /**
   * <p>Time range to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * <p>Information about an error that occurred for the Dataview.</p>
   */
  errorInfo?: DataViewErrorInfo;

  /**
   * <p>The last time that a Dataview was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * <p>The timestamp at which the Dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>Columns to be used for sorting the data.</p>
   */
  sortColumns?: string[];

  /**
   * <p>The unique identifier for the Dataview.</p>
   */
  dataViewId?: string;

  /**
   * <p>The ARN identifier of the Dataview.</p>
   */
  dataViewArn?: string;

  /**
   * <p>Options that define the destination type for the Dataview.</p>
   */
  destinationTypeParams?: DataViewDestinationTypeParams;

  /**
   * <p>The status of a Dataview creation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – Dataview creation is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> – Dataview creation is starting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – Dataview creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – Dataview creation has been cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code> – Dataview creation has timed out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – Dataview creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – Dataview creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_CLEANUP_FAILED</code> – Dataview creation failed and resource cleanup failed.</p>
   *             </li>
   *          </ul>
   */
  status?: DataViewStatus | string;
}

export interface GetExternalDataViewAccessDetailsRequest {
  /**
   * <p>The unique identifier for the Dataview that you want to access.</p>
   */
  dataViewId: string | undefined;

  /**
   * <p>The unique identifier for the Dataset.</p>
   */
  datasetId: string | undefined;
}

/**
 * <p>The location of an external Dataview in an S3 bucket.</p>
 */
export interface S3Location {
  /**
   * <p> The name of the S3 bucket.</p>
   */
  bucket: string | undefined;

  /**
   * <p> The path of the folder, within the S3 bucket that contains the Dataset.</p>
   */
  key: string | undefined;
}

export interface GetExternalDataViewAccessDetailsResponse {
  /**
   * <p>The credentials required to access the external Dataview from the S3 location.</p>
   */
  credentials?: AwsCredentials;

  /**
   * <p>The location where the external Dataview is stored.</p>
   */
  s3Location?: S3Location;
}

export interface GetPermissionGroupRequest {
  /**
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;
}

export enum PermissionGroupMembershipStatus {
  ADDITION_IN_PROGRESS = "ADDITION_IN_PROGRESS",
  ADDITION_SUCCESS = "ADDITION_SUCCESS",
  REMOVAL_IN_PROGRESS = "REMOVAL_IN_PROGRESS",
}

/**
 * <p>The structure for a permission group.</p>
 */
export interface PermissionGroup {
  /**
   * <p> The unique identifier for the permission group.</p>
   */
  permissionGroupId?: string;

  /**
   * <p>The name of the permission group.</p>
   */
  name?: string;

  /**
   * <p> A brief description for the permission group.</p>
   */
  description?: string;

  /**
   * <p>Indicates the permissions that are granted to a specific group for accessing the FinSpace application.</p>
   *          <important>
   *             <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p>
   *          </important>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateDataset</code> – Group members can create new datasets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ViewAuditData</code> – Group members can view audit data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p>
   *             </li>
   *          </ul>
   */
  applicationPermissions?: (ApplicationPermission | string)[];

  /**
   * <p>The timestamp at which the group was created in FinSpace. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  createTime?: number;

  /**
   * <p>Describes the last time the permission group was updated. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastModifiedTime?: number;

  /**
   * <p>Indicates the status of the user account within a permission group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADDITION_IN_PROGRESS</code> – The user account is currently being added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADDITION_SUCCESS</code> – The user account is successfully added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p>
   *             </li>
   *          </ul>
   */
  membershipStatus?: PermissionGroupMembershipStatus | string;
}

export interface GetPermissionGroupResponse {
  /**
   * <p>The structure for a permission group.</p>
   */
  permissionGroup?: PermissionGroup;
}

/**
 * Request for GetProgrammaticAccessCredentials operation
 */
export interface GetProgrammaticAccessCredentialsRequest {
  /**
   * <p>The time duration in which the credentials remain valid. </p>
   */
  durationInMinutes?: number;

  /**
   * <p>The FinSpace environment identifier.</p>
   */
  environmentId: string | undefined;
}

/**
 * <p>Short term API credentials.</p>
 */
export interface Credentials {
  /**
   * <p>The access key identifier.</p>
   */
  accessKeyId?: string;

  /**
   * <p>The access key.</p>
   */
  secretAccessKey?: string;

  /**
   * <p>The session token.</p>
   */
  sessionToken?: string;
}

/**
 * Response for GetProgrammaticAccessCredentials operation
 */
export interface GetProgrammaticAccessCredentialsResponse {
  /**
   * <p>Returns the programmatic credentials.</p>
   */
  credentials?: Credentials;

  /**
   * <p>Returns the duration in which the credentials will remain valid.</p>
   */
  durationInMinutes?: number;
}

export interface GetUserRequest {
  /**
   * <p>The unique identifier of the user to get data for.</p>
   */
  userId: string | undefined;
}

export enum UserStatus {
  CREATING = "CREATING",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface GetUserResponse {
  /**
   * <p>The unique identifier for the user account that is retrieved.</p>
   */
  userId?: string;

  /**
   * <p>The current status of the user account. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The user account creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user account is created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user account is currently inactive.</p>
   *             </li>
   *          </ul>
   */
  status?: UserStatus | string;

  /**
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * <p>The last name of the user.</p>
   */
  lastName?: string;

  /**
   * <p>The email address that is associated with the user.</p>
   */
  emailAddress?: string;

  /**
   * <p>Indicates the type of user.  </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p>
   *             </li>
   *          </ul>
   */
  type?: UserType | string;

  /**
   * <p>Indicates whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user has permissions to use the APIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user does not have permissions to use any APIs.</p>
   *             </li>
   *          </ul>
   */
  apiAccess?: ApiAccess | string;

  /**
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * <p>The timestamp at which the user account was created in FinSpace. The value is determined as epoch time in milliseconds. </p>
   */
  createTime?: number;

  /**
   * <p>Describes the last time the user account was enabled. The value is determined as epoch time in milliseconds.</p>
   */
  lastEnabledTime?: number;

  /**
   * <p>Describes the last time the user account was disabled. The value is determined as epoch time in milliseconds.</p>
   */
  lastDisabledTime?: number;

  /**
   * <p>Describes the last time the user account was updated. The value is determined as epoch time in milliseconds.</p>
   */
  lastModifiedTime?: number;

  /**
   * <p>Describes the last time that the user logged into their account. The value is determined as epoch time in milliseconds.</p>
   */
  lastLoginTime?: number;
}

export enum LocationType {
  INGESTION = "INGESTION",
  SAGEMAKER = "SAGEMAKER",
}

export interface GetWorkingLocationRequest {
  /**
   * <p>Specify the type of the working location.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SAGEMAKER</code> – Use the Amazon S3 location as a temporary location to store data content when
   *           working with FinSpace Notebooks that run on SageMaker studio.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INGESTION</code> – Use the Amazon S3 location as a staging location to copy your
   *           data content and then use the location with the Changeset creation operation.</p>
   *             </li>
   *          </ul>
   */
  locationType?: LocationType | string;
}

export interface GetWorkingLocationResponse {
  /**
   * <p>Returns the Amazon S3 URI for the working location.</p>
   */
  s3Uri?: string;

  /**
   * <p>Returns the Amazon S3 Path for the working location.</p>
   */
  s3Path?: string;

  /**
   * <p>Returns the Amazon S3 bucket name for the working location.</p>
   */
  s3Bucket?: string;
}

/**
 * Request to ListChangesetsRequest. It exposes minimal query filters.
 */
export interface ListChangesetsRequest {
  /**
   * <p>The unique identifier for the FinSpace Dataset to which the Changeset belongs.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * <p>A Changeset is unit of data in a Dataset.</p>
 */
export interface ChangesetSummary {
  /**
   * <p>The unique identifier for a Changeset.</p>
   */
  changesetId?: string;

  /**
   * <p>The ARN identifier of the Changeset.</p>
   */
  changesetArn?: string;

  /**
   * <p>The unique identifier for the FinSpace Dataset in which the Changeset is created.</p>
   */
  datasetId?: string;

  /**
   * <p>Type that indicates how a Changeset is applied to a Dataset.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> – Changeset is considered as a replacement to all prior loaded
   *           Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> – Changeset is considered as an addition to the end of all prior
   *           loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> – Changeset is considered as a replacement to a specific prior
   *           ingested Changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType?: ChangeType | string;

  /**
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams?: Record<string, string>;

  /**
   * <p>Options that define the structure of the source file(s).</p>
   */
  formatParams?: Record<string, string>;

  /**
   * <p>The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>Status of the Changeset ingestion.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – Changeset is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – Changeset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – Changeset creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – Changeset creation is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_REQUESTED</code> – User requested Changeset creation to stop.</p>
   *             </li>
   *          </ul>
   */
  status?: IngestionStatus | string;

  /**
   * <p>The structure with error messages.</p>
   */
  errorInfo?: ChangesetErrorInfo;

  /**
   * <p>Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeUntilTimestamp?: number;

  /**
   * <p>Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeFromTimestamp?: number;

  /**
   * <p>The unique identifier of the Changeset that is updated.</p>
   */
  updatesChangesetId?: string;

  /**
   * <p>The unique identifier of the updated Changeset.</p>
   */
  updatedByChangesetId?: string;
}

/**
 * Response to ListChangesetsResponse. This returns a list of dataset changesets that match the query criteria.
 */
export interface ListChangesetsResponse {
  /**
   * <p>List of Changesets found.</p>
   */
  changesets?: ChangesetSummary[];

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * Request for the ListDatasets operation.
 */
export interface ListDatasetsRequest {
  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;
}

/**
 * <p>The structure for a Dataset.</p>
 */
export interface Dataset {
  /**
   * <p>An identifier for a Dataset.</p>
   */
  datasetId?: string;

  /**
   * <p>The ARN identifier of the Dataset.</p>
   */
  datasetArn?: string;

  /**
   * <p>Display title for a Dataset.</p>
   */
  datasetTitle?: string;

  /**
   * <p>The format in which Dataset data is structured.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABULAR</code> – Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p>
   *             </li>
   *          </ul>
   */
  kind?: DatasetKind | string;

  /**
   * <p>Description for a Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * <p>Contact information for a Dataset owner.</p>
   */
  ownerInfo?: DatasetOwnerInfo;

  /**
   * <p>The timestamp at which the Dataset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The last time that the Dataset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;

  /**
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;
}

/**
 * Response for the ListDatasets operation
 */
export interface ListDatasetsResponse {
  /**
   * <p>List of Datasets.</p>
   */
  datasets?: Dataset[];

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * Request for a list data views.
 */
export interface ListDataViewsRequest {
  /**
   * <p>The unique identifier of the Dataset for which to retrieve Dataviews.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;
}

/**
 * <p>Structure for the summary of a Dataview.</p>
 */
export interface DataViewSummary {
  /**
   * <p>The unique identifier for the Dataview.</p>
   */
  dataViewId?: string;

  /**
   * <p>The ARN identifier of the Dataview.</p>
   */
  dataViewArn?: string;

  /**
   * <p>Th unique identifier for the Dataview Dataset.</p>
   */
  datasetId?: string;

  /**
   * <p>Time range to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * <p>Ordered set of column names used to partition data.</p>
   */
  partitionColumns?: string[];

  /**
   * <p>Columns to be used for sorting the data.</p>
   */
  sortColumns?: string[];

  /**
   * <p>The status of a Dataview creation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – Dataview creation is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> – Dataview creation is starting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – Dataview creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – Dataview creation has been cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code> – Dataview creation has timed out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – Dataview creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – Dataview creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_CLEANUP_FAILED</code> – Dataview creation failed and resource cleanup failed.</p>
   *             </li>
   *          </ul>
   */
  status?: DataViewStatus | string;

  /**
   * <p>The structure with error messages.</p>
   */
  errorInfo?: DataViewErrorInfo;

  /**
   * <p>Information about the Dataview destination.</p>
   */
  destinationTypeProperties?: DataViewDestinationTypeParams;

  /**
   * <p>The flag to indicate Dataview should be updated automatically.</p>
   */
  autoUpdate?: boolean;

  /**
   * <p>The timestamp at which the Dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The last time that a Dataview was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;
}

export interface ListDataViewsResponse {
  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of Dataviews.</p>
   */
  dataViews?: DataViewSummary[];
}

export interface ListPermissionGroupsRequest {
  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

export interface ListPermissionGroupsResponse {
  /**
   * <p>A list of all the permission groups.</p>
   */
  permissionGroups?: PermissionGroup[];

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

export interface ListPermissionGroupsByUserRequest {
  /**
   * <p>The unique identifier for the user.</p>
   */
  userId: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * <p>The structure of a permission group associated with a user account.</p>
 */
export interface PermissionGroupByUser {
  /**
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId?: string;

  /**
   * <p>The name of the permission group.</p>
   */
  name?: string;

  /**
   * <p>Indicates the status of the user account within a permission group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADDITION_IN_PROGRESS</code> – The user account is currently being added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADDITION_SUCCESS</code> – The user account is successfully added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p>
   *             </li>
   *          </ul>
   */
  membershipStatus?: PermissionGroupMembershipStatus | string;
}

export interface ListPermissionGroupsByUserResponse {
  /**
   * <p>A list of returned permission groups.</p>
   */
  permissionGroups?: PermissionGroupByUser[];

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

export interface ListUsersRequest {
  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * <p>The details of the user account.</p>
 */
export interface User {
  /**
   * <p>The unique identifier for the user.</p>
   */
  userId?: string;

  /**
   * <p>The current status of the user account. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The user account creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user account is created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user account is currently inactive.</p>
   *             </li>
   *          </ul>
   */
  status?: UserStatus | string;

  /**
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * <p> The last name of the user.</p>
   */
  lastName?: string;

  /**
   * <p>The email address of the user. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.</p>
   */
  emailAddress?: string;

  /**
   * <p> Indicates the type of user.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p>
   *             </li>
   *          </ul>
   */
  type?: UserType | string;

  /**
   * <p>Indicates whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user has permissions to use the APIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user does not have permissions to use any APIs.</p>
   *             </li>
   *          </ul>
   */
  apiAccess?: ApiAccess | string;

  /**
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * <p>The timestamp at which the user account was created in FinSpace. The value is determined as epoch time in milliseconds. </p>
   */
  createTime?: number;

  /**
   * <p> Describes the last time the user account was enabled. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastEnabledTime?: number;

  /**
   * <p>Describes the last time the user account was disabled. The value is determined as epoch time in milliseconds.</p>
   */
  lastDisabledTime?: number;

  /**
   * <p>Describes the last time the user account was updated. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastModifiedTime?: number;

  /**
   * <p>Describes the last time that the user logged into their account. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastLoginTime?: number;
}

export interface ListUsersResponse {
  /**
   * <p>A list of all the user accounts.</p>
   */
  users?: User[];

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

export interface ListUsersByPermissionGroupRequest {
  /**
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * <p>The structure of a user account associated with a permission group.</p>
 */
export interface UserByPermissionGroup {
  /**
   * <p>The unique identifier for the user.</p>
   */
  userId?: string;

  /**
   * <p>The current status of the user account. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The user account creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user account is created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user account is currently inactive.</p>
   *             </li>
   *          </ul>
   */
  status?: UserStatus | string;

  /**
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * <p>The last name of the user.</p>
   */
  lastName?: string;

  /**
   * <p>The email address of the user. The email address serves as a unique identifier for each user and cannot be changed after it's created.</p>
   */
  emailAddress?: string;

  /**
   * <p> Indicates the type of user.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p>
   *             </li>
   *          </ul>
   */
  type?: UserType | string;

  /**
   * <p>Indicates whether the user can access FinSpace API operations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user has permissions to use the API operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> –  The user does not have permissions to use any API operations.</p>
   *             </li>
   *          </ul>
   */
  apiAccess?: ApiAccess | string;

  /**
   * <p>The IAM ARN identifier that is attached to FinSpace API calls.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * <p>Indicates the status of the user account within a permission group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADDITION_IN_PROGRESS</code> – The user account is currently being added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADDITION_SUCCESS</code> – The user account is successfully added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p>
   *             </li>
   *          </ul>
   */
  membershipStatus?: PermissionGroupMembershipStatus | string;
}

export interface ListUsersByPermissionGroupResponse {
  /**
   * <p>Lists details of all users in a specific permission group.</p>
   */
  users?: UserByPermissionGroup[];

  /**
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

export interface ResetUserPasswordRequest {
  /**
   * <p>The unique identifier of the user that a temporary password is requested for.</p>
   */
  userId: string | undefined;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface ResetUserPasswordResponse {
  /**
   * <p>The unique identifier of the user that a new password is generated for.</p>
   */
  userId?: string;

  /**
   * <p>A randomly generated temporary password for the requested user account. This password expires in 7 days.</p>
   */
  temporaryPassword?: string;
}

/**
 * Request to update an existing changeset.
 */
export interface UpdateChangesetRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique identifier for the FinSpace Dataset in which the Changeset is created.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>The unique identifier for the Changeset to update.</p>
   */
  changesetId: string | undefined;

  /**
   * <p>Options that define the location of the data being ingested (<code>s3SourcePath</code>) and the source of the changeset (<code>sourceType</code>).</p>
   *          <p>Both <code>s3SourcePath</code> and <code>sourceType</code> are required attributes.</p>
   *          <p>Here is an example of how you could specify the <code>sourceParams</code>:</p>
   *          <p>
   *             <code>
   *         "sourceParams":
   *         {
   *         "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv",
   *         "sourceType": "S3"
   *         }
   *       </code>
   *          </p>
   *          <p>The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#access-s3-buckets">Loading data from an Amazon S3 Bucket using the FinSpace API</a>section.</p>
   */
  sourceParams: Record<string, string> | undefined;

  /**
   * <p>Options that define the structure of the source file(s) including the format type (<code>formatType</code>), header row (<code>withHeader</code>), data separation character (<code>separator</code>) and the type of compression (<code>compression</code>).
   *     </p>
   *          <p>
   *             <code>formatType</code> is a required attribute and can have the following values:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PARQUET</code> – Parquet source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CSV</code> – CSV source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code> – JSON source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XML</code> – XML source file format.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Here is an example of how you could specify the <code>formatParams</code>:</p>
   *          <p>
   *             <code>
   *         "formatParams":
   *         {
   *         "formatType": "CSV",
   *         "withHeader": "true",
   *         "separator": ",",
   *         "compression":"None"
   *         }
   *       </code>
   *          </p>
   *          <p>Note that if you only provide <code>formatType</code> as <code>CSV</code>, the rest of the attributes will automatically default to CSV values as following:</p>
   *          <p>
   *             <code>
   *         {
   *         "withHeader": "true",
   *         "separator": ","
   *         }
   *         </code>
   *          </p>
   *          <p> For more information about supported file formats, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/supported-data-types.html">Supported Data Types and File Formats</a> in the FinSpace User Guide.</p>
   */
  formatParams: Record<string, string> | undefined;
}

/**
 * The response from a update changeset operation.
 */
export interface UpdateChangesetResponse {
  /**
   * <p>The unique identifier for the Changeset to update.</p>
   */
  changesetId?: string;

  /**
   * <p>The unique identifier for the FinSpace Dataset in which the Changeset is created.</p>
   */
  datasetId?: string;
}

/**
 * The request for an UpdateDataset operation
 */
export interface UpdateDatasetRequest {
  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique identifier for the Dataset to update.</p>
   */
  datasetId: string | undefined;

  /**
   * <p>A display title for the Dataset.</p>
   */
  datasetTitle: string | undefined;

  /**
   * <p>The format in which the Dataset data is structured.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABULAR</code> – Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> – Data is structured in a non-tabular format.</p>
   *             </li>
   *          </ul>
   */
  kind: DatasetKind | string | undefined;

  /**
   * <p>A description for the Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;

  /**
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;
}

/**
 * The response from an UpdateDataset operation
 */
export interface UpdateDatasetResponse {
  /**
   * <p>The unique identifier for updated Dataset.</p>
   */
  datasetId?: string;
}

export interface UpdatePermissionGroupRequest {
  /**
   * <p>The unique identifier for the permission group to update.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * <p>The name of the permission group.</p>
   */
  name?: string;

  /**
   * <p>A brief description for the permission group.</p>
   */
  description?: string;

  /**
   * <p>The permissions that are granted to a specific group for accessing the FinSpace application.</p>
   *          <important>
   *             <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p>
   *          </important>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateDataset</code> – Group members can create new datasets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ViewAuditData</code> – Group members can view audit data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p>
   *             </li>
   *          </ul>
   */
  applicationPermissions?: (ApplicationPermission | string)[];

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface UpdatePermissionGroupResponse {
  /**
   * <p>The unique identifier for the updated permission group.</p>
   */
  permissionGroupId?: string;
}

export interface UpdateUserRequest {
  /**
   * <p>The unique identifier for the user account to update.</p>
   */
  userId: string | undefined;

  /**
   * <p>The option to indicate the type of user.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUPER_USER</code>– A user with permission to all the functionality and data in FinSpace.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p>
   *             </li>
   *          </ul>
   */
  type?: UserType | string;

  /**
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * <p>The last name of the user.</p>
   */
  lastName?: string;

  /**
   * <p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user has permissions to use the APIs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user does not have permissions to use any APIs.</p>
   *             </li>
   *          </ul>
   */
  apiAccess?: ApiAccess | string;

  /**
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

export interface UpdateUserResponse {
  /**
   * <p>The unique identifier of the updated user account.</p>
   */
  userId?: string;
}

/**
 * @internal
 */
export const AssociateUserToPermissionGroupRequestFilterSensitiveLog = (
  obj: AssociateUserToPermissionGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateUserToPermissionGroupResponseFilterSensitiveLog = (
  obj: AssociateUserToPermissionGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsCredentialsFilterSensitiveLog = (obj: AwsCredentials): any => ({
  ...obj,
  ...(obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING }),
  ...(obj.sessionToken && { sessionToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateChangesetRequestFilterSensitiveLog = (obj: CreateChangesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChangesetResponseFilterSensitiveLog = (obj: CreateChangesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetOwnerInfoFilterSensitiveLog = (obj: DatasetOwnerInfo): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResourcePermissionFilterSensitiveLog = (obj: ResourcePermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PermissionGroupParamsFilterSensitiveLog = (obj: PermissionGroupParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnDefinitionFilterSensitiveLog = (obj: ColumnDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaDefinitionFilterSensitiveLog = (obj: SchemaDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaUnionFilterSensitiveLog = (obj: SchemaUnion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
  ...(obj.ownerInfo && { ownerInfo: DatasetOwnerInfoFilterSensitiveLog(obj.ownerInfo) }),
});

/**
 * @internal
 */
export const CreateDatasetResponseFilterSensitiveLog = (obj: CreateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataViewDestinationTypeParamsFilterSensitiveLog = (obj: DataViewDestinationTypeParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataViewRequestFilterSensitiveLog = (obj: CreateDataViewRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataViewResponseFilterSensitiveLog = (obj: CreateDataViewResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePermissionGroupRequestFilterSensitiveLog = (obj: CreatePermissionGroupRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePermissionGroupResponseFilterSensitiveLog = (obj: CreatePermissionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetResponseFilterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePermissionGroupRequestFilterSensitiveLog = (obj: DeletePermissionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePermissionGroupResponseFilterSensitiveLog = (obj: DeletePermissionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableUserRequestFilterSensitiveLog = (obj: DisableUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableUserResponseFilterSensitiveLog = (obj: DisableUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateUserFromPermissionGroupRequestFilterSensitiveLog = (
  obj: DisassociateUserFromPermissionGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateUserFromPermissionGroupResponseFilterSensitiveLog = (
  obj: DisassociateUserFromPermissionGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableUserRequestFilterSensitiveLog = (obj: EnableUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableUserResponseFilterSensitiveLog = (obj: EnableUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChangesetRequestFilterSensitiveLog = (obj: GetChangesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangesetErrorInfoFilterSensitiveLog = (obj: ChangesetErrorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChangesetResponseFilterSensitiveLog = (obj: GetChangesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatasetRequestFilterSensitiveLog = (obj: GetDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatasetResponseFilterSensitiveLog = (obj: GetDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataViewRequestFilterSensitiveLog = (obj: GetDataViewRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataViewErrorInfoFilterSensitiveLog = (obj: DataViewErrorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataViewResponseFilterSensitiveLog = (obj: GetDataViewResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExternalDataViewAccessDetailsRequestFilterSensitiveLog = (
  obj: GetExternalDataViewAccessDetailsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetExternalDataViewAccessDetailsResponseFilterSensitiveLog = (
  obj: GetExternalDataViewAccessDetailsResponse
): any => ({
  ...obj,
  ...(obj.credentials && { credentials: AwsCredentialsFilterSensitiveLog(obj.credentials) }),
});

/**
 * @internal
 */
export const GetPermissionGroupRequestFilterSensitiveLog = (obj: GetPermissionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PermissionGroupFilterSensitiveLog = (obj: PermissionGroup): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPermissionGroupResponseFilterSensitiveLog = (obj: GetPermissionGroupResponse): any => ({
  ...obj,
  ...(obj.permissionGroup && { permissionGroup: PermissionGroupFilterSensitiveLog(obj.permissionGroup) }),
});

/**
 * @internal
 */
export const GetProgrammaticAccessCredentialsRequestFilterSensitiveLog = (
  obj: GetProgrammaticAccessCredentialsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProgrammaticAccessCredentialsResponseFilterSensitiveLog = (
  obj: GetProgrammaticAccessCredentialsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserRequestFilterSensitiveLog = (obj: GetUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserResponseFilterSensitiveLog = (obj: GetUserResponse): any => ({
  ...obj,
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetWorkingLocationRequestFilterSensitiveLog = (obj: GetWorkingLocationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkingLocationResponseFilterSensitiveLog = (obj: GetWorkingLocationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChangesetsRequestFilterSensitiveLog = (obj: ListChangesetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangesetSummaryFilterSensitiveLog = (obj: ChangesetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChangesetsResponseFilterSensitiveLog = (obj: ListChangesetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsRequestFilterSensitiveLog = (obj: ListDatasetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetFilterSensitiveLog = (obj: Dataset): any => ({
  ...obj,
  ...(obj.ownerInfo && { ownerInfo: DatasetOwnerInfoFilterSensitiveLog(obj.ownerInfo) }),
});

/**
 * @internal
 */
export const ListDatasetsResponseFilterSensitiveLog = (obj: ListDatasetsResponse): any => ({
  ...obj,
  ...(obj.datasets && { datasets: obj.datasets.map((item) => DatasetFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListDataViewsRequestFilterSensitiveLog = (obj: ListDataViewsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataViewSummaryFilterSensitiveLog = (obj: DataViewSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataViewsResponseFilterSensitiveLog = (obj: ListDataViewsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPermissionGroupsRequestFilterSensitiveLog = (obj: ListPermissionGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPermissionGroupsResponseFilterSensitiveLog = (obj: ListPermissionGroupsResponse): any => ({
  ...obj,
  ...(obj.permissionGroups && {
    permissionGroups: obj.permissionGroups.map((item) => PermissionGroupFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListPermissionGroupsByUserRequestFilterSensitiveLog = (obj: ListPermissionGroupsByUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PermissionGroupByUserFilterSensitiveLog = (obj: PermissionGroupByUser): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPermissionGroupsByUserResponseFilterSensitiveLog = (obj: ListPermissionGroupsByUserResponse): any => ({
  ...obj,
  ...(obj.permissionGroups && {
    permissionGroups: obj.permissionGroups.map((item) => PermissionGroupByUserFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
  ...(obj.users && { users: obj.users.map((item) => UserFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListUsersByPermissionGroupRequestFilterSensitiveLog = (obj: ListUsersByPermissionGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserByPermissionGroupFilterSensitiveLog = (obj: UserByPermissionGroup): any => ({
  ...obj,
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUsersByPermissionGroupResponseFilterSensitiveLog = (obj: ListUsersByPermissionGroupResponse): any => ({
  ...obj,
  ...(obj.users && { users: obj.users.map((item) => UserByPermissionGroupFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ResetUserPasswordRequestFilterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetUserPasswordResponseFilterSensitiveLog = (obj: ResetUserPasswordResponse): any => ({
  ...obj,
  ...(obj.temporaryPassword && { temporaryPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChangesetRequestFilterSensitiveLog = (obj: UpdateChangesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChangesetResponseFilterSensitiveLog = (obj: UpdateChangesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetRequestFilterSensitiveLog = (obj: UpdateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetResponseFilterSensitiveLog = (obj: UpdateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePermissionGroupRequestFilterSensitiveLog = (obj: UpdatePermissionGroupRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePermissionGroupResponseFilterSensitiveLog = (obj: UpdatePermissionGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserResponseFilterSensitiveLog = (obj: UpdateUserResponse): any => ({
  ...obj,
});
