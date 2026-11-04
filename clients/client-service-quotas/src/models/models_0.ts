// smithy-typescript generated code
import type {
  AdjustableAtLevelEnum,
  AppliedLevelEnum,
  ErrorCode,
  OptInLevel,
  OptInStatus,
  OptInType,
  PeriodUnit,
  QuotaContextScope,
  ReportStatus,
  RequestStatus,
  RequestType,
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
   * The ID of the pending quota increase request for which you want to open a Support case.
   *
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
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Specifies the Amazon Web Services Region for which the request was made.
   *
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
 * An error that explains why an action did not succeed.
 *
 * @public
 */
export interface ErrorReason {
  /**
   * Service Quotas returns the following error values:
   *
   * - `DEPENDENCY_ACCESS_DENIED_ERROR` - The caller does not have the required permissions to complete the action. To resolve the error, you must have permission to access the Amazon Web Services service or quota.
   * - `DEPENDENCY_THROTTLING_ERROR` - The Amazon Web Services service is throttling Service Quotas.
   * - `DEPENDENCY_SERVICE_ERROR` - The Amazon Web Services service is not available.
   * - `SERVICE_QUOTA_NOT_AVAILABLE_ERROR` - There was an error in Service Quotas.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Information on your Service Quotas for [Service Quotas Automatic Management](https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html). Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.
 *
 * @public
 */
export interface QuotaInfo {
  /**
   * The Service Quotas code for the Amazon Web Services service monitored with Automatic Management.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * The Service Quotas name for the Amazon Web Services service monitored with Automatic Management.
   *
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
   * The association status. If the status is `ASSOCIATED`, the quota increase requests in the template are automatically applied to new Amazon Web Services accounts in your organization.
   *
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
   * Information on the opt-in level for Automatic Management. Only Amazon Web Services account level is supported.
   *
   * @public
   */
  OptInLevel?: OptInLevel | undefined;

  /**
   * Information on the opt-in type for Automatic Management. There are two modes: Notify only and Notify and Auto-Adjust. Currently, only NotifyOnly is available.
   *
   * @public
   */
  OptInType?: OptInType | undefined;

  /**
   * The [User Notifications](https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html#rlp-table) Amazon Resource Name (ARN) for Automatic Management notifications.
   *
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * Status on whether Automatic Management is started or stopped.
   *
   * @public
   */
  OptInStatus?: OptInStatus | undefined;

  /**
   * List of Amazon Web Services services excluded from Automatic Management. You won't be notified of Service Quotas utilization for Amazon Web Services services added to the Automatic Management exclusion list.
   *
   * @public
   */
  ExclusionList?: Record<string, QuotaInfo[]> | undefined;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;
}

/**
 * Information about the quota period.
 *
 * @public
 */
export interface QuotaPeriod {
  /**
   * The value associated with the reported `PeriodUnit`.
   *
   * @public
   */
  PeriodValue?: number | undefined;

  /**
   * The time unit.
   *
   * @public
   */
  PeriodUnit?: PeriodUnit | undefined;
}

/**
 * A structure that describes the context for a resource-level quota. For resource-level quotas, such as `Instances per OpenSearch Service Domain`, you can apply the quota value at the resource-level for each OpenSearch Service Domain in your Amazon Web Services account. Together the attributes of this structure help you understand how the quota is implemented by Amazon Web Services and how you can manage it. For quotas such as `Amazon OpenSearch Service Domains` which can be managed at the account-level for each Amazon Web Services Region, the `QuotaContext` field is absent. See the attribute descriptions below to further understand how to use them.
 *
 * @public
 */
export interface QuotaContextInfo {
  /**
   * Specifies the scope to which the quota value is applied. If the scope is `RESOURCE`, the quota value is applied to each resource in the Amazon Web Services account. If the scope is `ACCOUNT`, the quota value is applied to the Amazon Web Services account.
   *
   * @public
   */
  ContextScope?: QuotaContextScope | undefined;

  /**
   * Specifies the resource type to which the quota can be applied.
   *
   * @public
   */
  ContextScopeType?: string | undefined;

  /**
   * Specifies the resource, or resources, to which the quota applies. The value for this field is either an Amazon Resource Name (ARN) or *. If the value is an ARN, the quota value applies to that resource. If the value is *, then the quota value applies to all resources listed in the `ContextScopeType` field. The quota value applies to all resources for which you haven’t previously applied a quota value, and any new resources you create in your Amazon Web Services account.
   *
   * @public
   */
  ContextId?: string | undefined;

  /**
   * Specifies the level at which you can request an increase for this quota:
   *
   * - `ACCOUNT` – You can request an increase only at the account level.
   * - `PER_RESOURCE` – You can request an increase only for an individual resource.
   * - `ALL` – You can request an increase at either the account level or for an individual resource.
   *
   * @public
   */
  AdjustableAtLevel?: AdjustableAtLevelEnum | undefined;
}

/**
 * Information about the CloudWatch metric that reflects quota usage.
 *
 * @public
 */
export interface MetricInfo {
  /**
   * The namespace of the metric.
   *
   * @public
   */
  MetricNamespace?: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The metric dimension. This is a name/value pair that is part of the identity of a metric.
   *
   * @public
   */
  MetricDimensions?: Record<string, string> | undefined;

  /**
   * The metric statistic that we recommend you use when determining quota usage.
   *
   * @public
   */
  MetricStatisticRecommendation?: string | undefined;
}

/**
 * Information about a quota.
 *
 * @public
 */
export interface ServiceQuota {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specifies the service name.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quota.
   *
   * @public
   */
  QuotaArn?: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * Specifies the quota name.
   *
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * The quota value.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The unit of measurement.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * Indicates whether the quota value can be increased.
   *
   * @public
   */
  Adjustable?: boolean | undefined;

  /**
   * Indicates whether the quota is global.
   *
   * @public
   */
  GlobalQuota?: boolean | undefined;

  /**
   * Information about the measurement.
   *
   * @public
   */
  UsageMetric?: MetricInfo | undefined;

  /**
   * The period of time.
   *
   * @public
   */
  Period?: QuotaPeriod | undefined;

  /**
   * The error code and error reason.
   *
   * @public
   */
  ErrorReason?: ErrorReason | undefined;

  /**
   * Filters the response to return applied quota values for the `ACCOUNT`, `RESOURCE`, or `ALL` levels. `ACCOUNT` is the default.
   *
   * @public
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum | undefined;

  /**
   * The context for this service quota.
   *
   * @public
   */
  QuotaContext?: QuotaContextInfo | undefined;

  /**
   * The quota description.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetAWSDefaultServiceQuotaResponse {
  /**
   * Information about the quota.
   *
   * @public
   */
  Quota?: ServiceQuota | undefined;
}

/**
 * @public
 */
export interface GetQuotaUtilizationReportRequest {
  /**
   * The unique identifier for the quota utilization report. This identifier is returned by the `StartQuotaUtilizationReport` operation.
   *
   * @public
   */
  ReportId: string | undefined;

  /**
   * A token that indicates the next page of results to retrieve. This token is returned in the response when there are more results available. Omit this parameter for the first request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. The default value is 1,000 and the maximum allowed value is 1,000.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about a quota's utilization, including the quota code, service information, current usage, and applied limits.
 *
 * @public
 */
export interface QuotaUtilizationInfo {
  /**
   * The quota identifier.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * The service identifier.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * The quota name.
   *
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * The namespace of the metric used to track quota usage.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The utilization percentage of the quota, calculated as (current usage / applied value) × 100. Values range from 0.0 to 100.0 or higher if usage exceeds the quota limit.
   *
   * @public
   */
  Utilization?: number | undefined;

  /**
   * The default value of the quota.
   *
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * The applied value of the quota, which may be higher than the default value if a quota increase has been requested and approved.
   *
   * @public
   */
  AppliedValue?: number | undefined;

  /**
   * The service name.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Indicates whether the quota value can be increased.
   *
   * @public
   */
  Adjustable?: boolean | undefined;
}

/**
 * @public
 */
export interface GetQuotaUtilizationReportResponse {
  /**
   * The unique identifier for the quota utilization report.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * The current status of the report generation. Possible values are:
   *
   * - `PENDING` - The report generation is in progress. Retry this operation after a few seconds.
   * - `IN_PROGRESS` - The report is being processed. Continue polling until the status changes to `COMPLETED`.
   * - `COMPLETED` - The report is ready and quota utilization data is available in the response.
   * - `FAILED` - The report generation failed. Check the `ErrorCode` and `ErrorMessage` fields for details.
   *
   * @public
   */
  Status?: ReportStatus | undefined;

  /**
   * The timestamp when the report was generated, in ISO 8601 format.
   *
   * @public
   */
  GeneratedAt?: Date | undefined;

  /**
   * The total number of quotas included in the report across all pages.
   *
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * A list of quota utilization records, sorted by utilization percentage in descending order. Each record includes the quota code, service code, service name, quota name, namespace, utilization percentage, default value, applied value, and whether the quota is adjustable. Up to 1,000 records are returned per page.
   *
   * @public
   */
  Quotas?: QuotaUtilizationInfo[] | undefined;

  /**
   * A token that indicates more results are available. Include this token in the next request to retrieve the next page of results. If this field is not present, you have retrieved all available results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An error code indicating the reason for failure when the report status is `FAILED`. This field is only present when the status is `FAILED`.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A detailed error message describing the failure when the report status is `FAILED`. This field is only present when the status is `FAILED`.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeRequest {
  /**
   * Specifies the ID of the quota increase request.
   *
   * @public
   */
  RequestId: string | undefined;
}

/**
 * Information about a quota increase request.
 *
 * @public
 */
export interface RequestedServiceQuotaChange {
  /**
   * The unique identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of quota increase request. Possible values include:
   *
   * - `AutomaticManagement` - The request was automatically created by Service Quotas Automatic Management when quota utilization approached the limit.
   *
   * If this field is not present, the request was manually created by a user.
   *
   * @public
   */
  RequestType?: RequestType | undefined;

  /**
   * The case ID.
   *
   * @public
   */
  CaseId?: string | undefined;

  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specifies the service name.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * Specifies the quota name.
   *
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * The new, increased value for the quota.
   *
   * @public
   */
  DesiredValue?: number | undefined;

  /**
   * The state of the quota increase request.
   *
   * - `PENDING`: The quota increase request is under review by Amazon Web Services.
   * - `CASE_OPENED`: Service Quotas opened a support case to process the quota increase request. Follow-up on the support case for more information.
   * - `APPROVED`: The quota increase request is approved.
   * - `DENIED`: The quota increase request can't be approved by Service Quotas. Contact Amazon Web Services Support for more details.
   * - `NOT APPROVED`: The quota increase request can't be approved by Service Quotas. Contact Amazon Web Services Support for more details.
   * - `CASE_CLOSED`: The support case associated with this quota increase request was closed. Check the support case correspondence for the outcome of your quota request.
   * - `INVALID_REQUEST`: Service Quotas couldn't process your resource-level quota increase request because the Amazon Resource Name (ARN) specified as part of the `ContextId` is invalid.
   *
   * @public
   */
  Status?: RequestStatus | undefined;

  /**
   * The date and time when the quota increase request was received and the case ID was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The date and time of the most recent change.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The IAM identity of the requester.
   *
   * @public
   */
  Requester?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quota.
   *
   * @public
   */
  QuotaArn?: string | undefined;

  /**
   * Indicates whether the quota is global.
   *
   * @public
   */
  GlobalQuota?: boolean | undefined;

  /**
   * The unit of measurement.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * Filters the response to return quota requests for the `ACCOUNT`, `RESOURCE`, or `ALL` levels. `ACCOUNT` is the default.
   *
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum | undefined;

  /**
   * The context for this service quota.
   *
   * @public
   */
  QuotaContext?: QuotaContextInfo | undefined;
}

/**
 * @public
 */
export interface GetRequestedServiceQuotaChangeResponse {
  /**
   * Information about the quota increase request.
   *
   * @public
   */
  RequestedQuota?: RequestedServiceQuotaChange | undefined;
}

/**
 * @public
 */
export interface GetServiceQuotaRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Specifies the resource with an Amazon Resource Name (ARN).
   *
   * @public
   */
  ContextId?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceQuotaResponse {
  /**
   * Information about the quota.
   *
   * @public
   */
  Quota?: ServiceQuota | undefined;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Specifies the Amazon Web Services Region for which you made the request.
   *
   * @public
   */
  AwsRegion: string | undefined;
}

/**
 * Information about a quota increase request.
 *
 * @public
 */
export interface ServiceQuotaIncreaseRequestInTemplate {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specifies the service name.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * Specifies the quota name.
   *
   * @public
   */
  QuotaName?: string | undefined;

  /**
   * The new, increased value of the quota.
   *
   * @public
   */
  DesiredValue?: number | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * The unit of measurement.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * Indicates whether the quota is global.
   *
   * @public
   */
  GlobalQuota?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  /**
   * Information about the quota increase request.
   *
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate | undefined;
}

/**
 * A complex data type that contains a tag key and tag value.
 *
 * @public
 */
export interface Tag {
  /**
   * A string that contains a tag key. The string length should be between 1 and 128 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . : / = + @.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A string that contains an optional tag value. The string length should be between 0 and 256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . : / = + @.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListAWSDefaultServiceQuotasRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies a value for receiving additional results after you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAWSDefaultServiceQuotasResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the quotas.
   *
   * @public
   */
  Quotas?: ServiceQuota[] | undefined;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specifies that you want to filter the results to only the requests with the matching status.
   *
   * @public
   */
  Status?: RequestStatus | undefined;

  /**
   * Specifies a value for receiving additional results after you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the response to return quota requests for the `ACCOUNT`, `RESOURCE`, or `ALL` levels. `ACCOUNT` is the default.
   *
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum | undefined;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the quota increase requests.
   *
   * @public
   */
  RequestedQuotas?: RequestedServiceQuotaChange[] | undefined;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Specifies that you want to filter the results to only the requests with the matching status.
   *
   * @public
   */
  Status?: RequestStatus | undefined;

  /**
   * Specifies a value for receiving additional results after you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the response to return quota requests for the `ACCOUNT`, `RESOURCE`, or `ALL` levels. `ACCOUNT` is the default.
   *
   * @public
   */
  QuotaRequestedAtLevel?: AppliedLevelEnum | undefined;
}

/**
 * @public
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the quota increase requests.
   *
   * @public
   */
  RequestedQuotas?: RequestedServiceQuotaChange[] | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specifies the Amazon Web Services Region for which you made the request.
   *
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * Specifies a value for receiving additional results after you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  /**
   * Information about the quota increase requests.
   *
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplate[] | undefined;

  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotasRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies a value for receiving additional results after you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * Filters the response to return applied quota values for the `ACCOUNT`, `RESOURCE`, or `ALL` levels. `ACCOUNT` is the default.
   *
   * @public
   */
  QuotaAppliedAtLevel?: AppliedLevelEnum | undefined;
}

/**
 * @public
 */
export interface ListServiceQuotasResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the quotas.
   *
   * @public
   */
  Quotas?: ServiceQuota[] | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * Specifies a value for receiving additional results after you receive a `NextToken` response in a previous request. A `NextToken` response indicates that more output is available. Set this parameter to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the `NextToken` response element is present and has a value (is not null). Include that value as the `NextToken` request parameter in the next call to the operation to get the next part of the results.
   *
   * > **Note:** An API operation can return fewer results than the maximum even when there are more results available. You should check `NextToken` after every operation to ensure that you receive all of the results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about an Amazon Web Services service.
 *
 * @public
 */
export interface ServiceInfo {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specifies the service name.
   *
   * @public
   */
  ServiceName?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * If present, indicates that more output is available than is included in the current response. Use this value in the `NextToken` request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the `NextToken` response element comes back as `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of the Amazon Web Services service names and service codes.
   *
   * @public
   */
  Services?: ServiceInfo[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the applied quota for which you want to list tags. You can get this information by using the Service Quotas console, or by listing the quotas using the [list-service-quotas](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html) CLI command or the [ListServiceQuotas](https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html) Amazon Web Services API operation.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A complex data type that contains zero or more tag elements.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the Amazon Web Services Region to which the template applies.
   *
   * @public
   */
  AwsRegion: string | undefined;

  /**
   * Specifies the new, increased value for the quota.
   *
   * @public
   */
  DesiredValue: number | undefined;
}

/**
 * @public
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  /**
   * Information about the quota increase request.
   *
   * @public
   */
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate | undefined;
}

/**
 * @public
 */
export interface RequestServiceQuotaIncreaseRequest {
  /**
   * Specifies the service identifier. To find the service code value for an Amazon Web Services service, use the ListServices operation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specifies the quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation, and look for the `QuotaCode` response in the output for the quota you want.
   *
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Specifies the new, increased value for the quota.
   *
   * @public
   */
  DesiredValue: number | undefined;

  /**
   * Specifies the resource with an Amazon Resource Name (ARN).
   *
   * @public
   */
  ContextId?: string | undefined;

  /**
   * Specifies if an Amazon Web Services Support case can be opened for the quota increase request. This parameter is optional.
   *
   * By default, this flag is set to `True` and Amazon Web Services may create a support case for some quota increase requests. You can set this flag to `False` if you do not want a support case created when you request a quota increase. If you set the flag to `False`, Amazon Web Services does not open a support case and updates the request status to `Not approved`.
   *
   * @public
   */
  SupportCaseAllowed?: boolean | undefined;
}

/**
 * @public
 */
export interface RequestServiceQuotaIncreaseResponse {
  /**
   * Information about the quota increase request.
   *
   * @public
   */
  RequestedQuota?: RequestedServiceQuotaChange | undefined;
}

/**
 * @public
 */
export interface StartAutoManagementRequest {
  /**
   * Sets the opt-in level for Automatic Management. Only Amazon Web Services account level is supported.
   *
   * @public
   */
  OptInLevel: OptInLevel | undefined;

  /**
   * Sets the opt-in type for Automatic Management. There are two modes: Notify only and Notify and Auto-Adjust. Currently, only NotifyOnly is available.
   *
   * @public
   */
  OptInType: OptInType | undefined;

  /**
   * The [User Notifications](https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html#rlp-table) Amazon Resource Name (ARN) for Automatic Management notifications.
   *
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * List of Amazon Web Services services excluded from Automatic Management. You won't be notified of Service Quotas utilization for Amazon Web Services services added to the Automatic Management exclusion list.
   *
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
export interface StartQuotaUtilizationReportRequest {}

/**
 * @public
 */
export interface StartQuotaUtilizationReportResponse {
  /**
   * A unique identifier for the quota utilization report. Use this identifier with the `GetQuotaUtilizationReport` operation to retrieve the report results.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * The current status of the report generation. The status will be `PENDING` when the report is first initiated.
   *
   * @public
   */
  Status?: ReportStatus | undefined;

  /**
   * An optional message providing additional information about the report generation status. This field may contain details about the report initiation or indicate if an existing recent report is being reused.
   *
   * @public
   */
  Message?: string | undefined;
}

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
   * The Amazon Resource Name (ARN) for the applied quota. You can get this information by using the Service Quotas console, or by listing the quotas using the [list-service-quotas](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html) CLI command or the [ListServiceQuotas](https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html) Amazon Web Services API operation.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tags that you want to add to the resource.
   *
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
   * The Amazon Resource Name (ARN) for the applied quota that you want to untag. You can get this information by using the Service Quotas console, or by listing the quotas using the [list-service-quotas](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html) CLI command or the [ListServiceQuotas](https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html) Amazon Web Services API operation.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   *
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
   * Information on the opt-in type for your Automatic Management configuration. There are two modes: Notify only and Notify and Auto-Adjust. Currently, only NotifyOnly is available.
   *
   * @public
   */
  OptInType?: OptInType | undefined;

  /**
   * The [User Notifications](https://docs.aws.amazon.com/notifications/latest/userguide/resource-level-permissions.html#rlp-table) Amazon Resource Name (ARN) for Automatic Management notifications you want to update.
   *
   * @public
   */
  NotificationArn?: string | undefined;

  /**
   * List of Amazon Web Services services you want to exclude from Automatic Management. You won't be notified of Service Quotas utilization for Amazon Web Services services added to the Automatic Management exclusion list.
   *
   * @public
   */
  ExclusionList?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateAutoManagementResponse {}
