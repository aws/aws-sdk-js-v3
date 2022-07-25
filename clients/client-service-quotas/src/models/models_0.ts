// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ServiceQuotasServiceException as __BaseException } from "./ServiceQuotasServiceException";

/**
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

export interface AssociateServiceQuotaTemplateRequest {}

export interface AssociateServiceQuotaTemplateResponse {}

/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is
 *       enabled in your organization.</p>
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
 * <p>The account making this call is not a member of an organization.</p>
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
 * <p>The organization that your account belongs to is not in All Features mode.</p>
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
 * <p>The Service Quotas template is not available in this AWS Region.</p>
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
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request
 *       an increase for this quota.</p>
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

export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The AWS Region.</p>
   */
  AwsRegion: string | undefined;
}

export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {}

/**
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

export interface DisassociateServiceQuotaTemplateRequest {}

export interface DisassociateServiceQuotaTemplateResponse {}

/**
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

export enum ErrorCode {
  DEPENDENCY_ACCESS_DENIED_ERROR = "DEPENDENCY_ACCESS_DENIED_ERROR",
  DEPENDENCY_SERVICE_ERROR = "DEPENDENCY_SERVICE_ERROR",
  DEPENDENCY_THROTTLING_ERROR = "DEPENDENCY_THROTTLING_ERROR",
  SERVICE_QUOTA_NOT_AVAILABLE_ERROR = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
}

/**
 * <p>An error that explains why an action did not succeed.</p>
 */
export interface ErrorReason {
  /**
   * <p>Service Quotas returns the following error values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_ACCESS_DENIED_ERROR</code> - The caller does not have the required
   *           permissions to complete the action. To resolve the error, you must have permission to
   *           access the service or quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_THROTTLING_ERROR</code> - The service is throttling Service
   *           Quotas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_SERVICE_ERROR</code> - The service is not available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_QUOTA_NOT_AVAILABLE_ERROR</code> - There was an error in Service
   *           Quotas.</p>
   *             </li>
   *          </ul>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export interface GetAssociationForServiceQuotaTemplateRequest {}

export enum ServiceQuotaTemplateAssociationStatus {
  ASSOCIATED = "ASSOCIATED",
  DISASSOCIATED = "DISASSOCIATED",
}

export interface GetAssociationForServiceQuotaTemplateResponse {
  /**
   * <p>The association status. If the status is <code>ASSOCIATED</code>, the quota increase
   *       requests in the template are automatically applied to new accounts in your
   *       organization.</p>
   */
  ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus | string;
}

export interface GetAWSDefaultServiceQuotaRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;
}

export enum PeriodUnit {
  DAY = "DAY",
  HOUR = "HOUR",
  MICROSECOND = "MICROSECOND",
  MILLISECOND = "MILLISECOND",
  MINUTE = "MINUTE",
  SECOND = "SECOND",
  WEEK = "WEEK",
}

/**
 * <p>Information about the quota period.</p>
 */
export interface QuotaPeriod {
  /**
   * <p>The value.</p>
   */
  PeriodValue?: number;

  /**
   * <p>The time unit.</p>
   */
  PeriodUnit?: PeriodUnit | string;
}

/**
 * <p>Information about the CloudWatch metric that reflects quota usage.</p>
 */
export interface MetricInfo {
  /**
   * <p>The namespace of the metric.</p>
   */
  MetricNamespace?: string;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The metric dimension. This is a name/value pair that is part of the identity of a
   *       metric.</p>
   */
  MetricDimensions?: Record<string, string>;

  /**
   * <p>The metric statistic that we recommend you use when determining quota usage.</p>
   */
  MetricStatisticRecommendation?: string;
}

/**
 * <p>Information about a quota.</p>
 */
export interface ServiceQuota {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The service name.</p>
   */
  ServiceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   */
  QuotaArn?: string;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The quota name.</p>
   */
  QuotaName?: string;

  /**
   * <p>The quota value.</p>
   */
  Value?: number;

  /**
   * <p>The unit of measurement.</p>
   */
  Unit?: string;

  /**
   * <p>Indicates whether the quota value can be increased.</p>
   */
  Adjustable?: boolean;

  /**
   * <p>Indicates whether the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>Information about the measurement.</p>
   */
  UsageMetric?: MetricInfo;

  /**
   * <p>The period of time.</p>
   */
  Period?: QuotaPeriod;

  /**
   * <p>The error code and error reason.</p>
   */
  ErrorReason?: ErrorReason;
}

export interface GetAWSDefaultServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   */
  Quota?: ServiceQuota;
}

export interface GetRequestedServiceQuotaChangeRequest {
  /**
   * <p>The ID of the quota increase request.</p>
   */
  RequestId: string | undefined;
}

export enum RequestStatus {
  APPROVED = "APPROVED",
  CASE_CLOSED = "CASE_CLOSED",
  CASE_OPENED = "CASE_OPENED",
  DENIED = "DENIED",
  PENDING = "PENDING",
}

/**
 * <p>Information about a quota increase request.</p>
 */
export interface RequestedServiceQuotaChange {
  /**
   * <p>The unique identifier.</p>
   */
  Id?: string;

  /**
   * <p>The case ID.</p>
   */
  CaseId?: string;

  /**
   * <p>The service identifier.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The service name.</p>
   */
  ServiceName?: string;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The quota name.</p>
   */
  QuotaName?: string;

  /**
   * <p>The new, increased value for the quota.</p>
   */
  DesiredValue?: number;

  /**
   * <p>The state of the quota increase request.</p>
   */
  Status?: RequestStatus | string;

  /**
   * <p>The date and time when the quota increase request was received and the case ID was
   *       created.</p>
   */
  Created?: Date;

  /**
   * <p>The date and time of the most recent change.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The IAM identity of the requester.</p>
   */
  Requester?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   */
  QuotaArn?: string;

  /**
   * <p>Indicates whether the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>The unit of measurement.</p>
   */
  Unit?: string;
}

export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export interface GetServiceQuotaRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;
}

export interface GetServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   */
  Quota?: ServiceQuota;
}

export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The AWS Region.</p>
   */
  AwsRegion: string | undefined;
}

/**
 * <p>Information about a quota increase request.</p>
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The service name.</p>
   */
  ServiceName?: string;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The quota name.</p>
   */
  QuotaName?: string;

  /**
   * <p>The new, increased value of the quota.</p>
   */
  DesiredValue?: number;

  /**
   * <p>The AWS Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The unit of measurement.</p>
   */
  Unit?: string;

  /**
   * <p>Indicates whether the quota is global.</p>
   */
  GlobalQuota?: boolean;
}

export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

/**
 * <p>A complex data type that contains a tag key and tag value.</p>
 */
export interface Tag {
  /**
   * <p>A string that contains a tag key. The string length should be between 1 and 128
   *       characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . :
   *       / = + @.</p>
   */
  Key: string | undefined;

  /**
   * <p>A string that contains an optional tag value. The string length should be between 0 and
   *       256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ -
   *       . : / = + @.</p>
   */
  Value: string | undefined;
}

/**
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

export interface ListAWSDefaultServiceQuotasRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, if any, make another call with the token returned from this call.</p>
   */
  MaxResults?: number;
}

export interface ListAWSDefaultServiceQuotasResponse {
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *       no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the quotas.</p>
   */
  Quotas?: ServiceQuota[];
}

export interface ListRequestedServiceQuotaChangeHistoryRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The status of the quota increase request.</p>
   */
  Status?: RequestStatus | string;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, if any, make another call with the token returned from this call.</p>
   */
  MaxResults?: number;
}

export interface ListRequestedServiceQuotaChangeHistoryResponse {
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *       no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the quota increase requests.</p>
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The status value of the quota increase request.</p>
   */
  Status?: RequestStatus | string;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, if any, make another call with the token returned from this call.</p>
   */
  MaxResults?: number;
}

export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *       no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the quota increase requests.</p>
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The AWS Region.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, if any, make another call with the token returned from this call.</p>
   */
  MaxResults?: number;
}

export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * <p>Information about the quota increase requests.</p>
   */
  ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *       no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListServiceQuotasRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, if any, make another call with the token returned from this call.</p>
   */
  MaxResults?: number;
}

export interface ListServiceQuotasResponse {
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *       no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the quotas.</p>
   */
  Quotas?: ServiceQuota[];
}

export interface ListServicesRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, if any, make another call with the token returned from this call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Information about a service.</p>
 */
export interface ServiceInfo {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The service name.</p>
   */
  ServiceName?: string;
}

export interface ListServicesResponse {
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *       no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the services.</p>
   */
  Services?: ServiceInfo[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota for which you want to list tags. You
   *       can get this information by using the Service Quotas console, or by listing the quotas using the
   *         <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A complex data type that contains zero or more tag elements.</p>
   */
  Tags?: Tag[];
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The AWS Region.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>The new, increased value for the quota.</p>
   */
  DesiredValue: number | undefined;
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
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

export interface RequestServiceQuotaIncreaseRequest {
  /**
   * <p>The service identifier.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The quota identifier.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The new, increased value for the quota.</p>
   */
  DesiredValue: number | undefined;
}

export interface RequestServiceQuotaIncreaseResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

/**
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

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota. You can get this information by
   *       using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags that you want to add to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>You've exceeded the number of tags allowed for a resource. For more information, see
 *         <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/sq-tagging.html#sq-tagging-restrictions">Tag
 *         restrictions</a> in the <i>Service Quotas User Guide</i>.</p>
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

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can get
   *       this information by using the Service Quotas console, or by listing the quotas using the <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The keys of the tags that you want to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AssociateServiceQuotaTemplateRequestFilterSensitiveLog = (
  obj: AssociateServiceQuotaTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateServiceQuotaTemplateResponseFilterSensitiveLog = (
  obj: AssociateServiceQuotaTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceQuotaIncreaseRequestFromTemplateRequestFilterSensitiveLog = (
  obj: DeleteServiceQuotaIncreaseRequestFromTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServiceQuotaIncreaseRequestFromTemplateResponseFilterSensitiveLog = (
  obj: DeleteServiceQuotaIncreaseRequestFromTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateServiceQuotaTemplateRequestFilterSensitiveLog = (
  obj: DisassociateServiceQuotaTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateServiceQuotaTemplateResponseFilterSensitiveLog = (
  obj: DisassociateServiceQuotaTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorReasonFilterSensitiveLog = (obj: ErrorReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociationForServiceQuotaTemplateRequestFilterSensitiveLog = (
  obj: GetAssociationForServiceQuotaTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssociationForServiceQuotaTemplateResponseFilterSensitiveLog = (
  obj: GetAssociationForServiceQuotaTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAWSDefaultServiceQuotaRequestFilterSensitiveLog = (obj: GetAWSDefaultServiceQuotaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QuotaPeriodFilterSensitiveLog = (obj: QuotaPeriod): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricInfoFilterSensitiveLog = (obj: MetricInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceQuotaFilterSensitiveLog = (obj: ServiceQuota): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAWSDefaultServiceQuotaResponseFilterSensitiveLog = (obj: GetAWSDefaultServiceQuotaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRequestedServiceQuotaChangeRequestFilterSensitiveLog = (
  obj: GetRequestedServiceQuotaChangeRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestedServiceQuotaChangeFilterSensitiveLog = (obj: RequestedServiceQuotaChange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRequestedServiceQuotaChangeResponseFilterSensitiveLog = (
  obj: GetRequestedServiceQuotaChangeResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceQuotaRequestFilterSensitiveLog = (obj: GetServiceQuotaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceQuotaResponseFilterSensitiveLog = (obj: GetServiceQuotaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceQuotaIncreaseRequestFromTemplateRequestFilterSensitiveLog = (
  obj: GetServiceQuotaIncreaseRequestFromTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceQuotaIncreaseRequestInTemplateFilterSensitiveLog = (
  obj: ServiceQuotaIncreaseRequestInTemplate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceQuotaIncreaseRequestFromTemplateResponseFilterSensitiveLog = (
  obj: GetServiceQuotaIncreaseRequestFromTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAWSDefaultServiceQuotasRequestFilterSensitiveLog = (obj: ListAWSDefaultServiceQuotasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAWSDefaultServiceQuotasResponseFilterSensitiveLog = (
  obj: ListAWSDefaultServiceQuotasResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRequestedServiceQuotaChangeHistoryRequestFilterSensitiveLog = (
  obj: ListRequestedServiceQuotaChangeHistoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRequestedServiceQuotaChangeHistoryResponseFilterSensitiveLog = (
  obj: ListRequestedServiceQuotaChangeHistoryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRequestedServiceQuotaChangeHistoryByQuotaRequestFilterSensitiveLog = (
  obj: ListRequestedServiceQuotaChangeHistoryByQuotaRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRequestedServiceQuotaChangeHistoryByQuotaResponseFilterSensitiveLog = (
  obj: ListRequestedServiceQuotaChangeHistoryByQuotaResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceQuotaIncreaseRequestsInTemplateRequestFilterSensitiveLog = (
  obj: ListServiceQuotaIncreaseRequestsInTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceQuotaIncreaseRequestsInTemplateResponseFilterSensitiveLog = (
  obj: ListServiceQuotaIncreaseRequestsInTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceQuotasRequestFilterSensitiveLog = (obj: ListServiceQuotasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServiceQuotasResponseFilterSensitiveLog = (obj: ListServiceQuotasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServicesRequestFilterSensitiveLog = (obj: ListServicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceInfoFilterSensitiveLog = (obj: ServiceInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListServicesResponseFilterSensitiveLog = (obj: ListServicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutServiceQuotaIncreaseRequestIntoTemplateRequestFilterSensitiveLog = (
  obj: PutServiceQuotaIncreaseRequestIntoTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutServiceQuotaIncreaseRequestIntoTemplateResponseFilterSensitiveLog = (
  obj: PutServiceQuotaIncreaseRequestIntoTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestServiceQuotaIncreaseRequestFilterSensitiveLog = (obj: RequestServiceQuotaIncreaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestServiceQuotaIncreaseResponseFilterSensitiveLog = (
  obj: RequestServiceQuotaIncreaseResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
