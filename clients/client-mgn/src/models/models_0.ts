// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MgnServiceException as __BaseException } from "./MgnServiceException";

/**
 * <p>Operating denied due to a file permission or access check error.</p>
 * @public
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
 * <p>Application aggregated status.</p>
 * @public
 */
export interface ApplicationAggregatedStatus {
  /**
   * <p>Application aggregated status last update dateTime.</p>
   * @public
   */
  lastUpdateDateTime?: string;

  /**
   * <p>Application aggregated status health status.</p>
   * @public
   */
  healthStatus?: ApplicationHealthStatus;

  /**
   * <p>Application aggregated status progress status.</p>
   * @public
   */
  progressStatus?: ApplicationProgressStatus;

  /**
   * <p>Application aggregated status total source servers amount.</p>
   * @public
   */
  totalSourceServers?: number;
}

/**
 * @public
 */
export interface Application {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID?: string;

  /**
   * <p>Application ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Application name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Application description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Application archival status.</p>
   * @public
   */
  isArchived?: boolean;

  /**
   * <p>Application aggregated status.</p>
   * @public
   */
  applicationAggregatedStatus?: ApplicationAggregatedStatus;

  /**
   * <p>Application creation dateTime.</p>
   * @public
   */
  creationDateTime?: string;

  /**
   * <p>Application last modified dateTime.</p>
   * @public
   */
  lastModifiedDateTime?: string;

  /**
   * <p>Application tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Application wave ID.</p>
   * @public
   */
  waveID?: string;
}

/**
 * @public
 */
export interface ArchiveApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * <p>Error details.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>Error details message.</p>
   * @public
   */
  message?: string;

  /**
   * <p>Error details code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>Error details resourceId.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>Error details resourceType.</p>
   * @public
   */
  resourceType?: string;
}

/**
 * <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>A conflict occurred when prompting for the Resource ID.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>A conflict occurred when prompting for resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Conflict Exception specific errors.</p>
   * @public
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
 * <p>Resource not found exception.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Resource ID not found error.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>Resource type not found error.</p>
   * @public
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
 * <p>The request could not be completed because its exceeded the service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Exceeded the service quota resource ID.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>Exceeded the service quota resource type.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>Exceeded the service quota service code.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>Exceeded the service quota code.</p>
   * @public
   */
  quotaCode?: string;

  /**
   * <p>Exceeded the service quota value.</p>
   * @public
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
 * <p>Uninitialized account exception.</p>
 * @public
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
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Source server IDs list.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>Application description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Application tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
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
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Source server IDs list.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DisassociateSourceServersResponse {}

/**
 * <p>Applications list filters.</p>
 * @public
 */
export interface ListApplicationsRequestFilters {
  /**
   * <p>Filter applications list by application ID.</p>
   * @public
   */
  applicationIDs?: string[];

  /**
   * <p>Filter applications list by archival status.</p>
   * @public
   */
  isArchived?: boolean;

  /**
   * <p>Filter applications list by wave ID.</p>
   * @public
   */
  waveIDs?: string[];
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>Applications list filters.</p>
   * @public
   */
  filters?: ListApplicationsRequestFilters;

  /**
   * <p>Maximum results to return when listing applications.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Request next token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Applications list Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>Applications list.</p>
   * @public
   */
  items?: Application[];

  /**
   * <p>Response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnarchiveApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>Application ID.</p>
   * @public
   */
  applicationID: string | undefined;

  /**
   * <p>Application name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Application description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * <p>Connector SSM command config.</p>
 * @public
 */
export interface ConnectorSsmCommandConfig {
  /**
   * <p>Connector SSM command config S3 output enabled.</p>
   * @public
   */
  s3OutputEnabled: boolean | undefined;

  /**
   * <p>Connector SSM command config output S3 bucket name.</p>
   * @public
   */
  outputS3BucketName?: string;

  /**
   * <p>Connector SSM command config CloudWatch output enabled.</p>
   * @public
   */
  cloudWatchOutputEnabled: boolean | undefined;

  /**
   * <p>Connector SSM command config CloudWatch log group name.</p>
   * @public
   */
  cloudWatchLogGroupName?: string;
}

/**
 * @public
 */
export interface Connector {
  /**
   * <p>Connector ID.</p>
   * @public
   */
  connectorID?: string;

  /**
   * <p>Connector name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Connector SSM instance ID.</p>
   * @public
   */
  ssmInstanceID?: string;

  /**
   * <p>Connector arn.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Connector tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Connector SSM command config.</p>
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * <p>Create Connector request name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Create Connector request SSM instance ID.</p>
   * @public
   */
  ssmInstanceID: string | undefined;

  /**
   * <p>Create Connector request tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Create Connector request SSM command config.</p>
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}

/**
 * <p>Validate exception field.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Validate exception field name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Validate exception field message.</p>
   * @public
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
 * <p>Validate exception.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  code?: string;
  /**
   * <p>Validate exception reason.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * <p>Validate exception field list.</p>
   * @public
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
 */
export interface DeleteConnectorRequest {
  /**
   * <p>Delete Connector request connector ID.</p>
   * @public
   */
  connectorID: string | undefined;
}

/**
 * <p>List Connectors Request Filters.</p>
 * @public
 */
export interface ListConnectorsRequestFilters {
  /**
   * <p>List Connectors Request Filters connector IDs.</p>
   * @public
   */
  connectorIDs?: string[];
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>List Connectors Request filters.</p>
   * @public
   */
  filters?: ListConnectorsRequestFilters;

  /**
   * <p>List Connectors Request max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>List Connectors Request next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>List connectors response items.</p>
   * @public
   */
  items?: Connector[];

  /**
   * <p>List connectors response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * <p>Update Connector request connector ID.</p>
   * @public
   */
  connectorID: string | undefined;

  /**
   * <p>Update Connector request name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Update Connector request SSM command config.</p>
   * @public
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}

/**
 * <p>List export errors request.</p>
 * @public
 */
export interface ListExportErrorsRequest {
  /**
   * <p>List export errors request export id.</p>
   * @public
   */
  exportID: string | undefined;

  /**
   * <p>List export errors request max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>List export errors request next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Export errors data.</p>
 * @public
 */
export interface ExportErrorData {
  /**
   * <p>Export errors data raw error.</p>
   * @public
   */
  rawError?: string;
}

/**
 * <p>Export task error.</p>
 * @public
 */
export interface ExportTaskError {
  /**
   * <p>Export task error datetime.</p>
   * @public
   */
  errorDateTime?: string;

  /**
   * <p>Export task error data.</p>
   * @public
   */
  errorData?: ExportErrorData;
}

/**
 * <p>List export errors response.</p>
 * @public
 */
export interface ListExportErrorsResponse {
  /**
   * <p>List export errors response items.</p>
   * @public
   */
  items?: ExportTaskError[];

  /**
   * <p>List export errors response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>List exports request filters.</p>
 * @public
 */
export interface ListExportsRequestFilters {
  /**
   * <p>List exports request filters export ids.</p>
   * @public
   */
  exportIDs?: string[];
}

/**
 * <p>List export request.</p>
 * @public
 */
export interface ListExportsRequest {
  /**
   * <p>List exports request filters.</p>
   * @public
   */
  filters?: ListExportsRequestFilters;

  /**
   * <p>List export request max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>List export request next token.</p>
   * @public
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
 * <p>Export task summary.</p>
 * @public
 */
export interface ExportTaskSummary {
  /**
   * <p>Export task summary servers count.</p>
   * @public
   */
  serversCount?: number;

  /**
   * <p>Export task summary applications count.</p>
   * @public
   */
  applicationsCount?: number;

  /**
   * <p>Export task summary waves count.</p>
   * @public
   */
  wavesCount?: number;
}

/**
 * <p>Export task.</p>
 * @public
 */
export interface ExportTask {
  /**
   * <p>Export task id.</p>
   * @public
   */
  exportID?: string;

  /**
   * <p>Export task s3 bucket.</p>
   * @public
   */
  s3Bucket?: string;

  /**
   * <p>Export task s3 key.</p>
   * @public
   */
  s3Key?: string;

  /**
   * <p>Export task s3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string;

  /**
   * <p>Export task creation datetime.</p>
   * @public
   */
  creationDateTime?: string;

  /**
   * <p>Export task end datetime.</p>
   * @public
   */
  endDateTime?: string;

  /**
   * <p>Export task status.</p>
   * @public
   */
  status?: ExportStatus;

  /**
   * <p>Export task progress percentage.</p>
   * @public
   */
  progressPercentage?: number;

  /**
   * <p>Export task summary.</p>
   * @public
   */
  summary?: ExportTaskSummary;
}

/**
 * <p>List export response.</p>
 * @public
 */
export interface ListExportsResponse {
  /**
   * <p>List export response items.</p>
   * @public
   */
  items?: ExportTask[];

  /**
   * <p>List export response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Start export request.</p>
 * @public
 */
export interface StartExportRequest {
  /**
   * <p>Start export request s3 bucket.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>Start export request s3key.</p>
   * @public
   */
  s3Key: string | undefined;

  /**
   * <p>Start export request s3 bucket owner.</p>
   * @public
   */
  s3BucketOwner?: string;
}

/**
 * <p>Start export response.</p>
 * @public
 */
export interface StartExportResponse {
  /**
   * <p>Start export response export task.</p>
   * @public
   */
  exportTask?: ExportTask;
}

/**
 * <p>List import errors request.</p>
 * @public
 */
export interface ListImportErrorsRequest {
  /**
   * <p>List import errors request import id.</p>
   * @public
   */
  importID: string | undefined;

  /**
   * <p>List import errors request max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>List import errors request next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Import error data.</p>
 * @public
 */
export interface ImportErrorData {
  /**
   * <p>Import error data source server ID.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>Import error data application ID.</p>
   * @public
   */
  applicationID?: string;

  /**
   * <p>Import error data wave id.</p>
   * @public
   */
  waveID?: string;

  /**
   * <p>Import error data ec2 LaunchTemplate ID.</p>
   * @public
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Import error data row number.</p>
   * @public
   */
  rowNumber?: number;

  /**
   * <p>Import error data raw error.</p>
   * @public
   */
  rawError?: string;

  /**
   * <p>Import error data source account ID.</p>
   * @public
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
 * <p>Import task error.</p>
 * @public
 */
export interface ImportTaskError {
  /**
   * <p>Import task error datetime.</p>
   * @public
   */
  errorDateTime?: string;

  /**
   * <p>Import task error type.</p>
   * @public
   */
  errorType?: ImportErrorType;

  /**
   * <p>Import task error data.</p>
   * @public
   */
  errorData?: ImportErrorData;
}

/**
 * <p>List imports errors response.</p>
 * @public
 */
export interface ListImportErrorsResponse {
  /**
   * <p>List imports errors response items.</p>
   * @public
   */
  items?: ImportTaskError[];

  /**
   * <p>List imports errors response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>List imports request filters.</p>
 * @public
 */
export interface ListImportsRequestFilters {
  /**
   * <p>List imports request filters import IDs.</p>
   * @public
   */
  importIDs?: string[];
}

/**
 * <p>List imports request.</p>
 * @public
 */
export interface ListImportsRequest {
  /**
   * <p>List imports request filters.</p>
   * @public
   */
  filters?: ListImportsRequestFilters;

  /**
   * <p>List imports request max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>List imports request next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>S3 bucket source.</p>
 * @public
 */
export interface S3BucketSource {
  /**
   * <p>S3 bucket source s3 bucket.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>S3 bucket source s3 key.</p>
   * @public
   */
  s3Key: string | undefined;

  /**
   * <p>S3 bucket source s3 bucket owner.</p>
   * @public
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
 * <p>Import task summary applications.</p>
 * @public
 */
export interface ImportTaskSummaryApplications {
  /**
   * <p>Import task summary applications created count.</p>
   * @public
   */
  createdCount?: number;

  /**
   * <p>Import task summary applications modified count.</p>
   * @public
   */
  modifiedCount?: number;
}

/**
 * <p>Import task summary servers.</p>
 * @public
 */
export interface ImportTaskSummaryServers {
  /**
   * <p>Import task summary servers created count.</p>
   * @public
   */
  createdCount?: number;

  /**
   * <p>Import task summary servers modified count.</p>
   * @public
   */
  modifiedCount?: number;
}

/**
 * <p>Import task summery waves.</p>
 * @public
 */
export interface ImportTaskSummaryWaves {
  /**
   * <p>Import task summery waves created count.</p>
   * @public
   */
  createdCount?: number;

  /**
   * <p>Import task summery waves modified count.</p>
   * @public
   */
  modifiedCount?: number;
}

/**
 * <p>Import task summary.</p>
 * @public
 */
export interface ImportTaskSummary {
  /**
   * <p>Import task summary waves.</p>
   * @public
   */
  waves?: ImportTaskSummaryWaves;

  /**
   * <p>Import task summary applications.</p>
   * @public
   */
  applications?: ImportTaskSummaryApplications;

  /**
   * <p>Import task summary servers.</p>
   * @public
   */
  servers?: ImportTaskSummaryServers;
}

/**
 * <p>Import task.</p>
 * @public
 */
export interface ImportTask {
  /**
   * <p>Import task id.</p>
   * @public
   */
  importID?: string;

  /**
   * <p>Import task s3 bucket source.</p>
   * @public
   */
  s3BucketSource?: S3BucketSource;

  /**
   * <p>Import task creation datetime.</p>
   * @public
   */
  creationDateTime?: string;

  /**
   * <p>Import task end datetime.</p>
   * @public
   */
  endDateTime?: string;

  /**
   * <p>Import task status.</p>
   * @public
   */
  status?: ImportStatus;

  /**
   * <p>Import task progress percentage.</p>
   * @public
   */
  progressPercentage?: number;

  /**
   * <p>Import task summary.</p>
   * @public
   */
  summary?: ImportTaskSummary;
}

/**
 * <p>List import response.</p>
 * @public
 */
export interface ListImportsResponse {
  /**
   * <p>List import response items.</p>
   * @public
   */
  items?: ImportTask[];

  /**
   * <p>List import response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Start import request.</p>
 * @public
 */
export interface StartImportRequest {
  /**
   * <p>Start import request client token.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Start import request s3 bucket source.</p>
   * @public
   */
  s3BucketSource: S3BucketSource | undefined;
}

/**
 * <p>Start import response.</p>
 * @public
 */
export interface StartImportResponse {
  /**
   * <p>Start import response import task.</p>
   * @public
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
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>Request to delete Job from service by Account ID.</p>
   * @public
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
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>Request to describe Job log item maximum results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Request to describe Job log next token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Request to describe Job log Account ID.</p>
   * @public
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
 * <p>Job log data</p>
 * @public
 */
export interface JobLogEventData {
  /**
   * <p>Job Event Source Server ID.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>Job Event conversion Server ID.</p>
   * @public
   */
  conversionServerID?: string;

  /**
   * <p>Job Event Target instance ID.</p>
   * @public
   */
  targetInstanceID?: string;

  /**
   * <p>Job error.</p>
   * @public
   */
  rawError?: string;
}

/**
 * <p>Job log.</p>
 * @public
 */
export interface JobLog {
  /**
   * <p>Job log event date and time.</p>
   * @public
   */
  logDateTime?: string;

  /**
   * <p>Job log event.</p>
   * @public
   */
  event?: JobLogEvent;

  /**
   * <p>Job event data</p>
   * @public
   */
  eventData?: JobLogEventData;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * <p>Request to describe Job log response items.</p>
   * @public
   */
  items?: JobLog[];

  /**
   * <p>Request to describe Job log response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Request to describe Job log filters.</p>
 * @public
 */
export interface DescribeJobsRequestFilters {
  /**
   * <p>Request to describe Job log filters by job ID.</p>
   * @public
   */
  jobIDs?: string[];

  /**
   * <p>Request to describe Job log filters by date.</p>
   * @public
   */
  fromDate?: string;

  /**
   * <p>Request to describe job log items by last date.</p>
   * @public
   */
  toDate?: string;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * <p>Request to describe Job log filters.</p>
   * @public
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * <p>Request to describe job log items by max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Request to describe job log items by next token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Request to describe job log items by Account ID.</p>
   * @public
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
 * <p>AWS Systems Manager Document external parameter.</p>
 * @public
 */
export type SsmExternalParameter = SsmExternalParameter.DynamicPathMember | SsmExternalParameter.$UnknownMember;

/**
 * @public
 */
export namespace SsmExternalParameter {
  /**
   * <p>AWS Systems Manager Document external parameters dynamic path.</p>
   * @public
   */
  export interface DynamicPathMember {
    dynamicPath: string;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * <p>AWS Systems Manager Parameter Store parameter.</p>
 * @public
 */
export interface SsmParameterStoreParameter {
  /**
   * <p>AWS Systems Manager Parameter Store parameter type.</p>
   * @public
   */
  parameterType: SsmParameterStoreParameterType | undefined;

  /**
   * <p>AWS Systems Manager Parameter Store parameter name.</p>
   * @public
   */
  parameterName: string | undefined;
}

/**
 * <p>AWS Systems Manager Document.</p>
 * @public
 */
export interface SsmDocument {
  /**
   * <p>User-friendly name for the AWS Systems Manager Document.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>AWS Systems Manager Document name or full ARN.</p>
   * @public
   */
  ssmDocumentName: string | undefined;

  /**
   * <p>AWS Systems Manager Document timeout seconds.</p>
   * @public
   */
  timeoutSeconds?: number;

  /**
   * <p>If true, Cutover will not be enabled if the document has failed.</p>
   * @public
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>AWS Systems Manager Document parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>AWS Systems Manager Document external parameters.</p>
   * @public
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
 * <p>Launch Status of the Job Post Launch Actions.</p>
 * @public
 */
export interface JobPostLaunchActionsLaunchStatus {
  /**
   * <p>AWS Systems Manager's Document of the of the Job Post Launch Actions.</p>
   * @public
   */
  ssmDocument?: SsmDocument;

  /**
   * <p>AWS Systems Manager Document type.</p>
   * @public
   */
  ssmDocumentType?: SsmDocumentType;

  /**
   * <p>AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.</p>
   * @public
   */
  executionID?: string;

  /**
   * <p>AWS Systems Manager Document's execution status.</p>
   * @public
   */
  executionStatus?: PostLaunchActionExecutionStatus;

  /**
   * <p>AWS Systems Manager Document's failure reason.</p>
   * @public
   */
  failureReason?: string;
}

/**
 * <p>Status of the Post Launch Actions running on the Test or Cutover instance.</p>
 * @public
 */
export interface PostLaunchActionsStatus {
  /**
   * <p>Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.</p>
   * @public
   */
  ssmAgentDiscoveryDatetime?: string;

  /**
   * <p>List of Post Launch Action status.</p>
   * @public
   */
  postLaunchActionsLaunchStatusList?: JobPostLaunchActionsLaunchStatus[];
}

/**
 * <p>Server participating in Job.</p>
 * @public
 */
export interface ParticipatingServer {
  /**
   * <p>Participating server Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Participating server launch status.</p>
   * @public
   */
  launchStatus?: LaunchStatus;

  /**
   * <p>Participating server's launched ec2 instance ID.</p>
   * @public
   */
  launchedEc2InstanceID?: string;

  /**
   * <p>Participating server's Post Launch Actions Status.</p>
   * @public
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
 * <p>Job.</p>
 * @public
 */
export interface Job {
  /**
   * <p>Job ID.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>the ARN of the specific Job.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Job type.</p>
   * @public
   */
  type?: JobType;

  /**
   * <p>Job initiated by field.</p>
   * @public
   */
  initiatedBy?: InitiatedBy;

  /**
   * <p>Job creation time.</p>
   * @public
   */
  creationDateTime?: string;

  /**
   * <p>Job end time.</p>
   * @public
   */
  endDateTime?: string;

  /**
   * <p>Job status.</p>
   * @public
   */
  status?: JobStatus;

  /**
   * <p>Servers participating in a specific Job.</p>
   * @public
   */
  participatingServers?: ParticipatingServer[];

  /**
   * <p>Tags associated with specific Job.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * <p>Request to describe Job log items.</p>
   * @public
   */
  items?: Job[];

  /**
   * <p>Request to describe Job response by next token.</p>
   * @public
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
 * <p>Launch template disk configuration.</p>
 * @public
 */
export interface LaunchTemplateDiskConf {
  /**
   * <p>Launch template disk volume type configuration.</p>
   * @public
   */
  volumeType?: VolumeType;

  /**
   * <p>Launch template disk iops configuration.</p>
   * @public
   */
  iops?: number;

  /**
   * <p>Launch template disk throughput configuration.</p>
   * @public
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
 * <p>Configure Licensing.</p>
 * @public
 */
export interface Licensing {
  /**
   * <p>Configure BYOL OS licensing.</p>
   * @public
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
 * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
 * @public
 */
export interface PostLaunchActions {
  /**
   * <p>Deployment type in which AWS Systems Manager Documents will be executed.</p>
   * @public
   */
  deployment?: PostLaunchActionsDeploymentType;

  /**
   * <p>AWS Systems Manager Command's logs S3 log bucket.</p>
   * @public
   */
  s3LogBucket?: string;

  /**
   * <p>AWS Systems Manager Command's logs S3 output key prefix.</p>
   * @public
   */
  s3OutputKeyPrefix?: string;

  /**
   * <p>AWS Systems Manager Command's CloudWatch log group name.</p>
   * @public
   */
  cloudWatchLogGroupName?: string;

  /**
   * <p>AWS Systems Manager Documents.</p>
   * @public
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
   * @public
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy private Ip.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Associate public Ip address.</p>
   * @public
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Configure Licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration template boot mode.</p>
   * @public
   */
  bootMode?: BootMode;

  /**
   * <p>Small volume maximum size.</p>
   * @public
   */
  smallVolumeMaxSize?: number;

  /**
   * <p>Small volume config.</p>
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * <p>Large volume config.</p>
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * <p>ID of the Launch Configuration Template.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>ARN of the Launch Configuration Template.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Post Launch Actions of the Launch Configuration Template.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Tags of the Launch Configuration Template.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>EC2 launch template ID.</p>
   * @public
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy private Ip.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Associate public Ip address.</p>
   * @public
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Configure Licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration template boot mode.</p>
   * @public
   */
  bootMode?: BootMode;

  /**
   * <p>Small volume maximum size.</p>
   * @public
   */
  smallVolumeMaxSize?: number;

  /**
   * <p>Small volume config.</p>
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * <p>Large volume config.</p>
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   * @public
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
   * @public
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Template post migration custom action filters.</p>
 * @public
 */
export interface TemplateActionsRequestFilters {
  /**
   * <p>Action IDs to filter template post migration custom actions by.</p>
   * @public
   */
  actionIDs?: string[];
}

/**
 * @public
 */
export interface ListTemplateActionsRequest {
  /**
   * <p>Launch configuration template ID.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Filters to apply when listing template post migration custom actions.</p>
   * @public
   */
  filters?: TemplateActionsRequestFilters;

  /**
   * <p>Maximum amount of items to return when listing template post migration custom actions.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next token to use when listing template post migration custom actions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TemplateActionDocument {
  /**
   * <p>Template post migration custom action ID.</p>
   * @public
   */
  actionID?: string;

  /**
   * <p>Template post migration custom action name.</p>
   * @public
   */
  actionName?: string;

  /**
   * <p>Template post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier?: string;

  /**
   * <p>Template post migration custom action order.</p>
   * @public
   */
  order?: number;

  /**
   * <p>Template post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string;

  /**
   * <p>Template post migration custom action active status.</p>
   * @public
   */
  active?: boolean;

  /**
   * <p>Template post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number;

  /**
   * <p>Template post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Template post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Operating system eligible for this template post migration custom action.</p>
   * @public
   */
  operatingSystem?: string;

  /**
   * <p>Template post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Template post migration custom action description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Template post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory;
}

/**
 * @public
 */
export interface ListTemplateActionsResponse {
  /**
   * <p>List of template post migration custom actions.</p>
   * @public
   */
  items?: TemplateActionDocument[];

  /**
   * <p>Next token returned when listing template post migration custom actions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutTemplateActionRequest {
  /**
   * <p>Launch configuration template ID.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Template post migration custom action name.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>Template post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier: string | undefined;

  /**
   * <p>Template post migration custom action order.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>Template post migration custom action ID.</p>
   * @public
   */
  actionID: string | undefined;

  /**
   * <p>Template post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string;

  /**
   * <p>Template post migration custom action active status.</p>
   * @public
   */
  active?: boolean;

  /**
   * <p>Template post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number;

  /**
   * <p>Template post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Template post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Operating system eligible for this template post migration custom action.</p>
   * @public
   */
  operatingSystem?: string;

  /**
   * <p>Template post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Template post migration custom action description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Template post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory;
}

/**
 * @public
 */
export interface RemoveTemplateActionRequest {
  /**
   * <p>Launch configuration template ID of the post migration custom action to remove.</p>
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Template post migration custom action ID to remove.</p>
   * @public
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
   * @public
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * <p>Post Launch Action to execute on the Test or Cutover instance.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Launch disposition.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Target instance type right-sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy private Ip.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Associate public Ip address.</p>
   * @public
   */
  associatePublicIpAddress?: boolean;

  /**
   * <p>Copy tags.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Configure Licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration template boot mode.</p>
   * @public
   */
  bootMode?: BootMode;

  /**
   * <p>Small volume maximum size.</p>
   * @public
   */
  smallVolumeMaxSize?: number;

  /**
   * <p>Small volume config.</p>
   * @public
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * <p>Large volume config.</p>
   * @public
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * <p>List managed accounts request.</p>
 * @public
 */
export interface ListManagedAccountsRequest {
  /**
   * <p>List managed accounts request max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>List managed accounts request next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Managed account.</p>
 * @public
 */
export interface ManagedAccount {
  /**
   * <p>Managed account, account ID.</p>
   * @public
   */
  accountId?: string;
}

/**
 * <p>List managed accounts response.</p>
 * @public
 */
export interface ListManagedAccountsResponse {
  /**
   * <p>List managed accounts response items.</p>
   * @public
   */
  items: ManagedAccount[] | undefined;

  /**
   * <p>List managed accounts response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The server encountered an unexpected condition that prevented it from fulfilling the request. The request will be retried again after x seconds.</p>
   * @public
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
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>List tags for resource response.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Reached throttling quota exception.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reached throttling quota exception service code.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>Reached throttling quota exception.</p>
   * @public
   */
  quotaCode?: string;

  /**
   * <p>Reached throttling quota exception will retry after x seconds.</p>
   * @public
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
   * @public
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   * @public
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * <p>Request to configure the Replication Server Security group ID during Replication Settings template creation.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * <p>Request to configure the Replication Server instance type during Replication Settings template creation.</p>
   * @public
   */
  replicationServerInstanceType: string | undefined;

  /**
   * <p>Request to use Dedicated Replication Servers during Replication Settings template creation.</p>
   * @public
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * <p>Request to configure the default large staging disk EBS volume type during Replication Settings template creation.</p>
   * @public
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * <p>Request to configure EBS encryption during Replication Settings template creation.</p>
   * @public
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * <p>Request to configure an EBS encryption key during Replication Settings template creation.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Request to configure bandwidth throttling during Replication Settings template creation.</p>
   * @public
   */
  bandwidthThrottling: number | undefined;

  /**
   * <p>Request to configure  data plane routing during Replication Settings template creation.</p>
   * @public
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * <p>Request to create Public IP during Replication Settings template creation.</p>
   * @public
   */
  createPublicIP: boolean | undefined;

  /**
   * <p>Request to configure Staging Area tags during Replication Settings template creation.</p>
   * @public
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * <p>Request to use Fips Endpoint during Replication Settings template creation.</p>
   * @public
   */
  useFipsEndpoint?: boolean;

  /**
   * <p>Request to configure tags during Replication Settings template creation.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * <p>Replication Configuration template ID.</p>
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Replication Configuration template ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Replication Configuration template Staging Area subnet ID.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration template associate default Application Migration Service Security group.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration template server Security Groups IDs.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration template server instance type.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration template use Dedicated Replication Server.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration template use default large Staging Disk type.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>Replication Configuration template EBS encryption.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>Replication Configuration template EBS encryption key ARN.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration template bandwidth throttling.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration template data plane routing.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Replication Configuration template create Public IP.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration template Staging Area Tags.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Replication Configuration template use Fips Endpoint.</p>
   * @public
   */
  useFipsEndpoint?: boolean;

  /**
   * <p>Replication Configuration template Tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * <p>Request to delete Replication Configuration Template from service by Replication Configuration Template ID.</p>
   * @public
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
   * @public
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * <p>Request to describe Replication Configuration template by max results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * <p>Request to describe Replication Configuration template by items.</p>
   * @public
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * <p>Request to describe Replication Configuration template by next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * <p>Update replication configuration template template ID request.</p>
   * @public
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * <p>Update replication configuration template ARN request.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Update replication configuration template Staging Area subnet ID request.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration template associate default Application Migration Service Security group request.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration template Replication Server Security groups IDs request.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration template Replication Server instance type request.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration template use dedicated Replication Server request.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration template use default large Staging Disk type request.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>Update replication configuration template EBS encryption request.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>Update replication configuration template EBS encryption key ARN request.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration template bandwidth throttling request.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration template data plane routing request.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Update replication configuration template create Public IP request.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration template Staging Area Tags request.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Update replication configuration template use Fips Endpoint request.</p>
   * @public
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
 * <p>The request to change the source server migration lifecycle state.</p>
 * @public
 */
export interface ChangeServerLifeCycleStateSourceServerLifecycle {
  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   * @public
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | undefined;
}

/**
 * @public
 */
export interface ChangeServerLifeCycleStateRequest {
  /**
   * <p>The request to change the source server migration lifecycle state by source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>The request to change the source server migration lifecycle state.</p>
   * @public
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;

  /**
   * <p>The request to change the source server migration account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * <p>Source Server connector action.</p>
 * @public
 */
export interface SourceServerConnectorAction {
  /**
   * <p>Source Server connector action credentials secret arn.</p>
   * @public
   */
  credentialsSecretArn?: string;

  /**
   * <p>Source Server connector action connector arn.</p>
   * @public
   */
  connectorArn?: string;
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
 * <p>Error in data replication.</p>
 * @public
 */
export interface DataReplicationError {
  /**
   * <p>Error in data replication.</p>
   * @public
   */
  error?: DataReplicationErrorString;

  /**
   * <p>Error in data replication.</p>
   * @public
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
 * <p>Data replication initiation step.</p>
 * @public
 */
export interface DataReplicationInitiationStep {
  /**
   * <p>Request to query data initiation step name.</p>
   * @public
   */
  name?: DataReplicationInitiationStepName;

  /**
   * <p>Request to query data initiation status.</p>
   * @public
   */
  status?: DataReplicationInitiationStepStatus;
}

/**
 * <p>Data replication initiation.</p>
 * @public
 */
export interface DataReplicationInitiation {
  /**
   * <p>Request to query data initiation start date and time.</p>
   * @public
   */
  startDateTime?: string;

  /**
   * <p>Request to query next data initiation date and time.</p>
   * @public
   */
  nextAttemptDateTime?: string;

  /**
   * <p>Request to query data initiation steps.</p>
   * @public
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
 * <p>Request to query disks replicated.</p>
 * @public
 */
export interface DataReplicationInfoReplicatedDisk {
  /**
   * <p>Request to query device name.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>Request to query total amount of data replicated in bytes.</p>
   * @public
   */
  totalStorageBytes?: number;

  /**
   * <p>Request to query amount of data replicated in bytes.</p>
   * @public
   */
  replicatedStorageBytes?: number;

  /**
   * <p>Request to query amount of data rescanned in bytes.</p>
   * @public
   */
  rescannedStorageBytes?: number;

  /**
   * <p>Request to query data replication backlog size in bytes.</p>
   * @public
   */
  backloggedStorageBytes?: number;
}

/**
 * <p>Request data replication info.</p>
 * @public
 */
export interface DataReplicationInfo {
  /**
   * <p>Request to query data replication lag duration.</p>
   * @public
   */
  lagDuration?: string;

  /**
   * <p>Request to query the time when data replication will be complete.</p>
   * @public
   */
  etaDateTime?: string;

  /**
   * <p>Request to query disks replicated.</p>
   * @public
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * <p>Request to query the data replication state.</p>
   * @public
   */
  dataReplicationState?: DataReplicationState;

  /**
   * <p>Request to query whether data replication has been initiated.</p>
   * @public
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * <p>Error in obtaining data replication info.</p>
   * @public
   */
  dataReplicationError?: DataReplicationError;

  /**
   * <p>Request to query data replication last snapshot time.</p>
   * @public
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
 * <p>Launched instance.</p>
 * @public
 */
export interface LaunchedInstance {
  /**
   * <p>Launched instance EC2 ID.</p>
   * @public
   */
  ec2InstanceID?: string;

  /**
   * <p>Launched instance Job ID.</p>
   * @public
   */
  jobID?: string;

  /**
   * <p>Launched instance first boot.</p>
   * @public
   */
  firstBoot?: FirstBoot;
}

/**
 * <p>Lifecycle Cutover finalized</p>
 * @public
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   * @public
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Cutover initiated.</p>
 * @public
 */
export interface LifeCycleLastCutoverInitiated {
  /**
   * <p/>
   * @public
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Cutover initiated by Job ID.</p>
   * @public
   */
  jobID?: string;
}

/**
 * <p>Lifecycle last Cutover reverted.</p>
 * @public
 */
export interface LifeCycleLastCutoverReverted {
  /**
   * <p>Lifecycle last Cutover reverted API call date time.</p>
   * @public
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Cutover .</p>
 * @public
 */
export interface LifeCycleLastCutover {
  /**
   * <p>Lifecycle last Cutover initiated.</p>
   * @public
   */
  initiated?: LifeCycleLastCutoverInitiated;

  /**
   * <p>Lifecycle last Cutover reverted.</p>
   * @public
   */
  reverted?: LifeCycleLastCutoverReverted;

  /**
   * <p>Lifecycle Cutover finalized date and time.</p>
   * @public
   */
  finalized?: LifeCycleLastCutoverFinalized;
}

/**
 * <p>Lifecycle last Test finalized.</p>
 * @public
 */
export interface LifeCycleLastTestFinalized {
  /**
   * <p>Lifecycle Test failed API call date and time.</p>
   * @public
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Test initiated.</p>
 * @public
 */
export interface LifeCycleLastTestInitiated {
  /**
   * <p>Lifecycle last Test initiated API call date and time.</p>
   * @public
   */
  apiCallDateTime?: string;

  /**
   * <p>Lifecycle last Test initiated Job ID.</p>
   * @public
   */
  jobID?: string;
}

/**
 * <p>Lifecycle last Test reverted.</p>
 * @public
 */
export interface LifeCycleLastTestReverted {
  /**
   * <p>Lifecycle last Test reverted API call date and time.</p>
   * @public
   */
  apiCallDateTime?: string;
}

/**
 * <p>Lifecycle last Test.</p>
 * @public
 */
export interface LifeCycleLastTest {
  /**
   * <p>Lifecycle last Test initiated.</p>
   * @public
   */
  initiated?: LifeCycleLastTestInitiated;

  /**
   * <p>Lifecycle last Test reverted.</p>
   * @public
   */
  reverted?: LifeCycleLastTestReverted;

  /**
   * <p>Lifecycle last Test finalized.</p>
   * @public
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
 * <p>Lifecycle.</p>
 * @public
 */
export interface LifeCycle {
  /**
   * <p>Lifecycle added to service data and time.</p>
   * @public
   */
  addedToServiceDateTime?: string;

  /**
   * <p>Lifecycle replication initiation date and time.</p>
   * @public
   */
  firstByteDateTime?: string;

  /**
   * <p>Lifecycle elapsed time and duration.</p>
   * @public
   */
  elapsedReplicationDuration?: string;

  /**
   * <p>Lifecycle last seen date and time.</p>
   * @public
   */
  lastSeenByServiceDateTime?: string;

  /**
   * <p>Lifecycle last Test.</p>
   * @public
   */
  lastTest?: LifeCycleLastTest;

  /**
   * <p>Lifecycle last Cutover.</p>
   * @public
   */
  lastCutover?: LifeCycleLastCutover;

  /**
   * <p>Lifecycle state.</p>
   * @public
   */
  state?: LifeCycleState;
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
 * <p>Source server CPU information.</p>
 * @public
 */
export interface CPU {
  /**
   * <p>The number of CPU cores on the source server.</p>
   * @public
   */
  cores?: number;

  /**
   * <p>The source server's CPU model name.</p>
   * @public
   */
  modelName?: string;
}

/**
 * <p>The disk identifier.</p>
 * @public
 */
export interface Disk {
  /**
   * <p>The disk or device name.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>The amount of storage on the disk in bytes.</p>
   * @public
   */
  bytes?: number;
}

/**
 * <p>Identification hints.</p>
 * @public
 */
export interface IdentificationHints {
  /**
   * <p>FQDN address identification hint.</p>
   * @public
   */
  fqdn?: string;

  /**
   * <p>Hostname identification hint.</p>
   * @public
   */
  hostname?: string;

  /**
   * <p>vmWare UUID identification hint.</p>
   * @public
   */
  vmWareUuid?: string;

  /**
   * <p>AWS Instance ID identification hint.</p>
   * @public
   */
  awsInstanceID?: string;

  /**
   * <p>vCenter VM path identification hint.</p>
   * @public
   */
  vmPath?: string;
}

/**
 * <p>Network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>Network interface Mac address.</p>
   * @public
   */
  macAddress?: string;

  /**
   * <p>Network interface IPs.</p>
   * @public
   */
  ips?: string[];

  /**
   * <p>Network interface primary IP.</p>
   * @public
   */
  isPrimary?: boolean;
}

/**
 * <p>Operating System.</p>
 * @public
 */
export interface OS {
  /**
   * <p>OS full string.</p>
   * @public
   */
  fullString?: string;
}

/**
 * <p>Source server properties.</p>
 * @public
 */
export interface SourceProperties {
  /**
   * <p>Source server last update date and time.</p>
   * @public
   */
  lastUpdatedDateTime?: string;

  /**
   * <p>Source server recommended instance type.</p>
   * @public
   */
  recommendedInstanceType?: string;

  /**
   * <p>Source server identification hints.</p>
   * @public
   */
  identificationHints?: IdentificationHints;

  /**
   * <p>Source server network interfaces.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>Source Server disks.</p>
   * @public
   */
  disks?: Disk[];

  /**
   * <p>Source Server CPUs.</p>
   * @public
   */
  cpus?: CPU[];

  /**
   * <p>Source server RAM in bytes.</p>
   * @public
   */
  ramBytes?: number;

  /**
   * <p>Source server OS.</p>
   * @public
   */
  os?: OS;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * <p>Source server ID.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>Source server ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Source server archived status.</p>
   * @public
   */
  isArchived?: boolean;

  /**
   * <p>Source server Tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Source server launched instance.</p>
   * @public
   */
  launchedInstance?: LaunchedInstance;

  /**
   * <p>Source server data replication info.</p>
   * @public
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * <p>Source server lifecycle state.</p>
   * @public
   */
  lifeCycle?: LifeCycle;

  /**
   * <p>Source server properties.</p>
   * @public
   */
  sourceProperties?: SourceProperties;

  /**
   * <p>Source server replication type.</p>
   * @public
   */
  replicationType?: ReplicationType;

  /**
   * <p>Source server vCenter client id.</p>
   * @public
   */
  vcenterClientID?: string;

  /**
   * <p>Source server application ID.</p>
   * @public
   */
  applicationID?: string;

  /**
   * <p>Source server user provided ID.</p>
   * @public
   */
  userProvidedID?: string;

  /**
   * <p>Source server fqdn for action framework.</p>
   * @public
   */
  fqdnForActionFramework?: string;

  /**
   * <p>Source Server connector action.</p>
   * @public
   */
  connectorAction?: SourceServerConnectorAction;
}

/**
 * @public
 */
export interface DeleteSourceServerRequest {
  /**
   * <p>Request to delete Source Server from service by Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to delete Source Server from service by Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteSourceServerResponse {}

/**
 * <p>Request to filter Source Servers list.</p>
 * @public
 */
export interface DescribeSourceServersRequestFilters {
  /**
   * <p>Request to filter Source Servers list by Source Server ID.</p>
   * @public
   */
  sourceServerIDs?: string[];

  /**
   * <p>Request to filter Source Servers list by archived.</p>
   * @public
   */
  isArchived?: boolean;

  /**
   * <p>Request to filter Source Servers list by replication type.</p>
   * @public
   */
  replicationTypes?: ReplicationType[];

  /**
   * <p>Request to filter Source Servers list by life cycle states.</p>
   * @public
   */
  lifeCycleStates?: LifeCycleState[];

  /**
   * <p>Request to filter Source Servers list by application IDs.</p>
   * @public
   */
  applicationIDs?: string[];
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * <p>Request to filter Source Servers list.</p>
   * @public
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * <p>Request to filter Source Servers list by maximum results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Request to filter Source Servers list by next token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Request to filter Source Servers list by Accoun ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * <p>Request to filter Source Servers list by item.</p>
   * @public
   */
  items?: SourceServer[];

  /**
   * <p>Request to filter Source Servers next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DisconnectFromServiceRequest {
  /**
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to disconnect Source Server from service by Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface FinalizeCutoverRequest {
  /**
   * <p>Request to finalize Cutover by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to finalize Cutover by Source Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * <p>Request to get Launch Configuration information by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get Launch Configuration information by Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * <p>Launch configuration Source Server ID.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>Launch configuration name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Launch configuration EC2 Launch template ID.</p>
   * @public
   */
  ec2LaunchTemplateID?: string;

  /**
   * <p>Launch disposition for launch configuration.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Launch configuration Target instance type right sizing method.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Copy Private IP during Launch Configuration.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Copy Tags during Launch Configuration.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Launch configuration OS licensing.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Launch configuration boot mode.</p>
   * @public
   */
  bootMode?: BootMode;

  /**
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * <p>Request to get Replication Configuration by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Request to get Replication Configuration by Account ID.</p>
   * @public
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
 * <p>Replication Configuration replicated disk.</p>
 * @public
 */
export interface ReplicationConfigurationReplicatedDisk {
  /**
   * <p>Replication Configuration replicated disk device name.</p>
   * @public
   */
  deviceName?: string;

  /**
   * <p>Replication Configuration replicated disk boot disk.</p>
   * @public
   */
  isBootDisk?: boolean;

  /**
   * <p>Replication Configuration replicated disk staging disk type.</p>
   * @public
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;

  /**
   * <p>Replication Configuration replicated disk IOPs.</p>
   * @public
   */
  iops?: number;

  /**
   * <p>Replication Configuration replicated disk throughput.</p>
   * @public
   */
  throughput?: number;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>Replication Configuration Source Server ID.</p>
   * @public
   */
  sourceServerID?: string;

  /**
   * <p>Replication Configuration name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Replication Configuration Staging Area subnet ID.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Replication Configuration associate default Application Migration Service Security Group.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Replication Configuration Replication Server Security Group IDs.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Replication Configuration Replication Server instance type.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Replication Configuration use Dedicated Replication Server.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Replication Configuration use default large Staging Disks.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>Replication Configuration replicated disks.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Replication Configuration EBS encryption.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>Replication Configuration EBS encryption key ARN.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Replication Configuration set bandwidth throttling.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>Replication Configuration data plane routing.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Replication Configuration create Public IP.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>Replication Configuration Staging Area tags.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Replication Configuration use Fips Endpoint.</p>
   * @public
   */
  useFipsEndpoint?: boolean;
}

/**
 * <p>Source server post migration custom action filters.</p>
 * @public
 */
export interface SourceServerActionsRequestFilters {
  /**
   * <p>Action IDs to filter source server post migration custom actions by.</p>
   * @public
   */
  actionIDs?: string[];
}

/**
 * @public
 */
export interface ListSourceServerActionsRequest {
  /**
   * <p>Source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Filters to apply when listing source server post migration custom actions.</p>
   * @public
   */
  filters?: SourceServerActionsRequestFilters;

  /**
   * <p>Maximum amount of items to return when listing source server post migration custom actions.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next token to use when listing source server post migration custom actions.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Account ID to return when listing source server post migration custom actions.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface SourceServerActionDocument {
  /**
   * <p>Source server post migration custom action ID.</p>
   * @public
   */
  actionID?: string;

  /**
   * <p>Source server post migration custom action name.</p>
   * @public
   */
  actionName?: string;

  /**
   * <p>Source server post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier?: string;

  /**
   * <p>Source server post migration custom action order.</p>
   * @public
   */
  order?: number;

  /**
   * <p>Source server post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string;

  /**
   * <p>Source server post migration custom action active status.</p>
   * @public
   */
  active?: boolean;

  /**
   * <p>Source server post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number;

  /**
   * <p>Source server post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Source server post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Source server post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Source server post migration custom action description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Source server post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory;
}

/**
 * @public
 */
export interface ListSourceServerActionsResponse {
  /**
   * <p>List of source server post migration custom actions.</p>
   * @public
   */
  items?: SourceServerActionDocument[];

  /**
   * <p>Next token returned when listing source server post migration custom actions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface MarkAsArchivedRequest {
  /**
   * <p>Mark as archived by Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Mark as archived by Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface PauseReplicationRequest {
  /**
   * <p>Pause Replication Request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Pause Replication Request account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface PutSourceServerActionRequest {
  /**
   * <p>Source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Source server post migration custom action name.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>Source server post migration custom action document identifier.</p>
   * @public
   */
  documentIdentifier: string | undefined;

  /**
   * <p>Source server post migration custom action order.</p>
   * @public
   */
  order: number | undefined;

  /**
   * <p>Source server post migration custom action ID.</p>
   * @public
   */
  actionID: string | undefined;

  /**
   * <p>Source server post migration custom action document version.</p>
   * @public
   */
  documentVersion?: string;

  /**
   * <p>Source server post migration custom action active status.</p>
   * @public
   */
  active?: boolean;

  /**
   * <p>Source server post migration custom action timeout in seconds.</p>
   * @public
   */
  timeoutSeconds?: number;

  /**
   * <p>Source server post migration custom action must succeed for cutover.</p>
   * @public
   */
  mustSucceedForCutover?: boolean;

  /**
   * <p>Source server post migration custom action parameters.</p>
   * @public
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * <p>Source server post migration custom action external parameters.</p>
   * @public
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * <p>Source server post migration custom action description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Source server post migration custom action category.</p>
   * @public
   */
  category?: ActionCategory;

  /**
   * <p>Source server post migration custom account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RemoveSourceServerActionRequest {
  /**
   * <p>Source server ID of the post migration custom action to remove.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Source server post migration custom action ID to remove.</p>
   * @public
   */
  actionID: string | undefined;

  /**
   * <p>Source server post migration account ID.</p>
   * @public
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
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Resume Replication Request account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * <p>Retry data replication for Source Server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Retry data replication for Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartCutoverRequest {
  /**
   * <p>Start Cutover by Source Server IDs.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Cutover by Tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Start Cutover by Account IDs</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartCutoverResponse {
  /**
   * <p>Start Cutover Job response.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * <p>ID of source server on which to start replication.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Account ID on which to start replication.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartTestRequest {
  /**
   * <p>Start Test for Source Server IDs.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Start Test by Tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Start Test for Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartTestResponse {
  /**
   * <p>Start Test Job response.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * <p>Stop Replication Request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Stop Replication Request account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TerminateTargetInstancesRequest {
  /**
   * <p>Terminate Target instance by Source Server IDs.</p>
   * @public
   */
  sourceServerIDs: string[] | undefined;

  /**
   * <p>Terminate Target instance by Tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Terminate Target instance by Account ID</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TerminateTargetInstancesResponse {
  /**
   * <p>Terminate Target instance Job response.</p>
   * @public
   */
  job?: Job;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * <p>Update Launch configuration by Source Server ID request.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Launch configuration name request.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Update Launch configuration launch disposition request.</p>
   * @public
   */
  launchDisposition?: LaunchDisposition;

  /**
   * <p>Update Launch configuration Target instance right sizing request.</p>
   * @public
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * <p>Update Launch configuration copy Private IP request.</p>
   * @public
   */
  copyPrivateIp?: boolean;

  /**
   * <p>Update Launch configuration copy Tags request.</p>
   * @public
   */
  copyTags?: boolean;

  /**
   * <p>Update Launch configuration licensing request.</p>
   * @public
   */
  licensing?: Licensing;

  /**
   * <p>Update Launch configuration boot mode request.</p>
   * @public
   */
  bootMode?: BootMode;

  /**
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
   * @public
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * <p>Enable map auto tagging.</p>
   * @public
   */
  enableMapAutoTagging?: boolean;

  /**
   * <p>Launch configuration map auto tagging MPE ID.</p>
   * @public
   */
  mapAutoTaggingMpeID?: string;

  /**
   * <p>Update Launch configuration Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * <p>Update replication configuration Source Server ID request.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update replication configuration name request.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Update replication configuration Staging Area subnet request.</p>
   * @public
   */
  stagingAreaSubnetId?: string;

  /**
   * <p>Update replication configuration associate default Application Migration Service Security group request.</p>
   * @public
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * <p>Update replication configuration Replication Server Security Groups IDs request.</p>
   * @public
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * <p>Update replication configuration Replication Server instance type request.</p>
   * @public
   */
  replicationServerInstanceType?: string;

  /**
   * <p>Update replication configuration use dedicated Replication Server request.</p>
   * @public
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * <p>Update replication configuration use default large Staging Disk type request.</p>
   * @public
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * <p>Update replication configuration replicated disks request.</p>
   * @public
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * <p>Update replication configuration EBS encryption request.</p>
   * @public
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * <p>Update replication configuration EBS encryption key ARN request.</p>
   * @public
   */
  ebsEncryptionKeyArn?: string;

  /**
   * <p>Update replication configuration bandwidth throttling request.</p>
   * @public
   */
  bandwidthThrottling?: number;

  /**
   * <p>Update replication configuration data plane routing request.</p>
   * @public
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * <p>Update replication configuration create Public IP request.</p>
   * @public
   */
  createPublicIP?: boolean;

  /**
   * <p>Update replication configuration Staging Area Tags request.</p>
   * @public
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * <p>Update replication configuration use Fips Endpoint.</p>
   * @public
   */
  useFipsEndpoint?: boolean;

  /**
   * <p>Update replication configuration Account ID request.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateSourceServerRequest {
  /**
   * <p>Update Source Server request account ID.</p>
   * @public
   */
  accountID?: string;

  /**
   * <p>Update Source Server request source server ID.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Update Source Server request connector action.</p>
   * @public
   */
  connectorAction?: SourceServerConnectorAction;
}

/**
 * @public
 */
export interface UpdateSourceServerReplicationTypeRequest {
  /**
   * <p>ID of source server on which to update replication type.</p>
   * @public
   */
  sourceServerID: string | undefined;

  /**
   * <p>Replication type to which to update source server.</p>
   * @public
   */
  replicationType: ReplicationType | undefined;

  /**
   * <p>Account ID on which to update replication type.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Tag resource by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag resource by Tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Untag resource by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Untag resource by Keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVcenterClientRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   * @public
   */
  vcenterClientID: string | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsRequest {
  /**
   * <p>Maximum results to be returned in DescribeVcenterClients.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Next pagination token to be provided for DescribeVcenterClients.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>vCenter client.</p>
 * @public
 */
export interface VcenterClient {
  /**
   * <p>ID of vCenter client.</p>
   * @public
   */
  vcenterClientID?: string;

  /**
   * <p>Arn of vCenter client.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Hostname of vCenter client .</p>
   * @public
   */
  hostname?: string;

  /**
   * <p>Vcenter UUID of vCenter client.</p>
   * @public
   */
  vcenterUUID?: string;

  /**
   * <p>Datacenter name of vCenter client.</p>
   * @public
   */
  datacenterName?: string;

  /**
   * <p>Last seen time of vCenter client.</p>
   * @public
   */
  lastSeenDatetime?: string;

  /**
   * <p>Tags for Source Server of vCenter client.</p>
   * @public
   */
  sourceServerTags?: Record<string, string>;

  /**
   * <p>Tags for vCenter client.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVcenterClientsResponse {
  /**
   * <p>List of items returned by DescribeVcenterClients.</p>
   * @public
   */
  items?: VcenterClient[];

  /**
   * <p>Next pagination token returned from DescribeVcenterClients.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ArchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
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
 * <p>Wave aggregated status.</p>
 * @public
 */
export interface WaveAggregatedStatus {
  /**
   * <p>Wave aggregated status last update dateTime.</p>
   * @public
   */
  lastUpdateDateTime?: string;

  /**
   * <p>DateTime marking when the first source server in the wave started replication.</p>
   * @public
   */
  replicationStartedDateTime?: string;

  /**
   * <p>Wave aggregated status health status.</p>
   * @public
   */
  healthStatus?: WaveHealthStatus;

  /**
   * <p>Wave aggregated status progress status.</p>
   * @public
   */
  progressStatus?: WaveProgressStatus;

  /**
   * <p>Wave aggregated status total applications amount.</p>
   * @public
   */
  totalApplications?: number;
}

/**
 * @public
 */
export interface Wave {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID?: string;

  /**
   * <p>Wave ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Wave name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Wave archival status.</p>
   * @public
   */
  isArchived?: boolean;

  /**
   * <p>Wave aggregated status.</p>
   * @public
   */
  waveAggregatedStatus?: WaveAggregatedStatus;

  /**
   * <p>Wave creation dateTime.</p>
   * @public
   */
  creationDateTime?: string;

  /**
   * <p>Wave last modified dateTime.</p>
   * @public
   */
  lastModifiedDateTime?: string;

  /**
   * <p>Wave tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface AssociateApplicationsRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Wave tags.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
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
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DisassociateApplicationsResponse {}

/**
 * <p>Waves list filters.</p>
 * @public
 */
export interface ListWavesRequestFilters {
  /**
   * <p>Filter waves list by wave ID.</p>
   * @public
   */
  waveIDs?: string[];

  /**
   * <p>Filter waves list by archival status.</p>
   * @public
   */
  isArchived?: boolean;
}

/**
 * @public
 */
export interface ListWavesRequest {
  /**
   * <p>Waves list filters.</p>
   * @public
   */
  filters?: ListWavesRequestFilters;

  /**
   * <p>Maximum results to return when listing waves.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Request next token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Request account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface ListWavesResponse {
  /**
   * <p>Waves list.</p>
   * @public
   */
  items?: Wave[];

  /**
   * <p>Response next token.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnarchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Wave name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Account ID.</p>
   * @public
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
export const ConnectorFilterSensitiveLog = (obj: Connector): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateConnectorRequestFilterSensitiveLog = (obj: CreateConnectorRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListConnectorsResponseFilterSensitiveLog = (obj: ListConnectorsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ConnectorFilterSensitiveLog(item)) }),
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
