import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AccessControlRuleEffect {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

/**
 * <p>A rule that controls access to an Amazon WorkMail organization.</p>
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
}

export namespace AccessControlRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessControlRule): any => ({
    ...obj,
  });
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

export namespace AssociateDelegateToResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDelegateToResourceRequest): any => ({
    ...obj,
  });
}

export interface AssociateDelegateToResourceResponse {}

export namespace AssociateDelegateToResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDelegateToResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 */
export interface EntityNotFoundException extends __SmithyException, $MetadataBearer {
  name: "EntityNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace EntityNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 */
export interface EntityStateException extends __SmithyException, $MetadataBearer {
  name: "EntityStateException";
  $fault: "client";
  Message?: string;
}

export namespace EntityStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityStateException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the input parameters don't match the service's restrictions.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 */
export interface OrganizationNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OrganizationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 */
export interface OrganizationStateException extends __SmithyException, $MetadataBearer {
  name: "OrganizationStateException";
  $fault: "client";
  Message?: string;
}

export namespace OrganizationStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationStateException): any => ({
    ...obj,
  });
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

export namespace AssociateMemberToGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMemberToGroupRequest): any => ({
    ...obj,
  });
}

export interface AssociateMemberToGroupResponse {}

export namespace AssociateMemberToGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMemberToGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 */
export interface DirectoryServiceAuthenticationFailedException extends __SmithyException, $MetadataBearer {
  name: "DirectoryServiceAuthenticationFailedException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryServiceAuthenticationFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryServiceAuthenticationFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 */
export interface DirectoryUnavailableException extends __SmithyException, $MetadataBearer {
  name: "DirectoryUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
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

export namespace BookingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BookingOptions): any => ({
    ...obj,
  });
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

export namespace CancelMailboxExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMailboxExportJobRequest): any => ({
    ...obj,
  });
}

export interface CancelMailboxExportJobResponse {}

export namespace CancelMailboxExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelMailboxExportJobResponse): any => ({
    ...obj,
  });
}

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

export namespace CreateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateAliasResponse {}

export namespace CreateAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAliasResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 */
export interface EmailAddressInUseException extends __SmithyException, $MetadataBearer {
  name: "EmailAddressInUseException";
  $fault: "client";
  Message?: string;
}

export namespace EmailAddressInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailAddressInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds the limit of the resource.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined
 *          in the organization.</p>
 */
export interface MailDomainNotFoundException extends __SmithyException, $MetadataBearer {
  name: "MailDomainNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace MailDomainNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MailDomainNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 */
export interface MailDomainStateException extends __SmithyException, $MetadataBearer {
  name: "MailDomainStateException";
  $fault: "client";
  Message?: string;
}

export namespace MailDomainStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MailDomainStateException): any => ({
    ...obj,
  });
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

export namespace CreateGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateGroupResponse {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
 */
export interface NameAvailabilityException extends __SmithyException, $MetadataBearer {
  name: "NameAvailabilityException";
  $fault: "client";
  Message?: string;
}

export namespace NameAvailabilityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NameAvailabilityException): any => ({
    ...obj,
  });
}

/**
 * <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
 */
export interface ReservedNameException extends __SmithyException, $MetadataBearer {
  name: "ReservedNameException";
  $fault: "client";
  Message?: string;
}

export namespace ReservedNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedNameException): any => ({
    ...obj,
  });
}

export enum MobileDeviceAccessRuleEffect {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export interface CreateMobileDeviceAccessRuleRequest {
  /**
   * <p>The Amazon WorkMail organization under which the rule will be created.</p>
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

export namespace CreateMobileDeviceAccessRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMobileDeviceAccessRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateMobileDeviceAccessRuleResponse {
  /**
   * <p>The identifier for the newly created mobile device access rule.</p>
   */
  MobileDeviceAccessRuleId?: string;
}

export namespace CreateMobileDeviceAccessRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMobileDeviceAccessRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The domain to associate with an Amazon WorkMail organization.</p>
 *          <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
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

export namespace Domain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Domain): any => ({
    ...obj,
  });
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
   * <p>The Amazon Resource Name (ARN) of a customer managed master key from AWS
   *          KMS.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>When <code>true</code>, allows organization interoperability between Amazon WorkMail and Microsoft Exchange. Can only be set to <code>true</code> if an AD Connector directory ID is included in the request.</p>
   */
  EnableInteroperability?: boolean;
}

export namespace CreateOrganizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOrganizationRequest): any => ({
    ...obj,
  });
}

export interface CreateOrganizationResponse {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId?: string;
}

export namespace CreateOrganizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOrganizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The directory is already in use by another WorkMail organization in the same account and Region.</p>
 */
export interface DirectoryInUseException extends __SmithyException, $MetadataBearer {
  name: "DirectoryInUseException";
  $fault: "client";
  Message?: string;
}

export namespace DirectoryInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DirectoryInUseException): any => ({
    ...obj,
  });
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

export namespace CreateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceRequest): any => ({
    ...obj,
  });
}

export interface CreateResourceResponse {
  /**
   * <p>The identifier of the new resource.</p>
   */
  ResourceId?: string;
}

export namespace CreateResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourceResponse): any => ({
    ...obj,
  });
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

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface CreateUserResponse {
  /**
   * <p>The identifier for the new user.</p>
   */
  UserId?: string;
}

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPasswordException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidPasswordException): any => ({
    ...obj,
  });
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

export namespace Delegate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Delegate): any => ({
    ...obj,
  });
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

export namespace DeleteAccessControlRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccessControlRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessControlRuleResponse {}

export namespace DeleteAccessControlRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccessControlRuleResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteAliasResponse {}

export namespace DeleteAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAliasResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResponse {}

export namespace DeleteGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteMailboxPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMailboxPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteMailboxPermissionsResponse {}

export namespace DeleteMailboxPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMailboxPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DeleteMobileDeviceAccessRuleRequest {
  /**
   * <p>The Amazon WorkMail organization under which the rule will be deleted.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier of the rule to be deleted.</p>
   */
  MobileDeviceAccessRuleId: string | undefined;
}

export namespace DeleteMobileDeviceAccessRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMobileDeviceAccessRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteMobileDeviceAccessRuleResponse {}

export namespace DeleteMobileDeviceAccessRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMobileDeviceAccessRuleResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteOrganizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOrganizationRequest): any => ({
    ...obj,
  });
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

export namespace DeleteOrganizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOrganizationResponse): any => ({
    ...obj,
  });
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

export namespace DeleteResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceResponse {}

export namespace DeleteResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteRetentionPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRetentionPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteRetentionPolicyResponse {}

export namespace DeleteRetentionPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRetentionPolicyResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {}

export namespace DeleteUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

export interface DeregisterFromWorkMailRequest {
  /**
   * <p>The identifier for the organization under which the Amazon WorkMail entity exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member (user or group) to be updated.</p>
   */
  EntityId: string | undefined;
}

export namespace DeregisterFromWorkMailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterFromWorkMailRequest): any => ({
    ...obj,
  });
}

export interface DeregisterFromWorkMailResponse {}

export namespace DeregisterFromWorkMailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterFromWorkMailResponse): any => ({
    ...obj,
  });
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

export namespace DescribeGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGroupRequest): any => ({
    ...obj,
  });
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
   * <p>The state of the user: enabled (registered to Amazon WorkMail) or disabled (deregistered or
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

export namespace DescribeGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGroupResponse): any => ({
    ...obj,
  });
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

export namespace DescribeMailboxExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMailboxExportJobRequest): any => ({
    ...obj,
  });
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

export namespace DescribeMailboxExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMailboxExportJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationRequest {
  /**
   * <p>The identifier for the organization to be described.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeOrganizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationRequest): any => ({
    ...obj,
  });
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
   * <p>The identifier for the directory associated with an Amazon WorkMail organization.</p>
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

export namespace DescribeOrganizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceRequest): any => ({
    ...obj,
  });
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
   * <p>The state of the resource: enabled (registered to Amazon WorkMail), disabled (deregistered
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

export namespace DescribeResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourceResponse): any => ({
    ...obj,
  });
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

export namespace DescribeUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
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
   * <p>The state of a user: enabled (registered to Amazon WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is
   *          enabled, resources are imported into Amazon WorkMail as users. Because different WorkMail
   *          organizations rely on different directory types, administrators can distinguish between an
   *          unregistered user (account is disabled and has a user role) and the directory
   *          administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
   */
  UserRole?: UserRole | string;

  /**
   * <p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch
   *          time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch
   *          time format.</p>
   */
  DisabledDate?: Date;
}

export namespace DescribeUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateDelegateFromResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateDelegateFromResourceRequest): any => ({
    ...obj,
  });
}

export interface DisassociateDelegateFromResourceResponse {}

export namespace DisassociateDelegateFromResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateDelegateFromResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace DisassociateMemberFromGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMemberFromGroupRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMemberFromGroupResponse {}

export namespace DisassociateMemberFromGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMemberFromGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The user, group, or resource that you're trying to register is already
 *          registered.</p>
 */
export interface EntityAlreadyRegisteredException extends __SmithyException, $MetadataBearer {
  name: "EntityAlreadyRegisteredException";
  $fault: "client";
  Message?: string;
}

export namespace EntityAlreadyRegisteredException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EntityAlreadyRegisteredException): any => ({
    ...obj,
  });
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
   * <p>The period of time at which the folder configuration action is applied.</p>
   */
  Period?: number;
}

export namespace FolderConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FolderConfiguration): any => ({
    ...obj,
  });
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
  UserId: string | undefined;
}

export namespace GetAccessControlEffectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccessControlEffectRequest): any => ({
    ...obj,
  });
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

export namespace GetAccessControlEffectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccessControlEffectResponse): any => ({
    ...obj,
  });
}

export interface GetDefaultRetentionPolicyRequest {
  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;
}

export namespace GetDefaultRetentionPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDefaultRetentionPolicyRequest): any => ({
    ...obj,
  });
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

export namespace GetDefaultRetentionPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDefaultRetentionPolicyResponse): any => ({
    ...obj,
  });
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

export namespace GetMailboxDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMailboxDetailsRequest): any => ({
    ...obj,
  });
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

export namespace GetMailboxDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMailboxDetailsResponse): any => ({
    ...obj,
  });
}

export interface GetMobileDeviceAccessEffectRequest {
  /**
   * <p>The Amazon WorkMail organization to simulate the access effect for.</p>
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

export namespace GetMobileDeviceAccessEffectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMobileDeviceAccessEffectRequest): any => ({
    ...obj,
  });
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

export namespace MobileDeviceAccessMatchedRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MobileDeviceAccessMatchedRule): any => ({
    ...obj,
  });
}

export interface GetMobileDeviceAccessEffectResponse {
  /**
   * <p>The effect of the simulated access, <code>ALLOW</code> or <code>DENY</code>, after evaluating mobile device access rules in the Amazon WorkMail organization for the simulated
   *          user parameters.</p>
   */
  Effect?: MobileDeviceAccessRuleEffect | string;

  /**
   * <p>A list of the rules which matched the simulated user input and produced the effect.</p>
   */
  MatchedRules?: MobileDeviceAccessMatchedRule[];
}

export namespace GetMobileDeviceAccessEffectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMobileDeviceAccessEffectResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of an Amazon WorkMail group.</p>
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
   * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export namespace Group {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
 */
export interface InvalidConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidConfigurationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidConfigurationException): any => ({
    ...obj,
  });
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

export namespace MailboxExportJob {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MailboxExportJob): any => ({
    ...obj,
  });
}

export interface ListAccessControlRulesRequest {
  /**
   * <p>The identifier for the organization.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListAccessControlRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessControlRulesRequest): any => ({
    ...obj,
  });
}

export interface ListAccessControlRulesResponse {
  /**
   * <p>The access control rules.</p>
   */
  Rules?: AccessControlRule[];
}

export namespace ListAccessControlRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessControlRulesResponse): any => ({
    ...obj,
  });
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

export namespace ListAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAliasesRequest): any => ({
    ...obj,
  });
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

export namespace ListAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAliasesResponse): any => ({
    ...obj,
  });
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

export namespace ListGroupMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGroupMembersRequest): any => ({
    ...obj,
  });
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
   * <p>The date indicating when the member was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the member was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
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

export namespace ListGroupMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGroupMembersResponse): any => ({
    ...obj,
  });
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

export namespace ListGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
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

export namespace ListMailboxExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMailboxExportJobsRequest): any => ({
    ...obj,
  });
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

export namespace ListMailboxExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMailboxExportJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListMailboxPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMailboxPermissionsRequest): any => ({
    ...obj,
  });
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

export namespace Permission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Permission): any => ({
    ...obj,
  });
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

export namespace ListMailboxPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMailboxPermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListMobileDeviceAccessRulesRequest {
  /**
   * <p>The Amazon WorkMail organization for which to list the rules.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListMobileDeviceAccessRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMobileDeviceAccessRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A rule that controls access to mobile devices for an Amazon WorkMail group.</p>
 */
export interface MobileDeviceAccessRule {
  /**
   * <p>The ID assigned to a mobile access rule. </p>
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
   * <p>Device types that a rule will match. </p>
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

export namespace MobileDeviceAccessRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MobileDeviceAccessRule): any => ({
    ...obj,
  });
}

export interface ListMobileDeviceAccessRulesResponse {
  /**
   * <p>The list of mobile device access rules that exist under the specified Amazon WorkMail organization.</p>
   */
  Rules?: MobileDeviceAccessRule[];
}

export namespace ListMobileDeviceAccessRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMobileDeviceAccessRulesResponse): any => ({
    ...obj,
  });
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

export namespace ListOrganizationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationsRequest): any => ({
    ...obj,
  });
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

export namespace OrganizationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationSummary): any => ({
    ...obj,
  });
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

export namespace ListOrganizationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOrganizationsResponse): any => ({
    ...obj,
  });
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

export namespace ListResourceDelegatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceDelegatesRequest): any => ({
    ...obj,
  });
}

export interface ListResourceDelegatesResponse {
  /**
   * <p>One page of the resource's delegates.</p>
   */
  Delegates?: Delegate[];

  /**
   * <p>The token used to paginate through the delegates associated with a resource. While
   *          results are still available, it has an associated value. When the last page is reached, the
   *          token is empty. </p>
   */
  NextToken?: string;
}

export namespace ListResourceDelegatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceDelegatesResponse): any => ({
    ...obj,
  });
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

export namespace ListResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
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
   * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the resource was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
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

export namespace ListResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourcesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace ListUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of an Amazon WorkMail user.</p>
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
   * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;
}

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
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

export namespace ListUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
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
}

export namespace PutAccessControlRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAccessControlRuleRequest): any => ({
    ...obj,
  });
}

export interface PutAccessControlRuleResponse {}

export namespace PutAccessControlRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAccessControlRuleResponse): any => ({
    ...obj,
  });
}

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

export namespace PutMailboxPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutMailboxPermissionsRequest): any => ({
    ...obj,
  });
}

export interface PutMailboxPermissionsResponse {}

export namespace PutMailboxPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutMailboxPermissionsResponse): any => ({
    ...obj,
  });
}

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

export namespace PutRetentionPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRetentionPolicyRequest): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface PutRetentionPolicyResponse {}

export namespace PutRetentionPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRetentionPolicyResponse): any => ({
    ...obj,
  });
}

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

export namespace RegisterToWorkMailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterToWorkMailRequest): any => ({
    ...obj,
  });
}

export interface RegisterToWorkMailResponse {}

export namespace RegisterToWorkMailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterToWorkMailResponse): any => ({
    ...obj,
  });
}

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

export namespace ResetPasswordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetPasswordRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface ResetPasswordResponse {}

export namespace ResetPasswordResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetPasswordResponse): any => ({
    ...obj,
  });
}

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

export namespace StartMailboxExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMailboxExportJobRequest): any => ({
    ...obj,
  });
}

export interface StartMailboxExportJobResponse {
  /**
   * <p>The job ID.</p>
   */
  JobId?: string;
}

export namespace StartMailboxExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMailboxExportJobResponse): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource can have up to 50 user-applied tags.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateMailboxQuotaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMailboxQuotaRequest): any => ({
    ...obj,
  });
}

export interface UpdateMailboxQuotaResponse {}

export namespace UpdateMailboxQuotaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMailboxQuotaResponse): any => ({
    ...obj,
  });
}

export interface UpdateMobileDeviceAccessRuleRequest {
  /**
   * <p>The Amazon WorkMail organization under which the rule will be updated.</p>
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

export namespace UpdateMobileDeviceAccessRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMobileDeviceAccessRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateMobileDeviceAccessRuleResponse {}

export namespace UpdateMobileDeviceAccessRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMobileDeviceAccessRuleResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdatePrimaryEmailAddressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePrimaryEmailAddressRequest): any => ({
    ...obj,
  });
}

export interface UpdatePrimaryEmailAddressResponse {}

export namespace UpdatePrimaryEmailAddressResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePrimaryEmailAddressResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceResponse {}

export namespace UpdateResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourceResponse): any => ({
    ...obj,
  });
}
