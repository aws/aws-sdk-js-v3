import {
  AdminAccount,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  ControlStatus,
  NoteUpdate,
  RecordState,
  Result,
  StandardsSubscription,
} from "./models_0";

export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;
}

export namespace DescribeHubResponse {
  export const filterSensitiveLog = (obj: DescribeHubResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is enabled for new accounts. If set to false,
   *          then new accounts are not added automatically.</p>
   */
  AutoEnable?: boolean;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   */
  MemberAccountLimitReached?: boolean;
}

export namespace DescribeOrganizationConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of the integration to return.</p>
   */
  ProductArn?: string;
}

export namespace DescribeProductsRequest {
  export const filterSensitiveLog = (obj: DescribeProductsRequest): any => ({
    ...obj,
  });
}

export enum IntegrationType {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - Indicates that the integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - Indicates that the integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>The URL for the page that contains more information about the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL used to activate the product.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export namespace Product {
  export const filterSensitiveLog = (obj: Product): any => ({
    ...obj,
  });
}

export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsResponse {
  export const filterSensitiveLog = (obj: DescribeProductsResponse): any => ({
    ...obj,
  });
}

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

export namespace DescribeStandardsRequest {
  export const filterSensitiveLog = (obj: DescribeStandardsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a specific standard.</p>
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
}

export namespace Standard {
  export const filterSensitiveLog = (obj: Standard): any => ({
    ...obj,
  });
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

export namespace DescribeStandardsResponse {
  export const filterSensitiveLog = (obj: DescribeStandardsResponse): any => ({
    ...obj,
  });
}

export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>
   *                <a>GetEnabledStandards</a>
   *             </code> operation.</p>
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

export namespace DescribeStandardsControlsRequest {
  export const filterSensitiveLog = (obj: DescribeStandardsControlsRequest): any => ({
    ...obj,
  });
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
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise AWS
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];
}

export namespace StandardsControl {
  export const filterSensitiveLog = (obj: StandardsControl): any => ({
    ...obj,
  });
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

export namespace DescribeStandardsControlsResponse {
  export const filterSensitiveLog = (obj: DescribeStandardsControlsResponse): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export namespace DisableImportFindingsForProductRequest {
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface DisableImportFindingsForProductResponse {}

export namespace DisableImportFindingsForProductResponse {
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The AWS account identifier of the Security Hub administrator account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace DisableOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableOrganizationAdminAccountResponse {}

export namespace DisableOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: DisableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubRequest {}

export namespace DisableSecurityHubRequest {
  export const filterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface DisableSecurityHubResponse {}

export namespace DisableSecurityHubResponse {
  export const filterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountRequest {}

export namespace DisassociateFromMasterAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateFromMasterAccountResponse {}

export namespace DisassociateFromMasterAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the master account.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DisassociateMembersRequest {
  export const filterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMembersResponse {}

export namespace DisassociateMembersResponse {
  export const filterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export namespace EnableImportFindingsForProductRequest {
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductRequest): any => ({
    ...obj,
  });
}

export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

export namespace EnableImportFindingsForProductResponse {
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductResponse): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The AWS account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   */
  AdminAccountId: string | undefined;
}

export namespace EnableOrganizationAdminAccountRequest {
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableOrganizationAdminAccountResponse {}

export namespace EnableOrganizationAdminAccountResponse {
  export const filterSensitiveLog = (obj: EnableOrganizationAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;
}

export namespace EnableSecurityHubRequest {
  export const filterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
    ...obj,
  });
}

export interface EnableSecurityHubResponse {}

export namespace EnableSecurityHubResponse {
  export const filterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
    ...obj,
  });
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

export namespace GetEnabledStandardsRequest {
  export const filterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
    ...obj,
  });
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

export namespace GetEnabledStandardsResponse {
  export const filterSensitiveLog = (obj: GetEnabledStandardsResponse): any => ({
    ...obj,
  });
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

export namespace SortCriterion {
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj,
  });
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

export namespace GetFindingsRequest {
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
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

export namespace GetFindingsResponse {
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightResultsRequest {
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

export namespace GetInsightResultsRequest {
  export const filterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
    ...obj,
  });
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

export namespace InsightResultValue {
  export const filterSensitiveLog = (obj: InsightResultValue): any => ({
    ...obj,
  });
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

export namespace InsightResults {
  export const filterSensitiveLog = (obj: InsightResults): any => ({
    ...obj,
  });
}

export interface GetInsightResultsResponse {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

export namespace GetInsightResultsResponse {
  export const filterSensitiveLog = (obj: GetInsightResultsResponse): any => ({
    ...obj,
  });
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

export namespace GetInsightsRequest {
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj,
  });
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

export namespace Insight {
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj,
  });
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

export namespace GetInsightsResponse {
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountRequest {}

export namespace GetInvitationsCountRequest {
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationsCountResponse {
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
}

export interface GetMasterAccountRequest {}

export namespace GetMasterAccountRequest {
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub master account that the invitation was sent from.</p>
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
   * <p>The current status of the association between the member and master accounts.</p>
   */
  MemberStatus?: string;
}

export namespace Invitation {
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
}

export interface GetMasterAccountResponse {
  /**
   * <p>A list of details about the Security Hub master account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

export namespace GetMasterAccountResponse {
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj,
  });
}

export interface GetMembersRequest {
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMembersRequest {
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  /**
   * <p>The AWS account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * <p>The AWS account ID of the Security Hub master account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The status of the relationship between the member account and its master account.
   *       </p>
   *          <p>The status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - Indicates that the master account added the member account,
   *                but has not yet invited the member account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - Indicates that the master account invited the member
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
   *                   <code>REMOVED</code> - Indicates that the master account disassociated the member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIGNED</code> - Indicates that the member account disassociated themselves
   *                from the master account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - Indicates that the master account deleted the member
   *                account.</p>
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

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMembersResponse {
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of AWS accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace GetMembersResponse {
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
}

export interface InviteMembersRequest {
  /**
   * <p>The list of account IDs of the AWS accounts to invite to Security Hub as members. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace InviteMembersRequest {
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj,
  });
}

export interface InviteMembersResponse {
  /**
   * <p>The list of AWS accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace InviteMembersResponse {
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj,
  });
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

export namespace ListEnabledProductsForImportRequest {
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportRequest): any => ({
    ...obj,
  });
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

export namespace ListEnabledProductsForImportResponse {
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportResponse): any => ({
    ...obj,
  });
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

export namespace ListInvitationsRequest {
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
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

export namespace ListInvitationsResponse {
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
}

export interface ListMembersRequest {
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the master account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the master is set to <code>ENABLED</code>.</p>
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

export namespace ListMembersRequest {
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
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

export namespace ListMembersResponse {
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
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

export namespace ListOrganizationAdminAccountsRequest {
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsRequest): any => ({
    ...obj,
  });
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

export namespace ListOrganizationAdminAccountsResponse {
  export const filterSensitiveLog = (obj: ListOrganizationAdminAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
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

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource.</p>
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

export namespace UpdateActionTargetRequest {
  export const filterSensitiveLog = (obj: UpdateActionTargetRequest): any => ({
    ...obj,
  });
}

export interface UpdateActionTargetResponse {}

export namespace UpdateActionTargetResponse {
  export const filterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
    ...obj,
  });
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

export namespace UpdateFindingsRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateFindingsResponse {}

export namespace UpdateFindingsResponse {
  export const filterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateInsightRequest {
  export const filterSensitiveLog = (obj: UpdateInsightRequest): any => ({
    ...obj,
  });
}

export interface UpdateInsightResponse {}

export namespace UpdateInsightResponse {
  export const filterSensitiveLog = (obj: UpdateInsightResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p>
   *          <p>By default, this is <code>false</code>, and new accounts are not added
   *          automatically.</p>
   *          <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
   */
  AutoEnable: boolean | undefined;
}

export namespace UpdateOrganizationConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {}

export namespace UpdateOrganizationConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateSecurityHubConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityHubConfigurationResponse {}

export namespace UpdateSecurityHubConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateStandardsControlRequest {
  export const filterSensitiveLog = (obj: UpdateStandardsControlRequest): any => ({
    ...obj,
  });
}

export interface UpdateStandardsControlResponse {}

export namespace UpdateStandardsControlResponse {
  export const filterSensitiveLog = (obj: UpdateStandardsControlResponse): any => ({
    ...obj,
  });
}
