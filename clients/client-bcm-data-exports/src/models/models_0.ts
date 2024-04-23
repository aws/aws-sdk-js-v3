// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMDataExportsServiceException as __BaseException } from "./BCMDataExportsServiceException";

/**
 * @public
 * <p>The SQL query of column selections and row filters from the data table you want.</p>
 */
export interface DataQuery {
  /**
   * @public
   * <p>The query statement.</p>
   */
  QueryStatement: string | undefined;

  /**
   * @public
   * <p>The table configuration.</p>
   */
  TableConfigurations?: Record<string, Record<string, string>>;
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
 * @public
 * <p>The compression type, file format, and overwrite preference for the data export.</p>
 */
export interface S3OutputConfigurations {
  /**
   * @public
   * <p>The output type for the data export.</p>
   */
  OutputType: S3OutputType | undefined;

  /**
   * @public
   * <p>The file format for the data export.</p>
   */
  Format: FormatOption | undefined;

  /**
   * @public
   * <p>The compression type for the data export.</p>
   */
  Compression: CompressionOption | undefined;

  /**
   * @public
   * <p>The rule to follow when generating a version of the data export file. You have the choice
   *       to overwrite the previous version or to be delivered in addition to the previous versions.
   *       Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows
   *       you to track the changes in cost and usage data over time.</p>
   */
  Overwrite: OverwriteOption | undefined;
}

/**
 * @public
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object
 *       keys of a data exports file.</p>
 */
export interface S3Destination {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket used as the destination of a data export file.</p>
   */
  S3Bucket: string | undefined;

  /**
   * @public
   * <p>The S3 path prefix you want prepended to the name of your data export.</p>
   */
  S3Prefix: string | undefined;

  /**
   * @public
   * <p>The S3 bucket Region.</p>
   */
  S3Region: string | undefined;

  /**
   * @public
   * <p>The output configuration for the data export.</p>
   */
  S3OutputConfigurations: S3OutputConfigurations | undefined;
}

/**
 * @public
 * <p>The destinations used for data exports.</p>
 */
export interface DestinationConfigurations {
  /**
   * @public
   * <p>An object that describes the destination of the data exports file.</p>
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
 * @public
 * <p>The cadence for Amazon Web Services to update the data export in your S3 bucket.</p>
 */
export interface RefreshCadence {
  /**
   * @public
   * <p>The frequency that data exports are updated. The export refreshes each time the source
   *       data updates, up to three times daily.</p>
   */
  Frequency: FrequencyOption | undefined;
}

/**
 * @public
 * <p>The details that are available for an export.</p>
 */
export interface Export {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn?: string;

  /**
   * @public
   * <p>The name of this specific data export.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description for this specific data export.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The data query for this specific data export.</p>
   */
  DataQuery: DataQuery | undefined;

  /**
   * @public
   * <p>The destination configuration for this specific data export.</p>
   */
  DestinationConfigurations: DestinationConfigurations | undefined;

  /**
   * @public
   * <p>The cadence for Amazon Web Services to update the export in your S3 bucket.</p>
   */
  RefreshCadence: RefreshCadence | undefined;
}

/**
 * @public
 * <p>The tag structure that contains a tag key and value.</p>
 */
export interface ResourceTag {
  /**
   * @public
   * <p>The key that's associated with the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value that's associated with the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateExportRequest {
  /**
   * @public
   * <p>The details of the export, including data query, name, description, and destination
   *       configuration.</p>
   */
  Export: Export | undefined;

  /**
   * @public
   * <p>An optional list of tags to associate with the specified export. Each tag consists of a
   *       key and a value, and each key must be unique for the resource.</p>
   */
  ResourceTags?: ResourceTag[];
}

/**
 * @public
 */
export interface CreateExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn?: string;
}

/**
 * @public
 * <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
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
 * @public
 * <p>You've reached the limit on the number of resources you can create, or exceeded the size
 *       of an individual resource.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The identifier of the resource that exceeded quota.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The type of the resource that exceeded quota.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The quota code that was exceeded.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>The service code that exceeded quota. It will always be
   *       “AWSBillingAndCostManagementDataExports”.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The quota code that exceeded the throttling limit.</p>
   */
  QuotaCode?: string;

  /**
   * @public
   * <p>The service code that exceeded the throttling limit. It will always be
   *       “AWSBillingAndCostManagementDataExports”.</p>
   */
  ServiceCode?: string;
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
 * @public
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in a
 *       specified field.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The field name where the invalid entry was detected.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A message with the reason for the validation exception error.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The reason for the validation exception.</p>
   */
  Reason?: ValidationExceptionReason;

  /**
   * @public
   * <p>The list of fields that are invalid.</p>
   */
  Fields?: ValidationExceptionField[];
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
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn?: string;
}

/**
 * @public
 * <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @public
   * <p>The identifier of the resource that was not found.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource that was not found.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the Export object that generated this specific
   *       execution.</p>
   */
  ExportArn: string | undefined;

  /**
   * @public
   * <p>The ID for this specific execution.</p>
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
 * @public
 * <p>The status of the execution.</p>
 */
export interface ExecutionStatus {
  /**
   * @public
   * <p>The code for the status of the execution.</p>
   */
  StatusCode?: ExecutionStatusCode;

  /**
   * @public
   * <p>The reason for the failed status.</p>
   */
  StatusReason?: ExecutionStatusReason;

  /**
   * @public
   * <p>The time when the execution was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when the execution was completed.</p>
   */
  CompletedAt?: Date;

  /**
   * @public
   * <p>The time when the execution was last updated.</p>
   */
  LastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface GetExecutionResponse {
  /**
   * @public
   * <p>The ID for this specific execution.</p>
   */
  ExecutionId?: string;

  /**
   * @public
   * <p>The export data for this specific execution. This export data is a snapshot from when the
   *       execution was generated. The data could be different from the current export data if the
   *       export was updated since the execution was generated.</p>
   */
  Export?: Export;

  /**
   * @public
   * <p>The status of this specific execution.</p>
   */
  ExecutionStatus?: ExecutionStatus;
}

/**
 * @public
 */
export interface GetExportRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
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
 * @public
 * <p>The status of the data export.</p>
 */
export interface ExportStatus {
  /**
   * @public
   * <p>The status code for the request.</p>
   */
  StatusCode?: ExportStatusCode;

  /**
   * @public
   * <p>The description for the status code.</p>
   */
  StatusReason?: ExecutionStatusReason;

  /**
   * @public
   * <p>The timestamp of when the export  was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the export  was updated.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the export was last generated.</p>
   */
  LastRefreshedAt?: Date;
}

/**
 * @public
 */
export interface GetExportResponse {
  /**
   * @public
   * <p>The data for this specific export.</p>
   */
  Export?: Export;

  /**
   * @public
   * <p>The status of this specific export.</p>
   */
  ExportStatus?: ExportStatus;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * @public
   * <p>The name of the table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>TableProperties are additional configurations you can provide to change the data and
   *       schema of a table. Each table can have different TableProperties. Tables are not required to
   *       have any TableProperties. Each table property has a default value that it assumes if not
   *       specified.</p>
   */
  TableProperties?: Record<string, string>;
}

/**
 * @public
 * <p>Includes basic information for a data column such as its description, name, and
 *       type.</p>
 */
export interface Column {
  /**
   * @public
   * <p>The column name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The kind of data a column stores.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The description for a column.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * @public
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The table description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>TableProperties are additional configurations you can provide to change the data and
   *       schema of a table. Each table can have different TableProperties. Tables are not required to
   *       have any TableProperties. Each table property has a default value that it assumes if not
   *       specified.</p>
   */
  TableProperties?: Record<string, string>;

  /**
   * @public
   * <p>The schema of the table.</p>
   */
  Schema?: Column[];
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of objects that are returned for the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The reference for the data export update.</p>
 */
export interface ExecutionReference {
  /**
   * @public
   * <p>The ID for this specific execution.</p>
   */
  ExecutionId: string | undefined;

  /**
   * @public
   * <p>The status of this specific execution.</p>
   */
  ExecutionStatus: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * @public
   * <p>The list of executions.</p>
   */
  Executions?: ExecutionReference[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExportsRequest {
  /**
   * @public
   * <p>The maximum number of objects that are returned for the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The reference details for a given export.</p>
 */
export interface ExportReference {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn: string | undefined;

  /**
   * @public
   * <p>The name of this specific data export.</p>
   */
  ExportName: string | undefined;

  /**
   * @public
   * <p>The status of this specific data export.</p>
   */
  ExportStatus: ExportStatus | undefined;
}

/**
 * @public
 */
export interface ListExportsResponse {
  /**
   * @public
   * <p>The details of the exports, including name and export status.</p>
   */
  Exports?: ExportReference[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that are returned for the request.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The properties for the data export table.</p>
 */
export interface TablePropertyDescription {
  /**
   * @public
   * <p>The name of the table.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The valid values for the table.</p>
   */
  ValidValues?: string[];

  /**
   * @public
   * <p>The default value for the table.</p>
   */
  DefaultValue?: string;

  /**
   * @public
   * <p>The description for the table.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>The details for the data export table.</p>
 */
export interface Table {
  /**
   * @public
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The description for the table.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The properties for the table.</p>
   */
  TableProperties?: TablePropertyDescription[];
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * @public
   * <p>The list of tables.</p>
   */
  Tables?: Table[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The unique identifier for the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of objects that are returned for the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An optional list of tags to associate with the specified export. Each tag consists of a
   *       key and a value, and each key must be unique for the resource.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The unique identifier for the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to associate with the resource. Each tag consists of a key and a value, and each
   *       key must be unique for the resource.</p>
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
   * @public
   * <p>The unique identifier for the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys that are associated with the resource ARN.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn: string | undefined;

  /**
   * @public
   * <p>The name and query details for the export.</p>
   */
  Export: Export | undefined;
}

/**
 * @public
 */
export interface UpdateExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this export.</p>
   */
  ExportArn?: string;
}
