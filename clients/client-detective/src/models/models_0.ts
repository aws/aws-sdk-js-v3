// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DetectiveServiceException as __BaseException } from "./DetectiveServiceException";

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph that the member account is accepting the invitation
   *          for.</p>
   *          <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
   */
  GraphArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  InternalError: "INTERNAL_ERROR",
  InvalidGraphArn: "INVALID_GRAPH_ARN",
  InvalidRequestBody: "INVALID_REQUEST_BODY",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The SDK default error code associated with the access denied exception.</p>
   */
  ErrorCode?: ErrorCode;

  /**
   * @public
   * <p>The SDK default explanation of why access was denied.</p>
   */
  ErrorCodeReason?: string;

  /**
   * @public
   * <p>The error code associated with the access denied exception.</p>
   */
  SubErrorCode?: ErrorCode;

  /**
   * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>The request parameters are invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The error code associated with the validation failure.</p>
   */
  ErrorCode?: ErrorCode;

  /**
   * @public
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
 * @public
 * <p>An Amazon Web Services account that is the administrator account of or a member of a
 *          behavior graph.</p>
 */
export interface Account {
  /**
   * @public
   * <p>The account identifier of the Amazon Web Services account.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account root user email address for the Amazon Web Services
   *          account.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * @public
 * <p>Information about the Detective administrator account for an
 *          organization.</p>
 */
export interface Administrator {
  /**
   * @public
   * <p>The Amazon Web Services account identifier of the Detective administrator
   *          account for the organization.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * @public
   * <p>The date and time when the Detective administrator account was enabled. The
   *          value is an ISO8601 formatted string. For example,
   *          <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  DelegationTime?: Date;
}

/**
 * @public
 */
export interface BatchGetGraphMemberDatasourcesRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>The list of Amazon Web Services accounts to get data source package information
   *          on.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasourcePackage = {
  ASFF_SECURITYHUB_FINDING: "ASFF_SECURITYHUB_FINDING",
  DETECTIVE_CORE: "DETECTIVE_CORE",
  EKS_AUDIT: "EKS_AUDIT",
} as const;

/**
 * @public
 */
export type DatasourcePackage = (typeof DatasourcePackage)[keyof typeof DatasourcePackage];

/**
 * @public
 * @enum
 */
export const DatasourcePackageIngestState = {
  DISABLED: "DISABLED",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type DatasourcePackageIngestState =
  (typeof DatasourcePackageIngestState)[keyof typeof DatasourcePackageIngestState];

/**
 * @public
 * <p>Details on when data collection began for a source package.</p>
 */
export interface TimestampForCollection {
  /**
   * @public
   * <p>The data and time when data collection began for a source package. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * <p>Details on data source packages for members of the behavior graph.</p>
 */
export interface MembershipDatasources {
  /**
   * @public
   * <p>The account identifier of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * @public
   * <p>Details on when a data source package was added to a behavior graph.</p>
   */
  DatasourcePackageIngestHistory?: Record<
    DatasourcePackage,
    Record<DatasourcePackageIngestState, TimestampForCollection>
  >;
}

/**
 * @public
 * <p>A member account that was included in a request but for which the request could not be
 *          processed.</p>
 */
export interface UnprocessedAccount {
  /**
   * @public
   * <p>The Amazon Web Services account identifier of the member account that was not
   *          processed.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The reason that the member account request could not be processed.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface BatchGetGraphMemberDatasourcesResponse {
  /**
   * @public
   * <p>Details on the status of data source packages for members of the behavior graph.</p>
   */
  MemberDatasources?: MembershipDatasources[];

  /**
   * @public
   * <p>Accounts that data source package information could not be retrieved for.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

/**
 * @public
 */
export interface BatchGetMembershipDatasourcesRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArns: string[] | undefined;
}

/**
 * @public
 * <p>Behavior graphs that could not be processed in the request.</p>
 */
export interface UnprocessedGraph {
  /**
   * @public
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * @public
   * <p>The reason data source package information could not be processed for a behavior
   *          graph.</p>
   */
  Reason?: string;
}

/**
 * @public
 */
export interface BatchGetMembershipDatasourcesResponse {
  /**
   * @public
   * <p>Details on the data source package history for an member of the behavior graph.</p>
   */
  MembershipDatasources?: MembershipDatasources[];

  /**
   * @public
   * <p>Graphs that data source package information could not be retrieved for.</p>
   */
  UnprocessedGraphs?: UnprocessedGraph[];
}

/**
 * @public
 */
export interface CreateGraphRequest {
  /**
   * @public
   * <p>The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag,
   *          you provide the tag key and the tag value. Each tag key can contain up to 128 characters.
   *          Each tag value can contain up to 256 characters.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateGraphResponse {
  /**
   * @public
   * <p>The ARN of the new behavior graph.</p>
   */
  GraphArn?: string;
}

/**
 * @public
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
   * @public
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

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>Customized message text to include in the invitation email message to the invited member
   *          accounts.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>if set to <code>true</code>, then the invited accounts do not receive email
   *          notifications. By default, this is set to <code>false</code>, and the invited accounts
   *          receive email notifications.</p>
   *          <p>Organization accounts in the organization behavior graph do not receive email
   *          notifications.</p>
   */
  DisableEmailNotification?: boolean;

  /**
   * @public
   * <p>The list of Amazon Web Services accounts to invite or to enable. You can invite or enable
   *          up to 50 accounts at a time. For each invited account, the account list contains the
   *          account identifier and the Amazon Web Services account root user email address. For
   *          organization accounts in the organization behavior graph, the email address is not
   *          required.</p>
   */
  Accounts: Account[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MemberDisabledReason = {
  VOLUME_TOO_HIGH: "VOLUME_TOO_HIGH",
  VOLUME_UNKNOWN: "VOLUME_UNKNOWN",
} as const;

/**
 * @public
 */
export type MemberDisabledReason = (typeof MemberDisabledReason)[keyof typeof MemberDisabledReason];

/**
 * @public
 * @enum
 */
export const InvitationType = {
  INVITATION: "INVITATION",
  ORGANIZATION: "ORGANIZATION",
} as const;

/**
 * @public
 */
export type InvitationType = (typeof InvitationType)[keyof typeof InvitationType];

/**
 * @public
 * @enum
 */
export const MemberStatus = {
  ACCEPTED_BUT_DISABLED: "ACCEPTED_BUT_DISABLED",
  ENABLED: "ENABLED",
  INVITED: "INVITED",
  VERIFICATION_FAILED: "VERIFICATION_FAILED",
  VERIFICATION_IN_PROGRESS: "VERIFICATION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

/**
 * @public
 * <p>Information on the usage of a data source package in the behavior graph.</p>
 */
export interface DatasourcePackageUsageInfo {
  /**
   * @public
   * <p>Total volume of data in bytes per day ingested for a given data source package.</p>
   */
  VolumeUsageInBytes?: number;

  /**
   * @public
   * <p>The data and time when the member account data volume was last updated. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  VolumeUsageUpdateTime?: Date;
}

/**
 * @public
 * <p>Details about a member account in a behavior graph.</p>
 */
export interface MemberDetail {
  /**
   * @public
   * <p>The Amazon Web Services account identifier for the member account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account root user email address for the member account.</p>
   */
  EmailAddress?: string;

  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The Amazon Web Services account identifier of the administrator account for the behavior
   *          graph.</p>
   */
  MasterId?: string;

  /**
   * @public
   * <p>The Amazon Web Services account identifier of the administrator account for the behavior
   *          graph.</p>
   */
  AdministratorId?: string;

  /**
   * @public
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
  Status?: MemberStatus;

  /**
   * @public
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
  DisabledReason?: MemberDisabledReason;

  /**
   * @public
   * <p>For invited accounts, the date and time that Detective sent the invitation to
   *          the account. The value is an ISO8601 formatted string. For example,
   *             <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  InvitedTime?: Date;

  /**
   * @public
   * <p>The date and time that the member account was last updated. The value is an ISO8601
   *          formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  UpdatedTime?: Date;

  /**
   * @public
   * @deprecated
   *
   * <p>The data volume in bytes per day for the member account.</p>
   */
  VolumeUsageInBytes?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>The data and time when the member account data volume was last updated. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  VolumeUsageUpdatedTime?: Date;

  /**
   * @public
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
   * @public
   * @deprecated
   *
   * <p>The date and time when the graph utilization percentage was last updated. The value is
   *          an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  PercentOfGraphUtilizationUpdatedTime?: Date;

  /**
   * @public
   * <p>The type of behavior graph membership.</p>
   *          <p>For an organization account in the organization behavior graph, the type is
   *             <code>ORGANIZATION</code>.</p>
   *          <p>For an account that was invited to a behavior graph, the type is
   *          <code>INVITATION</code>. </p>
   */
  InvitationType?: InvitationType;

  /**
   * @public
   * <p>Details on the volume of usage for each data source package in a behavior graph.</p>
   */
  VolumeUsageByDatasourcePackage?: Record<DatasourcePackage, DatasourcePackageUsageInfo>;

  /**
   * @public
   * <p>The state of a data source package for the behavior graph.</p>
   */
  DatasourcePackageIngestStates?: Record<DatasourcePackage, DatasourcePackageIngestState>;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * @public
   * <p>The set of member account invitation or enablement requests that Detective was
   *          able to process. This includes accounts that are being verified, that failed verification,
   *          and that passed verification and are being sent an invitation or are being enabled.</p>
   */
  Members?: MemberDetail[];

  /**
   * @public
   * <p>The list of accounts for which Detective was unable to process the invitation
   *          or enablement request. For each account, the list provides the reason why the request could
   *          not be processed. The list includes accounts that are already member accounts in the
   *          behavior graph.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

/**
 * @public
 */
export interface DeleteGraphRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph to disable.</p>
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph to remove members from.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>The list of Amazon Web Services account identifiers for the member accounts to remove
   *          from the behavior graph. You can remove up to 50 member accounts at a time.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * @public
   * <p>The list of Amazon Web Services account identifiers for the member accounts that Detective successfully removed from the behavior graph.</p>
   */
  AccountIds?: string[];

  /**
   * @public
   * <p>The list of member accounts that Detective was not able to remove from the
   *          behavior graph. For each member account, provides the reason that the deletion could not be
   *          processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * @public
   * <p>Indicates whether to automatically enable new organization accounts as member accounts
   *          in the organization behavior graph.</p>
   */
  AutoEnable?: boolean;
}

/**
 * @public
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

/**
 * @public
 */
export interface DisassociateMembershipRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph to remove the member account from.</p>
   *          <p>The member account's member status in the behavior graph must be
   *          <code>ENABLED</code>.</p>
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.</p>
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph for which to request the member details.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>The list of Amazon Web Services account identifiers for the member account for which to
   *          return member details. You can request details for up to 50 member accounts at a
   *          time.</p>
   *          <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts
   *          that were removed from the behavior graph.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * @public
   * <p>The member account details that Detective is returning in response to the
   *          request.</p>
   */
  MemberDetails?: MemberDetail[];

  /**
   * @public
   * <p>The requested member accounts for which Detective was unable to return member
   *          details.</p>
   *          <p>For each account, provides the reason why the request could not be processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

/**
 * @public
 */
export interface ListDatasourcePackagesRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Details about the data source packages ingested by your behavior graph.</p>
 */
export interface DatasourcePackageIngestDetail {
  /**
   * @public
   * <p>Details on which data source packages are ingested for a member account.</p>
   */
  DatasourcePackageIngestState?: DatasourcePackageIngestState;

  /**
   * @public
   * <p>The date a data source package was enabled for this account</p>
   */
  LastIngestStateChange?: Record<DatasourcePackageIngestState, TimestampForCollection>;
}

/**
 * @public
 */
export interface ListDatasourcePackagesResponse {
  /**
   * @public
   * <p>Details on the data source packages active in the behavior graph.</p>
   */
  DatasourcePackages?: Record<DatasourcePackage, DatasourcePackageIngestDetail>;

  /**
   * @public
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGraphsRequest {
  /**
   * @public
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of graphs to return at a time. The total must be less than the
   *          overall limit on the number of results to return, which is currently 200.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A behavior graph in Detective.</p>
 */
export interface Graph {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date and time that the behavior graph was created. The value is an ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListGraphsResponse {
  /**
   * @public
   * <p>A list of behavior graphs that the account is an administrator account for.</p>
   */
  GraphList?: Graph[];

  /**
   * @public
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * @public
   * <p>For requests to retrieve the next page of results, the pagination token that was
   *          returned with the previous page of results. The initial request does not include a
   *          pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of behavior graph invitations to return in the response. The total
   *          must be less than the overall limit on the number of results to return, which is currently
   *          200.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * @public
   * <p>The list of behavior graphs for which the member account has open or accepted
   *          invitations.</p>
   */
  Invitations?: MemberDetail[];

  /**
   * @public
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph for which to retrieve the list of member accounts.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>For requests to retrieve the next page of member account results, the pagination token
   *          that was returned with the previous page of results. The initial request does not include a
   *          pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of member accounts to include in the response. The total must be less
   *          than the overall limit on the number of results to return, which is currently 200.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * @public
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
   * @public
   * <p>If there are more member accounts remaining in the results, then use this pagination
   *          token to request the next page of member accounts.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * @public
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * @public
   * <p>The list of Detective administrator accounts.</p>
   */
  Administrators?: Administrator[];

  /**
   * @public
   * <p>If there are more accounts remaining in the results, then this is the pagination token
   *          to use to request the next page of accounts.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph for which to retrieve the tag values.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tag values that are assigned to the behavior graph. The request returns up to 50 tag
   *          values.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RejectInvitationRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph to reject the invitation to.</p>
   *          <p>The member account's current member status in the behavior graph must be
   *             <code>INVITED</code>.</p>
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMemberRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>The account ID of the member account to try to enable.</p>
   *          <p>The account must be an invited member account with a status of
   *             <code>ACCEPTED_BUT_DISABLED</code>. </p>
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph to assign the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you
   *          provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each
   *          tag value can contain up to 256 characters.</p>
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
   * @public
   * <p>The ARN of the behavior graph to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags
   *          at a time.</p>
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
export interface UpdateDatasourcePackagesRequest {
  /**
   * @public
   * <p>The ARN of the behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>The data source package start for the behavior graph.</p>
   */
  DatasourcePackages: DatasourcePackage[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @public
   * <p>The ARN of the organization behavior graph.</p>
   */
  GraphArn: string | undefined;

  /**
   * @public
   * <p>Indicates whether to automatically enable new organization accounts as member accounts
   *          in the organization behavior graph.</p>
   */
  AutoEnable?: boolean;
}

/**
 * @internal
 */
export const AccountFilterSensitiveLog = (obj: Account): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMembersRequestFilterSensitiveLog = (obj: CreateMembersRequest): any => ({
  ...obj,
  ...(obj.Message && { Message: SENSITIVE_STRING }),
  ...(obj.Accounts && { Accounts: obj.Accounts.map((item) => AccountFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MemberDetailFilterSensitiveLog = (obj: MemberDetail): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMembersResponseFilterSensitiveLog = (obj: CreateMembersResponse): any => ({
  ...obj,
  ...(obj.Members && { Members: obj.Members.map((item) => MemberDetailFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetMembersResponseFilterSensitiveLog = (obj: GetMembersResponse): any => ({
  ...obj,
  ...(obj.MemberDetails && { MemberDetails: obj.MemberDetails.map((item) => MemberDetailFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListInvitationsResponseFilterSensitiveLog = (obj: ListInvitationsResponse): any => ({
  ...obj,
  ...(obj.Invitations && { Invitations: obj.Invitations.map((item) => MemberDetailFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListMembersResponseFilterSensitiveLog = (obj: ListMembersResponse): any => ({
  ...obj,
  ...(obj.MemberDetails && { MemberDetails: obj.MemberDetails.map((item) => MemberDetailFilterSensitiveLog(item)) }),
});
