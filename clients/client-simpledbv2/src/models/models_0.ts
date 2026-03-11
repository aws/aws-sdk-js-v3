// smithy-typescript generated code
import { ExportStatus, S3SseAlgorithm } from "./enums";

/**
 * Summary information about an export, including its unique identifier, current status,
 *      creation time, and the domain being exported.
 * @public
 */
export interface ExportSummary {
  /**
   * Unique ARN identifier of the export.
   * @public
   */
  exportArn: string | undefined;

  /**
   * The current state of the export. Current possible values include : PENDING - export request received,
   *          IN_PROGRESS - export is being processed, SUCCEEDED - export completed successfully, and FAILED - export encountered an error.
   * @public
   */
  exportStatus: ExportStatus | undefined;

  /**
   * Timestamp when the export request was received by the service
   * @public
   */
  requestedAt: Date | undefined;

  /**
   * The name of the domain for which the export was created.
   * @public
   */
  domainName: string | undefined;
}

/**
 * @public
 */
export interface GetExportRequest {
  /**
   * Unique ARN identifier of the export.
   * @public
   */
  exportArn: string | undefined;
}

/**
 * @public
 */
export interface GetExportResponse {
  /**
   * Unique ARN identifier of the export.
   * @public
   */
  exportArn: string | undefined;

  /**
   * The client token provided for this export.
   * @public
   */
  clientToken: string | undefined;

  /**
   * The current state of the export. Current possible values include : PENDING - export request received,
   *          IN_PROGRESS - export is being processed, SUCCEEDED - export completed successfully, and FAILED - export encountered an error.
   * @public
   */
  exportStatus: ExportStatus | undefined;

  /**
   * The name of the domain that was exported.
   * @public
   */
  domainName: string | undefined;

  /**
   * Timestamp when the export request was received by the service.
   * @public
   */
  requestedAt: Date | undefined;

  /**
   * The name of the S3 bucket for this export.
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The S3 key prefix provided in the corresponding StartDomainExport request.
   * @public
   */
  s3KeyPrefix?: string | undefined;

  /**
   * The S3 SSE encryption algorithm for this export.
   * @public
   */
  s3SseAlgorithm?: S3SseAlgorithm | undefined;

  /**
   * The KMS key ID for this export.
   * @public
   */
  s3SseKmsKeyId?: string | undefined;

  /**
   * The S3 bucket owner account ID for this export.
   * @public
   */
  s3BucketOwner?: string | undefined;

  /**
   * Failure code for the result of the failed export.
   * @public
   */
  failureCode?: string | undefined;

  /**
   * Export failure reason description.
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The name of the manifest summary file for the export.
   * @public
   */
  exportManifest?: string | undefined;

  /**
   * Total number of exported items.
   * @public
   */
  itemsCount?: number | undefined;

  /**
   * The timestamp indicating the cutoff point for data inclusion in the export.
   *     All data inserted or modified before this time will be present in the exported data.
   *     Data insertions or modifications after this timestamp may or may not be present in the export.
   * @public
   */
  exportDataCutoffTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListExportsRequest {
  /**
   * The name of the domain to filter exports. If not provided, exports for all the domains will be listed.
   * @public
   */
  domainName?: string | undefined;

  /**
   * The maximum number of exports to return in a single response.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token used to retrieve the next page of results. This token is obtained from
   *         the nextToken field in the previous ListExportsResponse. Leave empty for the first request.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsResponse {
  /**
   * List of export summaries containing export ARN, status, request timestamp, and associated domain name.
   * @public
   */
  exportSummaries: ExportSummary[] | undefined;

  /**
   * A pagination token indicating that more results are available. To retrieve the next page
   *         of results, provide this token in a subsequent ListExports request. If null or empty, there are no
   *         more results to retrieve.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDomainExportRequest {
  /**
   * Providing a ClientToken makes the call to StartDomainExport API idempotent,
   *     meaning that multiple identical calls have the same effect as one single call. A client token is valid for
   *     8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token
   *     is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours,
   *     or the result might not be idempotent. If you submit a request with the same client token but a change
   *     in other parameters within the 8-hour idempotency window, a ConflictException will be returned.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the domain to export.
   * @public
   */
  domainName: string | undefined;

  /**
   * The name of the S3 bucket where the domain data will be exported.
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The prefix string to be used to generate the S3 object keys for export artifacts.
   * @public
   */
  s3KeyPrefix?: string | undefined;

  /**
   * The server-side encryption algorithm to use for the exported data in S3.
   *      Valid values are: AES256 (SSE-S3) and KMS (SSE-KMS). If not specified, bucket's default encryption will apply.
   * @public
   */
  s3SseAlgorithm?: S3SseAlgorithm | undefined;

  /**
   * The KMS key ID to use for server-side encryption with AWS KMS-managed keys (SSE-KMS).
   *      This parameter is only expected with KMS as the S3 SSE algorithm.
   * @public
   */
  s3SseKmsKeyId?: string | undefined;

  /**
   * The ID of the AWS account that owns the bucket the export will be stored in.
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface StartDomainExportResponse {
  /**
   * The client token that was provided in the request.
   * @public
   */
  clientToken: string | undefined;

  /**
   * Unique ARN identifier of the export.
   * @public
   */
  exportArn: string | undefined;

  /**
   * Timestamp when the export request was received by the service.
   * @public
   */
  requestedAt: Date | undefined;
}
