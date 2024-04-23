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
   * @public
   * <p>Application aggregated status last update dateTime.</p>
   */
  lastUpdateDateTime?: string;

  /**
   * @public
   * <p>Application aggregated status health status.</p>
   */
  healthStatus?: ApplicationHealthStatus;

  /**
   * @public
   * <p>Application aggregated status progress status.</p>
   */
  progressStatus?: ApplicationProgressStatus;

  /**
   * @public
   * <p>Application aggregated status total source servers amount.</p>
   */
  totalSourceServers?: number;
}

/**
 * @public
 */
export interface Application {
  /**
   * @public
   * <p>Application ID.</p>
   */
  applicationID?: string;

  /**
   * @public
   * <p>Application ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Application name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Application description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Application archival status.</p>
   */
  isArchived?: boolean;

  /**
   * @public
   * <p>Application aggregated status.</p>
   */
  applicationAggregatedStatus?: ApplicationAggregatedStatus;

  /**
   * @public
   * <p>Application creation dateTime.</p>
   */
  creationDateTime?: string;

  /**
   * @public
   * <p>Application last modified dateTime.</p>
   */
  lastModifiedDateTime?: string;

  /**
   * @public
   * <p>Application tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Application wave ID.</p>
   */
  waveID?: string;
}

/**
 * @public
 */
export interface ArchiveApplicationRequest {
  /**
   * @public
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Error details message.</p>
   */
  message?: string;

  /**
   * @public
   * <p>Error details code.</p>
   */
  code?: string;

  /**
   * @public
   * <p>Error details resourceId.</p>
   */
  resourceId?: string;

  /**
   * @public
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
   * @public
   * <p>A conflict occurred when prompting for the Resource ID.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>A conflict occurred when prompting for resource type.</p>
   */
  resourceType?: string;

  /**
   * @public
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
   * @public
   * <p>Resource ID not found error.</p>
   */
  resourceId?: string;

  /**
   * @public
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
   * @public
   * <p>Exceeded the service quota resource ID.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>Exceeded the service quota resource type.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>Exceeded the service quota service code.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>Exceeded the service quota code.</p>
   */
  quotaCode?: string;

  /**
   * @public
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
   * @public
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * @public
   * <p>Source server IDs list.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>Application name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Application description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Application tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * @public
   * <p>Source server IDs list.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>Filter applications list by application ID.</p>
   */
  applicationIDs?: string[];

  /**
   * @public
   * <p>Filter applications list by archival status.</p>
   */
  isArchived?: boolean;

  /**
   * @public
   * <p>Filter applications list by wave ID.</p>
   */
  waveIDs?: string[];
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>Applications list filters.</p>
   */
  filters?: ListApplicationsRequestFilters;

  /**
   * @public
   * <p>Maximum results to return when listing applications.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Request next token.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Applications list Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>Applications list.</p>
   */
  items?: Application[];

  /**
   * @public
   * <p>Response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnarchiveApplicationRequest {
  /**
   * @public
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * @public
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>Application ID.</p>
   */
  applicationID: string | undefined;

  /**
   * @public
   * <p>Application name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Application description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * <p>Connector SSM command config.</p>
 */
export interface ConnectorSsmCommandConfig {
  /**
   * @public
   * <p>Connector SSM command config S3 output enabled.</p>
   */
  s3OutputEnabled: boolean | undefined;

  /**
   * @public
   * <p>Connector SSM command config output S3 bucket name.</p>
   */
  outputS3BucketName?: string;

  /**
   * @public
   * <p>Connector SSM command config CloudWatch output enabled.</p>
   */
  cloudWatchOutputEnabled: boolean | undefined;

  /**
   * @public
   * <p>Connector SSM command config CloudWatch log group name.</p>
   */
  cloudWatchLogGroupName?: string;
}

/**
 * @public
 */
export interface Connector {
  /**
   * @public
   * <p>Connector ID.</p>
   */
  connectorID?: string;

  /**
   * @public
   * <p>Connector name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Connector SSM instance ID.</p>
   */
  ssmInstanceID?: string;

  /**
   * @public
   * <p>Connector arn.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Connector tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Connector SSM command config.</p>
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * @public
   * <p>Create Connector request name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Create Connector request SSM instance ID.</p>
   */
  ssmInstanceID: string | undefined;

  /**
   * @public
   * <p>Create Connector request tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Create Connector request SSM command config.</p>
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}

/**
 * @public
 * <p>Validate exception field.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>Validate exception field name.</p>
   */
  name?: string;

  /**
   * @public
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
   * @public
   * <p>Validate exception reason.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
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
 */
export interface DeleteConnectorRequest {
  /**
   * @public
   * <p>Delete Connector request connector ID.</p>
   */
  connectorID: string | undefined;
}

/**
 * @public
 * <p>List Connectors Request Filters.</p>
 */
export interface ListConnectorsRequestFilters {
  /**
   * @public
   * <p>List Connectors Request Filters connector IDs.</p>
   */
  connectorIDs?: string[];
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * @public
   * <p>List Connectors Request filters.</p>
   */
  filters?: ListConnectorsRequestFilters;

  /**
   * @public
   * <p>List Connectors Request max results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>List Connectors Request next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * @public
   * <p>List connectors response items.</p>
   */
  items?: Connector[];

  /**
   * @public
   * <p>List connectors response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * @public
   * <p>Update Connector request connector ID.</p>
   */
  connectorID: string | undefined;

  /**
   * @public
   * <p>Update Connector request name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Update Connector request SSM command config.</p>
   */
  ssmCommandConfig?: ConnectorSsmCommandConfig;
}

/**
 * @public
 * <p>List export errors request.</p>
 */
export interface ListExportErrorsRequest {
  /**
   * @public
   * <p>List export errors request export id.</p>
   */
  exportID: string | undefined;

  /**
   * @public
   * <p>List export errors request max results.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Export task error datetime.</p>
   */
  errorDateTime?: string;

  /**
   * @public
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
   * @public
   * <p>List export errors response items.</p>
   */
  items?: ExportTaskError[];

  /**
   * @public
   * <p>List export errors response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>List exports request filters.</p>
 */
export interface ListExportsRequestFilters {
  /**
   * @public
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
   * @public
   * <p>List exports request filters.</p>
   */
  filters?: ListExportsRequestFilters;

  /**
   * @public
   * <p>List export request max results.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Export task summary servers count.</p>
   */
  serversCount?: number;

  /**
   * @public
   * <p>Export task summary applications count.</p>
   */
  applicationsCount?: number;

  /**
   * @public
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
   * @public
   * <p>Export task id.</p>
   */
  exportID?: string;

  /**
   * @public
   * <p>Export task s3 bucket.</p>
   */
  s3Bucket?: string;

  /**
   * @public
   * <p>Export task s3 key.</p>
   */
  s3Key?: string;

  /**
   * @public
   * <p>Export task s3 bucket owner.</p>
   */
  s3BucketOwner?: string;

  /**
   * @public
   * <p>Export task creation datetime.</p>
   */
  creationDateTime?: string;

  /**
   * @public
   * <p>Export task end datetime.</p>
   */
  endDateTime?: string;

  /**
   * @public
   * <p>Export task status.</p>
   */
  status?: ExportStatus;

  /**
   * @public
   * <p>Export task progress percentage.</p>
   */
  progressPercentage?: number;

  /**
   * @public
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
   * @public
   * <p>List export response items.</p>
   */
  items?: ExportTask[];

  /**
   * @public
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
   * @public
   * <p>Start export request s3 bucket.</p>
   */
  s3Bucket: string | undefined;

  /**
   * @public
   * <p>Start export request s3key.</p>
   */
  s3Key: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>List import errors request import id.</p>
   */
  importID: string | undefined;

  /**
   * @public
   * <p>List import errors request max results.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>Import error data source server ID.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>Import error data application ID.</p>
   */
  applicationID?: string;

  /**
   * @public
   * <p>Import error data wave id.</p>
   */
  waveID?: string;

  /**
   * @public
   * <p>Import error data ec2 LaunchTemplate ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * @public
   * <p>Import error data row number.</p>
   */
  rowNumber?: number;

  /**
   * @public
   * <p>Import error data raw error.</p>
   */
  rawError?: string;

  /**
   * @public
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
   * @public
   * <p>Import task error datetime.</p>
   */
  errorDateTime?: string;

  /**
   * @public
   * <p>Import task error type.</p>
   */
  errorType?: ImportErrorType;

  /**
   * @public
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
   * @public
   * <p>List imports errors response items.</p>
   */
  items?: ImportTaskError[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>List imports request filters.</p>
   */
  filters?: ListImportsRequestFilters;

  /**
   * @public
   * <p>List imports request max results.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>S3 bucket source s3 bucket.</p>
   */
  s3Bucket: string | undefined;

  /**
   * @public
   * <p>S3 bucket source s3 key.</p>
   */
  s3Key: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Import task summary applications created count.</p>
   */
  createdCount?: number;

  /**
   * @public
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
   * @public
   * <p>Import task summary servers created count.</p>
   */
  createdCount?: number;

  /**
   * @public
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
   * @public
   * <p>Import task summery waves created count.</p>
   */
  createdCount?: number;

  /**
   * @public
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
   * @public
   * <p>Import task summary waves.</p>
   */
  waves?: ImportTaskSummaryWaves;

  /**
   * @public
   * <p>Import task summary applications.</p>
   */
  applications?: ImportTaskSummaryApplications;

  /**
   * @public
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
   * @public
   * <p>Import task id.</p>
   */
  importID?: string;

  /**
   * @public
   * <p>Import task s3 bucket source.</p>
   */
  s3BucketSource?: S3BucketSource;

  /**
   * @public
   * <p>Import task creation datetime.</p>
   */
  creationDateTime?: string;

  /**
   * @public
   * <p>Import task end datetime.</p>
   */
  endDateTime?: string;

  /**
   * @public
   * <p>Import task status.</p>
   */
  status?: ImportStatus;

  /**
   * @public
   * <p>Import task progress percentage.</p>
   */
  progressPercentage?: number;

  /**
   * @public
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
   * @public
   * <p>List import response items.</p>
   */
  items?: ImportTask[];

  /**
   * @public
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
   * @public
   * <p>Start import request client token.</p>
   */
  clientToken?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Request to delete Job from service by Job ID.</p>
   */
  jobID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Request to describe Job log job ID.</p>
   */
  jobID: string | undefined;

  /**
   * @public
   * <p>Request to describe Job log item maximum results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Request to describe Job log next token.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>Job Event Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>Job Event conversion Server ID.</p>
   */
  conversionServerID?: string;

  /**
   * @public
   * <p>Job Event Target instance ID.</p>
   */
  targetInstanceID?: string;

  /**
   * @public
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
   * @public
   * <p>Job log event date and time.</p>
   */
  logDateTime?: string;

  /**
   * @public
   * <p>Job log event.</p>
   */
  event?: JobLogEvent;

  /**
   * @public
   * <p>Job event data</p>
   */
  eventData?: JobLogEventData;
}

/**
 * @public
 */
export interface DescribeJobLogItemsResponse {
  /**
   * @public
   * <p>Request to describe Job log response items.</p>
   */
  items?: JobLog[];

  /**
   * @public
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
   * @public
   * <p>Request to describe Job log filters by job ID.</p>
   */
  jobIDs?: string[];

  /**
   * @public
   * <p>Request to describe Job log filters by date.</p>
   */
  fromDate?: string;

  /**
   * @public
   * <p>Request to describe job log items by last date.</p>
   */
  toDate?: string;
}

/**
 * @public
 */
export interface DescribeJobsRequest {
  /**
   * @public
   * <p>Request to describe Job log filters.</p>
   */
  filters?: DescribeJobsRequestFilters;

  /**
   * @public
   * <p>Request to describe job log items by max results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Request to describe job log items by next token.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>AWS Systems Manager Document external parameters dynamic path.</p>
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
 * @public
 * <p>AWS Systems Manager Parameter Store parameter.</p>
 */
export interface SsmParameterStoreParameter {
  /**
   * @public
   * <p>AWS Systems Manager Parameter Store parameter type.</p>
   */
  parameterType: SsmParameterStoreParameterType | undefined;

  /**
   * @public
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
   * @public
   * <p>User-friendly name for the AWS Systems Manager Document.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>AWS Systems Manager Document name or full ARN.</p>
   */
  ssmDocumentName: string | undefined;

  /**
   * @public
   * <p>AWS Systems Manager Document timeout seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * @public
   * <p>If true, Cutover will not be enabled if the document has failed.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * @public
   * <p>AWS Systems Manager Document parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * @public
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
   * @public
   * <p>AWS Systems Manager's Document of the of the Job Post Launch Actions.</p>
   */
  ssmDocument?: SsmDocument;

  /**
   * @public
   * <p>AWS Systems Manager Document type.</p>
   */
  ssmDocumentType?: SsmDocumentType;

  /**
   * @public
   * <p>AWS Systems Manager Document's execution ID of the of the Job Post Launch Actions.</p>
   */
  executionID?: string;

  /**
   * @public
   * <p>AWS Systems Manager Document's execution status.</p>
   */
  executionStatus?: PostLaunchActionExecutionStatus;

  /**
   * @public
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
   * @public
   * <p>Time where the AWS Systems Manager was detected as running on the Test or Cutover instance.</p>
   */
  ssmAgentDiscoveryDatetime?: string;

  /**
   * @public
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
   * @public
   * <p>Participating server Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Participating server launch status.</p>
   */
  launchStatus?: LaunchStatus;

  /**
   * @public
   * <p>Participating server's launched ec2 instance ID.</p>
   */
  launchedEc2InstanceID?: string;

  /**
   * @public
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
   * @public
   * <p>Job ID.</p>
   */
  jobID: string | undefined;

  /**
   * @public
   * <p>the ARN of the specific Job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Job type.</p>
   */
  type?: JobType;

  /**
   * @public
   * <p>Job initiated by field.</p>
   */
  initiatedBy?: InitiatedBy;

  /**
   * @public
   * <p>Job creation time.</p>
   */
  creationDateTime?: string;

  /**
   * @public
   * <p>Job end time.</p>
   */
  endDateTime?: string;

  /**
   * @public
   * <p>Job status.</p>
   */
  status?: JobStatus;

  /**
   * @public
   * <p>Servers participating in a specific Job.</p>
   */
  participatingServers?: ParticipatingServer[];

  /**
   * @public
   * <p>Tags associated with specific Job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeJobsResponse {
  /**
   * @public
   * <p>Request to describe Job log items.</p>
   */
  items?: Job[];

  /**
   * @public
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
   * @public
   * <p>Launch template disk volume type configuration.</p>
   */
  volumeType?: VolumeType;

  /**
   * @public
   * <p>Launch template disk iops configuration.</p>
   */
  iops?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Deployment type in which AWS Systems Manager Documents will be executed.</p>
   */
  deployment?: PostLaunchActionsDeploymentType;

  /**
   * @public
   * <p>AWS Systems Manager Command's logs S3 log bucket.</p>
   */
  s3LogBucket?: string;

  /**
   * @public
   * <p>AWS Systems Manager Command's logs S3 output key prefix.</p>
   */
  s3OutputKeyPrefix?: string;

  /**
   * @public
   * <p>AWS Systems Manager Command's CloudWatch log group name.</p>
   */
  cloudWatchLogGroupName?: string;

  /**
   * @public
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
   * @public
   * <p>Launch configuration template post launch actions.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * @public
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * @public
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * @public
   * <p>Request to associate tags during creation of a Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition;

  /**
   * @public
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * @public
   * <p>Copy private Ip.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Associate public Ip address.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Configure Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>Launch configuration template boot mode.</p>
   */
  bootMode?: BootMode;

  /**
   * @public
   * <p>Small volume maximum size.</p>
   */
  smallVolumeMaxSize?: number;

  /**
   * @public
   * <p>Small volume config.</p>
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * @public
   * <p>Large volume config.</p>
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 */
export interface LaunchConfigurationTemplate {
  /**
   * @public
   * <p>ID of the Launch Configuration Template.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>ARN of the Launch Configuration Template.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Post Launch Actions of the Launch Configuration Template.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * @public
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * @public
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * @public
   * <p>Tags of the Launch Configuration Template.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>EC2 launch template ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * @public
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition;

  /**
   * @public
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * @public
   * <p>Copy private Ip.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Associate public Ip address.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Configure Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>Launch configuration template boot mode.</p>
   */
  bootMode?: BootMode;

  /**
   * @public
   * <p>Small volume maximum size.</p>
   */
  smallVolumeMaxSize?: number;

  /**
   * @public
   * <p>Small volume config.</p>
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * @public
   * <p>Large volume config.</p>
   */
  largeVolumeConf?: LaunchTemplateDiskConf;
}

/**
 * @public
 */
export interface DeleteLaunchConfigurationTemplateRequest {
  /**
   * @public
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
   * @public
   * <p>Request to filter Launch Configuration Templates list by Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateIDs?: string[];

  /**
   * @public
   * <p>Maximum results to be returned in DescribeLaunchConfigurationTemplates.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Next pagination token returned from DescribeLaunchConfigurationTemplates.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeLaunchConfigurationTemplatesResponse {
  /**
   * @public
   * <p>List of items returned by DescribeLaunchConfigurationTemplates.</p>
   */
  items?: LaunchConfigurationTemplate[];

  /**
   * @public
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
   * @public
   * <p>Action IDs to filter template post migration custom actions by.</p>
   */
  actionIDs?: string[];
}

/**
 * @public
 */
export interface ListTemplateActionsRequest {
  /**
   * @public
   * <p>Launch configuration template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>Filters to apply when listing template post migration custom actions.</p>
   */
  filters?: TemplateActionsRequestFilters;

  /**
   * @public
   * <p>Maximum amount of items to return when listing template post migration custom actions.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Next token to use when listing template post migration custom actions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TemplateActionDocument {
  /**
   * @public
   * <p>Template post migration custom action ID.</p>
   */
  actionID?: string;

  /**
   * @public
   * <p>Template post migration custom action name.</p>
   */
  actionName?: string;

  /**
   * @public
   * <p>Template post migration custom action document identifier.</p>
   */
  documentIdentifier?: string;

  /**
   * @public
   * <p>Template post migration custom action order.</p>
   */
  order?: number;

  /**
   * @public
   * <p>Template post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * @public
   * <p>Template post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * @public
   * <p>Template post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * @public
   * <p>Template post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * @public
   * <p>Template post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * @public
   * <p>Operating system eligible for this template post migration custom action.</p>
   */
  operatingSystem?: string;

  /**
   * @public
   * <p>Template post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * @public
   * <p>Template post migration custom action description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Template post migration custom action category.</p>
   */
  category?: ActionCategory;
}

/**
 * @public
 */
export interface ListTemplateActionsResponse {
  /**
   * @public
   * <p>List of template post migration custom actions.</p>
   */
  items?: TemplateActionDocument[];

  /**
   * @public
   * <p>Next token returned when listing template post migration custom actions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutTemplateActionRequest {
  /**
   * @public
   * <p>Launch configuration template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>Template post migration custom action name.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>Template post migration custom action document identifier.</p>
   */
  documentIdentifier: string | undefined;

  /**
   * @public
   * <p>Template post migration custom action order.</p>
   */
  order: number | undefined;

  /**
   * @public
   * <p>Template post migration custom action ID.</p>
   */
  actionID: string | undefined;

  /**
   * @public
   * <p>Template post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * @public
   * <p>Template post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * @public
   * <p>Template post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * @public
   * <p>Template post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * @public
   * <p>Template post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * @public
   * <p>Operating system eligible for this template post migration custom action.</p>
   */
  operatingSystem?: string;

  /**
   * @public
   * <p>Template post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * @public
   * <p>Template post migration custom action description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Template post migration custom action category.</p>
   */
  category?: ActionCategory;
}

/**
 * @public
 */
export interface RemoveTemplateActionRequest {
  /**
   * @public
   * <p>Launch configuration template ID of the post migration custom action to remove.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Launch Configuration Template ID.</p>
   */
  launchConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>Post Launch Action to execute on the Test or Cutover instance.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * @public
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * @public
   * <p>Launch configuration template map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * @public
   * <p>Launch disposition.</p>
   */
  launchDisposition?: LaunchDisposition;

  /**
   * @public
   * <p>Target instance type right-sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * @public
   * <p>Copy private Ip.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Associate public Ip address.</p>
   */
  associatePublicIpAddress?: boolean;

  /**
   * @public
   * <p>Copy tags.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Configure Licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>Launch configuration template boot mode.</p>
   */
  bootMode?: BootMode;

  /**
   * @public
   * <p>Small volume maximum size.</p>
   */
  smallVolumeMaxSize?: number;

  /**
   * @public
   * <p>Small volume config.</p>
   */
  smallVolumeConf?: LaunchTemplateDiskConf;

  /**
   * @public
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
   * @public
   * <p>List managed accounts request max results.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>List managed accounts response items.</p>
   */
  items: ManagedAccount[] | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>List tags for resource request by ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
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
   * @public
   * <p>Reached throttling quota exception service code.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>Reached throttling quota exception.</p>
   */
  quotaCode?: string;

  /**
   * @public
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
   * @public
   * <p>Request to configure the Staging Area subnet ID during Replication Settings template creation.</p>
   */
  stagingAreaSubnetId: string | undefined;

  /**
   * @public
   * <p>Request to associate the default Application Migration Service Security group with the Replication Settings template.</p>
   */
  associateDefaultSecurityGroup: boolean | undefined;

  /**
   * @public
   * <p>Request to configure the Replication Server Security group ID during Replication Settings template creation.</p>
   */
  replicationServersSecurityGroupsIDs: string[] | undefined;

  /**
   * @public
   * <p>Request to configure the Replication Server instance type during Replication Settings template creation.</p>
   */
  replicationServerInstanceType: string | undefined;

  /**
   * @public
   * <p>Request to use Dedicated Replication Servers during Replication Settings template creation.</p>
   */
  useDedicatedReplicationServer: boolean | undefined;

  /**
   * @public
   * <p>Request to configure the default large staging disk EBS volume type during Replication Settings template creation.</p>
   */
  defaultLargeStagingDiskType: ReplicationConfigurationDefaultLargeStagingDiskType | undefined;

  /**
   * @public
   * <p>Request to configure EBS encryption during Replication Settings template creation.</p>
   */
  ebsEncryption: ReplicationConfigurationEbsEncryption | undefined;

  /**
   * @public
   * <p>Request to configure an EBS encryption key during Replication Settings template creation.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Request to configure bandwidth throttling during Replication Settings template creation.</p>
   */
  bandwidthThrottling: number | undefined;

  /**
   * @public
   * <p>Request to configure  data plane routing during Replication Settings template creation.</p>
   */
  dataPlaneRouting: ReplicationConfigurationDataPlaneRouting | undefined;

  /**
   * @public
   * <p>Request to create Public IP during Replication Settings template creation.</p>
   */
  createPublicIP: boolean | undefined;

  /**
   * @public
   * <p>Request to configure Staging Area tags during Replication Settings template creation.</p>
   */
  stagingAreaTags: Record<string, string> | undefined;

  /**
   * @public
   * <p>Request to use Fips Endpoint during Replication Settings template creation.</p>
   */
  useFipsEndpoint?: boolean;

  /**
   * @public
   * <p>Request to configure tags during Replication Settings template creation.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ReplicationConfigurationTemplate {
  /**
   * @public
   * <p>Replication Configuration template ID.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>Replication Configuration template ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Replication Configuration template Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Replication Configuration template associate default Application Migration Service Security group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>Replication Configuration template server Security Groups IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>Replication Configuration template server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Replication Configuration template use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>Replication Configuration template use default large Staging Disk type.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * @public
   * <p>Replication Configuration template EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * @public
   * <p>Replication Configuration template EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Replication Configuration template bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>Replication Configuration template data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * @public
   * <p>Replication Configuration template create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>Replication Configuration template Staging Area Tags.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
   * <p>Replication Configuration template use Fips Endpoint.</p>
   */
  useFipsEndpoint?: boolean;

  /**
   * @public
   * <p>Replication Configuration template Tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteReplicationConfigurationTemplateRequest {
  /**
   * @public
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
   * @public
   * <p>Request to describe Replication Configuration template by template IDs.</p>
   */
  replicationConfigurationTemplateIDs?: string[];

  /**
   * @public
   * <p>Request to describe Replication Configuration template by max results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeReplicationConfigurationTemplatesResponse {
  /**
   * @public
   * <p>Request to describe Replication Configuration template by items.</p>
   */
  items?: ReplicationConfigurationTemplate[];

  /**
   * @public
   * <p>Request to describe Replication Configuration template by next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationTemplateRequest {
  /**
   * @public
   * <p>Update replication configuration template template ID request.</p>
   */
  replicationConfigurationTemplateID: string | undefined;

  /**
   * @public
   * <p>Update replication configuration template ARN request.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Update replication configuration template Staging Area subnet ID request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Update replication configuration template associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>Update replication configuration template Replication Server Security groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>Update replication configuration template Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Update replication configuration template use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>Update replication configuration template use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * @public
   * <p>Update replication configuration template EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * @public
   * <p>Update replication configuration template EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Update replication configuration template bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>Update replication configuration template data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * @public
   * <p>Update replication configuration template create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>Update replication configuration template Staging Area Tags request.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
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
   * @public
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  state: ChangeServerLifeCycleStateSourceServerLifecycleState | undefined;
}

/**
 * @public
 */
export interface ChangeServerLifeCycleStateRequest {
  /**
   * @public
   * <p>The request to change the source server migration lifecycle state by source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>The request to change the source server migration lifecycle state.</p>
   */
  lifeCycle: ChangeServerLifeCycleStateSourceServerLifecycle | undefined;

  /**
   * @public
   * <p>The request to change the source server migration account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 * <p>Source Server connector action.</p>
 */
export interface SourceServerConnectorAction {
  /**
   * @public
   * <p>Source Server connector action credentials secret arn.</p>
   */
  credentialsSecretArn?: string;

  /**
   * @public
   * <p>Source Server connector action connector arn.</p>
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
 * @public
 * <p>Error in data replication.</p>
 */
export interface DataReplicationError {
  /**
   * @public
   * <p>Error in data replication.</p>
   */
  error?: DataReplicationErrorString;

  /**
   * @public
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
   * @public
   * <p>Request to query data initiation step name.</p>
   */
  name?: DataReplicationInitiationStepName;

  /**
   * @public
   * <p>Request to query data initiation status.</p>
   */
  status?: DataReplicationInitiationStepStatus;
}

/**
 * @public
 * <p>Data replication initiation.</p>
 */
export interface DataReplicationInitiation {
  /**
   * @public
   * <p>Request to query data initiation start date and time.</p>
   */
  startDateTime?: string;

  /**
   * @public
   * <p>Request to query next data initiation date and time.</p>
   */
  nextAttemptDateTime?: string;

  /**
   * @public
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
   * @public
   * <p>Request to query device name.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>Request to query total amount of data replicated in bytes.</p>
   */
  totalStorageBytes?: number;

  /**
   * @public
   * <p>Request to query amount of data replicated in bytes.</p>
   */
  replicatedStorageBytes?: number;

  /**
   * @public
   * <p>Request to query amount of data rescanned in bytes.</p>
   */
  rescannedStorageBytes?: number;

  /**
   * @public
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
   * @public
   * <p>Request to query data replication lag duration.</p>
   */
  lagDuration?: string;

  /**
   * @public
   * <p>Request to query the time when data replication will be complete.</p>
   */
  etaDateTime?: string;

  /**
   * @public
   * <p>Request to query disks replicated.</p>
   */
  replicatedDisks?: DataReplicationInfoReplicatedDisk[];

  /**
   * @public
   * <p>Request to query the data replication state.</p>
   */
  dataReplicationState?: DataReplicationState;

  /**
   * @public
   * <p>Request to query whether data replication has been initiated.</p>
   */
  dataReplicationInitiation?: DataReplicationInitiation;

  /**
   * @public
   * <p>Error in obtaining data replication info.</p>
   */
  dataReplicationError?: DataReplicationError;

  /**
   * @public
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
   * @public
   * <p>Launched instance EC2 ID.</p>
   */
  ec2InstanceID?: string;

  /**
   * @public
   * <p>Launched instance Job ID.</p>
   */
  jobID?: string;

  /**
   * @public
   * <p>Launched instance first boot.</p>
   */
  firstBoot?: FirstBoot;
}

/**
 * @public
 * <p>Lifecycle Cutover finalized</p>
 */
export interface LifeCycleLastCutoverFinalized {
  /**
   * @public
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
   * @public
   * <p/>
   */
  apiCallDateTime?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Lifecycle last Cutover initiated.</p>
   */
  initiated?: LifeCycleLastCutoverInitiated;

  /**
   * @public
   * <p>Lifecycle last Cutover reverted.</p>
   */
  reverted?: LifeCycleLastCutoverReverted;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Lifecycle last Test initiated API call date and time.</p>
   */
  apiCallDateTime?: string;

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Lifecycle last Test initiated.</p>
   */
  initiated?: LifeCycleLastTestInitiated;

  /**
   * @public
   * <p>Lifecycle last Test reverted.</p>
   */
  reverted?: LifeCycleLastTestReverted;

  /**
   * @public
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
   * @public
   * <p>Lifecycle added to service data and time.</p>
   */
  addedToServiceDateTime?: string;

  /**
   * @public
   * <p>Lifecycle replication initiation date and time.</p>
   */
  firstByteDateTime?: string;

  /**
   * @public
   * <p>Lifecycle elapsed time and duration.</p>
   */
  elapsedReplicationDuration?: string;

  /**
   * @public
   * <p>Lifecycle last seen date and time.</p>
   */
  lastSeenByServiceDateTime?: string;

  /**
   * @public
   * <p>Lifecycle last Test.</p>
   */
  lastTest?: LifeCycleLastTest;

  /**
   * @public
   * <p>Lifecycle last Cutover.</p>
   */
  lastCutover?: LifeCycleLastCutover;

  /**
   * @public
   * <p>Lifecycle state.</p>
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
 * @public
 * <p>Source server CPU information.</p>
 */
export interface CPU {
  /**
   * @public
   * <p>The number of CPU cores on the source server.</p>
   */
  cores?: number;

  /**
   * @public
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
   * @public
   * <p>The disk or device name.</p>
   */
  deviceName?: string;

  /**
   * @public
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
   * @public
   * <p>FQDN address identification hint.</p>
   */
  fqdn?: string;

  /**
   * @public
   * <p>Hostname identification hint.</p>
   */
  hostname?: string;

  /**
   * @public
   * <p>vmWare UUID identification hint.</p>
   */
  vmWareUuid?: string;

  /**
   * @public
   * <p>AWS Instance ID identification hint.</p>
   */
  awsInstanceID?: string;

  /**
   * @public
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
   * @public
   * <p>Network interface Mac address.</p>
   */
  macAddress?: string;

  /**
   * @public
   * <p>Network interface IPs.</p>
   */
  ips?: string[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>Source server last update date and time.</p>
   */
  lastUpdatedDateTime?: string;

  /**
   * @public
   * <p>Source server recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * @public
   * <p>Source server identification hints.</p>
   */
  identificationHints?: IdentificationHints;

  /**
   * @public
   * <p>Source server network interfaces.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>Source Server disks.</p>
   */
  disks?: Disk[];

  /**
   * @public
   * <p>Source Server CPUs.</p>
   */
  cpus?: CPU[];

  /**
   * @public
   * <p>Source server RAM in bytes.</p>
   */
  ramBytes?: number;

  /**
   * @public
   * <p>Source server OS.</p>
   */
  os?: OS;
}

/**
 * @public
 */
export interface SourceServer {
  /**
   * @public
   * <p>Source server ID.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>Source server ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Source server archived status.</p>
   */
  isArchived?: boolean;

  /**
   * @public
   * <p>Source server Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Source server launched instance.</p>
   */
  launchedInstance?: LaunchedInstance;

  /**
   * @public
   * <p>Source server data replication info.</p>
   */
  dataReplicationInfo?: DataReplicationInfo;

  /**
   * @public
   * <p>Source server lifecycle state.</p>
   */
  lifeCycle?: LifeCycle;

  /**
   * @public
   * <p>Source server properties.</p>
   */
  sourceProperties?: SourceProperties;

  /**
   * @public
   * <p>Source server replication type.</p>
   */
  replicationType?: ReplicationType;

  /**
   * @public
   * <p>Source server vCenter client id.</p>
   */
  vcenterClientID?: string;

  /**
   * @public
   * <p>Source server application ID.</p>
   */
  applicationID?: string;

  /**
   * @public
   * <p>Source server user provided ID.</p>
   */
  userProvidedID?: string;

  /**
   * @public
   * <p>Source server fqdn for action framework.</p>
   */
  fqdnForActionFramework?: string;

  /**
   * @public
   * <p>Source Server connector action.</p>
   */
  connectorAction?: SourceServerConnectorAction;
}

/**
 * @public
 */
export interface DeleteSourceServerRequest {
  /**
   * @public
   * <p>Request to delete Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Request to filter Source Servers list by Source Server ID.</p>
   */
  sourceServerIDs?: string[];

  /**
   * @public
   * <p>Request to filter Source Servers list by archived.</p>
   */
  isArchived?: boolean;

  /**
   * @public
   * <p>Request to filter Source Servers list by replication type.</p>
   */
  replicationTypes?: ReplicationType[];

  /**
   * @public
   * <p>Request to filter Source Servers list by life cycle states.</p>
   */
  lifeCycleStates?: LifeCycleState[];

  /**
   * @public
   * <p>Request to filter Source Servers list by application IDs.</p>
   */
  applicationIDs?: string[];
}

/**
 * @public
 */
export interface DescribeSourceServersRequest {
  /**
   * @public
   * <p>Request to filter Source Servers list.</p>
   */
  filters?: DescribeSourceServersRequestFilters;

  /**
   * @public
   * <p>Request to filter Source Servers list by maximum results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Request to filter Source Servers list by next token.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Request to filter Source Servers list by Accoun ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DescribeSourceServersResponse {
  /**
   * @public
   * <p>Request to filter Source Servers list by item.</p>
   */
  items?: SourceServer[];

  /**
   * @public
   * <p>Request to filter Source Servers next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DisconnectFromServiceRequest {
  /**
   * @public
   * <p>Request to disconnect Source Server from service by Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Request to disconnect Source Server from service by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface FinalizeCutoverRequest {
  /**
   * @public
   * <p>Request to finalize Cutover by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Request to finalize Cutover by Source Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface GetLaunchConfigurationRequest {
  /**
   * @public
   * <p>Request to get Launch Configuration information by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Request to get Launch Configuration information by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface LaunchConfiguration {
  /**
   * @public
   * <p>Launch configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>Launch configuration name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Launch configuration EC2 Launch template ID.</p>
   */
  ec2LaunchTemplateID?: string;

  /**
   * @public
   * <p>Launch disposition for launch configuration.</p>
   */
  launchDisposition?: LaunchDisposition;

  /**
   * @public
   * <p>Launch configuration Target instance type right sizing method.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * @public
   * <p>Copy Private IP during Launch Configuration.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Copy Tags during Launch Configuration.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Launch configuration OS licensing.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>Launch configuration boot mode.</p>
   */
  bootMode?: BootMode;

  /**
   * @public
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * @public
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * @public
   * <p>Map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;
}

/**
 * @public
 */
export interface GetReplicationConfigurationRequest {
  /**
   * @public
   * <p>Request to get Replication Configuration by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Replication Configuration replicated disk device name.</p>
   */
  deviceName?: string;

  /**
   * @public
   * <p>Replication Configuration replicated disk boot disk.</p>
   */
  isBootDisk?: boolean;

  /**
   * @public
   * <p>Replication Configuration replicated disk staging disk type.</p>
   */
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;

  /**
   * @public
   * <p>Replication Configuration replicated disk IOPs.</p>
   */
  iops?: number;

  /**
   * @public
   * <p>Replication Configuration replicated disk throughput.</p>
   */
  throughput?: number;
}

/**
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * @public
   * <p>Replication Configuration Source Server ID.</p>
   */
  sourceServerID?: string;

  /**
   * @public
   * <p>Replication Configuration name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Replication Configuration Staging Area subnet ID.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Replication Configuration associate default Application Migration Service Security Group.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>Replication Configuration Replication Server Security Group IDs.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>Replication Configuration Replication Server instance type.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Replication Configuration use Dedicated Replication Server.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>Replication Configuration use default large Staging Disks.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * @public
   * <p>Replication Configuration replicated disks.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * @public
   * <p>Replication Configuration EBS encryption.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * @public
   * <p>Replication Configuration EBS encryption key ARN.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Replication Configuration set bandwidth throttling.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>Replication Configuration data plane routing.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * @public
   * <p>Replication Configuration create Public IP.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>Replication Configuration Staging Area tags.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
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
   * @public
   * <p>Action IDs to filter source server post migration custom actions by.</p>
   */
  actionIDs?: string[];
}

/**
 * @public
 */
export interface ListSourceServerActionsRequest {
  /**
   * @public
   * <p>Source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Filters to apply when listing source server post migration custom actions.</p>
   */
  filters?: SourceServerActionsRequestFilters;

  /**
   * @public
   * <p>Maximum amount of items to return when listing source server post migration custom actions.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Next token to use when listing source server post migration custom actions.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Account ID to return when listing source server post migration custom actions.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface SourceServerActionDocument {
  /**
   * @public
   * <p>Source server post migration custom action ID.</p>
   */
  actionID?: string;

  /**
   * @public
   * <p>Source server post migration custom action name.</p>
   */
  actionName?: string;

  /**
   * @public
   * <p>Source server post migration custom action document identifier.</p>
   */
  documentIdentifier?: string;

  /**
   * @public
   * <p>Source server post migration custom action order.</p>
   */
  order?: number;

  /**
   * @public
   * <p>Source server post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * @public
   * <p>Source server post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * @public
   * <p>Source server post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * @public
   * <p>Source server post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * @public
   * <p>Source server post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * @public
   * <p>Source server post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * @public
   * <p>Source server post migration custom action description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Source server post migration custom action category.</p>
   */
  category?: ActionCategory;
}

/**
 * @public
 */
export interface ListSourceServerActionsResponse {
  /**
   * @public
   * <p>List of source server post migration custom actions.</p>
   */
  items?: SourceServerActionDocument[];

  /**
   * @public
   * <p>Next token returned when listing source server post migration custom actions.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface MarkAsArchivedRequest {
  /**
   * @public
   * <p>Mark as archived by Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Mark as archived by Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface PauseReplicationRequest {
  /**
   * @public
   * <p>Pause Replication Request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Pause Replication Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface PutSourceServerActionRequest {
  /**
   * @public
   * <p>Source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Source server post migration custom action name.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>Source server post migration custom action document identifier.</p>
   */
  documentIdentifier: string | undefined;

  /**
   * @public
   * <p>Source server post migration custom action order.</p>
   */
  order: number | undefined;

  /**
   * @public
   * <p>Source server post migration custom action ID.</p>
   */
  actionID: string | undefined;

  /**
   * @public
   * <p>Source server post migration custom action document version.</p>
   */
  documentVersion?: string;

  /**
   * @public
   * <p>Source server post migration custom action active status.</p>
   */
  active?: boolean;

  /**
   * @public
   * <p>Source server post migration custom action timeout in seconds.</p>
   */
  timeoutSeconds?: number;

  /**
   * @public
   * <p>Source server post migration custom action must succeed for cutover.</p>
   */
  mustSucceedForCutover?: boolean;

  /**
   * @public
   * <p>Source server post migration custom action parameters.</p>
   */
  parameters?: Record<string, SsmParameterStoreParameter[]>;

  /**
   * @public
   * <p>Source server post migration custom action external parameters.</p>
   */
  externalParameters?: Record<string, SsmExternalParameter>;

  /**
   * @public
   * <p>Source server post migration custom action description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Source server post migration custom action category.</p>
   */
  category?: ActionCategory;

  /**
   * @public
   * <p>Source server post migration custom account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RemoveSourceServerActionRequest {
  /**
   * @public
   * <p>Source server ID of the post migration custom action to remove.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Source server post migration custom action ID to remove.</p>
   */
  actionID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Resume Replication Request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Resume Replication Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface RetryDataReplicationRequest {
  /**
   * @public
   * <p>Retry data replication for Source Server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Retry data replication for Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartCutoverRequest {
  /**
   * @public
   * <p>Start Cutover by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * @public
   * <p>Start Cutover by Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Start Cutover by Account IDs</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartCutoverResponse {
  /**
   * @public
   * <p>Start Cutover Job response.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StartReplicationRequest {
  /**
   * @public
   * <p>ID of source server on which to start replication.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Account ID on which to start replication.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartTestRequest {
  /**
   * @public
   * <p>Start Test for Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * @public
   * <p>Start Test by Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Start Test for Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface StartTestResponse {
  /**
   * @public
   * <p>Start Test Job response.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface StopReplicationRequest {
  /**
   * @public
   * <p>Stop Replication Request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Stop Replication Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TerminateTargetInstancesRequest {
  /**
   * @public
   * <p>Terminate Target instance by Source Server IDs.</p>
   */
  sourceServerIDs: string[] | undefined;

  /**
   * @public
   * <p>Terminate Target instance by Tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Terminate Target instance by Account ID</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TerminateTargetInstancesResponse {
  /**
   * @public
   * <p>Terminate Target instance Job response.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface UpdateLaunchConfigurationRequest {
  /**
   * @public
   * <p>Update Launch configuration by Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Update Launch configuration name request.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Update Launch configuration launch disposition request.</p>
   */
  launchDisposition?: LaunchDisposition;

  /**
   * @public
   * <p>Update Launch configuration Target instance right sizing request.</p>
   */
  targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;

  /**
   * @public
   * <p>Update Launch configuration copy Private IP request.</p>
   */
  copyPrivateIp?: boolean;

  /**
   * @public
   * <p>Update Launch configuration copy Tags request.</p>
   */
  copyTags?: boolean;

  /**
   * @public
   * <p>Update Launch configuration licensing request.</p>
   */
  licensing?: Licensing;

  /**
   * @public
   * <p>Update Launch configuration boot mode request.</p>
   */
  bootMode?: BootMode;

  /**
   * @public
   * <p>Post Launch Actions to executed on the Test or Cutover instance.</p>
   */
  postLaunchActions?: PostLaunchActions;

  /**
   * @public
   * <p>Enable map auto tagging.</p>
   */
  enableMapAutoTagging?: boolean;

  /**
   * @public
   * <p>Launch configuration map auto tagging MPE ID.</p>
   */
  mapAutoTaggingMpeID?: string;

  /**
   * @public
   * <p>Update Launch configuration Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateReplicationConfigurationRequest {
  /**
   * @public
   * <p>Update replication configuration Source Server ID request.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Update replication configuration name request.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Update replication configuration Staging Area subnet request.</p>
   */
  stagingAreaSubnetId?: string;

  /**
   * @public
   * <p>Update replication configuration associate default Application Migration Service Security group request.</p>
   */
  associateDefaultSecurityGroup?: boolean;

  /**
   * @public
   * <p>Update replication configuration Replication Server Security Groups IDs request.</p>
   */
  replicationServersSecurityGroupsIDs?: string[];

  /**
   * @public
   * <p>Update replication configuration Replication Server instance type request.</p>
   */
  replicationServerInstanceType?: string;

  /**
   * @public
   * <p>Update replication configuration use dedicated Replication Server request.</p>
   */
  useDedicatedReplicationServer?: boolean;

  /**
   * @public
   * <p>Update replication configuration use default large Staging Disk type request.</p>
   */
  defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;

  /**
   * @public
   * <p>Update replication configuration replicated disks request.</p>
   */
  replicatedDisks?: ReplicationConfigurationReplicatedDisk[];

  /**
   * @public
   * <p>Update replication configuration EBS encryption request.</p>
   */
  ebsEncryption?: ReplicationConfigurationEbsEncryption;

  /**
   * @public
   * <p>Update replication configuration EBS encryption key ARN request.</p>
   */
  ebsEncryptionKeyArn?: string;

  /**
   * @public
   * <p>Update replication configuration bandwidth throttling request.</p>
   */
  bandwidthThrottling?: number;

  /**
   * @public
   * <p>Update replication configuration data plane routing request.</p>
   */
  dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;

  /**
   * @public
   * <p>Update replication configuration create Public IP request.</p>
   */
  createPublicIP?: boolean;

  /**
   * @public
   * <p>Update replication configuration Staging Area Tags request.</p>
   */
  stagingAreaTags?: Record<string, string>;

  /**
   * @public
   * <p>Update replication configuration use Fips Endpoint.</p>
   */
  useFipsEndpoint?: boolean;

  /**
   * @public
   * <p>Update replication configuration Account ID request.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateSourceServerRequest {
  /**
   * @public
   * <p>Update Source Server request account ID.</p>
   */
  accountID?: string;

  /**
   * @public
   * <p>Update Source Server request source server ID.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Update Source Server request connector action.</p>
   */
  connectorAction?: SourceServerConnectorAction;
}

/**
 * @public
 */
export interface UpdateSourceServerReplicationTypeRequest {
  /**
   * @public
   * <p>ID of source server on which to update replication type.</p>
   */
  sourceServerID: string | undefined;

  /**
   * @public
   * <p>Replication type to which to update source server.</p>
   */
  replicationType: ReplicationType | undefined;

  /**
   * @public
   * <p>Account ID on which to update replication type.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>Tag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Tag resource by Tags.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>Untag resource by ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Untag resource by Keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVcenterClientRequest {
  /**
   * @public
   * <p>ID of resource to be deleted.</p>
   */
  vcenterClientID: string | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsRequest {
  /**
   * @public
   * <p>Maximum results to be returned in DescribeVcenterClients.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
   * <p>ID of vCenter client.</p>
   */
  vcenterClientID?: string;

  /**
   * @public
   * <p>Arn of vCenter client.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Hostname of vCenter client .</p>
   */
  hostname?: string;

  /**
   * @public
   * <p>Vcenter UUID of vCenter client.</p>
   */
  vcenterUUID?: string;

  /**
   * @public
   * <p>Datacenter name of vCenter client.</p>
   */
  datacenterName?: string;

  /**
   * @public
   * <p>Last seen time of vCenter client.</p>
   */
  lastSeenDatetime?: string;

  /**
   * @public
   * <p>Tags for Source Server of vCenter client.</p>
   */
  sourceServerTags?: Record<string, string>;

  /**
   * @public
   * <p>Tags for vCenter client.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVcenterClientsResponse {
  /**
   * @public
   * <p>List of items returned by DescribeVcenterClients.</p>
   */
  items?: VcenterClient[];

  /**
   * @public
   * <p>Next pagination token returned from DescribeVcenterClients.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ArchiveWaveRequest {
  /**
   * @public
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Wave aggregated status last update dateTime.</p>
   */
  lastUpdateDateTime?: string;

  /**
   * @public
   * <p>DateTime marking when the first source server in the wave started replication.</p>
   */
  replicationStartedDateTime?: string;

  /**
   * @public
   * <p>Wave aggregated status health status.</p>
   */
  healthStatus?: WaveHealthStatus;

  /**
   * @public
   * <p>Wave aggregated status progress status.</p>
   */
  progressStatus?: WaveProgressStatus;

  /**
   * @public
   * <p>Wave aggregated status total applications amount.</p>
   */
  totalApplications?: number;
}

/**
 * @public
 */
export interface Wave {
  /**
   * @public
   * <p>Wave ID.</p>
   */
  waveID?: string;

  /**
   * @public
   * <p>Wave ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Wave name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Wave description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Wave archival status.</p>
   */
  isArchived?: boolean;

  /**
   * @public
   * <p>Wave aggregated status.</p>
   */
  waveAggregatedStatus?: WaveAggregatedStatus;

  /**
   * @public
   * <p>Wave creation dateTime.</p>
   */
  creationDateTime?: string;

  /**
   * @public
   * <p>Wave last modified dateTime.</p>
   */
  lastModifiedDateTime?: string;

  /**
   * @public
   * <p>Wave tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface AssociateApplicationsRequest {
  /**
   * @public
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * @public
   * <p>Application IDs list.</p>
   */
  applicationIDs: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>Wave name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Wave description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Wave tags.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface DeleteWaveRequest {
  /**
   * @public
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * @public
   * <p>Application IDs list.</p>
   */
  applicationIDs: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>Filter waves list by wave ID.</p>
   */
  waveIDs?: string[];

  /**
   * @public
   * <p>Filter waves list by archival status.</p>
   */
  isArchived?: boolean;
}

/**
 * @public
 */
export interface ListWavesRequest {
  /**
   * @public
   * <p>Waves list filters.</p>
   */
  filters?: ListWavesRequestFilters;

  /**
   * @public
   * <p>Maximum results to return when listing waves.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Request next token.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Request account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface ListWavesResponse {
  /**
   * @public
   * <p>Waves list.</p>
   */
  items?: Wave[];

  /**
   * @public
   * <p>Response next token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnarchiveWaveRequest {
  /**
   * @public
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * @public
   * <p>Account ID.</p>
   */
  accountID?: string;
}

/**
 * @public
 */
export interface UpdateWaveRequest {
  /**
   * @public
   * <p>Wave ID.</p>
   */
  waveID: string | undefined;

  /**
   * @public
   * <p>Wave name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Wave description.</p>
   */
  description?: string;

  /**
   * @public
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
