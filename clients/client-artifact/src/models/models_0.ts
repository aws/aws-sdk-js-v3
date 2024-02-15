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
 * @public
 * <p>User does not have sufficient access to perform this action.</p>
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
 * @public
 * <p>Account settings for the customer.</p>
 */
export interface AccountSettings {
  /**
   * @public
   * <p>Notification subscription status of the customer.</p>
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus;
}

/**
 * @public
 * <p>Request to create/modify content would result in a conflict.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Identifier of the affected resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the affected resource.</p>
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
   * @public
   * <p>Account settings for the customer.</p>
   */
  accountSettings?: AccountSettings;
}

/**
 * @public
 * <p>An unknown server exception has occurred.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>Number of seconds in which the caller can retry the request.</p>
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
 * <p>Request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Identifier of the affected resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the affected resource.</p>
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
 * @public
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Identifier of the affected resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the affected resource.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>Code for the affected service.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>Code for the affected quota.</p>
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
 * @public
 * <p>Request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>Code for the affected service.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>Code for the affected quota.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>Number of seconds in which the caller can retry the request.</p>
   */
  retryAfterSeconds?: number;

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
 * <p>Validation exception message and name.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>Name of validation exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Message describing why the field failed validation.</p>
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
 * @public
 * <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Reason the request failed validation.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The field that caused the error, if applicable.</p>
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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface PutAccountSettingsRequest {
  /**
   * @public
   * <p>Desired notification subscription status.</p>
   */
  notificationSubscriptionStatus?: NotificationSubscriptionStatus;
}

/**
 * @public
 */
export interface PutAccountSettingsResponse {
  /**
   * @public
   * <p>Account settings for the customer.</p>
   */
  accountSettings?: AccountSettings;
}

/**
 * @public
 */
export interface GetReportRequest {
  /**
   * @public
   * <p>Unique resource ID for the report resource.</p>
   */
  reportId: string | undefined;

  /**
   * @public
   * <p>Version for the report resource.</p>
   */
  reportVersion?: number;

  /**
   * @public
   * <p>Unique download token provided by GetTermForReport API.</p>
   */
  termToken: string | undefined;
}

/**
 * @public
 */
export interface GetReportResponse {
  /**
   * @public
   * <p>Presigned S3 url to access the report content.</p>
   */
  documentPresignedUrl?: string;
}

/**
 * @public
 */
export interface GetReportMetadataRequest {
  /**
   * @public
   * <p>Unique resource ID for the report resource.</p>
   */
  reportId: string | undefined;

  /**
   * @public
   * <p>Version for the report resource.</p>
   */
  reportVersion?: number;
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
 * @public
 * <p>Full detail for report resource metadata.</p>
 */
export interface ReportDetail {
  /**
   * @public
   * <p>Unique resource ID for the report resource.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Name for the report resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Description for the report resource.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Timestamp indicating the report resource effective start.</p>
   */
  periodStart?: Date;

  /**
   * @public
   * <p>Timestamp indicating the report resource effective end.</p>
   */
  periodEnd?: Date;

  /**
   * @public
   * <p>Timestamp indicating when the report resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>Timestamp indicating when the report resource was last modified.</p>
   */
  lastModifiedAt?: Date;

  /**
   * @public
   * <p>Timestamp indicating when the report resource was deleted.</p>
   */
  deletedAt?: Date;

  /**
   * @public
   * <p>Current state of the report resource</p>
   */
  state?: PublishedState;

  /**
   * @public
   * <p>ARN for the report resource.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Series for the report resource.</p>
   */
  series?: string;

  /**
   * @public
   * <p>Category for the report resource.</p>
   */
  category?: string;

  /**
   * @public
   * <p>Associated company name for the report resource.</p>
   */
  companyName?: string;

  /**
   * @public
   * <p>Associated product name for the report resource.</p>
   */
  productName?: string;

  /**
   * @public
   * <p>Unique resource ARN for term resource.</p>
   */
  termArn?: string;

  /**
   * @public
   * <p>Version for the report resource.</p>
   */
  version?: number;

  /**
   * @public
   * <p>Acceptance type for report.</p>
   */
  acceptanceType?: AcceptanceType;

  /**
   * @public
   * <p>Sequence number to enforce optimistic locking.</p>
   */
  sequenceNumber?: number;

  /**
   * @public
   * <p>The current state of the document upload.</p>
   */
  uploadState?: UploadState;

  /**
   * @public
   * <p>The message associated with the current upload state.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface GetReportMetadataResponse {
  /**
   * @public
   * <p>Report resource detail.</p>
   */
  reportDetails?: ReportDetail;
}

/**
 * @public
 */
export interface GetTermForReportRequest {
  /**
   * @public
   * <p>Unique resource ID for the report resource.</p>
   */
  reportId: string | undefined;

  /**
   * @public
   * <p>Version for the report resource.</p>
   */
  reportVersion?: number;
}

/**
 * @public
 */
export interface GetTermForReportResponse {
  /**
   * @public
   * <p>Presigned S3 url to access the term content.</p>
   */
  documentPresignedUrl?: string;

  /**
   * @public
   * <p>Unique token representing this request event.</p>
   */
  termToken?: string;
}

/**
 * @public
 */
export interface ListReportsRequest {
  /**
   * @public
   * <p>Maximum number of resources to return in the paginated response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Pagination token to request the next page of resources.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Summary for report resource.</p>
 */
export interface ReportSummary {
  /**
   * @public
   * <p>Unique resource ID for the report resource.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Name for the report resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Current state of the report resource.</p>
   */
  state?: PublishedState;

  /**
   * @public
   * <p>ARN for the report resource.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Version for the report resource.</p>
   */
  version?: number;

  /**
   * @public
   * <p>The current state of the document upload.</p>
   */
  uploadState?: UploadState;

  /**
   * @public
   * <p>Description for the report resource.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Timestamp indicating the report resource effective start.</p>
   */
  periodStart?: Date;

  /**
   * @public
   * <p>Timestamp indicating the report resource effective end.</p>
   */
  periodEnd?: Date;

  /**
   * @public
   * <p>Series for the report resource.</p>
   */
  series?: string;

  /**
   * @public
   * <p>Category for the report resource.</p>
   */
  category?: string;

  /**
   * @public
   * <p>Associated company name for the report resource.</p>
   */
  companyName?: string;

  /**
   * @public
   * <p>Associated product name for the report resource.</p>
   */
  productName?: string;

  /**
   * @public
   * <p>The message associated with the current upload state.</p>
   */
  statusMessage?: string;
}

/**
 * @public
 */
export interface ListReportsResponse {
  /**
   * @public
   * <p>List of report resources.</p>
   */
  reports?: ReportSummary[];

  /**
   * @public
   * <p>Pagination token to request the next page of resources.</p>
   */
  nextToken?: string;
}
