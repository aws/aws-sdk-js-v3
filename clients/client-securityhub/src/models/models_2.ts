// smithy-typescript generated code
import { AdminAccount, AutoEnableStandards } from "./models_0";
import {
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  ControlStatus,
  NoteUpdate,
  RecordState,
  Result,
  StandardsSubscription,
} from "./models_1";

export interface DescribeStandardsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Provides details about the management of a security standard.</p>
 */
export interface StandardsManagedBy {
  /**
   * <p>An identifier for the company that manages a specific security standard. For existing
   *          standards, the value is equal to <code>Amazon Web Services</code>.</p>
   */
  Company?: string;

  /**
   * <p>An identifier for the product that manages a specific security standard. For existing
   *          standards, the value is equal to the Amazon Web Services service that manages the
   *          standard.</p>
   */
  Product?: string;
}

/**
 * <p>Provides information about a specific security standard.</p>
 */
export interface Standard {
  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * <p>The name of the standard.</p>
   */
  Name?: string;

  /**
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;

  /**
   * <p>Provides details about the management of a standard.
   *       </p>
   */
  StandardsManagedBy?: StandardsManagedBy;
}

export interface DescribeStandardsResponse {
  /**
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;
}

export enum SeverityRating {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  /**
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

export interface DescribeStandardsControlsResponse {
  /**
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export interface DisableImportFindingsForProductResponse {}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

export interface DisableOrganizationAdminAccountResponse {}

export interface DisableSecurityHubRequest {}

export interface DisableSecurityHubResponse {}

export interface DisassociateFromAdministratorAccountRequest {}

export interface DisassociateFromAdministratorAccountResponse {}

export interface DisassociateFromMasterAccountRequest {}

export interface DisassociateFromMasterAccountResponse {}

export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DisassociateMembersResponse {}

export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

export interface EnableOrganizationAdminAccountResponse {}

export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;
}

export interface EnableSecurityHubResponse {}

/**
 * <p>A finding aggregator. A finding aggregator contains the configuration for finding aggregation.</p>
 */
export interface FindingAggregator {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;
}

export interface GetAdministratorAccountRequest {}

/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between the member and administrator accounts.</p>
   */
  MemberStatus?: string;
}

export interface GetAdministratorAccountResponse {
  /**
   * <p>Details about an invitation.</p>
   */
  Administrator?: Invitation;
}

export interface GetEnabledStandardsRequest {
  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

export interface GetEnabledStandardsResponse {
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;
}

export interface GetFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export enum SortOrder {
  ASCENDING = "asc",
  DESCENDING = "desc",
}

/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder | string;
}

export interface GetFindingsRequest {
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to
   *          20 filter values.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;
}

export interface GetFindingsResponse {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

export interface GetInsightsRequest {
  /**
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export interface GetInsightsResponse {
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface GetInvitationsCountRequest {}

export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

export interface GetMasterAccountRequest {}

export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub administrator account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * @deprecated
   *
   * <p>This is replaced by <code>AdministratorID</code>.</p>
   *          <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The Amazon Web Services account ID of the Security Hub administrator account associated with this member account.</p>
   */
  AdministratorId?: string;

  /**
   * <p>The status of the relationship between the member account and its administrator account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - Indicates that the administrator account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - Indicates that the administrator account invited the member
   *                account. The member account has not yet responded to the invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Indicates that the member account is currently active. For
   *                manually invited member accounts, indicates that the member account accepted the
   *                invitation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVED</code> - Indicates that the administrator account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIGNED</code> - Indicates that the member account disassociated themselves
   *                from the administrator account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Indicates that the administrator account deleted the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCOUNT_SUSPENDED</code> - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account.</p>
   *             </li>
   *          </ul>
   */
  MemberStatus?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the Amazon Web Services accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

export interface InviteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export interface ListEnabledProductsForImportRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export interface ListEnabledProductsForImportResponse {
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListFindingAggregatorsRequest {
  /**
   * <p>The token returned with the previous set of results. Identifies the next set of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. This operation currently only returns a single result.</p>
   */
  MaxResults?: number;
}

export interface ListFindingAggregatorsResponse {
  /**
   * <p>The list of finding aggregators. This operation currently only returns a single result.</p>
   */
  FindingAggregators?: FindingAggregator[];

  /**
   * <p>If there are more results, this is the token to provide in the next call to <code>ListFindingAggregators</code>.</p>
   *          <p>This operation currently only returns a single result.
   *       </p>
   */
  NextToken?: string;
}

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export interface ListInvitationsResponse {
  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the administrator account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the administrator account is set to <code>ENABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export interface ListMembersResponse {
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListOrganizationAdminAccounts</code> operation, set the value of this parameter to
   *             <code>NULL</code>. For subsequent calls to the operation, to continue listing data, set
   *          the value of this parameter to the value returned from the previous response. </p>
   */
  NextToken?: string;
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Security Hub administrator accounts.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. You can add up to 50 tags at a time. The tag keys can be no longer than 128 characters. The tag values can be no longer than 256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource. You can remove up to 50 tags at a time.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateActionTargetRequest {
  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;
}

export interface UpdateActionTargetResponse {}

export interface UpdateFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   */
  FindingAggregatorArn: string | undefined;

  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Indicates to aggregate findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *          </ul>
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.</p>
   */
  Regions?: string[];
}

export interface UpdateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   */
  FindingAggregatorArn?: string;

  /**
   * <p>The aggregation Region.</p>
   */
  FindingAggregationRegion?: string;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   */
  RegionLinkingMode?: string;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   */
  Regions?: string[];
}

export interface UpdateFindingsRequest {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;
}

export interface UpdateFindingsResponse {}

export interface UpdateInsightRequest {
  /**
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;

  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;
}

export interface UpdateInsightResponse {}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          for new member accounts in the organization.</p>
   *          <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p>
   *          <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p>
   */
  AutoEnableStandards?: AutoEnableStandards | string;
}

export interface UpdateOrganizationConfigurationResponse {}

export interface UpdateSecurityHubConfigurationRequest {
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;
}

export interface UpdateSecurityHubConfigurationResponse {}

export interface UpdateStandardsControlRequest {
  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;

  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;
}

export interface UpdateStandardsControlResponse {}

/**
 * @internal
 */
export const DescribeStandardsRequestFilterSensitiveLog = (obj: DescribeStandardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardsManagedByFilterSensitiveLog = (obj: StandardsManagedBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardFilterSensitiveLog = (obj: Standard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStandardsResponseFilterSensitiveLog = (obj: DescribeStandardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStandardsControlsRequestFilterSensitiveLog = (obj: DescribeStandardsControlsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandardsControlFilterSensitiveLog = (obj: StandardsControl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStandardsControlsResponseFilterSensitiveLog = (obj: DescribeStandardsControlsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableImportFindingsForProductRequestFilterSensitiveLog = (
  obj: DisableImportFindingsForProductRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableImportFindingsForProductResponseFilterSensitiveLog = (
  obj: DisableImportFindingsForProductResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: DisableOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: DisableOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSecurityHubRequestFilterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSecurityHubResponseFilterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromAdministratorAccountRequestFilterSensitiveLog = (
  obj: DisassociateFromAdministratorAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromAdministratorAccountResponseFilterSensitiveLog = (
  obj: DisassociateFromAdministratorAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromMasterAccountRequestFilterSensitiveLog = (
  obj: DisassociateFromMasterAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateFromMasterAccountResponseFilterSensitiveLog = (
  obj: DisassociateFromMasterAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMembersRequestFilterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMembersResponseFilterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableImportFindingsForProductRequestFilterSensitiveLog = (
  obj: EnableImportFindingsForProductRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableImportFindingsForProductResponseFilterSensitiveLog = (
  obj: EnableImportFindingsForProductResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableOrganizationAdminAccountRequestFilterSensitiveLog = (
  obj: EnableOrganizationAdminAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableOrganizationAdminAccountResponseFilterSensitiveLog = (
  obj: EnableOrganizationAdminAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSecurityHubRequestFilterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSecurityHubResponseFilterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingAggregatorFilterSensitiveLog = (obj: FindingAggregator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdministratorAccountRequestFilterSensitiveLog = (obj: GetAdministratorAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvitationFilterSensitiveLog = (obj: Invitation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAdministratorAccountResponseFilterSensitiveLog = (obj: GetAdministratorAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnabledStandardsRequestFilterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnabledStandardsResponseFilterSensitiveLog = (obj: GetEnabledStandardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingAggregatorRequestFilterSensitiveLog = (obj: GetFindingAggregatorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingAggregatorResponseFilterSensitiveLog = (obj: GetFindingAggregatorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SortCriterionFilterSensitiveLog = (obj: SortCriterion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsRequestFilterSensitiveLog = (obj: GetFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingsResponseFilterSensitiveLog = (obj: GetFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightResultsRequestFilterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightResultValueFilterSensitiveLog = (obj: InsightResultValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightResultsFilterSensitiveLog = (obj: InsightResults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightResultsResponseFilterSensitiveLog = (obj: GetInsightResultsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightsRequestFilterSensitiveLog = (obj: GetInsightsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightFilterSensitiveLog = (obj: Insight): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightsResponseFilterSensitiveLog = (obj: GetInsightsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvitationsCountRequestFilterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInvitationsCountResponseFilterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMasterAccountRequestFilterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMasterAccountResponseFilterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMembersRequestFilterSensitiveLog = (obj: GetMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMembersResponseFilterSensitiveLog = (obj: GetMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InviteMembersRequestFilterSensitiveLog = (obj: InviteMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InviteMembersResponseFilterSensitiveLog = (obj: InviteMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnabledProductsForImportRequestFilterSensitiveLog = (
  obj: ListEnabledProductsForImportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnabledProductsForImportResponseFilterSensitiveLog = (
  obj: ListEnabledProductsForImportResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingAggregatorsRequestFilterSensitiveLog = (obj: ListFindingAggregatorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingAggregatorsResponseFilterSensitiveLog = (obj: ListFindingAggregatorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsRequestFilterSensitiveLog = (obj: ListInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsResponseFilterSensitiveLog = (obj: ListInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersRequestFilterSensitiveLog = (obj: ListMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersResponseFilterSensitiveLog = (obj: ListMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationAdminAccountsRequestFilterSensitiveLog = (
  obj: ListOrganizationAdminAccountsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationAdminAccountsResponseFilterSensitiveLog = (
  obj: ListOrganizationAdminAccountsResponse
): any => ({
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

/**
 * @internal
 */
export const UpdateActionTargetRequestFilterSensitiveLog = (obj: UpdateActionTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateActionTargetResponseFilterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingAggregatorRequestFilterSensitiveLog = (obj: UpdateFindingAggregatorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingAggregatorResponseFilterSensitiveLog = (obj: UpdateFindingAggregatorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsRequestFilterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsResponseFilterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInsightRequestFilterSensitiveLog = (obj: UpdateInsightRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInsightResponseFilterSensitiveLog = (obj: UpdateInsightResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityHubConfigurationRequestFilterSensitiveLog = (
  obj: UpdateSecurityHubConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityHubConfigurationResponseFilterSensitiveLog = (
  obj: UpdateSecurityHubConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStandardsControlRequestFilterSensitiveLog = (obj: UpdateStandardsControlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStandardsControlResponseFilterSensitiveLog = (obj: UpdateStandardsControlResponse): any => ({
  ...obj,
});
