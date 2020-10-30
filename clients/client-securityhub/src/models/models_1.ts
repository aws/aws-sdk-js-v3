import { AwsSecurityFindingFilters, ControlStatus, NoteUpdate, RecordState, Result } from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

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
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between the member and master accounts.</p>
   */
  MemberStatus?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The account ID of the Security Hub master account that the invitation was sent from.</p>
   */
  AccountId?: string;
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
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

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
   *                   <code>ASSOCIATED</code> - Indicates that the member account accepted the
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
   * <p>The AWS account ID of the Security Hub master account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The AWS account ID of the member account.</p>
   */
  AccountId?: string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMembersResponse {
  /**
   * <p>The list of AWS accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];

  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];
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
  AccountIds?: string[];
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
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;
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
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the master account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the master is set to <code>ENABLED</code> or
   *             <code>DISABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

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
   * <p>The tags to add to the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;
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
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

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
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;
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
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;
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
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;
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
