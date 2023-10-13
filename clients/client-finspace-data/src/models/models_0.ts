// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { FinspaceDataServiceException as __BaseException } from "./FinspaceDataServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ApiAccess = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ApiAccess = (typeof ApiAccess)[keyof typeof ApiAccess];

/**
 * @public
 * @enum
 */
export const ApplicationPermission = {
  AccessNotebooks: "AccessNotebooks",
  CreateDataset: "CreateDataset",
  GetTemporaryCredentials: "GetTemporaryCredentials",
  ManageAttributeSets: "ManageAttributeSets",
  ManageClusters: "ManageClusters",
  ManageUsersAndGroups: "ManageUsersAndGroups",
  ViewAuditData: "ViewAuditData",
} as const;

/**
 * @public
 */
export type ApplicationPermission = (typeof ApplicationPermission)[keyof typeof ApplicationPermission];

/**
 * @public
 */
export interface AssociateUserToPermissionGroupRequest {
  /**
   * @public
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface AssociateUserToPermissionGroupResponse {
  /**
   * @public
   * <p>The returned status code of the response.</p>
   */
  statusCode?: number;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p> The credentials required to access the external Dataview from the S3 location.</p>
 */
export interface AwsCredentials {
  /**
   * @public
   * <p> The unique identifier for the security credentials.</p>
   */
  accessKeyId?: string;

  /**
   * @public
   * <p> The secret access key that can be used to sign requests.</p>
   */
  secretAccessKey?: string;

  /**
   * @public
   * <p> The token that users must pass to use the credentials.</p>
   */
  sessionToken?: string;

  /**
   * @public
   * <p> The Epoch time when the current credentials expire.</p>
   */
  expiration?: number;
}

/**
 * @public
 * @enum
 */
export const ChangeType = {
  APPEND: "APPEND",
  MODIFY: "MODIFY",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * The request for a CreateChangeset operation.
 */
export interface CreateChangesetRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset where the Changeset will be created.
   *     </p>
   */
  datasetId: string | undefined;

  /**
   * @public
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
  changeType: ChangeType | undefined;

  /**
   * @public
   * <p>Options that define the location of the data being ingested (<code>s3SourcePath</code>) and the source of the changeset (<code>sourceType</code>).</p>
   *          <p>Both <code>s3SourcePath</code> and <code>sourceType</code> are required attributes.</p>
   *          <p>Here is an example of how you could specify the <code>sourceParams</code>:</p>
   *          <p>
   *             <code>
   *         "sourceParams":
   *         \{
   *         "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv",
   *         "sourceType": "S3"
   *         \}
   *       </code>
   *          </p>
   *          <p>The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#access-s3-buckets">Loading data from an Amazon S3 Bucket using the FinSpace API</a> section.</p>
   */
  sourceParams: Record<string, string> | undefined;

  /**
   * @public
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
   *          <p>Here is an example of how you could specify the <code>formatParams</code>:</p>
   *          <p>
   *             <code>
   *           "formatParams":
   *         \{
   *          "formatType": "CSV",
   *          "withHeader": "true",
   *          "separator": ",",
   *          "compression":"None"
   *          \}
   *       </code>
   *          </p>
   *          <p>Note that if you only provide <code>formatType</code> as <code>CSV</code>, the rest of the attributes will automatically default to CSV values as following:</p>
   *          <p>
   *             <code>
   *           \{
   *           "withHeader": "true",
   *           "separator": ","
   *            \}
   *         </code>
   *          </p>
   *          <p> For more information about supported file formats, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/supported-data-types.html">Supported Data Types and File Formats</a> in the FinSpace User Guide.</p>
   */
  formatParams: Record<string, string> | undefined;
}

/**
 * @public
 * The response from a CreateChangeset operation.
 */
export interface CreateChangesetResponse {
  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset where the Changeset is created.</p>
   */
  datasetId?: string;

  /**
   * @public
   * <p>The unique identifier of the Changeset that is created.</p>
   */
  changesetId?: string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const DatasetKind = {
  NON_TABULAR: "NON_TABULAR",
  TABULAR: "TABULAR",
} as const;

/**
 * @public
 */
export type DatasetKind = (typeof DatasetKind)[keyof typeof DatasetKind];

/**
 * @public
 * <p>A structure for Dataset owner info.</p>
 */
export interface DatasetOwnerInfo {
  /**
   * @public
   * <p>The name of the Dataset owner.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Phone number for the Dataset owner.</p>
   */
  phoneNumber?: string;

  /**
   * @public
   * <p>Email address for the Dataset owner.</p>
   */
  email?: string;
}

/**
 * @public
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
   * @public
   * <p>Permission for a resource.</p>
   */
  permission?: string;
}

/**
 * @public
 * <p>Permission group parameters for Dataset permissions.</p>
 *          <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p>
 *          <p>
 *             <code>
 *         \{
 *         "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g",
 *         "datasetPermissions": [
 *         \{"permission": "ViewDatasetDetails"\},
 *         \{"permission": "AddDatasetData"\},
 *         \{"permission": "EditDatasetMetadata"\},
 *         \{"permission": "DeleteDataset"\}
 *         ]
 *         \}
 *       </code>
 *          </p>
 */
export interface PermissionGroupParams {
  /**
   * @public
   * <p>The unique identifier for the <code>PermissionGroup</code>.</p>
   */
  permissionGroupId?: string;

  /**
   * @public
   * <p>List of resource permissions.</p>
   */
  datasetPermissions?: ResourcePermission[];
}

/**
 * @public
 * @enum
 */
export const ColumnDataType = {
  BIGINT: "BIGINT",
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  CHAR: "CHAR",
  DATE: "DATE",
  DATETIME: "DATETIME",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  INTEGER: "INTEGER",
  SMALLINT: "SMALLINT",
  STRING: "STRING",
  TINYINT: "TINYINT",
} as const;

/**
 * @public
 */
export type ColumnDataType = (typeof ColumnDataType)[keyof typeof ColumnDataType];

/**
 * @public
 * <p>The definition of a column in a tabular Dataset.</p>
 */
export interface ColumnDefinition {
  /**
   * @public
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
  dataType?: ColumnDataType;

  /**
   * @public
   * <p>The name of a column.</p>
   */
  columnName?: string;

  /**
   * @public
   * <p>Description for a column.</p>
   */
  columnDescription?: string;
}

/**
 * @public
 * <p>Definition for a schema on a tabular Dataset.</p>
 */
export interface SchemaDefinition {
  /**
   * @public
   * <p>List of column definitions.</p>
   */
  columns?: ColumnDefinition[];

  /**
   * @public
   * <p>List of column names used for primary key.</p>
   */
  primaryKeyColumns?: string[];
}

/**
 * @public
 * <p>A union of schema types.</p>
 */
export interface SchemaUnion {
  /**
   * @public
   * <p>The configuration for a schema on a tabular Dataset.</p>
   */
  tabularSchemaConfig?: SchemaDefinition;
}

/**
 * @public
 * The request for a CreateDataset operation
 */
export interface CreateDatasetRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Display title for a FinSpace Dataset.</p>
   */
  datasetTitle: string | undefined;

  /**
   * @public
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
  kind: DatasetKind | undefined;

  /**
   * @public
   * <p>Description of a Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * @public
   * <p>Contact information for a Dataset owner.</p>
   */
  ownerInfo?: DatasetOwnerInfo;

  /**
   * @public
   * <p>Permission group parameters for Dataset permissions.</p>
   */
  permissionGroupParams: PermissionGroupParams | undefined;

  /**
   * @public
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;
}

/**
 * @public
 * The response from a CreateDataset operation
 */
export interface CreateDatasetResponse {
  /**
   * @public
   * <p>The unique identifier for the created Dataset.</p>
   */
  datasetId?: string;
}

/**
 * @public
 * @enum
 */
export const ExportFileFormat = {
  DELIMITED_TEXT: "DELIMITED_TEXT",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type ExportFileFormat = (typeof ExportFileFormat)[keyof typeof ExportFileFormat];

/**
 * @public
 * <p>Structure for the Dataview destination type parameters.</p>
 */
export interface DataViewDestinationTypeParams {
  /**
   * @public
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
   * @public
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
  s3DestinationExportFileFormat?: ExportFileFormat;

  /**
   * @public
   * <p>Format Options for S3 Destination type.</p>
   *          <p>Here is an example of how you could specify the <code>s3DestinationExportFileFormatOptions</code>
   *          </p>
   *          <p>
   *             <code>
   *         \{
   *         "header": "true",
   *         "delimiter": ",",
   *         "compression": "gzip"
   *         \}</code>
   *          </p>
   */
  s3DestinationExportFileFormatOptions?: Record<string, string>;
}

/**
 * @public
 * Request for creating a data view.
 */
export interface CreateDataViewRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The unique Dataset identifier that is used to create a Dataview.</p>
   */
  datasetId: string | undefined;

  /**
   * @public
   * <p>Flag to indicate Dataview should be updated automatically.</p>
   */
  autoUpdate?: boolean;

  /**
   * @public
   * <p>Columns to be used for sorting the data.</p>
   */
  sortColumns?: string[];

  /**
   * @public
   * <p>Ordered set of column names used to partition data.</p>
   */
  partitionColumns?: string[];

  /**
   * @public
   * <p>Beginning time to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * @public
   * <p>Options that define the destination type for the Dataview.</p>
   */
  destinationTypeParams: DataViewDestinationTypeParams | undefined;
}

/**
 * @public
 * Response for creating a data view.
 */
export interface CreateDataViewResponse {
  /**
   * @public
   * <p>The unique identifier of the Dataset used for the Dataview.</p>
   */
  datasetId?: string;

  /**
   * @public
   * <p>The unique identifier for the created Dataview.</p>
   */
  dataViewId?: string;
}

/**
 * @public
 */
export interface CreatePermissionGroupRequest {
  /**
   * @public
   * <p>The name of the permission group.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A brief description for the permission group.</p>
   */
  description?: string;

  /**
   * @public
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
  applicationPermissions: ApplicationPermission[] | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreatePermissionGroupResponse {
  /**
   * @public
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId?: string;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  APP_USER: "APP_USER",
  SUPER_USER: "SUPER_USER",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.</p>
   */
  emailAddress: string | undefined;

  /**
   * @public
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
  type: UserType | undefined;

  /**
   * @public
   * <p>The first name of the user that you want to register.</p>
   */
  firstName?: string;

  /**
   * @public
   * <p>The last name of the user that you want to register.</p>
   */
  lastName?: string;

  /**
   * @public
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
  apiAccess?: ApiAccess;

  /**
   * @public
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  userId?: string;
}

/**
 * @public
 * The request for a DeleteDataset operation.
 */
export interface DeleteDatasetRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The unique identifier of the Dataset to be deleted.</p>
   */
  datasetId: string | undefined;
}

/**
 * @public
 * The response from an DeleteDataset operation
 */
export interface DeleteDatasetResponse {
  /**
   * @public
   * <p>The unique identifier for the deleted Dataset.</p>
   */
  datasetId?: string;
}

/**
 * @public
 */
export interface DeletePermissionGroupRequest {
  /**
   * @public
   * <p>The unique identifier for the permission group that you want to delete.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeletePermissionGroupResponse {
  /**
   * @public
   * <p>The unique identifier for the deleted permission group.</p>
   */
  permissionGroupId?: string;
}

/**
 * @public
 */
export interface DisableUserRequest {
  /**
   * @public
   * <p>The unique identifier for the user that you want to deactivate.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DisableUserResponse {
  /**
   * @public
   * <p>The unique identifier for the deactivated user.</p>
   */
  userId?: string;
}

/**
 * @public
 */
export interface DisassociateUserFromPermissionGroupRequest {
  /**
   * @public
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DisassociateUserFromPermissionGroupResponse {
  /**
   * @public
   * <p>The returned status code of the response.</p>
   */
  statusCode?: number;
}

/**
 * @public
 */
export interface EnableUserRequest {
  /**
   * @public
   * <p>The unique identifier for the user that you want to activate.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface EnableUserResponse {
  /**
   * @public
   * <p>The unique identifier for the active user.</p>
   */
  userId?: string;
}

/**
 * @public
 * Request to describe a changeset.
 */
export interface GetChangesetRequest {
  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset where the Changeset is created.</p>
   */
  datasetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Changeset for which to get data.</p>
   */
  changesetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCategory = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CANCELLED: "CANCELLED",
  INTERNAL_SERVICE_EXCEPTION: "INTERNAL_SERVICE_EXCEPTION",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  SERVICE_QUOTA_EXCEEDED: "SERVICE_QUOTA_EXCEEDED",
  THROTTLING: "THROTTLING",
  USER_RECOVERABLE: "USER_RECOVERABLE",
  VALIDATION: "VALIDATION",
} as const;

/**
 * @public
 */
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory];

/**
 * @public
 * <p>The structure with error messages.</p>
 */
export interface ChangesetErrorInfo {
  /**
   * @public
   * <p>The text of the error message.</p>
   */
  errorMessage?: string;

  /**
   * @public
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
  errorCategory?: ErrorCategory;
}

/**
 * @public
 * @enum
 */
export const IngestionStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type IngestionStatus = (typeof IngestionStatus)[keyof typeof IngestionStatus];

/**
 * @public
 * The response from a describe changeset operation
 */
export interface GetChangesetResponse {
  /**
   * @public
   * <p>The unique identifier for a Changeset.</p>
   */
  changesetId?: string;

  /**
   * @public
   * <p>The ARN identifier of the Changeset.</p>
   */
  changesetArn?: string;

  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset where the Changeset is created.</p>
   */
  datasetId?: string;

  /**
   * @public
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
  changeType?: ChangeType;

  /**
   * @public
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams?: Record<string, string>;

  /**
   * @public
   * <p>Structure of the source file(s).</p>
   */
  formatParams?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * @public
   * <p>The status of Changeset creation operation.</p>
   */
  status?: IngestionStatus;

  /**
   * @public
   * <p>The structure with error messages.</p>
   */
  errorInfo?: ChangesetErrorInfo;

  /**
   * @public
   * <p>Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeUntilTimestamp?: number;

  /**
   * @public
   * <p>Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeFromTimestamp?: number;

  /**
   * @public
   * <p>The unique identifier of the Changeset that is being updated.</p>
   */
  updatesChangesetId?: string;

  /**
   * @public
   * <p>The unique identifier of the updated Changeset.</p>
   */
  updatedByChangesetId?: string;
}

/**
 * @public
 * Request for the GetDataset operation.
 */
export interface GetDatasetRequest {
  /**
   * @public
   * <p>The unique identifier for a Dataset.</p>
   */
  datasetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * Response for the GetDataset operation
 */
export interface GetDatasetResponse {
  /**
   * @public
   * <p>The unique identifier for a Dataset.</p>
   */
  datasetId?: string;

  /**
   * @public
   * <p>The ARN identifier of the Dataset.</p>
   */
  datasetArn?: string;

  /**
   * @public
   * <p>Display title for a Dataset.</p>
   */
  datasetTitle?: string;

  /**
   * @public
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
  kind?: DatasetKind;

  /**
   * @public
   * <p>A description of the Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * @public
   * <p>The timestamp at which the Dataset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * @public
   * <p>The last time that the Dataset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * @public
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;

  /**
   * @public
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;

  /**
   * @public
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
  status?: DatasetStatus;
}

/**
 * @public
 * Request for retrieving a data view detail. Grouped / accessible within a dataset by its dataset id.
 */
export interface GetDataViewRequest {
  /**
   * @public
   * <p>The unique identifier for the Dataview.</p>
   */
  dataViewId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the Dataset used in the Dataview.</p>
   */
  datasetId: string | undefined;
}

/**
 * @public
 * <p>The structure with error messages.</p>
 */
export interface DataViewErrorInfo {
  /**
   * @public
   * <p>The text of the error message.</p>
   */
  errorMessage?: string;

  /**
   * @public
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
  errorCategory?: ErrorCategory;
}

/**
 * @public
 * @enum
 */
export const DataViewStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FAILED_CLEANUP_FAILED: "FAILED_CLEANUP_FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  SUCCESS: "SUCCESS",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type DataViewStatus = (typeof DataViewStatus)[keyof typeof DataViewStatus];

/**
 * @public
 * Response from retrieving a dataview, which includes details on the target database and table name
 */
export interface GetDataViewResponse {
  /**
   * @public
   * <p>Flag to indicate Dataview should be updated automatically.</p>
   */
  autoUpdate?: boolean;

  /**
   * @public
   * <p>Ordered set of column names used to partition data.</p>
   */
  partitionColumns?: string[];

  /**
   * @public
   * <p>The unique identifier for the Dataset used in the Dataview.</p>
   */
  datasetId?: string;

  /**
   * @public
   * <p>Time range to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * @public
   * <p>Information about an error that occurred for the Dataview.</p>
   */
  errorInfo?: DataViewErrorInfo;

  /**
   * @public
   * <p>The last time that a Dataview was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * @public
   * <p>The timestamp at which the Dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * @public
   * <p>Columns to be used for sorting the data.</p>
   */
  sortColumns?: string[];

  /**
   * @public
   * <p>The unique identifier for the Dataview.</p>
   */
  dataViewId?: string;

  /**
   * @public
   * <p>The ARN identifier of the Dataview.</p>
   */
  dataViewArn?: string;

  /**
   * @public
   * <p>Options that define the destination type for the Dataview.</p>
   */
  destinationTypeParams?: DataViewDestinationTypeParams;

  /**
   * @public
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
  status?: DataViewStatus;
}

/**
 * @public
 */
export interface GetExternalDataViewAccessDetailsRequest {
  /**
   * @public
   * <p>The unique identifier for the Dataview that you want to access.</p>
   */
  dataViewId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the Dataset.</p>
   */
  datasetId: string | undefined;
}

/**
 * @public
 * <p>The location of an external Dataview in an S3 bucket.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p> The name of the S3 bucket.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p> The path of the folder, within the S3 bucket that contains the Dataset.</p>
   */
  key: string | undefined;
}

/**
 * @public
 */
export interface GetExternalDataViewAccessDetailsResponse {
  /**
   * @public
   * <p>The credentials required to access the external Dataview from the S3 location.</p>
   */
  credentials?: AwsCredentials;

  /**
   * @public
   * <p>The location where the external Dataview is stored.</p>
   */
  s3Location?: S3Location;
}

/**
 * @public
 */
export interface GetPermissionGroupRequest {
  /**
   * @public
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PermissionGroupMembershipStatus = {
  ADDITION_IN_PROGRESS: "ADDITION_IN_PROGRESS",
  ADDITION_SUCCESS: "ADDITION_SUCCESS",
  REMOVAL_IN_PROGRESS: "REMOVAL_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type PermissionGroupMembershipStatus =
  (typeof PermissionGroupMembershipStatus)[keyof typeof PermissionGroupMembershipStatus];

/**
 * @public
 * <p>The structure for a permission group.</p>
 */
export interface PermissionGroup {
  /**
   * @public
   * <p> The unique identifier for the permission group.</p>
   */
  permissionGroupId?: string;

  /**
   * @public
   * <p>The name of the permission group.</p>
   */
  name?: string;

  /**
   * @public
   * <p> A brief description for the permission group.</p>
   */
  description?: string;

  /**
   * @public
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
  applicationPermissions?: ApplicationPermission[];

  /**
   * @public
   * <p>The timestamp at which the group was created in FinSpace. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  createTime?: number;

  /**
   * @public
   * <p>Describes the last time the permission group was updated. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastModifiedTime?: number;

  /**
   * @public
   * <p>Indicates the status of the user within a permission group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADDITION_IN_PROGRESS</code> – The user is currently being added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADDITION_SUCCESS</code> – The user is successfully added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p>
   *             </li>
   *          </ul>
   */
  membershipStatus?: PermissionGroupMembershipStatus;
}

/**
 * @public
 */
export interface GetPermissionGroupResponse {
  /**
   * @public
   * <p>The structure for a permission group.</p>
   */
  permissionGroup?: PermissionGroup;
}

/**
 * @public
 * Request for GetProgrammaticAccessCredentials operation
 */
export interface GetProgrammaticAccessCredentialsRequest {
  /**
   * @public
   * <p>The time duration in which the credentials remain valid. </p>
   */
  durationInMinutes?: number;

  /**
   * @public
   * <p>The FinSpace environment identifier.</p>
   */
  environmentId: string | undefined;
}

/**
 * @public
 * <p>Short term API credentials.</p>
 */
export interface Credentials {
  /**
   * @public
   * <p>The access key identifier.</p>
   */
  accessKeyId?: string;

  /**
   * @public
   * <p>The access key.</p>
   */
  secretAccessKey?: string;

  /**
   * @public
   * <p>The session token.</p>
   */
  sessionToken?: string;
}

/**
 * @public
 * Response for GetProgrammaticAccessCredentials operation
 */
export interface GetProgrammaticAccessCredentialsResponse {
  /**
   * @public
   * <p>Returns the programmatic credentials.</p>
   */
  credentials?: Credentials;

  /**
   * @public
   * <p>Returns the duration in which the credentials will remain valid.</p>
   */
  durationInMinutes?: number;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * @public
   * <p>The unique identifier of the user to get data for.</p>
   */
  userId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserStatus = {
  CREATING: "CREATING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * @public
   * <p>The unique identifier for the user that is retrieved.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The current status of the user. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user is created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user is currently inactive.</p>
   *             </li>
   *          </ul>
   */
  status?: UserStatus;

  /**
   * @public
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * @public
   * <p>The last name of the user.</p>
   */
  lastName?: string;

  /**
   * @public
   * <p>The email address that is associated with the user.</p>
   */
  emailAddress?: string;

  /**
   * @public
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
  type?: UserType;

  /**
   * @public
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
  apiAccess?: ApiAccess;

  /**
   * @public
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * @public
   * <p>The timestamp at which the user was created in FinSpace. The value is determined as epoch time in milliseconds. </p>
   */
  createTime?: number;

  /**
   * @public
   * <p>Describes the last time the user was activated. The value is determined as epoch time in milliseconds.</p>
   */
  lastEnabledTime?: number;

  /**
   * @public
   * <p>Describes the last time the user was deactivated. The value is determined as epoch time in milliseconds.</p>
   */
  lastDisabledTime?: number;

  /**
   * @public
   * <p>Describes the last time the user details were updated. The value is determined as epoch time in milliseconds.</p>
   */
  lastModifiedTime?: number;

  /**
   * @public
   * <p>Describes the last time that the user logged into their account. The value is determined as epoch time in milliseconds.</p>
   */
  lastLoginTime?: number;
}

/**
 * @public
 * @enum
 */
export const LocationType = {
  INGESTION: "INGESTION",
  SAGEMAKER: "SAGEMAKER",
} as const;

/**
 * @public
 */
export type LocationType = (typeof LocationType)[keyof typeof LocationType];

/**
 * @public
 */
export interface GetWorkingLocationRequest {
  /**
   * @public
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
  locationType?: LocationType;
}

/**
 * @public
 */
export interface GetWorkingLocationResponse {
  /**
   * @public
   * <p>Returns the Amazon S3 URI for the working location.</p>
   */
  s3Uri?: string;

  /**
   * @public
   * <p>Returns the Amazon S3 Path for the working location.</p>
   */
  s3Path?: string;

  /**
   * @public
   * <p>Returns the Amazon S3 bucket name for the working location.</p>
   */
  s3Bucket?: string;
}

/**
 * @public
 * Request to ListChangesetsRequest. It exposes minimal query filters.
 */
export interface ListChangesetsRequest {
  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset to which the Changeset belongs.</p>
   */
  datasetId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A Changeset is unit of data in a Dataset.</p>
 */
export interface ChangesetSummary {
  /**
   * @public
   * <p>The unique identifier for a Changeset.</p>
   */
  changesetId?: string;

  /**
   * @public
   * <p>The ARN identifier of the Changeset.</p>
   */
  changesetArn?: string;

  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset in which the Changeset is created.</p>
   */
  datasetId?: string;

  /**
   * @public
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
  changeType?: ChangeType;

  /**
   * @public
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams?: Record<string, string>;

  /**
   * @public
   * <p>Options that define the structure of the source file(s).</p>
   */
  formatParams?: Record<string, string>;

  /**
   * @public
   * <p>The timestamp at which the Changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * @public
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
  status?: IngestionStatus;

  /**
   * @public
   * <p>The structure with error messages.</p>
   */
  errorInfo?: ChangesetErrorInfo;

  /**
   * @public
   * <p>Time until which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeUntilTimestamp?: number;

  /**
   * @public
   * <p>Beginning time from which the Changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeFromTimestamp?: number;

  /**
   * @public
   * <p>The unique identifier of the Changeset that is updated.</p>
   */
  updatesChangesetId?: string;

  /**
   * @public
   * <p>The unique identifier of the updated Changeset.</p>
   */
  updatedByChangesetId?: string;
}

/**
 * @public
 * Response to ListChangesetsResponse. This returns a list of dataset changesets that match the query criteria.
 */
export interface ListChangesetsResponse {
  /**
   * @public
   * <p>List of Changesets found.</p>
   */
  changesets?: ChangesetSummary[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * Request for the ListDatasets operation.
 */
export interface ListDatasetsRequest {
  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The structure for a Dataset.</p>
 */
export interface Dataset {
  /**
   * @public
   * <p>An identifier for a Dataset.</p>
   */
  datasetId?: string;

  /**
   * @public
   * <p>The ARN identifier of the Dataset.</p>
   */
  datasetArn?: string;

  /**
   * @public
   * <p>Display title for a Dataset.</p>
   */
  datasetTitle?: string;

  /**
   * @public
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
  kind?: DatasetKind;

  /**
   * @public
   * <p>Description for a Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * @public
   * <p>Contact information for a Dataset owner.</p>
   */
  ownerInfo?: DatasetOwnerInfo;

  /**
   * @public
   * <p>The timestamp at which the Dataset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * @public
   * <p>The last time that the Dataset was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * @public
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;

  /**
   * @public
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;
}

/**
 * @public
 * Response for the ListDatasets operation
 */
export interface ListDatasetsResponse {
  /**
   * @public
   * <p>List of Datasets.</p>
   */
  datasets?: Dataset[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * Request for a list data views.
 */
export interface ListDataViewsRequest {
  /**
   * @public
   * <p>The unique identifier of the Dataset for which to retrieve Dataviews.</p>
   */
  datasetId: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Structure for the summary of a Dataview.</p>
 */
export interface DataViewSummary {
  /**
   * @public
   * <p>The unique identifier for the Dataview.</p>
   */
  dataViewId?: string;

  /**
   * @public
   * <p>The ARN identifier of the Dataview.</p>
   */
  dataViewArn?: string;

  /**
   * @public
   * <p>Th unique identifier for the Dataview Dataset.</p>
   */
  datasetId?: string;

  /**
   * @public
   * <p>Time range to use for the Dataview. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * @public
   * <p>Ordered set of column names used to partition data.</p>
   */
  partitionColumns?: string[];

  /**
   * @public
   * <p>Columns to be used for sorting the data.</p>
   */
  sortColumns?: string[];

  /**
   * @public
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
  status?: DataViewStatus;

  /**
   * @public
   * <p>The structure with error messages.</p>
   */
  errorInfo?: DataViewErrorInfo;

  /**
   * @public
   * <p>Information about the Dataview destination.</p>
   */
  destinationTypeProperties?: DataViewDestinationTypeParams;

  /**
   * @public
   * <p>The flag to indicate Dataview should be updated automatically.</p>
   */
  autoUpdate?: boolean;

  /**
   * @public
   * <p>The timestamp at which the Dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * @public
   * <p>The last time that a Dataview was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;
}

/**
 * @public
 */
export interface ListDataViewsResponse {
  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A list of Dataviews.</p>
   */
  dataViews?: DataViewSummary[];
}

/**
 * @public
 */
export interface ListPermissionGroupsRequest {
  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * @public
 */
export interface ListPermissionGroupsResponse {
  /**
   * @public
   * <p>A list of all the permission groups.</p>
   */
  permissionGroups?: PermissionGroup[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPermissionGroupsByUserRequest {
  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * @public
 * <p>The structure of a permission group associated with a user.</p>
 */
export interface PermissionGroupByUser {
  /**
   * @public
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId?: string;

  /**
   * @public
   * <p>The name of the permission group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Indicates the status of the user within a permission group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADDITION_IN_PROGRESS</code> – The user is currently being added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADDITION_SUCCESS</code> – The user is successfully added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p>
   *             </li>
   *          </ul>
   */
  membershipStatus?: PermissionGroupMembershipStatus;
}

/**
 * @public
 */
export interface ListPermissionGroupsByUserResponse {
  /**
   * @public
   * <p>A list of returned permission groups.</p>
   */
  permissionGroups?: PermissionGroupByUser[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * @public
 * <p>The details of the user.</p>
 */
export interface User {
  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The current status of the user. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The user creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user is created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user is currently inactive.</p>
   *             </li>
   *          </ul>
   */
  status?: UserStatus;

  /**
   * @public
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * @public
   * <p> The last name of the user.</p>
   */
  lastName?: string;

  /**
   * @public
   * <p>The email address of the user. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.</p>
   */
  emailAddress?: string;

  /**
   * @public
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
  type?: UserType;

  /**
   * @public
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
  apiAccess?: ApiAccess;

  /**
   * @public
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * @public
   * <p>The timestamp at which the user was created in FinSpace. The value is determined as epoch time in milliseconds. </p>
   */
  createTime?: number;

  /**
   * @public
   * <p> Describes the last time the user was activated. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastEnabledTime?: number;

  /**
   * @public
   * <p>Describes the last time the user was deactivated. The value is determined as epoch time in milliseconds.</p>
   */
  lastDisabledTime?: number;

  /**
   * @public
   * <p>Describes the last time the user was updated. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastModifiedTime?: number;

  /**
   * @public
   * <p>Describes the last time that the user logged into their account. The value is determined as epoch time in milliseconds.
   *     </p>
   */
  lastLoginTime?: number;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * @public
   * <p>A list of all the users.</p>
   */
  users?: User[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUsersByPermissionGroupRequest {
  /**
   * @public
   * <p>The unique identifier for the permission group.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results per page.</p>
   */
  maxResults: number | undefined;
}

/**
 * @public
 * <p>The structure of a user associated with a permission group.</p>
 */
export interface UserByPermissionGroup {
  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The current status of the user. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code> – The user creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – The user is created and is currently active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – The user is currently inactive.</p>
   *             </li>
   *          </ul>
   */
  status?: UserStatus;

  /**
   * @public
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * @public
   * <p>The last name of the user.</p>
   */
  lastName?: string;

  /**
   * @public
   * <p>The email address of the user. The email address serves as a unique identifier for each user and cannot be changed after it's created.</p>
   */
  emailAddress?: string;

  /**
   * @public
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
  type?: UserType;

  /**
   * @public
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
  apiAccess?: ApiAccess;

  /**
   * @public
   * <p>The IAM ARN identifier that is attached to FinSpace API calls.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * @public
   * <p>Indicates the status of the user within a permission group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADDITION_IN_PROGRESS</code> – The user is currently being added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADDITION_SUCCESS</code> – The user is successfully added to the permission group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVAL_IN_PROGRESS</code> – The user is currently being removed from the permission group.</p>
   *             </li>
   *          </ul>
   */
  membershipStatus?: PermissionGroupMembershipStatus;
}

/**
 * @public
 */
export interface ListUsersByPermissionGroupResponse {
  /**
   * @public
   * <p>Lists details of all users in a specific permission group.</p>
   */
  users?: UserByPermissionGroup[];

  /**
   * @public
   * <p>A token that indicates where a results page should begin.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ResetUserPasswordRequest {
  /**
   * @public
   * <p>The unique identifier of the user that a temporary password is requested for.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface ResetUserPasswordResponse {
  /**
   * @public
   * <p>The unique identifier of the user that a new password is generated for.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>A randomly generated temporary password for the requested user. This password expires in 7 days.</p>
   */
  temporaryPassword?: string;
}

/**
 * @public
 * Request to update an existing changeset.
 */
export interface UpdateChangesetRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset in which the Changeset is created.</p>
   */
  datasetId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the Changeset to update.</p>
   */
  changesetId: string | undefined;

  /**
   * @public
   * <p>Options that define the location of the data being ingested (<code>s3SourcePath</code>) and the source of the changeset (<code>sourceType</code>).</p>
   *          <p>Both <code>s3SourcePath</code> and <code>sourceType</code> are required attributes.</p>
   *          <p>Here is an example of how you could specify the <code>sourceParams</code>:</p>
   *          <p>
   *             <code>
   *         "sourceParams":
   *         \{
   *         "s3SourcePath": "s3://finspace-landing-us-east-2-bk7gcfvitndqa6ebnvys4d/scratch/wr5hh8pwkpqqkxa4sxrmcw/ingestion/equity.csv",
   *         "sourceType": "S3"
   *         \}
   *       </code>
   *          </p>
   *          <p>The S3 path that you specify must allow the FinSpace role access. To do that, you first need to configure the IAM policy on S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/finspace/latest/data-api/fs-using-the-finspace-api.html#access-s3-buckets">Loading data from an Amazon S3 Bucket using the FinSpace API</a>section.</p>
   */
  sourceParams: Record<string, string> | undefined;

  /**
   * @public
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
   *          <p>Here is an example of how you could specify the <code>formatParams</code>:</p>
   *          <p>
   *             <code>
   *         "formatParams":
   *         \{
   *         "formatType": "CSV",
   *         "withHeader": "true",
   *         "separator": ",",
   *         "compression":"None"
   *         \}
   *       </code>
   *          </p>
   *          <p>Note that if you only provide <code>formatType</code> as <code>CSV</code>, the rest of the attributes will automatically default to CSV values as following:</p>
   *          <p>
   *             <code>
   *         \{
   *         "withHeader": "true",
   *         "separator": ","
   *         \}
   *         </code>
   *          </p>
   *          <p> For more information about supported file formats, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/supported-data-types.html">Supported Data Types and File Formats</a> in the FinSpace User Guide.</p>
   */
  formatParams: Record<string, string> | undefined;
}

/**
 * @public
 * The response from a update changeset operation.
 */
export interface UpdateChangesetResponse {
  /**
   * @public
   * <p>The unique identifier for the Changeset to update.</p>
   */
  changesetId?: string;

  /**
   * @public
   * <p>The unique identifier for the FinSpace Dataset in which the Changeset is created.</p>
   */
  datasetId?: string;
}

/**
 * @public
 * The request for an UpdateDataset operation
 */
export interface UpdateDatasetRequest {
  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The unique identifier for the Dataset to update.</p>
   */
  datasetId: string | undefined;

  /**
   * @public
   * <p>A display title for the Dataset.</p>
   */
  datasetTitle: string | undefined;

  /**
   * @public
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
  kind: DatasetKind | undefined;

  /**
   * @public
   * <p>A description for the Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * @public
   * <p>The unique resource identifier for a Dataset.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>Definition for a schema on a tabular Dataset.</p>
   */
  schemaDefinition?: SchemaUnion;
}

/**
 * @public
 * The response from an UpdateDataset operation
 */
export interface UpdateDatasetResponse {
  /**
   * @public
   * <p>The unique identifier for updated Dataset.</p>
   */
  datasetId?: string;
}

/**
 * @public
 */
export interface UpdatePermissionGroupRequest {
  /**
   * @public
   * <p>The unique identifier for the permission group to update.</p>
   */
  permissionGroupId: string | undefined;

  /**
   * @public
   * <p>The name of the permission group.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A brief description for the permission group.</p>
   */
  description?: string;

  /**
   * @public
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
  applicationPermissions?: ApplicationPermission[];

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePermissionGroupResponse {
  /**
   * @public
   * <p>The unique identifier for the updated permission group.</p>
   */
  permissionGroupId?: string;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * @public
   * <p>The unique identifier for the user that you want to update.</p>
   */
  userId: string | undefined;

  /**
   * @public
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
  type?: UserType;

  /**
   * @public
   * <p>The first name of the user.</p>
   */
  firstName?: string;

  /**
   * @public
   * <p>The last name of the user.</p>
   */
  lastName?: string;

  /**
   * @public
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
  apiAccess?: ApiAccess;

  /**
   * @public
   * <p>The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.</p>
   */
  apiAccessPrincipalArn?: string;

  /**
   * @public
   * <p>A token that ensures idempotency. This token expires in 10 minutes.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * @public
   * <p>The unique identifier of the updated user.</p>
   */
  userId?: string;
}

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
export const DatasetOwnerInfoFilterSensitiveLog = (obj: DatasetOwnerInfo): any => ({
  ...obj,
  ...(obj.email && { email: SENSITIVE_STRING }),
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
export const CreatePermissionGroupRequestFilterSensitiveLog = (obj: CreatePermissionGroupRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
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
export const GetExternalDataViewAccessDetailsResponseFilterSensitiveLog = (
  obj: GetExternalDataViewAccessDetailsResponse
): any => ({
  ...obj,
  ...(obj.credentials && { credentials: SENSITIVE_STRING }),
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
  ...(obj.credentials && { credentials: SENSITIVE_STRING }),
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
export const ListPermissionGroupsResponseFilterSensitiveLog = (obj: ListPermissionGroupsResponse): any => ({
  ...obj,
  ...(obj.permissionGroups && {
    permissionGroups: obj.permissionGroups.map((item) => PermissionGroupFilterSensitiveLog(item)),
  }),
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
export const ResetUserPasswordResponseFilterSensitiveLog = (obj: ResetUserPasswordResponse): any => ({
  ...obj,
  ...(obj.temporaryPassword && { temporaryPassword: SENSITIVE_STRING }),
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
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});
