// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ApplicationCostProfilerServiceException as __BaseException } from "./ApplicationCostProfilerServiceException";

/**
 * <p>You do not have permission to perform this action.</p>
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

export interface DeleteReportDefinitionRequest {
  /**
   * <p>Required. ID of the report to delete.</p>
   */
  reportId: string | undefined;
}

export interface DeleteReportDefinitionResult {
  /**
   * <p>ID of the report that was deleted.</p>
   */
  reportId?: string;
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
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
 * <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
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
 * <p>The input fails to satisfy the constraints for the API.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

export interface GetReportDefinitionRequest {
  /**
   * <p>ID of the report to retrieve.</p>
   */
  reportId: string | undefined;
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

export interface ImportApplicationUsageRequest {
  /**
   * <p>Amazon S3 location to import application usage data from.</p>
   */
  sourceS3Location: SourceS3Location | undefined;
}

export interface ImportApplicationUsageResult {
  /**
   * <p>ID of the import request.</p>
   */
  importId: string | undefined;
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

export interface PutReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   */
  reportId?: string;
}

/**
 * <p>Your request exceeds one or more of the service quotas.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
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

export interface UpdateReportDefinitionResult {
  /**
   * <p>ID of the report.</p>
   */
  reportId?: string;
}

/**
 * @internal
 */
export const DeleteReportDefinitionRequestFilterSensitiveLog = (obj: DeleteReportDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteReportDefinitionResultFilterSensitiveLog = (obj: DeleteReportDefinitionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReportDefinitionRequestFilterSensitiveLog = (obj: GetReportDefinitionRequest): any => ({
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
export const GetReportDefinitionResultFilterSensitiveLog = (obj: GetReportDefinitionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceS3LocationFilterSensitiveLog = (obj: SourceS3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportApplicationUsageRequestFilterSensitiveLog = (obj: ImportApplicationUsageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportApplicationUsageResultFilterSensitiveLog = (obj: ImportApplicationUsageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReportDefinitionsRequestFilterSensitiveLog = (obj: ListReportDefinitionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportDefinitionFilterSensitiveLog = (obj: ReportDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReportDefinitionsResultFilterSensitiveLog = (obj: ListReportDefinitionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutReportDefinitionRequestFilterSensitiveLog = (obj: PutReportDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutReportDefinitionResultFilterSensitiveLog = (obj: PutReportDefinitionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReportDefinitionRequestFilterSensitiveLog = (obj: UpdateReportDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReportDefinitionResultFilterSensitiveLog = (obj: UpdateReportDefinitionResult): any => ({
  ...obj,
});
