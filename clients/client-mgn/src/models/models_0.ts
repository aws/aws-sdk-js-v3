// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MgnServiceException as __BaseException } from "./MgnServiceException";

/**
 * @public
 * <p>Operating denied due to a file permission or access check error.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * @public
 * @enum
 */
export const ActionCategory = {
  BACKUP: "BACKUP",
  CONFIGURATION: "CONFIGURATION",
  DISASTER_RECOVERY: "DISASTER_RECOVERY",
  LICENSE_AND_SUBSCRIPTION: "LICENSE_AND_SUBSCRIPTION",
  NETWORKING: "NETWORKING",
  OBSERVABILITY: "OBSERVABILITY",
  OPERATING_SYSTEM: "OPERATING_SYSTEM",
  OTHER: "OTHER",
  SECURITY: "SECURITY",
  VALIDATION: "VALIDATION",
} as const;

/**
 * @public
 */
export type ActionCategory = (typeof ActionCategory)[keyof typeof ActionCategory];

/**
 * @public
 * @enum
 */
export const ApplicationHealthStatus = {
  ERROR: "ERROR",
  HEALTHY: "HEALTHY",
  LAGGING: "LAGGING",
} as const;

/**
 * @public
 */
export type ApplicationHealthStatus = (typeof ApplicationHealthStatus)[keyof typeof ApplicationHealthStatus];

/**
 * @public
 * @enum
 */
export const ApplicationProgressStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ApplicationProgressStatus = (typeof ApplicationProgressStatus)[keyof typeof ApplicationProgressStatus];

/**
 * @public
 * <p>Application aggregated status.</p>
 */
export interface ApplicationAggregatedStatus {
  /**
   * <p>Application aggregated status last update dateTime.</p>
   */
  lastUpdateDateTime?: string;

  /**
   * <p>Application aggregated status health status.</p>
   */
  healthStatus?: ApplicationHealthStatus | string;

  /**
   * <p>Application aggregated status progress status.</p>
   */
  progressStatus?: ApplicationProgressStatus | string;

  /**
   * <p>Application aggregated status total source servers amount.</p>
   */
  totalSourceServers?: number;
}

/**
 * @public
 */
export interface Application {
  /**
   * <p>Application ID.</p>
   */
  applicationID?: string;

  /**
   * <p>Application ARN.</p>
   */
  arn?: string;

  /**
   * <p>Application name.</p>
   */
  name?: string;

  /**
   * <p>Application description.</p>
   */
  description?: string;

  /**
   * <p>Application archival status.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Application aggregated status.</p>
   */
  applicationAggregatedStatus?: ApplicationAggregatedStatus;

  /**
   * <p>Application creation dateTime.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Application last modified dateTime.</p>
   */
  lastModifiedDateTime?: string;

  /**
   * <p>Application tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Application wave ID.</p>
   */
  waveID?: string;
}

/**
 * @public
 */
export interface ArchiveApplicationRequest {
  /**
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * <p>Error details.</p>
 */
export interface ErrorDetails {
  /**
   * <p>Error details message.</p>
   */
  message?: string;

  /**
   * <p>Error details code.</p>
   */
  code?: string;

  /**
   * <p>Error details resourceId.</p>
   */
  resourceId?: string;

  /**
   * <p>Error details resourceType.</p>
   */
  resourceType?: string;
}

/**
 * @public
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>A conflict occurred when prompting for the Resource ID.</p>
   */
  resourceId?: string;

  /**
   * <p>A conflict occurred when prompting for resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>Conflict Exception specific errors.</p>
   */
  errors?: ErrorDetails[];

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.errors = opts.errors;
  }
}

/**
 * @public
 * <p>Resource not found exception.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Resource ID not found error.</p>
   */
  resourceId?: string;

  /**
   * <p>Resource type not found error.</p>
   */
  resourceType?: string;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>The request could not be completed because its exceeded the service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Exceeded the service quota resource ID.</p>
   */
  resourceId?: string;

  /**
   * <p>Exceeded the service quota resource type.</p>
   */
  resourceType?: string;

  /**
   * <p>Exceeded the service quota service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Exceeded the service quota code.</p>
   */
  quotaCode?: string;

  /**
   * <p>Exceeded the service quota value.</p>
   */
  quotaValue?: number;

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
    this.code = opts.code;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.quotaValue = opts.quotaValue;
  }
}

/**
 * @public
 * <p>Uninitialized account exception.</p>
 */
export class UninitializedAccountException extends __BaseException {
  readonly name: "UninitializedAccountException" = "UninitializedAccountException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UninitializedAccountException, __BaseException>) {
    super({
      name: "UninitializedAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UninitializedAccountException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export interface AssociateSourceServersRequest {
  /**
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * <p>Source server IDs list.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface AssociateSourceServersResponse {}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>Application name.</p>
   */
  name: string | undefined;

  /**
   * <p>Application description.</p>
   */
  description?: string;

  /**
   * <p>Application tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DisassociateSourceServersRequest {
  /**
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * <p>Source server IDs list.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DisassociateSourceServersResponse {}

/**
 * @public
 * <p>Applications list filters.</p>
 */
export interface ListApplicationsRequestFilters {
  /**
   * <p>Filter applications list by application ID.</p>
   */
  applicationIDs?: string[];

  /**
   * <p>Filter applications list by archival status.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Filter applications list by wave ID.</p>
   */
  waveIDs?: string[];
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>Applications list filters.</p>
   */
  filters?: ListApplicationsRequestFilters;

  /**
   * <p>Maximum results to return when listing applications.</p>
   */
  maxResults?: number;

  /**
   * <p>Request next token.</p>
   */
  nextToken?: string;

  /**
   * <p>Applications list Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Applications list.</p>
   */
  items?: Application[];

  /**
   * <p>Response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnarchiveApplicationRequest {
  /**
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * <p>Application name.</p>
   */
  name?: string;

  /**
   * <p>Application description.</p>
   */
  description?: string;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * <p>List export errors request.</p>
 */
export interface ListExportErrorsRequest {
  /**
   * <p>List export errors request export id.</p>
   */
  exportID: string | undefined;

  /**
   * <p>List export errors request max results.</p>
   */
  maxResults?: number;

  /**
   * <p>List export errors request next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Export errors data.</p>
 */
export interface ExportErrorData {
  /**
   * <p>Export errors data raw error.</p>
   */
  rawError?: string;
}

/**
 * @public
 * <p>Export task error.</p>
 */
export interface ExportTaskError {
  /**
   * <p>Export task error datetime.</p>
   */
  errorDateTime?: string;

  /**
   * <p>Export task error data.</p>
   */
  errorData?: ExportErrorData;
}

/**
 * @public
 * <p>List export errors response.</p>
 */
export interface ListExportErrorsResponse {
  /**
   * <p>List export errors response items.</p>
   */
  items?: ExportTaskError[];

  /**
   * <p>List export errors response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Validate exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   */
  name?: string;

  /**
   * <p>Validate exception field message.</p>
   */
  message?: string;
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
 * <p>Validate exception.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Validate exception reason.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>Validate exception field list.</p>
   */
  fieldList?: ValidationExceptionField[];

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
    this.code = opts.code;
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * <p>List exports request filters.</p>
 */
export interface ListExportsRequestFilters {
  /**
   * <p>List exports request filters export ids.</p>
   */
  exportIDs?: string[];
}

/**
 * @public
 * <p>List export request.</p>
 */
export interface ListExportsRequest {
  /**
   * <p>List exports request filters.</p>
   */
  filters?: ListExportsRequestFilters;

  /**
   * <p>List export request max results.</p>
   */
  maxResults?: number;

  /**
   * <p>List export request next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  STARTED: "STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 * <p>Export task summary.</p>
 */
export interface ExportTaskSummary {
  /**
   * <p>Export task summary servers count.</p>
   */
  serversCount?: number;

  /**
   * <p>Export task summary applications count.</p>
   */
  applicationsCount?: number;

  /**
   * <p>Export task summary waves count.</p>
   */
  wavesCount?: number;
}

/**
 * @public
 * <p>Export task.</p>
 */
export interface ExportTask {
  /**
   * <p>Export task id.</p>
   */
  exportID?: string;

  /**
   * <p>Export task s3 bucket.</p>
   */
  s3Bucket?: string;

  /**
   * <p>Export task s3 key.</p>
   */
  s3Key?: string;

  /**
   * <p>Export task s3 bucket owner.</p>
   */
  s3BucketOwner?: string;

  /**
   * <p>Export task creation datetime.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Export task end datetime.</p>
   */
  endDateTime?: string;

  /**
   * <p>Export task status.</p>
   */
  status?: ExportStatus | string;

  /**
   * <p>Export task progress percentage.</p>
   */
  progressPercentage?: number;

  /**
   * <p>Export task summary.</p>
   */
  summary?: ExportTaskSummary;
}

/**
 * @public
 * <p>List export response.</p>
 */
export interface ListExportsResponse {
  /**
   * <p>List export response items.</p>
   */
  items?: ExportTask[];

  /**
   * <p>List export response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Start export request.</p>
 */
export interface StartExportRequest {
  /**
   * <p>Start export request s3 bucket.</p>
   */
  s3Bucket: string | undefined;

  /**
   * <p>Start export request s3key.</p>
   */
  s3Key: string | undefined;

  /**
   * <p>Start export request s3 bucket owner.</p>
   */
  s3BucketOwner?: string;
}

/**
 * @public
 * <p>Start export response.</p>
 */
export interface StartExportResponse {
  /**
   * <p>Start export response export task.</p>
   */
  exportTask?: ExportTask;
}

/**
 * @public
 * <p>List import errors request.</p>
 */
export interface ListImportErrorsRequest {
  /**
   * <p>List import errors request import id.</p>
   */
  importID: string | undefined;

  /**
   * <p>List import errors request max results.</p>
   */
  maxResults?: number;

  /**
   * <p>List import errors request next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Import error data.</p>
 */
export interface ImportErrorData {
  /**
   * <p>Import error data source server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Import error data application ID.</p>
   */
  applicationID?: string;

  /**
   * <p>Import error data wave id.</p>
   */
  waveID?: string;

  /**
   * <p>Import error data ec2 LaunchTemplate ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Import error data row number.</p>
   */
  rowNumber?: number;

  /**
   * <p>Import error data raw error.</p>
   */
  rawError?: string;

  /**
   * <p>Import error data source account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * @enum
 */
export const ImportErrorType = {
  PROCESSING_ERROR: "PROCESSING_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type ImportErrorType = (typeof ImportErrorType)[keyof typeof ImportErrorType];

/**
 * @public
 * <p>Import task error.</p>
 */
export interface ImportTaskError {
  /**
   * <p>Import task error datetime.</p>
   */
  errorDateTime?: string;

  /**
   * <p>Import task error type.</p>
   */
  errorType?: ImportErrorType | string;

  /**
   * <p>Import task error data.</p>
   */
  errorData?: ImportErrorData;
}

/**
 * @public
 * <p>List imports errors response.</p>
 */
export interface ListImportErrorsResponse {
  /**
   * <p>List imports errors response items.</p>
   */
  items?: ImportTaskError[];

  /**
   * <p>List imports errors response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>List imports request filters.</p>
 */
export interface ListImportsRequestFilters {
  /**
   * <p>List imports request filters import IDs.</p>
   */
  importIDs?: string[];
}

/**
 * @public
 * <p>List imports request.</p>
 */
export interface ListImportsRequest {
  /**
   * <p>List imports request filters.</p>
   */
  filters?: ListImportsRequestFilters;

  /**
   * <p>List imports request max results.</p>
   */
  maxResults?: number;

  /**
   * <p>List imports request next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>S3 bucket source.</p>
 */
export interface S3BucketSource {
  /**
   * <p>S3 bucket source s3 bucket.</p>
   */
  s3Bucket: string | undefined;

  /**
   * <p>S3 bucket source s3 key.</p>
   */
  s3Key: string | undefined;

  /**
   * <p>S3 bucket source s3 bucket owner.</p>
   */
  s3BucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  STARTED: "STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * <p>Import task summary applications.</p>
 */
export interface ImportTaskSummaryApplications {
  /**
   * <p>Import task summary applications created count.</p>
   */
  createdCount?: number;

  /**
   * <p>Import task summary applications modified count.</p>
   */
  modifiedCount?: number;
}

/**
 * @public
 * <p>Import task summary servers.</p>
 */
export interface ImportTaskSummaryServers {
  /**
   * <p>Import task summary servers created count.</p>
   */
  createdCount?: number;

  /**
   * <p>Import task summary servers modified count.</p>
   */
  modifiedCount?: number;
}

/**
 * @public
 * <p>Import task summery waves.</p>
 */
export interface ImportTaskSummaryWaves {
  /**
   * <p>Import task summery waves created count.</p>
   */
  createdCount?: number;

  /**
   * <p>Import task summery waves modified count.</p>
   */
  modifiedCount?: number;
}

/**
 * @public
 * <p>Import task summary.</p>
 */
export interface ImportTaskSummary {
  /**
   * <p>Import task summary waves.</p>
   */
  waves?: ImportTaskSummaryWaves;

  /**
   * <p>Import task summary applications.</p>
   */
  applications?: ImportTaskSummaryApplications;

  /**
   * <p>Import task summary servers.</p>
   */
  servers?: ImportTaskSummaryServers;
}

/**
 * @public
 * <p>Import task.</p>
 */
export interface ImportTask {
  /**
   * <p>Import task id.</p>
   */
  importID?: string;

  /**
   * <p>Import task s3 bucket source.</p>
   */
  s3BucketSource?: S3BucketSource;

  /**
   * <p>Import task creation datetime.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Import task end datetime.</p>
   */
  endDateTime?: string;

  /**
   * <p>Import task status.</p>
   */
  status?: ImportStatus | string;

  /**
   * <p>Import task progress percentage.</p>
   */
  progressPercentage?: number;

  /**
   * <p>Import task summary.</p>
   */
  summary?: ImportTaskSummary;
}

/**
 * @public
 * <p>List import response.</p>
 */
export interface ListImportsResponse {
  /**
   * <p>List import response items.</p>
   */
  items?: ImportTask[];

  /**
   * <p>List import response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Start import request.</p>
 */
export interface StartImportRequest {
  /**
   * <p>Start import request client token.</p>
   */
  clientToken?: string;

  /**
   * <p>Start import request s3 bucket source.</p>
   */
  s3BucketSource: S3BucketSource | undefined;
}

/**
 * @public
 * <p>Start import response.</p>
 */
export interface StartImportResponse {
  /**
   * <p>Start import response import task.</p>
   */
  importTask?: ImportTask;
}

/**
 * @public
 */
export interface InitializeServiceRequest {}

/**
 * @public
 */
export interface InitializeServiceResponse {}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>Request to delete Job from service by Job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>Request to delete Job from service by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteJobResponse {}

/**
 * @public
 */
export interface DescribeJobLogItemsRequest {
  /**
   * <p>Request to describe Job log job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>Request to describe Job log item maximum results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Job log next token.</p>
   */
  nextToken?: string;

  /**
   * <p>Request to describe Job log Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * @enum
 */
export const JobLogEvent = {
  CLEANUP_END: "CLEANUP_END",
  CLEANUP_FAIL: "CLEANUP_FAIL",
  CLEANUP_START: "CLEANUP_START",
  CONVERSION_END: "CONVERSION_END",
  CONVERSION_FAIL: "CONVERSION_FAIL",
  CONVERSION_START: "CONVERSION_START",
  JOB_CANCEL: "JOB_CANCEL",
  JOB_END: "JOB_END",
  JOB_START: "JOB_START",
  LAUNCH_FAILED: "LAUNCH_FAILED",
  LAUNCH_START: "LAUNCH_START",
  SERVER_SKIPPED: "SERVER_SKIPPED",
  SNAPSHOT_END: "SNAPSHOT_END",
  SNAPSHOT_FAIL: "SNAPSHOT_FAIL",
  SNAPSHOT_START: "SNAPSHOT_START",
  USING_PREVIOUS_SNAPSHOT: "USING_PREVIOUS_SNAPSHOT",
} as const;

/**
 * @public
 */
export type JobLogEvent = (typeof JobLogEvent)[keyof typeof JobLogEvent];

/**
 * @public
 * <p>Job log data</p>
 */
export interface JobLogEventData {
  /**
   * <p>Job Event Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Job Event conversion Server ID.</p>
   */
  conversionServerID?: string;

  /**
   * <p>Job Event Target instance ID.</p>
   */
  targetInstanceID?: string;

  /**
   * <p>Job error.</p>
   */
  rawError?: string;
}

/**
 * @public
 * <p>Job log.</p>
 */
export interface JobLog {
  /**
   * <p>Job log event date and time.</p>
   */
  logDateTime?: string;

  /**
   * <p>Job log event.</p>
   */
  event?: JobLogEvent | string;

  /**
   * <p>Job event data</p>
   */
  eventData?: JobLogEventData;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * <p>Request to describe Job log response items.</p>
   */
  items?: JobLog[];

  /**
   * <p>Request to describe Job log response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Request to describe Job log filters.</p>
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>Request to describe Job log filters by job ID.</p>
   */
  jobIDs?: string[];

  /**
   * <p>Request to describe Job log filters by date.</p>
   */
  fromDate?: string;

  /**
   * <p>Request to describe job log items by last date.</p>
   */
  toDate?: string;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * <p>Request to describe Job log filters.</p>
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * <p>Request to describe job log items by max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe job log items by next token.</p>
   */
  nextToken?: string;

  /**
   * <p>Request to describe job log items by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * @enum
 */
export const InitiatedBy = {
  DIAGNOSTIC: "DIAGNOSTIC",
  START_CUTOVER: "START_CUTOVER",
  START_TEST: "START_TEST",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type InitiatedBy = (typeof InitiatedBy)[keyof typeof InitiatedBy];

/**
 * @public
 * @enum
 */
export const LaunchStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  LAUNCHED: "LAUNCHED",
  PENDING: "PENDING",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type LaunchStatus = (typeof LaunchStatus)[keyof typeof LaunchStatus];

/**
 * @public
 * @enum
 */
export const PostLaunchActionExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type PostLaunchActionExecutionStatus =
  (typeof PostLaunchActionExecutionStatus)[keyof typeof PostLaunchActionExecutionStatus];

/**
 * @public
 * <p>AWS Systems Manager Document external parameter.</p>
 */
export type SsmExternalParameter = SsmExternalParameter.DynamicPathMember | SsmExternalParameter.$UnknownMember;

/**
 * @public
 */
export namespace SsmExternalParameter {
  /**
   * <p>AWS Systems Manager Document external parameters dynamic path.</p>
   */
  export interface DynamicPathMember {
    dynamicPath: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    dynamicPath?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    dynamicPath: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SsmExternalParameter, visitor: Visitor<T>): T => {
    if (value.dynamicPath !== undefined) return visitor.dynamicPath(value.dynamicPath);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const SsmParameterStoreParameterType = {
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type SsmParameterStoreParameterType =
  (typeof SsmParameterStoreParameterType)[keyof typeof SsmParameterStoreParameterType];

/**
 * @public
 * <p>AWS Systems Manager Parameter Store parameter.</p>
 */
export interface SsmParameterStoreParameter {
  /**
   * <p>AWS Systems Manager Parameter Store parameter type.</p>
   */
  parameterType: SsmParameterStoreParameterType | string | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   */
  parameterName: string | undefined;
}

/**
 * @public
 * <p>AWS Systems Manager Document.</p>
 */
export interface SsmDocument {
  /**
   * <p>User-friendly name for the AWS Systems Manager Document.</p>
   */
  actionName: string | undefined;

  /**
   * <p>AWS Systems Manager Document name or full ARN.</p>
   */
  ssmDocumentName: string | undefined;

  /**
   * <p>AWS Systems Manager Document timeout seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>If true, Cutover will not be enabled if the document has failed.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>AWS Systems Manager Document parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>AWS Systems Manager Document external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;
}

/**
 * @public
 * @enum
 */
export const SsmDocumentType = {
  AUTOMATION: "AUTOMATION",
  COMMAND: "COMMAND",
} as const;

/**
 * @public
 */
export type SsmDocumentType = (typeof SsmDocumentType)[keyof typeof SsmDocumentType];

/**
 * @public
 * <p>Launch Status of the Job Post Launch Actions.</p>
 */
export interface JobPostLaunchActionsLaunchStatus {
  /**
   * <p>AWS Systems Manager's Document of the of the Job Post Launch Actions.</p>
   */
  ssmDocument?: SsmDocument;

  /**
   * <p>AWS Systems Manager Document type.</p>
   */
  ssmDocumentType?: SsmDocumentType | string;

  /**
   * <p>AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.</p>
   */
  executionID?: string;

  /**
   * <p>AWS Systems Manager Document's execution status.</p>
   */
  executionStatus?: PostLaunchActionExecutionStatus | string;

  /**
   * <p>AWS Systems Manager Document's failure reason.</p>
   */
  failureReason?: string;
}

/**
 * @public
 * <p>Status of the Post Launch Actions running on the Test or Cutover instance.</p>
 */
export interface PostLaunchActionsStatus {
  /**
   * <p>Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.</p>
   */
  ssmAgentDiscoveryDatetime?: string;

  /**
   * <p>List of Post Launch Action status.</p>
   */
  postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[];
}

/**
 * @public
 * <p>Server participating in Job.</p>
 */
export interface ParticipatingServer {
  /**
   * <p>Participating server Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Participating server launch status.</p>
   */
  launchStatus?: LaunchStatus | string;

  /**
   * <p>Participating server's launched ec2 instance ID.</p>
   */
  launchedEc2InstanceID?: string;

  /**
   * <p>Participating server's Post Launch Actions Status.</p>
   */
  postLaunchActionsStatus?: PostLaunchActionsStatus;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  STARTED: "STARTED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const JobType = {
  LAUNCH: "LAUNCH",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * <p>Job.</p>
 */
export interface Job {
  /**
   * <p>Job ID.</p>
   */
  jobID: string | undefined;

  /**
   * <p>the ARN of the specific Job.</p>
   */
  arn?: string;

  /**
   * <p>Job type.</p>
   */
  type?: JobType | string;

  /**
   * <p>Job initiated by field.</p>
   */
  initiatedBy?: InitiatedBy | string;

  /**
   * <p>Job creation time.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Job end time.</p>
   */
  endDateTime?: string;

  /**
   * <p>Job status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Servers participating in a specific Job.</p>
   */
  participatingServers?: ParticipatingServer[];

  /**
   * <p>Tags associated with specific Job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * <p>Request to describe Job log items.</p>
   */
  items?: Job[];

  /**
   * <p>Request to describe Job response by next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const BootMode = {
  LEGACY_BIOS: "LEGACY_BIOS",
  UEFI: "UEFI",
} as const;

/**
 * @public
 */
export type BootMode = (typeof BootMode)[keyof typeof BootMode];

/**
 * @public
 * @enum
 */
export const VolumeType = {
  gp2: "gp2",
  gp3: "gp3",
  io1: "io1",
  io2: "io2",
  sc1: "sc1",
  st1: "st1",
  standard: "standard",
} as const;

/**
 * @public
 */
export type VolumeType = (typeof VolumeType)[keyof typeof VolumeType];

/**
 * @public
 * <p>Launch template disk configuration.</p>
 */
export interface LaunchTemplateDiskConf {
  /**
   * <p>Launch template disk volume type configuration.</p>
   */
  volumeType?: VolumeType | string;

  /**
   * <p>Launch template disk iops configuration.</p>
   */
  iops?: number;

  /**
   * <p>Launch template disk throughput configuration.</p>
   */
  throughput?: number;
}

/**
 * @public
 * @enum
 */
export const LaunchDisposition = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type LaunchDisposition = (typeof LaunchDisposition)[keyof typeof LaunchDisposition];

/**
 * @public
 * <p>Configure Licensing.</p>
 */
export interface Licensing {
  /**
   * <p>Configure BYOL OS licensing.</p>
   */
  osByol?: boolean;
}

/**
 * @public
 * @enum
 */
export const PostLaunchActionsDeploymentType = {
  CUTOVER_ONLY: "CUTOVER_ONLY",
  TEST_AND_CUTOVER: "TEST_AND_CUTOVER",
  TEST_ONLY: "TEST_ONLY",
} as const;

/**
 * @public
 */
export type PostLaunchActionsDeploymentType =
  (typeof PostLaunchActionsDeploymentType)[keyof typeof PostLaunchActionsDeploymentType];

/**
 * @public
 * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
 */
export interface PostLaunchActions {
  /**
   * <p>Deployment type in which AWS Systems Manager Documents will be executed.</p>
   */
  deployment?: PostLaunchActionsDeploymentType | string;

  /**
   * <p>AWS Systems Manager Command's logs S3 log bucket.</p>
   */
  s3LogBucket?: string;

  /**
   * <p>AWS Systems Manager Command's logs S3 output key prefix.</p>
   */
  s3OutputKeyPrefix?: string;

  /**
   * <p>AWS Systems Manager Command's CloudWatch log group name.</p>
   */
  cloudWatchLogGroupName?: string;

  /**
   * <p>AWS Systems Manager Documents.</p>
   */
  ssmDocuments?: SsmDocument[];
}

/**
 * @public
 * @enum
 */
export const TargetInstanceTypeRightSizingMethod = {
  BASIC: "BASIC",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type TargetInstanceTypeRightSizingMethod =
  (typeof TargetInstanceTypeRightSizingMethod)[keyof typeof TargetInstanceTypeRightSizingMethod];

/**
 * @public
 */
export interface CreateLaunchConfigurationTemplateRequest {
  /**
   * <p>Launch configuration template post launch actions.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy private Ip.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Associate public Ip address.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Configure Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration template boot mode.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Small volume maximum size.</p>
   */
  smallVolumeMaxSize?: number;

  /**
   * <p>Small volume config.</p>
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * <p>Large volume config.</p>
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * <p>ID of the Launch Configuration Template.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>ARN of the Launch Configuration Template.</p>
   */
  arn?: string;

  /**
   * <p>Post Launch Actions of the Launch Configuration Template.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Tags of the Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>EC2 launch template ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy private Ip.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Associate public Ip address.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Configure Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration template boot mode.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Small volume maximum size.</p>
   */
  smallVolumeMaxSize?: number;

  /**
   * <p>Small volume config.</p>
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * <p>Large volume config.</p>
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   */
  launchConfigurationTemplateID: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateResponse {}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesRequest {
  /**
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   */
  maxResults?: number;

  /**
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Template post migration custom action filters.</p>
 */
export interface TemplateActionsRequestFilters {
  /**
   * <p>Action IDs to filter template post migration custom actions by.</p>
   */
  actionIDs?: string[];
}

/**
 * @public
 */
export interface ListTemplateActionsRequest {
  /**
   * <p>Launch configuration template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Filters to apply when listing template post migration custom actions.</p>
   */
  filters?: TemplateActionsRequestFilters;

  /**
   * <p>Maximum amount of items to return when listing template post migration custom actions.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token to use when listing template post migration custom actions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TemplateActionDocument {
  /**
   * <p>Template post migration custom action ID.</p>
   */
  actionID?: string;

  /**
   * <p>Template post migration custom action name.</p>
   */
  actionName?: string;

  /**
   * <p>Template post migration custom action document identifier.</p>
   */
  documentIdentifier?: string;

  /**
   * <p>Template post migration custom action order.</p>
   */
  order?: number;

  /**
   * <p>Template post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * <p>Template post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * <p>Template post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>Template post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Template post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Operating system eligible for this template post migration custom action.</p>
   */
  operatingSystem?: string;

  /**
   * <p>Template post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Template post migration custom action description.</p>
   */
  description?: string;

  /**
   * <p>Template post migration custom action category.</p>
   */
  category?: ActionCategory | string;
}

/**
 * @public
 */
export interface ListTemplateActionsResponse {
  /**
   * <p>List of template post migration custom actions.</p>
   */
  items?: TemplateActionDocument[];

  /**
   * <p>Next token returned when listing template post migration custom actions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutTemplateActionRequest {
  /**
   * <p>Launch configuration template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Template post migration custom action name.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Template post migration custom action document identifier.</p>
   */
  documentIdentifier: string | undefined;

  /**
   * <p>Template post migration custom action order.</p>
   */
  order: number | undefined;

  /**
   * <p>Template post migration custom action ID.</p>
   */
  actionID: string | undefined;

  /**
   * <p>Template post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * <p>Template post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * <p>Template post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>Template post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Template post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Operating system eligible for this template post migration custom action.</p>
   */
  operatingSystem?: string;

  /**
   * <p>Template post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Template post migration custom action description.</p>
   */
  description?: string;

  /**
   * <p>Template post migration custom action category.</p>
   */
  category?: ActionCategory | string;
}

/**
 * @public
 */
export interface RemoveTemplateActionRequest {
  /**
   * <p>Launch configuration template ID of the post migration custom action to remove.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Template post migration custom action ID to remove.</p>
   */
  actionID: string | undefined;
}

/**
 * @public
 */
export interface RemoveTemplateActionResponse {}

/**
 * @public
 */
export interface UpdateLaunchConfigurationTemplateRequest {
  /**
   * <p>Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Post Launch Action to execute on the Test or Cutover instance.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy private Ip.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Associate public Ip address.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Configure Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration template boot mode.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Small volume maximum size.</p>
   */
  smallVolumeMaxSize?: number;

  /**
   * <p>Small volume config.</p>
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * <p>Large volume config.</p>
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 * <p>List managed accounts request.</p>
 */
export interface ListManagedAccountsRequest {
  /**
   * <p>List managed accounts request max results.</p>
   */
  maxResults?: number;

  /**
   * <p>List managed accounts request next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Managed account.</p>
 */
export interface ManagedAccount {
  /**
   * <p>Managed account, account ID.</p>
   */
  accountId?: string;
}

/**
 * @public
 * <p>List managed accounts response.</p>
 */
export interface ListManagedAccountsResponse {
  /**
   * <p>List managed accounts response items.</p>
   */
  items: ManagedAccount[] | undefined;

  /**
   * <p>List managed accounts response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The server encountered an unexpected condition that prevented it from fulfilling the request. The request will be retried again after x seconds.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>List tags for resource request by ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>List tags for resource response.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Reached throttling quota exception.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reached throttling quota exception service code.</p>
   */
  serviceCode?: string;

  /**
   * <p>Reached throttling quota exception.</p>
   */
  quotaCode?: string;

  /**
   * <p>Reached throttling quota exception will retry after x seconds.</p>
   */
  retryAfterSeconds?: string;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationDataPlaneRouting = {
  PRIVATE_IP: "PRIVATE_IP",
  PUBLIC_IP: "PUBLIC_IP",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationDataPlaneRouting =
  (typeof ReplicationConfigurationDataPlaneRouting)[keyof typeof ReplicationConfigurationDataPlaneRouting];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationDefaultLargeStagingDiskType = {
  GP2: "GP2",
  GP3: "GP3",
  ST1: "ST1",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationDefaultLargeStagingDiskType =
  (typeof ReplicationConfigurationDefaultLargeStagingDiskType)[keyof typeof ReplicationConfigurationDefaultLargeStagingDiskType];

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationEbsEncryption = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationEbsEncryption =
  (typeof ReplicationConfigurationEbsEncryption)[keyof typeof ReplicationConfigurationEbsEncryption];

/**
 * @public
 */
export interface CreateReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to configure the Staging Area subnet ID during Replication Settings template creation.</p>
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>Request to configure the Replication Server Security group ID during Replication Settings template creation.</p>
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>Request to configure the Replication Server instance type during Replication Settings template creation.</p>
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Request to use Dedicated Replication Servers during Replication Settings template creation.</p>
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>Request to configure the default large staging disk EBS volume type during Replication Settings template creation.</p>
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | string | undefined;

  /**
   * <p>Request to configure EBS encryption during Replication Settings template creation.</p>
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | string | undefined;

  /**
   * <p>Request to configure an EBS encryption key during Replication Settings template creation.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Request to configure bandwidth throttling during Replication Settings template creation.</p>
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>Request to configure  data plane routing during Replication Settings template creation.</p>
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | string | undefined;

  /**
   * <p>Request to create Public IP during Replication Settings template creation.</p>
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>Request to configure Staging Area tags during Replication Settings template creation.</p>
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * <p>Request to use Fips Endpoint during Replication Settings template creation.</p>
   */
  useFipsEndpoint?: boolean;

  /**
   * <p>Request to configure tags during Replication Settings template creation.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * <p>Replication Configuration template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Replication Configuration template ARN.</p>
   */
  arn?: string;

  /**
   * <p>Replication Configuration template Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration template associate default Application Migration Service Security group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration template server Security Groups IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration template server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration template use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration template use default large Staging Disk type.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Replication Configuration template EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Replication Configuration template EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration template bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration template data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Replication Configuration template create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration template Staging Area Tags.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Replication Configuration template use Fips Endpoint.</p>
   */
  useFipsEndpoint?: boolean;

  /**
   * <p>Replication Configuration template Tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to delete Replication Configuration Template from service by Replication Configuration Template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateResponse {}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesRequest {
  /**
   * <p>Request to describe Replication Configuration template by template IDs.</p>
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * <p>Request to describe Replication Configuration template by max results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>Request to describe Replication Configuration template by items.</p>
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>Update replication configuration template template ID request.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Update replication configuration template ARN request.</p>
   */
  arn?: string;

  /**
   * <p>Update replication configuration template Staging Area subnet ID request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration template associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration template Replication Server Security groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration template Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration template use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration template use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Update replication configuration template EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Update replication configuration template EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration template bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration template data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Update replication configuration template create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration template Staging Area Tags request.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Update replication configuration template use Fips Endpoint request.</p>
   */
  useFipsEndpoint?: boolean;
}

/**
 * @public
 * @enum
 */
export const ChangeServerLifeCycleStateSourceServerLifecycleState = {
  CUTOVER: "CUTOVER",
  READY_FOR_CUTOVER: "READY_FOR_CUTOVER",
  READY_FOR_TEST: "READY_FOR_TEST",
} as const;

/**
 * @public
 */
export type ChangeServerLifeCycleStateSourceServerLifecycleState =
  (typeof ChangeServerLifeCycleStateSourceServerLifecycleState)[keyof typeof ChangeServerLifeCycleStateSourceServerLifecycleState];

/**
 * @public
 * <p>The request to change the source server migration lifecycle state.</p>
 */
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | string | undefined;
}

/**
 * @public
 */
export interface ChangeServerLifeCycleStateRequest {
  /**
   * <p>The request to change the source server migration lifecycle state by source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;

  /**
   * <p>The request to change the source server migration account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * @enum
 */
export const DataReplicationErrorString = {
  AGENT_NOT_SEEN: "AGENT_NOT_SEEN",
  FAILED_TO_ATTACH_STAGING_DISKS: "FAILED_TO_ATTACH_STAGING_DISKS",
  FAILED_TO_AUTHENTICATE_WITH_SERVICE: "FAILED_TO_AUTHENTICATE_WITH_SERVICE",
  FAILED_TO_BOOT_REPLICATION_SERVER: "FAILED_TO_BOOT_REPLICATION_SERVER",
  FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER: "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER",
  FAILED_TO_CREATE_SECURITY_GROUP: "FAILED_TO_CREATE_SECURITY_GROUP",
  FAILED_TO_CREATE_STAGING_DISKS: "FAILED_TO_CREATE_STAGING_DISKS",
  FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE: "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE",
  FAILED_TO_LAUNCH_REPLICATION_SERVER: "FAILED_TO_LAUNCH_REPLICATION_SERVER",
  FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT: "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT",
  FAILED_TO_START_DATA_TRANSFER: "FAILED_TO_START_DATA_TRANSFER",
  LAST_SNAPSHOT_JOB_FAILED: "LAST_SNAPSHOT_JOB_FAILED",
  NOT_CONVERGING: "NOT_CONVERGING",
  SNAPSHOTS_FAILURE: "SNAPSHOTS_FAILURE",
  UNSTABLE_NETWORK: "UNSTABLE_NETWORK",
  UNSUPPORTED_VM_CONFIGURATION: "UNSUPPORTED_VM_CONFIGURATION",
} as const;

/**
 * @public
 */
export type DataReplicationErrorString = (typeof DataReplicationErrorString)[keyof typeof DataReplicationErrorString];

/**
 * @public
 * <p>Error in data replication.</p>
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   */
  error?: DataReplicationErrorString | string;

  /**
   * <p>Error in data replication.</p>
   */
  rawError?: string;
}

/**
 * @public
 * @enum
 */
export const DataReplicationInitiationStepName = {
  ATTACH_STAGING_DISKS: "ATTACH_STAGING_DISKS",
  AUTHENTICATE_WITH_SERVICE: "AUTHENTICATE_WITH_SERVICE",
  BOOT_REPLICATION_SERVER: "BOOT_REPLICATION_SERVER",
  CONNECT_AGENT_TO_REPLICATION_SERVER: "CONNECT_AGENT_TO_REPLICATION_SERVER",
  CREATE_SECURITY_GROUP: "CREATE_SECURITY_GROUP",
  CREATE_STAGING_DISKS: "CREATE_STAGING_DISKS",
  DOWNLOAD_REPLICATION_SOFTWARE: "DOWNLOAD_REPLICATION_SOFTWARE",
  LAUNCH_REPLICATION_SERVER: "LAUNCH_REPLICATION_SERVER",
  PAIR_REPLICATION_SERVER_WITH_AGENT: "PAIR_REPLICATION_SERVER_WITH_AGENT",
  START_DATA_TRANSFER: "START_DATA_TRANSFER",
  WAIT: "WAIT",
} as const;

/**
 * @public
 */
export type DataReplicationInitiationStepName =
  (typeof DataReplicationInitiationStepName)[keyof typeof DataReplicationInitiationStepName];

/**
 * @public
 * @enum
 */
export const DataReplicationInitiationStepStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DataReplicationInitiationStepStatus =
  (typeof DataReplicationInitiationStepStatus)[keyof typeof DataReplicationInitiationStepStatus];

/**
 * @public
 * <p>Data replication initiation step.</p>
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>Request to query data initiation step name.</p>
   */
  name?: DataReplicationInitiationStepName | string;

  /**
   * <p>Request to query data initiation status.</p>
   */
  status?: DataReplicationInitiationStepStatus | string;
}

/**
 * @public
 * <p>Data replication initiation.</p>
 */
export interface DataReplicationInitiation {
  /**
   * <p>Request to query data initiation start date and time.</p>
   */
  startDateTime?: string;

  /**
   * <p>Request to query next data initiation date and time.</p>
   */
  nextAttemptDateTime?: string;

  /**
   * <p>Request to query data initiation steps.</p>
   */
  steps?: DataReplicationInitiationStep[];
}

/**
 * @public
 * @enum
 */
export const DataReplicationState = {
  BACKLOG: "BACKLOG",
  CONTINUOUS: "CONTINUOUS",
  CREATING_SNAPSHOT: "CREATING_SNAPSHOT",
  DISCONNECTED: "DISCONNECTED",
  INITIAL_SYNC: "INITIAL_SYNC",
  INITIATING: "INITIATING",
  PAUSED: "PAUSED",
  PENDING_SNAPSHOT_SHIPPING: "PENDING_SNAPSHOT_SHIPPING",
  RESCAN: "RESCAN",
  SHIPPING_SNAPSHOT: "SHIPPING_SNAPSHOT",
  STALLED: "STALLED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type DataReplicationState = (typeof DataReplicationState)[keyof typeof DataReplicationState];

/**
 * @public
 * <p>Request to query disks replicated.</p>
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>Request to query device name.</p>
   */
  deviceName?: string;

  /**
   * <p>Request to query total amount of data replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * <p>Request to query amount of data replicated in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * <p>Request to query amount of data rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * <p>Request to query data replication backlog size in bytes.</p>
   */
  backloggedStorageBytes?: number;
}

/**
 * @public
 * <p>Request data replication info.</p>
 */
export interface DataReplicationInfo {
  /**
   * <p>Request to query data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * <p>Request to query the time when data replication will be complete.</p>
   */
  etaDateTime?: string;

  /**
   * <p>Request to query disks replicated.</p>
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * <p>Request to query the data replication state.</p>
   */
  dataReplicationState?: DataReplicationState | string;

  /**
   * <p>Request to query whether data replication has been initiated.</p>
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * <p>Error in obtaining data replication info.</p>
   */
  dataReplicationError?: DataReplicationError;

  /**
   * <p>Request to query data replication last snapshot time.</p>
   */
  lastSnapshotDateTime?: string;
}

/**
 * @public
 * @enum
 */
export const FirstBoot = {
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
  UNKNOWN: "UNKNOWN",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type FirstBoot = (typeof FirstBoot)[keyof typeof FirstBoot];

/**
 * @public
 * <p>Launched instance.</p>
 */
export interface LaunchedInstance {
  /**
   * <p>Launched instance EC2 ID.</p>
   */
  ec2InstanceID?: string;

  /**
   * <p>Launched instance Job ID.</p>
   */
  jobID?: string;

  /**
   * <p>Launched instance first boot.</p>
   */
  firstBoot?: FirstBoot | string;
}

/**
 * @public
 * <p>Lifecycle Cutover finalized</p>
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * @public
 * <p>Lifecycle last Cutover initiated.</p>
 */
export interface LifeCycleLastCutoverInitiated {
  /**
   * <p/>
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Cutover initiated by Job ID.</p>
   */
  jobID?: string;
}

/**
 * @public
 * <p>Lifecycle last Cutover reverted.</p>
 */
export interface LifeCycleLastCutoverReverted {
  /**
   * <p>Lifecycle last Cutover reverted API call date time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * @public
 * <p>Lifecycle last Cutover .</p>
 */
export interface LifeCycleLastCutover {
  /**
   * <p>Lifecycle last Cutover initiated.</p>
   */
  initiated?: LifeCycleLastCutoverInitiated;

  /**
   * <p>Lifecycle last Cutover reverted.</p>
   */
  reverted?: LifeCycleLastCutoverReverted;

  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   */
  finalized?: LifeCycleLastCutoverFinalized;
}

/**
 * @public
 * <p>Lifecycle last Test finalized.</p>
 */
export interface LifeCycleLastTestFinalized {
  /**
   * <p>Lifecycle Test failed API call date and time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * @public
 * <p>Lifecycle last Test initiated.</p>
 */
export interface LifeCycleLastTestInitiated {
  /**
   * <p>Lifecycle last Test initiated API call date and time.</p>
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Test initiated Job ID.</p>
   */
  jobID?: string;
}

/**
 * @public
 * <p>Lifecycle last Test reverted.</p>
 */
export interface LifeCycleLastTestReverted {
  /**
   * <p>Lifecycle last Test reverted API call date and time.</p>
   */
  apiCallDateTime?: string;
}

/**
 * @public
 * <p>Lifecycle last Test.</p>
 */
export interface LifeCycleLastTest {
  /**
   * <p>Lifecycle last Test initiated.</p>
   */
  initiated?: LifeCycleLastTestInitiated;

  /**
   * <p>Lifecycle last Test reverted.</p>
   */
  reverted?: LifeCycleLastTestReverted;

  /**
   * <p>Lifecycle last Test finalized.</p>
   */
  finalized?: LifeCycleLastTestFinalized;
}

/**
 * @public
 * @enum
 */
export const LifeCycleState = {
  CUTOVER: "CUTOVER",
  CUTTING_OVER: "CUTTING_OVER",
  DISCONNECTED: "DISCONNECTED",
  DISCOVERED: "DISCOVERED",
  NOT_READY: "NOT_READY",
  PENDING_INSTALLATION: "PENDING_INSTALLATION",
  READY_FOR_CUTOVER: "READY_FOR_CUTOVER",
  READY_FOR_TEST: "READY_FOR_TEST",
  STOPPED: "STOPPED",
  TESTING: "TESTING",
} as const;

/**
 * @public
 */
export type LifeCycleState = (typeof LifeCycleState)[keyof typeof LifeCycleState];

/**
 * @public
 * <p>Lifecycle.</p>
 */
export interface LifeCycle {
  /**
   * <p>Lifecycle added to service data and time.</p>
   */
  addedToServiceDateTime?: string;

  /**
   * <p>Lifecycle replication initiation date and time.</p>
   */
  firstByteDateTime?: string;

  /**
   * <p>Lifecycle elapsed time and duration.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>Lifecycle last seen date and time.</p>
   */
  lastSeenByServiceDateTime?: string;

  /**
   * <p>Lifecycle last Test.</p>
   */
  lastTest?: LifeCycleLastTest;

  /**
   * <p>Lifecycle last Cutover.</p>
   */
  lastCutover?: LifeCycleLastCutover;

  /**
   * <p>Lifecycle state.</p>
   */
  state?: LifeCycleState | string;
}

/**
 * @public
 * @enum
 */
export const ReplicationType = {
  AGENT_BASED: "AGENT_BASED",
  SNAPSHOT_SHIPPING: "SNAPSHOT_SHIPPING",
} as const;

/**
 * @public
 */
export type ReplicationType = (typeof ReplicationType)[keyof typeof ReplicationType];

/**
 * @public
 * <p>Source server CPU information.</p>
 */
export interface CPU {
  /**
   * <p>The number of CPU cores on the source server.</p>
   */
  cores?: number;

  /**
   * <p>The source server's CPU model name.</p>
   */
  modelName?: string;
}

/**
 * @public
 * <p>The disk identifier.</p>
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   */
  deviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   */
  bytes?: number;
}

/**
 * @public
 * <p>Identification hints.</p>
 */
export interface IdentificationHints {
  /**
   * <p>FQDN address identification hint.</p>
   */
  fqdn?: string;

  /**
   * <p>Hostname identification hint.</p>
   */
  hostname?: string;

  /**
   * <p>vmWare UUID identification hint.</p>
   */
  vmWareUuid?: string;

  /**
   * <p>AWS Instance ID identification hint.</p>
   */
  awsInstanceID?: string;

  /**
   * <p>vCenter VM path identification hint.</p>
   */
  vmPath?: string;
}

/**
 * @public
 * <p>Network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>Network interface Mac address.</p>
   */
  macAddress?: string;

  /**
   * <p>Network interface IPs.</p>
   */
  ips?: string[];

  /**
   * <p>Network interface primary IP.</p>
   */
  isPrimary?: boolean;
}

/**
 * @public
 * <p>Operating System.</p>
 */
export interface OS {
  /**
   * <p>OS full string.</p>
   */
  fullString?: string;
}

/**
 * @public
 * <p>Source server properties.</p>
 */
export interface SourceProperties {
  /**
   * <p>Source server last update date and time.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>Source server recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>Source server identification hints.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>Source server network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>Source Server disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>Source Server CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * <p>Source server RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * <p>Source server OS.</p>
   */
  os?: OS;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * <p>Source server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Source server ARN.</p>
   */
  arn?: string;

  /**
   * <p>Source server archived status.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Source server Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Source server launched instance.</p>
   */
  launchedInstance?: LaunchedInstance;

  /**
   * <p>Source server data replication info.</p>
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * <p>Source server lifecycle state.</p>
   */
  lifeCycle?: LifeCycle;

  /**
   * <p>Source server properties.</p>
   */
  sourceProperties?: SourceProperties;

  /**
   * <p>Source server replication type.</p>
   */
  replicationType?: ReplicationType | string;

  /**
   * <p>Source server vCenter client id.</p>
   */
  vcenterClientID?: string;

  /**
   * <p>Source server application ID.</p>
   */
  applicationID?: string;

  /**
   * <p>Source server user provided ID.</p>
   */
  userProvidedID?: string;

  /**
   * <p>Source server fqdn for action framework.</p>
   */
  fqdnForActionFramework?: string;
}

/**
 * @public
 */
export interface DeleteSourceServerRequest {
  /**
   * <p>Request to delete Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to delete Source Server from service by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteSourceServerResponse {}

/**
 * @public
 * <p>Request to filter Source Servers list.</p>
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>Request to filter Source Servers list by Source Server ID.</p>
   */
  sourceServerIDs?: string[];

  /**
   * <p>Request to filter Source Servers list by archived.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Request to filter Source Servers list by replication type.</p>
   */
  replicationTypes?: (ReplicationType | string)[];

  /**
   * <p>Request to filter Source Servers list by life cycle states.</p>
   */
  lifeCycleStates?: (LifeCycleState | string)[];

  /**
   * <p>Request to filter Source Servers list by application IDs.</p>
   */
  applicationIDs?: string[];
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * <p>Request to filter Source Servers list.</p>
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * <p>Request to filter Source Servers list by maximum results.</p>
   */
  maxResults?: number;

  /**
   * <p>Request to filter Source Servers list by next token.</p>
   */
  nextToken?: string;

  /**
   * <p>Request to filter Source Servers list by Accoun ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * <p>Request to filter Source Servers list by item.</p>
   */
  items?: SourceServer[];

  /**
   * <p>Request to filter Source Servers next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DisconnectFromServiceRequest {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to disconnect Source Server from service by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface FinalizeCutoverRequest {
  /**
   * <p>Request to finalize Cutover by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to finalize Cutover by Source Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * <p>Request to get Launch Configuration information by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get Launch Configuration information by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * <p>Launch configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Launch configuration name.</p>
   */
  name?: string;

  /**
   * <p>Launch configuration EC2 Launch template ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Launch disposition for launch configuration.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Launch configuration Target instance type right sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy Tags during Launch Configuration.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Launch configuration OS licensing.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration boot mode.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * <p>Request to get Replication Configuration by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get Replication Configuration by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * @enum
 */
export const ReplicationConfigurationReplicatedDiskStagingDiskType = {
  AUTO: "AUTO",
  GP2: "GP2",
  GP3: "GP3",
  IO1: "IO1",
  IO2: "IO2",
  SC1: "SC1",
  ST1: "ST1",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ReplicationConfigurationReplicatedDiskStagingDiskType =
  (typeof ReplicationConfigurationReplicatedDiskStagingDiskType)[keyof typeof ReplicationConfigurationReplicatedDiskStagingDiskType];

/**
 * @public
 * <p>Replication Configuration replicated disk.</p>
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>Replication Configuration replicated disk device name.</p>
   */
  deviceName?: string;

  /**
   * <p>Replication Configuration replicated disk boot disk.</p>
   */
  isBootDisk?: boolean;

  /**
   * <p>Replication Configuration replicated disk staging disk type.</p>
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType | string;

  /**
   * <p>Replication Configuration replicated disk IOPs.</p>
   */
  iops?: number;

  /**
   * <p>Replication Configuration replicated disk throughput.</p>
   */
  throughput?: number;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>Replication Configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * <p>Replication Configuration name.</p>
   */
  name?: string;

  /**
   * <p>Replication Configuration Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration associate default Application Migration Service Security Group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration Replication Server Security Group IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration Replication Server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration use default large Staging Disks.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Replication Configuration replicated disks.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Replication Configuration EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Replication Configuration EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration set bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Replication Configuration create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration Staging Area tags.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Replication Configuration use Fips Endpoint.</p>
   */
  useFipsEndpoint?: boolean;
}

/**
 * @public
 * <p>Source server post migration custom action filters.</p>
 */
export interface SourceServerActionsRequestFilters {
  /**
   * <p>Action IDs to filter source server post migration custom actions by.</p>
   */
  actionIDs?: string[];
}

/**
 * @public
 */
export interface ListSourceServerActionsRequest {
  /**
   * <p>Source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Filters to apply when listing source server post migration custom actions.</p>
   */
  filters?: SourceServerActionsRequestFilters;

  /**
   * <p>Maximum amount of items to return when listing source server post migration custom actions.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token to use when listing source server post migration custom actions.</p>
   */
  nextToken?: string;

  /**
   * <p>Account ID to return when listing source server post migration custom actions.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface SourceServerActionDocument {
  /**
   * <p>Source server post migration custom action ID.</p>
   */
  actionID?: string;

  /**
   * <p>Source server post migration custom action name.</p>
   */
  actionName?: string;

  /**
   * <p>Source server post migration custom action document identifier.</p>
   */
  documentIdentifier?: string;

  /**
   * <p>Source server post migration custom action order.</p>
   */
  order?: number;

  /**
   * <p>Source server post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * <p>Source server post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * <p>Source server post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>Source server post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Source server post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Source server post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Source server post migration custom action description.</p>
   */
  description?: string;

  /**
   * <p>Source server post migration custom action category.</p>
   */
  category?: ActionCategory | string;
}

/**
 * @public
 */
export interface ListSourceServerActionsResponse {
  /**
   * <p>List of source server post migration custom actions.</p>
   */
  items?: SourceServerActionDocument[];

  /**
   * <p>Next token returned when listing source server post migration custom actions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface MarkAsArchivedRequest {
  /**
   * <p>Mark as archived by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Mark as archived by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface PauseReplicationRequest {
  /**
   * <p>Pause Replication Request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Pause Replication Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface PutSourceServerActionRequest {
  /**
   * <p>Source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Source server post migration custom action name.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Source server post migration custom action document identifier.</p>
   */
  documentIdentifier: string | undefined;

  /**
   * <p>Source server post migration custom action order.</p>
   */
  order: number | undefined;

  /**
   * <p>Source server post migration custom action ID.</p>
   */
  actionID: string | undefined;

  /**
   * <p>Source server post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * <p>Source server post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * <p>Source server post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * <p>Source server post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Source server post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Source server post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Source server post migration custom action description.</p>
   */
  description?: string;

  /**
   * <p>Source server post migration custom action category.</p>
   */
  category?: ActionCategory | string;

  /**
   * <p>Source server post migration custom account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RemoveSourceServerActionRequest {
  /**
   * <p>Source server ID of the post migration custom action to remove.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Source server post migration custom action ID to remove.</p>
   */
  actionID: string | undefined;

  /**
   * <p>Source server post migration account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RemoveSourceServerActionResponse {}

/**
 * @public
 */
export interface ResumeReplicationRequest {
  /**
   * <p>Resume Replication Request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Resume Replication Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * <p>Retry data replication for Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Retry data replication for Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartCutoverRequest {
  /**
   * <p>Start Cutover by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Cutover by Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Start Cutover by Account IDs</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartCutoverResponse {
  /**
   * <p>Start Cutover Job response.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * <p>ID of source server on which to start replication.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Account ID on which to start replication.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartTestRequest {
  /**
   * <p>Start Test for Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Test by Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Start Test for Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartTestResponse {
  /**
   * <p>Start Test Job response.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * <p>Stop Replication Request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Stop Replication Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TerminateTargetInstancesRequest {
  /**
   * <p>Terminate Target instance by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Terminate Target instance by Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Terminate Target instance by Account ID</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TerminateTargetInstancesResponse {
  /**
   * <p>Terminate Target instance Job response.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>Update Launch configuration by Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Launch configuration name request.</p>
   */
  name?: string;

  /**
   * <p>Update Launch configuration launch disposition request.</p>
   */
  launchDisposition?: LaunchDisposition | string;

  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod | string;

  /**
   * <p>Update Launch configuration copy Private IP request.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Update Launch configuration copy Tags request.</p>
   */
  copyTags?: boolean;

  /**
   * <p>Update Launch configuration licensing request.</p>
   */
  licensing?: Licensing;

  /**
   * <p>Update Launch configuration boot mode request.</p>
   */
  bootMode?: BootMode | string;

  /**
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Update Launch configuration Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>Update replication configuration Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update replication configuration name request.</p>
   */
  name?: string;

  /**
   * <p>Update replication configuration Staging Area subnet request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration Replication Server Security Groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType | string;

  /**
   * <p>Update replication configuration replicated disks request.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Update replication configuration EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption | string;

  /**
   * <p>Update replication configuration EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting | string;

  /**
   * <p>Update replication configuration create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration Staging Area Tags request.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Update replication configuration use Fips Endpoint.</p>
   */
  useFipsEndpoint?: boolean;

  /**
   * <p>Update replication configuration Account ID request.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateSourceServerReplicationTypeRequest {
  /**
   * <p>ID of source server on which to update replication type.</p>
   */
  sourceServerID: string | undefined;

  /**
   * <p>Replication type to which to update source server.</p>
   */
  replicationType: ReplicationType | string | undefined;

  /**
   * <p>Account ID on which to update replication type.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Tag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag resource by Tags.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Untag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Untag resource by Keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVcenterClientRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   */
  vcenterClientID: string | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsRequest {
  /**
   * <p>Maximum results to be returned in DescribeVcenterClients.</p>
   */
  maxResults?: number;

  /**
   * <p>Next pagination token to be provided for DescribeVcenterClients.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>vCenter client.</p>
 */
export interface VcenterClient {
  /**
   * <p>ID of vCenter client.</p>
   */
  vcenterClientID?: string;

  /**
   * <p>Arn of vCenter client.</p>
   */
  arn?: string;

  /**
   * <p>Hostname of vCenter client .</p>
   */
  hostname?: string;

  /**
   * <p>Vcenter UUID of vCenter client.</p>
   */
  vcenterUUID?: string;

  /**
   * <p>Datacenter name of vCenter client.</p>
   */
  datacenterName?: string;

  /**
   * <p>Last seen time of vCenter client.</p>
   */
  lastSeenDatetime?: string;

  /**
   * <p>Tags for Source Server of vCenter client.</p>
   */
  sourceServerTags?: Record<string, string>;

  /**
   * <p>Tags for vCenter client.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVcenterClientsResponse {
  /**
   * <p>List of items returned by DescribeVcenterClients.</p>
   */
  items?: VcenterClient[];

  /**
   * <p>Next pagination token returned from DescribeVcenterClients.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ArchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * @enum
 */
export const WaveHealthStatus = {
  ERROR: "ERROR",
  HEALTHY: "HEALTHY",
  LAGGING: "LAGGING",
} as const;

/**
 * @public
 */
export type WaveHealthStatus = (typeof WaveHealthStatus)[keyof typeof WaveHealthStatus];

/**
 * @public
 * @enum
 */
export const WaveProgressStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type WaveProgressStatus = (typeof WaveProgressStatus)[keyof typeof WaveProgressStatus];

/**
 * @public
 * <p>Wave aggregated status.</p>
 */
export interface WaveAggregatedStatus {
  /**
   * <p>Wave aggregated status last update dateTime.</p>
   */
  lastUpdateDateTime?: string;

  /**
   * <p>DateTime marking when the first source server in the wave started replication.</p>
   */
  replicationStartedDateTime?: string;

  /**
   * <p>Wave aggregated status health status.</p>
   */
  healthStatus?: WaveHealthStatus | string;

  /**
   * <p>Wave aggregated status progress status.</p>
   */
  progressStatus?: WaveProgressStatus | string;

  /**
   * <p>Wave aggregated status total applications amount.</p>
   */
  totalApplications?: number;
}

/**
 * @public
 */
export interface Wave {
  /**
   * <p>Wave ID.</p>
   */
  waveID?: string;

  /**
   * <p>Wave ARN.</p>
   */
  arn?: string;

  /**
   * <p>Wave name.</p>
   */
  name?: string;

  /**
   * <p>Wave description.</p>
   */
  description?: string;

  /**
   * <p>Wave archival status.</p>
   */
  isArchived?: boolean;

  /**
   * <p>Wave aggregated status.</p>
   */
  waveAggregatedStatus?: WaveAggregatedStatus;

  /**
   * <p>Wave creation dateTime.</p>
   */
  creationDateTime?: string;

  /**
   * <p>Wave last modified dateTime.</p>
   */
  lastModifiedDateTime?: string;

  /**
   * <p>Wave tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface AssociateApplicationsRequest {
  /**
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface AssociateApplicationsResponse {}

/**
 * @public
 */
export interface CreateWaveRequest {
  /**
   * <p>Wave name.</p>
   */
  name: string | undefined;

  /**
   * <p>Wave description.</p>
   */
  description?: string;

  /**
   * <p>Wave tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteWaveRequest {
  /**
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteWaveResponse {}

/**
 * @public
 */
export interface DisassociateApplicationsRequest {
  /**
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DisassociateApplicationsResponse {}

/**
 * @public
 * <p>Waves list filters.</p>
 */
export interface ListWavesRequestFilters {
  /**
   * <p>Filter waves list by wave ID.</p>
   */
  waveIDs?: string[];

  /**
   * <p>Filter waves list by archival status.</p>
   */
  isArchived?: boolean;
}

/**
 * @public
 */
export interface ListWavesRequest {
  /**
   * <p>Waves list filters.</p>
   */
  filters?: ListWavesRequestFilters;

  /**
   * <p>Maximum results to return when listing waves.</p>
   */
  maxResults?: number;

  /**
   * <p>Request next token.</p>
   */
  nextToken?: string;

  /**
   * <p>Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface ListWavesResponse {
  /**
   * <p>Waves list.</p>
   */
  items?: Wave[];

  /**
   * <p>Response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnarchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateWaveRequest {
  /**
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * <p>Wave name.</p>
   */
  name?: string;

  /**
   * <p>Wave description.</p>
   */
  description?: string;

  /**
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @internal
 */
export const ApplicationFilterSensitiveLog = (obj: Application): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListApplicationsResponseFilterSensitiveLog = (obj: ListApplicationsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ApplicationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeJobsResponseFilterSensitiveLog = (obj: DescribeJobsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => JobFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateLaunchConfigurationTemplateRequestFilterSensitiveLog = (
  obj: CreateLaunchConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.postLaunchActions && { postLaunchActions: obj.postLaunchActions }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchConfigurationTemplateFilterSensitiveLog = (obj: LaunchConfigurationTemplate): any => ({
  ...obj,
  ...(obj.postLaunchActions && { postLaunchActions: obj.postLaunchActions }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeLaunchConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeLaunchConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => LaunchConfigurationTemplateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: CreateReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ReplicationConfigurationTemplateFilterSensitiveLog = (obj: ReplicationConfigurationTemplate): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeReplicationConfigurationTemplatesResponseFilterSensitiveLog = (
  obj: DescribeReplicationConfigurationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ReplicationConfigurationTemplateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateReplicationConfigurationTemplateRequestFilterSensitiveLog = (
  obj: UpdateReplicationConfigurationTemplateRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SourceServerFilterSensitiveLog = (obj: SourceServer): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeSourceServersResponseFilterSensitiveLog = (obj: DescribeSourceServersResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => SourceServerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ReplicationConfigurationFilterSensitiveLog = (obj: ReplicationConfiguration): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartCutoverRequestFilterSensitiveLog = (obj: StartCutoverRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartCutoverResponseFilterSensitiveLog = (obj: StartCutoverResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const StartTestRequestFilterSensitiveLog = (obj: StartTestRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartTestResponseFilterSensitiveLog = (obj: StartTestResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const TerminateTargetInstancesRequestFilterSensitiveLog = (obj: TerminateTargetInstancesRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TerminateTargetInstancesResponseFilterSensitiveLog = (obj: TerminateTargetInstancesResponse): any => ({
  ...obj,
  ...(obj.job && { job: JobFilterSensitiveLog(obj.job) }),
});

/**
 * @internal
 */
export const UpdateReplicationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateReplicationConfigurationRequest
): any => ({
  ...obj,
  ...(obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VcenterClientFilterSensitiveLog = (obj: VcenterClient): any => ({
  ...obj,
  ...(obj.sourceServerTags && { sourceServerTags: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeVcenterClientsResponseFilterSensitiveLog = (obj: DescribeVcenterClientsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => VcenterClientFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const WaveFilterSensitiveLog = (obj: Wave): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateWaveRequestFilterSensitiveLog = (obj: CreateWaveRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListWavesResponseFilterSensitiveLog = (obj: ListWavesResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => WaveFilterSensitiveLog(item)) }),
});
