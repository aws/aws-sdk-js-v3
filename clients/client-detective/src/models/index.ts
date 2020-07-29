import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptInvitationRequest {
  __type?: "AcceptInvitationRequest";
  /**
   * <p>The ARN of the behavior graph that the member account is accepting the invitation
   *          for.</p>
   *          <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
   */
  GraphArn: string | undefined;
}

export namespace AcceptInvitationRequest {
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptInvitationRequest => __isa(o, "AcceptInvitationRequest");
}

/**
 * <p>Amazon Detective is currently in preview.</p>
 *
 *          <p>An AWS account that is the master of or a member of a behavior graph.</p>
 */
export interface Account {
  __type?: "Account";
  /**
   * <p>The account identifier of the AWS account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The AWS account root user email address for the AWS account.</p>
   */
  EmailAddress: string | undefined;
}

export namespace Account {
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Account => __isa(o, "Account");
}

/**
 * <p>The request attempted an invalid action.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface CreateGraphResponse {
  __type?: "CreateGraphResponse";
  /**
   * <p>The ARN of the new behavior graph.</p>
   */
  GraphArn?: string;
}

export namespace CreateGraphResponse {
  export const filterSensitiveLog = (obj: CreateGraphResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateGraphResponse => __isa(o, "CreateGraphResponse");
}

export interface CreateMembersRequest {
  __type?: "CreateMembersRequest";
  /**
   * <p>The list of AWS accounts to invite to become member accounts in the behavior graph.
   *          For each invited account, the account list contains the account identifier and the AWS
   *          account root user email address.</p>
   */
  Accounts: Account[] | undefined;

  /**
   * <p>The ARN of the behavior graph to invite the member accounts to contribute their data
   *          to.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>Customized message text to include in the invitation email message to the invited member
   *          accounts.</p>
   */
  Message?: string;
}

export namespace CreateMembersRequest {
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMembersRequest => __isa(o, "CreateMembersRequest");
}

export interface CreateMembersResponse {
  __type?: "CreateMembersResponse";
  /**
   * <p>The set of member account invitation requests that Detective was able to process. This
   *          includes accounts that are being verified, that failed verification, and that passed
   *          verification and are being sent an invitation.</p>
   */
  Members?: MemberDetail[];

  /**
   * <p>The list of accounts for which Detective was unable to process the invitation request. For
   *          each account, the list provides the reason why the request could not be processed. The list
   *          includes accounts that are already member accounts in the behavior graph.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export namespace CreateMembersResponse {
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMembersResponse => __isa(o, "CreateMembersResponse");
}

export interface DeleteGraphRequest {
  __type?: "DeleteGraphRequest";
  /**
   * <p>The ARN of the behavior graph to disable.</p>
   */
  GraphArn: string | undefined;
}

export namespace DeleteGraphRequest {
  export const filterSensitiveLog = (obj: DeleteGraphRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteGraphRequest => __isa(o, "DeleteGraphRequest");
}

export interface DeleteMembersRequest {
  __type?: "DeleteMembersRequest";
  /**
   * <p>The list of AWS account identifiers for the member accounts to delete from the
   *          behavior graph.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The ARN of the behavior graph to delete members from.</p>
   */
  GraphArn: string | undefined;
}

export namespace DeleteMembersRequest {
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMembersRequest => __isa(o, "DeleteMembersRequest");
}

export interface DeleteMembersResponse {
  __type?: "DeleteMembersResponse";
  /**
   * <p>The list of AWS account identifiers for the member accounts that Detective successfully
   *          deleted from the behavior graph.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of member accounts that Detective was not able to delete from the behavior graph.
   *          For each member account, provides the reason that the deletion could not be
   *          processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export namespace DeleteMembersResponse {
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMembersResponse => __isa(o, "DeleteMembersResponse");
}

export interface DisassociateMembershipRequest {
  __type?: "DisassociateMembershipRequest";
  /**
   * <p>The ARN of the behavior graph to remove the member account from.</p>
   *          <p>The member account's member status in the behavior graph must be
   *          <code>ENABLED</code>.</p>
   */
  GraphArn: string | undefined;
}

export namespace DisassociateMembershipRequest {
  export const filterSensitiveLog = (obj: DisassociateMembershipRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMembershipRequest => __isa(o, "DisassociateMembershipRequest");
}

export interface GetMembersRequest {
  __type?: "GetMembersRequest";
  /**
   * <p>The list of AWS account identifiers for the member account for which to return member
   *          details.</p>
   *          <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts
   *          that were removed from the behavior graph.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * <p>The ARN of the behavior graph for which to request the member details.</p>
   */
  GraphArn: string | undefined;
}

export namespace GetMembersRequest {
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMembersRequest => __isa(o, "GetMembersRequest");
}

export interface GetMembersResponse {
  __type?: "GetMembersResponse";
  /**
   * <p>The member account details that Detective is returning in response to the request.</p>
   */
  MemberDetails?: MemberDetail[];

  /**
   * <p>The requested member accounts for which Detective was unable to return member
   *          details.</p>
   *          <p>For each account, provides the reason why the request could not be processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export namespace GetMembersResponse {
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMembersResponse => __isa(o, "GetMembersResponse");
}

/**
 * <p>Amazon Detective is currently in preview.</p>
 *
 *          <p>A behavior graph in Detective.</p>
 */
export interface Graph {
  __type?: "Graph";
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the behavior graph was created. The value is in milliseconds
   *          since the epoch.</p>
   */
  CreatedTime?: Date;
}

export namespace Graph {
  export const filterSensitiveLog = (obj: Graph): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Graph => __isa(o, "Graph");
}

/**
 * <p>The request was valid but failed because of a problem with the service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

export interface ListGraphsRequest {
  __type?: "ListGraphsRequest";
  /**
   * <p>The maximum number of graphs to return at a time. The total must be less than the
   *          overall limit on the number of results to return, which is currently 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results.
   *          The initial request does not include a pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListGraphsRequest {
  export const filterSensitiveLog = (obj: ListGraphsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGraphsRequest => __isa(o, "ListGraphsRequest");
}

export interface ListGraphsResponse {
  __type?: "ListGraphsResponse";
  /**
   * <p>A list of behavior graphs that the account is a master for.</p>
   */
  GraphList?: Graph[];

  /**
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   */
  NextToken?: string;
}

export namespace ListGraphsResponse {
  export const filterSensitiveLog = (obj: ListGraphsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListGraphsResponse => __isa(o, "ListGraphsResponse");
}

export interface ListInvitationsRequest {
  __type?: "ListInvitationsRequest";
  /**
   * <p>The maximum number of behavior graph invitations to return in the response. The total
   *          must be less than the overall limit on the number of results to return, which is currently
   *          200.</p>
   */
  MaxResults?: number;

  /**
   * <p>For requests to retrieve the next page of results, the pagination token that was
   *          returned with the previous page of results.
   *           The initial request does not include a pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsRequest {
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInvitationsRequest => __isa(o, "ListInvitationsRequest");
}

export interface ListInvitationsResponse {
  __type?: "ListInvitationsResponse";
  /**
   * <p>The list of behavior graphs for which the member account has open or accepted
   *          invitations.</p>
   */
  Invitations?: MemberDetail[];

  /**
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsResponse {
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInvitationsResponse => __isa(o, "ListInvitationsResponse");
}

export interface ListMembersRequest {
  __type?: "ListMembersRequest";
  /**
   * <p>The ARN of the behavior graph for which to retrieve the list of member accounts.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>The maximum number of member accounts to include in the response. The total must be less
   *          than the overall limit on the number of results to return, which is currently 200.</p>
   */
  MaxResults?: number;

  /**
   * <p>For requests to retrieve the next page of member account results, the pagination token
   *          that was returned with the previous page of results.
   *          The initial request does not include a pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListMembersRequest {
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMembersRequest => __isa(o, "ListMembersRequest");
}

export interface ListMembersResponse {
  __type?: "ListMembersResponse";
  /**
   * <p>The list of member accounts in the behavior graph.</p>
   *          <p>The results include member accounts that did not pass verification and member accounts
   *          that have not yet accepted the invitation to the behavior graph. The results do not include
   *          member accounts that were removed from the behavior graph.</p>
   */
  MemberDetails?: MemberDetail[];

  /**
   * <p>If there are more member accounts remaining in the results, then this is the pagination
   *          token to use to request the next page of member accounts.</p>
   */
  NextToken?: string;
}

export namespace ListMembersResponse {
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMembersResponse => __isa(o, "ListMembersResponse");
}

/**
 * <p>Amazon Detective is currently in preview.</p>
 *
 *          <p>Details about a member account that was invited to contribute to a behavior
 *          graph.</p>
 */
export interface MemberDetail {
  __type?: "MemberDetail";
  /**
   * <p>The AWS account identifier for the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The AWS account root user email address for the member account.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The ARN of the behavior graph that the member account was invited to.</p>
   */
  GraphArn?: string;

  /**
   * <p>The date and time that Detective sent the invitation to the member account. The value is in
   *          milliseconds since the epoch.</p>
   */
  InvitedTime?: Date;

  /**
   * <p>The AWS account identifier of the master account for the behavior graph.</p>
   */
  MasterId?: string;

  /**
   * <p>The current membership status of the member account. The status can have one of the
   *          following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - Indicates that the member was sent an
   *                invitation
   *                but has not yet responded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFICATION_IN_PROGRESS</code> - Indicates that Detective is verifying that the
   *                account identifier and email address provided for the member account match. If they
   *                do match, then Detective sends the invitation. If the email address and account
   *                identifier don't match, then the member cannot be added to the behavior graph.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFICATION_FAILED</code> - Indicates that the account and email address
   *                provided for the member account do not match, and Detective did not send an invitation to
   *                the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Indicates that the member account accepted the invitation
   *                to contribute to the behavior graph.</p>
   *             </li>
   *          </ul>
   *          <p>Member accounts that declined an invitation or that were removed from the behavior graph
   *          are not included.</p>
   */
  Status?: MemberStatus | string;

  /**
   * <p>The date and time that the member account was last updated. The value is in milliseconds
   *          since the epoch.</p>
   */
  UpdatedTime?: Date;
}

export namespace MemberDetail {
  export const filterSensitiveLog = (obj: MemberDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MemberDetail => __isa(o, "MemberDetail");
}

export enum MemberStatus {
  ENABLED = "ENABLED",
  INVITED = "INVITED",
  VERIFICATION_FAILED = "VERIFICATION_FAILED",
  VERIFICATION_IN_PROGRESS = "VERIFICATION_IN_PROGRESS",
}

export interface RejectInvitationRequest {
  __type?: "RejectInvitationRequest";
  /**
   * <p>The ARN of the behavior graph to reject the invitation to.</p>
   *          <p>The member account's current member status in the behavior graph must be
   *             <code>INVITED</code>.</p>
   */
  GraphArn: string | undefined;
}

export namespace RejectInvitationRequest {
  export const filterSensitiveLog = (obj: RejectInvitationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RejectInvitationRequest => __isa(o, "RejectInvitationRequest");
}

/**
 * <p>The request refers to a nonexistent resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>This request would cause the number of member accounts in the behavior graph to exceed
 *          the maximum allowed. A behavior graph cannot have more than 1000 member accounts.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>Amazon Detective is currently in preview.</p>
 *
 *          <p>A member account that was included in a
 *          request but
 *          for which the request could not be processed.</p>
 */
export interface UnprocessedAccount {
  __type?: "UnprocessedAccount";
  /**
   * <p>The AWS account identifier of the member account that was not processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the member account request could not be processed.</p>
   */
  Reason?: string;
}

export namespace UnprocessedAccount {
  export const filterSensitiveLog = (obj: UnprocessedAccount): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnprocessedAccount => __isa(o, "UnprocessedAccount");
}

/**
 * <p>The request parameters are invalid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
