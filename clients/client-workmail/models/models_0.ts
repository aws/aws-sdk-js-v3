import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AccessControlRuleEffect {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

/**
 * <p>A rule that controls access to an Amazon WorkMail organization.</p>
 */
export interface AccessControlRule {
  /**
   * <p>Access protocol actions to exclude from the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  NotActions?: string[];

  /**
   * <p>The rule description.</p>
   */
  Description?: string;

  /**
   * <p>Access protocol actions to include in the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  Actions?: string[];

  /**
   * <p>IPv4 CIDR ranges to include in the rule.</p>
   */
  IpRanges?: string[];

  /**
   * <p>The rule effect.</p>
   */
  Effect?: AccessControlRuleEffect | string;

  /**
   * <p>The date that the rule was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>IPv4 CIDR ranges to exclude from the rule.</p>
   */
  NotIpRanges?: string[];

  /**
   * <p>User IDs to exclude from the rule.</p>
   */
  NotUserIds?: string[];

  /**
   * <p>The date that the rule was modified.</p>
   */
  DateModified?: Date;

  /**
   * <p>User IDs to include in the rule.</p>
   */
  UserIds?: string[];

  /**
   * <p>The rule name.</p>
   */
  Name?: string;
}

export namespace AccessControlRule {
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
   * <p>The member (user or group) to associate to the resource.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The resource for which members (users or groups) are associated.</p>
   */
  ResourceId: string | undefined;
}

export namespace AssociateDelegateToResourceRequest {
  export const filterSensitiveLog = (obj: AssociateDelegateToResourceRequest): any => ({
    ...obj,
  });
}

export interface AssociateDelegateToResourceResponse {}

export namespace AssociateDelegateToResourceResponse {
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
  export const filterSensitiveLog = (obj: OrganizationStateException): any => ({
    ...obj,
  });
}

export interface AssociateMemberToGroupRequest {
  /**
   * <p>The member (user or group) to associate to the group.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The group to which the member (user or group) is associated.</p>
   */
  GroupId: string | undefined;
}

export namespace AssociateMemberToGroupRequest {
  export const filterSensitiveLog = (obj: AssociateMemberToGroupRequest): any => ({
    ...obj,
  });
}

export interface AssociateMemberToGroupResponse {}

export namespace AssociateMemberToGroupResponse {
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
   * <p>The resource's ability to automatically decline any conflicting requests.</p>
   */
  AutoDeclineConflictingRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any recurring requests.</p>
   */
  AutoDeclineRecurringRequests?: boolean;

  /**
   * <p>The resource's ability to automatically reply to requests. If disabled, delegates
   *          must be associated to the resource.</p>
   */
  AutoAcceptRequests?: boolean;
}

export namespace BookingOptions {
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
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The job ID.</p>
   */
  JobId: string | undefined;
}

export namespace CancelMailboxExportJobRequest {
  export const filterSensitiveLog = (obj: CancelMailboxExportJobRequest): any => ({
    ...obj,
  });
}

export interface CancelMailboxExportJobResponse {}

export namespace CancelMailboxExportJobResponse {
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
   * <p>The alias to add to the member set.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The member (user or group) to which this alias is added.</p>
   */
  EntityId: string | undefined;
}

export namespace CreateAliasRequest {
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateAliasResponse {}

export namespace CreateAliasResponse {
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
  export const filterSensitiveLog = (obj: MailDomainStateException): any => ({
    ...obj,
  });
}

export interface CreateGroupRequest {
  /**
   * <p>The name of the group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The organization under which the group is to be created.</p>
   */
  OrganizationId: string | undefined;
}

export namespace CreateGroupRequest {
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
  export const filterSensitiveLog = (obj: ReservedNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The domain to associate with an Amazon WorkMail organization.</p>
 *          <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
 */
export interface Domain {
  /**
   * <p>The hosted zone ID for a domain hosted in Route 53. Required when configuring a domain hosted in Route 53.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>The fully qualified domain name.</p>
   */
  DomainName?: string;
}

export namespace Domain {
  export const filterSensitiveLog = (obj: Domain): any => ({
    ...obj,
  });
}

export interface CreateOrganizationRequest {
  /**
   * <p>The organization alias.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a customer managed master key from AWS
   *          KMS.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The AWS Directory Service directory ID.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The email domains to associate with the organization.</p>
   */
  Domains?: Domain[];

  /**
   * <p>When <code>true</code>, allows organization interoperability between Amazon WorkMail and Microsoft Exchange. Can only be set to <code>true</code> if an AD Connector directory ID is included in the request.</p>
   */
  EnableInteroperability?: boolean;

  /**
   * <p>The idempotency token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace CreateOrganizationRequest {
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
   * <p>The type of the new resource. The available types are <code>equipment</code> and
   *             <code>room</code>.</p>
   */
  Type: ResourceType | string | undefined;

  /**
   * <p>The identifier associated with the organization for which the resource is
   *          created.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The name of the new resource.</p>
   */
  Name: string | undefined;
}

export namespace CreateResourceRequest {
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
  export const filterSensitiveLog = (obj: CreateResourceResponse): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.</p>
   */
  Name: string | undefined;

  /**
   * <p>The password for the new user.</p>
   */
  Password: string | undefined;

  /**
   * <p>The display name for the new user.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The identifier of the organization for which the user is created.</p>
   */
  OrganizationId: string | undefined;
}

export namespace CreateUserRequest {
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
   * <p>The type of the delegate: user or group.</p>
   */
  Type: MemberType | string | undefined;

  /**
   * <p>The identifier for the user or group associated as the resource's delegate.</p>
   */
  Id: string | undefined;
}

export namespace Delegate {
  export const filterSensitiveLog = (obj: Delegate): any => ({
    ...obj,
  });
}

export interface DeleteAccessControlRuleRequest {
  /**
   * <p>The name of the access control rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the organization.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteAccessControlRuleRequest {
  export const filterSensitiveLog = (obj: DeleteAccessControlRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessControlRuleResponse {}

export namespace DeleteAccessControlRuleResponse {
  export const filterSensitiveLog = (obj: DeleteAccessControlRuleResponse): any => ({
    ...obj,
  });
}

export interface DeleteAliasRequest {
  /**
   * <p>The aliases to be removed from the user's set of aliases. Duplicate entries in the
   *          list are collapsed into single entries (the list is transformed into a set).</p>
   */
  Alias: string | undefined;

  /**
   * <p>The identifier for the organization under which the user exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member (user or group) from which to have the aliases
   *          removed.</p>
   */
  EntityId: string | undefined;
}

export namespace DeleteAliasRequest {
  export const filterSensitiveLog = (obj: DeleteAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteAliasResponse {}

export namespace DeleteAliasResponse {
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
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResponse {}

export namespace DeleteGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteMailboxPermissionsRequest {
  /**
   * <p>The identifier of the member (user or group) that owns the mailbox.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier of the member (user or group) for which to delete granted
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The identifier of the organization under which the member (user or group)
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteMailboxPermissionsRequest {
  export const filterSensitiveLog = (obj: DeleteMailboxPermissionsRequest): any => ({
    ...obj,
  });
}

export interface DeleteMailboxPermissionsResponse {}

export namespace DeleteMailboxPermissionsResponse {
  export const filterSensitiveLog = (obj: DeleteMailboxPermissionsResponse): any => ({
    ...obj,
  });
}

export interface DeleteOrganizationRequest {
  /**
   * <p>If true, deletes the AWS Directory Service directory associated with the organization.</p>
   */
  DeleteDirectory: boolean | undefined;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The idempotency token associated with the request.</p>
   */
  ClientToken?: string;
}

export namespace DeleteOrganizationRequest {
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
  export const filterSensitiveLog = (obj: DeleteResourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceResponse {}

export namespace DeleteResourceResponse {
  export const filterSensitiveLog = (obj: DeleteResourceResponse): any => ({
    ...obj,
  });
}

export interface DeleteRetentionPolicyRequest {
  /**
   * <p>The retention policy ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteRetentionPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteRetentionPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteRetentionPolicyResponse {}

export namespace DeleteRetentionPolicyResponse {
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
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

export interface DeregisterFromWorkMailRequest {
  /**
   * <p>The identifier for the member (user or group) to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The identifier for the organization under which the Amazon WorkMail entity exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeregisterFromWorkMailRequest {
  export const filterSensitiveLog = (obj: DeregisterFromWorkMailRequest): any => ({
    ...obj,
  });
}

export interface DeregisterFromWorkMailResponse {}

export namespace DeregisterFromWorkMailResponse {
  export const filterSensitiveLog = (obj: DeregisterFromWorkMailResponse): any => ({
    ...obj,
  });
}

export interface DescribeGroupRequest {
  /**
   * <p>The identifier for the group to be described.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeGroupRequest {
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
   * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The name of the described group.</p>
   */
  Name?: string;

  /**
   * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The email of the described group.</p>
   */
  Email?: string;

  /**
   * <p>The state of the user: enabled (registered to Amazon WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   */
  State?: EntityState | string;
}

export namespace DescribeGroupResponse {
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
   * <p>The mailbox export job description.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the Amazon Simple
   *          Storage Service (Amazon S3) bucket.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   */
  EntityId?: string;

  /**
   * <p>The path to the S3 bucket and file that the mailbox export job is exporting
   *          to.</p>
   */
  S3Path?: string;

  /**
   * <p>The mailbox export job end timestamp.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
   *          key that encrypts the exported mailbox content.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The estimated progress of the mailbox export job, in percentage points.</p>
   */
  EstimatedProgress?: number;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The state of the mailbox export job.</p>
   */
  State?: MailboxExportJobState | string;

  /**
   * <p>The S3 bucket prefix.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The mailbox export job start timestamp.</p>
   */
  StartTime?: Date;

  /**
   * <p>Error information for failed mailbox export jobs.</p>
   */
  ErrorInfo?: string;
}

export namespace DescribeMailboxExportJobResponse {
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
  export const filterSensitiveLog = (obj: DescribeOrganizationRequest): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationResponse {
  /**
   * <p>The identifier for the directory associated with an Amazon WorkMail organization.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization.</p>
   */
  ARN?: string;

  /**
   * <p>(Optional) The error message indicating if unexpected behavior was encountered with
   *          regards to the organization.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The type of directory associated with the WorkMail organization.</p>
   */
  DirectoryType?: string;

  /**
   * <p>The state of an organization.</p>
   */
  State?: string;

  /**
   * <p>The identifier of an organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The alias for an organization.</p>
   */
  Alias?: string;

  /**
   * <p>The date at which the organization became usable in the WorkMail context, in UNIX epoch
   *          time format.</p>
   */
  CompletedDate?: Date;

  /**
   * <p>The default mail domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;
}

export namespace DescribeOrganizationResponse {
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
  export const filterSensitiveLog = (obj: DescribeResourceRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourceResponse {
  /**
   * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time
   *          format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The type of the described resource.</p>
   */
  Type?: ResourceType | string;

  /**
   * <p>The state of the resource: enabled (registered to Amazon WorkMail), disabled (deregistered
   *          or never registered to WorkMail), or deleted.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The identifier of the described resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The email of the described resource.</p>
   */
  Email?: string;

  /**
   * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time
   *          format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The booking options for the described resource.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The name of the described resource.</p>
   */
  Name?: string;
}

export namespace DescribeResourceResponse {
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
   * <p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch
   *          time format.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The name for the user.</p>
   */
  Name?: string;

  /**
   * <p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch
   *          time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is
   *          enabled, resources are imported into Amazon WorkMail as users. Because different WorkMail
   *          organizations rely on different directory types, administrators can distinguish between an
   *          unregistered user (account is disabled and has a user role) and the directory
   *          administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
   */
  UserRole?: UserRole | string;

  /**
   * <p>The state of a user: enabled (registered to Amazon WorkMail) or disabled (deregistered or
   *          never registered to WorkMail).</p>
   */
  State?: EntityState | string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The identifier for the described user.</p>
   */
  UserId?: string;
}

export namespace DescribeUserResponse {
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
}

export interface DisassociateDelegateFromResourceRequest {
  /**
   * <p>The identifier of the resource from which delegates' set members are removed.
   *       </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The identifier for the organization under which the resource exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the member (user, group) to be removed from the resource's
   *          delegates.</p>
   */
  EntityId: string | undefined;
}

export namespace DisassociateDelegateFromResourceRequest {
  export const filterSensitiveLog = (obj: DisassociateDelegateFromResourceRequest): any => ({
    ...obj,
  });
}

export interface DisassociateDelegateFromResourceResponse {}

export namespace DisassociateDelegateFromResourceResponse {
  export const filterSensitiveLog = (obj: DisassociateDelegateFromResourceResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMemberFromGroupRequest {
  /**
   * <p>The identifier for the member to be removed to the group.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The identifier for the group from which members are removed.</p>
   */
  GroupId: string | undefined;
}

export namespace DisassociateMemberFromGroupRequest {
  export const filterSensitiveLog = (obj: DisassociateMemberFromGroupRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMemberFromGroupResponse {}

export namespace DisassociateMemberFromGroupResponse {
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
   * <p>The action to take on the folder contents at the end of the folder configuration
   *          period.</p>
   */
  Action: RetentionAction | string | undefined;

  /**
   * <p>The period of time at which the folder configuration action is applied.</p>
   */
  Period?: number;

  /**
   * <p>The folder name.</p>
   */
  Name: FolderName | string | undefined;
}

export namespace FolderConfiguration {
  export const filterSensitiveLog = (obj: FolderConfiguration): any => ({
    ...obj,
  });
}

export interface GetAccessControlEffectRequest {
  /**
   * <p>The access protocol action. Valid values include <code>ActiveSync</code>,
   *             <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>, <code>SMTP</code>,
   *             <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  Action: string | undefined;

  /**
   * <p>The identifier for the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The IPv4 address.</p>
   */
  IpAddress: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace GetAccessControlEffectRequest {
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
  export const filterSensitiveLog = (obj: GetDefaultRetentionPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetDefaultRetentionPolicyResponse {
  /**
   * <p>The retention policy folder configurations.</p>
   */
  FolderConfigurations?: FolderConfiguration[];

  /**
   * <p>The retention policy name.</p>
   */
  Name?: string;

  /**
   * <p>The retention policy description.</p>
   */
  Description?: string;

  /**
   * <p>The retention policy ID.</p>
   */
  Id?: string;
}

export namespace GetDefaultRetentionPolicyResponse {
  export const filterSensitiveLog = (obj: GetDefaultRetentionPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetMailboxDetailsRequest {
  /**
   * <p>The identifier for the user whose mailbox details are being requested.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier for the organization that contains the user whose mailbox details are
   *          being requested.</p>
   */
  OrganizationId: string | undefined;
}

export namespace GetMailboxDetailsRequest {
  export const filterSensitiveLog = (obj: GetMailboxDetailsRequest): any => ({
    ...obj,
  });
}

export interface GetMailboxDetailsResponse {
  /**
   * <p>The current mailbox size, in MB, for the specified user.</p>
   */
  MailboxSize?: number;

  /**
   * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
   */
  MailboxQuota?: number;
}

export namespace GetMailboxDetailsResponse {
  export const filterSensitiveLog = (obj: GetMailboxDetailsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of an Amazon WorkMail group.</p>
 */
export interface Group {
  /**
   * <p>The date indicating when the group was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;

  /**
   * <p>The date indicating when the group was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the group.</p>
   */
  Id?: string;

  /**
   * <p>The email of the group.</p>
   */
  Email?: string;

  /**
   * <p>The state of the group, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;
}

export namespace Group {
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
   * <p>The path to the S3 bucket and file that the mailbox export job exports to.</p>
   */
  S3Path?: string;

  /**
   * <p>The identifier of the user or resource associated with the mailbox.</p>
   */
  EntityId?: string;

  /**
   * <p>The mailbox export job end timestamp.</p>
   */
  EndTime?: Date;

  /**
   * <p>The mailbox export job description.</p>
   */
  Description?: string;

  /**
   * <p>The state of the mailbox export job.</p>
   */
  State?: MailboxExportJobState | string;

  /**
   * <p>The mailbox export job start timestamp.</p>
   */
  StartTime?: Date;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The estimated progress of the mailbox export job, in percentage points.</p>
   */
  EstimatedProgress?: number;

  /**
   * <p>The identifier of the mailbox export job.</p>
   */
  JobId?: string;
}

export namespace MailboxExportJob {
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
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The identifier for the entity for which to list the aliases.</p>
   */
  EntityId: string | undefined;
}

export namespace ListAliasesRequest {
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
  export const filterSensitiveLog = (obj: ListAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListGroupMembersRequest {
  /**
   * <p>The identifier for the group to which the members (users or groups) are
   *          associated.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string | undefined;

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
  export const filterSensitiveLog = (obj: ListGroupMembersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of a user or group.</p>
 */
export interface Member {
  /**
   * <p>The state of the member, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>A member can be a user or group.</p>
   */
  Type?: MemberType | string;

  /**
   * <p>The date indicating when the member was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The date indicating when the member was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the member.</p>
   */
  Id?: string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface ListGroupMembersResponse {
  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The members associated to the group.</p>
   */
  Members?: Member[];
}

export namespace ListGroupMembersResponse {
  export const filterSensitiveLog = (obj: ListGroupMembersResponse): any => ({
    ...obj,
  });
}

export interface ListGroupsRequest {
  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier for the organization under which the groups exist.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export namespace ListGroupsRequest {
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
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListMailboxExportJobsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListMailboxExportJobsRequest {
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
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The identifier of the user, group, or resource for which to list mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;
}

export namespace ListMailboxPermissionsRequest {
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
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
   *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
   *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
   *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
   *          access to the mailbox, irrespective of other folder-level permissions set on the
   *          mailbox.</p>
   */
  PermissionValues: (PermissionType | string)[] | undefined;

  /**
   * <p>The type of user, group, or resource referred to in GranteeId.</p>
   */
  GranteeType: MemberType | string | undefined;
}

export namespace Permission {
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
  export const filterSensitiveLog = (obj: ListMailboxPermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListOrganizationsRequest {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results. The first call does not
   *          contain any tokens.</p>
   */
  NextToken?: string;
}

export namespace ListOrganizationsRequest {
  export const filterSensitiveLog = (obj: ListOrganizationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of an organization.</p>
 */
export interface OrganizationSummary {
  /**
   * <p>The state associated with the organization.</p>
   */
  State?: string;

  /**
   * <p>The default email domain associated with the organization.</p>
   */
  DefaultMailDomain?: string;

  /**
   * <p>The alias associated with the organization.</p>
   */
  Alias?: string;

  /**
   * <p>The error message associated with the organization. It is only present if unexpected
   *          behavior has occurred with regards to the organization. It provides insight or solutions
   *          regarding unexpected behavior.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId?: string;
}

export namespace OrganizationSummary {
  export const filterSensitiveLog = (obj: OrganizationSummary): any => ({
    ...obj,
  });
}

export interface ListOrganizationsResponse {
  /**
   * <p>The token to use to retrieve the next page of results. The value is "null" when there
   *          are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The overview of owned organizations presented as a list of organization
   *          summaries.</p>
   */
  OrganizationSummaries?: OrganizationSummary[];
}

export namespace ListOrganizationsResponse {
  export const filterSensitiveLog = (obj: ListOrganizationsResponse): any => ({
    ...obj,
  });
}

export interface ListResourceDelegatesRequest {
  /**
   * <p>The number of maximum results in a page.</p>
   */
  MaxResults?: number;

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
   * <p>The identifier for the organization that contains the resource for which delegates
   *          are listed.</p>
   */
  OrganizationId: string | undefined;
}

export namespace ListResourceDelegatesRequest {
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
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of a resource.</p>
 */
export interface Resource {
  /**
   * <p>The date indicating when the resource was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date indicating when the resource was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The type of the resource: equipment or room.</p>
   */
  Type?: ResourceType | string;

  /**
   * <p>The state of the resource, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The email of the resource.</p>
   */
  Email?: string;
}

export namespace Resource {
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
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The representation of an Amazon WorkMail user.</p>
 */
export interface User {
  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the user.</p>
   */
  Name?: string;

  /**
   * <p>The date indicating when the user was disabled from Amazon WorkMail use.</p>
   */
  DisabledDate?: Date;

  /**
   * <p>The date indicating when the user was enabled for Amazon WorkMail use.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The identifier of the user.</p>
   */
  Id?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The state of the user, which can be ENABLED, DISABLED, or DELETED.</p>
   */
  State?: EntityState | string;

  /**
   * <p>The role of the user.</p>
   */
  UserRole?: UserRole | string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * <p> The token to use to retrieve the next page of results. This value is `null` when
   *          there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The overview of users for an organization.</p>
   */
  Users?: User[];
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface PutAccessControlRuleRequest {
  /**
   * <p>The rule description.</p>
   */
  Description: string | undefined;

  /**
   * <p>User IDs to include in the rule.</p>
   */
  UserIds?: string[];

  /**
   * <p>User IDs to exclude from the rule.</p>
   */
  NotUserIds?: string[];

  /**
   * <p>IPv4 CIDR ranges to exclude from the rule.</p>
   */
  NotIpRanges?: string[];

  /**
   * <p>The rule name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule effect.</p>
   */
  Effect: AccessControlRuleEffect | string | undefined;

  /**
   * <p>IPv4 CIDR ranges to include in the rule.</p>
   */
  IpRanges?: string[];

  /**
   * <p>The identifier of the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>Access protocol actions to exclude from the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  NotActions?: string[];

  /**
   * <p>Access protocol actions to include in the rule. Valid values include
   *             <code>ActiveSync</code>, <code>AutoDiscover</code>, <code>EWS</code>, <code>IMAP</code>,
   *             <code>SMTP</code>, <code>WindowsOutlook</code>, and <code>WebMail</code>.</p>
   */
  Actions?: string[];
}

export namespace PutAccessControlRuleRequest {
  export const filterSensitiveLog = (obj: PutAccessControlRuleRequest): any => ({
    ...obj,
  });
}

export interface PutAccessControlRuleResponse {}

export namespace PutAccessControlRuleResponse {
  export const filterSensitiveLog = (obj: PutAccessControlRuleResponse): any => ({
    ...obj,
  });
}

export interface PutMailboxPermissionsRequest {
  /**
   * <p>The identifier of the user, group, or resource to which to grant the
   *          permissions.</p>
   */
  GranteeId: string | undefined;

  /**
   * <p>The identifier of the user, group, or resource for which to update mailbox
   *          permissions.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as
   *          the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF
   *          allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not
   *          mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full
   *          access to the mailbox, irrespective of other folder-level permissions set on the
   *          mailbox.</p>
   */
  PermissionValues: (PermissionType | string)[] | undefined;

  /**
   * <p>The identifier of the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace PutMailboxPermissionsRequest {
  export const filterSensitiveLog = (obj: PutMailboxPermissionsRequest): any => ({
    ...obj,
  });
}

export interface PutMailboxPermissionsResponse {}

export namespace PutMailboxPermissionsResponse {
  export const filterSensitiveLog = (obj: PutMailboxPermissionsResponse): any => ({
    ...obj,
  });
}

export interface PutRetentionPolicyRequest {
  /**
   * <p>The retention policy name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The retention policy ID.</p>
   */
  Id?: string;

  /**
   * <p>The organization ID.</p>
   */
  OrganizationId: string | undefined;

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
  export const filterSensitiveLog = (obj: PutRetentionPolicyRequest): any => ({
    ...obj,
    ...(obj.Description && { Description: SENSITIVE_STRING }),
  });
}

export interface PutRetentionPolicyResponse {}

export namespace PutRetentionPolicyResponse {
  export const filterSensitiveLog = (obj: PutRetentionPolicyResponse): any => ({
    ...obj,
  });
}

export interface RegisterToWorkMailRequest {
  /**
   * <p>The identifier for the user, group, or resource to be updated.</p>
   */
  EntityId: string | undefined;

  /**
   * <p>The email for the user, group, or resource to be updated.</p>
   */
  Email: string | undefined;

  /**
   * <p>The identifier for the organization under which the user, group, or resource
   *          exists.</p>
   */
  OrganizationId: string | undefined;
}

export namespace RegisterToWorkMailRequest {
  export const filterSensitiveLog = (obj: RegisterToWorkMailRequest): any => ({
    ...obj,
  });
}

export interface RegisterToWorkMailResponse {}

export namespace RegisterToWorkMailResponse {
  export const filterSensitiveLog = (obj: RegisterToWorkMailResponse): any => ({
    ...obj,
  });
}

export interface ResetPasswordRequest {
  /**
   * <p>The identifier of the user for whom the password is reset.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the organization that contains the user for which the password is
   *          reset.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The new password for the user.</p>
   */
  Password: string | undefined;
}

export namespace ResetPasswordRequest {
  export const filterSensitiveLog = (obj: ResetPasswordRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface ResetPasswordResponse {}

export namespace ResetPasswordResponse {
  export const filterSensitiveLog = (obj: ResetPasswordResponse): any => ({
    ...obj,
  });
}

export interface StartMailboxExportJobRequest {
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
   * <p>The idempotency token for the client request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The S3 bucket prefix.</p>
   */
  S3Prefix: string | undefined;

  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS)
   *          key that encrypts the exported mailbox content.</p>
   */
  KmsKeyArn: string | undefined;
}

export namespace StartMailboxExportJobRequest {
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
  export const filterSensitiveLog = (obj: StartMailboxExportJobResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
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

/**
 * <p>The resource can have up to 50 user-applied tags.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTagsException {
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

export interface UpdateMailboxQuotaRequest {
  /**
   * <p>The identifer for the user for whom to update the mailbox quota.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier for the organization that contains the user for whom to update the
   *          mailbox quota.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The updated mailbox quota, in MB, for the specified user.</p>
   */
  MailboxQuota: number | undefined;
}

export namespace UpdateMailboxQuotaRequest {
  export const filterSensitiveLog = (obj: UpdateMailboxQuotaRequest): any => ({
    ...obj,
  });
}

export interface UpdateMailboxQuotaResponse {}

export namespace UpdateMailboxQuotaResponse {
  export const filterSensitiveLog = (obj: UpdateMailboxQuotaResponse): any => ({
    ...obj,
  });
}

export interface UpdatePrimaryEmailAddressRequest {
  /**
   * <p>The organization that contains the user, group, or resource to update.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The value of the email to be updated as primary.</p>
   */
  Email: string | undefined;

  /**
   * <p>The user, group, or resource to update.</p>
   */
  EntityId: string | undefined;
}

export namespace UpdatePrimaryEmailAddressRequest {
  export const filterSensitiveLog = (obj: UpdatePrimaryEmailAddressRequest): any => ({
    ...obj,
  });
}

export interface UpdatePrimaryEmailAddressResponse {}

export namespace UpdatePrimaryEmailAddressResponse {
  export const filterSensitiveLog = (obj: UpdatePrimaryEmailAddressResponse): any => ({
    ...obj,
  });
}

export interface UpdateResourceRequest {
  /**
   * <p>The name of the resource to be updated.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the resource to be updated.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The resource's booking options to be updated.</p>
   */
  BookingOptions?: BookingOptions;

  /**
   * <p>The identifier associated with the organization for which the resource is
   *          updated.</p>
   */
  OrganizationId: string | undefined;
}

export namespace UpdateResourceRequest {
  export const filterSensitiveLog = (obj: UpdateResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceResponse {}

export namespace UpdateResourceResponse {
  export const filterSensitiveLog = (obj: UpdateResourceResponse): any => ({
    ...obj,
  });
}
