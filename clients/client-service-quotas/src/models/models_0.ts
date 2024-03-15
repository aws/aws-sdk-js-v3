// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceQuotasServiceException as __BaseException } from "./ServiceQuotasServiceException";

/**
 * <p>You do not have sufficient permission to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AppliedLevelEnum = {
  ACCOUNT: "ACCOUNT",
  ALL: "ALL",
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type AppliedLevelEnum = (typeof AppliedLevelEnum)[keyof typeof AppliedLevelEnum];

/**
 * @public
 */
export interface AssociateServiceQuotaTemplateRequest {}

/**
 * @public
 */
export interface AssociateServiceQuotaTemplateResponse {}

/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in
 *             your organization.</p>
 * @public
 */
export class AWSServiceAccessNotEnabledException extends __BaseException {
  readonly name: "AWSServiceAccessNotEnabledException" = "AWSServiceAccessNotEnabledException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AWSServiceAccessNotEnabledException, __BaseException>) {
    super({
      name: "AWSServiceAccessNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AWSServiceAccessNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't perform this action because a dependency does not have access.</p>
 * @public
 */
export class DependencyAccessDeniedException extends __BaseException {
  readonly name: "DependencyAccessDeniedException" = "DependencyAccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyAccessDeniedException, __BaseException>) {
    super({
      name: "DependencyAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Web Services account making this call is not a member of an organization.</p>
 * @public
 */
export class NoAvailableOrganizationException extends __BaseException {
  readonly name: "NoAvailableOrganizationException" = "NoAvailableOrganizationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableOrganizationException, __BaseException>) {
    super({
      name: "NoAvailableOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableOrganizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The organization that your Amazon Web Services account belongs to is not in All Features
 *             mode.</p>
 * @public
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
  readonly name: "OrganizationNotInAllFeaturesModeException" = "OrganizationNotInAllFeaturesModeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotInAllFeaturesModeException, __BaseException>) {
    super({
      name: "OrganizationNotInAllFeaturesModeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Something went wrong.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Service Quotas template is not available in this Amazon Web Services Region.</p>
 * @public
 */
export class TemplatesNotAvailableInRegionException extends __BaseException {
  readonly name: "TemplatesNotAvailableInRegionException" = "TemplatesNotAvailableInRegionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplatesNotAvailableInRegionException, __BaseException>) {
    super({
      name: "TemplatesNotAvailableInRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplatesNotAvailableInRegionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services Region for which the request was made.</p>
   * @public
   */
  AwsRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {}

/**
 * <p>Invalid input was provided.</p>
 * @public
 */
export class IllegalArgumentException extends __BaseException {
  readonly name: "IllegalArgumentException" = "IllegalArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalArgumentException, __BaseException>) {
    super({
      name: "IllegalArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class NoSuchResourceException extends __BaseException {
  readonly name: "NoSuchResourceException" = "NoSuchResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResourceException, __BaseException>) {
    super({
      name: "NoSuchResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DisassociateServiceQuotaTemplateRequest {}

/**
 * @public
 */
export interface DisassociateServiceQuotaTemplateResponse {}

/**
 * <p>The quota request template is not associated with your organization.</p>
 * @public
 */
export class ServiceQuotaTemplateNotInUseException extends __BaseException {
  readonly name: "ServiceQuotaTemplateNotInUseException" = "ServiceQuotaTemplateNotInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaTemplateNotInUseException, __BaseException>) {
    super({
      name: "ServiceQuotaTemplateNotInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaTemplateNotInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  DEPENDENCY_ACCESS_DENIED_ERROR: "DEPENDENCY_ACCESS_DENIED_ERROR",
  DEPENDENCY_SERVICE_ERROR: "DEPENDENCY_SERVICE_ERROR",
  DEPENDENCY_THROTTLING_ERROR: "DEPENDENCY_THROTTLING_ERROR",
  SERVICE_QUOTA_NOT_AVAILABLE_ERROR: "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>An error that explains why an action did not succeed.</p>
 * @public
 */
export interface ErrorReason {
  /**
   * <p>Service Quotas returns the following error values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_ACCESS_DENIED_ERROR</code> - The caller does not have the
   *                     required permissions to complete the action. To resolve the error, you must have
   *                     permission to access the Amazon Web Service or quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_THROTTLING_ERROR</code> - The Amazon Web Service is throttling
   *                     Service Quotas. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_SERVICE_ERROR</code> - The Amazon Web Service is not
   *                     available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_NOT_AVAILABLE_ERROR</code> - There was an error in
   *                     Service Quotas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ErrorCode?: ErrorCode;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface GetAssociationForServiceQuotaTemplateRequest {}

/**
 * @public
 * @enum
 */
export const ServiceQuotaTemplateAssociationStatus = {
  ASSOCIATED: "ASSOCIATED",
  DISASSOCIATED: "DISASSOCIATED",
} as const;

/**
 * @public
 */
export type ServiceQuotaTemplateAssociationStatus =
  (typeof ServiceQuotaTemplateAssociationStatus)[keyof typeof ServiceQuotaTemplateAssociationStatus];

/**
 * @public
 */
export interface GetAssociationForServiceQuotaTemplateResponse {
  /**
   * <p>The association status. If the status is <code>ASSOCIATED</code>, the quota increase
   *             requests in the template are automatically applied to new Amazon Web Services accounts in your
   *             organization.</p>
   * @public
   */
  ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PeriodUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  MICROSECOND: "MICROSECOND",
  MILLISECOND: "MILLISECOND",
  MINUTE: "MINUTE",
  SECOND: "SECOND",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type PeriodUnit = (typeof PeriodUnit)[keyof typeof PeriodUnit];

/**
 * <p>Information about the quota period.</p>
 * @public
 */
export interface QuotaPeriod {
  /**
   * <p>The value associated with the reported <code>PeriodUnit</code>.</p>
   * @public
   */
  PeriodValue?: number;

  /**
   * <p>The time unit.</p>
   * @public
   */
  PeriodUnit?: PeriodUnit;
}

/**
 * @public
 * @enum
 */
export const QuotaContextScope = {
  ACCOUNT: "ACCOUNT",
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type QuotaContextScope = (typeof QuotaContextScope)[keyof typeof QuotaContextScope];

/**
 * <p>A structure that describes the context for a service quota. The context identifies what the quota applies to.</p>
 * @public
 */
export interface QuotaContextInfo {
  /**
   * <p>Specifies whether the quota applies to an Amazon Web Services account, or to a resource.</p>
   * @public
   */
  ContextScope?: QuotaContextScope;

  /**
   * <p>When the <code>ContextScope</code> is <code>RESOURCE</code>, then this specifies the resource type of the specified resource.</p>
   * @public
   */
  ContextScopeType?: string;

  /**
   * <p>Specifies the Amazon Web Services account or resource to which the quota applies. The value in this field
   *               depends on the context scope associated with the specified service quota.</p>
   * @public
   */
  ContextId?: string;
}

/**
 * <p>Information about the CloudWatch metric that reflects quota usage.</p>
 * @public
 */
export interface MetricInfo {
  /**
   * <p>The namespace of the metric.</p>
   * @public
   */
  MetricNamespace?: string;

  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string;

  /**
   * <p>The metric dimension. This is a name/value pair that is part of the identity of a
   *             metric.</p>
   * @public
   */
  MetricDimensions?: Record<string, string>;

  /**
   * <p>The metric statistic that we recommend you use when determining quota usage.</p>
   * @public
   */
  MetricStatisticRecommendation?: string;
}

/**
 * <p>Information about a quota.</p>
 * @public
 */
export interface ServiceQuota {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   * @public
   */
  QuotaArn?: string;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string;

  /**
   * <p>Specifies the quota name.</p>
   * @public
   */
  QuotaName?: string;

  /**
   * <p>The quota value.</p>
   * @public
   */
  Value?: number;

  /**
   * <p>The unit of measurement.</p>
   * @public
   */
  Unit?: string;

  /**
   * <p>Indicates whether the quota value can be increased.</p>
   * @public
   */
  Adjustable?: boolean;

  /**
   * <p>Indicates whether the quota is global.</p>
   * @public
   */
  GlobalQuota?: boolean;

  /**
   * <p>Information about the measurement.</p>
   * @public
   */
  UsageMetric?: MetricInfo;

  /**
   * <p>The period of time.</p>
   * @public
   */
  Period?: QuotaPeriod;

  /**
   * <p>The error code and error reason.</p>
   * @public
   */
  ErrorReason?: ErrorReason;

  /**
   * <p>Specifies at which level of granularity that the quota value is applied.</p>
   * @public
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum;

  /**
   * <p>The context for this service quota.</p>
   * @public
   */
  QuotaContext?: QuotaContextInfo;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   * @public
   */
  Quota?: ServiceQuota;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeRequest {
  /**
   * <p>Specifies the ID of the quota increase request.</p>
   * @public
   */
  RequestId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RequestStatus = {
  APPROVED: "APPROVED",
  CASE_CLOSED: "CASE_CLOSED",
  CASE_OPENED: "CASE_OPENED",
  DENIED: "DENIED",
  INVALID_REQUEST: "INVALID_REQUEST",
  NOT_APPROVED: "NOT_APPROVED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];

/**
 * <p>Information about a quota increase request.</p>
 * @public
 */
export interface RequestedServiceQuotaChange {
  /**
   * <p>The unique identifier.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The case ID.</p>
   * @public
   */
  CaseId?: string;

  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string;

  /**
   * <p>Specifies the quota name.</p>
   * @public
   */
  QuotaName?: string;

  /**
   * <p>The new, increased value for the quota.</p>
   * @public
   */
  DesiredValue?: number;

  /**
   * <p>The state of the quota increase request.</p>
   * @public
   */
  Status?: RequestStatus;

  /**
   * <p>The date and time when the quota increase request was received and the case ID was
   *             created.</p>
   * @public
   */
  Created?: Date;

  /**
   * <p>The date and time of the most recent change.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The IAM identity of the requester.</p>
   * @public
   */
  Requester?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   * @public
   */
  QuotaArn?: string;

  /**
   * <p>Indicates whether the quota is global.</p>
   * @public
   */
  GlobalQuota?: boolean;

  /**
   * <p>The unit of measurement.</p>
   * @public
   */
  Unit?: string;

  /**
   * <p>Specifies at which level within the Amazon Web Services account the quota request applies to.</p>
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum;

  /**
   * <p>The context for this service quota.</p>
   * @public
   */
  QuotaContext?: QuotaContextInfo;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

/**
 * @public
 */
export interface GetServiceQuotaRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services account or resource to which the quota applies. The value in this field
   *               depends on the context scope associated with the specified service quota.</p>
   * @public
   */
  ContextId?: string;
}

/**
 * @public
 */
export interface GetServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   * @public
   */
  Quota?: ServiceQuota;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services Region for which you made the request.</p>
   * @public
   */
  AwsRegion: string | undefined;
}

/**
 * <p>Information about a quota increase request.</p>
 * @public
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string;

  /**
   * <p>Specifies the quota name.</p>
   * @public
   */
  QuotaName?: string;

  /**
   * <p>The new, increased value of the quota.</p>
   * @public
   */
  DesiredValue?: number;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>The unit of measurement.</p>
   * @public
   */
  Unit?: string;

  /**
   * <p>Indicates whether the quota is global.</p>
   * @public
   */
  GlobalQuota?: boolean;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

/**
 * <p>A complex data type that contains a tag key and tag value.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string that contains a tag key. The string length should be between 1 and 128
   *             characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _
   *             - . : / = + @.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A string that contains an optional tag value. The string length should be between 0
   *             and 256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special
   *             characters _ - . : / = + @.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Invalid input was provided.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is in an invalid state.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListAWSDefaultServiceQuotasRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results that you want included on each
   *     page of the response. If you do not include this parameter, it defaults to a value appropriate
   *     to the operation. If additional items exist beyond those included in the current response, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results.</p>
   *          <note>
   *             <p>An API operation can return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   *          </note>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAWSDefaultServiceQuotasResponse {
  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the quotas.</p>
   * @public
   */
  Quotas?: ServiceQuota[];
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string;

  /**
   * <p>Specifies that you want to filter the results to only the requests with the matching
   *             status.</p>
   * @public
   */
  Status?: RequestStatus;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results that you want included on each
   *     page of the response. If you do not include this parameter, it defaults to a value appropriate
   *     to the operation. If additional items exist beyond those included in the current response, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results.</p>
   *          <note>
   *             <p>An API operation can return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   *          </note>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies at which level within the Amazon Web Services account the quota request applies to.</p>
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryResponse {
  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the quota increase requests.</p>
   * @public
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies that you want to filter the results to only the requests with the matching
   *             status.</p>
   * @public
   */
  Status?: RequestStatus;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results that you want included on each
   *     page of the response. If you do not include this parameter, it defaults to a value appropriate
   *     to the operation. If additional items exist beyond those included in the current response, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results.</p>
   *          <note>
   *             <p>An API operation can return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   *          </note>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies at which level within the Amazon Web Services account the quota request applies to.</p>
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the quota increase requests.</p>
   * @public
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the Amazon Web Services Region for which you made the request.</p>
   * @public
   */
  AwsRegion?: string;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results that you want included on each
   *     page of the response. If you do not include this parameter, it defaults to a value appropriate
   *     to the operation. If additional items exist beyond those included in the current response, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results.</p>
   *          <note>
   *             <p>An API operation can return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   *          </note>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * <p>Information about the quota increase requests.</p>
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServiceQuotasRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results that you want included on each
   *     page of the response. If you do not include this parameter, it defaults to a value appropriate
   *     to the operation. If additional items exist beyond those included in the current response, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results.</p>
   *          <note>
   *             <p>An API operation can return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   *          </note>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string;

  /**
   * <p>Specifies at which level of granularity that the quota value is applied.</p>
   * @public
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum;
}

/**
 * @public
 */
export interface ListServiceQuotasResponse {
  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the quotas.</p>
   * @public
   */
  Quotas?: ServiceQuota[];
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results that you want included on each
   *     page of the response. If you do not include this parameter, it defaults to a value appropriate
   *     to the operation. If additional items exist beyond those included in the current response, the
   *     <code>NextToken</code> response element is present and has a value (is not null). Include that
   *     value as the <code>NextToken</code> request parameter in the next call to the operation to get
   *     the next part of the results.</p>
   *          <note>
   *             <p>An API operation can return fewer results than the maximum even when there are
   *     more results available. You should check <code>NextToken</code> after every operation to ensure
   *     that you receive all of the results.</p>
   *          </note>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Information about an Amazon Web Service.</p>
 * @public
 */
export interface ServiceInfo {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The list of the Amazon Web Service names and service codes.</p>
   * @public
   */
  Services?: ServiceInfo[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota for which you want to list tags.
   *             You can get this information by using the Service Quotas console, or by listing the quotas
   *             using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A complex data type that contains zero or more tag elements.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services Region to which the template applies.</p>
   * @public
   */
  AwsRegion: string | undefined;

  /**
   * <p>Specifies the new, increased value for the quota.</p>
   * @public
   */
  DesiredValue: number | undefined;
}

/**
 * @public
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of
 *             the relevant resources, or use Service Quotas to request a service quota increase.</p>
 * @public
 */
export class QuotaExceededException extends __BaseException {
  readonly name: "QuotaExceededException" = "QuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QuotaExceededException, __BaseException>) {
    super({
      name: "QuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface RequestServiceQuotaIncreaseRequest {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the new, increased value for the quota.</p>
   * @public
   */
  DesiredValue: number | undefined;

  /**
   * <p>Specifies the Amazon Web Services account or resource to which the quota applies. The value in this field
   *               depends on the context scope associated with the specified service quota.</p>
   * @public
   */
  ContextId?: string;
}

/**
 * @public
 */
export interface RequestServiceQuotaIncreaseResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

/**
 * <p>The specified resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 * @public
 */
export class TagPolicyViolationException extends __BaseException {
  readonly name: "TagPolicyViolationException" = "TagPolicyViolationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyViolationException, __BaseException>) {
    super({
      name: "TagPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyViolationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota. You can get this information by
   *             using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags that you want to add to the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>You've exceeded the number of tags allowed for a resource. For more information, see
 *                 <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/sq-tagging.html#sq-tagging-restrictions">Tag
 *                 restrictions</a> in the <i>Service Quotas User Guide</i>.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can
   *             get this information by using the Service Quotas console, or by listing the quotas using the
   *             <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags that you want to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
