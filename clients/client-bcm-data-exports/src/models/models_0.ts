// smithy-typescript generated code
import type {
  CompressionOption,
  ExecutionStatusCode,
  ExecutionStatusReason,
  ExportStatusCode,
  FormatOption,
  FrequencyOption,
  OverwriteOption,
  S3OutputType,
} from "./enums";

/**
 * The SQL query of column selections and row filters from the data table you want.
 *
 * @public
 */
export interface DataQuery {
  /**
   * The query statement.
   *
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * The table configuration.
   *
   * @public
   */
  TableConfigurations?: Record<string, Record<string, string>> | undefined;
}

/**
 * The compression type, file format, and overwrite preference for the data export.
 *
 * @public
 */
export interface S3OutputConfigurations {
  /**
   * The output type for the data export.
   *
   * @public
   */
  OutputType: S3OutputType | undefined;

  /**
   * The file format for the data export.
   *
   * @public
   */
  Format: FormatOption | undefined;

  /**
   * The compression type for the data export.
   *
   * @public
   */
  Compression: CompressionOption | undefined;

  /**
   * The rule to follow when generating a version of the data export file. You have the choice to overwrite the previous version or to be delivered in addition to the previous versions. Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows you to track the changes in cost and usage data over time.
   *
   * @public
   */
  Overwrite: OverwriteOption | undefined;
}

/**
 * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a data exports file.
 *
 * @public
 */
export interface S3Destination {
  /**
   * The name of the Amazon S3 bucket used as the destination of a data export file.
   *
   * @public
   */
  S3Bucket: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the S3 bucket used as the destination for the data export.
   *
   * @public
   */
  S3BucketOwner?: string | undefined;

  /**
   * The S3 path prefix you want prepended to the name of your data export.
   *
   * @public
   */
  S3Prefix: string | undefined;

  /**
   * The S3 bucket Region.
   *
   * @public
   */
  S3Region: string | undefined;

  /**
   * The output configuration for the data export.
   *
   * @public
   */
  S3OutputConfigurations: S3OutputConfigurations | undefined;
}

/**
 * The destinations used for data exports.
 *
 * @public
 */
export interface DestinationConfigurations {
  /**
   * An object that describes the destination of the data exports file.
   *
   * @public
   */
  S3Destination: S3Destination | undefined;
}

/**
 * The cadence for Amazon Web Services to update the data export in your S3 bucket.
 *
 * @public
 */
export interface RefreshCadence {
  /**
   * The frequency that data exports are updated. The export refreshes each time the source data updates, up to three times daily.
   *
   * @public
   */
  Frequency: FrequencyOption | undefined;
}

/**
 * The details that are available for an export.
 *
 * @public
 */
export interface Export {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn?: string | undefined;

  /**
   * The name of this specific data export.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description for this specific data export.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The data query for this specific data export.
   *
   * @public
   */
  DataQuery: DataQuery | undefined;

  /**
   * The destination configuration for this specific data export.
   *
   * @public
   */
  DestinationConfigurations: DestinationConfigurations | undefined;

  /**
   * The cadence for Amazon Web Services to update the export in your S3 bucket.
   *
   * @public
   */
  RefreshCadence: RefreshCadence | undefined;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key that's associated with the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value that's associated with the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateExportRequest {
  /**
   * The details of the export, including data query, name, description, and destination configuration.
   *
   * @public
   */
  Export: Export | undefined;

  /**
   * An optional list of tags to associate with the specified export. Each tag consists of a key and a value, and each key must be unique for the resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateExportResponse {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn?: string | undefined;
}

/**
 * The input failed to meet the constraints specified by the Amazon Web Services service in a specified field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A message with the reason for the validation exception error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportRequest {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExportResponse {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn?: string | undefined;
}

/**
 * @public
 */
export interface GetExportRequest {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn: string | undefined;
}

/**
 * The status of the data export.
 *
 * @public
 */
export interface ExportStatus {
  /**
   * The status code for the request.
   *
   * @public
   */
  StatusCode?: ExportStatusCode | undefined;

  /**
   * The description for the status code.
   *
   * @public
   */
  StatusReason?: ExecutionStatusReason | undefined;

  /**
   * The timestamp of when the export was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the export was updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The timestamp of when the export was last generated.
   *
   * @public
   */
  LastRefreshedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetExportResponse {
  /**
   * The data for this specific export.
   *
   * @public
   */
  Export?: Export | undefined;

  /**
   * The status of this specific export.
   *
   * @public
   */
  ExportStatus?: ExportStatus | undefined;
}

/**
 * @public
 */
export interface ListExportsRequest {
  /**
   * The maximum number of objects that are returned for the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The reference details for a given export.
 *
 * @public
 */
export interface ExportReference {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn: string | undefined;

  /**
   * The name of this specific data export.
   *
   * @public
   */
  ExportName: string | undefined;

  /**
   * The status of this specific data export.
   *
   * @public
   */
  ExportStatus: ExportStatus | undefined;
}

/**
 * @public
 */
export interface ListExportsResponse {
  /**
   * The details of the exports, including name and export status.
   *
   * @public
   */
  Exports?: ExportReference[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateExportRequest {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn: string | undefined;

  /**
   * The name and query details for the export.
   *
   * @public
   */
  Export: Export | undefined;
}

/**
 * @public
 */
export interface UpdateExportResponse {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn?: string | undefined;
}

/**
 * @public
 */
export interface GetExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Export object that generated this specific execution.
   *
   * @public
   */
  ExportArn: string | undefined;

  /**
   * The ID for this specific execution.
   *
   * @public
   */
  ExecutionId: string | undefined;
}

/**
 * The status of the execution.
 *
 * @public
 */
export interface ExecutionStatus {
  /**
   * The code for the status of the execution.
   *
   * @public
   */
  StatusCode?: ExecutionStatusCode | undefined;

  /**
   * The reason for the failed status.
   *
   * @public
   */
  StatusReason?: ExecutionStatusReason | undefined;

  /**
   * The time when the execution was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when the execution was completed.
   *
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * The time when the execution was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetExecutionResponse {
  /**
   * The ID for this specific execution.
   *
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * The export data for this specific execution. This export data is a snapshot from when the execution was generated. The data could be different from the current export data if the export was updated since the execution was generated.
   *
   * @public
   */
  Export?: Export | undefined;

  /**
   * The status of this specific execution.
   *
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * The name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. Tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified.
   *
   * @public
   */
  TableProperties?: Record<string, string> | undefined;
}

/**
 * Includes basic information for a data column such as its description, name, and type.
 *
 * @public
 */
export interface Column {
  /**
   * The column name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The kind of data a column stores.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The description for a column.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The table description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. Tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified.
   *
   * @public
   */
  TableProperties?: Record<string, string> | undefined;

  /**
   * The schema of the table.
   *
   * @public
   */
  Schema?: Column[] | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * The Amazon Resource Name (ARN) for this export.
   *
   * @public
   */
  ExportArn: string | undefined;

  /**
   * The maximum number of objects that are returned for the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The reference for the data export update.
 *
 * @public
 */
export interface ExecutionReference {
  /**
   * The ID for this specific execution.
   *
   * @public
   */
  ExecutionId: string | undefined;

  /**
   * The status of this specific execution.
   *
   * @public
   */
  ExecutionStatus: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * The list of executions.
   *
   * @public
   */
  Executions?: ExecutionReference[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTablesRequest {
  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that are returned for the request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The properties for the data export table.
 *
 * @public
 */
export interface TablePropertyDescription {
  /**
   * The name of the table.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The valid values for the table.
   *
   * @public
   */
  ValidValues?: string[] | undefined;

  /**
   * The default value for the table.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The description for the table.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The details for the data export table.
 *
 * @public
 */
export interface Table {
  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The description for the table.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The properties for the table.
   *
   * @public
   */
  TableProperties?: TablePropertyDescription[] | undefined;
}

/**
 * @public
 */
export interface ListTablesResponse {
  /**
   * The list of tables.
   *
   * @public
   */
  Tables?: Table[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The maximum number of objects that are returned for the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An optional list of tags to associate with the specified export. Each tag consists of a key and a value, and each key must be unique for the resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to associate with the resource. Each tag consists of a key and a value, and each key must be unique for the resource.
   *
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
   * The unique identifier for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys that are associated with the resource ARN.
   *
   * @public
   */
  ResourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
