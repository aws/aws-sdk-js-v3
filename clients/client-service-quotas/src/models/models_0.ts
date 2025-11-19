// smithy-typescript generated code
import {
  AppliedLevelEnum,
  ErrorCode,
  OptInLevel,
  OptInStatus,
  OptInType,
  PeriodUnit,
  QuotaContextScope,
  RequestStatus,
  ServiceQuotaTemplateAssociationStatus,
} from "./enums";

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
 */
export interface CreateSupportCaseRequest {
  /**
   * <p>The ID of the pending quota increase request for which you want to open a Support case. </p>
   * @public
   */
  RequestId: string | undefined;
}

/**
 * @public
 */
export interface CreateSupportCaseResponse {}

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
 * @public
 */
export interface DisassociateServiceQuotaTemplateRequest {}

/**
 * @public
 */
export interface DisassociateServiceQuotaTemplateResponse {}

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
   *                     permission to access the Amazon Web Services service or quota.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_THROTTLING_ERROR</code> - The Amazon Web Services service is throttling
   *                     Service Quotas. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPENDENCY_SERVICE_ERROR</code> - The Amazon Web Services service is not
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
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Information on your Service Quotas for <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html">Service Quotas Automatic Management</a>. Automatic Management monitors your Service Quotas utilization and notifies you before you
 *             run out of your allocated quotas.</p>
 * @public
 */
export interface QuotaInfo {
  /**
   * <p>The Service Quotas code for the Amazon Web Services service monitored with Automatic Management.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The Service Quotas name for the Amazon Web Services service monitored with Automatic Management.</p>
   * @public
   */
  QuotaName?: string | undefined;
}

/**
 * @public
 */
export interface GetAssociationForServiceQuotaTemplateRequest {}

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
  ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus | undefined;
}

/**
 * @public
 */
export interface GetAutoManagementConfigurationRequest {}

/**
 * @public
 */
export interface GetAutoManagementConfigurationResponse {
  /**
   * <p>Information on the opt-in level for Automatic Management. Only Amazon Web Services account level is supported.</p>
   * @public
   */
  OptInLevel?: OptInLevel | undefined;

  /**
   * <p>Information on the opt-in type for Automatic Management. There are two modes: Notify only and Notify and Auto-Adjust. Currently, only
   *                                 NotifyOnly is available.</p>
   * @public
   */
  OptInType?: OptInType | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html#rlp-table">User Notifications</a> Amazon Resource Name (ARN) for Automatic Management notifications.</p>
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * <p>Status on whether Automatic Management is started or stopped.</p>
   * @public
   */
  OptInStatus?: OptInStatus | undefined;

  /**
   * <p>List of Amazon Web Services services excluded from Automatic Management.
   *             You won't be notified of Service Quotas utilization for Amazon Web Services services added to the
   *                 Automatic Management exclusion list.
   *          </p>
   * @public
   */
  ExclusionList?: Record<string, QuotaInfo[]> | undefined;
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
 * <p>Information about the quota period.</p>
 * @public
 */
export interface QuotaPeriod {
  /**
   * <p>The value associated with the reported <code>PeriodUnit</code>.</p>
   * @public
   */
  PeriodValue?: number | undefined;

  /**
   * <p>The time unit.</p>
   * @public
   */
  PeriodUnit?: PeriodUnit | undefined;
}

/**
 * <p>A structure that describes the context for a resource-level quota. For resource-level quotas, such as <code>Instances per OpenSearch Service Domain</code>, you can apply the quota value at the resource-level for each OpenSearch Service Domain in your Amazon Web Services account. Together the attributes of this structure help you understand how the quota is implemented by Amazon Web Services and how you can manage it. For quotas such as <code>Amazon OpenSearch Service Domains</code> which can be managed at the account-level for each Amazon Web Services Region, the <code>QuotaContext</code> field is absent. See the attribute descriptions below to further understand how to use them.</p>
 * @public
 */
export interface QuotaContextInfo {
  /**
   * <p>Specifies the scope to which the quota value is applied. If the scope is <code>RESOURCE</code>, the quota value is applied to each resource in the Amazon Web Services account. If the scope is <code>ACCOUNT</code>, the quota value is applied to the Amazon Web Services account.</p>
   * @public
   */
  ContextScope?: QuotaContextScope | undefined;

  /**
   * <p>Specifies the resource type to which the quota can be applied.</p>
   * @public
   */
  ContextScopeType?: string | undefined;

  /**
   * <p>Specifies the resource, or resources, to which the quota applies. The value for this field is either an Amazon Resource Name (ARN) or *. If the value is an ARN, the quota value applies to that resource. If the value is *, then the quota value applies to all resources listed in the <code>ContextScopeType</code> field. The quota value applies to all resources for which you haven’t previously applied a quota value, and any new resources you create in your Amazon Web Services account.</p>
   * @public
   */
  ContextId?: string | undefined;
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
  MetricNamespace?: string | undefined;

  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The metric dimension. This is a name/value pair that is part of the identity of a
   *             metric.</p>
   * @public
   */
  MetricDimensions?: Record<string, string> | undefined;

  /**
   * <p>The metric statistic that we recommend you use when determining quota usage.</p>
   * @public
   */
  MetricStatisticRecommendation?: string | undefined;
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
  ServiceCode?: string | undefined;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   * @public
   */
  QuotaArn?: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>Specifies the quota name.</p>
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * <p>The quota value.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>The unit of measurement.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>Indicates whether the quota value can be increased.</p>
   * @public
   */
  Adjustable?: boolean | undefined;

  /**
   * <p>Indicates whether the quota is global.</p>
   * @public
   */
  GlobalQuota?: boolean | undefined;

  /**
   * <p>Information about the measurement.</p>
   * @public
   */
  UsageMetric?: MetricInfo | undefined;

  /**
   * <p>The period of time.</p>
   * @public
   */
  Period?: QuotaPeriod | undefined;

  /**
   * <p>The error code and error reason.</p>
   * @public
   */
  ErrorReason?: ErrorReason | undefined;

  /**
   * <p>Filters the response to return applied quota values for the <code>ACCOUNT</code>, <code>RESOURCE</code>, or <code>ALL</code> levels. <code>ACCOUNT</code> is the default.</p>
   * @public
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum | undefined;

  /**
   * <p>The context for this service quota.</p>
   * @public
   */
  QuotaContext?: QuotaContextInfo | undefined;

  /**
   * <p>The quota description. </p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   * @public
   */
  Quota?: ServiceQuota | undefined;
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
 * <p>Information about a quota increase request.</p>
 * @public
 */
export interface RequestedServiceQuotaChange {
  /**
   * <p>The unique identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The case ID.</p>
   * @public
   */
  CaseId?: string | undefined;

  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>Specifies the quota name.</p>
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * <p>The new, increased value for the quota.</p>
   * @public
   */
  DesiredValue?: number | undefined;

  /**
   * <p>The state of the quota increase request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The quota increase request is under review by Amazon Web Services. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CASE_OPENED</code>: Service Quotas opened a support case to process the quota increase
   *                 request. Follow-up on the support case for more information.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPROVED</code>: The quota increase request is approved. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DENIED</code>: The quota increase request can't be approved by Service Quotas. Contact
   *                Amazon Web Services Support for more details.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT APPROVED</code>: The quota increase request can't be approved by Service Quotas. Contact
   *                 Amazon Web Services Support for more details.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CASE_CLOSED</code>: The support case associated with this quota increase request was closed.
   *             Check the support case correspondence for the outcome of your quota request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_REQUEST</code>: Service Quotas couldn't process your resource-level quota increase request because the
   *             Amazon Resource Name (ARN) specified as part of the <code>ContextId</code> is invalid.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: RequestStatus | undefined;

  /**
   * <p>The date and time when the quota increase request was received and the case ID was
   *             created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The date and time of the most recent change.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The IAM identity of the requester.</p>
   * @public
   */
  Requester?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the quota.</p>
   * @public
   */
  QuotaArn?: string | undefined;

  /**
   * <p>Indicates whether the quota is global.</p>
   * @public
   */
  GlobalQuota?: boolean | undefined;

  /**
   * <p>The unit of measurement.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>Filters the response to return quota requests for the <code>ACCOUNT</code>, <code>RESOURCE</code>, or <code>ALL</code> levels. <code>ACCOUNT</code> is the default.</p>
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum | undefined;

  /**
   * <p>The context for this service quota.</p>
   * @public
   */
  QuotaContext?: QuotaContextInfo | undefined;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  RequestedQuota?: RequestedServiceQuotaChange | undefined;
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
   * <p>Specifies the resource with an Amazon Resource Name (ARN).</p>
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceQuotaResponse {
  /**
   * <p>Information about the quota.</p>
   * @public
   */
  Quota?: ServiceQuota | undefined;
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
  ServiceCode?: string | undefined;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>Specifies the quota name.</p>
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * <p>The new, increased value of the quota.</p>
   * @public
   */
  DesiredValue?: number | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * <p>The unit of measurement.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>Indicates whether the quota is global.</p>
   * @public
   */
  GlobalQuota?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate | undefined;
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
  NextToken?: string | undefined;

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
  MaxResults?: number | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>Information about the quotas.</p>
   * @public
   */
  Quotas?: ServiceQuota[] | undefined;
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
  ServiceCode?: string | undefined;

  /**
   * <p>Specifies that you want to filter the results to only the requests with the matching
   *             status.</p>
   * @public
   */
  Status?: RequestStatus | undefined;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

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
  MaxResults?: number | undefined;

  /**
   * <p>Filters the response to return quota requests for the <code>ACCOUNT</code>, <code>RESOURCE</code>, or <code>ALL</code> levels. <code>ACCOUNT</code> is the default.</p>
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>Information about the quota increase requests.</p>
   * @public
   */
  RequestedQuotas?: RequestedServiceQuotaChange[] | undefined;
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
  Status?: RequestStatus | undefined;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

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
  MaxResults?: number | undefined;

  /**
   * <p>Filters the response to return quota requests for the <code>ACCOUNT</code>, <code>RESOURCE</code>, or <code>ALL</code> levels. <code>ACCOUNT</code> is the default.</p>
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>Information about the quota increase requests.</p>
   * @public
   */
  RequestedQuotas?: RequestedServiceQuotaChange[] | undefined;
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
  ServiceCode?: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services Region for which you made the request.</p>
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * <p>Specifies a value for receiving additional results after you
   *     receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code>
   *     response indicates that more output is available. Set this parameter to the value of the previous
   *     call's <code>NextToken</code> response to indicate where the output should continue
   *     from.</p>
   * @public
   */
  NextToken?: string | undefined;

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
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * <p>Information about the quota increase requests.</p>
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[] | undefined;

  /**
   * <p>If present, indicates that more output is available than is
   *     included in the current response. Use this value in the <code>NextToken</code> request parameter
   *     in a subsequent call to the operation to get the next part of the output. You should repeat this
   *     until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

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
  MaxResults?: number | undefined;

  /**
   * <p>Specifies the quota identifier. To find the quota code for a specific
   *              quota, use the <a>ListServiceQuotas</a> operation, and look for the
   *              <code>QuotaCode</code> response in the output for the quota you want.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>Filters the response to return applied quota values for the <code>ACCOUNT</code>, <code>RESOURCE</code>, or <code>ALL</code> levels. <code>ACCOUNT</code> is the default.</p>
   * @public
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>Information about the quotas.</p>
   * @public
   */
  Quotas?: ServiceQuota[] | undefined;
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
  NextToken?: string | undefined;

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
  MaxResults?: number | undefined;
}

/**
 * <p>Information about an Amazon Web Services service.</p>
 * @public
 */
export interface ServiceInfo {
  /**
   * <p>Specifies the service identifier. To find the service code value
   *              for an Amazon Web Services service, use the <a>ListServices</a> operation.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p>Specifies the service name.</p>
   * @public
   */
  ServiceName?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * <p>The list of the Amazon Web Services service names and service codes.</p>
   * @public
   */
  Services?: ServiceInfo[] | undefined;
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
  Tags?: Tag[] | undefined;
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
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate | undefined;
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
   * <p>Specifies the resource with an Amazon Resource Name (ARN).</p>
   * @public
   */
  ContextId?: string | undefined;

  /**
   * <p>Specifies if an Amazon Web Services Support case can be opened for the quota increase request. This parameter is optional. </p>
   *          <p>By default, this flag is set to <code>True</code> and Amazon Web Services may create a support case for some quota increase requests.
   *             You can set this flag to <code>False</code>
   *            if you do not want a support case created when you request a quota increase. If you set the flag to <code>False</code>,
   *             Amazon Web Services does not open a support case and updates the request status to <code>Not approved</code>. </p>
   * @public
   */
  SupportCaseAllowed?: boolean | undefined;
}

/**
 * @public
 */
export interface RequestServiceQuotaIncreaseResponse {
  /**
   * <p>Information about the quota increase request.</p>
   * @public
   */
  RequestedQuota?: RequestedServiceQuotaChange | undefined;
}

/**
 * @public
 */
export interface StartAutoManagementRequest {
  /**
   * <p>Sets the opt-in level for Automatic Management. Only Amazon Web Services account level is supported.</p>
   * @public
   */
  OptInLevel: OptInLevel | undefined;

  /**
   * <p>Sets the opt-in type for Automatic Management. There are two modes: Notify only and Notify and Auto-Adjust. Currently, only
   *                                 NotifyOnly is available.</p>
   * @public
   */
  OptInType: OptInType | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html#rlp-table">User Notifications</a> Amazon Resource Name (ARN) for Automatic Management notifications.</p>
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * <p>List of Amazon Web Services services excluded from Automatic Management.
   *             You won't be notified of Service Quotas utilization for Amazon Web Services services added to the
   *                 Automatic Management exclusion list.
   *          </p>
   * @public
   */
  ExclusionList?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface StartAutoManagementResponse {}

/**
 * @public
 */
export interface StopAutoManagementRequest {}

/**
 * @public
 */
export interface StopAutoManagementResponse {}

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
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can
   *             get this information by using the Service Quotas console, or by listing the quotas using the
   *                 <a href="https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html">list-service-quotas</a> CLI command or the <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html">ListServiceQuotas</a> Amazon Web Services API operation.</p>
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

/**
 * @public
 */
export interface UpdateAutoManagementRequest {
  /**
   * <p>Information on the opt-in type for your Automatic Management configuration.
   *             There are two modes: Notify only and Notify and Auto-Adjust. Currently, only
   *                                 NotifyOnly is available.</p>
   * @public
   */
  OptInType?: OptInType | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html#rlp-table">User Notifications</a> Amazon Resource Name (ARN) for Automatic Management notifications you want
   *             to update.</p>
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * <p>List of Amazon Web Services services you want to exclude from Automatic Management.
   *             You won't be notified of Service Quotas utilization for Amazon Web Services services added to the
   *                 Automatic Management exclusion list.
   *          </p>
   * @public
   */
  ExclusionList?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateAutoManagementResponse {}
