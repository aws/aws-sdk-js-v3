// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DetectiveServiceException as __BaseException } from "./DetectiveServiceException";

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * <p>The ARN of the behavior graph that the member account is accepting the invitation
   *          for.</p>
   *          <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
   * @public
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
 * <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The SDK default error code associated with the access denied exception.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The SDK default explanation of why access was denied.</p>
   * @public
   */
  ErrorCodeReason?: string | undefined;

  /**
   * <p>The error code associated with the access denied exception.</p>
   * @public
   */
  SubErrorCode?: ErrorCode | undefined;

  /**
   * <p> An explanation of why access was denied.</p>
   * @public
   */
  SubErrorCodeReason?: string | undefined;
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
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The error code associated with the validation failure.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p> An explanation of why validation failed.</p>
   * @public
   */
  ErrorCodeReason?: string | undefined;
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
 * @public
 */
export interface Account {
  /**
   * <p>The account identifier of the Amazon Web Services account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Web Services account root user email address for the Amazon Web Services
   *          account.</p>
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * <p>Information about the Detective administrator account for an
 *          organization.</p>
 * @public
 */
export interface Administrator {
  /**
   * <p>The Amazon Web Services account identifier of the Detective administrator
   *          account for the organization.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ARN of the organization behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * <p>The date and time when the Detective administrator account was enabled. The
   *          value is an ISO8601 formatted string. For example,
   *          <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  DelegationTime?: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetGraphMemberDatasourcesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The list of Amazon Web Services accounts to get data source package information
   *          on.</p>
   * @public
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
 * <p>Details on when data collection began for a source package.</p>
 * @public
 */
export interface TimestampForCollection {
  /**
   * <p>The data and time when data collection began for a source package. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Details on data source packages for members of the behavior graph.</p>
 * @public
 */
export interface MembershipDatasources {
  /**
   * <p>The account identifier of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ARN of the organization behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * <p>Details on when a data source package was added to a behavior graph.</p>
   * @public
   */
  DatasourcePackageIngestHistory?:
    | Partial<Record<DatasourcePackage, Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>>>
    | undefined;
}

/**
 * <p>A member account that was included in a request but for which the request could not be
 *          processed.</p>
 * @public
 */
export interface UnprocessedAccount {
  /**
   * <p>The Amazon Web Services account identifier of the member account that was not
   *          processed.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The reason that the member account request could not be processed.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetGraphMemberDatasourcesResponse {
  /**
   * <p>Details on the status of data source packages for members of the behavior graph.</p>
   * @public
   */
  MemberDatasources?: MembershipDatasources[] | undefined;

  /**
   * <p>Accounts that data source package information could not be retrieved for.</p>
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMembershipDatasourcesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArns: string[] | undefined;
}

/**
 * <p>Behavior graphs that could not be processed in the request.</p>
 * @public
 */
export interface UnprocessedGraph {
  /**
   * <p>The ARN of the organization behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * <p>The reason data source package information could not be processed for a behavior
   *          graph.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetMembershipDatasourcesResponse {
  /**
   * <p>Details on the data source package history for an member of the behavior graph.</p>
   * @public
   */
  MembershipDatasources?: MembershipDatasources[] | undefined;

  /**
   * <p>Graphs that data source package information could not be retrieved for.</p>
   * @public
   */
  UnprocessedGraphs?: UnprocessedGraph[] | undefined;
}

/**
 * @public
 */
export interface CreateGraphRequest {
  /**
   * <p>The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag,
   *          you provide the tag key and the tag value. Each tag key can contain up to 128 characters.
   *          Each tag value can contain up to 256 characters.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGraphResponse {
  /**
   * <p>The ARN of the new behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;
}

/**
 * <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>This request cannot be completed if it would cause the number of member accounts in the
 *             behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200
 *             member accounts.</p>
 *             </li>
 *             <li>
 *                <p>This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource that has exceeded the service quota.</p>
   * @public
   */
  Resources?: string[] | undefined;
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
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>Customized message text to include in the invitation email message to the invited member
   *          accounts.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>if set to <code>true</code>, then the invited accounts do not receive email
   *          notifications. By default, this is set to <code>false</code>, and the invited accounts
   *          receive email notifications.</p>
   *          <p>Organization accounts in the organization behavior graph do not receive email
   *          notifications.</p>
   * @public
   */
  DisableEmailNotification?: boolean | undefined;

  /**
   * <p>The list of Amazon Web Services accounts to invite or to enable. You can invite or enable
   *          up to 50 accounts at a time. For each invited account, the account list contains the
   *          account identifier and the Amazon Web Services account root user email address. For
   *          organization accounts in the organization behavior graph, the email address is not
   *          required.</p>
   * @public
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
 * <p>Information on the usage of a data source package in the behavior graph.</p>
 * @public
 */
export interface DatasourcePackageUsageInfo {
  /**
   * <p>Total volume of data in bytes per day ingested for a given data source package.</p>
   * @public
   */
  VolumeUsageInBytes?: number | undefined;

  /**
   * <p>The data and time when the member account data volume was last updated. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  VolumeUsageUpdateTime?: Date | undefined;
}

/**
 * <p>Details about a member account in a behavior graph.</p>
 * @public
 */
export interface MemberDetail {
  /**
   * <p>The Amazon Web Services account identifier for the member account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account root user email address for the member account.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * @deprecated
   *
   * <p>The Amazon Web Services account identifier of the administrator account for the behavior
   *          graph.</p>
   * @public
   */
  MasterId?: string | undefined;

  /**
   * <p>The Amazon Web Services account identifier of the administrator account for the behavior
   *          graph.</p>
   * @public
   */
  AdministratorId?: string | undefined;

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
   * @public
   */
  Status?: MemberStatus | undefined;

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
   * @public
   */
  DisabledReason?: MemberDisabledReason | undefined;

  /**
   * <p>For invited accounts, the date and time that Detective sent the invitation to
   *          the account. The value is an ISO8601 formatted string. For example,
   *             <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  InvitedTime?: Date | undefined;

  /**
   * <p>The date and time that the member account was last updated. The value is an ISO8601
   *          formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  UpdatedTime?: Date | undefined;

  /**
   * @deprecated
   *
   * <p>The data volume in bytes per day for the member account.</p>
   * @public
   */
  VolumeUsageInBytes?: number | undefined;

  /**
   * @deprecated
   *
   * <p>The data and time when the member account data volume was last updated. The value is an
   *          ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  VolumeUsageUpdatedTime?: Date | undefined;

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
   * @public
   */
  PercentOfGraphUtilization?: number | undefined;

  /**
   * @deprecated
   *
   * <p>The date and time when the graph utilization percentage was last updated. The value is
   *          an ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  PercentOfGraphUtilizationUpdatedTime?: Date | undefined;

  /**
   * <p>The type of behavior graph membership.</p>
   *          <p>For an organization account in the organization behavior graph, the type is
   *             <code>ORGANIZATION</code>.</p>
   *          <p>For an account that was invited to a behavior graph, the type is
   *          <code>INVITATION</code>. </p>
   * @public
   */
  InvitationType?: InvitationType | undefined;

  /**
   * <p>Details on the volume of usage for each data source package in a behavior graph.</p>
   * @public
   */
  VolumeUsageByDatasourcePackage?: Partial<Record<DatasourcePackage, DatasourcePackageUsageInfo>> | undefined;

  /**
   * <p>The state of a data source package for the behavior graph.</p>
   * @public
   */
  DatasourcePackageIngestStates?: Partial<Record<DatasourcePackage, DatasourcePackageIngestState>> | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * <p>The set of member account invitation or enablement requests that Detective was
   *          able to process. This includes accounts that are being verified, that failed verification,
   *          and that passed verification and are being sent an invitation or are being enabled.</p>
   * @public
   */
  Members?: MemberDetail[] | undefined;

  /**
   * <p>The list of accounts for which Detective was unable to process the invitation
   *          or enablement request. For each account, the list provides the reason why the request could
   *          not be processed. The list includes accounts that are already member accounts in the
   *          behavior graph.</p>
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteGraphRequest {
  /**
   * <p>The ARN of the behavior graph to disable.</p>
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * <p>The ARN of the behavior graph to remove members from.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The list of Amazon Web Services account identifiers for the member accounts to remove
   *          from the behavior graph. You can remove up to 50 member accounts at a time.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services account identifiers for the member accounts that Detective successfully removed from the behavior graph.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The list of member accounts that Detective was not able to remove from the
   *          behavior graph. For each member account, provides the reason that the deletion could not be
   *          processed.</p>
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * <p>The ARN of the organization behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Indicates whether to automatically enable new organization accounts as member accounts
   *          in the organization behavior graph.</p>
   * @public
   */
  AutoEnable?: boolean | undefined;
}

/**
 * <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The ARN of the behavior graph to remove the member account from.</p>
   *          <p>The member account's member status in the behavior graph must be
   *          <code>ENABLED</code>.</p>
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface GetInvestigationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN). Detective supports IAM user ARNs and IAM role ARNs.</p>
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * <p>Type of entity. For example, Amazon Web Services accounts, such as an IAM user and/or IAM role.</p>
   * @public
   */
  EntityType?: EntityType | undefined;

  /**
   * <p>The creation time of the investigation report in UTC time stamp format.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The start date and time used to set the scope time within which you want to generate the investigation report. The value is an UTC ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  ScopeStartTime?: Date | undefined;

  /**
   * <p>The data and time when the investigation began. The value is an UTC ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  ScopeEndTime?: Date | undefined;

  /**
   * <p>The status based on the completion status of the investigation.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The severity assigned is based on the likelihood and impact of the indicators of
   *          compromise discovered in the investigation.</p>
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * <p>The current state of the investigation. An archived investigation indicates that you
   *          have completed reviewing the investigation.</p>
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * <p>The ARN of the behavior graph for which to request the member details.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The list of Amazon Web Services account identifiers for the member account for which to
   *          return member details. You can request details for up to 50 member accounts at a
   *          time.</p>
   *          <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts
   *          that were removed from the behavior graph.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * <p>The member account details that Detective is returning in response to the
   *          request.</p>
   * @public
   */
  MemberDetails?: MemberDetail[] | undefined;

  /**
   * <p>The requested member accounts for which Detective was unable to return member
   *          details.</p>
   *          <p>For each account, provides the reason why the request could not be processed.</p>
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface ListDatasourcePackagesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
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
 * <p>Details about the data source packages ingested by your behavior graph.</p>
 * @public
 */
export interface DatasourcePackageIngestDetail {
  /**
   * <p>Details on which data source packages are ingested for a member account.</p>
   * @public
   */
  DatasourcePackageIngestState?: DatasourcePackageIngestState | undefined;

  /**
   * <p>The date a data source package was enabled for this account</p>
   * @public
   */
  LastIngestStateChange?: Partial<Record<DatasourcePackageIngestState, TimestampForCollection>> | undefined;
}

/**
 * @public
 */
export interface ListDatasourcePackagesResponse {
  /**
   * <p>Details on the data source packages active in the behavior graph.</p>
   * @public
   */
  DatasourcePackages?: Partial<Record<DatasourcePackage, DatasourcePackageIngestDetail>> | undefined;

  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGraphsRequest {
  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of graphs to return at a time. The total must be less than the
   *          overall limit on the number of results to return, which is currently 200.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A behavior graph in Detective.</p>
 * @public
 */
export interface Graph {
  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time that the behavior graph was created. The value is an ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListGraphsResponse {
  /**
   * <p>A list of behavior graphs that the account is an administrator account for.</p>
   * @public
   */
  GraphList?: Graph[] | undefined;

  /**
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IndicatorType = {
  FLAGGED_IP_ADDRESS: "FLAGGED_IP_ADDRESS",
  IMPOSSIBLE_TRAVEL: "IMPOSSIBLE_TRAVEL",
  NEW_ASO: "NEW_ASO",
  NEW_GEOLOCATION: "NEW_GEOLOCATION",
  NEW_USER_AGENT: "NEW_USER_AGENT",
  RELATED_FINDING: "RELATED_FINDING",
  RELATED_FINDING_GROUP: "RELATED_FINDING_GROUP",
  TTP_OBSERVED: "TTP_OBSERVED",
} as const;

/**
 * @public
 */
export type IndicatorType = (typeof IndicatorType)[keyof typeof IndicatorType];

/**
 * @public
 */
export interface ListIndicatorsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * <p>For the list of indicators of compromise that are generated by Detective investigations, see <a href="https://docs.aws.amazon.com/detective/latest/userguide/detective-investigation-about.html">Detective investigations</a>.</p>
   * @public
   */
  IndicatorType?: IndicatorType | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists the maximum number of indicators in a page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Reason = {
  AWS_THREAT_INTELLIGENCE: "AWS_THREAT_INTELLIGENCE",
} as const;

/**
 * @public
 */
export type Reason = (typeof Reason)[keyof typeof Reason];

/**
 * <p>Contains information on suspicious IP addresses identified as indicators of compromise. This indicator is derived from Amazon Web Services threat intelligence.</p>
 * @public
 */
export interface FlaggedIpAddressDetail {
  /**
   * <p>IP address of the suspicious entity.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>Details the reason the IP address was flagged as suspicious.</p>
   * @public
   */
  Reason?: Reason | undefined;
}

/**
 * <p>Contains information on unusual and impossible travel in an account.</p>
 * @public
 */
export interface ImpossibleTravelDetail {
  /**
   * <p>IP address where the resource was first used in the impossible travel.</p>
   * @public
   */
  StartingIpAddress?: string | undefined;

  /**
   * <p>IP address where the resource was last used in the impossible travel.</p>
   * @public
   */
  EndingIpAddress?: string | undefined;

  /**
   * <p>Location where the resource was first used in the impossible travel.</p>
   * @public
   */
  StartingLocation?: string | undefined;

  /**
   * <p>Location where the resource was last used in the impossible travel.</p>
   * @public
   */
  EndingLocation?: string | undefined;

  /**
   * <p>Returns the time difference between the first and last timestamp the resource was used.</p>
   * @public
   */
  HourlyTimeDelta?: number | undefined;
}

/**
 * <p>Details new Autonomous System Organizations (ASOs) used either at the resource or account level. </p>
 * @public
 */
export interface NewAsoDetail {
  /**
   * <p>Details about the new Autonomous System Organization (ASO).</p>
   * @public
   */
  Aso?: string | undefined;

  /**
   * <p>Checks if the Autonomous System Organization (ASO) is new for the entire account.</p>
   * @public
   */
  IsNewForEntireAccount?: boolean | undefined;
}

/**
 * <p>Details new geolocations used either at the resource or account level. For example, lists an observed geolocation that is an infrequent or unused location based on previous user activity.</p>
 * @public
 */
export interface NewGeolocationDetail {
  /**
   * <p>Location where the resource was accessed.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>IP address using which the resource was accessed.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>Checks if the geolocation is new for the entire account.</p>
   * @public
   */
  IsNewForEntireAccount?: boolean | undefined;
}

/**
 * <p>Details new user agents used either at the resource or account level.</p>
 * @public
 */
export interface NewUserAgentDetail {
  /**
   * <p>New user agent which accessed the resource.</p>
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * <p>Checks if the user agent is new for the entire account.</p>
   * @public
   */
  IsNewForEntireAccount?: boolean | undefined;
}

/**
 * <p>Details related activities associated with a potential security event. Lists all distinct categories of evidence that are connected to the resource or the finding group.</p>
 * @public
 */
export interface RelatedFindingDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the related finding.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of finding.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The IP address of the finding.</p>
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * <p>Details multiple activities as they related to a potential security event. Detective uses graph analysis technique that infers relationships between findings and entities, and groups them together as a finding group.</p>
 * @public
 */
export interface RelatedFindingGroupDetail {
  /**
   * <p>The unique identifier for the finding group.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Details tactics, techniques, and procedures (TTPs) used in a potential security event. Tactics are based on <a href="https://attack.mitre.org/matrices/enterprise/">MITRE ATT&CK Matrix for
 *          Enterprise</a>. </p>
 * @public
 */
export interface TTPsObservedDetail {
  /**
   * <p>The tactic used, identified by the investigation.</p>
   * @public
   */
  Tactic?: string | undefined;

  /**
   * <p>The technique used, identified by the investigation. </p>
   * @public
   */
  Technique?: string | undefined;

  /**
   * <p>The procedure used, identified by the investigation.</p>
   * @public
   */
  Procedure?: string | undefined;

  /**
   * <p>The IP address where the tactics, techniques, and procedure (TTP) was observed.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The name of the API where the tactics, techniques, and procedure (TTP) was observed.</p>
   * @public
   */
  APIName?: string | undefined;

  /**
   * <p>The total number of successful API requests.</p>
   * @public
   */
  APISuccessCount?: number | undefined;

  /**
   * <p>The total number of failed API requests.</p>
   * @public
   */
  APIFailureCount?: number | undefined;
}

/**
 * <p>Details about the indicators of compromise which are used to determine if a resource is involved in a security incident. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident. For the list of indicators of compromise that are generated by Detective investigations, see <a href="https://docs.aws.amazon.com/detective/latest/userguide/detective-investigation-about.html">Detective investigations</a>.</p>
 * @public
 */
export interface IndicatorDetail {
  /**
   * <p>Details about the indicator of compromise.</p>
   * @public
   */
  TTPsObservedDetail?: TTPsObservedDetail | undefined;

  /**
   * <p>Identifies unusual and impossible user activity for an account. </p>
   * @public
   */
  ImpossibleTravelDetail?: ImpossibleTravelDetail | undefined;

  /**
   * <p>Suspicious IP addresses that are flagged, which indicates critical or severe threats based on threat intelligence by Detective. This indicator is derived from Amazon Web Services threat intelligence.</p>
   * @public
   */
  FlaggedIpAddressDetail?: FlaggedIpAddressDetail | undefined;

  /**
   * <p>Contains details about the new geographic location.</p>
   * @public
   */
  NewGeolocationDetail?: NewGeolocationDetail | undefined;

  /**
   * <p>Contains details about the new Autonomous System Organization (ASO).</p>
   * @public
   */
  NewAsoDetail?: NewAsoDetail | undefined;

  /**
   * <p>Contains details about the new user agent.</p>
   * @public
   */
  NewUserAgentDetail?: NewUserAgentDetail | undefined;

  /**
   * <p>Contains details about related findings.</p>
   * @public
   */
  RelatedFindingDetail?: RelatedFindingDetail | undefined;

  /**
   * <p>Contains details about related finding groups.</p>
   * @public
   */
  RelatedFindingGroupDetail?: RelatedFindingGroupDetail | undefined;
}

/**
 * <p>Detective investigations triages indicators of compromises such as a finding
 *          and surfaces only the most critical and suspicious issues, so you can focus on high-level
 *          investigations. An <code>Indicator</code> lets you determine if an Amazon Web Services
 *          resource is involved in unusual activity that could indicate malicious behavior and its
 *          impact.</p>
 * @public
 */
export interface Indicator {
  /**
   * <p>The type of indicator. </p>
   * @public
   */
  IndicatorType?: IndicatorType | undefined;

  /**
   * <p>Details about the indicators of compromise that are used to determine if a resource is involved in a security incident. An indicator of compromise (IOC) is an artifact observed in or on a network, system, or environment that can (with a high level of confidence) identify malicious activity or a security incident.</p>
   * @public
   */
  IndicatorDetail?: IndicatorDetail | undefined;
}

/**
 * @public
 */
export interface ListIndicatorsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn?: string | undefined;

  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists the indicators of compromise.</p>
   * @public
   */
  Indicators?: Indicator[] | undefined;
}

/**
 * <p>Contains details on the time range used to filter data.</p>
 * @public
 */
export interface DateFilter {
  /**
   * <p>A timestamp representing the start of the time period from when data is filtered, including the start date.</p>
   * @public
   */
  StartInclusive: Date | undefined;

  /**
   * <p>A timestamp representing the end date of the time period until when data is filtered, including the end date.</p>
   * @public
   */
  EndInclusive: Date | undefined;
}

/**
 * <p>A string for filtering Detective investigations.</p>
 * @public
 */
export interface StringFilter {
  /**
   * <p>The string filter value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Details on the criteria used to define the filter for investigation results.</p>
 * @public
 */
export interface FilterCriteria {
  /**
   * <p>Filter the investigation results based on the severity.</p>
   * @public
   */
  Severity?: StringFilter | undefined;

  /**
   * <p>Filter the investigation results based on the status.</p>
   * @public
   */
  Status?: StringFilter | undefined;

  /**
   * <p>Filter the investigation results based on the state.</p>
   * @public
   */
  State?: StringFilter | undefined;

  /**
   * <p>Filter the investigation results based on the Amazon Resource Name (ARN) of the entity.</p>
   * @public
   */
  EntityArn?: StringFilter | undefined;

  /**
   * <p>Filter the investigation results based on when the investigation was created.</p>
   * @public
   */
  CreatedTime?: DateFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const Field = {
  CREATED_TIME: "CREATED_TIME",
  SEVERITY: "SEVERITY",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type Field = (typeof Field)[keyof typeof Field];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * <p>Details about the criteria used for sorting investigations.</p>
 * @public
 */
export interface SortCriteria {
  /**
   * <p>Represents the <code>Field</code> attribute to sort investigations.</p>
   * @public
   */
  Field?: Field | undefined;

  /**
   * <p>The order by which the sorted findings are displayed.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. Using an expired pagination token will return a Validation Exception error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists the maximum number of investigations in a page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the investigation results based on a criteria.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * <p>Sorts the investigation results based on a criteria.</p>
   * @public
   */
  SortCriteria?: SortCriteria | undefined;
}

/**
 * <p>Details about the investigation related to a potential security event identified by Detective.</p>
 * @public
 */
export interface InvestigationDetail {
  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * <p>Severity based on the likelihood and impact of the indicators of compromise discovered in the investigation.</p>
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * <p>Status based on the completion status of the investigation.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The current state of the investigation. An archived investigation indicates you have completed reviewing the investigation.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>The time stamp of the creation time of the investigation report. The value is an UTC ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the IAM user and IAM role.</p>
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * <p>Type of entity. For example, Amazon Web Services accounts, such as IAM user and role.</p>
   * @public
   */
  EntityType?: EntityType | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsResponse {
  /**
   * <p>Lists the summary of uncommon behavior or malicious activity which indicates a compromise.</p>
   * @public
   */
  InvestigationDetails?: InvestigationDetail[] | undefined;

  /**
   * <p>Lists if there are more results available. The value of nextToken is a unique pagination token for each page. Repeat the call using the returned token to retrieve the next page. Keep all other arguments unchanged.</p>
   *          <p>Each pagination token expires after 24 hours. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>For requests to retrieve the next page of results, the pagination token that was
   *          returned with the previous page of results. The initial request does not include a
   *          pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of behavior graph invitations to return in the response. The total
   *          must be less than the overall limit on the number of results to return, which is currently
   *          200.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>The list of behavior graphs for which the member account has open or accepted
   *          invitations.</p>
   * @public
   */
  Invitations?: MemberDetail[] | undefined;

  /**
   * <p>If there are more behavior graphs remaining in the results, then this is the pagination
   *          token to use to request the next page of behavior graphs.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>The ARN of the behavior graph for which to retrieve the list of member accounts.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>For requests to retrieve the next page of member account results, the pagination token
   *          that was returned with the previous page of results. The initial request does not include a
   *          pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of member accounts to include in the response. The total must be less
   *          than the overall limit on the number of results to return, which is currently 200.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>The list of member accounts in the behavior graph.</p>
   *          <p>For invited accounts, the results include member accounts that did not pass verification
   *          and member accounts that have not yet accepted the invitation to the behavior graph. The
   *          results do not include member accounts that were removed from the behavior graph.</p>
   *          <p>For the organization behavior graph, the results do not include organization accounts
   *          that the Detective administrator account has not enabled as member
   *          accounts.</p>
   * @public
   */
  MemberDetails?: MemberDetail[] | undefined;

  /**
   * <p>If there are more member accounts remaining in the results, then use this pagination
   *          token to request the next page of member accounts.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
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
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>The list of Detective administrator accounts.</p>
   * @public
   */
  Administrators?: Administrator[] | undefined;

  /**
   * <p>If there are more accounts remaining in the results, then this is the pagination token
   *          to use to request the next page of accounts.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the behavior graph for which to retrieve the tag values.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tag values that are assigned to the behavior graph. The request returns up to 50 tag
   *          values.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RejectInvitationRequest {
  /**
   * <p>The ARN of the behavior graph to reject the invitation to.</p>
   *          <p>The member account's current member status in the behavior graph must be
   *             <code>INVITED</code>.</p>
   * @public
   */
  GraphArn: string | undefined;
}

/**
 * @public
 */
export interface StartInvestigationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the IAM user and IAM role.</p>
   * @public
   */
  EntityArn: string | undefined;

  /**
   * <p>The data and time when the investigation began. The value is an UTC ISO8601 formatted string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  ScopeStartTime: Date | undefined;

  /**
   * <p>The data and time when the investigation ended. The value is an UTC ISO8601 formatted
   *          string. For example, <code>2021-08-18T16:35:56.284Z</code>.</p>
   * @public
   */
  ScopeEndTime: Date | undefined;
}

/**
 * @public
 */
export interface StartInvestigationResponse {
  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId?: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMemberRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The account ID of the member account to try to enable.</p>
   *          <p>The account must be an invited member account with a status of
   *             <code>ACCEPTED_BUT_DISABLED</code>. </p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the behavior graph to assign the tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you
   *          provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each
   *          tag value can contain up to 256 characters.</p>
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
   * <p>The ARN of the behavior graph to remove the tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags
   *          at a time.</p>
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
export interface UpdateDatasourcePackagesRequest {
  /**
   * <p>The ARN of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The data source package to start for the behavior graph.</p>
   * @public
   */
  DatasourcePackages: DatasourcePackage[] | undefined;
}

/**
 * @public
 */
export interface UpdateInvestigationStateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>The investigation ID of the investigation report.</p>
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * <p>The current state of the investigation. An archived investigation indicates you have completed reviewing the investigation.</p>
   * @public
   */
  State: State | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ARN of the organization behavior graph.</p>
   * @public
   */
  GraphArn: string | undefined;

  /**
   * <p>Indicates whether to automatically enable new organization accounts as member accounts
   *          in the organization behavior graph.</p>
   * @public
   */
  AutoEnable?: boolean | undefined;
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
