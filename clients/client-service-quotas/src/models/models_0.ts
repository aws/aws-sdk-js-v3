// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceQuotasServiceException as __BaseException } from "./ServiceQuotasServiceException";

/**
 * @public
 * <p>You do not have sufficient permission to perform this action.</p>
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
 * @public
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in
 *             your organization.</p>
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
 * @public
 * <p>You can't perform this action because a dependency does not have access.</p>
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
 * @public
 * <p>The Amazon Web Services account making this call is not a member of an organization.</p>
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
 * @public
 * <p>The organization that your Amazon Web Services account belongs to is not in All Features
 *             mode.</p>
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
 * @public
 * <p>Something went wrong.</p>
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
 * @public
 * <p>The Service Quotas template is not available in this Amazon Web Services Region.</p>
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
 * @public
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
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
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services Region for which the request was made.</p>
   */
  AwsRegion: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {}

/**
 * @public
 * <p>Invalid input was provided.</p>
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
 * @public
 * <p>The specified resource does not exist.</p>
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
 * @public
 * <p>The quota request template is not associated with your organization.</p>
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
 * @public
 * <p>An error that explains why an action did not succeed.</p>
 */
export interface ErrorReason {
  /**
   * @public
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
   */
  ErrorCode?: ErrorCode;

  /**
   * @public
   * <p>The error message.</p>
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
   * @public
   * <p>The association status. If the status is <code>ASSOCIATED</code>, the quota increase
   *             requests in the template are automatically applied to new Amazon Web Services accounts in your
   *             organization.</p>
   */
  ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
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
 * @public
 * <p>Information about the quota period.</p>
 */
export interface QuotaPeriod {
  /**
   * @public
   * <p>The value associated with the reported <code>PeriodUnit</code>.</p>
   */
  PeriodValue?: number;

  /**
   * @public
   * <p>The time unit.</p>
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
 * @public
 * <p>A structure that describes the context for a service quota. The context identifies what the quota applies to.</p>
 */
export interface QuotaContextInfo {
  /**
   * @public
   * <p>Specifies whether the quota applies to an Amazon Web Services account, or to a resource.</p>
   */
  ContextScope?: QuotaContextScope;

  /**
   * @public
   * <p>When the <code>ContextScope</code> is <code>RESOURCE</code>, then this specifies the resource type of the specified resource.</p>
   */
  ContextScopeType?: string;

  /**
   * @public
   * <p>Specifies the Amazon Web Services account or resource to which the quota applies. The value in this field
   *               depends on the context scope associated with the specified service quota.</p>
   */
  ContextId?: string;
}

/**
 * @public
 * <p>Information about the CloudWatch metric that reflects quota usage.</p>
 */
export interface MetricInfo {
  /**
   * @public
   * <p>The namespace of the metric.</p>
   */
  MetricNamespace?: string;

  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The metric dimension. This is a name/value pair that is part of the identity of a
   *             metric.</p>
   */
  MetricDimensions?: Record<string, string>;

  /**
   * @public
   * <p>The metric statistic that we recommend you use when determining quota usage.</p>
   */
  MetricStatisticRecommendation?: string;
}

/**
 * @public
 * <p>Information about a quota.</p>
 */
export interface ServiceQuota {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>Specifies the service name.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   */
  QuotaArn?: string;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode?: string;

  /**
   * @public
   * <p>Specifies the quota name.</p>
   */
  QuotaName?: string;

  /**
   * @public
   * <p>The quota value.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>The unit of measurement.</p>
   */
  Unit?: string;

  /**
   * @public
   * <p>Indicates whether the quota value can be increased.</p>
   */
  Adjustable?: boolean;

  /**
   * @public
   * <p>Indicates whether the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * @public
   * <p>Information about the measurement.</p>
   */
  UsageMetric?: MetricInfo;

  /**
   * @public
   * <p>The period of time.</p>
   */
  Period?: QuotaPeriod;

  /**
   * @public
   * <p>The error code and error reason.</p>
   */
  ErrorReason?: ErrorReason;

  /**
   * @public
   * <p>Specifies at which level of granularity that the quota value is applied.</p>
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum;

  /**
   * @public
   * <p>The context for this service quota.</p>
   */
  QuotaContext?: QuotaContextInfo;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaResponse {
  /**
   * @public
   * <p>Information about the quota.</p>
   */
  Quota?: ServiceQuota;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeRequest {
  /**
   * @public
   * <p>Specifies the ID of the quota increase request.</p>
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
 * @public
 * <p>Information about a quota increase request.</p>
 */
export interface RequestedServiceQuotaChange {
  /**
   * @public
   * <p>The unique identifier.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The case ID.</p>
   */
  CaseId?: string;

  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>Specifies the service name.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode?: string;

  /**
   * @public
   * <p>Specifies the quota name.</p>
   */
  QuotaName?: string;

  /**
   * @public
   * <p>The new, increased value for the quota.</p>
   */
  DesiredValue?: number;

  /**
   * @public
   * <p>The state of the quota increase request.</p>
   */
  Status?: RequestStatus;

  /**
   * @public
   * <p>The date and time when the quota increase request was received and the case ID was
   *             created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The date and time of the most recent change.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The IAM identity of the requester.</p>
   */
  Requester?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   */
  QuotaArn?: string;

  /**
   * @public
   * <p>Indicates whether the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * @public
   * <p>The unit of measurement.</p>
   */
  Unit?: string;

  /**
   * @public
   * <p>Specifies at which level within the Amazon Web Services account the quota request applies to.</p>
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum;

  /**
   * @public
   * <p>The context for this service quota.</p>
   */
  QuotaContext?: QuotaContextInfo;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * @public
   * <p>Information about the quota increase request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

/**
 * @public
 */
export interface GetServiceQuotaRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services account or resource to which the quota applies. The value in this field
   *               depends on the context scope associated with the specified service quota.</p>
   */
  ContextId?: string;
}

/**
 * @public
 */
export interface GetServiceQuotaResponse {
  /**
   * @public
   * <p>Information about the quota.</p>
   */
  Quota?: ServiceQuota;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services Region for which you made the request.</p>
   */
  AwsRegion: string | undefined;
}

/**
 * @public
 * <p>Information about a quota increase request.</p>
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>Specifies the service name.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode?: string;

  /**
   * @public
   * <p>Specifies the quota name.</p>
   */
  QuotaName?: string;

  /**
   * @public
   * <p>The new, increased value of the quota.</p>
   */
  DesiredValue?: number;

  /**
   * @public
   * <p>The Amazon Web Services Region.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The unit of measurement.</p>
   */
  Unit?: string;

  /**
   * @public
   * <p>Indicates whether the quota is global.</p>
   */
  GlobalQuota?: boolean;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * @public
   * <p>Information about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

/**
 * @public
 * <p>A complex data type that contains a tag key and tag value.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A string that contains a tag key. The string length should be between 1 and 128
   *             characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _
   *             - . : / = + @.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A string that contains an optional tag value. The string length should be between 0
   *             and 256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special
   *             characters _ - . : / = + @.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Invalid input was provided.</p>
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
 * @public
 * <p>The resource is in an invalid state.</p>
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
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAWSDefaultServiceQuotasResponse {
  /**
   * @public
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the quotas.</p>
   */
  Quotas?: ServiceQuota[];
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>Specifies that you want to filter the results to only the requests with the matching
   *             status.</p>
   */
  Status?: RequestStatus;

  /**
   * @public
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies at which level within the Amazon Web Services account the quota request applies to.</p>
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryResponse {
  /**
   * @public
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the quota increase requests.</p>
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>Specifies that you want to filter the results to only the requests with the matching
   *             status.</p>
   */
  Status?: RequestStatus;

  /**
   * @public
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies at which level within the Amazon Web Services account the quota request applies to.</p>
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  /**
   * @public
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the quota increase requests.</p>
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>Specifies the Amazon Web Services Region for which you made the request.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * @public
   * <p>Information about the quota increase requests.</p>
   */
  ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];

  /**
   * @public
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServiceQuotasRequest {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode?: string;

  /**
   * @public
   * <p>Specifies at which level of granularity that the quota value is applied.</p>
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum;
}

/**
 * @public
 */
export interface ListServiceQuotasResponse {
  /**
   * @public
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the quotas.</p>
   */
  Quotas?: ServiceQuota[];
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * @public
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   */
  NextToken?: string;

  /**
   * @public
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
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about an Amazon Web Service.</p>
 */
export interface ServiceInfo {
  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>Specifies the service name.</p>
   */
  ServiceName?: string;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * @public
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of the Amazon Web Service names and service codes.</p>
   */
  Services?: ServiceInfo[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the applied quota for which you want to list tags.
   *             You can get this information by using the Service Quotas console, or by listing the quotas
   *             using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A complex data type that contains zero or more tag elements.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services Region to which the template applies.</p>
   */
  AwsRegion: string | undefined;

  /**
   * @public
   * <p>Specifies the new, increased value for the quota.</p>
   */
  DesiredValue: number | undefined;
}

/**
 * @public
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * @public
   * <p>Information about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

/**
 * @public
 * <p>You have exceeded your service quota. To perform the requested action, remove some of
 *             the relevant resources, or use Service Quotas to request a service quota increase.</p>
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
   * @public
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * @public
   * <p>Specifies the new, increased value for the quota.</p>
   */
  DesiredValue: number | undefined;

  /**
   * @public
   * <p>Specifies the Amazon Web Services account or resource to which the quota applies. The value in this field
   *               depends on the context scope associated with the specified service quota.</p>
   */
  ContextId?: string;
}

/**
 * @public
 */
export interface RequestServiceQuotaIncreaseResponse {
  /**
   * @public
   * <p>Information about the quota increase request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

/**
 * @public
 * <p>The specified resource already exists.</p>
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
 * @public
 * <p>The specified tag is a reserved word and cannot be used.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the applied quota. You can get this information by
   *             using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tags that you want to add to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>You've exceeded the number of tags allowed for a resource. For more information, see
 *                 <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/sq-tagging.html#sq-tagging-restrictions">Tag
 *                 restrictions</a> in the <i>Service Quotas User Guide</i>.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can
   *             get this information by using the Service Quotas console, or by listing the quotas using the
   *             <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The keys of the tags that you want to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
