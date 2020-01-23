import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ErrorCode {
  DEPENDENCY_ACCESS_DENIED_ERROR = "DEPENDENCY_ACCESS_DENIED_ERROR",
  DEPENDENCY_SERVICE_ERROR = "DEPENDENCY_SERVICE_ERROR",
  DEPENDENCY_THROTTLING_ERROR = "DEPENDENCY_THROTTLING_ERROR",
  SERVICE_QUOTA_NOT_AVAILABLE_ERROR = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR"
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

export enum RequestStatus {
  APPROVED = "APPROVED",
  CASE_CLOSED = "CASE_CLOSED",
  CASE_OPENED = "CASE_OPENED",
  DENIED = "DENIED",
  PENDING = "PENDING"
}

export enum ServiceQuotaTemplateAssociationStatus {
  ASSOCIATED = "ASSOCIATED",
  DISASSOCIATED = "DISASSOCIATED"
}

/**
 *
 *          <p>The action you attempted is not allowed unless Service Access with Service Quotas is
 *       enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
 *
 */
export interface AWSServiceAccessNotEnabledException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AWSServiceAccessNotEnabledException";
  name: "AWSServiceAccessNotEnabledException";
  $fault: "client";
  Message?: string;
}

export namespace AWSServiceAccessNotEnabledException {
  export function isa(o: any): o is AWSServiceAccessNotEnabledException {
    return _smithy.isa(o, "AWSServiceAccessNotEnabledException");
  }
}

/**
 *
 *          <p>You do not have sufficient access to perform this action.</p>
 *
 */
export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AccessDeniedException";
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
}

export interface AssociateServiceQuotaTemplateRequest {
  __type?: "AssociateServiceQuotaTemplateRequest";
}

export namespace AssociateServiceQuotaTemplateRequest {
  export function isa(o: any): o is AssociateServiceQuotaTemplateRequest {
    return _smithy.isa(o, "AssociateServiceQuotaTemplateRequest");
  }
}

export interface AssociateServiceQuotaTemplateResponse extends $MetadataBearer {
  __type?: "AssociateServiceQuotaTemplateResponse";
}

export namespace AssociateServiceQuotaTemplateResponse {
  export function isa(o: any): o is AssociateServiceQuotaTemplateResponse {
    return _smithy.isa(o, "AssociateServiceQuotaTemplateResponse");
  }
}

export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  __type?: "DeleteServiceQuotaIncreaseRequestFromTemplateRequest";
  /**
   *
   *          <p>Specifies the AWS Region for the quota that you want to delete.</p>
   *
   */
  AwsRegion: string | undefined;

  /**
   *
   *          <p>Specifies the code for the quota that you want to delete.</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the code for the service that you want to delete.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  export function isa(
    o: any
  ): o is DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
    return _smithy.isa(
      o,
      "DeleteServiceQuotaIncreaseRequestFromTemplateRequest"
    );
  }
}

export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse
  extends $MetadataBearer {
  __type?: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse";
}

export namespace DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
  export function isa(
    o: any
  ): o is DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
    return _smithy.isa(
      o,
      "DeleteServiceQuotaIncreaseRequestFromTemplateResponse"
    );
  }
}

/**
 *
 *          <p>You can't perform this action because a dependency does not have access.</p>
 *
 */
export interface DependencyAccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DependencyAccessDeniedException";
  name: "DependencyAccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace DependencyAccessDeniedException {
  export function isa(o: any): o is DependencyAccessDeniedException {
    return _smithy.isa(o, "DependencyAccessDeniedException");
  }
}

export interface DisassociateServiceQuotaTemplateRequest {
  __type?: "DisassociateServiceQuotaTemplateRequest";
}

export namespace DisassociateServiceQuotaTemplateRequest {
  export function isa(o: any): o is DisassociateServiceQuotaTemplateRequest {
    return _smithy.isa(o, "DisassociateServiceQuotaTemplateRequest");
  }
}

export interface DisassociateServiceQuotaTemplateResponse
  extends $MetadataBearer {
  __type?: "DisassociateServiceQuotaTemplateResponse";
}

export namespace DisassociateServiceQuotaTemplateResponse {
  export function isa(o: any): o is DisassociateServiceQuotaTemplateResponse {
    return _smithy.isa(o, "DisassociateServiceQuotaTemplateResponse");
  }
}

/**
 *
 *          <p>Returns an error that explains why the action did not succeed.</p>
 *
 */
export interface ErrorReason {
  __type?: "ErrorReason";
  /**
   *
   *          <p>Service Quotas returns the following error values.
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
   *
   */
  ErrorCode?: ErrorCode | string;

  /**
   *
   *          <p>The error message that provides more detail.</p>
   *
   */
  ErrorMessage?: string;
}

export namespace ErrorReason {
  export function isa(o: any): o is ErrorReason {
    return _smithy.isa(o, "ErrorReason");
  }
}

export interface GetAWSDefaultServiceQuotaRequest {
  __type?: "GetAWSDefaultServiceQuotaRequest";
  /**
   *
   *          <p>Identifies the service quota you want to select.</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace GetAWSDefaultServiceQuotaRequest {
  export function isa(o: any): o is GetAWSDefaultServiceQuotaRequest {
    return _smithy.isa(o, "GetAWSDefaultServiceQuotaRequest");
  }
}

export interface GetAWSDefaultServiceQuotaResponse extends $MetadataBearer {
  __type?: "GetAWSDefaultServiceQuotaResponse";
  /**
   *
   *          <p>Returns the <a>ServiceQuota</a> object which contains all values for a
   *       quota.</p>
   *
   */
  Quota?: ServiceQuota;
}

export namespace GetAWSDefaultServiceQuotaResponse {
  export function isa(o: any): o is GetAWSDefaultServiceQuotaResponse {
    return _smithy.isa(o, "GetAWSDefaultServiceQuotaResponse");
  }
}

export interface GetAssociationForServiceQuotaTemplateRequest {
  __type?: "GetAssociationForServiceQuotaTemplateRequest";
}

export namespace GetAssociationForServiceQuotaTemplateRequest {
  export function isa(
    o: any
  ): o is GetAssociationForServiceQuotaTemplateRequest {
    return _smithy.isa(o, "GetAssociationForServiceQuotaTemplateRequest");
  }
}

export interface GetAssociationForServiceQuotaTemplateResponse
  extends $MetadataBearer {
  __type?: "GetAssociationForServiceQuotaTemplateResponse";
  /**
   *
   *          <p>Specifies whether the template is <code>ASSOCIATED</code> or <code>DISASSOCIATED</code>.
   *       If the template is <code>ASSOCIATED</code>, then it requests service quota increases for all
   *       new accounts created in your organization. </p>
   *
   */
  ServiceQuotaTemplateAssociationStatus?:
    | ServiceQuotaTemplateAssociationStatus
    | string;
}

export namespace GetAssociationForServiceQuotaTemplateResponse {
  export function isa(
    o: any
  ): o is GetAssociationForServiceQuotaTemplateResponse {
    return _smithy.isa(o, "GetAssociationForServiceQuotaTemplateResponse");
  }
}

export interface GetRequestedServiceQuotaChangeRequest {
  __type?: "GetRequestedServiceQuotaChangeRequest";
  /**
   *
   *          <p>Identifies the quota increase request.</p>
   *
   */
  RequestId: string | undefined;
}

export namespace GetRequestedServiceQuotaChangeRequest {
  export function isa(o: any): o is GetRequestedServiceQuotaChangeRequest {
    return _smithy.isa(o, "GetRequestedServiceQuotaChangeRequest");
  }
}

export interface GetRequestedServiceQuotaChangeResponse
  extends $MetadataBearer {
  __type?: "GetRequestedServiceQuotaChangeResponse";
  /**
   *
   *          <p>Returns the <code>RequestedServiceQuotaChange</code> object for the specific increase
   *       request.</p>
   *
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export namespace GetRequestedServiceQuotaChangeResponse {
  export function isa(o: any): o is GetRequestedServiceQuotaChangeResponse {
    return _smithy.isa(o, "GetRequestedServiceQuotaChangeResponse");
  }
}

export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  __type?: "GetServiceQuotaIncreaseRequestFromTemplateRequest";
  /**
   *
   *          <p>Specifies the AWS Region for the quota that you want to use.</p>
   *
   */
  AwsRegion: string | undefined;

  /**
   *
   *          <p>Specifies the quota you want.</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace GetServiceQuotaIncreaseRequestFromTemplateRequest {
  export function isa(
    o: any
  ): o is GetServiceQuotaIncreaseRequestFromTemplateRequest {
    return _smithy.isa(o, "GetServiceQuotaIncreaseRequestFromTemplateRequest");
  }
}

export interface GetServiceQuotaIncreaseRequestFromTemplateResponse
  extends $MetadataBearer {
  __type?: "GetServiceQuotaIncreaseRequestFromTemplateResponse";
  /**
   *
   *          <p>This object contains the details about the quota increase request.</p>
   *
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

export namespace GetServiceQuotaIncreaseRequestFromTemplateResponse {
  export function isa(
    o: any
  ): o is GetServiceQuotaIncreaseRequestFromTemplateResponse {
    return _smithy.isa(o, "GetServiceQuotaIncreaseRequestFromTemplateResponse");
  }
}

export interface GetServiceQuotaRequest {
  __type?: "GetServiceQuotaRequest";
  /**
   *
   *          <p>Identifies the service quota you want to select.</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace GetServiceQuotaRequest {
  export function isa(o: any): o is GetServiceQuotaRequest {
    return _smithy.isa(o, "GetServiceQuotaRequest");
  }
}

export interface GetServiceQuotaResponse extends $MetadataBearer {
  __type?: "GetServiceQuotaResponse";
  /**
   *
   *          <p>Returns the <a>ServiceQuota</a> object which contains all values for a
   *       quota.</p>
   *
   */
  Quota?: ServiceQuota;
}

export namespace GetServiceQuotaResponse {
  export function isa(o: any): o is GetServiceQuotaResponse {
    return _smithy.isa(o, "GetServiceQuotaResponse");
  }
}

/**
 *
 *          <p>Invalid input was provided. </p>
 *
 */
export interface IllegalArgumentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IllegalArgumentException";
  name: "IllegalArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalArgumentException {
  export function isa(o: any): o is IllegalArgumentException {
    return _smithy.isa(o, "IllegalArgumentException");
  }
}

/**
 *
 *          <p>Invalid input was provided.</p>
 *
 */
export interface InvalidPaginationTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidPaginationTokenException";
  name: "InvalidPaginationTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPaginationTokenException {
  export function isa(o: any): o is InvalidPaginationTokenException {
    return _smithy.isa(o, "InvalidPaginationTokenException");
  }
}

/**
 *
 *          <p>Invalid input was provided for the . </p>
 *
 */
export interface InvalidResourceStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidResourceStateException";
  name: "InvalidResourceStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResourceStateException {
  export function isa(o: any): o is InvalidResourceStateException {
    return _smithy.isa(o, "InvalidResourceStateException");
  }
}

export interface ListAWSDefaultServiceQuotasRequest {
  __type?: "ListAWSDefaultServiceQuotasRequest";
  /**
   *
   *          <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from. If additional items exist beyond the specified
   *       maximum, the <code>NextToken</code> element is present and has a value (isn't null). Include
   *       that value as the <code>NextToken</code> request parameter in the call to the operation to get
   *       the next part of the results. You should check <code>NextToken</code> after every operation to
   *       ensure that you receive all of the results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace ListAWSDefaultServiceQuotasRequest {
  export function isa(o: any): o is ListAWSDefaultServiceQuotasRequest {
    return _smithy.isa(o, "ListAWSDefaultServiceQuotasRequest");
  }
}

export interface ListAWSDefaultServiceQuotasResponse extends $MetadataBearer {
  __type?: "ListAWSDefaultServiceQuotasResponse";
  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>A list of the quotas in the account with the AWS default values. </p>
   *
   */
  Quotas?: Array<ServiceQuota>;
}

export namespace ListAWSDefaultServiceQuotasResponse {
  export function isa(o: any): o is ListAWSDefaultServiceQuotasResponse {
    return _smithy.isa(o, "ListAWSDefaultServiceQuotasResponse");
  }
}

export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  __type?: "ListRequestedServiceQuotaChangeHistoryByQuotaRequest";
  /**
   *
   *          <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Specifies the service quota that you want to use</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;

  /**
   *
   *          <p>Specifies the status value of the quota increase request.</p>
   *
   */
  Status?: RequestStatus | string;
}

export namespace ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  export function isa(
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
    return _smithy.isa(
      o,
      "ListRequestedServiceQuotaChangeHistoryByQuotaRequest"
    );
  }
}

export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse
  extends $MetadataBearer {
  __type?: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse";
  /**
   *
   *          <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Returns a list of service quota requests.</p>
   *
   */
  RequestedQuotas?: Array<RequestedServiceQuotaChange>;
}

export namespace ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  export function isa(
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
    return _smithy.isa(
      o,
      "ListRequestedServiceQuotaChangeHistoryByQuotaResponse"
    );
  }
}

export interface ListRequestedServiceQuotaChangeHistoryRequest {
  __type?: "ListRequestedServiceQuotaChangeHistoryRequest";
  /**
   *
   *          <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode?: string;

  /**
   *
   *          <p>Specifies the status value of the quota increase request.</p>
   *
   */
  Status?: RequestStatus | string;
}

export namespace ListRequestedServiceQuotaChangeHistoryRequest {
  export function isa(
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryRequest {
    return _smithy.isa(o, "ListRequestedServiceQuotaChangeHistoryRequest");
  }
}

export interface ListRequestedServiceQuotaChangeHistoryResponse
  extends $MetadataBearer {
  __type?: "ListRequestedServiceQuotaChangeHistoryResponse";
  /**
   *
   *          <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Returns a list of service quota requests.</p>
   *
   */
  RequestedQuotas?: Array<RequestedServiceQuotaChange>;
}

export namespace ListRequestedServiceQuotaChangeHistoryResponse {
  export function isa(
    o: any
  ): o is ListRequestedServiceQuotaChangeHistoryResponse {
    return _smithy.isa(o, "ListRequestedServiceQuotaChangeHistoryResponse");
  }
}

export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  __type?: "ListServiceQuotaIncreaseRequestsInTemplateRequest";
  /**
   *
   *          <p>Specifies the AWS Region for the quota that you want to use.</p>
   *
   */
  AwsRegion?: string;

  /**
   *
   *          <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The identifier for a service. When performing an operation, use the
   *         <code>ServiceCode</code> to specify a particular service. </p>
   *
   */
  ServiceCode?: string;
}

export namespace ListServiceQuotaIncreaseRequestsInTemplateRequest {
  export function isa(
    o: any
  ): o is ListServiceQuotaIncreaseRequestsInTemplateRequest {
    return _smithy.isa(o, "ListServiceQuotaIncreaseRequestsInTemplateRequest");
  }
}

export interface ListServiceQuotaIncreaseRequestsInTemplateResponse
  extends $MetadataBearer {
  __type?: "ListServiceQuotaIncreaseRequestsInTemplateResponse";
  /**
   *
   *          <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Returns the list of values of the quota increase request in the template.</p>
   *
   */
  ServiceQuotaIncreaseRequestInTemplateList?: Array<
    ServiceQuotaIncreaseRequestInTemplate
  >;
}

export namespace ListServiceQuotaIncreaseRequestsInTemplateResponse {
  export function isa(
    o: any
  ): o is ListServiceQuotaIncreaseRequestsInTemplateResponse {
    return _smithy.isa(o, "ListServiceQuotaIncreaseRequestsInTemplateResponse");
  }
}

export interface ListServiceQuotasRequest {
  __type?: "ListServiceQuotasRequest";
  /**
   *
   *          <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The identifier for a service. When performing an operation, use the
   *         <code>ServiceCode</code> to specify a particular service. </p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace ListServiceQuotasRequest {
  export function isa(o: any): o is ListServiceQuotasRequest {
    return _smithy.isa(o, "ListServiceQuotasRequest");
  }
}

export interface ListServiceQuotasResponse extends $MetadataBearer {
  __type?: "ListServiceQuotasResponse";
  /**
   *
   *          <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The response information for a quota lists all attribute information for the quota.
   *     </p>
   *
   */
  Quotas?: Array<ServiceQuota>;
}

export namespace ListServiceQuotasResponse {
  export function isa(o: any): o is ListServiceQuotasResponse {
    return _smithy.isa(o, "ListServiceQuotasResponse");
  }
}

export interface ListServicesRequest {
  __type?: "ListServicesRequest";
  /**
   *
   *          <p>(Optional) Limits the number of results that you want to include in the response. If you
   *       don't include this parameter, the response defaults to a value that's specific to the
   *       operation. If additional items exist beyond the specified maximum, the <code>NextToken</code>
   *       element is present and has a value (isn't null). Include that value as the
   *         <code>NextToken</code> request parameter in the call to the operation to get the next part
   *       of the results. You should check <code>NextToken</code> after every operation to ensure that
   *       you receive all of the results.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>(Optional) Use this parameter in a request if you receive a <code>NextToken</code>
   *       response in a previous request that indicates that there's more output available. In a
   *       subsequent call, set it to the value of the previous call's <code>NextToken</code> response to
   *       indicate where the output should continue from.</p>
   *
   */
  NextToken?: string;
}

export namespace ListServicesRequest {
  export function isa(o: any): o is ListServicesRequest {
    return _smithy.isa(o, "ListServicesRequest");
  }
}

export interface ListServicesResponse extends $MetadataBearer {
  __type?: "ListServicesResponse";
  /**
   *
   *          <p>If present in the response, this value indicates there's more output available that what's
   *       included in the current response. This can occur even when the response includes no values at
   *       all, such as when you ask for a filtered view of a very long list. Use this value in the
   *         <code>NextToken</code> request parameter in a subsequent call to the operation to continue
   *       processing and get the next part of the output. You should repeat this until the
   *         <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Returns a list of services. </p>
   *
   */
  Services?: Array<ServiceInfo>;
}

export namespace ListServicesResponse {
  export function isa(o: any): o is ListServicesResponse {
    return _smithy.isa(o, "ListServicesResponse");
  }
}

/**
 *
 *          <p>A structure that uses CloudWatch metrics to gather data about the service quota.</p>
 *
 */
export interface MetricInfo {
  __type?: "MetricInfo";
  /**
   *
   *          <p>A dimension is a name/value pair that is part of the identity of a metric. Every metric
   *       has specific characteristics that describe it, and you can think of dimensions as categories
   *       for those characteristics. These dimensions are part of the CloudWatch Metric Identity that
   *       measures usage against a particular service quota.</p>
   *
   */
  MetricDimensions?: { [key: string]: string };

  /**
   *
   *          <p>The name of the CloudWatch metric that measures usage of a service quota. This is a
   *       required field.</p>
   *
   */
  MetricName?: string;

  /**
   *
   *          <p>The namespace of the metric. The namespace is a container for CloudWatch metrics. You can
   *       specify a name for the namespace when you create a metric.</p>
   *
   */
  MetricNamespace?: string;

  /**
   *
   *          <p>Statistics are metric data aggregations over specified periods of time. This is the
   *       recommended statistic to use when comparing usage in the CloudWatch Metric against your
   *       Service Quota.</p>
   *
   */
  MetricStatisticRecommendation?: string;
}

export namespace MetricInfo {
  export function isa(o: any): o is MetricInfo {
    return _smithy.isa(o, "MetricInfo");
  }
}

/**
 *
 *          <p>The account making this call is not a member of an organization.</p>
 *
 */
export interface NoAvailableOrganizationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NoAvailableOrganizationException";
  name: "NoAvailableOrganizationException";
  $fault: "client";
  Message?: string;
}

export namespace NoAvailableOrganizationException {
  export function isa(o: any): o is NoAvailableOrganizationException {
    return _smithy.isa(o, "NoAvailableOrganizationException");
  }
}

/**
 *
 *          <p>The specified resource does not exist.</p>
 *
 */
export interface NoSuchResourceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NoSuchResourceException";
  name: "NoSuchResourceException";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchResourceException {
  export function isa(o: any): o is NoSuchResourceException {
    return _smithy.isa(o, "NoSuchResourceException");
  }
}

/**
 *
 *          <p>The organization that your account belongs to, is not in All Features mode. To enable all
 *       features mode, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html">EnableAllFeatures</a>.</p>
 *
 */
export interface OrganizationNotInAllFeaturesModeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "OrganizationNotInAllFeaturesModeException";
  name: "OrganizationNotInAllFeaturesModeException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotInAllFeaturesModeException {
  export function isa(o: any): o is OrganizationNotInAllFeaturesModeException {
    return _smithy.isa(o, "OrganizationNotInAllFeaturesModeException");
  }
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  __type?: "PutServiceQuotaIncreaseRequestIntoTemplateRequest";
  /**
   *
   *          <p>Specifies the AWS Region for the quota. </p>
   *
   */
  AwsRegion: string | undefined;

  /**
   *
   *          <p>Specifies the new, increased value for the quota. </p>
   *
   */
  DesiredValue: number | undefined;

  /**
   *
   *          <p>Specifies the service quota that you want to use.</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  export function isa(
    o: any
  ): o is PutServiceQuotaIncreaseRequestIntoTemplateRequest {
    return _smithy.isa(o, "PutServiceQuotaIncreaseRequestIntoTemplateRequest");
  }
}

export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse
  extends $MetadataBearer {
  __type?: "PutServiceQuotaIncreaseRequestIntoTemplateResponse";
  /**
   *
   *          <p>A structure that contains information about one service quota increase request.</p>
   *
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}

export namespace PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  export function isa(
    o: any
  ): o is PutServiceQuotaIncreaseRequestIntoTemplateResponse {
    return _smithy.isa(o, "PutServiceQuotaIncreaseRequestIntoTemplateResponse");
  }
}

/**
 *
 *          <p>You have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 */
export interface QuotaExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "QuotaExceededException";
  name: "QuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace QuotaExceededException {
  export function isa(o: any): o is QuotaExceededException {
    return _smithy.isa(o, "QuotaExceededException");
  }
}

/**
 *
 *          <p>A structure that contains information about the quota period.</p>
 *
 */
export interface QuotaPeriod {
  __type?: "QuotaPeriod";
  /**
   *
   *          <p>The time unit of a period.</p>
   *
   */
  PeriodUnit?: PeriodUnit | string;

  /**
   *
   *          <p>The value of a period.</p>
   *
   */
  PeriodValue?: number;
}

export namespace QuotaPeriod {
  export function isa(o: any): o is QuotaPeriod {
    return _smithy.isa(o, "QuotaPeriod");
  }
}

export interface RequestServiceQuotaIncreaseRequest {
  __type?: "RequestServiceQuotaIncreaseRequest";
  /**
   *
   *          <p>Specifies the value submitted in the service quota increase request. </p>
   *
   */
  DesiredValue: number | undefined;

  /**
   *
   *          <p>Specifies the service quota that you want to use.</p>
   *
   */
  QuotaCode: string | undefined;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode: string | undefined;
}

export namespace RequestServiceQuotaIncreaseRequest {
  export function isa(o: any): o is RequestServiceQuotaIncreaseRequest {
    return _smithy.isa(o, "RequestServiceQuotaIncreaseRequest");
  }
}

export interface RequestServiceQuotaIncreaseResponse extends $MetadataBearer {
  __type?: "RequestServiceQuotaIncreaseResponse";
  /**
   *
   *          <p>Returns a list of service quota requests.</p>
   *
   */
  RequestedQuota?: RequestedServiceQuotaChange;
}

export namespace RequestServiceQuotaIncreaseResponse {
  export function isa(o: any): o is RequestServiceQuotaIncreaseResponse {
    return _smithy.isa(o, "RequestServiceQuotaIncreaseResponse");
  }
}

/**
 *
 *          <p>A structure that contains information about a requested change for a quota.</p>
 *
 */
export interface RequestedServiceQuotaChange {
  __type?: "RequestedServiceQuotaChange";
  /**
   *
   *          <p>The case Id for the service quota increase request.</p>
   *
   */
  CaseId?: string;

  /**
   *
   *          <p>The date and time when the service quota increase request was received and the case Id was
   *       created. </p>
   *
   */
  Created?: Date;

  /**
   *
   *          <p>New increased value for the service quota.</p>
   *
   */
  DesiredValue?: number;

  /**
   *
   *          <p>Identifies if the quota is global.</p>
   *
   */
  GlobalQuota?: boolean;

  /**
   *
   *          <p>The unique identifier of a requested service quota change.</p>
   *
   */
  Id?: string;

  /**
   *
   *          <p>The date and time of the most recent change in the service quota increase request.</p>
   *
   */
  LastUpdated?: Date;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the service quota.</p>
   *
   */
  QuotaArn?: string;

  /**
   *
   *          <p>Specifies the service quota that you want to use.</p>
   *
   */
  QuotaCode?: string;

  /**
   *
   *          <p>Name of the service quota.</p>
   *
   */
  QuotaName?: string;

  /**
   *
   *          <p>The IAM identity who submitted the service quota increase request.</p>
   *
   */
  Requester?: string;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode?: string;

  /**
   *
   *          <p>The name of the AWS service specified in the increase request. </p>
   *
   */
  ServiceName?: string;

  /**
   *
   *          <p>State of the service quota increase request.</p>
   *
   */
  Status?: RequestStatus | string;

  /**
   *
   *          <p>Specifies the unit used for the quota.</p>
   *
   */
  Unit?: string;
}

export namespace RequestedServiceQuotaChange {
  export function isa(o: any): o is RequestedServiceQuotaChange {
    return _smithy.isa(o, "RequestedServiceQuotaChange");
  }
}

/**
 *
 *          <p>The specified resource already exists.</p>
 *
 */
export interface ResourceAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceAlreadyExistsException";
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return _smithy.isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 *
 *          <p>Something went wrong. </p>
 *
 */
export interface ServiceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceException";
  name: "ServiceException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceException {
  export function isa(o: any): o is ServiceException {
    return _smithy.isa(o, "ServiceException");
  }
}

/**
 *
 *          <p>A structure that contains the <code>ServiceName</code> and <code>ServiceCode</code>. It
 *       does not include all details of the service quota. To get those values, use the <a>ListServiceQuotas</a> operation. </p>
 *
 */
export interface ServiceInfo {
  __type?: "ServiceInfo";
  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode?: string;

  /**
   *
   *          <p>The name of the AWS service specified in the increase request. </p>
   *
   */
  ServiceName?: string;
}

export namespace ServiceInfo {
  export function isa(o: any): o is ServiceInfo {
    return _smithy.isa(o, "ServiceInfo");
  }
}

/**
 *
 *          <p>A structure that contains the full set of details that define the service quota.</p>
 *
 */
export interface ServiceQuota {
  __type?: "ServiceQuota";
  /**
   *
   *          <p>Specifies if the quota value can be increased.</p>
   *
   */
  Adjustable?: boolean;

  /**
   *
   *          <p>Specifies the <code>ErrorCode</code> and <code>ErrorMessage</code> when success isn't
   *       achieved.</p>
   *
   */
  ErrorReason?: ErrorReason;

  /**
   *
   *          <p>Specifies if the quota is global.</p>
   *
   */
  GlobalQuota?: boolean;

  /**
   *
   *          <p>Identifies the unit and value of how time is measured.</p>
   *
   */
  Period?: QuotaPeriod;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the service quota.</p>
   *
   */
  QuotaArn?: string;

  /**
   *
   *          <p>The code identifier for the service quota specified.</p>
   *
   */
  QuotaCode?: string;

  /**
   *
   *          <p>The name identifier of the service quota.</p>
   *
   */
  QuotaName?: string;

  /**
   *
   *          <p>Specifies the service that you want to use.</p>
   *
   */
  ServiceCode?: string;

  /**
   *
   *          <p>The name of the AWS service specified in the increase request. </p>
   *
   */
  ServiceName?: string;

  /**
   *
   *          <p>The unit of measurement for the value of the service quota.</p>
   *
   */
  Unit?: string;

  /**
   *
   *          <p>Specifies the details about the measurement. </p>
   *
   */
  UsageMetric?: MetricInfo;

  /**
   *
   *          <p>The value of service quota.</p>
   *
   */
  Value?: number;
}

export namespace ServiceQuota {
  export function isa(o: any): o is ServiceQuota {
    return _smithy.isa(o, "ServiceQuota");
  }
}

/**
 *
 *          <p>A structure that contains information about one service quota increase request.</p>
 *
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  __type?: "ServiceQuotaIncreaseRequestInTemplate";
  /**
   *
   *          <p>The AWS Region where the increase request occurs.</p>
   *
   */
  AwsRegion?: string;

  /**
   *
   *          <p>Identifies the new, increased value of the service quota in the increase request. </p>
   *
   */
  DesiredValue?: number;

  /**
   *
   *          <p>Specifies if the quota is a global quota.</p>
   *
   */
  GlobalQuota?: boolean;

  /**
   *
   *          <p>The code identifier for the service quota specified in the increase request.</p>
   *
   */
  QuotaCode?: string;

  /**
   *
   *          <p>The name of the service quota in the increase request.</p>
   *
   */
  QuotaName?: string;

  /**
   *
   *          <p>The code identifier for the AWS service specified in the increase request.</p>
   *
   */
  ServiceCode?: string;

  /**
   *
   *          <p>The name of the AWS service specified in the increase request. </p>
   *
   */
  ServiceName?: string;

  /**
   *
   *          <p>The unit of measure for the increase request.</p>
   *
   */
  Unit?: string;
}

export namespace ServiceQuotaIncreaseRequestInTemplate {
  export function isa(o: any): o is ServiceQuotaIncreaseRequestInTemplate {
    return _smithy.isa(o, "ServiceQuotaIncreaseRequestInTemplate");
  }
}

/**
 *
 *          <p>The quota request template is not associated with your organization. </p>
 *          <p>To use the template, call <a>AssociateServiceQuotaTemplate</a>. </p>
 *
 */
export interface ServiceQuotaTemplateNotInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceQuotaTemplateNotInUseException";
  name: "ServiceQuotaTemplateNotInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaTemplateNotInUseException {
  export function isa(o: any): o is ServiceQuotaTemplateNotInUseException {
    return _smithy.isa(o, "ServiceQuotaTemplateNotInUseException");
  }
}

/**
 *
 *          <p>The Service Quotas template is not available in the Region where you are making the
 *       request. Please make the request in us-east-1. </p>
 *
 */
export interface TemplatesNotAvailableInRegionException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TemplatesNotAvailableInRegionException";
  name: "TemplatesNotAvailableInRegionException";
  $fault: "client";
  Message?: string;
}

export namespace TemplatesNotAvailableInRegionException {
  export function isa(o: any): o is TemplatesNotAvailableInRegionException {
    return _smithy.isa(o, "TemplatesNotAvailableInRegionException");
  }
}

/**
 *
 *          <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request
 *       an increase for this quota. </p>
 *
 */
export interface TooManyRequestsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyRequestsException";
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return _smithy.isa(o, "TooManyRequestsException");
  }
}
