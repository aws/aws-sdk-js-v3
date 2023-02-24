// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { DetectiveServiceException as __BaseException } from "./DetectiveServiceException";

export interface AcceptInvitationRequest {
  /**
   * <p>The ARN of the behavior graph that the member account is accepting the invitation
   *          for.</p>
   *          <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
   */
  GraphArn: string | undefined;
}

export enum ErrorCode {
  InternalError = "INTERNAL_ERROR",
  InvalidGraphArn = "INVALID_GRAPH_ARN",
  InvalidRequestBody = "INVALID_REQUEST_BODY",
}

/**
 * <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The SDK default error code associated with the access denied exception.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The SDK default explanation of why access was denied.</p>
   */
  ErrorCodeReason?: string;

  /**
   * <p>The error code associated with the access denied exception.</p>
   */
  SubErrorCode?: ErrorCode | string;

  /**
   * <p> An explanation of why access was denied.</p>
   */
  SubErrorCodeReason?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
    this.ErrorCodeReason = opts.ErrorCodeReason;
    this.SubErrorCode = opts.SubErrorCode;
    this.SubErrorCodeReason = opts.SubErrorCodeReason;
  }
}

/**
 * <p>The request attempted an invalid action.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was valid but failed because of a problem with the service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request refers to a nonexistent resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request parameters are invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The error code associated with the validation failure.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p> An explanation of why validation failed.</p>
   */
  ErrorCodeReason?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
    this.ErrorCodeReason = opts.ErrorCodeReason;
  }
}

/**
 * <p>An Amazon Web Services account that is the administrator account of or a member of a
 *          behavior graph.</p>
 */
export interface Account {
  /**
   * <p>The account identifier of the Amazon Web Services account.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Web Services account root user email address for the Amazon Web Services
   *          account.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * <p>Information about the Detective administrator account for an
 *          organization.</p>
 */
export interface Administrator {
  /**
   * <p>The Amazon Web Services account identifier of the Detective administrator
   *          account for the organization.</p>
   */
  AccountId?: string;

  /**
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * <p>The date and time when the Detective administrator account was enabled. The
   *          value is an ISO8601 formatted string. For example,
   *          <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  DelegationTime?: Date;
}

export interface BatchGetGraphMemberDatasourcesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>The list of Amazon Web Services accounts to get data source package information
   *          on.</p>
   */
  AccountIds: string[] | undefined;
}

export enum DatasourcePackage {
  DETECTIVE_CORE = "DETECTIVE_CORE",
  EKS_AUDIT = "EKS_AUDIT",
}

export enum DatasourcePackageIngestState {
  DISABLED = "DISABLED",
  STARTED = "STARTED",
  STOPPED = "STOPPED",
}

/**
 * <p>Details on when data collection began for a source package.</p>
 */
export interface TimestampForCollection {
  /**
   * <p>The data and time when data collection began for a source package. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  Timestamp?: Date;
}

/**
 * <p>Details on data source packages for members of the behavior graph.</p>
 */
export interface MembershipDatasources {
  /**
   * <p>The account identifier of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * <p>Details on when a data source package was added to a behavior graph.</p>
   */
  DatasourcePackageIngestHistory?: Record<string, Record<string, TimestampForCollection>>;
}

/**
 * <p>A member account that was included in a request but for which the request could not be
 *          processed.</p>
 */
export interface UnprocessedAccount {
  /**
   * <p>The Amazon Web Services account identifier of the member account that was not
   *          processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the member account request could not be processed.</p>
   */
  Reason?: string;
}

export interface BatchGetGraphMemberDatasourcesResponse {
  /**
   * <p>Details on the status of data source packages for members of the behavior graph.</p>
   */
  MemberDatasources?: MembershipDatasources[];

  /**
   * <p>Accounts that data source package information could not be retrieved for.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export interface BatchGetMembershipDatasourcesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArns: string[] | undefined;
}

/**
 * <p>Behavior graphs that could not be processed in the request.</p>
 */
export interface UnprocessedGraph {
  /**
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * <p>The reason data source package information could not be processed for a behavior
   *          graph.</p>
   */
  Reason?: string;
}

export interface BatchGetMembershipDatasourcesResponse {
  /**
   * <p>Details on the data source package history for an member of the behavior graph.</p>
   */
  MembershipDatasources?: MembershipDatasources[];

  /**
   * <p>Graphs that data source package information could not be retrieved for.</p>
   */
  UnprocessedGraphs?: UnprocessedGraph[];
}

export interface CreateGraphRequest {
  /**
   * <p>The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag,
   *          you provide the tag key and the tag value. Each tag key can contain up to 128 characters.
   *          Each tag value can contain up to 256 characters.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateGraphResponse {
  /**
   * <p>The ARN of the new behavior graph.</p>
   */
  GraphArn?: string;
}

/**
 * <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>The request would cause the number of member accounts in the behavior graph to
 *                exceed the maximum allowed. A behavior graph cannot have more than 1200 member
 *                accounts.</p>
 *             </li>
 *             <li>
 *                <p>The request would cause the data rate for the behavior graph to exceed the maximum
 *                allowed.</p>
 *             </li>
 *             <li>
 *                <p>Detective is unable to verify the data rate for the member account. This
 *                is usually because the member account is not enrolled in Amazon GuardDuty.</p>
 *             </li>
 *          </ul>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of resource that has exceeded the service quota.</p>
   */
  Resources?: string[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Resources = opts.Resources;
  }
}

export interface CreateMembersRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>Customized message text to include in the invitation email message to the invited member
   *          accounts.</p>
   */
  Message?: string;

  /**
   * <p>if set to <code>true</code>, then the invited accounts do not receive email
   *          notifications. By default, this is set to <code>false</code>, and the invited accounts
   *          receive email notifications.</p>
   *          <p>Organization accounts in the organization behavior graph do not receive email
   *          notifications.</p>
   */
  DisableEmailNotification?: boolean;

  /**
   * <p>The list of Amazon Web Services accounts to invite or to enable. You can invite or enable
   *          up to 50 accounts at a time. For each invited account, the account list contains the
   *          account identifier and the Amazon Web Services account root user email address. For
   *          organization accounts in the organization behavior graph, the email address is not
   *          required.</p>
   */
  Accounts: Account[] | undefined;
}

export enum MemberDisabledReason {
  VOLUME_TOO_HIGH = "VOLUME_TOO_HIGH",
  VOLUME_UNKNOWN = "VOLUME_UNKNOWN",
}

export enum InvitationType {
  INVITATION = "INVITATION",
  ORGANIZATION = "ORGANIZATION",
}

export enum MemberStatus {
  ACCEPTED_BUT_DISABLED = "ACCEPTED_BUT_DISABLED",
  ENABLED = "ENABLED",
  INVITED = "INVITED",
  VERIFICATION_FAILED = "VERIFICATION_FAILED",
  VERIFICATION_IN_PROGRESS = "VERIFICATION_IN_PROGRESS",
}

/**
 * <p>Information on the usage of a data source package in the behavior graph.</p>
 */
export interface DatasourcePackageUsageInfo {
  /**
   * <p>Total volume of data in bytes per day ingested for a given data source package.</p>
   */
  VolumeUsageInBytes?: number;

  /**
   * <p>The data and time when the member account data volume was last updated. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  VolumeUsageUpdateTime?: Date;
}

/**
 * <p>Details about a member account in a behavior graph.</p>
 */
export interface MemberDetail {
  /**
   * <p>The Amazon Web Services account identifier for the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Web Services account root user email address for the member account.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * @deprecated
   *
   * <p>The Amazon Web Services account identifier of the administrator account for the behavior
   *          graph.</p>
   */
  MasterId?: string;

  /**
   * <p>The Amazon Web Services account identifier of the administrator account for the behavior
   *          graph.</p>
   */
  AdministratorId?: string;

  /**
   * <p>The current membership status of the member account. The status can have one of the
   *          following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INVITED</code> - For invited accounts only. Indicates that the member was
   *                sent an invitation but has not yet responded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFICATION_IN_PROGRESS</code> - For invited accounts only, indicates that
   *                   Detective is verifying that the account identifier and email address
   *                provided for the member account match. If they do match, then Detective
   *                sends the invitation. If the email address and account identifier don't match, then
   *                the member cannot be added to the behavior graph.</p>
   *                <p>For organization accounts in the organization behavior graph, indicates that
   *                   Detective is verifying that the account belongs to the
   *                organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VERIFICATION_FAILED</code> - For invited accounts only. Indicates that the
   *                account and email address provided for the member account do not match, and Detective did not send an invitation to the account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - Indicates that the member account currently contributes
   *                data to the behavior graph. For invited accounts, the member account accepted the
   *                invitation. For organization accounts in the organization behavior graph, the Detective administrator account enabled the organization account as a member
   *                account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCEPTED_BUT_DISABLED</code> - The account accepted the invitation, or was
   *                enabled by the Detective administrator account, but is prevented from
   *                contributing data to the behavior graph. <code>DisabledReason</code> provides the
   *                reason why the member account is not enabled.</p>
   *             </li>
   *          </ul>
   *          <p>Invited accounts that declined an invitation or that were removed from the behavior
   *          graph are not included. In the organization behavior graph, organization accounts that the
   *             Detective administrator account did not enable are not included.</p>
   */
  Status?: MemberStatus | string;

  /**
   * <p>For member accounts with a status of <code>ACCEPTED_BUT_DISABLED</code>, the reason that
   *          the member account is not enabled.</p>
   *          <p>The reason can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VOLUME_TOO_HIGH</code> - Indicates that adding the member account would
   *                cause the data volume for the behavior graph to be too high.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VOLUME_UNKNOWN</code> - Indicates that Detective is unable to
   *                verify the data volume for the member account. This is usually because the member
   *                account is not enrolled in Amazon GuardDuty. </p>
   *             </li>
   *          </ul>
   */
  DisabledReason?: MemberDisabledReason | string;

  /**
   * <p>For invited accounts, the date and time that Detective sent the invitation to
   *          the account. The value is an ISO8601 formatted string. For example,
   *             <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  InvitedTime?: Date;

  /**
   * <p>The date and time that the member account was last updated. The value is an ISO8601
   *          formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  UpdatedTime?: Date;

  /**
   * @deprecated
   *
   * <p>The data volume in bytes per day for the member account.</p>
   */
  VolumeUsageInBytes?: number;

  /**
   * @deprecated
   *
   * <p>The data and time when the member account data volume was last updated. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  VolumeUsageUpdatedTime?: Date;

  /**
   * @deprecated
   *
   * <p>The member account data volume as a percentage of the maximum allowed data volume. 0
   *          indicates 0 percent, and 100 indicates 100 percent.</p>
   *          <p>Note that this is not the percentage of the behavior graph data volume.</p>
   *          <p>For example, the data volume for the behavior graph is 80 GB per day. The maximum data
   *          volume is 160 GB per day. If the data volume for the member account is 40 GB per day, then
   *             <code>PercentOfGraphUtilization</code> is 25. It represents 25% of the maximum allowed
   *          data volume. </p>
   */
  PercentOfGraphUtilization?: number;

  /**
   * @deprecated
   *
   * <p>The date and time when the graph utilization percentage was last updated. The value is
   *          an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  PercentOfGraphUtilizationUpdatedTime?: Date;

  /**
   * <p>The type of behavior graph membership.</p>
   *          <p>For an organization account in the organization behavior graph, the type is
   *             <code>ORGANIZATION</code>.</p>
   *          <p>For an account that was invited to a behavior graph, the type is
   *          <code>INVITATION</code>. </p>
   */
  InvitationType?: InvitationType | string;

  /**
   * <p>Details on the volume of usage for each data source package in a behavior graph.</p>
   */
  VolumeUsageByDatasourcePackage?: Record<string, DatasourcePackageUsageInfo>;

  /**
   * <p>The state of a data source package for the behavior graph.</p>
   */
  DatasourcePackageIngestStates?: Record<string, DatasourcePackageIngestState | string>;
}

export interface CreateMembersResponse {
  /**
   * <p>The set of member account invitation or enablement requests that Detective was
   *          able to process. This includes accounts that are being verified, that failed verification,
   *          and that passed verification and are being sent an invitation or are being enabled.</p>
   */
  Members?: MemberDetail[];

  /**
   * <p>The list of accounts for which Detective was unable to process the invitation
   *          or enablement request. For each account, the list provides the reason why the request could
   *          not be processed. The list includes accounts that are already member accounts in the
   *          behavior graph.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export interface DeleteGraphRequest {
  /**
   * <p>The ARN of the behavior graph to disable.</p>
   */
  GraphArn: string | undefined;
}

export interface DeleteMembersRequest {
  /**
   * <p>The ARN of the behavior graph to remove members from.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>The list of Amazon Web Services account identifiers for the member accounts to remove
   *          from the behavior graph. You can remove up to 50 member accounts at a time.</p>
   */
  AccountIds: string[] | undefined;
}

export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services account identifiers for the member accounts that Detective successfully removed from the behavior graph.</p>
   */
  AccountIds?: string[];

  /**
   * <p>The list of member accounts that Detective was not able to remove from the
   *          behavior graph. For each member account, provides the reason that the deletion could not be
   *          processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export interface DescribeOrganizationConfigurationRequest {
  /**
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn: string | undefined;
}

export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Indicates whether to automatically enable new organization accounts as member accounts
   *          in the organization behavior graph.</p>
   */
  AutoEnable?: boolean;
}

/**
 * <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

export interface DisassociateMembershipRequest {
  /**
   * <p>The ARN of the behavior graph to remove the member account from.</p>
   *          <p>The member account's member status in the behavior graph must be
   *          <code>ENABLED</code>.</p>
   */
  GraphArn: string | undefined;
}

export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.</p>
   */
  AccountId: string | undefined;
}

export interface GetMembersRequest {
  /**
   * <p>The ARN of the behavior graph for which to request the member details.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>The list of Amazon Web Services account identifiers for the member account for which to
   *          return member details. You can request details for up to 50 member accounts at a
   *          time.</p>
   *          <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts
   *          that were removed from the behavior graph.</p>
   */
  AccountIds: string[] | undefined;
}

export interface GetMembersResponse {
  /**
   * <p>The member account details that Detective is returning in response to the
   *          request.</p>
   */
  MemberDetails?: MemberDetail[];

  /**
   * <p>The requested member accounts for which Detective was unable to return member
   *          details.</p>
   *          <p>For each account, provides the reason why the request could not be processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

export interface ListDatasourcePackagesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Details about the data source packages ingested by your behavior graph.</p>
 */
export interface DatasourcePackageIngestDetail {
  /**
   * <p>Details on which data source packages are ingested for a member account.</p>
   */
  DatasourcePackageIngestState?: DatasourcePackageIngestState | string;

  /**
   * <p>The date a data source package was enabled for this account</p>
   */
  LastIngestStateChange?: Record<string, TimestampForCollection>;
}

export interface ListDatasourcePackagesResponse {
  /**
   * <p>Details on the data source packages active in the behavior graph.</p>
   */
  DatasourcePackages?: Record<string, DatasourcePackageIngestDetail>;

  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;
}

export interface ListGraphsRequest {
  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of graphs to return at a time. The total must be less than the
   *          overall limit on the number of results to return, which is currently 200.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A behavior graph in Detective.</p>
 */
export interface Graph {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time that the behavior graph was created. The value is an ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  CreatedTime?: Date;
}

export interface ListGraphsResponse {
  /**
   * <p>A list of behavior graphs that the account is an administrator account for.</p>
   */
  GraphList?: Graph[];

  /**
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   */
  NextToken?: string;
}

export interface ListInvitationsRequest {
  /**
   * <p>For requests to retrieve the next page of results, the pagination token that was
   *          returned with the previous page of results. The initial request does not include a
   *          pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of behavior graph invitations to return in the response. The total
   *          must be less than the overall limit on the number of results to return, which is currently
   *          200.</p>
   */
  MaxResults?: number;
}

export interface ListInvitationsResponse {
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

export interface ListMembersRequest {
  /**
   * <p>The ARN of the behavior graph for which to retrieve the list of member accounts.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>For requests to retrieve the next page of member account results, the pagination token
   *          that was returned with the previous page of results. The initial request does not include a
   *          pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of member accounts to include in the response. The total must be less
   *          than the overall limit on the number of results to return, which is currently 200.</p>
   */
  MaxResults?: number;
}

export interface ListMembersResponse {
  /**
   * <p>The list of member accounts in the behavior graph.</p>
   *          <p>For invited accounts, the results include member accounts that did not pass verification
   *          and member accounts that have not yet accepted the invitation to the behavior graph. The
   *          results do not include member accounts that were removed from the behavior graph.</p>
   *          <p>For the organization behavior graph, the results do not include organization accounts
   *          that the Detective administrator account has not enabled as member
   *          accounts.</p>
   */
  MemberDetails?: MemberDetail[];

  /**
   * <p>If there are more member accounts remaining in the results, then use this pagination
   *          token to request the next page of member accounts.</p>
   */
  NextToken?: string;
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Detective administrator accounts.</p>
   */
  Administrators?: Administrator[];

  /**
   * <p>If there are more accounts remaining in the results, then this is the pagination token
   *          to use to request the next page of accounts.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the behavior graph for which to retrieve the tag values.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tag values that are assigned to the behavior graph. The request returns up to 50 tag
   *          values.</p>
   */
  Tags?: Record<string, string>;
}

export interface RejectInvitationRequest {
  /**
   * <p>The ARN of the behavior graph to reject the invitation to.</p>
   *          <p>The member account's current member status in the behavior graph must be
   *             <code>INVITED</code>.</p>
   */
  GraphArn: string | undefined;
}

export interface StartMonitoringMemberRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>The account ID of the member account to try to enable.</p>
   *          <p>The account must be an invited member account with a status of
   *             <code>ACCEPTED_BUT_DISABLED</code>. </p>
   */
  AccountId: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the behavior graph to assign the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you
   *          provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each
   *          tag value can contain up to 256 characters.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the behavior graph to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags
   *          at a time.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDatasourcePackagesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>The data source package start for the behavior graph.</p>
   */
  DatasourcePackages: (DatasourcePackage | string)[] | undefined;
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * <p>Indicates whether to automatically enable new organization accounts as member accounts
   *          in the organization behavior graph.</p>
   */
  AutoEnable?: boolean;
}

/**
 * @internal
 */
export const AcceptInvitationRequestFilterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountFilterSensitiveLog = (obj: Account): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdministratorFilterSensitiveLog = (obj: Administrator): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetGraphMemberDatasourcesRequestFilterSensitiveLog = (
  obj: BatchGetGraphMemberDatasourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimestampForCollectionFilterSensitiveLog = (obj: TimestampForCollection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MembershipDatasourcesFilterSensitiveLog = (obj: MembershipDatasources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedAccountFilterSensitiveLog = (obj: UnprocessedAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetGraphMemberDatasourcesResponseFilterSensitiveLog = (
  obj: BatchGetGraphMemberDatasourcesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetMembershipDatasourcesRequestFilterSensitiveLog = (
  obj: BatchGetMembershipDatasourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedGraphFilterSensitiveLog = (obj: UnprocessedGraph): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetMembershipDatasourcesResponseFilterSensitiveLog = (
  obj: BatchGetMembershipDatasourcesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGraphRequestFilterSensitiveLog = (obj: CreateGraphRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGraphResponseFilterSensitiveLog = (obj: CreateGraphResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMembersRequestFilterSensitiveLog = (obj: CreateMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasourcePackageUsageInfoFilterSensitiveLog = (obj: DatasourcePackageUsageInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberDetailFilterSensitiveLog = (obj: MemberDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMembersResponseFilterSensitiveLog = (obj: CreateMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGraphRequestFilterSensitiveLog = (obj: DeleteGraphRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMembersRequestFilterSensitiveLog = (obj: DeleteMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMembersResponseFilterSensitiveLog = (obj: DeleteMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: DescribeOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMembershipRequestFilterSensitiveLog = (obj: DisassociateMembershipRequest): any => ({
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
export const GetMembersRequestFilterSensitiveLog = (obj: GetMembersRequest): any => ({
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
export const ListDatasourcePackagesRequestFilterSensitiveLog = (obj: ListDatasourcePackagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasourcePackageIngestDetailFilterSensitiveLog = (obj: DatasourcePackageIngestDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasourcePackagesResponseFilterSensitiveLog = (obj: ListDatasourcePackagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGraphsRequestFilterSensitiveLog = (obj: ListGraphsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GraphFilterSensitiveLog = (obj: Graph): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGraphsResponseFilterSensitiveLog = (obj: ListGraphsResponse): any => ({
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
export const RejectInvitationRequestFilterSensitiveLog = (obj: RejectInvitationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMonitoringMemberRequestFilterSensitiveLog = (obj: StartMonitoringMemberRequest): any => ({
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
export const UpdateDatasourcePackagesRequestFilterSensitiveLog = (obj: UpdateDatasourcePackagesRequest): any => ({
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
