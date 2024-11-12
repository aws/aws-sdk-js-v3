// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ArtifactServiceException as __BaseException } from "./ArtifactServiceException";

/**
 * @public
 * @enum
 */
export const AcceptanceType = {
  /**
   * Require explicit click-through acceptance of
   * the Term associated with this Report.
   */
  EXPLICIT: "EXPLICIT",
  /**
   * Do not require explicit click-through
   * acceptance of the Term associated with
   * this Report.
   */
  PASSTHROUGH: "PASSTHROUGH",
} as const;

/**
 * @public
 */
export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType];

/**
 * <p>User does not have sufficient access to perform this action.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const NotificationSubscriptionStatus = {
  /**
   * The account is not subscribed for notification.
   */
  NOT_SUBSCRIBED: "NOT_SUBSCRIBED",
  /**
   * The account is subscribed for notification.
   */
  SUBSCRIBED: "SUBSCRIBED",
} as const;

/**
 * @public
 */
export type NotificationSubscriptionStatus =
  (typeof NotificationSubscriptionStatus)[keyof typeof NotificationSubscriptionStatus];

/**
 * <p>Account settings for the customer.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>Notification subscription status of the customer.</p>
   * @public
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus | undefined;
}

/**
 * <p>Request to create/modify content would result in a conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the affected resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the affected resource.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * <p>Account settings for the customer.</p>
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * <p>An unknown server exception has occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Number of seconds in which the caller can retry the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the affected resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the affected resource.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the affected resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the affected resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>Code for the affected service.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>Code for the affected quota.</p>
   * @public
   */
  quotaCode: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>Code for the affected service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Code for the affected quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Number of seconds in which the caller can retry the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
 * <p>Validation exception message and name.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Name of validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_TOKEN: "invalidToken",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reason the request failed validation.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The field that caused the error, if applicable.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface PutAccountSettingsRequest {
  /**
   * <p>Desired notification subscription status.</p>
   * @public
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingsResponse {
  /**
   * <p>Account settings for the customer.</p>
   * @public
   */
  accountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface GetReportRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  reportVersion?: number | undefined;

  /**
   * <p>Unique download token provided by GetTermForReport API.</p>
   * @public
   */
  termToken: string | undefined;
}

/**
 * @public
 */
export interface GetReportResponse {
  /**
   * <p>Presigned S3 url to access the report content.</p>
   * @public
   */
  documentPresignedUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetReportMetadataRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  reportVersion?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PublishedState = {
  /**
   * The resource is published for consumption.
   */
  PUBLISHED: "PUBLISHED",
  /**
   * The resource is not published for consumption.
   */
  UNPUBLISHED: "UNPUBLISHED",
} as const;

/**
 * @public
 */
export type PublishedState = (typeof PublishedState)[keyof typeof PublishedState];

/**
 * @public
 * @enum
 */
export const UploadState = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  FAULT: "FAULT",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type UploadState = (typeof UploadState)[keyof typeof UploadState];

/**
 * <p>Full detail for report resource metadata.</p>
 * @public
 */
export interface ReportDetail {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Name for the report resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Description for the report resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp indicating the report resource effective start.</p>
   * @public
   */
  periodStart?: Date | undefined;

  /**
   * <p>Timestamp indicating the report resource effective end.</p>
   * @public
   */
  periodEnd?: Date | undefined;

  /**
   * <p>Timestamp indicating when the report resource was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Timestamp indicating when the report resource was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>Timestamp indicating when the report resource was deleted.</p>
   * @public
   */
  deletedAt?: Date | undefined;

  /**
   * <p>Current state of the report resource</p>
   * @public
   */
  state?: PublishedState | undefined;

  /**
   * <p>ARN for the report resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Series for the report resource.</p>
   * @public
   */
  series?: string | undefined;

  /**
   * <p>Category for the report resource.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>Associated company name for the report resource.</p>
   * @public
   */
  companyName?: string | undefined;

  /**
   * <p>Associated product name for the report resource.</p>
   * @public
   */
  productName?: string | undefined;

  /**
   * <p>Unique resource ARN for term resource.</p>
   * @public
   */
  termArn?: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>Acceptance type for report.</p>
   * @public
   */
  acceptanceType?: AcceptanceType | undefined;

  /**
   * <p>Sequence number to enforce optimistic locking.</p>
   * @public
   */
  sequenceNumber?: number | undefined;

  /**
   * <p>The current state of the document upload.</p>
   * @public
   */
  uploadState?: UploadState | undefined;

  /**
   * <p>The message associated with the current upload state.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetReportMetadataResponse {
  /**
   * <p>Report resource detail.</p>
   * @public
   */
  reportDetails?: ReportDetail | undefined;
}

/**
 * @public
 */
export interface GetTermForReportRequest {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  reportVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetTermForReportResponse {
  /**
   * <p>Presigned S3 url to access the term content.</p>
   * @public
   */
  documentPresignedUrl?: string | undefined;

  /**
   * <p>Unique token representing this request event.</p>
   * @public
   */
  termToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportsRequest {
  /**
   * <p>Maximum number of resources to return in the paginated response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary for report resource.</p>
 * @public
 */
export interface ReportSummary {
  /**
   * <p>Unique resource ID for the report resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Name for the report resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Current state of the report resource.</p>
   * @public
   */
  state?: PublishedState | undefined;

  /**
   * <p>ARN for the report resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Version for the report resource.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The current state of the document upload.</p>
   * @public
   */
  uploadState?: UploadState | undefined;

  /**
   * <p>Description for the report resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Timestamp indicating the report resource effective start.</p>
   * @public
   */
  periodStart?: Date | undefined;

  /**
   * <p>Timestamp indicating the report resource effective end.</p>
   * @public
   */
  periodEnd?: Date | undefined;

  /**
   * <p>Series for the report resource.</p>
   * @public
   */
  series?: string | undefined;

  /**
   * <p>Category for the report resource.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>Associated company name for the report resource.</p>
   * @public
   */
  companyName?: string | undefined;

  /**
   * <p>Associated product name for the report resource.</p>
   * @public
   */
  productName?: string | undefined;

  /**
   * <p>The message associated with the current upload state.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>Acceptance type for report.</p>
   * @public
   */
  acceptanceType?: AcceptanceType | undefined;
}

/**
 * @public
 */
export interface ListReportsResponse {
  /**
   * <p>List of report resources.</p>
   * @public
   */
  reports?: ReportSummary[] | undefined;

  /**
   * <p>Pagination token to request the next page of resources.</p>
   * @public
   */
  nextToken?: string | undefined;
}
