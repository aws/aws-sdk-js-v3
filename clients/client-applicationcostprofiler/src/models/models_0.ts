// smithy-typescript generated code
import { Format, ReportFrequency, S3BucketRegion } from "./enums";

/**
 * @public
 */
export interface DeleteReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to delete.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface DeleteReportDefinitionResult {
  /**
   * <p>ID of the report that was deleted.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 */
export interface GetReportDefinitionRequest {
  /**
   * <p>ID of the report to retrieve.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * <p>Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler
 *       reports are generated and then written to.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>Name of the S3 bucket.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>Prefix for the location to write to.</p>
   * @public
   */
  prefix: string | undefined;
}

/**
 * @public
 */
export interface GetReportDefinitionResult {
  /**
   * <p>ID of the report retrieved.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Description of the report.</p>
   * @public
   */
  reportDescription: string | undefined;

  /**
   * <p>Cadence used to generate the report.</p>
   * @public
   */
  reportFrequency: ReportFrequency | undefined;

  /**
   * <p>Format of the generated report.</p>
   * @public
   */
  format: Format | undefined;

  /**
   * <p>Amazon Simple Storage Service (Amazon S3) location where the report is uploaded.</p>
   * @public
   */
  destinationS3Location: S3Location | undefined;

  /**
   * <p>Timestamp (milliseconds) when this report definition was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp (milliseconds) when this report definition was last updated.</p>
   * @public
   */
  lastUpdated: Date | undefined;
}

/**
 * <p>Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read
 *       from.</p>
 * @public
 */
export interface SourceS3Location {
  /**
   * <p>Name of the bucket.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>Key of the object.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Region of the bucket. Only required for Regions that are disabled by default.
   *         For more infomration about Regions that are disabled by default, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">
   *           Enabling a Region</a> in the <i>AWS General Reference guide</i>.</p>
   * @public
   */
  region?: S3BucketRegion | undefined;
}

/**
 * @public
 */
export interface ImportApplicationUsageRequest {
  /**
   * <p>Amazon S3 location to import application usage data from.</p>
   * @public
   */
  sourceS3Location: SourceS3Location | undefined;
}

/**
 * @public
 */
export interface ImportApplicationUsageResult {
  /**
   * <p>ID of the import request.</p>
   * @public
   */
  importId: string | undefined;
}

/**
 * @public
 */
export interface ListReportDefinitionsRequest {
  /**
   * <p>The token value from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The configuration of a report in AWS Application Cost Profiler.</p>
 * @public
 */
export interface ReportDefinition {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  reportId?: string | undefined;

  /**
   * <p>Description of the report</p>
   * @public
   */
  reportDescription?: string | undefined;

  /**
   * <p>The cadence at which the report is generated.</p>
   * @public
   */
  reportFrequency?: ReportFrequency | undefined;

  /**
   * <p>The format used for the generated reports.</p>
   * @public
   */
  format?: Format | undefined;

  /**
   * <p>The location in Amazon Simple Storage Service (Amazon S3) the reports should be saved to.</p>
   * @public
   */
  destinationS3Location?: S3Location | undefined;

  /**
   * <p>Timestamp (milliseconds) when this report definition was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Timestamp (milliseconds) when this report definition was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListReportDefinitionsResult {
  /**
   * <p>The retrieved reports.</p>
   * @public
   */
  reportDefinitions?: ReportDefinition[] | undefined;

  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutReportDefinitionRequest {
  /**
   * <p>Required. ID of the report. You can choose any valid string matching the pattern for the
   *       ID.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Required. Description of the report.</p>
   * @public
   */
  reportDescription: string | undefined;

  /**
   * <p>Required. The cadence to generate the report.</p>
   * @public
   */
  reportFrequency: ReportFrequency | undefined;

  /**
   * <p>Required. The format to use for the generated report.</p>
   * @public
   */
  format: Format | undefined;

  /**
   * <p>Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the
   *       report.</p>
   * @public
   */
  destinationS3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface PutReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to update.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Required. Description of the report.</p>
   * @public
   */
  reportDescription: string | undefined;

  /**
   * <p>Required. The cadence to generate the report.</p>
   * @public
   */
  reportFrequency: ReportFrequency | undefined;

  /**
   * <p>Required. The format to use for the generated report.</p>
   * @public
   */
  format: Format | undefined;

  /**
   * <p>Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the
   *       report.</p>
   * @public
   */
  destinationS3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface UpdateReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   * @public
   */
  reportId?: string | undefined;
}
