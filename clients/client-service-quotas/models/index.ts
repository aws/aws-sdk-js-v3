import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

export interface AssociateServiceQuotaTemplateRequest {
  __type?: "AssociateServiceQuotaTemplateRequest";
}

export namespace AssociateServiceQuotaTemplateRequest {
  export const filterSensitiveLog = (
    obj: AssociateServiceQuotaTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateServiceQuotaTemplateRequest =>
    __isa(o, "AssociateServiceQuotaTemplateRequest");
}

export interface AssociateServiceQuotaTemplateResponse {
  __type?: "AssociateServiceQuotaTemplateResponse";
}

export namespace AssociateServiceQuotaTemplateResponse {
  export const filterSensitiveLog = (
    obj: AssociateServiceQuotaTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateServiceQuotaTemplateResponse =>
    __isa(o, "AssociateServiceQuotaTemplateResponse");
}

/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is
 *       enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
 */
export interface AWSServiceAccessNotEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "AWSServiceAccessNotEnabledException";
  $fault: "client";
  Message?: string;
}

export namespace AWSServiceAccessNotEnabledException {
  export const filterSensitiveLog = (
    obj: AWSServiceAccessNotEnabledException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AWSServiceAccessNotEnabledException =>
    __isa(o, "AWSServiceAccessNotEnabledException");
}

export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  __type?: "DeleteServiceQuotaIncreaseRequestFromTemplateRequest";
  /**
   * <p>Specifies the AWS Region for the quota that you want to delete.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>Specifies the code for the quota that you want to delete.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the code for the service that you want to delete.</p>
   */
  ServiceCode: string | undefined;
}

export namespace DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  export const filterSensitiveLog = (
    obj: DeleteServiceQuotaIncreaseRequestFromTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteServiceQuotaIncreaseRequestFromTemplateRequest =>
    __isa(o, "DeleteServiceQuotaIncreaseRequestFromTemplateRequest");
}

export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
  __type?: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse";
}

export namespace DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
  export const filterSensitiveLog = (
    obj: DeleteServiceQuotaIncreaseRequestFromTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteServiceQuotaIncreaseRequestFromTemplateResponse =>
    __isa(o, "DeleteServiceQuotaIncreaseRequestFromTemplateResponse");
}

/**
 * <p>You can't perform this action because a dependency does not have access.</p>
 */
export interface DependencyAccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DependencyAccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace DependencyAccessDeniedException {
  export const filterSensitiveLog = (
    obj: DependencyAccessDeniedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DependencyAccessDeniedException =>
    __isa(o, "DependencyAccessDeniedException");
}

export interface DisassociateServiceQuotaTemplateRequest {
  __type?: "DisassociateServiceQuotaTemplateRequest";
}

export namespace DisassociateServiceQuotaTemplateRequest {
  export const filterSensitiveLog = (
    obj: DisassociateServiceQuotaTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateServiceQuotaTemplateRequest =>
    __isa(o, "DisassociateServiceQuotaTemplateRequest");
}

export interface DisassociateServiceQuotaTemplateResponse {
  __type?: "DisassociateServiceQuotaTemplateResponse";
}

export namespace DisassociateServiceQuotaTemplateResponse {
  export const filterSensitiveLog = (
    obj: DisassociateServiceQuotaTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateServiceQuotaTemplateResponse =>
    __isa(o, "DisassociateServiceQuotaTemplateResponse");
}

export enum ErrorCode {
  DEPENDENCY_ACCESS_DENIED_ERROR = "DEPENDENCY_ACCESS_DENIED_ERROR",
  DEPENDENCY_SERVICE_ERROR = "DEPENDENCY_SERVICE_ERROR",
  DEPENDENCY_THROTTLING_ERROR = "DEPENDENCY_THROTTLING_ERROR",
  SERVICE_QUOTA_NOT_AVAILABLE_ERROR = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR"
}

/**
 * <p>Returns an error that explains why the action did not succeed.</p>
 */
export interface ErrorReason {
  __type?: "ErrorReason";
  /**
   * <p>Service Quotas returns the following error values.
   *     </p>
   *          <p>
   *             <code>DEPENDENCY_ACCESS_DENIED_ERROR</code> is returned when the caller does not have
   *       permission to call the service or service quota. To resolve the error, you need permission to
   *       access the service or service quota.</p>
   *          <p>
   *             <code>DEPENDENCY_THROTTLING_ERROR</code> is returned when the service being called is
   *       throttling Service Quotas.</p>
   *          <p>
   *             <code>DEPENDENCY_SERVICE_ERROR</code> is returned when the service being called has
   *       availability issues.</p>
   *          <p>
   *             <code>SERVICE_QUOTA_NOT_AVAILABLE_ERROR</code> is returned when there was an error in
   *       Service Quotas.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message that provides more detail.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorReason {
  export const filterSensitiveLog = (obj: ErrorReason): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorReason => __isa(o, "ErrorReason");
}

export interface GetAssociationForServiceQuotaTemplateRequest {
  __type?: "GetAssociationForServiceQuotaTemplateRequest";
}

export namespace GetAssociationForServiceQuotaTemplateRequest {
  export const filterSensitiveLog = (
    obj: GetAssociationForServiceQuotaTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetAssociationForServiceQuotaTemplateRequest =>
    __isa(o, "GetAssociationForServiceQuotaTemplateRequest");
}

export interface GetAssociationForServiceQuotaTemplateResponse {
  __type?: "GetAssociationForServiceQuotaTemplateResponse";
  /**
   * <p>Specifies whether the template is <code>ASSOCIATED</code> or <code>DISASSOCIATED</code>.
   *       If the template is <code>ASSOCIATED</code>, then it requests service quota increases for all
   *       new accounts created in your organization. </p>
   */
  ServiceQuotaTemplateAssociationStatus?:
    | ServiceQuotaTemplateAssociationStatus
    | string;
}

export namespace GetAssociationForServiceQuotaTemplateResponse {
  export const filterSensitiveLog = (
    obj: GetAssociationForServiceQuotaTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetAssociationForServiceQuotaTemplateResponse =>
    __isa(o, "GetAssociationForServiceQuotaTemplateResponse");
}

export interface GetAWSDefaultServiceQuotaRequest {
  __type?: "GetAWSDefaultServiceQuotaRequest";
  /**
   * <p>Identifies the service quota you want to select.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;
}

export namespace GetAWSDefaultServiceQuotaRequest {
  export const filterSensitiveLog = (
    obj: GetAWSDefaultServiceQuotaRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAWSDefaultServiceQuotaRequest =>
    __isa(o, "GetAWSDefaultServiceQuotaRequest");
}

export interface GetAWSDefaultServiceQuotaResponse {
  __type?: "GetAWSDefaultServiceQuotaResponse";
  /**
   * <p>Returns the <a>ServiceQuota</a> object which contains all values for a
   *       quota.</p>
   */
  Quota?: ServiceQuota;
}

export namespace GetAWSDefaultServiceQuotaResponse {
  export const filterSensitiveLog = (
    obj: GetAWSDefaultServiceQuotaResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAWSDefaultServiceQuotaResponse =>
    __isa(o, "GetAWSDefaultServiceQuotaResponse");
}

export interface GetRequestedServiceQuotaChangeRequest {
  __type?: "GetRequestedServiceQuotaChangeRequest";
  /**
   * <p>Identifies the quota increase request.</p>
   */
  RequestId: string | undefined;
}

export namespace GetRequestedServiceQuotaChangeRequest {
  export const filterSensitiveLog = (
    obj: GetRequestedServiceQuotaChangeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRequestedServiceQuotaChangeRequest =>
    __isa(o, "GetRequestedServiceQuotaChangeRequest");
}

export interface GetRequestedServiceQuotaChangeResponse {
  __type?: "GetRequestedServiceQuotaChangeResponse";
  /**
   * <p>Returns the <code>RequestedServiceQuotaChange</code> object for the specific increase
   *       request.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export namespace GetRequestedServiceQuotaChangeResponse {
  export const filterSensitiveLog = (
    obj: GetRequestedServiceQuotaChangeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRequestedServiceQuotaChangeResponse =>
    __isa(o, "GetRequestedServiceQuotaChangeResponse");
}

export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  __type?: "GetServiceQuotaIncreaseRequestFromTemplateRequest";
  /**
   * <p>Specifies the AWS Region for the quota that you want to use.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>Specifies the quota you want.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;
}

export namespace GetServiceQuotaIncreaseRequestFromTemplateRequest {
  export const filterSensitiveLog = (
    obj: GetServiceQuotaIncreaseRequestFromTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetServiceQuotaIncreaseRequestFromTemplateRequest =>
    __isa(o, "GetServiceQuotaIncreaseRequestFromTemplateRequest");
}

export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  __type?: "GetServiceQuotaIncreaseRequestFromTemplateResponse";
  /**
   * <p>This object contains the details about the quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

export namespace GetServiceQuotaIncreaseRequestFromTemplateResponse {
  export const filterSensitiveLog = (
    obj: GetServiceQuotaIncreaseRequestFromTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetServiceQuotaIncreaseRequestFromTemplateResponse =>
    __isa(o, "GetServiceQuotaIncreaseRequestFromTemplateResponse");
}

export interface GetServiceQuotaRequest {
  __type?: "GetServiceQuotaRequest";
  /**
   * <p>Identifies the service quota you want to select.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;
}

export namespace GetServiceQuotaRequest {
  export const filterSensitiveLog = (obj: GetServiceQuotaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceQuotaRequest =>
    __isa(o, "GetServiceQuotaRequest");
}

export interface GetServiceQuotaResponse {
  __type?: "GetServiceQuotaResponse";
  /**
   * <p>Returns the <a>ServiceQuota</a> object which contains all values for a
   *       quota.</p>
   */
  Quota?: ServiceQuota;
}

export namespace GetServiceQuotaResponse {
  export const filterSensitiveLog = (obj: GetServiceQuotaResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceQuotaResponse =>
    __isa(o, "GetServiceQuotaResponse");
}

/**
 * <p>Invalid input was provided. </p>
 */
export interface IllegalArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "IllegalArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalArgumentException {
  export const filterSensitiveLog = (obj: IllegalArgumentException): any => ({
    ...obj
  });
  export const isa = (o: any): o is IllegalArgumentException =>
    __isa(o, "IllegalArgumentException");
}

/**
 * <p>Invalid input was provided.</p>
 */
export interface InvalidPaginationTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPaginationTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPaginationTokenException {
  export const filterSensitiveLog = (
    obj: InvalidPaginationTokenException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidPaginationTokenException =>
    __isa(o, "InvalidPaginationTokenException");
}

/**
 * <p>Invalid input was provided for the . </p>
 */
export interface InvalidResourceStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResourceStateException {
  export const filterSensitiveLog = (
    obj: InvalidResourceStateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceStateException =>
    __isa(o, "InvalidResourceStateException");
}

export interface ListAWSDefaultServiceQuotasRequest {
  __type?: "ListAWSDefaultServiceQuotasRequest";
  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from. If additional items exist beyond the specified
   *       maximum, the <code>NextToken</code> element is present and has a value (isn't null). Include
   *       that value as the <code>NextToken</code> request parameter in the call to the operation to get
   *       the next part of the results. You should check <code>NextToken</code> after every operation to
   *       ensure that you receive all of the results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;
}

export namespace ListAWSDefaultServiceQuotasRequest {
  export const filterSensitiveLog = (
    obj: ListAWSDefaultServiceQuotasRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAWSDefaultServiceQuotasRequest =>
    __isa(o, "ListAWSDefaultServiceQuotasRequest");
}

export interface ListAWSDefaultServiceQuotasResponse {
  __type?: "ListAWSDefaultServiceQuotasResponse";
  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the quotas in the account with the AWS default values. </p>
   */
  Quotas?: ServiceQuota[];
}

export namespace ListAWSDefaultServiceQuotasResponse {
  export const filterSensitiveLog = (
    obj: ListAWSDefaultServiceQuotasResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAWSDefaultServiceQuotasResponse =>
    __isa(o, "ListAWSDefaultServiceQuotasResponse");
}

export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  __type?: "ListRequestedServiceQuotaChangeHistoryByQuotaRequest";
  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the service quota that you want to use</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>Specifies the status value of the quota increase request.</p>
   */
  Status?: RequestStatus | string;
}

export namespace ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  export const filterSensitiveLog = (
    obj: ListRequestedServiceQuotaChangeHistoryByQuotaRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryByQuotaRequest =>
    __isa(o, "ListRequestedServiceQuotaChangeHistoryByQuotaRequest");
}

export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  __type?: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse";
  /**
   * <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of service quota requests.</p>
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

export namespace ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  export const filterSensitiveLog = (
    obj: ListRequestedServiceQuotaChangeHistoryByQuotaResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryByQuotaResponse =>
    __isa(o, "ListRequestedServiceQuotaChangeHistoryByQuotaResponse");
}

export interface ListRequestedServiceQuotaChangeHistoryRequest {
  __type?: "ListRequestedServiceQuotaChangeHistoryRequest";
  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>Specifies the status value of the quota increase request.</p>
   */
  Status?: RequestStatus | string;
}

export namespace ListRequestedServiceQuotaChangeHistoryRequest {
  export const filterSensitiveLog = (
    obj: ListRequestedServiceQuotaChangeHistoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryRequest =>
    __isa(o, "ListRequestedServiceQuotaChangeHistoryRequest");
}

export interface ListRequestedServiceQuotaChangeHistoryResponse {
  __type?: "ListRequestedServiceQuotaChangeHistoryResponse";
  /**
   * <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of service quota requests.</p>
   */
  RequestedQuotas?: RequestedServiceQuotaChange[];
}

export namespace ListRequestedServiceQuotaChangeHistoryResponse {
  export const filterSensitiveLog = (
    obj: ListRequestedServiceQuotaChangeHistoryResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryResponse =>
    __isa(o, "ListRequestedServiceQuotaChangeHistoryResponse");
}

export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  __type?: "ListServiceQuotaIncreaseRequestsInTemplateRequest";
  /**
   * <p>Specifies the AWS Region for the quota that you want to use.</p>
   */
  AwsRegion?: string;

  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for a service. When performing an operation, use the
   *         <code>ServiceCode</code> to specify a particular service. </p>
   */
  ServiceCode?: string;
}

export namespace ListServiceQuotaIncreaseRequestsInTemplateRequest {
  export const filterSensitiveLog = (
    obj: ListServiceQuotaIncreaseRequestsInTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListServiceQuotaIncreaseRequestsInTemplateRequest =>
    __isa(o, "ListServiceQuotaIncreaseRequestsInTemplateRequest");
}

export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  __type?: "ListServiceQuotaIncreaseRequestsInTemplateResponse";
  /**
   * <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the list of values of the quota increase request in the template.</p>
   */
  ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[];
}

export namespace ListServiceQuotaIncreaseRequestsInTemplateResponse {
  export const filterSensitiveLog = (
    obj: ListServiceQuotaIncreaseRequestsInTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListServiceQuotaIncreaseRequestsInTemplateResponse =>
    __isa(o, "ListServiceQuotaIncreaseRequestsInTemplateResponse");
}

export interface ListServiceQuotasRequest {
  __type?: "ListServiceQuotasRequest";
  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for a service. When performing an operation, use the
   *         <code>ServiceCode</code> to specify a particular service. </p>
   */
  ServiceCode: string | undefined;
}

export namespace ListServiceQuotasRequest {
  export const filterSensitiveLog = (obj: ListServiceQuotasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServiceQuotasRequest =>
    __isa(o, "ListServiceQuotasRequest");
}

export interface ListServiceQuotasResponse {
  __type?: "ListServiceQuotasResponse";
  /**
   * <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>The response information for a quota lists all attribute information for the quota.
   *     </p>
   */
  Quotas?: ServiceQuota[];
}

export namespace ListServiceQuotasResponse {
  export const filterSensitiveLog = (obj: ListServiceQuotasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServiceQuotasResponse =>
    __isa(o, "ListServiceQuotasResponse");
}

export interface ListServicesRequest {
  __type?: "ListServicesRequest";
  /**
   * <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   */
  NextToken?: string;
}

export namespace ListServicesRequest {
  export const filterSensitiveLog = (obj: ListServicesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServicesRequest =>
    __isa(o, "ListServicesRequest");
}

export interface ListServicesResponse {
  __type?: "ListServicesResponse";
  /**
   * <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of services. </p>
   */
  Services?: ServiceInfo[];
}

export namespace ListServicesResponse {
  export const filterSensitiveLog = (obj: ListServicesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListServicesResponse =>
    __isa(o, "ListServicesResponse");
}

/**
 * <p>A structure that uses CloudWatch metrics to gather data about the service quota.</p>
 */
export interface MetricInfo {
  __type?: "MetricInfo";
  /**
   * <p>A dimension is a name/value pair that is part of the identity of a metric. Every metric
   *       has specific characteristics that describe it, and you can think of dimensions as categories
   *       for those characteristics. These dimensions are part of the CloudWatch Metric Identity that
   *       measures usage against a particular service quota.</p>
   */
  MetricDimensions?: { [key: string]: string };

  /**
   * <p>The name of the CloudWatch metric that measures usage of a service quota. This is a
   *       required field.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the metric. The namespace is a container for CloudWatch metrics. You can
   *       specify a name for the namespace when you create a metric.</p>
   */
  MetricNamespace?: string;

  /**
   * <p>Statistics are metric data aggregations over specified periods of time. This is the
   *       recommended statistic to use when comparing usage in the CloudWatch Metric against your
   *       Service Quota.</p>
   */
  MetricStatisticRecommendation?: string;
}

export namespace MetricInfo {
  export const filterSensitiveLog = (obj: MetricInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricInfo => __isa(o, "MetricInfo");
}

/**
 * <p>The account making this call is not a member of an organization.</p>
 */
export interface NoAvailableOrganizationException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoAvailableOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace NoAvailableOrganizationException {
  export const filterSensitiveLog = (
    obj: NoAvailableOrganizationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoAvailableOrganizationException =>
    __isa(o, "NoAvailableOrganizationException");
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface NoSuchResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoSuchResourceException";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchResourceException {
  export const filterSensitiveLog = (obj: NoSuchResourceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoSuchResourceException =>
    __isa(o, "NoSuchResourceException");
}

/**
 * <p>The organization that your account belongs to, is not in All Features mode. To enable all
 *       features mode, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html">EnableAllFeatures</a>.</p>
 */
export interface OrganizationNotInAllFeaturesModeException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationNotInAllFeaturesModeException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotInAllFeaturesModeException {
  export const filterSensitiveLog = (
    obj: OrganizationNotInAllFeaturesModeException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrganizationNotInAllFeaturesModeException =>
    __isa(o, "OrganizationNotInAllFeaturesModeException");
}

export enum PeriodUnit {
  DAY = "DAY",
  HOUR = "HOUR",
  MICROSECOND = "MICROSECOND",
  MILLISECOND = "MILLISECOND",
  MINUTE = "MINUTE",
  SECOND = "SECOND",
  WEEK = "WEEK"
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  __type?: "PutServiceQuotaIncreaseRequestIntoTemplateRequest";
  /**
   * <p>Specifies the AWS Region for the quota. </p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>Specifies the new, increased value for the quota. </p>
   */
  DesiredValue: number | undefined;

  /**
   * <p>Specifies the service quota that you want to use.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;
}

export namespace PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  export const filterSensitiveLog = (
    obj: PutServiceQuotaIncreaseRequestIntoTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PutServiceQuotaIncreaseRequestIntoTemplateRequest =>
    __isa(o, "PutServiceQuotaIncreaseRequestIntoTemplateRequest");
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  __type?: "PutServiceQuotaIncreaseRequestIntoTemplateResponse";
  /**
   * <p>A structure that contains information about one service quota increase request.</p>
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

export namespace PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  export const filterSensitiveLog = (
    obj: PutServiceQuotaIncreaseRequestIntoTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PutServiceQuotaIncreaseRequestIntoTemplateResponse =>
    __isa(o, "PutServiceQuotaIncreaseRequestIntoTemplateResponse");
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export interface QuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "QuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace QuotaExceededException {
  export const filterSensitiveLog = (obj: QuotaExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is QuotaExceededException =>
    __isa(o, "QuotaExceededException");
}

/**
 * <p>A structure that contains information about the quota period.</p>
 */
export interface QuotaPeriod {
  __type?: "QuotaPeriod";
  /**
   * <p>The time unit of a period.</p>
   */
  PeriodUnit?: PeriodUnit | string;

  /**
   * <p>The value of a period.</p>
   */
  PeriodValue?: number;
}

export namespace QuotaPeriod {
  export const filterSensitiveLog = (obj: QuotaPeriod): any => ({
    ...obj
  });
  export const isa = (o: any): o is QuotaPeriod => __isa(o, "QuotaPeriod");
}

/**
 * <p>A structure that contains information about a requested change for a quota.</p>
 */
export interface RequestedServiceQuotaChange {
  __type?: "RequestedServiceQuotaChange";
  /**
   * <p>The case Id for the service quota increase request.</p>
   */
  CaseId?: string;

  /**
   * <p>The date and time when the service quota increase request was received and the case Id was
   *       created. </p>
   */
  Created?: Date;

  /**
   * <p>New increased value for the service quota.</p>
   */
  DesiredValue?: number;

  /**
   * <p>Identifies if the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>The unique identifier of a requested service quota change.</p>
   */
  Id?: string;

  /**
   * <p>The date and time of the most recent change in the service quota increase request.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the service quota.</p>
   */
  QuotaArn?: string;

  /**
   * <p>Specifies the service quota that you want to use.</p>
   */
  QuotaCode?: string;

  /**
   * <p>Name of the service quota.</p>
   */
  QuotaName?: string;

  /**
   * <p>The IAM identity who submitted the service quota increase request.</p>
   */
  Requester?: string;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;

  /**
   * <p>State of the service quota increase request.</p>
   */
  Status?: RequestStatus | string;

  /**
   * <p>Specifies the unit used for the quota.</p>
   */
  Unit?: string;
}

export namespace RequestedServiceQuotaChange {
  export const filterSensitiveLog = (
    obj: RequestedServiceQuotaChange
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestedServiceQuotaChange =>
    __isa(o, "RequestedServiceQuotaChange");
}

export interface RequestServiceQuotaIncreaseRequest {
  __type?: "RequestServiceQuotaIncreaseRequest";
  /**
   * <p>Specifies the value submitted in the service quota increase request. </p>
   */
  DesiredValue: number | undefined;

  /**
   * <p>Specifies the service quota that you want to use.</p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode: string | undefined;
}

export namespace RequestServiceQuotaIncreaseRequest {
  export const filterSensitiveLog = (
    obj: RequestServiceQuotaIncreaseRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestServiceQuotaIncreaseRequest =>
    __isa(o, "RequestServiceQuotaIncreaseRequest");
}

export interface RequestServiceQuotaIncreaseResponse {
  __type?: "RequestServiceQuotaIncreaseResponse";
  /**
   * <p>Returns a list of service quota requests.</p>
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export namespace RequestServiceQuotaIncreaseResponse {
  export const filterSensitiveLog = (
    obj: RequestServiceQuotaIncreaseResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestServiceQuotaIncreaseResponse =>
    __isa(o, "RequestServiceQuotaIncreaseResponse");
}

export enum RequestStatus {
  APPROVED = "APPROVED",
  CASE_CLOSED = "CASE_CLOSED",
  CASE_OPENED = "CASE_OPENED",
  DENIED = "DENIED",
  PENDING = "PENDING"
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException =>
    __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>Something went wrong. </p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceException {
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceException =>
    __isa(o, "ServiceException");
}

/**
 * <p>A structure that contains the <code>ServiceName</code> and <code>ServiceCode</code>. It
 *       does not include all details of the service quota. To get those values, use the <a>ListServiceQuotas</a> operation. </p>
 */
export interface ServiceInfo {
  __type?: "ServiceInfo";
  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;
}

export namespace ServiceInfo {
  export const filterSensitiveLog = (obj: ServiceInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceInfo => __isa(o, "ServiceInfo");
}

/**
 * <p>A structure that contains the full set of details that define the service quota.</p>
 */
export interface ServiceQuota {
  __type?: "ServiceQuota";
  /**
   * <p>Specifies if the quota value can be increased.</p>
   */
  Adjustable?: boolean;

  /**
   * <p>Specifies the <code>ErrorCode</code> and <code>ErrorMessage</code> when success isn't
   *       achieved.</p>
   */
  ErrorReason?: ErrorReason;

  /**
   * <p>Specifies if the quota is global.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>Identifies the unit and value of how time is measured.</p>
   */
  Period?: QuotaPeriod;

  /**
   * <p>The Amazon Resource Name (ARN) of the service quota.</p>
   */
  QuotaArn?: string;

  /**
   * <p>The code identifier for the service quota specified.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The name identifier of the service quota.</p>
   */
  QuotaName?: string;

  /**
   * <p>Specifies the service that you want to use.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;

  /**
   * <p>The unit of measurement for the value of the service quota.</p>
   */
  Unit?: string;

  /**
   * <p>Specifies the details about the measurement. </p>
   */
  UsageMetric?: MetricInfo;

  /**
   * <p>The value of service quota.</p>
   */
  Value?: number;
}

export namespace ServiceQuota {
  export const filterSensitiveLog = (obj: ServiceQuota): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceQuota => __isa(o, "ServiceQuota");
}

/**
 * <p>A structure that contains information about one service quota increase request.</p>
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  __type?: "ServiceQuotaIncreaseRequestInTemplate";
  /**
   * <p>The AWS Region where the increase request occurs.</p>
   */
  AwsRegion?: string;

  /**
   * <p>Identifies the new, increased value of the service quota in the increase request. </p>
   */
  DesiredValue?: number;

  /**
   * <p>Specifies if the quota is a global quota.</p>
   */
  GlobalQuota?: boolean;

  /**
   * <p>The code identifier for the service quota specified in the increase request.</p>
   */
  QuotaCode?: string;

  /**
   * <p>The name of the service quota in the increase request.</p>
   */
  QuotaName?: string;

  /**
   * <p>The code identifier for the AWS service specified in the increase request.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The name of the AWS service specified in the increase request. </p>
   */
  ServiceName?: string;

  /**
   * <p>The unit of measure for the increase request.</p>
   */
  Unit?: string;
}

export namespace ServiceQuotaIncreaseRequestInTemplate {
  export const filterSensitiveLog = (
    obj: ServiceQuotaIncreaseRequestInTemplate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceQuotaIncreaseRequestInTemplate =>
    __isa(o, "ServiceQuotaIncreaseRequestInTemplate");
}

export enum ServiceQuotaTemplateAssociationStatus {
  ASSOCIATED = "ASSOCIATED",
  DISASSOCIATED = "DISASSOCIATED"
}

/**
 * <p>The quota request template is not associated with your organization. </p>
 *          <p>To use the template, call <a>AssociateServiceQuotaTemplate</a>. </p>
 */
export interface ServiceQuotaTemplateNotInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaTemplateNotInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaTemplateNotInUseException {
  export const filterSensitiveLog = (
    obj: ServiceQuotaTemplateNotInUseException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceQuotaTemplateNotInUseException =>
    __isa(o, "ServiceQuotaTemplateNotInUseException");
}

/**
 * <p>The Service Quotas template is not available in the Region where you are making the
 *       request. Please make the request in us-east-1. </p>
 */
export interface TemplatesNotAvailableInRegionException
  extends __SmithyException,
    $MetadataBearer {
  name: "TemplatesNotAvailableInRegionException";
  $fault: "client";
  Message?: string;
}

export namespace TemplatesNotAvailableInRegionException {
  export const filterSensitiveLog = (
    obj: TemplatesNotAvailableInRegionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplatesNotAvailableInRegionException =>
    __isa(o, "TemplatesNotAvailableInRegionException");
}

/**
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request
 *       an increase for this quota. </p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}
