// smithy-typescript generated code
import type { Format, ReportFrequency, S3BucketRegion } from "./enums";

/**
 * @public
 */
export interface DeleteReportDefinitionRequest {
  /**
   * Required. ID of the report to delete.
   *
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReportDefinitionResult {
  /**
   * ID of the report that was deleted.
   *
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 */
export interface GetReportDefinitionRequest {
  /**
   * ID of the report to retrieve.
   *
   * @public
   */
  reportId: string | undefined;
}

/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
 *
 * @public
 */
export interface S3Location {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * Prefix for the location to write to.
   *
   * @public
   */
  prefix: string | undefined;
}

/**
 * @public
 */
export interface GetReportDefinitionResult {
  /**
   * ID of the report retrieved.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Description of the report.
   *
   * @public
   */
  reportDescription: string | undefined;

  /**
   * Cadence used to generate the report.
   *
   * @public
   */
  reportFrequency: ReportFrequency | undefined;

  /**
   * Format of the generated report.
   *
   * @public
   */
  format: Format | undefined;

  /**
   * Amazon Simple Storage Service (Amazon S3) location where the report is uploaded.
   *
   * @public
   */
  destinationS3Location: S3Location | undefined;

  /**
   * Timestamp (milliseconds) when this report definition was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp (milliseconds) when this report definition was last updated.
   *
   * @public
   */
  lastUpdated: Date | undefined;
}

/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
 *
 * @public
 */
export interface SourceS3Location {
  /**
   * Name of the bucket.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * Key of the object.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Region of the bucket. Only required for Regions that are disabled by default. For more infomration about Regions that are disabled by default, see [Enabling a Region](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable) in the *AWS General Reference guide*.
   *
   * @public
   */
  region?: S3BucketRegion | undefined;
}

/**
 * @public
 */
export interface ImportApplicationUsageRequest {
  /**
   * Amazon S3 location to import application usage data from.
   *
   * @public
   */
  sourceS3Location: SourceS3Location | undefined;
}

/**
 * @public
 */
export interface ImportApplicationUsageResult {
  /**
   * ID of the import request.
   *
   * @public
   */
  importId: string | undefined;
}

/**
 * @public
 */
export interface ListReportDefinitionsRequest {
  /**
   * The token value from a previous call to access the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The configuration of a report in AWS Application Cost Profiler.
 *
 * @public
 */
export interface ReportDefinition {
  /**
   * The ID of the report.
   *
   * @public
   */
  reportId?: string | undefined;

  /**
   * Description of the report
   *
   * @public
   */
  reportDescription?: string | undefined;

  /**
   * The cadence at which the report is generated.
   *
   * @public
   */
  reportFrequency?: ReportFrequency | undefined;

  /**
   * The format used for the generated reports.
   *
   * @public
   */
  format?: Format | undefined;

  /**
   * The location in Amazon Simple Storage Service (Amazon S3) the reports should be saved to.
   *
   * @public
   */
  destinationS3Location?: S3Location | undefined;

  /**
   * Timestamp (milliseconds) when this report definition was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Timestamp (milliseconds) when this report definition was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListReportDefinitionsResult {
  /**
   * The retrieved reports.
   *
   * @public
   */
  reportDefinitions?: ReportDefinition[] | undefined;

  /**
   * The value of the next token, if it exists. Null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutReportDefinitionRequest {
  /**
   * Required. ID of the report. You can choose any valid string matching the pattern for the ID.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Required. Description of the report.
   *
   * @public
   */
  reportDescription: string | undefined;

  /**
   * Required. The cadence to generate the report.
   *
   * @public
   */
  reportFrequency: ReportFrequency | undefined;

  /**
   * Required. The format to use for the generated report.
   *
   * @public
   */
  format: Format | undefined;

  /**
   * Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the report.
   *
   * @public
   */
  destinationS3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface PutReportDefinitionResult {
  /**
   * ID of the report.
   *
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReportDefinitionRequest {
  /**
   * Required. ID of the report to update.
   *
   * @public
   */
  reportId: string | undefined;

  /**
   * Required. Description of the report.
   *
   * @public
   */
  reportDescription: string | undefined;

  /**
   * Required. The cadence to generate the report.
   *
   * @public
   */
  reportFrequency: ReportFrequency | undefined;

  /**
   * Required. The format to use for the generated report.
   *
   * @public
   */
  format: Format | undefined;

  /**
   * Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the report.
   *
   * @public
   */
  destinationS3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface UpdateReportDefinitionResult {
  /**
   * ID of the report.
   *
   * @public
   */
  reportId?: string | undefined;
}
