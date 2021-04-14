import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient permission to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AssociateServiceQuotaTemplateRequest {}

export namespace AssociateServiceQuotaTemplateRequest {
  export const filterSensitiveLog = (obj: AssociateServiceQuotaTemplateRequest): any => ({
    ...obj,
  });
}

export interface AssociateServiceQuotaTemplateResponse {}

export namespace AssociateServiceQuotaTemplateResponse {
  export const filterSensitiveLog = (obj: AssociateServiceQuotaTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is
 *       enabled in your organization.</p>
 */
export interface AWSServiceAccessNotEnabledException extends __SmithyException, $MetadataBearer {
  name: "AWSServiceAccessNotEnabledException";
  $fault: "client";
  Message?: string;
}

export namespace AWSServiceAccessNotEnabledException {
  export const filterSensitiveLog = (obj: AWSServiceAccessNotEnabledException): any => ({
    ...obj,
  });
}

/**
 * <p>You can't perform this action because a dependency does not have access.</p>
 */
export interface DependencyAccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "DependencyAccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace DependencyAccessDeniedException {
  export const filterSensitiveLog = (obj: DependencyAccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The account making this call is not a member of an organization.</p>
 */
export interface NoAvailableOrganizationException extends __SmithyException, $MetadataBearer {
  name: "NoAvailableOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace NoAvailableOrganizationException {
  export const filterSensitiveLog = (obj: NoAvailableOrganizationException): any => ({
    ...obj,
  });
}

/**
 * <p>The organization that your account belongs to is not in All Features mode.</p>
 */
export interface OrganizationNotInAllFeaturesModeException extends __SmithyException, $MetadataBearer {
  name: "OrganizationNotInAllFeaturesModeException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotInAllFeaturesModeException {
  export const filterSensitiveLog = (obj: OrganizationNotInAllFeaturesModeException): any => ({
    ...obj,
  });
}

/**
 * <p>Something went wrong.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceException {
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The Service Quotas template is not available in this AWS Region.</p>
 */
export interface TemplatesNotAvailableInRegionException extends __SmithyException, $MetadataBearer {
  name: "TemplatesNotAvailableInRegionException";
  $fault: "client";
  Message?: string;
}

export namespace TemplatesNotAvailableInRegionException {
  export const filterSensitiveLog = (obj: TemplatesNotAvailableInRegionException): any => ({
    ...obj,
  });
}

/**
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request
 *       an increase for this quota.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
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

export namespace DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteServiceQuotaIncreaseRequestFromTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {}

export namespace DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteServiceQuotaIncreaseRequestFromTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Invalid input was provided.</p>
 */
export interface IllegalArgumentException extends __SmithyException, $MetadataBearer {
  name: "IllegalArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalArgumentException {
  export const filterSensitiveLog = (obj: IllegalArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface NoSuchResourceException extends __SmithyException, $MetadataBearer {
  name: "NoSuchResourceException";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchResourceException {
  export const filterSensitiveLog = (obj: NoSuchResourceException): any => ({
    ...obj,
  });
}

export interface DisassociateServiceQuotaTemplateRequest {}

export namespace DisassociateServiceQuotaTemplateRequest {
  export const filterSensitiveLog = (obj: DisassociateServiceQuotaTemplateRequest): any => ({
    ...obj,
  });
}

export interface DisassociateServiceQuotaTemplateResponse {}

export namespace DisassociateServiceQuotaTemplateResponse {
  export const filterSensitiveLog = (obj: DisassociateServiceQuotaTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The quota request template is not associated with your organization.</p>
 */
export interface ServiceQuotaTemplateNotInUseException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaTemplateNotInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaTemplateNotInUseException {
  export const filterSensitiveLog = (obj: ServiceQuotaTemplateNotInUseException): any => ({
    ...obj,
  });
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

export namespace ErrorReason {
  export const filterSensitiveLog = (obj: ErrorReason): any => ({
    ...obj,
  });
}

export interface GetAssociationForServiceQuotaTemplateRequest {}

export namespace GetAssociationForServiceQuotaTemplateRequest {
  export const filterSensitiveLog = (obj: GetAssociationForServiceQuotaTemplateRequest): any => ({
    ...obj,
  });
}

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

export namespace GetAssociationForServiceQuotaTemplateResponse {
  export const filterSensitiveLog = (obj: GetAssociationForServiceQuotaTemplateResponse): any => ({
    ...obj,
  });
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

export namespace GetAWSDefaultServiceQuotaRequest {
  export const filterSensitiveLog = (obj: GetAWSDefaultServiceQuotaRequest): any => ({
    ...obj,
  });
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

export namespace QuotaPeriod {
  export const filterSensitiveLog = (obj: QuotaPeriod): any => ({
    ...obj,
  });
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
  MetricDimensions?: { [key: string]: string };

  /**
   * <p>The metric statistic that we recommend you use when determining quota usage.</p>
   */
  MetricStatisticRecommendation?: string;
}

export namespace MetricInfo {
  export const filterSensitiveLog = (obj: MetricInfo): any => ({
    ...obj,
  });
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

export namespace ServiceQuota {
  export const filterSensitiveLog = (obj: ServiceQuota): any => ({
    ...obj,
  });
}

export interface GetAWSDefaultServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   */
  Quota?: ServiceQuota;
}

export namespace GetAWSDefaultServiceQuotaResponse {
  export const filterSensitiveLog = (obj: GetAWSDefaultServiceQuotaResponse): any => ({
    ...obj,
  });
}

export interface GetRequestedServiceQuotaChangeRequest {
  /**
   * <p>The ID of the quota increase request.</p>
   */
  RequestId: string | undefined;
}

export namespace GetRequestedServiceQuotaChangeRequest {
  export const filterSensitiveLog = (obj: GetRequestedServiceQuotaChangeRequest): any => ({
    ...obj,
  });
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

export namespace RequestedServiceQuotaChange {
  export const filterSensitiveLog = (obj: RequestedServiceQuotaChange): any => ({
    ...obj,
  });
}

export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export namespace GetRequestedServiceQuotaChangeResponse {
  export const filterSensitiveLog = (obj: GetRequestedServiceQuotaChangeResponse): any => ({
    ...obj,
  });
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

export namespace GetServiceQuotaRequest {
  export const filterSensitiveLog = (obj: GetServiceQuotaRequest): any => ({
    ...obj,
  });
}

export interface GetServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   */
  Quota?: ServiceQuota;
}

export namespace GetServiceQuotaResponse {
  export const filterSensitiveLog = (obj: GetServiceQuotaResponse): any => ({
    ...obj,
  });
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

export namespace GetServiceQuotaIncreaseRequestFromTemplateRequest {
  export const filterSensitiveLog = (obj: GetServiceQuotaIncreaseRequestFromTemplateRequest): any => ({
    ...obj,
  });
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

export namespace ServiceQuotaIncreaseRequestInTemplate {
  export const filterSensitiveLog = (obj: ServiceQuotaIncreaseRequestInTemplate): any => ({
    ...obj,
  });
}

export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

export namespace GetServiceQuotaIncreaseRequestFromTemplateResponse {
  export const filterSensitiveLog = (obj: GetServiceQuotaIncreaseRequestFromTemplateResponse): any => ({
    ...obj,
  });
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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Invalid input was provided.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPaginationTokenException {
  export const filterSensitiveLog = (obj: InvalidPaginationTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is in an invalid state.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResourceStateException {
  export const filterSensitiveLog = (obj: InvalidResourceStateException): any => ({
    ...obj,
  });
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

export namespace ListAWSDefaultServiceQuotasRequest {
  export const filterSensitiveLog = (obj: ListAWSDefaultServiceQuotasRequest): any => ({
    ...obj,
  });
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

export namespace ListAWSDefaultServiceQuotasResponse {
  export const filterSensitiveLog = (obj: ListAWSDefaultServiceQuotasResponse): any => ({
    ...obj,
  });
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

export namespace ListRequestedServiceQuotaChangeHistoryRequest {
  export const filterSensitiveLog = (obj: ListRequestedServiceQuotaChangeHistoryRequest): any => ({
    ...obj,
  });
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

export namespace ListRequestedServiceQuotaChangeHistoryResponse {
  export const filterSensitiveLog = (obj: ListRequestedServiceQuotaChangeHistoryResponse): any => ({
    ...obj,
  });
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

export namespace ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  export const filterSensitiveLog = (obj: ListRequestedServiceQuotaChangeHistoryByQuotaRequest): any => ({
    ...obj,
  });
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

export namespace ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  export const filterSensitiveLog = (obj: ListRequestedServiceQuotaChangeHistoryByQuotaResponse): any => ({
    ...obj,
  });
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

export namespace ListServiceQuotaIncreaseRequestsInTemplateRequest {
  export const filterSensitiveLog = (obj: ListServiceQuotaIncreaseRequestsInTemplateRequest): any => ({
    ...obj,
  });
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

export namespace ListServiceQuotaIncreaseRequestsInTemplateResponse {
  export const filterSensitiveLog = (obj: ListServiceQuotaIncreaseRequestsInTemplateResponse): any => ({
    ...obj,
  });
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

export namespace ListServiceQuotasRequest {
  export const filterSensitiveLog = (obj: ListServiceQuotasRequest): any => ({
    ...obj,
  });
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

export namespace ListServiceQuotasResponse {
  export const filterSensitiveLog = (obj: ListServiceQuotasResponse): any => ({
    ...obj,
  });
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

export namespace ListServicesRequest {
  export const filterSensitiveLog = (obj: ListServicesRequest): any => ({
    ...obj,
  });
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

export namespace ServiceInfo {
  export const filterSensitiveLog = (obj: ServiceInfo): any => ({
    ...obj,
  });
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

export namespace ListServicesResponse {
  export const filterSensitiveLog = (obj: ListServicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota for which you want to list tags. You
   *       can get this information by using the Service Quotas console, or by listing the quotas using the
   *         <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> AWS CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> AWS API operation.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A complex data type that contains zero or more tag elements.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  export const filterSensitiveLog = (obj: PutServiceQuotaIncreaseRequestIntoTemplateRequest): any => ({
    ...obj,
  });
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

export namespace PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  export const filterSensitiveLog = (obj: PutServiceQuotaIncreaseRequestIntoTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export interface QuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "QuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace QuotaExceededException {
  export const filterSensitiveLog = (obj: QuotaExceededException): any => ({
    ...obj,
  });
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

export namespace RequestServiceQuotaIncreaseRequest {
  export const filterSensitiveLog = (obj: RequestServiceQuotaIncreaseRequest): any => ({
    ...obj,
  });
}

export interface RequestServiceQuotaIncreaseResponse {
  /**
   * <p>Information about the quota increase request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export namespace RequestServiceQuotaIncreaseResponse {
  export const filterSensitiveLog = (obj: RequestServiceQuotaIncreaseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 */
export interface TagPolicyViolationException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyViolationException";
  $fault: "client";
  Message?: string;
}

export namespace TagPolicyViolationException {
  export const filterSensitiveLog = (obj: TagPolicyViolationException): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You've exceeded the number of tags allowed for a resource. For more information, see
 *         <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/sq-tagging.html#sq-tagging-restrictions">Tag
 *         restrictions</a> in the <i>Service Quotas User Guide</i>.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
