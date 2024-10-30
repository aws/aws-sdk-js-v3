// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { WorkMailServiceException as __BaseException } from "./WorkMailServiceException";

/**
 * @public
 * @enum
 */
export const AccessControlRuleEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type AccessControlRuleEffect = (typeof AccessControlRuleEffect)[keyof typeof AccessControlRuleEffect];

/**
 * <p>A rule that controls access to an WorkMail organization.</p>
 * @public
 */
export interface AccessControlRule {
  /**
   * <p>The rule name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The rule effect.</p>
   * @public
   */
  Effect?: AccessControlRuleEffect;

  /**
   * <p>The rule description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>IPv4 CIDR ranges to include in the rule.</p>
   * @public
   */
  IpRanges?: string[];

  /**
   * <p>IPv4 CIDR ranges to exclude from the rule.</p>
   * @public
   */
  NotIpRanges?: string[];

  /**
   * <p>Access protocol actions to include in the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   * @public
   */
  Actions?: string[];

  /**
   * <p>Access protocol actions to exclude from the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   * @public
   */
  NotActions?: string[];

  /**
   * <p>User IDs to include in the rule.</p>
   * @public
   */
  UserIds?: string[];

  /**
   * <p>User IDs to exclude from the rule.</p>
   * @public
   */
  NotUserIds?: string[];

  /**
   * <p>The date that the rule was created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date that the rule was modified.</p>
   * @public
   */
  DateModified?: Date;

  /**
   * <p>Impersonation role IDs to include in the rule.</p>
   * @public
   */
  ImpersonationRoleIds?: string[];

  /**
   * <p>Impersonation role IDs to exclude from the rule.</p>
   * @public
   */
  NotImpersonationRoleIds?: string[];
}

/**
 * @public
 * @enum
 */
export const AccessEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type AccessEffect = (typeof AccessEffect)[keyof typeof AccessEffect];

/**
 * @public
 */
export interface AssociateDelegateToResourceRequest {
  /**
   * <p>The organization under which the resource exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The resource for which members (users or groups) are associated.</p>
   *          <p>The identifier can accept <i>ResourceId</i>, <i>Resourcename</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Resource ID: r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Email address: resource@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Resource name: resource</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The member (user or group) to associate to the resource.</p>
   *          <p>The entity ID can accept <i>UserId or GroupID</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface AssociateDelegateToResourceResponse {}

/**
 * <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 * @public
 */
export class EntityNotFoundException extends __BaseException {
  readonly name: "EntityNotFoundException" = "EntityNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotFoundException, __BaseException>) {
    super({
      name: "EntityNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 * @public
 */
export class EntityStateException extends __BaseException {
  readonly name: "EntityStateException" = "EntityStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityStateException, __BaseException>) {
    super({
      name: "EntityStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the input parameters don't match the service's restrictions.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 * @public
 */
export class OrganizationNotFoundException extends __BaseException {
  readonly name: "OrganizationNotFoundException" = "OrganizationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotFoundException, __BaseException>) {
    super({
      name: "OrganizationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 * @public
 */
export class OrganizationStateException extends __BaseException {
  readonly name: "OrganizationStateException" = "OrganizationStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationStateException, __BaseException>) {
    super({
      name: "OrganizationStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateMemberToGroupRequest {
  /**
   * <p>The organization under which the group exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The group to which the member (user or group) is associated.</p>
   *          <p>The identifier can accept <i>GroupId</i>, <i>Groupname</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: group@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Group name: group</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The member (user or group) to associate to the group.</p>
   *          <p>The member ID can accept <i>UserID or GroupId</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Member: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: member@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Member name: member</p>
   *             </li>
   *          </ul>
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToGroupResponse {}

/**
 * <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 * @public
 */
export class DirectoryServiceAuthenticationFailedException extends __BaseException {
  readonly name: "DirectoryServiceAuthenticationFailedException" = "DirectoryServiceAuthenticationFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryServiceAuthenticationFailedException, __BaseException>) {
    super({
      name: "DirectoryServiceAuthenticationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryServiceAuthenticationFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 * @public
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name: "DirectoryUnavailableException" = "DirectoryUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryUnavailableException, __BaseException>) {
    super({
      name: "DirectoryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssumeImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization under which the impersonation role will be assumed.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The impersonation role ID to assume.</p>
   * @public
   */
  ImpersonationRoleId: string | undefined;
}

/**
 * @public
 */
export interface AssumeImpersonationRoleResponse {
  /**
   * <p>The authentication token for the impersonation role.</p>
   * @public
   */
  Token?: string;

  /**
   * <p>The authentication token's validity, in seconds.</p>
   * @public
   */
  ExpiresIn?: number;
}

/**
 * <p>The resource cannot be found.</p>
 * @public
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
 * <p>Describes an EWS based availability provider when returned from the service. It does not
 *          contain the password of the endpoint.</p>
 * @public
 */
export interface RedactedEwsAvailabilityProvider {
  /**
   * <p>The endpoint of the remote EWS server.</p>
   * @public
   */
  EwsEndpoint?: string;

  /**
   * <p>The username used to authenticate the remote EWS server.</p>
   * @public
   */
  EwsUsername?: string;
}

/**
 * <p>Describes a Lambda based availability provider.</p>
 * @public
 */
export interface LambdaAvailabilityProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda that acts as the availability provider.</p>
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AvailabilityProviderType = {
  EWS: "EWS",
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type AvailabilityProviderType = (typeof AvailabilityProviderType)[keyof typeof AvailabilityProviderType];

/**
 * <p>List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail
 *          organization.</p>
 * @public
 */
export interface AvailabilityConfiguration {
  /**
   * <p>Displays the domain to which the provider applies.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>Displays the provider type that applies to this domain.</p>
   * @public
   */
  ProviderType?: AvailabilityProviderType;

  /**
   * <p>If <code>ProviderType</code> is <code>EWS</code>, then this field contains
   *             <code>RedactedEwsAvailabilityProvider</code>. Otherwise, it is not required.</p>
   * @public
   */
  EwsProvider?: RedactedEwsAvailabilityProvider;

  /**
   * <p>If ProviderType is <code>LAMBDA</code> then this field contains
   *             <code>LambdaAvailabilityProvider</code>. Otherwise, it is not required.</p>
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider;

  /**
   * <p>The date and time at which the availability configuration was created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date and time at which the availability configuration was last modified.</p>
   * @public
   */
  DateModified?: Date;
}

/**
 * <p>At least one delegate must be associated to the resource to disable automatic replies
 *          from the resource.</p>
 * @public
 */
export interface BookingOptions {
  /**
   * <p>The resource's ability to automatically reply to requests. If disabled, delegates
   *          must be associated to the resource.</p>
   * @public
   */
  AutoAcceptRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any recurring requests.</p>
   * @public
   */
  AutoDeclineRecurringRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any conflicting requests.</p>
   * @public
   */
  AutoDeclineConflictingRequests?: boolean;
}

/**
 * @public
 */
export interface CancelMailboxExportJobRequest {
  /**
   * <p>The idempotency token for the client request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The job ID.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface CancelMailboxExportJobResponse {}

/**
 * @public
 */
export interface CreateAliasRequest {
  /**
   * <p>The organization under which the member (user or group) exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The member (user or group) to which this alias is added.</p>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The alias to add to the member set.</p>
   * @public
   */
  Alias: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasResponse {}

/**
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 * @public
 */
export class EmailAddressInUseException extends __BaseException {
  readonly name: "EmailAddressInUseException" = "EmailAddressInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmailAddressInUseException, __BaseException>) {
    super({
      name: "EmailAddressInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmailAddressInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request exceeds the limit of the resource.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The domain specified is not found in your organization.</p>
 * @public
 */
export class MailDomainNotFoundException extends __BaseException {
  readonly name: "MailDomainNotFoundException" = "MailDomainNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailDomainNotFoundException, __BaseException>) {
    super({
      name: "MailDomainNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailDomainNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 * @public
 */
export class MailDomainStateException extends __BaseException {
  readonly name: "MailDomainStateException" = "MailDomainStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailDomainStateException, __BaseException>) {
    super({
      name: "MailDomainStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailDomainStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Describes an EWS based availability provider. This is only used as input to the service.</p>
 * @public
 */
export interface EwsAvailabilityProvider {
  /**
   * <p>The endpoint of the remote EWS server.</p>
   * @public
   */
  EwsEndpoint: string | undefined;

  /**
   * <p>The username used to authenticate the remote EWS server.</p>
   * @public
   */
  EwsUsername: string | undefined;

  /**
   * <p>The password used to authenticate the remote EWS server.</p>
   * @public
   */
  EwsPassword: string | undefined;
}

/**
 * @public
 */
export interface CreateAvailabilityConfigurationRequest {
  /**
   * <p>An idempotent token that ensures that an API request is executed only once.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be created.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to which the provider applies.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>.</p>
   * @public
   */
  EwsProvider?: EwsAvailabilityProvider;

  /**
   * <p>Lambda availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>.</p>
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider;
}

/**
 * @public
 */
export interface CreateAvailabilityConfigurationResponse {}

/**
 * <p>The user, group, or resource name isn't unique in WorkMail.</p>
 * @public
 */
export class NameAvailabilityException extends __BaseException {
  readonly name: "NameAvailabilityException" = "NameAvailabilityException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameAvailabilityException, __BaseException>) {
    super({
      name: "NameAvailabilityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameAvailabilityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>The organization under which the group is to be created.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>If this parameter is enabled, the group will be hidden from the address book.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  GroupId?: string;
}

/**
 * <p>This user, group, or resource name is not allowed in WorkMail.</p>
 * @public
 */
export class ReservedNameException extends __BaseException {
  readonly name: "ReservedNameException" = "ReservedNameException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNameException, __BaseException>) {
    super({
      name: "ReservedNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateIdentityCenterApplicationRequest {
  /**
   * <p>
   *          The name of the IAM Identity Center application.
   *
   *
   *       </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the instance.
   *       </p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>
   *          The idempotency token associated with the request.
   *
   *
   *       </p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateIdentityCenterApplicationResponse {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the application.
   *       </p>
   * @public
   */
  ApplicationArn?: string;
}

/**
 * <p>The rules for the given impersonation role.</p>
 * @public
 */
export interface ImpersonationRule {
  /**
   * <p>The identifier of the rule.</p>
   * @public
   */
  ImpersonationRuleId: string | undefined;

  /**
   * <p>The rule name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The rule description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches the input. Allowed effect values are
   *             <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect: AccessEffect | undefined;

  /**
   * <p>A list of user IDs that match the rule.</p>
   * @public
   */
  TargetUsers?: string[];

  /**
   * <p>A list of user IDs that don't match the rule.</p>
   * @public
   */
  NotTargetUsers?: string[];
}

/**
 * @public
 * @enum
 */
export const ImpersonationRoleType = {
  FULL_ACCESS: "FULL_ACCESS",
  READ_ONLY: "READ_ONLY",
} as const;

/**
 * @public
 */
export type ImpersonationRoleType = (typeof ImpersonationRoleType)[keyof typeof ImpersonationRoleType];

/**
 * @public
 */
export interface CreateImpersonationRoleRequest {
  /**
   * <p>The idempotency token for the client request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The WorkMail organization to create the new impersonation role within.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the new impersonation role.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The impersonation role's type. The available impersonation role types are
   *             <code>READ_ONLY</code> or <code>FULL_ACCESS</code>.</p>
   * @public
   */
  Type: ImpersonationRoleType | undefined;

  /**
   * <p>The description of the new impersonation role.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The list of rules for the impersonation role.</p>
   * @public
   */
  Rules: ImpersonationRule[] | undefined;
}

/**
 * @public
 */
export interface CreateImpersonationRoleResponse {
  /**
   * <p>The new impersonation role ID.</p>
   * @public
   */
  ImpersonationRoleId?: string;
}

/**
 * @public
 * @enum
 */
export const MobileDeviceAccessRuleEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type MobileDeviceAccessRuleEffect =
  (typeof MobileDeviceAccessRuleEffect)[keyof typeof MobileDeviceAccessRuleEffect];

/**
 * @public
 */
export interface CreateMobileDeviceAccessRuleRequest {
  /**
   * <p>The WorkMail organization under which the rule will be created.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The idempotency token for the client request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The rule name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The rule description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect: MobileDeviceAccessRuleEffect | undefined;

  /**
   * <p>Device types that the rule will match.</p>
   * @public
   */
  DeviceTypes?: string[];

  /**
   * <p>Device types that the rule <b>will not</b> match. All other device types will match.</p>
   * @public
   */
  NotDeviceTypes?: string[];

  /**
   * <p>Device models that the rule will match.</p>
   * @public
   */
  DeviceModels?: string[];

  /**
   * <p>Device models that the rule <b>will not</b> match. All other device models will match.</p>
   * @public
   */
  NotDeviceModels?: string[];

  /**
   * <p>Device operating systems that the rule will match.</p>
   * @public
   */
  DeviceOperatingSystems?: string[];

  /**
   * <p>Device operating systems that the rule <b>will not</b> match. All other device operating systems will match.</p>
   * @public
   */
  NotDeviceOperatingSystems?: string[];

  /**
   * <p>Device user agents that the rule will match.</p>
   * @public
   */
  DeviceUserAgents?: string[];

  /**
   * <p>Device user agents that the rule <b>will not</b> match. All other device user agents will match.</p>
   * @public
   */
  NotDeviceUserAgents?: string[];
}

/**
 * @public
 */
export interface CreateMobileDeviceAccessRuleResponse {
  /**
   * <p>The identifier for the newly created mobile device access rule.</p>
   * @public
   */
  MobileDeviceAccessRuleId?: string;
}

/**
 * <p>The domain to associate with an WorkMail organization.</p>
 *          <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>WorkMail Administrator Guide</i>.</p>
 * @public
 */
export interface Domain {
  /**
   * <p>The fully qualified domain name.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.</p>
   * @public
   */
  HostedZoneId?: string;
}

/**
 * @public
 */
export interface CreateOrganizationRequest {
  /**
   * <p>The AWS Directory Service directory ID.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The organization alias.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The idempotency token associated with the request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The email domains to associate with the organization.</p>
   * @public
   */
  Domains?: Domain[];

  /**
   * <p>The Amazon Resource Name (ARN) of a customer managed key from AWS KMS.</p>
   * @public
   */
  KmsKeyArn?: string;

  /**
   * <p>When <code>true</code>, allows organization interoperability between WorkMail and
   *          Microsoft Exchange. If <code>true</code>, you must include a AD Connector directory ID in
   *          the request.</p>
   * @public
   */
  EnableInteroperability?: boolean;
}

/**
 * @public
 */
export interface CreateOrganizationResponse {
  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId?: string;
}

/**
 * <p>The directory is already in use by another WorkMail organization in the same account and Region.</p>
 * @public
 */
export class DirectoryInUseException extends __BaseException {
  readonly name: "DirectoryInUseException" = "DirectoryInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryInUseException, __BaseException>) {
    super({
      name: "DirectoryInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EQUIPMENT: "EQUIPMENT",
  ROOM: "ROOM",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface CreateResourceRequest {
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          created.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the new resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the new resource. The available types are <code>equipment</code> and
   *             <code>room</code>.</p>
   * @public
   */
  Type: ResourceType | undefined;

  /**
   * <p>Resource description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>If this parameter is enabled, the resource will be hidden from the address book.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;
}

/**
 * @public
 */
export interface CreateResourceResponse {
  /**
   * <p>The identifier of the new resource.</p>
   * @public
   */
  ResourceId?: string;
}

/**
 * @public
 * @enum
 */
export const UserRole = {
  REMOTE_USER: "REMOTE_USER",
  RESOURCE: "RESOURCE",
  SYSTEM_USER: "SYSTEM_USER",
  USER: "USER",
} as const;

/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The identifier of the organization for which the user is created.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The display name for the new user.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The password for the new user.</p>
   * @public
   */
  Password?: string;

  /**
   * <p>The role of the new user.</p>
   *          <p>You cannot pass <i>SYSTEM_USER</i> or <i>RESOURCE</i> role in a single request. When a user role is not selected, the default role of <i>USER</i> is selected.</p>
   * @public
   */
  Role?: UserRole;

  /**
   * <p>The first name of the new user.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>The last name of the new user. </p>
   * @public
   */
  LastName?: string;

  /**
   * <p>If this parameter is enabled, the user will be hidden from the address book.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;

  /**
   * <p>User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.</p>
   * @public
   */
  IdentityProviderUserId?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The identifier for the new user.</p>
   * @public
   */
  UserId?: string;
}

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 * @public
 */
export class InvalidPasswordException extends __BaseException {
  readonly name: "InvalidPasswordException" = "InvalidPasswordException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * <p>The name of the attribute, which is one of the values defined in the UserAttribute
 *          enumeration.</p>
 * @public
 */
export interface Delegate {
  /**
   * <p>The identifier for the user or group associated as the resource's delegate.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the delegate: user or group.</p>
   * @public
   */
  Type: MemberType | undefined;
}

/**
 * @public
 */
export interface DeleteAccessControlRuleRequest {
  /**
   * <p>The identifier for the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the access control rule.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessControlRuleResponse {}

/**
 * @public
 */
export interface DeleteAliasRequest {
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member (user or group) from which to have the aliases
   *          removed.</p>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The aliases to be removed from the user's set of aliases. Duplicate entries in the
   *          list are collapsed into single entries (the list is transformed into a set).</p>
   * @public
   */
  Alias: string | undefined;
}

/**
 * @public
 */
export interface DeleteAliasResponse {}

/**
 * @public
 */
export interface DeleteAvailabilityConfigurationRequest {
  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be deleted.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain for which the <code>AvailabilityConfiguration</code> will be deleted.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAvailabilityConfigurationResponse {}

/**
 * @public
 */
export interface DeleteEmailMonitoringConfigurationRequest {
  /**
   * <p>The ID of the organization from which the email monitoring configuration is deleted.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEmailMonitoringConfigurationResponse {}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The organization that contains the group.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the group to be deleted.</p>
   *          <p>The identifier can be the <i>GroupId</i>, or <i>Groupname</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Group name: group</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupResponse {}

/**
 * @public
 */
export interface DeleteIdentityCenterApplicationRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the application.
   *       </p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityCenterApplicationResponse {}

/**
 * @public
 */
export interface DeleteIdentityProviderConfigurationRequest {
  /**
   * <p>
   * The Organization ID. </p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderConfigurationResponse {}

/**
 * @public
 */
export interface DeleteImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization from which to delete the impersonation role.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The ID of the impersonation role to delete.</p>
   * @public
   */
  ImpersonationRoleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImpersonationRoleResponse {}

/**
 * @public
 */
export interface DeleteMailboxPermissionsRequest {
  /**
   * <p>The identifier of the organization under which the member (user or group)
   *          exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the entity that owns the mailbox.</p>
   *          <p>The identifier can be <i>UserId or Group Id</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the entity for which to delete granted permissions.</p>
   *          <p>The identifier can be <i>UserId, ResourceID, or Group Id</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Grantee ID: 12345678-1234-1234-1234-123456789012,r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: grantee@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Grantee name: grantee</p>
   *             </li>
   *          </ul>
   * @public
   */
  GranteeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMailboxPermissionsResponse {}

/**
 * @public
 */
export interface DeleteMobileDeviceAccessOverrideRequest {
  /**
   * <p>The WorkMail organization for which the access override will be deleted.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The WorkMail user for which you want to delete the override. Accepts the following types of user identities:</p>
   *          <ul>
   *             <li>
   *                <p>User ID:  <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Email address: <code>user@domain.tld</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>User name: <code>user</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The mobile device for which you delete the override. <code>DeviceId</code> is case insensitive.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMobileDeviceAccessOverrideResponse {}

/**
 * @public
 */
export interface DeleteMobileDeviceAccessRuleRequest {
  /**
   * <p>The WorkMail organization under which the rule will be deleted.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the rule to be deleted.</p>
   * @public
   */
  MobileDeviceAccessRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMobileDeviceAccessRuleResponse {}

/**
 * @public
 */
export interface DeleteOrganizationRequest {
  /**
   * <p>The idempotency token associated with the request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>If true, deletes the AWS Directory Service directory associated with the organization.</p>
   * @public
   */
  DeleteDirectory: boolean | undefined;

  /**
   * <p>Deletes a WorkMail organization even if the organization has enabled users.</p>
   * @public
   */
  ForceDelete?: boolean;

  /**
   * <p>Deletes IAM Identity Center application for WorkMail. This action does not affect authentication settings for any organization.</p>
   * @public
   */
  DeleteIdentityCenterApplication?: boolean;
}

/**
 * @public
 */
export interface DeleteOrganizationResponse {
  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId?: string;

  /**
   * <p>The state of the organization.</p>
   * @public
   */
  State?: string;
}

/**
 * @public
 */
export interface DeletePersonalAccessTokenRequest {
  /**
   * <p>
   *          The Organization ID. </p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>
   *         The Personal Access Token ID.</p>
   * @public
   */
  PersonalAccessTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeletePersonalAccessTokenResponse {}

/**
 * @public
 */
export interface DeleteResourceRequest {
  /**
   * <p>The identifier associated with the organization from which the resource is
   *          deleted.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be deleted.</p>
   *          <p>The identifier can accept <i>ResourceId</i>, or <i>Resourcename</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Resource ID: r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Resource name: resource</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceResponse {}

/**
 * @public
 */
export interface DeleteRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The retention policy ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetentionPolicyResponse {}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The organization that contains the user to be deleted.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user to be deleted.</p>
   *          <p>The identifier can be the <i>UserId</i> or <i>Username</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>User name: user</p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {}

/**
 * @public
 */
export interface DeregisterFromWorkMailRequest {
  /**
   * <p>The identifier for the organization under which the WorkMail entity exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member to be updated.</p>
   *          <p>The identifier can be <i>UserId, ResourceId, or Group Id</i>, <i>Username, Resourcename, or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterFromWorkMailResponse {}

/**
 * @public
 */
export interface DeregisterMailDomainRequest {
  /**
   * <p>The WorkMail organization for which the domain will be deregistered.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to deregister in WorkMail and SES.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeregisterMailDomainResponse {}

/**
 * <p>You SES configuration has customizations that WorkMail cannot save. The error message lists the invalid setting. For examples of invalid settings, refer to
 *          <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html">CreateReceiptRule</a>.</p>
 * @public
 */
export class InvalidCustomSesConfigurationException extends __BaseException {
  readonly name: "InvalidCustomSesConfigurationException" = "InvalidCustomSesConfigurationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCustomSesConfigurationException, __BaseException>) {
    super({
      name: "InvalidCustomSesConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCustomSesConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The domain you're trying to change is in use by another user or organization in your account. See the error message for details.</p>
 * @public
 */
export class MailDomainInUseException extends __BaseException {
  readonly name: "MailDomainInUseException" = "MailDomainInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailDomainInUseException, __BaseException>) {
    super({
      name: "MailDomainInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailDomainInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeEmailMonitoringConfigurationRequest {
  /**
   * <p>The ID of the organization for which the email monitoring configuration is described.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEmailMonitoringConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.</p>
   * @public
   */
  LogGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * <p>The identifier for the organization under which the entity exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The email under which the entity exists.</p>
   * @public
   */
  Email: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  GROUP: "GROUP",
  RESOURCE: "RESOURCE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * <p>The entity ID under which the entity exists.</p>
   * @public
   */
  EntityId?: string;

  /**
   * <p>Username, GroupName, or ResourceName based on entity type.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Entity type.</p>
   * @public
   */
  Type?: EntityType;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group to be described.</p>
   *          <p>The identifier can accept <i>GroupId</i>, <i>Groupname</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: group@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Group name: group</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityState = {
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EntityState = (typeof EntityState)[keyof typeof EntityState];

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * <p>The identifier of the described group.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>The name of the described group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The email of the described group.</p>
   * @public
   */
  Email?: string;

  /**
   * <p>The state of the user: enabled (registered to WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time
   *          format.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time
   *          format.</p>
   * @public
   */
  DisabledDate?: Date;

  /**
   * <p>If the value is set to <i>true</i>, the group is hidden from the address book.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationRequest {
  /**
   * <p>
   *          The Organization ID. </p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IdentityProviderAuthenticationMode = {
  IDENTITY_PROVIDER_AND_DIRECTORY: "IDENTITY_PROVIDER_AND_DIRECTORY",
  IDENTITY_PROVIDER_ONLY: "IDENTITY_PROVIDER_ONLY",
} as const;

/**
 * @public
 */
export type IdentityProviderAuthenticationMode =
  (typeof IdentityProviderAuthenticationMode)[keyof typeof IdentityProviderAuthenticationMode];

/**
 * <p>
 *          The IAM Identity Center configuration.
 *       </p>
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the  of IAM Identity Center instance. Must be in the same AWS account and region as WorkMail organization.</p>
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of IAMIdentity Center Application for WorkMail. Must be created by the WorkMail API, see CreateIdentityCenterApplication.</p>
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PersonalAccessTokenConfigurationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type PersonalAccessTokenConfigurationStatus =
  (typeof PersonalAccessTokenConfigurationStatus)[keyof typeof PersonalAccessTokenConfigurationStatus];

/**
 * <p>
 *          Displays the Personal Access Token status.
 *       </p>
 * @public
 */
export interface PersonalAccessTokenConfiguration {
  /**
   * <p>
   *          The status of the Personal Access Token allowed for the organization.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Active</i> - Mailbox users can login to the web application and choose <i>Settings</i> to see the new <i>Personal Access Tokens</i> page to
   *             create and delete the Personal Access Tokens. Mailbox users can use the Personal Access Tokens to set up mailbox connection from desktop or mobile email clients.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Inactive</i> - Personal Access Tokens are disabled for your organization. Mailbox users can’t create, list, or delete Personal Access Tokens and can’t use them to connect to
   *             their mailboxes from desktop or mobile email clients.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: PersonalAccessTokenConfigurationStatus | undefined;

  /**
   * <p>
   *         The validity of the Personal Access Token status in days.
   *       </p>
   * @public
   */
  LifetimeInDays?: number;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationResponse {
  /**
   * <p>
   * The authentication mode used in WorkMail.</p>
   * @public
   */
  AuthenticationMode?: IdentityProviderAuthenticationMode;

  /**
   * <p>
   *          The details of the IAM Identity Center configuration.
   *       </p>
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration;

  /**
   * <p>
   *          The details of the Personal Access Token configuration.
   *       </p>
   * @public
   */
  PersonalAccessTokenConfiguration?: PersonalAccessTokenConfiguration;
}

/**
 * @public
 */
export interface DescribeInboundDmarcSettingsRequest {
  /**
   * <p>Lists the ID of the given organization.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeInboundDmarcSettingsResponse {
  /**
   * <p>Lists the enforcement setting of the applied policy.</p>
   * @public
   */
  Enforced?: boolean;
}

/**
 * @public
 */
export interface DescribeMailboxExportJobRequest {
  /**
   * <p>The mailbox export job ID.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MailboxExportJobState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type MailboxExportJobState = (typeof MailboxExportJobState)[keyof typeof MailboxExportJobState];

/**
 * @public
 */
export interface DescribeMailboxExportJobResponse {
  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   * @public
   */
  EntityId?: string;

  /**
   * <p>The mailbox export job description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple
   *          Storage Service (Amazon S3) bucket.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
   *          key that encrypts the exported mailbox content.</p>
   * @public
   */
  KmsKeyArn?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  S3BucketName?: string;

  /**
   * <p>The S3 bucket prefix.</p>
   * @public
   */
  S3Prefix?: string;

  /**
   * <p>The path to the S3 bucket and file that the mailbox export job is exporting
   *          to.</p>
   * @public
   */
  S3Path?: string;

  /**
   * <p>The estimated progress of the mailbox export job, in percentage points.</p>
   * @public
   */
  EstimatedProgress?: number;

  /**
   * <p>The state of the mailbox export job.</p>
   * @public
   */
  State?: MailboxExportJobState;

  /**
   * <p>Error information for failed mailbox export jobs.</p>
   * @public
   */
  ErrorInfo?: string;

  /**
   * <p>The mailbox export job start timestamp.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The mailbox export job end timestamp.</p>
   * @public
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface DescribeOrganizationRequest {
  /**
   * <p>The identifier for the organization to be described.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResponse {
  /**
   * <p>The identifier of an organization.</p>
   * @public
   */
  OrganizationId?: string;

  /**
   * <p>The alias for an organization.</p>
   * @public
   */
  Alias?: string;

  /**
   * <p>The state of an organization.</p>
   * @public
   */
  State?: string;

  /**
   * <p>The identifier for the directory associated with an WorkMail organization.</p>
   * @public
   */
  DirectoryId?: string;

  /**
   * <p>The type of directory associated with the WorkMail organization.</p>
   * @public
   */
  DirectoryType?: string;

  /**
   * <p>The default mail domain associated with the organization.</p>
   * @public
   */
  DefaultMailDomain?: string;

  /**
   * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch
   *          time format.</p>
   * @public
   */
  CompletedDate?: Date;

  /**
   * <p>(Optional) The error message indicating if unexpected behavior was encountered with
   *          regards to the organization.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization.</p>
   * @public
   */
  ARN?: string;

  /**
   * <p>The user ID of the migration admin if migration is enabled for the organization.</p>
   * @public
   */
  MigrationAdmin?: string;

  /**
   * <p>Indicates if interoperability is enabled for this organization.</p>
   * @public
   */
  InteroperabilityEnabled?: boolean;
}

/**
 * @public
 */
export interface DescribeResourceRequest {
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          described.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be described.</p>
   *          <p>The identifier can accept <i>ResourceId</i>, <i>Resourcename</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Resource ID: r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Email address: resource@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Resource name: resource</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceResponse {
  /**
   * <p>The identifier of the described resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The email of the described resource.</p>
   * @public
   */
  Email?: string;

  /**
   * <p>The name of the described resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of the described resource.</p>
   * @public
   */
  Type?: ResourceType;

  /**
   * <p>The booking options for the described resource.</p>
   * @public
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The state of the resource: enabled (registered to WorkMail), disabled (deregistered
   *          or never registered to WorkMail), or deleted.</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time
   *          format.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time
   *          format.</p>
   * @public
   */
  DisabledDate?: Date;

  /**
   * <p>Description of the resource.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>If enabled, the resource is hidden from the global address list.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user to be described.</p>
   *          <p>The identifier can be the <i>UserId</i>, <i>Username</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: user@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>User name: user</p>
   *             </li>
   *          </ul>
   *          <p></p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>The identifier for the described user.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The name for the user.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The email of the user.</p>
   * @public
   */
  Email?: string;

  /**
   * <p>The display name of the user.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The state of a user: enabled (registered to WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is
   *          enabled, resources are imported into WorkMail as users. Because different WorkMail
   *          organizations rely on different directory types, administrators can distinguish between an
   *          unregistered user (account is disabled and has a user role) and the directory
   *          administrators. The values are USER, RESOURCE, SYSTEM_USER, and REMOTE_USER.</p>
   * @public
   */
  UserRole?: UserRole;

  /**
   * <p>The date and time at which the user was enabled for WorkMailusage, in UNIX epoch
   *          time format.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time at which the user was disabled for WorkMail usage, in UNIX epoch
   *          time format.</p>
   * @public
   */
  DisabledDate?: Date;

  /**
   * <p>The date when the mailbox was created for the user.</p>
   * @public
   */
  MailboxProvisionedDate?: Date;

  /**
   * <p>The date when the mailbox was removed for the user.</p>
   * @public
   */
  MailboxDeprovisionedDate?: Date;

  /**
   * <p>First name of the user.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>Last name of the user.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>If enabled, the user is hidden from the global address list.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;

  /**
   * <p>Initials of the user.</p>
   * @public
   */
  Initials?: string;

  /**
   * <p>User's contact number.</p>
   * @public
   */
  Telephone?: string;

  /**
   * <p>Street where the user is located.</p>
   * @public
   */
  Street?: string;

  /**
   * <p>Job title of the user.</p>
   * @public
   */
  JobTitle?: string;

  /**
   * <p>City where the user is located.</p>
   * @public
   */
  City?: string;

  /**
   * <p>Company of the user.</p>
   * @public
   */
  Company?: string;

  /**
   * <p>Zip code of the user.</p>
   * @public
   */
  ZipCode?: string;

  /**
   * <p>Department of the user.</p>
   * @public
   */
  Department?: string;

  /**
   * <p>Country where the user is located.</p>
   * @public
   */
  Country?: string;

  /**
   * <p>Office where the user is located.</p>
   * @public
   */
  Office?: string;

  /**
   * <p>User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.</p>
   * @public
   */
  IdentityProviderUserId?: string;

  /**
   * <p>
   *          Identity Store ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *       </p>
   * @public
   */
  IdentityProviderIdentityStoreId?: string;
}

/**
 * @public
 */
export interface DisassociateDelegateFromResourceRequest {
  /**
   * <p>The identifier for the organization under which the resource exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource from which delegates' set members are removed.
   *       </p>
   *          <p>The identifier can accept <i>ResourceId</i>, <i>Resourcename</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Resource ID: r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Email address: resource@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Resource name: resource</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The identifier for the member (user, group) to be removed from the resource's
   *          delegates.</p>
   *          <p>The entity ID can accept <i>UserId or GroupID</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDelegateFromResourceResponse {}

/**
 * @public
 */
export interface DisassociateMemberFromGroupRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group from which members are removed.</p>
   *          <p>The identifier can accept <i>GroupId</i>, <i>Groupname</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: group@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Group name: group</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the member to be removed from the group.</p>
   *          <p>The member ID can accept <i>UserID or GroupId</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Member ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: member@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Member name: member</p>
   *             </li>
   *          </ul>
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromGroupResponse {}

/**
 * <p>A DNS record uploaded to your DNS provider.</p>
 * @public
 */
export interface DnsRecord {
  /**
   * <p>The RFC 1035 record type. Possible values: <code>CNAME</code>, <code>A</code>, <code>MX</code>.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The DNS hostname.- For example, <code>domain.example.com</code>.</p>
   * @public
   */
  Hostname?: string;

  /**
   * <p>The value returned by the DNS for a query to that hostname and record type.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const DnsRecordVerificationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  VERIFIED: "VERIFIED",
} as const;

/**
 * @public
 */
export type DnsRecordVerificationStatus =
  (typeof DnsRecordVerificationStatus)[keyof typeof DnsRecordVerificationStatus];

/**
 * <p>The user, group, or resource that you're trying to register is already
 *          registered.</p>
 * @public
 */
export class EntityAlreadyRegisteredException extends __BaseException {
  readonly name: "EntityAlreadyRegisteredException" = "EntityAlreadyRegisteredException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyRegisteredException, __BaseException>) {
    super({
      name: "EntityAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RetentionAction = {
  DELETE: "DELETE",
  NONE: "NONE",
  PERMANENTLY_DELETE: "PERMANENTLY_DELETE",
} as const;

/**
 * @public
 */
export type RetentionAction = (typeof RetentionAction)[keyof typeof RetentionAction];

/**
 * @public
 * @enum
 */
export const FolderName = {
  DELETED_ITEMS: "DELETED_ITEMS",
  DRAFTS: "DRAFTS",
  INBOX: "INBOX",
  JUNK_EMAIL: "JUNK_EMAIL",
  SENT_ITEMS: "SENT_ITEMS",
} as const;

/**
 * @public
 */
export type FolderName = (typeof FolderName)[keyof typeof FolderName];

/**
 * <p>The configuration applied to an organization's folders by its retention
 *          policy.</p>
 * @public
 */
export interface FolderConfiguration {
  /**
   * <p>The folder name.</p>
   * @public
   */
  Name: FolderName | undefined;

  /**
   * <p>The action to take on the folder contents at the end of the folder configuration
   *          period.</p>
   * @public
   */
  Action: RetentionAction | undefined;

  /**
   * <p>The number of days for which the folder-configuration action applies.</p>
   * @public
   */
  Period?: number;
}

/**
 * @public
 */
export interface GetAccessControlEffectRequest {
  /**
   * <p>The identifier for the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The IPv4 address.</p>
   * @public
   */
  IpAddress: string | undefined;

  /**
   * <p>The access protocol action. Valid values include <code>ActiveSync</code>,
   *             <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>,
   *             <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   * @public
   */
  Action: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The impersonation role ID.</p>
   * @public
   */
  ImpersonationRoleId?: string;
}

/**
 * @public
 */
export interface GetAccessControlEffectResponse {
  /**
   * <p>The rule effect.</p>
   * @public
   */
  Effect?: AccessControlRuleEffect;

  /**
   * <p>The rules that match the given parameters, resulting in an effect.</p>
   * @public
   */
  MatchedRules?: string[];
}

/**
 * @public
 */
export interface GetDefaultRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultRetentionPolicyResponse {
  /**
   * <p>The retention policy ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The retention policy name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The retention policy description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The retention policy folder configurations.</p>
   * @public
   */
  FolderConfigurations?: FolderConfiguration[];
}

/**
 * @public
 */
export interface GetImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization from which to retrieve the impersonation role.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The impersonation role ID to retrieve.</p>
   * @public
   */
  ImpersonationRoleId: string | undefined;
}

/**
 * @public
 */
export interface GetImpersonationRoleResponse {
  /**
   * <p>The impersonation role ID.</p>
   * @public
   */
  ImpersonationRoleId?: string;

  /**
   * <p>The impersonation role name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The impersonation role type.</p>
   * @public
   */
  Type?: ImpersonationRoleType;

  /**
   * <p>The impersonation role description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The list of rules for the given impersonation role.</p>
   * @public
   */
  Rules?: ImpersonationRule[];

  /**
   * <p>The date when the impersonation role was created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date when the impersonation role was last modified.</p>
   * @public
   */
  DateModified?: Date;
}

/**
 * @public
 */
export interface GetImpersonationRoleEffectRequest {
  /**
   * <p>The WorkMail organization where the impersonation role is defined.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The impersonation role ID to test.</p>
   * @public
   */
  ImpersonationRoleId: string | undefined;

  /**
   * <p>The WorkMail organization user chosen to test the impersonation role. The following identity
   *          formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Email address: <code>user@domain.tld</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>User name: <code>user</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetUser: string | undefined;
}

/**
 * <p>The impersonation rule that matched the input.</p>
 * @public
 */
export interface ImpersonationMatchedRule {
  /**
   * <p>The ID of the rule that matched the input</p>
   * @public
   */
  ImpersonationRuleId?: string;

  /**
   * <p>The name of the rule that matched the input.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetImpersonationRoleEffectResponse {
  /**
   * <p>The impersonation role type.</p>
   * @public
   */
  Type?: ImpersonationRoleType;

  /**
   * <p>
   *             <code></code>Effect of the impersonation role on the target user based on its rules. Available
   *          effects are <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect?: AccessEffect;

  /**
   * <p>A list of the rules that match the input and produce the configured effect.</p>
   * @public
   */
  MatchedRules?: ImpersonationMatchedRule[];
}

/**
 * @public
 */
export interface GetMailboxDetailsRequest {
  /**
   * <p>The identifier for the organization that contains the user whose mailbox details are
   *          being requested.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user whose mailbox details are being requested.</p>
   *          <p>The identifier can be the <i>UserId</i>, <i>Username</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: user@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>User name: user</p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface GetMailboxDetailsResponse {
  /**
   * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
   * @public
   */
  MailboxQuota?: number;

  /**
   * <p>The current mailbox size, in MB, for the specified user.</p>
   * @public
   */
  MailboxSize?: number;
}

/**
 * @public
 */
export interface GetMailDomainRequest {
  /**
   * <p>The WorkMail organization for which the domain is retrieved.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain from which you want to retrieve details.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetMailDomainResponse {
  /**
   * <p>A list of the DNS records that WorkMail recommends adding in your DNS provider for the best user experience. The records configure your domain with DMARC, SPF, DKIM, and direct incoming
   *          email traffic to SES. See admin guide for more details.</p>
   * @public
   */
  Records?: DnsRecord[];

  /**
   * <p>Specifies whether the domain is a test domain provided by WorkMail, or a custom domain.</p>
   * @public
   */
  IsTestDomain?: boolean;

  /**
   * <p>Specifies whether the domain is the default domain for your organization.</p>
   * @public
   */
  IsDefault?: boolean;

  /**
   * <p> Indicates the status of the domain ownership verification.</p>
   * @public
   */
  OwnershipVerificationStatus?: DnsRecordVerificationStatus;

  /**
   * <p>Indicates the status of a DKIM verification.</p>
   * @public
   */
  DkimVerificationStatus?: DnsRecordVerificationStatus;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessEffectRequest {
  /**
   * <p>The WorkMail organization to simulate the access effect for.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>Device type the simulated user will report.</p>
   * @public
   */
  DeviceType?: string;

  /**
   * <p>Device model the simulated user will report.</p>
   * @public
   */
  DeviceModel?: string;

  /**
   * <p>Device operating system the simulated user will report.</p>
   * @public
   */
  DeviceOperatingSystem?: string;

  /**
   * <p>Device user agent the simulated user will report.</p>
   * @public
   */
  DeviceUserAgent?: string;
}

/**
 * <p>The rule that a simulated user matches.</p>
 * @public
 */
export interface MobileDeviceAccessMatchedRule {
  /**
   * <p>Identifier of the rule that a simulated user matches.</p>
   * @public
   */
  MobileDeviceAccessRuleId?: string;

  /**
   * <p>Name of a rule that a simulated user matches.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessEffectResponse {
  /**
   * <p>The effect of the simulated access, <code>ALLOW</code> or <code>DENY</code>, after evaluating mobile device access rules in the WorkMail organization for the simulated
   *          user parameters.</p>
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect;

  /**
   * <p>A list of the rules which matched the simulated user input and produced the effect.</p>
   * @public
   */
  MatchedRules?: MobileDeviceAccessMatchedRule[];
}

/**
 * @public
 */
export interface GetMobileDeviceAccessOverrideRequest {
  /**
   * <p>The WorkMail organization to which you want to apply the override.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>Identifies the WorkMail user for the override. Accepts the following types of user identities: </p>
   *          <ul>
   *             <li>
   *                <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Email address: <code>user@domain.tld</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>User name: <code>user</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The mobile device to which the override applies. <code>DeviceId</code> is case insensitive.</p>
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessOverrideResponse {
  /**
   * <p>The WorkMail user to which the access override applies.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The device to which the access override applies.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The effect of the override, <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect;

  /**
   * <p>A description of the override.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date the override was first created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date the description was last modified.</p>
   * @public
   */
  DateModified?: Date;
}

/**
 * @public
 */
export interface GetPersonalAccessTokenMetadataRequest {
  /**
   * <p>
   *          The Organization ID. </p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>
   *          The Personal Access Token ID.</p>
   * @public
   */
  PersonalAccessTokenId: string | undefined;
}

/**
 * @public
 */
export interface GetPersonalAccessTokenMetadataResponse {
  /**
   * <p>
   *          The Personal Access Token ID.</p>
   * @public
   */
  PersonalAccessTokenId?: string;

  /**
   * <p>
   *          The WorkMail User ID.
   *       </p>
   * @public
   */
  UserId?: string;

  /**
   * <p>
   *          The Personal Access Token name.
   *       </p>
   * @public
   */
  Name?: string;

  /**
   * <p>
   *          The date when the Personal Access Token ID was created.
   *       </p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>
   *          The date when the Personal Access Token ID was last used.
   *       </p>
   * @public
   */
  DateLastUsed?: Date;

  /**
   * <p>
   *          The time when the Personal Access Token ID will expire.
   *       </p>
   * @public
   */
  ExpiresTime?: Date;

  /**
   * <p>
   *          Lists all the Personal Access Token permissions for a mailbox.
   *       </p>
   * @public
   */
  Scopes?: string[];
}

/**
 * <p>The representation of an WorkMail group.</p>
 * @public
 */
export interface Group {
  /**
   * <p>The identifier of the group.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The email of the group.</p>
   * @public
   */
  Email?: string;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>The date indicating when the group was enabled for WorkMail use.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the group was disabled from WorkMail use.</p>
   * @public
   */
  DisabledDate?: Date;
}

/**
 * <p>The identifier that contains the Group ID and name of a group.</p>
 * @public
 */
export interface GroupIdentifier {
  /**
   * <p>Group ID that matched the group.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>Group name that matched the group.</p>
   * @public
   */
  GroupName?: string;
}

/**
 * <p>An impersonation role for the given WorkMail organization.</p>
 * @public
 */
export interface ImpersonationRole {
  /**
   * <p>The identifier of the impersonation role.</p>
   * @public
   */
  ImpersonationRoleId?: string;

  /**
   * <p>The impersonation role name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The impersonation role type.</p>
   * @public
   */
  Type?: ImpersonationRoleType;

  /**
   * <p>The date when the impersonation role was created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date when the impersonation role was last modified.</p>
   * @public
   */
  DateModified?: Date;
}

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
 * @public
 */
export class InvalidConfigurationException extends __BaseException {
  readonly name: "InvalidConfigurationException" = "InvalidConfigurationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationException, __BaseException>) {
    super({
      name: "InvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The details of a mailbox export job, including the user or resource ID associated
 *          with the mailbox and the S3 bucket that the mailbox contents are exported to.</p>
 * @public
 */
export interface MailboxExportJob {
  /**
   * <p>The identifier of the mailbox export job.</p>
   * @public
   */
  JobId?: string;

  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   * @public
   */
  EntityId?: string;

  /**
   * <p>The mailbox export job description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  S3BucketName?: string;

  /**
   * <p>The path to the S3 bucket and file that the mailbox export job exports to.</p>
   * @public
   */
  S3Path?: string;

  /**
   * <p>The estimated progress of the mailbox export job, in percentage points.</p>
   * @public
   */
  EstimatedProgress?: number;

  /**
   * <p>The state of the mailbox export job.</p>
   * @public
   */
  State?: MailboxExportJobState;

  /**
   * <p>The mailbox export job start timestamp.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The mailbox export job end timestamp.</p>
   * @public
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface ListAccessControlRulesRequest {
  /**
   * <p>The identifier for the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface ListAccessControlRulesResponse {
  /**
   * <p>The access control rules.</p>
   * @public
   */
  Rules?: AccessControlRule[];
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * <p>The identifier for the organization under which the entity exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the entity for which to list the aliases.</p>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * <p>The entity's paginated aliases.</p>
   * @public
   */
  Aliases?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailabilityConfigurationsRequest {
  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code>'s will be
   *          listed.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not require a token.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailabilityConfigurationsResponse {
  /**
   * <p>The list of <code>AvailabilityConfiguration</code>'s that exist for the specified WorkMail organization.</p>
   * @public
   */
  AvailabilityConfigurations?: AvailabilityConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no further results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGroupMembersRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group to which the members (users or groups) are
   *          associated.</p>
   *          <p>The identifier can accept <i>GroupId</i>, <i>Groupname</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: group@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Group name: group</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p> The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>The representation of a user or group.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The identifier of the member.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A member can be a user or group.</p>
   * @public
   */
  Type?: MemberType;

  /**
   * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>The date indicating when the member was enabled for WorkMail use.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the member was disabled from WorkMail use.</p>
   * @public
   */
  DisabledDate?: Date;
}

/**
 * @public
 */
export interface ListGroupMembersResponse {
  /**
   * <p>The members associated to the group.</p>
   * @public
   */
  Members?: Member[];

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p> Filtering options for <i>ListGroups</i> operation. This is only used as input to Operation.</p>
 * @public
 */
export interface ListGroupsFilters {
  /**
   * <p>Filters only groups with the provided name prefix.</p>
   * @public
   */
  NamePrefix?: string;

  /**
   * <p>Filters only groups with the provided primary email prefix.</p>
   * @public
   */
  PrimaryEmailPrefix?: string;

  /**
   * <p>Filters only groups with the provided state.</p>
   * @public
   */
  State?: EntityState;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The identifier for the organization under which the groups exist.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Limit the search results based on the filter criteria. Only one filter per request is supported.</p>
   * @public
   */
  Filters?: ListGroupsFilters;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>The overview of groups for an organization.</p>
   * @public
   */
  Groups?: Group[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p> Filtering options for <i>ListGroupsForEntity</i> operation. This is only used as input to Operation.</p>
 * @public
 */
export interface ListGroupsForEntityFilters {
  /**
   * <p>Filters only group names that start with the provided name prefix.</p>
   * @public
   */
  GroupNamePrefix?: string;
}

/**
 * @public
 */
export interface ListGroupsForEntityRequest {
  /**
   * <p>The identifier for the organization under which the entity exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the entity.</p>
   *          <p>The entity ID can accept <i>UserId or GroupID</i>, <i>Username or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>Limit the search results based on the filter criteria.</p>
   * @public
   */
  Filters?: ListGroupsForEntityFilters;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListGroupsForEntityResponse {
  /**
   * <p>The overview of groups in an organization.</p>
   * @public
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImpersonationRolesRequest {
  /**
   * <p>The WorkMail organization to which the listed impersonation roles belong.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token used to retrieve the next page of results. The first call doesn't require a
   *          token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results returned in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListImpersonationRolesResponse {
  /**
   * <p>The list of impersonation roles under the given WorkMail organization.</p>
   * @public
   */
  Roles?: ImpersonationRole[];

  /**
   * <p>The token to retrieve the next page of results. The value is <code>null</code> when
   *          there are no results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMailboxExportJobsRequest {
  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListMailboxExportJobsResponse {
  /**
   * <p>The mailbox export job details.</p>
   * @public
   */
  Jobs?: MailboxExportJob[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMailboxPermissionsRequest {
  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user, or resource for which to list mailbox
   *          permissions.</p>
   *          <p>The entity ID can accept <i>UserId or ResourceId</i>, <i>Username or Resourcename</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, or r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const PermissionType = {
  FULL_ACCESS: "FULL_ACCESS",
  SEND_AS: "SEND_AS",
  SEND_ON_BEHALF: "SEND_ON_BEHALF",
} as const;

/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * <p>Permission granted to a user, group, or resource to access a certain aspect of
 *          another user, group, or resource mailbox.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>The identifier of the user, group, or resource to which the permissions are
   *          granted.</p>
   * @public
   */
  GranteeId: string | undefined;

  /**
   * <p>The type of user, group, or resource referred to in GranteeId.</p>
   * @public
   */
  GranteeType: MemberType | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
   *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
   *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
   *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
   *          access to the mailbox, irrespective of other folder-level permissions set on the
   *          mailbox.</p>
   * @public
   */
  PermissionValues: PermissionType[] | undefined;
}

/**
 * @public
 */
export interface ListMailboxPermissionsResponse {
  /**
   * <p>One page of the user, group, or resource mailbox permissions.</p>
   * @public
   */
  Permissions?: Permission[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMailDomainsRequest {
  /**
   * <p>The WorkMail organization for which to list domains.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not require a token.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The data for a given domain.</p>
 * @public
 */
export interface MailDomainSummary {
  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>Whether the domain is default or not.</p>
   * @public
   */
  DefaultDomain?: boolean;
}

/**
 * @public
 */
export interface ListMailDomainsResponse {
  /**
   * <p>The list of mail domain summaries, specifying domains that exist in the specified WorkMail organization, along with the information about whether the domain is or isn't the default.</p>
   * @public
   */
  MailDomains?: MailDomainSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. The value becomes <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessOverridesRequest {
  /**
   * <p>The WorkMail organization under which to list mobile device access overrides.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The WorkMail user under which you list the mobile device access overrides. Accepts the following types of user identities:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Email address: <code>user@domain.tld</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>User name: <code>user</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId?: string;

  /**
   * <p>The mobile device to which the access override applies.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not require a token.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>The override object.</p>
 * @public
 */
export interface MobileDeviceAccessOverride {
  /**
   * <p>The WorkMail user to which the access override applies.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The device to which the override applies.</p>
   * @public
   */
  DeviceId?: string;

  /**
   * <p>The effect of the override, <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect;

  /**
   * <p>A description of the override.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date the override was first created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date the override was last modified.</p>
   * @public
   */
  DateModified?: Date;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessOverridesResponse {
  /**
   * <p>The list of mobile device access overrides that exist for the specified WorkMail organization and user.</p>
   * @public
   */
  Overrides?: MobileDeviceAccessOverride[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is “null” when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessRulesRequest {
  /**
   * <p>The WorkMail organization for which to list the rules.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * <p>A rule that controls access to mobile devices for an WorkMail group.</p>
 * @public
 */
export interface MobileDeviceAccessRule {
  /**
   * <p>The ID assigned to a mobile access rule.</p>
   * @public
   */
  MobileDeviceAccessRuleId?: string;

  /**
   * <p>The name of a mobile access rule.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of a mobile access rule.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect;

  /**
   * <p>Device types that a rule will match.</p>
   * @public
   */
  DeviceTypes?: string[];

  /**
   * <p>Device types that a rule <b>will not</b> match. All other device types will match.</p>
   * @public
   */
  NotDeviceTypes?: string[];

  /**
   * <p>Device models that a rule will match.</p>
   * @public
   */
  DeviceModels?: string[];

  /**
   * <p>Device models that a rule <b>will not</b> match. All other device models will match.</p>
   * @public
   */
  NotDeviceModels?: string[];

  /**
   * <p>Device operating systems that a rule will match.</p>
   * @public
   */
  DeviceOperatingSystems?: string[];

  /**
   * <p>Device operating systems that a rule <b>will not</b> match. All other device types will match.</p>
   * @public
   */
  NotDeviceOperatingSystems?: string[];

  /**
   * <p>Device user agents that a rule will match.</p>
   * @public
   */
  DeviceUserAgents?: string[];

  /**
   * <p>Device user agents that a rule <b>will not</b> match. All other device user agents will match.</p>
   * @public
   */
  NotDeviceUserAgents?: string[];

  /**
   * <p>The date and time at which an access rule was created.</p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>The date and time at which an access rule was modified.</p>
   * @public
   */
  DateModified?: Date;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessRulesResponse {
  /**
   * <p>The list of mobile device access rules that exist under the specified WorkMail organization.</p>
   * @public
   */
  Rules?: MobileDeviceAccessRule[];
}

/**
 * @public
 */
export interface ListOrganizationsRequest {
  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>The representation of an organization.</p>
 * @public
 */
export interface OrganizationSummary {
  /**
   * <p>The identifier associated with the organization.</p>
   * @public
   */
  OrganizationId?: string;

  /**
   * <p>The alias associated with the organization.</p>
   * @public
   */
  Alias?: string;

  /**
   * <p>The default email domain associated with the organization.</p>
   * @public
   */
  DefaultMailDomain?: string;

  /**
   * <p>The error message associated with the organization. It is only present if unexpected
   *          behavior has occurred with regards to the organization. It provides insight or solutions
   *          regarding unexpected behavior.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The state associated with the organization.</p>
   * @public
   */
  State?: string;
}

/**
 * @public
 */
export interface ListOrganizationsResponse {
  /**
   * <p>The overview of owned organizations presented as a list of organization
   *          summaries.</p>
   * @public
   */
  OrganizationSummaries?: OrganizationSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPersonalAccessTokensRequest {
  /**
   * <p>
   *          The Organization ID. </p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>
   *          The WorkMail User ID.
   *       </p>
   * @public
   */
  UserId?: string;

  /**
   * <p>
   *          The token from the previous response to query the next page.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>
   *         The maximum amount of items that should be returned in a response.
   *       </p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>
 *          The summary of the Personal Access Token.
 *       </p>
 * @public
 */
export interface PersonalAccessTokenSummary {
  /**
   * <p>
   *          The ID of the Personal Access Token.
   *          </p>
   * @public
   */
  PersonalAccessTokenId?: string;

  /**
   * <p>
   *          The user ID of the WorkMail user associated with the Personal Access Token.
   *       </p>
   * @public
   */
  UserId?: string;

  /**
   * <p>
   *          The name of the Personal Access Token.
   *       </p>
   * @public
   */
  Name?: string;

  /**
   * <p>
   *          The date when the Personal Access Token was created.
   *       </p>
   * @public
   */
  DateCreated?: Date;

  /**
   * <p>
   *          The date when the Personal Access Token was last used.
   *       </p>
   * @public
   */
  DateLastUsed?: Date;

  /**
   * <p>
   *          The date when the Personal Access Token will expire.
   *       </p>
   * @public
   */
  ExpiresTime?: Date;

  /**
   * <p>
   *          Lists all the Personal Access Token permissions for a mailbox.
   *       </p>
   * @public
   */
  Scopes?: string[];
}

/**
 * @public
 */
export interface ListPersonalAccessTokensResponse {
  /**
   * <p>
   *          The token from the previous response to query the next page.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>
   *          Lists all the personal tokens in an organization or user, if user ID is provided.
   *       </p>
   * @public
   */
  PersonalAccessTokenSummaries?: PersonalAccessTokenSummary[];
}

/**
 * @public
 */
export interface ListResourceDelegatesRequest {
  /**
   * <p>The identifier for the organization that contains the resource for which delegates
   *          are listed.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the resource whose delegates are listed.</p>
   *          <p>The identifier can accept <i>ResourceId</i>, <i>Resourcename</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Resource ID: r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Email address: resource@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Resource name: resource</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The token used to paginate through the delegates associated with a
   *          resource.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The number of maximum results in a page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListResourceDelegatesResponse {
  /**
   * <p>One page of the resource's delegates.</p>
   * @public
   */
  Delegates?: Delegate[];

  /**
   * <p>The token used to paginate through the delegates associated with a resource. While
   *          results are still available, it has an associated value. When the last page is reached, the
   *          token is empty.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Filtering options for <i>ListResources</i> operation. This is only used as input to Operation.</p>
 * @public
 */
export interface ListResourcesFilters {
  /**
   * <p>Filters only resource that start with the entered name prefix .</p>
   * @public
   */
  NamePrefix?: string;

  /**
   * <p>Filters only resource with the provided primary email prefix.</p>
   * @public
   */
  PrimaryEmailPrefix?: string;

  /**
   * <p>Filters only resource with the provided state.</p>
   * @public
   */
  State?: EntityState;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * <p>The identifier for the organization under which the resources exist.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Limit the resource search results based on the filter criteria. You can only use one filter per request.</p>
   * @public
   */
  Filters?: ListResourcesFilters;
}

/**
 * <p>The representation of a resource.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The email of the resource.</p>
   * @public
   */
  Email?: string;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of the resource: equipment or room.</p>
   * @public
   */
  Type?: ResourceType;

  /**
   * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>The date indicating when the resource was enabled for WorkMail use.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the resource was disabled from WorkMail use.</p>
   * @public
   */
  DisabledDate?: Date;

  /**
   * <p>Resource description.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * <p>One page of the organization's resource representation.</p>
   * @public
   */
  Resources?: Resource[];

  /**
   * <p> The token used to paginate through all the organization's resources. While results
   *          are still available, it has an associated value. When the last page is reached, the token
   *          is empty.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>Describes a tag applied to a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p> Filtering options for <i>ListUsers</i> operation. This is only used as input to Operation.</p>
 * @public
 */
export interface ListUsersFilters {
  /**
   * <p>Filters only users with the provided username prefix.</p>
   * @public
   */
  UsernamePrefix?: string;

  /**
   * <p>Filters only users with the provided display name prefix.</p>
   * @public
   */
  DisplayNamePrefix?: string;

  /**
   * <p>Filters only users with the provided email prefix.</p>
   * @public
   */
  PrimaryEmailPrefix?: string;

  /**
   * <p>Filters only users with the provided state.</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>Filters only users with the ID from the IAM Identity Center.</p>
   * @public
   */
  IdentityProviderUserIdPrefix?: string;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The identifier for the organization under which the users exist.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Limit the user search results based on the filter criteria. You can only use one filter per request.</p>
   * @public
   */
  Filters?: ListUsersFilters;
}

/**
 * <p>The representation of an WorkMail user.</p>
 * @public
 */
export interface User {
  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The email of the user.</p>
   * @public
   */
  Email?: string;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The display name of the user.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
   * @public
   */
  State?: EntityState;

  /**
   * <p>The role of the user.</p>
   * @public
   */
  UserRole?: UserRole;

  /**
   * <p>The date indicating when the user was enabled for WorkMail use.</p>
   * @public
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the user was disabled from WorkMail use.</p>
   * @public
   */
  DisabledDate?: Date;

  /**
   * <p>User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.</p>
   * @public
   */
  IdentityProviderUserId?: string;

  /**
   * <p>Identity store ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.</p>
   * @public
   */
  IdentityProviderIdentityStoreId?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>The overview of users for an organization.</p>
   * @public
   */
  Users?: User[];

  /**
   * <p> The token to use to retrieve the next page of results. This value is `null` when
   *          there are no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutAccessControlRuleRequest {
  /**
   * <p>The rule name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The rule effect.</p>
   * @public
   */
  Effect: AccessControlRuleEffect | undefined;

  /**
   * <p>The rule description.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>IPv4 CIDR ranges to include in the rule.</p>
   * @public
   */
  IpRanges?: string[];

  /**
   * <p>IPv4 CIDR ranges to exclude from the rule.</p>
   * @public
   */
  NotIpRanges?: string[];

  /**
   * <p>Access protocol actions to include in the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   * @public
   */
  Actions?: string[];

  /**
   * <p>Access protocol actions to exclude from the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   * @public
   */
  NotActions?: string[];

  /**
   * <p>User IDs to include in the rule.</p>
   * @public
   */
  UserIds?: string[];

  /**
   * <p>User IDs to exclude from the rule.</p>
   * @public
   */
  NotUserIds?: string[];

  /**
   * <p>The identifier of the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>Impersonation role IDs to include in the rule.</p>
   * @public
   */
  ImpersonationRoleIds?: string[];

  /**
   * <p>Impersonation role IDs to exclude from the rule.</p>
   * @public
   */
  NotImpersonationRoleIds?: string[];
}

/**
 * @public
 */
export interface PutAccessControlRuleResponse {}

/**
 * @public
 */
export interface PutEmailMonitoringConfigurationRequest {
  /**
   * <p>The ID of the organization for which the email monitoring configuration is set.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.</p>
   * @public
   */
  LogGroupArn: string | undefined;
}

/**
 * @public
 */
export interface PutEmailMonitoringConfigurationResponse {}

/**
 * @public
 */
export interface PutIdentityProviderConfigurationRequest {
  /**
   * <p>
   *          The ID of the WorkMail Organization. </p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>
   *          The authentication mode used in WorkMail.</p>
   * @public
   */
  AuthenticationMode: IdentityProviderAuthenticationMode | undefined;

  /**
   * <p>
   *          The details of the IAM Identity Center configuration.</p>
   * @public
   */
  IdentityCenterConfiguration: IdentityCenterConfiguration | undefined;

  /**
   * <p>
   *          The details of the Personal Access Token configuration.
   *       </p>
   * @public
   */
  PersonalAccessTokenConfiguration: PersonalAccessTokenConfiguration | undefined;
}

/**
 * @public
 */
export interface PutIdentityProviderConfigurationResponse {}

/**
 * @public
 */
export interface PutInboundDmarcSettingsRequest {
  /**
   * <p>The ID of the organization that you are applying the DMARC policy to.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>Enforces or suspends a policy after it's applied.</p>
   * @public
   */
  Enforced: boolean | undefined;
}

/**
 * @public
 */
export interface PutInboundDmarcSettingsResponse {}

/**
 * @public
 */
export interface PutMailboxPermissionsRequest {
  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user or resource for which to update mailbox
   *          permissions.</p>
   *          <p>The identifier can be <i>UserId, ResourceID, or Group Id</i>, <i>Username, Resourcename, or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource to which to grant the
   *          permissions.</p>
   *          <p>The identifier can be <i>UserId, ResourceID, or Group Id</i>, <i>Username, Resourcename, or Groupname</i>, or <i>email</i>.</p>
   *          <ul>
   *             <li>
   *                <p>Grantee ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: grantee@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Grantee name: grantee</p>
   *             </li>
   *          </ul>
   * @public
   */
  GranteeId: string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
   *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
   *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
   *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
   *          access to the mailbox, irrespective of other folder-level permissions set on the
   *          mailbox.</p>
   * @public
   */
  PermissionValues: PermissionType[] | undefined;
}

/**
 * @public
 */
export interface PutMailboxPermissionsResponse {}

/**
 * @public
 */
export interface PutMobileDeviceAccessOverrideRequest {
  /**
   * <p>Identifies the WorkMail organization for which you create the override.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The WorkMail user for which you create the override. Accepts the following types of user identities:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: <code>12345678-1234-1234-1234-123456789012</code> or <code>S-1-1-12-1234567890-123456789-123456789-1234</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Email address: <code>user@domain.tld</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>User name: <code>user</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The mobile device for which you create the override. <code>DeviceId</code> is case insensitive.</p>
   * @public
   */
  DeviceId: string | undefined;

  /**
   * <p>The effect of the override, <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect: MobileDeviceAccessRuleEffect | undefined;

  /**
   * <p>A description of the override.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface PutMobileDeviceAccessOverrideResponse {}

/**
 * @public
 */
export interface PutRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The retention policy ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The retention policy name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The retention policy description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The retention policy folder configurations.</p>
   * @public
   */
  FolderConfigurations: FolderConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutRetentionPolicyResponse {}

/**
 * @public
 */
export interface RegisterMailDomainRequest {
  /**
   * <p>Idempotency token used when retrying requests.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The WorkMail organization under which you're creating the domain.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the mail domain to create in WorkMail and SES.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface RegisterMailDomainResponse {}

/**
 * @public
 */
export interface RegisterToWorkMailRequest {
  /**
   * <p>The identifier for the organization under which the user, group, or resource
   *          exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user, group, or resource to be updated.</p>
   *          <p>The identifier can accept <i>UserId, ResourceId, or GroupId</i>, or <i>Username, Resourcename, or Groupname</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The email for the user, group, or resource to be updated.</p>
   * @public
   */
  Email: string | undefined;
}

/**
 * @public
 */
export interface RegisterToWorkMailResponse {}

/**
 * @public
 */
export interface ResetPasswordRequest {
  /**
   * <p>The identifier of the organization that contains the user for which the password is
   *          reset.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user for whom the password is reset.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The new password for the user.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * @public
 */
export interface ResetPasswordResponse {}

/**
 * @public
 */
export interface StartMailboxExportJobRequest {
  /**
   * <p>The idempotency token for the client request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The identifier associated with the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   *          <p>The identifier can accept <i>UserId or ResourceId</i>, <i>Username or Resourcename</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789
   *             , or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The mailbox export job description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3
   *          bucket.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
   *          key that encrypts the exported mailbox content.</p>
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The S3 bucket prefix.</p>
   * @public
   */
  S3Prefix: string | undefined;
}

/**
 * @public
 */
export interface StartMailboxExportJobResponse {
  /**
   * <p>The job ID.</p>
   * @public
   */
  JobId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The resource can have up to 50 user-applied tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface TestAvailabilityConfigurationRequest {
  /**
   * <p>The WorkMail organization where the availability provider will be tested.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to which the provider applies. If this field is provided, a stored availability provider associated to this domain name will be tested.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>Describes an EWS based availability provider. This is only used as input to the service.</p>
   * @public
   */
  EwsProvider?: EwsAvailabilityProvider;

  /**
   * <p>Describes a Lambda based availability provider.</p>
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider;
}

/**
 * @public
 */
export interface TestAvailabilityConfigurationResponse {
  /**
   * <p>Boolean indicating whether the test passed or failed.</p>
   * @public
   */
  TestPassed?: boolean;

  /**
   * <p>String containing the reason for a failed test if <code>TestPassed</code> is false.</p>
   * @public
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
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
export interface UpdateAvailabilityConfigurationRequest {
  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be
   *          updated.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to which the provider applies the availability configuration.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The EWS availability provider definition. The request must contain exactly one provider
   *          definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>. The previously
   *          stored provider will be overridden by the one provided.</p>
   * @public
   */
  EwsProvider?: EwsAvailabilityProvider;

  /**
   * <p>The Lambda availability provider definition. The request must contain exactly one
   *          provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>. The
   *          previously stored provider will be overridden by the one provided.</p>
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider;
}

/**
 * @public
 */
export interface UpdateAvailabilityConfigurationResponse {}

/**
 * @public
 */
export interface UpdateDefaultMailDomainRequest {
  /**
   * <p>The WorkMail organization for which to list domains.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain name that will become the default domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface UpdateDefaultMailDomainResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group to be updated.</p>
   *          <p>The identifier can accept <i>GroupId</i>, <i>Groupname</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: group@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Group name: group</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>If enabled, the group is hidden from the global address list.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;
}

/**
 * @public
 */
export interface UpdateGroupResponse {}

/**
 * @public
 */
export interface UpdateImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization that contains the impersonation role to update.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The ID of the impersonation role to update.</p>
   * @public
   */
  ImpersonationRoleId: string | undefined;

  /**
   * <p>The updated impersonation role name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The updated impersonation role type.</p>
   * @public
   */
  Type: ImpersonationRoleType | undefined;

  /**
   * <p>The updated impersonation role description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The updated list of rules.</p>
   * @public
   */
  Rules: ImpersonationRule[] | undefined;
}

/**
 * @public
 */
export interface UpdateImpersonationRoleResponse {}

/**
 * @public
 */
export interface UpdateMailboxQuotaRequest {
  /**
   * <p>The identifier for the organization that contains the user for whom to update the
   *          mailbox quota.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifer for the user for whom to update the mailbox quota.</p>
   *          <p>The identifier can be the <i>UserId</i>, <i>Username</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: user@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>User name: user</p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The updated mailbox quota, in MB, for the specified user.</p>
   * @public
   */
  MailboxQuota: number | undefined;
}

/**
 * @public
 */
export interface UpdateMailboxQuotaResponse {}

/**
 * @public
 */
export interface UpdateMobileDeviceAccessRuleRequest {
  /**
   * <p>The WorkMail organization under which the rule will be updated.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the rule to be updated.</p>
   * @public
   */
  MobileDeviceAccessRuleId: string | undefined;

  /**
   * <p>The updated rule name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The updated rule description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
   * @public
   */
  Effect: MobileDeviceAccessRuleEffect | undefined;

  /**
   * <p>Device types that the updated rule will match.</p>
   * @public
   */
  DeviceTypes?: string[];

  /**
   * <p>Device types that the updated rule <b>will not</b> match. All other device types will match.</p>
   * @public
   */
  NotDeviceTypes?: string[];

  /**
   * <p>Device models that the updated rule will match.</p>
   * @public
   */
  DeviceModels?: string[];

  /**
   * <p>Device models that the updated rule <b>will not</b> match. All other device models will match.</p>
   * @public
   */
  NotDeviceModels?: string[];

  /**
   * <p>Device operating systems that the updated rule will match.</p>
   * @public
   */
  DeviceOperatingSystems?: string[];

  /**
   * <p>Device operating systems that the updated rule <b>will not</b> match. All other device operating systems will match.</p>
   * @public
   */
  NotDeviceOperatingSystems?: string[];

  /**
   * <p>User agents that the updated rule will match.</p>
   * @public
   */
  DeviceUserAgents?: string[];

  /**
   * <p>User agents that the updated rule <b>will not</b> match. All other user agents will match.</p>
   * @public
   */
  NotDeviceUserAgents?: string[];
}

/**
 * @public
 */
export interface UpdateMobileDeviceAccessRuleResponse {}

/**
 * @public
 */
export interface UpdatePrimaryEmailAddressRequest {
  /**
   * <p>The organization that contains the user, group, or resource to update.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The user, group, or resource to update.</p>
   *          <p>The identifier can accept <i>UseriD, ResourceId, or GroupId</i>, <i>Username, Resourcename, or Groupname</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: entity@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Entity name: entity</p>
   *             </li>
   *          </ul>
   * @public
   */
  EntityId: string | undefined;

  /**
   * <p>The value of the email to be updated as primary.</p>
   * @public
   */
  Email: string | undefined;
}

/**
 * @public
 */
export interface UpdatePrimaryEmailAddressResponse {}

/**
 * @public
 */
export interface UpdateResourceRequest {
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          updated.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be updated.</p>
   *          <p>The identifier can accept <i>ResourceId</i>, <i>Resourcename</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>Resource ID: r-0123456789a0123456789b0123456789</p>
   *             </li>
   *             <li>
   *                <p>Email address: resource@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>Resource name: resource</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the resource to be updated.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The resource's booking options to be updated.</p>
   * @public
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>Updates the resource description.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Updates the resource type.</p>
   * @public
   */
  Type?: ResourceType;

  /**
   * <p>If enabled, the resource is hidden from the global address list.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;
}

/**
 * @public
 */
export interface UpdateResourceResponse {}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user to be updated.</p>
   *          <p>The identifier can be the <i>UserId</i>, <i>Username</i>, or <i>email</i>. The following identity formats are available:</p>
   *          <ul>
   *             <li>
   *                <p>User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234</p>
   *             </li>
   *             <li>
   *                <p>Email address: user@domain.tld</p>
   *             </li>
   *             <li>
   *                <p>User name: user</p>
   *             </li>
   *          </ul>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Updates the user role.</p>
   *          <p>You cannot pass <i>SYSTEM_USER</i> or <i>RESOURCE</i>.</p>
   * @public
   */
  Role?: UserRole;

  /**
   * <p>Updates the display name of the user.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>Updates the user's first name.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>Updates the user's last name.</p>
   * @public
   */
  LastName?: string;

  /**
   * <p>If enabled, the user is hidden from the global address list.</p>
   * @public
   */
  HiddenFromGlobalAddressList?: boolean;

  /**
   * <p>Updates the user's initials.</p>
   * @public
   */
  Initials?: string;

  /**
   * <p>Updates the user's contact details.</p>
   * @public
   */
  Telephone?: string;

  /**
   * <p>Updates the user's street address.</p>
   * @public
   */
  Street?: string;

  /**
   * <p>Updates the user's job title.</p>
   * @public
   */
  JobTitle?: string;

  /**
   * <p>Updates the user's city.</p>
   * @public
   */
  City?: string;

  /**
   * <p>Updates the user's company.</p>
   * @public
   */
  Company?: string;

  /**
   * <p>Updates the user's zip code.</p>
   * @public
   */
  ZipCode?: string;

  /**
   * <p>Updates the user's department.</p>
   * @public
   */
  Department?: string;

  /**
   * <p>Updates the user's country.</p>
   * @public
   */
  Country?: string;

  /**
   * <p>Updates the user's office.</p>
   * @public
   */
  Office?: string;

  /**
   * <p>User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.</p>
   * @public
   */
  IdentityProviderUserId?: string;
}

/**
 * @public
 */
export interface UpdateUserResponse {}

/**
 * @internal
 */
export const EwsAvailabilityProviderFilterSensitiveLog = (obj: EwsAvailabilityProvider): any => ({
  ...obj,
  ...(obj.EwsPassword && { EwsPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAvailabilityConfigurationRequestFilterSensitiveLog = (
  obj: CreateAvailabilityConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EwsProvider && { EwsProvider: EwsAvailabilityProviderFilterSensitiveLog(obj.EwsProvider) }),
});

/**
 * @internal
 */
export const CreateResourceRequestFilterSensitiveLog = (obj: CreateResourceRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeResourceResponseFilterSensitiveLog = (obj: DescribeResourceResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.Initials && { Initials: SENSITIVE_STRING }),
  ...(obj.Telephone && { Telephone: SENSITIVE_STRING }),
  ...(obj.Street && { Street: SENSITIVE_STRING }),
  ...(obj.JobTitle && { JobTitle: SENSITIVE_STRING }),
  ...(obj.City && { City: SENSITIVE_STRING }),
  ...(obj.Company && { Company: SENSITIVE_STRING }),
  ...(obj.ZipCode && { ZipCode: SENSITIVE_STRING }),
  ...(obj.Department && { Department: SENSITIVE_STRING }),
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.Office && { Office: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListResourcesResponseFilterSensitiveLog = (obj: ListResourcesResponse): any => ({
  ...obj,
  ...(obj.Resources && { Resources: obj.Resources.map((item) => ResourceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListUsersFiltersFilterSensitiveLog = (obj: ListUsersFilters): any => ({
  ...obj,
  ...(obj.DisplayNamePrefix && { DisplayNamePrefix: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
  ...(obj.Filters && { Filters: ListUsersFiltersFilterSensitiveLog(obj.Filters) }),
});

/**
 * @internal
 */
export const PutRetentionPolicyRequestFilterSensitiveLog = (obj: PutRetentionPolicyRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResetPasswordRequestFilterSensitiveLog = (obj: ResetPasswordRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TestAvailabilityConfigurationRequestFilterSensitiveLog = (
  obj: TestAvailabilityConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EwsProvider && { EwsProvider: EwsAvailabilityProviderFilterSensitiveLog(obj.EwsProvider) }),
});

/**
 * @internal
 */
export const UpdateAvailabilityConfigurationRequestFilterSensitiveLog = (
  obj: UpdateAvailabilityConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EwsProvider && { EwsProvider: EwsAvailabilityProviderFilterSensitiveLog(obj.EwsProvider) }),
});

/**
 * @internal
 */
export const UpdateResourceRequestFilterSensitiveLog = (obj: UpdateResourceRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.Initials && { Initials: SENSITIVE_STRING }),
  ...(obj.Telephone && { Telephone: SENSITIVE_STRING }),
  ...(obj.Street && { Street: SENSITIVE_STRING }),
  ...(obj.JobTitle && { JobTitle: SENSITIVE_STRING }),
  ...(obj.City && { City: SENSITIVE_STRING }),
  ...(obj.Company && { Company: SENSITIVE_STRING }),
  ...(obj.ZipCode && { ZipCode: SENSITIVE_STRING }),
  ...(obj.Department && { Department: SENSITIVE_STRING }),
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.Office && { Office: SENSITIVE_STRING }),
});
