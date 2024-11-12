// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMDataExportsServiceException as __BaseException } from "./BCMDataExportsServiceException";

/**
 * <p>The SQL query of column selections and row filters from the data table you want.</p>
 * @public
 */
export interface DataQuery {
  /**
   * <p>The query statement.</p>
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * <p>The table configuration.</p>
   * @public
   */
  TableConfigurations?: Record<string, Record<string, string>> | undefined;
}

/**
 * @public
 * @enum
 */
export const CompressionOption = {
  GZIP: "GZIP",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type CompressionOption = (typeof CompressionOption)[keyof typeof CompressionOption];

/**
 * @public
 * @enum
 */
export const FormatOption = {
  PARQUET: "PARQUET",
  TEXT_OR_CSV: "TEXT_OR_CSV",
} as const;

/**
 * @public
 */
export type FormatOption = (typeof FormatOption)[keyof typeof FormatOption];

/**
 * @public
 * @enum
 */
export const S3OutputType = {
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type S3OutputType = (typeof S3OutputType)[keyof typeof S3OutputType];

/**
 * @public
 * @enum
 */
export const OverwriteOption = {
  CREATE_NEW_REPORT: "CREATE_NEW_REPORT",
  OVERWRITE_REPORT: "OVERWRITE_REPORT",
} as const;

/**
 * @public
 */
export type OverwriteOption = (typeof OverwriteOption)[keyof typeof OverwriteOption];

/**
 * <p>The compression type, file format, and overwrite preference for the data export.</p>
 * @public
 */
export interface S3OutputConfigurations {
  /**
   * <p>The output type for the data export.</p>
   * @public
   */
  OutputType: S3OutputType | undefined;

  /**
   * <p>The file format for the data export.</p>
   * @public
   */
  Format: FormatOption | undefined;

  /**
   * <p>The compression type for the data export.</p>
   * @public
   */
  Compression: CompressionOption | undefined;

  /**
   * <p>The rule to follow when generating a version of the data export file. You have the choice
   *       to overwrite the previous version or to be delivered in addition to the previous versions.
   *       Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows
   *       you to track the changes in cost and usage data over time.</p>
   * @public
   */
  Overwrite: OverwriteOption | undefined;
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object
 *       keys of a data exports file.</p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>The name of the Amazon S3 bucket used as the destination of a data export file.</p>
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * <p>The S3 path prefix you want prepended to the name of your data export.</p>
   * @public
   */
  S3Prefix: string | undefined;

  /**
   * <p>The S3 bucket Region.</p>
   * @public
   */
  S3Region: string | undefined;

  /**
   * <p>The output configuration for the data export.</p>
   * @public
   */
  S3OutputConfigurations: S3OutputConfigurations | undefined;
}

/**
 * <p>The destinations used for data exports.</p>
 * @public
 */
export interface DestinationConfigurations {
  /**
   * <p>An object that describes the destination of the data exports file.</p>
   * @public
   */
  S3Destination: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const FrequencyOption = {
  SYNCHRONOUS: "SYNCHRONOUS",
} as const;

/**
 * @public
 */
export type FrequencyOption = (typeof FrequencyOption)[keyof typeof FrequencyOption];

/**
 * <p>The cadence for Amazon Web Services to update the data export in your S3 bucket.</p>
 * @public
 */
export interface RefreshCadence {
  /**
   * <p>The frequency that data exports are updated. The export refreshes each time the source
   *       data updates, up to three times daily.</p>
   * @public
   */
  Frequency: FrequencyOption | undefined;
}

/**
 * <p>The details that are available for an export.</p>
 * @public
 */
export interface Export {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn?: string | undefined;

  /**
   * <p>The name of this specific data export.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description for this specific data export.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The data query for this specific data export.</p>
   * @public
   */
  DataQuery: DataQuery | undefined;

  /**
   * <p>The destination configuration for this specific data export.</p>
   * @public
   */
  DestinationConfigurations: DestinationConfigurations | undefined;

  /**
   * <p>The cadence for Amazon Web Services to update the export in your S3 bucket.</p>
   * @public
   */
  RefreshCadence: RefreshCadence | undefined;
}

/**
 * <p>The tag structure that contains a tag key and value.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The key that's associated with the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value that's associated with the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateExportRequest {
  /**
   * <p>The details of the export, including data query, name, description, and destination
   *       configuration.</p>
   * @public
   */
  Export: Export | undefined;

  /**
   * <p>An optional list of tags to associate with the specified export. Each tag consists of a
   *       key and a value, and each key must be unique for the resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn?: string | undefined;
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
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
 * <p>You've reached the limit on the number of resources you can create, or exceeded the size
 *       of an individual resource.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the resource that exceeded quota.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource that exceeded quota.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code that was exceeded.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>The service code that exceeded quota. It will always be
   *       “AWSBillingAndCostManagementDataExports”.</p>
   * @public
   */
  ServiceCode: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The quota code that exceeded the throttling limit.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The service code that exceeded the throttling limit. It will always be
   *       “AWSBillingAndCostManagementDataExports”.</p>
   * @public
   */
  ServiceCode?: string | undefined;
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
    this.Message = opts.Message;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in a
 *       specified field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A message with the reason for the validation exception error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The list of fields that are invalid.</p>
   * @public
   */
  Fields?: ValidationExceptionField[] | undefined;
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
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * @public
 */
export interface DeleteExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn?: string | undefined;
}

/**
 * <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The identifier of the resource that was not found.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource that was not found.</p>
   * @public
   */
  ResourceType: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 */
export interface GetExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Export object that generated this specific
   *       execution.</p>
   * @public
   */
  ExportArn: string | undefined;

  /**
   * <p>The ID for this specific execution.</p>
   * @public
   */
  ExecutionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatusCode = {
  DELIVERY_FAILURE: "DELIVERY_FAILURE",
  DELIVERY_IN_PROCESS: "DELIVERY_IN_PROCESS",
  DELIVERY_SUCCESS: "DELIVERY_SUCCESS",
  INITIATION_IN_PROCESS: "INITIATION_IN_PROCESS",
  QUERY_FAILURE: "QUERY_FAILURE",
  QUERY_IN_PROCESS: "QUERY_IN_PROCESS",
  QUERY_QUEUED: "QUERY_QUEUED",
} as const;

/**
 * @public
 */
export type ExecutionStatusCode = (typeof ExecutionStatusCode)[keyof typeof ExecutionStatusCode];

/**
 * @public
 * @enum
 */
export const ExecutionStatusReason = {
  BILL_OWNER_CHANGED: "BILL_OWNER_CHANGED",
  INSUFFICIENT_PERMISSION: "INSUFFICIENT_PERMISSION",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;

/**
 * @public
 */
export type ExecutionStatusReason = (typeof ExecutionStatusReason)[keyof typeof ExecutionStatusReason];

/**
 * <p>The status of the execution.</p>
 * @public
 */
export interface ExecutionStatus {
  /**
   * <p>The code for the status of the execution.</p>
   * @public
   */
  StatusCode?: ExecutionStatusCode | undefined;

  /**
   * <p>The reason for the failed status.</p>
   * @public
   */
  StatusReason?: ExecutionStatusReason | undefined;

  /**
   * <p>The time when the execution was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time when the execution was completed.</p>
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * <p>The time when the execution was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetExecutionResponse {
  /**
   * <p>The ID for this specific execution.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The export data for this specific execution. This export data is a snapshot from when the
   *       execution was generated. The data could be different from the current export data if the
   *       export was updated since the execution was generated.</p>
   * @public
   */
  Export?: Export | undefined;

  /**
   * <p>The status of this specific execution.</p>
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface GetExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportStatusCode = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type ExportStatusCode = (typeof ExportStatusCode)[keyof typeof ExportStatusCode];

/**
 * <p>The status of the data export.</p>
 * @public
 */
export interface ExportStatus {
  /**
   * <p>The status code for the request.</p>
   * @public
   */
  StatusCode?: ExportStatusCode | undefined;

  /**
   * <p>The description for the status code.</p>
   * @public
   */
  StatusReason?: ExecutionStatusReason | undefined;

  /**
   * <p>The timestamp of when the export  was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the export  was updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the export was last generated.</p>
   * @public
   */
  LastRefreshedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetExportResponse {
  /**
   * <p>The data for this specific export.</p>
   * @public
   */
  Export?: Export | undefined;

  /**
   * <p>The status of this specific export.</p>
   * @public
   */
  ExportStatus?: ExportStatus | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>TableProperties are additional configurations you can provide to change the data and
   *       schema of a table. Each table can have different TableProperties. Tables are not required to
   *       have any TableProperties. Each table property has a default value that it assumes if not
   *       specified.</p>
   * @public
   */
  TableProperties?: Record<string, string> | undefined;
}

/**
 * <p>Includes basic information for a data column such as its description, name, and
 *       type.</p>
 * @public
 */
export interface Column {
  /**
   * <p>The column name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The kind of data a column stores.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The description for a column.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The table description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>TableProperties are additional configurations you can provide to change the data and
   *       schema of a table. Each table can have different TableProperties. Tables are not required to
   *       have any TableProperties. Each table property has a default value that it assumes if not
   *       specified.</p>
   * @public
   */
  TableProperties?: Record<string, string> | undefined;

  /**
   * <p>The schema of the table.</p>
   * @public
   */
  Schema?: Column[] | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn: string | undefined;

  /**
   * <p>The maximum number of objects that are returned for the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The reference for the data export update.</p>
 * @public
 */
export interface ExecutionReference {
  /**
   * <p>The ID for this specific execution.</p>
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * <p>The status of this specific execution.</p>
   * @public
   */
  ExecutionStatus: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * <p>The list of executions.</p>
   * @public
   */
  Executions?: ExecutionReference[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsRequest {
  /**
   * <p>The maximum number of objects that are returned for the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The reference details for a given export.</p>
 * @public
 */
export interface ExportReference {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn: string | undefined;

  /**
   * <p>The name of this specific data export.</p>
   * @public
   */
  ExportName: string | undefined;

  /**
   * <p>The status of this specific data export.</p>
   * @public
   */
  ExportStatus: ExportStatus | undefined;
}

/**
 * @public
 */
export interface ListExportsResponse {
  /**
   * <p>The details of the exports, including name and export status.</p>
   * @public
   */
  Exports?: ExportReference[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that are returned for the request.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The properties for the data export table.</p>
 * @public
 */
export interface TablePropertyDescription {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The valid values for the table.</p>
   * @public
   */
  ValidValues?: string[] | undefined;

  /**
   * <p>The default value for the table.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>The description for the table.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The details for the data export table.</p>
 * @public
 */
export interface Table {
  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>The description for the table.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The properties for the table.</p>
   * @public
   */
  TableProperties?: TablePropertyDescription[] | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * <p>The list of tables.</p>
   * @public
   */
  Tables?: Table[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The maximum number of objects that are returned for the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An optional list of tags to associate with the specified export. Each tag consists of a
   *       key and a value, and each key must be unique for the resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to associate with the resource. Each tag consists of a key and a value, and each
   *       key must be unique for the resource.</p>
   * @public
   */
  ResourceTags: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys that are associated with the resource ARN.</p>
   * @public
   */
  ResourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn: string | undefined;

  /**
   * <p>The name and query details for the export.</p>
   * @public
   */
  Export: Export | undefined;
}

/**
 * @public
 */
export interface UpdateExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   * @public
   */
  ExportArn?: string | undefined;
}
