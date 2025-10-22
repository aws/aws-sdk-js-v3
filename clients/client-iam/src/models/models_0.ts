// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IAMServiceException as __BaseException } from "./IAMServiceException";

/**
 * @public
 * @enum
 */
export const AccessAdvisorUsageGranularityType = {
  ACTION_LEVEL: "ACTION_LEVEL",
  SERVICE_LEVEL: "SERVICE_LEVEL",
} as const;

/**
 * @public
 */
export type AccessAdvisorUsageGranularityType =
  (typeof AccessAdvisorUsageGranularityType)[keyof typeof AccessAdvisorUsageGranularityType];

/**
 * <p>An object that contains details about when a principal in the reported Organizations entity
 *          last attempted to access an Amazon Web Services service. A principal can be an IAM user, an IAM role,
 *          or the Amazon Web Services account root user within the reported Organizations entity.</p>
 *          <p>This data type is a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html">GetOrganizationsAccessReport</a> operation.</p>
 * @public
 */
export interface AccessDetail {
  /**
   * <p>The name of the service in which access was attempted.</p>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>The namespace of the service in which access was attempted.</p>
   *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *             <i>Service Authorization Reference</i>. Choose the name of the service to
   *          view details for that service. In the first paragraph, find the service prefix. For
   *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
   *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
   *             service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>The Region where the last service access attempt occurred.</p>
   *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
   *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The path of the Organizations entity (root, organizational unit, or account) from which an
   *          authenticated principal last attempted to access the service. Amazon Web Services does not report
   *          unauthenticated requests.</p>
   *          <p>This field is null if no principals (IAM users, IAM roles, or root user) in the
   *          reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  EntityPath?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated principal most recently attempted to access the
   *          service. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
   *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAuthenticatedTime?: Date | undefined;

  /**
   * <p>The number of accounts with authenticated principals (root user, IAM users, and IAM
   *          roles) that attempted to access the service in the tracking period.</p>
   * @public
   */
  TotalAuthenticatedEntities?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const StatusType = {
  Active: "Active",
  Expired: "Expired",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * <p>Contains information about an Amazon Web Services access key.</p>
 *          <p> This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html">CreateAccessKey</a> and
 *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html">ListAccessKeys</a> operations. </p>
 *          <note>
 *             <p>The <code>SecretAccessKey</code> value is returned only in response to <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html">CreateAccessKey</a>. You can get a secret access key only when you first create
 *             an access key; you cannot recover the secret access key later. If you lose a secret
 *             access key, you must create a new access key.</p>
 *          </note>
 * @public
 */
export interface AccessKey {
  /**
   * <p>The name of the IAM user that the access key is associated with.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID for this access key.</p>
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API
   *          calls, while <code>Inactive</code> means it is not. </p>
   * @public
   */
  Status: StatusType | undefined;

  /**
   * <p>The secret key used to sign requests.</p>
   * @public
   */
  SecretAccessKey: string | undefined;

  /**
   * <p>The date when the access key was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * <p>Contains information about the last time an Amazon Web Services access key was used since IAM began
 *          tracking this information on April 22, 2015.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html">GetAccessKeyLastUsed</a>
 *          operation.</p>
 * @public
 */
export interface AccessKeyLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the access key was most recently used. This field is null in the
   *          following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM began tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastUsedDate?: Date | undefined;

  /**
   * <p>The name of the Amazon Web Services service with which this access key was most recently used. The
   *          value of this field is "N/A" in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM started tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>The Amazon Web Services Region where this access key was most recently used. The value for this field
   *          is "N/A" in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM began tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and endpoints</a> in the Amazon Web Services
   *          General Reference.</p>
   * @public
   */
  Region: string | undefined;
}

/**
 * <p>Contains information about an Amazon Web Services access key, without its secret key.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html">ListAccessKeys</a>
 *          operation.</p>
 * @public
 */
export interface AccessKeyMetadata {
  /**
   * <p>The name of the IAM user that the key is associated with.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The ID for this access key.</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API
   *          calls; <code>Inactive</code> means it is not.</p>
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * <p>The date when the access key was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * <p>The request was rejected because the account making the request is not the management
 *       account or delegated administrator account for <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">centralized root
 *         access</a>.</p>
 * @public
 */
export class AccountNotManagementOrDelegatedAdministratorException extends __BaseException {
  readonly name: "AccountNotManagementOrDelegatedAdministratorException" =
    "AccountNotManagementOrDelegatedAdministratorException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotManagementOrDelegatedAdministratorException, __BaseException>) {
    super({
      name: "AccountNotManagementOrDelegatedAdministratorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotManagementOrDelegatedAdministratorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AddClientIDToOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to
   *             add the client ID to. You can get a list of OIDC provider ARNs by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html">ListOpenIDConnectProviders</a> operation.</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>The client ID (also known as audience) to add to the IAM OpenID Connect provider
   *             resource.</p>
   * @public
   */
  ClientID: string | undefined;
}

/**
 * <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 * @public
 */
export class NoSuchEntityException extends __BaseException {
  readonly name: "NoSuchEntityException" = "NoSuchEntityException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchEntityException, __BaseException>) {
    super({
      name: "NoSuchEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchEntityException.prototype);
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 * @public
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
  }
}

/**
 * @public
 */
export interface AddRoleToInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to add.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;
}

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
  readonly name: "EntityAlreadyExistsException" = "EntityAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>) {
    super({
      name: "EntityAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
  }
}

/**
 * <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 * @public
 */
export class UnmodifiableEntityException extends __BaseException {
  readonly name: "UnmodifiableEntityException" = "UnmodifiableEntityException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnmodifiableEntityException, __BaseException>) {
    super({
      name: "UnmodifiableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnmodifiableEntityException.prototype);
  }
}

/**
 * @public
 */
export interface AddUserToGroupRequest {
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to add.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AssertionEncryptionModeType = {
  Allowed: "Allowed",
  Required: "Required",
} as const;

/**
 * @public
 */
export type AssertionEncryptionModeType =
  (typeof AssertionEncryptionModeType)[keyof typeof AssertionEncryptionModeType];

/**
 * @public
 * @enum
 */
export const AssignmentStatusType = {
  Any: "Any",
  Assigned: "Assigned",
  Unassigned: "Unassigned",
} as const;

/**
 * @public
 */
export type AssignmentStatusType = (typeof AssignmentStatusType)[keyof typeof AssignmentStatusType];

/**
 * @public
 * @enum
 */
export const PermissionsBoundaryAttachmentType = {
  Policy: "PermissionsBoundaryPolicy",
} as const;

/**
 * @public
 */
export type PermissionsBoundaryAttachmentType =
  (typeof PermissionsBoundaryAttachmentType)[keyof typeof PermissionsBoundaryAttachmentType];

/**
 * <p>Contains information about an attached permissions boundary.</p>
 *          <p>An attached permissions boundary is a managed policy that has been attached to a user or
 *          role to set the permissions boundary.</p>
 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
 *             identities </a> in the <i>IAM User Guide</i>.</p>
 * @public
 */
export interface AttachedPermissionsBoundary {
  /**
   * <p> The permissions boundary usage type that indicates what type of IAM resource is used
   *          as the permissions boundary for an entity. This data type can only have a value of
   *             <code>Policy</code>.</p>
   * @public
   */
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType | undefined;

  /**
   * <p> The ARN of the policy used to set the permissions boundary for the user or role.</p>
   * @public
   */
  PermissionsBoundaryArn?: string | undefined;
}

/**
 * <p>Contains information about an attached policy.</p>
 *          <p>An attached policy is a managed policy that has been attached to a user, group, or role.
 *          This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html">ListAttachedGroupPolicies</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html">ListAttachedRolePolicies</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html">ListAttachedUserPolicies</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface AttachedPolicy {
  /**
   * <p>The friendly name of the attached policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  PolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface AttachGroupPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the group to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * <p>The request failed because Amazon Web Services service role policies can only be attached to the
 *       service-linked role for that service.</p>
 * @public
 */
export class PolicyNotAttachableException extends __BaseException {
  readonly name: "PolicyNotAttachableException" = "PolicyNotAttachableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotAttachableException, __BaseException>) {
    super({
      name: "PolicyNotAttachableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotAttachableException.prototype);
  }
}

/**
 * @public
 */
export interface AttachRolePolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the role to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface AttachUserPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface ChangePasswordRequest {
  /**
   * <p>The IAM user's current password.</p>
   * @public
   */
  OldPassword: string | undefined;

  /**
   * <p>The new password. The new password must conform to the Amazon Web Services account's password
   *             policy, if one exists.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of characters. That string can include almost any printable
   *     ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>).
   *     You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)
   *     characters. Any of these characters are valid in a password. However, many tools, such
   *     as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have
   *     special meaning within that tool.</p>
   * @public
   */
  NewPassword: string | undefined;
}

/**
 * <p>The request was rejected because it referenced an entity that is temporarily unmodifiable,
 *       such as a user name that was deleted and then recreated. The error indicates that the request
 *       is likely to succeed if you try again after waiting several minutes. The error message
 *       describes the entity.</p>
 * @public
 */
export class EntityTemporarilyUnmodifiableException extends __BaseException {
  readonly name: "EntityTemporarilyUnmodifiableException" = "EntityTemporarilyUnmodifiableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityTemporarilyUnmodifiableException, __BaseException>) {
    super({
      name: "EntityTemporarilyUnmodifiableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityTemporarilyUnmodifiableException.prototype);
  }
}

/**
 * <p>The request was rejected because the type of user for the transaction was
 *       incorrect.</p>
 * @public
 */
export class InvalidUserTypeException extends __BaseException {
  readonly name: "InvalidUserTypeException" = "InvalidUserTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserTypeException, __BaseException>) {
    super({
      name: "InvalidUserTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserTypeException.prototype);
  }
}

/**
 * <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 * @public
 */
export class PasswordPolicyViolationException extends __BaseException {
  readonly name: "PasswordPolicyViolationException" = "PasswordPolicyViolationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PasswordPolicyViolationException, __BaseException>) {
    super({
      name: "PasswordPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PasswordPolicyViolationException.prototype);
  }
}

/**
 * @public
 */
export interface CreateAccessKeyRequest {
  /**
   * <p>The name of the IAM user that the new key will belong to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html">CreateAccessKey</a> request.
 *     </p>
 * @public
 */
export interface CreateAccessKeyResponse {
  /**
   * <p>A structure with details about the access key.</p>
   * @public
   */
  AccessKey: AccessKey | undefined;
}

/**
 * @public
 */
export interface CreateAccountAliasRequest {
  /**
   * <p>The account alias to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of
   *     lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have
   *     two dashes in a row.</p>
   * @public
   */
  AccountAlias: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p> The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The name of the group to create. Do not include the path in this value.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   * @public
   */
  GroupName: string | undefined;
}

/**
 * <p>Contains information about an IAM group entity.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html">CreateGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html">GetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html">ListGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Group {
  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The friendly name that identifies the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p> The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the group. For more information about ARNs
   *          and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the group was created.</p>
   * @public
   */
  CreateDate: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html">CreateGroup</a> request. </p>
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>A structure containing details about the new group.</p>
   * @public
   */
  Group: Group | undefined;
}

/**
 * <p>A structure that represents user-provided metadata that can be associated with an IAM
 *       resource. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key name that can be used to look up or retrieve the associated value. For example,
   *         <code>Department</code> or <code>Cost Center</code> are common choices.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value associated with this tag. For example, tags with a key name of
   *         <code>Department</code> could have values such as <code>Human Resources</code>,
   *         <code>Accounting</code>, and <code>Support</code>. Tags with a key name of <code>Cost
   *         Center</code> might have values that consist of the number associated with the different
   *       cost centers in your company. Typically, many resources have tags with the same key name but
   *       with different values.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the newly created IAM instance profile.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about the last time that an IAM role was used. This includes the
 *          date and time and the Region in which the role was last used. Activity is only reported for
 *          the trailing 400 days. This period can be shorter if your Region began supporting these
 *          features within the last year. The role might have been used more than 400 days ago. For
 *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM user
 *          Guide</i>.</p>
 *          <p>This data type is returned as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html">GetRole</a> and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operations.</p>
 * @public
 */
export interface RoleLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a> that the role was last used.</p>
   *          <p>This field is null if the role has not been used within the IAM tracking period. For
   *          more information about the tracking period, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM User Guide</i>.
   *       </p>
   * @public
   */
  LastUsedDate?: Date | undefined;

  /**
   * <p>The name of the Amazon Web Services Region in which the role was last used.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Contains information about an IAM role. This structure is returned as a response
 *          element in several API operations that interact with roles.</p>
 * @public
 */
export interface Role {
  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The friendly name that identifies the role.</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p> The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  RoleId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and
   *          how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i> guide. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * <p>A description of the role that you provide.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The maximum session duration (in seconds) for the specified role. Anyone who uses the
   *          CLI, or API to assume the role can specify the duration using the optional
   *             <code>DurationSeconds</code> API parameter or <code>duration-seconds</code> CLI
   *          parameter.</p>
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *             identities </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * <p>A list of tags that are attached to the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Contains information about the last time that an IAM role was used. This includes the
   *          date and time and the Region in which the role was last used. Activity is only reported for
   *          the trailing 400 days. This period can be shorter if your Region began supporting these
   *          features within the last year. The role might have been used more than 400 days ago. For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM user
   *          Guide</i>.</p>
   * @public
   */
  RoleLastUsed?: RoleLastUsed | undefined;
}

/**
 * <p>Contains information about an instance profile.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html">CreateInstanceProfile</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html">GetInstanceProfile</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html">ListInstanceProfiles</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html">ListInstanceProfilesForRole</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface InstanceProfile {
  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The name identifying the instance profile.</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p> The stable and unique string identifying the instance profile. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  InstanceProfileId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the instance profile. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date when the instance profile was created.</p>
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * <p>The role associated with the instance profile.</p>
   * @public
   */
  Roles: Role[] | undefined;

  /**
   * <p>A list of tags that are attached to the instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html">CreateInstanceProfile</a>
 *       request. </p>
 * @public
 */
export interface CreateInstanceProfileResponse {
  /**
   * <p>A structure containing details about the new instance profile.</p>
   * @public
   */
  InstanceProfile: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface CreateLoginProfileRequest {
  /**
   * <p>The name of the IAM user to create a password for. The user must already
   *             exist.</p>
   *          <p>This parameter is optional. If no user name is included, it defaults to the principal
   *             making the request. When you make this request with root user credentials, you must use
   *             an <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html">AssumeRoot</a> session to omit the user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The new password for the user.</p>
   *          <p>This parameter must be omitted when you make the request with an <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html">AssumeRoot</a> session. It is required in all other cases.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of characters. That string can include almost any printable
   *     ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>).
   *     You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)
   *     characters. Any of these characters are valid in a password. However, many tools, such
   *     as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have
   *     special meaning within that tool.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   * @public
   */
  PasswordResetRequired?: boolean | undefined;
}

/**
 * <p>Contains the user name and password create date for a user.</p>
 *          <p> This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html">CreateLoginProfile</a> and
 *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html">GetLoginProfile</a> operations. </p>
 * @public
 */
export interface LoginProfile {
  /**
   * <p>The name of the user, which can be used for signing in to the Amazon Web Services Management Console.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The date when the password for the user was created.</p>
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   * @public
   */
  PasswordResetRequired?: boolean | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html">CreateLoginProfile</a>
 *       request. </p>
 * @public
 */
export interface CreateLoginProfileResponse {
  /**
   * <p>A structure containing the user name and password create date.</p>
   * @public
   */
  LoginProfile: LoginProfile | undefined;
}

/**
 * @public
 */
export interface CreateOpenIDConnectProviderRequest {
  /**
   * <p>The URL of the identity provider. The URL must begin with <code>https://</code> and
   *             should correspond to the <code>iss</code> claim in the provider's OpenID Connect ID
   *             tokens. Per the OIDC standard, path components are allowed but query parameters are not.
   *             Typically the URL consists of only a hostname, like
   *                 <code>https://server.example.org</code> or <code>https://example.com</code>. The URL
   *             should not contain a port number. </p>
   *          <p>You cannot register the same provider multiple times in a single Amazon Web Services account. If you
   *             try to submit a URL that has already been used for an OpenID Connect provider in the
   *             Amazon Web Services account, you will get an error.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>Provides a list of client IDs, also known as audiences. When a mobile or web app
   *             registers with an OpenID Connect provider, they establish a value that identifies the
   *             application. This is the value that's sent as the <code>client_id</code> parameter on
   *             OAuth requests.</p>
   *          <p>You can register multiple client IDs with the same provider. For example, you might
   *             have multiple applications that use the same OIDC provider. You cannot register more
   *             than 100 client IDs with a single IAM OIDC provider.</p>
   *          <p>There is no defined format for a client ID. The
   *                 <code>CreateOpenIDConnectProviderRequest</code> operation accepts client IDs up to
   *             255 characters long.</p>
   * @public
   */
  ClientIDList?: string[] | undefined;

  /**
   * <p>A list of server certificate thumbprints for the OpenID Connect (OIDC) identity
   *             provider's server certificates. Typically this list includes only one entry. However,
   *             IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain
   *             multiple thumbprints if the identity provider is rotating certificates.</p>
   *          <p>This parameter is optional. If it is not included, IAM will retrieve and use the top
   *             intermediate certificate authority (CA) thumbprint of the OpenID Connect identity
   *             provider server certificate.</p>
   *          <p>The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509
   *             certificate used by the domain where the OpenID Connect provider makes its keys
   *             available. It is always a 40-character string.</p>
   *          <p>For example, assume that the OIDC provider is <code>server.example.com</code> and the
   *             provider stores its keys at https://keys.server.example.com/openid-connect. In that
   *             case, the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate
   *             used by <code>https://keys.server.example.com.</code>
   *          </p>
   *          <p>For more information about obtaining the OIDC provider thumbprint, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/identity-providers-oidc-obtain-thumbprint.html">Obtaining the
   *                 thumbprint for an OpenID Connect provider</a> in the <i>IAM user
   *                 Guide</i>.</p>
   * @public
   */
  ThumbprintList?: string[] | undefined;

  /**
   * <p>A list of tags that you want to attach to the new IAM OpenID Connect (OIDC) provider.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a> request. </p>
 * @public
 */
export interface CreateOpenIDConnectProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is
   *             created. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_OpenIDConnectProviderListEntry.html">OpenIDConnectProviderListEntry</a>. </p>
   * @public
   */
  OpenIDConnectProviderArn?: string | undefined;

  /**
   * <p>A list of tags that are attached to the new IAM OIDC provider. The returned list of
   *       tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The request failed because IAM cannot connect to the OpenID Connect identity provider
 *       URL.</p>
 * @public
 */
export class OpenIdIdpCommunicationErrorException extends __BaseException {
  readonly name: "OpenIdIdpCommunicationErrorException" = "OpenIdIdpCommunicationErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OpenIdIdpCommunicationErrorException, __BaseException>) {
    super({
      name: "OpenIdIdpCommunicationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OpenIdIdpCommunicationErrorException.prototype);
  }
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * <p>The friendly name of the policy.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The path for the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *                 <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   *          <note>
   *             <p>You cannot use an asterisk (*) in the path name.</p>
   *          </note>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The JSON policy document that you want to use as the content for the new
   *             policy.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>To learn more about JSON policy grammar, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html">Grammar of the IAM JSON
   *                 policy language</a> in the <i>IAM User Guide</i>. </p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * <p>A friendly description of the policy.</p>
   *          <p>Typically used to store information about the permissions defined in the policy. For
   *             example, "Grants access to production DynamoDB tables."</p>
   *          <p>The policy description is immutable. After a value is assigned, it cannot be
   *             changed.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the new IAM customer managed policy.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about a managed policy.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html">GetPolicy</a>,
 *          and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html">ListPolicies</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface Policy {
  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the policy.</p>
   *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The path to the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The identifier for the version of the policy that is set as the default version.</p>
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * <p>The number of entities (users, groups, and roles) that the policy is attached to.</p>
   * @public
   */
  AttachmentCount?: number | undefined;

  /**
   * <p>The number of entities (users and roles) for which the policy is used to set the
   *          permissions boundary. </p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *             identities </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundaryUsageCount?: number | undefined;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   * @public
   */
  IsAttachable?: boolean | undefined;

  /**
   * <p>A friendly description of the policy.</p>
   *          <p>This element is included in the response to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html">GetPolicy</a> operation. It is not
   *          included in the response to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html">ListPolicies</a> operation.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was last updated.</p>
   *          <p>When a policy has only one version, this field contains the date and time when the
   *          policy was created. When a policy has more than one version, this field contains the date
   *          and time when the most recent policy version was created.</p>
   * @public
   */
  UpdateDate?: Date | undefined;

  /**
   * <p>A list of tags that are attached to the instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> request. </p>
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * <p>A structure containing details about the new policy.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name: "MalformedPolicyDocumentException" = "MalformedPolicyDocumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
  }
}

/**
 * @public
 */
export interface CreatePolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new
   *             version.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The JSON policy document that you want to use as the content for this new version of
   *             the policy.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Specifies whether to set this version as the policy's default version.</p>
   *          <p>When this parameter is <code>true</code>, the new policy version becomes the operative
   *             version. That is, it becomes the version that is in effect for the IAM users, groups,
   *             and roles that the policy is attached to.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  SetAsDefault?: boolean | undefined;
}

/**
 * <p>Contains information about a version of a managed policy.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html">CreatePolicyVersion</a>,
 *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html">GetPolicyVersion</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html">ListPolicyVersions</a>,
 *          and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface PolicyVersion {
  /**
   * <p>The policy document.</p>
   *          <p>The policy document is returned in the response to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html">GetPolicyVersion</a> and
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operations. It is not returned in the response
   *          to the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html">CreatePolicyVersion</a>
   *          or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html">ListPolicyVersions</a> operations. </p>
   *          <p>The policy document returned in this structure is URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding
   *          method to convert the policy back to plain JSON text. For example, if you use Java, you can
   *          use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *          the Java SDK. Other languages and SDKs provide similar functionality.</p>
   * @public
   */
  Document?: string | undefined;

  /**
   * <p>The identifier for the policy version.</p>
   *          <p>Policy version identifiers always begin with <code>v</code> (always lowercase). When a
   *          policy is created, the first policy version is <code>v1</code>. </p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Specifies whether the policy version is set as the policy's default version.</p>
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy version was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html">CreatePolicyVersion</a>
 *       request. </p>
 * @public
 */
export interface CreatePolicyVersionResponse {
  /**
   * <p>A structure containing details about the new policy version.</p>
   * @public
   */
  PolicyVersion?: PolicyVersion | undefined;
}

/**
 * @public
 */
export interface CreateRoleRequest {
  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The name of the role to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The trust relationship policy document that grants an entity permission to assume the
   *             role.</p>
   *          <p>In IAM, you must provide a JSON policy that has been converted to a string. However,
   *             for CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML
   *             format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *          <p> Upon success, the response includes the same trust policy in JSON format.</p>
   * @public
   */
  AssumeRolePolicyDocument: string | undefined;

  /**
   * <p>A description of the role.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *             If you do not specify a value for this setting, the default value of one hour is
   *             applied. This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the CLI or API can use the
   *                 <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code>
   *             CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *             determines the maximum duration that can be requested using the
   *                 <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *                 <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *             hour by default. This applies when you use the <code>AssumeRole*</code> API operations
   *             or the <code>assume-role*</code> CLI operations but does not apply when you use those
   *             operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM
   *                 roles</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  MaxSessionDuration?: number | undefined;

  /**
   * <p>The ARN of the managed policy that is used to set the permissions boundary for the
   *             role.</p>
   *          <p>A permissions boundary policy defines the maximum permissions that identity-based
   *             policies can grant to an entity, but does not grant permissions. Permissions boundaries
   *             do not define the maximum permissions that a resource-based policy can grant to an
   *             entity. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries
   *                 for IAM entities</a> in the <i>IAM User Guide</i>.</p>
   *          <p>For more information about policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types">Policy types
   *             </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the new role. Each tag consists of a key name and an associated value.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html">CreateRole</a> request. </p>
 * @public
 */
export interface CreateRoleResponse {
  /**
   * <p>A structure containing details about the new role.</p>
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface CreateSAMLProviderRequest {
  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *             document includes the issuer's name, expiration information, and keys that can be used
   *             to validate the SAML authentication response (assertions) that are received from the
   *             IdP. You must generate the metadata document using the identity management software that
   *             is used as your organization's IdP.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
   *                 federation</a> in the <i>IAM User Guide</i>
   *          </p>
   * @public
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * <p>The name of the provider to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the new IAM SAML provider.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the encryption setting for the SAML provider.</p>
   * @public
   */
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;

  /**
   * <p>The private key generated from your external identity provider. The private key must
   *             be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML
   *             assertions.</p>
   * @public
   */
  AddPrivateKey?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html">CreateSAMLProvider</a>
 *       request. </p>
 * @public
 */
export interface CreateSAMLProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new SAML provider resource in IAM.</p>
   * @public
   */
  SAMLProviderArn?: string | undefined;

  /**
   * <p>A list of tags that are attached to the new IAM SAML provider. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceLinkedRoleRequest {
  /**
   * <p>The service principal for the Amazon Web Services service to which this role is attached. You use a
   *             string similar to a URL but without the http:// in front. For example:
   *                 <code>elasticbeanstalk.amazonaws.com</code>. </p>
   *          <p>Service principals are unique and case-sensitive. To find the exact service principal
   *             for your service-linked role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">Amazon Web Services services
   *                 that work with IAM</a> in the <i>IAM User Guide</i>. Look for
   *             the services that have <b>Yes </b>in the <b>Service-Linked Role</b> column. Choose the <b>Yes</b> link to view the service-linked role documentation for that
   *             service.</p>
   * @public
   */
  AWSServiceName: string | undefined;

  /**
   * <p>The description of the role.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p></p>
   *          <p>A string that you provide, which is combined with the service-provided prefix to form
   *             the complete role name. If you make multiple requests for the same service, then you
   *             must supply a different <code>CustomSuffix</code> for each request. Otherwise the
   *             request fails with a duplicate role name error. For example, you could add
   *                 <code>-1</code> or <code>-debug</code> to the suffix.</p>
   *          <p>Some services do not support the <code>CustomSuffix</code> parameter. If you provide
   *             an optional suffix and the operation fails, try the operation again without the
   *             suffix.</p>
   * @public
   */
  CustomSuffix?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceLinkedRoleResponse {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_Role.html">Role</a>
   *             object that contains details about the newly created role.</p>
   * @public
   */
  Role?: Role | undefined;
}

/**
 * @public
 */
export interface CreateServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user that is to be associated with the credentials. The new
   *             service-specific credentials have the same permissions as the associated user except
   *             that they can be used only to access the specified service.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The name of the Amazon Web Services service that is to be associated with the credentials. The
   *             service you specify here is the only service that can be accessed using these
   *             credentials.</p>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>The number of days until the service specific credential expires. This field is only
   *             valid for Bedrock API keys and must be a positive integer. When not specified, the
   *             credential will not expire.</p>
   * @public
   */
  CredentialAgeDays?: number | undefined;
}

/**
 * <p>Contains the details of a service-specific credential.</p>
 * @public
 */
export interface ServiceSpecificCredential {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * <p>The date and time when the service specific credential expires. This field is only
   *          present for Bedrock API keys that were created with an expiration period.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>The generated user name for the service-specific credential. This value is generated by
   *          combining the IAM user's name combined with the ID number of the Amazon Web Services account, as in
   *             <code>jane-at-123456789012</code>, for example. This value cannot be configured by the
   *          user.</p>
   * @public
   */
  ServiceUserName?: string | undefined;

  /**
   * <p>The generated password for the service-specific credential.</p>
   * @public
   */
  ServicePassword?: string | undefined;

  /**
   * <p>For Bedrock API keys, this is the public portion of the credential that includes the IAM
   *          user name and a suffix containing version and creation information.</p>
   * @public
   */
  ServiceCredentialAlias?: string | undefined;

  /**
   * <p>For Bedrock API keys, this is the secret portion of the credential that should be used
   *          to authenticate API calls. This value is returned only when the credential is
   *          created.</p>
   * @public
   */
  ServiceCredentialSecret?: string | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   * @public
   */
  Status: StatusType | undefined;
}

/**
 * @public
 */
export interface CreateServiceSpecificCredentialResponse {
  /**
   * <p>A structure that contains information about the newly created service-specific
   *             credential.</p>
   *          <important>
   *             <p>This is the only time that the password for this credential set is available. It
   *                 cannot be recovered later. Instead, you must reset the password with <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html">ResetServiceSpecificCredential</a>.</p>
   *          </important>
   * @public
   */
  ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}

/**
 * <p>The specified service does not support service-specific credentials.</p>
 * @public
 */
export class ServiceNotSupportedException extends __BaseException {
  readonly name: "ServiceNotSupportedException" = "ServiceNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotSupportedException, __BaseException>) {
    super({
      name: "ServiceNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotSupportedException.prototype);
  }
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p> The path for the user name. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The name of the user to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *             not distinguished by case. For example, you cannot create resources named both
   *             "MyResource" and "myresource".</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ARN of the managed policy that is used to set the permissions boundary for the
   *             user.</p>
   *          <p>A permissions boundary policy defines the maximum permissions that identity-based
   *             policies can grant to an entity, but does not grant permissions. Permissions boundaries
   *             do not define the maximum permissions that a resource-based policy can grant to an
   *             entity. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries
   *                 for IAM entities</a> in the <i>IAM User Guide</i>.</p>
   *          <p>For more information about policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types">Policy types
   *             </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary?: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about an IAM user entity.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html">CreateUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html">GetUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html">ListUsers</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface User {
  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>The ARN of the policy used to set the permissions boundary for the user.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The friendly name identifying the user.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs
   *          and how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user's password was last used to sign in to an Amazon Web Services website.
   *          For a list of Amazon Web Services websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential
   *             reports</a> topic in the <i>IAM User Guide</i>. If a password is
   *          used more than once in a five-minute span, only the first use is returned in this field. If
   *          the field is null (no value), then it indicates that they never signed in with a password.
   *          This can be because:</p>
   *          <ul>
   *             <li>
   *                <p>The user never had a password.</p>
   *             </li>
   *             <li>
   *                <p>A password exists but has not been used since IAM started tracking this
   *                information on October 20, 2014.</p>
   *             </li>
   *          </ul>
   *          <p>A null value does not mean that the user <i>never</i> had a password.
   *          Also, if the user does not currently have a password but had one in the past, then this
   *          field contains the date and time the most recent password was used.</p>
   *          <p>This value is returned only in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html">GetUser</a> and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html">ListUsers</a>
   *          operations. </p>
   * @public
   */
  PasswordLastUsed?: Date | undefined;

  /**
   * <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *             identities </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * <p>A list of tags that are associated with the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html">CreateUser</a> request. </p>
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>A structure with details about the new IAM user.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface CreateVirtualMFADeviceRequest {
  /**
   * <p> The path for the virtual MFA device. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *                 identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The name of the virtual MFA device, which must be unique. Use with path to uniquely
   *             identify a virtual MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  VirtualMFADeviceName: string | undefined;

  /**
   * <p>A list of tags that you want to attach to the new IAM virtual MFA device.
   *       Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
   *    fails and the resource is not created.</p>
   *          </note>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about a virtual MFA device.</p>
 * @public
 */
export interface VirtualMFADevice {
  /**
   * <p>The serial number associated with <code>VirtualMFADevice</code>.</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p> The base32 seed defined as specified in <a href="https://tools.ietf.org/html/rfc3548.txt">RFC3548</a>. The <code>Base32StringSeed</code> is base32-encoded. </p>
   * @public
   */
  Base32StringSeed?: Uint8Array | undefined;

  /**
   * <p> A QR code PNG image that encodes
   *             <code>otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String</code>
   *          where <code>$virtualMFADeviceName</code> is one of the create call arguments.
   *             <code>AccountName</code> is the user name if set (otherwise, the account ID otherwise),
   *          and <code>Base32String</code> is the seed in base32 format. The <code>Base32String</code>
   *          value is base64-encoded. </p>
   * @public
   */
  QRCodePNG?: Uint8Array | undefined;

  /**
   * <p>The IAM user associated with this virtual MFA device.</p>
   * @public
   */
  User?: User | undefined;

  /**
   * <p>The date and time on which the virtual MFA device was enabled.</p>
   * @public
   */
  EnableDate?: Date | undefined;

  /**
   * <p>A list of tags that are attached to the virtual MFA device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html">CreateVirtualMFADevice</a>
 *       request. </p>
 * @public
 */
export interface CreateVirtualMFADeviceResponse {
  /**
   * <p>A structure containing details about the new virtual MFA device.</p>
   * @public
   */
  VirtualMFADevice: VirtualMFADevice | undefined;
}

/**
 * @public
 */
export interface DeactivateMFADeviceRequest {
  /**
   * <p>The name of the user whose MFA device you want to deactivate.</p>
   *          <p>This parameter is optional. If no user name is included, it defaults to the principal
   *             making the request. When you make this request with root user credentials, you must use
   *             an <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html">AssumeRoot</a> session to omit the user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices,
   *             the serial number is the device ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   * @public
   */
  SerialNumber: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessKeyRequest {
  /**
   * <p>The name of the user whose access key pair you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The access key ID for the access key ID and secret access key you want to
   *             delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  AccessKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAliasRequest {
  /**
   * <p>The name of the account alias to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of
   *     lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have
   *     two dashes in a row.</p>
   * @public
   */
  AccountAlias: string | undefined;
}

/**
 * <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 * @public
 */
export class DeleteConflictException extends __BaseException {
  readonly name: "DeleteConflictException" = "DeleteConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteConflictException, __BaseException>) {
    super({
      name: "DeleteConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteConflictException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The name of the IAM group to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) identifying the group that the policy is embedded
   *             in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The name identifying the policy document to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoginProfileRequest {
  /**
   * <p>The name of the user whose password you want to delete.</p>
   *          <p>This parameter is optional. If no user name is included, it defaults to the principal
   *             making the request. When you make this request with root user credentials, you must use
   *             an <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html">AssumeRoot</a> session to omit the user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to
   *             delete. You can get a list of OpenID Connect provider resource ARNs by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html">ListOpenIDConnectProviders</a> operation.</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to delete.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a
   *             version.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The policy version to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that
   *     consists of the lowercase letter 'v' followed by one or two digits, and optionally
   *     followed by a period '.' and a string of letters and digits.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleRequest {
  /**
   * <p>The name of the role to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRolePermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role from which you want to remove the
   *             permissions boundary.</p>
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRolePolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) identifying the role that the policy is embedded
   *             in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the inline policy to delete from the specified IAM role.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSAMLProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to delete.</p>
   * @public
   */
  SAMLProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServerCertificateRequest {
  /**
   * <p>The name of the server certificate you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedRoleRequest {
  /**
   * <p>The name of the service-linked role to be deleted.</p>
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceLinkedRoleResponse {
  /**
   * <p>The deletion task identifier that you can use to check the status of the deletion.
   *             This identifier is returned in the format
   *                 <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   * @public
   */
  DeletionTaskId: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *             value is not specified, then the operation assumes the user whose credentials are used
   *             to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The unique identifier of the service-specific credential. You can get this value by
   *             calling <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html">ListServiceSpecificCredentials</a>.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSigningCertificateRequest {
  /**
   * <p>The name of the user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The ID of the signing certificate to delete.</p>
   *          <p>The format of this parameter, as described by its <a href="http://wikipedia.org/wiki/regex">regex</a> pattern, is a string of
   *             characters that can be upper- or lower-cased letters or digits.</p>
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  SSHPublicKeyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The name of the user to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user from which you want to remove the
   *             permissions boundary.</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) identifying the user that the policy is embedded
   *             in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The name identifying the policy document to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVirtualMFADeviceRequest {
  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices,
   *             the serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   * @public
   */
  SerialNumber: string | undefined;
}

/**
 * @public
 */
export interface DetachGroupPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM group to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DetachRolePolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DetachUserPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationsRootCredentialsManagementRequest {}

/**
 * @public
 * @enum
 */
export const FeatureType = {
  ROOT_CREDENTIALS_MANAGEMENT: "RootCredentialsManagement",
  ROOT_SESSIONS: "RootSessions",
} as const;

/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 */
export interface DisableOrganizationsRootCredentialsManagementResponse {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The features enabled for centralized root access for member accounts in your
   *             organization.</p>
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * <p>The request was rejected because no organization is associated with your account.</p>
 * @public
 */
export class OrganizationNotFoundException extends __BaseException {
  readonly name: "OrganizationNotFoundException" = "OrganizationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The request was rejected because your organization does not have All features enabled. For
 *       more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set">Available feature sets</a> in the <i>Organizations User
 *       Guide</i>.</p>
 * @public
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
  readonly name: "OrganizationNotInAllFeaturesModeException" = "OrganizationNotInAllFeaturesModeException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotInAllFeaturesModeException, __BaseException>) {
    super({
      name: "OrganizationNotInAllFeaturesModeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the <i>Organizations User Guide</i>.</p>
 * @public
 */
export class ServiceAccessNotEnabledException extends __BaseException {
  readonly name: "ServiceAccessNotEnabledException" = "ServiceAccessNotEnabledException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceAccessNotEnabledException, __BaseException>) {
    super({
      name: "ServiceAccessNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceAccessNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DisableOrganizationsRootSessionsRequest {}

/**
 * @public
 */
export interface DisableOrganizationsRootSessionsResponse {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The features you have enabled for centralized root access of member accounts in your
   *             organization.</p>
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface EnableMFADeviceRequest {
  /**
   * <p>The name of the IAM user for whom you want to enable the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices,
   *             the serial number is the device ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>An authentication code emitted by the device. </p>
   *          <p>The format for this parameter is a string of six digits.</p>
   *          <important>
   *             <p>Submit your request immediately after generating the authentication codes. If you
   *                 generate the codes and then wait too long to submit the request, the MFA device
   *                 successfully associates with the user but the MFA device becomes out of sync. This
   *                 happens because time-based one-time passwords (TOTP) expire after a short period of
   *                 time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the
   *                 device</a>.</p>
   *          </important>
   * @public
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a string of six digits.</p>
   *          <important>
   *             <p>Submit your request immediately after generating the authentication codes. If you
   *                 generate the codes and then wait too long to submit the request, the MFA device
   *                 successfully associates with the user but the MFA device becomes out of sync. This
   *                 happens because time-based one-time passwords (TOTP) expire after a short period of
   *                 time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the
   *                 device</a>.</p>
   *          </important>
   * @public
   */
  AuthenticationCode2: string | undefined;
}

/**
 * <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 * @public
 */
export class InvalidAuthenticationCodeException extends __BaseException {
  readonly name: "InvalidAuthenticationCodeException" = "InvalidAuthenticationCodeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthenticationCodeException, __BaseException>) {
    super({
      name: "InvalidAuthenticationCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthenticationCodeException.prototype);
  }
}

/**
 * <p>The request was rejected because the account making the request is not the management
 *       account for the organization.</p>
 * @public
 */
export class CallerIsNotManagementAccountException extends __BaseException {
  readonly name: "CallerIsNotManagementAccountException" = "CallerIsNotManagementAccountException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CallerIsNotManagementAccountException, __BaseException>) {
    super({
      name: "CallerIsNotManagementAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CallerIsNotManagementAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface EnableOrganizationsRootCredentialsManagementRequest {}

/**
 * @public
 */
export interface EnableOrganizationsRootCredentialsManagementResponse {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The features you have enabled for centralized root access.</p>
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationsRootSessionsRequest {}

/**
 * @public
 */
export interface EnableOrganizationsRootSessionsResponse {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The features you have enabled for centralized root access.</p>
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportStateType = {
  COMPLETE: "COMPLETE",
  INPROGRESS: "INPROGRESS",
  STARTED: "STARTED",
} as const;

/**
 * @public
 */
export type ReportStateType = (typeof ReportStateType)[keyof typeof ReportStateType];

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html">GenerateCredentialReport</a> request. </p>
 * @public
 */
export interface GenerateCredentialReportResponse {
  /**
   * <p>Information about the state of the credential report.</p>
   * @public
   */
  State?: ReportStateType | undefined;

  /**
   * <p>Information about the credential report.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GenerateOrganizationsAccessReportRequest {
  /**
   * <p>The path of the Organizations entity (root, OU, or account). You can build an entity path
   *             using the known structure of your organization. For example, assume that your account ID
   *             is <code>123456789012</code> and its parent OU ID is <code>ou-rge0-awsabcde</code>. The
   *             organization root ID is <code>r-f6g7h8i9j0example</code> and your organization ID is
   *                 <code>o-a1b2c3d4e5</code>. Your entity path is
   *                 <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-rge0-awsabcde/123456789012</code>.</p>
   * @public
   */
  EntityPath: string | undefined;

  /**
   * <p>The identifier of the Organizations service control policy (SCP). This parameter is
   *             optional.</p>
   *          <p>This ID is used to generate information about when an account principal that is
   *             limited by the SCP attempted to access an Amazon Web Services service.</p>
   * @public
   */
  OrganizationsPolicyId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateOrganizationsAccessReportResponse {
  /**
   * <p>The job identifier that you can use in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html">GetOrganizationsAccessReport</a> operation.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * <p>The request failed because the maximum number of concurrent requests for this account are
 *       already running.</p>
 * @public
 */
export class ReportGenerationLimitExceededException extends __BaseException {
  readonly name: "ReportGenerationLimitExceededException" = "ReportGenerationLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReportGenerationLimitExceededException, __BaseException>) {
    super({
      name: "ReportGenerationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReportGenerationLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface GenerateServiceLastAccessedDetailsRequest {
  /**
   * <p>The ARN of the IAM resource (user, group, role, or managed policy) used to generate
   *             information about when the resource was last used in an attempt to access an Amazon Web Services
   *             service.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The level of detail that you want to generate. You can specify whether you want to
   *             generate information about the last attempt to access services or actions. If you
   *             specify service-level granularity, this operation generates only service data. If you
   *             specify action-level granularity, it generates service and action data. If you don't
   *             include this optional parameter, the operation generates service data.</p>
   * @public
   */
  Granularity?: AccessAdvisorUsageGranularityType | undefined;
}

/**
 * @public
 */
export interface GenerateServiceLastAccessedDetailsResponse {
  /**
   * <p>The <code>JobId</code> that you can use in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> operations. The
   *                 <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must
   *             be used by the same role within a session, or by the same user when used to call
   *                 <code>GetServiceLastAccessedDetail</code>.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccessKeyLastUsedRequest {
  /**
   * <p>The identifier of an access key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  AccessKeyId: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html">GetAccessKeyLastUsed</a>
 *       request. It is also returned as a member of the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AccessKeyMetaData.html">AccessKeyMetaData</a> structure
 *       returned by the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html">ListAccessKeys</a> action.</p>
 * @public
 */
export interface GetAccessKeyLastUsedResponse {
  /**
   * <p>The name of the IAM user that owns this access key.</p>
   *          <p></p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Contains information about the last time the access key was used.</p>
   * @public
   */
  AccessKeyLastUsed?: AccessKeyLastUsed | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  AWSManagedPolicy: "AWSManagedPolicy",
  Group: "Group",
  LocalManagedPolicy: "LocalManagedPolicy",
  Role: "Role",
  User: "User",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 */
export interface GetAccountAuthorizationDetailsRequest {
  /**
   * <p>A list of entity types used to filter the results. Only the entities that match the
   *             types you specify are included in the output. Use the value
   *                 <code>LocalManagedPolicy</code> to include customer managed policies.</p>
   *          <p>The format for this parameter is a comma-separated (if more than one) list of strings.
   *             Each string value in the list must be one of the valid values listed below.</p>
   * @public
   */
  Filter?: EntityType[] | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains information about an IAM policy, including the policy document.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operation.</p>
 * @public
 */
export interface PolicyDetail {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The policy document.</p>
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * <p>Contains information about an IAM group, including all of the group's policies.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operation.</p>
 * @public
 */
export interface GroupDetail {
  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The friendly name that identifies the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the group was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>A list of the inline policies embedded in the group.</p>
   * @public
   */
  GroupPolicyList?: PolicyDetail[] | undefined;

  /**
   * <p>A list of the managed policies attached to the group.</p>
   * @public
   */
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;
}

/**
 * <p>Contains information about a managed policy, including the policy's ARN, versions, and
 *          the number of principal entities (users, groups, and roles) that the policy is attached
 *          to.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operation.</p>
 *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface ManagedPolicyDetail {
  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the policy.</p>
   *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The path to the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The identifier for the version of the policy that is set as the default (operative)
   *          version.</p>
   *          <p>For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *             policies</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * <p>The number of principal entities (users, groups, and roles) that the policy is attached
   *          to.</p>
   * @public
   */
  AttachmentCount?: number | undefined;

  /**
   * <p>The number of entities (users and roles) for which the policy is used as the permissions
   *          boundary. </p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *             identities </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundaryUsageCount?: number | undefined;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   * @public
   */
  IsAttachable?: boolean | undefined;

  /**
   * <p>A friendly description of the policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was last updated.</p>
   *          <p>When a policy has only one version, this field contains the date and time when the
   *          policy was created. When a policy has more than one version, this field contains the date
   *          and time when the most recent policy version was created.</p>
   * @public
   */
  UpdateDate?: Date | undefined;

  /**
   * <p>A list containing information about the versions of the policy.</p>
   * @public
   */
  PolicyVersionList?: PolicyVersion[] | undefined;
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operation.</p>
 * @public
 */
export interface RoleDetail {
  /**
   * <p>The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The friendly name that identifies the role.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  RoleId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   * @public
   */
  AssumeRolePolicyDocument?: string | undefined;

  /**
   * <p>A list of instance profiles that contain this role.</p>
   * @public
   */
  InstanceProfileList?: InstanceProfile[] | undefined;

  /**
   * <p>A list of inline policies embedded in the role. These policies are the role's access
   *          (permissions) policies.</p>
   * @public
   */
  RolePolicyList?: PolicyDetail[] | undefined;

  /**
   * <p>A list of managed policies attached to the role. These policies are the role's access
   *          (permissions) policies.</p>
   * @public
   */
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *             identities </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * <p>A list of tags that are attached to the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Contains information about the last time that an IAM role was used. This includes the
   *          date and time and the Region in which the role was last used. Activity is only reported for
   *          the trailing 400 days. This period can be shorter if your Region began supporting these
   *          features within the last year. The role might have been used more than 400 days ago. For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the
   *          <i>IAM User Guide</i>.</p>
   * @public
   */
  RoleLastUsed?: RoleLastUsed | undefined;
}

/**
 * <p>Contains information about an IAM user, including all the user's policies and all the
 *          IAM groups the user is in.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> operation.</p>
 * @public
 */
export interface UserDetail {
  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The friendly name identifying the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>A list of the inline policies embedded in the user.</p>
   * @public
   */
  UserPolicyList?: PolicyDetail[] | undefined;

  /**
   * <p>A list of IAM groups that the user is in.</p>
   * @public
   */
  GroupList?: string[] | undefined;

  /**
   * <p>A list of the managed policies attached to the user.</p>
   * @public
   */
  AttachedManagedPolicies?: AttachedPolicy[] | undefined;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *             identities </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary?: AttachedPermissionsBoundary | undefined;

  /**
   * <p>A list of tags that are associated with the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html">GetAccountAuthorizationDetails</a> request. </p>
 * @public
 */
export interface GetAccountAuthorizationDetailsResponse {
  /**
   * <p>A list containing information about IAM users.</p>
   * @public
   */
  UserDetailList?: UserDetail[] | undefined;

  /**
   * <p>A list containing information about IAM groups.</p>
   * @public
   */
  GroupDetailList?: GroupDetail[] | undefined;

  /**
   * <p>A list containing information about IAM roles.</p>
   * @public
   */
  RoleDetailList?: RoleDetail[] | undefined;

  /**
   * <p>A list containing information about managed policies.</p>
   * @public
   */
  Policies?: ManagedPolicyDetail[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains information about the account password policy.</p>
 *          <p> This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html">GetAccountPasswordPolicy</a> operation. </p>
 * @public
 */
export interface PasswordPolicy {
  /**
   * <p>Minimum length to require for IAM user passwords.</p>
   * @public
   */
  MinimumPasswordLength?: number | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one of the following
   *          symbols:</p>
   *          <p>! @ # $ % ^ & * ( ) _ + - = [ ] \{ \} | '</p>
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one numeric character (0 to
   *          9).</p>
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one uppercase character (A
   *          to Z).</p>
   * @public
   */
  RequireUppercaseCharacters?: boolean | undefined;

  /**
   * <p>Specifies whether IAM user passwords must contain at least one lowercase character (a
   *          to z).</p>
   * @public
   */
  RequireLowercaseCharacters?: boolean | undefined;

  /**
   * <p>Specifies whether IAM users are allowed to change their own password. Gives IAM
   *          users permissions to <code>iam:ChangePassword</code> for only their user and to the
   *             <code>iam:GetAccountPasswordPolicy</code> action. This option does not attach a
   *          permissions policy to each user, rather the permissions are applied at the account-level
   *          for all users by IAM.</p>
   * @public
   */
  AllowUsersToChangePassword?: boolean | undefined;

  /**
   * <p>Indicates whether passwords in the account expire. Returns true if
   *             <code>MaxPasswordAge</code> contains a value greater than 0. Returns false if
   *          MaxPasswordAge is 0 or not present.</p>
   * @public
   */
  ExpirePasswords?: boolean | undefined;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   * @public
   */
  MaxPasswordAge?: number | undefined;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *          reusing.</p>
   * @public
   */
  PasswordReusePrevention?: number | undefined;

  /**
   * <p>Specifies whether IAM users are prevented from setting a new password via the
   *          Amazon Web Services Management Console after their password has expired. The IAM user cannot access the console until
   *          an administrator resets the password. IAM users with <code>iam:ChangePassword</code>
   *          permission and active access keys can reset their own expired console password using the
   *          CLI or API.</p>
   * @public
   */
  HardExpiry?: boolean | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html">GetAccountPasswordPolicy</a> request. </p>
 * @public
 */
export interface GetAccountPasswordPolicyResponse {
  /**
   * <p>A structure that contains details about the account's password policy.</p>
   * @public
   */
  PasswordPolicy: PasswordPolicy | undefined;
}

/**
 * @public
 * @enum
 */
export const SummaryKeyType = {
  AccessKeysPerUserQuota: "AccessKeysPerUserQuota",
  AccountAccessKeysPresent: "AccountAccessKeysPresent",
  AccountMFAEnabled: "AccountMFAEnabled",
  AccountPasswordPresent: "AccountPasswordPresent",
  AccountSigningCertificatesPresent: "AccountSigningCertificatesPresent",
  AttachedPoliciesPerGroupQuota: "AttachedPoliciesPerGroupQuota",
  AttachedPoliciesPerRoleQuota: "AttachedPoliciesPerRoleQuota",
  AttachedPoliciesPerUserQuota: "AttachedPoliciesPerUserQuota",
  GlobalEndpointTokenVersion: "GlobalEndpointTokenVersion",
  GroupPolicySizeQuota: "GroupPolicySizeQuota",
  Groups: "Groups",
  GroupsPerUserQuota: "GroupsPerUserQuota",
  GroupsQuota: "GroupsQuota",
  MFADevices: "MFADevices",
  MFADevicesInUse: "MFADevicesInUse",
  Policies: "Policies",
  PoliciesQuota: "PoliciesQuota",
  PolicySizeQuota: "PolicySizeQuota",
  PolicyVersionsInUse: "PolicyVersionsInUse",
  PolicyVersionsInUseQuota: "PolicyVersionsInUseQuota",
  ServerCertificates: "ServerCertificates",
  ServerCertificatesQuota: "ServerCertificatesQuota",
  SigningCertificatesPerUserQuota: "SigningCertificatesPerUserQuota",
  UserPolicySizeQuota: "UserPolicySizeQuota",
  Users: "Users",
  UsersQuota: "UsersQuota",
  VersionsPerPolicyQuota: "VersionsPerPolicyQuota",
} as const;

/**
 * @public
 */
export type SummaryKeyType = (typeof SummaryKeyType)[keyof typeof SummaryKeyType];

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html">GetAccountSummary</a> request.
 *     </p>
 * @public
 */
export interface GetAccountSummaryResponse {
  /**
   * <p>A set of key–value pairs containing information about IAM entity usage and
   *             IAM quotas.</p>
   * @public
   */
  SummaryMap?: Partial<Record<SummaryKeyType, number>> | undefined;
}

/**
 * @public
 */
export interface GetContextKeysForCustomPolicyRequest {
  /**
   * <p>A list of policies for which you want the list of context keys referenced in those
   *             policies. Each document is specified as a string containing the complete, valid JSON
   *             text of an IAM policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyInputList: string[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html">GetContextKeysForPrincipalPolicy</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html">GetContextKeysForCustomPolicy</a> request. </p>
 * @public
 */
export interface GetContextKeysForPolicyResponse {
  /**
   * <p>The list of context keys that are referenced in the input policies.</p>
   * @public
   */
  ContextKeyNames?: string[] | undefined;
}

/**
 * @public
 */
export interface GetContextKeysForPrincipalPolicyRequest {
  /**
   * <p>The ARN of a user, group, or role whose policies contain the context keys that you
   *             want listed. If you specify a user, the list includes context keys that are found in all
   *             policies that are attached to the user. The list also includes all groups that the user
   *             is a member of. If you pick a group or a role, then it includes only those context keys
   *             that are found in policies attached to that entity. Note that all parameters are shown
   *             in unencoded form here for clarity, but must be URL encoded to be included as a part of
   *             a real HTML request.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicySourceArn: string | undefined;

  /**
   * <p>An optional list of additional policies for which you want the list of context keys
   *             that are referenced.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyInputList?: string[] | undefined;
}

/**
 * <p>The request was rejected because the most recent credential report has expired. To
 *       generate a new credential report, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html">GenerateCredentialReport</a>. For more information about credential report expiration,
 *       see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting
 *         credential reports</a> in the <i>IAM User Guide</i>.</p>
 * @public
 */
export class CredentialReportExpiredException extends __BaseException {
  readonly name: "CredentialReportExpiredException" = "CredentialReportExpiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CredentialReportExpiredException, __BaseException>) {
    super({
      name: "CredentialReportExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CredentialReportExpiredException.prototype);
  }
}

/**
 * <p>The request was rejected because the credential report does not exist. To generate a
 *       credential report, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html">GenerateCredentialReport</a>.</p>
 * @public
 */
export class CredentialReportNotPresentException extends __BaseException {
  readonly name: "CredentialReportNotPresentException" = "CredentialReportNotPresentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CredentialReportNotPresentException, __BaseException>) {
    super({
      name: "CredentialReportNotPresentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CredentialReportNotPresentException.prototype);
  }
}

/**
 * <p>The request was rejected because the credential report is still being generated.</p>
 * @public
 */
export class CredentialReportNotReadyException extends __BaseException {
  readonly name: "CredentialReportNotReadyException" = "CredentialReportNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CredentialReportNotReadyException, __BaseException>) {
    super({
      name: "CredentialReportNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CredentialReportNotReadyException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ReportFormatType = {
  text_csv: "text/csv",
} as const;

/**
 * @public
 */
export type ReportFormatType = (typeof ReportFormatType)[keyof typeof ReportFormatType];

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html">GetCredentialReport</a>
 *       request. </p>
 * @public
 */
export interface GetCredentialReportResponse {
  /**
   * <p>Contains the credential report. The report is Base64-encoded.</p>
   * @public
   */
  Content?: Uint8Array | undefined;

  /**
   * <p>The format (MIME type) of the credential report.</p>
   * @public
   */
  ReportFormat?: ReportFormatType | undefined;

  /**
   * <p> The date and time when the credential report was created, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>.</p>
   * @public
   */
  GeneratedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>The name of the group.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html">GetGroup</a> request. </p>
 * @public
 */
export interface GetGroupResponse {
  /**
   * <p>A structure that contains details about the group.</p>
   * @public
   */
  Group: Group | undefined;

  /**
   * <p>A list of users in the group.</p>
   * @public
   */
  Users: User[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetGroupPolicyRequest {
  /**
   * <p>The name of the group the policy is associated with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html">GetGroupPolicy</a> request.
 *     </p>
 * @public
 */
export interface GetGroupPolicyResponse {
  /**
   * <p>The group the policy is associated with.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using CloudFormation
   *             templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format
   *             before submitting it to IAM.</p>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface GetInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to get information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html">GetInstanceProfile</a>
 *       request. </p>
 * @public
 */
export interface GetInstanceProfileResponse {
  /**
   * <p>A structure containing details about the instance profile.</p>
   * @public
   */
  InstanceProfile: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface GetLoginProfileRequest {
  /**
   * <p>The name of the user whose login profile you want to retrieve.</p>
   *          <p>This parameter is optional. If no user name is included, it defaults to the principal
   *             making the request. When you make this request with root user credentials, you must use
   *             an <a href="https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html">AssumeRoot</a> session to omit the user name.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html">GetLoginProfile</a> request.
 *     </p>
 * @public
 */
export interface GetLoginProfileResponse {
  /**
   * <p>A structure containing the user name and the profile creation date for the
   *             user.</p>
   * @public
   */
  LoginProfile: LoginProfile | undefined;
}

/**
 * @public
 */
export interface GetMFADeviceRequest {
  /**
   * <p>Serial number that uniquely identifies the MFA device. For this API, we only accept
   *             FIDO security key <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARNs</a>.</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>The friendly name identifying the user.</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * @public
 */
export interface GetMFADeviceResponse {
  /**
   * <p>The friendly name identifying the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Serial number that uniquely identifies the MFA device. For this API, we only accept
   *             FIDO security key <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARNs</a>.</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>The date that a specified user's MFA device was first enabled.</p>
   * @public
   */
  EnableDate?: Date | undefined;

  /**
   * <p>The certifications of a specified user's MFA device. We currently provide FIPS-140-2,
   *             FIPS-140-3, and FIDO certification levels obtained from <a href="https://fidoalliance.org/metadata/"> FIDO Alliance Metadata Service
   *                 (MDS)</a>.</p>
   * @public
   */
  Certifications?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to get
   *             information for. You can get a list of OIDC provider resource ARNs by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html">ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html">GetOpenIDConnectProvider</a> request. </p>
 * @public
 */
export interface GetOpenIDConnectProviderResponse {
  /**
   * <p>The URL that the IAM OIDC provider resource object is associated with. For more
   *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>A list of client IDs (also known as audiences) that are associated with the specified
   *             IAM OIDC provider resource object. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>.</p>
   * @public
   */
  ClientIDList?: string[] | undefined;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OIDC
   *             provider resource object. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>. </p>
   * @public
   */
  ThumbprintList?: string[] | undefined;

  /**
   * <p>The date and time when the IAM OIDC provider resource object was created in the
   *             Amazon Web Services account.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>A list of tags that are attached to the specified IAM OIDC provider. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SortKeyType = {
  LAST_AUTHENTICATED_TIME_ASCENDING: "LAST_AUTHENTICATED_TIME_ASCENDING",
  LAST_AUTHENTICATED_TIME_DESCENDING: "LAST_AUTHENTICATED_TIME_DESCENDING",
  SERVICE_NAMESPACE_ASCENDING: "SERVICE_NAMESPACE_ASCENDING",
  SERVICE_NAMESPACE_DESCENDING: "SERVICE_NAMESPACE_DESCENDING",
} as const;

/**
 * @public
 */
export type SortKeyType = (typeof SortKeyType)[keyof typeof SortKeyType];

/**
 * @public
 */
export interface GetOrganizationsAccessReportRequest {
  /**
   * <p>The identifier of the request generated by the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html">GenerateOrganizationsAccessReport</a> operation.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The key that is used to sort the results. If you choose the namespace key, the results
   *             are returned in alphabetical order. If you choose the time key, the results are sorted
   *             numerically by the date and time.</p>
   * @public
   */
  SortKey?: SortKeyType | undefined;
}

/**
 * <p>Contains information about the reason that the operation failed.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html">GetOrganizationsAccessReport</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>Detailed information about the reason that the operation failed.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The error code associated with the operation failure.</p>
   * @public
   */
  Code: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatusType = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type JobStatusType = (typeof JobStatusType)[keyof typeof JobStatusType];

/**
 * @public
 */
export interface GetOrganizationsAccessReportResponse {
  /**
   * <p>The status of the job.</p>
   * @public
   */
  JobStatus: JobStatusType | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *                 format</a>, when the report job was created.</p>
   * @public
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *                 format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *             of <code>IN_PROGRESS</code>.</p>
   * @public
   */
  JobCompletionDate?: Date | undefined;

  /**
   * <p>The number of services that the applicable SCPs allow account principals to
   *             access.</p>
   * @public
   */
  NumberOfServicesAccessible?: number | undefined;

  /**
   * <p>The number of services that account principals are allowed but did not attempt to
   *             access.</p>
   * @public
   */
  NumberOfServicesNotAccessed?: number | undefined;

  /**
   * <p>An object that contains details about the most recent attempt to access the
   *             service.</p>
   * @public
   */
  AccessDetails?: AccessDetail[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Contains information about the reason that the operation failed.</p>
   *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html">GetOrganizationsAccessReport</a>, <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a>, and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
   * @public
   */
  ErrorDetails?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the managed policy that you want information
   *             about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html">GetPolicy</a> request. </p>
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>A structure containing details about the policy.</p>
   * @public
   */
  Policy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the managed policy that you want information
   *             about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>Identifies the policy version to retrieve.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that
   *     consists of the lowercase letter 'v' followed by one or two digits, and optionally
   *     followed by a period '.' and a string of letters and digits.</p>
   * @public
   */
  VersionId: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html">GetPolicyVersion</a> request.
 *     </p>
 * @public
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>A structure containing details about the policy version.</p>
   * @public
   */
  PolicyVersion?: PolicyVersion | undefined;
}

/**
 * @public
 */
export interface GetRoleRequest {
  /**
   * <p>The name of the IAM role to get information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html">GetRole</a> request. </p>
 * @public
 */
export interface GetRoleResponse {
  /**
   * <p>A structure containing details about the IAM role.</p>
   * @public
   */
  Role: Role | undefined;
}

/**
 * @public
 */
export interface GetRolePolicyRequest {
  /**
   * <p>The name of the role associated with the policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html">GetRolePolicy</a> request. </p>
 * @public
 */
export interface GetRolePolicyResponse {
  /**
   * <p>The role the policy is associated with.</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using CloudFormation
   *             templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format
   *             before submitting it to IAM.</p>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface GetSAMLProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get
   *             information about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  SAMLProviderArn: string | undefined;
}

/**
 * <p>Contains the private keys for the SAML provider.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html">GetSAMLProvider</a>
 *          operation.</p>
 * @public
 */
export interface SAMLPrivateKey {
  /**
   * <p>The unique identifier for the SAML private key.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *          </a> format, when the private key was uploaded.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html">GetSAMLProvider</a> request.
 *     </p>
 * @public
 */
export interface GetSAMLProviderResponse {
  /**
   * <p>The unique identifier assigned to the SAML provider.</p>
   * @public
   */
  SAMLProviderUUID?: string | undefined;

  /**
   * <p>The XML metadata document that includes information about an identity provider.</p>
   * @public
   */
  SAMLMetadataDocument?: string | undefined;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>A list of tags that are attached to the specified IAM SAML provider. The returned list of tags is sorted by tag key.
   *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the encryption setting for the SAML provider.</p>
   * @public
   */
  AssertionEncryptionMode?: AssertionEncryptionModeType | undefined;

  /**
   * <p>The private key metadata for the SAML provider.</p>
   * @public
   */
  PrivateKeyList?: SAMLPrivateKey[] | undefined;
}

/**
 * @public
 */
export interface GetServerCertificateRequest {
  /**
   * <p>The name of the server certificate you want to retrieve information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;
}

/**
 * <p>Contains information about a server certificate without its certificate body,
 *          certificate chain, and private key.</p>
 *          <p> This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html">UploadServerCertificate</a> and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html">ListServerCertificates</a> operations. </p>
 * @public
 */
export interface ServerCertificateMetadata {
  /**
   * <p> The path to the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The name that identifies the server certificate.</p>
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * <p> The stable and unique string identifying the server certificate. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  ServerCertificateId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the server certificate. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date when the server certificate was uploaded.</p>
   * @public
   */
  UploadDate?: Date | undefined;

  /**
   * <p>The date on which the certificate is set to expire.</p>
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * <p>Contains information about a server certificate.</p>
 *          <p> This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html">GetServerCertificate</a>
 *          operation. </p>
 * @public
 */
export interface ServerCertificate {
  /**
   * <p>The meta information of the server certificate, such as its name, path, ID, and
   *          ARN.</p>
   * @public
   */
  ServerCertificateMetadata: ServerCertificateMetadata | undefined;

  /**
   * <p>The contents of the public key certificate.</p>
   * @public
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the public key certificate chain.</p>
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * <p>A list of tags that are attached to the server certificate. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
   *       <i>IAM User Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html">GetServerCertificate</a>
 *       request. </p>
 * @public
 */
export interface GetServerCertificateResponse {
  /**
   * <p>A structure containing details about the server certificate.</p>
   * @public
   */
  ServerCertificate: ServerCertificate | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsRequest {
  /**
   * <p>The ID of the request generated by the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html">GenerateServiceLastAccessedDetails</a> operation. The <code>JobId</code>
   *             returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role
   *             within a session, or by the same user when used to call
   *                 <code>GetServiceLastAccessedDetail</code>.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains details about the most recent attempt to access an action within the
 *          service.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a> operation.</p>
 * @public
 */
export interface TrackedActionLastAccessed {
  /**
   * <p>The name of the tracked action to which access was attempted. Tracked actions are
   *          actions that report activity to IAM.</p>
   * @public
   */
  ActionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  LastAccessedEntity?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated entity most recently attempted to access the
   *          tracked service. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAccessedTime?: Date | undefined;

  /**
   * <p>The Region from which the authenticated entity (user or role) last attempted to access
   *          the tracked action. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAccessedRegion?: string | undefined;
}

/**
 * <p>Contains details about the most recent attempt to access the service.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html">GetServiceLastAccessedDetails</a> operation.</p>
 * @public
 */
export interface ServiceLastAccessed {
  /**
   * <p>The name of the service in which access was attempted.</p>
   * @public
   */
  ServiceName: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated entity most recently attempted to access the
   *          service. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAuthenticated?: Date | undefined;

  /**
   * <p>The namespace of the service in which access was attempted.</p>
   *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *             <i>Service Authorization Reference</i>. Choose the name of the service to
   *          view details for that service. In the first paragraph, find the service prefix. For
   *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
   *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
   *             Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>The ARN of the authenticated entity (user or role) that last attempted to access the
   *          service. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAuthenticatedEntity?: string | undefined;

  /**
   * <p>The Region from which the authenticated entity (user or role) last attempted to access
   *          the service. Amazon Web Services does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAuthenticatedRegion?: string | undefined;

  /**
   * <p>The total number of authenticated principals (root user, IAM users, or IAM roles) that
   *          have attempted to access the service.</p>
   *          <p>This field is null if no principals attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  TotalAuthenticatedEntities?: number | undefined;

  /**
   * <p>An object that contains details about the most recent attempt to access a tracked action
   *          within the service.</p>
   *          <p>This field is null if there no tracked actions or if the principal did not use the
   *          tracked actions within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>. This field is also null if the report was generated at the
   *          service level and not the action level. For more information, see the
   *             <code>Granularity</code> field in <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html">GenerateServiceLastAccessedDetails</a>.</p>
   * @public
   */
  TrackedActionsLastAccessed?: TrackedActionLastAccessed[] | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsResponse {
  /**
   * <p>The status of the job.</p>
   * @public
   */
  JobStatus: JobStatusType | undefined;

  /**
   * <p>The type of job. Service jobs return information about when each service was last
   *             accessed. Action jobs also include information about when tracked actions within the
   *             service were last accessed.</p>
   * @public
   */
  JobType?: AccessAdvisorUsageGranularityType | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *                 format</a>, when the report job was created.</p>
   * @public
   */
  JobCreationDate: Date | undefined;

  /**
   * <p> A <code>ServiceLastAccessed</code> object that contains details about the most recent
   *             attempt to access the service.</p>
   * @public
   */
  ServicesLastAccessed: ServiceLastAccessed[] | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *                 format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *             of <code>IN_PROGRESS</code>.</p>
   * @public
   */
  JobCompletionDate: Date | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   * @public
   */
  Error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  /**
   * <p>The ID of the request generated by the <code>GenerateServiceLastAccessedDetails</code>
   *             operation.</p>
   * @public
   */
  JobId: string | undefined;

  /**
   * <p>The service namespace for an Amazon Web Services service. Provide the service namespace to learn
   *             when the IAM entity last attempted to access the specified service.</p>
   *          <p>To learn the service namespace for a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *                 <i>IAM User Guide</i>. Choose the name of the service to view
   *             details for that service. In the first paragraph, find the service prefix. For example,
   *                 <code>(service prefix: a4b)</code>. For more information about service namespaces,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
   *                 service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyOwnerEntityType = {
  GROUP: "GROUP",
  ROLE: "ROLE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type PolicyOwnerEntityType = (typeof PolicyOwnerEntityType)[keyof typeof PolicyOwnerEntityType];

/**
 * <p>Contains details about the specified entity (user or role).</p>
 *          <p>This data type is an element of the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_EntityDetails.html">EntityDetails</a>
 *          object.</p>
 * @public
 */
export interface EntityInfo {
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the entity (user or role).</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of entity (user or role).</p>
   * @public
   */
  Type: PolicyOwnerEntityType | undefined;

  /**
   * <p>The identifier of the entity (user or role).</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The path to the entity (user or role). For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>. </p>
   * @public
   */
  Path?: string | undefined;
}

/**
 * <p>An object that contains details about when the IAM entities (users or roles) were last
 *          used in an attempt to access the specified Amazon Web Services service.</p>
 *          <p>This data type is a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html">GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
 * @public
 */
export interface EntityDetails {
  /**
   * <p>The <code>EntityInfo</code> object that contains details about the entity (user or
   *          role).</p>
   * @public
   */
  EntityInfo: EntityInfo | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the authenticated entity last attempted to access Amazon Web Services. Amazon Web Services does
   *          not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">tracking period</a>.</p>
   * @public
   */
  LastAuthenticated?: Date | undefined;
}

/**
 * @public
 */
export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  /**
   * <p>The status of the job.</p>
   * @public
   */
  JobStatus: JobStatusType | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *                 format</a>, when the report job was created.</p>
   * @public
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *                 format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *             of <code>IN_PROGRESS</code>.</p>
   * @public
   */
  JobCompletionDate: Date | undefined;

  /**
   * <p>An <code>EntityDetailsList</code> object that contains details about when an IAM
   *             entity (user or role) used group or policy permissions in an attempt to access the
   *             specified Amazon Web Services service.</p>
   * @public
   */
  EntityDetailsList: EntityDetails[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   * @public
   */
  Error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface GetServiceLinkedRoleDeletionStatusRequest {
  /**
   * <p>The deletion task identifier. This identifier is returned by the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html">DeleteServiceLinkedRole</a> operation in the format
   *                 <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   * @public
   */
  DeletionTaskId: string | undefined;
}

/**
 * <p>An object that contains details about how a service-linked role is used, if that
 *          information is returned by the service.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html">GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 * @public
 */
export interface RoleUsageType {
  /**
   * <p>The name of the Region where the service-linked role is being used.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The name of the resource that is using the service-linked role.</p>
   * @public
   */
  Resources?: string[] | undefined;
}

/**
 * <p>The reason that the service-linked role deletion failed.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html">GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 * @public
 */
export interface DeletionTaskFailureReasonType {
  /**
   * <p>A short description of the reason that the service-linked role deletion failed.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>A list of objects that contains details about the service-linked role deletion failure,
   *          if that information is returned by the service. If the service-linked role has active
   *          sessions or if any resources that were used by the role have not been deleted from the
   *          linked service, the role can't be deleted. This parameter includes a list of the resources
   *          that are associated with the role and the Region in which the resources are being
   *          used.</p>
   * @public
   */
  RoleUsageList?: RoleUsageType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeletionTaskStatusType = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DeletionTaskStatusType = (typeof DeletionTaskStatusType)[keyof typeof DeletionTaskStatusType];

/**
 * @public
 */
export interface GetServiceLinkedRoleDeletionStatusResponse {
  /**
   * <p>The status of the deletion.</p>
   * @public
   */
  Status: DeletionTaskStatusType | undefined;

  /**
   * <p>An object that contains details about the reason the deletion failed.</p>
   * @public
   */
  Reason?: DeletionTaskFailureReasonType | undefined;
}

/**
 * @public
 * @enum
 */
export const EncodingType = {
  PEM: "PEM",
  SSH: "SSH",
} as const;

/**
 * @public
 */
export type EncodingType = (typeof EncodingType)[keyof typeof EncodingType];

/**
 * @public
 */
export interface GetSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>Specifies the public key encoding format to use in the response. To retrieve the
   *             public key in ssh-rsa format, use <code>SSH</code>. To retrieve the public key in PEM
   *             format, use <code>PEM</code>.</p>
   * @public
   */
  Encoding: EncodingType | undefined;
}

/**
 * <p>Contains information about an SSH public key.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html">GetSSHPublicKey</a> and
 *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html">UploadSSHPublicKey</a> operations. </p>
 * @public
 */
export interface SSHPublicKey {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The MD5 message digest of the SSH public key.</p>
   * @public
   */
  Fingerprint: string | undefined;

  /**
   * <p>The SSH public key.</p>
   * @public
   */
  SSHPublicKeyBody: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be
   *          used.</p>
   * @public
   */
  Status: StatusType | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   * @public
   */
  UploadDate?: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html">GetSSHPublicKey</a>
 *       request.</p>
 * @public
 */
export interface GetSSHPublicKeyResponse {
  /**
   * <p>A structure containing details about the SSH public key.</p>
   * @public
   */
  SSHPublicKey?: SSHPublicKey | undefined;
}

/**
 * <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 * @public
 */
export class UnrecognizedPublicKeyEncodingException extends __BaseException {
  readonly name: "UnrecognizedPublicKeyEncodingException" = "UnrecognizedPublicKeyEncodingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnrecognizedPublicKeyEncodingException, __BaseException>) {
    super({
      name: "UnrecognizedPublicKeyEncodingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnrecognizedPublicKeyEncodingException.prototype);
  }
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * <p>The name of the user to get information about.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to the user making the
   *             request. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html">GetUser</a> request. </p>
 * @public
 */
export interface GetUserResponse {
  /**
   * <p>A structure containing details about the IAM user.</p>
   *          <important>
   *             <p>Due to a service issue, password last used data does not include password use from
   *                 May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html">last sign-in</a> dates shown in the IAM console and password last used
   *                 dates in the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">IAM credential
   *                     report</a>, and returned by this operation. If users signed in during the
   *                 affected time, the password last used date that is returned is the date the user
   *                 last signed in before May 3, 2018. For users that signed in after May 23, 2018 14:08
   *                 PDT, the returned password last used date is accurate.</p>
   *             <p>You can use password last used information to identify unused credentials for
   *                 deletion. For example, you might delete users who did not sign in to Amazon Web Services in the
   *                 last 90 days. In cases like this, we recommend that you adjust your evaluation
   *                 window to include dates after May 23, 2018. Alternatively, if your users use access
   *                 keys to access Amazon Web Services programmatically you can refer to access key last used
   *                 information because it is accurate for all dates. </p>
   *          </important>
   * @public
   */
  User: User | undefined;
}

/**
 * @public
 */
export interface GetUserPolicyRequest {
  /**
   * <p>The name of the user who the policy is associated with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html">GetUserPolicy</a> request. </p>
 * @public
 */
export interface GetUserPolicyResponse {
  /**
   * <p>The user the policy is associated with.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using CloudFormation
   *             templates can be formatted in YAML. CloudFormation always converts a YAML policy to JSON format
   *             before submitting it to IAM.</p>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface ListAccessKeysRequest {
  /**
   * <p>The name of the user.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html">ListAccessKeys</a> request.
 *     </p>
 * @public
 */
export interface ListAccessKeysResponse {
  /**
   * <p>A list of objects containing metadata about the access keys.</p>
   * @public
   */
  AccessKeyMetadata: AccessKeyMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAliasesRequest {
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html">ListAccountAliases</a>
 *       request. </p>
 * @public
 */
export interface ListAccountAliasesResponse {
  /**
   * <p>A list of aliases associated with the account. Amazon Web Services supports only one alias per
   *             account.</p>
   * @public
   */
  AccountAliases: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedGroupPoliciesRequest {
  /**
   * <p>The name (friendly name, not ARN) of the group to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *             included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html">ListAttachedGroupPolicies</a> request. </p>
 * @public
 */
export interface ListAttachedGroupPoliciesResponse {
  /**
   * <p>A list of the attached policies.</p>
   * @public
   */
  AttachedPolicies?: AttachedPolicy[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedRolePoliciesRequest {
  /**
   * <p>The name (friendly name, not ARN) of the role to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *             included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html">ListAttachedRolePolicies</a> request. </p>
 * @public
 */
export interface ListAttachedRolePoliciesResponse {
  /**
   * <p>A list of the attached policies.</p>
   * @public
   */
  AttachedPolicies?: AttachedPolicy[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedUserPoliciesRequest {
  /**
   * <p>The name (friendly name, not ARN) of the user to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *             included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html">ListAttachedUserPolicies</a> request. </p>
 * @public
 */
export interface ListAttachedUserPoliciesResponse {
  /**
   * <p>A list of the attached policies.</p>
   * @public
   */
  AttachedPolicies?: AttachedPolicy[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyUsageType = {
  PermissionsBoundary: "PermissionsBoundary",
  PermissionsPolicy: "PermissionsPolicy",
} as const;

/**
 * @public
 */
export type PolicyUsageType = (typeof PolicyUsageType)[keyof typeof PolicyUsageType];

/**
 * @public
 */
export interface ListEntitiesForPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *             versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The entity type to use for filtering the results.</p>
   *          <p>For example, when <code>EntityFilter</code> is <code>Role</code>, only the roles that
   *             are attached to the specified policy are returned. This parameter is optional. If it is
   *             not included, all attached entities (users, groups, and roles) are returned. The
   *             argument for this parameter must be one of the valid values listed below.</p>
   * @public
   */
  EntityFilter?: EntityType | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *             included, it defaults to a slash (/), listing all entities.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>The policy usage method to use for filtering the results.</p>
   *          <p>To list only permissions policies,
   *                 set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only
   *             the policies used to set permissions boundaries, set the value
   *                 to <code>PermissionsBoundary</code>.</p>
   *          <p>This parameter is optional. If it is not included, all policies are returned. </p>
   * @public
   */
  PolicyUsageFilter?: PolicyUsageType | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about a group that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html">ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface PolicyGroup {
  /**
   * <p>The name (friendly name, not ARN) identifying the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * <p>Contains information about a role that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html">ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface PolicyRole {
  /**
   * <p>The name (friendly name, not ARN) identifying the role.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  RoleId?: string | undefined;
}

/**
 * <p>Contains information about a user that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html">ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *             policies</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export interface PolicyUser {
  /**
   * <p>The name (friendly name, not ARN) identifying the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             identifiers</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html">ListEntitiesForPolicy</a>
 *       request. </p>
 * @public
 */
export interface ListEntitiesForPolicyResponse {
  /**
   * <p>A list of IAM groups that the policy is attached to.</p>
   * @public
   */
  PolicyGroups?: PolicyGroup[] | undefined;

  /**
   * <p>A list of IAM users that the policy is attached to.</p>
   * @public
   */
  PolicyUsers?: PolicyUser[] | undefined;

  /**
   * <p>A list of IAM roles that the policy is attached to.</p>
   * @public
   */
  PolicyRoles?: PolicyRole[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupPoliciesRequest {
  /**
   * <p>The name of the group to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html">ListGroupPolicies</a> request.
 *     </p>
 * @public
 */
export interface ListGroupPoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *                 <code>/division_abc/subdivision_xyz/</code> gets all groups whose path starts with
   *                 <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *             all groups. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html">ListGroups</a> request. </p>
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>A list of groups.</p>
   * @public
   */
  Groups: Group[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsForUserRequest {
  /**
   * <p>The name of the user to list groups for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html">ListGroupsForUser</a> request.
 *     </p>
 * @public
 */
export interface ListGroupsForUserResponse {
  /**
   * <p>A list of groups.</p>
   * @public
   */
  Groups: Group[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfilesRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *                 <code>/application_abc/component_xyz/</code> gets all instance profiles whose path
   *             starts with <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *             all instance profiles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html">ListInstanceProfiles</a>
 *       request. </p>
 * @public
 */
export interface ListInstanceProfilesResponse {
  /**
   * <p>A list of instance profiles.</p>
   * @public
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfilesForRoleRequest {
  /**
   * <p>The name of the role to list instance profiles for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html">ListInstanceProfilesForRole</a> request. </p>
 * @public
 */
export interface ListInstanceProfilesForRoleResponse {
  /**
   * <p>A list of instance profiles.</p>
   * @public
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfileTagsRequest {
  /**
   * <p>The name of the IAM instance profile whose tags you want to see.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListInstanceProfileTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the IAM instance profile. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListMFADevicesRequest {
  /**
   * <p>The name of the user whose MFA devices you want to list.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about an MFA device.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html">ListMFADevices</a>
 *          operation.</p>
 * @public
 */
export interface MFADevice {
  /**
   * <p>The user with whom the MFA device is associated.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>The date when the MFA device was enabled for the user.</p>
   * @public
   */
  EnableDate: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html">ListMFADevices</a> request.
 *     </p>
 * @public
 */
export interface ListMFADevicesResponse {
  /**
   * <p>A list of MFA devices.</p>
   * @public
   */
  MFADevices: MFADevice[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListMFADeviceTagsRequest {
  /**
   * <p>The unique identifier for the IAM virtual MFA device whose tags you want to see.
   *       For virtual MFA devices, the serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListMFADeviceTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the virtual MFA device. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListOpenIDConnectProvidersRequest {}

/**
 * <p>Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.</p>
 * @public
 */
export interface OpenIDConnectProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html">ListOpenIDConnectProviders</a> request. </p>
 * @public
 */
export interface ListOpenIDConnectProvidersResponse {
  /**
   * <p>The list of IAM OIDC provider resource objects defined in the Amazon Web Services account.</p>
   * @public
   */
  OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[] | undefined;
}

/**
 * @public
 */
export interface ListOpenIDConnectProviderTagsRequest {
  /**
   * <p>The ARN of the OpenID Connect (OIDC) identity provider whose tags you want to
   *       see.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListOpenIDConnectProviderTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the OpenID Connect (OIDC) identity
   *       provider. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationsFeaturesRequest {}

/**
 * @public
 */
export interface ListOrganizationsFeaturesResponse {
  /**
   * <p>The unique identifier (ID) of an organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>Specifies the features that are currently available in your organization.</p>
   * @public
   */
  EnabledFeatures?: FeatureType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyScopeType = {
  AWS: "AWS",
  All: "All",
  Local: "Local",
} as const;

/**
 * @public
 */
export type PolicyScopeType = (typeof PolicyScopeType)[keyof typeof PolicyScopeType];

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>The scope to use for filtering the results.</p>
   *          <p>To list only Amazon Web Services managed policies, set <code>Scope</code> to <code>AWS</code>. To
   *             list only the customer managed policies in your Amazon Web Services account, set <code>Scope</code> to
   *                 <code>Local</code>.</p>
   *          <p>This parameter is optional. If it is not included, or if it is set to
   *             <code>All</code>, all policies are returned.</p>
   * @public
   */
  Scope?: PolicyScopeType | undefined;

  /**
   * <p>A flag to filter the results to only the attached policies.</p>
   *          <p>When <code>OnlyAttached</code> is <code>true</code>, the returned list contains only
   *             the policies that are attached to an IAM user, group, or role. When
   *                 <code>OnlyAttached</code> is <code>false</code>, or when the parameter is not
   *             included, all policies are returned.</p>
   * @public
   */
  OnlyAttached?: boolean | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *             included, it defaults to a slash (/), listing all policies. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>The policy usage method to use for filtering the results.</p>
   *          <p>To list only permissions policies,
   *                 set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only
   *             the policies used to set permissions boundaries, set the value
   *                 to <code>PermissionsBoundary</code>.</p>
   *          <p>This parameter is optional. If it is not included, all policies are returned. </p>
   * @public
   */
  PolicyUsageFilter?: PolicyUsageType | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html">ListPolicies</a> request. </p>
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>A list of policies.</p>
   * @public
   */
  Policies?: Policy[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesGrantingServiceAccessRequest {
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The ARN of the IAM identity (user, group, or role) whose policies you want to
   *             list.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The service namespace for the Amazon Web Services services whose policies you want to list.</p>
   *          <p>To learn the service namespace for a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *                 <i>IAM User Guide</i>. Choose the name of the service to view
   *             details for that service. In the first paragraph, find the service prefix. For example,
   *                 <code>(service prefix: a4b)</code>. For more information about service namespaces,
   *             see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
   *                 service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ServiceNamespaces: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyType = {
  INLINE: "INLINE",
  MANAGED: "MANAGED",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is an element of the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccessEntry.html">ListPoliciesGrantingServiceAccessEntry</a> object.</p>
 * @public
 */
export interface PolicyGrantingServiceAccess {
  /**
   * <p>The policy name.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
   *             policies and inline policies</a> in the
   *          <i>IAM User Guide</i>.</p>
   * @public
   */
  PolicyType: PolicyType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *          the <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>The type of entity (user or role) that used the policy to access the service to which
   *          the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  EntityType?: PolicyOwnerEntityType | undefined;

  /**
   * <p>The name of the entity (user or role) to which the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   * @public
   */
  EntityName?: string | undefined;
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html">ListPoliciesGrantingServiceAccess</a> operation.</p>
 * @public
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  /**
   * <p>The namespace of the service that was accessed.</p>
   *          <p>To learn the service namespace of a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the
   *             <i>Service Authorization Reference</i>. Choose the name of the service to
   *          view details for that service. In the first paragraph, find the service prefix. For
   *          example, <code>(service prefix: a4b)</code>. For more information about service namespaces,
   *          see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services
   *             service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ServiceNamespace?: string | undefined;

  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the
   *          policy.</p>
   * @public
   */
  Policies?: PolicyGrantingServiceAccess[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesGrantingServiceAccessResponse {
  /**
   * <p>A <code>ListPoliciesGrantingServiceAccess</code> object that contains details about
   *             the permissions policies attached to the specified identity (user, group, or
   *             role).</p>
   * @public
   */
  PoliciesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were
   *             truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *             request parameter to retrieve more items. We recommend that you check
   *                 <code>IsTruncated</code> after every call to ensure that you receive all your
   *             results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyTagsRequest {
  /**
   * <p>The ARN of the IAM customer managed policy whose tags you want to see.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListPolicyTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the IAM customer managed policy.
   *       Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *             versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html">ListPolicyVersions</a>
 *       request. </p>
 * @public
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>A list of policy versions.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  Versions?: PolicyVersion[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListRolePoliciesRequest {
  /**
   * <p>The name of the role to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html">ListRolePolicies</a> request.
 *     </p>
 * @public
 */
export interface ListRolePoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   * @public
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListRolesRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *                 <code>/application_abc/component_xyz/</code> gets all roles whose path starts with
   *                 <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *             all roles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html">ListRoles</a> request. </p>
 * @public
 */
export interface ListRolesResponse {
  /**
   * <p>A list of roles.</p>
   * @public
   */
  Roles: Role[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListRoleTagsRequest {
  /**
   * <p>The name of the IAM role for which you want to see the list of tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListRoleTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the role. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListSAMLProvidersRequest {}

/**
 * <p>Contains the list of SAML providers for this account.</p>
 * @public
 */
export interface SAMLProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   * @public
   */
  ValidUntil?: Date | undefined;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html">ListSAMLProviders</a> request.
 *     </p>
 * @public
 */
export interface ListSAMLProvidersResponse {
  /**
   * <p>The list of SAML provider resource objects defined in IAM for this Amazon Web Services
   *             account.</p>
   * @public
   */
  SAMLProviderList?: SAMLProviderListEntry[] | undefined;
}

/**
 * @public
 */
export interface ListSAMLProviderTagsRequest {
  /**
   * <p>The ARN of the Security Assertion Markup Language (SAML) identity provider whose tags
   *       you want to see.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SAMLProviderArn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListSAMLProviderTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the Security Assertion Markup Language
   *       (SAML) identity provider. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListServerCertificatesRequest {
  /**
   * <p> The path prefix for filtering the results. For example:
   *                 <code>/company/servercerts</code> would get all server certificates for which the
   *             path starts with <code>/company/servercerts</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *             all server certificates. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html">ListServerCertificates</a>
 *       request. </p>
 * @public
 */
export interface ListServerCertificatesResponse {
  /**
   * <p>A list of server certificates.</p>
   * @public
   */
  ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListServerCertificateTagsRequest {
  /**
   * <p>The name of the IAM server certificate whose tags you want to see.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  ServerCertificateName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListServerCertificateTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the IAM server certificate.
   *       Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceSpecificCredentialsRequest {
  /**
   * <p>The name of the user whose service-specific credentials you want information about. If
   *             this value is not specified, then the operation assumes the user whose credentials are
   *             used to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Filters the returned results to only those for the specified Amazon Web Services service. If not
   *             specified, then Amazon Web Services returns service-specific credentials for all services.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>A flag indicating whether to list service specific credentials for all users. This
   *             parameter cannot be specified together with UserName. When true, returns all credentials
   *             associated with the specified service.</p>
   * @public
   */
  AllUsers?: boolean | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after you receive a response
   *             indicating that the results are truncated. Set it to the value of the Marker from the
   *             response that you received to indicate where the next call should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the maximum number of items you want
   *             in the response. If additional items exist beyond the maximum you specify, the
   *             IsTruncated response element is true.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains additional details about a service-specific credential.</p>
 * @public
 */
export interface ServiceSpecificCredentialMetadata {
  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   * @public
   */
  Status: StatusType | undefined;

  /**
   * <p>The generated user name for the service-specific credential.</p>
   * @public
   */
  ServiceUserName?: string | undefined;

  /**
   * <p>For Bedrock API keys, this is the public portion of the credential that includes the IAM
   *          user name and a suffix containing version and creation information.</p>
   * @public
   */
  ServiceCredentialAlias?: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   * @public
   */
  CreateDate: Date | undefined;

  /**
   * <p>The date and time when the service specific credential expires. This field is only
   *          present for Bedrock API keys that were created with an expiration period.</p>
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   * @public
   */
  ServiceName: string | undefined;
}

/**
 * @public
 */
export interface ListServiceSpecificCredentialsResponse {
  /**
   * <p>A list of structures that each contain details about a service-specific
   *             credential.</p>
   * @public
   */
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[] | undefined;

  /**
   * <p>When IsTruncated is true, this element is present and contains the value to use for
   *             the Marker parameter in a subsequent pagination request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were
   *             truncated, you can make a subsequent pagination request using the Marker request
   *             parameter to retrieve more items.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSigningCertificatesRequest {
  /**
   * <p>The name of the IAM user whose signing certificates you want to examine.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about an X.509 signing certificate.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html">UploadSigningCertificate</a> and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html">ListSigningCertificates</a> operations. </p>
 * @public
 */
export interface SigningCertificate {
  /**
   * <p>The name of the user the signing certificate is associated with.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the signing certificate.</p>
   * @public
   */
  CertificateId: string | undefined;

  /**
   * <p>The contents of the signing certificate.</p>
   * @public
   */
  CertificateBody: string | undefined;

  /**
   * <p>The status of the signing certificate. <code>Active</code> means that the key is valid
   *          for API calls, while <code>Inactive</code> means it is not.</p>
   * @public
   */
  Status: StatusType | undefined;

  /**
   * <p>The date when the signing certificate was uploaded.</p>
   * @public
   */
  UploadDate?: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html">ListSigningCertificates</a> request. </p>
 * @public
 */
export interface ListSigningCertificatesResponse {
  /**
   * <p>A list of the user's signing certificate information.</p>
   * @public
   */
  Certificates: SigningCertificate[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListSSHPublicKeysRequest {
  /**
   * <p>The name of the IAM user to list SSH public keys for. If none is specified, the
   *                 <code>UserName</code> field is determined implicitly based on the Amazon Web Services access key
   *             used to sign the request.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about an SSH public key, without the key's body or
 *          fingerprint.</p>
 *          <p>This data type is used as a response element in the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html">ListSSHPublicKeys</a>
 *          operation.</p>
 * @public
 */
export interface SSHPublicKeyMetadata {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   * @public
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an CodeCommit repository. <code>Inactive</code> means that the key cannot be
   *          used.</p>
   * @public
   */
  Status: StatusType | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   * @public
   */
  UploadDate: Date | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html">ListSSHPublicKeys</a>
 *       request.</p>
 * @public
 */
export interface ListSSHPublicKeysResponse {
  /**
   * <p>A list of the SSH public keys assigned to IAM user.</p>
   * @public
   */
  SSHPublicKeys?: SSHPublicKeyMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListUserPoliciesRequest {
  /**
   * <p>The name of the user to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html">ListUserPolicies</a> request.
 *     </p>
 * @public
 */
export interface ListUserPoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   * @public
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p> The path prefix for filtering the results. For example:
   *                 <code>/division_abc/subdivision_xyz/</code>, which would get all user names whose
   *             path starts with <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *             all user names. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   * @public
   */
  PathPrefix?: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html">ListUsers</a> request. </p>
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>A list of users.</p>
   * @public
   */
  Users: User[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListUserTagsRequest {
  /**
   * <p>The name of the IAM user whose tags you want to see.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListUserTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the user. Each tag consists of a key name and an associated value. If no tags are attached to the specified resource, the response contains an empty list.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListVirtualMFADevicesRequest {
  /**
   * <p> The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list.
   *             If you do not specify an <code>AssignmentStatus</code>, the operation defaults to
   *                 <code>Any</code>, which lists both assigned and unassigned virtual MFA
   *             devices.,</p>
   * @public
   */
  AssignmentStatus?: AssignmentStatusType | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains the response to a successful <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html">ListVirtualMFADevices</a>
 *       request. </p>
 * @public
 */
export interface ListVirtualMFADevicesResponse {
  /**
   * <p> The list of virtual MFA devices in the current account that match the
   *                 <code>AssignmentStatus</code> value that was passed in the request.</p>
   * @public
   */
  VirtualMFADevices: VirtualMFADevice[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and
   *             contains the value to use for the <code>Marker</code> parameter in a subsequent
   *             pagination request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface PutGroupPolicyRequest {
  /**
   * <p>The name of the group to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation templates
   *             formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always
   *             converts a YAML policy to JSON format before submitting it to IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutRolePermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role for which you want to set the
   *             permissions boundary.</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The ARN of the managed policy that is used to set the permissions boundary for the
   *             role.</p>
   *          <p>A permissions boundary policy defines the maximum permissions that identity-based
   *             policies can grant to an entity, but does not grant permissions. Permissions boundaries
   *             do not define the maximum permissions that a resource-based policy can grant to an
   *             entity. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries
   *                 for IAM entities</a> in the <i>IAM User Guide</i>.</p>
   *          <p>For more information about policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types">Policy types
   *             </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary: string | undefined;
}

/**
 * @public
 */
export interface PutRolePolicyRequest {
  /**
   * <p>The name of the role to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutUserPermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user for which you want to set the
   *             permissions boundary.</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The ARN of the managed policy that is used to set the permissions boundary for the
   *             user.</p>
   *          <p>A permissions boundary policy defines the maximum permissions that identity-based
   *             policies can grant to an entity, but does not grant permissions. Permissions boundaries
   *             do not define the maximum permissions that a resource-based policy can grant to an
   *             entity. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries
   *                 for IAM entities</a> in the <i>IAM User Guide</i>.</p>
   *          <p>For more information about policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types">Policy types
   *             </a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  PermissionsBoundary: string | undefined;
}

/**
 * @public
 */
export interface PutUserPolicyRequest {
  /**
   * <p>The name of the user to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for CloudFormation
   *             templates formatted in YAML, you can provide the policy in JSON or YAML format. CloudFormation always converts a YAML policy to JSON format before submitting it to
   *             IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the
   *             client ID from. You can get a list of OIDC provider ARNs by using the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html">ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>The client ID (also known as audience) to remove from the IAM OIDC provider
   *             resource. For more information about client IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html">CreateOpenIDConnectProvider</a>.</p>
   * @public
   */
  ClientID: string | undefined;
}

/**
 * @public
 */
export interface RemoveRoleFromInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  RoleName: string | undefined;
}

/**
 * @public
 */
export interface RemoveUserFromGroupRequest {
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;
}

/**
 * @public
 */
export interface ResetServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *             value is not specified, then the operation assumes the user whose credentials are used
   *             to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   * @public
   */
  ServiceSpecificCredentialId: string | undefined;
}

/**
 * @public
 */
export interface ResetServiceSpecificCredentialResponse {
  /**
   * <p>A structure with details about the updated service-specific credential, including the
   *             new password.</p>
   *          <important>
   *             <p>This is the <b>only</b> time that you can access the
   *                 password. You cannot recover the password later, but you can reset it again.</p>
   *          </important>
   * @public
   */
  ServiceSpecificCredential?: ServiceSpecificCredential | undefined;
}

/**
 * @public
 */
export interface ResyncMFADeviceRequest {
  /**
   * <p>The name of the user whose MFA device you want to resynchronize.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  UserName: string | undefined;

  /**
   * <p>Serial number that uniquely identifies the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   * @public
   */
  SerialNumber: string | undefined;

  /**
   * <p>An authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   * @public
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   * @public
   */
  AuthenticationCode2: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy whose default version you want to
   *             set.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  PolicyArn: string | undefined;

  /**
   * <p>The version of the policy to set as the default (operative) version.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
   *                 policies</a> in the <i>IAM User Guide</i>.</p>
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GlobalEndpointTokenVersion = {
  v1Token: "v1Token",
  v2Token: "v2Token",
} as const;

/**
 * @public
 */
export type GlobalEndpointTokenVersion = (typeof GlobalEndpointTokenVersion)[keyof typeof GlobalEndpointTokenVersion];

/**
 * @public
 */
export interface SetSecurityTokenServicePreferencesRequest {
  /**
   * <p>The version of the global endpoint token. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in
   *             manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid
   *             in all Regions. However, version 2 tokens are longer and might affect systems where you
   *             temporarily store tokens.</p>
   *          <p>For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 deactivating STS in an Amazon Web Services Region</a> in the
   *                 <i>IAM User Guide</i>.</p>
   * @public
   */
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion | undefined;
}

/**
 * <p>The request failed because a provided policy could not be successfully evaluated. An
 *       additional detailed message indicates the source of the failure.</p>
 * @public
 */
export class PolicyEvaluationException extends __BaseException {
  readonly name: "PolicyEvaluationException" = "PolicyEvaluationException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyEvaluationException, __BaseException>) {
    super({
      name: "PolicyEvaluationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyEvaluationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ContextKeyTypeEnum = {
  BINARY: "binary",
  BINARY_LIST: "binaryList",
  BOOLEAN: "boolean",
  BOOLEAN_LIST: "booleanList",
  DATE: "date",
  DATE_LIST: "dateList",
  IP: "ip",
  IP_LIST: "ipList",
  NUMERIC: "numeric",
  NUMERIC_LIST: "numericList",
  STRING: "string",
  STRING_LIST: "stringList",
} as const;

/**
 * @public
 */
export type ContextKeyTypeEnum = (typeof ContextKeyTypeEnum)[keyof typeof ContextKeyTypeEnum];

/**
 * <p>Contains information about a condition context key. It includes the name of the key and
 *          specifies the value (or values, if the context key supports multiple values) to use in the
 *          simulation. This information is used when evaluating the <code>Condition</code> elements of
 *          the input policies.</p>
 *          <p>This data type is used as an input parameter to <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html">SimulateCustomPolicy</a>
 *          and <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html">SimulatePrincipalPolicy</a>.</p>
 * @public
 */
export interface ContextEntry {
  /**
   * <p>The full name of a condition context key, including the service prefix. For example,
   *             <code>aws:SourceIp</code> or <code>s3:VersionId</code>.</p>
   * @public
   */
  ContextKeyName?: string | undefined;

  /**
   * <p>The value (or values, if the condition context key supports multiple values) to provide
   *          to the simulation when the key is referenced by a <code>Condition</code> element in an
   *          input policy.</p>
   * @public
   */
  ContextKeyValues?: string[] | undefined;

  /**
   * <p>The data type of the value (or values) specified in the <code>ContextKeyValues</code>
   *          parameter.</p>
   * @public
   */
  ContextKeyType?: ContextKeyTypeEnum | undefined;
}

/**
 * @public
 */
export interface SimulateCustomPolicyRequest {
  /**
   * <p>A list of policy documents to include in the simulation. Each document is specified as
   *             a string containing the complete, valid JSON text of an IAM policy. Do not include any
   *             resource-based policies in this parameter. Any resource-based policy must be submitted
   *             with the <code>ResourcePolicy</code> parameter. The policies cannot be "scope-down"
   *             policies, such as you could include in a call to <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetFederationToken.html">GetFederationToken</a> or one of
   *             the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AssumeRole.html">AssumeRole</a> API operations. In other words, do not use policies designed to
   *             restrict what a user can do while using the temporary credentials.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyInputList: string[] | undefined;

  /**
   * <p>The IAM permissions boundary policy to simulate. The permissions boundary sets the
   *             maximum permissions that an IAM entity can have. You can input only one permissions
   *             boundary when you pass a policy to this operation. For more information about
   *             permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM
   *                 entities</a> in the <i>IAM User Guide</i>. The policy input is
   *             specified as a string that contains the complete, valid JSON text of a permissions
   *             boundary policy.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   * @public
   */
  PermissionsBoundaryPolicyInputList?: string[] | undefined;

  /**
   * <p>A list of names of API operations to evaluate in the simulation. Each operation is
   *             evaluated against each resource. Each operation must include the service identifier,
   *             such as <code>iam:CreateUser</code>. This operation does not support using wildcards (*)
   *             in an action name.</p>
   * @public
   */
  ActionNames: string[] | undefined;

  /**
   * <p>A list of ARNs of Amazon Web Services resources to include in the simulation. If this parameter is
   *             not provided, then the value defaults to <code>*</code> (all resources). Each API in the
   *                 <code>ActionNames</code> parameter is evaluated for each resource in this list. The
   *             simulation determines the access result (allowed or denied) of each combination and
   *             reports it in the response. You can simulate resources that don't exist in your
   *             account.</p>
   *          <p>The simulation does not automatically retrieve policies for the specified resources.
   *             If you want to include a resource policy in the simulation, then you must include the
   *             policy as a string in the <code>ResourcePolicy</code> parameter.</p>
   *          <p>If you include a <code>ResourcePolicy</code>, then it must be applicable to all of the
   *             resources included in the simulation or you receive an invalid input error.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *          <note>
   *             <p>Simulation of resource-based policies isn't supported for IAM roles.</p>
   *          </note>
   * @public
   */
  ResourceArns?: string[] | undefined;

  /**
   * <p>A resource-based policy to include in the simulation provided as a string. Each
   *             resource in the simulation is treated as if it had this policy attached. You can include
   *             only one resource-based policy in a simulation.</p>
   *          <p>The maximum length of the policy document that you can pass in this operation,
   *             including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length">IAM and STS character quotas</a>.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Simulation of resource-based policies isn't supported for IAM roles.</p>
   *          </note>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>An ARN representing the Amazon Web Services account ID that specifies the owner of any simulated
   *             resource that does not identify its owner in the resource ARN. Examples of resource ARNs
   *             include an S3 bucket or object. If <code>ResourceOwner</code> is specified, it is also
   *             used as the account owner of any <code>ResourcePolicy</code> included in the simulation.
   *             If the <code>ResourceOwner</code> parameter is not specified, then the owner of the
   *             resources and the resource policy defaults to the account of the identity provided in
   *                 <code>CallerArn</code>. This parameter is required only if you specify a
   *             resource-based policy and account that owns the resource is different from the account
   *             that owns the simulated calling user <code>CallerArn</code>.</p>
   *          <p>The ARN for an account uses the following syntax:
   *                     <code>arn:aws:iam::<i>AWS-account-ID</i>:root</code>. For example,
   *             to represent the account with the 112233445566 ID, use the following ARN:
   *                 <code>arn:aws:iam::112233445566-ID:root</code>. </p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The ARN of the IAM user that you want to use as the simulated caller of the API
   *             operations. <code>CallerArn</code> is required if you include a
   *                 <code>ResourcePolicy</code> so that the policy's <code>Principal</code> element has
   *             a value to use in evaluating the policy.</p>
   *          <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an
   *             assumed role, federated user, or a service principal.</p>
   * @public
   */
  CallerArn?: string | undefined;

  /**
   * <p>A list of context keys and corresponding values for the simulation to use. Whenever a
   *             context key is evaluated in one of the simulated IAM permissions policies, the
   *             corresponding value is supplied.</p>
   * @public
   */
  ContextEntries?: ContextEntry[] | undefined;

  /**
   * <p>Specifies the type of simulation to run. Different API operations that support
   *             resource-based policies require different combinations of resources. By specifying the
   *             type of simulation to run, you enable the policy simulator to enforce the presence of
   *             the required resources to ensure reliable simulation results. If your simulation does
   *             not match one of the following scenarios, then you can omit this parameter. The
   *             following list shows each of the supported scenario values and the resources that you
   *             must define to run the simulation.</p>
   *          <p>Each of the Amazon EC2 scenarios requires that you specify instance, image, and security
   *             group resources. If your scenario includes an EBS volume, then you must specify that
   *             volume as a resource. If the Amazon EC2 scenario includes VPC, then you must supply the
   *             network interface resource. If it includes an IP subnet, then you must specify the
   *             subnet resource. For more information on the Amazon EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported platforms</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore</b>
   *                </p>
   *                <p>instance, image, security group, network interface</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-InstanceStore-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS</b>
   *                </p>
   *                <p>instance, image, security group, network interface, volume</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EC2-VPC-EBS-Subnet</b>
   *                </p>
   *                <p>instance, image, security group, network interface, subnet, volume</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceHandlingOption?: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @internal
 */
export const AccessKeyFilterSensitiveLog = (obj: AccessKey): any => ({
  ...obj,
  ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChangePasswordRequestFilterSensitiveLog = (obj: ChangePasswordRequest): any => ({
  ...obj,
  ...(obj.OldPassword && { OldPassword: SENSITIVE_STRING }),
  ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAccessKeyResponseFilterSensitiveLog = (obj: CreateAccessKeyResponse): any => ({
  ...obj,
  ...(obj.AccessKey && { AccessKey: AccessKeyFilterSensitiveLog(obj.AccessKey) }),
});

/**
 * @internal
 */
export const CreateLoginProfileRequestFilterSensitiveLog = (obj: CreateLoginProfileRequest): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSAMLProviderRequestFilterSensitiveLog = (obj: CreateSAMLProviderRequest): any => ({
  ...obj,
  ...(obj.AddPrivateKey && { AddPrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ServiceSpecificCredentialFilterSensitiveLog = (obj: ServiceSpecificCredential): any => ({
  ...obj,
  ...(obj.ServicePassword && { ServicePassword: SENSITIVE_STRING }),
  ...(obj.ServiceCredentialSecret && { ServiceCredentialSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceSpecificCredentialResponseFilterSensitiveLog = (
  obj: CreateServiceSpecificCredentialResponse
): any => ({
  ...obj,
  ...(obj.ServiceSpecificCredential && {
    ServiceSpecificCredential: ServiceSpecificCredentialFilterSensitiveLog(obj.ServiceSpecificCredential),
  }),
});

/**
 * @internal
 */
export const VirtualMFADeviceFilterSensitiveLog = (obj: VirtualMFADevice): any => ({
  ...obj,
  ...(obj.Base32StringSeed && { Base32StringSeed: SENSITIVE_STRING }),
  ...(obj.QRCodePNG && { QRCodePNG: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateVirtualMFADeviceResponseFilterSensitiveLog = (obj: CreateVirtualMFADeviceResponse): any => ({
  ...obj,
  ...(obj.VirtualMFADevice && { VirtualMFADevice: VirtualMFADeviceFilterSensitiveLog(obj.VirtualMFADevice) }),
});

/**
 * @internal
 */
export const ListVirtualMFADevicesResponseFilterSensitiveLog = (obj: ListVirtualMFADevicesResponse): any => ({
  ...obj,
  ...(obj.VirtualMFADevices && {
    VirtualMFADevices: obj.VirtualMFADevices.map((item) => VirtualMFADeviceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ResetServiceSpecificCredentialResponseFilterSensitiveLog = (
  obj: ResetServiceSpecificCredentialResponse
): any => ({
  ...obj,
  ...(obj.ServiceSpecificCredential && {
    ServiceSpecificCredential: ServiceSpecificCredentialFilterSensitiveLog(obj.ServiceSpecificCredential),
  }),
});
