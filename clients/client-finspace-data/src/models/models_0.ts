import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
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
 * <p>The request conflicts with an existing resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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
   * <p>A token used to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique identifier for the FinSpace Dataset where the Changeset will be created.
   *     </p>
   */
  datasetId: string | undefined;

  /**
   * <p>Option to indicate how a Changeset will be applied to a Dataset.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPLACE</code> - Changeset will be considered as a replacement to all prior
   *           loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> - Changeset will be considered as an addition to the end of all
   *           prior loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> - Changeset is considered as a replacement to a specific prior ingested Changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType: ChangeType | string | undefined;

  /**
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams: { [key: string]: string } | undefined;

  /**
   * <p>Options that define the structure of the source file(s) including the format type (<code>formatType</code>), header row (<code>withHeader</code>), data separation character (<code>separator</code>) and the type of compression (<code>compression</code>).
   *     </p>
   *          <p>
   *             <code>formatType</code> is a required attribute and can have the following values:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PARQUET</code> - Parquet source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CSV</code> - CSV source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code> - JSON source file format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XML</code> - XML source file format.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *
   *       For example, you could specify the following for <code>formatParams</code>:
   *
   *     <code>
   *           "formatParams":
   *         {
   *          "formatType": "CSV",
   *          "withHeader": "true",
   *          "separator": ",",
   *          "compression":"None"
   *          }
   *     </code>
   *          </p>
   */
  formatParams: { [key: string]: string } | undefined;
}

export namespace CreateChangesetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChangesetRequest): any => ({
    ...obj,
  });
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

export namespace CreateChangesetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChangesetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>A limit has exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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
   * <p>Name of the Dataset owner.</p>
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

export namespace DatasetOwnerInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetOwnerInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Resource permission for a Dataset.</p>
 */
export interface ResourcePermission {
  /**
   * <p>Permission for a resource.</p>
   */
  permission?: string;
}

export namespace ResourcePermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourcePermission): any => ({
    ...obj,
  });
}

/**
 * <p>Permission group parameters for Dataset permissions.</p>
 */
export interface PermissionGroupParams {
  /**
   * <p>The unique identifier of the PermissionGroup.</p>
   */
  permissionGroupId?: string;

  /**
   * <p>List of resource permissions.</p>
   */
  datasetPermissions?: ResourcePermission[];
}

export namespace PermissionGroupParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PermissionGroupParams): any => ({
    ...obj,
  });
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
   *                   <code>STRING</code> - A String data type.</p>
   *                <p>
   *                   <code>CHAR</code> - A char data type.</p>
   *                <p>
   *                   <code>INTEGER</code> - An integer data type.</p>
   *                <p>
   *                   <code>TINYINT</code> - A tinyint data type.</p>
   *                <p>
   *                   <code>SMALLINT</code> - A smallint data type.</p>
   *                <p>
   *                   <code>BIGINT</code> - A bigint data type.</p>
   *                <p>
   *                   <code>FLOAT</code> - A float data type.</p>
   *                <p>
   *                   <code>DOUBLE</code> - A double data type.</p>
   *                <p>
   *                   <code>DATE</code> - A date data type.</p>
   *                <p>
   *                   <code>DATETIME</code> - A datetime data type.</p>
   *                <p>
   *                   <code>BOOLEAN</code> - A boolean data type.</p>
   *                <p>
   *                   <code>BINARY</code> - A binary data type.</p>
   *             </li>
   *          </ul>
   */
  dataType?: ColumnDataType | string;

  /**
   * <p>Name for a column.</p>
   */
  columnName?: string;

  /**
   * <p>Description for a column.</p>
   */
  columnDescription?: string;
}

export namespace ColumnDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnDefinition): any => ({
    ...obj,
  });
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

export namespace SchemaDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaDefinition): any => ({
    ...obj,
  });
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

export namespace SchemaUnion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaUnion): any => ({
    ...obj,
  });
}

/**
 * The request for a CreateDataset operation
 */
export interface CreateDatasetRequest {
  /**
   * <p>A token used to ensure idempotency.</p>
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
   *                   <code>TABULAR</code> - Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> - Data is structured in a non-tabular format.</p>
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

export namespace CreateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
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

export namespace CreateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
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
   *                   <code>GLUE_TABLE</code> - Glue table destination type.</p>
   *             </li>
   *          </ul>
   */
  destinationType: string | undefined;

  /**
   * Data View Export File Format
   */
  s3DestinationExportFileFormat?: ExportFileFormat | string;

  s3DestinationExportFileFormatOptions?: { [key: string]: string };
}

export namespace DataViewDestinationTypeParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataViewDestinationTypeParams): any => ({
    ...obj,
  });
}

/**
 * Request for creating a data view.
 */
export interface CreateDataViewRequest {
  /**
   * <p>A token used to ensure idempotency.</p>
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
   * <p>Beginning time to use for the Dataview. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * <p>Options that define the destination type for the Dataview.</p>
   */
  destinationTypeParams: DataViewDestinationTypeParams | undefined;
}

export namespace CreateDataViewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataViewRequest): any => ({
    ...obj,
  });
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

export namespace CreateDataViewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataViewResponse): any => ({
    ...obj,
  });
}

/**
 * The request for a DeleteDataset operation.
 */
export interface DeleteDatasetRequest {
  /**
   * <p>A token used to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The unique identifier of the Dataset to be deleted.</p>
   */
  datasetId: string | undefined;
}

export namespace DeleteDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
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

export namespace DeleteDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
    ...obj,
  });
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

export namespace GetChangesetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChangesetRequest): any => ({
    ...obj,
  });
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
   *                   <code>VALIDATION</code> -The inputs to this request are invalid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_EXCEEDED</code> - Service quotas have been exceeded. Please
   *           contact AWS support to increase quotas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code> - Missing required permission to perform this
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_NOT_FOUND</code> - One or more inputs to this request were not
   *           found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLING</code> - The system temporarily lacks sufficient resources to process
   *           the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVICE_EXCEPTION</code> - An internal service error has
   *           occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - Cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_RECOVERABLE</code> - A user recoverable error has occurred.</p>
   *             </li>
   *          </ul>
   */
  errorCategory?: ErrorCategory | string;
}

export namespace ChangesetErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangesetErrorInfo): any => ({
    ...obj,
  });
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
   *                   <code>REPLACE</code> - Changeset is considered as a replacement to all prior loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> - Changeset is considered as an addition to the end of all prior loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> - Changeset is considered as a replacement to a specific prior ingested Changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType?: ChangeType | string;

  /**
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams?: { [key: string]: string };

  /**
   * <p>Structure of the source file(s).</p>
   */
  formatParams?: { [key: string]: string };

  /**
   * <p>The timestamp at which the Changeset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
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
   * <p>Time until which the Changeset is active. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeUntilTimestamp?: number;

  /**
   * Milliseconds since UTC epoch
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

export namespace GetChangesetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChangesetResponse): any => ({
    ...obj,
  });
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

export namespace GetDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatasetRequest): any => ({
    ...obj,
  });
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
   *                   <code>TABULAR</code> - Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> - Data is structured in a non-tabular format.</p>
   *             </li>
   *          </ul>
   */
  kind?: DatasetKind | string;

  /**
   * <p>A description of the Dataset.</p>
   */
  datasetDescription?: string;

  /**
   * <p>The timestamp at which the Dataset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The last time that the Dataset was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
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
   *                   <code>PENDING</code> - Dataset is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Dataset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - Dataset creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - Dataset creation is running.</p>
   *             </li>
   *          </ul>
   */
  status?: DatasetStatus | string;
}

export namespace GetDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatasetResponse): any => ({
    ...obj,
  });
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

export namespace GetDataViewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataViewRequest): any => ({
    ...obj,
  });
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
   *                   <code>VALIDATION</code> -The inputs to this request are invalid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_EXCEEDED</code> - Service quotas have been exceeded. Please
   *           contact AWS support to increase quotas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code> - Missing required permission to perform this
   *           request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOURCE_NOT_FOUND</code> - One or more inputs to this request were not
   *           found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THROTTLING</code> - The system temporarily lacks sufficient resources to process
   *           the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVICE_EXCEPTION</code> - An internal service error has
   *           occurred.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - Cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_RECOVERABLE</code> - A user recoverable error has occurred.</p>
   *             </li>
   *          </ul>
   */
  errorCategory?: ErrorCategory | string;
}

export namespace DataViewErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataViewErrorInfo): any => ({
    ...obj,
  });
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
   * <p>Time range to use for the Dataview. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  asOfTimestamp?: number;

  /**
   * <p>Information about an error that occurred for the Dataview.</p>
   */
  errorInfo?: DataViewErrorInfo;

  /**
   * <p>The last time that a Dataview was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;

  /**
   * <p>The timestamp at which the Dataview was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
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
   *                   <code>RUNNING</code> - Dataview creation is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> - Dataview creation is starting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Dataview creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - Dataview creation has been cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code> - Dataview creation has timed out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - Dataview creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Dataview creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_CLEANUP_FAILED</code> - Dataview creation failed and resource cleanup failed.</p>
   *             </li>
   *          </ul>
   */
  status?: DataViewStatus | string;
}

export namespace GetDataViewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataViewResponse): any => ({
    ...obj,
  });
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

export namespace GetProgrammaticAccessCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProgrammaticAccessCredentialsRequest): any => ({
    ...obj,
  });
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

export namespace Credentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Credentials): any => ({
    ...obj,
  });
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

export namespace GetProgrammaticAccessCredentialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProgrammaticAccessCredentialsResponse): any => ({
    ...obj,
  });
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
   *                   <code>SAGEMAKER</code> - Use the Amazon S3 location as a temporary location to store data content when
   *           working with FinSpace Notebooks that run on SageMaker studio.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INGESTION</code> - Use the Amazon S3 location as a staging location to copy your
   *           data content and then use the location with the Changeset creation operation.</p>
   *             </li>
   *          </ul>
   */
  locationType?: LocationType | string;
}

export namespace GetWorkingLocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkingLocationRequest): any => ({
    ...obj,
  });
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

export namespace GetWorkingLocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkingLocationResponse): any => ({
    ...obj,
  });
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
   * <p>A token indicating where a results page should begin.</p>
   */
  nextToken?: string;
}

export namespace ListChangesetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChangesetsRequest): any => ({
    ...obj,
  });
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
   *                   <code>REPLACE</code> - Changeset is considered as a replacement to all prior loaded
   *           Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPEND</code> - Changeset is considered as an addition to the end of all prior
   *           loaded Changesets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFY</code> - Changeset is considered as a replacement to a specific prior
   *           ingested Changeset.</p>
   *             </li>
   *          </ul>
   */
  changeType?: ChangeType | string;

  /**
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams?: { [key: string]: string };

  /**
   * <p>Options that define the structure of the source file(s).</p>
   */
  formatParams?: { [key: string]: string };

  /**
   * <p>The timestamp at which the Changeset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>Status of the Changeset ingestion.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Changeset is pending creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Changeset creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - Changeset creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> - Changeset creation is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_REQUESTED</code> - User requested Changeset creation to stop.</p>
   *             </li>
   *          </ul>
   */
  status?: IngestionStatus | string;

  /**
   * <p>The structure with error messages.</p>
   */
  errorInfo?: ChangesetErrorInfo;

  /**
   * <p>Time until which the Changeset is active. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  activeUntilTimestamp?: number;

  /**
   * Milliseconds since UTC epoch
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

export namespace ChangesetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangesetSummary): any => ({
    ...obj,
  });
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
   * <p>A token indicating where a results page should begin.</p>
   */
  nextToken?: string;
}

export namespace ListChangesetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChangesetsResponse): any => ({
    ...obj,
  });
}

/**
 * Request for the ListDatasets operation.
 */
export interface ListDatasetsRequest {
  /**
   * <p>A token indicating where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
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
   *                   <code>TABULAR</code> - Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> - Data is structured in a non-tabular format.</p>
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
   * <p>The timestamp at which the Dataset was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The last time that the Dataset was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
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

export namespace Dataset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
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
   * <p>A token indicating where a results page should begin.</p>
   */
  nextToken?: string;
}

export namespace ListDatasetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
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
   * <p>A token indicating where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results per page.</p>
   */
  maxResults?: number;
}

export namespace ListDataViewsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataViewsRequest): any => ({
    ...obj,
  });
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
   * <p>Time range to use for the Dataview. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
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
   *                   <code>RUNNING</code> - Dataview creation is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> - Dataview creation is starting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - Dataview creation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> - Dataview creation has been cancelled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMEOUT</code> - Dataview creation has timed out.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> - Dataview creation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Dataview creation is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_CLEANUP_FAILED</code> - Dataview creation failed and resource cleanup failed.</p>
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
   * <p>The timestamp at which the Dataview was created in FinSpace. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  createTime?: number;

  /**
   * <p>The last time that a Dataview was modified. The value is determined as Epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</p>
   */
  lastModifiedTime?: number;
}

export namespace DataViewSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataViewSummary): any => ({
    ...obj,
  });
}

export interface ListDataViewsResponse {
  /**
   * <p>A token indicating where a results page should begin.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of Dataviews.</p>
   */
  dataViews?: DataViewSummary[];
}

export namespace ListDataViewsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataViewsResponse): any => ({
    ...obj,
  });
}

/**
 * Request to update an existing changeset.
 */
export interface UpdateChangesetRequest {
  /**
   * <p>A token used to ensure idempotency.</p>
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
   * <p>Options that define the location of the data being ingested.</p>
   */
  sourceParams: { [key: string]: string } | undefined;

  /**
   * <p>Options that define the structure of the source file(s).</p>
   */
  formatParams: { [key: string]: string } | undefined;
}

export namespace UpdateChangesetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChangesetRequest): any => ({
    ...obj,
  });
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

export namespace UpdateChangesetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChangesetResponse): any => ({
    ...obj,
  });
}

/**
 * The request for an UpdateDataset operation
 */
export interface UpdateDatasetRequest {
  /**
   * <p>A token used to ensure idempotency.</p>
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
   *                   <code>TABULAR</code> - Data is structured in a tabular format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_TABULAR</code> - Data is structured in a non-tabular format.</p>
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

export namespace UpdateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetRequest): any => ({
    ...obj,
  });
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

export namespace UpdateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetResponse): any => ({
    ...obj,
  });
}
