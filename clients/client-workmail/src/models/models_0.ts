// smithy-typescript generated code
import type {
  AccessControlRuleEffect,
  AccessEffect,
  AvailabilityProviderType,
  DnsRecordVerificationStatus,
  EntityState,
  EntityType,
  FolderName,
  IdentityProviderAuthenticationMode,
  ImpersonationRoleType,
  MailboxExportJobState,
  MemberType,
  MobileDeviceAccessRuleEffect,
  PermissionType,
  PersonalAccessTokenConfigurationStatus,
  ResourceType,
  RetentionAction,
  UserRole,
} from "./enums";

/**
 * A rule that controls access to an WorkMail organization.
 *
 * @public
 */
export interface AccessControlRule {
  /**
   * The rule name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The rule effect.
   *
   * @public
   */
  Effect?: AccessControlRuleEffect | undefined;

  /**
   * The rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * IPv4 CIDR ranges to include in the rule.
   *
   * @public
   */
  IpRanges?: string[] | undefined;

  /**
   * IPv4 CIDR ranges to exclude from the rule.
   *
   * @public
   */
  NotIpRanges?: string[] | undefined;

  /**
   * Access protocol actions to include in the rule. Valid values include `ActiveSync`, `AutoDiscover`, `EWS`, `IMAP`, `SMTP`, `WindowsOutlook`, and `WebMail`.
   *
   * @public
   */
  Actions?: string[] | undefined;

  /**
   * Access protocol actions to exclude from the rule. Valid values include `ActiveSync`, `AutoDiscover`, `EWS`, `IMAP`, `SMTP`, `WindowsOutlook`, and `WebMail`.
   *
   * @public
   */
  NotActions?: string[] | undefined;

  /**
   * User IDs to include in the rule.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * User IDs to exclude from the rule.
   *
   * @public
   */
  NotUserIds?: string[] | undefined;

  /**
   * The date that the rule was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date that the rule was modified.
   *
   * @public
   */
  DateModified?: Date | undefined;

  /**
   * Impersonation role IDs to include in the rule.
   *
   * @public
   */
  ImpersonationRoleIds?: string[] | undefined;

  /**
   * Impersonation role IDs to exclude from the rule.
   *
   * @public
   */
  NotImpersonationRoleIds?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateDelegateToResourceRequest {
  /**
   * The organization under which the resource exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The resource for which members (users or groups) are associated.
   *
   * The identifier can accept *ResourceId*, *Resourcename*, or *email*. The following identity formats are available:
   *
   * - Resource ID: r-0123456789a0123456789b0123456789
   * - Email address: resource@domain.tld
   * - Resource name: resource
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The member (user or group) to associate to the resource.
   *
   * The entity ID can accept *UserId or GroupID*, *Username or Groupname*, or *email*.
   *
   * - Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity: entity
   *
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface AssociateDelegateToResourceResponse {}

/**
 * @public
 */
export interface AssociateMemberToGroupRequest {
  /**
   * The organization under which the group exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The group to which the member (user or group) is associated.
   *
   * The identifier can accept *GroupId*, *Groupname*, or *email*. The following identity formats are available:
   *
   * - Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: group@domain.tld
   * - Group name: group
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The member (user or group) to associate to the group.
   *
   * The member ID can accept *UserID or GroupId*, *Username or Groupname*, or *email*.
   *
   * - Member: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: member@domain.tld
   * - Member name: member
   *
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberToGroupResponse {}

/**
 * @public
 */
export interface AssumeImpersonationRoleRequest {
  /**
   * The WorkMail organization under which the impersonation role will be assumed.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The impersonation role ID to assume.
   *
   * @public
   */
  ImpersonationRoleId: string | undefined;
}

/**
 * @public
 */
export interface AssumeImpersonationRoleResponse {
  /**
   * The authentication token for the impersonation role.
   *
   * @public
   */
  Token?: string | undefined;

  /**
   * The authentication token's validity, in seconds.
   *
   * @public
   */
  ExpiresIn?: number | undefined;
}

/**
 * Describes an EWS based availability provider when returned from the service. It does not contain the password of the endpoint.
 *
 * @public
 */
export interface RedactedEwsAvailabilityProvider {
  /**
   * The endpoint of the remote EWS server.
   *
   * @public
   */
  EwsEndpoint?: string | undefined;

  /**
   * The username used to authenticate the remote EWS server.
   *
   * @public
   */
  EwsUsername?: string | undefined;
}

/**
 * Describes a Lambda based availability provider.
 *
 * @public
 */
export interface LambdaAvailabilityProvider {
  /**
   * The Amazon Resource Name (ARN) of the Lambda that acts as the availability provider.
   *
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * List all the `AvailabilityConfiguration`'s for the given WorkMail organization.
 *
 * @public
 */
export interface AvailabilityConfiguration {
  /**
   * Displays the domain to which the provider applies.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Displays the provider type that applies to this domain.
   *
   * @public
   */
  ProviderType?: AvailabilityProviderType | undefined;

  /**
   * If `ProviderType` is `EWS`, then this field contains `RedactedEwsAvailabilityProvider`. Otherwise, it is not required.
   *
   * @public
   */
  EwsProvider?: RedactedEwsAvailabilityProvider | undefined;

  /**
   * If ProviderType is `LAMBDA` then this field contains `LambdaAvailabilityProvider`. Otherwise, it is not required.
   *
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider | undefined;

  /**
   * The date and time at which the availability configuration was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date and time at which the availability configuration was last modified.
   *
   * @public
   */
  DateModified?: Date | undefined;
}

/**
 * At least one delegate must be associated to the resource to disable automatic replies from the resource.
 *
 * @public
 */
export interface BookingOptions {
  /**
   * The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.
   *
   * @public
   */
  AutoAcceptRequests?: boolean | undefined;

  /**
   * The resource's ability to automatically decline any recurring requests.
   *
   * @public
   */
  AutoDeclineRecurringRequests?: boolean | undefined;

  /**
   * The resource's ability to automatically decline any conflicting requests.
   *
   * @public
   */
  AutoDeclineConflictingRequests?: boolean | undefined;
}

/**
 * @public
 */
export interface CancelMailboxExportJobRequest {
  /**
   * The idempotency token for the client request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The job ID.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The organization ID.
   *
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
   * The organization under which the member (user or group) exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The member (user or group) to which this alias is added.
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The alias to add to the member set.
   *
   * @public
   */
  Alias: string | undefined;
}

/**
 * @public
 */
export interface CreateAliasResponse {}

/**
 * Describes an EWS based availability provider. This is only used as input to the service.
 *
 * @public
 */
export interface EwsAvailabilityProvider {
  /**
   * The endpoint of the remote EWS server.
   *
   * @public
   */
  EwsEndpoint: string | undefined;

  /**
   * The username used to authenticate the remote EWS server.
   *
   * @public
   */
  EwsUsername: string | undefined;

  /**
   * The password used to authenticate the remote EWS server.
   *
   * @public
   */
  EwsPassword: string | undefined;
}

/**
 * @public
 */
export interface CreateAvailabilityConfigurationRequest {
  /**
   * An idempotent token that ensures that an API request is executed only once.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The WorkMail organization for which the `AvailabilityConfiguration` will be created.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain to which the provider applies.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either `EwsProvider` or `LambdaProvider`.
   *
   * @public
   */
  EwsProvider?: EwsAvailabilityProvider | undefined;

  /**
   * Lambda availability provider definition. The request must contain exactly one provider definition, either `EwsProvider` or `LambdaProvider`.
   *
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider | undefined;
}

/**
 * @public
 */
export interface CreateAvailabilityConfigurationResponse {}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * The organization under which the group is to be created.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If this parameter is enabled, the group will be hidden from the address book.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * The identifier of the group.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdentityCenterApplicationRequest {
  /**
   * The name of the IAM Identity Center application.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * The idempotency token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdentityCenterApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * The rules for the given impersonation role.
 *
 * @public
 */
export interface ImpersonationRule {
  /**
   * The identifier of the rule.
   *
   * @public
   */
  ImpersonationRuleId: string | undefined;

  /**
   * The rule name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The effect of the rule when it matches the input. Allowed effect values are `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect: AccessEffect | undefined;

  /**
   * A list of user IDs that match the rule.
   *
   * @public
   */
  TargetUsers?: string[] | undefined;

  /**
   * A list of user IDs that don't match the rule.
   *
   * @public
   */
  NotTargetUsers?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateImpersonationRoleRequest {
  /**
   * The idempotency token for the client request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The WorkMail organization to create the new impersonation role within.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The name of the new impersonation role.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The impersonation role's type. The available impersonation role types are `READ_ONLY` or `FULL_ACCESS`.
   *
   * @public
   */
  Type: ImpersonationRoleType | undefined;

  /**
   * The description of the new impersonation role.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of rules for the impersonation role.
   *
   * @public
   */
  Rules: ImpersonationRule[] | undefined;
}

/**
 * @public
 */
export interface CreateImpersonationRoleResponse {
  /**
   * The new impersonation role ID.
   *
   * @public
   */
  ImpersonationRoleId?: string | undefined;
}

/**
 * @public
 */
export interface CreateMobileDeviceAccessRuleRequest {
  /**
   * The WorkMail organization under which the rule will be created.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The idempotency token for the client request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The rule name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The effect of the rule when it matches. Allowed values are `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect: MobileDeviceAccessRuleEffect | undefined;

  /**
   * Device types that the rule will match.
   *
   * @public
   */
  DeviceTypes?: string[] | undefined;

  /**
   * Device types that the rule **will not** match. All other device types will match.
   *
   * @public
   */
  NotDeviceTypes?: string[] | undefined;

  /**
   * Device models that the rule will match.
   *
   * @public
   */
  DeviceModels?: string[] | undefined;

  /**
   * Device models that the rule **will not** match. All other device models will match.
   *
   * @public
   */
  NotDeviceModels?: string[] | undefined;

  /**
   * Device operating systems that the rule will match.
   *
   * @public
   */
  DeviceOperatingSystems?: string[] | undefined;

  /**
   * Device operating systems that the rule **will not** match. All other device operating systems will match.
   *
   * @public
   */
  NotDeviceOperatingSystems?: string[] | undefined;

  /**
   * Device user agents that the rule will match.
   *
   * @public
   */
  DeviceUserAgents?: string[] | undefined;

  /**
   * Device user agents that the rule **will not** match. All other device user agents will match.
   *
   * @public
   */
  NotDeviceUserAgents?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateMobileDeviceAccessRuleResponse {
  /**
   * The identifier for the newly created mobile device access rule.
   *
   * @public
   */
  MobileDeviceAccessRuleId?: string | undefined;
}

/**
 * The domain to associate with an WorkMail organization.
 *
 * When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see [Adding a domain](https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html) in the *WorkMail Administrator Guide*.
 *
 * @public
 */
export interface Domain {
  /**
   * The fully qualified domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.
   *
   * @public
   */
  HostedZoneId?: string | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationRequest {
  /**
   * The AWS Directory Service directory ID.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The organization alias.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The idempotency token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The email domains to associate with the organization.
   *
   * @public
   */
  Domains?: Domain[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of a customer managed key from AWS KMS.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * When `true`, allows organization interoperability between WorkMail and Microsoft Exchange. If `true`, you must include a AD Connector directory ID in the request.
   *
   * @public
   */
  EnableInteroperability?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateOrganizationResponse {
  /**
   * The organization ID.
   *
   * @public
   */
  OrganizationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceRequest {
  /**
   * The identifier associated with the organization for which the resource is created.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The name of the new resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the new resource. The available types are `equipment` and `room`.
   *
   * @public
   */
  Type: ResourceType | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If this parameter is enabled, the resource will be hidden from the address book.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateResourceResponse {
  /**
   * The identifier of the new resource.
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The identifier of the organization for which the user is created.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The display name for the new user.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The password for the new user.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The role of the new user.
   *
   * You cannot pass *SYSTEM_USER* or *RESOURCE* role in a single request. When a user role is not selected, the default role of *USER* is selected.
   *
   * @public
   */
  Role?: UserRole | undefined;

  /**
   * The first name of the new user.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The last name of the new user.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * If this parameter is enabled, the user will be hidden from the address book.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;

  /**
   * User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *
   * @public
   */
  IdentityProviderUserId?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The identifier for the new user.
   *
   * @public
   */
  UserId?: string | undefined;
}

/**
 * The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
 *
 * @public
 */
export interface Delegate {
  /**
   * The identifier for the user or group associated as the resource's delegate.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the delegate: user or group.
   *
   * @public
   */
  Type: MemberType | undefined;
}

/**
 * @public
 */
export interface DeleteAccessControlRuleRequest {
  /**
   * The identifier for the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The name of the access control rule.
   *
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
   * The identifier for the organization under which the user exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the member (user or group) from which to have the aliases removed.
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The aliases to be removed from the user's set of aliases. Duplicate entries in the list are collapsed into single entries (the list is transformed into a set).
   *
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
   * The WorkMail organization for which the `AvailabilityConfiguration` will be deleted.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain for which the `AvailabilityConfiguration` will be deleted.
   *
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
   * The ID of the organization from which the email monitoring configuration is deleted.
   *
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
   * The organization that contains the group.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the group to be deleted.
   *
   * The identifier can be the *GroupId*, or *Groupname*. The following identity formats are available:
   *
   * - Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Group name: group
   *
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
   * The Amazon Resource Name (ARN) of the application.
   *
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
   * The Organization ID.
   *
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
   * The WorkMail organization from which to delete the impersonation role.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The ID of the impersonation role to delete.
   *
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
   * The identifier of the organization under which the member (user or group) exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the entity that owns the mailbox.
   *
   * The identifier can be *UserId or Group Id*, *Username or Groupname*, or *email*.
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The identifier of the entity for which to delete granted permissions.
   *
   * The identifier can be *UserId, ResourceID, or Group Id*, *Username or Groupname*, or *email*.
   *
   * - Grantee ID: 12345678-1234-1234-1234-123456789012,r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: grantee@domain.tld
   * - Grantee name: grantee
   *
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
   * The WorkMail organization for which the access override will be deleted.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The WorkMail user for which you want to delete the override. Accepts the following types of user identities:
   *
   * - User ID: `12345678-1234-1234-1234-123456789012` or `S-1-1-12-1234567890-123456789-123456789-1234`
   * - Email address: `user@domain.tld`
   * - User name: `user`
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The mobile device for which you delete the override. `DeviceId` is case insensitive.
   *
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
   * The WorkMail organization under which the rule will be deleted.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the rule to be deleted.
   *
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
   * The idempotency token associated with the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * If true, deletes the AWS Directory Service directory associated with the organization.
   *
   * @public
   */
  DeleteDirectory: boolean | undefined;

  /**
   * Deletes a WorkMail organization even if the organization has enabled users.
   *
   * @public
   */
  ForceDelete?: boolean | undefined;

  /**
   * Deletes IAM Identity Center application for WorkMail. This action does not affect authentication settings for any organization.
   *
   * @public
   */
  DeleteIdentityCenterApplication?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteOrganizationResponse {
  /**
   * The organization ID.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The state of the organization.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export interface DeletePersonalAccessTokenRequest {
  /**
   * The Organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The Personal Access Token ID.
   *
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
   * The identifier associated with the organization from which the resource is deleted.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the resource to be deleted.
   *
   * The identifier can accept *ResourceId*, or *Resourcename*. The following identity formats are available:
   *
   * - Resource ID: r-0123456789a0123456789b0123456789
   * - Resource name: resource
   *
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
   * The organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The retention policy ID.
   *
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
   * The organization that contains the user to be deleted.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the user to be deleted.
   *
   * The identifier can be the *UserId* or *Username*. The following identity formats are available:
   *
   * - User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - User name: user
   *
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
   * The identifier for the organization under which the WorkMail entity exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the member to be updated.
   *
   * The identifier can be *UserId, ResourceId, or Group Id*, *Username, Resourcename, or Groupname*, or *email*.
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
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
   * The WorkMail organization for which the domain will be deregistered.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain to deregister in WorkMail and SES.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeregisterMailDomainResponse {}

/**
 * @public
 */
export interface DescribeEmailMonitoringConfigurationRequest {
  /**
   * The ID of the organization for which the email monitoring configuration is described.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEmailMonitoringConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.
   *
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * The identifier for the organization under which the entity exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The email under which the entity exists.
   *
   * @public
   */
  Email: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * The entity ID under which the entity exists.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * Username, GroupName, or ResourceName based on entity type.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Entity type.
   *
   * @public
   */
  Type?: EntityType | undefined;
}

/**
 * @public
 */
export interface DescribeGroupRequest {
  /**
   * The identifier for the organization under which the group exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the group to be described.
   *
   * The identifier can accept *GroupId*, *Groupname*, or *email*. The following identity formats are available:
   *
   * - Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: group@domain.tld
   * - Group name: group
   *
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupResponse {
  /**
   * The identifier of the described group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The name of the described group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The email of the described group.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The state of the user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail).
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * The date and time when a user was registered to WorkMail, in UNIX epoch time format.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date and time when a user was deregistered from WorkMail, in UNIX epoch time format.
   *
   * @public
   */
  DisabledDate?: Date | undefined;

  /**
   * If the value is set to *true*, the group is hidden from the address book.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationRequest {
  /**
   * The Organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * The IAM Identity Center configuration.
 *
 * @public
 */
export interface IdentityCenterConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the of IAM Identity Center instance. Must be in the same AWS account and region as WorkMail organization.
   *
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of IAMIdentity Center Application for WorkMail. Must be created by the WorkMail API, see CreateIdentityCenterApplication.
   *
   * @public
   */
  ApplicationArn: string | undefined;
}

/**
 * Displays the Personal Access Token status.
 *
 * @public
 */
export interface PersonalAccessTokenConfiguration {
  /**
   * The status of the Personal Access Token allowed for the organization.
   *
   * - *Active* - Mailbox users can login to the web application and choose *Settings* to see the new *Personal Access Tokens* page to create and delete the Personal Access Tokens. Mailbox users can use the Personal Access Tokens to set up mailbox connection from desktop or mobile email clients.
   * - *Inactive* - Personal Access Tokens are disabled for your organization. Mailbox users can’t create, list, or delete Personal Access Tokens and can’t use them to connect to their mailboxes from desktop or mobile email clients.
   *
   * @public
   */
  Status: PersonalAccessTokenConfigurationStatus | undefined;

  /**
   * The validity of the Personal Access Token status in days.
   *
   * @public
   */
  LifetimeInDays?: number | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigurationResponse {
  /**
   * The authentication mode used in WorkMail.
   *
   * @public
   */
  AuthenticationMode?: IdentityProviderAuthenticationMode | undefined;

  /**
   * The details of the IAM Identity Center configuration.
   *
   * @public
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration | undefined;

  /**
   * The details of the Personal Access Token configuration.
   *
   * @public
   */
  PersonalAccessTokenConfiguration?: PersonalAccessTokenConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeInboundDmarcSettingsRequest {
  /**
   * Lists the ID of the given organization.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeInboundDmarcSettingsResponse {
  /**
   * Lists the enforcement setting of the applied policy.
   *
   * @public
   */
  Enforced?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeMailboxExportJobRequest {
  /**
   * The mailbox export job ID.
   *
   * @public
   */
  JobId: string | undefined;

  /**
   * The organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeMailboxExportJobResponse {
  /**
   * The identifier of the user or resource associated with the mailbox.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The mailbox export job description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple Storage Service (Amazon S3) bucket.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The S3 bucket prefix.
   *
   * @public
   */
  S3Prefix?: string | undefined;

  /**
   * The path to the S3 bucket and file that the mailbox export job is exporting to.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The estimated progress of the mailbox export job, in percentage points.
   *
   * @public
   */
  EstimatedProgress?: number | undefined;

  /**
   * The state of the mailbox export job.
   *
   * @public
   */
  State?: MailboxExportJobState | undefined;

  /**
   * Error information for failed mailbox export jobs.
   *
   * @public
   */
  ErrorInfo?: string | undefined;

  /**
   * The mailbox export job start timestamp.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The mailbox export job end timestamp.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationRequest {
  /**
   * The identifier for the organization to be described.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationResponse {
  /**
   * The identifier of an organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The alias for an organization.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The state of an organization.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The identifier for the directory associated with an WorkMail organization.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The type of directory associated with the WorkMail organization.
   *
   * @public
   */
  DirectoryType?: string | undefined;

  /**
   * The default mail domain associated with the organization.
   *
   * @public
   */
  DefaultMailDomain?: string | undefined;

  /**
   * The date at which the organization became usable in the WorkMail context, in UNIX epoch time format.
   *
   * @public
   */
  CompletedDate?: Date | undefined;

  /**
   * (Optional) The error message indicating if unexpected behavior was encountered with regards to the organization.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the organization.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The user ID of the migration admin if migration is enabled for the organization.
   *
   * @public
   */
  MigrationAdmin?: string | undefined;

  /**
   * Indicates if interoperability is enabled for this organization.
   *
   * @public
   */
  InteroperabilityEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeResourceRequest {
  /**
   * The identifier associated with the organization for which the resource is described.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the resource to be described.
   *
   * The identifier can accept *ResourceId*, *Resourcename*, or *email*. The following identity formats are available:
   *
   * - Resource ID: r-0123456789a0123456789b0123456789
   * - Email address: resource@domain.tld
   * - Resource name: resource
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceResponse {
  /**
   * The identifier of the described resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The email of the described resource.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The name of the described resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the described resource.
   *
   * @public
   */
  Type?: ResourceType | undefined;

  /**
   * The booking options for the described resource.
   *
   * @public
   */
  BookingOptions?: BookingOptions | undefined;

  /**
   * The state of the resource: enabled (registered to WorkMail), disabled (deregistered or never registered to WorkMail), or deleted.
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * The date and time when a resource was enabled for WorkMail, in UNIX epoch time format.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date and time when a resource was disabled from WorkMail, in UNIX epoch time format.
   *
   * @public
   */
  DisabledDate?: Date | undefined;

  /**
   * Description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If enabled, the resource is hidden from the global address list.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * The identifier for the organization under which the user exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the user to be described.
   *
   * The identifier can be the *UserId*, *Username*, or *email*. The following identity formats are available:
   *
   * - User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: user@domain.tld
   * - User name: user
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * The identifier for the described user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The name for the user.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The email of the user.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The display name of the user.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The state of a user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail).
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * In certain cases, other entities are modeled as users. If interoperability is enabled, resources are imported into WorkMail as users. Because different WorkMail organizations rely on different directory types, administrators can distinguish between an unregistered user (account is disabled and has a user role) and the directory administrators. The values are USER, RESOURCE, SYSTEM_USER, and REMOTE_USER.
   *
   * @public
   */
  UserRole?: UserRole | undefined;

  /**
   * The date and time at which the user was enabled for WorkMailusage, in UNIX epoch time format.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date and time at which the user was disabled for WorkMail usage, in UNIX epoch time format.
   *
   * @public
   */
  DisabledDate?: Date | undefined;

  /**
   * The date when the mailbox was created for the user.
   *
   * @public
   */
  MailboxProvisionedDate?: Date | undefined;

  /**
   * The date when the mailbox was removed for the user.
   *
   * @public
   */
  MailboxDeprovisionedDate?: Date | undefined;

  /**
   * First name of the user.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * Last name of the user.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * If enabled, the user is hidden from the global address list.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;

  /**
   * Initials of the user.
   *
   * @public
   */
  Initials?: string | undefined;

  /**
   * User's contact number.
   *
   * @public
   */
  Telephone?: string | undefined;

  /**
   * Street where the user is located.
   *
   * @public
   */
  Street?: string | undefined;

  /**
   * Job title of the user.
   *
   * @public
   */
  JobTitle?: string | undefined;

  /**
   * City where the user is located.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * Company of the user.
   *
   * @public
   */
  Company?: string | undefined;

  /**
   * Zip code of the user.
   *
   * @public
   */
  ZipCode?: string | undefined;

  /**
   * Department of the user.
   *
   * @public
   */
  Department?: string | undefined;

  /**
   * Country where the user is located.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Office where the user is located.
   *
   * @public
   */
  Office?: string | undefined;

  /**
   * User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *
   * @public
   */
  IdentityProviderUserId?: string | undefined;

  /**
   * Identity Store ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *
   * @public
   */
  IdentityProviderIdentityStoreId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDelegateFromResourceRequest {
  /**
   * The identifier for the organization under which the resource exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the resource from which delegates' set members are removed.
   *
   * The identifier can accept *ResourceId*, *Resourcename*, or *email*. The following identity formats are available:
   *
   * - Resource ID: r-0123456789a0123456789b0123456789
   * - Email address: resource@domain.tld
   * - Resource name: resource
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The identifier for the member (user, group) to be removed from the resource's delegates.
   *
   * The entity ID can accept *UserId or GroupID*, *Username or Groupname*, or *email*.
   *
   * - Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity: entity
   *
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
   * The identifier for the organization under which the group exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the group from which members are removed.
   *
   * The identifier can accept *GroupId*, *Groupname*, or *email*. The following identity formats are available:
   *
   * - Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: group@domain.tld
   * - Group name: group
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The identifier for the member to be removed from the group.
   *
   * The member ID can accept *UserID or GroupId*, *Username or Groupname*, or *email*.
   *
   * - Member ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: member@domain.tld
   * - Member name: member
   *
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberFromGroupResponse {}

/**
 * A DNS record uploaded to your DNS provider.
 *
 * @public
 */
export interface DnsRecord {
  /**
   * The RFC 1035 record type. Possible values: `CNAME`, `A`, `MX`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The DNS hostname.- For example, `domain.example.com`.
   *
   * @public
   */
  Hostname?: string | undefined;

  /**
   * The value returned by the DNS for a query to that hostname and record type.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The configuration applied to an organization's folders by its retention policy.
 *
 * @public
 */
export interface FolderConfiguration {
  /**
   * The folder name.
   *
   * @public
   */
  Name: FolderName | undefined;

  /**
   * The action to take on the folder contents at the end of the folder configuration period.
   *
   * @public
   */
  Action: RetentionAction | undefined;

  /**
   * The number of days for which the folder-configuration action applies.
   *
   * @public
   */
  Period?: number | undefined;
}

/**
 * @public
 */
export interface GetAccessControlEffectRequest {
  /**
   * The identifier for the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The IPv4 address.
   *
   * @public
   */
  IpAddress: string | undefined;

  /**
   * The access protocol action. Valid values include `ActiveSync`, `AutoDiscover`, `EWS`, `IMAP`, `SMTP`, `WindowsOutlook`, and `WebMail`.
   *
   * @public
   */
  Action: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The impersonation role ID.
   *
   * @public
   */
  ImpersonationRoleId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessControlEffectResponse {
  /**
   * The rule effect.
   *
   * @public
   */
  Effect?: AccessControlRuleEffect | undefined;

  /**
   * The rules that match the given parameters, resulting in an effect.
   *
   * @public
   */
  MatchedRules?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDefaultRetentionPolicyRequest {
  /**
   * The organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultRetentionPolicyResponse {
  /**
   * The retention policy ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The retention policy name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The retention policy description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The retention policy folder configurations.
   *
   * @public
   */
  FolderConfigurations?: FolderConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetImpersonationRoleRequest {
  /**
   * The WorkMail organization from which to retrieve the impersonation role.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The impersonation role ID to retrieve.
   *
   * @public
   */
  ImpersonationRoleId: string | undefined;
}

/**
 * @public
 */
export interface GetImpersonationRoleResponse {
  /**
   * The impersonation role ID.
   *
   * @public
   */
  ImpersonationRoleId?: string | undefined;

  /**
   * The impersonation role name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The impersonation role type.
   *
   * @public
   */
  Type?: ImpersonationRoleType | undefined;

  /**
   * The impersonation role description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of rules for the given impersonation role.
   *
   * @public
   */
  Rules?: ImpersonationRule[] | undefined;

  /**
   * The date when the impersonation role was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date when the impersonation role was last modified.
   *
   * @public
   */
  DateModified?: Date | undefined;
}

/**
 * @public
 */
export interface GetImpersonationRoleEffectRequest {
  /**
   * The WorkMail organization where the impersonation role is defined.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The impersonation role ID to test.
   *
   * @public
   */
  ImpersonationRoleId: string | undefined;

  /**
   * The WorkMail organization user chosen to test the impersonation role. The following identity formats are available:
   *
   * - User ID: `12345678-1234-1234-1234-123456789012` or `S-1-1-12-1234567890-123456789-123456789-1234`
   * - Email address: `user@domain.tld`
   * - User name: `user`
   *
   * @public
   */
  TargetUser: string | undefined;
}

/**
 * The impersonation rule that matched the input.
 *
 * @public
 */
export interface ImpersonationMatchedRule {
  /**
   * The ID of the rule that matched the input
   *
   * @public
   */
  ImpersonationRuleId?: string | undefined;

  /**
   * The name of the rule that matched the input.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetImpersonationRoleEffectResponse {
  /**
   * The impersonation role type.
   *
   * @public
   */
  Type?: ImpersonationRoleType | undefined;

  /**
   * Effect of the impersonation role on the target user based on its rules. Available effects are `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect?: AccessEffect | undefined;

  /**
   * A list of the rules that match the input and produce the configured effect.
   *
   * @public
   */
  MatchedRules?: ImpersonationMatchedRule[] | undefined;
}

/**
 * @public
 */
export interface GetMailboxDetailsRequest {
  /**
   * The identifier for the organization that contains the user whose mailbox details are being requested.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the user whose mailbox details are being requested.
   *
   * The identifier can be the *UserId*, *Username*, or *email*. The following identity formats are available:
   *
   * - User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: user@domain.tld
   * - User name: user
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface GetMailboxDetailsResponse {
  /**
   * The maximum allowed mailbox size, in MB, for the specified user.
   *
   * @public
   */
  MailboxQuota?: number | undefined;

  /**
   * The current mailbox size, in MB, for the specified user.
   *
   * @public
   */
  MailboxSize?: number | undefined;
}

/**
 * @public
 */
export interface GetMailDomainRequest {
  /**
   * The WorkMail organization for which the domain is retrieved.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain from which you want to retrieve details.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetMailDomainResponse {
  /**
   * A list of the DNS records that WorkMail recommends adding in your DNS provider for the best user experience. The records configure your domain with DMARC, SPF, DKIM, and direct incoming email traffic to SES. See admin guide for more details.
   *
   * @public
   */
  Records?: DnsRecord[] | undefined;

  /**
   * Specifies whether the domain is a test domain provided by WorkMail, or a custom domain.
   *
   * @public
   */
  IsTestDomain?: boolean | undefined;

  /**
   * Specifies whether the domain is the default domain for your organization.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * Indicates the status of the domain ownership verification.
   *
   * @public
   */
  OwnershipVerificationStatus?: DnsRecordVerificationStatus | undefined;

  /**
   * Indicates the status of a DKIM verification.
   *
   * @public
   */
  DkimVerificationStatus?: DnsRecordVerificationStatus | undefined;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessEffectRequest {
  /**
   * The WorkMail organization to simulate the access effect for.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * Device type the simulated user will report.
   *
   * @public
   */
  DeviceType?: string | undefined;

  /**
   * Device model the simulated user will report.
   *
   * @public
   */
  DeviceModel?: string | undefined;

  /**
   * Device operating system the simulated user will report.
   *
   * @public
   */
  DeviceOperatingSystem?: string | undefined;

  /**
   * Device user agent the simulated user will report.
   *
   * @public
   */
  DeviceUserAgent?: string | undefined;
}

/**
 * The rule that a simulated user matches.
 *
 * @public
 */
export interface MobileDeviceAccessMatchedRule {
  /**
   * Identifier of the rule that a simulated user matches.
   *
   * @public
   */
  MobileDeviceAccessRuleId?: string | undefined;

  /**
   * Name of a rule that a simulated user matches.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessEffectResponse {
  /**
   * The effect of the simulated access, `ALLOW` or `DENY`, after evaluating mobile device access rules in the WorkMail organization for the simulated user parameters.
   *
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect | undefined;

  /**
   * A list of the rules which matched the simulated user input and produced the effect.
   *
   * @public
   */
  MatchedRules?: MobileDeviceAccessMatchedRule[] | undefined;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessOverrideRequest {
  /**
   * The WorkMail organization to which you want to apply the override.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * Identifies the WorkMail user for the override. Accepts the following types of user identities:
   *
   * - User ID: `12345678-1234-1234-1234-123456789012` or `S-1-1-12-1234567890-123456789-123456789-1234`
   * - Email address: `user@domain.tld`
   * - User name: `user`
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The mobile device to which the override applies. `DeviceId` is case insensitive.
   *
   * @public
   */
  DeviceId: string | undefined;
}

/**
 * @public
 */
export interface GetMobileDeviceAccessOverrideResponse {
  /**
   * The WorkMail user to which the access override applies.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The device to which the access override applies.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The effect of the override, `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect | undefined;

  /**
   * A description of the override.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date the override was first created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date the description was last modified.
   *
   * @public
   */
  DateModified?: Date | undefined;
}

/**
 * @public
 */
export interface GetPersonalAccessTokenMetadataRequest {
  /**
   * The Organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The Personal Access Token ID.
   *
   * @public
   */
  PersonalAccessTokenId: string | undefined;
}

/**
 * @public
 */
export interface GetPersonalAccessTokenMetadataResponse {
  /**
   * The Personal Access Token ID.
   *
   * @public
   */
  PersonalAccessTokenId?: string | undefined;

  /**
   * The WorkMail User ID.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The Personal Access Token name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date when the Personal Access Token ID was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date when the Personal Access Token ID was last used.
   *
   * @public
   */
  DateLastUsed?: Date | undefined;

  /**
   * The time when the Personal Access Token ID will expire.
   *
   * @public
   */
  ExpiresTime?: Date | undefined;

  /**
   * Lists all the Personal Access Token permissions for a mailbox.
   *
   * @public
   */
  Scopes?: string[] | undefined;
}

/**
 * The representation of an WorkMail group.
 *
 * @public
 */
export interface Group {
  /**
   * The identifier of the group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The email of the group.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the group, which can be ENABLED, DISABLED, or DELETED.
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * The date indicating when the group was enabled for WorkMail use.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date indicating when the group was disabled from WorkMail use.
   *
   * @public
   */
  DisabledDate?: Date | undefined;
}

/**
 * The identifier that contains the Group ID and name of a group.
 *
 * @public
 */
export interface GroupIdentifier {
  /**
   * Group ID that matched the group.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * Group name that matched the group.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * An impersonation role for the given WorkMail organization.
 *
 * @public
 */
export interface ImpersonationRole {
  /**
   * The identifier of the impersonation role.
   *
   * @public
   */
  ImpersonationRoleId?: string | undefined;

  /**
   * The impersonation role name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The impersonation role type.
   *
   * @public
   */
  Type?: ImpersonationRoleType | undefined;

  /**
   * The date when the impersonation role was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date when the impersonation role was last modified.
   *
   * @public
   */
  DateModified?: Date | undefined;
}

/**
 * The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.
 *
 * @public
 */
export interface MailboxExportJob {
  /**
   * The identifier of the mailbox export job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The identifier of the user or resource associated with the mailbox.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The mailbox export job description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * The path to the S3 bucket and file that the mailbox export job exports to.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * The estimated progress of the mailbox export job, in percentage points.
   *
   * @public
   */
  EstimatedProgress?: number | undefined;

  /**
   * The state of the mailbox export job.
   *
   * @public
   */
  State?: MailboxExportJobState | undefined;

  /**
   * The mailbox export job start timestamp.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The mailbox export job end timestamp.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessControlRulesRequest {
  /**
   * The identifier for the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface ListAccessControlRulesResponse {
  /**
   * The access control rules.
   *
   * @public
   */
  Rules?: AccessControlRule[] | undefined;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * The identifier for the organization under which the entity exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the entity for which to list the aliases.
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * The entity's paginated aliases.
   *
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailabilityConfigurationsRequest {
  /**
   * The WorkMail organization for which the `AvailabilityConfiguration`'s will be listed.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not require a token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailabilityConfigurationsResponse {
  /**
   * The list of `AvailabilityConfiguration`'s that exist for the specified WorkMail organization.
   *
   * @public
   */
  AvailabilityConfigurations?: AvailabilityConfiguration[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is `null` when there are no further results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupMembersRequest {
  /**
   * The identifier for the organization under which the group exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the group to which the members (users or groups) are associated.
   *
   * The identifier can accept *GroupId*, *Groupname*, or *email*. The following identity formats are available:
   *
   * - Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: group@domain.tld
   * - Group name: group
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The representation of a user or group.
 *
 * @public
 */
export interface Member {
  /**
   * The identifier of the member.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the member.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A member can be a user or group.
   *
   * @public
   */
  Type?: MemberType | undefined;

  /**
   * The state of the member, which can be ENABLED, DISABLED, or DELETED.
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * The date indicating when the member was enabled for WorkMail use.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date indicating when the member was disabled from WorkMail use.
   *
   * @public
   */
  DisabledDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListGroupMembersResponse {
  /**
   * The members associated to the group.
   *
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filtering options for *ListGroups* operation. This is only used as input to Operation.
 *
 * @public
 */
export interface ListGroupsFilters {
  /**
   * Filters only groups with the provided name prefix.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * Filters only groups with the provided primary email prefix.
   *
   * @public
   */
  PrimaryEmailPrefix?: string | undefined;

  /**
   * Filters only groups with the provided state.
   *
   * @public
   */
  State?: EntityState | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The identifier for the organization under which the groups exist.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limit the search results based on the filter criteria. Only one filter per request is supported.
   *
   * @public
   */
  Filters?: ListGroupsFilters | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * The overview of groups for an organization.
   *
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filtering options for *ListGroupsForEntity* operation. This is only used as input to Operation.
 *
 * @public
 */
export interface ListGroupsForEntityFilters {
  /**
   * Filters only group names that start with the provided name prefix.
   *
   * @public
   */
  GroupNamePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsForEntityRequest {
  /**
   * The identifier for the organization under which the entity exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the entity.
   *
   * The entity ID can accept *UserId or GroupID*, *Username or Groupname*, or *email*.
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * Limit the search results based on the filter criteria.
   *
   * @public
   */
  Filters?: ListGroupsForEntityFilters | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListGroupsForEntityResponse {
  /**
   * The overview of groups in an organization.
   *
   * @public
   */
  Groups?: GroupIdentifier[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImpersonationRolesRequest {
  /**
   * The WorkMail organization to which the listed impersonation roles belong.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The token used to retrieve the next page of results. The first call doesn't require a token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results returned in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListImpersonationRolesResponse {
  /**
   * The list of impersonation roles under the given WorkMail organization.
   *
   * @public
   */
  Roles?: ImpersonationRole[] | undefined;

  /**
   * The token to retrieve the next page of results. The value is `null` when there are no results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMailboxExportJobsRequest {
  /**
   * The organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMailboxExportJobsResponse {
  /**
   * The mailbox export job details.
   *
   * @public
   */
  Jobs?: MailboxExportJob[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMailboxPermissionsRequest {
  /**
   * The identifier of the organization under which the user, group, or resource exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the user, or resource for which to list mailbox permissions.
   *
   * The entity ID can accept *UserId or ResourceId*, *Username or Resourcename*, or *email*.
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, or r-0123456789a0123456789b0123456789
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
 *
 * @public
 */
export interface Permission {
  /**
   * The identifier of the user, group, or resource to which the permissions are granted.
   *
   * @public
   */
  GranteeId: string | undefined;

  /**
   * The type of user, group, or resource referred to in GranteeId.
   *
   * @public
   */
  GranteeType: MemberType | undefined;

  /**
   * The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.
   *
   * @public
   */
  PermissionValues: PermissionType[] | undefined;
}

/**
 * @public
 */
export interface ListMailboxPermissionsResponse {
  /**
   * One page of the user, group, or resource mailbox permissions.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMailDomainsRequest {
  /**
   * The WorkMail organization for which to list domains.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not require a token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The data for a given domain.
 *
 * @public
 */
export interface MailDomainSummary {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Whether the domain is default or not.
   *
   * @public
   */
  DefaultDomain?: boolean | undefined;
}

/**
 * @public
 */
export interface ListMailDomainsResponse {
  /**
   * The list of mail domain summaries, specifying domains that exist in the specified WorkMail organization, along with the information about whether the domain is or isn't the default.
   *
   * @public
   */
  MailDomains?: MailDomainSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value becomes `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessOverridesRequest {
  /**
   * The WorkMail organization under which to list mobile device access overrides.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The WorkMail user under which you list the mobile device access overrides. Accepts the following types of user identities:
   *
   * - User ID: `12345678-1234-1234-1234-123456789012` or `S-1-1-12-1234567890-123456789-123456789-1234`
   * - Email address: `user@domain.tld`
   * - User name: `user`
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The mobile device to which the access override applies.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not require a token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The override object.
 *
 * @public
 */
export interface MobileDeviceAccessOverride {
  /**
   * The WorkMail user to which the access override applies.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The device to which the override applies.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The effect of the override, `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect | undefined;

  /**
   * A description of the override.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date the override was first created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date the override was last modified.
   *
   * @public
   */
  DateModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessOverridesResponse {
  /**
   * The list of mobile device access overrides that exist for the specified WorkMail organization and user.
   *
   * @public
   */
  Overrides?: MobileDeviceAccessOverride[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is “null” when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessRulesRequest {
  /**
   * The WorkMail organization for which to list the rules.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * A rule that controls access to mobile devices for an WorkMail group.
 *
 * @public
 */
export interface MobileDeviceAccessRule {
  /**
   * The ID assigned to a mobile access rule.
   *
   * @public
   */
  MobileDeviceAccessRuleId?: string | undefined;

  /**
   * The name of a mobile access rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of a mobile access rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The effect of the rule when it matches. Allowed values are `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect?: MobileDeviceAccessRuleEffect | undefined;

  /**
   * Device types that a rule will match.
   *
   * @public
   */
  DeviceTypes?: string[] | undefined;

  /**
   * Device types that a rule **will not** match. All other device types will match.
   *
   * @public
   */
  NotDeviceTypes?: string[] | undefined;

  /**
   * Device models that a rule will match.
   *
   * @public
   */
  DeviceModels?: string[] | undefined;

  /**
   * Device models that a rule **will not** match. All other device models will match.
   *
   * @public
   */
  NotDeviceModels?: string[] | undefined;

  /**
   * Device operating systems that a rule will match.
   *
   * @public
   */
  DeviceOperatingSystems?: string[] | undefined;

  /**
   * Device operating systems that a rule **will not** match. All other device types will match.
   *
   * @public
   */
  NotDeviceOperatingSystems?: string[] | undefined;

  /**
   * Device user agents that a rule will match.
   *
   * @public
   */
  DeviceUserAgents?: string[] | undefined;

  /**
   * Device user agents that a rule **will not** match. All other device user agents will match.
   *
   * @public
   */
  NotDeviceUserAgents?: string[] | undefined;

  /**
   * The date and time at which an access rule was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date and time at which an access rule was modified.
   *
   * @public
   */
  DateModified?: Date | undefined;
}

/**
 * @public
 */
export interface ListMobileDeviceAccessRulesResponse {
  /**
   * The list of mobile device access rules that exist under the specified WorkMail organization.
   *
   * @public
   */
  Rules?: MobileDeviceAccessRule[] | undefined;
}

/**
 * @public
 */
export interface ListOrganizationsRequest {
  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The representation of an organization.
 *
 * @public
 */
export interface OrganizationSummary {
  /**
   * The identifier associated with the organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The alias associated with the organization.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The default email domain associated with the organization.
   *
   * @public
   */
  DefaultMailDomain?: string | undefined;

  /**
   * The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The state associated with the organization.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationsResponse {
  /**
   * The overview of owned organizations presented as a list of organization summaries.
   *
   * @public
   */
  OrganizationSummaries?: OrganizationSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPersonalAccessTokensRequest {
  /**
   * The Organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The WorkMail User ID.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The token from the previous response to query the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum amount of items that should be returned in a response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the Personal Access Token.
 *
 * @public
 */
export interface PersonalAccessTokenSummary {
  /**
   * The ID of the Personal Access Token.
   *
   * @public
   */
  PersonalAccessTokenId?: string | undefined;

  /**
   * The user ID of the WorkMail user associated with the Personal Access Token.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The name of the Personal Access Token.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date when the Personal Access Token was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date when the Personal Access Token was last used.
   *
   * @public
   */
  DateLastUsed?: Date | undefined;

  /**
   * The date when the Personal Access Token will expire.
   *
   * @public
   */
  ExpiresTime?: Date | undefined;

  /**
   * Lists all the Personal Access Token permissions for a mailbox.
   *
   * @public
   */
  Scopes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPersonalAccessTokensResponse {
  /**
   * The token from the previous response to query the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists all the personal tokens in an organization or user, if user ID is provided.
   *
   * @public
   */
  PersonalAccessTokenSummaries?: PersonalAccessTokenSummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourceDelegatesRequest {
  /**
   * The identifier for the organization that contains the resource for which delegates are listed.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the resource whose delegates are listed.
   *
   * The identifier can accept *ResourceId*, *Resourcename*, or *email*. The following identity formats are available:
   *
   * - Resource ID: r-0123456789a0123456789b0123456789
   * - Email address: resource@domain.tld
   * - Resource name: resource
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The token used to paginate through the delegates associated with a resource.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of maximum results in a page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceDelegatesResponse {
  /**
   * One page of the resource's delegates.
   *
   * @public
   */
  Delegates?: Delegate[] | undefined;

  /**
   * The token used to paginate through the delegates associated with a resource. While results are still available, it has an associated value. When the last page is reached, the token is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filtering options for *ListResources* operation. This is only used as input to Operation.
 *
 * @public
 */
export interface ListResourcesFilters {
  /**
   * Filters only resource that start with the entered name prefix .
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * Filters only resource with the provided primary email prefix.
   *
   * @public
   */
  PrimaryEmailPrefix?: string | undefined;

  /**
   * Filters only resource with the provided state.
   *
   * @public
   */
  State?: EntityState | undefined;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * The identifier for the organization under which the resources exist.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limit the resource search results based on the filter criteria. You can only use one filter per request.
   *
   * @public
   */
  Filters?: ListResourcesFilters | undefined;
}

/**
 * The representation of a resource.
 *
 * @public
 */
export interface Resource {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The email of the resource.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the resource: equipment or room.
   *
   * @public
   */
  Type?: ResourceType | undefined;

  /**
   * The state of the resource, which can be ENABLED, DISABLED, or DELETED.
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * The date indicating when the resource was enabled for WorkMail use.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date indicating when the resource was disabled from WorkMail use.
   *
   * @public
   */
  DisabledDate?: Date | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * One page of the organization's resource representation.
   *
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * The token used to paginate through all the organization's resources. While results are still available, it has an associated value. When the last page is reached, the token is empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * Describes a tag applied to a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tag key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Filtering options for *ListUsers* operation. This is only used as input to Operation.
 *
 * @public
 */
export interface ListUsersFilters {
  /**
   * Filters only users with the provided username prefix.
   *
   * @public
   */
  UsernamePrefix?: string | undefined;

  /**
   * Filters only users with the provided display name prefix.
   *
   * @public
   */
  DisplayNamePrefix?: string | undefined;

  /**
   * Filters only users with the provided email prefix.
   *
   * @public
   */
  PrimaryEmailPrefix?: string | undefined;

  /**
   * Filters only users with the provided state.
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * Filters only users with the ID from the IAM Identity Center.
   *
   * @public
   */
  IdentityProviderUserIdPrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The identifier for the organization under which the users exist.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The token to use to retrieve the next page of results. The first call does not contain any tokens.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limit the user search results based on the filter criteria. You can only use one filter per request.
   *
   * @public
   */
  Filters?: ListUsersFilters | undefined;
}

/**
 * The representation of an WorkMail user.
 *
 * @public
 */
export interface User {
  /**
   * The identifier of the user.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The email of the user.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The display name of the user.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The state of the user, which can be ENABLED, DISABLED, or DELETED.
   *
   * @public
   */
  State?: EntityState | undefined;

  /**
   * The role of the user.
   *
   * @public
   */
  UserRole?: UserRole | undefined;

  /**
   * The date indicating when the user was enabled for WorkMail use.
   *
   * @public
   */
  EnabledDate?: Date | undefined;

  /**
   * The date indicating when the user was disabled from WorkMail use.
   *
   * @public
   */
  DisabledDate?: Date | undefined;

  /**
   * User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *
   * @public
   */
  IdentityProviderUserId?: string | undefined;

  /**
   * Identity store ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *
   * @public
   */
  IdentityProviderIdentityStoreId?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * The overview of users for an organization.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAccessControlRuleRequest {
  /**
   * The rule name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The rule effect.
   *
   * @public
   */
  Effect: AccessControlRuleEffect | undefined;

  /**
   * The rule description.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * IPv4 CIDR ranges to include in the rule.
   *
   * @public
   */
  IpRanges?: string[] | undefined;

  /**
   * IPv4 CIDR ranges to exclude from the rule.
   *
   * @public
   */
  NotIpRanges?: string[] | undefined;

  /**
   * Access protocol actions to include in the rule. Valid values include `ActiveSync`, `AutoDiscover`, `EWS`, `IMAP`, `SMTP`, `WindowsOutlook`, and `WebMail`.
   *
   * @public
   */
  Actions?: string[] | undefined;

  /**
   * Access protocol actions to exclude from the rule. Valid values include `ActiveSync`, `AutoDiscover`, `EWS`, `IMAP`, `SMTP`, `WindowsOutlook`, and `WebMail`.
   *
   * @public
   */
  NotActions?: string[] | undefined;

  /**
   * User IDs to include in the rule.
   *
   * @public
   */
  UserIds?: string[] | undefined;

  /**
   * User IDs to exclude from the rule.
   *
   * @public
   */
  NotUserIds?: string[] | undefined;

  /**
   * The identifier of the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * Impersonation role IDs to include in the rule.
   *
   * @public
   */
  ImpersonationRoleIds?: string[] | undefined;

  /**
   * Impersonation role IDs to exclude from the rule.
   *
   * @public
   */
  NotImpersonationRoleIds?: string[] | undefined;
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
   * The ID of the organization for which the email monitoring configuration is set.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration. If absent, the IAM Role Arn of AWSServiceRoleForAmazonWorkMailEvents will be used.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration.
   *
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
   * The ID of the WorkMail Organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The authentication mode used in WorkMail.
   *
   * @public
   */
  AuthenticationMode: IdentityProviderAuthenticationMode | undefined;

  /**
   * The details of the IAM Identity Center configuration.
   *
   * @public
   */
  IdentityCenterConfiguration: IdentityCenterConfiguration | undefined;

  /**
   * The details of the Personal Access Token configuration.
   *
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
   * The ID of the organization that you are applying the DMARC policy to.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * Enforces or suspends a policy after it's applied.
   *
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
   * The identifier of the organization under which the user, group, or resource exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the user or resource for which to update mailbox permissions.
   *
   * The identifier can be *UserId, ResourceID, or Group Id*, *Username, Resourcename, or Groupname*, or *email*.
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The identifier of the user, group, or resource to which to grant the permissions.
   *
   * The identifier can be *UserId, ResourceID, or Group Id*, *Username, Resourcename, or Groupname*, or *email*.
   *
   * - Grantee ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: grantee@domain.tld
   * - Grantee name: grantee
   *
   * @public
   */
  GranteeId: string | undefined;

  /**
   * The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.
   *
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
   * Identifies the WorkMail organization for which you create the override.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The WorkMail user for which you create the override. Accepts the following types of user identities:
   *
   * - User ID: `12345678-1234-1234-1234-123456789012` or `S-1-1-12-1234567890-123456789-123456789-1234`
   * - Email address: `user@domain.tld`
   * - User name: `user`
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The mobile device for which you create the override. `DeviceId` is case insensitive.
   *
   * @public
   */
  DeviceId: string | undefined;

  /**
   * The effect of the override, `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect: MobileDeviceAccessRuleEffect | undefined;

  /**
   * A description of the override.
   *
   * @public
   */
  Description?: string | undefined;
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
   * The organization ID.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The retention policy ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The retention policy name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The retention policy description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The retention policy folder configurations.
   *
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
   * Idempotency token used when retrying requests.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The WorkMail organization under which you're creating the domain.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The name of the mail domain to create in WorkMail and SES.
   *
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
   * The identifier for the organization under which the user, group, or resource exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the user, group, or resource to be updated.
   *
   * The identifier can accept *UserId, ResourceId, or GroupId*, or *Username, Resourcename, or Groupname*. The following identity formats are available:
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The email for the user, group, or resource to be updated.
   *
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
   * The identifier of the organization that contains the user for which the password is reset.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the user for whom the password is reset.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The new password for the user.
   *
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
   * The idempotency token for the client request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier associated with the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the user or resource associated with the mailbox.
   *
   * The identifier can accept *UserId or ResourceId*, *Username or Resourcename*, or *email*. The following identity formats are available:
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789 , or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The mailbox export job description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3 bucket.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content.
   *
   * @public
   */
  KmsKeyArn: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The S3 bucket prefix.
   *
   * @public
   */
  S3Prefix: string | undefined;
}

/**
 * @public
 */
export interface StartMailboxExportJobResponse {
  /**
   * The job ID.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag key-value pairs.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestAvailabilityConfigurationRequest {
  /**
   * The WorkMail organization where the availability provider will be tested.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain to which the provider applies. If this field is provided, a stored availability provider associated to this domain name will be tested.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Describes an EWS based availability provider. This is only used as input to the service.
   *
   * @public
   */
  EwsProvider?: EwsAvailabilityProvider | undefined;

  /**
   * Describes a Lambda based availability provider.
   *
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider | undefined;
}

/**
 * @public
 */
export interface TestAvailabilityConfigurationResponse {
  /**
   * Boolean indicating whether the test passed or failed.
   *
   * @public
   */
  TestPassed?: boolean | undefined;

  /**
   * String containing the reason for a failed test if `TestPassed` is false.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag keys.
   *
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
   * The WorkMail organization for which the `AvailabilityConfiguration` will be updated.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain to which the provider applies the availability configuration.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The EWS availability provider definition. The request must contain exactly one provider definition, either `EwsProvider` or `LambdaProvider`. The previously stored provider will be overridden by the one provided.
   *
   * @public
   */
  EwsProvider?: EwsAvailabilityProvider | undefined;

  /**
   * The Lambda availability provider definition. The request must contain exactly one provider definition, either `EwsProvider` or `LambdaProvider`. The previously stored provider will be overridden by the one provided.
   *
   * @public
   */
  LambdaProvider?: LambdaAvailabilityProvider | undefined;
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
   * The WorkMail organization for which to list domains.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The domain name that will become the default domain.
   *
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
   * The identifier for the organization under which the group exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the group to be updated.
   *
   * The identifier can accept *GroupId*, *Groupname*, or *email*. The following identity formats are available:
   *
   * - Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: group@domain.tld
   * - Group name: group
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * If enabled, the group is hidden from the global address list.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;
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
   * The WorkMail organization that contains the impersonation role to update.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The ID of the impersonation role to update.
   *
   * @public
   */
  ImpersonationRoleId: string | undefined;

  /**
   * The updated impersonation role name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The updated impersonation role type.
   *
   * @public
   */
  Type: ImpersonationRoleType | undefined;

  /**
   * The updated impersonation role description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated list of rules.
   *
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
   * The identifier for the organization that contains the user for whom to update the mailbox quota.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifer for the user for whom to update the mailbox quota.
   *
   * The identifier can be the *UserId*, *Username*, or *email*. The following identity formats are available:
   *
   * - User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: user@domain.tld
   * - User name: user
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The updated mailbox quota, in MB, for the specified user.
   *
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
   * The WorkMail organization under which the rule will be updated.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the rule to be updated.
   *
   * @public
   */
  MobileDeviceAccessRuleId: string | undefined;

  /**
   * The updated rule name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The updated rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The effect of the rule when it matches. Allowed values are `ALLOW` or `DENY`.
   *
   * @public
   */
  Effect: MobileDeviceAccessRuleEffect | undefined;

  /**
   * Device types that the updated rule will match.
   *
   * @public
   */
  DeviceTypes?: string[] | undefined;

  /**
   * Device types that the updated rule **will not** match. All other device types will match.
   *
   * @public
   */
  NotDeviceTypes?: string[] | undefined;

  /**
   * Device models that the updated rule will match.
   *
   * @public
   */
  DeviceModels?: string[] | undefined;

  /**
   * Device models that the updated rule **will not** match. All other device models will match.
   *
   * @public
   */
  NotDeviceModels?: string[] | undefined;

  /**
   * Device operating systems that the updated rule will match.
   *
   * @public
   */
  DeviceOperatingSystems?: string[] | undefined;

  /**
   * Device operating systems that the updated rule **will not** match. All other device operating systems will match.
   *
   * @public
   */
  NotDeviceOperatingSystems?: string[] | undefined;

  /**
   * User agents that the updated rule will match.
   *
   * @public
   */
  DeviceUserAgents?: string[] | undefined;

  /**
   * User agents that the updated rule **will not** match. All other user agents will match.
   *
   * @public
   */
  NotDeviceUserAgents?: string[] | undefined;
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
   * The organization that contains the user, group, or resource to update.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The user, group, or resource to update.
   *
   * The identifier can accept *UseriD, ResourceId, or GroupId*, *Username, Resourcename, or Groupname*, or *email*. The following identity formats are available:
   *
   * - Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: entity@domain.tld
   * - Entity name: entity
   *
   * @public
   */
  EntityId: string | undefined;

  /**
   * The value of the email to be updated as primary.
   *
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
   * The identifier associated with the organization for which the resource is updated.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier of the resource to be updated.
   *
   * The identifier can accept *ResourceId*, *Resourcename*, or *email*. The following identity formats are available:
   *
   * - Resource ID: r-0123456789a0123456789b0123456789
   * - Email address: resource@domain.tld
   * - Resource name: resource
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The name of the resource to be updated.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The resource's booking options to be updated.
   *
   * @public
   */
  BookingOptions?: BookingOptions | undefined;

  /**
   * Updates the resource description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Updates the resource type.
   *
   * @public
   */
  Type?: ResourceType | undefined;

  /**
   * If enabled, the resource is hidden from the global address list.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;
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
   * The identifier for the organization under which the user exists.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The identifier for the user to be updated.
   *
   * The identifier can be the *UserId*, *Username*, or *email*. The following identity formats are available:
   *
   * - User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234
   * - Email address: user@domain.tld
   * - User name: user
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Updates the user role.
   *
   * You cannot pass *SYSTEM_USER* or *RESOURCE*.
   *
   * @public
   */
  Role?: UserRole | undefined;

  /**
   * Updates the display name of the user.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * Updates the user's first name.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * Updates the user's last name.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * If enabled, the user is hidden from the global address list.
   *
   * @public
   */
  HiddenFromGlobalAddressList?: boolean | undefined;

  /**
   * Updates the user's initials.
   *
   * @public
   */
  Initials?: string | undefined;

  /**
   * Updates the user's contact details.
   *
   * @public
   */
  Telephone?: string | undefined;

  /**
   * Updates the user's street address.
   *
   * @public
   */
  Street?: string | undefined;

  /**
   * Updates the user's job title.
   *
   * @public
   */
  JobTitle?: string | undefined;

  /**
   * Updates the user's city.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * Updates the user's company.
   *
   * @public
   */
  Company?: string | undefined;

  /**
   * Updates the user's zip code.
   *
   * @public
   */
  ZipCode?: string | undefined;

  /**
   * Updates the user's department.
   *
   * @public
   */
  Department?: string | undefined;

  /**
   * Updates the user's country.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Updates the user's office.
   *
   * @public
   */
  Office?: string | undefined;

  /**
   * User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
   *
   * @public
   */
  IdentityProviderUserId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {}
