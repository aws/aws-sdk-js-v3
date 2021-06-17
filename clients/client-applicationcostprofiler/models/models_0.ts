import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have permission to perform this action.</p>
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

export interface DeleteReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to delete.</p>
   */
  reportId: string | undefined;
}

export namespace DeleteReportDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReportDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteReportDefinitionResult {
  /**
   * <p>ID of the report that was deleted.</p>
   */
  reportId?: string;
}

export namespace DeleteReportDefinitionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteReportDefinitionResult): any => ({
    ...obj,
  });
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
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
 * <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
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
 * <p>The input fails to satisfy the constraints for the API.</p>
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

export interface GetReportDefinitionRequest {
  /**
   * <p>ID of the report to retrieve.</p>
   */
  reportId: string | undefined;
}

export namespace GetReportDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReportDefinitionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler
 *       reports are generated and then written to.</p>
 */
export interface S3Location {
  /**
   * <p>Name of the S3 bucket.</p>
   */
  bucket: string | undefined;

  /**
   * <p>Prefix for the location to write to.</p>
   */
  prefix: string | undefined;
}

export namespace S3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
}

export enum Format {
  CSV = "CSV",
  PARQUET = "PARQUET",
}

export enum ReportFrequency {
  ALL = "ALL",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
}

export interface GetReportDefinitionResult {
  /**
   * <p>ID of the report retrieved.</p>
   */
  reportId: string | undefined;

  /**
   * <p>Description of the report.</p>
   */
  reportDescription: string | undefined;

  /**
   * <p>Cadence used to generate the report.</p>
   */
  reportFrequency: ReportFrequency | string | undefined;

  /**
   * <p>Format of the generated report.</p>
   */
  format: Format | string | undefined;

  /**
   * <p>Amazon Simple Storage Service (Amazon S3) location where the report is uploaded.</p>
   */
  destinationS3Location: S3Location | undefined;

  /**
   * <p>Timestamp (milliseconds) when this report definition was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp (milliseconds) when this report definition was last updated.</p>
   */
  lastUpdated: Date | undefined;
}

export namespace GetReportDefinitionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetReportDefinitionResult): any => ({
    ...obj,
  });
}

export enum S3BucketRegion {
  AF_SOUTH_1 = "af-south-1",
  AP_EAST_1 = "ap-east-1",
  EU_SOUTH_1 = "eu-south-1",
  ME_SOUTH_1 = "me-south-1",
}

/**
 * <p>Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read
 *       from.</p>
 */
export interface SourceS3Location {
  /**
   * <p>Name of the bucket.</p>
   */
  bucket: string | undefined;

  /**
   * <p>Key of the object.</p>
   */
  key: string | undefined;

  /**
   * <p>Region of the bucket. Only required for Regions that are disabled by default.
   *         For more infomration about Regions that are disabled by default, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">
   *           Enabling a Region</a> in the <i>AWS General Reference guide</i>.</p>
   */
  region?: S3BucketRegion | string;
}

export namespace SourceS3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceS3Location): any => ({
    ...obj,
  });
}

export interface ImportApplicationUsageRequest {
  /**
   * <p>Amazon S3 location to import application usage data from.</p>
   */
  sourceS3Location: SourceS3Location | undefined;
}

export namespace ImportApplicationUsageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportApplicationUsageRequest): any => ({
    ...obj,
  });
}

export interface ImportApplicationUsageResult {
  /**
   * <p>ID of the import request.</p>
   */
  importId: string | undefined;
}

export namespace ImportApplicationUsageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportApplicationUsageResult): any => ({
    ...obj,
  });
}

export interface ListReportDefinitionsRequest {
  /**
   * <p>The token value from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

export namespace ListReportDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReportDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of a report in AWS Application Cost Profiler.</p>
 */
export interface ReportDefinition {
  /**
   * <p>The ID of the report.</p>
   */
  reportId?: string;

  /**
   * <p>Description of the report</p>
   */
  reportDescription?: string;

  /**
   * <p>The cadence at which the report is generated.</p>
   */
  reportFrequency?: ReportFrequency | string;

  /**
   * <p>The format used for the generated reports.</p>
   */
  format?: Format | string;

  /**
   * <p>The location in Amazon Simple Storage Service (Amazon S3) the reports should be saved to.</p>
   */
  destinationS3Location?: S3Location;

  /**
   * <p>Timestamp (milliseconds) when this report definition was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Timestamp (milliseconds) when this report definition was last updated.</p>
   */
  lastUpdatedAt?: Date;
}

export namespace ReportDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReportDefinition): any => ({
    ...obj,
  });
}

export interface ListReportDefinitionsResult {
  /**
   * <p>The retrieved reports.</p>
   */
  reportDefinitions?: ReportDefinition[];

  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListReportDefinitionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReportDefinitionsResult): any => ({
    ...obj,
  });
}

export interface PutReportDefinitionRequest {
  /**
   * <p>Required. ID of the report. You can choose any valid string matching the pattern for the
   *       ID.</p>
   */
  reportId: string | undefined;

  /**
   * <p>Required. Description of the report.</p>
   */
  reportDescription: string | undefined;

  /**
   * <p>Required. The cadence to generate the report.</p>
   */
  reportFrequency: ReportFrequency | string | undefined;

  /**
   * <p>Required. The format to use for the generated report.</p>
   */
  format: Format | string | undefined;

  /**
   * <p>Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the
   *       report.</p>
   */
  destinationS3Location: S3Location | undefined;
}

export namespace PutReportDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutReportDefinitionRequest): any => ({
    ...obj,
  });
}

export interface PutReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   */
  reportId?: string;
}

export namespace PutReportDefinitionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutReportDefinitionResult): any => ({
    ...obj,
  });
}

/**
 * <p>Your request exceeds one or more of the service quotas.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface UpdateReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to update.</p>
   */
  reportId: string | undefined;

  /**
   * <p>Required. Description of the report.</p>
   */
  reportDescription: string | undefined;

  /**
   * <p>Required. The cadence to generate the report.</p>
   */
  reportFrequency: ReportFrequency | string | undefined;

  /**
   * <p>Required. The format to use for the generated report.</p>
   */
  format: Format | string | undefined;

  /**
   * <p>Required. Amazon Simple Storage Service (Amazon S3) location where Application Cost Profiler uploads the
   *       report.</p>
   */
  destinationS3Location: S3Location | undefined;
}

export namespace UpdateReportDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReportDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   */
  reportId?: string;
}

export namespace UpdateReportDefinitionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReportDefinitionResult): any => ({
    ...obj,
  });
}
