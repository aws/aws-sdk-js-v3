// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AdminAccount,
  AggregatorV2,
  AllowedOperators,
  AssociationFilters,
  AssociationStatus,
  AssociationType,
  AutoEnableStandards,
  AutomationRulesActionV2,
  AutomationRulesMetadata,
  AutomationRulesMetadataV2,
  ConfigurationPolicyAssociationStatus,
  DateFilter,
  MapFilter,
  NoteUpdate,
  NumberFilter,
  RuleStatusV2,
  StringFilter,
} from "./models_0";

import { RecordState } from "./models_1";

import {
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  ConfigurationOptions,
  ConfigurationPolicyAssociationSummary,
  ConfigurationPolicySummary,
  ConnectorProviderName,
  ConnectorStatus,
  ConnectorSummary,
  ControlFindingGenerator,
  ControlStatus,
  Criteria,
  FindingAggregator,
  Invitation,
  OcsfFindingFilters,
  OrganizationConfiguration,
  ParameterConfiguration,
  Policy,
  Result,
  SecurityControlProperty,
  SecurityHubFeature,
  SeverityRating,
  SortCriterion,
  SortOrder,
  Target,
  TargetType,
} from "./models_2";

import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   * @public
   */
  Filters?: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of findings to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   * @public
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupByField = {
  ACTIVITY_NAME: "activity_name",
  CLASS_NAME: "class_name",
  CLOUD_ACCOUNT_UID: "cloud.account.uid",
  CLOUD_PROVIDER: "cloud.provider",
  CLOUD_REGION: "cloud.region",
  COMPLIANCE_ASSESSMENTS_NAME: "compliance.assessments.name",
  COMPLIANCE_CONTROL: "compliance.control",
  COMPLIANCE_STATUS: "compliance.status",
  FINDING_INFO_TITLE: "finding_info.title",
  FINDING_INFO_TYPES: "finding_info.types",
  METADATA_PRODUCT_NAME: "metadata.product.name",
  METADATA_PRODUCT_UID: "metadata.product.uid",
  RESOURCES_TYPE: "resources.type",
  RESOURCES_UID: "resources.uid",
  SEVERITY: "severity",
  STATUS: "status",
  VULNERABILITIES_FIX_COVERAGE: "vulnerabilities.fix_coverage",
} as const;

/**
 * @public
 */
export type GroupByField = (typeof GroupByField)[keyof typeof GroupByField];

/**
 * <p>Defines the how the finding attribute should be grouped.</p>
 * @public
 */
export interface GroupByRule {
  /**
   * <p>The criteria used to select which security findings should be included in the grouping operation.</p>
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * <p>The attribute by which filtered findings should be grouped.</p>
   * @public
   */
  GroupByField: GroupByField | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsV2Request {
  /**
   * <p>Specifies how security findings should be aggregated and organized in the statistical analysis.
   *       It can accept up to 5 <code>groupBy</code> fields in a single call.</p>
   * @public
   */
  GroupByRules: GroupByRule[] | undefined;

  /**
   * <p>Orders the aggregation count in descending or ascending order.
   *          Descending order is the default.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxStatisticResults?: number | undefined;
}

/**
 * <p>Represents individual aggregated results when grouping security findings for each <code>GroupByField</code>.</p>
 * @public
 */
export interface GroupByValue {
  /**
   * <p>The value of the field by which findings are grouped.</p>
   * @public
   */
  FieldValue?: string | undefined;

  /**
   * <p>The number of findings for a specific <code>FieldValue</code> and <code>GroupByField</code>.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Represents finding statistics grouped by <code>GroupedByField</code>.</p>
 * @public
 */
export interface GroupByResult {
  /**
   * <p>The attribute by which filtered security findings should be grouped.</p>
   * @public
   */
  GroupByField?: string | undefined;

  /**
   * <p>An array of grouped values and their respective counts for each <code>GroupByField</code>.</p>
   * @public
   */
  GroupByValues?: GroupByValue[] | undefined;
}

/**
 * @public
 */
export interface GetFindingStatisticsV2Response {
  /**
   * <p>Aggregated statistics about security findings based on specified grouping criteria.</p>
   * @public
   */
  GroupByResults?: GroupByResult[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsV2Request {
  /**
   * <p>The finding attributes used to define a condition to filter the returned OCSF findings.
   *          You can filter up to 10 composite filters.
   *          For each filter type inside of a composite filter, you can provide up to 20 filters.</p>
   * @public
   */
  Filters?: OcsfFindingFilters | undefined;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>
   *          The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsV2Response {
  /**
   * <p>An array of security findings returned by the operation.</p>
   * @public
   */
  Findings?: __DocumentType[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 * @public
 */
export interface InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   * @public
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   * @public
   */
  Count: number | undefined;
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 * @public
 */
export interface InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   * @public
   */
  InsightArn: string | undefined;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   * @public
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   * @public
   */
  ResultValues: InsightResultValue[] | undefined;
}

/**
 * @public
 */
export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   * @public
   */
  InsightResults: InsightResults | undefined;
}

/**
 * @public
 */
export interface GetInsightsRequest {
  /**
   * <p>The ARNs of the insights to describe. If you don't provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   * @public
   */
  InsightArns?: string[] | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 * @public
 */
export interface Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   * @public
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
   *             The insight only includes findings that match the criteria defined in the filters.</p>
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   * @public
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface GetInsightsResponse {
  /**
   * <p>The insights returned by the operation.</p>
   * @public
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   * @public
   */
  InvitationsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   * @public
   */
  Master?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>The details about a member account.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   *
   * @deprecated
   * @public
   */
  MasterId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   * @public
   */
  AdministratorId?: string | undefined;

  /**
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Created</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invited</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Enabled</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removed</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Resigned</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountSuspended</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MemberStatus?: string | undefined;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   * @public
   */
  InvitedAt?: Date | undefined;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourcesDateField = {
  RESOURCE_CREATION_TIME_DT: "resource_creation_time_dt",
  RESOURCE_DETAIL_CAPTURE_TIME_DT: "resource_detail_capture_time_dt",
} as const;

/**
 * @public
 */
export type ResourcesDateField = (typeof ResourcesDateField)[keyof typeof ResourcesDateField];

/**
 * <p>Enables the filtering of Amazon Web Services resources based on date and timestamp attributes.</p>
 * @public
 */
export interface ResourcesDateFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesDateField | undefined;

  /**
   * <p>A date filter for querying findings.</p>
   * @public
   */
  Filter?: DateFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourcesMapField = {
  TAG: "tags",
} as const;

/**
 * @public
 */
export type ResourcesMapField = (typeof ResourcesMapField)[keyof typeof ResourcesMapField];

/**
 * <p>Enables filtering of Amazon Web Services resources based on key-value map attributes.</p>
 * @public
 */
export interface ResourcesMapFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesMapField | undefined;

  /**
   * <p>A map filter for filtering Security Hub findings. Each map filter provides the field to check for, the
   *          value to check for, and the comparison operator.</p>
   * @public
   */
  Filter?: MapFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourcesNumberField = {
  SEVERITY_CRITICAL: "findings_summary.severities.critical",
  SEVERITY_FATAL: "findings_summary.severities.fatal",
  SEVERITY_HIGH: "findings_summary.severities.high",
  SEVERITY_INFORMATIONAL: "findings_summary.severities.informational",
  SEVERITY_LOW: "findings_summary.severities.low",
  SEVERITY_MEDIUM: "findings_summary.severities.medium",
  SEVERITY_OTHER: "findings_summary.severities.other",
  SEVERITY_UNKNOWN: "findings_summary.severities.unknown",
  TOTAL_FINDINGS: "findings_summary.total_findings",
} as const;

/**
 * @public
 */
export type ResourcesNumberField = (typeof ResourcesNumberField)[keyof typeof ResourcesNumberField];

/**
 * <p>Enables filtering of Amazon Web Services resources based on numerical values.</p>
 * @public
 */
export interface ResourcesNumberFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesNumberField | undefined;

  /**
   * <p>A number filter for querying findings.</p>
   * @public
   */
  Filter?: NumberFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourcesStringField = {
  ACCOUNT_ID: "account_id",
  FINDING_TYPE: "findings_summary.finding_type",
  PRODUCT_NAME: "findings_summary.product_name",
  REGION: "region",
  RESOURCE_ARN: "resource_arn",
  RESOURCE_CATEGORY: "resource_category",
  RESOURCE_ID: "resource_id",
  RESOURCE_NAME: "resource_name",
  RESOURCE_TYPE: "resource_type",
} as const;

/**
 * @public
 */
export type ResourcesStringField = (typeof ResourcesStringField)[keyof typeof ResourcesStringField];

/**
 * <p>Enables filtering of Amazon Web Services resources based on string field values.</p>
 * @public
 */
export interface ResourcesStringFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: ResourcesStringField | undefined;

  /**
   * <p>A string filter for filtering Security Hub findings.</p>
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * <p>Enables the creation of criteria for Amazon Web Services resources in Security Hub.</p>
 * @public
 */
export interface ResourcesCompositeFilter {
  /**
   * <p>Enables filtering based on string field values.</p>
   * @public
   */
  StringFilters?: ResourcesStringFilter[] | undefined;

  /**
   * <p>Enables filtering based on date and timestamp field values.</p>
   * @public
   */
  DateFilters?: ResourcesDateFilter[] | undefined;

  /**
   * <p>Enables filtering based on numerical field values.</p>
   * @public
   */
  NumberFilters?: ResourcesNumberFilter[] | undefined;

  /**
   * <p>Enables filtering based on map-based field values.</p>
   * @public
   */
  MapFilters?: ResourcesMapFilter[] | undefined;

  /**
   * <p>The logical operator used to combine multiple filter conditions.</p>
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * <p>Enables filtering of Amazon Web Services resources based on data.</p>
 * @public
 */
export interface ResourcesFilters {
  /**
   * <p>A collection of complex filtering conditions that can be applied to Amazon Web Services resources.</p>
   * @public
   */
  CompositeFilters?: ResourcesCompositeFilter[] | undefined;

  /**
   * <p>The logical operator used to combine multiple filter conditions in the structure.</p>
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceGroupByField = {
  ACCOUNT_ID: "account_id",
  FINDING_TYPE: "findings_summary.finding_type",
  REGION: "region",
  RESOURCE_CATEGORY: "resource_category",
  RESOURCE_NAME: "resource_name",
  RESOURCE_TYPE: "resource_type",
} as const;

/**
 * @public
 */
export type ResourceGroupByField = (typeof ResourceGroupByField)[keyof typeof ResourceGroupByField];

/**
 * <p>Defines the configuration for organizing and categorizing Amazon Web Services resources based on associated security findings.</p>
 * @public
 */
export interface ResourceGroupByRule {
  /**
   * <p>Specifies the attribute that resources should be grouped by.</p>
   * @public
   */
  GroupByField: ResourceGroupByField | undefined;

  /**
   * <p>The criteria used to select resources and associated security findings.</p>
   * @public
   */
  Filters?: ResourcesFilters | undefined;
}

/**
 * @public
 */
export interface GetResourcesStatisticsV2Request {
  /**
   * <p>How resource statistics should be aggregated and organized in the response.</p>
   * @public
   */
  GroupByRules: ResourceGroupByRule[] | undefined;

  /**
   * <p>Sorts aggregated statistics.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxStatisticResults?: number | undefined;
}

/**
 * @public
 */
export interface GetResourcesStatisticsV2Response {
  /**
   * <p>The aggregated statistics about resources based on the specified grouping rule.</p>
   * @public
   */
  GroupByResults: GroupByResult[] | undefined;
}

/**
 * @public
 */
export interface GetResourcesV2Request {
  /**
   * <p>Filters resources based on a set of criteria.</p>
   * @public
   */
  Filters?: ResourcesFilters | undefined;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   * @public
   */
  SortCriteria?: SortCriterion[] | undefined;

  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A comprehensive distribution of security findings by severity level for Amazon Web Services resources.</p>
 * @public
 */
export interface ResourceSeverityBreakdown {
  /**
   * <p>The number of findings not in any of the severity categories.</p>
   * @public
   */
  Other?: number | undefined;

  /**
   * <p>The number of findings with a severity level of fatal.</p>
   * @public
   */
  Fatal?: number | undefined;

  /**
   * <p>The number of findings with a severity level of critical.</p>
   * @public
   */
  Critical?: number | undefined;

  /**
   * <p>The number of findings with a severity level of high.</p>
   * @public
   */
  High?: number | undefined;

  /**
   * <p>The number of findings with a severity level of medium.</p>
   * @public
   */
  Medium?: number | undefined;

  /**
   * <p>The number of findings with a severity level of low.</p>
   * @public
   */
  Low?: number | undefined;

  /**
   * <p>The number of findings that provide security-related information.</p>
   * @public
   */
  Informational?: number | undefined;

  /**
   * <p>The number of findings with a severity level cannot be determined.</p>
   * @public
   */
  Unknown?: number | undefined;
}

/**
 * <p>A list of summaries for all finding types on a resource.</p>
 * @public
 */
export interface ResourceFindingsSummary {
  /**
   * <p>The category or classification of the security finding.</p>
   * @public
   */
  FindingType: string | undefined;

  /**
   * <p>The name of the product associated with the security finding.</p>
   * @public
   */
  ProductName: string | undefined;

  /**
   * <p>The total count of security findings.</p>
   * @public
   */
  TotalFindings: number | undefined;

  /**
   * <p>A breakdown of security findings by their severity levels.</p>
   * @public
   */
  Severities?: ResourceSeverityBreakdown | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceCategory = {
  AI_ML: "AI/ML",
  CODE: "Code",
  COMPUTE: "Compute",
  DATABASE: "Database",
  IDENTITY: "Identity",
  NETWORK: "Network",
  OTHER: "Other",
  STORAGE: "Storage",
} as const;

/**
 * @public
 */
export type ResourceCategory = (typeof ResourceCategory)[keyof typeof ResourceCategory];

/**
 * <p>Represents tag information associated with Amazon Web Services resources.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The identifier or name of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The data associated with the tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Provides comprehensive details about an Amazon Web Services resource and its associated security findings.</p>
 * @public
 */
export interface ResourceResult {
  /**
   * <p>Specifies the ARN that uniquely identifies a resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The unique identifier for a resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns the resource.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the resource is located.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The grouping where the resource belongs.</p>
   * @public
   */
  ResourceCategory?: ResourceCategory | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The time when the resource was created.</p>
   * @public
   */
  ResourceCreationTimeDt?: string | undefined;

  /**
   * <p>The timestamp when information about the resource was captured.</p>
   * @public
   */
  ResourceDetailCaptureTimeDt: string | undefined;

  /**
   * <p>An aggregated view of security findings associated with a resource.</p>
   * @public
   */
  FindingsSummary?: ResourceFindingsSummary[] | undefined;

  /**
   * <p>The key-value pairs associated with a resource.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The configuration details of a resource.</p>
   * @public
   */
  ResourceConfig: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetResourcesV2Response {
  /**
   * <p>Filters resources based on a set of criteria.</p>
   * @public
   */
  Resources: ResourceResult[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityControlDefinitionRequest {
  /**
   * <p>
   *             The ID of the security control to retrieve the definition for. This field doesn’t accept an Amazon Resource Name (ARN).
   *         </p>
   * @public
   */
  SecurityControlId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RegionAvailabilityStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type RegionAvailabilityStatus = (typeof RegionAvailabilityStatus)[keyof typeof RegionAvailabilityStatus];

/**
 * <p>
 *             An object that describes a security control parameter and the options for customizing it.
 *         </p>
 * @public
 */
export interface ParameterDefinition {
  /**
   * <p>
   *             Description of a control parameter.
   *         </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *             The options for customizing a control parameter. Customization options vary based on the data type of the parameter.
   *         </p>
   * @public
   */
  ConfigurationOptions: ConfigurationOptions | undefined;
}

/**
 * <p>
 *          Provides metadata for a security control, including its unique standard-agnostic identifier, title, description,
 *          severity, availability in Amazon Web Services Regions, and a link to remediation steps.
 *       </p>
 * @public
 */
export interface SecurityControlDefinition {
  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an
   *          Amazon Web Services service name and a number (for example, APIGateway.3). This parameter differs from
   *          <code>SecurityControlArn</code>, which is a unique Amazon Resource Name (ARN) assigned to a control. The
   *          ARN references the security control ID (for example, arn:aws:securityhub:eu-central-1:123456789012:security-control/APIGateway.3).
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The title of a security control.
   *       </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *          A link to Security Hub documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   * @public
   */
  RemediationUrl: string | undefined;

  /**
   * <p>
   *          The severity of a security control. For more information about how Security Hub determines control severity,
   *          see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   * @public
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * <p>
   *          Specifies whether a security control is available in the current Amazon Web Services Region.
   *       </p>
   * @public
   */
  CurrentRegionAvailability: RegionAvailabilityStatus | undefined;

  /**
   * <p>
   *             Security control properties that you can customize. Currently, only parameter customization is supported for select
   *             controls. An empty array is returned for controls that don’t support custom properties.
   *         </p>
   * @public
   */
  CustomizableProperties?: SecurityControlProperty[] | undefined;

  /**
   * <p>
   *             An object that provides a security control parameter name, description, and the options for customizing it. This
   * object is excluded for a control that doesn't support custom parameters.
   *         </p>
   * @public
   */
  ParameterDefinitions?: Record<string, ParameterDefinition> | undefined;
}

/**
 * @public
 */
export interface GetSecurityControlDefinitionResponse {
  /**
   * <p>
   *          Provides metadata for a security control, including its unique standard-agnostic identifier, title, description,
   *          severity, availability in Amazon Web Services Regions, and a link to remediation steps.
   *       </p>
   * @public
   */
  SecurityControlDefinition: SecurityControlDefinition | undefined;
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * <p>The parameters used to modify an existing Jira Cloud integration.</p>
 * @public
 */
export interface JiraCloudUpdateConfiguration {
  /**
   * <p>The project key for a JiraCloud instance.</p>
   * @public
   */
  ProjectKey: string | undefined;
}

/**
 * @public
 */
export interface ListAggregatorsV2Request {
  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAggregatorsV2Response {
  /**
   * <p>An array of aggregators.</p>
   * @public
   */
  AggregatorsV2?: AggregatorV2[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesRequest {
  /**
   * <p>
   *          A token to specify where to start paginating the response. This is the <code>NextToken</code>
   *          from a previously truncated response. On your first call to the <code>ListAutomationRules</code>
   *          API, set the value of this parameter to <code>NULL</code>.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of rules to return in the response. This currently ranges from 1 to
   *          100. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesResponse {
  /**
   * <p>
   *          Metadata for rules in the calling account. The response includes rules with a
   *          <code>RuleStatus</code> of <code>ENABLED</code> and <code>DISABLED</code>.
   *       </p>
   * @public
   */
  AutomationRulesMetadata?: AutomationRulesMetadata[] | undefined;

  /**
   * <p>
   *          A pagination token for the response.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesV2Request {
  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomationRulesV2Response {
  /**
   * <p>An array of automation rules.</p>
   * @public
   */
  Rules?: AutomationRulesMetadataV2[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPoliciesRequest {
  /**
   * <p>
   *             The NextToken value that's returned from a previous paginated <code>ListConfigurationPolicies</code> request where
   *             <code>MaxResults</code> was used but the results exceeded the value of that parameter. Pagination continues from the
   *             <code>MaxResults</code> was used but the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous response that returned the <code>NextToken</code> value. This value is <code>null</code> when
   *             there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of results that's returned by <code>ListConfigurationPolicies</code> in each page of the response.
   *             When this parameter is used, <code>ListConfigurationPolicies</code> returns the specified number of results in a
   *             single page and a <code>NextToken</code> response element. You can see the remaining results of the initial request
   *             by sending another <code>ListConfigurationPolicies</code> request with the returned <code>NextToken</code> value. A
   *             valid range for <code>MaxResults</code> is between 1 and 100.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPoliciesResponse {
  /**
   * <p>
   *             Provides metadata for each of your configuration policies.
   *         </p>
   * @public
   */
  ConfigurationPolicySummaries?: ConfigurationPolicySummary[] | undefined;

  /**
   * <p>
   *             The <code>NextToken</code> value to include in the next <code>ListConfigurationPolicies</code> request. When the
   *             results of a <code>ListConfigurationPolicies</code> request exceed <code>MaxResults</code>, this value can be used to
   *             retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPolicyAssociationsRequest {
  /**
   * <p>
   *             The <code>NextToken</code> value that's returned from a previous paginated <code>ListConfigurationPolicyAssociations</code>
   *             request where <code>MaxResults</code> was used but the results exceeded the value of that parameter. Pagination
   *             continues from the end of the previous response that returned the <code>NextToken</code> value. This value is <code>null</code>
   *             when there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of results that's returned by <code>ListConfigurationPolicies</code> in each page of the response.
   *             When this parameter is used, <code>ListConfigurationPolicyAssociations</code> returns the specified number of results
   *             in a single page and a <code>NextToken</code> response element. You can see the remaining results of the initial
   *             request by sending another <code>ListConfigurationPolicyAssociations</code> request with the returned <code>NextToken</code>
   *             value. A valid range for <code>MaxResults</code> is between 1 and 100.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *             Options for filtering the <code>ListConfigurationPolicyAssociations</code> response. You can filter by the Amazon Resource Name (ARN) or
   *             universally unique identifier (UUID) of a configuration, <code>AssociationType</code>, or <code>AssociationStatus</code>.
   *         </p>
   * @public
   */
  Filters?: AssociationFilters | undefined;
}

/**
 * @public
 */
export interface ListConfigurationPolicyAssociationsResponse {
  /**
   * <p>
   *             An object that contains the details of each configuration policy association that’s returned in a
   *             <code>ListConfigurationPolicyAssociations</code> request.
   *         </p>
   * @public
   */
  ConfigurationPolicyAssociationSummaries?: ConfigurationPolicyAssociationSummary[] | undefined;

  /**
   * <p>
   *             The <code>NextToken</code> value to include in the next <code>ListConfigurationPolicyAssociations</code> request. When
   *             the results of a <code>ListConfigurationPolicyAssociations</code> request exceed <code>MaxResults</code>, this value
   *             can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsV2Request {
  /**
   * <p>The pagination token per the Amazon Web Services Pagination standard</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the third-party provider.</p>
   * @public
   */
  ProviderName?: ConnectorProviderName | undefined;

  /**
   * <p>The status for the connectorV2.</p>
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;
}

/**
 * @public
 */
export interface ListConnectorsV2Response {
  /**
   * <p>The pagination token to use to request the next page of results.
   *          Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of connectorV2 summaries.</p>
   * @public
   */
  Connectors: ConnectorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   * @public
   */
  ProductSubscriptions?: string[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregatorsRequest {
  /**
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFindingAggregatorsResponse {
  /**
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   * @public
   */
  FindingAggregators?: FindingAggregator[] | undefined;

  /**
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   * @public
   */
  OnlyAssociated?: boolean | undefined;

  /**
   * <p>The maximum number of items to return in the response. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The feature where the delegated administrator account is listed.
   *          Defaults to Security Hub if not specified.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub administrator accounts.</p>
   * @public
   */
  AdminAccounts?: AdminAccount[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The feature where the delegated administrator account is listed.
   *          Defaults to Security Hub CSPM if not specified.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the standard that you want to view controls for.
   *       </p>
   * @public
   */
  StandardsArn?: string | undefined;

  /**
   * <p>
   *          Optional pagination parameter.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 security controls that apply to the specified standard. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 controls. This repeats until all controls for the standard are returned. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSecurityControlDefinitionsResponse {
  /**
   * <p>
   *          An array of controls that apply to the specified standard.
   *       </p>
   * @public
   */
  SecurityControlDefinitions: SecurityControlDefinition[] | undefined;

  /**
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsRequest {
  /**
   * <p>
   *          The identifier of the control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) that you
   *          want to determine the enablement status of in each enabled standard.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          Optional pagination parameter.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> An optional parameter that limits the total results of the API response to the
   *          specified number. If this parameter isn't provided in the request, the results include the
   *          first 25 standard and control associations. The results also include a
   *             <code>NextToken</code> parameter that you can use in a subsequent API call to get the
   *          next 25 associations. This repeats until all associations for the specified control are
   *          returned. The number of results is limited by the number of supported Security Hub
   *          standards that you've enabled in the calling account. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> An array that provides the enablement status and other details for each control that
 *          applies to each enabled standard. </p>
 * @public
 */
export interface StandardsControlAssociationSummary {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a standard.
   *       </p>
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * <p>
   *          A unique standard-agnostic identifier for a control. Values for this field typically consist of an
   *          Amazon Web Services service and a number, such as APIGateway.5. This field doesn't reference a specific standard.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The ARN of a control, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>
   *          The enablement status of a control in a specific standard.
   *       </p>
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * <p>
   *          The requirement that underlies this control in the compliance framework related to the standard.
   *       </p>
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * <p>The last time that a control's enablement status in a specified standard was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The reason for updating a control's enablement status in a specified standard.</p>
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * <p>
   *          The title of a control.
   *       </p>
   * @public
   */
  StandardsControlTitle?: string | undefined;

  /**
   * <p>
   *          The description of a control. This typically summarizes how Security Hub evaluates the control and the
   *          conditions under which it produces a failed finding. The parameter may reference a specific standard.
   *       </p>
   * @public
   */
  StandardsControlDescription?: string | undefined;
}

/**
 * @public
 */
export interface ListStandardsControlAssociationsResponse {
  /**
   * <p> An array that provides the enablement status and other details for each security
   *          control that applies to each enabled standard. </p>
   * @public
   */
  StandardsControlAssociationSummaries: StandardsControlAssociationSummary[] | undefined;

  /**
   * <p> A pagination parameter that's included in the response only if it was included in the
   *          request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The parameters required to update the configuration of an integration provider.</p>
 * @public
 */
export type ProviderUpdateConfiguration =
  | ProviderUpdateConfiguration.JiraCloudMember
  | ProviderUpdateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderUpdateConfiguration {
  /**
   * <p>The parameters required to update the configuration for a Jira Cloud integration.</p>
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudUpdateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudUpdateConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProviderUpdateConfiguration, visitor: Visitor<T>): T => {
    if (value.JiraCloud !== undefined) return visitor.JiraCloud(value.JiraCloud);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>
 *             The request was rejected because it conflicts with the resource's availability. For example, you tried
 *             to update a security control that's currently in the <code>UPDATING</code> state.
 *         </p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface StartConfigurationPolicyAssociationRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of a configuration policy, the universally unique identifier (UUID) of a
   *             configuration policy, or a value of <code>SELF_MANAGED_SECURITY_HUB</code> for a self-managed configuration.
   *         </p>
   * @public
   */
  ConfigurationPolicyIdentifier: string | undefined;

  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the root to associate with the specified configuration.
   *         </p>
   * @public
   */
  Target: Target | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyAssociationResponse {
  /**
   * <p>
   *             The UUID of the configuration policy.
   *         </p>
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the organization root with which the configuration is associated.
   *         </p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>
   *             Indicates whether the target is an Amazon Web Services account, organizational unit, or the organization root.
   *         </p>
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * <p>
   *             Indicates whether the association between the specified target and the configuration was directly applied by the
   *             Security Hub delegated administrator or inherited from a parent.
   *         </p>
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The current status of the association between the specified target and the configuration.
   *         </p>
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * <p>
   *             An explanation for a <code>FAILED</code> value for <code>AssociationStatus</code>.
   *         </p>
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyDisassociationRequest {
  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the root to disassociate from the specified configuration.
   *         </p>
   * @public
   */
  Target?: Target | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of a configuration policy, the universally unique identifier (UUID) of a
   *             configuration policy, or a value of <code>SELF_MANAGED_SECURITY_HUB</code> for a self-managed configuration.
   *         </p>
   * @public
   */
  ConfigurationPolicyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationPolicyDisassociationResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * <p>The ARN of the resource to remove the tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
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
export interface UpdateActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to update.</p>
   * @public
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated description for the custom action target.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionTargetResponse {}

/**
 * @public
 */
export interface UpdateAggregatorV2Request {
  /**
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn: string | undefined;

  /**
   * <p>Determines how Amazon Web Services Regions should be linked to the Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions linked to the aggegation Region.</p>
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAggregatorV2Response {
  /**
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where data is aggregated.</p>
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * <p>Determines how Amazon Web Services Regions should be linked to the Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions linked to the aggegation Region.</p>
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleV2Request {
  /**
   * <p>The ARN of the automation rule.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The status of the automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>Represents a value for the rule priority.</p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>A description of the automation rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the automation rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The filtering type and configuration of the automation rule.</p>
   * @public
   */
  Criteria?: Criteria | undefined;

  /**
   * <p>A list of actions to be performed when the rule criteria is met.</p>
   * @public
   */
  Actions?: AutomationRulesActionV2[] | undefined;
}

/**
 * @public
 */
export interface UpdateAutomationRuleV2Response {}

/**
 * @public
 */
export interface UpdateConfigurationPolicyRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted:
   *             <code>-, ., !, *, /</code>.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The reason for updating the configuration policy.
   *         </p>
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
   *             If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly
   *             released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub
   *             enables all other controls (including newly released controls).
   *         </p>
   *          <p>When updating a configuration policy, provide a complete list of standards that you want to enable and a complete list
   *             of controls that you want to enable or disable. The updated configuration replaces the current configuration.</p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationPolicyResponse {
  /**
   * <p>
   *             The ARN of the configuration policy.
   *         </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             The UUID of the configuration policy.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *         </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If the request included a
   *             list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including
   *             newly released controls). If the request included a list of security controls that are disabled in the configuration policy,
   *             Security Hub enables all other controls (including newly released controls).
   *         </p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorV2Request {
  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The clientSecret of ServiceNow.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>The description of the connectorV2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The third-party provider’s service configuration.</p>
   * @public
   */
  Provider?: ProviderUpdateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorV2Response {}

/**
 * @public
 */
export interface UpdateFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   * @public
   */
  FindingAggregatorArn: string | undefined;

  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Aggregates findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Aggregates findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Aggregates findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_REGIONS</code> - Aggregates no data because no Regions are selected as linked Regions.
   *           </p>
   *             </li>
   *          </ul>
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do replicate and send findings to the home Region.</p>
   *          <p>An <code>InvalidInputException</code> error results if you populate this field while <code>RegionLinkingMode</code> is
   *         <code>NO_REGIONS</code>.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * <p>The home Region. Findings generated in linked Regions are replicated and sent to the home Region.</p>
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * <p>The updated record state for the finding.</p>
   * @public
   */
  RecordState?: RecordState | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsResponse {}

/**
 * @public
 */
export interface UpdateInsightRequest {
  /**
   * <p>The ARN of the insight that you want to update.</p>
   * @public
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated filters that define this insight.</p>
   * @public
   */
  Filters?: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   * @public
   */
  GroupByAttribute?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInsightResponse {}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub in new member accounts when they join the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is automatically enabled in new accounts. If set to <code>false</code>,
   *            then Security Hub isn't enabled in new accounts automatically. The default value is <code>false</code>.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>false</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which Security Hub is enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *            in new member accounts when they join the organization.</p>
   *          <p>The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
   *            accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *            accounts.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>NONE</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which specific security standards are enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnableStandards?: AutoEnableStandards | undefined;

  /**
   * <p>
   *             Provides information about the way an organization is configured in Security Hub.
   *         </p>
   * @public
   */
  OrganizationConfiguration?: OrganizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdateSecurityControlRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) or ID of the control to update.
   *         </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *             An object that specifies which security control parameters to update.
   *         </p>
   * @public
   */
  Parameters: Record<string, ParameterConfiguration> | undefined;

  /**
   * <p>
   *             The most recent reason for updating the properties of the security control. This field accepts alphanumeric
   * characters in addition to white spaces, dashes, and underscores.
   *         </p>
   * @public
   */
  LastUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityControlResponse {}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationRequest {
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   *          <p>When you automatically enable new controls, you can interact with the controls in
   *            the console and programmatically immediately after release. However, automatically enabled controls have a temporary default status of
   *            <code>DISABLED</code>. It can take up to several days for Security Hub to process the control release and designate the
   *            control as <code>ENABLED</code> in your account. During the processing period, you can manually enable or disable a
   *            control, and Security Hub will maintain that designation regardless of whether you have <code>AutoEnableControls</code> set to
   *            <code>true</code>.</p>
   * @public
   */
  AutoEnableControls?: boolean | undefined;

  /**
   * <p>Updates whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p>
   * @public
   */
  ControlFindingGenerator?: ControlFindingGenerator | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityHubConfigurationResponse {}

/**
 * @public
 */
export interface UpdateStandardsControlRequest {
  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   * @public
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   * @public
   */
  ControlStatus?: ControlStatus | undefined;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   * @public
   */
  DisabledReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStandardsControlResponse {}
