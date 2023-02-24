// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { WorkMailServiceException as __BaseException } from "./WorkMailServiceException";

export enum AccessControlRuleEffect {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

/**
 * <p>A rule that controls access to an WorkMail organization.</p>
 */
export interface AccessControlRule {
  /**
   * <p>The rule name.</p>
   */
  Name?: string;

  /**
   * <p>The rule effect.</p>
   */
  Effect?: AccessControlRuleEffect | string;

  /**
   * <p>The rule description.</p>
   */
  Description?: string;

  /**
   * <p>IPv4 CIDR ranges to include in the rule.</p>
   */
  IpRanges?: string[];

  /**
   * <p>IPv4 CIDR ranges to exclude from the rule.</p>
   */
  NotIpRanges?: string[];

  /**
   * <p>Access protocol actions to include in the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  Actions?: string[];

  /**
   * <p>Access protocol actions to exclude from the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  NotActions?: string[];

  /**
   * <p>User IDs to include in the rule.</p>
   */
  UserIds?: string[];

  /**
   * <p>User IDs to exclude from the rule.</p>
   */
  NotUserIds?: string[];

  /**
   * <p>The date that the rule was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date that the rule was modified.</p>
   */
  DateModified?: Date;

  /**
   * <p>Impersonation role IDs to include in the rule.</p>
   */
  ImpersonationRoleIds?: string[];

  /**
   * <p>Impersonation role IDs to exclude from the rule.</p>
   */
  NotImpersonationRoleIds?: string[];
}

export enum AccessEffect {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export interface AssociateDelegateToResourceRequest {
  /**
   * <p>The organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The resource for which members (users or groups) are associated.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The member (user or group) to associate to the resource.</p>
   */
  EntityId: string | undefined;
}

export interface AssociateDelegateToResourceResponse {}

/**
 * <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
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

export interface AssociateMemberToGroupRequest {
  /**
   * <p>The organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The group to which the member (user or group) is associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The member (user or group) to associate to the group.</p>
   */
  MemberId: string | undefined;
}

export interface AssociateMemberToGroupResponse {}

/**
 * <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
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
 * <p>You can't perform a write operation against a read-only directory.</p>
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

export interface AssumeImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization under which the impersonation role will be assumed.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The impersonation role ID to assume.</p>
   */
  ImpersonationRoleId: string | undefined;
}

export interface AssumeImpersonationRoleResponse {
  /**
   * <p>The authentication token for the impersonation role.</p>
   */
  Token?: string;

  /**
   * <p>The authentication token's validity, in seconds.</p>
   */
  ExpiresIn?: number;
}

/**
 * <p>The resource cannot be found.</p>
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
 */
export interface RedactedEwsAvailabilityProvider {
  /**
   * <p>The endpoint of the remote EWS server.</p>
   */
  EwsEndpoint?: string;

  /**
   * <p>The username used to authenticate the remote EWS server.</p>
   */
  EwsUsername?: string;
}

/**
 * <p>Describes a Lambda based availability provider.</p>
 */
export interface LambdaAvailabilityProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda that acts as the availability provider.</p>
   */
  LambdaArn: string | undefined;
}

export enum AvailabilityProviderType {
  EWS = "EWS",
  LAMBDA = "LAMBDA",
}

/**
 * <p>List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail
 *          organization.</p>
 */
export interface AvailabilityConfiguration {
  /**
   * <p>Displays the domain to which the provider applies.</p>
   */
  DomainName?: string;

  /**
   * <p>Displays the provider type that applies to this domain.</p>
   */
  ProviderType?: AvailabilityProviderType | string;

  /**
   * <p>If <code>ProviderType</code> is <code>EWS</code>, then this field contains
   *             <code>RedactedEwsAvailabilityProvider</code>. Otherwise, it is not required.</p>
   */
  EwsProvider?: RedactedEwsAvailabilityProvider;

  /**
   * <p>If ProviderType is <code>LAMBDA</code> then this field contains
   *             <code>LambdaAvailabilityProvider</code>. Otherwise, it is not required.</p>
   */
  LambdaProvider?: LambdaAvailabilityProvider;

  /**
   * <p>The date and time at which the availability configuration was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date and time at which the availability configuration was last modified.</p>
   */
  DateModified?: Date;
}

/**
 * <p>At least one delegate must be associated to the resource to disable automatic replies
 *          from the resource.</p>
 */
export interface BookingOptions {
  /**
   * <p>The resource's ability to automatically reply to requests. If disabled, delegates
   *          must be associated to the resource.</p>
   */
  AutoAcceptRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any recurring requests.</p>
   */
  AutoDeclineRecurringRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any conflicting requests.</p>
   */
  AutoDeclineConflictingRequests?: boolean;
}

export interface CancelMailboxExportJobRequest {
  /**
   * <p>The idempotency token for the client request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The job ID.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;
}

export interface CancelMailboxExportJobResponse {}

export interface CreateAliasRequest {
  /**
   * <p>The organization under which the member (user or group) exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The member (user or group) to which this alias is added.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The alias to add to the member set.</p>
   */
  Alias: string | undefined;
}

export interface CreateAliasResponse {}

/**
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
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
 */
export interface EwsAvailabilityProvider {
  /**
   * <p>The endpoint of the remote EWS server.</p>
   */
  EwsEndpoint: string | undefined;

  /**
   * <p>The username used to authenticate the remote EWS server.</p>
   */
  EwsUsername: string | undefined;

  /**
   * <p>The password used to authenticate the remote EWS server.</p>
   */
  EwsPassword: string | undefined;
}

export interface CreateAvailabilityConfigurationRequest {
  /**
   * <p>An idempotent token that ensures that an API request is executed only once.</p>
   */
  ClientToken?: string;

  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to which the provider applies.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>.</p>
   */
  EwsProvider?: EwsAvailabilityProvider;

  /**
   * <p>Lambda availability provider definition. The request must contain exactly one provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>.</p>
   */
  LambdaProvider?: LambdaAvailabilityProvider;
}

export interface CreateAvailabilityConfigurationResponse {}

/**
 * <p>The user, group, or resource name isn't unique in WorkMail.</p>
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

export interface CreateGroupRequest {
  /**
   * <p>The organization under which the group is to be created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the group.</p>
   */
  Name: string | undefined;
}

export interface CreateGroupResponse {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

/**
 * <p>This user, group, or resource name is not allowed in WorkMail.</p>
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
 * <p>The rules for the given impersonation role.</p>
 */
export interface ImpersonationRule {
  /**
   * <p>The identifier of the rule.</p>
   */
  ImpersonationRuleId: string | undefined;

  /**
   * <p>The rule name.</p>
   */
  Name?: string;

  /**
   * <p>The rule description.</p>
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches the input. Allowed effect values are
   *             <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect: AccessEffect | string | undefined;

  /**
   * <p>A list of user IDs that match the rule.</p>
   */
  TargetUsers?: string[];

  /**
   * <p>A list of user IDs that don't match the rule.</p>
   */
  NotTargetUsers?: string[];
}

export enum ImpersonationRoleType {
  FULL_ACCESS = "FULL_ACCESS",
  READ_ONLY = "READ_ONLY",
}

export interface CreateImpersonationRoleRequest {
  /**
   * <p>The idempotency token for the client request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The WorkMail organization to create the new impersonation role within.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the new impersonation role.</p>
   */
  Name: string | undefined;

  /**
   * <p>The impersonation role's type. The available impersonation role types are
   *             <code>READ_ONLY</code> or <code>FULL_ACCESS</code>.</p>
   */
  Type: ImpersonationRoleType | string | undefined;

  /**
   * <p>The description of the new impersonation role.</p>
   */
  Description?: string;

  /**
   * <p>The list of rules for the impersonation role.</p>
   */
  Rules: ImpersonationRule[] | undefined;
}

export interface CreateImpersonationRoleResponse {
  /**
   * <p>The new impersonation role ID.</p>
   */
  ImpersonationRoleId?: string;
}

export enum MobileDeviceAccessRuleEffect {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export interface CreateMobileDeviceAccessRuleRequest {
  /**
   * <p>The WorkMail organization under which the rule will be created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The idempotency token for the client request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The rule name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule description.</p>
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect: MobileDeviceAccessRuleEffect | string | undefined;

  /**
   * <p>Device types that the rule will match.</p>
   */
  DeviceTypes?: string[];

  /**
   * <p>Device types that the rule <b>will not</b> match. All other device types will match.</p>
   */
  NotDeviceTypes?: string[];

  /**
   * <p>Device models that the rule will match.</p>
   */
  DeviceModels?: string[];

  /**
   * <p>Device models that the rule <b>will not</b> match. All other device models will match.</p>
   */
  NotDeviceModels?: string[];

  /**
   * <p>Device operating systems that the rule will match.</p>
   */
  DeviceOperatingSystems?: string[];

  /**
   * <p>Device operating systems that the rule <b>will not</b> match. All other device operating systems will match.</p>
   */
  NotDeviceOperatingSystems?: string[];

  /**
   * <p>Device user agents that the rule will match.</p>
   */
  DeviceUserAgents?: string[];

  /**
   * <p>Device user agents that the rule <b>will not</b> match. All other device user agents will match.</p>
   */
  NotDeviceUserAgents?: string[];
}

export interface CreateMobileDeviceAccessRuleResponse {
  /**
   * <p>The identifier for the newly created mobile device access rule.</p>
   */
  MobileDeviceAccessRuleId?: string;
}

/**
 * <p>The domain to associate with an WorkMail organization.</p>
 *          <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>WorkMail Administrator Guide</i>.</p>
 */
export interface Domain {
  /**
   * <p>The fully qualified domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.</p>
   */
  HostedZoneId?: string;
}

export interface CreateOrganizationRequest {
  /**
   * <p>The AWS Directory Service directory ID.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The organization alias.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The idempotency token associated with the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The email domains to associate with the organization.</p>
   */
  Domains?: Domain[];

  /**
   * <p>The Amazon Resource Name (ARN) of a customer managed key from AWS KMS.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>When <code>true</code>, allows organization interoperability between WorkMail and
   *          Microsoft Exchange. If <code>true</code>, you must include a AD Connector directory ID in
   *          the request.</p>
   */
  EnableInteroperability?: boolean;
}

export interface CreateOrganizationResponse {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId?: string;
}

/**
 * <p>The directory is already in use by another WorkMail organization in the same account and Region.</p>
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

export enum ResourceType {
  EQUIPMENT = "EQUIPMENT",
  ROOM = "ROOM",
}

export interface CreateResourceRequest {
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the new resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the new resource. The available types are <code>equipment</code> and
   *             <code>room</code>.</p>
   */
  Type: ResourceType | string | undefined;
}

export interface CreateResourceResponse {
  /**
   * <p>The identifier of the new resource.</p>
   */
  ResourceId?: string;
}

export interface CreateUserRequest {
  /**
   * <p>The identifier of the organization for which the user is created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.</p>
   */
  Name: string | undefined;

  /**
   * <p>The display name for the new user.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The password for the new user.</p>
   */
  Password: string | undefined;
}

export interface CreateUserResponse {
  /**
   * <p>The identifier for the new user.</p>
   */
  UserId?: string;
}

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
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

export enum MemberType {
  GROUP = "GROUP",
  USER = "USER",
}

/**
 * <p>The name of the attribute, which is one of the values defined in the UserAttribute
 *          enumeration.</p>
 */
export interface Delegate {
  /**
   * <p>The identifier for the user or group associated as the resource's delegate.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of the delegate: user or group.</p>
   */
  Type: MemberType | string | undefined;
}

export interface DeleteAccessControlRuleRequest {
  /**
   * <p>The identifier for the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the access control rule.</p>
   */
  Name: string | undefined;
}

export interface DeleteAccessControlRuleResponse {}

export interface DeleteAliasRequest {
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member (user or group) from which to have the aliases
   *          removed.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The aliases to be removed from the user's set of aliases. Duplicate entries in the
   *          list are collapsed into single entries (the list is transformed into a set).</p>
   */
  Alias: string | undefined;
}

export interface DeleteAliasResponse {}

export interface DeleteAvailabilityConfigurationRequest {
  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain for which the <code>AvailabilityConfiguration</code> will be deleted.</p>
   */
  DomainName: string | undefined;
}

export interface DeleteAvailabilityConfigurationResponse {}

export interface DeleteEmailMonitoringConfigurationRequest {
  /**
   * <p>The ID of the organization from which the email monitoring configuration is deleted.</p>
   */
  OrganizationId: string | undefined;
}

export interface DeleteEmailMonitoringConfigurationResponse {}

export interface DeleteGroupRequest {
  /**
   * <p>The organization that contains the group.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the group to be deleted.</p>
   */
  GroupId: string | undefined;
}

export interface DeleteGroupResponse {}

export interface DeleteImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization from which to delete the impersonation role.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The ID of the impersonation role to delete.</p>
   */
  ImpersonationRoleId: string | undefined;
}

export interface DeleteImpersonationRoleResponse {}

export interface DeleteMailboxPermissionsRequest {
  /**
   * <p>The identifier of the organization under which the member (user or group)
   *          exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the member (user or group) that owns the mailbox.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the member (user or group) for which to delete granted
   *          permissions.</p>
   */
  GranteeId: string | undefined;
}

export interface DeleteMailboxPermissionsResponse {}

export interface DeleteMobileDeviceAccessOverrideRequest {
  /**
   * <p>The WorkMail organization for which the access override will be deleted.</p>
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
   */
  UserId: string | undefined;

  /**
   * <p>The mobile device for which you delete the override. <code>DeviceId</code> is case insensitive.</p>
   */
  DeviceId: string | undefined;
}

export interface DeleteMobileDeviceAccessOverrideResponse {}

export interface DeleteMobileDeviceAccessRuleRequest {
  /**
   * <p>The WorkMail organization under which the rule will be deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the rule to be deleted.</p>
   */
  MobileDeviceAccessRuleId: string | undefined;
}

export interface DeleteMobileDeviceAccessRuleResponse {}

export interface DeleteOrganizationRequest {
  /**
   * <p>The idempotency token associated with the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>If true, deletes the AWS Directory Service directory associated with the organization.</p>
   */
  DeleteDirectory: boolean | undefined;
}

export interface DeleteOrganizationResponse {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The state of the organization.</p>
   */
  State?: string;
}

export interface DeleteResourceRequest {
  /**
   * <p>The identifier associated with the organization from which the resource is
   *          deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be deleted.</p>
   */
  ResourceId: string | undefined;
}

export interface DeleteResourceResponse {}

export interface DeleteRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The retention policy ID.</p>
   */
  Id: string | undefined;
}

export interface DeleteRetentionPolicyResponse {}

export interface DeleteUserRequest {
  /**
   * <p>The organization that contains the user to be deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user to be deleted.</p>
   */
  UserId: string | undefined;
}

export interface DeleteUserResponse {}

export interface DeregisterFromWorkMailRequest {
  /**
   * <p>The identifier for the organization under which the WorkMail entity exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member (user or group) to be updated.</p>
   */
  EntityId: string | undefined;
}

export interface DeregisterFromWorkMailResponse {}

export interface DeregisterMailDomainRequest {
  /**
   * <p>The WorkMail organization for which the domain will be deregistered.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to deregister in WorkMail and SES.</p>
   */
  DomainName: string | undefined;
}

export interface DeregisterMailDomainResponse {}

/**
 * <p>You SES configuration has customizations that WorkMail cannot save. The error message lists the invalid setting. For examples of invalid settings, refer to
 *          <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html">CreateReceiptRule</a>.</p>
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

export interface DescribeEmailMonitoringConfigurationRequest {
  /**
   * <p>The ID of the organization for which the email monitoring configuration is described.</p>
   */
  OrganizationId: string | undefined;
}

export interface DescribeEmailMonitoringConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.</p>
   */
  LogGroupArn?: string;
}

export interface DescribeGroupRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group to be described.</p>
   */
  GroupId: string | undefined;
}

export enum EntityState {
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface DescribeGroupResponse {
  /**
   * <p>The identifier of the described group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the described group.</p>
   */
  Name?: string;

  /**
   * <p>The email of the described group.</p>
   */
  Email?: string;

  /**
   * <p>The state of the user: enabled (registered to WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;
}

export interface DescribeInboundDmarcSettingsRequest {
  /**
   * <p>Lists the ID of the given organization.</p>
   */
  OrganizationId: string | undefined;
}

export interface DescribeInboundDmarcSettingsResponse {
  /**
   * <p>Lists the enforcement setting of the applied policy.</p>
   */
  Enforced?: boolean;
}

export interface DescribeMailboxExportJobRequest {
  /**
   * <p>The mailbox export job ID.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;
}

export enum MailboxExportJobState {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
}

export interface DescribeMailboxExportJobResponse {
  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   */
  EntityId?: string;

  /**
   * <p>The mailbox export job description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple
   *          Storage Service (Amazon S3) bucket.</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
   *          key that encrypts the exported mailbox content.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 bucket prefix.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The path to the S3 bucket and file that the mailbox export job is exporting
   *          to.</p>
   */
  S3Path?: string;

  /**
   * <p>The estimated progress of the mailbox export job, in percentage points.</p>
   */
  EstimatedProgress?: number;

  /**
   * <p>The state of the mailbox export job.</p>
   */
  State?: MailboxExportJobState | string;

  /**
   * <p>Error information for failed mailbox export jobs.</p>
   */
  ErrorInfo?: string;

  /**
   * <p>The mailbox export job start timestamp.</p>
   */
  StartTime?: Date;

  /**
   * <p>The mailbox export job end timestamp.</p>
   */
  EndTime?: Date;
}

export interface DescribeOrganizationRequest {
  /**
   * <p>The identifier for the organization to be described.</p>
   */
  OrganizationId: string | undefined;
}

export interface DescribeOrganizationResponse {
  /**
   * <p>The identifier of an organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The alias for an organization.</p>
   */
  Alias?: string;

  /**
   * <p>The state of an organization.</p>
   */
  State?: string;

  /**
   * <p>The identifier for the directory associated with an WorkMail organization.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The type of directory associated with the WorkMail organization.</p>
   */
  DirectoryType?: string;

  /**
   * <p>The default mail domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;

  /**
   * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch
   *          time format.</p>
   */
  CompletedDate?: Date;

  /**
   * <p>(Optional) The error message indicating if unexpected behavior was encountered with
   *          regards to the organization.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization.</p>
   */
  ARN?: string;
}

export interface DescribeResourceRequest {
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          described.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be described.</p>
   */
  ResourceId: string | undefined;
}

export interface DescribeResourceResponse {
  /**
   * <p>The identifier of the described resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The email of the described resource.</p>
   */
  Email?: string;

  /**
   * <p>The name of the described resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of the described resource.</p>
   */
  Type?: ResourceType | string;

  /**
   * <p>The booking options for the described resource.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The state of the resource: enabled (registered to WorkMail), disabled (deregistered
   *          or never registered to WorkMail), or deleted.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;
}

export interface DescribeUserRequest {
  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user to be described.</p>
   */
  UserId: string | undefined;
}

export enum UserRole {
  RESOURCE = "RESOURCE",
  SYSTEM_USER = "SYSTEM_USER",
  USER = "USER",
}

export interface DescribeUserResponse {
  /**
   * <p>The identifier for the described user.</p>
   */
  UserId?: string;

  /**
   * <p>The name for the user.</p>
   */
  Name?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The state of a user: enabled (registered to WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is
   *          enabled, resources are imported into WorkMail as users. Because different WorkMail
   *          organizations rely on different directory types, administrators can distinguish between an
   *          unregistered user (account is disabled and has a user role) and the directory
   *          administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
   */
  UserRole?: UserRole | string;

  /**
   * <p>The date and time at which the user was enabled for WorkMailusage, in UNIX epoch
   *          time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time at which the user was disabled for WorkMail usage, in UNIX epoch
   *          time format.</p>
   */
  DisabledDate?: Date;
}

export interface DisassociateDelegateFromResourceRequest {
  /**
   * <p>The identifier for the organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource from which delegates' set members are removed.
   *       </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The identifier for the member (user, group) to be removed from the resource's
   *          delegates.</p>
   */
  EntityId: string | undefined;
}

export interface DisassociateDelegateFromResourceResponse {}

export interface DisassociateMemberFromGroupRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group from which members are removed.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the member to be removed to the group.</p>
   */
  MemberId: string | undefined;
}

export interface DisassociateMemberFromGroupResponse {}

/**
 * <p>A DNS record uploaded to your DNS provider.</p>
 */
export interface DnsRecord {
  /**
   * <p>The RFC 1035 record type. Possible values: <code>CNAME</code>, <code>A</code>, <code>MX</code>.</p>
   */
  Type?: string;

  /**
   * <p>The DNS hostname.- For example, <code>domain.example.com</code>.</p>
   */
  Hostname?: string;

  /**
   * <p>The value returned by the DNS for a query to that hostname and record type.</p>
   */
  Value?: string;
}

export enum DnsRecordVerificationStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
}

/**
 * <p>The user, group, or resource that you're trying to register is already
 *          registered.</p>
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

export enum RetentionAction {
  DELETE = "DELETE",
  NONE = "NONE",
  PERMANENTLY_DELETE = "PERMANENTLY_DELETE",
}

export enum FolderName {
  DELETED_ITEMS = "DELETED_ITEMS",
  DRAFTS = "DRAFTS",
  INBOX = "INBOX",
  JUNK_EMAIL = "JUNK_EMAIL",
  SENT_ITEMS = "SENT_ITEMS",
}

/**
 * <p>The configuration applied to an organization's folders by its retention
 *          policy.</p>
 */
export interface FolderConfiguration {
  /**
   * <p>The folder name.</p>
   */
  Name: FolderName | string | undefined;

  /**
   * <p>The action to take on the folder contents at the end of the folder configuration
   *          period.</p>
   */
  Action: RetentionAction | string | undefined;

  /**
   * <p>The number of days for which the folder-configuration action applies.</p>
   */
  Period?: number;
}

export interface GetAccessControlEffectRequest {
  /**
   * <p>The identifier for the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The IPv4 address.</p>
   */
  IpAddress: string | undefined;

  /**
   * <p>The access protocol action. Valid values include <code>ActiveSync</code>,
   *             <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>,
   *             <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  Action: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId?: string;

  /**
   * <p>The impersonation role ID.</p>
   */
  ImpersonationRoleId?: string;
}

export interface GetAccessControlEffectResponse {
  /**
   * <p>The rule effect.</p>
   */
  Effect?: AccessControlRuleEffect | string;

  /**
   * <p>The rules that match the given parameters, resulting in an effect.</p>
   */
  MatchedRules?: string[];
}

export interface GetDefaultRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;
}

export interface GetDefaultRetentionPolicyResponse {
  /**
   * <p>The retention policy ID.</p>
   */
  Id?: string;

  /**
   * <p>The retention policy name.</p>
   */
  Name?: string;

  /**
   * <p>The retention policy description.</p>
   */
  Description?: string;

  /**
   * <p>The retention policy folder configurations.</p>
   */
  FolderConfigurations?: FolderConfiguration[];
}

export interface GetImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization from which to retrieve the impersonation role.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The impersonation role ID to retrieve.</p>
   */
  ImpersonationRoleId: string | undefined;
}

export interface GetImpersonationRoleResponse {
  /**
   * <p>The impersonation role ID.</p>
   */
  ImpersonationRoleId?: string;

  /**
   * <p>The impersonation role name.</p>
   */
  Name?: string;

  /**
   * <p>The impersonation role type.</p>
   */
  Type?: ImpersonationRoleType | string;

  /**
   * <p>The impersonation role description.</p>
   */
  Description?: string;

  /**
   * <p>The list of rules for the given impersonation role.</p>
   */
  Rules?: ImpersonationRule[];

  /**
   * <p>The date when the impersonation role was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the impersonation role was last modified.</p>
   */
  DateModified?: Date;
}

export interface GetImpersonationRoleEffectRequest {
  /**
   * <p>The WorkMail organization where the impersonation role is defined.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The impersonation role ID to test.</p>
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
   */
  TargetUser: string | undefined;
}

/**
 * <p>The impersonation rule that matched the input.</p>
 */
export interface ImpersonationMatchedRule {
  /**
   * <p>The ID of the rule that matched the input</p>
   */
  ImpersonationRuleId?: string;

  /**
   * <p>The name of the rule that matched the input.</p>
   */
  Name?: string;
}

export interface GetImpersonationRoleEffectResponse {
  /**
   * <p>The impersonation role type.</p>
   */
  Type?: ImpersonationRoleType | string;

  /**
   * <p>
   *             <code></code>Effect of the impersonation role on the target user based on its rules. Available
   *          effects are <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect?: AccessEffect | string;

  /**
   * <p>A list of the rules that match the input and produce the configured effect.</p>
   */
  MatchedRules?: ImpersonationMatchedRule[];
}

export interface GetMailboxDetailsRequest {
  /**
   * <p>The identifier for the organization that contains the user whose mailbox details are
   *          being requested.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user whose mailbox details are being requested.</p>
   */
  UserId: string | undefined;
}

export interface GetMailboxDetailsResponse {
  /**
   * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
   */
  MailboxQuota?: number;

  /**
   * <p>The current mailbox size, in MB, for the specified user.</p>
   */
  MailboxSize?: number;
}

export interface GetMailDomainRequest {
  /**
   * <p>The WorkMail organization for which the domain is retrieved.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain from which you want to retrieve details.</p>
   */
  DomainName: string | undefined;
}

export interface GetMailDomainResponse {
  /**
   * <p>A list of the DNS records that WorkMail recommends adding in your DNS provider for the best user experience. The records configure your domain with DMARC, SPF, DKIM, and direct incoming
   *          email traffic to SES. See admin guide for more details.</p>
   */
  Records?: DnsRecord[];

  /**
   * <p>Specifies whether the domain is a test domain provided by WorkMail, or a custom domain.</p>
   */
  IsTestDomain?: boolean;

  /**
   * <p>Specifies whether the domain is the default domain for your organization.</p>
   */
  IsDefault?: boolean;

  /**
   * <p> Indicates the status of the domain ownership verification.</p>
   */
  OwnershipVerificationStatus?: DnsRecordVerificationStatus | string;

  /**
   * <p>Indicates the status of a DKIM verification.</p>
   */
  DkimVerificationStatus?: DnsRecordVerificationStatus | string;
}

export interface GetMobileDeviceAccessEffectRequest {
  /**
   * <p>The WorkMail organization to simulate the access effect for.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>Device type the simulated user will report.</p>
   */
  DeviceType?: string;

  /**
   * <p>Device model the simulated user will report.</p>
   */
  DeviceModel?: string;

  /**
   * <p>Device operating system the simulated user will report.</p>
   */
  DeviceOperatingSystem?: string;

  /**
   * <p>Device user agent the simulated user will report.</p>
   */
  DeviceUserAgent?: string;
}

/**
 * <p>The rule that a simulated user matches.</p>
 */
export interface MobileDeviceAccessMatchedRule {
  /**
   * <p>Identifier of the rule that a simulated user matches.</p>
   */
  MobileDeviceAccessRuleId?: string;

  /**
   * <p>Name of a rule that a simulated user matches.</p>
   */
  Name?: string;
}

export interface GetMobileDeviceAccessEffectResponse {
  /**
   * <p>The effect of the simulated access, <code>ALLOW</code> or <code>DENY</code>, after evaluating mobile device access rules in the WorkMail organization for the simulated
   *          user parameters.</p>
   */
  Effect?: MobileDeviceAccessRuleEffect | string;

  /**
   * <p>A list of the rules which matched the simulated user input and produced the effect.</p>
   */
  MatchedRules?: MobileDeviceAccessMatchedRule[];
}

export interface GetMobileDeviceAccessOverrideRequest {
  /**
   * <p>The WorkMail organization to which you want to apply the override.</p>
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
   */
  UserId: string | undefined;

  /**
   * <p>The mobile device to which the override applies. <code>DeviceId</code> is case insensitive.</p>
   */
  DeviceId: string | undefined;
}

export interface GetMobileDeviceAccessOverrideResponse {
  /**
   * <p>The WorkMail user to which the access override applies.</p>
   */
  UserId?: string;

  /**
   * <p>The device to which the access override applies.</p>
   */
  DeviceId?: string;

  /**
   * <p>The effect of the override, <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect?: MobileDeviceAccessRuleEffect | string;

  /**
   * <p>A description of the override.</p>
   */
  Description?: string;

  /**
   * <p>The date the override was first created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date the description was last modified.</p>
   */
  DateModified?: Date;
}

/**
 * <p>The representation of an WorkMail group.</p>
 */
export interface Group {
  /**
   * <p>The identifier of the group.</p>
   */
  Id?: string;

  /**
   * <p>The email of the group.</p>
   */
  Email?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The date indicating when the group was enabled for WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the group was disabled from WorkMail use.</p>
   */
  DisabledDate?: Date;
}

/**
 * <p>An impersonation role for the given WorkMail organization.</p>
 */
export interface ImpersonationRole {
  /**
   * <p>The identifier of the impersonation role.</p>
   */
  ImpersonationRoleId?: string;

  /**
   * <p>The impersonation role name.</p>
   */
  Name?: string;

  /**
   * <p>The impersonation role type.</p>
   */
  Type?: ImpersonationRoleType | string;

  /**
   * <p>The date when the impersonation role was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the impersonation role was last modified.</p>
   */
  DateModified?: Date;
}

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
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
 */
export interface MailboxExportJob {
  /**
   * <p>The identifier of the mailbox export job.</p>
   */
  JobId?: string;

  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   */
  EntityId?: string;

  /**
   * <p>The mailbox export job description.</p>
   */
  Description?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The path to the S3 bucket and file that the mailbox export job exports to.</p>
   */
  S3Path?: string;

  /**
   * <p>The estimated progress of the mailbox export job, in percentage points.</p>
   */
  EstimatedProgress?: number;

  /**
   * <p>The state of the mailbox export job.</p>
   */
  State?: MailboxExportJobState | string;

  /**
   * <p>The mailbox export job start timestamp.</p>
   */
  StartTime?: Date;

  /**
   * <p>The mailbox export job end timestamp.</p>
   */
  EndTime?: Date;
}

export interface ListAccessControlRulesRequest {
  /**
   * <p>The identifier for the organization.</p>
   */
  OrganizationId: string | undefined;
}

export interface ListAccessControlRulesResponse {
  /**
   * <p>The access control rules.</p>
   */
  Rules?: AccessControlRule[];
}

export interface ListAliasesRequest {
  /**
   * <p>The identifier for the organization under which the entity exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the entity for which to list the aliases.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListAliasesResponse {
  /**
   * <p>The entity's paginated aliases.</p>
   */
  Aliases?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListAvailabilityConfigurationsRequest {
  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code>'s will be
   *          listed.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not require a token.</p>
   */
  NextToken?: string;
}

export interface ListAvailabilityConfigurationsResponse {
  /**
   * <p>The list of <code>AvailabilityConfiguration</code>'s that exist for the specified WorkMail organization.</p>
   */
  AvailabilityConfigurations?: AvailabilityConfiguration[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is <code>null</code> when there are no further results to return.</p>
   */
  NextToken?: string;
}

export interface ListGroupMembersRequest {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group to which the members (users or groups) are
   *          associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p> The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The representation of a user or group.</p>
 */
export interface Member {
  /**
   * <p>The identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>A member can be a user or group.</p>
   */
  Type?: MemberType | string;

  /**
   * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The date indicating when the member was enabled for WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the member was disabled from WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export interface ListGroupMembersResponse {
  /**
   * <p>The members associated to the group.</p>
   */
  Members?: Member[];

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;
}

export interface ListGroupsRequest {
  /**
   * <p>The identifier for the organization under which the groups exist.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListGroupsResponse {
  /**
   * <p>The overview of groups for an organization.</p>
   */
  Groups?: Group[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListImpersonationRolesRequest {
  /**
   * <p>The WorkMail organization to which the listed impersonation roles belong.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token used to retrieve the next page of results. The first call doesn't require a
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results returned in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListImpersonationRolesResponse {
  /**
   * <p>The list of impersonation roles under the given WorkMail organization.</p>
   */
  Roles?: ImpersonationRole[];

  /**
   * <p>The token to retrieve the next page of results. The value is <code>null</code> when
   *          there are no results to return.</p>
   */
  NextToken?: string;
}

export interface ListMailboxExportJobsRequest {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListMailboxExportJobsResponse {
  /**
   * <p>The mailbox export job details.</p>
   */
  Jobs?: MailboxExportJob[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListMailboxPermissionsRequest {
  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource for which to list mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export enum PermissionType {
  FULL_ACCESS = "FULL_ACCESS",
  SEND_AS = "SEND_AS",
  SEND_ON_BEHALF = "SEND_ON_BEHALF",
}

/**
 * <p>Permission granted to a user, group, or resource to access a certain aspect of
 *          another user, group, or resource mailbox.</p>
 */
export interface Permission {
  /**
   * <p>The identifier of the user, group, or resource to which the permissions are
   *          granted.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The type of user, group, or resource referred to in GranteeId.</p>
   */
  GranteeType: MemberType | string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
   *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
   *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
   *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
   *          access to the mailbox, irrespective of other folder-level permissions set on the
   *          mailbox.</p>
   */
  PermissionValues: (PermissionType | string)[] | undefined;
}

export interface ListMailboxPermissionsResponse {
  /**
   * <p>One page of the user, group, or resource mailbox permissions.</p>
   */
  Permissions?: Permission[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListMailDomainsRequest {
  /**
   * <p>The WorkMail organization for which to list domains.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not require a token.</p>
   */
  NextToken?: string;
}

/**
 * <p>The data for a given domain.</p>
 */
export interface MailDomainSummary {
  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>Whether the domain is default or not.</p>
   */
  DefaultDomain?: boolean;
}

export interface ListMailDomainsResponse {
  /**
   * <p>The list of mail domain summaries, specifying domains that exist in the specified WorkMail organization, along with the information about whether the domain is or isn't the default.</p>
   */
  MailDomains?: MailDomainSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. The value becomes <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListMobileDeviceAccessOverridesRequest {
  /**
   * <p>The WorkMail organization under which to list mobile device access overrides.</p>
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
   */
  UserId?: string;

  /**
   * <p>The mobile device to which the access override applies.</p>
   */
  DeviceId?: string;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not require a token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The override object.</p>
 */
export interface MobileDeviceAccessOverride {
  /**
   * <p>The WorkMail user to which the access override applies.</p>
   */
  UserId?: string;

  /**
   * <p>The device to which the override applies.</p>
   */
  DeviceId?: string;

  /**
   * <p>The effect of the override, <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect?: MobileDeviceAccessRuleEffect | string;

  /**
   * <p>A description of the override.</p>
   */
  Description?: string;

  /**
   * <p>The date the override was first created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date the override was last modified.</p>
   */
  DateModified?: Date;
}

export interface ListMobileDeviceAccessOverridesResponse {
  /**
   * <p>The list of mobile device access overrides that exist for the specified WorkMail organization and user.</p>
   */
  Overrides?: MobileDeviceAccessOverride[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is “null” when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListMobileDeviceAccessRulesRequest {
  /**
   * <p>The WorkMail organization for which to list the rules.</p>
   */
  OrganizationId: string | undefined;
}

/**
 * <p>A rule that controls access to mobile devices for an WorkMail group.</p>
 */
export interface MobileDeviceAccessRule {
  /**
   * <p>The ID assigned to a mobile access rule.</p>
   */
  MobileDeviceAccessRuleId?: string;

  /**
   * <p>The name of a mobile access rule.</p>
   */
  Name?: string;

  /**
   * <p>The description of a mobile access rule.</p>
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect?: MobileDeviceAccessRuleEffect | string;

  /**
   * <p>Device types that a rule will match.</p>
   */
  DeviceTypes?: string[];

  /**
   * <p>Device types that a rule <b>will not</b> match. All other device types will match.</p>
   */
  NotDeviceTypes?: string[];

  /**
   * <p>Device models that a rule will match.</p>
   */
  DeviceModels?: string[];

  /**
   * <p>Device models that a rule <b>will not</b> match. All other device models will match.</p>
   */
  NotDeviceModels?: string[];

  /**
   * <p>Device operating systems that a rule will match.</p>
   */
  DeviceOperatingSystems?: string[];

  /**
   * <p>Device operating systems that a rule <b>will not</b> match. All other device types will match.</p>
   */
  NotDeviceOperatingSystems?: string[];

  /**
   * <p>Device user agents that a rule will match.</p>
   */
  DeviceUserAgents?: string[];

  /**
   * <p>Device user agents that a rule <b>will not</b> match. All other device user agents will match.</p>
   */
  NotDeviceUserAgents?: string[];

  /**
   * <p>The date and time at which an access rule was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date and time at which an access rule was modified.</p>
   */
  DateModified?: Date;
}

export interface ListMobileDeviceAccessRulesResponse {
  /**
   * <p>The list of mobile device access rules that exist under the specified WorkMail organization.</p>
   */
  Rules?: MobileDeviceAccessRule[];
}

export interface ListOrganizationsRequest {
  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The representation of an organization.</p>
 */
export interface OrganizationSummary {
  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The alias associated with the organization.</p>
   */
  Alias?: string;

  /**
   * <p>The default email domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;

  /**
   * <p>The error message associated with the organization. It is only present if unexpected
   *          behavior has occurred with regards to the organization. It provides insight or solutions
   *          regarding unexpected behavior.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The state associated with the organization.</p>
   */
  State?: string;
}

export interface ListOrganizationsResponse {
  /**
   * <p>The overview of owned organizations presented as a list of organization
   *          summaries.</p>
   */
  OrganizationSummaries?: OrganizationSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListResourceDelegatesRequest {
  /**
   * <p>The identifier for the organization that contains the resource for which delegates
   *          are listed.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the resource whose delegates are listed.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The token used to paginate through the delegates associated with a
   *          resource.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of maximum results in a page.</p>
   */
  MaxResults?: number;
}

export interface ListResourceDelegatesResponse {
  /**
   * <p>One page of the resource's delegates.</p>
   */
  Delegates?: Delegate[];

  /**
   * <p>The token used to paginate through the delegates associated with a resource. While
   *          results are still available, it has an associated value. When the last page is reached, the
   *          token is empty.</p>
   */
  NextToken?: string;
}

export interface ListResourcesRequest {
  /**
   * <p>The identifier for the organization under which the resources exist.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The representation of a resource.</p>
 */
export interface Resource {
  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The email of the resource.</p>
   */
  Email?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of the resource: equipment or room.</p>
   */
  Type?: ResourceType | string;

  /**
   * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The date indicating when the resource was enabled for WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the resource was disabled from WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export interface ListResourcesResponse {
  /**
   * <p>One page of the organization's resource representation.</p>
   */
  Resources?: Resource[];

  /**
   * <p> The token used to paginate through all the organization's resources. While results
   *          are still available, it has an associated value. When the last page is reached, the token
   *          is empty.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export interface ListUsersRequest {
  /**
   * <p>The identifier for the organization under which the users exist.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The representation of an WorkMail user.</p>
 */
export interface User {
  /**
   * <p>The identifier of the user.</p>
   */
  Id?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The name of the user.</p>
   */
  Name?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The role of the user.</p>
   */
  UserRole?: UserRole | string;

  /**
   * <p>The date indicating when the user was enabled for WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the user was disabled from WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export interface ListUsersResponse {
  /**
   * <p>The overview of users for an organization.</p>
   */
  Users?: User[];

  /**
   * <p> The token to use to retrieve the next page of results. This value is `null` when
   *          there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface PutAccessControlRuleRequest {
  /**
   * <p>The rule name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule effect.</p>
   */
  Effect: AccessControlRuleEffect | string | undefined;

  /**
   * <p>The rule description.</p>
   */
  Description: string | undefined;

  /**
   * <p>IPv4 CIDR ranges to include in the rule.</p>
   */
  IpRanges?: string[];

  /**
   * <p>IPv4 CIDR ranges to exclude from the rule.</p>
   */
  NotIpRanges?: string[];

  /**
   * <p>Access protocol actions to include in the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  Actions?: string[];

  /**
   * <p>Access protocol actions to exclude from the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  NotActions?: string[];

  /**
   * <p>User IDs to include in the rule.</p>
   */
  UserIds?: string[];

  /**
   * <p>User IDs to exclude from the rule.</p>
   */
  NotUserIds?: string[];

  /**
   * <p>The identifier of the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>Impersonation role IDs to include in the rule.</p>
   */
  ImpersonationRoleIds?: string[];

  /**
   * <p>Impersonation role IDs to exclude from the rule.</p>
   */
  NotImpersonationRoleIds?: string[];
}

export interface PutAccessControlRuleResponse {}

export interface PutEmailMonitoringConfigurationRequest {
  /**
   * <p>The ID of the organization for which the email monitoring configuration is set.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.</p>
   */
  LogGroupArn: string | undefined;
}

export interface PutEmailMonitoringConfigurationResponse {}

export interface PutInboundDmarcSettingsRequest {
  /**
   * <p>The ID of the organization that you are applying the DMARC policy to.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>Enforces or suspends a policy after it's applied.</p>
   */
  Enforced: boolean | undefined;
}

export interface PutInboundDmarcSettingsResponse {}

export interface PutMailboxPermissionsRequest {
  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource for which to update mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource to which to grant the
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
   *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
   *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
   *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
   *          access to the mailbox, irrespective of other folder-level permissions set on the
   *          mailbox.</p>
   */
  PermissionValues: (PermissionType | string)[] | undefined;
}

export interface PutMailboxPermissionsResponse {}

export interface PutMobileDeviceAccessOverrideRequest {
  /**
   * <p>Identifies the WorkMail organization for which you create the override.</p>
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
   */
  UserId: string | undefined;

  /**
   * <p>The mobile device for which you create the override. <code>DeviceId</code> is case insensitive.</p>
   */
  DeviceId: string | undefined;

  /**
   * <p>The effect of the override, <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect: MobileDeviceAccessRuleEffect | string | undefined;

  /**
   * <p>A description of the override.</p>
   */
  Description?: string;
}

export interface PutMobileDeviceAccessOverrideResponse {}

export interface PutRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The retention policy ID.</p>
   */
  Id?: string;

  /**
   * <p>The retention policy name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The retention policy description.</p>
   */
  Description?: string;

  /**
   * <p>The retention policy folder configurations.</p>
   */
  FolderConfigurations: FolderConfiguration[] | undefined;
}

export interface PutRetentionPolicyResponse {}

export interface RegisterMailDomainRequest {
  /**
   * <p>Idempotency token used when retrying requests.</p>
   */
  ClientToken?: string;

  /**
   * <p>The WorkMail organization under which you're creating the domain.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the mail domain to create in WorkMail and SES.</p>
   */
  DomainName: string | undefined;
}

export interface RegisterMailDomainResponse {}

export interface RegisterToWorkMailRequest {
  /**
   * <p>The identifier for the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the user, group, or resource to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The email for the user, group, or resource to be updated.</p>
   */
  Email: string | undefined;
}

export interface RegisterToWorkMailResponse {}

export interface ResetPasswordRequest {
  /**
   * <p>The identifier of the organization that contains the user for which the password is
   *          reset.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user for whom the password is reset.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The new password for the user.</p>
   */
  Password: string | undefined;
}

export interface ResetPasswordResponse {}

export interface StartMailboxExportJobRequest {
  /**
   * <p>The idempotency token for the client request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The mailbox export job description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3
   *          bucket.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
   *          key that encrypts the exported mailbox content.</p>
   */
  KmsKeyArn: string | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The S3 bucket prefix.</p>
   */
  S3Prefix: string | undefined;
}

export interface StartMailboxExportJobResponse {
  /**
   * <p>The job ID.</p>
   */
  JobId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>The resource can have up to 50 user-applied tags.</p>
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

export interface TestAvailabilityConfigurationRequest {
  /**
   * <p>The WorkMail organization where the availability provider will be tested.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to which the provider applies. If this field is provided, a stored availability provider associated to this domain name will be tested.</p>
   */
  DomainName?: string;

  /**
   * <p>Describes an EWS based availability provider. This is only used as input to the service.</p>
   */
  EwsProvider?: EwsAvailabilityProvider;

  /**
   * <p>Describes a Lambda based availability provider.</p>
   */
  LambdaProvider?: LambdaAvailabilityProvider;
}

export interface TestAvailabilityConfigurationResponse {
  /**
   * <p>Boolean indicating whether the test passed or failed.</p>
   */
  TestPassed?: boolean;

  /**
   * <p>String containing the reason for a failed test if <code>TestPassed</code> is false.</p>
   */
  FailureReason?: string;
}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAvailabilityConfigurationRequest {
  /**
   * <p>The WorkMail organization for which the <code>AvailabilityConfiguration</code> will be
   *          updated.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain to which the provider applies the availability configuration.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The EWS availability provider definition. The request must contain exactly one provider
   *          definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>. The previously
   *          stored provider will be overridden by the one provided.</p>
   */
  EwsProvider?: EwsAvailabilityProvider;

  /**
   * <p>The Lambda availability provider definition. The request must contain exactly one
   *          provider definition, either <code>EwsProvider</code> or <code>LambdaProvider</code>. The
   *          previously stored provider will be overridden by the one provided.</p>
   */
  LambdaProvider?: LambdaAvailabilityProvider;
}

export interface UpdateAvailabilityConfigurationResponse {}

export interface UpdateDefaultMailDomainRequest {
  /**
   * <p>The WorkMail organization for which to list domains.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The domain name that will become the default domain.</p>
   */
  DomainName: string | undefined;
}

export interface UpdateDefaultMailDomainResponse {}

export interface UpdateImpersonationRoleRequest {
  /**
   * <p>The WorkMail organization that contains the impersonation role to update.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The ID of the impersonation role to update.</p>
   */
  ImpersonationRoleId: string | undefined;

  /**
   * <p>The updated impersonation role name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The updated impersonation role type.</p>
   */
  Type: ImpersonationRoleType | string | undefined;

  /**
   * <p>The updated impersonation role description.</p>
   */
  Description?: string;

  /**
   * <p>The updated list of rules.</p>
   */
  Rules: ImpersonationRule[] | undefined;
}

export interface UpdateImpersonationRoleResponse {}

export interface UpdateMailboxQuotaRequest {
  /**
   * <p>The identifier for the organization that contains the user for whom to update the
   *          mailbox quota.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifer for the user for whom to update the mailbox quota.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The updated mailbox quota, in MB, for the specified user.</p>
   */
  MailboxQuota: number | undefined;
}

export interface UpdateMailboxQuotaResponse {}

export interface UpdateMobileDeviceAccessRuleRequest {
  /**
   * <p>The WorkMail organization under which the rule will be updated.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the rule to be updated.</p>
   */
  MobileDeviceAccessRuleId: string | undefined;

  /**
   * <p>The updated rule name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The updated rule description.</p>
   */
  Description?: string;

  /**
   * <p>The effect of the rule when it matches. Allowed values are <code>ALLOW</code> or <code>DENY</code>.</p>
   */
  Effect: MobileDeviceAccessRuleEffect | string | undefined;

  /**
   * <p>Device types that the updated rule will match.</p>
   */
  DeviceTypes?: string[];

  /**
   * <p>Device types that the updated rule <b>will not</b> match. All other device types will match.</p>
   */
  NotDeviceTypes?: string[];

  /**
   * <p>Device models that the updated rule will match.</p>
   */
  DeviceModels?: string[];

  /**
   * <p>Device models that the updated rule <b>will not</b> match. All other device models will match.</p>
   */
  NotDeviceModels?: string[];

  /**
   * <p>Device operating systems that the updated rule will match.</p>
   */
  DeviceOperatingSystems?: string[];

  /**
   * <p>Device operating systems that the updated rule <b>will not</b> match. All other device operating systems will match.</p>
   */
  NotDeviceOperatingSystems?: string[];

  /**
   * <p>User agents that the updated rule will match.</p>
   */
  DeviceUserAgents?: string[];

  /**
   * <p>User agents that the updated rule <b>will not</b> match. All other user agents will match.</p>
   */
  NotDeviceUserAgents?: string[];
}

export interface UpdateMobileDeviceAccessRuleResponse {}

export interface UpdatePrimaryEmailAddressRequest {
  /**
   * <p>The organization that contains the user, group, or resource to update.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The user, group, or resource to update.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The value of the email to be updated as primary.</p>
   */
  Email: string | undefined;
}

export interface UpdatePrimaryEmailAddressResponse {}

export interface UpdateResourceRequest {
  /**
   * <p>The identifier associated with the organization for which the resource is
   *          updated.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the resource to be updated.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the resource to be updated.</p>
   */
  Name?: string;

  /**
   * <p>The resource's booking options to be updated.</p>
   */
  BookingOptions?: BookingOptions;
}

export interface UpdateResourceResponse {}

/**
 * @internal
 */
export const AccessControlRuleFilterSensitiveLog = (obj: AccessControlRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDelegateToResourceRequestFilterSensitiveLog = (obj: AssociateDelegateToResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDelegateToResourceResponseFilterSensitiveLog = (
  obj: AssociateDelegateToResourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateMemberToGroupRequestFilterSensitiveLog = (obj: AssociateMemberToGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateMemberToGroupResponseFilterSensitiveLog = (obj: AssociateMemberToGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssumeImpersonationRoleRequestFilterSensitiveLog = (obj: AssumeImpersonationRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssumeImpersonationRoleResponseFilterSensitiveLog = (obj: AssumeImpersonationRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactedEwsAvailabilityProviderFilterSensitiveLog = (obj: RedactedEwsAvailabilityProvider): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaAvailabilityProviderFilterSensitiveLog = (obj: LambdaAvailabilityProvider): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityConfigurationFilterSensitiveLog = (obj: AvailabilityConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BookingOptionsFilterSensitiveLog = (obj: BookingOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelMailboxExportJobRequestFilterSensitiveLog = (obj: CancelMailboxExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelMailboxExportJobResponseFilterSensitiveLog = (obj: CancelMailboxExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAliasRequestFilterSensitiveLog = (obj: CreateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAliasResponseFilterSensitiveLog = (obj: CreateAliasResponse): any => ({
  ...obj,
});

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
export const CreateAvailabilityConfigurationResponseFilterSensitiveLog = (
  obj: CreateAvailabilityConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupResponseFilterSensitiveLog = (obj: CreateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImpersonationRuleFilterSensitiveLog = (obj: ImpersonationRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImpersonationRoleRequestFilterSensitiveLog = (obj: CreateImpersonationRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImpersonationRoleResponseFilterSensitiveLog = (obj: CreateImpersonationRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMobileDeviceAccessRuleRequestFilterSensitiveLog = (
  obj: CreateMobileDeviceAccessRuleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMobileDeviceAccessRuleResponseFilterSensitiveLog = (
  obj: CreateMobileDeviceAccessRuleResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainFilterSensitiveLog = (obj: Domain): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOrganizationRequestFilterSensitiveLog = (obj: CreateOrganizationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOrganizationResponseFilterSensitiveLog = (obj: CreateOrganizationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceRequestFilterSensitiveLog = (obj: CreateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceResponseFilterSensitiveLog = (obj: CreateResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DelegateFilterSensitiveLog = (obj: Delegate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessControlRuleRequestFilterSensitiveLog = (obj: DeleteAccessControlRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessControlRuleResponseFilterSensitiveLog = (obj: DeleteAccessControlRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAliasRequestFilterSensitiveLog = (obj: DeleteAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAliasResponseFilterSensitiveLog = (obj: DeleteAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAvailabilityConfigurationRequestFilterSensitiveLog = (
  obj: DeleteAvailabilityConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAvailabilityConfigurationResponseFilterSensitiveLog = (
  obj: DeleteAvailabilityConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailMonitoringConfigurationRequestFilterSensitiveLog = (
  obj: DeleteEmailMonitoringConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailMonitoringConfigurationResponseFilterSensitiveLog = (
  obj: DeleteEmailMonitoringConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupRequestFilterSensitiveLog = (obj: DeleteGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupResponseFilterSensitiveLog = (obj: DeleteGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImpersonationRoleRequestFilterSensitiveLog = (obj: DeleteImpersonationRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImpersonationRoleResponseFilterSensitiveLog = (obj: DeleteImpersonationRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMailboxPermissionsRequestFilterSensitiveLog = (obj: DeleteMailboxPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMailboxPermissionsResponseFilterSensitiveLog = (obj: DeleteMailboxPermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMobileDeviceAccessOverrideRequestFilterSensitiveLog = (
  obj: DeleteMobileDeviceAccessOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMobileDeviceAccessOverrideResponseFilterSensitiveLog = (
  obj: DeleteMobileDeviceAccessOverrideResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMobileDeviceAccessRuleRequestFilterSensitiveLog = (
  obj: DeleteMobileDeviceAccessRuleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMobileDeviceAccessRuleResponseFilterSensitiveLog = (
  obj: DeleteMobileDeviceAccessRuleResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOrganizationRequestFilterSensitiveLog = (obj: DeleteOrganizationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOrganizationResponseFilterSensitiveLog = (obj: DeleteOrganizationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceRequestFilterSensitiveLog = (obj: DeleteResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceResponseFilterSensitiveLog = (obj: DeleteResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRetentionPolicyRequestFilterSensitiveLog = (obj: DeleteRetentionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRetentionPolicyResponseFilterSensitiveLog = (obj: DeleteRetentionPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserResponseFilterSensitiveLog = (obj: DeleteUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterFromWorkMailRequestFilterSensitiveLog = (obj: DeregisterFromWorkMailRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterFromWorkMailResponseFilterSensitiveLog = (obj: DeregisterFromWorkMailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterMailDomainRequestFilterSensitiveLog = (obj: DeregisterMailDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterMailDomainResponseFilterSensitiveLog = (obj: DeregisterMailDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEmailMonitoringConfigurationRequestFilterSensitiveLog = (
  obj: DescribeEmailMonitoringConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEmailMonitoringConfigurationResponseFilterSensitiveLog = (
  obj: DescribeEmailMonitoringConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGroupRequestFilterSensitiveLog = (obj: DescribeGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGroupResponseFilterSensitiveLog = (obj: DescribeGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInboundDmarcSettingsRequestFilterSensitiveLog = (
  obj: DescribeInboundDmarcSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInboundDmarcSettingsResponseFilterSensitiveLog = (
  obj: DescribeInboundDmarcSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMailboxExportJobRequestFilterSensitiveLog = (obj: DescribeMailboxExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMailboxExportJobResponseFilterSensitiveLog = (obj: DescribeMailboxExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationRequestFilterSensitiveLog = (obj: DescribeOrganizationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrganizationResponseFilterSensitiveLog = (obj: DescribeOrganizationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourceRequestFilterSensitiveLog = (obj: DescribeResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourceResponseFilterSensitiveLog = (obj: DescribeResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserRequestFilterSensitiveLog = (obj: DescribeUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDelegateFromResourceRequestFilterSensitiveLog = (
  obj: DisassociateDelegateFromResourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDelegateFromResourceResponseFilterSensitiveLog = (
  obj: DisassociateDelegateFromResourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMemberFromGroupRequestFilterSensitiveLog = (obj: DisassociateMemberFromGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateMemberFromGroupResponseFilterSensitiveLog = (
  obj: DisassociateMemberFromGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DnsRecordFilterSensitiveLog = (obj: DnsRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FolderConfigurationFilterSensitiveLog = (obj: FolderConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessControlEffectRequestFilterSensitiveLog = (obj: GetAccessControlEffectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessControlEffectResponseFilterSensitiveLog = (obj: GetAccessControlEffectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDefaultRetentionPolicyRequestFilterSensitiveLog = (obj: GetDefaultRetentionPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDefaultRetentionPolicyResponseFilterSensitiveLog = (obj: GetDefaultRetentionPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImpersonationRoleRequestFilterSensitiveLog = (obj: GetImpersonationRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImpersonationRoleResponseFilterSensitiveLog = (obj: GetImpersonationRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImpersonationRoleEffectRequestFilterSensitiveLog = (obj: GetImpersonationRoleEffectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImpersonationMatchedRuleFilterSensitiveLog = (obj: ImpersonationMatchedRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImpersonationRoleEffectResponseFilterSensitiveLog = (obj: GetImpersonationRoleEffectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMailboxDetailsRequestFilterSensitiveLog = (obj: GetMailboxDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMailboxDetailsResponseFilterSensitiveLog = (obj: GetMailboxDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMailDomainRequestFilterSensitiveLog = (obj: GetMailDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMailDomainResponseFilterSensitiveLog = (obj: GetMailDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMobileDeviceAccessEffectRequestFilterSensitiveLog = (obj: GetMobileDeviceAccessEffectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MobileDeviceAccessMatchedRuleFilterSensitiveLog = (obj: MobileDeviceAccessMatchedRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMobileDeviceAccessEffectResponseFilterSensitiveLog = (
  obj: GetMobileDeviceAccessEffectResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMobileDeviceAccessOverrideRequestFilterSensitiveLog = (
  obj: GetMobileDeviceAccessOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMobileDeviceAccessOverrideResponseFilterSensitiveLog = (
  obj: GetMobileDeviceAccessOverrideResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImpersonationRoleFilterSensitiveLog = (obj: ImpersonationRole): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MailboxExportJobFilterSensitiveLog = (obj: MailboxExportJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessControlRulesRequestFilterSensitiveLog = (obj: ListAccessControlRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessControlRulesResponseFilterSensitiveLog = (obj: ListAccessControlRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAliasesRequestFilterSensitiveLog = (obj: ListAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAliasesResponseFilterSensitiveLog = (obj: ListAliasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailabilityConfigurationsRequestFilterSensitiveLog = (
  obj: ListAvailabilityConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailabilityConfigurationsResponseFilterSensitiveLog = (
  obj: ListAvailabilityConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupMembersRequestFilterSensitiveLog = (obj: ListGroupMembersRequest): any => ({
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
export const ListGroupMembersResponseFilterSensitiveLog = (obj: ListGroupMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsRequestFilterSensitiveLog = (obj: ListGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsResponseFilterSensitiveLog = (obj: ListGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImpersonationRolesRequestFilterSensitiveLog = (obj: ListImpersonationRolesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImpersonationRolesResponseFilterSensitiveLog = (obj: ListImpersonationRolesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMailboxExportJobsRequestFilterSensitiveLog = (obj: ListMailboxExportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMailboxExportJobsResponseFilterSensitiveLog = (obj: ListMailboxExportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMailboxPermissionsRequestFilterSensitiveLog = (obj: ListMailboxPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PermissionFilterSensitiveLog = (obj: Permission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMailboxPermissionsResponseFilterSensitiveLog = (obj: ListMailboxPermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMailDomainsRequestFilterSensitiveLog = (obj: ListMailDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MailDomainSummaryFilterSensitiveLog = (obj: MailDomainSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMailDomainsResponseFilterSensitiveLog = (obj: ListMailDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMobileDeviceAccessOverridesRequestFilterSensitiveLog = (
  obj: ListMobileDeviceAccessOverridesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MobileDeviceAccessOverrideFilterSensitiveLog = (obj: MobileDeviceAccessOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMobileDeviceAccessOverridesResponseFilterSensitiveLog = (
  obj: ListMobileDeviceAccessOverridesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMobileDeviceAccessRulesRequestFilterSensitiveLog = (obj: ListMobileDeviceAccessRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MobileDeviceAccessRuleFilterSensitiveLog = (obj: MobileDeviceAccessRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMobileDeviceAccessRulesResponseFilterSensitiveLog = (
  obj: ListMobileDeviceAccessRulesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationsRequestFilterSensitiveLog = (obj: ListOrganizationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationSummaryFilterSensitiveLog = (obj: OrganizationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationsResponseFilterSensitiveLog = (obj: ListOrganizationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceDelegatesRequestFilterSensitiveLog = (obj: ListResourceDelegatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceDelegatesResponseFilterSensitiveLog = (obj: ListResourceDelegatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesRequestFilterSensitiveLog = (obj: ListResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesResponseFilterSensitiveLog = (obj: ListResourcesResponse): any => ({
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
export const TagFilterSensitiveLog = (obj: Tag): any => ({
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
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccessControlRuleRequestFilterSensitiveLog = (obj: PutAccessControlRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccessControlRuleResponseFilterSensitiveLog = (obj: PutAccessControlRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailMonitoringConfigurationRequestFilterSensitiveLog = (
  obj: PutEmailMonitoringConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailMonitoringConfigurationResponseFilterSensitiveLog = (
  obj: PutEmailMonitoringConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutInboundDmarcSettingsRequestFilterSensitiveLog = (obj: PutInboundDmarcSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutInboundDmarcSettingsResponseFilterSensitiveLog = (obj: PutInboundDmarcSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMailboxPermissionsRequestFilterSensitiveLog = (obj: PutMailboxPermissionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMailboxPermissionsResponseFilterSensitiveLog = (obj: PutMailboxPermissionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMobileDeviceAccessOverrideRequestFilterSensitiveLog = (
  obj: PutMobileDeviceAccessOverrideRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMobileDeviceAccessOverrideResponseFilterSensitiveLog = (
  obj: PutMobileDeviceAccessOverrideResponse
): any => ({
  ...obj,
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
export const PutRetentionPolicyResponseFilterSensitiveLog = (obj: PutRetentionPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterMailDomainRequestFilterSensitiveLog = (obj: RegisterMailDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterMailDomainResponseFilterSensitiveLog = (obj: RegisterMailDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterToWorkMailRequestFilterSensitiveLog = (obj: RegisterToWorkMailRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterToWorkMailResponseFilterSensitiveLog = (obj: RegisterToWorkMailResponse): any => ({
  ...obj,
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
export const ResetPasswordResponseFilterSensitiveLog = (obj: ResetPasswordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMailboxExportJobRequestFilterSensitiveLog = (obj: StartMailboxExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMailboxExportJobResponseFilterSensitiveLog = (obj: StartMailboxExportJobResponse): any => ({
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
export const TestAvailabilityConfigurationRequestFilterSensitiveLog = (
  obj: TestAvailabilityConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EwsProvider && { EwsProvider: EwsAvailabilityProviderFilterSensitiveLog(obj.EwsProvider) }),
});

/**
 * @internal
 */
export const TestAvailabilityConfigurationResponseFilterSensitiveLog = (
  obj: TestAvailabilityConfigurationResponse
): any => ({
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
export const UpdateAvailabilityConfigurationRequestFilterSensitiveLog = (
  obj: UpdateAvailabilityConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EwsProvider && { EwsProvider: EwsAvailabilityProviderFilterSensitiveLog(obj.EwsProvider) }),
});

/**
 * @internal
 */
export const UpdateAvailabilityConfigurationResponseFilterSensitiveLog = (
  obj: UpdateAvailabilityConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDefaultMailDomainRequestFilterSensitiveLog = (obj: UpdateDefaultMailDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDefaultMailDomainResponseFilterSensitiveLog = (obj: UpdateDefaultMailDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImpersonationRoleRequestFilterSensitiveLog = (obj: UpdateImpersonationRoleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImpersonationRoleResponseFilterSensitiveLog = (obj: UpdateImpersonationRoleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMailboxQuotaRequestFilterSensitiveLog = (obj: UpdateMailboxQuotaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMailboxQuotaResponseFilterSensitiveLog = (obj: UpdateMailboxQuotaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMobileDeviceAccessRuleRequestFilterSensitiveLog = (
  obj: UpdateMobileDeviceAccessRuleRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMobileDeviceAccessRuleResponseFilterSensitiveLog = (
  obj: UpdateMobileDeviceAccessRuleResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePrimaryEmailAddressRequestFilterSensitiveLog = (obj: UpdatePrimaryEmailAddressRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePrimaryEmailAddressResponseFilterSensitiveLog = (obj: UpdatePrimaryEmailAddressResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceRequestFilterSensitiveLog = (obj: UpdateResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceResponseFilterSensitiveLog = (obj: UpdateResourceResponse): any => ({
  ...obj,
});
